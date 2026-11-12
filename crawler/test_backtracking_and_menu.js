const puppeteer = require('puppeteer');
const path = require('path');

(async () => {
  console.log('🚀 Launching Puppeteer E2E Bottom-Only Backtracking & Main Menu Test Suite...');
  const browser = await puppeteer.launch({
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  const page = await browser.newPage();
  await page.setViewport({ width: 1280, height: 900 });

  try {
    await page.goto('http://localhost:8888/index.html', { waitUntil: 'networkidle0' });
    console.log('✅ Page loaded');

    const trigger = await page.$('#ssmrvTrigger');
    await trigger.click();
    await page.waitForSelector('#ssmrvChatWindow.is-open', { timeout: 3000 });
    await new Promise(r => setTimeout(r, 600));
    console.log('✅ Chatbot window opened');

    // 1. Verify Top Buttons are Removed
    const topState = await page.evaluate(() => {
      return {
        hasNavBack: !!document.getElementById('ssmrvNavBack'),
        hasNavHome: !!document.getElementById('ssmrvNavHome'),
        breadcrumbText: document.getElementById('ssmrvBreadcrumbCurrent') ? document.getElementById('ssmrvBreadcrumbCurrent').innerText.trim() : null
      };
    });
    console.log('Top Bar State:', topState);
    if (topState.hasNavBack || topState.hasNavHome) {
      throw new Error('Top Back/Main Menu buttons should be removed!');
    }
    console.log('✅ Verified top buttons are removed (clean breadcrumb bar restored)');

    // 2. Click "📚 Explore Programmes"
    await page.evaluate(() => {
      const chips = Array.from(document.querySelectorAll('.ssmrv-action-chip'));
      const progChip = chips.find(c => c.innerText.includes('Programmes'));
      if (progChip) progChip.click();
    });
    await new Promise(r => setTimeout(r, 800));

    // Verify bottom Back & Main Menu chips exist
    const bottomChipsAfterProg = await page.evaluate(() => {
      return Array.from(document.querySelectorAll('.ssmrv-action-chip')).map(c => c.innerText);
    });
    console.log('Bottom Chips after Programmes:', bottomChipsAfterProg);
    if (!bottomChipsAfterProg.some(c => c.includes('Back'))) throw new Error('Bottom ⬅️ Back chip missing');
    if (!bottomChipsAfterProg.some(c => c.includes('Main Menu'))) throw new Error('Bottom 🏠 Main Menu chip missing');
    console.log('✅ Bottom ⬅️ Back and 🏠 Main Menu chips verified');

    // 3. Test Search Query & Bottom Chip Backtracking
    await page.type('#ssmrvInput', 'Dr. Sheela', { delay: 30 });
    await page.keyboard.press('Enter');
    await new Promise(r => setTimeout(r, 900));

    // Click option from search card
    await page.evaluate(() => {
      const chips = Array.from(document.querySelectorAll('.ssmrv-action-chip'));
      const facChip = chips.find(c => c.innerText.includes('Explore All Faculty'));
      if (facChip) facChip.click();
    });
    await new Promise(r => setTimeout(r, 900));

    // Click Bottom "⬅️ Back" chip to restore Dr. Sheela search
    console.log('Clicking bottom "⬅️ Back" chip to restore Dr. Sheela search...');
    await page.evaluate(() => {
      const chips = Array.from(document.querySelectorAll('.ssmrv-action-chip'));
      const backChip = chips.find(c => c.innerText.includes('Back'));
      if (backChip) backChip.click();
    });
    await new Promise(r => setTimeout(r, 900));

    const restoredState = await page.evaluate(() => {
      const botMessages = Array.from(document.querySelectorAll('.ssmrv-message.bot .ssmrv-message-bubble')).map(m => m.innerText);
      const lastBotMsg = botMessages[botMessages.length - 1];
      const chips = Array.from(document.querySelectorAll('.ssmrv-action-chip')).map(c => c.innerText);
      return {
        hasFaculty: lastBotMsg.includes('Dr. R. Sheela Chandrashekar'),
        chips
      };
    });
    console.log('Restored State via Bottom Back Chip:', restoredState);
    if (!restoredState.hasFaculty) throw new Error('Dr. Sheela search was not restored via bottom Back chip');
    console.log('✅ Previous search restored via bottom ⬅️ Back chip');

    // 4. Take Screenshot
    const shotPath = path.resolve(__dirname, 'verified_bottom_only_nav.png');
    await page.screenshot({ path: shotPath });
    console.log('📸 Screenshot saved to:', shotPath);

    console.log('\n🎉 ALL BOTTOM-ONLY NAVIGATION & BACKTRACKING CHECKS PASSED!');
  } catch (err) {
    console.error('❌ Test failed:', err);
    process.exit(1);
  } finally {
    await browser.close();
  }
})();
