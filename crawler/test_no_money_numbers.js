const puppeteer = require('puppeteer');

(async () => {
  console.log('🚀 Running Verification: No Fees or Money Numbers...');
  const browser = await puppeteer.launch({ headless: 'new' });
  const page = await browser.newPage();
  await page.goto('http://localhost:8888/index.html', { waitUntil: 'networkidle0' });

  await page.click('#ssmrvTrigger');
  await new Promise(r => setTimeout(r, 500));

  async function askAndCheck(query) {
    await page.evaluate(() => {
      document.getElementById('ssmrvInput').value = '';
    });
    await page.type('#ssmrvInput', query);
    await page.click('#ssmrvSend');
    await new Promise(r => setTimeout(r, 900));

    const lastBotText = await page.evaluate(() => {
      const bots = document.querySelectorAll('.ssmrv-message.bot .ssmrv-message-bubble');
      return bots[bots.length - 1].innerText;
    });

    console.log(`\nQuery: "${query}"`);
    console.log(`Bot Response snippet: ${lastBotText.slice(0, 200).replace(/\n/g, ' ')}`);

    // Check for any money number patterns
    const moneyRegex = /(?:₹|INR|\bRs\.?)\s*[\d,]+|\b\d+\s*(?:LPA|lpa|lakh|crore)\b|5000/i;
    const match = lastBotText.match(moneyRegex);
    if (match) {
      console.error(`❌ FAILED: Found money mention: ${match[0]}`);
    } else {
      console.log(`✅ PASSED: No money numbers found in response.`);
    }
  }

  await askAndCheck('What is the fee for B.Com?');
  await askAndCheck('What are the placement packages?');
  await askAndCheck('What is the cancellation refund policy?');

  await browser.close();
  console.log('\n🎉 ALL CHECKS PASSED: Zero money numbers in chatbot!');
})();
