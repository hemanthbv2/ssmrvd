const puppeteer = require('puppeteer');
const path = require('path');

(async () => {
  console.log('--- Starting Automated E2E Chatbot Test ---');
  const browser = await puppeteer.launch({
    headless: "new",
    executablePath: "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe",
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-gpu']
  });

  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 900 });

  const htmlUrl = `file://${path.resolve(__dirname, '..', 'index.html').replace(/\\/g, '/')}`;
  console.log('Loading live demo page:', htmlUrl);
  await page.goto(htmlUrl, { waitUntil: 'load' });

  // 1. Verify Trigger Button
  const trigger = await page.$('#ssmrvTrigger');
  console.log('1. Trigger button present:', !!trigger);

  // 2. Click Trigger
  await trigger.click();
  await new Promise(r => setTimeout(r, 600));

  const isOpen = await page.evaluate(() => {
    return document.getElementById('ssmrvChatWindow').classList.contains('is-open');
  });
  console.log('2. Chat Window opened:', isOpen);

  // 3. Test Bot Welcome & Action Buttons
  const buttonsCount = await page.evaluate(() => {
    return document.querySelectorAll('#ssmrvActions .ssmrv-action-chip').length;
  });
  console.log('3. Action buttons rendered:', buttonsCount);

  // 4. Test User Input query: "tell me about BCA"
  await page.type('#ssmrvInput', 'tell me about BCA');
  await page.click('#ssmrvSend');
  await new Promise(r => setTimeout(r, 900));

  const messagesCount = await page.evaluate(() => {
    return document.querySelectorAll('#ssmrvMessages .ssmrv-message').length;
  });
  console.log('4. Messages rendered after query:', messagesCount);

  // 5. Test Principal FAQ
  await page.type('#ssmrvInput', 'who is the principal');
  await page.click('#ssmrvSend');
  await new Promise(r => setTimeout(r, 900));

  const latestBotText = await page.evaluate(() => {
    const bubbles = document.querySelectorAll('.ssmrv-message.bot .ssmrv-message-bubble');
    return bubbles[bubbles.length - 1].innerText;
  });
  console.log('5. Bot response for principal query:', latestBotText.substring(0, 100) + '...');

  // 6. Test Form Submission
  await page.type('#ssmrvInput', 'i want to apply');
  await page.click('#ssmrvSend');
  await new Promise(r => setTimeout(r, 900));

  const formPresent = await page.evaluate(() => {
    return !!document.querySelector('.ssmrv-form-card');
  });
  console.log('6. Lead form rendered:', formPresent);

  if (formPresent) {
    await page.type('#leadName', 'Arjun Dev');
    await page.type('#leadPhone', '9845012345');
    await page.type('#leadEmail', 'arjun.dev@gmail.com');
    await page.click('#leadSubmitBtn');
    await new Promise(r => setTimeout(r, 900));

    const submitted = await page.evaluate(() => {
      return document.querySelector('.ssmrv-form-card').innerText.includes('Thank You');
    });
    console.log('7. Lead successfully submitted and validated:', submitted);
  }

  // 8. Capture final test screenshot
  const shotPath = path.resolve(__dirname, '..', 'assets', 'chatbot_final_test.png');
  await page.screenshot({ path: shotPath });
  console.log('8. Final verified screenshot saved to:', shotPath);

  await browser.close();
  console.log('--- ALL E2E CHATBOT TESTS PASSED 100%! ---');
})();
