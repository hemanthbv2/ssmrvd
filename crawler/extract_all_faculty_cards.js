const puppeteer = require('puppeteer');
const fs = require('fs');

(async () => {
  console.log('🚀 Launching Full Extraction of Teaching Faculty & Staff from SSMRV...');
  const browser = await puppeteer.launch({
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  const page = await browser.newPage();
  await page.setUserAgent('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36');
  await page.setViewport({ width: 1400, height: 1200 });

  const allFaculty = {};

  try {
    // 1. First extract Non-Teaching Staff from https://www.ssmrv.edu.in/academics/non_teaching_staff/
    console.log('Fetching https://www.ssmrv.edu.in/academics/non_teaching_staff/ ...');
    await page.goto('https://www.ssmrv.edu.in/academics/non_teaching_staff/', { waitUntil: 'networkidle2', timeout: 45000 });
    
    const nonTeaching = await page.evaluate(() => {
      const items = [];
      // Look at all elements
      const elements = Array.from(document.querySelectorAll('.elementor-widget-heading, .elementor-heading-title, h2, h3, h4, p'));
      let currentSection = 'Administration';
      
      elements.forEach(el => {
        const txt = el.innerText.trim();
        if (['Library', 'Training and Placement', 'Administration', 'Group D Staff'].includes(txt)) {
          currentSection = txt;
        }
      });

      // Alternatively, let's grab the text structure directly
      const bodyText = document.body.innerText;
      return { bodyText };
    });

    // 2. Fetch Teaching Faculty from https://www.ssmrv.edu.in/academics/teaching_faculty/
    console.log('Fetching https://www.ssmrv.edu.in/academics/teaching_faculty/ ...');
    await page.goto('https://www.ssmrv.edu.in/academics/teaching_faculty/', { waitUntil: 'networkidle2', timeout: 45000 });

    // Look for category filter tabs
    const categories = ['All', 'B.Com', 'BCA', 'BBA (Regular)', 'BBA - AM', 'M.Com', 'Languages', 'Physical Education', 'Library'];
    
    for (const cat of categories) {
      console.log(`\n--- Inspecting tab: "${cat}" ---`);
      
      // Try to click the tab
      const clickedTab = await page.evaluate((categoryName) => {
        const tabs = Array.from(document.querySelectorAll('button, a, div, span'));
        const tab = tabs.find(t => t.innerText && t.innerText.trim() === categoryName);
        if (tab) {
          tab.click();
          return true;
        }
        return false;
      }, cat);

      await new Promise(r => setTimeout(r, 2000));

      // Click "Load More" repeatedly under this tab
      let loadCount = 0;
      while (loadCount < 10) {
        const clickedMore = await page.evaluate(() => {
          const btns = Array.from(document.querySelectorAll('button, a, .elementor-button, .load-more'));
          const btn = btns.find(b => b.innerText && b.innerText.toLowerCase().includes('load more'));
          if (btn && btn.offsetParent !== null) {
            btn.click();
            return true;
          }
          return false;
        });
        if (clickedMore) {
          loadCount++;
          await new Promise(r => setTimeout(r, 2000));
        } else {
          break;
        }
      }

      // Extract cards visible in DOM
      const cards = await page.evaluate((categoryName) => {
        const list = [];
        // Look for items with "Know More" or faculty card containers
        const cardEls = Array.from(document.querySelectorAll('.jet-listing-grid__item, .elementor-widget-container, .elementor-col-25, .elementor-col-33'));
        
        cardEls.forEach(card => {
          const text = card.innerText || '';
          if (text.includes('Know More') || text.includes('Professor') || text.includes('HOD') || text.includes('Lecturer')) {
            const link = card.querySelector('a[href*="teaching_faculty"]');
            const lines = text.split('\n').map(l => l.trim()).filter(l => l.length > 0 && l !== 'Know More');
            if (lines.length >= 1) {
              list.push({
                lines,
                href: link ? link.href : null,
                category: categoryName
              });
            }
          }
        });
        return list;
      }, cat);

      console.log(`Found ${cards.length} card elements under tab ${cat}`);
      cards.forEach(c => {
        const nameCandidate = c.lines[0];
        if (nameCandidate && nameCandidate.length > 2 && !nameCandidate.includes('Skip') && !nameCandidate.includes('SSMRV') && !nameCandidate.includes('Principal') && !nameCandidate.includes('Faculty')) {
          if (!allFaculty[nameCandidate]) {
            allFaculty[nameCandidate] = {
              name: nameCandidate,
              lines: c.lines,
              href: c.href,
              category: cat
            };
          }
        }
      });
    }

    console.log('\nTotal unique faculty extracted from live page:', Object.keys(allFaculty).length);
    fs.writeFileSync('crawler/live_scraped_faculty_cards.json', JSON.stringify(allFaculty, null, 2));
    console.log('Saved to crawler/live_scraped_faculty_cards.json');

  } catch (err) {
    console.error('Error during extraction:', err);
  } finally {
    await browser.close();
  }
})();
