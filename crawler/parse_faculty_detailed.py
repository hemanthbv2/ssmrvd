import glob
import json
import re

files = glob.glob(r"c:\Users\HP\Downloads\SSMRVD\crawler\extracted_pages\academics_teaching_faculty_*.json")

departments = {
    "BCA": ["bca", "computer", "machine learning", "ai", "data science", "cloud", "python", "java", "software"],
    "Commerce": ["commerce", "b.com", "m.com", "accounting", "taxation", "finance", "banking", "audit"],
    "BBA": ["bba", "management", "aviation", "marketing", "human resource", "hr", "business administration"],
    "Languages": ["kannada", "english", "hindi", "sanskrit", "language", "literature"],
    "Physical Education": ["physical education", "sports", "ped"],
    "Library": ["library", "librarian"]
}

faculty_records = []
seen = set()

for fpath in files:
    with open(fpath, "r", encoding="utf-8") as fp:
        d = json.load(fp)
    url = d.get("url", "")
    title = d.get("title", "")
    text = d.get("textSample", "")
    headings = d.get("headings", [])
    
    name_m = re.match(r"^(.*?)\s*-\s*SSMRV", title)
    name = name_m.group(1).strip() if name_m else title
    if not name or name in ["Teaching Faculty"] or name.startswith("Faculty Training"):
        continue
    if name in seen:
        continue
    seen.add(name)
    
    # Extract designation
    designation = "Faculty Member"
    if "Principal" in text[:600] and "Vijayashree" in name:
        designation = "Principal & Professor"
    elif "Head of Department" in text or "HOD" in text or "Head of the Department" in text:
        designation = "Associate Professor & Head of Department"
    elif "Associate Professor" in text:
        designation = "Associate Professor"
    elif "Assistant Professor" in text:
        designation = "Assistant Professor"
    elif "Professor" in text:
        designation = "Professor"
        
    # Department detection
    text_lower = text.lower()
    dept = "General Academics"
    for dept_name, kws in departments.items():
        if any(kw in text_lower[:1200] for kw in kws):
            dept = dept_name
            break
            
    # Extract qualifications
    qual_match = re.search(r'\b(Ph\.?D\.?|M\.?Phil\.?|M\.?Com\.?|M\.?B\.?A\.?|M\.?C\.?A\.?|M\.?Sc\.?|M\.?A\.?|B\.?E\.?|B\.?Com\.?|NET|SLET|KSET)\b[^\n,.]*', text[:1500])
    qual = qual_match.group(0).strip() if qual_match else ""
    
    # Extract specialisation
    spec = ""
    spec_idx = text.find("Specialisations and Interests")
    if spec_idx != -1:
        spec_text = text[spec_idx + len("Specialisations and Interests"):spec_idx + 250].strip()
        # Clean up before Publications or next heading
        spec_text = re.split(r'Publications|Stay Connected|H2:', spec_text)[0].strip()
        spec = spec_text
        
    faculty_records.append({
        "name": name,
        "designation": designation,
        "department": dept,
        "qualification": qual,
        "specialisation": spec[:120],
        "url": url
    })

print(f"Parsed {len(faculty_records)} faculty profiles successfully!")
# Output department distribution
dist = {}
for r in faculty_records:
    dist[r["department"]] = dist.get(r["department"], 0) + 1
print("Department counts:", dist)

with open(r"c:\Users\HP\Downloads\SSMRVD\crawler\parsed_faculty.json", "w", encoding="utf-8") as out:
    json.dump(faculty_records, out, indent=2)
