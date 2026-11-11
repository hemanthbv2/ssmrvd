const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch({ headless: 'new' });
    const page = await browser.newPage();
    
    const urls = [
        'https://www.ssmrv.edu.in/about_us/mandatory_disclosure/',
        'https://www.ssmrv.edu.in/admissions/admission_procedure/',
        'https://www.ssmrv.edu.in/about_us/'
    ];
    
    for (const u of urls) {
        try {
            await page.goto(u, { waitUntil: 'domcontentloaded', timeout: 15000 });
            const links = await page.evaluate(() => {
                return Array.from(document.querySelectorAll('a'))
                    .map(a => ({ text: a.innerText.trim(), href: a.href }))
                    .filter(a => a.href && (a.href.endsWith('.pdf') || a.href.includes('drive.google') || a.text.toLowerCase().includes('brochure') || a.text.toLowerCase().includes('disclosure') || a.text.toLowerCase().includes('aicte')));
            });
            console.log(`\nURL: ${u}`);
            console.log(JSON.stringify(links, null, 2));
        } catch (e) {
            console.error('Error on', u, e.message);
        }
    }
    
    await browser.close();
})();
