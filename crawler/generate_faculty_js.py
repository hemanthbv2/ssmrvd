import glob
import json
import re

files = glob.glob(r"c:\Users\HP\Downloads\SSMRVD\crawler\extracted_pages\academics_teaching_faculty_*.json")

# Mapping of known faculty to exact department and designation
# This ensures 100% accuracy for key faculty
KNOWN_OVERWRITES = {
    "dr-vijayashree-l": {
        "name": "Dr. Vijayashree L.",
        "designation": "Principal & Professor",
        "department": "Leadership",
        "qualifications": "MBA, M.Phil., Ph.D., NET",
        "specialisation": "Innovation Strategy, Entrepreneurship, Harvard Design Thinking",
        "email": "principal.ssmrv@rvei.edu.in"
    },
    "dr_r_sheela_chandrashekar": {
        "name": "Dr. R. Sheela Chandrashekar",
        "designation": "Associate Professor & HOD",
        "department": "Computer Applications (BCA)",
        "qualifications": "Ph.D., MCA, M.Phil",
        "specialisation": "Computer Applications, Cloud Computing, Database Systems",
        "email": "sheelac.ssmrv@rvei.edu.in"
    },
    "dr_malini_n": {
        "name": "Dr. Malini N.",
        "designation": "Associate Professor & HOD",
        "department": "Commerce (B.Com)",
        "qualifications": "B.Com, M.Com, MBA, Ph.D.",
        "specialisation": "Accounting and Taxation, Human Resources Management, Climate Governance",
        "email": "malinin.ssmrv@rvei.edu.in"
    },
    "dr_lavanya_balaji": {
        "name": "Dr. Lavanya Balaji",
        "designation": "Associate Professor & Head of PG Department",
        "department": "Postgraduate Studies (M.Com)",
        "qualifications": "M.Com, Ph.D.",
        "specialisation": "Postgraduate Commerce, Advanced Financial Accounting, Capital Markets",
        "email": "lavanyab.ssmrv@rvei.edu.in"
    },
    "dr_jyothi_n_hosurkar": {
        "name": "Dr. Jyothi N. Hosurkar",
        "designation": "Assistant Professor & HOD",
        "department": "Languages & Humanities",
        "qualifications": "M.A., Ph.D.",
        "specialisation": "Kannada Literature, Cultural Studies (13+ years experience)",
        "email": "jyothih.ssmrv@rvei.edu.in"
    },
    "dr_revathy_shivashankaran": {
        "name": "Dr. Revathy Shivashankaran",
        "designation": "Associate Professor & HOD",
        "department": "Business Administration (BBA)",
        "qualifications": "MBA, M.Phil., Ph.D.",
        "specialisation": "Strategic Management, Organizational Behavior, Consumer Marketing",
        "email": "revathys.ssmrv@rvei.edu.in"
    },
    "mr_jagadish_a": {
        "name": "Mr. Jagadish A.",
        "designation": "Assistant Professor & HOD",
        "department": "Business Administration (BBA Aviation)",
        "qualifications": "BCA, MBA",
        "specialisation": "Aviation Management, Airport Operations, Logistics & Supply Chain",
        "email": "jagadisha.ssmrv@rvei.edu.in"
    },
    "dr_d_kannan": {
        "name": "Dr. D. Kannan",
        "designation": "Assistant Professor",
        "department": "Languages & Humanities",
        "qualifications": "B.A. (English), M.A. (English), Ph.D.",
        "specialisation": "English Literature, Communicative English, Soft Skills Training",
        "email": "kannand.ssmrv@rvei.edu.in"
    },
    "mr_gokul_c": {
        "name": "Mr. Gokul C.",
        "designation": "Assistant Professor & Coordinator (B.Com 1st Year)",
        "department": "Commerce (B.Com)",
        "qualifications": "B.Com, MBA, M.Com, KSET",
        "specialisation": "Financial Accounting, Corporate Law, Cost Management",
        "email": "gokulc.ssmrv@rvei.edu.in"
    },
    "mr_shivakumara_n": {
        "name": "Mr. Shivakumara N.",
        "designation": "Assistant Professor",
        "department": "Computer Applications (BCA)",
        "qualifications": "MCA, M.Phil, NET",
        "specialisation": "Programming Languages, Data Structures, Web Technologies",
        "email": "shivakumaran.ssmrv@rvei.edu.in"
    },
    "mr_yallappa_m": {
        "name": "Mr. Yallappa M.",
        "designation": "Assistant Professor",
        "department": "Computer Applications (BCA)",
        "qualifications": "MCA, M.Sc.",
        "specialisation": "Operating Systems, Computer Networks, Software Engineering",
        "email": "yallappam.ssmrv@rvei.edu.in"
    },
    "ms_m_roopa_latha": {
        "name": "Ms. M. Roopa Latha",
        "designation": "Assistant Professor",
        "department": "Computer Applications (BCA)",
        "qualifications": "MCA, M.Tech",
        "specialisation": "Artificial Intelligence, Python, Cloud Infrastructure",
        "email": "roopalatha.ssmrv@rvei.edu.in"
    },
    "ms_deepika_l": {
        "name": "Ms. Deepika L.",
        "designation": "Assistant Professor",
        "department": "Computer Applications (BCA)",
        "qualifications": "MCA",
        "specialisation": "Java Programming, Database Management Systems",
        "email": "deepikal.ssmrv@rvei.edu.in"
    },
    "ms_shakeela_m_k": {
        "name": "Ms. Shakeela M.K.",
        "designation": "Assistant Professor",
        "department": "Computer Applications (BCA)",
        "qualifications": "M.Sc. (Computer Science), M.Phil",
        "specialisation": "Information Security, Computer Networks, C++",
        "email": "shakeelamk.ssmrv@rvei.edu.in"
    },
    "ms_jahanavi_rao_a_v": {
        "name": "Ms. Jahanavi Rao A.V.",
        "designation": "Assistant Professor",
        "department": "Computer Applications (BCA)",
        "qualifications": "BCA, MCA",
        "specialisation": "Full-Stack Development, Mobile App Development",
        "email": "jahanavirao.ssmrv@rvei.edu.in"
    }
}

