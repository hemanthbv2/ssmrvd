import glob
import json
import os

files = glob.glob(r"c:\Users\HP\Downloads\SSMRVD\crawler\extracted_pages\*.json")
print(f"Total extracted pages: {len(files)}")

categories = {}
for f in files:
    with open(f, "r", encoding="utf-8") as fp:
        d = json.load(fp)
    url = d.get("url", "")
    slug = d.get("slug", "")
    title = d.get("title", "")
    
    parts = url.replace("https://www.ssmrv.edu.in/", "").strip("/").split("/")
    top_cat = parts[0] if parts and parts[0] else "home"
    if top_cat not in categories:
        categories[top_cat] = []
    categories[top_cat].append({"url": url, "title": title, "slug": slug})

for cat, items in sorted(categories.items()):
    print(f"\n--- {cat.upper()} ({len(items)} pages) ---")
    for it in items[:10]:
        print(f"  • {it['title']} ({it['url']})")
    if len(items) > 10:
        print(f"    ... and {len(items)-10} more")
