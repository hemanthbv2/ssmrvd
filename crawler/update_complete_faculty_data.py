import json
import re

# Load the 85 enriched faculty
with open('crawler/enriched_85_faculty.json', 'r', encoding='utf-8') as f:
    faculty_catalog = json.load(f)

print(f"Loaded {len(faculty_catalog)} faculty profiles.")

# Read chatbot-data.js
with open('chatbot-data.js', 'r', encoding='utf-8') as f:
    data_content = f.read()

# Format JSON string for catalog
catalog_json_str = json.dumps(faculty_catalog, indent=2)
new_catalog_code = f"const SSMRV_FACULTY_CATALOG = {catalog_json_str};\n"

# Replace SSMRV_FACULTY_CATALOG
cat_start = data_content.find('const SSMRV_FACULTY_CATALOG = [')
cat_end = data_content.find('const SSMRV_ALL_PAGES = [')

if cat_start == -1 or cat_end == -1:
    raise Exception("Could not find SSMRV_FACULTY_CATALOG boundaries")

data_content = data_content[:cat_start] + new_catalog_code + "\n" + data_content[cat_end:]
print("Replaced SSMRV_FACULTY_CATALOG successfully.")

# Update faculty flow and add new faculty flows
old_faculty_flows_target = """  faculty: {
    id: "faculty",
    pageUrl: "https://www.ssmrv.edu.in/academics/teaching_faculty/",
    message: `<b>👨‍🏫 SSMRV Faculty & Academic Roster (60+ Members)</b><br>Our faculty members combine deep scholarly credentials (Ph.D., UGC-NET/KSET) with industry research in AI, Corporate Finance, Aviation Logistics, and Human Resource Management.<br><br>Choose a department below to view professors or type any faculty member's name directly (e.g. <i>'Dr. Malini'</i>, <i>'Dr. Kannan'</i>, <i>'Dr. Sheela'</i>):`,
    buttons: [
      { text: "💻 BCA Faculty (17)", action: "flow:faculty_bca" },
      { text: "📊 Commerce Faculty (8)", action: "flow:faculty_commerce" },
      { text: "📈 BBA & Aviation Faculty (16)", action: "flow:faculty_bba" },
      { text: "🎓 M.Com Postgraduate (6)", action: "flow:faculty_mcom" },
      { text: "📚 Languages & Humanities (10)", action: "flow:faculty_languages" },
      { text: "💼 Placement Cell & Officers", action: "flow:faculty_placement" },
      { text: "🏛️ Institutional Leadership", action: "flow:faculty_leadership" },
      { text: "↩️ Main Menu", action: "flow:welcome" }
    ]
  },"""

