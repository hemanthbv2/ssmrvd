const puppeteer = require('puppeteer');
const path = require('path');
const fs = require('fs');

(async () => {
  console.log('🚀 Running E2E Test for Source Link Navigation & All Page Links...');
  const browser = await puppeteer.launch({
    headless: 'new',
    defaultViewport: { width: 1280, height: 900 }
  });

  const page = await browser.newPage();
  await page.goto('http://localhost:8888/index.html', { waitUntil: 'networkidle0' });

  // 1. Open chat
  const trigger = await page.waitForSelector('#ssmrvTrigger');
  await trigger.click();
  await page.waitForSelector('#ssmrvChatWindow.is-open');
  await new Promise(r => setTimeout(r, 600));

  async function typeAndSend(text) {
    console.log(`Sending: "${text}"`);
    await page.evaluate(() => {
      const input = document.getElementById('ssmrvInput');
      input.value = '';
    });
    await page.type('#ssmrvInput', text);
    await page.click('#ssmrvSend');
    await new Promise(r => setTimeout(r, 950));
  }

  // Test 1: Cancellation & Refund Matrix
  await typeAndSend('what is the refund policy on cancellation');

  // Test 2: Alumni Network
  await typeAndSend('tell me about alumni');

  // Test 3: Specific Link Lookup
  await typeAndSend('give me link for BCA');

  // Test 4: All College Links / Sitemap
  await typeAndSend('show all website links');

  // Screenshot
  const shotPath = 'crawler/verified_website_links_navigation.png';
  await page.screenshot({ path: shotPath });
  console.log(`Screenshot saved to ${shotPath}`);

  // Copy to Artifact directory
  const artifactDir = 'C:\\Users\\HP\\.gemini\\antigravity\\brain\\3cb4aa27-9162-4048-a671-9b19cc32b24f';
  if (fs.existsSync(artifactDir)) {
    fs.copyFileSync(shotPath, path.join(artifactDir, 'verified_website_links_navigation.png'));
    console.log('Copied to artifact directory.');
  }

  // Evaluate DOM
  const results = await page.evaluate(() => {
    return {
      messagesCount: document.querySelectorAll('.ssmrv-message').length,
      sourceLinksCount: document.querySelectorAll('.ssmrv-source-link').length,
      refundCardsCount: document.querySelectorAll('.ssmrv-refund-card').length,
      firstSourceUrl: document.querySelector('.ssmrv-source-url')?.href
    };
  });

  console.log('DOM Results:', JSON.stringify(results, null, 2));

  await browser.close();
  console.log('✅ Automated test finished successfully!');
})();