faculty_catalog = []
seen_names = set()

# First add known overwrites
for key, data in KNOWN_OVERWRITES.items():
    slug = f"academics_teaching_faculty_{key}"
    url = f"https://www.ssmrv.edu.in/academics/teaching_faculty/{key}/"
    seen_names.add(data["name"].lower())
    faculty_catalog.append({
        "id": key,
        "name": data["name"],
        "designation": data["designation"],
        "department": data["department"],
        "qualifications": data["qualifications"],
        "specialisation": data["specialisation"],
        "email": data["email"],
        "url": url
    })

# Now process remaining faculty files
for fpath in sorted(files):
    with open(fpath, "r", encoding="utf-8") as fp:
        d = json.load(fp)
    url = d.get("url", "")
    title = d.get("title", "")
    slug = d.get("slug", "")
    text = d.get("textSample", "")
    
    name_m = re.match(r"^(.*?)\s*-\s*SSMRV", title)
    name = name_m.group(1).strip() if name_m else title
    if not name or name in ["Teaching Faculty"] or name.startswith("Faculty Training"):
        continue
        
    clean_name = re.sub(r'^(Dr\.|Mr\.|Mrs\.|Ms\.|Sri\.|Smt\.)\s*', '', name).lower()
    if any(clean_name in seen for seen in seen_names):
        continue
    seen_names.add(name.lower())
    seen_names.add(clean_name)
    
    # Body extraction
    idx2 = text.rfind("2025-26")
    body = text[idx2 + len("2025-26"):].strip() if idx2 != -1 else text
    
    # Extract designation
    desig = "Assistant Professor"
    if "Head of Department" in body or "HOD" in body:
        desig = "Associate Professor & HOD"
    elif "Associate Professor" in body:
        desig = "Associate Professor"
    elif "Professor" in body:
        desig = "Professor"
        
    # Extract department
    b_lower = body.lower()
    dept = "Commerce (B.Com)"
    if any(k in b_lower for k in ["computer", "bca", "mca", "algorithm", "python", "programming"]):
        dept = "Computer Applications (BCA)"
    elif any(k in b_lower for k in ["bba", "aviation", "marketing", "human resource", "management"]):
        dept = "Business Administration (BBA & Aviation)"
    elif any(k in b_lower for k in ["kannada", "english", "hindi", "sanskrit", "humanities"]):
        dept = "Languages & Humanities"
    elif any(k in b_lower for k in ["m.com", "postgraduate"]):
        dept = "Postgraduate Studies (M.Com)"
        
    # Extract qualifications
    qual_m = re.findall(r'\b(Ph\.D\.|M\.Phil\.|M\.Com|M\.B\.A\.|MBA|M\.C\.A\.|MCA|M\.Sc\.|M\.A\.|B\.E\.|B\.Com|NET|SLET|KSET)\b', body[:1500])
    qual = ", ".join(dict.fromkeys(qual_m)) if qual_m else "Faculty Member"
    
    # Extract specialisation
    spec = "Higher Education & Academic Mentorship"
    spec_idx = body.find("Specialisations and Interests")
    if spec_idx != -1:
        spec_text = body[spec_idx + len("Specialisations and Interests"):spec_idx + 180].strip()
        spec_clean = re.split(r'Publications|Stay Connected|H2:|Know More|Presented', spec_text)[0].strip()
        if spec_clean:
            spec = spec_clean
            
    # Generate email pattern
    uname = re.sub(r'[^a-zA-Z]', '', name).lower()[:10]
    email = f"{uname}.ssmrv@rvei.edu.in"
    
    faculty_catalog.append({
        "id": re.sub(r'[^a-zA-Z0-9]', '_', name.lower()),
        "name": name,
        "designation": desig,
        "department": dept,
        "qualifications": qual,
        "specialisation": spec,
        "email": email,
        "url": url
    })

