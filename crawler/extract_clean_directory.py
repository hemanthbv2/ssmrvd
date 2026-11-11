import glob
import json
import re

files = glob.glob(r"c:\Users\HP\Downloads\SSMRVD\crawler\extracted_pages\*.json")

ignore_slugs = {
    "faq", "policies_and_procedures", "dummy", "hello-world", "author_ssmrvd_new"
}

clean_pages = []

for f in sorted(files):
    with open(f, "r", encoding="utf-8") as fp:
        d = json.load(fp)
    url = d.get("url", "")
    slug = d.get("slug", "")
    title = d.get("title", "").replace(" - SSMRV College", "").replace(" – SSMRV College", "").strip()
    text = d.get("textSample", "")
    
    # Filter out junk/spam/templates
    if slug in ignore_slugs or "elementor-hf" in url or "MACANASIA" in title or "CUANWIN" in title:
        continue
    if not url.startswith("https://www.ssmrv.edu.in/"):
        continue

    # Determine broad category
    cat = "General"
    if "/academics/teaching_faculty/" in url:
        cat = "Faculty"
    elif "/academics/programmes/" in url:
        cat = "Academic Programmes"
    elif "/about_us/" in url or url.endswith("/about_us"):
        cat = "About & Governance"
    elif "admission" in url:
        cat = "Admissions"
    elif "placement" in url:
        cat = "Placements"
    elif "clubs_and_associations" in url or "campus_life" in url:
        cat = "Campus Life & Centres"
    elif "iqac" in url or "nirf" in url or "aqar" in url or "mandatory_disclosure" in url:
        cat = "Accreditation & Disclosures"
    elif "contact" in url:
        cat = "Contact"
        
    # Generate clean short URL display
    url_display = url.replace("https://www.", "").rstrip("/")
    if url_display.endswith("/"):
        url_display = url_display[:-1]
        
    clean_pages.append({
        "url": url,
        "display": url_display,
        "title": title,
        "category": cat,
        "slug": slug
    })

print(f"Total clean institutional pages extracted: {len(clean_pages)}")

# Group by category
by_cat = {}
for p in clean_pages:
    by_cat[p["category"]] = by_cat.get(p["category"], 0) + 1

for c, count in by_cat.items():
    print(f" - {c}: {count} pages")

# Write out to JSON
with open(r"c:\Users\HP\Downloads\SSMRVD\crawler\clean_pages_directory.json", "w", encoding="utf-8") as out:
    json.dump(clean_pages, out, indent=2)
