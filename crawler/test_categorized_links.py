import json
import re

# Load clean pages
with open(r"c:\Users\HP\Downloads\SSMRVD\crawler\clean_pages_directory.json", "r", encoding="utf-8") as f:
    clean_pages = json.load(f)

# Group clean pages by category for easy display
categorized = {}
for p in clean_pages:
    cat = p["category"]
    if cat not in categorized:
        categorized[cat] = []
    categorized[cat].append({
        "title": p["title"],
        "url": p["url"],
        "display": p["display"]
    })

print(f"Loaded {len(clean_pages)} clean pages across {len(categorized)} categories:")
for cat, items in categorized.items():
    print(f" - {cat}: {len(items)} links")
