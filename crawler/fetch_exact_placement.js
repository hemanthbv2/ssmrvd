const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({ headless: 'new' });
  const page = await browser.newPage();
  try {
    await page.goto('https://www.ssmrv.edu.in/campus_life/placement/', { waitUntil: 'domcontentloaded', timeout: 20000 });
    const stats = await page.evaluate(() => {
      const texts = [];
      document.querySelectorAll('h2, h3, h4, .elementor-counter-number, .elementor-widget-container').forEach(el => {
        const t = el.innerText.trim();
        if (t && (t.includes('LPA') || t.includes('CTC') || t.includes('Package') || t.includes('Payscale') || t.includes('Offers'))) {
          texts.push(t);
        }
      });
      return texts;
    });
    console.log('Live Placement Stats:');
    console.log(JSON.stringify(stats, null, 2));
  } catch (e) {
    console.error('Error fetching live placement:', e.message);
  }
  await browser.close();
})();
