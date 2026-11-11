import glob
import json
import re

files = glob.glob(r"c:\Users\HP\Downloads\SSMRVD\crawler\extracted_pages\*.json")

pdf_links = set()
for f in files:
    with open(f, "r", encoding="utf-8") as fp:
        d = json.load(fp)
    text = d.get("textSample", "")
    headings = d.get("headings", [])
    # Search for .pdf links in text or any URLs
    pdfs = re.findall(r'https?://[^\s"\'<>]+\.pdf', text)
    for p in pdfs:
        pdf_links.add(p)

print("PDF links found:", len(pdf_links))
for p in pdf_links:
    print(p)
