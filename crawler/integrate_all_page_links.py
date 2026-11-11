import json
import re

# 1. Load clean pages
with open(r"c:\Users\HP\Downloads\SSMRVD\crawler\clean_pages_directory.json", "r", encoding="utf-8") as f:
    clean_pages = json.load(f)

# 2. Read chatbot-data.js
with open(r"c:\Users\HP\Downloads\SSMRVD\chatbot-data.js", "r", encoding="utf-8") as f:
    data_content = f.read()

# Insert SSMRV_ALL_PAGES before SSMRV_FAQS
all_pages_js = f"\nconst SSMRV_ALL_PAGES = {json.dumps(clean_pages, indent=2)};\n\n"

if "const SSMRV_ALL_PAGES" in data_content:
    data_content = re.sub(r'const SSMRV_ALL_PAGES = \[.*?\];\n\n', all_pages_js, data_content, flags=re.DOTALL)
else:
    data_content = data_content.replace("const SSMRV_FAQS = [", all_pages_js + "const SSMRV_FAQS = [")

# Add cancellation_refund flow, alumni flow, and sitemap_links flow to CHAT_FLOWS
additional_flows = """
  cancellation_refund: {
    id: "cancellation_refund",
    pageUrl: "https://www.ssmrv.edu.in/admission_cancellation_process/",
    message: `<b>📋 SSMRV Admission Cancellation & UGC Refund Matrix (2025-26)</b><br>
As per official UGC notification No. D.O. No. F.2-71/2022 (CPP-II) dated 12th June 2024, fee refund upon seat surrender/cancellation is processed on the following timeline:<br><br>
<div class="ssmrv-refund-card">
  <div class="ssmrv-refund-row">
    <span class="ssmrv-refund-time">15+ days BEFORE University last date</span>
    <span class="ssmrv-refund-badge full">100% Refund *</span>
  </div>
  <div class="ssmrv-refund-row">
    <span class="ssmrv-refund-time">&lt; 15 days BEFORE University last date</span>
    <span class="ssmrv-refund-badge high">90% Refund *</span>
  </div>
  <div class="ssmrv-refund-row">
    <span class="ssmrv-refund-time">&le; 15 days AFTER University last date</span>
    <span class="ssmrv-refund-badge mid">80% Refund *</span>
  </div>
  <div class="ssmrv-refund-row">
    <span class="ssmrv-refund-time">16 to 30 days AFTER University last date</span>
    <span class="ssmrv-refund-badge low">50% Refund *</span>
  </div>
  <div class="ssmrv-refund-row">
    <span class="ssmrv-refund-time">More than 30 days after last date</span>
    <span class="ssmrv-refund-badge none">No Refund</span>
  </div>
  <div class="ssmrv-refund-note">* Note: ₹5,000 admission processing charge is deducted. Application form fee is non-refundable.</div>
</div>`,
    buttons: [
      { text: "📝 View Admission Guidelines", action: "flow:admissions" },
      { text: "📞 Contact Admissions Desk", action: "flow:contact" },
      { text: "🌐 Cancellation Portal", url: "https://www.ssmrv.edu.in/admission_cancellation_process/" },
      { text: "↩️ Main Menu", action: "flow:welcome" }
    ]
  },

  alumni: {
    id: "alumni",
    pageUrl: "https://www.ssmrv.edu.in/campus_life/alumni/",
    message: `<b>🎓 SSMRV Alumni Association ('Sammilana')</b><br>
SSMRV boasts an active global alumni network holding leadership positions in Deloitte, Infosys, KPMG, EY, Amazon, ICICI Bank, and startup ecosystems.<br><br>
• <b>Alumni Registration:</b> Open to all graduates for networking & mentorship.<br>
• <b>Annual Meet:</b> 'Sammilana' held annually on campus.<br>
• <b>Contributions:</b> Guest lectures, mock interviews, and student startup seed funding.`,
    buttons: [
      { text: "🌐 Register on Alumni Portal", url: "https://www.ssmrv.edu.in/campus_life/alumni/" },
      { text: "💼 View Placement Records", action: "flow:placements" },
      { text: "↩️ Main Menu", action: "flow:welcome" }
    ]
  },

  sitemap_links: {
    id: "sitemap_links",
    pageUrl: "https://www.ssmrv.edu.in/",
    message: `<b>🌐 Official SSMRV Website Links & Directory (120+ Pages)</b><br>
Select a category below to explore verified pages on <b>ssmrv.edu.in</b>:`,
    buttons: [
      { text: "🎓 Degree Programme Pages", action: "flow:links_programmes" },
      { text: "📝 Admissions & Cancellation", action: "flow:links_admissions" },
      { text: "👨‍🏫 Faculty Profiles", action: "flow:faculty" },
      { text: "💼 Placements & Recruiter Pages", action: "flow:placements" },
      { text: "🏛️ Centres of Excellence & Clubs", action: "flow:centres_clubs" },
      { text: "📜 NAAC, NIRF & AICTE Disclosures", action: "flow:prospectus_downloads" },
      { text: "↩️ Main Menu", action: "flow:welcome" }
    ]
  },

  links_programmes: {
    id: "links_programmes",
    pageUrl: "https://www.ssmrv.edu.in/academics/programmes/",
    message: `<b>🎓 Official Academic Degree Web Pages</b><br>
Click below to open any course page directly on ssmrv.edu.in:<br><br>
• <a href="https://www.ssmrv.edu.in/academics/programmes/bachelor_of_commerce/" target="_blank">ssmrv.edu.in/academics/programmes/bachelor_of_commerce/ ↗</a><br>
• <a href="https://www.ssmrv.edu.in/academics/programmes/bachelors_of_business_administration/" target="_blank">ssmrv.edu.in/academics/programmes/bachelors_of_business_administration/ ↗</a><br>
• <a href="https://www.ssmrv.edu.in/academics/programmes/bba-_aviation_management/" target="_blank">ssmrv.edu.in/academics/programmes/bba-_aviation_management/ ↗</a><br>
• <a href="https://www.ssmrv.edu.in/academics/programmes/bachelors_of_computer_application/" target="_blank">ssmrv.edu.in/academics/programmes/bachelors_of_computer_application/ ↗</a><br>
• <a href="https://www.ssmrv.edu.in/academics/programmes/master_of_commerce/" target="_blank">ssmrv.edu.in/academics/programmes/master_of_commerce/ ↗</a>`,
    buttons: [
      { text: "📚 Explore All Programmes", action: "flow:programmes" },
      { text: "🌐 Other Web Links", action: "flow:sitemap_links" },
      { text: "↩️ Main Menu", action: "flow:welcome" }
    ]
  },

  links_admissions: {
    id: "links_admissions",
    pageUrl: "https://www.ssmrv.edu.in/admission_procedure/",
    message: `<b>📝 Official Admissions & Regulatory Web Pages</b><br>
Click below to visit official portals on ssmrv.edu.in:<br><br>
• <a href="https://www.ssmrv.edu.in/admission_procedure/" target="_blank">ssmrv.edu.in/admission_procedure/ ↗</a><br>
• <a href="https://www.ssmrv.edu.in/admission_cancellation_process/" target="_blank">ssmrv.edu.in/admission_cancellation_process/ ↗</a><br>
• <a href="https://www.ssmrv.edu.in/about_us/mandatory_disclosure/" target="_blank">ssmrv.edu.in/about_us/mandatory_disclosure/ ↗</a><br>
• <a href="https://wds-prd.rvei.edu.in:4430/sap/bc/ui5_ui5/sap/zrvicollege/index.html#/Scode/SSMRV" target="_blank">SSMRV SAP ERP Admissions Portal ↗</a>`,
    buttons: [
      { text: "📋 Fill Quick Enquiry Form", action: "flow:inquiry_form" },
      { text: "💰 Fee Structure Inquiry", action: "flow:fee_enquiry" },
      { text: "🌐 Other Web Links", action: "flow:sitemap_links" },
      { text: "↩️ Main Menu", action: "flow:welcome" }
    ]
  },
"""

