import json
import re

with open('crawler/deep_faculty_catalog.json', 'r', encoding='utf-8') as f:
    catalog = json.load(f)

def build_dept_card_html(p):
    comm_html = f'<div class="ssmrv-dept-prof-row ssmrv-dept-prof-comm"><b>Role:</b> {p["committee"]}</div>' if p.get("committee") else ''
    exp_html = f'<div class="ssmrv-dept-prof-row"><b>Experience:</b> {p["experience"]}</div>' if p.get("experience") else ''
    return (
        f'<div class="ssmrv-dept-profile-item" data-profile-id="{p["id"]}" title="Click to view full profile of {p["name"]}">'
        f'<div class="ssmrv-dept-prof-header">'
        f'<span class="ssmrv-dept-prof-name">{p["name"]}</span>'
        f'</div>'
        f'<div class="ssmrv-faculty-badges">'
        f'<span class="ssmrv-badge-desig">{p["designation"]}</span>'
        f'<span class="ssmrv-badge-dept">{p["department"]}</span>'
        f'</div>'
        f'<div class="ssmrv-dept-prof-actions">'
        f'<span class="ssmrv-dept-prof-cta">👤 View Full Profile</span>'
        f'<a href="{p["url"]}" target="_blank" rel="noopener noreferrer" class="ssmrv-dept-visit-btn">🌐 Visit Website Page ↗</a>'
        f'</div>'
        f'<div class="ssmrv-dept-prof-meta">'
        f'<div class="ssmrv-dept-prof-row"><b>Qualifications:</b> {p["qualifications"]}</div>'
        f'{exp_html}'
        f'<div class="ssmrv-dept-prof-row"><b>Expertise:</b> {p["specialisation"]}</div>'
        f'{comm_html}'
        f'</div>'
        f'</div>'
    )

def make_dept_flow(flow_id, title_html, subtitle_html, page_url, extra_buttons):
    members = [p for p in catalog if p.get('deptFlow') == flow_id]
    cards_html = "".join(build_dept_card_html(p) for p in members)
    msg = (
        f'<div class="ssmrv-flow-heading">{title_html}</div>'
        f'<div class="ssmrv-flow-subheading">Select <b>View Full Profile</b> or <b>Visit Website Page ↗</b> on any card below:</div>'
        f'<div class="ssmrv-dept-profile-list">{cards_html}</div>'
    )
    buttons = []
    for p in members:
        short_role = ""
        if "HOD" in p["designation"] or "Head" in p["designation"]:
            short_role = " (HOD)"
        elif "Principal" in p["designation"]:
            short_role = " (Principal)"
        elif "Coordinator" in p["designation"]:
            short_role = " (Coord.)"
        elif "President" in p["designation"] and "Vice" not in p["designation"]:
            short_role = " (President)"
        buttons.append({
            "text": f"👤 {p['name']}{short_role}",
            "action": f"profile:{p['id']}"
        })
    buttons.append({
        "text": "🌐 Visit Department Faculty Webpage ↗",
        "url": page_url
    })
    buttons.extend(extra_buttons)
    return {
        "id": flow_id,
        "pageUrl": page_url,
        "message": msg,
        "buttons": buttons
    }

