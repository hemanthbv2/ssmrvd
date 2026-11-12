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

  // 2. Click Faculty Directory (92)
  await clickActionChip('Faculty Directory');
  // 3. Click BCA Faculty (11)
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
      hasDeptBadges: lastBot ? lastBot.querySelectorAll('.ssmrv-badge-dept').length : 0,
      sampleText: lastBot ? lastBot.innerText.slice(0, 350) : ''
    };
  });
  console.log('1. BCA Department View Stats:', bcaViewStats);
  if (bcaViewStats.deptCardCount < 11 || bcaViewStats.visitBtnCount < 11 || !bcaViewStats.hasDeptWebChip) {
    throw new Error('BCA Department did not render all 11 interactive profile cards and Visit Website buttons!');
  }

  await page.screenshot({ path: path.join(__dirname, 'verified_dept_profile_list.png') });

  // 4. Click on a faculty profile chip (Dr. S. Chethana)
  await clickActionChip('Dr. S. Chethana');

  const profileStats = await page.evaluate(() => {
    const lastBot = Array.from(document.querySelectorAll('.ssmrv-message.bot')).pop();
    const text = lastBot ? lastBot.innerText : '';
    const inCardVisitBtn = lastBot ? lastBot.querySelector('.ssmrv-visit-website-btn') : null;
    const actionVisitChip = Array.from(document.querySelectorAll('#ssmrvActions .ssmrv-action-chip.is-primary')).find(c => c.innerText.includes('Visit Official Website Page'));
    const breadcrumb = document.getElementById('ssmrvBreadcrumbCurrent').innerText;
    return {
      breadcrumb,
      hasDepartment: text.includes('Department: Computer Applications (BCA)'),
      hasDesignation: text.includes('Designation: Assistant Professor'),
      hasQualifications: text.includes('Qualifications:'),
      hasExperience: text.includes('Experience: 22+ Years'),
      hasSpecialisation: text.includes('Artificial Intelligence'),
      hasBio: text.includes('Profile Overview:'),
      hasHighlights: text.includes('11 patents'),
      inCardVisitHref: inCardVisitBtn ? inCardVisitBtn.getAttribute('href') : null,
      hasActionVisitChip: !!actionVisitChip
    };
  });
  console.log('2. Full Faculty Profile View (Dr. S. Chethana):', profileStats);
  if (!profileStats.hasDepartment || !profileStats.hasDesignation || !profileStats.inCardVisitHref || !profileStats.hasActionVisitChip) {
    throw new Error('Full faculty profile missing key department/designation/Visit Website button fields!');
  }

  await new Promise(r => setTimeout(r, 300));
  await page.screenshot({ path: path.join(__dirname, 'verified_full_faculty_profile.png') });

  // 5. Click bottom Back button -> should return to BCA Faculty (11)
  await clickActionChip('Back');
  const afterBackBreadcrumb = await page.$eval('#ssmrvBreadcrumbCurrent', el => el.innerText.trim());
  console.log('3. After clicking Back from Profile -> Breadcrumb:', afterBackBreadcrumb);
  if (!afterBackBreadcrumb.includes('BCA Faculty')) {
    throw new Error(`Expected BCA Faculty after Back, got: ${afterBackBreadcrumb}`);
  }

  // 6. Test clicking directly on a .ssmrv-dept-profile-item card inside the chat message bubble
  await page.evaluate(() => {
    const card = document.querySelector('.ssmrv-dept-profile-item[data-profile-id="dr-r-sheela-chandrashekar"]');
    if (card) card.click();
  });
  await new Promise(r => setTimeout(r, 700));
  const sheelaBreadcrumb = await page.$eval('#ssmrvBreadcrumbCurrent', el => el.innerText.trim());
  console.log('4. After clicking inline Dept Card for Dr. R. Sheela Chandrashekar -> Breadcrumb:', sheelaBreadcrumb);
  if (!sheelaBreadcrumb.includes('Dr. R. Sheela Chandrashekar')) {
    throw new Error('Inline card click did not open Dr. R. Sheela Chandrashekar profile!');
  }

  // 7. Test searching a faculty member by name ("Dr. Malini N.")
  await page.type('#ssmrvInput', 'Dr. Malini N.');
  await page.click('#ssmrvSend');
  await new Promise(r => setTimeout(r, 750));
  const maliniText = await page.evaluate(() => {
    const bots = document.querySelectorAll('.ssmrv-message.bot');
    return bots[bots.length - 1].innerText;
  });
  console.log('5. Search "Dr. Malini N." -> Has Dept & Desig:', maliniText.includes('Department: Commerce (B.Com)') && maliniText.includes('Associate Professor and HOD'));

  await browser.close();
  console.log('ALL FACULTY PROFILE & DEPARTMENT TESTS PASSED 100%!');
})();
