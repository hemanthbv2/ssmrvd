const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch({ headless: 'new' });
    const page = await browser.newPage();
    
    const urls = [
        'https://www.ssmrv.edu.in/',
        'https://www.ssmrv.edu.in/academics/programmes/',
        'https://www.ssmrv.edu.in/placement/'
    ];
    
    for (const u of urls) {
        try {
            await page.goto(u, { waitUntil: 'domcontentloaded', timeout: 15000 });
            const links = await page.evaluate(() => {
                return Array.from(document.querySelectorAll('a'))
                    .map(a => ({ text: a.innerText.trim(), href: a.href }))
                    .filter(a => a.href && a.href.includes('.pdf'));
            });
            console.log(`\nURL: ${u}`);
            console.log(JSON.stringify(links, null, 2));
        } catch (e) {
            console.error('Error on', u, e.message);
        }
    }
    
    await browser.close();
})();
