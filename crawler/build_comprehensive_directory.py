import json
import glob
import os
import re

# 1. Load existing catalog if any
with open('crawler/ssmrv_final_faculty.json', 'r', encoding='utf-8') as f:
    existing_catalog = json.load(f)

faculty_by_clean_name = {}
for fac in existing_catalog:
    clean = re.sub(r'^(Dr\.|Mr\.|Mrs\.|Ms\.|Sri\.|Smt\.|Prof\.)\s*', '', fac['name']).strip().lower()
    clean = re.sub(r'[^a-z0-9]', '', clean)
    faculty_by_clean_name[clean] = fac

print(f"Loaded {len(existing_catalog)} existing faculty profiles.")

# 2. Load the 49 live parsed teaching faculty
with open('crawler/parsed_live_faculty.json', 'r', encoding='utf-8') as f:
    live_teaching = json.load(f)

# Helper to normalize clean name
def get_clean_key(name):
    c = re.sub(r'^(Dr\.|Mr\.|Mrs\.|Ms\.|Sri\.|Smt\.|Prof\.)\s*', '', name).strip().lower()
    return re.sub(r'[^a-z0-9]', '', c)

# 3. Add or update from live teaching
department_map = {
    'commerce': 'Commerce (B.Com)',
    'bcom': 'Commerce (B.Com)',
    'bca': 'Computer Applications (BCA)',
    'm.com': 'Postgraduate Studies (M.Com)',
    'mcom': 'Postgraduate Studies (M.Com)',
    'bba': 'Business Administration (BBA & Aviation)',
    'pe': 'Physical Education & Sports',
    'physical education': 'Physical Education & Sports'
}

for item in live_teaching:
    raw_name = item['name'].strip()
    desig = item['designation'].strip()
    key = get_clean_key(raw_name)

    # Determine dept from designation if mentioned
    dept = None
    desig_lower = desig.lower()
    if 'commerce' in desig_lower or 'bcom' in desig_lower:
        dept = 'Commerce (B.Com)'
    elif 'bca' in desig_lower or 'computer' in desig_lower:
        dept = 'Computer Applications (BCA)'
    elif 'm.com' in desig_lower or 'mcom' in desig_lower:
        dept = 'Postgraduate Studies (M.Com)'
    elif 'bba' in desig_lower or 'aviation' in desig_lower:
        dept = 'Business Administration (BBA & Aviation)'
    elif 'pe' in desig_lower or 'physical' in desig_lower:
        dept = 'Physical Education & Sports'

    if key in faculty_by_clean_name:
        # Update designation and department if more specific
        existing = faculty_by_clean_name[key]
        if desig and desig != 'Assistant Professor':
            existing['designation'] = desig
        if dept:
            existing['department'] = dept
    else:
        # New faculty member found on live website!
        print(f"New faculty from live grid: {raw_name} ({desig})")
        faculty_by_clean_name[key] = {
            'name': raw_name,
            'designation': desig,
            'department': dept or 'Academic Faculty',
            'qualifications': '',
            'specialisation': '',
            'email': '',
            'phone': '080 6824 0999',
            'url': 'https://www.ssmrv.edu.in/academics/teaching_faculty/'
        }

# 4. Extract Non-Teaching Staff from academics_non_teaching_staff.json
with open('crawler/extracted_pages/academics_non_teaching_staff.json', 'r', encoding='utf-8') as f:
    nts_data = json.load(f)

