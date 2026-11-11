import json
import re

with open(r"c:\Users\HP\Downloads\SSMRVD\crawler\extracted_pages\campus_life_placement.json", "r", encoding="utf-8") as f:
    d = json.load(f)

text = d.get("textSample", "")
print("Length of placement text:", len(text))

# Search for LPA, CTC, Package, Offers, Statistics
matches = re.findall(r'.{0,50}(?:LPA|CTC|Highest Package|Average|Payscale|Offers Made|Offers).{0,50}', text, re.IGNORECASE)
for m in matches[:15]:
    print(" ->", m.strip())