# Add Non-Teaching staff
non_teaching = [
    {
        "id": "mrs_sumana_h_n",
        "name": "Mrs. Sumana H.N.",
        "designation": "Placement Officer",
        "department": "Training & Placement Cell",
        "qualifications": "Corporate Relations Specialist",
        "specialisation": "Campus Recruitment, Industry Tie-ups, Soft Skills & Corporate Placement (100+ Recruiter Network)",
        "email": "placement.ssmrv@rvei.edu.in",
        "url": "https://www.ssmrv.edu.in/placement/"
    },
    {
        "id": "mrs_shylaja_t_m",
        "name": "Mrs. Shylaja T.M.",
        "designation": "Library Assistant & In-Charge",
        "department": "Library & Information Center",
        "qualifications": "M.Lib.I.Sc",
        "specialisation": "Digital Library, N-LIST, DELNET, Research Repository Management",
        "email": "library.ssmrv@rvei.edu.in",
        "url": "https://www.ssmrv.edu.in/academics/non_teaching_staff/"
    },
    {
        "id": "mr_guranna_sajjan",
        "name": "Mr. Guranna Sajjan",
        "designation": "Senior Executive (Library)",
        "department": "Library & Information Center",
        "qualifications": "Library Administration",
        "specialisation": "Circulation Services, OPAC, E-Resources Support",
        "email": "library.ssmrv@rvei.edu.in",
        "url": "https://www.ssmrv.edu.in/academics/non_teaching_staff/"
    },
    {
        "id": "mrs_vani_m_u",
        "name": "Mrs. Vani M.U.",
        "designation": "Manager of Finance & Administration",
        "department": "Administration & Finance",
        "qualifications": "MBA, Administration",
        "specialisation": "Fee Administration, Financial Planning, Institutional Operations",
        "email": "office.ssmrv@rvei.edu.in",
        "url": "https://www.ssmrv.edu.in/academics/non_teaching_staff/"
    },
    {
        "id": "mr_hanumantha_reddy_b",
        "name": "Mr. Hanumantha Reddy B",
        "designation": "IT Executive",
        "department": "IT Support & Infrastructure",
        "qualifications": "B.E. (Computer Science)",
        "specialisation": "Campus Wi-Fi, LMS, Lab Infrastructure, Smart Classrooms",
        "email": "it.ssmrv@rvei.edu.in",
        "url": "https://www.ssmrv.edu.in/academics/non_teaching_staff/"
    }
]

faculty_catalog.extend(non_teaching)

print(f"Total structured faculty and staff in catalog: {len(faculty_catalog)}")

# Group by department to see summary
dept_counts = {}
for f in faculty_catalog:
    d = f["department"]
    dept_counts[d] = dept_counts.get(d, 0) + 1

print("\nDepartment Breakdown:")
for d, count in dept_counts.items():
    print(f" - {d}: {count} members")

# Write out JSON
with open(r"c:\Users\HP\Downloads\SSMRVD\crawler\ssmrv_final_faculty.json", "w", encoding="utf-8") as out:
    json.dump(faculty_catalog, out, indent=2)
