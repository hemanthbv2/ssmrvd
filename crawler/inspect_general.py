import json

with open(r"c:\Users\HP\Downloads\SSMRVD\crawler\clean_pages_directory.json", "r", encoding="utf-8") as f:
    pages = json.load(f)

for p in pages:
    if p["category"] == "General":
        print(f" - {p['title']} -> {p['url']}")