DEPT_FLOWS = {
    "faculty": {
        "id": "faculty",
        "pageUrl": "https://www.ssmrv.edu.in/academics/teaching_faculty/",
        "message": (
            "<div class=\"ssmrv-flow-heading\">👨‍🏫 SSMRV Faculty, Staff &amp; Leadership Directory</div>"
            "<div class=\"ssmrv-flow-body\">Browse verified profiles from <a href=\"https://www.ssmrv.edu.in/academics/teaching_faculty/\" target=\"_blank\">ssmrv.edu.in</a> with complete <b>Department</b>, <b>Designation</b>, <b>Qualifications</b>, <b>Experience</b>, <b>Areas of Expertise</b>, and direct <b>Visit Website Page ↗</b> links.<br><br>"
            "Select a department below or type any faculty name in the search bar:</div>"
        ),
        "buttons": [
            {"text": "💻 BCA Faculty", "action": "flow:faculty_bca"},
            {"text": "📊 Commerce / B.Com Faculty", "action": "flow:faculty_commerce"},
            {"text": "📈 BBA & Aviation Faculty", "action": "flow:faculty_bba"},
            {"text": "🎓 M.Com Postgraduate Faculty", "action": "flow:faculty_mcom"},
            {"text": "🗣️ Languages & Humanities", "action": "flow:faculty_languages"},
            {"text": "⚽ Physical Education & Sports", "action": "flow:faculty_sports"},
            {"text": "💼 Placement Cell — Paryapti", "action": "flow:faculty_placement"},
            {"text": "📖 Library & Knowledge Hub", "action": "flow:faculty_library"},
            {"text": "🏢 Administration & Support", "action": "flow:faculty_admin"},
            {"text": "🏛️ Institutional Leadership", "action": "flow:faculty_leadership"},
            {"text": "🛡️ Statutory Committees & Conveners", "action": "flow:faculty_committees"},
            {"text": "🌐 Visit Teaching Faculty Webpage ↗", "url": "https://www.ssmrv.edu.in/academics/teaching_faculty/"},
            {"text": "🌐 Visit Non-Teaching Staff Webpage ↗", "url": "https://www.ssmrv.edu.in/academics/non_teaching_staff/"}
        ]
    },
    "faculty_bca": make_dept_flow(
        "faculty_bca",
        "💻 Department of Computer Applications (BCA)",
        "Full-Stack Development, AI/ML, Cyber Security, VLSI & Cloud Computing Faculty.",
        "https://www.ssmrv.edu.in/academics/teaching_faculty/",
        [
            {"text": "💻 BCA Course Details", "action": "flow:bca_details"},
            {"text": "👨‍🏫 All Departments", "action": "flow:faculty"}
        ]
    ),
    "faculty_commerce": make_dept_flow(
        "faculty_commerce",
        "📊 Department of Commerce (B.Com)",
        "Accounting, Taxation, Corporate Finance, Auditing, Business Law & HRM Faculty.",
        "https://www.ssmrv.edu.in/academics/teaching_faculty/",
        [
            {"text": "📊 B.Com Course Details", "action": "flow:bcom_details"},
            {"text": "👨‍🏫 All Departments", "action": "flow:faculty"}
        ]
    ),
    "faculty_bba": make_dept_flow(
        "faculty_bba",
        "📈 Department of Business Administration (BBA &amp; Aviation)",
        "Strategic Management, Aviation Management, HR Analytics, Finance & Marketing Faculty.",
        "https://www.ssmrv.edu.in/academics/teaching_faculty/",
        [
            {"text": "📈 BBA Honours Details", "action": "flow:bba_details"},
            {"text": "✈️ BBA Aviation Details", "action": "flow:aviation_details"},
            {"text": "👨‍🏫 All Departments", "action": "flow:faculty"}
        ]
    ),
    "faculty_mcom": make_dept_flow(
        "faculty_mcom",
        "🎓 Postgraduate Department of Commerce (M.Com)",
        "Advanced Corporate Accounting, Capital Markets, Banking & Empirical Research Faculty.",
        "https://www.ssmrv.edu.in/academics/teaching_faculty/",
        [
            {"text": "🎓 M.Com Course Details", "action": "flow:mcom_details"},
            {"text": "👨‍🏫 All Departments", "action": "flow:faculty"}
        ]
    ),
    "faculty_languages": make_dept_flow(
        "faculty_languages",
        "🗣️ Department of Languages &amp; Humanities",
        "Kannada, English, Hindi & Sanskrit Literature, Folklore and Soft Skills Faculty.",
        "https://www.ssmrv.edu.in/academics/teaching_faculty/",
        [
            {"text": "🌟 Centres & Literary Clubs", "action": "flow:centres_clubs"},
            {"text": "👨‍🏫 All Departments", "action": "flow:faculty"}
        ]
    ),
    "faculty_sports": make_dept_flow(
        "faculty_sports",
        "⚽ Department of Physical Education &amp; Sports Wellness",
        "University Athletics, Indoor/Outdoor Sports Complex, Gymnasium & Discipline Leadership.",
        "https://www.ssmrv.edu.in/campus_life/clubs_and_associations/sports_and_wellness_centre/",
        [
            {"text": "🌟 Sports & Wellness Centre", "action": "flow:centres_clubs"},
            {"text": "👨‍🏫 All Departments", "action": "flow:faculty"}
        ]
    ),
    "faculty_placement": make_dept_flow(
        "faculty_placement",
        "💼 Paryapti Training &amp; Placement Cell",
        "Corporate Relations, Pre-Placement Training & Campus Recruitment.",
        "https://www.ssmrv.edu.in/campus_life/placement/",
        [
            {"text": "💼 Placements & Career Cell", "action": "flow:placements"},
            {"text": "👨‍🏫 All Departments", "action": "flow:faculty"}
        ]
    ),
    "faculty_library": make_dept_flow(
        "faculty_library",
        "📖 Central Library &amp; Information Center (Knowledge Hub)",
        "Koha ILMS Automation, DELNET, NDLI & INFLIBNET Digital Repositories.",
        "https://www.ssmrv.edu.in/academics/non_teaching_staff/",
        [
            {"text": "🏛️ Campus Infrastructure", "action": "flow:campus"},
            {"text": "👨‍🏫 All Departments", "action": "flow:faculty"}
        ]
    ),
    "faculty_admin": make_dept_flow(
        "faculty_admin",
        "🏢 Non-Teaching Administration, Finance, IT &amp; Support Staff",
        "Finance & Admin Management, HR, Accounts, Campus IT Infrastructure & Student Support.",
        "https://www.ssmrv.edu.in/academics/non_teaching_staff/",
        [
            {"text": "📞 Contact Administrative Office", "action": "flow:contact"},
            {"text": "👨‍🏫 All Departments", "action": "flow:faculty"}
        ]
    ),
    "faculty_leadership": make_dept_flow(
        "faculty_leadership",
        "🏛️ Institutional Leadership &amp; RSST Board of Management",
        "Principal of SSMRV College & Rashtreeya Sikshana Samithi Trust (RVEI) Governing Body.",
        "https://www.ssmrv.edu.in/about_us/board_of_management/",
        [
            {"text": "📞 Contact Principal's Office", "action": "flow:contact"},
            {"text": "👨‍🏫 All Departments", "action": "flow:faculty"}
        ]
    )
}

