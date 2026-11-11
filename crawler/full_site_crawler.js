const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');

const URLS_FILE = path.join(__dirname, '..', 'all_sitemap_urls.txt');
const SCREENSHOTS_DIR = path.join(__dirname, 'screenshots');
const EXTRACTS_DIR = path.join(__dirname, 'extracted_pages');

if (!fs.existsSync(SCREENSHOTS_DIR)) fs.mkdirSync(SCREENSHOTS_DIR, { recursive: true });
if (!fs.existsSync(EXTRACTS_DIR)) fs.mkdirSync(EXTRACTS_DIR, { recursive: true });

function slugify(url) {
  let clean = url.replace(/^https?:\/\/(www\.)?ssmrv\.edu\.in\/?/, '').replace(/\/$/, '');
  if (!clean) return 'homepage';
  return clean.replace(/[^a-zA-Z0-9_-]/g, '_').substring(0, 80);
}

async function run() {
  const rawUrls = fs.readFileSync(URLS_FILE, 'utf-8').split('\n').map(s => s.trim()).filter(Boolean);
  console.log(`Starting full site crawl & visual screen recording of ${rawUrls.length} pages...`);

  const browser = await puppeteer.launch({
    headless: "new",
    executablePath: "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe",
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-gpu', '--window-size=1440,900']
  });

  const CONCURRENCY = 3;
  let index = 0;
  const masterData = [];

  async function worker(workerId) {
    const page = await browser.newPage();
    await page.setViewport({ width: 1440, height: 900 });

    // Block heavy media like fonts, tracking, ads to speed up
    await page.setRequestInterception(true);
    page.on('request', (req) => {
      const resourceType = req.resourceType();
      if (['media'].includes(resourceType)) {
        req.abort();
      } else {
        req.continue();
      }
    });

    while (index < rawUrls.length) {
      const currentIndex = index++;
      const url = rawUrls[currentIndex];
      const slug = slugify(url);
      const shotPath = path.join(SCREENSHOTS_DIR, `${slug}.png`);
      const extractPath = path.join(EXTRACTS_DIR, `${slug}.json`);

      console.log(`[Worker ${workerId}] [${currentIndex + 1}/${rawUrls.length}] Capturing: ${url}`);

      try {
        await page.goto(url, { waitUntil: 'domcontentloaded', timeout: 35000 });
        // Brief pause for element rendering
        await new Promise(r => setTimeout(r, 600));

        // Take screen capture
        await page.screenshot({ path: shotPath, fullPage: false });

        // Extract deep text, headings, meta
        const extracted = await page.evaluate((pageUrl) => {
          // Remove scripts and styles
          const clone = document.body.cloneNode(true);
          const removals = clone.querySelectorAll('script, style, noscript, iframe');
          removals.forEach(el => el.remove());

          const title = document.title ? document.title.trim() : '';
          const metaDesc = document.querySelector('meta[name="description"]')?.content?.trim() || '';

          const headings = [];
          document.querySelectorAll('h1, h2, h3').forEach(h => {
            const txt = h.innerText.trim();
            if (txt && txt.length < 150) headings.push(`${h.tagName}: ${txt}`);
          });

          // Text content
          const text = clone.innerText.replace(/\s+/g, ' ').trim();

          // Emails and phones
          const emails = Array.from(new Set(text.match(/[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/g) || []));
          const phones = Array.from(new Set(text.match(/(?:\+91[\s-]?)?[6-9]\d{9}|080[\s-]?\d{7,8}/g) || []));

          return {
            url: pageUrl,
            title,
            metaDesc,
            headings: headings.slice(0, 30),
            emails,
            phones,
            textSample: text.substring(0, 3500),
            fullTextLength: text.length
          };
        }, url);

        extracted.slug = slug;
        extracted.screenshot = `screenshots/${slug}.png`;

        fs.writeFileSync(extractPath, JSON.stringify(extracted, null, 2), 'utf-8');
        masterData.push(extracted);

        console.log(`  ✓ Done ${slug} (${extracted.fullTextLength} chars text)`);
      } catch (err) {
        console.warn(`  ✗ Error on ${url}: ${err.message}`);
        masterData.push({
          url,
          slug,
          error: err.message
        });
      }
    }

    await page.close();
  }

  const workers = [];
  for (let i = 0; i < CONCURRENCY; i++) {
    workers.push(worker(i + 1));
  }

  await Promise.all(workers);
  await browser.close();

  // Save master aggregation
  const masterPath = path.join(__dirname, '..', 'ssmrv_master_knowledge.json');
  fs.writeFileSync(masterPath, JSON.stringify(masterData, null, 2), 'utf-8');
  console.log(`\n🎉 Successfully finished crawling & capturing all pages!`);
  console.log(`Master knowledge base saved to: ${masterPath}`);

  // Generate visual audit HTML page
  generateVisualAuditHtml(masterData);
}

function generateVisualAuditHtml(items) {
  const auditPath = path.join(__dirname, '..', 'visual_audit.html');
  const valid = items.filter(i => !i.error);

  const cardsHtml = valid.map(item => `
    <div class="audit-card">
      <div class="card-img-wrap">
        <img src="crawler/${item.screenshot}" alt="${item.title}" loading="lazy">
      </div>
      <div class="card-body">
        <a href="${item.url}" target="_blank" class="card-link">${item.title || item.url}</a>
        <div class="card-url">${item.url}</div>
        <p class="card-desc">${item.metaDesc || item.textSample.substring(0, 150) + '...'}</p>
        <div class="card-meta">
          <span>📝 ${item.fullTextLength} chars</span>
          ${item.phones.length ? `<span>📞 ${item.phones.slice(0, 2).join(', ')}</span>` : ''}
          ${item.emails.length ? `<span>✉️ ${item.emails.slice(0, 2).join(', ')}</span>` : ''}
        </div>
      </div>
    </div>
  `).join('\n');

  const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>SSMRV College — Visual Audit & Screen Records (All Pages)</title>
  <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Space+Grotesk:wght@700&display=swap">
  <style>
    body {
      background: #0c1222;
      color: #e2e8f0;
      font-family: 'Inter', sans-serif;
      padding: 40px 5%;
      margin: 0;
    }
    header {
      margin-bottom: 36px;
      border-bottom: 1px solid rgba(255,255,255,0.1);
      padding-bottom: 24px;
    }
    h1 {
      font-family: 'Space Grotesk', sans-serif;
      color: #f3b743;
      font-size: 32px;
      margin: 0 0 8px;
    }
    .stats-bar {
      display: flex;
      gap: 24px;
      font-size: 14px;
      color: #94a3b8;
    }
    .stats-bar b {
      color: #ffffff;
    }
    .grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(360px, 1fr));
      gap: 24px;
    }
    .audit-card {
      background: #172844;
      border: 1px solid rgba(255,255,255,0.08);
      border-radius: 12px;
      overflow: hidden;
      transition: transform 0.2s, box-shadow 0.2s;
    }
    .audit-card:hover {
      transform: translateY(-4px);
      box-shadow: 0 12px 30px rgba(0,0,0,0.4);
      border-color: #cf5d41;
    }
    .card-img-wrap {
      width: 100%;
      height: 200px;
      background: #0f1c30;
      overflow: hidden;
      border-bottom: 1px solid rgba(255,255,255,0.08);
    }
    .card-img-wrap img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: top;
    }
    .card-body {
      padding: 18px;
    }
    .card-link {
      color: #ffffff;
      font-weight: 700;
      text-decoration: none;
      font-size: 15px;
      display: block;
      margin-bottom: 4px;
    }
    .card-link:hover {
      color: #f3b743;
    }
    .card-url {
      color: #64748b;
      font-size: 11px;
      margin-bottom: 10px;
      word-break: break-all;
    }
    .card-desc {
      font-size: 12.5px;
      color: #94a3b8;
      line-height: 1.5;
      margin-bottom: 14px;
    }
    .card-meta {
      display: flex;
      flex-wrap: wrap;
      gap: 8px;
      font-size: 11px;
      color: #cbd5e1;
    }
    .card-meta span {
      background: rgba(255,255,255,0.06);
      padding: 3px 8px;
      border-radius: 4px;
    }
  </style>
</head>
<body>
  <header>
    <h1>SSMRV College — Visual Screen Capture Audit</h1>
    <p>Comprehensive frame capture and data extraction across the entire ssmrv.edu.in sitemap.</p>
    <div class="stats-bar">
      <span>Total Pages Discovered: <b>${items.length}</b></span>
      <span>Screenshots Captured: <b>${valid.length}</b></span>
      <span>Date: <b>${new Date().toLocaleDateString()}</b></span>
    </div>
  </header>
  <div class="grid">
    ${cardsHtml}
  </div>
</body>
</html>`;

  fs.writeFileSync(auditPath, html, 'utf-8');
  console.log(`Visual Audit HTML generated at: ${auditPath}`);
}

run().catch(err => {
  console.error("Fatal crawler error:", err);
  process.exit(1);
});
