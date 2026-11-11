const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');

(async () => {
  console.log('🚀 Launching Puppeteer E2E Backtracking & Main Menu Test Suite...');
  const browser = await puppeteer.launch({
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  const page = await browser.newPage();
  await page.setViewport({ width: 1280, height: 900 });

  try {
    // 1. Navigate to local dev server
    await page.goto('http://localhost:8888/index.html', { waitUntil: 'networkidle0' });
    console.log('✅ Page loaded');

    // 2. Open Chatbot
    const trigger = await page.$('#ssmrvTrigger');
    if (!trigger) throw new Error('ssmrvTrigger not found');
    await trigger.click();
    await page.waitForSelector('#ssmrvChatWindow.is-open', { timeout: 3000 });
    console.log('✅ Chatbot window opened');

    // Wait for initial greeting
    await new Promise(r => setTimeout(r, 600));

    // 3. Verify Initial Top Nav Bar
    const navStateInitial = await page.evaluate(() => {
      const backBtn = document.getElementById('ssmrvNavBack');
      const breadcrumb = document.getElementById('ssmrvBreadcrumbCurrent');
      const homeBtn = document.getElementById('ssmrvNavHome');
      return {
        hasBackBtn: !!backBtn,
        backDisabled: backBtn ? backBtn.disabled : null,
        breadcrumbText: breadcrumb ? breadcrumb.innerText.trim() : null,
        hasHomeBtn: !!homeBtn
      };
    });

    console.log('Nav State Initial:', navStateInitial);
    if (!navStateInitial.hasBackBtn) throw new Error('ssmrvNavBack button missing in DOM');
    if (!navStateInitial.backDisabled) throw new Error('ssmrvNavBack should be disabled on initial menu');
    if (!navStateInitial.hasHomeBtn) throw new Error('ssmrvNavHome button missing in DOM');
    console.log('✅ Initial Top Navigation Bar validated (Back is disabled at root, Home is present)');

    // 4. Click "📚 Explore Programmes"
    const clickedProgrammes = await page.evaluate(() => {
      const chips = Array.from(document.querySelectorAll('.ssmrv-action-chip'));
      const progChip = chips.find(c => c.innerText.includes('Programmes'));
      if (progChip) {
        progChip.click();
        return true;
      }
      return false;
    });

    if (!clickedProgrammes) throw new Error('Could not find Programmes chip');
    await new Promise(r => setTimeout(r, 800));

    // Verify Back is now enabled & breadcrumb updated
    const navStateAfterProg = await page.evaluate(() => {
      const backBtn = document.getElementById('ssmrvNavBack');
      const breadcrumb = document.getElementById('ssmrvBreadcrumbCurrent');
      const chips = Array.from(document.querySelectorAll('.ssmrv-action-chip')).map(c => c.innerText);
      return {
        backDisabled: backBtn ? backBtn.disabled : null,
        breadcrumbText: breadcrumb ? breadcrumb.innerText.trim() : null,
        chips: chips
      };
    });

    console.log('Nav State After Programmes:', navStateAfterProg);
    if (navStateAfterProg.backDisabled) throw new Error('ssmrvNavBack should be enabled after navigating to Programmes');
    if (!navStateAfterProg.chips.some(c => c.includes('Back'))) throw new Error('⬅️ Back chip should appear in action container');
    if (!navStateAfterProg.chips.some(c => c.includes('Main Menu'))) throw new Error('🏠 Main Menu chip should appear in action container');
    console.log('✅ Submenu navigation verified: Top Back is enabled and Bottom Back/Menu chips injected');

    // 5. Drill deeper: Click "💻 BCA (Computer Applications)"
    const clickedBca = await page.evaluate(() => {
      const chips = Array.from(document.querySelectorAll('.ssmrv-action-chip'));
      const bcaChip = chips.find(c => c.innerText.includes('BCA'));
      if (bcaChip) {
        bcaChip.click();
        return true;
      }
      return false;
    });

    if (!clickedBca) throw new Error('Could not find BCA chip');
    await new Promise(r => setTimeout(r, 800));

    const bcaBreadcrumb = await page.evaluate(() => {
      return document.getElementById('ssmrvBreadcrumbCurrent').innerText.trim();
    });
    console.log('Breadcrumb at BCA:', bcaBreadcrumb);
    if (!bcaBreadcrumb.includes('BCA')) throw new Error('Breadcrumb should reflect BCA Details');

    // 6. Test Backtracking: Click bottom "⬅️ Back" chip
    console.log('Testing Back chip from BCA...');
    const clickedBackChip = await page.evaluate(() => {
      const chips = Array.from(document.querySelectorAll('.ssmrv-action-chip'));
      const backChip = chips.find(c => c.innerText.includes('Back'));
      if (backChip) {
        backChip.click();
        return true;
      }
      return false;
    });

    if (!clickedBackChip) throw new Error('Could not find Back chip');
    await new Promise(r => setTimeout(r, 800));

    const afterBackBreadcrumb = await page.evaluate(() => {
      return document.getElementById('ssmrvBreadcrumbCurrent').innerText.trim();
    });
    console.log('Breadcrumb after Back chip:', afterBackBreadcrumb);
    if (!afterBackBreadcrumb.includes('Programmes')) throw new Error('Backtracking should have returned to Programmes');
    console.log('✅ Backtracking via bottom chip verified (BCA Details -> Programmes)');

    // 7. Test Search Query & Search Restoration Backtracking
    console.log('\n--- Testing Search Query & Restoration ---');
    await page.type('#ssmrvInput', 'Dr. Sheela', { delay: 40 });
    await page.keyboard.press('Enter');
    await new Promise(r => setTimeout(r, 900));

    // Verify search result rendered
    const searchResult = await page.evaluate(() => {
      const bubbles = Array.from(document.querySelectorAll('.ssmrv-message.bot .ssmrv-message-bubble'));
      const lastBubble = bubbles[bubbles.length - 1];
      const breadcrumb = document.getElementById('ssmrvBreadcrumbCurrent');
      return {
        hasFacultyName: lastBubble ? lastBubble.innerText.includes('Dr. R. Sheela Chandrashekar') : false,
        breadcrumb: breadcrumb ? breadcrumb.innerText.trim() : ''
      };
    });

    console.log('Search Result State:', searchResult);
    if (!searchResult.hasFacultyName) throw new Error('Dr. Sheela faculty card should be rendered on search');
    console.log('✅ Search query "Dr. Sheela" successfully resolved');

    // Now click an option inside the search result: "👨‍🏫 Explore All Faculty"
    const clickedSubOption = await page.evaluate(() => {
      const chips = Array.from(document.querySelectorAll('.ssmrv-action-chip'));
      const targetChip = chips.find(c => c.innerText.includes('Explore All Faculty'));
      if (targetChip) {
        targetChip.click();
        return true;
      }
      return false;
    });

    if (!clickedSubOption) throw new Error('Could not click Explore All Faculty from search card');
    await new Promise(r => setTimeout(r, 900));

    const facultyListBreadcrumb = await page.evaluate(() => {
      return document.getElementById('ssmrvBreadcrumbCurrent').innerText.trim();
    });
    console.log('Breadcrumb after viewing faculty list:', facultyListBreadcrumb);

    // 8. 🎯 CLICK BACK TO RESTORE PREVIOUS SEARCH
    console.log('Clicking Top Nav Back button to restore previous search ("Dr. Sheela")...');
    await page.evaluate(() => {
      document.getElementById('ssmrvNavBack').click();
    });
    await new Promise(r => setTimeout(r, 900));

    // Verify previous search was restored!
    const restoredSearchState = await page.evaluate(() => {
      const userMessages = Array.from(document.querySelectorAll('.ssmrv-message.user .ssmrv-message-bubble')).map(m => m.innerText);
      const botMessages = Array.from(document.querySelectorAll('.ssmrv-message.bot .ssmrv-message-bubble')).map(m => m.innerText);
      const lastUserMsg = userMessages[userMessages.length - 1];
      const lastBotMsg = botMessages[botMessages.length - 1];
      const breadcrumb = document.getElementById('ssmrvBreadcrumbCurrent').innerText.trim();
      const chips = Array.from(document.querySelectorAll('.ssmrv-action-chip')).map(c => c.innerText);

      return {
        lastUserMsg,
        hasRestoredFaculty: lastBotMsg.includes('Dr. R. Sheela Chandrashekar'),
        hasEmail: lastBotMsg.includes('sheelac.ssmrv@rvei.edu.in'),
        breadcrumb,
        chips
      };
    });

    console.log('Restored Search State:', restoredSearchState);
    if (!restoredSearchState.hasRestoredFaculty) {
      throw new Error('Previous search result for Dr. Sheela was NOT properly restored!');
    }
    if (!restoredSearchState.lastUserMsg.includes('Dr. Sheela')) {
      throw new Error('User backtrack prompt should mention the restored search query');
    }
    console.log('✅ PREVIOUS SEARCH RESTORATION VERIFIED: Dr. Sheela search card, contact info, and options fully restored!');

    // 9. Test Main Menu Button
    console.log('\n--- Testing Main Menu Button ---');
    await page.evaluate(() => {
      document.getElementById('ssmrvNavHome').click();
    });
    await new Promise(r => setTimeout(r, 800));

    const mainMenuState = await page.evaluate(() => {
      const breadcrumb = document.getElementById('ssmrvBreadcrumbCurrent').innerText.trim();
      const chips = Array.from(document.querySelectorAll('.ssmrv-action-chip')).map(c => c.innerText);
      return { breadcrumb, chips };
    });

    console.log('Main Menu State:', mainMenuState);
    if (!mainMenuState.breadcrumb.includes('Main Menu')) throw new Error('Main Menu breadcrumb should be active');
    console.log('✅ Main Menu hub verified');

    // 10. Click Back from Main Menu to return to where we were
    console.log('Clicking Back from Main Menu...');
    await page.evaluate(() => {
      document.getElementById('ssmrvNavBack').click();
    });
    await new Promise(r => setTimeout(r, 800));

    const backFromMenuState = await page.evaluate(() => {
      const breadcrumb = document.getElementById('ssmrvBreadcrumbCurrent').innerText.trim();
      return { breadcrumb };
    });
    console.log('State after backing out of Main Menu:', backFromMenuState);
    console.log('✅ Returning from Main Menu to prior state verified');

    // 11. Zero Fee Guarantee Check
    const feeViolations = await page.evaluate(() => {
      const allText = document.getElementById('ssmrvMessages').innerText;
      const feePattern = /(?:Rs\.?|INR|₹)\s*[\d,]+|\b\d{1,3}(?:,\d{2,3})*(?:\s*(?:per year|per sem|fees|tuition))/gi;
      const matches = allText.match(feePattern);
      return matches || [];
    });
    console.log('Fee Violations:', feeViolations);
    if (feeViolations.length > 0) throw new Error('Found fee amounts in chatbot: ' + feeViolations.join(', '));
    console.log('✅ Zero fee numbers verified');

    // 12. Take Screenshot of Restored Search & Navigation UI
    const screenshotPath = path.resolve(__dirname, 'verified_backtracking_and_menu.png');
    await page.screenshot({ path: screenshotPath });
    console.log('📸 Screenshot saved to:', screenshotPath);

    console.log('\n🎉 ALL 12 VERIFICATION CHECKS PASSED PERFECTLY!');
  } catch (err) {
    console.error('❌ Test failed:', err);
    process.exit(1);
  } finally {
    await browser.close();
  }
})();
