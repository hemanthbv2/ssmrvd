# NMKRV College (Autonomous), Jayanagar — Conversational Admissions Assistant & Telemetry Platform

[![Autonomous Since 2005](https://img.shields.io/badge/Status-Autonomous%20(Since%202005)-gold.svg)](https://nmkrv.edu.in/)
[![Bangalore University](https://img.shields.io/badge/Affiliation-Bangalore%20University-navy.svg)](https://nmkrv.edu.in/)
[![RSST / RV Group](https://img.shields.io/badge/Trust-RSST%20(Est.%201973)-blue.svg)](https://nmkrv.edu.in/)
[![WordPress Plugin](https://img.shields.io/badge/WordPress-Plugin%20Ready-green.svg)](file:///nmkrv-chatbot.zip)

Official full-stack conversational admissions chatbot, institutional knowledge base, and dual-write telemetry engine engineered for **NMKRV College (Autonomous)**, Jayanagar 3rd Block, Bengaluru (`https://nmkrv.edu.in/`).

Built from an exhaustive crawl of **239 sitemap URLs** on `https://nmkrv.edu.in/` and the official AICTE Mandatory Disclosure, complete with **116 verified faculty & leadership profiles**, **164 clean website page links**, **all UG/PG/Ph.D./Integrated B.Ed. programmes**, **DISHA Placement Centre details**, **Scholarships**, and the official **NMKRV & RV Educational Institutions (RSST) crests**.

---

## 🏛️ Institutional Highlights & Data Architecture

- **Institution Profile**:
  - Established in **1973** under **Rashtreeya Sikshana Samithi Trust (RSST)**
  - **Autonomous Status** conferred in **2005** (Affiliated to **Bangalore University**)
  - **UGC College with Potential for Excellence (CPE)** (2010), **DST-FIST (Rs. 1.1 Crore)**, **DBT-STAR College Scheme**, **AICTE Approved** (BBA & BCA)
  - Transitioned into a **Co-Educational Institution in 2025**
- **116-Member Faculty & Leadership Directory (`SSMRV_FACULTY_CATALOG`)**:
  - Complete profiles with qualifications, experience, areas of expertise, research highlights, and direct **`🌐 Visit Official Website Page ↗`** buttons across:
    - Institutional Leadership & Administration (`Dr. R. Suchithra`, Principal)
    - Commerce & Management (`B.Com`, `BBA`, `M.Com`)
    - Computer Science & Applications (`B.Sc CS`, `BCA`, `M.Sc Data Science`)
    - Physical & Chemical Sciences (`Chemistry`, `Physics`, `Mathematics`)
    - Life Sciences (`Biotechnology`, `Botany`, `Zoology`, `Genetics`, `Biochemistry`, `Nutrition`)
    - Humanities & Social Sciences (`History`, `Economics`, `Sociology`, `Political Science`, `Psychology`, `Journalism`, `Integrated B.Ed.`)
    - Languages, Library & Physical Education (`Kannada`, `English`, `Hindi`, `Sanskrit`, `Saraswathi Mantapa Library`, `Sports`)
- **164-Page Clean Website Directory (`SSMRV_ALL_PAGES`)**: Every bot response includes a contextual `🌐 Official Page: nmkrv.edu.in/... ↗` source link.
- **Full Multi-Level Backtracking & Main Menu Navigation**:
  - Bottom-only `⬅️ Back` and `🏠 Main Menu` navigation chips with full search & flow history restoration.
  - Clean, readable card layout with zero numbers on buttons, zero in-chat forms, and zero tuition fee figures.

---

## 📂 Directory Structure

```
nmkrv/
├── assets/                          # Official NMKRV & RV logos
│   ├── logo.png                     # Official NMKRV College crest
│   └── rv-logo.png                  # Official RV Educational Institutions crest
├── crawler/                         # Crawler scripts, sitemap extractor & E2E verification
│   ├── discover_nmkrv.py            # Sitemap & link discovery script
│   ├── crawl_nmkrv_all.py           # Full 224-page async crawler
│   ├── generate_nmkrv_data.py       # Knowledge base & 116-faculty profile generator
│   └── test_nmkrv_chatbot.js        # Puppeteer E2E verification suite
├── chatbot-data.js                  # Complete NMKRV knowledge base, 144 flows & 116 profiles
├── script.js                        # Multi-turn state machine, NLP & fuzzy search engine
├── style.css                        # Official CSS design tokens & responsive widget styling
├── telemetry.js                     # Dual-write telemetry bridge (REST + Vercel Dashboard)
├── index.html                       # Standalone live demo preview page
├── nmkrv-chatbot.php                # Complete WordPress Plugin main file
├── nmkrv-chatbot.zip                # Production-ready uploadable WordPress plugin archive
├── nmkrv_master_knowledge.json      # Consolidated crawl knowledge base
├── nmkrv_clean_pages.json           # Sanitized 224-page crawl dataset
└── all_sitemap_urls.txt             # 239 discovered sitemap URLs
```

---

## 🚀 Quick Start & Local Preview

From the root `SSMRVD` folder:
```bash
python -m http.server 8888
```
Open **`http://localhost:8888/nmkrv/index.html`** in your browser.

---

## 🔌 WordPress Plugin Installation

1. Download **`nmkrv/nmkrv-chatbot.zip`**.
2. In your WordPress Admin Dashboard, navigate to **Plugins &rarr; Add New &rarr; Upload Plugin**.
3. Choose `nmkrv-chatbot.zip` and click **Install Now**, then **Activate**.
4. Configure options under **Settings &rarr; NMKRV Chatbot** and the widget will automatically appear on all frontend pages.
