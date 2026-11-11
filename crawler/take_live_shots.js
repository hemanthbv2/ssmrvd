const puppeteer = require('puppeteer');
const path = require('path');
const fs = require('fs');

(async () => {
  const browser = await puppeteer.launch({
    headless: "new",
    executablePath: "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe",
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 900 });

  await page.goto('http://localhost:8888/index.html', { waitUntil: 'networkidle0' });
  await new Promise(r => setTimeout(r, 800));

  // Open chatbot
  await page.click('#ssmrvTrigger');
  await new Promise(r => setTimeout(r, 600));

  const artifactDir = path.resolve("C:\\Users\\HP\\.gemini\\antigravity\\brain\\3cb4aa27-9162-4048-a671-9b19cc32b24f");
  if (!fs.existsSync(artifactDir)) fs.mkdirSync(artifactDir, { recursive: true });

  const shot1 = path.join(artifactDir, 'chatbot_live_open.png');
  await page.screenshot({ path: shot1 });
  console.log('Saved shot 1:', shot1);

  // Ask about BBA and click
  await page.type('#ssmrvInput', 'Tell me about BBA course');
  await page.click('#ssmrvSend');
  await new Promise(r => setTimeout(r, 900));

  const shot2 = path.join(artifactDir, 'chatbot_live_convo.png');
  await page.screenshot({ path: shot2 });
  console.log('Saved shot 2:', shot2);

  await browser.close();
})();
