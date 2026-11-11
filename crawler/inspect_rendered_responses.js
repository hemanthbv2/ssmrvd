const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({ headless: 'new' });
  const page = await browser.newPage();
  await page.goto('http://localhost:8888/index.html', { waitUntil: 'networkidle0' });

  await page.click('#ssmrvTrigger');
  await new Promise(r => setTimeout(r, 400));

  async function ask(query) {
    await page.type('#ssmrvInput', query);
    await page.click('#ssmrvSend');
    await new Promise(r => setTimeout(r, 600));
    const lastBotBubble = await page.evaluate(() => {
      const bots = document.querySelectorAll('.ssmrv-message.bot .ssmrv-message-bubble');
      return bots[bots.length - 1].innerText;
    });
    console.log(`\n--- QUERY: "${query}" ---`);
    console.log(lastBotBubble.trim().slice(0, 300));
  }

  await ask('who is BCA HOD');
  await ask('who is Dr. Malini');
  await ask('download prospectus');
  await ask('where is the campus');
  await ask('who is placement officer');

  await browser.close();
})();
