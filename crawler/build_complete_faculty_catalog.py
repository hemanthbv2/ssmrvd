import json
import re

with open('crawler/comprehensive_website_faculty.json', 'r', encoding='utf-8') as f:
    profiles = json.load(f)

# Committee and Role mappings from official website pages
committee_roles = {
    'shanthikrishna': 'IQAC Convener / Coordinator (NAAC)',
    'yallappa': 'NSS Program Officer (National Service Scheme) & Sports Coordinator',
    'avinash': 'Associate NCC Officer (ANO — National Cadet Corps)',
    'mohanrao': 'Chief Superintendent & Convener — Examination Committee',
    'sumana': 'Placement Officer — Paryapti Training & Placement Cell',
    'shylaja': 'Library In-Charge & Cataloging Head',
    'guranna': 'Senior Executive — Library & Digital Circulation',
    'vani': 'Manager of Finance & Administration',
    'hanumanthareddy': 'Senior IT Support & Campus Network Executive',
    'teja': 'Junior Director — Physical Education & Sports Wellness',
    'bopanna': 'Senior Executive — Physical Education & Discipline Committee',
    'chiranjeevi': 'Sports Committee Member & Discipline Coordinator',
    'chiranjivi': 'Sports Committee Member & Discipline Coordinator',
    'gokul': 'Coordinator — B.Com 1st Year & Alumni Association (Sammilana) Convener',
    'vinaya': 'Coordinator — B.Com 2nd Year & Entrepreneurship Cell (RAISE CoE)',
    'chetana': 'Innovation Cell & IPR Cell Convener',
    'chethana': 'Innovation Cell & IPR Cell Convener',
    'sharavana': 'SC/ST Cell Convener',
    'pujabiswas': 'Equal Opportunity Cell Member (BCA)',
    'lalitha': 'Equal Opportunity Cell Member (M.Com)',
    'nandini': 'Anti-Ragging Cell & Discipline Committee Convener',
    'bharathi': 'Cultural Committee SPOC (Internal Tarangini & Heritage)',
    'soujanya': 'Cultural Committee SPOC (External Events & Fest)',
    'malini': 'Associate Professor & HOD — Commerce (B.Com) | Grievance Redressal Cell',
    'samskruthi': 'Associate Professor & HOD — Commerce (B.Com)',
    'sheela': 'Associate Professor & HOD — Computer Applications (BCA) | Grievance Redressal Cell',
    'revathy': 'Associate Professor & HOD — Business Administration (BBA) | POSH Internal Compliance Chairperson',
    'jagadish': 'Assistant Professor & HOD — BBA Aviation Management | POSH Committee Member',
    'lavanyabalaji': 'Associate Professor & Head of PG Department (M.Com) | Grievance Redressal Cell',
    'jyothi': 'Assistant Professor & HOD — Department of Languages & Humanities',
    'vijayashree': 'Principal — SSMRV College | Grievance Redressal Chairperson | Certified Harvard Design Thinker',
    'shyam': 'President — Rashtreeya Sikshana Samithi Trust (RSST / RVEI)',
    'avsmurthy': 'Hon. Secretary — Rashtreeya Sikshana Samithi Trust (RSST / RVEI)',
    'dpnagaraj': 'Hon. Joint Secretary — Rashtreeya Sikshana Samithi Trust (RSST / RVEI)',
    'chandrashekarraju': 'Vice President — Rashtreeya Sikshana Samithi Trust (RSST / RVEI)',
    'vinodhayagriv': 'Vice President — Rashtreeya Sikshana Samithi Trust (RSST / RVEI)',
    'venkateshbabu': 'Hon. Treasurer — Rashtreeya Sikshana Samithi Trust (RSST / RVEI)'
}

final_catalog = []

for p in profiles:
    name = p['name']
    clean_k = re.sub(r'^(Dr\.|Mr\.|Mrs\.|Ms\.|Sri\.|Smt\.|Prof\.)\s*', '', name).strip().lower()
    clean_k = re.sub(r'[^a-z0-9]', '', clean_k)

    # Check for committee role match
    role = ''
    for k_sub, r_text in committee_roles.items():
        if k_sub in clean_k:
            role = r_text
            break

    profile_id = clean_k
    if not profile_id:
        profile_id = re.sub(r'[^a-z0-9]', '', name.lower())

    # Build clean slug ID
    slug_id = re.sub(r'[^a-z0-9]+', '-', name.lower()).strip('-')

    dept = p.get('department', 'Academic Faculty')
    if dept == 'Academic Faculty':
        if 'bca' in p.get('designation', '').lower():
            dept = 'Computer Applications (BCA)'
        elif 'bcom' in p.get('designation', '').lower() or 'commerce' in p.get('designation', '').lower():
            dept = 'Commerce (B.Com)'
        elif 'bba' in p.get('designation', '').lower():
            dept = 'Business Administration (BBA & Aviation)'
        elif 'pe' in p.get('designation', '').lower() or 'physical' in p.get('designation', '').lower():
            dept = 'Physical Education & Sports'
        elif 'mohan' in clean_k:
            dept = 'Commerce & Examination Cell'
        elif 'santosh' in clean_k:
            dept = 'Business Administration (BBA & Aviation)'

    entry = {
        'id': slug_id,
        'name': p['name'],
        'designation': p['designation'],
        'department': dept,
        'qualifications': p.get('qualifications', ''),
        'specialisation': p.get('specialisation', ''),
        'committee': role,
        'email': p.get('email', 'office.ssmrv@rvei.edu.in'),
        'phone': p.get('phone', '080 6824 0999'),
        'url': p.get('url', 'https://www.ssmrv.edu.in/academics/teaching_faculty/')
    }
    final_catalog.append(entry)

# Ensure alphabetical sorting by name within departments
final_catalog.sort(key=lambda x: (x['department'], x['name']))

print(f"Total Enriched Profiles: {len(final_catalog)}")
with open('crawler/enriched_85_faculty.json', 'w', encoding='utf-8') as f:
    json.dump(final_catalog, f, indent=2)

print("Saved to crawler/enriched_85_faculty.json")
