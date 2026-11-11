const puppeteer = require('puppeteer');

(async () => {
  console.log('🚀 Verifying Packages (LPA/CTC) shown & Fees hidden...');
  const browser = await puppeteer.launch({ headless: 'new' });
  const page = await browser.newPage();
  await page.goto('http://localhost:8888/index.html', { waitUntil: 'networkidle0' });

  // Open chat and wait for welcome animation to completely finish
  await page.click('#ssmrvTrigger');
  await new Promise(r => setTimeout(r, 1200));

  async function ask(query) {
    await page.evaluate(() => {
      document.getElementById('ssmrvInput').value = '';
    });
    await page.type('#ssmrvInput', query);
    await page.click('#ssmrvSend');
    await new Promise(r => setTimeout(r, 1000));

    const text = await page.evaluate(() => {
      const msgs = document.querySelectorAll('.ssmrv-message.bot .ssmrv-message-bubble');
      return msgs[msgs.length - 1].innerText;
    });
    console.log(`\n--- QUERY: "${query}" ---`);
    console.log(text.slice(0, 300).replace(/\n/g, ' '));
    return text;
  }

  // 1. Packages Query
  const packText = await ask('What are the placement packages?');
  const hasLpa = packText.includes('11 LPA') || packText.includes('8 LPA');
  console.log(`Includes LPA CTC: ${hasLpa ? '✅ YES' : '❌ NO'}`);

  // 2. Fee Query
  const feeText = await ask('What is the fee for B.Com?');
  const hasFeeNumbers = /(?:₹|INR|\bRs\.?)\s*\d+/.test(feeText);
  console.log(`Has Fee Numbers: ${hasFeeNumbers ? '❌ YES (unexpected)' : '✅ NO (clean)'}`);

  await browser.close();
  console.log('\n✅ Verification Complete!');
})();
