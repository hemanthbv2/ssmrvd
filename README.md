# Sivananda Sarma Memorial RV Degree College (SSMRV) — Conversational Admissions Assistant & Telemetry Platform

[![NAAC Accredited 'A' Grade](https://img.shields.io/badge/NAAC-A%20Grade-gold.svg)](https://www.ssmrv.edu.in/)
[![Bengaluru City University](https://img.shields.io/badge/Affiliation-Bengaluru%20City%20University-navy.svg)](https://www.ssmrv.edu.in/)
[![RSST / RV Group](https://img.shields.io/badge/Trust-RSST%20(Est.%201940)-blue.svg)](https://www.ssmrv.edu.in/)
[![WordPress Plugin](https://img.shields.io/badge/WordPress-Plugin%20Ready-green.svg)](file:///ssmrv-chatbot.zip)

Official full-stack conversational admissions chatbot, institutional knowledge base, and dual-write lead telemetry engine engineered for **Sivananda Sarma Memorial RV Degree College (SSMRV)**, Jayanagar, Bengaluru.

Built from an exhaustive headless crawl of **130 sitemap pages** on `https://www.ssmrv.edu.in/`, complete with **63 structured faculty profiles**, **123 verified page links**, **official UGC refund matrix**, **Paryapti placement metrics (11 LPA Highest CTC)**, and the official **RV Educational Institutions (RSST) crest**.

---

## 🏛️ Institutional Highlights & Data Architecture

- **Official Brand Palette**: 
  - Deep Navy: `#172844`
  - Terracotta / Coral: `#CF5D41`
  - Royal Gold: `#F3B743`
  - Live Online Green: `#61CE70`
- **63-Member Faculty Directory**: Comprehensive teaching and staff database across Computer Applications (BCA), Commerce (B.Com), Business Administration (BBA & Aviation), Postgraduate Studies (M.Com), Languages & Humanities, Library, and Training & Placement.
- **123-Page Link Directory (`SSMRV_ALL_PAGES`)**: Every bot response includes a contextual `🌐 Official Page: ssmrv.edu.in/... ↗` source link.
- **Paryapti Placement Metrics**:
  - Highest CTC: **11 LPA** (BBA) | **8 LPA** (BCA & B.Com)
  - Average CTC: **5 LPA to 6.5 LPA**
  - Top Recruiters: Deloitte, Accenture, Infosys, Wipro, TCS, Capgemini, Cognizant, EY, KPMG, Amazon, Target, ICICI Bank.
- **Admissions & Regulatory Disclosures**:
  - 1-Click download for Mandatory Disclosure 2025-26 PDF (`MDC2025-26.pdf`)
  - 1-Click download for AICTE Official Approval Copy (`AICTE-approval-copy.pdf`)
  - 1-Click download for Odd Semester Academic Calendar of Events (`ACOE-26-27-Odd-Sem.pdf`)
  - UGC 2024–2026 Admission Cancellation & Refund Matrix (100%, 90%, 80%, 50%, 0%)
- **Campus Navigation**: Instant Google Maps shortcut to #17, 36th Cross, 4th T Block Jayanagar, with Green Line Metro (Jayanagar / RV Road) and BMTC bus routes.

---

## 📂 Repository Structure

```
SSMRVD/
├── assets/                          # Official logos & media assets
│   ├── logo.png                     # Horizontal SSMRV Degree College banner
│   └── rv-logo.png                  # High-res 2134x2134 circular RV Crest
├── dashboard/                       # Dark Glassmorphic Telemetry Command Center
│   └── index.html                   # Live analytics & lead management UI
├── crawler/                         # Crawler engine, sitemap extractor & test harness
│   ├── clean_pages_directory.json   # 123 verified page URLs directory
│   ├── ssmrv_final_faculty.json     # 63 structured faculty & staff profiles
│   ├── extracted_pages/             # 130 structured extraction JSONs
│   ├── screenshots/                 # 130 visual audit captures
│   └── test_*.js                    # Puppeteer E2E automated test suites
├── chatbot-data.js                  # Complete knowledge base, flows & sitemap directory
├── script.js                        # Multi-turn state machine, NLP & fuzzy search engine
├── style.css                        # Official CSS design tokens & responsive widget styling
├── telemetry.js                     # Dual-write telemetry bridge (REST + Vercel Dashboard)
├── index.html                       # Standalone live demo test harness
├── ssmrv-chatbot.php                # Complete WordPress Plugin main file
├── ssmrv-chatbot.zip                # Production-ready uploadable WordPress plugin archive
├── ssmrv_master_knowledge.json      # Master consolidated knowledge graph (536 KB)
├── visual_audit.html                # Interactive 130-page visual gallery
└── all_sitemap_urls.txt             # Crawled sitemap endpoints
```

---

## 🚀 Quick Start & Local Preview

### 1. Run Local Dev Server
```bash
python -m http.server 8888
```
Open **`http://localhost:8888/index.html`** in your browser.

### 2. View Telemetry Command Center
Open **`http://localhost:8888/dashboard/index.html`** to view incoming admission leads, user session stats, and query analytics.

---

## 🔌 WordPress Plugin Installation

1. Download **`ssmrv-chatbot.zip`** from this repository.
2. In your WordPress Admin Dashboard, navigate to **Plugins &rarr; Add New &rarr; Upload Plugin**.
3. Choose `ssmrv-chatbot.zip` and click **Install Now**, then **Activate**.
4. Configure options under **Settings &rarr; SSMRV Chatbot Settings** (Google Sheets webhook URL, Vercel telemetry endpoint, custom logo).
5. The widget will automatically appear on all frontend pages!

---

## 🧪 Automated Testing with Puppeteer

Run end-to-end headless Chrome verification tests:
```bash
# Test Faculty Search, Official Downloads & Campus Navigation
node crawler/test_faculty_and_downloads.js

# Test Contextual Source Links & Page Directory
node crawler/test_website_links_and_navigation.js

# Test Zero Fee Numbers & Placement Package Metrics
node crawler/test_packages_and_fees.js
```

---

## 🔒 Security & Data Sanitization

During the sitemap crawl, two URLs on the live domain (`/faq/` and `/policies_and_procedures/`) were identified as containing third-party SEO spam text on the remote server. Our pipeline quarantined those URLs and sourced verified institutional policies directly from `/admission_cancellation_process/`, `/mandatory_disclosure/`, and official regulatory gazettes.

---

## 📜 License
Created for **Sivananda Sarma Memorial RV Degree College (SSMRV)**.  
Under the auspices of **Rashtreeya Sikshana Samithi Trust (RSST)**.
