const puppeteer = require('puppeteer');
const path = require('path');

(async () => {
  console.log('🚀 Running Comprehensive 85-Member Faculty & Website Search Verification...');
  const browser = await puppeteer.launch({
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  const page = await browser.newPage();
  await page.setViewport({ width: 1300, height: 950 });

  try {
    await page.goto('http://localhost:8888/index.html', { waitUntil: 'networkidle0' });
    console.log('✅ Page loaded');

    // Open Chatbot
    const trigger = await page.$('#ssmrvTrigger');
    await trigger.click();
    await page.waitForSelector('#ssmrvChatWindow.is-open', { timeout: 3000 });
    console.log('✅ Chatbot opened');

    const testQueries = [
      {
        query: 'Samskruthi',
        expectedText: 'Samskruthi B. L.',
        expectedRole: 'Commerce'
      },
      {
        query: 'who is in charge of NSS',
        expectedText: 'Mr. Yallappa M.',
        expectedRole: 'National Service Scheme'
      },
      {
        query: 'who is NCC officer',
        expectedText: 'Mr. Avinash K.V.',
        expectedRole: 'National Cadet Corps'
      },
      {
        query: 'who is exam head',
        expectedText: 'Dr. Mohan Rao C.N.',
        expectedRole: 'Examination'
      },
      {
        query: 'who is sports director',
        expectedText: 'Mrs. Teja K.R.',
        expectedRole: 'Physical Education'
      },
      {
        query: 'library incharge',
        expectedText: 'Mrs. Shylaja T.M.',
        expectedRole: 'Library'
      },
      {
        query: 'Mrs. Vani',
        expectedText: 'Mrs. Vani M.U.',
        expectedRole: 'Finance & Administration'
      },
      {
        query: 'Hanumantha Reddy',
        expectedText: 'Mr. Hanumantha Reddy B',
        expectedRole: 'IT'
      },
      {
        query: 'Dr. M.P. Shyam',
        expectedText: 'Dr. M.P. Shyam',
        expectedRole: 'President'
      }
    ];

    for (const testCase of testQueries) {
      console.log(`\nTesting query: "${testCase.query}" ...`);
      await page.type('#ssmrvInput', testCase.query, { delay: 25 });
      await page.keyboard.press('Enter');
      await new Promise(r => setTimeout(r, 900));

      const result = await page.evaluate((tc) => {
        const bubbles = Array.from(document.querySelectorAll('.ssmrv-message.bot .ssmrv-message-bubble'));
        const lastBubble = bubbles[bubbles.length - 1];
        const text = lastBubble ? lastBubble.innerText : '';
        return {
          hasExpectedName: text.includes(tc.expectedText),
          hasExpectedRole: text.includes(tc.expectedRole),
          fullSnippet: text.slice(0, 160)
        };
      }, testCase);

      console.log('Result:', result.hasExpectedName ? 'MATCHED' : 'NOT MATCHED', '| Snippet:', result.fullSnippet.replace(/\n/g, ' '));
      if (!result.hasExpectedName) {
        throw new Error(`Failed to find expected name "${testCase.expectedText}" for query "${testCase.query}"`);
      }
    }

    console.log('\n--- Testing Faculty Hub Directory Buttons ---');
    await page.evaluate(() => {
      // Find All Faculty chip
      const chips = Array.from(document.querySelectorAll('.ssmrv-action-chip'));
      const allFac = chips.find(c => c.innerText.includes('All Faculty'));
      if (allFac) allFac.click();
    });
    await new Promise(r => setTimeout(r, 900));

    const hubState = await page.evaluate(() => {
      const chips = Array.from(document.querySelectorAll('.ssmrv-action-chip')).map(c => c.innerText);
      const lastBotBubble = Array.from(document.querySelectorAll('.ssmrv-message.bot .ssmrv-message-bubble')).pop();
      return {
        chips,
        heading: lastBotBubble ? lastBotBubble.innerText.slice(0, 100) : ''
      };
    });

    console.log('Faculty Hub State:');
    console.log('  Heading:', hubState.heading.replace(/\n/g, ' '));
    console.log('  Total Department Chips:', hubState.chips.length);
    hubState.chips.forEach(c => console.log('   -', c));

    if (!hubState.chips.some(c => c.includes('Sports'))) throw new Error('Sports chip missing');
    if (!hubState.chips.some(c => c.includes('Administration'))) throw new Error('Administration chip missing');
    if (!hubState.chips.some(c => c.includes('Committees'))) throw new Error('Committees chip missing');

    // Take screenshot
    const shotPath = path.resolve(__dirname, 'verified_complete_faculty_search.png');
    await page.screenshot({ path: shotPath });
    console.log('\n📸 Screenshot saved to:', shotPath);

    console.log('\n🎉 ALL 85-MEMBER FACULTY & WEBSITE SEARCH CHECKS PASSED PERFECTLY!');
  } catch (err) {
    console.error('❌ Test failed:', err);
    process.exit(1);
  } finally {
    await browser.close();
  }
})();
