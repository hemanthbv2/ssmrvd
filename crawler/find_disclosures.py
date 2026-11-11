import glob
import json
import re

files = glob.glob(r"c:\Users\HP\Downloads\SSMRVD\crawler\extracted_pages\*.json")

found = []
for f in files:
    with open(f, "r", encoding="utf-8") as fp:
        d = json.load(fp)
    text = d.get("textSample", "")
    url = d.get("url", "")
    if "Mandatory Disclosure" in text or "AICTE" in text or "prospectus" in text.lower() or "brochure" in text.lower():
        found.append(url)

print("Pages with Mandatory Disclosure / AICTE / Prospectus / Brochure:", len(found))
for u in found[:8]:
    print(" -", u)