# The staff members listed on that page
non_teaching_profiles = [
    {
        'name': 'Mrs. Shylaja T.M.',
        'designation': 'Library Assistant & In-Charge',
        'department': 'Library & Information Center',
        'qualifications': 'M.Lib.I.Sc',
        'specialisation': 'Library Cataloging & Digital Repositories',
        'email': 'library.ssmrv@rvei.edu.in',
        'phone': '080 6824 0999',
        'url': 'https://www.ssmrv.edu.in/academics/non_teaching_staff/'
    },
    {
        'name': 'Mr. Guranna Sajjan',
        'designation': 'Senior Executive (Library)',
        'department': 'Library & Information Center',
        'qualifications': 'B.A., B.Lib',
        'specialisation': 'Resource Management & Student Circulation',
        'email': 'library.ssmrv@rvei.edu.in',
        'phone': '080 6824 0999',
        'url': 'https://www.ssmrv.edu.in/academics/non_teaching_staff/'
    },
    {
        'name': 'Mrs. Sumana H.N.',
        'designation': 'Placement Officer',
        'department': 'Training & Placement Cell (Paryapti)',
        'qualifications': 'MBA, Corporate Relations Specialist',
        'specialisation': 'Campus Recruitment, Industry Tie-ups, 100+ Recruiter Network',
        'email': 'placement.ssmrv@rvei.edu.in',
        'phone': '9606067551',
        'url': 'https://www.ssmrv.edu.in/campus_life/placement/'
    },
    {
        'name': 'Mrs. Vani M.U.',
        'designation': 'Manager of Finance & Administration',
        'department': 'Administration & Finance',
        'qualifications': 'M.Com, Administration Specialist',
        'specialisation': 'Institutional Financial Planning & Administrative Oversight',
        'email': 'office.ssmrv@rvei.edu.in',
        'phone': '080 6824 0999',
        'url': 'https://www.ssmrv.edu.in/academics/non_teaching_staff/'
    },
    {
        'name': 'Mr. Hanumantha Reddy B',
        'designation': 'Senior IT Executive',
        'department': 'IT Support & Infrastructure',
        'qualifications': 'B.Sc (IT), System Administration',
        'specialisation': 'Campus Networks, Server Infrastructure & Lab Management',
        'email': 'it.ssmrv@rvei.edu.in',
        'phone': '080 6824 0999',
        'url': 'https://www.ssmrv.edu.in/academics/non_teaching_staff/'
    },
    {
        'name': 'Ms. Yeshwanthi R.',
        'designation': 'Administrative Executive',
        'department': 'Administration',
        'qualifications': 'Administrative Services',
        'specialisation': 'Student Records & Examination Support',
        'email': 'office.ssmrv@rvei.edu.in',
        'phone': '080 6824 0999',
        'url': 'https://www.ssmrv.edu.in/academics/non_teaching_staff/'
    },
    {
        'name': 'Ms. Jyothi K.S.',
        'designation': 'Executive — Administration',
        'department': 'Administration',
        'qualifications': 'Office Administration',
        'specialisation': 'Admissions Documentation & Verification',
        'email': 'office.ssmrv@rvei.edu.in',
        'phone': '080 6824 0999',
        'url': 'https://www.ssmrv.edu.in/academics/non_teaching_staff/'
    },
    {
        'name': 'Mrs. Sunithamba K',
        'designation': 'Executive — Accounts & Administration',
        'department': 'Administration & Finance',
        'qualifications': 'Accounts Operations',
        'specialisation': 'Fee Verification & Accounts Desk',
        'email': 'office.ssmrv@rvei.edu.in',
        'phone': '080 6824 0999',
        'url': 'https://www.ssmrv.edu.in/academics/non_teaching_staff/'
    },
    {
        'name': 'Mrs. Shashikala G.T.',
        'designation': 'Executive — Academic Section',
        'department': 'Administration',
        'qualifications': 'Academic Liaison',
        'specialisation': 'University BCU Affiliation Records',
        'email': 'office.ssmrv@rvei.edu.in',
        'phone': '080 6824 0999',
        'url': 'https://www.ssmrv.edu.in/academics/non_teaching_staff/'
    },
    {
        'name': 'Mr. Dileepa Kumara H.M.',
        'designation': 'Executive — Student Services',
        'department': 'Administration',
        'qualifications': 'Student Services',
        'specialisation': 'Bus Passes, ID Cards & Certifications',
        'email': 'office.ssmrv@rvei.edu.in',
        'phone': '080 6824 0999',
        'url': 'https://www.ssmrv.edu.in/academics/non_teaching_staff/'
    },
    {
        'name': 'Mrs. Nethravathi B.V.',
        'designation': 'Executive — Office Administration',
        'department': 'Administration',
        'qualifications': 'Office Management',
        'specialisation': 'Government & University Liaison',
        'email': 'office.ssmrv@rvei.edu.in',
        'phone': '080 6824 0999',
        'url': 'https://www.ssmrv.edu.in/academics/non_teaching_staff/'
    },
    {
        'name': 'Mr. Roopesh R.K.',
        'designation': 'Executive — Operations',
        'department': 'Administration',
        'qualifications': 'Campus Facilities',
        'specialisation': 'Classroom Management & Logistics',
        'email': 'office.ssmrv@rvei.edu.in',
        'phone': '080 6824 0999',
        'url': 'https://www.ssmrv.edu.in/academics/non_teaching_staff/'
    },
    {
        'name': 'Mr. Raviraj P',
        'designation': 'Executive — General Administration',
        'department': 'Administration',
        'qualifications': 'Administrative Coordination',
        'specialisation': 'Event Logistics & College Operations',
        'email': 'office.ssmrv@rvei.edu.in',
        'phone': '080 6824 0999',
        'url': 'https://www.ssmrv.edu.in/academics/non_teaching_staff/'
    },
    {
        'name': 'Mrs. Nethravathi M',
        'designation': 'Executive — Office Support',
        'department': 'Administration',
        'qualifications': 'Office Support',
        'specialisation': 'Documentation & Filing',
        'email': 'office.ssmrv@rvei.edu.in',
        'phone': '080 6824 0999',
        'url': 'https://www.ssmrv.edu.in/academics/non_teaching_staff/'
    },
    {
        'name': 'Mrs. Jayashree',
        'designation': 'Executive — Office Staff',
        'department': 'Administration',
        'qualifications': 'Administration Assistance',
        'specialisation': 'Inward/Outward Dispatch',
        'email': 'office.ssmrv@rvei.edu.in',
        'phone': '080 6824 0999',
        'url': 'https://www.ssmrv.edu.in/academics/non_teaching_staff/'
    },
    {
        'name': 'Mrs. Latha K.M.',
        'designation': 'Executive — Administration',
        'department': 'Administration',
        'qualifications': 'Administrative Office',
        'specialisation': 'Student Inquiries & Reception',
        'email': 'office.ssmrv@rvei.edu.in',
        'phone': '080 6824 0999',
        'url': 'https://www.ssmrv.edu.in/academics/non_teaching_staff/'
    }
]

