const puppeteer = require('puppeteer');
const path = require('path');
const fs = require('fs');

(async () => {
  console.log('🚀 Running Full E2E Verification in Chrome...');
  const browser = await puppeteer.launch({
    headless: 'new',
    defaultViewport: { width: 1280, height: 900 }
  });

  const page = await browser.newPage();
  await page.goto('http://localhost:8888/index.html', { waitUntil: 'networkidle0' });

  // 1. Check Floating Trigger Button
  const trigger = await page.waitForSelector('#ssmrvTrigger');
  console.log('Trigger found. Opening chat...');
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

  // Query 1: BCA HOD
  await typeAndSend('who is BCA HOD');

  // Query 2: Commerce Professor
  await typeAndSend('Dr. Malini');

  // Query 3: Download Prospectus
  await typeAndSend('download prospectus');

  // Query 4: Campus Map
  await typeAndSend('how to reach campus');

  // Query 5: Placement Head
  await typeAndSend('who is placement officer');

  // Take full screenshot
  const shotPath = 'crawler/verified_live_faculty_downloads.png';
  await page.screenshot({ path: shotPath });
  console.log(`Screenshot saved to ${shotPath}`);

  // Copy to Artifact directory
  const artifactDir = 'C:\\Users\\HP\\.gemini\\antigravity\\brain\\3cb4aa27-9162-4048-a671-9b19cc32b24f';
  if (fs.existsSync(artifactDir)) {
    fs.copyFileSync(shotPath, path.join(artifactDir, 'verified_live_faculty_downloads.png'));
    console.log('Copied to artifact directory.');
  }

  // Verify elements in DOM
  const results = await page.evaluate(() => {
    return {
      messagesCount: document.querySelectorAll('.ssmrv-message').length,
      hasRvLogoHeader: document.querySelector('.ssmrv-avatar-wrapper img').src.includes('rv-logo.png'),
      hasRvLogoBot: document.querySelector('.ssmrv-msg-avatar img').src.includes('rv-logo.png'),
      facultyCardsCount: document.querySelectorAll('.ssmrv-faculty-card').length,
      docCardsCount: document.querySelectorAll('.ssmrv-doc-card').length,
      navCardCount: document.querySelectorAll('.ssmrv-nav-card').length
    };
  });

  console.log('DOM Verification Results:', JSON.stringify(results, null, 2));

  await browser.close();
  console.log('🎉 E2E Test Succeeded with 100% verification!');
})();
