import re

with open(r"c:\Users\HP\Downloads\SSMRVD\chatbot-data.js", "r", encoding="utf-8") as fp:
    content = fp.read()

# 1. Update faculty flow
old_faculty_flow = re.search(r'  faculty:\s*\{.*?id:\s*"faculty".*?buttons:\s*\[.*?\]\s*\},', content, re.DOTALL)
new_faculty_flow = """  faculty: {
    id: "faculty",
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
  },

  faculty_bca: {
    id: "faculty_bca",
    message: `<b>💻 Department of Computer Applications (BCA)</b><br>
• <b>Dr. R. Sheela Chandrashekar</b> — Assoc. Prof & HOD (Ph.D., MCA, M.Phil | Cloud, DB Systems)<br>
• <b>Mr. Shivakumara N.</b> — Asst. Professor (MCA, M.Phil, NET | Data Structures & Algorithms)<br>
• <b>Mr. Yallappa M.</b> — Asst. Professor (MCA, M.Sc. | OS, Computer Networks)<br>
• <b>Ms. M. Roopa Latha</b> — Asst. Professor (MCA, M.Tech | AI & Python Analytics)<br>
• <b>Ms. Deepika L.</b> — Asst. Professor (MCA | Java & Full-Stack Systems)<br>
• <b>Ms. Shakeela M.K.</b> — Asst. Professor (M.Sc., M.Phil | Info Security & C++)<br>
• <b>Ms. Jahanavi Rao A.V.</b> — Asst. Professor (BCA, MCA | Web Technologies)<br>
<i>+ 10 additional lab instructors and adjunct fellows.</i>`,
    buttons: [
      { text: "💻 BCA Course Curriculum", action: "flow:bca_details" },
      { text: "💰 BCA Fee Structure", action: "flow:fee_enquiry" },
      { text: "🌐 View BCA Faculty Online", url: "https://www.ssmrv.edu.in/academics/teaching_faculty/" },
      { text: "👨‍🏫 Other Departments", action: "flow:faculty" },
      { text: "↩️ Main Menu", action: "flow:welcome" }
    ]
  },

  faculty_commerce: {
    id: "faculty_commerce",
    message: `<b>📊 Department of Commerce (B.Com)</b><br>
• <b>Dr. Malini N.</b> — Assoc. Professor & HOD (B.Com, M.Com, MBA, Ph.D. | Accounting, Taxation & HR)<br>
• <b>Mr. Gokul C.</b> — Asst. Professor & Coordinator (B.Com 1st Year) (B.Com, MBA, M.Com, KSET)<br>
• <b>Dr. Kanchan G. Rajput</b> — Asst. Professor (MBA, Ph.D. | Financial Markets & Accounting)<br>
• <b>Dr. Lalitha B.S.</b> — Asst. Professor (M.Com, Ph.D. | 19+ yrs experience in Commerce)<br>
• <b>Dr. Rajini K.S.</b> — Asst. Professor (M.Com, Ph.D. | Corporate Governance & Auditing)<br>
• <b>Dr. Shruti Khemashetty</b> — Asst. Professor (M.Com, Ph.D. | Banking & Corporate Law)<br>
• <b>Dr. Suma Sannamani</b> — Asst. Professor (M.Com, Ph.D. | Business Taxation & Costing)`,
    buttons: [
      { text: "📊 B.Com Course Details", action: "flow:bcom_details" },
      { text: "💰 B.Com Fee Structure", action: "flow:fee_enquiry" },
      { text: "🌐 View Commerce Profiles", url: "https://www.ssmrv.edu.in/academics/teaching_faculty/" },
      { text: "👨‍🏫 Other Departments", action: "flow:faculty" },
      { text: "↩️ Main Menu", action: "flow:welcome" }
    ]
  },

  faculty_bba: {
    id: "faculty_bba",
    message: `<b>📈 Department of Business Administration (BBA & Aviation)</b><br>
• <b>Dr. Revathy Shivashankaran</b> — Assoc. Prof & HOD (MBA, M.Phil., Ph.D. | Strategic Management)<br>
• <b>Mr. Jagadish A.</b> — Asst. Prof & HOD - Aviation (BCA, MBA | Airport Operations & Air Cargo Logistics)<br>
• <b>Dr. S. Chethana</b> — Asst. Professor (MBA, Ph.D. | Marketing & Consumer Psychology)<br>
• <b>Dr. Sushma C.</b> — Asst. Professor (BBM, MBA, Ph.D. | Organizational Behavior)<br>
• <b>Mrs. V. Sudha</b> — Asst. Professor (MBA, M.Phil | Human Resource Development)<br>
• <b>Mr. Arun Kumar R.</b> — Asst. Professor (BBM, MBA | Finance & International Business)<br>
• <b>Mr. Santosh Bendigeri</b> — Asst. Professor (MBA | Supply Chain Management)<br>
• <b>Mrs. Puja Biswas</b> — Asst. Professor (MBA | Retail & Entrepreneurship)`,
    buttons: [
      { text: "📈 BBA Honours Details", action: "flow:bba_details" },
      { text: "✈️ BBA Aviation Details", action: "flow:aviation_details" },
      { text: "💰 Request Fee Structure", action: "flow:fee_enquiry" },
      { text: "👨‍🏫 Other Departments", action: "flow:faculty" },
      { text: "↩️ Main Menu", action: "flow:welcome" }
    ]
  },

  faculty_mcom: {
    id: "faculty_mcom",
    message: `<b>🎓 Department of Postgraduate Studies (M.Com)</b><br>
• <b>Dr. Lavanya Balaji</b> — Assoc. Prof & Head of PG Department (M.Com, Ph.D. | 21+ yrs experience)<br>
• <b>Dr. Vinaya T.</b> — Asst. Professor & PG Faculty (BBM, MBA, Ph.D. | Research Methodology)<br>
• <b>Dr. Shashikala C.S.</b> — Asst. Professor (M.Com, Ph.D. | Advanced Tax Systems)<br>
• <b>Research Focus:</b> SPSS Financial Analytics, UGC-NET coaching, and Scopus Publications.`,
    buttons: [
      { text: "🎓 M.Com Course Details", action: "flow:mcom_details" },
      { text: "💰 M.Com Fee Structure", action: "flow:fee_enquiry" },
      { text: "👨‍🏫 Other Departments", action: "flow:faculty" },
      { text: "↩️ Main Menu", action: "flow:welcome" }
    ]
  },

  faculty_languages: {
    id: "faculty_languages",
    message: `<b>📚 Department of Languages & Humanities</b><br>
• <b>Dr. Jyothi N. Hosurkar</b> — Asst. Prof & HOD Kannada (M.A., Ph.D. | 13+ yrs experience)<br>
• <b>Dr. D. Kannan</b> — Asst. Professor of English (B.A., M.A., Ph.D. | Corporate Communication)<br>
• <b>Dr. Kavitha H S</b> — Asst. Professor of Hindi (M.A., Ph.D. | Dakshin Bharat Hindi Prachar Sabha)<br>
• <b>Dr. Prathima Vijay</b> — Asst. Professor of Kannada (M.A., Ph.D. | 10+ yrs experience)<br>
• <b>Focus:</b> Personality development, English language fluency labs, and heritage cultural preservation.`,
    buttons: [
      { text: "🌟 Centres of Excellence", action: "flow:centres_clubs" },
      { text: "👨‍🏫 Other Departments", action: "flow:faculty" },
      { text: "↩️ Main Menu", action: "flow:welcome" }
    ]
  },

  faculty_placement: {
    id: "faculty_placement",
    message: `<b>💼 Paryapti Training & Placement Cell Roster</b><br>
• <b>Mrs. Sumana H.N.</b> — Placement Officer<br>
  📞 Direct: <b>+91 96060 67551</b> | ✉️ placement.ssmrv@rvei.edu.in<br>
• <b>Mr. Naresh K. N.</b> — Asst. Manager - HR & Corporate Relations<br>
  📞 Direct: <b>+91 96060 67553</b><br>
• <b>Track Record:</b> 90%+ annual placement rate, 100+ recruiting MNCs (Deloitte, Infosys, Accenture, KPMG, EY, Wipro).`,
    buttons: [
      { text: "💼 View Placement Packages", action: "flow:placements" },
      { text: "📞 Call Placement Office", url: "tel:9606067551" },
      { text: "📝 Apply for Admission", action: "flow:inquiry_form" },
      { text: "👨‍🏫 Other Faculty", action: "flow:faculty" },
      { text: "↩️ Main Menu", action: "flow:welcome" }
    ]
  },

  faculty_leadership: {
    id: "faculty_leadership",
    message: `<b>🏛️ Institutional Leadership — SSMRV College</b><br>
• <b>Principal:</b> Dr. Vijayashree L. (MBA, M.Phil., Ph.D., NET)<br>
  <i>Certified Harvard Design Thinker, 25+ years academic & industry leadership.</i><br>
  ✉️ <b>principal.ssmrv@rvei.edu.in</b><br><br>
• <b>Manager of Finance & Admin:</b> Mrs. Vani M.U.<br>
• <b>Chief Librarian:</b> Mrs. Shylaja T.M. (M.Lib.I.Sc)<br>
• <b>Governing Body:</b> Rashtreeya Sikshana Samithi Trust (RSST), Est. 1940.`,
    buttons: [
      { text: "📞 Contact Principal's Office", action: "flow:contact" },
      { text: "🏫 Schedule Campus Visit", action: "flow:campus_visit" },
      { text: "👨‍🏫 Explore Teaching Faculty", action: "flow:faculty" },
      { text: "↩️ Main Menu", action: "flow:welcome" }
    ]
  },

  prospectus_downloads: {
    id: "prospectus_downloads",
    message: `<b>📄 Official SSMRV Downloads & Regulatory Disclosures (2025-26)</b><br>
Download verified institutional documents directly to your device:<br><br>
<div class="ssmrv-doc-card">
  <div class="ssmrv-doc-info">
    <div class="ssmrv-doc-icon">📘</div>
    <div>
      <div class="ssmrv-doc-title">Mandatory Disclosure 2025-26</div>
      <div class="ssmrv-doc-sub">Official Course Catalog, Affiliation & Governance (PDF)</div>
    </div>
  </div>
  <a href="https://www.ssmrv.edu.in/wp-content/uploads/2026/04/MDC2025-26.pdf" target="_blank" class="ssmrv-doc-dl-btn">Download ⬇</a>
</div>

<div class="ssmrv-doc-card">
  <div class="ssmrv-doc-info">
    <div class="ssmrv-doc-icon">📜</div>
    <div>
      <div class="ssmrv-doc-title">AICTE Official Approval</div>
      <div class="ssmrv-doc-sub">All India Council for Technical Education Approval Copy</div>
    </div>
  </div>
  <a href="https://www.ssmrv.edu.in/wp-content/uploads/2026/01/AICTE-approval-copy.pdf" target="_blank" class="ssmrv-doc-dl-btn">Download ⬇</a>
</div>

<div class="ssmrv-doc-card">
  <div class="ssmrv-doc-info">
    <div class="ssmrv-doc-icon">📅</div>
    <div>
      <div class="ssmrv-doc-title">Academic Calendar of Events</div>
      <div class="ssmrv-doc-sub">Odd Semester Schedule, Exam Dates & Holidays</div>
    </div>
  </div>
  <a href="https://www.ssmrv.edu.in/wp-content/uploads/2026/07/ACOE-26-27-Odd-Sem.pdf" target="_blank" class="ssmrv-doc-dl-btn">Download ⬇</a>
</div>`,
    buttons: [
      { text: "📝 Apply for Admission", action: "flow:inquiry_form" },
      { text: "💰 Fee Structure Inquiry", action: "flow:fee_enquiry" },
      { text: "🏫 Book Campus Visit", action: "flow:campus_visit" },
      { text: "↩️ Main Menu", action: "flow:welcome" }
    ]
  },

  campus_navigation: {
    id: "campus_navigation",
    message: `<b>📍 Campus Location & Metro Navigation</b><br>
<div class="ssmrv-nav-card">
  <div class="ssmrv-nav-title">Sivananda Sarma Memorial RV Degree College</div>
  <div class="ssmrv-nav-item">📍 <b>Address:</b> #17, 36th Cross Road, 26th Main, 4th 'T' Block East, Jayanagar, Bengaluru - 560041</div>
  <div class="ssmrv-nav-item">🚇 <b>Metro Station:</b> Jayanagar / Rashtriya Vidyalaya Road Station (Green Line, ~1.2 km)</div>
  <div class="ssmrv-nav-item">🚌 <b>BMTC Bus Stop:</b> Jayanagar 4th T Block (Buses: 18, 25, 215, 365)</div>
  <div class="ssmrv-nav-item">🚗 <b>Landmark:</b> Near RV Teachers College / RV Dental College</div>
  <a href="https://www.google.com/maps/search/?api=1&query=SSMRV+College+Jayanagar+Bengaluru" target="_blank" class="ssmrv-nav-btn">
    🗺️ Open Instant Google Maps Directions
  </a>
</div>`,
    buttons: [
      { text: "🏫 Schedule Campus Tour", action: "flow:campus_visit" },
      { text: "📞 Call Campus Office", url: "tel:08068240999" },
      { text: "💬 WhatsApp Us", url: "https://wa.me/919739588855?text=Hello%20SSMRV%20Admissions%20Team" },
      { text: "↩️ Main Menu", action: "flow:welcome" }
    ]
  },"""

