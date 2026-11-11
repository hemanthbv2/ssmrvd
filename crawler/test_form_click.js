const puppeteer = require('puppeteer');
const path = require('path');

(async () => {
  const browser = await puppeteer.launch({
    headless: "new",
    executablePath: "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe",
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });
  const page = await browser.newPage();
  const fileUrl = `file://${path.resolve(__dirname, '..', 'index.html').replace(/\\/g, '/')}`;
  await page.goto(fileUrl, { waitUntil: 'load' });

  // Open chat
  await page.click('#ssmrvTrigger');
  await new Promise(r => setTimeout(r, 600));

  // Find chips
  const chips = await page.$$('#ssmrvActions .ssmrv-action-chip');
  console.log(`Found ${chips.length} action chips.`);

  for (const chip of chips) {
    const txt = await page.evaluate(el => el.innerText, chip);
    if (txt.includes('Callback') || txt.includes('Fee Structure')) {
      console.log(`Clicking chip: "${txt}"`);
      await chip.click();
      break;
    }
  }

  await new Promise(r => setTimeout(r, 800));
  const hasForm = await page.evaluate(() => !!document.querySelector('.ssmrv-form-card'));
  console.log('Result -> Form card successfully rendered:', hasForm);

  if (hasForm) {
    await page.type('#leadName', 'Divya Suresh');
    await page.type('#leadPhone', '9845112233');
    await page.type('#leadEmail', 'divya.suresh@gmail.com');
    const marksInput = await page.$('#leadMarks');
    if (marksInput) await page.type('#leadMarks', '88');
    await page.click('#leadSubmitBtn');
    await new Promise(r => setTimeout(r, 800));

    const success = await page.evaluate(() => {
      const card = document.querySelector('.ssmrv-form-card');
      return card ? card.innerText.includes('Thank You') : false;
    });
    console.log('Result -> Lead submission verified:', success);
  }

  await browser.close();
})();
