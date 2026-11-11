const puppeteer = require('puppeteer');
const path = require('path');
const fs = require('fs');

(async () => {
  console.log('Testing Puppeteer launch...');
  const browser = await puppeteer.launch({
    headless: "new",
    executablePath: "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe",
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-gpu']
  });

  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 900 });

  const testUrl = 'https://www.ssmrv.edu.in/';
  console.log('Navigating to', testUrl);
  await page.goto(testUrl, { waitUntil: 'domcontentloaded', timeout: 30000 });

  const shotDir = path.join(__dirname, 'screenshots');
  if (!fs.existsSync(shotDir)) fs.mkdirSync(shotDir, { recursive: true });

  const shotPath = path.join(shotDir, 'homepage.png');
  await page.screenshot({ path: shotPath, fullPage: false });
  console.log('Screenshot saved to:', shotPath);

  const title = await page.title();
  console.log('Page Title:', title);

  await browser.close();
  console.log('Test successful!');
})();