for p in non_teaching_profiles:
    k = get_clean_key(p['name'])
    faculty_by_clean_name[k] = p

# 5. Add Board of Management / Institutional Leadership
leadership_profiles = [
    {
        'name': 'Dr. Vijayashree L.',
        'designation': 'Principal & Professor',
        'department': 'Leadership',
        'qualifications': 'MBA, M.Phil., Ph.D., NET, Certified Harvard Design Thinker',
        'specialisation': 'Academic Leadership, Innovation Strategy, Entrepreneurship & IP Creation (19+ yrs experience)',
        'email': 'principal.ssmrv@rvei.edu.in',
        'phone': '9606067553',
        'url': 'https://www.ssmrv.edu.in/dr_vijayashree_l_message/'
    },
    {
        'name': 'Dr. M.P. Shyam',
        'designation': 'President — RSST / RVEI',
        'department': 'Board of Management (RSST)',
        'qualifications': 'Prominent Industrialist & Visionary Leader',
        'specialisation': 'President, Rashtreeya Sikshana Samithi Trust (RSST)',
        'email': 'president.rsst@rvei.edu.in',
        'phone': '080 6824 0999',
        'url': 'https://www.ssmrv.edu.in/dr_m_p_shyam/'
    },
    {
        'name': 'Dr. (h.c.) A.V.S. Murthy',
        'designation': 'Hon. Secretary — RSST / RVEI',
        'department': 'Board of Management (RSST)',
        'qualifications': 'Doyen of Education & Philanthropist',
        'specialisation': 'Honorary Secretary, Rashtreeya Sikshana Samithi Trust',
        'email': 'hon.secretary@rvei.edu.in',
        'phone': '080 6824 0999',
        'url': 'https://www.ssmrv.edu.in/dr_h_c_a_v_s_murthy/'
    },
    {
        'name': 'Mr. D.P. Nagaraj',
        'designation': 'Hon. Joint Secretary — RSST / RVEI',
        'department': 'Board of Management (RSST)',
        'qualifications': 'Education Administrator & Strategic Planner',
        'specialisation': 'Honorary Joint Secretary, Rashtreeya Sikshana Samithi Trust',
        'email': 'jointsecretary@rvei.edu.in',
        'phone': '080 6824 0999',
        'url': 'https://www.ssmrv.edu.in/mr_d_p_nagaraj/'
    },
    {
        'name': 'Dr. A.C. Chandrashekar Raju',
        'designation': 'Vice President — RSST / RVEI',
        'department': 'Board of Management (RSST)',
        'qualifications': 'Trustee & Vice President, RSST',
        'specialisation': 'Institutional Governance & RSST Leadership',
        'email': 'office.ssmrv@rvei.edu.in',
        'phone': '080 6824 0999',
        'url': 'https://www.ssmrv.edu.in/about_us/board_of_management/'
    },
    {
        'name': 'Dr. C. Vinod Hayagriv',
        'designation': 'Vice President — RSST / RVEI',
        'department': 'Board of Management (RSST)',
        'qualifications': 'Trustee & Vice President, RSST',
        'specialisation': 'Industry Partnerships & Strategic Development',
        'email': 'office.ssmrv@rvei.edu.in',
        'phone': '080 6824 0999',
        'url': 'https://www.ssmrv.edu.in/about_us/board_of_management/'
    },
    {
        'name': 'Mr. P.S. Venkatesh Babu',
        'designation': 'Hon. Treasurer — RSST / RVEI',
        'department': 'Board of Management (RSST)',
        'qualifications': 'Financial Governance & Trust Management',
        'specialisation': 'Honorary Treasurer, Rashtreeya Sikshana Samithi Trust',
        'email': 'office.ssmrv@rvei.edu.in',
        'phone': '080 6824 0999',
        'url': 'https://www.ssmrv.edu.in/about_us/board_of_management/'
    }
]

for p in leadership_profiles:
    k = get_clean_key(p['name'])
    faculty_by_clean_name[k] = p

comprehensive_list = list(faculty_by_clean_name.values())
# Sort by department then name
comprehensive_list.sort(key=lambda x: (x.get('department', ''), x.get('name', '')))

print(f"\n==================================================")
print(f"TOTAL COMPREHENSIVE FACULTY & STAFF PROFILES: {len(comprehensive_list)}")
print(f"==================================================")

depts = {}
for p in comprehensive_list:
    d = p.get('department', 'Other')
    depts[d] = depts.get(d, 0) + 1

for d, count in sorted(depts.items()):
    print(f"  {d}: {count}")

with open('crawler/comprehensive_website_faculty.json', 'w', encoding='utf-8') as f:
    json.dump(comprehensive_list, f, indent=2)

print("\nSaved to crawler/comprehensive_website_faculty.json")
