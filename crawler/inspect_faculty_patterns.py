import glob
import json
import re

files = glob.glob(r"c:\Users\HP\Downloads\SSMRVD\crawler\extracted_pages\academics_teaching_faculty_*.json")

for f in sorted(files):
    with open(f, "r", encoding="utf-8") as fp:
        d = json.load(fp)
    slug = d.get("slug", "")
    text = d.get("textSample", "")
    
    # In each page, let's look at lines around the first occurrence of Professor / Principal / HOD
    match = re.search(r'([A-Za-z\s\.]+?)\s*(Principal|Head of Department|Associate Professor|Assistant Professor|Professor)\s*(.*?)(?=\.|\n|Specialisations|Publications|Stay Connected|Back to)', text[1000:])
    if match:
        full_match = match.group(0).strip()
        print(f"[{slug}]: {full_match[:110]}")
    else:
        print(f"[{slug}]: NO MATCH, Sample: {text[1200:1300]}")