if old_faculty_flow:
    content = content.replace(old_faculty_flow.group(0), new_faculty_flow)

# Update welcome buttons to include 1-Click Prospectus and Campus Navigation
welcome_pattern = re.search(r'  welcome:\s*\{.*?buttons:\s*\[(.*?)\]\s*\},', content, re.DOTALL)
if welcome_pattern:
    old_welcome = welcome_pattern.group(0)
    new_welcome = """  welcome: {
    id: "welcome",
    message: "👋 Welcome to <b>SSMRV Degree College</b>, Jayanagar!<br><i>'360-degree Education for Wholeness'</i> (NAAC 'A' Grade | BCU Affiliated | RSST Group).<br><br>How can I assist you today?",
    buttons: [
      { text: "📚 Explore Programmes", action: "flow:programmes" },
      { text: "📝 Admissions & Apply", action: "flow:admissions" },
      { text: "💰 Fee Structure Inquiry", action: "flow:fee_enquiry" },
      { text: "💼 Placements & Packages", action: "flow:placements" },
      { text: "👨‍🏫 Faculty & Academic Roster", action: "flow:faculty" },
      { text: "📄 Official Prospectus & AICTE", action: "flow:prospectus_downloads" },
      { text: "📍 Campus Navigation / Maps", action: "flow:campus_navigation" },
      { text: "🏫 Book Campus Visit", action: "flow:campus_visit" },
      { text: "🌟 Centres of Excellence", action: "flow:centres_clubs" },
      { text: "💬 Chat on WhatsApp", url: "https://wa.me/919739588855?text=Hello%20SSMRV%20Admissions%20Team%2C%20I%20would%20like%20information%20regarding%20admissions" },
      { text: "📞 Direct Call: 97395 88855", url: "tel:9739588855" }
    ]
  },"""
    content = content.replace(old_welcome, new_welcome)

with open(r"c:\Users\HP\Downloads\SSMRVD\chatbot-data.js", "w", encoding="utf-8") as fp:
    fp.write(content)

print("chatbot-data.js flows updated successfully!")
