import glob
import json
import os
import re

files = glob.glob(r"c:\Users\HP\Downloads\SSMRVD\crawler\extracted_pages\academics_teaching_faculty_*.json")
print(f"Total faculty files found: {len(files)}")

faculty_list = []
seen_names = set()

for fpath in files:
    with open(fpath, "r", encoding="utf-8") as fp:
        d = json.load(fp)
    url = d.get("url", "")
    title = d.get("title", "")
    text = d.get("textSample", "")
    
    # Extract name
    name_m = re.match(r"^(.*?)\s*-\s*SSMRV", title)
    name = name_m.group(1).strip() if name_m else title
    if not name or name == "Teaching Faculty" or name.startswith("Faculty Training"):
        continue
    
    if name in seen_names:
        continue
    seen_names.add(name)
    
    # Try to extract designation, department, and qualifications from textSample
    # Common pattern: after menu, name repeats followed by designation and department
    # e.g.: "Dr. Malini N. Associate Professor and Head of Department – CommerceB.Com..."
    # or "Mr. Shivakumara N. Assistant Professor – Computer Applications..."
    
    # Let's find name occurrence in text
    idx = text.rfind(name)
    after_name = text[idx + len(name):idx + len(name) + 300] if idx != -1 else ""
    
    faculty_list.append({
        "name": name,
        "url": url,
        "raw_bio_snip": after_name.strip()
    })

print(f"Unique faculty profiles: {len(faculty_list)}")
for f in faculty_list[:10]:
    print(f["name"], "||", f["raw_bio_snip"][:100])