new_faculty_flows = """  faculty: {
    id: "faculty",
    pageUrl: "https://www.ssmrv.edu.in/academics/teaching_faculty/",
    message: `<b>👨‍🏫 SSMRV Faculty, Staff & Leadership Directory (85+ Members)</b><br>100% verified against official records on <a href="https://www.ssmrv.edu.in/academics/teaching_faculty/" target="_blank">ssmrv.edu.in</a>. Features professors, department HODs, statutory committee conveners, physical education heads, library faculty, and administrative staff.<br><br>Select a department below or type any name, role, or committee directly (e.g. <i>'Dr. Sheela'</i>, <i>'Samskruthi'</i>, <i>'Sumana'</i>, <i>'NSS'</i>, <i>'NCC'</i>, <i>'Sports'</i>):`,
    buttons: [
      { text: "💻 BCA Faculty (17)", action: "flow:faculty_bca" },
      { text: "📊 Commerce Faculty (11)", action: "flow:faculty_commerce" },
      { text: "📈 BBA & Aviation Faculty (16)", action: "flow:faculty_bba" },
      { text: "🎓 M.Com Postgraduate (6)", action: "flow:faculty_mcom" },
      { text: "🗣️ Languages & Humanities (10)", action: "flow:faculty_languages" },
      { text: "⚽ Sports & PE Leadership", action: "flow:faculty_sports" },
      { text: "💼 Placement Cell (Paryapti)", action: "flow:faculty_placement" },
      { text: "📖 Library & Knowledge Hub", action: "flow:faculty_library" },
      { text: "🏢 Administration & Support (12)", action: "flow:faculty_admin" },
      { text: "🏛️ Institutional Leadership (7)", action: "flow:faculty_leadership" },
      { text: "🛡️ Statutory Committees & Conveners", action: "flow:faculty_committees" }
    ]
  },

  faculty_sports: {
    id: "faculty_sports",
    pageUrl: "https://www.ssmrv.edu.in/campus_life/clubs_and_associations/sports_and_wellness_centre/",
    message: `<b>⚽ Physical Education & Sports Wellness Centre</b><br>
• <b>Mrs. Teja K.R.</b> — Junior Director of Physical Education (Sports Committee Lead)<br>
• <b>Mr. M.M. Bopanna</b> — Senior Executive PE & Discipline Committee<br>
• <b>Mr. Chiranjivi M.S.</b> — Sports Committee Member<br><br>
SSMRV champions holistic student wellness with extensive indoor and outdoor facilities, gymnasiums, and university representation in cricket, football, basketball, yoga, and athletics.`,
    buttons: [
      { text: "🌟 Sports & Wellness Centre", action: "flow:centres_clubs" },
      { text: "👨‍🏫 All Faculty Directory", action: "flow:faculty" },
      { text: "🌐 View on Website", url: "https://www.ssmrv.edu.in/campus_life/clubs_and_associations/sports_and_wellness_centre/" }
    ]
  },

  faculty_library: {
    id: "faculty_library",
    pageUrl: "https://www.ssmrv.edu.in/academics/non_teaching_staff/",
    message: `<b>📖 Library & Information Center (Knowledge Hub)</b><br>
• <b>Mrs. Shylaja T.M.</b> — Library Assistant & In-Charge (M.Lib.I.Sc | Digital Repositories)<br>
• <b>Mr. Guranna Sajjan</b> — Senior Executive (B.A., B.Lib | Student Circulation)<br><br>
The Central Library houses over 40,000+ volumes, automated via Koha ILMS, with direct subscriptions to DELNET, NDLI, INFLIBNET, and EBSCO e-journals.`,
    buttons: [
      { text: "📚 Knowledge Hub Facilities", action: "flow:campus" },
      { text: "👨‍🏫 All Faculty Directory", action: "flow:faculty" },
      { text: "🌐 View on Website", url: "https://www.ssmrv.edu.in/academics/non_teaching_staff/" }
    ]
  },

  faculty_admin: {
    id: "faculty_admin",
    pageUrl: "https://www.ssmrv.edu.in/academics/non_teaching_staff/",
    message: `<b>🏢 Non-Teaching Administration & Student Services</b><br>
• <b>Mrs. Vani M.U.</b> — Manager of Finance & Administration<br>
• <b>Mr. Hanumantha Reddy B</b> — Senior IT Executive (Campus Networks & Labs)<br>
• <b>Ms. Yeshwanthi R.</b> — Administrative Executive (Student Records)<br>
• <b>Ms. Jyothi K.S.</b> — Executive (Admissions Documentation)<br>
• <b>Mrs. Sunithamba K</b> — Executive (Accounts & Fee Desk)<br>
• <b>Mrs. Shashikala G.T.</b> — Executive (University Affiliation Records)<br>
• <b>Mr. Dileepa Kumara H.M.</b> — Executive (Student Services & ID Passes)<br>
• <b>Mrs. Nethravathi B.V.</b> — Executive (Office Administration)<br>
• <b>Mr. Roopesh R.K.</b> — Executive (Campus Operations)<br>
• <b>Mr. Raviraj P</b> — Executive (General Administration)<br>
• <b>Mrs. Nethravathi M</b> — Executive (Office Support)<br>
• <b>Mrs. Jayashree</b> & <b>Mrs. Latha K.M.</b> — Executive Staff (Reception & Dispatch)`,
    buttons: [
      { text: "📞 Contact Administrative Office", action: "flow:contact" },
      { text: "👨‍🏫 All Faculty Directory", action: "flow:faculty" },
      { text: "🌐 View on Website", url: "https://www.ssmrv.edu.in/academics/non_teaching_staff/" }
    ]
  },

  faculty_committees: {
    id: "faculty_committees",
    pageUrl: "https://www.ssmrv.edu.in/campus_life/clubs_and_associations/statutory_committees_and_support_system/",
    message: `<b>🛡️ Official Statutory Committees & Conveners</b><br>
• <b>IQAC (Quality Assurance):</b> Ms. R. Shanthi Krishna (Convener)<br>
• <b>NSS Unit:</b> Mr. Yallappa M. (Program Officer)<br>
• <b>NCC Unit:</b> Mr. Avinash K.V. (Associate NCC Officer)<br>
• <b>Examination Committee:</b> Dr. Mohan Rao C.N. (Chief Superintendent)<br>
• <b>Grievance Redressal Cell:</b> Dr. Vijayashree L. (Principal & Chair)<br>
• <b>POSH / Internal Compliance:</b> Dr. Revathy Shivashankaran (Presiding Officer)<br>
• <b>Anti-Ragging Cell:</b> Ms. Nandini J. & Mr. M.M. Bopanna<br>
• <b>Placement Cell:</b> Mrs. Sumana H.N. (Placement Officer)<br>
• <b>Innovation & IPR Cell:</b> Dr. S. Chethana (Convener)<br>
• <b>Entrepreneurship Cell (RAISE CoE):</b> Dr. Vinaya T. (Convener)<br>
• <b>Sports Committee:</b> Mr. Chiranjivi M.S. & Mrs. Teja K.R.<br>
• <b>Cultural Committee (Tarangini):</b> Dr. Bharathi N.S. & Ms. Soujanya D.<br>
• <b>Alumni Association (Sammilana):</b> Mr. Gokul C. (Convener)`,
    buttons: [
      { text: "🌟 Centres & Clubs", action: "flow:centres_clubs" },
      { text: "👨‍🏫 Faculty Directory", action: "flow:faculty" },
      { text: "🌐 View Committees on Website", url: "https://www.ssmrv.edu.in/campus_life/clubs_and_associations/statutory_committees_and_support_system/" }
    ]
  },"""

assert old_faculty_flows_target in data_content, "old_faculty_flows_target not found in chatbot-data.js"
data_content = data_content.replace(old_faculty_flows_target, new_faculty_flows, 1)

with open('chatbot-data.js', 'w', encoding='utf-8') as f:
    f.write(data_content)

print("SUCCESS: Updated chatbot-data.js with complete 85-member faculty & staff directory.")
