const puppeteer = require('puppeteer');

(async () => {
  console.log('Connecting to https://www.ssmrv.edu.in/academics/teaching_faculty/ ...');
  const browser = await puppeteer.launch({
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  const page = await browser.newPage();
  await page.setUserAgent('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36');
  await page.setViewport({ width: 1400, height: 1000 });

  try {
    await page.goto('https://www.ssmrv.edu.in/academics/teaching_faculty/', { waitUntil: 'networkidle2', timeout: 45000 });
    console.log('Page loaded');

    // Check tabs or filter buttons
    const filterButtons = await page.evaluate(() => {
      const btns = Array.from(document.querySelectorAll('button, a, .elementor-tab-title, [data-filter]'));
      return btns.map(b => ({
        tag: b.tagName,
        text: b.innerText.trim(),
        className: b.className,
        dataFilter: b.getAttribute('data-filter')
      })).filter(b => b.text && b.text.length < 30);
    });
    console.log('Filter buttons / tabs found:', filterButtons.slice(0, 20));

    // Keep clicking "Load More" if present
    let loadMoreCount = 0;
    while (loadMoreCount < 20) {
      const loadMoreBtn = await page.evaluate(() => {
        const btns = Array.from(document.querySelectorAll('button, a, .elementor-button, .jet-engine-load-more__btn, .load-more'));
        const btn = btns.find(b => b.innerText && b.innerText.toLowerCase().includes('load more'));
        if (btn && btn.offsetParent !== null) {
          btn.click();
          return true;
        }
        return false;
      });
      if (loadMoreBtn) {
        loadMoreCount++;
        console.log(`Clicked "Load More" (${loadMoreCount})...`);
        await new Promise(r => setTimeout(r, 2500));
      } else {
        break;
      }
    }

    // Now extract all faculty cards
    const facultyCards = await page.evaluate(() => {
      // Look for cards, headings, links
      const results = [];
      const headings = Array.from(document.querySelectorAll('h2, h3, h4, h5, .elementor-heading-title, .jet-listing-dynamic-field__content'));
      
      // Let's also find all links to /academics/teaching_faculty/
      const links = Array.from(document.querySelectorAll('a[href*="teaching_faculty"]'));
      const profileLinks = links.map(l => ({
        text: l.innerText.trim(),
        href: l.href
      })).filter(l => l.href !== 'https://www.ssmrv.edu.in/academics/teaching_faculty/');

      return {
        profileLinks,
        headingTexts: headings.map(h => h.innerText.trim()).filter(t => t.length > 2 && t.length < 80)
      };
    });

    console.log('Total profile links found on teaching faculty page:', facultyCards.profileLinks.length);
    const uniqueLinks = {};
    facultyCards.profileLinks.forEach(l => {
      uniqueLinks[l.href] = l.text || uniqueLinks[l.href] || '';
    });
    console.log('Unique profile links:', Object.keys(uniqueLinks).length);
    for (const [href, text] of Object.entries(uniqueLinks)) {
      console.log(' ', text, '->', href);
    }

  } catch (err) {
    console.error('Error fetching live page:', err.message);
  } finally {
    await browser.close();
  }
})();
