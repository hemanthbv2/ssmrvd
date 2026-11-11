const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({ headless: 'new' });
  const page = await browser.newPage();
  try {
    await page.goto('https://www.ssmrv.edu.in/campus_life/placement/', { waitUntil: 'networkidle2', timeout: 25000 });
    await new Promise(r => setTimeout(r, 2500));
    const counters = await page.evaluate(() => {
      return Array.from(document.querySelectorAll('.elementor-counter')).map(c => {
        const title = c.querySelector('.elementor-counter-title')?.innerText || '';
        const number = c.querySelector('.elementor-counter-number')?.innerText || '';
        const prefix = c.querySelector('.elementor-counter-number-prefix')?.innerText || '';
        const suffix = c.querySelector('.elementor-counter-number-suffix')?.innerText || '';
        const toValue = c.querySelector('.elementor-counter-number')?.getAttribute('data-to-value') || '';
        return { title, number, prefix, suffix, toValue };
      });
    });
    console.log('Counters:');
    console.log(JSON.stringify(counters, null, 2));
  } catch (e) {
    console.error('Error:', e.message);
  }
  await browser.close();
})();