# Insert additional flows before closing brace of CHAT_FLOWS
if "cancellation_refund:" not in data_content:
    data_content = data_content.rstrip().rstrip("};") + "\n" + additional_flows + "\n};\n"

# Add pageUrl to existing flows in CHAT_FLOWS
flow_url_mappings = {
    'welcome': 'https://www.ssmrv.edu.in/',
    'programmes': 'https://www.ssmrv.edu.in/academics/programmes/',
    'bcom_details': 'https://www.ssmrv.edu.in/academics/programmes/bachelor_of_commerce/',
    'bba_details': 'https://www.ssmrv.edu.in/academics/programmes/bachelors_of_business_administration/',
    'aviation_details': 'https://www.ssmrv.edu.in/academics/programmes/bba-_aviation_management/',
    'bca_details': 'https://www.ssmrv.edu.in/academics/programmes/bachelors_of_computer_application/',
    'mcom_details': 'https://www.ssmrv.edu.in/academics/programmes/master_of_commerce/',
    'admissions': 'https://www.ssmrv.edu.in/admission_procedure/',
    'placements': 'https://www.ssmrv.edu.in/placement/',
    'faculty': 'https://www.ssmrv.edu.in/academics/teaching_faculty/',
    'faculty_bca': 'https://www.ssmrv.edu.in/academics/teaching_faculty/',
    'faculty_commerce': 'https://www.ssmrv.edu.in/academics/teaching_faculty/',
    'faculty_bba': 'https://www.ssmrv.edu.in/academics/teaching_faculty/',
    'faculty_mcom': 'https://www.ssmrv.edu.in/academics/teaching_faculty/',
    'faculty_languages': 'https://www.ssmrv.edu.in/academics/teaching_faculty/',
    'faculty_placement': 'https://www.ssmrv.edu.in/placement/',
    'faculty_leadership': 'https://www.ssmrv.edu.in/about_us/board_of_management/',
    'centres_clubs': 'https://www.ssmrv.edu.in/campus_life/clubs_and_associations/',
    'prospectus_downloads': 'https://www.ssmrv.edu.in/about_us/mandatory_disclosure/',
    'campus_navigation': 'https://www.ssmrv.edu.in/contact_us/',
    'campus': 'https://www.ssmrv.edu.in/campus_life/infrastructure/',
    'contact': 'https://www.ssmrv.edu.in/contact_us/'
}

for flow_id, url in flow_url_mappings.items():
    # Look for flow definition
    pattern = rf'({flow_id}:\s*\{{[^}}]*?id:\s*"{flow_id}",)'
    replacement = rf'\1\n    pageUrl: "{url}",'
    if f'pageUrl: "{url}"' not in data_content:
        data_content = re.sub(pattern, replacement, data_content, count=1)

# Add "Explore All College Links" button to welcome flow
if "flow:sitemap_links" not in data_content:
    welcome_sub = '      { text: "🌐 All College Links (120+)", action: "flow:sitemap_links" },\n      { text: "📋 Admission Cancellation & Refund", action: "flow:cancellation_refund" },\n'
    data_content = data_content.replace('{ text: "💬 Chat on WhatsApp"', welcome_sub + '      { text: "💬 Chat on WhatsApp"')

with open(r"c:\Users\HP\Downloads\SSMRVD\chatbot-data.js", "w", encoding="utf-8") as f:
    f.write(data_content)

print("chatbot-data.js updated with 123 page links directory and pageUrl attributes!")
