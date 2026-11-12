const puppeteer = require('puppeteer');
const path = require('path');

(async () => {
  const browser = await puppeteer.launch({ headless: 'new', args: ['--no-sandbox'] });
  const page = await browser.newPage();
  await page.setViewport({ width: 1280, height: 860, deviceScaleFactor: 2 });

  console.log('1. Loading http://localhost:8888/nmkrv/index.html ...');
  await page.goto('http://localhost:8888/nmkrv/index.html', { waitUntil: 'networkidle0' });

  // Open chat
  await page.click('#ssmrvTrigger');
  await new Promise(r => setTimeout(r, 800));

  // Verify header buttons
  const headerBtns = await page.$$eval('.ssmrv-header-actions .ssmrv-header-btn', els => els.map(e => e.id));
  console.log('Header buttons:', headerBtns);
  if (headerBtns.length !== 2 || !headerBtns.includes('ssmrvClearChat') || !headerBtns.includes('ssmrvCloseChat')) {
    throw new Error('Unexpected header buttons: ' + JSON.stringify(headerBtns));
  }

  // Verify main menu buttons
  const mainChips = await page.$$eval('#ssmrvActions .ssmrv-action-chip', els => els.map(e => e.innerText.trim()));
  console.log('Main Menu chips:', mainChips);
  for (const c of mainChips) {
    if (/\d/.test(c)) throw new Error('Found number in Main Menu chip: ' + c);
    if (/whatsapp|enquiry|fee sheet|all college links/i.test(c)) throw new Error('Forbidden button in Main Menu: ' + c);
  }

  // Screenshot 1: Clean Main Menu
  const winEl = await page.$('#ssmrvChatWindow');
  await winEl.screenshot({ path: path.join(__dirname, 'nmkrv_verified_main_menu.png') });
  console.log('Saved nmkrv_verified_main_menu.png');

  // Click Faculty Directory -> Commerce & Management Faculty
  await page.evaluate(() => {
    const chips = Array.from(document.querySelectorAll('#ssmrvActions .ssmrv-action-chip'));
    const facBtn = chips.find(c => c.innerText.includes('Faculty Directory'));
    if (facBtn) facBtn.click();
  });
  await new Promise(r => setTimeout(r, 700));

  await page.evaluate(() => {
    const chips = Array.from(document.querySelectorAll('#ssmrvActions .ssmrv-action-chip'));
    const commBtn = chips.find(c => c.innerText.includes('Commerce'));
    if (commBtn) commBtn.click();
  });
  await new Promise(r => setTimeout(r, 800));

  // Verify department profile cards have website links
  const deptCardCount = await page.$$eval('.ssmrv-dept-profile-item', els => els.length);
  const deptVisitLinks = await page.$$eval('.ssmrv-dept-visit-btn', els => els.length);
  console.log(`Commerce cards: ${deptCardCount}, Visit Website links: ${deptVisitLinks}`);
  if (deptCardCount === 0 || deptVisitLinks === 0) {
    throw new Error('Missing department profile cards or visit website links');
  }

  // Screenshot 2: Department Faculty Directory
  await winEl.screenshot({ path: path.join(__dirname, 'nmkrv_verified_dept_faculty.png') });
  console.log('Saved nmkrv_verified_dept_faculty.png');

  // Search for Principal Dr. R. Suchithra
  await page.type('#ssmrvInput', 'Who is the Principal of NMKRV College?');
  await page.click('#ssmrvSend');
  await new Promise(r => setTimeout(r, 800));

  const facCardText = await page.$eval('.ssmrv-message.bot:last-child', el => el.innerText);
  console.log('Principal profile card snippet:', facCardText.slice(0, 180).replace(/\n+/g, ' | '));
  if (!facCardText.includes('Dr. R. Suchithra') || !facCardText.includes('Visit Official Website Page')) {
    throw new Error('Principal profile card missing expected content');
  }

  // Screenshot 3: Full Faculty Profile
  await winEl.screenshot({ path: path.join(__dirname, 'nmkrv_verified_faculty_profile.png') });
  console.log('Saved nmkrv_verified_faculty_profile.png');

  // Test Back button
  await page.evaluate(() => {
    const backBtn = document.querySelector('#ssmrvActions .ssmrv-action-chip.is-nav-back');
    if (backBtn) backBtn.click();
  });
  await new Promise(r => setTimeout(r, 700));
  const breadcrumbAfterBack = await page.$eval('#ssmrvBreadcrumbCurrent', el => el.innerText);
  console.log('Breadcrumb after clicking Back:', breadcrumbAfterBack);

  await browser.close();
  console.log('ALL NMKRV E2E CHECKS PASSED SUCCESSFULLY!');
})();
