import glob
import json
import re

files = glob.glob(r"c:\Users\HP\Downloads\SSMRVD\crawler\extracted_pages\academics_teaching_faculty_*.json")

faculty_db = []
seen = set()

for fpath in files:
    with open(fpath, "r", encoding="utf-8") as fp:
        d = json.load(fp)
    url = d.get("url", "")
    title = d.get("title", "")
    text = d.get("textSample", "")
    
    name_m = re.match(r"^(.*?)\s*-\s*SSMRV", title)
    name = name_m.group(1).strip() if name_m else title
    if not name or name in ["Teaching Faculty"] or name.startswith("Faculty Training"):
        continue
    if name in seen:
        continue
    seen.add(name)
    
    # Body text after 2025-26
    idx2 = text.rfind("2025-26")
    body = text[idx2 + len("2025-26"):].strip() if idx2 != -1 else text
    
    # Try to find the portion specifically about this faculty member
    # Look for name in body
    name_idx = body.find(name)
    person_text = body[name_idx:name_idx + 600] if name_idx != -1 else body[:600]
    
    # Designation
    desig = "Assistant Professor"
    if "Principal" in person_text and ("Vijayashree" in name or "Principal" in title):
        desig = "Principal & Professor"
    elif "Head of Department" in person_text or "HOD" in person_text or "Head of the Department" in person_text or "Head of the Postgraduate Department" in person_text:
        if "Head of the Postgraduate Department" in person_text:
            desig = "HOD - Postgraduate Department & Asst. Professor"
        elif "Associate Professor" in person_text:
            desig = "Associate Professor & HOD"
        else:
            desig = "HOD & Assistant Professor"
    elif "Associate Professor" in person_text:
        desig = "Associate Professor"
    elif "Assistant Professor" in person_text:
        if "Coordinator" in person_text:
            coord_m = re.search(r'Coordinator\s*\([^)]+\)', person_text)
            if coord_m:
                desig = f"Assistant Professor & {coord_m.group(0)}"
            else:
                desig = "Assistant Professor & Coordinator"
        else:
            desig = "Assistant Professor"
    elif "Professor" in person_text:
        desig = "Professor"
        
    # Department
    p_lower = person_text.lower()
    dept = "Commerce" # default for SSMRV
    if any(k in p_lower for k in ["computer", "bca", "machine learning", "ai", "data science", "mca", "python"]):
        dept = "Computer Applications (BCA)"
    elif any(k in p_lower for k in ["bba", "aviation", "management", "business administration", "marketing", "hr analytics"]):
        dept = "Business Administration (BBA & Aviation)"
    elif any(k in p_lower for k in ["kannada", "english", "hindi", "sanskrit", "humanities"]):
        dept = "Languages & Humanities"
    elif any(k in p_lower for k in ["m.com", "postgraduate"]):
        dept = "Postgraduate Studies (M.Com)"
    elif any(k in p_lower for k in ["commerce", "b.com", "accounting", "taxation", "finance", "audit"]):
        dept = "Commerce (B.Com)"
        
    # Qualifications
    qual = ""
    # Look for common degree strings
    qual_patterns = re.findall(r'\b(Ph\.D\.|M\.Phil\.|M\.Com|M\.B\.A\.|MBA|M\.C\.A\.|MCA|M\.Sc\.|M\.A\.|B\.E\.|B\.Com|NET|SLET|KSET)\b', person_text)
    if qual_patterns:
        qual = ", ".join(dict.fromkeys(qual_patterns))
        
    # Areas of interest / bio snippet
    spec = ""
    spec_idx = person_text.find("Specialisations and Interests")
    if spec_idx != -1:
        spec = person_text[spec_idx + len("Specialisations and Interests"):spec_idx + 150].strip()
        spec = re.split(r'Publications|Stay Connected|H2:|Know More|Presented', spec)[0].strip()
        
    faculty_db.append({
        "name": name,
        "designation": desig,
        "department": dept,
        "qualifications": qual,
        "specialisation": spec,
        "url": url
    })

# Add Non-teaching staff from academics_non_teaching_staff.json
with open(r"c:\Users\HP\Downloads\SSMRVD\crawler\extracted_pages\academics_non_teaching_staff.json", "r", encoding="utf-8") as fp:
    nt_data = json.load(fp)

nt_headings = nt_data.get("headings", [])
current_section = "Administration"
for h in nt_headings:
    h_clean = h.replace("H2: ", "").strip()
    if h_clean in ["Library", "Training and Placement", "Administration", "Group D Staff"]:
        current_section = h_clean
        continue
    if h_clean.startswith("Mrs.") or h_clean.startswith("Mr.") or h_clean.startswith("Ms.") or h_clean.startswith("Sri.") or h_clean.startswith("Smt."):
        # It is a staff member
        role = "Staff"
        if "Sumana" in h_clean:
            role = "Placement Officer"
        elif "Shylaja" in h_clean:
            role = "Library Assistant"
        elif "Guranna" in h_clean:
            role = "Senior Executive (Library)"
        elif "Vani" in h_clean:
            role = "Manager of Finance & Administration"
        elif "Yeshwanthi" in h_clean:
            role = "Assistant Manager – HR & Admin"
        elif "Jyothi" in h_clean:
            role = "Assistant Manager – Accounts"
        elif "Hanumantha" in h_clean or "Raviraj" in h_clean:
            role = "IT Executive"
            
        faculty_db.append({
            "name": h_clean,
            "designation": role,
            "department": current_section,
            "qualifications": "",
            "specialisation": "",
            "url": "https://www.ssmrv.edu.in/academics/non_teaching_staff/"
        })

print(f"Total faculty and staff compiled: {len(faculty_db)}")

# Save to output JSON
with open(r"c:\Users\HP\Downloads\SSMRVD\crawler\compiled_faculty_directory.json", "w", encoding="utf-8") as out:
    json.dump(faculty_db, out, indent=2)

print("Sample entries:")
for item in faculty_db[:6]:
    print(f" - {item['name']} ({item['designation']}, {item['department']}) [{item['qualifications']}]")