committee_conveners_ids = [
    "ms-r-shanthi-krishna",
    "dr-vijayashree-l",
    "dr-revathy-shivashankaran",
    "mr-yallappa-m",
    "avinash-k-v",
    "dr-mohan-rao-c-n",
    "nandini-j",
    "mrs-sumana-h-n",
    "dr-s-chethana",
    "dr-vinaya-t",
    "mr-gokul-c",
    "sharavana-m",
    "chiranjivi-m-s",
    "mrs-teja-k-r",
    "ms-bharathi-n-s",
    "ms-soujanya-d"
]
id_map = {p["id"]: p for p in catalog}
comm_members = [id_map[cid] for cid in committee_conveners_ids if cid in id_map]
comm_cards_html = "".join(build_dept_card_html(p) for p in comm_members)

DEPT_FLOWS["faculty_committees"] = {
    "id": "faculty_committees",
    "pageUrl": "https://www.ssmrv.edu.in/campus_life/clubs_and_associations/statutory_committees_and_support_system/",
    "message": (
        f'<div class="ssmrv-flow-heading">🛡️ Statutory Committees &amp; Cell Conveners</div>'
        f'<div class="ssmrv-flow-subheading">Select <b>View Full Profile</b> or <b>Visit Website Page ↗</b> on any card below:</div>'
        f'<div class="ssmrv-dept-profile-list">{comm_cards_html}</div>'
    ),
    "buttons": [
        {"text": f"👤 {p['name']}", "action": f"profile:{p['id']}"}
        for p in comm_members
    ] + [
        {"text": "🌐 Visit Committees Webpage ↗", "url": "https://www.ssmrv.edu.in/campus_life/clubs_and_associations/statutory_committees_and_support_system/"},
        {"text": "🌟 Centres & Clubs", "action": "flow:centres_clubs"},
        {"text": "👨‍🏫 Faculty Directory", "action": "flow:faculty"}
    ]
}

with open('chatbot-data.js', 'r', encoding='utf-8') as f:
    cb_code = f.read()

cat_json_str = "const SSMRV_FACULTY_CATALOG = " + json.dumps(catalog, indent=2, ensure_ascii=False) + ";"
cb_code_new, n_sub = re.subn(
    r'const SSMRV_FACULTY_CATALOG = \[.*?\];\s*(?=const SSMRV_ALL_PAGES)',
    cat_json_str + "\n\n",
    cb_code,
    flags=re.S
)

flows_str_parts = []
for k, v in DEPT_FLOWS.items():
    flows_str_parts.append(f"  {k}: " + json.dumps(v, indent=4, ensure_ascii=False).replace('\n', '\n  '))
all_faculty_flows_js = ",\n\n".join(flows_str_parts) + ",\n\n  "

cb_code_new2, n_sub2 = re.subn(
    r'  faculty:\s*\{.*?(?=prospectus_downloads:\s*\{)',
    all_faculty_flows_js,
    cb_code_new,
    flags=re.S
)

with open('chatbot-data.js', 'w', encoding='utf-8') as f:
    f.write(cb_code_new2)

print("Successfully updated faculty flows in chatbot-data.js!")
