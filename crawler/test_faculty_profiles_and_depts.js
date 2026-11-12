const puppeteer = require('puppeteer');
const path = require('path');

(async () => {
  const browser = await puppeteer.launch({ headless: 'new' });
  const page = await browser.newPage();
  await page.setViewport({ width: 1280, height: 920 });

  await page.goto('http://localhost:8888/index.html', { waitUntil: 'networkidle0' });
  await page.evaluate(() => localStorage.clear());
  await page.reload({ waitUntil: 'networkidle0' });

  // 1. Open chat window
  await page.click('#ssmrvTrigger');
  await new Promise(r => setTimeout(r, 700));

  // Verify header actions (only Clear and Close — no Call or WhatsApp buttons)
  const headerAndWelcomeCheck = await page.evaluate(() => {
    const headerItems = Array.from(document.querySelectorAll('.ssmrv-header-actions > *')).map(el => el.id || el.tagName);
    const chips = Array.from(document.querySelectorAll('#ssmrvActions .ssmrv-action-chip')).map(c => c.innerText.trim());
    return { headerItems, chips };
  });
  console.log('0. Header & Welcome Chips Check:', headerAndWelcomeCheck);
  if (headerAndWelcomeCheck.headerItems.length !== 2) {
    throw new Error(`Expected 2 header buttons (Clear & Close), got: ${headerAndWelcomeCheck.headerItems.join(', ')}`);
  }
  for (const chipText of headerAndWelcomeCheck.chips) {
    if (/\(\d+|LPA|Fee Sheet|Quick Enquiry|WhatsApp|All College Links/i.test(chipText)) {
      throw new Error(`Forbidden chip label found: ${chipText}`);
    }
  }

  await page.screenshot({ path: path.join(__dirname, 'verified_clean_main_menu.png') });

  const clickActionChip = async (substring) => {
    const clicked = await page.evaluate((sub) => {
      const chips = Array.from(document.querySelectorAll('#ssmrvActions .ssmrv-action-chip'));
      const match = chips.find(c => c.innerText.includes(sub));
      if (match) {
        match.click();
        return match.innerText;
      }
      return null;
    }, substring);
    if (!clicked) throw new Error(`Chip not found: ${substring}`);
    await new Promise(r => setTimeout(r, 700));
    return clicked;
  };

  // 2. Click Faculty Directory
  await clickActionChip('Faculty Directory');
  // 3. Click BCA Faculty
  await clickActionChip('BCA Faculty');

  const bcaViewStats = await page.evaluate(() => {
    const cards = document.querySelectorAll('.ssmrv-dept-profile-item');
    const visitBtns = document.querySelectorAll('.ssmrv-dept-profile-item .ssmrv-dept-visit-btn');
    const profileChips = document.querySelectorAll('#ssmrvActions .ssmrv-action-chip.is-profile-chip');
    const deptWebChip = Array.from(document.querySelectorAll('#ssmrvActions .ssmrv-action-chip')).find(c => c.innerText.includes('Visit Department Faculty Webpage'));
    const lastBot = Array.from(document.querySelectorAll('.ssmrv-message.bot')).pop();
    return {
      deptCardCount: cards.length,
      visitBtnCount: visitBtns.length,
      firstVisitHref: visitBtns.length ? visitBtns[0].getAttribute('href') : null,
      hasDeptWebChip: !!deptWebChip,
      profileChipCount: profileChips.length,
      hasDesigBadges: lastBot ? lastBot.querySelectorAll('.ssmrv-badge-desig').length : 0,
      hasDeptBadges: lastBot ? lastBot.querySelectorAll('.ssmrv-badge-dept').length : 0
    };
  });
  console.log('1. BCA Department View Stats:', bcaViewStats);
  if (bcaViewStats.deptCardCount < 11 || bcaViewStats.visitBtnCount < 11 || !bcaViewStats.hasDeptWebChip) {
    throw new Error('BCA Department did not render all 11 interactive profile cards and Visit Website buttons!');
  }

  await page.screenshot({ path: path.join(__dirname, 'verified_dept_profile_list.png') });

  // 4. Search "Dr. Vijayashree L." to verify the exact profile from the user's screenshot
  await page.type('#ssmrvInput', 'Dr. Vijayashree L.');
  await page.click('#ssmrvSend');
  await new Promise(r => setTimeout(r, 750));

  const profileStats = await page.evaluate(() => {
    const lastBot = Array.from(document.querySelectorAll('.ssmrv-message.bot')).pop();
    const text = lastBot ? lastBot.innerText : '';
    const inCardVisitBtn = lastBot ? lastBot.querySelector('.ssmrv-visit-website-btn') : null;
    const actionVisitChip = Array.from(document.querySelectorAll('#ssmrvActions .ssmrv-action-chip.is-primary')).find(c => c.innerText.includes('Visit Official Website Page'));
    const chips = Array.from(document.querySelectorAll('#ssmrvActions .ssmrv-action-chip')).map(c => c.innerText.trim());
    const breadcrumb = document.getElementById('ssmrvBreadcrumbCurrent').innerText;
    return {
      breadcrumb,
      hasBadges: lastBot ? lastBot.querySelectorAll('.ssmrv-badge-desig, .ssmrv-badge-dept').length : 0,
      hasQualifications: text.includes('QUALIFICATIONS'),
      hasExperience: text.includes('EXPERIENCE'),
      hasSpecialisation: text.includes('AREAS OF EXPERTISE'),
      hasBio: text.includes('PROFILE OVERVIEW'),
      hasHighlights: text.includes('KEY ACHIEVEMENTS'),
      inCardVisitHref: inCardVisitBtn ? inCardVisitBtn.getAttribute('href') : null,
      hasActionVisitChip: !!actionVisitChip,
      chips
    };
  });
  console.log('2. Full Faculty Profile View (Dr. Vijayashree L.):', profileStats);
  if (!profileStats.hasBadges || !profileStats.hasQualifications || !profileStats.inCardVisitHref || !profileStats.hasActionVisitChip) {
    throw new Error('Full faculty profile missing key badges/qualifications/Visit Website button fields!');
  }
  for (const chipText of profileStats.chips) {
    if (/\(\d+/.test(chipText)) {
      throw new Error(`Found parenthetical number on chip: ${chipText}`);
    }
  }

  // Capture widget-focused screenshot of Dr. Vijayashree L. profile card
  const chatWindow = await page.$('#ssmrvChatWindow');
  await chatWindow.screenshot({ path: path.join(__dirname, 'verified_full_faculty_profile.png') });

  await browser.close();
  console.log('ALL TESTS PASSED SUCCESSFULLY!');
})();
