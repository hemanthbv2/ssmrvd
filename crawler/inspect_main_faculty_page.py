import json
import re

with open(r"c:\Users\HP\Downloads\SSMRVD\crawler\extracted_pages\academics_teaching_faculty.json", "r", encoding="utf-8") as f:
    d = json.load(f)

text = d.get("textSample", "")
print("Length of text:", len(text))

# Find occurrences of faculty cards
pattern = re.findall(r'([A-Za-z\.\s]+?)(Assistant Professor|Associate Professor|HOD|Principal|Coordinator)([^\n]+?)(?=Know More)', text)
print(f"Found {len(pattern)} faculty cards in index page:")
for p in pattern:
    print(f"Name: {p[0].strip()} | Role: {p[1].strip()} {p[2].strip()[:60]}")
