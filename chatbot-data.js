/**
 * SSMRV College Chatbot — Complete Knowledge Base & Conversation Flow Data
 * Source: Official ssmrv.edu.in — Exhaustive extraction across 130 sitemap pages
 * Color Palette: #172844 (Navy), #CF5D41 (Coral/Terracotta), #F3B743 (Gold), #61CE70 (Live Green)
 */

/**
 * ═══════════════════════════════════════════════════════════════
 * GOOGLE SHEETS INTEGRATION
 * ═══════════════════════════════════════════════════════════════
 * Replace the URL below with your deployed Google Apps Script URL.
 * Can be overridden via window.ssmrvChatbotSettings.googleSheetsUrl
 * ═══════════════════════════════════════════════════════════════
 */
const GOOGLE_SHEETS_URL = (window.ssmrvChatbotSettings && window.ssmrvChatbotSettings.googleSheetsUrl)
  ? window.ssmrvChatbotSettings.googleSheetsUrl
  : '';

const SSMRV_CONFIG = {
  collegeName: "Sivananda Sarma Memorial RV Degree College",
  shortName: "SSMRV College",
  tagline: "360-degree Education for Wholeness — Nucleus of Holistic Education",
  established: 1984,
  trust: "Rashtreeya Sikshana Samithi Trust (RSST / RV Group, Est. 1940)",
  accreditation: "NAAC 'A' Grade Accredited",
  affiliation: "Bengaluru City University (BCU)",
  ranking: "Ranked 4th among Top 5 Colleges in India for 'Value for Money'",
  campusAddress: "#17, 36th Cross Road, 26th Main, 4th 'T' Block East, Jayanagar, Bengaluru, Karnataka - 560041",
  landmark: "Jayanagar 4th T Block, near RV Teachers College / RV Dental College",
  googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=SSMRV+College+Jayanagar+Bengaluru",
  websiteUrl: "https://www.ssmrv.edu.in/",
  admissionPortalUrl: "https://www.ssmrv.edu.in/admission_procedure/",
  sapPortalUrl: "https://wds-prd.rvei.edu.in:4430/sap/bc/ui5_ui5/sap/zrvicollege/index.html#/Scode/SSMRV",
  whatsappUrl: "https://wa.me/919739588855?text=Hello%20SSMRV%20Admissions%20Team%2C%20I%20would%20like%20information%20regarding%20admissions",
  
  downloads: {
    mandatoryDisclosurePdf: "https://www.ssmrv.edu.in/wp-content/uploads/2026/04/MDC2025-26.pdf",
    aicteApprovalPdf: "https://www.ssmrv.edu.in/wp-content/uploads/2026/01/AICTE-approval-copy.pdf",
    academicCalendarPdf: "https://www.ssmrv.edu.in/wp-content/uploads/2026/07/ACOE-26-27-Odd-Sem.pdf",
    prospectusPdf: "https://www.ssmrv.edu.in/wp-content/uploads/2026/04/MDC2025-26.pdf"
  },
  navigation: {
    address: "#17, 36th Cross Road, 26th Main, 4th 'T' Block East, Jayanagar, Bengaluru - 560041",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=SSMRV+College+Jayanagar+Bengaluru",
    nearestMetro: "Jayanagar / Rashtriya Vidyalaya Road Station (Green Line) - 1.2 km",
    busStop: "Jayanagar 4th T Block / RV Teachers College Bus Stop (BMTC Routes 18, 25, 215, 365)"
  },
  contacts: {
    landline: "080-68240999",
    primaryHelpline: "+91 97395 88855",
    secondaryHelpline: "+91 97396 55500",
    tertiaryHelpline: "+91 96065 37192",
    mobileHr: "+91 96060 67553",
    admissionHelplines: [
      "+91 97395 88855",
      "+91 97396 55500",
      "+91 96065 37192"
    ],
    placementCell: {
      officer: "Mrs. Sumana H N (Placement Officer) – +91 96060 67551",
      asstManager: "Mr. Naresh K. N (Asst. Manager - HR) – +91 96060 67553",
      email: "placement.ssmrv@rvei.edu.in"
    },
    emails: {
      office: "office.ssmrv@rvei.edu.in",
      general: "ssmrv@rvei.edu.in",
      principal: "principal.ssmrv@rvei.edu.in",
      placement: "placement.ssmrv@rvei.edu.in"
    },
    officeHours: "Monday to Friday: 9:30 AM – 5:00 PM | Saturday: 9:30 AM – 2:00 PM"
  },

  social: {
    instagram: "https://www.instagram.com/ssmrv_college",
    facebook: "https://www.facebook.com/ssmrvcollege/",
    linkedin: "https://www.linkedin.com/school/ssmrv-degree-college/",
    twitter: "https://twitter.com/ssmrvcollegeblr",
    youtube: "https://www.youtube.com/channel/UCCeF-MWWij40K3crzZWtnpw"
  },

  leadership: {
    president: "Dr. M.P. Shyam (President, RVEI)",
    secretary: "Dr.(h.c.) A.V.S. Murthy (Hon. Secretary, RVEI)",
    jointSecretary: "Mr. D.P. Nagaraj (Hon. Joint Secretary, RVEI)",
    treasurer: "Mr. P.S. Venkatesh Babu (Hon. Treasurer, RVEI)",
    governingChairman: "Mr. M.R. Arvind (Chairman, Governing Council)",
    principal: "Dr. Vijayashree L (Principal, SSMRV College)"
  }
};

const SSMRV_PROGRAMMES = {
  bcom: {
    id: "bcom",
    name: "Bachelor of Commerce (B.Com)",
    duration: "3 Years (6 Semesters) / 4 Years Honours under NEP/SEP",
    affiliation: "Bengaluru City University (BCU)",
    description: "Affiliated with Bengaluru City University, this undergraduate programme is designed to equip students with in-depth knowledge of commerce, taxation, accounting, and business practices. The curriculum aligns with NEP and SEP, incorporating industry-relevant certifications and electives.",
    specializations: [
      "Accounting & Taxation",
      "Finance & Banking",
      "Digital Marketing",
      "Forensic Accounting & Fraud Examination",
      "Business Data Analytics"
    ],
    professionalTracks: [
      "Integrated CA Foundation / Intermediate Coaching",
      "CS (Company Secretary) Foundation & Executive",
      "CMA (Cost & Management Accounting)",
      "ACCA (Association of Chartered Certified Accountants) Global Certification"
    ],
    eligibility: "Candidates must have passed 10+2 / Pre-University Course (PUC) or equivalent examination from a recognised board with Commerce, Science, or Arts stream.",
    careerPaths: [
      "Chartered Accountant (CA) & Auditor",
      "Financial Analyst & Investment Advisor",
      "Tax Consultant & Corporate Accountant",
      "Banking Officer & Credit Analyst",
      "Risk & Compliance Analyst"
    ]
  },

  bba: {
    id: "bba",
    name: "Bachelor of Business Administration (BBA)",
    duration: "3 Years (6 Semesters) / 4 Years Honours under NEP/SEP",
    affiliation: "Bengaluru City University (BCU)",
    description: "Designed to cultivate entrepreneurial mindset, administrative capability, and leadership agility. Integrates contemporary business strategy with technological tools, case studies, and live industry internships.",
    specializations: [
      "Finance & Investment Management",
      "Marketing & Digital Brand Strategy",
      "Human Resource Management (HRM)",
      "Business Analytics & Big Data",
      "Logistics & Supply Chain Management (SCM)"
    ],
    industryCollaborations: [
      "Advanced Diploma Courses in Emerging Technologies",
      "Collaborations with corporate partners like Abstream Technologies (Hong Kong), Nano Chips, and startup incubators",
      "Corporate Mentorship and Live Capstone Projects"
    ],
    eligibility: "Passed Karnataka PUC / 10+2 examination or equivalent in any stream (Commerce, Science, or Arts) with minimum aggregate marks.",
    careerPaths: [
      "Business Development Executive & Growth Manager",
      "HR Specialist & Talent Acquisition Partner",
      "Digital Marketing Strategist & Brand Manager",
      "Supply Chain & Logistics Operations Executive",
      "Startup Founder / Entrepreneur"
    ]
  },

  bba_aviation: {
    id: "bba_aviation",
    name: "BBA – Aviation Management (BBA-AM)",
    duration: "3 Years (6 Semesters)",
    affiliation: "Bengaluru City University (BCU)",
    description: "A specialized management program combining core business administration with specialized aviation sector knowledge. Prepares future leaders for airlines, airports, aircraft logistics, and ground handling services.",
    specializations: [
      "Airline Operations & Fleet Management",
      "Airport Terminal & Ground Handling",
      "Aviation Safety & Air Cargo Logistics",
      "Aviation Customer Experience & Cabin Services"
    ],
    eligibility: "Passed 10+2 / PUC or equivalent examination from a recognised board with a minimum of 50% marks (45% for reserved categories).",
    careerPaths: [
      "Airport Operations Manager & Duty Officer",
      "Air Cargo & Logistics Coordinator",
      "Airline Customer Service & Guest Relations Lead",
      "Aviation Security & Compliance Inspector"
    ]
  },

  bca: {
    id: "bca",
    name: "Bachelor of Computer Applications (BCA)",
    duration: "3 Years (6 Semesters) / 4 Years Honours under NEP",
    affiliation: "Bengaluru City University (BCU)",
    description: "A comprehensive undergraduate program providing students with strong programming foundations, computational logic, software engineering principles, and exposure to cutting-edge emerging technologies.",
    specializations: [
      "Full Stack Web Development (MERN / MEAN)",
      "Data Science & Python Analytics",
      "Cloud Computing & DevOps (AWS / Azure)",
      "Cybersecurity & Ethical Hacking Basics",
      "Artificial Intelligence & Machine Learning Fundamentals"
    ],
    eligibility: "Passed 10+2 / PUC or equivalent examination from a recognised board in Science, Commerce, or Arts with Mathematics / Computer Science / Statistics / Business Mathematics as a subject.",
    careerPaths: [
      "Software Developer & Full Stack Engineer",
      "Data Analyst & Business Intelligence Specialist",
      "System Administrator & Cloud Support Associate",
      "UI/UX Frontend Engineer & App Developer"
    ]
  },

  mcom: {
    id: "mcom",
    name: "Master of Commerce (M.Com)",
    duration: "2 Years (4 Semesters)",
    affiliation: "Bengaluru City University (BCU)",
    description: "A prestigious postgraduate program offering advanced academic rigor in financial management, corporate accounting, strategic taxation, and business research methodologies.",
    specializations: [
      "Advanced Corporate Accounting",
      "Corporate Taxation & GST Law",
      "Financial Markets, Banking & Derivatives",
      "Business Analytics & Empirical Research"
    ],
    eligibility: "Bachelor's degree in Commerce (B.Com) or Business Administration (BBA) from a recognized University with minimum 50% aggregate marks (45% for SC/ST/Category-I candidates)."
  }
};

const SSMRV_FACULTY_CATALOG = [
  {
    "id": "dr-vijayashree-l",
    "name": "Dr. Vijayashree L.",
    "designation": "Principal & Professor",
    "department": "Institutional Leadership",
    "deptFlow": "faculty_leadership",
    "qualifications": "MBA, M.Phil., Ph.D., NET | Certified Harvard Design Thinker",
    "experience": "19+ Years Academic Experience (incl. 3 yrs Head & Professor of MBA) + 4 Years Industry Experience",
    "specialisation": "Academic Leadership, Innovation Strategy, Entrepreneurship & Start-up Incubation, IP Creation",
    "bio": "Dr. L. Vijayashree is an accomplished academic leader, innovation strategist, and entrepreneurship mentor. A certified Harvard Design Thinker and regular newspaper columnist, she has secured multi-crore grants for student-led innovation projects and collaborated with international universities in Singapore, Taiwan, RIPO Belarus, and EDII.",
    "highlights": "Secured multi-crore innovation grants; international collaborations with universities in Singapore, Taiwan & RIPO Belarus; Chairperson of Grievance Redressal Cell.",
    "committee": "Principal — SSMRV College | Chairperson — Grievance Redressal Cell",
    "email": "principal.ssmrv@rvei.edu.in",
    "phone": "96060 67553",
    "url": "https://www.ssmrv.edu.in/academics/teaching_faculty/dr-vijayashree-l/"
  },
  {
    "id": "dr-m-p-shyam",
    "name": "Dr. M.P. Shyam",
    "designation": "President — RSST / RVEI",
    "department": "Board of Management (RSST)",
    "deptFlow": "faculty_leadership",
    "qualifications": "Prominent Industrialist & Visionary Educational Leader",
    "experience": "President, Rashtreeya Sikshana Samithi Trust (RV Institutions)",
    "specialisation": "Institutional Governance, Strategic Vision & Philanthropy",
    "bio": "Dr. M.P. Shyam serves as the President of Rashtreeya Sikshana Samithi Trust (RSST), guiding over 20+ premier RV educational institutions across Bengaluru.",
    "highlights": "President of RSST / RV Educational Institutions (Est. 1940).",
    "committee": "President — Board of Management (RSST / RVEI)",
    "email": "office.ssmrv@rvei.edu.in",
    "phone": "080 6824 0999",
    "url": "https://www.ssmrv.edu.in/dr_m_p_shyam/"
  },
  {
    "id": "dr-h-c-a-v-s-murthy",
    "name": "Dr. (h.c.) A.V.S. Murthy",
    "designation": "Hon. Secretary — RSST / RVEI",
    "department": "Board of Management (RSST)",
    "deptFlow": "faculty_leadership",
    "qualifications": "Doctorate (Honoris Causa) | Educational Administrator",
    "experience": "Honorary Secretary, Rashtreeya Sikshana Samithi Trust (RSST)",
    "specialisation": "Educational Administration, Institutional Growth & Trust Governance",
    "bio": "Dr. (h.c.) A.V.S. Murthy is the Honorary Secretary of RSST / RVEI and a member of the SSMRV Governing Council, championing holistic 360-degree education across RV institutions.",
    "highlights": "Honorary Secretary of RSST & Governing Council Member.",
    "committee": "Hon. Secretary — RSST / RVEI | Governing Council Member",
    "email": "office.ssmrv@rvei.edu.in",
    "phone": "080 6824 0999",
    "url": "https://www.ssmrv.edu.in/dr_h_c_a_v_s_murthy/"
  },
  {
    "id": "mr-d-p-nagaraj",
    "name": "Mr. D.P. Nagaraj",
    "designation": "Hon. Joint Secretary — RSST / RVEI",
    "department": "Board of Management (RSST)",
    "deptFlow": "faculty_leadership",
    "qualifications": "Educational Administrator & Strategic Planner",
    "experience": "Honorary Joint Secretary, Rashtreeya Sikshana Samithi Trust (RSST)",
    "specialisation": "Institutional Development, Infrastructure & Academic Operations",
    "bio": "Mr. D.P. Nagaraj serves as the Honorary Joint Secretary of RSST / RVEI, overseeing institutional expansion, governance, and academic quality across RV institutions.",
    "highlights": "Honorary Joint Secretary of RSST & Governing Council Member.",
    "committee": "Hon. Joint Secretary — RSST / RVEI | Governing Council Member",
    "email": "office.ssmrv@rvei.edu.in",
    "phone": "080 6824 0999",
    "url": "https://www.ssmrv.edu.in/mr_d_p_nagaraj/"
  },
  {
    "id": "mr-p-s-venkatesh-babu",
    "name": "Mr. P.S. Venkatesh Babu",
    "designation": "Hon. Treasurer — RSST / RVEI",
    "department": "Board of Management (RSST)",
    "deptFlow": "faculty_leadership",
    "qualifications": "Financial Governance & Trust Management",
    "experience": "Honorary Treasurer, Rashtreeya Sikshana Samithi Trust (RSST)",
    "specialisation": "Financial Stewardship, Institutional Audits & Resource Allocation",
    "bio": "Mr. P.S. Venkatesh Babu is the Honorary Treasurer of RSST / RVEI and serves on the Governing Council of SSMRV College.",
    "highlights": "Honorary Treasurer of RSST & Governing Council Member.",
    "committee": "Hon. Treasurer — RSST / RVEI | Governing Council Member",
    "email": "office.ssmrv@rvei.edu.in",
    "phone": "080 6824 0999",
    "url": "https://www.ssmrv.edu.in/about_us/board_of_management/"
  },
  {
    "id": "dr-a-c-chandrashekar-raju",
    "name": "Dr. A.C. Chandrashekar Raju",
    "designation": "Vice President — RSST / RVEI",
    "department": "Board of Management (RSST)",
    "deptFlow": "faculty_leadership",
    "qualifications": "Trustee & Vice President, RSST",
    "experience": "Supervising Committee & Board of Management, RVEI",
    "specialisation": "Institutional Governance & Higher Education Leadership",
    "bio": "Dr. A.C. Chandrashekar Raju serves as Vice President of Rashtreeya Sikshana Samithi Trust (RVEI) on the Board of Management.",
    "highlights": "Vice President, RVEI Supervising Committee.",
    "committee": "Vice President — RSST / RVEI Board of Management",
    "email": "office.ssmrv@rvei.edu.in",
    "phone": "080 6824 0999",
    "url": "https://www.ssmrv.edu.in/about_us/board_of_management/"
  },
  {
    "id": "dr-c-vinod-hayagriv",
    "name": "Dr. C. Vinod Hayagriv",
    "designation": "Vice President — RSST / RVEI",
    "department": "Board of Management (RSST)",
    "deptFlow": "faculty_leadership",
    "qualifications": "Trustee & Vice President, RSST",
    "experience": "Supervising Committee & Board of Management, RVEI",
    "specialisation": "Strategic Partnerships & Institutional Excellence",
    "bio": "Dr. C. Vinod Hayagriv serves as Vice President of Rashtreeya Sikshana Samithi Trust (RVEI) on the Board of Management.",
    "highlights": "Vice President, RVEI Supervising Committee.",
    "committee": "Vice President — RSST / RVEI Board of Management",
    "email": "office.ssmrv@rvei.edu.in",
    "phone": "080 6824 0999",
    "url": "https://www.ssmrv.edu.in/about_us/board_of_management/"
  },
  {
    "id": "mr-m-r-arvind",
    "name": "Mr. M.R. Arvind",
    "designation": "Chairman — Governing Council",
    "department": "Board of Management (RSST)",
    "deptFlow": "faculty_leadership",
    "qualifications": "Trustee, RSST & Chairman, Governing Council",
    "experience": "Governing Council Leadership, SSMRV Degree College",
    "specialisation": "Academic Governance & Strategic Institutional Oversight",
    "bio": "Mr. M.R. Arvind serves as Chairman of the Governing Council at SSMRV College and Trustee of Rashtreeya Sikshana Samithi Trust.",
    "highlights": "Chairman of the SSMRV College Governing Council.",
    "committee": "Chairman — Governing Council (SSMRV College)",
    "email": "office.ssmrv@rvei.edu.in",
    "phone": "080 6824 0999",
    "url": "https://www.ssmrv.edu.in/about_us/board_of_management/"
  },
  {
    "id": "dr-r-sheela-chandrashekar",
    "name": "Dr. R. Sheela Chandrashekar",
    "designation": "Associate Professor and HOD – BCA",
    "department": "Computer Applications (BCA)",
    "deptFlow": "faculty_bca",
    "qualifications": "B.Sc (Computer Science, Kuvempu University), M.Sc (Computer Science, Kuvempu University), Ph.D. (Jain University)",
    "experience": "17+ Years Teaching & Research Experience in Computer Science and IT",
    "specialisation": "Cyber Security, Cyber Forensics, Digital Forensics, Cyber Threat Intelligence, Image Processing & Face Recognition",
    "bio": "Dr. R. Sheela currently serves as the Head of the BCA Department with over 17 years of progressive teaching experience in Computer Science and IT. Her expertise spans Cyber Security, Forensic Computing, Digital Forensics, Incident Handling, and Periocular Face Recognition.",
    "highlights": "Authored the book 'Digital Revolution in India: Cybersecurity Essentials for Digital Age'; published in SCI-indexed journals (King Saud University), IGI Global book chapters, and 5 Scopus-indexed papers.",
    "committee": "Head of Department (BCA) | Grievance Redressal Cell (BCA Representative)",
    "email": "sheelac.ssmrv@rvei.edu.in",
    "phone": "080 6824 0999",
    "url": "https://www.ssmrv.edu.in/academics/teaching_faculty/dr_r_sheela_chandrashekar/"
  },
  {
    "id": "ms-r-shanthi-krishna",
    "name": "Mrs. R. Shanthi Krishna",
    "designation": "Assistant Professor & IQAC Coordinator",
    "department": "Computer Applications (BCA)",
    "deptFlow": "faculty_bca",
    "qualifications": "B.Sc (Sri Sarada College), MCA (Nehru Memorial College), M.Phil. (Manonmaniam Sundaranar University), PGP-AIML (Great Lakes Executive Learning)",
    "experience": "19+ Years Collegiate Teaching Experience (Former HOD BCA 2014–2024)",
    "specialisation": "Machine Learning, Artificial Intelligence, Programming Languages",
    "bio": "An experienced academician with over 19 years in collegiate teaching specialising in Computer Applications. She served as Head of the BCA Department from 2014 to December 2024 and currently serves as the IQAC Coordinator at SSMRV College since July 2024.",
    "highlights": "Published 'Machine Learning in Early Detection of Lung Cancer: A Review' in IJSREM (UGC Care Journal); leads NAAC & IQAC quality initiatives.",
    "committee": "IQAC Coordinator / Convener (Internal Quality Assurance Cell — NAAC)",
    "email": "shanthikrishna.ssmrv@rvei.edu.in",
    "phone": "080 6824 0999",
    "url": "https://www.ssmrv.edu.in/academics/teaching_faculty/ms_r_shanthi_krishna/"
  },
  {
    "id": "dr-s-chethana",
    "name": "Dr. S. Chethana",
    "designation": "Assistant Professor",
    "department": "Computer Applications (BCA)",
    "deptFlow": "faculty_bca",
    "qualifications": "B.Sc (Electronics, University of Mysore), MCA (IGNOU), Ph.D. (Jain University)",
    "experience": "22+ Years Teaching Experience in Computer Science",
    "specialisation": "Artificial Intelligence, Internet of Things (IoT), Software Engineering, Medical Image Processing",
    "bio": "Dr. S. Chethana is a student-centred educator with over 22 years of experience in teaching Computer Science. Creative and resourceful, she adapts instructional strategies to maximize learning outcomes and student innovation.",
    "highlights": "Published 11 patents (including 1 Australian Patent) and 4 research publications (including 2 in SCI Journals such as Journal of Healthcare Engineering).",
    "committee": "College SPOC & Convener — Innovation Cell & IPR Cell | Examination Committee (BCA)",
    "email": "chethanas.ssmrv@rvei.edu.in",
    "phone": "080 6824 0999",
    "url": "https://www.ssmrv.edu.in/academics/teaching_faculty/dr_s_chethana/"
  },
  {
    "id": "dr-suma-sannamani",
    "name": "Dr. Suma Sannamani",
    "designation": "Assistant Professor",
    "department": "Computer Applications (BCA)",
    "deptFlow": "faculty_bca",
    "qualifications": "B.E. (Electronics & Communication, VTU), M.Tech (VLSI Design & Embedded Systems, VTU), Ph.D. (VTU)",
    "experience": "8.6+ Years Teaching Experience in Engineering & Computer Applications",
    "specialisation": "Memory Architecture, VLSI Design & Embedded Systems",
    "bio": "Dr. Suma Sannamani is an Assistant Professor in the BCA Department with 8.6 years of teaching experience. She serves as the Convenor of the Consultancy Cell and is an active Innovation Ambassador mentoring students in emerging technologies.",
    "highlights": "Published Scopus-indexed papers on 'Tiled Cache Implementation for High Performance Processor' and 'Root Tile Design for Level 1 Cache'.",
    "committee": "Convenor — Consultancy Cell | Innovation Ambassador | Entrepreneurship Cell (BCA)",
    "email": "sumas.ssmrv@rvei.edu.in",
    "phone": "080 6824 0999",
    "url": "https://www.ssmrv.edu.in/academics/teaching_faculty/dr_suma_sannamani/"
  },
  {
    "id": "dr-v-sudha",
    "name": "Mrs. V. Sudha (Dr. V. Sudha)",
    "designation": "Assistant Professor",
    "department": "Computer Applications (BCA)",
    "deptFlow": "faculty_bca",
    "qualifications": "M.Sc (Software Systems, Bharathiar University), Ph.D. (Computer Science, Bharathiar University), UGC-NET Qualified",
    "experience": "10+ Years Teaching & Research Experience in Higher Education",
    "specialisation": "Digital Image Processing, Machine Learning, Remote Sensing & Software Systems",
    "bio": "Mrs. V. Sudha holds a Ph.D. in Computer Science and NET qualification with over 10 years in higher education. Her research focuses on deep learning, image processing, and remote sensing.",
    "highlights": "Published Scopus papers including 'Oil Spill Detection and Recognition Utilizing Faster R-CNN with Enhanced MobileNetV2 Architecture' (2024).",
    "committee": "IPR Cell Representative (BCA)",
    "email": "sudhav.ssmrv@rvei.edu.in",
    "phone": "080 6824 0999",
    "url": "https://www.ssmrv.edu.in/academics/teaching_faculty/dr_v_sudha/"
  },
  {
    "id": "mr-getendra-kumar-m",
    "name": "Mr. Getendra Kumar M.",
    "designation": "Assistant Professor",
    "department": "Computer Applications (BCA)",
    "deptFlow": "faculty_bca",
    "qualifications": "M.Sc (Computer Science, University of Madras)",
    "experience": "18+ Years Teaching Experience in Computer Applications",
    "specialisation": "Database Management Systems (DBMS), Relational Architecture & SQL",
    "bio": "Mr. Getendra Kumar M. is a committed educator with 18 years of teaching experience in computer applications, bringing dedication and practical clarity to database systems and programming.",
    "highlights": "18 years of undergraduate mentoring in Computer Applications; Alumni Association (BCA Coordinator).",
    "committee": "Alumni Association Representative (BCA)",
    "email": "getendrakumar.ssmrv@rvei.edu.in",
    "phone": "080 6824 0999",
    "url": "https://www.ssmrv.edu.in/academics/teaching_faculty/mr_getendra_kumar_m/"
  },
  {
    "id": "mrs-malasa-m-r",
    "name": "Mrs. Malasa M.R.",
    "designation": "Assistant Professor",
    "department": "Computer Applications (BCA)",
    "deptFlow": "faculty_bca",
    "qualifications": "B.Sc (Kuvempu University), M.Sc (Mangalore University), MCA (GITAM University)",
    "experience": "21+ Years Teaching Experience (UG & PG Computer Science)",
    "specialisation": "Internet of Things (IoT), Arduino & Electronics-Based Systems",
    "bio": "Mrs. Malasa M.R. is a passionate teacher and researcher with 21 years of experience teaching undergraduate and postgraduate students. She has guided numerous Arduino and IoT hardware projects.",
    "highlights": "Former HOD experience; mentored numerous student IoT & embedded systems projects.",
    "committee": "Placement & Career Guidance Cell (BCA) | Discipline Committee (BCA)",
    "email": "malasamr.ssmrv@rvei.edu.in",
    "phone": "080 6824 0999",
    "url": "https://www.ssmrv.edu.in/academics/teaching_faculty/mrs_malasa_m_r/"
  },
  {
    "id": "ms-vasugi-mudaliar-r-k",
    "name": "Ms. Vasugi Mudaliar R.K.",
    "designation": "Assistant Professor & BCA II Year Coordinator",
    "department": "Computer Applications (BCA)",
    "deptFlow": "faculty_bca",
    "qualifications": "B.Sc (Computer Science, Bishop Cotton Women's Christian College), M.Sc (Computer Science, St. Joseph's PG College), B.Ed (KIET)",
    "experience": "15+ Years Teaching Experience in Computer Science",
    "specialisation": "Social Media Analytics, Data Science, Python Programming, Java Programming, Cyber Security",
    "bio": "Ms. Vasugi Mudaliar R.K. serves as the II Year BCA Coordinator and Timetable Coordinator with 15 years of teaching experience. As an Innovation Ambassador, she mentors students and organizes Smart India Hackathons and college tech fests.",
    "highlights": "II Year BCA Coordinator, Timetable Coordinator & Smart India Hackathon Mentor.",
    "committee": "IQAC Representative (BCA) | II Year BCA & Timetable Coordinator",
    "email": "vasugirk.ssmrv@rvei.edu.in",
    "phone": "080 6824 0999",
    "url": "https://www.ssmrv.edu.in/academics/teaching_faculty/ms_vasugi_mudaliar_r_k/"
  },
  {
    "id": "mrs-preethi-dwarakanath",
    "name": "Mrs. Preethi Dwarakanath",
    "designation": "Assistant Professor",
    "department": "Computer Applications (BCA)",
    "deptFlow": "faculty_bca",
    "qualifications": "B.E. (Information Science & Engineering, SJCE Mysuru / VTU), M.S. in Software Systems (BITS Pilani)",
    "experience": "11 Years Industry Experience (Senior Software Engineer) + 5+ Years Teaching Experience",
    "specialisation": "Theoretical Computer Science, Machine Learning & Software Engineering",
    "bio": "Mrs. Preethi Dwarakanath earned her B.E. from SJCE Mysuru and Master's in Software Systems from BITS Pilani. With 11 years of corporate experience as a Senior Software Engineer and 5+ years in teaching, she bridges industry software practices with BCA academics.",
    "highlights": "11 years as Senior Software Engineer; BITS Pilani alumna.",
    "committee": "Sports Committee (BCA) | Cultural Committee (BCA)",
    "email": "preethid.ssmrv@rvei.edu.in",
    "phone": "080 6824 0999",
    "url": "https://www.ssmrv.edu.in/academics/teaching_faculty/mrs_preethi_dwarakanath/"
  },
  {
    "id": "mrs-puja-biswas",
    "name": "Mrs. Puja Biswas",
    "designation": "Assistant Professor",
    "department": "Computer Applications (BCA)",
    "deptFlow": "faculty_bca",
    "qualifications": "B.Tech (West Bengal University of Technology), M.Tech (West Bengal University of Technology)",
    "experience": "6+ Years Teaching Experience in Computer Applications",
    "specialisation": "Information Technology, Cloud Computing, Internet of Things (IoT)",
    "bio": "Mrs. Puja Biswas is an Assistant Professor in the BCA Department with 6 years of teaching experience. She serves as an active Innovation Ambassador mentoring students in Cloud Computing and IoT.",
    "highlights": "Innovation Ambassador & Equal Opportunity Cell Coordinator for BCA.",
    "committee": "Equal Opportunity Cell Representative (BCA) | Innovation Ambassador",
    "email": "pujabiswas.ssmrv@rvei.edu.in",
    "phone": "080 6824 0999",
    "url": "https://www.ssmrv.edu.in/academics/teaching_faculty/mrs_puja_biswas/"
  },
  {
    "id": "ms-jahanavi-rao-a-v",
    "name": "Ms. Jahanavi Rao A.V.",
    "designation": "Assistant Professor",
    "department": "Computer Applications (BCA)",
    "deptFlow": "faculty_bca",
    "qualifications": "BCA (Vijaya College, Jayanagar), M.Sc (Computer Science, National College Basavanagudi)",
    "experience": "5+ Years Teaching & Research Experience in Computer Science",
    "specialisation": "Computer Science, Web Technologies & Software Development",
    "bio": "Ms. Jahanavi Rao A.V. is a dedicated academician and researcher with 5 years of teaching and research experience in computer science, guiding BCA students in programming and innovation.",
    "highlights": "Active contributor to BCA academic research and coding clubs.",
    "committee": "BCA Academic & Technical Club Mentor",
    "email": "jahanavirao.ssmrv@rvei.edu.in",
    "phone": "080 6824 0999",
    "url": "https://www.ssmrv.edu.in/academics/teaching_faculty/ms_jahanavi_rao_a_v/"
  },
  {
    "id": "dr-malini-n",
    "name": "Dr. Malini N.",
    "designation": "Associate Professor and HOD – Commerce",
    "department": "Commerce (B.Com)",
    "deptFlow": "faculty_commerce",
    "qualifications": "B.Com (Accounting & Taxation, Bangalore University), M.Com (Bangalore University), MBA (HRM, IGNOU), Ph.D. (Jain Deemed-to-be University)",
    "experience": "20+ Years Experience in Academia & Financial Analysis",
    "specialisation": "Accounting and Taxation, Human Resources Management, Global Climate Governance",
    "bio": "An accomplished educationist with a career spanning more than two decades, Dr. Malini N. began her career as a Financial Analyst and has served as Associate Professor, HOD, Vice-Principal, and Principal. She is a member of the Board of Examiners at Bangalore University, NMKRV, JNC, CMR, BMS, and mLAC.",
    "highlights": "Published 'An Analysis of the Role of G20 in Global Climate Governance'; Board of Examiners Member & Deputy/Assistant Custodian at Bangalore University.",
    "committee": "Associate Professor & HOD — Commerce | Grievance Redressal Cell (B.Com)",
    "email": "malinin.ssmrv@rvei.edu.in",
    "phone": "080 6824 0999",
    "url": "https://www.ssmrv.edu.in/academics/teaching_faculty/dr_malini_n/"
  },
  {
    "id": "ms-samskruthi-b-l",
    "name": "Ms. Samskruthi B. L.",
    "designation": "Associate Professor and HOD – Commerce",
    "department": "Commerce (B.Com)",
    "deptFlow": "faculty_commerce",
    "qualifications": "M.Com, M.Phil, UGC-NET / KSET",
    "experience": "Senior Academic Leadership in Department of Commerce",
    "specialisation": "Corporate Accounting, Banking, Financial Markets & Taxation",
    "bio": "Ms. Samskruthi B. L. serves as Associate Professor and Head of the Department of Commerce (B.Com) at SSMRV College, leading curriculum modernization, NEP/SEP implementation, and professional accounting tracks.",
    "highlights": "Associate Professor and Head of Department – Commerce.",
    "committee": "Associate Professor & HOD — Department of Commerce (B.Com)",
    "email": "office.ssmrv@rvei.edu.in",
    "phone": "080 6824 0999",
    "url": "https://www.ssmrv.edu.in/academics/teaching_faculty/"
  },
  {
    "id": "mr-gokul-c",
    "name": "Mr. Gokul C.",
    "designation": "Assistant Professor and Coordinator (B.Com 1st Year)",
    "department": "Commerce (B.Com)",
    "deptFlow": "faculty_commerce",
    "qualifications": "B.Com (Bangalore University), MBA (Bangalore University), M.Com (Annamalai University), PGDBI (Annamalai University), KSET",
    "experience": "10+ Years Corporate Industry Experience + 10+ Years Academic Experience",
    "specialisation": "Accounting, Taxation, Financial Management & General Management",
    "bio": "Mr. Gokul C. brings over 20 years of combined experience—10+ years in corporate accounting and finance and 10+ years in academia. He serves as Coordinator for 1st Year B.Com and College SPOC for the SSMRV Alumni Association (Sammilana).",
    "highlights": "20+ years combined industry and teaching experience; College SPOC for Alumni Association.",
    "committee": "B.Com 1st Year Coordinator | College SPOC — Alumni Association (Sammilana) | Innovation Cell (B.Com)",
    "email": "gokulc.ssmrv@rvei.edu.in",
    "phone": "080 6824 0999",
    "url": "https://www.ssmrv.edu.in/academics/teaching_faculty/mr_gokul_c/"
  },
  {
    "id": "dr-vinaya-t",
    "name": "Dr. Vinaya T.",
    "designation": "Assistant Professor and Coordinator (B.Com 2nd Year)",
    "department": "Commerce (B.Com)",
    "deptFlow": "faculty_commerce",
    "qualifications": "BBM, M.Com, Ph.D. (University of Mysore, Manasagangotri)",
    "experience": "17+ Years Teaching & Corporate Experience",
    "specialisation": "Finance, Accounting, Taxation and Empirical Research",
    "bio": "Dr. Vinaya T. is an academician with 17 years of experience spanning both teaching and corporate domains. Known for his student-centric mentorship, he serves as B.Com 2nd Year Coordinator and College SPOC for the Entrepreneurship Cell.",
    "highlights": "Published research on 'Role of Audit Committees and its Impact on Organisational Performance' (Wesleyan Journal of Research) and IT in Banking.",
    "committee": "B.Com 2nd Year Coordinator | College SPOC — Entrepreneurship Cell | Sports Committee (B.Com)",
    "email": "vinayat.ssmrv@rvei.edu.in",
    "phone": "080 6824 0999",
    "url": "https://www.ssmrv.edu.in/academics/teaching_faculty/dr_vinaya_t/"
  },
  {
    "id": "ms-mokshamala-u",
    "name": "Ms. Mokshamala U.",
    "designation": "Professor",
    "department": "Commerce (B.Com)",
    "deptFlow": "faculty_commerce",
    "qualifications": "M.A. (Political Science, Bangalore University), B.Ed (Bangalore University), LL.B. (KSLU)",
    "experience": "18+ Years Teaching Experience in Higher Education",
    "specialisation": "Business Law, Corporate Law, Constitutional Law & Political Science",
    "bio": "Ms. Mokshamala U. is a dedicated Professor in the B.Com department with 18 years of experience. Holding degrees in Law (LL.B.), Political Science (M.A.), and Education (B.Ed.), she brings rich legal and multidisciplinary expertise to commerce education.",
    "highlights": "18+ years teaching Business & Corporate Law in the Department of Commerce.",
    "committee": "Senior Professor — Business & Corporate Law (B.Com)",
    "email": "mokshamalau.ssmrv@rvei.edu.in",
    "phone": "080 6824 0999",
    "url": "https://www.ssmrv.edu.in/academics/teaching_faculty/ms_mokshamala_u/"
  },
  {
    "id": "mr-yallappa-m",
    "name": "Mr. Yallappa M.",
    "designation": "Assistant Professor & NSS Programme Officer",
    "department": "Commerce (B.Com)",
    "deptFlow": "faculty_commerce",
    "qualifications": "B.Com (RC College, Bangalore), MFA (Central College, Bangalore University), M.Com, M.Phil, Ph.D. (Pursuing, Jain University)",
    "experience": "15+ Years Teaching Experience in Finance & Commerce",
    "specialisation": "Finance, Financial Analysis & Accounting",
    "bio": "Mr. Yallappa M. brings over 15 years of teaching experience in finance across reputed colleges. He actively leads social service initiatives as the College NSS Programme Officer and serves on multiple statutory committees for student welfare.",
    "highlights": "College NSS Programme Officer (Ministry of Youth Affairs & Sports); 15+ years finance teaching.",
    "committee": "College SPOC — NSS Unit (Programme Officer) | SC/ST Cell, Entrepreneurship & Discipline Committees (B.Com)",
    "email": "yallappam.ssmrv@rvei.edu.in",
    "phone": "080 6824 0999",
    "url": "https://www.ssmrv.edu.in/academics/teaching_faculty/mr_yallappa_m/"
  },
  {
    "id": "ms-m-roopa-latha",
    "name": "Ms. M. Roopa Latha",
    "designation": "Assistant Professor",
    "department": "Commerce (B.Com)",
    "deptFlow": "faculty_commerce",
    "qualifications": "B.Sc (Computer Science, Shree Venkateshwara University), MBA (Shree Venkateshwara University)",
    "experience": "16+ Years Teaching & Research Experience in Commerce & Management",
    "specialisation": "Finance and Human Resources Management",
    "bio": "Ms. M. Roopa Latha is a dedicated academician and researcher with 16 years of teaching, research, and administrative experience in commerce, finance, and human resources.",
    "highlights": "16+ years of academic mentorship and research in Finance and HRM.",
    "committee": "Commerce Academic & Research Committee",
    "email": "roopalatha.ssmrv@rvei.edu.in",
    "phone": "080 6824 0999",
    "url": "https://www.ssmrv.edu.in/academics/teaching_faculty/ms_m_roopa_latha/"
  },
  {
    "id": "mr-shivakumara-n",
    "name": "Mr. Shivakumara N.",
    "designation": "Assistant Professor",
    "department": "Commerce (B.Com)",
    "deptFlow": "faculty_commerce",
    "qualifications": "B.Com (Bangalore University), M.Com (Bangalore University), B.Ed (Bangalore University), UGC-NET Qualified",
    "experience": "16+ Years Teaching Experience in Commerce",
    "specialisation": "Accounts and Taxation",
    "bio": "Mr. Shivakumara N. is an Assistant Professor with 16 years of teaching experience. A postgraduate in Commerce with UGC-NET qualification and a B.Ed from Bangalore University, he specialises in Accounts and Taxation.",
    "highlights": "UGC-NET qualified educator with 16 years of commerce teaching experience.",
    "committee": "Commerce Academic & Mentorship Cell",
    "email": "shivakumaran.ssmrv@rvei.edu.in",
    "phone": "080 6824 0999",
    "url": "https://www.ssmrv.edu.in/academics/teaching_faculty/mr_shivakumara_n/"
  },
  {
    "id": "ms-deepika-l",
    "name": "Ms. Deepika L.",
    "designation": "Assistant Professor",
    "department": "Commerce (B.Com)",
    "deptFlow": "faculty_commerce",
    "qualifications": "B.Com (Vijaya Main College, Bengaluru), M.Com (HRM, University of Mysore), Diploma in Fashion Designing (IIFT)",
    "experience": "9+ Years Teaching Experience in Commerce",
    "specialisation": "Human Resource Management, Marketing, Auditing & Fashion Design",
    "bio": "Ms. Deepika L. is an experienced Assistant Professor with 9 years of teaching experience across commerce subjects, skilled in student mentoring, auditing, and HRM.",
    "highlights": "IQAC Representative and Alumni Association Coordinator for B.Com.",
    "committee": "IQAC Representative (B.Com) | Alumni Association Representative (B.Com)",
    "email": "deepikal.ssmrv@rvei.edu.in",
    "phone": "080 6824 0999",
    "url": "https://www.ssmrv.edu.in/academics/teaching_faculty/ms_deepika_l/"
  },
  {
    "id": "ms-shakeela-m-k",
    "name": "Ms. Shakeela M.K.",
    "designation": "Assistant Professor",
    "department": "Commerce (B.Com)",
    "deptFlow": "faculty_commerce",
    "qualifications": "B.Com (Procedure & Practices of Taxation), M.Com (Finance, Bangalore University), Diploma in Fashion Designing (IIFT)",
    "experience": "11+ Years Teaching Experience (formerly at NMKRV College for Women)",
    "specialisation": "Finance, Accounting, Taxation, HR and Management",
    "bio": "Ms. Shakeela M.K. is an Assistant Professor with 11 years of teaching experience specialising in finance, accounting, and taxation. She has co-authored two textbooks and published research papers in sustainable business and AI banking.",
    "highlights": "Co-authored textbook 'Financial Accounting' (Vision Book House, ISBN: 9789358407440, 2024); published papers on Green Marketing and AI Banking.",
    "committee": "Cultural Committee Representative (B.Com)",
    "email": "shakeelamk.ssmrv@rvei.edu.in",
    "phone": "080 6824 0999",
    "url": "https://www.ssmrv.edu.in/academics/teaching_faculty/ms_shakeela_m_k/"
  },
  {
    "id": "mrs-vidya-u-jambagi",
    "name": "Mrs. Vidya U. Jambagi",
    "designation": "Assistant Professor",
    "department": "Commerce (B.Com)",
    "deptFlow": "faculty_commerce",
    "qualifications": "B.Com (PES College), M.Com (Bangalore University), M.Phil. (Dravidian University), KSET, PGDBA (2 Years)",
    "experience": "21+ Years Teaching & Research Experience",
    "specialisation": "Accounting, Corporate Financial Reporting & Sustainability",
    "bio": "An accomplished educator with over 21 years of teaching experience, Mrs. Vidya U. Jambagi holds an M.Com, M.Phil., KSET, and PGDBA. She has contributed extensively to curriculum development, research publications, and student mentoring.",
    "highlights": "Published papers in IJMSRR (Impact Factor 6.462) and Web of Science indexed Indian Journal of Natural Sciences.",
    "committee": "Internal Compliance / POSH Committee Representative (B.Com)",
    "email": "vidyauj.ssmrv@rvei.edu.in",
    "phone": "080 6824 0999",
    "url": "https://www.ssmrv.edu.in/academics/teaching_faculty/mrs_vidya_u_jambagi/"
  },
  {
    "id": "ms-bharathi-n-s",
    "name": "Dr. / Ms. Bharathi N.S.",
    "designation": "Assistant Professor",
    "department": "Commerce (B.Com)",
    "deptFlow": "faculty_commerce",
    "qualifications": "B.Com (Bangalore University), M.Com (IGNOU), MBA (Alagappa University), PGDBIO (IGNOU), Ph.D. (Christ Deemed-to-be University)",
    "experience": "10+ Years Teaching & Research Experience",
    "specialisation": "Marketing, Finance, Accountancy, Cognitive Psychology & Neuroscience",
    "bio": "A passionate educator with 10 years of experience as an Assistant Professor and researcher. She holds a Ph.D. from Christ University, a patent, and numerous publications in Marketing, Psychology, Finance, and HR.",
    "highlights": "Patent holder; published research on Intellectual Property Rights (IJARESM) and Gen-Z Purchase Intention.",
    "committee": "Internal Cultural Committee SPOC (Tarangini) | Examination Committee (B.Com)",
    "email": "bharathins.ssmrv@rvei.edu.in",
    "phone": "080 6824 0999",
    "url": "https://www.ssmrv.edu.in/academics/teaching_faculty/ms_bharathi_n_s/"
  },
  {
    "id": "dr-kanchan-g-rajput",
    "name": "Dr. Kanchan G. Rajput",
    "designation": "Assistant Professor",
    "department": "Commerce (B.Com)",
    "deptFlow": "faculty_commerce",
    "qualifications": "B.Com, MBA (Finance), Ph.D. (ISBR Research Centre, University of Mysore)",
    "experience": "13+ Years Teaching & Research Experience",
    "specialisation": "Domain of Finance, Microfinance, Financial Inclusion & Banking",
    "bio": "Dr. Kanchan G. Rajput is a dedicated academician with 13 years of experience in teaching finance. Her contributions span research publications, international conferences, and book chapters with IGI Global.",
    "highlights": "Published chapters with IGI Global ('Transforming Economies Through Microfinance') and NeuroQuantology on RBI Financial Inclusion.",
    "committee": "Commerce Research & Finance Forum",
    "email": "kanchang.ssmrv@rvei.edu.in",
    "phone": "080 6824 0999",
    "url": "https://www.ssmrv.edu.in/academics/teaching_faculty/dr_kanchan_g_rajput/"
  },
  {
    "id": "dr-rajini-k-s",
    "name": "Dr. Rajini K.S.",
    "designation": "Assistant Professor",
    "department": "Commerce (B.Com)",
    "deptFlow": "faculty_commerce",
    "qualifications": "B.A. (Mangalore University), MBA (Pondicherry University), Ph.D. (Jain University)",
    "experience": "12+ Years Teaching Experience in B.Com Department",
    "specialisation": "Human Resource Management, ESG & Green Marketing Strategies",
    "bio": "Dr. Rajini K.S. is an Assistant Professor in the B.Com department with 12 years of teaching experience, deeply committed to Human Resource Management, student development, and community service.",
    "highlights": "Published Scopus-indexed papers on 'ESG Considerations in Retail' (2024) and 'Migrant Labour Upskilling'.",
    "committee": "B.Com Student Welfare & HRM Mentor",
    "email": "rajiniks.ssmrv@rvei.edu.in",
    "phone": "080 6824 0999",
    "url": "https://www.ssmrv.edu.in/academics/teaching_faculty/dr_rajini_k_s/"
  },
  {
    "id": "dr-shashikala-c-s",
    "name": "Dr. Shashikala C.S.",
    "designation": "Assistant Professor",
    "department": "Commerce (B.Com)",
    "deptFlow": "faculty_commerce",
    "qualifications": "B.Com (Bangalore University), M.Com (Bangalore University), Ph.D. in Commerce (Tumkur University)",
    "experience": "8.7+ Years Teaching & Research Experience",
    "specialisation": "Accounting and Taxation, Marketing, Strategic Management & Consumer Behaviour",
    "bio": "Dr. Shashikala C.S. holds a Ph.D. in Commerce with over 8.7 years of teaching experience. She has authored a book on Strategic Management and published extensively on social media marketing and consumer behaviour.",
    "highlights": "Authored book 'Strategic Management' (ISBN: 978-81-985244-3-0, Feb 2025); published in IJFMR and JETIR.",
    "committee": "IPR Cell Representative (B.Com)",
    "email": "shashikalacs.ssmrv@rvei.edu.in",
    "phone": "080 6824 0999",
    "url": "https://www.ssmrv.edu.in/academics/teaching_faculty/dr_shashikala_c_s/"
  },
  {
    "id": "ms-bhargavi-iyer-b-s",
    "name": "Mrs. Bhargavi Iyer B.S.",
    "designation": "Assistant Professor",
    "department": "Commerce (B.Com)",
    "deptFlow": "faculty_commerce",
    "qualifications": "B.Com (Bangalore University), M.Com (Bangalore University)",
    "experience": "4.5+ Years Teaching Experience | In-Charge of RV-Skills",
    "specialisation": "Accounting and Taxation",
    "bio": "Mrs. Bhargavi Iyer B.S. is an active member of the Institution's Innovation Council (IIC), Faculty Study Circle (FSC), Taxation Club, and Youth Red Cross (YRC). She oversees skill development initiatives as In-Charge of RV-Skills.",
    "highlights": "In-Charge of RV-Skills; presented 'Revolutionising Education: A Role of AI in Empowering Teachers' at MS Ramaiah (2024).",
    "committee": "In-Charge — RV-Skills | Member — IIC, Taxation Club & Youth Red Cross (YRC)",
    "email": "bhargaviiyer.ssmrv@rvei.edu.in",
    "phone": "080 6824 0999",
    "url": "https://www.ssmrv.edu.in/academics/teaching_faculty/ms_bhargavi_iyer_b_s/"
  },
  {
    "id": "vaishnavi-r",
    "name": "Ms. Vaishnavi R",
    "designation": "Assistant Professor",
    "department": "Commerce (B.Com)",
    "deptFlow": "faculty_commerce",
    "qualifications": "B.Com with Computer Applications (Madurai Kamaraj University), M.Com with Computer Applications (MKU), M.A. Economics (IGNOU), UGC-NET, KSET",
    "experience": "9.5+ Years Teaching Experience",
    "specialisation": "Accounting, Economics & Computer Applications in Commerce",
    "bio": "Ms. Vaishnavi R is a passionate educator with 9.5 years of teaching experience, qualified with both UGC-NET and KSET alongside postgraduates in Commerce (Computer Applications) and Economics.",
    "highlights": "Dual qualified in UGC-NET and KSET with dual master's degrees (M.Com & M.A. Economics).",
    "committee": "Commerce Academic & Competitive Exam Mentor",
    "email": "vaishnavir.ssmrv@rvei.edu.in",
    "phone": "080 6824 0999",
    "url": "https://www.ssmrv.edu.in/academics/teaching_faculty/vaishnavi_r/"
  },
  {
    "id": "prakasha-v",
    "name": "Mr. Prakasha V (Dr. Prakasha V)",
    "designation": "Assistant Professor",
    "department": "Commerce (B.Com)",
    "deptFlow": "faculty_commerce",
    "qualifications": "B.Com (Bangalore University), MBA (Bangalore University), M.Com (KSOU), PGDFM (KSOU), Ph.D. (Kalinga University)",
    "experience": "16+ Years Teaching Experience in Commerce & Management",
    "specialisation": "Finance & Marketing, Accounts",
    "bio": "Mr. Prakasha V has 16 years of teaching experience in commerce and management, holding an MBA, M.Com, PGDFM, and Ph.D. from Kalinga University with multiple UGC Care publications.",
    "highlights": "Published UGC Care papers on Karnataka Power Sector Organization and Industry 4.0 Industrial Relations.",
    "committee": "Cultural Committee (B.Com) | Examination Committee (B.Com)",
    "email": "prakashav.ssmrv@rvei.edu.in",
    "phone": "080 6824 0999",
    "url": "https://www.ssmrv.edu.in/academics/teaching_faculty/prakasha_v/"
  },
  {
    "id": "ume-salma",
    "name": "Mrs. Ume Salma",
    "designation": "Assistant Professor",
    "department": "Commerce (B.Com)",
    "deptFlow": "faculty_commerce",
    "qualifications": "MBA (Bharathiar University), M.Phil (Dravidian University), M.Com (University of Mysore), PGDIB (Central University Bangalore)",
    "experience": "17+ Years Teaching Experience at SSMRV College (Since 2008)",
    "specialisation": "Digital Marketing, Commerce and Management",
    "bio": "Serving as an Assistant Professor at SSMRV College since 2008, Mrs. Ume Salma specialises in Commerce, Management, and Digital Marketing with a strong commitment to student career readiness.",
    "highlights": "Published 'Social Media: A Catalyst for Business Growth' in IJFMR (Impact Factor 9.24, Sep-Oct 2024).",
    "committee": "Placement & Career Guidance Cell Representative (B.Com)",
    "email": "umesalma.ssmrv@rvei.edu.in",
    "phone": "080 6824 0999",
    "url": "https://www.ssmrv.edu.in/academics/teaching_faculty/ume_salma/"
  },
  {
    "id": "nandini-j",
    "name": "Ms. Nandini J",
    "designation": "Assistant Professor",
    "department": "Commerce (B.Com)",
    "deptFlow": "faculty_commerce",
    "qualifications": "M.Com, Academic & Statutory Cell Coordinator",
    "experience": "Commerce Teaching & Institutional Statutory Leadership",
    "specialisation": "Commerce, Business Ethics & Student Welfare",
    "bio": "Ms. Nandini J is an Assistant Professor in Commerce and serves as the College SPOC for the Anti-Ragging Cell, Human Rights Protection Cell, Anti-Drug Cell, and Discipline Committee.",
    "highlights": "Organized the 2025 Awareness Session on Anti-Ragging, Anti-Drug and Human Rights Protection and International FDP on Mental Health.",
    "committee": "College SPOC — Anti-Ragging Cell, Human Rights Protection Cell, Anti-Drug Cell & Discipline Committee",
    "email": "nandinij.ssmrv@rvei.edu.in",
    "phone": "080 6824 0999",
    "url": "https://www.ssmrv.edu.in/academics/teaching_faculty/nandini_j/"
  },
  {
    "id": "sharavana-m",
    "name": "Mr. Sharavana M",
    "designation": "Assistant Professor",
    "department": "Commerce (B.Com)",
    "deptFlow": "faculty_commerce",
    "qualifications": "M.Com, Statutory Cell Convener",
    "experience": "Commerce Teaching & Student Support Systems",
    "specialisation": "Commerce, Accounting & Inclusive Education",
    "bio": "Mr. Sharavana M serves as an Assistant Professor in Commerce and is the College-Level Faculty SPOC for the SC/ST Statutory Cell under UGC and NAAC regulations.",
    "highlights": "College SPOC for the SC/ST Statutory Cell.",
    "committee": "College SPOC & Convener — SC/ST Cell (UGC / NAAC)",
    "email": "sharavanam.ssmrv@rvei.edu.in",
    "phone": "080 6824 0999",
    "url": "https://www.ssmrv.edu.in/academics/teaching_faculty/sharavana_m/"
  },
  {
    "id": "dr-mohan-rao-c-n",
    "name": "Dr. Mohan Rao C.N.",
    "designation": "Assistant Professor & Chief Superintendent of Examinations",
    "department": "Commerce (B.Com)",
    "deptFlow": "faculty_commerce",
    "qualifications": "M.Com, Ph.D.",
    "experience": "Senior Academician & Examination Controller",
    "specialisation": "Commerce, Corporate Accounting & University Examinations",
    "bio": "Dr. Mohan Rao C.N. is an Assistant Professor and serves as the College-Level SPOC and Chief Superintendent of the Examination Committee overseeing Bengaluru City University (BCU) and internal evaluations.",
    "highlights": "College SPOC — Examination Committee (University / NAAC).",
    "committee": "College SPOC & Convener — Examination Committee",
    "email": "office.ssmrv@rvei.edu.in",
    "phone": "080 6824 0999",
    "url": "https://www.ssmrv.edu.in/academics/teaching_faculty/"
  },
  {
    "id": "vedamurthy-y-n",
    "name": "Dr. / Mr. Vedamurthy Y N",
    "designation": "Assistant Professor",
    "department": "Commerce (B.Com)",
    "deptFlow": "faculty_commerce",
    "qualifications": "M.Com, Ph.D.",
    "experience": "Academic Teaching & Internal Compliance Member",
    "specialisation": "Commerce & Academic Governance",
    "bio": "Mr. Vedamurthy Y N serves as an Assistant Professor at SSMRV College and is a member of the Internal Compliance (POSH) Committee.",
    "highlights": "Member of the Statutory Internal Compliance Committee.",
    "committee": "Internal Compliance (POSH) Committee Member",
    "email": "vedamurthy.ssmrv@rvei.edu.in",
    "phone": "080 6824 0999",
    "url": "https://www.ssmrv.edu.in/academics/teaching_faculty/vedamurthy_y_n/"
  },
  {
    "id": "dr-revathy-shivashankaran",
    "name": "Dr. Revathy Shivashankaran",
    "designation": "Associate Professor and HOD – BBA",
    "department": "Business Administration (BBA & Aviation)",
    "deptFlow": "faculty_bba",
    "qualifications": "B.Sc (Mathematics, University of Madras), MBA (University of Madras), M.Com (IGNOU), Ph.D. (Mother Teresa Women's University, Kodaikanal)",
    "experience": "25+ Years Combined Experience (16.5 Years Academia + 8.5 Years Corporate)",
    "specialisation": "Organisational Behaviour & HRM, HR Analytics, General Management",
    "bio": "Dr. Revathy Shivashankaran brings over 25 years of combined corporate and academic experience and serves as Associate Professor & HOD of BBA. She chairs the College Internal Compliance (POSH) Committee and serves on the Grievance Redressal Cell.",
    "highlights": "Published research on 'Mediating Impact of Upskilling on Determinants of Moonlighting' (IJRAR) and Predictive HR Analytics.",
    "committee": "Associate Professor & HOD — BBA | College Chairperson — Internal Compliance (POSH) | Grievance Redressal Cell (BBA)",
    "email": "revathys.ssmrv@rvei.edu.in",
    "phone": "080 6824 0999",
    "url": "https://www.ssmrv.edu.in/academics/teaching_faculty/dr_revathy_shivashankaran/"
  },
  {
    "id": "mr-jagadish-a",
    "name": "Mr. Jagadish A.",
    "designation": "Assistant Professor and HOD – BBA Aviation Management",
    "department": "Business Administration (BBA & Aviation)",
    "deptFlow": "faculty_bba",
    "qualifications": "BCA (Bangalore University), MBA (Bangalore University), Ph.D. (Pursuing at Jain University)",
    "experience": "16+ Years Teaching Experience + Corporate Experience at Bharti Infotel & ICICI Bank",
    "specialisation": "Marketing, Information Technology, Consumer Behaviour Analytics, E-Commerce & Aviation Management",
    "bio": "Mr. Jagadish A. serves as Assistant Professor and Head of the Department for BBA & BBA Aviation Management with over 16 years of teaching experience and corporate stints at Bharti Infotel Ltd. and ICICI Bank Ltd. He has served as IQAC Member, Staff Council Secretary, and Cultural Committee Convenor.",
    "highlights": "Published patents, book chapters ('Service Value Multiplier'), and research papers on Digital Marketing & Job Satisfaction.",
    "committee": "HOD — BBA Aviation Management | IQAC Representative (BBA) | Internal Compliance POSH Member (BBA)",
    "email": "jagadisha.ssmrv@rvei.edu.in",
    "phone": "080 6824 0999",
    "url": "https://www.ssmrv.edu.in/academics/teaching_faculty/mr_jagadish_a/"
  },
  {
    "id": "avinash-k-v",
    "name": "Mr. Avinash K.V.",
    "designation": "Assistant Professor & Associate NCC Officer (ANO)",
    "department": "Business Administration (BBA & Aviation)",
    "deptFlow": "faculty_bba",
    "qualifications": "B.Com, M.Com, MBA",
    "experience": "Management Educator & Commissioned Associate NCC Officer",
    "specialisation": "Accounting and Taxation, Human Resources Management & Youth Leadership",
    "bio": "Mr. Avinash K.V. serves as an Assistant Professor in Management and leads the SSMRV National Cadet Corps (NCC Unit) as the College SPOC and Associate NCC Officer (ANO).",
    "highlights": "College SPOC — National Cadet Corps (NCC Unit, Ministry of Youth Affairs & Sports).",
    "committee": "College SPOC — NCC Unit (Associate NCC Officer)",
    "email": "avinashkv.ssmrv@rvei.edu.in",
    "phone": "080 6824 0999",
    "url": "https://www.ssmrv.edu.in/academics/teaching_faculty/avinash_k_v/"
  },
  {
    "id": "dr-shruti-khemashetty",
    "name": "Dr. Shruti Khemashetty",
    "designation": "Assistant Professor",
    "department": "Business Administration (BBA & Aviation)",
    "deptFlow": "faculty_bba",
    "qualifications": "B.Sc, MBA (Dodappa Appa College), Ph.D. (Dayananda Sagar University)",
    "experience": "15+ Years Academic Experience in Management",
    "specialisation": "Human Resource Management and Marketing",
    "bio": "Dr. Shruti Khemashetty is an Assistant Professor with 15 years of academic experience specialising in Human Resource Management and Marketing, dedicated to student leadership and innovation.",
    "highlights": "15 years of management teaching; Innovation Cell Coordinator for BBA.",
    "committee": "Innovation Cell Representative (BBA)",
    "email": "shrutik.ssmrv@rvei.edu.in",
    "phone": "080 6824 0999",
    "url": "https://www.ssmrv.edu.in/academics/teaching_faculty/dr_shruti_khemashetty/"
  },
  {
    "id": "dr-sushma-c",
    "name": "Dr. Sushma C.",
    "designation": "Assistant Professor",
    "department": "Business Administration (BBA & Aviation)",
    "deptFlow": "faculty_bba",
    "qualifications": "BBM (Bangalore University), MBA (Bangalore University), Ph.D. in Management (Bangalore University)",
    "experience": "13+ Years Academic & Industrial Experience",
    "specialisation": "Accounts, Finance, Entrepreneurship & Industrial Dynamics",
    "bio": "Dr. Sushma C. is an Assistant Professor with over 13 years of academic and industrial experience in accounts and finance, holding a BBM, MBA, and Ph.D. in Management from Bangalore University.",
    "highlights": "Published research on 'Role of Women Entrepreneurs', 'Circular Economy Business Model', and 'Cognitive Factors in Financial Decision Making'.",
    "committee": "IPR Cell Representative (BBA)",
    "email": "sushmac.ssmrv@rvei.edu.in",
    "phone": "080 6824 0999",
    "url": "https://www.ssmrv.edu.in/academics/teaching_faculty/dr_sushma_c/"
  },
  {
    "id": "ms-m-rajatha",
    "name": "Mrs. Rajatha M",
    "designation": "Assistant Professor",
    "department": "Business Administration (BBA & Aviation)",
    "deptFlow": "faculty_bba",
    "qualifications": "B.Com (Bangalore University), M.Com (Kuvempu University), MBA (ICFAI University)",
    "experience": "14+ Years Teaching Experience in BBA Department",
    "specialisation": "Finance and Marketing",
    "bio": "Mrs. Rajatha M is an Assistant Professor in the Department of BBA with over 14 years of teaching experience. She specialises in Finance and Marketing, incorporating interactive case-based analysis to bridge theory with corporate practice.",
    "highlights": "14+ years in BBA education; Alumni Association Coordinator for BBA.",
    "committee": "Alumni Association Representative (BBA)",
    "email": "rajatham.ssmrv@rvei.edu.in",
    "phone": "080 6824 0999",
    "url": "https://www.ssmrv.edu.in/academics/teaching_faculty/ms_m_rajatha/"
  },
  {
    "id": "mr-santosh-d-bendigeri",
    "name": "Mr. Santosh D. Bendigeri",
    "designation": "Assistant Professor",
    "department": "Business Administration (BBA & Aviation)",
    "deptFlow": "faculty_bba",
    "qualifications": "B.Com (Dharwad University), M.Com (Rajasthan University), MBA (Bangalore University), Ph.D. (Pursuing at Annamalai University)",
    "experience": "10+ Years Teaching Experience + Corporate Experience",
    "specialisation": "Finance, Accounting and Taxation",
    "bio": "Mr. Santosh Bendigeri is a dedicated academic with 10 years of teaching experience. Currently pursuing his Ph.D. at Annamalai University, he actively contributes to textbook authorship and curriculum development.",
    "highlights": "Authored textbooks 'Leading the Future: Progressive Approaches to Modern Management' (2023) and 'Financial Accounting' as per BCU SEP syllabus (2024).",
    "committee": "Sports Committee Representative (BBA)",
    "email": "santoshdb.ssmrv@rvei.edu.in",
    "phone": "080 6824 0999",
    "url": "https://www.ssmrv.edu.in/academics/teaching_faculty/mr_santosh_d_bendigeri/"
  },
  {
    "id": "mrs-pavana-r-kulkarni",
    "name": "Mrs. Pavana R. Kulkarni",
    "designation": "Assistant Professor",
    "department": "Business Administration (BBA & Aviation)",
    "deptFlow": "faculty_bba",
    "qualifications": "B.Com, MBA (Finance and HR, Bangalore University), M.Com (University of Mysore)",
    "experience": "9+ Years Undergraduate Teaching Experience (at SSMRV since 2019)",
    "specialisation": "Finance and Human Resource Management",
    "bio": "Mrs. Pavana R. Kulkarni is an Assistant Professor in the BBA Department with 9 years of teaching experience. Holding both an MBA in Finance & HR and an M.Com, she has been mentoring BBA students at SSMRV since 2019.",
    "highlights": "Dual postgraduate in MBA (Finance & HR) and M.Com.",
    "committee": "BBA Academic & Student Mentoring Cell",
    "email": "pavanark.ssmrv@rvei.edu.in",
    "phone": "080 6824 0999",
    "url": "https://www.ssmrv.edu.in/academics/teaching_faculty/mrs_pavana_r_kulkarni/"
  },
  {
    "id": "mrs-lavanya-b-k",
    "name": "Ms. Lavanya B.K.",
    "designation": "Assistant Professor",
    "department": "Business Administration (BBA & Aviation)",
    "deptFlow": "faculty_bba",
    "qualifications": "B.Com (NMKRV College for Women), M.Com (Bangalore University), KSET, Ph.D. Candidate (Jain University)",
    "experience": "9+ Years Academic & Research Experience",
    "specialisation": "Accounting and Taxation",
    "bio": "Ms. Lavanya B.K. is a KSET-qualified Assistant Professor with 9 years of experience in academia and a Ph.D. candidate at Jain University, focusing on innovative methodologies in accounting, taxation, and women entrepreneurship.",
    "highlights": "Presented international conference papers on Circular Economy Business Models and Women Entrepreneurs (2024).",
    "committee": "OBC Cell Coordinator (BBA) | Cultural Committee (BBA) | Placement Cell (BBA)",
    "email": "lavanyabk.ssmrv@rvei.edu.in",
    "phone": "080 6824 0999",
    "url": "https://www.ssmrv.edu.in/academics/teaching_faculty/mrs_lavanya_b_k/"
  },
  {
    "id": "mr-arunkumar-r",
    "name": "Mr. Arun Kumar R.",
    "designation": "Assistant Professor",
    "department": "Business Administration (BBA & Aviation)",
    "deptFlow": "faculty_bba",
    "qualifications": "BBM (Marketing), MBA (Finance and HR, Anna University of Technology)",
    "experience": "Experienced Commerce & Management Educator",
    "specialisation": "Finance and Human Resources",
    "bio": "Mr. Arun Kumar R. is an enthusiastic Assistant Professor with a strong foundation in BBA Marketing, Finance, and HR, dedicated to student mentoring and institutional development.",
    "highlights": "Authored NEP 4th Sem BBA textbook 'Personal Wealth Management' (Kalyani Publishers, ISBN: 978-93-5540-387-1); published in UGC CARE Journal of Asiatic Society of Mumbai.",
    "committee": "BBA Curriculum & Authorship Cell",
    "email": "arunkumarr.ssmrv@rvei.edu.in",
    "phone": "080 6824 0999",
    "url": "https://www.ssmrv.edu.in/academics/teaching_faculty/mr_arunkumar_r/"
  },
  {
    "id": "ms-neha-banu",
    "name": "Ms. Neha Banu",
    "designation": "Assistant Professor",
    "department": "Business Administration (BBA & Aviation)",
    "deptFlow": "faculty_bba",
    "qualifications": "B.Com (Bangalore University), M.Com (Bangalore University), Ph.D. (Enrolled, Jain Deemed-to-be University)",
    "experience": "6.5+ Years Academic & Research Experience",
    "specialisation": "Finance and Banking",
    "bio": "Ms. Neha Banu is a dedicated Assistant Professor with over 6.5 years of academic experience, conducting research in finance, banking, and financial literacy among youth.",
    "highlights": "Presented papers on 'Financial Literacy Among Young Generation in Bangalore' and NEP 2020 Teacher Education.",
    "committee": "Entrepreneurship Cell Representative (BBA) | Examination Committee (BBA)",
    "email": "nehabanu.ssmrv@rvei.edu.in",
    "phone": "080 6824 0999",
    "url": "https://www.ssmrv.edu.in/academics/teaching_faculty/ms_neha_banu/"
  },
  {
    "id": "dr-lavanya-balaji",
    "name": "Dr. Lavanya Balaji",
    "designation": "Assistant Professor and Head of PG Department – M.Com",
    "department": "Postgraduate Studies (M.Com)",
    "deptFlow": "faculty_mcom",
    "qualifications": "B.Com (SDNB Vaishnav College for Women), MBA (Bharath Engineering College), Ph.D. (Bharath Institute of Higher Education and Research)",
    "experience": "21+ Years Academic & Postgraduate Leadership Experience",
    "specialisation": "Finance and Banking, Accounting, Corporate Taxation",
    "bio": "Dr. Lavanya Balaji is the Head of the Postgraduate Department (M.Com) with over 21 years of academic experience. She specialises in finance, banking, accounting, and taxation, and represents M.Com across key statutory committees.",
    "highlights": "21+ years of postgraduate leadership; M.Com Coordinator for IQAC, Grievance Redressal, Innovation, Placement, Alumni & Examinations.",
    "committee": "Head of PG Department (M.Com) | IQAC, Grievance Redressal, Innovation, Alumni, Placement & Exam Committees (M.Com)",
    "email": "lavanyab.ssmrv@rvei.edu.in",
    "phone": "080 6824 0999",
    "url": "https://www.ssmrv.edu.in/academics/teaching_faculty/dr_lavanya_balaji/"
  },
  {
    "id": "dr-lalitha-b-s",
    "name": "Dr. Lalitha B.S.",
    "designation": "Assistant Professor",
    "department": "Postgraduate Studies (M.Com)",
    "deptFlow": "faculty_mcom",
    "qualifications": "B.Com (Bangalore University), M.Com (Bangalore University), MBA (IGNOU), Ph.D. (University of Mysore)",
    "experience": "19+ Years Teaching Experience in Commerce & PG Studies",
    "specialisation": "Accounting, Finance, Banking and Supply Chain Management",
    "bio": "Dr. Lalitha B.S. is an Assistant Professor with 19 years of teaching experience holding an M.Com, MBA, and Ph.D. from the University of Mysore. Her expertise spans accounting, finance, banking, and supply chain management.",
    "highlights": "19 years of teaching experience; M.Com Representative for Equal Opportunity Cell & Entrepreneurship Cell.",
    "committee": "Equal Opportunity Cell Representative (M.Com) | Entrepreneurship Cell (M.Com)",
    "email": "lalithabs.ssmrv@rvei.edu.in",
    "phone": "080 6824 0999",
    "url": "https://www.ssmrv.edu.in/academics/teaching_faculty/dr_lalitha_b_s/"
  },
  {
    "id": "mr-akshay-kumar-a-v",
    "name": "Dr. / Mr. Akshay Kumar A.V.",
    "designation": "Assistant Professor",
    "department": "Postgraduate Studies (M.Com)",
    "deptFlow": "faculty_mcom",
    "qualifications": "B.Com (Christ University), M.Com (Christ University), Ph.D. (Christ University)",
    "experience": "8+ Years Teaching & Research Experience",
    "specialisation": "Accountancy, Taxation and Corporate Finance",
    "bio": "Mr. Akshay Kumar A.V. holds a B.Com, M.Com, and Ph.D. from Christ University with 8 years of teaching experience in Accountancy, Taxation, and Finance.",
    "highlights": "Ph.D. from Christ University; M.Com Coordinator for IPR Cell, Sports, Cultural & Discipline Committees.",
    "committee": "IPR Cell, Sports Committee, Cultural Committee & Discipline Committee Representative (M.Com)",
    "email": "akshaykumar.ssmrv@rvei.edu.in",
    "phone": "080 6824 0999",
    "url": "https://www.ssmrv.edu.in/academics/teaching_faculty/mr_akshay_kumar_a_v/"
  },
  {
    "id": "dr-jyothi-n-hosurkar",
    "name": "Dr. Jyothi N. Hosurkar",
    "designation": "Assistant Professor and HOD – Languages (Kannada)",
    "department": "Languages & Humanities",
    "deptFlow": "faculty_languages",
    "qualifications": "B.A. (Karnataka University), M.A. in Kannada, M.A. in Folklore, Ph.D. (Karnataka University)",
    "experience": "13+ Years Teaching Experience in Kannada & Folklore",
    "specialisation": "Kannada Literature, Kannada Folklore & Creative Writing",
    "bio": "Dr. Jyothi N. Hosurkar is the Head of the Department of Languages and Assistant Professor in Kannada with over 13 years of teaching experience. Highly skilled in Kannada Folklore, she has also authored more than 10 published poems and short stories.",
    "highlights": "Authored 10+ published poems and short stories; dual M.A. in Kannada and Folklore with a Ph.D. from Karnataka University.",
    "committee": "Assistant Professor & HOD — Department of Languages & Humanities",
    "email": "jyothinh.ssmrv@rvei.edu.in",
    "phone": "080 6824 0999",
    "url": "https://www.ssmrv.edu.in/academics/teaching_faculty/dr_jyothi_n_hosurkar/"
  },
  {
    "id": "dr-prathima-vijay",
    "name": "Dr. Prathima Vijay",
    "designation": "Assistant Professor (Kannada)",
    "department": "Languages & Humanities",
    "deptFlow": "faculty_languages",
    "qualifications": "B.A. (Bangur Nagar Degree College), M.A. in Kannada (Karnataka University Dharwad), M.A. in Folklore (Karnataka University Dharwad), Ph.D. (Karnataka University Dharwad)",
    "experience": "10+ Years Teaching Experience in Kannada Literature",
    "specialisation": "Kannada Literature, Folklore & Women's Literary Studies",
    "bio": "Dr. Prathima Vijay is a passionate Kannada Professor with over 10 years of experience and dual Master's degrees in Kannada and Folklore along with a Ph.D. from Karnataka University, Dharwad.",
    "highlights": "Published chapters in 4 books (2024–2025) including 'Triveni Sahityadalli: Maruthi Chinthane' and 'Vachana Chinthana Vishwa Darshana'.",
    "committee": "Internal Compliance (POSH) Committee Representative",
    "email": "prathimav.ssmrv@rvei.edu.in",
    "phone": "080 6824 0999",
    "url": "https://www.ssmrv.edu.in/academics/teaching_faculty/dr_prathima_vijay/"
  },
  {
    "id": "kavitha-h-s",
    "name": "Dr. Kavitha H S",
    "designation": "Assistant Professor (Hindi)",
    "department": "Languages & Humanities",
    "deptFlow": "faculty_languages",
    "qualifications": "Postgraduate & Doctorate in Hindi (Dakshin Bharat Hindi Prachar Sabha)",
    "experience": "17+ Years Teaching Experience in Hindi Literature",
    "specialisation": "Hindi Literature, Language Pedagogy & Translation",
    "bio": "Dr. Kavitha H S serves as Assistant Professor in the Hindi Department at SSMRV Degree College with 17 years of experience helping students master Hindi literature and communication.",
    "highlights": "17+ years of teaching Hindi Literature; Discipline Committee Representative.",
    "committee": "Discipline Committee Representative",
    "email": "kavithahs.ssmrv@rvei.edu.in",
    "phone": "080 6824 0999",
    "url": "https://www.ssmrv.edu.in/academics/teaching_faculty/kavitha_h_s/"
  },
  {
    "id": "ramamishra-yashaswi-m",
    "name": "Mr. Ramamishra Yashaswi M",
    "designation": "Assistant Professor (Sanskrit)",
    "department": "Languages & Humanities",
    "deptFlow": "faculty_languages",
    "qualifications": "M.Phil (Rashtriya Sanskrit Vidyapeetha, Tirupati), B.Ed (Sringeri)",
    "experience": "Sanskrit Scholar & Educator",
    "specialisation": "Sanskrit Literature, Shastras & Indian Knowledge Systems",
    "bio": "Mr. Ramamishra Yashaswi M is an Assistant Professor of Sanskrit holding an M.Phil from RSVP Tirupati and B.Ed from Sringeri, guiding students in classical Sanskrit and heritage studies.",
    "highlights": "Examination Committee Representative for Languages.",
    "committee": "Examination Committee Representative (Languages)",
    "email": "ramamishra.ssmrv@rvei.edu.in",
    "phone": "080 6824 0999",
    "url": "https://www.ssmrv.edu.in/academics/teaching_faculty/ramamishra_yashaswi_m/"
  },
  {
    "id": "dr-d-kannan",
    "name": "Dr. D. Kannan",
    "designation": "Assistant Professor (English)",
    "department": "Languages & Humanities",
    "deptFlow": "faculty_languages",
    "qualifications": "B.A. (English, Bharathiar University), M.A. (English, Annamalai University), Ph.D. (Presidency University)",
    "experience": "Experienced English Literature Professor & UGC CARE Researcher",
    "specialisation": "Gender Studies, Indian Literature, Cinematic Literature & Communicative English",
    "bio": "Dr. D. Kannan is an Assistant Professor of English holding a Ph.D. from Presidency University. His scholarship explores Gender Studies, Indian Diaspora Literature, and Cinematic Literature.",
    "highlights": "Published multiple UGC CARE-I papers in Sodha-Prabha (2022) and Shanlax International Journal of English on Perumal Murugan and Shashi Deshpande.",
    "committee": "English Literary & Communication Forum",
    "email": "kannand.ssmrv@rvei.edu.in",
    "phone": "080 6824 0999",
    "url": "https://www.ssmrv.edu.in/academics/teaching_faculty/dr_d_kannan/"
  },
  {
    "id": "ms-gayathri-kempurajan",
    "name": "Mrs. Gayathri Kempurajan",
    "designation": "Assistant Professor (English)",
    "department": "Languages & Humanities",
    "deptFlow": "faculty_languages",
    "qualifications": "B.Com (TTM), M.A. English (Annamalai University), Ph.D. (MP University)",
    "experience": "17+ Years Teaching Experience in English Literature",
    "specialisation": "English Literature, Language Etiquette & Analytical Communication",
    "bio": "Mrs. Gayathri Kempurajan is a passionate educator with over 17 years of experience teaching English literature, focusing on language etiquette, analytical thinking, and kinesthetic learning.",
    "highlights": "Presented 'Technology, Arts and Aesthetics: A Literary and Social Transformation' at the International Conference on Literature & Linguistics (2024).",
    "committee": "English Language & Soft Skills Mentor",
    "email": "gayathrik.ssmrv@rvei.edu.in",
    "phone": "080 6824 0999",
    "url": "https://www.ssmrv.edu.in/academics/teaching_faculty/ms_gayathri_kempurajan/"
  },
  {
    "id": "ms-soujanya-d",
    "name": "Ms. Soujannya D.",
    "designation": "Assistant Professor (English)",
    "department": "Languages & Humanities",
    "deptFlow": "faculty_languages",
    "qualifications": "B.A. (English, Psychology, Sociology), M.A. (English)",
    "experience": "10+ Years Experience in English Literature & Soft Skills Development",
    "specialisation": "Humanities, English Literature, Poetry & Classical Music",
    "bio": "Ms. Soujannya D. is a dedicated educator with a decade of experience in English literature and soft skills development. She is also a trained Hindustani Classical singer and published poet.",
    "highlights": "External Cultural Committee SPOC; published poetry and international conference presentations in Literature & Aesthetics (2024).",
    "committee": "External Cultural Committee SPOC (Inter-Collegiate Events & Fests)",
    "email": "soujanyad.ssmrv@rvei.edu.in",
    "phone": "080 6824 0999",
    "url": "https://www.ssmrv.edu.in/academics/teaching_faculty/ms_soujanya_d/"
  },
  {
    "id": "ms-deepthi-raju",
    "name": "Ms. Deepthi Raju",
    "designation": "Assistant Professor (English)",
    "department": "Languages & Humanities",
    "deptFlow": "faculty_languages",
    "qualifications": "B.A. (NMKRV College for Women), M.A. English Literature (SDM PG Centre, Mangalore University), Ph.D. (Pursuing at GITAM University)",
    "experience": "4.7+ Years Teaching, Curriculum & Research Experience",
    "specialisation": "Gender Studies, Urban Studies, Graphic Narratives & Creative Writing",
    "bio": "Ms. Deepthi Raju is an Assistant Professor in the English department with over 4.7 years of teaching experience, committed to fostering critical thinking and dialogue through literature.",
    "highlights": "Presented papers at EFLU International Conference on Graphic Novels (Feb 2025) and Mt. Carmel Discourses '25.",
    "committee": "English Literary Club & Creative Writing Mentor",
    "email": "deepthiraju.ssmrv@rvei.edu.in",
    "phone": "080 6824 0999",
    "url": "https://www.ssmrv.edu.in/academics/teaching_faculty/ms_deepthi_raju/"
  },
  {
    "id": "kalaimathi-s",
    "name": "Ms. Kalaimathi S",
    "designation": "Assistant Professor (English)",
    "department": "Languages & Humanities",
    "deptFlow": "faculty_languages",
    "qualifications": "B.A. with C.A. English (Manonmaniam Sundaranar University), M.A. English (Madurai Kamaraj University), M.Phil. (MKU), PGCTE, UGC-NET Qualified",
    "experience": "4+ Years Teaching Experience | University Gold Medalist",
    "specialisation": "English Language Teaching (ELT) & AI in Language Pedagogy",
    "bio": "Ms. Kalaimathi S is an Assistant Professor of English, University Gold Medalist, proficiency prize winner, and UGC-NET qualifier holding an M.Phil., M.A., and PGCTE.",
    "highlights": "University Gold Medalist & NET Qualifier; delivered international conference talk on 'AI and I: English Learning through AI' (2024).",
    "committee": "English Language Lab & ELT Coordinator",
    "email": "kalaimathi.ssmrv@rvei.edu.in",
    "phone": "080 6824 0999",
    "url": "https://www.ssmrv.edu.in/academics/teaching_faculty/kalaimathi_s/"
  },
  {
    "id": "swathi-s-nair",
    "name": "Ms. Swathi S Nair",
    "designation": "Assistant Professor (English)",
    "department": "Languages & Humanities",
    "deptFlow": "faculty_languages",
    "qualifications": "B.A. English Literature & Communication Studies (St. Xavier's College, Ernakulam), M.A. English Literature (Kristu Jayanti College, Bengaluru), Ph.D. (Pursuing, Presidency University)",
    "experience": "Assistant Professor & Research Scholar in English Literature",
    "specialisation": "English Literature, Medical Humanities, Spatial Studies, Gender Studies & Trauma Literature",
    "bio": "Ms. Swathi S Nair is an Assistant Professor of English and Research Scholar at Presidency University focusing on Medical Humanities, Spatial Studies, and Gender & Trauma Literature.",
    "highlights": "Published in Journal of English Language and Literature (JOELL) and presented on Medical Humanities at Kristu Jayanti International Conference (2024).",
    "committee": "English Literary & Theatre Club Coordinator",
    "email": "swathisnair.ssmrv@rvei.edu.in",
    "phone": "080 6824 0999",
    "url": "https://www.ssmrv.edu.in/academics/teaching_faculty/swathi_s_nair/"
  },
  {
    "id": "mrs-teja-k-r",
    "name": "Mrs. Teja K.R.",
    "designation": "Junior Director of Physical Education",
    "department": "Physical Education & Sports",
    "deptFlow": "faculty_sports",
    "qualifications": "M.P.Ed (Master of Physical Education)",
    "experience": "Sports & Wellness Centre Leadership",
    "specialisation": "Athletics, Indoor & Outdoor Sports Coaching, Yoga & Student Wellness",
    "bio": "Mrs. Teja K.R. serves as the Junior Director of Physical Education at SSMRV College and leads the Sports and Wellness Centre, mentoring university teams across cricket, football, basketball, table tennis, yoga, and athletics.",
    "highlights": "College SPOC for the NAAC Sports Committee.",
    "committee": "College SPOC — Sports Committee & Sports Wellness Centre",
    "email": "office.ssmrv@rvei.edu.in",
    "phone": "080 6824 0999",
    "url": "https://www.ssmrv.edu.in/academics/teaching_faculty/"
  },
  {
    "id": "mr-m-m-bopanna",
    "name": "Mr. M.M. Bopanna",
    "designation": "Senior Executive – Physical Education",
    "department": "Physical Education & Sports",
    "deptFlow": "faculty_sports",
    "qualifications": "Physical Education & Sports Coaching Specialist",
    "experience": "Senior Physical Education & Campus Discipline Officer",
    "specialisation": "Team Sports Coaching, Tournament Management & Campus Discipline",
    "bio": "Mr. M.M. Bopanna serves as Senior Executive in Physical Education and is a core College SPOC on both the Anti-Ragging Cell and the Institutional Discipline Committee.",
    "highlights": "College SPOC — Anti-Ragging Cell & Institutional Discipline Committee.",
    "committee": "College SPOC — Anti-Ragging Cell & Discipline Committee | Sports Coaching",
    "email": "office.ssmrv@rvei.edu.in",
    "phone": "080 6824 0999",
    "url": "https://www.ssmrv.edu.in/academics/teaching_faculty/"
  },
  {
    "id": "chiranjivi-m-s",
    "name": "Mr. Chiranjivi M S",
    "designation": "Assistant Professor & Sports Coordinator",
    "department": "Physical Education & Sports",
    "deptFlow": "faculty_sports",
    "qualifications": "Postgraduate Faculty & Sports Convener",
    "experience": "Academic Faculty & College Sports Committee SPOC",
    "specialisation": "Sports Administration, Youth Athletics & Campus Discipline",
    "bio": "Mr. Chiranjivi M S serves as an Assistant Professor and is the College-Level SPOC for the Sports Committee and Institutional Discipline Committee.",
    "highlights": "College SPOC — Sports Committee & Discipline Committee.",
    "committee": "College SPOC — Sports Committee & Discipline Committee",
    "email": "chiranjivi.ssmrv@rvei.edu.in",
    "phone": "080 6824 0999",
    "url": "https://www.ssmrv.edu.in/academics/teaching_faculty/chiranjivi_m_s/"
  },
  {
    "id": "mrs-sumana-h-n",
    "name": "Mrs. Sumana H.N.",
    "designation": "Placement Officer",
    "department": "Training & Placement Cell (Paryapti)",
    "deptFlow": "faculty_placement",
    "qualifications": "Corporate Relations, HR & Campus Recruitment Specialist",
    "experience": "Head of Paryapti Training & Placement Cell",
    "specialisation": "Campus Placements (Highest 11 LPA CTC), Corporate Tie-ups & Pre-Placement Training",
    "bio": "Mrs. Sumana H.N. heads the Paryapti Training & Placement Cell at SSMRV College as Placement Officer and College SPOC for the Placement & Career Guidance Cell, driving 90%+ placement success across 100+ Tier-1 recruiters (Deloitte, Accenture, Infosys, KPMG, EY, Wipro, Target).",
    "highlights": "Facilitates 100+ corporate recruitment drives with packages up to 11 LPA (BBA) and 8 LPA (BCA/B.Com).",
    "committee": "College SPOC — Placement & Career Guidance Cell (Paryapti)",
    "email": "placement.ssmrv@rvei.edu.in",
    "phone": "96060 67551",
    "url": "https://www.ssmrv.edu.in/campus_life/placement/"
  },
  {
    "id": "mr-naresh-k-n",
    "name": "Mr. Naresh K.N.",
    "designation": "Assistant Manager – HR & Corporate Relations",
    "department": "Training & Placement Cell (Paryapti)",
    "deptFlow": "faculty_placement",
    "qualifications": "Human Resources & Corporate Relations Management",
    "experience": "HR & Placement Coordination, SSMRV College",
    "specialisation": "Employer Onboarding, Internship Drives & HR Operations",
    "bio": "Mr. Naresh K.N. serves as Assistant Manager – HR in the Paryapti Placement Cell and Administrative Office, coordinating corporate recruitment drives and HR operations.",
    "highlights": "Direct corporate liaison for campus internships and final placement drives.",
    "committee": "Assistant Manager – HR | Paryapti Placement Cell",
    "email": "placement.ssmrv@rvei.edu.in",
    "phone": "96060 67553",
    "url": "https://www.ssmrv.edu.in/campus_life/placement/"
  },
  {
    "id": "mrs-shylaja-t-m",
    "name": "Mrs. Shylaja T.M.",
    "designation": "Library Assistant & In-Charge",
    "department": "Library & Information Center",
    "deptFlow": "faculty_library",
    "qualifications": "M.Lib.I.Sc (Master of Library & Information Science)",
    "experience": "Head of Central Library & Digital Knowledge Hub",
    "specialisation": "Koha ILMS Automation, DELNET, INFLIBNET N-LIST & Digital Repositories",
    "bio": "Mrs. Shylaja T.M. leads the SSMRV Central Library (Knowledge Hub), managing over 40,000+ books, Koha automation, e-journals, DELNET, and NDLI digital repositories.",
    "highlights": "Oversees 40,000+ volumes and digital library subscriptions.",
    "committee": "Library In-Charge — Central Knowledge Hub",
    "email": "office.ssmrv@rvei.edu.in",
    "phone": "080 6824 0999",
    "url": "https://www.ssmrv.edu.in/academics/non_teaching_staff/"
  },
  {
    "id": "mr-guranna-sajjan",
    "name": "Mr. Guranna Sajjan",
    "designation": "Senior Executive – Library",
    "department": "Library & Information Center",
    "deptFlow": "faculty_library",
    "qualifications": "B.A., B.Lib (Bachelor of Library Science)",
    "experience": "Senior Library Operations & Circulation Executive",
    "specialisation": "Book Bank Circulation, Periodicals & Student Reference Services",
    "bio": "Mr. Guranna Sajjan serves as Senior Executive in the SSMRV Library, supporting student circulation, SC/ST Book Bank services, and reference cataloging.",
    "highlights": "Manages daily student book circulation and reference archives.",
    "committee": "Senior Executive — Library & Knowledge Hub",
    "email": "office.ssmrv@rvei.edu.in",
    "phone": "080 6824 0999",
    "url": "https://www.ssmrv.edu.in/academics/non_teaching_staff/"
  },
  {
    "id": "mrs-vani-m-u",
    "name": "Mrs. Vani M.U.",
    "designation": "Manager of Finance and Admin",
    "department": "Administration & Finance",
    "deptFlow": "faculty_admin",
    "qualifications": "Finance & Institutional Administration Specialist",
    "experience": "Head of Administrative & Financial Operations, SSMRV College",
    "specialisation": "Financial Planning, Institutional Administration & Statutory Compliance",
    "bio": "Mrs. Vani M.U. is the Manager of Finance and Administration at SSMRV College, overseeing campus administration, accounts, and office operations. She also represents the Administrative Office on the Internal Compliance (POSH) Committee.",
    "highlights": "Manager of Finance and Admin; Internal Compliance (POSH) Committee Member.",
    "committee": "Manager of Finance & Admin | Internal Compliance (POSH) Committee Member",
    "email": "office.ssmrv@rvei.edu.in",
    "phone": "080 6824 0999",
    "url": "https://www.ssmrv.edu.in/academics/non_teaching_staff/"
  },
  {
    "id": "ms-yeshwanthi-r",
    "name": "Ms. Yeshwanthi R.",
    "designation": "Assistant Manager – HR & Admin",
    "department": "Administration & Finance",
    "deptFlow": "faculty_admin",
    "qualifications": "HR & Administrative Management",
    "experience": "Assistant Manager – HR & Administration",
    "specialisation": "Human Resource Records, Faculty Onboarding & General Administration",
    "bio": "Ms. Yeshwanthi R. serves as Assistant Manager – HR & Admin in the SSMRV College Administrative Office.",
    "highlights": "Oversees HR records and institutional administration.",
    "committee": "Assistant Manager – HR & Admin",
    "email": "office.ssmrv@rvei.edu.in",
    "phone": "080 6824 0999",
    "url": "https://www.ssmrv.edu.in/academics/non_teaching_staff/"
  },
  {
    "id": "ms-jyothi-k-s",
    "name": "Ms. Jyothi K.S.",
    "designation": "Assistant Manager – Accounts",
    "department": "Administration & Finance",
    "deptFlow": "faculty_admin",
    "qualifications": "Accounts & Financial Administration",
    "experience": "Assistant Manager – Accounts Section",
    "specialisation": "Institutional Accounting, Fee Receipts & Scholarship Disbursements",
    "bio": "Ms. Jyothi K.S. serves as Assistant Manager – Accounts in the SSMRV Administrative Office.",
    "highlights": "Leads the Accounts section under Finance & Administration.",
    "committee": "Assistant Manager – Accounts",
    "email": "office.ssmrv@rvei.edu.in",
    "phone": "080 6824 0999",
    "url": "https://www.ssmrv.edu.in/academics/non_teaching_staff/"
  },
  {
    "id": "mrs-sunithamba-k",
    "name": "Mrs. Sunithamba K",
    "designation": "F.D.A. (First Division Assistant)",
    "department": "Administration & Finance",
    "deptFlow": "faculty_admin",
    "qualifications": "Administrative & Accounts Service",
    "experience": "First Division Assistant (FDA), SSMRV Office",
    "specialisation": "University Correspondence, Official Records & Accounts",
    "bio": "Mrs. Sunithamba K serves as First Division Assistant (F.D.A.) in the SSMRV College Administrative Office.",
    "highlights": "Senior administrative record management and university correspondence.",
    "committee": "First Division Assistant (F.D.A.)",
    "email": "office.ssmrv@rvei.edu.in",
    "phone": "080 6824 0999",
    "url": "https://www.ssmrv.edu.in/academics/non_teaching_staff/"
  },
  {
    "id": "mr-hanumantha-reddy-b",
    "name": "Mr. Hanumantha Reddy B",
    "designation": "IT Executive",
    "department": "Administration & Finance",
    "deptFlow": "faculty_admin",
    "qualifications": "IT Systems & Network Administration",
    "experience": "Campus IT Infrastructure Lead",
    "specialisation": "Computer Labs, 1 Gbps Campus Network, ERP & Server Maintenance",
    "bio": "Mr. Hanumantha Reddy B serves as IT Executive at SSMRV College, managing computer labs, campus Wi-Fi networks, and digital classroom infrastructure.",
    "highlights": "Manages high-tech BCA & commerce computing labs and campus network.",
    "committee": "IT Executive — Systems & Network Infrastructure",
    "email": "office.ssmrv@rvei.edu.in",
    "phone": "080 6824 0999",
    "url": "https://www.ssmrv.edu.in/academics/non_teaching_staff/"
  },
  {
    "id": "mr-raviraj-p",
    "name": "Mr. Raviraj P",
    "designation": "Jr. Executive IT",
    "department": "Administration & Finance",
    "deptFlow": "faculty_admin",
    "qualifications": "IT Support & Hardware Maintenance",
    "experience": "Junior Executive – IT Support",
    "specialisation": "Lab Systems Maintenance, AV Setup & Technical Support",
    "bio": "Mr. Raviraj P serves as Junior Executive IT at SSMRV College, supporting computer laboratories and smart classroom systems.",
    "highlights": "Technical support for computing labs and seminar halls.",
    "committee": "Jr. Executive — IT Support",
    "email": "office.ssmrv@rvei.edu.in",
    "phone": "080 6824 0999",
    "url": "https://www.ssmrv.edu.in/academics/non_teaching_staff/"
  },
  {
    "id": "mrs-shashikala-g-t",
    "name": "Mrs. Shashikala G.T.",
    "designation": "Sr. Executive – Administration",
    "department": "Administration & Finance",
    "deptFlow": "faculty_admin",
    "qualifications": "Academic & Administrative Operations",
    "experience": "Senior Executive, SSMRV Administrative Office",
    "specialisation": "Bengaluru City University (BCU) Academic Section & Student Approvals",
    "bio": "Mrs. Shashikala G.T. serves as Senior Executive in the SSMRV College Administrative Office, handling university affiliation and student academic records.",
    "highlights": "Senior Executive in Administration.",
    "committee": "Sr. Executive — Administration",
    "email": "office.ssmrv@rvei.edu.in",
    "phone": "080 6824 0999",
    "url": "https://www.ssmrv.edu.in/academics/non_teaching_staff/"
  },
  {
    "id": "mr-dileepa-kumara-h-m",
    "name": "Mr. Dileepa Kumara H.M.",
    "designation": "Sr. Executive – Administration",
    "department": "Administration & Finance",
    "deptFlow": "faculty_admin",
    "qualifications": "Student Services & Administrative Operations",
    "experience": "Senior Executive, SSMRV Administrative Office",
    "specialisation": "Student Certificates, Bus/Metro Concessions, Scholarships & Examination Support",
    "bio": "Mr. Dileepa Kumara H.M. serves as Senior Executive in the SSMRV College Administrative Office supporting student services and documentation.",
    "highlights": "Senior Executive for student services and certificates.",
    "committee": "Sr. Executive — Administration",
    "email": "office.ssmrv@rvei.edu.in",
    "phone": "080 6824 0999",
    "url": "https://www.ssmrv.edu.in/academics/non_teaching_staff/"
  },
  {
    "id": "mrs-nethravathi-b-v",
    "name": "Mrs. Nethravathi B.V.",
    "designation": "Sr. Executive – Administration",
    "department": "Administration & Finance",
    "deptFlow": "faculty_admin",
    "qualifications": "Office Administration & Records",
    "experience": "Senior Executive, SSMRV Administrative Office",
    "specialisation": "Admissions Verification, University Liaison & Student Records",
    "bio": "Mrs. Nethravathi B.V. serves as Senior Executive in the SSMRV College Administrative Office.",
    "highlights": "Senior Executive in Administration.",
    "committee": "Sr. Executive — Administration",
    "email": "office.ssmrv@rvei.edu.in",
    "phone": "080 6824 0999",
    "url": "https://www.ssmrv.edu.in/academics/non_teaching_staff/"
  },
  {
    "id": "mrs-jayashree",
    "name": "Mrs. Jayashree",
    "designation": "Sr. Executive – Accounts",
    "department": "Administration & Finance",
    "deptFlow": "faculty_admin",
    "qualifications": "Accounting & Financial Operations",
    "experience": "Senior Executive – Accounts, SSMRV Office",
    "specialisation": "Accounts Management & Financial Records",
    "bio": "Mrs. Jayashree serves as Senior Executive – Accounts in the SSMRV College Administrative Office.",
    "highlights": "Senior Executive in the Accounts Department.",
    "committee": "Sr. Executive — Accounts",
    "email": "office.ssmrv@rvei.edu.in",
    "phone": "080 6824 0999",
    "url": "https://www.ssmrv.edu.in/academics/non_teaching_staff/"
  },
  {
    "id": "mrs-latha-k-m",
    "name": "Mrs. Latha K.M.",
    "designation": "Accounts Executive",
    "department": "Administration & Finance",
    "deptFlow": "faculty_admin",
    "qualifications": "Accounts & Office Administration",
    "experience": "Accounts Executive, SSMRV Office",
    "specialisation": "Student Fee Desk & Accounts Support",
    "bio": "Mrs. Latha K.M. serves as Accounts Executive in the SSMRV College Administrative Office.",
    "highlights": "Accounts Executive supporting student fee and billing inquiries.",
    "committee": "Accounts Executive",
    "email": "office.ssmrv@rvei.edu.in",
    "phone": "080 6824 0999",
    "url": "https://www.ssmrv.edu.in/academics/non_teaching_staff/"
  },
  {
    "id": "mr-roopesh-r-k",
    "name": "Mr. Roopesh R.K.",
    "designation": "Admin Executive",
    "department": "Administration & Finance",
    "deptFlow": "faculty_admin",
    "qualifications": "Campus Operations & Administration",
    "experience": "Admin Executive, SSMRV Office",
    "specialisation": "Campus Facilities, Event Logistics & Office Operations",
    "bio": "Mr. Roopesh R.K. serves as Admin Executive in the SSMRV College Administrative Office.",
    "highlights": "Coordinates administrative operations and campus logistics.",
    "committee": "Admin Executive",
    "email": "office.ssmrv@rvei.edu.in",
    "phone": "080 6824 0999",
    "url": "https://www.ssmrv.edu.in/academics/non_teaching_staff/"
  },
  {
    "id": "mrs-nethravathi-m",
    "name": "Mrs. Nethravathi M",
    "designation": "Admin Executive",
    "department": "Administration & Finance",
    "deptFlow": "faculty_admin",
    "qualifications": "Administrative Support & Documentation",
    "experience": "Admin Executive, SSMRV Office",
    "specialisation": "Reception, Student Inquiries & Documentation",
    "bio": "Mrs. Nethravathi M serves as Admin Executive in the SSMRV College Administrative Office.",
    "highlights": "Supports student documentation and front-office operations.",
    "committee": "Admin Executive",
    "email": "office.ssmrv@rvei.edu.in",
    "phone": "080 6824 0999",
    "url": "https://www.ssmrv.edu.in/academics/non_teaching_staff/"
  },
  {
    "id": "sri-chandrashekar-m",
    "name": "Sri. Chandrashekar M",
    "designation": "Attender (Group D Support Staff)",
    "department": "Administration & Finance",
    "deptFlow": "faculty_admin",
    "qualifications": "Campus Support Services",
    "experience": "Group D Support Staff, SSMRV College",
    "specialisation": "Department & Classroom Support",
    "bio": "Sri. Chandrashekar M is a dedicated member of the Group D Support Staff at SSMRV College.",
    "highlights": "Campus & departmental support services.",
    "committee": "Group D Support Staff",
    "email": "office.ssmrv@rvei.edu.in",
    "phone": "080 6824 0999",
    "url": "https://www.ssmrv.edu.in/academics/non_teaching_staff/"
  },
  {
    "id": "sri-dasegowda-s-t",
    "name": "Sri. Dasegowda S.T.",
    "designation": "Attender (Group D Support Staff)",
    "department": "Administration & Finance",
    "deptFlow": "faculty_admin",
    "qualifications": "Campus Support Services",
    "experience": "Group D Support Staff, SSMRV College",
    "specialisation": "Department & Office Support",
    "bio": "Sri. Dasegowda S.T. is a dedicated member of the Group D Support Staff at SSMRV College.",
    "highlights": "Campus & departmental support services.",
    "committee": "Group D Support Staff",
    "email": "office.ssmrv@rvei.edu.in",
    "phone": "080 6824 0999",
    "url": "https://www.ssmrv.edu.in/academics/non_teaching_staff/"
  },
  {
    "id": "smt-nandini-h-k",
    "name": "Smt. Nandini H.K.",
    "designation": "Attender (Group D Support Staff)",
    "department": "Administration & Finance",
    "deptFlow": "faculty_admin",
    "qualifications": "Campus Support Services",
    "experience": "Group D Support Staff, SSMRV College",
    "specialisation": "Department & Office Support",
    "bio": "Smt. Nandini H.K. is a dedicated member of the Group D Support Staff at SSMRV College.",
    "highlights": "Campus & departmental support services.",
    "committee": "Group D Support Staff",
    "email": "office.ssmrv@rvei.edu.in",
    "phone": "080 6824 0999",
    "url": "https://www.ssmrv.edu.in/academics/non_teaching_staff/"
  },
  {
    "id": "mr-subhash",
    "name": "Mr. Subhash",
    "designation": "Attender (Group D Support Staff)",
    "department": "Administration & Finance",
    "deptFlow": "faculty_admin",
    "qualifications": "Campus Support Services",
    "experience": "Group D Support Staff, SSMRV College",
    "specialisation": "Department & Office Support",
    "bio": "Mr. Subhash is a dedicated member of the Group D Support Staff at SSMRV College.",
    "highlights": "Campus & departmental support services.",
    "committee": "Group D Support Staff",
    "email": "office.ssmrv@rvei.edu.in",
    "phone": "080 6824 0999",
    "url": "https://www.ssmrv.edu.in/academics/non_teaching_staff/"
  },
  {
    "id": "ms-uma",
    "name": "Ms. Uma",
    "designation": "Attender (Group D Support Staff)",
    "department": "Administration & Finance",
    "deptFlow": "faculty_admin",
    "qualifications": "Campus Support Services",
    "experience": "Group D Support Staff, SSMRV College",
    "specialisation": "Department & Office Support",
    "bio": "Ms. Uma is a dedicated member of the Group D Support Staff at SSMRV College.",
    "highlights": "Campus & departmental support services.",
    "committee": "Group D Support Staff",
    "email": "office.ssmrv@rvei.edu.in",
    "phone": "080 6824 0999",
    "url": "https://www.ssmrv.edu.in/academics/non_teaching_staff/"
  },
  {
    "id": "mr-mahadev-prasad",
    "name": "Mr. Mahadev Prasad",
    "designation": "Attender (Group D Support Staff)",
    "department": "Administration & Finance",
    "deptFlow": "faculty_admin",
    "qualifications": "Campus Support Services",
    "experience": "Group D Support Staff, SSMRV College",
    "specialisation": "Department & Office Support",
    "bio": "Mr. Mahadev Prasad is a dedicated member of the Group D Support Staff at SSMRV College.",
    "highlights": "Campus & departmental support services.",
    "committee": "Group D Support Staff",
    "email": "office.ssmrv@rvei.edu.in",
    "phone": "080 6824 0999",
    "url": "https://www.ssmrv.edu.in/academics/non_teaching_staff/"
  }
];

const SSMRV_ALL_PAGES = [
  {
    "url": "https://www.ssmrv.edu.in/about_us/",
    "display": "ssmrv.edu.in/about_us",
    "title": "About Us",
    "category": "About & Governance",
    "slug": "about_us"
  },
  {
    "url": "https://www.ssmrv.edu.in/about_us/about_college/",
    "display": "ssmrv.edu.in/about_us/about_college",
    "title": "About SSMRV College \u2013 Best Degree College in Bangalore",
    "category": "About & Governance",
    "slug": "about_us_about_college"
  },
  {
    "url": "https://www.ssmrv.edu.in/about_us/achievements_affiliations/",
    "display": "ssmrv.edu.in/about_us/achievements_affiliations",
    "title": "Achievements and Affiliations",
    "category": "About & Governance",
    "slug": "about_us_achievements_affiliations"
  },
  {
    "url": "https://www.ssmrv.edu.in/about_us/board_of_management/",
    "display": "ssmrv.edu.in/about_us/board_of_management",
    "title": "Board of Management",
    "category": "About & Governance",
    "slug": "about_us_board_of_management"
  },
  {
    "url": "https://www.ssmrv.edu.in/about_us/mandatory_disclosure/",
    "display": "ssmrv.edu.in/about_us/mandatory_disclosure",
    "title": "Mandatory disclosure",
    "category": "About & Governance",
    "slug": "about_us_mandatory_disclosure"
  },
  {
    "url": "https://www.ssmrv.edu.in/academics/",
    "display": "ssmrv.edu.in/academics",
    "title": "Academics",
    "category": "General",
    "slug": "academics"
  },
  {
    "url": "https://www.ssmrv.edu.in/academics/non_teaching_staff/",
    "display": "ssmrv.edu.in/academics/non_teaching_staff",
    "title": "Non-Teaching Staff",
    "category": "General",
    "slug": "academics_non_teaching_staff"
  },
  {
    "url": "https://www.ssmrv.edu.in/academics/programmes/",
    "display": "ssmrv.edu.in/academics/programmes",
    "title": "SSMRV Degree College Bangalore \u2013 Academic Programs Overview",
    "category": "Academic Programmes",
    "slug": "academics_programmes"
  },
  {
    "url": "https://www.ssmrv.edu.in/academics/programmes/bachelor_of_commerce/",
    "display": "ssmrv.edu.in/academics/programmes/bachelor_of_commerce",
    "title": "B.Com Admissions 2025, Jayanagar, Bangalore",
    "category": "Academic Programmes",
    "slug": "academics_programmes_bachelor_of_commerce"
  },
  {
    "url": "https://www.ssmrv.edu.in/academics/programmes/bachelors_of_business_administration/",
    "display": "ssmrv.edu.in/academics/programmes/bachelors_of_business_administration",
    "title": "BBA with Global Exposure & Specialisations, Jayanagar",
    "category": "Academic Programmes",
    "slug": "academics_programmes_bachelors_of_business_administration"
  },
  {
    "url": "https://www.ssmrv.edu.in/academics/programmes/bachelors_of_computer_application/",
    "display": "ssmrv.edu.in/academics/programmes/bachelors_of_computer_application",
    "title": "BCA with Specialisations & Internships, Jayanagar",
    "category": "Academic Programmes",
    "slug": "academics_programmes_bachelors_of_computer_application"
  },
  {
    "url": "https://www.ssmrv.edu.in/academics/programmes/bba-_aviation_management/",
    "display": "ssmrv.edu.in/academics/programmes/bba-_aviation_management",
    "title": "BBA Aviation with Internships & Training, Jayanagar",
    "category": "Academic Programmes",
    "slug": "academics_programmes_bba-_aviation_management"
  },
  {
    "url": "https://www.ssmrv.edu.in/academics/programmes/master_of_commerce/",
    "display": "ssmrv.edu.in/academics/programmes/master_of_commerce",
    "title": "Top M.Com College in Bangalore \u2013 SSMRV Jayanagar Admissions 2025",
    "category": "Academic Programmes",
    "slug": "academics_programmes_master_of_commerce"
  },
  {
    "url": "https://www.ssmrv.edu.in/academics/teaching_faculty/",
    "display": "ssmrv.edu.in/academics/teaching_faculty",
    "title": "Teaching Faculty",
    "category": "Faculty",
    "slug": "academics_teaching_faculty"
  },
  {
    "url": "https://www.ssmrv.edu.in/academics/teaching_faculty/avinash-k-v/",
    "display": "ssmrv.edu.in/academics/teaching_faculty/avinash-k-v",
    "title": "Avinash K V",
    "category": "Faculty",
    "slug": "academics_teaching_faculty_avinash-k-v"
  },
  {
    "url": "https://www.ssmrv.edu.in/academics/teaching_faculty/avinash_k_v/",
    "display": "ssmrv.edu.in/academics/teaching_faculty/avinash_k_v",
    "title": "Avinash K V",
    "category": "Faculty",
    "slug": "academics_teaching_faculty_avinash_k_v"
  },
  {
    "url": "https://www.ssmrv.edu.in/academics/teaching_faculty/chiranjivi_m_s/",
    "display": "ssmrv.edu.in/academics/teaching_faculty/chiranjivi_m_s",
    "title": "Chiranjivi M S",
    "category": "Faculty",
    "slug": "academics_teaching_faculty_chiranjivi_m_s"
  },
  {
    "url": "https://www.ssmrv.edu.in/academics/teaching_faculty/dr-vijayashree-l/",
    "display": "ssmrv.edu.in/academics/teaching_faculty/dr-vijayashree-l",
    "title": "Dr. Vijayashree L.",
    "category": "Faculty",
    "slug": "academics_teaching_faculty_dr-vijayashree-l"
  },
  {
    "url": "https://www.ssmrv.edu.in/academics/teaching_faculty/dr_d_kannan/",
    "display": "ssmrv.edu.in/academics/teaching_faculty/dr_d_kannan",
    "title": "Dr. D. Kannan",
    "category": "Faculty",
    "slug": "academics_teaching_faculty_dr_d_kannan"
  },
  {
    "url": "https://www.ssmrv.edu.in/academics/teaching_faculty/dr_jyothi_n_hosurkar/",
    "display": "ssmrv.edu.in/academics/teaching_faculty/dr_jyothi_n_hosurkar",
    "title": "Dr. Jyothi N. Hosurkar",
    "category": "Faculty",
    "slug": "academics_teaching_faculty_dr_jyothi_n_hosurkar"
  },
  {
    "url": "https://www.ssmrv.edu.in/academics/teaching_faculty/dr_kanchan_g_rajput/",
    "display": "ssmrv.edu.in/academics/teaching_faculty/dr_kanchan_g_rajput",
    "title": "Dr. Kanchan G. Rajput",
    "category": "Faculty",
    "slug": "academics_teaching_faculty_dr_kanchan_g_rajput"
  },
  {
    "url": "https://www.ssmrv.edu.in/academics/teaching_faculty/dr_lalitha_b_s/",
    "display": "ssmrv.edu.in/academics/teaching_faculty/dr_lalitha_b_s",
    "title": "Dr. Lalitha B.S.",
    "category": "Faculty",
    "slug": "academics_teaching_faculty_dr_lalitha_b_s"
  },
  {
    "url": "https://www.ssmrv.edu.in/academics/teaching_faculty/dr_lavanya_balaji/",
    "display": "ssmrv.edu.in/academics/teaching_faculty/dr_lavanya_balaji",
    "title": "Dr. Lavanya Balaji",
    "category": "Faculty",
    "slug": "academics_teaching_faculty_dr_lavanya_balaji"
  },
  {
    "url": "https://www.ssmrv.edu.in/academics/teaching_faculty/dr_malini_n/",
    "display": "ssmrv.edu.in/academics/teaching_faculty/dr_malini_n",
    "title": "Dr. Malini N.",
    "category": "Faculty",
    "slug": "academics_teaching_faculty_dr_malini_n"
  },
  {
    "url": "https://www.ssmrv.edu.in/academics/teaching_faculty/dr_prathima_vijay/",
    "display": "ssmrv.edu.in/academics/teaching_faculty/dr_prathima_vijay",
    "title": "Dr. Prathima Vijay",
    "category": "Faculty",
    "slug": "academics_teaching_faculty_dr_prathima_vijay"
  },
  {
    "url": "https://www.ssmrv.edu.in/academics/teaching_faculty/dr_r_sheela_chandrashekar/",
    "display": "ssmrv.edu.in/academics/teaching_faculty/dr_r_sheela_chandrashekar",
    "title": "Dr. R. Sheela Chandrashekar",
    "category": "Faculty",
    "slug": "academics_teaching_faculty_dr_r_sheela_chandrashekar"
  },
  {
    "url": "https://www.ssmrv.edu.in/academics/teaching_faculty/dr_rajini_k_s/",
    "display": "ssmrv.edu.in/academics/teaching_faculty/dr_rajini_k_s",
    "title": "Dr. Rajini K.S.",
    "category": "Faculty",
    "slug": "academics_teaching_faculty_dr_rajini_k_s"
  },
  {
    "url": "https://www.ssmrv.edu.in/academics/teaching_faculty/dr_revathy_shivashankaran/",
    "display": "ssmrv.edu.in/academics/teaching_faculty/dr_revathy_shivashankaran",
    "title": "Dr. Revathy Shivashankaran",
    "category": "Faculty",
    "slug": "academics_teaching_faculty_dr_revathy_shivashankaran"
  },
  {
    "url": "https://www.ssmrv.edu.in/academics/teaching_faculty/dr_s_chethana/",
    "display": "ssmrv.edu.in/academics/teaching_faculty/dr_s_chethana",
    "title": "Dr. S. Chethana",
    "category": "Faculty",
    "slug": "academics_teaching_faculty_dr_s_chethana"
  },
  {
    "url": "https://www.ssmrv.edu.in/academics/teaching_faculty/dr_shashikala_c_s/",
    "display": "ssmrv.edu.in/academics/teaching_faculty/dr_shashikala_c_s",
    "title": "Dr. Shashikala C.S.",
    "category": "Faculty",
    "slug": "academics_teaching_faculty_dr_shashikala_c_s"
  },
  {
    "url": "https://www.ssmrv.edu.in/academics/teaching_faculty/dr_shruti_khemashetty/",
    "display": "ssmrv.edu.in/academics/teaching_faculty/dr_shruti_khemashetty",
    "title": "Dr. Shruti Khemashetty",
    "category": "Faculty",
    "slug": "academics_teaching_faculty_dr_shruti_khemashetty"
  },
  {
    "url": "https://www.ssmrv.edu.in/academics/teaching_faculty/dr_suma_sannamani/",
    "display": "ssmrv.edu.in/academics/teaching_faculty/dr_suma_sannamani",
    "title": "Dr. Suma Sannamani",
    "category": "Faculty",
    "slug": "academics_teaching_faculty_dr_suma_sannamani"
  },
  {
    "url": "https://www.ssmrv.edu.in/academics/teaching_faculty/dr_sushma_c/",
    "display": "ssmrv.edu.in/academics/teaching_faculty/dr_sushma_c",
    "title": "Dr. Sushma C.",
    "category": "Faculty",
    "slug": "academics_teaching_faculty_dr_sushma_c"
  },
  {
    "url": "https://www.ssmrv.edu.in/academics/teaching_faculty/dr_v_sudha/",
    "display": "ssmrv.edu.in/academics/teaching_faculty/dr_v_sudha",
    "title": "Dr. V. Sudha",
    "category": "Faculty",
    "slug": "academics_teaching_faculty_dr_v_sudha"
  },
  {
    "url": "https://www.ssmrv.edu.in/academics/teaching_faculty/dr_vinaya_t/",
    "display": "ssmrv.edu.in/academics/teaching_faculty/dr_vinaya_t",
    "title": "Dr. Vinaya T.",
    "category": "Faculty",
    "slug": "academics_teaching_faculty_dr_vinaya_t"
  },
  {
    "url": "https://www.ssmrv.edu.in/academics/teaching_faculty/kalaimathi_s/",
    "display": "ssmrv.edu.in/academics/teaching_faculty/kalaimathi_s",
    "title": "Kalaimathi S",
    "category": "Faculty",
    "slug": "academics_teaching_faculty_kalaimathi_s"
  },
  {
    "url": "https://www.ssmrv.edu.in/academics/teaching_faculty/kavitha_h_s/",
    "display": "ssmrv.edu.in/academics/teaching_faculty/kavitha_h_s",
    "title": "Kavitha H S",
    "category": "Faculty",
    "slug": "academics_teaching_faculty_kavitha_h_s"
  },
  {
    "url": "https://www.ssmrv.edu.in/academics/teaching_faculty/malini-n/",
    "display": "ssmrv.edu.in/academics/teaching_faculty/malini-n",
    "title": "Malini N.",
    "category": "Faculty",
    "slug": "academics_teaching_faculty_malini-n"
  },
  {
    "url": "https://www.ssmrv.edu.in/academics/teaching_faculty/mr_akshay_kumar_a_v/",
    "display": "ssmrv.edu.in/academics/teaching_faculty/mr_akshay_kumar_a_v",
    "title": "Mr. Akshay Kumar A.V.",
    "category": "Faculty",
    "slug": "academics_teaching_faculty_mr_akshay_kumar_a_v"
  },
  {
    "url": "https://www.ssmrv.edu.in/academics/teaching_faculty/mr_arunkumar_r/",
    "display": "ssmrv.edu.in/academics/teaching_faculty/mr_arunkumar_r",
    "title": "Mr. Arunkumar R.",
    "category": "Faculty",
    "slug": "academics_teaching_faculty_mr_arunkumar_r"
  },
  {
    "url": "https://www.ssmrv.edu.in/academics/teaching_faculty/mr_getendra_kumar_m/",
    "display": "ssmrv.edu.in/academics/teaching_faculty/mr_getendra_kumar_m",
    "title": "Mr. Getendra Kumar M.",
    "category": "Faculty",
    "slug": "academics_teaching_faculty_mr_getendra_kumar_m"
  },
  {
    "url": "https://www.ssmrv.edu.in/academics/teaching_faculty/mr_gokul_c/",
    "display": "ssmrv.edu.in/academics/teaching_faculty/mr_gokul_c",
    "title": "Mr. Gokul C.",
    "category": "Faculty",
    "slug": "academics_teaching_faculty_mr_gokul_c"
  },
  {
    "url": "https://www.ssmrv.edu.in/academics/teaching_faculty/mr_jagadish_a/",
    "display": "ssmrv.edu.in/academics/teaching_faculty/mr_jagadish_a",
    "title": "Mr. Jagadish A.",
    "category": "Faculty",
    "slug": "academics_teaching_faculty_mr_jagadish_a"
  },
  {
    "url": "https://www.ssmrv.edu.in/academics/teaching_faculty/mr_santosh_d_bendigeri/",
    "display": "ssmrv.edu.in/academics/teaching_faculty/mr_santosh_d_bendigeri",
    "title": "Mr. Santosh D Bendigeri",
    "category": "Faculty",
    "slug": "academics_teaching_faculty_mr_santosh_d_bendigeri"
  },
  {
    "url": "https://www.ssmrv.edu.in/academics/teaching_faculty/mr_shivakumara_n/",
    "display": "ssmrv.edu.in/academics/teaching_faculty/mr_shivakumara_n",
    "title": "Mr. Shivakumara N.",
    "category": "Faculty",
    "slug": "academics_teaching_faculty_mr_shivakumara_n"
  },
  {
    "url": "https://www.ssmrv.edu.in/academics/teaching_faculty/mr_yallappa_m/",
    "display": "ssmrv.edu.in/academics/teaching_faculty/mr_yallappa_m",
    "title": "Mr. Yallappa M.",
    "category": "Faculty",
    "slug": "academics_teaching_faculty_mr_yallappa_m"
  },
  {
    "url": "https://www.ssmrv.edu.in/academics/teaching_faculty/mrs_lavanya_b_k/",
    "display": "ssmrv.edu.in/academics/teaching_faculty/mrs_lavanya_b_k",
    "title": "Mrs. Lavanya B.K.",
    "category": "Faculty",
    "slug": "academics_teaching_faculty_mrs_lavanya_b_k"
  },
  {
    "url": "https://www.ssmrv.edu.in/academics/teaching_faculty/mrs_malasa_m_r/",
    "display": "ssmrv.edu.in/academics/teaching_faculty/mrs_malasa_m_r",
    "title": "Mrs. Malasa M.R.",
    "category": "Faculty",
    "slug": "academics_teaching_faculty_mrs_malasa_m_r"
  },
  {
    "url": "https://www.ssmrv.edu.in/academics/teaching_faculty/mrs_pavana_r_kulkarni/",
    "display": "ssmrv.edu.in/academics/teaching_faculty/mrs_pavana_r_kulkarni",
    "title": "Mrs. Pavana R. Kulkarni",
    "category": "Faculty",
    "slug": "academics_teaching_faculty_mrs_pavana_r_kulkarni"
  },
  {
    "url": "https://www.ssmrv.edu.in/academics/teaching_faculty/mrs_preethi_dwarakanath/",
    "display": "ssmrv.edu.in/academics/teaching_faculty/mrs_preethi_dwarakanath",
    "title": "Mrs. Preethi Dwarakanath",
    "category": "Faculty",
    "slug": "academics_teaching_faculty_mrs_preethi_dwarakanath"
  },
  {
    "url": "https://www.ssmrv.edu.in/academics/teaching_faculty/mrs_puja_biswas/",
    "display": "ssmrv.edu.in/academics/teaching_faculty/mrs_puja_biswas",
    "title": "Mrs. Puja Biswas",
    "category": "Faculty",
    "slug": "academics_teaching_faculty_mrs_puja_biswas"
  },
  {
    "url": "https://www.ssmrv.edu.in/academics/teaching_faculty/mrs_vidya_u_jambagi/",
    "display": "ssmrv.edu.in/academics/teaching_faculty/mrs_vidya_u_jambagi",
    "title": "Mrs. Vidya U. Jambagi",
    "category": "Faculty",
    "slug": "academics_teaching_faculty_mrs_vidya_u_jambagi"
  },
  {
    "url": "https://www.ssmrv.edu.in/academics/teaching_faculty/ms_bharathi_n_s/",
    "display": "ssmrv.edu.in/academics/teaching_faculty/ms_bharathi_n_s",
    "title": "Ms. Bharathi N.S.",
    "category": "Faculty",
    "slug": "academics_teaching_faculty_ms_bharathi_n_s"
  },
  {
    "url": "https://www.ssmrv.edu.in/academics/teaching_faculty/ms_bhargavi_iyer_b_s/",
    "display": "ssmrv.edu.in/academics/teaching_faculty/ms_bhargavi_iyer_b_s",
    "title": "Ms. Bhargavi Iyer B.S.",
    "category": "Faculty",
    "slug": "academics_teaching_faculty_ms_bhargavi_iyer_b_s"
  },
  {
    "url": "https://www.ssmrv.edu.in/academics/teaching_faculty/ms_deepika_l/",
    "display": "ssmrv.edu.in/academics/teaching_faculty/ms_deepika_l",
    "title": "Ms. Deepika L.",
    "category": "Faculty",
    "slug": "academics_teaching_faculty_ms_deepika_l"
  },
  {
    "url": "https://www.ssmrv.edu.in/academics/teaching_faculty/ms_deepthi_raju/",
    "display": "ssmrv.edu.in/academics/teaching_faculty/ms_deepthi_raju",
    "title": "Ms. Deepthi Raju",
    "category": "Faculty",
    "slug": "academics_teaching_faculty_ms_deepthi_raju"
  },
  {
    "url": "https://www.ssmrv.edu.in/academics/teaching_faculty/ms_gayathri_kempurajan/",
    "display": "ssmrv.edu.in/academics/teaching_faculty/ms_gayathri_kempurajan",
    "title": "Ms. Gayathri Kempurajan",
    "category": "Faculty",
    "slug": "academics_teaching_faculty_ms_gayathri_kempurajan"
  },
  {
    "url": "https://www.ssmrv.edu.in/academics/teaching_faculty/ms_jahanavi_rao_a_v/",
    "display": "ssmrv.edu.in/academics/teaching_faculty/ms_jahanavi_rao_a_v",
    "title": "Ms. Jahanavi Rao A.V.",
    "category": "Faculty",
    "slug": "academics_teaching_faculty_ms_jahanavi_rao_a_v"
  },
  {
    "url": "https://www.ssmrv.edu.in/academics/teaching_faculty/ms_m_rajatha/",
    "display": "ssmrv.edu.in/academics/teaching_faculty/ms_m_rajatha",
    "title": "Ms. M. Rajatha",
    "category": "Faculty",
    "slug": "academics_teaching_faculty_ms_m_rajatha"
  },
  {
    "url": "https://www.ssmrv.edu.in/academics/teaching_faculty/ms_m_roopa_latha/",
    "display": "ssmrv.edu.in/academics/teaching_faculty/ms_m_roopa_latha",
    "title": "Ms. M. Roopa Latha",
    "category": "Faculty",
    "slug": "academics_teaching_faculty_ms_m_roopa_latha"
  },
  {
    "url": "https://www.ssmrv.edu.in/academics/teaching_faculty/ms_mokshamala_u/",
    "display": "ssmrv.edu.in/academics/teaching_faculty/ms_mokshamala_u",
    "title": "Ms. Mokshamala U.",
    "category": "Faculty",
    "slug": "academics_teaching_faculty_ms_mokshamala_u"
  },
  {
    "url": "https://www.ssmrv.edu.in/academics/teaching_faculty/ms_neha_banu/",
    "display": "ssmrv.edu.in/academics/teaching_faculty/ms_neha_banu",
    "title": "Ms. Neha Banu",
    "category": "Faculty",
    "slug": "academics_teaching_faculty_ms_neha_banu"
  },
  {
    "url": "https://www.ssmrv.edu.in/academics/teaching_faculty/ms_r_shanthi_krishna/",
    "display": "ssmrv.edu.in/academics/teaching_faculty/ms_r_shanthi_krishna",
    "title": "Ms. R. Shanthi Krishna",
    "category": "Faculty",
    "slug": "academics_teaching_faculty_ms_r_shanthi_krishna"
  },
  {
    "url": "https://www.ssmrv.edu.in/academics/teaching_faculty/ms_shakeela_m_k/",
    "display": "ssmrv.edu.in/academics/teaching_faculty/ms_shakeela_m_k",
    "title": "Ms. Shakeela M.K.",
    "category": "Faculty",
    "slug": "academics_teaching_faculty_ms_shakeela_m_k"
  },
  {
    "url": "https://www.ssmrv.edu.in/academics/teaching_faculty/ms_soujanya_d/",
    "display": "ssmrv.edu.in/academics/teaching_faculty/ms_soujanya_d",
    "title": "Ms. Soujanya D.",
    "category": "Faculty",
    "slug": "academics_teaching_faculty_ms_soujanya_d"
  },
  {
    "url": "https://www.ssmrv.edu.in/academics/teaching_faculty/ms_vasugi_mudaliar_r_k/",
    "display": "ssmrv.edu.in/academics/teaching_faculty/ms_vasugi_mudaliar_r_k",
    "title": "Ms. Vasugi Mudaliar R.K.",
    "category": "Faculty",
    "slug": "academics_teaching_faculty_ms_vasugi_mudaliar_r_k"
  },
  {
    "url": "https://www.ssmrv.edu.in/academics/teaching_faculty/nandini_j/",
    "display": "ssmrv.edu.in/academics/teaching_faculty/nandini_j",
    "title": "Nandini J",
    "category": "Faculty",
    "slug": "academics_teaching_faculty_nandini_j"
  },
  {
    "url": "https://www.ssmrv.edu.in/academics/teaching_faculty/prakasha_v/",
    "display": "ssmrv.edu.in/academics/teaching_faculty/prakasha_v",
    "title": "Prakasha V",
    "category": "Faculty",
    "slug": "academics_teaching_faculty_prakasha_v"
  },
  {
    "url": "https://www.ssmrv.edu.in/academics/teaching_faculty/ramamishra_yashaswi_m/",
    "display": "ssmrv.edu.in/academics/teaching_faculty/ramamishra_yashaswi_m",
    "title": "Ramamishra Yashaswi M",
    "category": "Faculty",
    "slug": "academics_teaching_faculty_ramamishra_yashaswi_m"
  },
  {
    "url": "https://www.ssmrv.edu.in/academics/teaching_faculty/sharavana_m/",
    "display": "ssmrv.edu.in/academics/teaching_faculty/sharavana_m",
    "title": "Sharavana M",
    "category": "Faculty",
    "slug": "academics_teaching_faculty_sharavana_m"
  },
  {
    "url": "https://www.ssmrv.edu.in/academics/teaching_faculty/swathi_s_nair/",
    "display": "ssmrv.edu.in/academics/teaching_faculty/swathi_s_nair",
    "title": "Swathi S Nair",
    "category": "Faculty",
    "slug": "academics_teaching_faculty_swathi_s_nair"
  },
  {
    "url": "https://www.ssmrv.edu.in/academics/teaching_faculty/ume_salma/",
    "display": "ssmrv.edu.in/academics/teaching_faculty/ume_salma",
    "title": "Ume Salma",
    "category": "Faculty",
    "slug": "academics_teaching_faculty_ume_salma"
  },
  {
    "url": "https://www.ssmrv.edu.in/academics/teaching_faculty/vaishnavi_r/",
    "display": "ssmrv.edu.in/academics/teaching_faculty/vaishnavi_r",
    "title": "Vaishnavi R",
    "category": "Faculty",
    "slug": "academics_teaching_faculty_vaishnavi_r"
  },
  {
    "url": "https://www.ssmrv.edu.in/academics/teaching_faculty/vedamurthy_y_n/",
    "display": "ssmrv.edu.in/academics/teaching_faculty/vedamurthy_y_n",
    "title": "Vedamurthy Y N",
    "category": "Faculty",
    "slug": "academics_teaching_faculty_vedamurthy_y_n"
  },
  {
    "url": "https://www.ssmrv.edu.in/admission_cancellation_process/",
    "display": "ssmrv.edu.in/admission_cancellation_process",
    "title": "Admission Cancellation Process",
    "category": "Admissions",
    "slug": "admission_cancellation_process"
  },
  {
    "url": "https://www.ssmrv.edu.in/admission_procedure/",
    "display": "ssmrv.edu.in/admission_procedure",
    "title": "Admission Procedure",
    "category": "Admissions",
    "slug": "admission_procedure"
  },
  {
    "url": "https://www.ssmrv.edu.in/aqar_2020_21_supporting_documents/",
    "display": "ssmrv.edu.in/aqar_2020_21_supporting_documents",
    "title": "AQAR 2020-21 Supporting Documents",
    "category": "Accreditation & Disclosures",
    "slug": "aqar_2020_21_supporting_documents"
  },
  {
    "url": "https://www.ssmrv.edu.in/aqar_2021_22_supporting_documents/",
    "display": "ssmrv.edu.in/aqar_2021_22_supporting_documents",
    "title": "AQAR 2021-22 Supporting Documents",
    "category": "Accreditation & Disclosures",
    "slug": "aqar_2021_22_supporting_documents"
  },
  {
    "url": "https://www.ssmrv.edu.in/aqar_2022_23_supporting_documents/",
    "display": "ssmrv.edu.in/aqar_2022_23_supporting_documents",
    "title": "AQAR 2022-23 Supporting Documents",
    "category": "Accreditation & Disclosures",
    "slug": "aqar_2022_23_supporting_documents"
  },
  {
    "url": "https://www.ssmrv.edu.in/aqar_2023_24_supporting_documents/",
    "display": "ssmrv.edu.in/aqar_2023_24_supporting_documents",
    "title": "AQAR 2023-24 Supporting Documents",
    "category": "Accreditation & Disclosures",
    "slug": "aqar_2023_24_supporting_documents"
  },
  {
    "url": "https://www.ssmrv.edu.in/campus_life/",
    "display": "ssmrv.edu.in/campus_life",
    "title": "Campus Life",
    "category": "Campus Life & Centres",
    "slug": "campus_life"
  },
  {
    "url": "https://www.ssmrv.edu.in/campus_life/alumni/",
    "display": "ssmrv.edu.in/campus_life/alumni",
    "title": "Alumni",
    "category": "Campus Life & Centres",
    "slug": "campus_life_alumni"
  },
  {
    "url": "https://www.ssmrv.edu.in/campus_life/circular_and_notifications/",
    "display": "ssmrv.edu.in/campus_life/circular_and_notifications",
    "title": "Circular and Notifications",
    "category": "Campus Life & Centres",
    "slug": "campus_life_circular_and_notifications"
  },
  {
    "url": "https://www.ssmrv.edu.in/campus_life/clubs_and_associations/",
    "display": "ssmrv.edu.in/campus_life/clubs_and_associations",
    "title": "Clubs and Associations",
    "category": "Campus Life & Centres",
    "slug": "campus_life_clubs_and_associations"
  },
  {
    "url": "https://www.ssmrv.edu.in/campus_life/clubs_and_associations/centre_for_culture_and_heritage/",
    "display": "ssmrv.edu.in/campus_life/clubs_and_associations/centre_for_culture_and_heritage",
    "title": "Centre for Culture and Heritage",
    "category": "Campus Life & Centres",
    "slug": "campus_life_clubs_and_associations_centre_for_culture_and_heritage"
  },
  {
    "url": "https://www.ssmrv.edu.in/campus_life/clubs_and_associations/centre_for_partnership_collaborations/",
    "display": "ssmrv.edu.in/campus_life/clubs_and_associations/centre_for_partnership_collaborations",
    "title": "Centre for Partnership & Collaborations",
    "category": "Campus Life & Centres",
    "slug": "campus_life_clubs_and_associations_centre_for_partnership_collaborations"
  },
  {
    "url": "https://www.ssmrv.edu.in/campus_life/clubs_and_associations/centre_for_sustainability/",
    "display": "ssmrv.edu.in/campus_life/clubs_and_associations/centre_for_sustainability",
    "title": "Centre for Sustainability",
    "category": "Campus Life & Centres",
    "slug": "campus_life_clubs_and_associations_centre_for_sustainability"
  },
  {
    "url": "https://www.ssmrv.edu.in/campus_life/clubs_and_associations/knowledge_hub/",
    "display": "ssmrv.edu.in/campus_life/clubs_and_associations/knowledge_hub",
    "title": "Knowledge Hub",
    "category": "Campus Life & Centres",
    "slug": "campus_life_clubs_and_associations_knowledge_hub"
  },
  {
    "url": "https://www.ssmrv.edu.in/campus_life/clubs_and_associations/non_technical_clubs/",
    "display": "ssmrv.edu.in/campus_life/clubs_and_associations/non_technical_clubs",
    "title": "Non-Technical Clubs",
    "category": "Campus Life & Centres",
    "slug": "campus_life_clubs_and_associations_non_technical_clubs"
  },
  {
    "url": "https://www.ssmrv.edu.in/campus_life/clubs_and_associations/raise_the_centre_of_excellence/",
    "display": "ssmrv.edu.in/campus_life/clubs_and_associations/raise_the_centre_of_excellence",
    "title": "Raise - The Centre of Excellence",
    "category": "Campus Life & Centres",
    "slug": "campus_life_clubs_and_associations_raise_the_centre_of_excellence"
  },
  {
    "url": "https://www.ssmrv.edu.in/campus_life/clubs_and_associations/sports_and_wellness_centre/",
    "display": "ssmrv.edu.in/campus_life/clubs_and_associations/sports_and_wellness_centre",
    "title": "Sports and Wellness Centre",
    "category": "Campus Life & Centres",
    "slug": "campus_life_clubs_and_associations_sports_and_wellness_centre"
  },
  {
    "url": "https://www.ssmrv.edu.in/campus_life/clubs_and_associations/statutory-committees-and-support-system/",
    "display": "ssmrv.edu.in/campus_life/clubs_and_associations/statutory-committees-and-support-system",
    "title": "Statutory Committees and Support System1",
    "category": "Campus Life & Centres",
    "slug": "campus_life_clubs_and_associations_statutory-committees-and-support-system"
  },
  {
    "url": "https://www.ssmrv.edu.in/campus_life/clubs_and_associations/statutory_committees_and_support_system/",
    "display": "ssmrv.edu.in/campus_life/clubs_and_associations/statutory_committees_and_support_system",
    "title": "Statutory Committees and Support System",
    "category": "Campus Life & Centres",
    "slug": "campus_life_clubs_and_associations_statutory_committees_and_support_system"
  },
  {
    "url": "https://www.ssmrv.edu.in/campus_life/clubs_and_associations/technical_clubs/",
    "display": "ssmrv.edu.in/campus_life/clubs_and_associations/technical_clubs",
    "title": "Technical Clubs",
    "category": "Campus Life & Centres",
    "slug": "campus_life_clubs_and_associations_technical_clubs"
  },
  {
    "url": "https://www.ssmrv.edu.in/campus_life/infrastructure/",
    "display": "ssmrv.edu.in/campus_life/infrastructure",
    "title": "Infrastructure",
    "category": "Campus Life & Centres",
    "slug": "campus_life_infrastructure"
  },
  {
    "url": "https://www.ssmrv.edu.in/campus_life/placement/",
    "display": "ssmrv.edu.in/campus_life/placement",
    "title": "Placement",
    "category": "Placements",
    "slug": "campus_life_placement"
  },
  {
    "url": "https://www.ssmrv.edu.in/category/iqac-events/",
    "display": "ssmrv.edu.in/category/iqac-events",
    "title": "IQAC Events Archives",
    "category": "Accreditation & Disclosures",
    "slug": "category_iqac-events"
  },
  {
    "url": "https://www.ssmrv.edu.in/category/uncategorized/",
    "display": "ssmrv.edu.in/category/uncategorized",
    "title": "Uncategorized Archives",
    "category": "General",
    "slug": "category_uncategorized"
  },
  {
    "url": "https://www.ssmrv.edu.in/change-the-world/",
    "display": "ssmrv.edu.in/change-the-world",
    "title": "Change the World",
    "category": "General",
    "slug": "change-the-world"
  },
  {
    "url": "https://www.ssmrv.edu.in/collaborations/",
    "display": "ssmrv.edu.in/collaborations",
    "title": "Collaborations",
    "category": "General",
    "slug": "collaborations"
  },
  {
    "url": "https://www.ssmrv.edu.in/contact_us/",
    "display": "ssmrv.edu.in/contact_us",
    "title": "Contact SSMRV \u2013 Leading Degree College in Jayanagar",
    "category": "Contact",
    "slug": "contact_us"
  },
  {
    "url": "https://www.ssmrv.edu.in/dr_h_c_a_v_s_murthy/",
    "display": "ssmrv.edu.in/dr_h_c_a_v_s_murthy",
    "title": "Dr.(h.c.) A.V.S. Murthy",
    "category": "General",
    "slug": "dr_h_c_a_v_s_murthy"
  },
  {
    "url": "https://www.ssmrv.edu.in/dr_m_p_shyam/",
    "display": "ssmrv.edu.in/dr_m_p_shyam",
    "title": "Dr. M.P. Shyam",
    "category": "General",
    "slug": "dr_m_p_shyam"
  },
  {
    "url": "https://www.ssmrv.edu.in/dr_vijayashree_l_message/",
    "display": "ssmrv.edu.in/dr_vijayashree_l_message",
    "title": "Dr. Vijayashree L. Message",
    "category": "General",
    "slug": "dr_vijayashree_l_message"
  },
  {
    "url": "https://www.ssmrv.edu.in/events/",
    "display": "ssmrv.edu.in/events",
    "title": "Events",
    "category": "General",
    "slug": "events"
  },
  {
    "url": "https://www.ssmrv.edu.in/faculty_training_session_on_azure_for_timetable_and_attendance/",
    "display": "ssmrv.edu.in/faculty_training_session_on_azure_for_timetable_and_attendance",
    "title": "Faculty training session on Azure for Timetable and Attendance",
    "category": "General",
    "slug": "faculty_training_session_on_azure_for_timetable_and_attendance"
  },
  {
    "url": "https://www.ssmrv.edu.in/",
    "display": "ssmrv.edu.in",
    "title": "Top Degree College in Jayanagar Bangalore",
    "category": "General",
    "slug": "homepage"
  },
  {
    "url": "https://www.ssmrv.edu.in/iim_c_workshop/",
    "display": "ssmrv.edu.in/iim_c_workshop",
    "title": "IIM-C workshop",
    "category": "General",
    "slug": "iim_c_workshop"
  },
  {
    "url": "https://www.ssmrv.edu.in/inter_institutional_naacseminar_10th_oct_2022/",
    "display": "ssmrv.edu.in/inter_institutional_naacseminar_10th_oct_2022",
    "title": "Inter-Institutional NAACseminar \u2013 10th Oct 2022",
    "category": "General",
    "slug": "inter_institutional_naacseminar_10th_oct_2022"
  },
  {
    "url": "https://www.ssmrv.edu.in/ipr_awareness_session_1st_and_2nd_dec_2022/",
    "display": "ssmrv.edu.in/ipr_awareness_session_1st_and_2nd_dec_2022",
    "title": "IPR Awareness Session \u2013 1st and 2nd Dec 2022",
    "category": "General",
    "slug": "ipr_awareness_session_1st_and_2nd_dec_2022"
  },
  {
    "url": "https://www.ssmrv.edu.in/iqac/",
    "display": "ssmrv.edu.in/iqac",
    "title": "IQAC",
    "category": "Accreditation & Disclosures",
    "slug": "iqac"
  },
  {
    "url": "https://www.ssmrv.edu.in/iqac_events/",
    "display": "ssmrv.edu.in/iqac_events",
    "title": "IQAC-Events",
    "category": "Accreditation & Disclosures",
    "slug": "iqac_events"
  },
  {
    "url": "https://www.ssmrv.edu.in/mr_d_p_nagaraj/",
    "display": "ssmrv.edu.in/mr_d_p_nagaraj",
    "title": "Mr. D.P. Nagaraj",
    "category": "General",
    "slug": "mr_d_p_nagaraj"
  },
  {
    "url": "https://www.ssmrv.edu.in/national_level_online_business_plan_competition/",
    "display": "ssmrv.edu.in/national_level_online_business_plan_competition",
    "title": "National Level Online Business Plan Competition",
    "category": "General",
    "slug": "national_level_online_business_plan_competition"
  },
  {
    "url": "https://www.ssmrv.edu.in/news_events/",
    "display": "ssmrv.edu.in/news_events",
    "title": "News and Events",
    "category": "General",
    "slug": "news_events"
  },
  {
    "url": "https://www.ssmrv.edu.in/nirf/",
    "display": "ssmrv.edu.in/nirf",
    "title": "NIRF",
    "category": "Accreditation & Disclosures",
    "slug": "nirf"
  },
  {
    "url": "https://www.ssmrv.edu.in/participation-in-capacity-building-programme-27th-to-29th-apr-2023/",
    "display": "ssmrv.edu.in/participation-in-capacity-building-programme-27th-to-29th-apr-2023",
    "title": "Participation in Capacity Building Programme \u2013 27th to 29th Apr 2023",
    "category": "General",
    "slug": "participation-in-capacity-building-programme-27th-to-29th-apr-2023"
  },
  {
    "url": "https://www.ssmrv.edu.in/participation_in_capacity_building_programme_27th_to_29th_apr_2023/",
    "display": "ssmrv.edu.in/participation_in_capacity_building_programme_27th_to_29th_apr_2023",
    "title": "Participation in Capacity Building Programme \u2013 27th to 29th Apr 2023",
    "category": "General",
    "slug": "participation_in_capacity_building_programme_27th_to_29th_apr_2023"
  },
  {
    "url": "https://www.ssmrv.edu.in/privacy-policy/",
    "display": "ssmrv.edu.in/privacy-policy",
    "title": "Privacy Policy",
    "category": "General",
    "slug": "privacy-policy"
  },
  {
    "url": "https://www.ssmrv.edu.in/sdp_on_leadership_skills_and_team_building_5th_nov_2022/",
    "display": "ssmrv.edu.in/sdp_on_leadership_skills_and_team_building_5th_nov_2022",
    "title": "SDP on Leadership skills and Team Building \u2013 5th Nov 2022",
    "category": "General",
    "slug": "sdp_on_leadership_skills_and_team_building_5th_nov_2022"
  },
  {
    "url": "https://www.ssmrv.edu.in/skill_up_workshop_on_student_leadership/",
    "display": "ssmrv.edu.in/skill_up_workshop_on_student_leadership",
    "title": "SKILL UP \u2013 Workshop on Student Leadership",
    "category": "General",
    "slug": "skill_up_workshop_on_student_leadership"
  },
  {
    "url": "https://www.ssmrv.edu.in/student_scholarship_orientation_report/",
    "display": "ssmrv.edu.in/student_scholarship_orientation_report",
    "title": "Student Scholarship Orientation Report",
    "category": "General",
    "slug": "student_scholarship_orientation_report"
  },
  {
    "url": "https://www.ssmrv.edu.in/webinar_on_mediation_26th_to_29th_april_2022/",
    "display": "ssmrv.edu.in/webinar_on_mediation_26th_to_29th_april_2022",
    "title": "Webinar on Mediation 26th to 29th April 2022",
    "category": "General",
    "slug": "webinar_on_mediation_26th_to_29th_april_2022"
  }
];

const SSMRV_FAQS = [
  {
    q: "What programs are offered at SSMRV Degree College?",
    keywords: ["programs", "courses", "degrees", "what courses", "offer", "bcom", "bba", "bca", "mcom"],
    a: "SSMRV College offers undergraduate and postgraduate courses affiliated with Bengaluru City University:<br>• <b>B.Com</b> (General, Professional with CA/CS/CMA, Digital Marketing)<br>• <b>BBA</b> (General Honours, Finance, Marketing, HR, Business Analytics)<br>• <b>BBA – Aviation Management</b> (Airline & Airport operations)<br>• <b>BCA</b> (Full Stack, Data Analytics, Cloud Computing)<br>• <b>M.Com</b> (Master of Commerce with Advanced Finance & Accounting)."
  },
  {
    q: "How can I apply for admission?",
    keywords: ["apply", "admission", "process", "portal", "praveshan", "form", "registration", "how to apply"],
    a: "SSMRV follows the structured <b>Praveshan</b> admission process:<br>1. Register on the <a href='https://www.ssmrv.edu.in/admission_procedure/' target='_blank' style='color:#3e3ff0;font-weight:600;'>Admission Portal</a> with your Email ID.<br>2. Fill the online application and upload documents.<br>3. Attend the entrance evaluation / interaction.<br>4. Receive your Offer Letter and pay the provisional fee to secure your seat.<br>For immediate assistance, call <b>97395 88855</b> or <b>97396 55500</b>."
  },
  {
    q: "What is the fee structure at SSMRV?",
    keywords: ["fee", "fees", "cost", "tuition", "fee structure", "how much fee", "pricing"],
    a: "The fee structure varies depending on the course and specialized certification chosen (e.g., standard B.Com/BBA vs. Integrated CA/ACCA or Aviation Management). Fees are set according to Bengaluru City University and RSST trust guidelines.<br>To receive the exact fee breakdown for your program of interest, call our Admission Office at <b>97395 88855</b> or request an official fee sheet below!"
  },
  {
    q: "Does SSMRV provide placements? What are the packages?",
    keywords: ["placement", "job", "recruiter", "salary", "package", "ctc", "lpa", "highest package", "average package", "companies"],
    a: "Yes! The dedicated <b>Paryapti Training & Placement Cell</b> maintains a <b>90%+ placement track record</b>.<br>• <b>Highest CTC:</b> <b>11 LPA</b> (BBA) | <b>8 LPA</b> (BCA & B.Com)<br>• <b>Average CTC:</b> <b>5 LPA to 6.5 LPA</b><br>• <b>Top Recruiters:</b> Deloitte, Accenture, Infosys, Wipro, TCS, Capgemini, Cognizant, EY, KPMG, Amazon, Target, ICICI Bank.<br>Pre-placement corporate readiness training begins in Semester 1."
  },
  {
    q: "Where is SSMRV College located?",
    keywords: ["location", "address", "where", "reach", "campus", "jayanagar", "metro", "map"],
    a: "SSMRV College is located at <b>#17, 36th Cross Road, 26th Main, 4th 'T' Block East, Jayanagar, Bengaluru - 560041</b>.<br>📍 Landmark: Near RV Teachers College and RV Dental College.<br>🚇 Nearest Metro: Jayanagar & Rashtreeya Vidyalaya Road Metro Stations.<br><a href='https://www.google.com/maps/search/?api=1&query=SSMRV+College+Jayanagar+Bengaluru' target='_blank' style='color:#3e3ff0;font-weight:600;'>View on Google Maps 📍</a>"
  },
  {
    q: "What is the eligibility for BCA?",
    keywords: ["bca eligibility", "eligibility bca", "bca marks", "who can join bca", "criteria bca"],
    a: "To be eligible for <b>BCA</b> at SSMRV, candidates must have passed 10+2 / Karnataka PUC or equivalent examination from a recognised board in Science, Commerce, or Arts with Mathematics / Computer Science / Statistics / Business Mathematics as one of the subjects."
  },
  {
    q: "What is BBA Aviation Management?",
    keywords: ["aviation", "bba aviation", "bba am", "airport", "airline"],
    a: "<b>BBA in Aviation Management (BBA-AM)</b> is a specialized 3-year degree combining business administration with airline and airport terminal operations, air cargo logistics, aviation safety, and customer experience. It includes airport site visits and prepares students for airline, cargo, and airport authority careers."
  },
  {
    q: "Who is the Principal of SSMRV College?",
    keywords: ["principal", "who is principal", "head", "vijayashree", "principal name"],
    a: "The Principal of SSMRV College is <b>Dr. Vijayashree L.</b>, an eminent academician and researcher with over 25 years of experience in higher education, human resource management, and organizational leadership.<br>✉️ Email: <b>principal.ssmrv@rvei.edu.in</b>"
  },
  {
    q: "What is RAISE Centre of Excellence?",
    keywords: ["raise", "centre of excellence", "research", "innovation", "incubation"],
    a: "<b>RAISE</b> is SSMRV's flagship Centre of Excellence dedicated to <b>Research, Academics, Innovation, Social Extension, and Entrepreneurship</b>. It facilitates corporate mentorships, faculty and student research papers, startup incubation, and international seminars."
  },
  {
    q: "What is the Anti-Ragging and Grievance Policy?",
    keywords: ["anti ragging", "ragging", "grievance", "complaint", "safety", "icc"],
    a: "SSMRV has a strict <b>Zero-Tolerance Policy toward Ragging</b> in accordance with UGC and Supreme Court regulations. The campus operates an active <b>Anti-Ragging Committee</b>, an <b>Internal Complaints Committee (ICC)</b>, and a Student Grievance Redressal Cell to ensure complete student safety."
  },
  {
    q: "Are there scholarships available?",
    keywords: ["scholarship", "financial aid", "concession", "fee waiver", "merit scholarship"],
    a: "Yes! Meritorious students, sports achievers, and economically disadvantaged students are eligible for scholarships through the <b>Rashtreeya Sikshana Samithi Trust (RSST)</b> as well as state and central government scholarship portals (SSP / NSP)."
  },
  {
    q: "Does SSMRV have hostel facilities?",
    keywords: ["hostel", "accommodation", "stay", "room", "pg", "boarding"],
    a: "SSMRV assists outstation students with verified hostel accommodations and Paying Guest (PG) facilities located within safe, walking distance from the Jayanagar campus, offering hygienic food and Wi-Fi."
  },
  {
    q: "What are the college timings?",
    keywords: ["timings", "timing", "hours", "college time", "working hours"],
    a: "College academic hours run from <b>8:30 AM to 3:30 PM</b> Monday through Friday, and <b>8:30 AM to 1:30 PM</b> on Saturdays. The Administrative and Admission Office is open Monday to Friday 9:30 AM – 5:00 PM and Saturday 9:30 AM – 2:00 PM."
  },
  {
    q: "How can I contact the Principal or Admission Office?",
    keywords: ["contact", "phone", "email", "helpline", "principal", "number", "call"],
    a: "You can reach SSMRV College through:<br>• 📞 Landline: <b>080 6824 0999</b><br>• 📱 Admission Helplines: <b>97395 88855 / 97396 55500 / 96065 37192</b><br>• ✉️ Office Email: <b>office.ssmrv@rvei.edu.in</b><br>• ✉️ Principal: <b>principal.ssmrv@rvei.edu.in</b><br>• 📍 Address: 36th Cross, 4th T Block East, Jayanagar, Bengaluru - 560041."
  }
];

const CHAT_FLOWS = {
  welcome: {
    id: "welcome",
    message: "👋 Welcome to <b>SSMRV Degree College</b>, Jayanagar!<br><i>'360-degree Education for Wholeness'</i> (NAAC 'A' Grade | BCU Affiliated | RSST Group).<br><br>How can I assist you today? Select an option or type your question:",
    buttons: [
      { text: "📚 Explore Programmes", action: "flow:programmes" },
      { text: "📝 Admissions & Apply", action: "flow:admissions" },
      { text: "👨‍🏫 Faculty Directory (92)", action: "flow:faculty" },
      { text: "💼 Placements & Packages (11 LPA)", action: "flow:placements" },
      { text: "📄 Official Downloads & AICTE", action: "flow:prospectus_downloads" },
      { text: "📍 Campus Navigation / Maps", action: "flow:campus_navigation" },
      { text: "💰 Fee Structure Inquiry", action: "flow:fee_enquiry" },
      { text: "🌐 All College Links (120+)", action: "flow:sitemap_links" },
      { text: "💬 Chat on WhatsApp", url: "https://wa.me/919739588855?text=Hello%20SSMRV%20Admissions%20Team%2C%20I%20would%20like%20information%20regarding%20admissions" },
      { text: "📞 Direct Call: 97395 88855", url: "tel:9739588855" }
    ]
  },

  main_menu: {
    id: "main_menu",
    message: "🏛️ <b>SSMRV Degree College — Main Menu</b><br>Select an institutional hub below or type what you would like to know:",
    buttons: [
      { text: "📚 Explore Programmes", action: "flow:programmes" },
      { text: "📝 Admissions & Apply", action: "flow:admissions" },
      { text: "👨‍🏫 Faculty Directory (92)", action: "flow:faculty" },
      { text: "💼 Placements & Packages (11 LPA)", action: "flow:placements" },
      { text: "📄 Official Downloads & AICTE", action: "flow:prospectus_downloads" },
      { text: "📍 Campus Navigation / Maps", action: "flow:campus_navigation" },
      { text: "💰 Fee Structure Inquiry", action: "flow:fee_enquiry" },
      { text: "🌐 All College Links (120+)", action: "flow:sitemap_links" },
      { text: "💬 Chat on WhatsApp", url: "https://wa.me/919739588855?text=Hello%20SSMRV%20Admissions%20Team%2C%20I%20would%20like%20information%20regarding%20admissions" },
      { text: "📞 Direct Call: 97395 88855", url: "tel:9739588855" }
    ]
  },

  programmes: {
    id: "programmes",
    message: "SSMRV offers industry-aligned undergraduate and postgraduate degrees with specialized certifications and NEP curriculum. Select a program to explore:",
    buttons: [
      { text: "📊 B.Com (Regular & Prof)", action: "flow:bcom_details" },
      { text: "📈 BBA (Honours)", action: "flow:bba_details" },
      { text: "✈️ BBA Aviation Management", action: "flow:aviation_details" },
      { text: "💻 BCA (Computer Applications)", action: "flow:bca_details" },
      { text: "🎓 M.Com (Postgraduate)", action: "flow:mcom_details" },
      { text: "↩️ Back to Main Menu", action: "flow:welcome" }
    ]
  },

  bcom_details: {
    id: "bcom_details",
    pageUrl: "https://www.ssmrv.edu.in/academics/programmes/bachelor_of_commerce/",
    message: `<b>Bachelor of Commerce (B.Com)</b><br>• <b>Duration:</b> 3 Years (6 Semesters) / 4-Year Honours<br>• <b>Affiliation:</b> Bengaluru City University (BCU)<br>• <b>Specializations:</b> Accounting & Taxation, Finance, Digital Marketing, Forensic Accounting, Business Data Analytics.<br>• <b>Integrated Tracks:</b> CA Foundation & Intermediate, CS, CMA, and ACCA.<br>• <b>Eligibility:</b> 10+2 / PUC passed from any recognized board.`,
    buttons: [
      { text: "💰 Request B.Com Fee Sheet", action: "flow:fee_enquiry" },
      { text: "📝 Apply for B.Com", action: "flow:inquiry_form" },
      { text: "💼 B.Com Placements", action: "flow:placements" },
      { text: "📚 Other Programmes", action: "flow:programmes" }
    ]
  },

  bba_details: {
    id: "bba_details",
    pageUrl: "https://www.ssmrv.edu.in/academics/programmes/bachelors_of_business_administration/",
    message: `<b>Bachelor of Business Administration (BBA)</b><br>• <b>Duration:</b> 3 Years / 4-Year Honours<br>• <b>Affiliation:</b> Bengaluru City University (BCU)<br>• <b>Curriculum:</b> Aligned with NEP/SEP with live industry case studies, Harvard simulations, and capstone projects.<br>• <b>Specializations:</b> Finance, Marketing, HRM, Business Analytics, Logistics & Supply Chain.<br>• <b>Corporate Ties:</b> Abstream Tech (Hong Kong), Nano Chips, and E-Cell Incubation.`,
    buttons: [
      { text: "💰 Request BBA Fee Sheet", action: "flow:fee_enquiry" },
      { text: "📝 Apply for BBA", action: "flow:inquiry_form" },
      { text: "✈️ Explore BBA Aviation", action: "flow:aviation_details" },
      { text: "📚 Other Programmes", action: "flow:programmes" }
    ]
  },

  aviation_details: {
    id: "aviation_details",
    pageUrl: "https://www.ssmrv.edu.in/academics/programmes/bba-_aviation_management/",
    message: `<b>BBA – Aviation Management (BBA-AM)</b><br>• <b>Duration:</b> 3 Years (6 Semesters)<br>• <b>Affiliation:</b> Bengaluru City University (BCU)<br>• <b>Focus:</b> Airline management, airport terminal operations, air cargo logistics, and aviation safety.<br>• <b>Features:</b> Industrial visits to Kempegowda International Airport (BIAL), airline simulation modules, and IATA alignment.`,
    buttons: [
      { text: "💰 Aviation Fee Sheet", action: "flow:fee_enquiry" },
      { text: "📝 Apply for BBA Aviation", action: "flow:inquiry_form" },
      { text: "💼 Aviation Careers & Jobs", action: "flow:placements" },
      { text: "📚 Other Programmes", action: "flow:programmes" }
    ]
  },

  bca_details: {
    id: "bca_details",
    pageUrl: "https://www.ssmrv.edu.in/academics/programmes/bachelors_of_computer_application/",
    message: `<b>Bachelor of Computer Applications (BCA)</b><br>• <b>Duration:</b> 3 Years (6 Semesters) / 4-Year Honours<br>• <b>Affiliation:</b> Bengaluru City University (BCU)<br>• <b>Curriculum:</b> Full Stack Web Development (MERN), Python Data Analytics, Cloud Computing (AWS/Azure), and Cybersecurity.<br>• <b>Facilities:</b> High-tech computing labs, 1 Gbps internet, hackathons, and live GitHub portfolio mentorship.`,
    buttons: [
      { text: "💰 Request BCA Fee Sheet", action: "flow:fee_enquiry" },
      { text: "📝 Apply for BCA", action: "flow:inquiry_form" },
      { text: "💼 BCA IT Placements", action: "flow:placements" },
      { text: "📚 Other Programmes", action: "flow:programmes" }
    ]
  },

  mcom_details: {
    id: "mcom_details",
    pageUrl: "https://www.ssmrv.edu.in/academics/programmes/master_of_commerce/",
    message: `<b>Master of Commerce (M.Com)</b><br>• <b>Duration:</b> 2 Years (4 Semesters)<br>• <b>Affiliation:</b> Bengaluru City University (BCU)<br>• <b>Specializations:</b> Advanced Corporate Accounting, Corporate Tax, Financial Markets, and Business Analytics.<br>• <b>Highlights:</b> Research paper publications, SPSS/R financial modeling, UGC-NET guidance, and 100% placement support.`,
    buttons: [
      { text: "💰 M.Com Fee Details", action: "flow:fee_enquiry" },
      { text: "📝 Apply for M.Com", action: "flow:inquiry_form" },
      { text: "📚 Other Programmes", action: "flow:programmes" }
    ]
  },

  faculty: {
      "id": "faculty",
      "pageUrl": "https://www.ssmrv.edu.in/academics/teaching_faculty/",
      "message": "<b>👨‍🏫 SSMRV Official Faculty, Staff &amp; Leadership Directory (92 Profiles)</b><br>100% verified from <a href=\"https://www.ssmrv.edu.in/academics/teaching_faculty/\" target=\"_blank\">ssmrv.edu.in</a> with complete <b>Department</b>, <b>Designation</b>, <b>Qualifications</b>, <b>Experience</b>, <b>Specialisations</b>, <b>Publications</b>, and direct <b>Visit Website Page ↗</b> buttons for every faculty member.<br><br>Select a department below to browse interactive profiles, or type any name/role directly:",
      "buttons": [
          {
              "text": "💻 BCA Faculty (11)",
              "action": "flow:faculty_bca"
          },
          {
              "text": "📊 Commerce / B.Com Faculty (23)",
              "action": "flow:faculty_commerce"
          },
          {
              "text": "📈 BBA & Aviation Faculty (11)",
              "action": "flow:faculty_bba"
          },
          {
              "text": "🎓 M.Com Postgraduate Faculty (3)",
              "action": "flow:faculty_mcom"
          },
          {
              "text": "🗣️ Languages & Humanities (10)",
              "action": "flow:faculty_languages"
          },
          {
              "text": "⚽ Physical Education & Sports (3)",
              "action": "flow:faculty_sports"
          },
          {
              "text": "💼 Placement Cell — Paryapti (2)",
              "action": "flow:faculty_placement"
          },
          {
              "text": "📖 Library & Knowledge Hub (2)",
              "action": "flow:faculty_library"
          },
          {
              "text": "🏢 Administration & Support (19)",
              "action": "flow:faculty_admin"
          },
          {
              "text": "🏛️ Institutional Leadership (8)",
              "action": "flow:faculty_leadership"
          },
          {
              "text": "🛡️ Statutory Committees & Conveners",
              "action": "flow:faculty_committees"
          },
          {
              "text": "🌐 Visit Teaching Faculty Webpage ↗",
              "url": "https://www.ssmrv.edu.in/academics/teaching_faculty/"
          },
          {
              "text": "🌐 Visit Non-Teaching Staff Webpage ↗",
              "url": "https://www.ssmrv.edu.in/academics/non_teaching_staff/"
          }
      ]
  },

  faculty_bca: {
      "id": "faculty_bca",
      "pageUrl": "https://www.ssmrv.edu.in/academics/teaching_faculty/",
      "message": "<b>💻 Department of Computer Applications (BCA) (11 Profiles)</b><br><span style=\"font-size:11px;color:#475569;\">Click <b>👤 View Full Profile</b> or <b>🌐 Visit Website Page ↗</b> on any faculty card:</span><div class=\"ssmrv-dept-profile-list\"><div class=\"ssmrv-dept-profile-item\" data-profile-id=\"dr-r-sheela-chandrashekar\" title=\"Click to view full profile of Dr. R. Sheela Chandrashekar\"><div class=\"ssmrv-dept-prof-header\"><span class=\"ssmrv-dept-prof-name\">👤 Dr. R. Sheela Chandrashekar</span></div><div class=\"ssmrv-faculty-badges\"><span class=\"ssmrv-badge-desig\">🎖️ Associate Professor and HOD – BCA</span><span class=\"ssmrv-badge-dept\">🏛️ Computer Applications (BCA)</span></div><div class=\"ssmrv-dept-prof-actions\"><span class=\"ssmrv-dept-prof-cta\">👤 View Full Profile</span><a href=\"https://www.ssmrv.edu.in/academics/teaching_faculty/dr_r_sheela_chandrashekar/\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"ssmrv-dept-visit-btn\">🌐 Visit Website Page ↗</a></div><div class=\"ssmrv-dept-prof-meta\"><div>🎓 <b>Qualifications:</b> B.Sc (Computer Science, Kuvempu University), M.Sc (Computer Science, Kuvempu University), Ph.D. (Jain University) • 17+ Years Teaching & Research Experience in Computer Science and IT</div><div>🔬 <b>Specialisation:</b> Cyber Security, Cyber Forensics, Digital Forensics, Cyber Threat Intelligence, Image Processing & Face Recognition</div><div class=\"ssmrv-dept-prof-comm\">🛡️ <b>Role:</b> Head of Department (BCA) | Grievance Redressal Cell (BCA Representative)</div></div></div><div class=\"ssmrv-dept-profile-item\" data-profile-id=\"ms-r-shanthi-krishna\" title=\"Click to view full profile of Mrs. R. Shanthi Krishna\"><div class=\"ssmrv-dept-prof-header\"><span class=\"ssmrv-dept-prof-name\">👤 Mrs. R. Shanthi Krishna</span></div><div class=\"ssmrv-faculty-badges\"><span class=\"ssmrv-badge-desig\">🎖️ Assistant Professor & IQAC Coordinator</span><span class=\"ssmrv-badge-dept\">🏛️ Computer Applications (BCA)</span></div><div class=\"ssmrv-dept-prof-actions\"><span class=\"ssmrv-dept-prof-cta\">👤 View Full Profile</span><a href=\"https://www.ssmrv.edu.in/academics/teaching_faculty/ms_r_shanthi_krishna/\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"ssmrv-dept-visit-btn\">🌐 Visit Website Page ↗</a></div><div class=\"ssmrv-dept-prof-meta\"><div>🎓 <b>Qualifications:</b> B.Sc (Sri Sarada College), MCA (Nehru Memorial College), M.Phil. (Manonmaniam Sundaranar University), PGP-AIML (Great Lakes Executive Learning) • 19+ Years Collegiate Teaching Experience (Former HOD BCA 2014–2024)</div><div>🔬 <b>Specialisation:</b> Machine Learning, Artificial Intelligence, Programming Languages</div><div class=\"ssmrv-dept-prof-comm\">🛡️ <b>Role:</b> IQAC Coordinator / Convener (Internal Quality Assurance Cell — NAAC)</div></div></div><div class=\"ssmrv-dept-profile-item\" data-profile-id=\"dr-s-chethana\" title=\"Click to view full profile of Dr. S. Chethana\"><div class=\"ssmrv-dept-prof-header\"><span class=\"ssmrv-dept-prof-name\">👤 Dr. S. Chethana</span></div><div class=\"ssmrv-faculty-badges\"><span class=\"ssmrv-badge-desig\">🎖️ Assistant Professor</span><span class=\"ssmrv-badge-dept\">🏛️ Computer Applications (BCA)</span></div><div class=\"ssmrv-dept-prof-actions\"><span class=\"ssmrv-dept-prof-cta\">👤 View Full Profile</span><a href=\"https://www.ssmrv.edu.in/academics/teaching_faculty/dr_s_chethana/\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"ssmrv-dept-visit-btn\">🌐 Visit Website Page ↗</a></div><div class=\"ssmrv-dept-prof-meta\"><div>🎓 <b>Qualifications:</b> B.Sc (Electronics, University of Mysore), MCA (IGNOU), Ph.D. (Jain University) • 22+ Years Teaching Experience in Computer Science</div><div>🔬 <b>Specialisation:</b> Artificial Intelligence, Internet of Things (IoT), Software Engineering, Medical Image Processing</div><div class=\"ssmrv-dept-prof-comm\">🛡️ <b>Role:</b> College SPOC & Convener — Innovation Cell & IPR Cell | Examination Committee (BCA)</div></div></div><div class=\"ssmrv-dept-profile-item\" data-profile-id=\"dr-suma-sannamani\" title=\"Click to view full profile of Dr. Suma Sannamani\"><div class=\"ssmrv-dept-prof-header\"><span class=\"ssmrv-dept-prof-name\">👤 Dr. Suma Sannamani</span></div><div class=\"ssmrv-faculty-badges\"><span class=\"ssmrv-badge-desig\">🎖️ Assistant Professor</span><span class=\"ssmrv-badge-dept\">🏛️ Computer Applications (BCA)</span></div><div class=\"ssmrv-dept-prof-actions\"><span class=\"ssmrv-dept-prof-cta\">👤 View Full Profile</span><a href=\"https://www.ssmrv.edu.in/academics/teaching_faculty/dr_suma_sannamani/\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"ssmrv-dept-visit-btn\">🌐 Visit Website Page ↗</a></div><div class=\"ssmrv-dept-prof-meta\"><div>🎓 <b>Qualifications:</b> B.E. (Electronics & Communication, VTU), M.Tech (VLSI Design & Embedded Systems, VTU), Ph.D. (VTU) • 8.6+ Years Teaching Experience in Engineering & Computer Applications</div><div>🔬 <b>Specialisation:</b> Memory Architecture, VLSI Design & Embedded Systems</div><div class=\"ssmrv-dept-prof-comm\">🛡️ <b>Role:</b> Convenor — Consultancy Cell | Innovation Ambassador | Entrepreneurship Cell (BCA)</div></div></div><div class=\"ssmrv-dept-profile-item\" data-profile-id=\"dr-v-sudha\" title=\"Click to view full profile of Mrs. V. Sudha (Dr. V. Sudha)\"><div class=\"ssmrv-dept-prof-header\"><span class=\"ssmrv-dept-prof-name\">👤 Mrs. V. Sudha (Dr. V. Sudha)</span></div><div class=\"ssmrv-faculty-badges\"><span class=\"ssmrv-badge-desig\">🎖️ Assistant Professor</span><span class=\"ssmrv-badge-dept\">🏛️ Computer Applications (BCA)</span></div><div class=\"ssmrv-dept-prof-actions\"><span class=\"ssmrv-dept-prof-cta\">👤 View Full Profile</span><a href=\"https://www.ssmrv.edu.in/academics/teaching_faculty/dr_v_sudha/\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"ssmrv-dept-visit-btn\">🌐 Visit Website Page ↗</a></div><div class=\"ssmrv-dept-prof-meta\"><div>🎓 <b>Qualifications:</b> M.Sc (Software Systems, Bharathiar University), Ph.D. (Computer Science, Bharathiar University), UGC-NET Qualified • 10+ Years Teaching & Research Experience in Higher Education</div><div>🔬 <b>Specialisation:</b> Digital Image Processing, Machine Learning, Remote Sensing & Software Systems</div><div class=\"ssmrv-dept-prof-comm\">🛡️ <b>Role:</b> IPR Cell Representative (BCA)</div></div></div><div class=\"ssmrv-dept-profile-item\" data-profile-id=\"mr-getendra-kumar-m\" title=\"Click to view full profile of Mr. Getendra Kumar M.\"><div class=\"ssmrv-dept-prof-header\"><span class=\"ssmrv-dept-prof-name\">👤 Mr. Getendra Kumar M.</span></div><div class=\"ssmrv-faculty-badges\"><span class=\"ssmrv-badge-desig\">🎖️ Assistant Professor</span><span class=\"ssmrv-badge-dept\">🏛️ Computer Applications (BCA)</span></div><div class=\"ssmrv-dept-prof-actions\"><span class=\"ssmrv-dept-prof-cta\">👤 View Full Profile</span><a href=\"https://www.ssmrv.edu.in/academics/teaching_faculty/mr_getendra_kumar_m/\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"ssmrv-dept-visit-btn\">🌐 Visit Website Page ↗</a></div><div class=\"ssmrv-dept-prof-meta\"><div>🎓 <b>Qualifications:</b> M.Sc (Computer Science, University of Madras) • 18+ Years Teaching Experience in Computer Applications</div><div>🔬 <b>Specialisation:</b> Database Management Systems (DBMS), Relational Architecture & SQL</div><div class=\"ssmrv-dept-prof-comm\">🛡️ <b>Role:</b> Alumni Association Representative (BCA)</div></div></div><div class=\"ssmrv-dept-profile-item\" data-profile-id=\"mrs-malasa-m-r\" title=\"Click to view full profile of Mrs. Malasa M.R.\"><div class=\"ssmrv-dept-prof-header\"><span class=\"ssmrv-dept-prof-name\">👤 Mrs. Malasa M.R.</span></div><div class=\"ssmrv-faculty-badges\"><span class=\"ssmrv-badge-desig\">🎖️ Assistant Professor</span><span class=\"ssmrv-badge-dept\">🏛️ Computer Applications (BCA)</span></div><div class=\"ssmrv-dept-prof-actions\"><span class=\"ssmrv-dept-prof-cta\">👤 View Full Profile</span><a href=\"https://www.ssmrv.edu.in/academics/teaching_faculty/mrs_malasa_m_r/\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"ssmrv-dept-visit-btn\">🌐 Visit Website Page ↗</a></div><div class=\"ssmrv-dept-prof-meta\"><div>🎓 <b>Qualifications:</b> B.Sc (Kuvempu University), M.Sc (Mangalore University), MCA (GITAM University) • 21+ Years Teaching Experience (UG & PG Computer Science)</div><div>🔬 <b>Specialisation:</b> Internet of Things (IoT), Arduino & Electronics-Based Systems</div><div class=\"ssmrv-dept-prof-comm\">🛡️ <b>Role:</b> Placement & Career Guidance Cell (BCA) | Discipline Committee (BCA)</div></div></div><div class=\"ssmrv-dept-profile-item\" data-profile-id=\"ms-vasugi-mudaliar-r-k\" title=\"Click to view full profile of Ms. Vasugi Mudaliar R.K.\"><div class=\"ssmrv-dept-prof-header\"><span class=\"ssmrv-dept-prof-name\">👤 Ms. Vasugi Mudaliar R.K.</span></div><div class=\"ssmrv-faculty-badges\"><span class=\"ssmrv-badge-desig\">🎖️ Assistant Professor & BCA II Year Coordinator</span><span class=\"ssmrv-badge-dept\">🏛️ Computer Applications (BCA)</span></div><div class=\"ssmrv-dept-prof-actions\"><span class=\"ssmrv-dept-prof-cta\">👤 View Full Profile</span><a href=\"https://www.ssmrv.edu.in/academics/teaching_faculty/ms_vasugi_mudaliar_r_k/\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"ssmrv-dept-visit-btn\">🌐 Visit Website Page ↗</a></div><div class=\"ssmrv-dept-prof-meta\"><div>🎓 <b>Qualifications:</b> B.Sc (Computer Science, Bishop Cotton Women's Christian College), M.Sc (Computer Science, St. Joseph's PG College), B.Ed (KIET) • 15+ Years Teaching Experience in Computer Science</div><div>🔬 <b>Specialisation:</b> Social Media Analytics, Data Science, Python Programming, Java Programming, Cyber Security</div><div class=\"ssmrv-dept-prof-comm\">🛡️ <b>Role:</b> IQAC Representative (BCA) | II Year BCA & Timetable Coordinator</div></div></div><div class=\"ssmrv-dept-profile-item\" data-profile-id=\"mrs-preethi-dwarakanath\" title=\"Click to view full profile of Mrs. Preethi Dwarakanath\"><div class=\"ssmrv-dept-prof-header\"><span class=\"ssmrv-dept-prof-name\">👤 Mrs. Preethi Dwarakanath</span></div><div class=\"ssmrv-faculty-badges\"><span class=\"ssmrv-badge-desig\">🎖️ Assistant Professor</span><span class=\"ssmrv-badge-dept\">🏛️ Computer Applications (BCA)</span></div><div class=\"ssmrv-dept-prof-actions\"><span class=\"ssmrv-dept-prof-cta\">👤 View Full Profile</span><a href=\"https://www.ssmrv.edu.in/academics/teaching_faculty/mrs_preethi_dwarakanath/\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"ssmrv-dept-visit-btn\">🌐 Visit Website Page ↗</a></div><div class=\"ssmrv-dept-prof-meta\"><div>🎓 <b>Qualifications:</b> B.E. (Information Science & Engineering, SJCE Mysuru / VTU), M.S. in Software Systems (BITS Pilani) • 11 Years Industry Experience (Senior Software Engineer) + 5+ Years Teaching Experience</div><div>🔬 <b>Specialisation:</b> Theoretical Computer Science, Machine Learning & Software Engineering</div><div class=\"ssmrv-dept-prof-comm\">🛡️ <b>Role:</b> Sports Committee (BCA) | Cultural Committee (BCA)</div></div></div><div class=\"ssmrv-dept-profile-item\" data-profile-id=\"mrs-puja-biswas\" title=\"Click to view full profile of Mrs. Puja Biswas\"><div class=\"ssmrv-dept-prof-header\"><span class=\"ssmrv-dept-prof-name\">👤 Mrs. Puja Biswas</span></div><div class=\"ssmrv-faculty-badges\"><span class=\"ssmrv-badge-desig\">🎖️ Assistant Professor</span><span class=\"ssmrv-badge-dept\">🏛️ Computer Applications (BCA)</span></div><div class=\"ssmrv-dept-prof-actions\"><span class=\"ssmrv-dept-prof-cta\">👤 View Full Profile</span><a href=\"https://www.ssmrv.edu.in/academics/teaching_faculty/mrs_puja_biswas/\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"ssmrv-dept-visit-btn\">🌐 Visit Website Page ↗</a></div><div class=\"ssmrv-dept-prof-meta\"><div>🎓 <b>Qualifications:</b> B.Tech (West Bengal University of Technology), M.Tech (West Bengal University of Technology) • 6+ Years Teaching Experience in Computer Applications</div><div>🔬 <b>Specialisation:</b> Information Technology, Cloud Computing, Internet of Things (IoT)</div><div class=\"ssmrv-dept-prof-comm\">🛡️ <b>Role:</b> Equal Opportunity Cell Representative (BCA) | Innovation Ambassador</div></div></div><div class=\"ssmrv-dept-profile-item\" data-profile-id=\"ms-jahanavi-rao-a-v\" title=\"Click to view full profile of Ms. Jahanavi Rao A.V.\"><div class=\"ssmrv-dept-prof-header\"><span class=\"ssmrv-dept-prof-name\">👤 Ms. Jahanavi Rao A.V.</span></div><div class=\"ssmrv-faculty-badges\"><span class=\"ssmrv-badge-desig\">🎖️ Assistant Professor</span><span class=\"ssmrv-badge-dept\">🏛️ Computer Applications (BCA)</span></div><div class=\"ssmrv-dept-prof-actions\"><span class=\"ssmrv-dept-prof-cta\">👤 View Full Profile</span><a href=\"https://www.ssmrv.edu.in/academics/teaching_faculty/ms_jahanavi_rao_a_v/\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"ssmrv-dept-visit-btn\">🌐 Visit Website Page ↗</a></div><div class=\"ssmrv-dept-prof-meta\"><div>🎓 <b>Qualifications:</b> BCA (Vijaya College, Jayanagar), M.Sc (Computer Science, National College Basavanagudi) • 5+ Years Teaching & Research Experience in Computer Science</div><div>🔬 <b>Specialisation:</b> Computer Science, Web Technologies & Software Development</div><div class=\"ssmrv-dept-prof-comm\">🛡️ <b>Role:</b> BCA Academic & Technical Club Mentor</div></div></div></div>",
      "buttons": [
          {
              "text": "👤 Dr. R. Sheela Chandrashekar (HOD)",
              "action": "profile:dr-r-sheela-chandrashekar"
          },
          {
              "text": "👤 Mrs. R. Shanthi Krishna (Coord.)",
              "action": "profile:ms-r-shanthi-krishna"
          },
          {
              "text": "👤 Dr. S. Chethana",
              "action": "profile:dr-s-chethana"
          },
          {
              "text": "👤 Dr. Suma Sannamani",
              "action": "profile:dr-suma-sannamani"
          },
          {
              "text": "👤 Mrs. V. Sudha (Dr. V. Sudha)",
              "action": "profile:dr-v-sudha"
          },
          {
              "text": "👤 Mr. Getendra Kumar M.",
              "action": "profile:mr-getendra-kumar-m"
          },
          {
              "text": "👤 Mrs. Malasa M.R.",
              "action": "profile:mrs-malasa-m-r"
          },
          {
              "text": "👤 Ms. Vasugi Mudaliar R.K. (Coord.)",
              "action": "profile:ms-vasugi-mudaliar-r-k"
          },
          {
              "text": "👤 Mrs. Preethi Dwarakanath",
              "action": "profile:mrs-preethi-dwarakanath"
          },
          {
              "text": "👤 Mrs. Puja Biswas",
              "action": "profile:mrs-puja-biswas"
          },
          {
              "text": "👤 Ms. Jahanavi Rao A.V.",
              "action": "profile:ms-jahanavi-rao-a-v"
          },
          {
              "text": "🌐 Visit Department Faculty Webpage ↗",
              "url": "https://www.ssmrv.edu.in/academics/teaching_faculty/"
          },
          {
              "text": "💻 BCA Course Details",
              "action": "flow:bca_details"
          },
          {
              "text": "👨‍🏫 All Departments (92)",
              "action": "flow:faculty"
          }
      ]
  },

  faculty_commerce: {
      "id": "faculty_commerce",
      "pageUrl": "https://www.ssmrv.edu.in/academics/teaching_faculty/",
      "message": "<b>📊 Department of Commerce (B.Com) (23 Profiles)</b><br><span style=\"font-size:11px;color:#475569;\">Click <b>👤 View Full Profile</b> or <b>🌐 Visit Website Page ↗</b> on any faculty card:</span><div class=\"ssmrv-dept-profile-list\"><div class=\"ssmrv-dept-profile-item\" data-profile-id=\"dr-malini-n\" title=\"Click to view full profile of Dr. Malini N.\"><div class=\"ssmrv-dept-prof-header\"><span class=\"ssmrv-dept-prof-name\">👤 Dr. Malini N.</span></div><div class=\"ssmrv-faculty-badges\"><span class=\"ssmrv-badge-desig\">🎖️ Associate Professor and HOD – Commerce</span><span class=\"ssmrv-badge-dept\">🏛️ Commerce (B.Com)</span></div><div class=\"ssmrv-dept-prof-actions\"><span class=\"ssmrv-dept-prof-cta\">👤 View Full Profile</span><a href=\"https://www.ssmrv.edu.in/academics/teaching_faculty/dr_malini_n/\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"ssmrv-dept-visit-btn\">🌐 Visit Website Page ↗</a></div><div class=\"ssmrv-dept-prof-meta\"><div>🎓 <b>Qualifications:</b> B.Com (Accounting & Taxation, Bangalore University), M.Com (Bangalore University), MBA (HRM, IGNOU), Ph.D. (Jain Deemed-to-be University) • 20+ Years Experience in Academia & Financial Analysis</div><div>🔬 <b>Specialisation:</b> Accounting and Taxation, Human Resources Management, Global Climate Governance</div><div class=\"ssmrv-dept-prof-comm\">🛡️ <b>Role:</b> Associate Professor & HOD — Commerce | Grievance Redressal Cell (B.Com)</div></div></div><div class=\"ssmrv-dept-profile-item\" data-profile-id=\"ms-samskruthi-b-l\" title=\"Click to view full profile of Ms. Samskruthi B. L.\"><div class=\"ssmrv-dept-prof-header\"><span class=\"ssmrv-dept-prof-name\">👤 Ms. Samskruthi B. L.</span></div><div class=\"ssmrv-faculty-badges\"><span class=\"ssmrv-badge-desig\">🎖️ Associate Professor and HOD – Commerce</span><span class=\"ssmrv-badge-dept\">🏛️ Commerce (B.Com)</span></div><div class=\"ssmrv-dept-prof-actions\"><span class=\"ssmrv-dept-prof-cta\">👤 View Full Profile</span><a href=\"https://www.ssmrv.edu.in/academics/teaching_faculty/\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"ssmrv-dept-visit-btn\">🌐 Visit Website Page ↗</a></div><div class=\"ssmrv-dept-prof-meta\"><div>🎓 <b>Qualifications:</b> M.Com, M.Phil, UGC-NET / KSET • Senior Academic Leadership in Department of Commerce</div><div>🔬 <b>Specialisation:</b> Corporate Accounting, Banking, Financial Markets & Taxation</div><div class=\"ssmrv-dept-prof-comm\">🛡️ <b>Role:</b> Associate Professor & HOD — Department of Commerce (B.Com)</div></div></div><div class=\"ssmrv-dept-profile-item\" data-profile-id=\"mr-gokul-c\" title=\"Click to view full profile of Mr. Gokul C.\"><div class=\"ssmrv-dept-prof-header\"><span class=\"ssmrv-dept-prof-name\">👤 Mr. Gokul C.</span></div><div class=\"ssmrv-faculty-badges\"><span class=\"ssmrv-badge-desig\">🎖️ Assistant Professor and Coordinator (B.Com 1st Year)</span><span class=\"ssmrv-badge-dept\">🏛️ Commerce (B.Com)</span></div><div class=\"ssmrv-dept-prof-actions\"><span class=\"ssmrv-dept-prof-cta\">👤 View Full Profile</span><a href=\"https://www.ssmrv.edu.in/academics/teaching_faculty/mr_gokul_c/\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"ssmrv-dept-visit-btn\">🌐 Visit Website Page ↗</a></div><div class=\"ssmrv-dept-prof-meta\"><div>🎓 <b>Qualifications:</b> B.Com (Bangalore University), MBA (Bangalore University), M.Com (Annamalai University), PGDBI (Annamalai University), KSET • 10+ Years Corporate Industry Experience + 10+ Years Academic Experience</div><div>🔬 <b>Specialisation:</b> Accounting, Taxation, Financial Management & General Management</div><div class=\"ssmrv-dept-prof-comm\">🛡️ <b>Role:</b> B.Com 1st Year Coordinator | College SPOC — Alumni Association (Sammilana) | Innovation Cell (B.Com)</div></div></div><div class=\"ssmrv-dept-profile-item\" data-profile-id=\"dr-vinaya-t\" title=\"Click to view full profile of Dr. Vinaya T.\"><div class=\"ssmrv-dept-prof-header\"><span class=\"ssmrv-dept-prof-name\">👤 Dr. Vinaya T.</span></div><div class=\"ssmrv-faculty-badges\"><span class=\"ssmrv-badge-desig\">🎖️ Assistant Professor and Coordinator (B.Com 2nd Year)</span><span class=\"ssmrv-badge-dept\">🏛️ Commerce (B.Com)</span></div><div class=\"ssmrv-dept-prof-actions\"><span class=\"ssmrv-dept-prof-cta\">👤 View Full Profile</span><a href=\"https://www.ssmrv.edu.in/academics/teaching_faculty/dr_vinaya_t/\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"ssmrv-dept-visit-btn\">🌐 Visit Website Page ↗</a></div><div class=\"ssmrv-dept-prof-meta\"><div>🎓 <b>Qualifications:</b> BBM, M.Com, Ph.D. (University of Mysore, Manasagangotri) • 17+ Years Teaching & Corporate Experience</div><div>🔬 <b>Specialisation:</b> Finance, Accounting, Taxation and Empirical Research</div><div class=\"ssmrv-dept-prof-comm\">🛡️ <b>Role:</b> B.Com 2nd Year Coordinator | College SPOC — Entrepreneurship Cell | Sports Committee (B.Com)</div></div></div><div class=\"ssmrv-dept-profile-item\" data-profile-id=\"ms-mokshamala-u\" title=\"Click to view full profile of Ms. Mokshamala U.\"><div class=\"ssmrv-dept-prof-header\"><span class=\"ssmrv-dept-prof-name\">👤 Ms. Mokshamala U.</span></div><div class=\"ssmrv-faculty-badges\"><span class=\"ssmrv-badge-desig\">🎖️ Professor</span><span class=\"ssmrv-badge-dept\">🏛️ Commerce (B.Com)</span></div><div class=\"ssmrv-dept-prof-actions\"><span class=\"ssmrv-dept-prof-cta\">👤 View Full Profile</span><a href=\"https://www.ssmrv.edu.in/academics/teaching_faculty/ms_mokshamala_u/\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"ssmrv-dept-visit-btn\">🌐 Visit Website Page ↗</a></div><div class=\"ssmrv-dept-prof-meta\"><div>🎓 <b>Qualifications:</b> M.A. (Political Science, Bangalore University), B.Ed (Bangalore University), LL.B. (KSLU) • 18+ Years Teaching Experience in Higher Education</div><div>🔬 <b>Specialisation:</b> Business Law, Corporate Law, Constitutional Law & Political Science</div><div class=\"ssmrv-dept-prof-comm\">🛡️ <b>Role:</b> Senior Professor — Business & Corporate Law (B.Com)</div></div></div><div class=\"ssmrv-dept-profile-item\" data-profile-id=\"mr-yallappa-m\" title=\"Click to view full profile of Mr. Yallappa M.\"><div class=\"ssmrv-dept-prof-header\"><span class=\"ssmrv-dept-prof-name\">👤 Mr. Yallappa M.</span></div><div class=\"ssmrv-faculty-badges\"><span class=\"ssmrv-badge-desig\">🎖️ Assistant Professor & NSS Programme Officer</span><span class=\"ssmrv-badge-dept\">🏛️ Commerce (B.Com)</span></div><div class=\"ssmrv-dept-prof-actions\"><span class=\"ssmrv-dept-prof-cta\">👤 View Full Profile</span><a href=\"https://www.ssmrv.edu.in/academics/teaching_faculty/mr_yallappa_m/\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"ssmrv-dept-visit-btn\">🌐 Visit Website Page ↗</a></div><div class=\"ssmrv-dept-prof-meta\"><div>🎓 <b>Qualifications:</b> B.Com (RC College, Bangalore), MFA (Central College, Bangalore University), M.Com, M.Phil, Ph.D. (Pursuing, Jain University) • 15+ Years Teaching Experience in Finance & Commerce</div><div>🔬 <b>Specialisation:</b> Finance, Financial Analysis & Accounting</div><div class=\"ssmrv-dept-prof-comm\">🛡️ <b>Role:</b> College SPOC — NSS Unit (Programme Officer) | SC/ST Cell, Entrepreneurship & Discipline Committees (B.Com)</div></div></div><div class=\"ssmrv-dept-profile-item\" data-profile-id=\"ms-m-roopa-latha\" title=\"Click to view full profile of Ms. M. Roopa Latha\"><div class=\"ssmrv-dept-prof-header\"><span class=\"ssmrv-dept-prof-name\">👤 Ms. M. Roopa Latha</span></div><div class=\"ssmrv-faculty-badges\"><span class=\"ssmrv-badge-desig\">🎖️ Assistant Professor</span><span class=\"ssmrv-badge-dept\">🏛️ Commerce (B.Com)</span></div><div class=\"ssmrv-dept-prof-actions\"><span class=\"ssmrv-dept-prof-cta\">👤 View Full Profile</span><a href=\"https://www.ssmrv.edu.in/academics/teaching_faculty/ms_m_roopa_latha/\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"ssmrv-dept-visit-btn\">🌐 Visit Website Page ↗</a></div><div class=\"ssmrv-dept-prof-meta\"><div>🎓 <b>Qualifications:</b> B.Sc (Computer Science, Shree Venkateshwara University), MBA (Shree Venkateshwara University) • 16+ Years Teaching & Research Experience in Commerce & Management</div><div>🔬 <b>Specialisation:</b> Finance and Human Resources Management</div><div class=\"ssmrv-dept-prof-comm\">🛡️ <b>Role:</b> Commerce Academic & Research Committee</div></div></div><div class=\"ssmrv-dept-profile-item\" data-profile-id=\"mr-shivakumara-n\" title=\"Click to view full profile of Mr. Shivakumara N.\"><div class=\"ssmrv-dept-prof-header\"><span class=\"ssmrv-dept-prof-name\">👤 Mr. Shivakumara N.</span></div><div class=\"ssmrv-faculty-badges\"><span class=\"ssmrv-badge-desig\">🎖️ Assistant Professor</span><span class=\"ssmrv-badge-dept\">🏛️ Commerce (B.Com)</span></div><div class=\"ssmrv-dept-prof-actions\"><span class=\"ssmrv-dept-prof-cta\">👤 View Full Profile</span><a href=\"https://www.ssmrv.edu.in/academics/teaching_faculty/mr_shivakumara_n/\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"ssmrv-dept-visit-btn\">🌐 Visit Website Page ↗</a></div><div class=\"ssmrv-dept-prof-meta\"><div>🎓 <b>Qualifications:</b> B.Com (Bangalore University), M.Com (Bangalore University), B.Ed (Bangalore University), UGC-NET Qualified • 16+ Years Teaching Experience in Commerce</div><div>🔬 <b>Specialisation:</b> Accounts and Taxation</div><div class=\"ssmrv-dept-prof-comm\">🛡️ <b>Role:</b> Commerce Academic & Mentorship Cell</div></div></div><div class=\"ssmrv-dept-profile-item\" data-profile-id=\"ms-deepika-l\" title=\"Click to view full profile of Ms. Deepika L.\"><div class=\"ssmrv-dept-prof-header\"><span class=\"ssmrv-dept-prof-name\">👤 Ms. Deepika L.</span></div><div class=\"ssmrv-faculty-badges\"><span class=\"ssmrv-badge-desig\">🎖️ Assistant Professor</span><span class=\"ssmrv-badge-dept\">🏛️ Commerce (B.Com)</span></div><div class=\"ssmrv-dept-prof-actions\"><span class=\"ssmrv-dept-prof-cta\">👤 View Full Profile</span><a href=\"https://www.ssmrv.edu.in/academics/teaching_faculty/ms_deepika_l/\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"ssmrv-dept-visit-btn\">🌐 Visit Website Page ↗</a></div><div class=\"ssmrv-dept-prof-meta\"><div>🎓 <b>Qualifications:</b> B.Com (Vijaya Main College, Bengaluru), M.Com (HRM, University of Mysore), Diploma in Fashion Designing (IIFT) • 9+ Years Teaching Experience in Commerce</div><div>🔬 <b>Specialisation:</b> Human Resource Management, Marketing, Auditing & Fashion Design</div><div class=\"ssmrv-dept-prof-comm\">🛡️ <b>Role:</b> IQAC Representative (B.Com) | Alumni Association Representative (B.Com)</div></div></div><div class=\"ssmrv-dept-profile-item\" data-profile-id=\"ms-shakeela-m-k\" title=\"Click to view full profile of Ms. Shakeela M.K.\"><div class=\"ssmrv-dept-prof-header\"><span class=\"ssmrv-dept-prof-name\">👤 Ms. Shakeela M.K.</span></div><div class=\"ssmrv-faculty-badges\"><span class=\"ssmrv-badge-desig\">🎖️ Assistant Professor</span><span class=\"ssmrv-badge-dept\">🏛️ Commerce (B.Com)</span></div><div class=\"ssmrv-dept-prof-actions\"><span class=\"ssmrv-dept-prof-cta\">👤 View Full Profile</span><a href=\"https://www.ssmrv.edu.in/academics/teaching_faculty/ms_shakeela_m_k/\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"ssmrv-dept-visit-btn\">🌐 Visit Website Page ↗</a></div><div class=\"ssmrv-dept-prof-meta\"><div>🎓 <b>Qualifications:</b> B.Com (Procedure & Practices of Taxation), M.Com (Finance, Bangalore University), Diploma in Fashion Designing (IIFT) • 11+ Years Teaching Experience (formerly at NMKRV College for Women)</div><div>🔬 <b>Specialisation:</b> Finance, Accounting, Taxation, HR and Management</div><div class=\"ssmrv-dept-prof-comm\">🛡️ <b>Role:</b> Cultural Committee Representative (B.Com)</div></div></div><div class=\"ssmrv-dept-profile-item\" data-profile-id=\"mrs-vidya-u-jambagi\" title=\"Click to view full profile of Mrs. Vidya U. Jambagi\"><div class=\"ssmrv-dept-prof-header\"><span class=\"ssmrv-dept-prof-name\">👤 Mrs. Vidya U. Jambagi</span></div><div class=\"ssmrv-faculty-badges\"><span class=\"ssmrv-badge-desig\">🎖️ Assistant Professor</span><span class=\"ssmrv-badge-dept\">🏛️ Commerce (B.Com)</span></div><div class=\"ssmrv-dept-prof-actions\"><span class=\"ssmrv-dept-prof-cta\">👤 View Full Profile</span><a href=\"https://www.ssmrv.edu.in/academics/teaching_faculty/mrs_vidya_u_jambagi/\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"ssmrv-dept-visit-btn\">🌐 Visit Website Page ↗</a></div><div class=\"ssmrv-dept-prof-meta\"><div>🎓 <b>Qualifications:</b> B.Com (PES College), M.Com (Bangalore University), M.Phil. (Dravidian University), KSET, PGDBA (2 Years) • 21+ Years Teaching & Research Experience</div><div>🔬 <b>Specialisation:</b> Accounting, Corporate Financial Reporting & Sustainability</div><div class=\"ssmrv-dept-prof-comm\">🛡️ <b>Role:</b> Internal Compliance / POSH Committee Representative (B.Com)</div></div></div><div class=\"ssmrv-dept-profile-item\" data-profile-id=\"ms-bharathi-n-s\" title=\"Click to view full profile of Dr. / Ms. Bharathi N.S.\"><div class=\"ssmrv-dept-prof-header\"><span class=\"ssmrv-dept-prof-name\">👤 Dr. / Ms. Bharathi N.S.</span></div><div class=\"ssmrv-faculty-badges\"><span class=\"ssmrv-badge-desig\">🎖️ Assistant Professor</span><span class=\"ssmrv-badge-dept\">🏛️ Commerce (B.Com)</span></div><div class=\"ssmrv-dept-prof-actions\"><span class=\"ssmrv-dept-prof-cta\">👤 View Full Profile</span><a href=\"https://www.ssmrv.edu.in/academics/teaching_faculty/ms_bharathi_n_s/\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"ssmrv-dept-visit-btn\">🌐 Visit Website Page ↗</a></div><div class=\"ssmrv-dept-prof-meta\"><div>🎓 <b>Qualifications:</b> B.Com (Bangalore University), M.Com (IGNOU), MBA (Alagappa University), PGDBIO (IGNOU), Ph.D. (Christ Deemed-to-be University) • 10+ Years Teaching & Research Experience</div><div>🔬 <b>Specialisation:</b> Marketing, Finance, Accountancy, Cognitive Psychology & Neuroscience</div><div class=\"ssmrv-dept-prof-comm\">🛡️ <b>Role:</b> Internal Cultural Committee SPOC (Tarangini) | Examination Committee (B.Com)</div></div></div><div class=\"ssmrv-dept-profile-item\" data-profile-id=\"dr-kanchan-g-rajput\" title=\"Click to view full profile of Dr. Kanchan G. Rajput\"><div class=\"ssmrv-dept-prof-header\"><span class=\"ssmrv-dept-prof-name\">👤 Dr. Kanchan G. Rajput</span></div><div class=\"ssmrv-faculty-badges\"><span class=\"ssmrv-badge-desig\">🎖️ Assistant Professor</span><span class=\"ssmrv-badge-dept\">🏛️ Commerce (B.Com)</span></div><div class=\"ssmrv-dept-prof-actions\"><span class=\"ssmrv-dept-prof-cta\">👤 View Full Profile</span><a href=\"https://www.ssmrv.edu.in/academics/teaching_faculty/dr_kanchan_g_rajput/\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"ssmrv-dept-visit-btn\">🌐 Visit Website Page ↗</a></div><div class=\"ssmrv-dept-prof-meta\"><div>🎓 <b>Qualifications:</b> B.Com, MBA (Finance), Ph.D. (ISBR Research Centre, University of Mysore) • 13+ Years Teaching & Research Experience</div><div>🔬 <b>Specialisation:</b> Domain of Finance, Microfinance, Financial Inclusion & Banking</div><div class=\"ssmrv-dept-prof-comm\">🛡️ <b>Role:</b> Commerce Research & Finance Forum</div></div></div><div class=\"ssmrv-dept-profile-item\" data-profile-id=\"dr-rajini-k-s\" title=\"Click to view full profile of Dr. Rajini K.S.\"><div class=\"ssmrv-dept-prof-header\"><span class=\"ssmrv-dept-prof-name\">👤 Dr. Rajini K.S.</span></div><div class=\"ssmrv-faculty-badges\"><span class=\"ssmrv-badge-desig\">🎖️ Assistant Professor</span><span class=\"ssmrv-badge-dept\">🏛️ Commerce (B.Com)</span></div><div class=\"ssmrv-dept-prof-actions\"><span class=\"ssmrv-dept-prof-cta\">👤 View Full Profile</span><a href=\"https://www.ssmrv.edu.in/academics/teaching_faculty/dr_rajini_k_s/\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"ssmrv-dept-visit-btn\">🌐 Visit Website Page ↗</a></div><div class=\"ssmrv-dept-prof-meta\"><div>🎓 <b>Qualifications:</b> B.A. (Mangalore University), MBA (Pondicherry University), Ph.D. (Jain University) • 12+ Years Teaching Experience in B.Com Department</div><div>🔬 <b>Specialisation:</b> Human Resource Management, ESG & Green Marketing Strategies</div><div class=\"ssmrv-dept-prof-comm\">🛡️ <b>Role:</b> B.Com Student Welfare & HRM Mentor</div></div></div><div class=\"ssmrv-dept-profile-item\" data-profile-id=\"dr-shashikala-c-s\" title=\"Click to view full profile of Dr. Shashikala C.S.\"><div class=\"ssmrv-dept-prof-header\"><span class=\"ssmrv-dept-prof-name\">👤 Dr. Shashikala C.S.</span></div><div class=\"ssmrv-faculty-badges\"><span class=\"ssmrv-badge-desig\">🎖️ Assistant Professor</span><span class=\"ssmrv-badge-dept\">🏛️ Commerce (B.Com)</span></div><div class=\"ssmrv-dept-prof-actions\"><span class=\"ssmrv-dept-prof-cta\">👤 View Full Profile</span><a href=\"https://www.ssmrv.edu.in/academics/teaching_faculty/dr_shashikala_c_s/\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"ssmrv-dept-visit-btn\">🌐 Visit Website Page ↗</a></div><div class=\"ssmrv-dept-prof-meta\"><div>🎓 <b>Qualifications:</b> B.Com (Bangalore University), M.Com (Bangalore University), Ph.D. in Commerce (Tumkur University) • 8.7+ Years Teaching & Research Experience</div><div>🔬 <b>Specialisation:</b> Accounting and Taxation, Marketing, Strategic Management & Consumer Behaviour</div><div class=\"ssmrv-dept-prof-comm\">🛡️ <b>Role:</b> IPR Cell Representative (B.Com)</div></div></div><div class=\"ssmrv-dept-profile-item\" data-profile-id=\"ms-bhargavi-iyer-b-s\" title=\"Click to view full profile of Mrs. Bhargavi Iyer B.S.\"><div class=\"ssmrv-dept-prof-header\"><span class=\"ssmrv-dept-prof-name\">👤 Mrs. Bhargavi Iyer B.S.</span></div><div class=\"ssmrv-faculty-badges\"><span class=\"ssmrv-badge-desig\">🎖️ Assistant Professor</span><span class=\"ssmrv-badge-dept\">🏛️ Commerce (B.Com)</span></div><div class=\"ssmrv-dept-prof-actions\"><span class=\"ssmrv-dept-prof-cta\">👤 View Full Profile</span><a href=\"https://www.ssmrv.edu.in/academics/teaching_faculty/ms_bhargavi_iyer_b_s/\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"ssmrv-dept-visit-btn\">🌐 Visit Website Page ↗</a></div><div class=\"ssmrv-dept-prof-meta\"><div>🎓 <b>Qualifications:</b> B.Com (Bangalore University), M.Com (Bangalore University) • 4.5+ Years Teaching Experience | In-Charge of RV-Skills</div><div>🔬 <b>Specialisation:</b> Accounting and Taxation</div><div class=\"ssmrv-dept-prof-comm\">🛡️ <b>Role:</b> In-Charge — RV-Skills | Member — IIC, Taxation Club & Youth Red Cross (YRC)</div></div></div><div class=\"ssmrv-dept-profile-item\" data-profile-id=\"vaishnavi-r\" title=\"Click to view full profile of Ms. Vaishnavi R\"><div class=\"ssmrv-dept-prof-header\"><span class=\"ssmrv-dept-prof-name\">👤 Ms. Vaishnavi R</span></div><div class=\"ssmrv-faculty-badges\"><span class=\"ssmrv-badge-desig\">🎖️ Assistant Professor</span><span class=\"ssmrv-badge-dept\">🏛️ Commerce (B.Com)</span></div><div class=\"ssmrv-dept-prof-actions\"><span class=\"ssmrv-dept-prof-cta\">👤 View Full Profile</span><a href=\"https://www.ssmrv.edu.in/academics/teaching_faculty/vaishnavi_r/\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"ssmrv-dept-visit-btn\">🌐 Visit Website Page ↗</a></div><div class=\"ssmrv-dept-prof-meta\"><div>🎓 <b>Qualifications:</b> B.Com with Computer Applications (Madurai Kamaraj University), M.Com with Computer Applications (MKU), M.A. Economics (IGNOU), UGC-NET, KSET • 9.5+ Years Teaching Experience</div><div>🔬 <b>Specialisation:</b> Accounting, Economics & Computer Applications in Commerce</div><div class=\"ssmrv-dept-prof-comm\">🛡️ <b>Role:</b> Commerce Academic & Competitive Exam Mentor</div></div></div><div class=\"ssmrv-dept-profile-item\" data-profile-id=\"prakasha-v\" title=\"Click to view full profile of Mr. Prakasha V (Dr. Prakasha V)\"><div class=\"ssmrv-dept-prof-header\"><span class=\"ssmrv-dept-prof-name\">👤 Mr. Prakasha V (Dr. Prakasha V)</span></div><div class=\"ssmrv-faculty-badges\"><span class=\"ssmrv-badge-desig\">🎖️ Assistant Professor</span><span class=\"ssmrv-badge-dept\">🏛️ Commerce (B.Com)</span></div><div class=\"ssmrv-dept-prof-actions\"><span class=\"ssmrv-dept-prof-cta\">👤 View Full Profile</span><a href=\"https://www.ssmrv.edu.in/academics/teaching_faculty/prakasha_v/\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"ssmrv-dept-visit-btn\">🌐 Visit Website Page ↗</a></div><div class=\"ssmrv-dept-prof-meta\"><div>🎓 <b>Qualifications:</b> B.Com (Bangalore University), MBA (Bangalore University), M.Com (KSOU), PGDFM (KSOU), Ph.D. (Kalinga University) • 16+ Years Teaching Experience in Commerce & Management</div><div>🔬 <b>Specialisation:</b> Finance & Marketing, Accounts</div><div class=\"ssmrv-dept-prof-comm\">🛡️ <b>Role:</b> Cultural Committee (B.Com) | Examination Committee (B.Com)</div></div></div><div class=\"ssmrv-dept-profile-item\" data-profile-id=\"ume-salma\" title=\"Click to view full profile of Mrs. Ume Salma\"><div class=\"ssmrv-dept-prof-header\"><span class=\"ssmrv-dept-prof-name\">👤 Mrs. Ume Salma</span></div><div class=\"ssmrv-faculty-badges\"><span class=\"ssmrv-badge-desig\">🎖️ Assistant Professor</span><span class=\"ssmrv-badge-dept\">🏛️ Commerce (B.Com)</span></div><div class=\"ssmrv-dept-prof-actions\"><span class=\"ssmrv-dept-prof-cta\">👤 View Full Profile</span><a href=\"https://www.ssmrv.edu.in/academics/teaching_faculty/ume_salma/\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"ssmrv-dept-visit-btn\">🌐 Visit Website Page ↗</a></div><div class=\"ssmrv-dept-prof-meta\"><div>🎓 <b>Qualifications:</b> MBA (Bharathiar University), M.Phil (Dravidian University), M.Com (University of Mysore), PGDIB (Central University Bangalore) • 17+ Years Teaching Experience at SSMRV College (Since 2008)</div><div>🔬 <b>Specialisation:</b> Digital Marketing, Commerce and Management</div><div class=\"ssmrv-dept-prof-comm\">🛡️ <b>Role:</b> Placement & Career Guidance Cell Representative (B.Com)</div></div></div><div class=\"ssmrv-dept-profile-item\" data-profile-id=\"nandini-j\" title=\"Click to view full profile of Ms. Nandini J\"><div class=\"ssmrv-dept-prof-header\"><span class=\"ssmrv-dept-prof-name\">👤 Ms. Nandini J</span></div><div class=\"ssmrv-faculty-badges\"><span class=\"ssmrv-badge-desig\">🎖️ Assistant Professor</span><span class=\"ssmrv-badge-dept\">🏛️ Commerce (B.Com)</span></div><div class=\"ssmrv-dept-prof-actions\"><span class=\"ssmrv-dept-prof-cta\">👤 View Full Profile</span><a href=\"https://www.ssmrv.edu.in/academics/teaching_faculty/nandini_j/\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"ssmrv-dept-visit-btn\">🌐 Visit Website Page ↗</a></div><div class=\"ssmrv-dept-prof-meta\"><div>🎓 <b>Qualifications:</b> M.Com, Academic & Statutory Cell Coordinator • Commerce Teaching & Institutional Statutory Leadership</div><div>🔬 <b>Specialisation:</b> Commerce, Business Ethics & Student Welfare</div><div class=\"ssmrv-dept-prof-comm\">🛡️ <b>Role:</b> College SPOC — Anti-Ragging Cell, Human Rights Protection Cell, Anti-Drug Cell & Discipline Committee</div></div></div><div class=\"ssmrv-dept-profile-item\" data-profile-id=\"sharavana-m\" title=\"Click to view full profile of Mr. Sharavana M\"><div class=\"ssmrv-dept-prof-header\"><span class=\"ssmrv-dept-prof-name\">👤 Mr. Sharavana M</span></div><div class=\"ssmrv-faculty-badges\"><span class=\"ssmrv-badge-desig\">🎖️ Assistant Professor</span><span class=\"ssmrv-badge-dept\">🏛️ Commerce (B.Com)</span></div><div class=\"ssmrv-dept-prof-actions\"><span class=\"ssmrv-dept-prof-cta\">👤 View Full Profile</span><a href=\"https://www.ssmrv.edu.in/academics/teaching_faculty/sharavana_m/\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"ssmrv-dept-visit-btn\">🌐 Visit Website Page ↗</a></div><div class=\"ssmrv-dept-prof-meta\"><div>🎓 <b>Qualifications:</b> M.Com, Statutory Cell Convener • Commerce Teaching & Student Support Systems</div><div>🔬 <b>Specialisation:</b> Commerce, Accounting & Inclusive Education</div><div class=\"ssmrv-dept-prof-comm\">🛡️ <b>Role:</b> College SPOC & Convener — SC/ST Cell (UGC / NAAC)</div></div></div><div class=\"ssmrv-dept-profile-item\" data-profile-id=\"dr-mohan-rao-c-n\" title=\"Click to view full profile of Dr. Mohan Rao C.N.\"><div class=\"ssmrv-dept-prof-header\"><span class=\"ssmrv-dept-prof-name\">👤 Dr. Mohan Rao C.N.</span></div><div class=\"ssmrv-faculty-badges\"><span class=\"ssmrv-badge-desig\">🎖️ Assistant Professor & Chief Superintendent of Examinations</span><span class=\"ssmrv-badge-dept\">🏛️ Commerce (B.Com)</span></div><div class=\"ssmrv-dept-prof-actions\"><span class=\"ssmrv-dept-prof-cta\">👤 View Full Profile</span><a href=\"https://www.ssmrv.edu.in/academics/teaching_faculty/\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"ssmrv-dept-visit-btn\">🌐 Visit Website Page ↗</a></div><div class=\"ssmrv-dept-prof-meta\"><div>🎓 <b>Qualifications:</b> M.Com, Ph.D. • Senior Academician & Examination Controller</div><div>🔬 <b>Specialisation:</b> Commerce, Corporate Accounting & University Examinations</div><div class=\"ssmrv-dept-prof-comm\">🛡️ <b>Role:</b> College SPOC & Convener — Examination Committee</div></div></div><div class=\"ssmrv-dept-profile-item\" data-profile-id=\"vedamurthy-y-n\" title=\"Click to view full profile of Dr. / Mr. Vedamurthy Y N\"><div class=\"ssmrv-dept-prof-header\"><span class=\"ssmrv-dept-prof-name\">👤 Dr. / Mr. Vedamurthy Y N</span></div><div class=\"ssmrv-faculty-badges\"><span class=\"ssmrv-badge-desig\">🎖️ Assistant Professor</span><span class=\"ssmrv-badge-dept\">🏛️ Commerce (B.Com)</span></div><div class=\"ssmrv-dept-prof-actions\"><span class=\"ssmrv-dept-prof-cta\">👤 View Full Profile</span><a href=\"https://www.ssmrv.edu.in/academics/teaching_faculty/vedamurthy_y_n/\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"ssmrv-dept-visit-btn\">🌐 Visit Website Page ↗</a></div><div class=\"ssmrv-dept-prof-meta\"><div>🎓 <b>Qualifications:</b> M.Com, Ph.D. • Academic Teaching & Internal Compliance Member</div><div>🔬 <b>Specialisation:</b> Commerce & Academic Governance</div><div class=\"ssmrv-dept-prof-comm\">🛡️ <b>Role:</b> Internal Compliance (POSH) Committee Member</div></div></div></div>",
      "buttons": [
          {
              "text": "👤 Dr. Malini N. (HOD)",
              "action": "profile:dr-malini-n"
          },
          {
              "text": "👤 Ms. Samskruthi B. L. (HOD)",
              "action": "profile:ms-samskruthi-b-l"
          },
          {
              "text": "👤 Mr. Gokul C. (Coord.)",
              "action": "profile:mr-gokul-c"
          },
          {
              "text": "👤 Dr. Vinaya T. (Coord.)",
              "action": "profile:dr-vinaya-t"
          },
          {
              "text": "👤 Ms. Mokshamala U.",
              "action": "profile:ms-mokshamala-u"
          },
          {
              "text": "👤 Mr. Yallappa M.",
              "action": "profile:mr-yallappa-m"
          },
          {
              "text": "👤 Ms. M. Roopa Latha",
              "action": "profile:ms-m-roopa-latha"
          },
          {
              "text": "👤 Mr. Shivakumara N.",
              "action": "profile:mr-shivakumara-n"
          },
          {
              "text": "👤 Ms. Deepika L.",
              "action": "profile:ms-deepika-l"
          },
          {
              "text": "👤 Ms. Shakeela M.K.",
              "action": "profile:ms-shakeela-m-k"
          },
          {
              "text": "👤 Mrs. Vidya U. Jambagi",
              "action": "profile:mrs-vidya-u-jambagi"
          },
          {
              "text": "👤 Dr. / Ms. Bharathi N.S.",
              "action": "profile:ms-bharathi-n-s"
          },
          {
              "text": "👤 Dr. Kanchan G. Rajput",
              "action": "profile:dr-kanchan-g-rajput"
          },
          {
              "text": "👤 Dr. Rajini K.S.",
              "action": "profile:dr-rajini-k-s"
          },
          {
              "text": "👤 Dr. Shashikala C.S.",
              "action": "profile:dr-shashikala-c-s"
          },
          {
              "text": "👤 Mrs. Bhargavi Iyer B.S.",
              "action": "profile:ms-bhargavi-iyer-b-s"
          },
          {
              "text": "👤 Ms. Vaishnavi R",
              "action": "profile:vaishnavi-r"
          },
          {
              "text": "👤 Mr. Prakasha V (Dr. Prakasha V)",
              "action": "profile:prakasha-v"
          },
          {
              "text": "👤 Mrs. Ume Salma",
              "action": "profile:ume-salma"
          },
          {
              "text": "👤 Ms. Nandini J",
              "action": "profile:nandini-j"
          },
          {
              "text": "👤 Mr. Sharavana M",
              "action": "profile:sharavana-m"
          },
          {
              "text": "👤 Dr. Mohan Rao C.N.",
              "action": "profile:dr-mohan-rao-c-n"
          },
          {
              "text": "👤 Dr. / Mr. Vedamurthy Y N",
              "action": "profile:vedamurthy-y-n"
          },
          {
              "text": "🌐 Visit Department Faculty Webpage ↗",
              "url": "https://www.ssmrv.edu.in/academics/teaching_faculty/"
          },
          {
              "text": "📊 B.Com Course Details",
              "action": "flow:bcom_details"
          },
          {
              "text": "👨‍🏫 All Departments (92)",
              "action": "flow:faculty"
          }
      ]
  },

  faculty_bba: {
      "id": "faculty_bba",
      "pageUrl": "https://www.ssmrv.edu.in/academics/teaching_faculty/",
      "message": "<b>📈 Department of Business Administration (BBA &amp; Aviation) (11 Profiles)</b><br><span style=\"font-size:11px;color:#475569;\">Click <b>👤 View Full Profile</b> or <b>🌐 Visit Website Page ↗</b> on any faculty card:</span><div class=\"ssmrv-dept-profile-list\"><div class=\"ssmrv-dept-profile-item\" data-profile-id=\"dr-revathy-shivashankaran\" title=\"Click to view full profile of Dr. Revathy Shivashankaran\"><div class=\"ssmrv-dept-prof-header\"><span class=\"ssmrv-dept-prof-name\">👤 Dr. Revathy Shivashankaran</span></div><div class=\"ssmrv-faculty-badges\"><span class=\"ssmrv-badge-desig\">🎖️ Associate Professor and HOD – BBA</span><span class=\"ssmrv-badge-dept\">🏛️ Business Administration (BBA & Aviation)</span></div><div class=\"ssmrv-dept-prof-actions\"><span class=\"ssmrv-dept-prof-cta\">👤 View Full Profile</span><a href=\"https://www.ssmrv.edu.in/academics/teaching_faculty/dr_revathy_shivashankaran/\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"ssmrv-dept-visit-btn\">🌐 Visit Website Page ↗</a></div><div class=\"ssmrv-dept-prof-meta\"><div>🎓 <b>Qualifications:</b> B.Sc (Mathematics, University of Madras), MBA (University of Madras), M.Com (IGNOU), Ph.D. (Mother Teresa Women's University, Kodaikanal) • 25+ Years Combined Experience (16.5 Years Academia + 8.5 Years Corporate)</div><div>🔬 <b>Specialisation:</b> Organisational Behaviour & HRM, HR Analytics, General Management</div><div class=\"ssmrv-dept-prof-comm\">🛡️ <b>Role:</b> Associate Professor & HOD — BBA | College Chairperson — Internal Compliance (POSH) | Grievance Redressal Cell (BBA)</div></div></div><div class=\"ssmrv-dept-profile-item\" data-profile-id=\"mr-jagadish-a\" title=\"Click to view full profile of Mr. Jagadish A.\"><div class=\"ssmrv-dept-prof-header\"><span class=\"ssmrv-dept-prof-name\">👤 Mr. Jagadish A.</span></div><div class=\"ssmrv-faculty-badges\"><span class=\"ssmrv-badge-desig\">🎖️ Assistant Professor and HOD – BBA Aviation Management</span><span class=\"ssmrv-badge-dept\">🏛️ Business Administration (BBA & Aviation)</span></div><div class=\"ssmrv-dept-prof-actions\"><span class=\"ssmrv-dept-prof-cta\">👤 View Full Profile</span><a href=\"https://www.ssmrv.edu.in/academics/teaching_faculty/mr_jagadish_a/\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"ssmrv-dept-visit-btn\">🌐 Visit Website Page ↗</a></div><div class=\"ssmrv-dept-prof-meta\"><div>🎓 <b>Qualifications:</b> BCA (Bangalore University), MBA (Bangalore University), Ph.D. (Pursuing at Jain University) • 16+ Years Teaching Experience + Corporate Experience at Bharti Infotel & ICICI Bank</div><div>🔬 <b>Specialisation:</b> Marketing, Information Technology, Consumer Behaviour Analytics, E-Commerce & Aviation Management</div><div class=\"ssmrv-dept-prof-comm\">🛡️ <b>Role:</b> HOD — BBA Aviation Management | IQAC Representative (BBA) | Internal Compliance POSH Member (BBA)</div></div></div><div class=\"ssmrv-dept-profile-item\" data-profile-id=\"avinash-k-v\" title=\"Click to view full profile of Mr. Avinash K.V.\"><div class=\"ssmrv-dept-prof-header\"><span class=\"ssmrv-dept-prof-name\">👤 Mr. Avinash K.V.</span></div><div class=\"ssmrv-faculty-badges\"><span class=\"ssmrv-badge-desig\">🎖️ Assistant Professor & Associate NCC Officer (ANO)</span><span class=\"ssmrv-badge-dept\">🏛️ Business Administration (BBA & Aviation)</span></div><div class=\"ssmrv-dept-prof-actions\"><span class=\"ssmrv-dept-prof-cta\">👤 View Full Profile</span><a href=\"https://www.ssmrv.edu.in/academics/teaching_faculty/avinash_k_v/\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"ssmrv-dept-visit-btn\">🌐 Visit Website Page ↗</a></div><div class=\"ssmrv-dept-prof-meta\"><div>🎓 <b>Qualifications:</b> B.Com, M.Com, MBA • Management Educator & Commissioned Associate NCC Officer</div><div>🔬 <b>Specialisation:</b> Accounting and Taxation, Human Resources Management & Youth Leadership</div><div class=\"ssmrv-dept-prof-comm\">🛡️ <b>Role:</b> College SPOC — NCC Unit (Associate NCC Officer)</div></div></div><div class=\"ssmrv-dept-profile-item\" data-profile-id=\"dr-shruti-khemashetty\" title=\"Click to view full profile of Dr. Shruti Khemashetty\"><div class=\"ssmrv-dept-prof-header\"><span class=\"ssmrv-dept-prof-name\">👤 Dr. Shruti Khemashetty</span></div><div class=\"ssmrv-faculty-badges\"><span class=\"ssmrv-badge-desig\">🎖️ Assistant Professor</span><span class=\"ssmrv-badge-dept\">🏛️ Business Administration (BBA & Aviation)</span></div><div class=\"ssmrv-dept-prof-actions\"><span class=\"ssmrv-dept-prof-cta\">👤 View Full Profile</span><a href=\"https://www.ssmrv.edu.in/academics/teaching_faculty/dr_shruti_khemashetty/\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"ssmrv-dept-visit-btn\">🌐 Visit Website Page ↗</a></div><div class=\"ssmrv-dept-prof-meta\"><div>🎓 <b>Qualifications:</b> B.Sc, MBA (Dodappa Appa College), Ph.D. (Dayananda Sagar University) • 15+ Years Academic Experience in Management</div><div>🔬 <b>Specialisation:</b> Human Resource Management and Marketing</div><div class=\"ssmrv-dept-prof-comm\">🛡️ <b>Role:</b> Innovation Cell Representative (BBA)</div></div></div><div class=\"ssmrv-dept-profile-item\" data-profile-id=\"dr-sushma-c\" title=\"Click to view full profile of Dr. Sushma C.\"><div class=\"ssmrv-dept-prof-header\"><span class=\"ssmrv-dept-prof-name\">👤 Dr. Sushma C.</span></div><div class=\"ssmrv-faculty-badges\"><span class=\"ssmrv-badge-desig\">🎖️ Assistant Professor</span><span class=\"ssmrv-badge-dept\">🏛️ Business Administration (BBA & Aviation)</span></div><div class=\"ssmrv-dept-prof-actions\"><span class=\"ssmrv-dept-prof-cta\">👤 View Full Profile</span><a href=\"https://www.ssmrv.edu.in/academics/teaching_faculty/dr_sushma_c/\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"ssmrv-dept-visit-btn\">🌐 Visit Website Page ↗</a></div><div class=\"ssmrv-dept-prof-meta\"><div>🎓 <b>Qualifications:</b> BBM (Bangalore University), MBA (Bangalore University), Ph.D. in Management (Bangalore University) • 13+ Years Academic & Industrial Experience</div><div>🔬 <b>Specialisation:</b> Accounts, Finance, Entrepreneurship & Industrial Dynamics</div><div class=\"ssmrv-dept-prof-comm\">🛡️ <b>Role:</b> IPR Cell Representative (BBA)</div></div></div><div class=\"ssmrv-dept-profile-item\" data-profile-id=\"ms-m-rajatha\" title=\"Click to view full profile of Mrs. Rajatha M\"><div class=\"ssmrv-dept-prof-header\"><span class=\"ssmrv-dept-prof-name\">👤 Mrs. Rajatha M</span></div><div class=\"ssmrv-faculty-badges\"><span class=\"ssmrv-badge-desig\">🎖️ Assistant Professor</span><span class=\"ssmrv-badge-dept\">🏛️ Business Administration (BBA & Aviation)</span></div><div class=\"ssmrv-dept-prof-actions\"><span class=\"ssmrv-dept-prof-cta\">👤 View Full Profile</span><a href=\"https://www.ssmrv.edu.in/academics/teaching_faculty/ms_m_rajatha/\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"ssmrv-dept-visit-btn\">🌐 Visit Website Page ↗</a></div><div class=\"ssmrv-dept-prof-meta\"><div>🎓 <b>Qualifications:</b> B.Com (Bangalore University), M.Com (Kuvempu University), MBA (ICFAI University) • 14+ Years Teaching Experience in BBA Department</div><div>🔬 <b>Specialisation:</b> Finance and Marketing</div><div class=\"ssmrv-dept-prof-comm\">🛡️ <b>Role:</b> Alumni Association Representative (BBA)</div></div></div><div class=\"ssmrv-dept-profile-item\" data-profile-id=\"mr-santosh-d-bendigeri\" title=\"Click to view full profile of Mr. Santosh D. Bendigeri\"><div class=\"ssmrv-dept-prof-header\"><span class=\"ssmrv-dept-prof-name\">👤 Mr. Santosh D. Bendigeri</span></div><div class=\"ssmrv-faculty-badges\"><span class=\"ssmrv-badge-desig\">🎖️ Assistant Professor</span><span class=\"ssmrv-badge-dept\">🏛️ Business Administration (BBA & Aviation)</span></div><div class=\"ssmrv-dept-prof-actions\"><span class=\"ssmrv-dept-prof-cta\">👤 View Full Profile</span><a href=\"https://www.ssmrv.edu.in/academics/teaching_faculty/mr_santosh_d_bendigeri/\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"ssmrv-dept-visit-btn\">🌐 Visit Website Page ↗</a></div><div class=\"ssmrv-dept-prof-meta\"><div>🎓 <b>Qualifications:</b> B.Com (Dharwad University), M.Com (Rajasthan University), MBA (Bangalore University), Ph.D. (Pursuing at Annamalai University) • 10+ Years Teaching Experience + Corporate Experience</div><div>🔬 <b>Specialisation:</b> Finance, Accounting and Taxation</div><div class=\"ssmrv-dept-prof-comm\">🛡️ <b>Role:</b> Sports Committee Representative (BBA)</div></div></div><div class=\"ssmrv-dept-profile-item\" data-profile-id=\"mrs-pavana-r-kulkarni\" title=\"Click to view full profile of Mrs. Pavana R. Kulkarni\"><div class=\"ssmrv-dept-prof-header\"><span class=\"ssmrv-dept-prof-name\">👤 Mrs. Pavana R. Kulkarni</span></div><div class=\"ssmrv-faculty-badges\"><span class=\"ssmrv-badge-desig\">🎖️ Assistant Professor</span><span class=\"ssmrv-badge-dept\">🏛️ Business Administration (BBA & Aviation)</span></div><div class=\"ssmrv-dept-prof-actions\"><span class=\"ssmrv-dept-prof-cta\">👤 View Full Profile</span><a href=\"https://www.ssmrv.edu.in/academics/teaching_faculty/mrs_pavana_r_kulkarni/\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"ssmrv-dept-visit-btn\">🌐 Visit Website Page ↗</a></div><div class=\"ssmrv-dept-prof-meta\"><div>🎓 <b>Qualifications:</b> B.Com, MBA (Finance and HR, Bangalore University), M.Com (University of Mysore) • 9+ Years Undergraduate Teaching Experience (at SSMRV since 2019)</div><div>🔬 <b>Specialisation:</b> Finance and Human Resource Management</div><div class=\"ssmrv-dept-prof-comm\">🛡️ <b>Role:</b> BBA Academic & Student Mentoring Cell</div></div></div><div class=\"ssmrv-dept-profile-item\" data-profile-id=\"mrs-lavanya-b-k\" title=\"Click to view full profile of Ms. Lavanya B.K.\"><div class=\"ssmrv-dept-prof-header\"><span class=\"ssmrv-dept-prof-name\">👤 Ms. Lavanya B.K.</span></div><div class=\"ssmrv-faculty-badges\"><span class=\"ssmrv-badge-desig\">🎖️ Assistant Professor</span><span class=\"ssmrv-badge-dept\">🏛️ Business Administration (BBA & Aviation)</span></div><div class=\"ssmrv-dept-prof-actions\"><span class=\"ssmrv-dept-prof-cta\">👤 View Full Profile</span><a href=\"https://www.ssmrv.edu.in/academics/teaching_faculty/mrs_lavanya_b_k/\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"ssmrv-dept-visit-btn\">🌐 Visit Website Page ↗</a></div><div class=\"ssmrv-dept-prof-meta\"><div>🎓 <b>Qualifications:</b> B.Com (NMKRV College for Women), M.Com (Bangalore University), KSET, Ph.D. Candidate (Jain University) • 9+ Years Academic & Research Experience</div><div>🔬 <b>Specialisation:</b> Accounting and Taxation</div><div class=\"ssmrv-dept-prof-comm\">🛡️ <b>Role:</b> OBC Cell Coordinator (BBA) | Cultural Committee (BBA) | Placement Cell (BBA)</div></div></div><div class=\"ssmrv-dept-profile-item\" data-profile-id=\"mr-arunkumar-r\" title=\"Click to view full profile of Mr. Arun Kumar R.\"><div class=\"ssmrv-dept-prof-header\"><span class=\"ssmrv-dept-prof-name\">👤 Mr. Arun Kumar R.</span></div><div class=\"ssmrv-faculty-badges\"><span class=\"ssmrv-badge-desig\">🎖️ Assistant Professor</span><span class=\"ssmrv-badge-dept\">🏛️ Business Administration (BBA & Aviation)</span></div><div class=\"ssmrv-dept-prof-actions\"><span class=\"ssmrv-dept-prof-cta\">👤 View Full Profile</span><a href=\"https://www.ssmrv.edu.in/academics/teaching_faculty/mr_arunkumar_r/\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"ssmrv-dept-visit-btn\">🌐 Visit Website Page ↗</a></div><div class=\"ssmrv-dept-prof-meta\"><div>🎓 <b>Qualifications:</b> BBM (Marketing), MBA (Finance and HR, Anna University of Technology) • Experienced Commerce & Management Educator</div><div>🔬 <b>Specialisation:</b> Finance and Human Resources</div><div class=\"ssmrv-dept-prof-comm\">🛡️ <b>Role:</b> BBA Curriculum & Authorship Cell</div></div></div><div class=\"ssmrv-dept-profile-item\" data-profile-id=\"ms-neha-banu\" title=\"Click to view full profile of Ms. Neha Banu\"><div class=\"ssmrv-dept-prof-header\"><span class=\"ssmrv-dept-prof-name\">👤 Ms. Neha Banu</span></div><div class=\"ssmrv-faculty-badges\"><span class=\"ssmrv-badge-desig\">🎖️ Assistant Professor</span><span class=\"ssmrv-badge-dept\">🏛️ Business Administration (BBA & Aviation)</span></div><div class=\"ssmrv-dept-prof-actions\"><span class=\"ssmrv-dept-prof-cta\">👤 View Full Profile</span><a href=\"https://www.ssmrv.edu.in/academics/teaching_faculty/ms_neha_banu/\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"ssmrv-dept-visit-btn\">🌐 Visit Website Page ↗</a></div><div class=\"ssmrv-dept-prof-meta\"><div>🎓 <b>Qualifications:</b> B.Com (Bangalore University), M.Com (Bangalore University), Ph.D. (Enrolled, Jain Deemed-to-be University) • 6.5+ Years Academic & Research Experience</div><div>🔬 <b>Specialisation:</b> Finance and Banking</div><div class=\"ssmrv-dept-prof-comm\">🛡️ <b>Role:</b> Entrepreneurship Cell Representative (BBA) | Examination Committee (BBA)</div></div></div></div>",
      "buttons": [
          {
              "text": "👤 Dr. Revathy Shivashankaran (HOD)",
              "action": "profile:dr-revathy-shivashankaran"
          },
          {
              "text": "👤 Mr. Jagadish A. (HOD)",
              "action": "profile:mr-jagadish-a"
          },
          {
              "text": "👤 Mr. Avinash K.V.",
              "action": "profile:avinash-k-v"
          },
          {
              "text": "👤 Dr. Shruti Khemashetty",
              "action": "profile:dr-shruti-khemashetty"
          },
          {
              "text": "👤 Dr. Sushma C.",
              "action": "profile:dr-sushma-c"
          },
          {
              "text": "👤 Mrs. Rajatha M",
              "action": "profile:ms-m-rajatha"
          },
          {
              "text": "👤 Mr. Santosh D. Bendigeri",
              "action": "profile:mr-santosh-d-bendigeri"
          },
          {
              "text": "👤 Mrs. Pavana R. Kulkarni",
              "action": "profile:mrs-pavana-r-kulkarni"
          },
          {
              "text": "👤 Ms. Lavanya B.K.",
              "action": "profile:mrs-lavanya-b-k"
          },
          {
              "text": "👤 Mr. Arun Kumar R.",
              "action": "profile:mr-arunkumar-r"
          },
          {
              "text": "👤 Ms. Neha Banu",
              "action": "profile:ms-neha-banu"
          },
          {
              "text": "🌐 Visit Department Faculty Webpage ↗",
              "url": "https://www.ssmrv.edu.in/academics/teaching_faculty/"
          },
          {
              "text": "📈 BBA Honours Details",
              "action": "flow:bba_details"
          },
          {
              "text": "✈️ BBA Aviation Details",
              "action": "flow:aviation_details"
          },
          {
              "text": "👨‍🏫 All Departments (92)",
              "action": "flow:faculty"
          }
      ]
  },

  faculty_mcom: {
      "id": "faculty_mcom",
      "pageUrl": "https://www.ssmrv.edu.in/academics/teaching_faculty/",
      "message": "<b>🎓 Postgraduate Department of Commerce (M.Com) (3 Profiles)</b><br><span style=\"font-size:11px;color:#475569;\">Click <b>👤 View Full Profile</b> or <b>🌐 Visit Website Page ↗</b> on any faculty card:</span><div class=\"ssmrv-dept-profile-list\"><div class=\"ssmrv-dept-profile-item\" data-profile-id=\"dr-lavanya-balaji\" title=\"Click to view full profile of Dr. Lavanya Balaji\"><div class=\"ssmrv-dept-prof-header\"><span class=\"ssmrv-dept-prof-name\">👤 Dr. Lavanya Balaji</span></div><div class=\"ssmrv-faculty-badges\"><span class=\"ssmrv-badge-desig\">🎖️ Assistant Professor and Head of PG Department – M.Com</span><span class=\"ssmrv-badge-dept\">🏛️ Postgraduate Studies (M.Com)</span></div><div class=\"ssmrv-dept-prof-actions\"><span class=\"ssmrv-dept-prof-cta\">👤 View Full Profile</span><a href=\"https://www.ssmrv.edu.in/academics/teaching_faculty/dr_lavanya_balaji/\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"ssmrv-dept-visit-btn\">🌐 Visit Website Page ↗</a></div><div class=\"ssmrv-dept-prof-meta\"><div>🎓 <b>Qualifications:</b> B.Com (SDNB Vaishnav College for Women), MBA (Bharath Engineering College), Ph.D. (Bharath Institute of Higher Education and Research) • 21+ Years Academic & Postgraduate Leadership Experience</div><div>🔬 <b>Specialisation:</b> Finance and Banking, Accounting, Corporate Taxation</div><div class=\"ssmrv-dept-prof-comm\">🛡️ <b>Role:</b> Head of PG Department (M.Com) | IQAC, Grievance Redressal, Innovation, Alumni, Placement & Exam Committees (M.Com)</div></div></div><div class=\"ssmrv-dept-profile-item\" data-profile-id=\"dr-lalitha-b-s\" title=\"Click to view full profile of Dr. Lalitha B.S.\"><div class=\"ssmrv-dept-prof-header\"><span class=\"ssmrv-dept-prof-name\">👤 Dr. Lalitha B.S.</span></div><div class=\"ssmrv-faculty-badges\"><span class=\"ssmrv-badge-desig\">🎖️ Assistant Professor</span><span class=\"ssmrv-badge-dept\">🏛️ Postgraduate Studies (M.Com)</span></div><div class=\"ssmrv-dept-prof-actions\"><span class=\"ssmrv-dept-prof-cta\">👤 View Full Profile</span><a href=\"https://www.ssmrv.edu.in/academics/teaching_faculty/dr_lalitha_b_s/\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"ssmrv-dept-visit-btn\">🌐 Visit Website Page ↗</a></div><div class=\"ssmrv-dept-prof-meta\"><div>🎓 <b>Qualifications:</b> B.Com (Bangalore University), M.Com (Bangalore University), MBA (IGNOU), Ph.D. (University of Mysore) • 19+ Years Teaching Experience in Commerce & PG Studies</div><div>🔬 <b>Specialisation:</b> Accounting, Finance, Banking and Supply Chain Management</div><div class=\"ssmrv-dept-prof-comm\">🛡️ <b>Role:</b> Equal Opportunity Cell Representative (M.Com) | Entrepreneurship Cell (M.Com)</div></div></div><div class=\"ssmrv-dept-profile-item\" data-profile-id=\"mr-akshay-kumar-a-v\" title=\"Click to view full profile of Dr. / Mr. Akshay Kumar A.V.\"><div class=\"ssmrv-dept-prof-header\"><span class=\"ssmrv-dept-prof-name\">👤 Dr. / Mr. Akshay Kumar A.V.</span></div><div class=\"ssmrv-faculty-badges\"><span class=\"ssmrv-badge-desig\">🎖️ Assistant Professor</span><span class=\"ssmrv-badge-dept\">🏛️ Postgraduate Studies (M.Com)</span></div><div class=\"ssmrv-dept-prof-actions\"><span class=\"ssmrv-dept-prof-cta\">👤 View Full Profile</span><a href=\"https://www.ssmrv.edu.in/academics/teaching_faculty/mr_akshay_kumar_a_v/\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"ssmrv-dept-visit-btn\">🌐 Visit Website Page ↗</a></div><div class=\"ssmrv-dept-prof-meta\"><div>🎓 <b>Qualifications:</b> B.Com (Christ University), M.Com (Christ University), Ph.D. (Christ University) • 8+ Years Teaching & Research Experience</div><div>🔬 <b>Specialisation:</b> Accountancy, Taxation and Corporate Finance</div><div class=\"ssmrv-dept-prof-comm\">🛡️ <b>Role:</b> IPR Cell, Sports Committee, Cultural Committee & Discipline Committee Representative (M.Com)</div></div></div></div>",
      "buttons": [
          {
              "text": "👤 Dr. Lavanya Balaji (HOD)",
              "action": "profile:dr-lavanya-balaji"
          },
          {
              "text": "👤 Dr. Lalitha B.S.",
              "action": "profile:dr-lalitha-b-s"
          },
          {
              "text": "👤 Dr. / Mr. Akshay Kumar A.V.",
              "action": "profile:mr-akshay-kumar-a-v"
          },
          {
              "text": "🌐 Visit Department Faculty Webpage ↗",
              "url": "https://www.ssmrv.edu.in/academics/teaching_faculty/"
          },
          {
              "text": "🎓 M.Com Course Details",
              "action": "flow:mcom_details"
          },
          {
              "text": "👨‍🏫 All Departments (92)",
              "action": "flow:faculty"
          }
      ]
  },

  faculty_languages: {
      "id": "faculty_languages",
      "pageUrl": "https://www.ssmrv.edu.in/academics/teaching_faculty/",
      "message": "<b>🗣️ Department of Languages &amp; Humanities (10 Profiles)</b><br><span style=\"font-size:11px;color:#475569;\">Click <b>👤 View Full Profile</b> or <b>🌐 Visit Website Page ↗</b> on any faculty card:</span><div class=\"ssmrv-dept-profile-list\"><div class=\"ssmrv-dept-profile-item\" data-profile-id=\"dr-jyothi-n-hosurkar\" title=\"Click to view full profile of Dr. Jyothi N. Hosurkar\"><div class=\"ssmrv-dept-prof-header\"><span class=\"ssmrv-dept-prof-name\">👤 Dr. Jyothi N. Hosurkar</span></div><div class=\"ssmrv-faculty-badges\"><span class=\"ssmrv-badge-desig\">🎖️ Assistant Professor and HOD – Languages (Kannada)</span><span class=\"ssmrv-badge-dept\">🏛️ Languages & Humanities</span></div><div class=\"ssmrv-dept-prof-actions\"><span class=\"ssmrv-dept-prof-cta\">👤 View Full Profile</span><a href=\"https://www.ssmrv.edu.in/academics/teaching_faculty/dr_jyothi_n_hosurkar/\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"ssmrv-dept-visit-btn\">🌐 Visit Website Page ↗</a></div><div class=\"ssmrv-dept-prof-meta\"><div>🎓 <b>Qualifications:</b> B.A. (Karnataka University), M.A. in Kannada, M.A. in Folklore, Ph.D. (Karnataka University) • 13+ Years Teaching Experience in Kannada & Folklore</div><div>🔬 <b>Specialisation:</b> Kannada Literature, Kannada Folklore & Creative Writing</div><div class=\"ssmrv-dept-prof-comm\">🛡️ <b>Role:</b> Assistant Professor & HOD — Department of Languages & Humanities</div></div></div><div class=\"ssmrv-dept-profile-item\" data-profile-id=\"dr-prathima-vijay\" title=\"Click to view full profile of Dr. Prathima Vijay\"><div class=\"ssmrv-dept-prof-header\"><span class=\"ssmrv-dept-prof-name\">👤 Dr. Prathima Vijay</span></div><div class=\"ssmrv-faculty-badges\"><span class=\"ssmrv-badge-desig\">🎖️ Assistant Professor (Kannada)</span><span class=\"ssmrv-badge-dept\">🏛️ Languages & Humanities</span></div><div class=\"ssmrv-dept-prof-actions\"><span class=\"ssmrv-dept-prof-cta\">👤 View Full Profile</span><a href=\"https://www.ssmrv.edu.in/academics/teaching_faculty/dr_prathima_vijay/\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"ssmrv-dept-visit-btn\">🌐 Visit Website Page ↗</a></div><div class=\"ssmrv-dept-prof-meta\"><div>🎓 <b>Qualifications:</b> B.A. (Bangur Nagar Degree College), M.A. in Kannada (Karnataka University Dharwad), M.A. in Folklore (Karnataka University Dharwad), Ph.D. (Karnataka University Dharwad) • 10+ Years Teaching Experience in Kannada Literature</div><div>🔬 <b>Specialisation:</b> Kannada Literature, Folklore & Women's Literary Studies</div><div class=\"ssmrv-dept-prof-comm\">🛡️ <b>Role:</b> Internal Compliance (POSH) Committee Representative</div></div></div><div class=\"ssmrv-dept-profile-item\" data-profile-id=\"kavitha-h-s\" title=\"Click to view full profile of Dr. Kavitha H S\"><div class=\"ssmrv-dept-prof-header\"><span class=\"ssmrv-dept-prof-name\">👤 Dr. Kavitha H S</span></div><div class=\"ssmrv-faculty-badges\"><span class=\"ssmrv-badge-desig\">🎖️ Assistant Professor (Hindi)</span><span class=\"ssmrv-badge-dept\">🏛️ Languages & Humanities</span></div><div class=\"ssmrv-dept-prof-actions\"><span class=\"ssmrv-dept-prof-cta\">👤 View Full Profile</span><a href=\"https://www.ssmrv.edu.in/academics/teaching_faculty/kavitha_h_s/\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"ssmrv-dept-visit-btn\">🌐 Visit Website Page ↗</a></div><div class=\"ssmrv-dept-prof-meta\"><div>🎓 <b>Qualifications:</b> Postgraduate & Doctorate in Hindi (Dakshin Bharat Hindi Prachar Sabha) • 17+ Years Teaching Experience in Hindi Literature</div><div>🔬 <b>Specialisation:</b> Hindi Literature, Language Pedagogy & Translation</div><div class=\"ssmrv-dept-prof-comm\">🛡️ <b>Role:</b> Discipline Committee Representative</div></div></div><div class=\"ssmrv-dept-profile-item\" data-profile-id=\"ramamishra-yashaswi-m\" title=\"Click to view full profile of Mr. Ramamishra Yashaswi M\"><div class=\"ssmrv-dept-prof-header\"><span class=\"ssmrv-dept-prof-name\">👤 Mr. Ramamishra Yashaswi M</span></div><div class=\"ssmrv-faculty-badges\"><span class=\"ssmrv-badge-desig\">🎖️ Assistant Professor (Sanskrit)</span><span class=\"ssmrv-badge-dept\">🏛️ Languages & Humanities</span></div><div class=\"ssmrv-dept-prof-actions\"><span class=\"ssmrv-dept-prof-cta\">👤 View Full Profile</span><a href=\"https://www.ssmrv.edu.in/academics/teaching_faculty/ramamishra_yashaswi_m/\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"ssmrv-dept-visit-btn\">🌐 Visit Website Page ↗</a></div><div class=\"ssmrv-dept-prof-meta\"><div>🎓 <b>Qualifications:</b> M.Phil (Rashtriya Sanskrit Vidyapeetha, Tirupati), B.Ed (Sringeri) • Sanskrit Scholar & Educator</div><div>🔬 <b>Specialisation:</b> Sanskrit Literature, Shastras & Indian Knowledge Systems</div><div class=\"ssmrv-dept-prof-comm\">🛡️ <b>Role:</b> Examination Committee Representative (Languages)</div></div></div><div class=\"ssmrv-dept-profile-item\" data-profile-id=\"dr-d-kannan\" title=\"Click to view full profile of Dr. D. Kannan\"><div class=\"ssmrv-dept-prof-header\"><span class=\"ssmrv-dept-prof-name\">👤 Dr. D. Kannan</span></div><div class=\"ssmrv-faculty-badges\"><span class=\"ssmrv-badge-desig\">🎖️ Assistant Professor (English)</span><span class=\"ssmrv-badge-dept\">🏛️ Languages & Humanities</span></div><div class=\"ssmrv-dept-prof-actions\"><span class=\"ssmrv-dept-prof-cta\">👤 View Full Profile</span><a href=\"https://www.ssmrv.edu.in/academics/teaching_faculty/dr_d_kannan/\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"ssmrv-dept-visit-btn\">🌐 Visit Website Page ↗</a></div><div class=\"ssmrv-dept-prof-meta\"><div>🎓 <b>Qualifications:</b> B.A. (English, Bharathiar University), M.A. (English, Annamalai University), Ph.D. (Presidency University) • Experienced English Literature Professor & UGC CARE Researcher</div><div>🔬 <b>Specialisation:</b> Gender Studies, Indian Literature, Cinematic Literature & Communicative English</div><div class=\"ssmrv-dept-prof-comm\">🛡️ <b>Role:</b> English Literary & Communication Forum</div></div></div><div class=\"ssmrv-dept-profile-item\" data-profile-id=\"ms-gayathri-kempurajan\" title=\"Click to view full profile of Mrs. Gayathri Kempurajan\"><div class=\"ssmrv-dept-prof-header\"><span class=\"ssmrv-dept-prof-name\">👤 Mrs. Gayathri Kempurajan</span></div><div class=\"ssmrv-faculty-badges\"><span class=\"ssmrv-badge-desig\">🎖️ Assistant Professor (English)</span><span class=\"ssmrv-badge-dept\">🏛️ Languages & Humanities</span></div><div class=\"ssmrv-dept-prof-actions\"><span class=\"ssmrv-dept-prof-cta\">👤 View Full Profile</span><a href=\"https://www.ssmrv.edu.in/academics/teaching_faculty/ms_gayathri_kempurajan/\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"ssmrv-dept-visit-btn\">🌐 Visit Website Page ↗</a></div><div class=\"ssmrv-dept-prof-meta\"><div>🎓 <b>Qualifications:</b> B.Com (TTM), M.A. English (Annamalai University), Ph.D. (MP University) • 17+ Years Teaching Experience in English Literature</div><div>🔬 <b>Specialisation:</b> English Literature, Language Etiquette & Analytical Communication</div><div class=\"ssmrv-dept-prof-comm\">🛡️ <b>Role:</b> English Language & Soft Skills Mentor</div></div></div><div class=\"ssmrv-dept-profile-item\" data-profile-id=\"ms-soujanya-d\" title=\"Click to view full profile of Ms. Soujannya D.\"><div class=\"ssmrv-dept-prof-header\"><span class=\"ssmrv-dept-prof-name\">👤 Ms. Soujannya D.</span></div><div class=\"ssmrv-faculty-badges\"><span class=\"ssmrv-badge-desig\">🎖️ Assistant Professor (English)</span><span class=\"ssmrv-badge-dept\">🏛️ Languages & Humanities</span></div><div class=\"ssmrv-dept-prof-actions\"><span class=\"ssmrv-dept-prof-cta\">👤 View Full Profile</span><a href=\"https://www.ssmrv.edu.in/academics/teaching_faculty/ms_soujanya_d/\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"ssmrv-dept-visit-btn\">🌐 Visit Website Page ↗</a></div><div class=\"ssmrv-dept-prof-meta\"><div>🎓 <b>Qualifications:</b> B.A. (English, Psychology, Sociology), M.A. (English) • 10+ Years Experience in English Literature & Soft Skills Development</div><div>🔬 <b>Specialisation:</b> Humanities, English Literature, Poetry & Classical Music</div><div class=\"ssmrv-dept-prof-comm\">🛡️ <b>Role:</b> External Cultural Committee SPOC (Inter-Collegiate Events & Fests)</div></div></div><div class=\"ssmrv-dept-profile-item\" data-profile-id=\"ms-deepthi-raju\" title=\"Click to view full profile of Ms. Deepthi Raju\"><div class=\"ssmrv-dept-prof-header\"><span class=\"ssmrv-dept-prof-name\">👤 Ms. Deepthi Raju</span></div><div class=\"ssmrv-faculty-badges\"><span class=\"ssmrv-badge-desig\">🎖️ Assistant Professor (English)</span><span class=\"ssmrv-badge-dept\">🏛️ Languages & Humanities</span></div><div class=\"ssmrv-dept-prof-actions\"><span class=\"ssmrv-dept-prof-cta\">👤 View Full Profile</span><a href=\"https://www.ssmrv.edu.in/academics/teaching_faculty/ms_deepthi_raju/\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"ssmrv-dept-visit-btn\">🌐 Visit Website Page ↗</a></div><div class=\"ssmrv-dept-prof-meta\"><div>🎓 <b>Qualifications:</b> B.A. (NMKRV College for Women), M.A. English Literature (SDM PG Centre, Mangalore University), Ph.D. (Pursuing at GITAM University) • 4.7+ Years Teaching, Curriculum & Research Experience</div><div>🔬 <b>Specialisation:</b> Gender Studies, Urban Studies, Graphic Narratives & Creative Writing</div><div class=\"ssmrv-dept-prof-comm\">🛡️ <b>Role:</b> English Literary Club & Creative Writing Mentor</div></div></div><div class=\"ssmrv-dept-profile-item\" data-profile-id=\"kalaimathi-s\" title=\"Click to view full profile of Ms. Kalaimathi S\"><div class=\"ssmrv-dept-prof-header\"><span class=\"ssmrv-dept-prof-name\">👤 Ms. Kalaimathi S</span></div><div class=\"ssmrv-faculty-badges\"><span class=\"ssmrv-badge-desig\">🎖️ Assistant Professor (English)</span><span class=\"ssmrv-badge-dept\">🏛️ Languages & Humanities</span></div><div class=\"ssmrv-dept-prof-actions\"><span class=\"ssmrv-dept-prof-cta\">👤 View Full Profile</span><a href=\"https://www.ssmrv.edu.in/academics/teaching_faculty/kalaimathi_s/\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"ssmrv-dept-visit-btn\">🌐 Visit Website Page ↗</a></div><div class=\"ssmrv-dept-prof-meta\"><div>🎓 <b>Qualifications:</b> B.A. with C.A. English (Manonmaniam Sundaranar University), M.A. English (Madurai Kamaraj University), M.Phil. (MKU), PGCTE, UGC-NET Qualified • 4+ Years Teaching Experience | University Gold Medalist</div><div>🔬 <b>Specialisation:</b> English Language Teaching (ELT) & AI in Language Pedagogy</div><div class=\"ssmrv-dept-prof-comm\">🛡️ <b>Role:</b> English Language Lab & ELT Coordinator</div></div></div><div class=\"ssmrv-dept-profile-item\" data-profile-id=\"swathi-s-nair\" title=\"Click to view full profile of Ms. Swathi S Nair\"><div class=\"ssmrv-dept-prof-header\"><span class=\"ssmrv-dept-prof-name\">👤 Ms. Swathi S Nair</span></div><div class=\"ssmrv-faculty-badges\"><span class=\"ssmrv-badge-desig\">🎖️ Assistant Professor (English)</span><span class=\"ssmrv-badge-dept\">🏛️ Languages & Humanities</span></div><div class=\"ssmrv-dept-prof-actions\"><span class=\"ssmrv-dept-prof-cta\">👤 View Full Profile</span><a href=\"https://www.ssmrv.edu.in/academics/teaching_faculty/swathi_s_nair/\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"ssmrv-dept-visit-btn\">🌐 Visit Website Page ↗</a></div><div class=\"ssmrv-dept-prof-meta\"><div>🎓 <b>Qualifications:</b> B.A. English Literature & Communication Studies (St. Xavier's College, Ernakulam), M.A. English Literature (Kristu Jayanti College, Bengaluru), Ph.D. (Pursuing, Presidency University) • Assistant Professor & Research Scholar in English Literature</div><div>🔬 <b>Specialisation:</b> English Literature, Medical Humanities, Spatial Studies, Gender Studies & Trauma Literature</div><div class=\"ssmrv-dept-prof-comm\">🛡️ <b>Role:</b> English Literary & Theatre Club Coordinator</div></div></div></div>",
      "buttons": [
          {
              "text": "👤 Dr. Jyothi N. Hosurkar (HOD)",
              "action": "profile:dr-jyothi-n-hosurkar"
          },
          {
              "text": "👤 Dr. Prathima Vijay",
              "action": "profile:dr-prathima-vijay"
          },
          {
              "text": "👤 Dr. Kavitha H S",
              "action": "profile:kavitha-h-s"
          },
          {
              "text": "👤 Mr. Ramamishra Yashaswi M",
              "action": "profile:ramamishra-yashaswi-m"
          },
          {
              "text": "👤 Dr. D. Kannan",
              "action": "profile:dr-d-kannan"
          },
          {
              "text": "👤 Mrs. Gayathri Kempurajan",
              "action": "profile:ms-gayathri-kempurajan"
          },
          {
              "text": "👤 Ms. Soujannya D.",
              "action": "profile:ms-soujanya-d"
          },
          {
              "text": "👤 Ms. Deepthi Raju",
              "action": "profile:ms-deepthi-raju"
          },
          {
              "text": "👤 Ms. Kalaimathi S",
              "action": "profile:kalaimathi-s"
          },
          {
              "text": "👤 Ms. Swathi S Nair",
              "action": "profile:swathi-s-nair"
          },
          {
              "text": "🌐 Visit Department Faculty Webpage ↗",
              "url": "https://www.ssmrv.edu.in/academics/teaching_faculty/"
          },
          {
              "text": "🌟 Centres & Literary Clubs",
              "action": "flow:centres_clubs"
          },
          {
              "text": "👨‍🏫 All Departments (92)",
              "action": "flow:faculty"
          }
      ]
  },

  faculty_sports: {
      "id": "faculty_sports",
      "pageUrl": "https://www.ssmrv.edu.in/campus_life/clubs_and_associations/sports_and_wellness_centre/",
      "message": "<b>⚽ Department of Physical Education &amp; Sports Wellness (3 Profiles)</b><br><span style=\"font-size:11px;color:#475569;\">Click <b>👤 View Full Profile</b> or <b>🌐 Visit Website Page ↗</b> on any faculty card:</span><div class=\"ssmrv-dept-profile-list\"><div class=\"ssmrv-dept-profile-item\" data-profile-id=\"mrs-teja-k-r\" title=\"Click to view full profile of Mrs. Teja K.R.\"><div class=\"ssmrv-dept-prof-header\"><span class=\"ssmrv-dept-prof-name\">👤 Mrs. Teja K.R.</span></div><div class=\"ssmrv-faculty-badges\"><span class=\"ssmrv-badge-desig\">🎖️ Junior Director of Physical Education</span><span class=\"ssmrv-badge-dept\">🏛️ Physical Education & Sports</span></div><div class=\"ssmrv-dept-prof-actions\"><span class=\"ssmrv-dept-prof-cta\">👤 View Full Profile</span><a href=\"https://www.ssmrv.edu.in/academics/teaching_faculty/\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"ssmrv-dept-visit-btn\">🌐 Visit Website Page ↗</a></div><div class=\"ssmrv-dept-prof-meta\"><div>🎓 <b>Qualifications:</b> M.P.Ed (Master of Physical Education) • Sports & Wellness Centre Leadership</div><div>🔬 <b>Specialisation:</b> Athletics, Indoor & Outdoor Sports Coaching, Yoga & Student Wellness</div><div class=\"ssmrv-dept-prof-comm\">🛡️ <b>Role:</b> College SPOC — Sports Committee & Sports Wellness Centre</div></div></div><div class=\"ssmrv-dept-profile-item\" data-profile-id=\"mr-m-m-bopanna\" title=\"Click to view full profile of Mr. M.M. Bopanna\"><div class=\"ssmrv-dept-prof-header\"><span class=\"ssmrv-dept-prof-name\">👤 Mr. M.M. Bopanna</span></div><div class=\"ssmrv-faculty-badges\"><span class=\"ssmrv-badge-desig\">🎖️ Senior Executive – Physical Education</span><span class=\"ssmrv-badge-dept\">🏛️ Physical Education & Sports</span></div><div class=\"ssmrv-dept-prof-actions\"><span class=\"ssmrv-dept-prof-cta\">👤 View Full Profile</span><a href=\"https://www.ssmrv.edu.in/academics/teaching_faculty/\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"ssmrv-dept-visit-btn\">🌐 Visit Website Page ↗</a></div><div class=\"ssmrv-dept-prof-meta\"><div>🎓 <b>Qualifications:</b> Physical Education & Sports Coaching Specialist • Senior Physical Education & Campus Discipline Officer</div><div>🔬 <b>Specialisation:</b> Team Sports Coaching, Tournament Management & Campus Discipline</div><div class=\"ssmrv-dept-prof-comm\">🛡️ <b>Role:</b> College SPOC — Anti-Ragging Cell & Discipline Committee | Sports Coaching</div></div></div><div class=\"ssmrv-dept-profile-item\" data-profile-id=\"chiranjivi-m-s\" title=\"Click to view full profile of Mr. Chiranjivi M S\"><div class=\"ssmrv-dept-prof-header\"><span class=\"ssmrv-dept-prof-name\">👤 Mr. Chiranjivi M S</span></div><div class=\"ssmrv-faculty-badges\"><span class=\"ssmrv-badge-desig\">🎖️ Assistant Professor & Sports Coordinator</span><span class=\"ssmrv-badge-dept\">🏛️ Physical Education & Sports</span></div><div class=\"ssmrv-dept-prof-actions\"><span class=\"ssmrv-dept-prof-cta\">👤 View Full Profile</span><a href=\"https://www.ssmrv.edu.in/academics/teaching_faculty/chiranjivi_m_s/\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"ssmrv-dept-visit-btn\">🌐 Visit Website Page ↗</a></div><div class=\"ssmrv-dept-prof-meta\"><div>🎓 <b>Qualifications:</b> Postgraduate Faculty & Sports Convener • Academic Faculty & College Sports Committee SPOC</div><div>🔬 <b>Specialisation:</b> Sports Administration, Youth Athletics & Campus Discipline</div><div class=\"ssmrv-dept-prof-comm\">🛡️ <b>Role:</b> College SPOC — Sports Committee & Discipline Committee</div></div></div></div>",
      "buttons": [
          {
              "text": "👤 Mrs. Teja K.R.",
              "action": "profile:mrs-teja-k-r"
          },
          {
              "text": "👤 Mr. M.M. Bopanna",
              "action": "profile:mr-m-m-bopanna"
          },
          {
              "text": "👤 Mr. Chiranjivi M S (Coord.)",
              "action": "profile:chiranjivi-m-s"
          },
          {
              "text": "🌐 Visit Department Faculty Webpage ↗",
              "url": "https://www.ssmrv.edu.in/campus_life/clubs_and_associations/sports_and_wellness_centre/"
          },
          {
              "text": "🌟 Sports & Wellness Centre",
              "action": "flow:centres_clubs"
          },
          {
              "text": "👨‍🏫 All Departments (92)",
              "action": "flow:faculty"
          }
      ]
  },

  faculty_placement: {
      "id": "faculty_placement",
      "pageUrl": "https://www.ssmrv.edu.in/campus_life/placement/",
      "message": "<b>💼 Paryapti Training &amp; Placement Cell (2 Profiles)</b><br><span style=\"font-size:11px;color:#475569;\">Click <b>👤 View Full Profile</b> or <b>🌐 Visit Website Page ↗</b> on any faculty card:</span><div class=\"ssmrv-dept-profile-list\"><div class=\"ssmrv-dept-profile-item\" data-profile-id=\"mrs-sumana-h-n\" title=\"Click to view full profile of Mrs. Sumana H.N.\"><div class=\"ssmrv-dept-prof-header\"><span class=\"ssmrv-dept-prof-name\">👤 Mrs. Sumana H.N.</span></div><div class=\"ssmrv-faculty-badges\"><span class=\"ssmrv-badge-desig\">🎖️ Placement Officer</span><span class=\"ssmrv-badge-dept\">🏛️ Training & Placement Cell (Paryapti)</span></div><div class=\"ssmrv-dept-prof-actions\"><span class=\"ssmrv-dept-prof-cta\">👤 View Full Profile</span><a href=\"https://www.ssmrv.edu.in/campus_life/placement/\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"ssmrv-dept-visit-btn\">🌐 Visit Website Page ↗</a></div><div class=\"ssmrv-dept-prof-meta\"><div>🎓 <b>Qualifications:</b> Corporate Relations, HR & Campus Recruitment Specialist • Head of Paryapti Training & Placement Cell</div><div>🔬 <b>Specialisation:</b> Campus Placements (Highest 11 LPA CTC), Corporate Tie-ups & Pre-Placement Training</div><div class=\"ssmrv-dept-prof-comm\">🛡️ <b>Role:</b> College SPOC — Placement & Career Guidance Cell (Paryapti)</div></div></div><div class=\"ssmrv-dept-profile-item\" data-profile-id=\"mr-naresh-k-n\" title=\"Click to view full profile of Mr. Naresh K.N.\"><div class=\"ssmrv-dept-prof-header\"><span class=\"ssmrv-dept-prof-name\">👤 Mr. Naresh K.N.</span></div><div class=\"ssmrv-faculty-badges\"><span class=\"ssmrv-badge-desig\">🎖️ Assistant Manager – HR & Corporate Relations</span><span class=\"ssmrv-badge-dept\">🏛️ Training & Placement Cell (Paryapti)</span></div><div class=\"ssmrv-dept-prof-actions\"><span class=\"ssmrv-dept-prof-cta\">👤 View Full Profile</span><a href=\"https://www.ssmrv.edu.in/campus_life/placement/\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"ssmrv-dept-visit-btn\">🌐 Visit Website Page ↗</a></div><div class=\"ssmrv-dept-prof-meta\"><div>🎓 <b>Qualifications:</b> Human Resources & Corporate Relations Management • HR & Placement Coordination, SSMRV College</div><div>🔬 <b>Specialisation:</b> Employer Onboarding, Internship Drives & HR Operations</div><div class=\"ssmrv-dept-prof-comm\">🛡️ <b>Role:</b> Assistant Manager – HR | Paryapti Placement Cell</div></div></div></div>",
      "buttons": [
          {
              "text": "👤 Mrs. Sumana H.N.",
              "action": "profile:mrs-sumana-h-n"
          },
          {
              "text": "👤 Mr. Naresh K.N.",
              "action": "profile:mr-naresh-k-n"
          },
          {
              "text": "🌐 Visit Department Faculty Webpage ↗",
              "url": "https://www.ssmrv.edu.in/campus_life/placement/"
          },
          {
              "text": "💼 Placement Packages (11 LPA)",
              "action": "flow:placements"
          },
          {
              "text": "📞 Call Placement Office",
              "url": "tel:9606067551"
          },
          {
              "text": "👨‍🏫 All Departments (92)",
              "action": "flow:faculty"
          }
      ]
  },

  faculty_library: {
      "id": "faculty_library",
      "pageUrl": "https://www.ssmrv.edu.in/academics/non_teaching_staff/",
      "message": "<b>📖 Central Library &amp; Information Center (Knowledge Hub) (2 Profiles)</b><br><span style=\"font-size:11px;color:#475569;\">Click <b>👤 View Full Profile</b> or <b>🌐 Visit Website Page ↗</b> on any faculty card:</span><div class=\"ssmrv-dept-profile-list\"><div class=\"ssmrv-dept-profile-item\" data-profile-id=\"mrs-shylaja-t-m\" title=\"Click to view full profile of Mrs. Shylaja T.M.\"><div class=\"ssmrv-dept-prof-header\"><span class=\"ssmrv-dept-prof-name\">👤 Mrs. Shylaja T.M.</span></div><div class=\"ssmrv-faculty-badges\"><span class=\"ssmrv-badge-desig\">🎖️ Library Assistant & In-Charge</span><span class=\"ssmrv-badge-dept\">🏛️ Library & Information Center</span></div><div class=\"ssmrv-dept-prof-actions\"><span class=\"ssmrv-dept-prof-cta\">👤 View Full Profile</span><a href=\"https://www.ssmrv.edu.in/academics/non_teaching_staff/\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"ssmrv-dept-visit-btn\">🌐 Visit Website Page ↗</a></div><div class=\"ssmrv-dept-prof-meta\"><div>🎓 <b>Qualifications:</b> M.Lib.I.Sc (Master of Library & Information Science) • Head of Central Library & Digital Knowledge Hub</div><div>🔬 <b>Specialisation:</b> Koha ILMS Automation, DELNET, INFLIBNET N-LIST & Digital Repositories</div><div class=\"ssmrv-dept-prof-comm\">🛡️ <b>Role:</b> Library In-Charge — Central Knowledge Hub</div></div></div><div class=\"ssmrv-dept-profile-item\" data-profile-id=\"mr-guranna-sajjan\" title=\"Click to view full profile of Mr. Guranna Sajjan\"><div class=\"ssmrv-dept-prof-header\"><span class=\"ssmrv-dept-prof-name\">👤 Mr. Guranna Sajjan</span></div><div class=\"ssmrv-faculty-badges\"><span class=\"ssmrv-badge-desig\">🎖️ Senior Executive – Library</span><span class=\"ssmrv-badge-dept\">🏛️ Library & Information Center</span></div><div class=\"ssmrv-dept-prof-actions\"><span class=\"ssmrv-dept-prof-cta\">👤 View Full Profile</span><a href=\"https://www.ssmrv.edu.in/academics/non_teaching_staff/\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"ssmrv-dept-visit-btn\">🌐 Visit Website Page ↗</a></div><div class=\"ssmrv-dept-prof-meta\"><div>🎓 <b>Qualifications:</b> B.A., B.Lib (Bachelor of Library Science) • Senior Library Operations & Circulation Executive</div><div>🔬 <b>Specialisation:</b> Book Bank Circulation, Periodicals & Student Reference Services</div><div class=\"ssmrv-dept-prof-comm\">🛡️ <b>Role:</b> Senior Executive — Library & Knowledge Hub</div></div></div></div>",
      "buttons": [
          {
              "text": "👤 Mrs. Shylaja T.M.",
              "action": "profile:mrs-shylaja-t-m"
          },
          {
              "text": "👤 Mr. Guranna Sajjan",
              "action": "profile:mr-guranna-sajjan"
          },
          {
              "text": "🌐 Visit Department Faculty Webpage ↗",
              "url": "https://www.ssmrv.edu.in/academics/non_teaching_staff/"
          },
          {
              "text": "🏛️ Campus Infrastructure",
              "action": "flow:campus"
          },
          {
              "text": "👨‍🏫 All Departments (92)",
              "action": "flow:faculty"
          }
      ]
  },

  faculty_admin: {
      "id": "faculty_admin",
      "pageUrl": "https://www.ssmrv.edu.in/academics/non_teaching_staff/",
      "message": "<b>🏢 Non-Teaching Administration, Finance, IT &amp; Support Staff (19 Profiles)</b><br><span style=\"font-size:11px;color:#475569;\">Click <b>👤 View Full Profile</b> or <b>🌐 Visit Website Page ↗</b> on any faculty card:</span><div class=\"ssmrv-dept-profile-list\"><div class=\"ssmrv-dept-profile-item\" data-profile-id=\"mrs-vani-m-u\" title=\"Click to view full profile of Mrs. Vani M.U.\"><div class=\"ssmrv-dept-prof-header\"><span class=\"ssmrv-dept-prof-name\">👤 Mrs. Vani M.U.</span></div><div class=\"ssmrv-faculty-badges\"><span class=\"ssmrv-badge-desig\">🎖️ Manager of Finance and Admin</span><span class=\"ssmrv-badge-dept\">🏛️ Administration & Finance</span></div><div class=\"ssmrv-dept-prof-actions\"><span class=\"ssmrv-dept-prof-cta\">👤 View Full Profile</span><a href=\"https://www.ssmrv.edu.in/academics/non_teaching_staff/\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"ssmrv-dept-visit-btn\">🌐 Visit Website Page ↗</a></div><div class=\"ssmrv-dept-prof-meta\"><div>🎓 <b>Qualifications:</b> Finance & Institutional Administration Specialist • Head of Administrative & Financial Operations, SSMRV College</div><div>🔬 <b>Specialisation:</b> Financial Planning, Institutional Administration & Statutory Compliance</div><div class=\"ssmrv-dept-prof-comm\">🛡️ <b>Role:</b> Manager of Finance & Admin | Internal Compliance (POSH) Committee Member</div></div></div><div class=\"ssmrv-dept-profile-item\" data-profile-id=\"ms-yeshwanthi-r\" title=\"Click to view full profile of Ms. Yeshwanthi R.\"><div class=\"ssmrv-dept-prof-header\"><span class=\"ssmrv-dept-prof-name\">👤 Ms. Yeshwanthi R.</span></div><div class=\"ssmrv-faculty-badges\"><span class=\"ssmrv-badge-desig\">🎖️ Assistant Manager – HR & Admin</span><span class=\"ssmrv-badge-dept\">🏛️ Administration & Finance</span></div><div class=\"ssmrv-dept-prof-actions\"><span class=\"ssmrv-dept-prof-cta\">👤 View Full Profile</span><a href=\"https://www.ssmrv.edu.in/academics/non_teaching_staff/\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"ssmrv-dept-visit-btn\">🌐 Visit Website Page ↗</a></div><div class=\"ssmrv-dept-prof-meta\"><div>🎓 <b>Qualifications:</b> HR & Administrative Management • Assistant Manager – HR & Administration</div><div>🔬 <b>Specialisation:</b> Human Resource Records, Faculty Onboarding & General Administration</div><div class=\"ssmrv-dept-prof-comm\">🛡️ <b>Role:</b> Assistant Manager – HR & Admin</div></div></div><div class=\"ssmrv-dept-profile-item\" data-profile-id=\"ms-jyothi-k-s\" title=\"Click to view full profile of Ms. Jyothi K.S.\"><div class=\"ssmrv-dept-prof-header\"><span class=\"ssmrv-dept-prof-name\">👤 Ms. Jyothi K.S.</span></div><div class=\"ssmrv-faculty-badges\"><span class=\"ssmrv-badge-desig\">🎖️ Assistant Manager – Accounts</span><span class=\"ssmrv-badge-dept\">🏛️ Administration & Finance</span></div><div class=\"ssmrv-dept-prof-actions\"><span class=\"ssmrv-dept-prof-cta\">👤 View Full Profile</span><a href=\"https://www.ssmrv.edu.in/academics/non_teaching_staff/\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"ssmrv-dept-visit-btn\">🌐 Visit Website Page ↗</a></div><div class=\"ssmrv-dept-prof-meta\"><div>🎓 <b>Qualifications:</b> Accounts & Financial Administration • Assistant Manager – Accounts Section</div><div>🔬 <b>Specialisation:</b> Institutional Accounting, Fee Receipts & Scholarship Disbursements</div><div class=\"ssmrv-dept-prof-comm\">🛡️ <b>Role:</b> Assistant Manager – Accounts</div></div></div><div class=\"ssmrv-dept-profile-item\" data-profile-id=\"mrs-sunithamba-k\" title=\"Click to view full profile of Mrs. Sunithamba K\"><div class=\"ssmrv-dept-prof-header\"><span class=\"ssmrv-dept-prof-name\">👤 Mrs. Sunithamba K</span></div><div class=\"ssmrv-faculty-badges\"><span class=\"ssmrv-badge-desig\">🎖️ F.D.A. (First Division Assistant)</span><span class=\"ssmrv-badge-dept\">🏛️ Administration & Finance</span></div><div class=\"ssmrv-dept-prof-actions\"><span class=\"ssmrv-dept-prof-cta\">👤 View Full Profile</span><a href=\"https://www.ssmrv.edu.in/academics/non_teaching_staff/\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"ssmrv-dept-visit-btn\">🌐 Visit Website Page ↗</a></div><div class=\"ssmrv-dept-prof-meta\"><div>🎓 <b>Qualifications:</b> Administrative & Accounts Service • First Division Assistant (FDA), SSMRV Office</div><div>🔬 <b>Specialisation:</b> University Correspondence, Official Records & Accounts</div><div class=\"ssmrv-dept-prof-comm\">🛡️ <b>Role:</b> First Division Assistant (F.D.A.)</div></div></div><div class=\"ssmrv-dept-profile-item\" data-profile-id=\"mr-hanumantha-reddy-b\" title=\"Click to view full profile of Mr. Hanumantha Reddy B\"><div class=\"ssmrv-dept-prof-header\"><span class=\"ssmrv-dept-prof-name\">👤 Mr. Hanumantha Reddy B</span></div><div class=\"ssmrv-faculty-badges\"><span class=\"ssmrv-badge-desig\">🎖️ IT Executive</span><span class=\"ssmrv-badge-dept\">🏛️ Administration & Finance</span></div><div class=\"ssmrv-dept-prof-actions\"><span class=\"ssmrv-dept-prof-cta\">👤 View Full Profile</span><a href=\"https://www.ssmrv.edu.in/academics/non_teaching_staff/\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"ssmrv-dept-visit-btn\">🌐 Visit Website Page ↗</a></div><div class=\"ssmrv-dept-prof-meta\"><div>🎓 <b>Qualifications:</b> IT Systems & Network Administration • Campus IT Infrastructure Lead</div><div>🔬 <b>Specialisation:</b> Computer Labs, 1 Gbps Campus Network, ERP & Server Maintenance</div><div class=\"ssmrv-dept-prof-comm\">🛡️ <b>Role:</b> IT Executive — Systems & Network Infrastructure</div></div></div><div class=\"ssmrv-dept-profile-item\" data-profile-id=\"mr-raviraj-p\" title=\"Click to view full profile of Mr. Raviraj P\"><div class=\"ssmrv-dept-prof-header\"><span class=\"ssmrv-dept-prof-name\">👤 Mr. Raviraj P</span></div><div class=\"ssmrv-faculty-badges\"><span class=\"ssmrv-badge-desig\">🎖️ Jr. Executive IT</span><span class=\"ssmrv-badge-dept\">🏛️ Administration & Finance</span></div><div class=\"ssmrv-dept-prof-actions\"><span class=\"ssmrv-dept-prof-cta\">👤 View Full Profile</span><a href=\"https://www.ssmrv.edu.in/academics/non_teaching_staff/\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"ssmrv-dept-visit-btn\">🌐 Visit Website Page ↗</a></div><div class=\"ssmrv-dept-prof-meta\"><div>🎓 <b>Qualifications:</b> IT Support & Hardware Maintenance • Junior Executive – IT Support</div><div>🔬 <b>Specialisation:</b> Lab Systems Maintenance, AV Setup & Technical Support</div><div class=\"ssmrv-dept-prof-comm\">🛡️ <b>Role:</b> Jr. Executive — IT Support</div></div></div><div class=\"ssmrv-dept-profile-item\" data-profile-id=\"mrs-shashikala-g-t\" title=\"Click to view full profile of Mrs. Shashikala G.T.\"><div class=\"ssmrv-dept-prof-header\"><span class=\"ssmrv-dept-prof-name\">👤 Mrs. Shashikala G.T.</span></div><div class=\"ssmrv-faculty-badges\"><span class=\"ssmrv-badge-desig\">🎖️ Sr. Executive – Administration</span><span class=\"ssmrv-badge-dept\">🏛️ Administration & Finance</span></div><div class=\"ssmrv-dept-prof-actions\"><span class=\"ssmrv-dept-prof-cta\">👤 View Full Profile</span><a href=\"https://www.ssmrv.edu.in/academics/non_teaching_staff/\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"ssmrv-dept-visit-btn\">🌐 Visit Website Page ↗</a></div><div class=\"ssmrv-dept-prof-meta\"><div>🎓 <b>Qualifications:</b> Academic & Administrative Operations • Senior Executive, SSMRV Administrative Office</div><div>🔬 <b>Specialisation:</b> Bengaluru City University (BCU) Academic Section & Student Approvals</div><div class=\"ssmrv-dept-prof-comm\">🛡️ <b>Role:</b> Sr. Executive — Administration</div></div></div><div class=\"ssmrv-dept-profile-item\" data-profile-id=\"mr-dileepa-kumara-h-m\" title=\"Click to view full profile of Mr. Dileepa Kumara H.M.\"><div class=\"ssmrv-dept-prof-header\"><span class=\"ssmrv-dept-prof-name\">👤 Mr. Dileepa Kumara H.M.</span></div><div class=\"ssmrv-faculty-badges\"><span class=\"ssmrv-badge-desig\">🎖️ Sr. Executive – Administration</span><span class=\"ssmrv-badge-dept\">🏛️ Administration & Finance</span></div><div class=\"ssmrv-dept-prof-actions\"><span class=\"ssmrv-dept-prof-cta\">👤 View Full Profile</span><a href=\"https://www.ssmrv.edu.in/academics/non_teaching_staff/\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"ssmrv-dept-visit-btn\">🌐 Visit Website Page ↗</a></div><div class=\"ssmrv-dept-prof-meta\"><div>🎓 <b>Qualifications:</b> Student Services & Administrative Operations • Senior Executive, SSMRV Administrative Office</div><div>🔬 <b>Specialisation:</b> Student Certificates, Bus/Metro Concessions, Scholarships & Examination Support</div><div class=\"ssmrv-dept-prof-comm\">🛡️ <b>Role:</b> Sr. Executive — Administration</div></div></div><div class=\"ssmrv-dept-profile-item\" data-profile-id=\"mrs-nethravathi-b-v\" title=\"Click to view full profile of Mrs. Nethravathi B.V.\"><div class=\"ssmrv-dept-prof-header\"><span class=\"ssmrv-dept-prof-name\">👤 Mrs. Nethravathi B.V.</span></div><div class=\"ssmrv-faculty-badges\"><span class=\"ssmrv-badge-desig\">🎖️ Sr. Executive – Administration</span><span class=\"ssmrv-badge-dept\">🏛️ Administration & Finance</span></div><div class=\"ssmrv-dept-prof-actions\"><span class=\"ssmrv-dept-prof-cta\">👤 View Full Profile</span><a href=\"https://www.ssmrv.edu.in/academics/non_teaching_staff/\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"ssmrv-dept-visit-btn\">🌐 Visit Website Page ↗</a></div><div class=\"ssmrv-dept-prof-meta\"><div>🎓 <b>Qualifications:</b> Office Administration & Records • Senior Executive, SSMRV Administrative Office</div><div>🔬 <b>Specialisation:</b> Admissions Verification, University Liaison & Student Records</div><div class=\"ssmrv-dept-prof-comm\">🛡️ <b>Role:</b> Sr. Executive — Administration</div></div></div><div class=\"ssmrv-dept-profile-item\" data-profile-id=\"mrs-jayashree\" title=\"Click to view full profile of Mrs. Jayashree\"><div class=\"ssmrv-dept-prof-header\"><span class=\"ssmrv-dept-prof-name\">👤 Mrs. Jayashree</span></div><div class=\"ssmrv-faculty-badges\"><span class=\"ssmrv-badge-desig\">🎖️ Sr. Executive – Accounts</span><span class=\"ssmrv-badge-dept\">🏛️ Administration & Finance</span></div><div class=\"ssmrv-dept-prof-actions\"><span class=\"ssmrv-dept-prof-cta\">👤 View Full Profile</span><a href=\"https://www.ssmrv.edu.in/academics/non_teaching_staff/\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"ssmrv-dept-visit-btn\">🌐 Visit Website Page ↗</a></div><div class=\"ssmrv-dept-prof-meta\"><div>🎓 <b>Qualifications:</b> Accounting & Financial Operations • Senior Executive – Accounts, SSMRV Office</div><div>🔬 <b>Specialisation:</b> Accounts Management & Financial Records</div><div class=\"ssmrv-dept-prof-comm\">🛡️ <b>Role:</b> Sr. Executive — Accounts</div></div></div><div class=\"ssmrv-dept-profile-item\" data-profile-id=\"mrs-latha-k-m\" title=\"Click to view full profile of Mrs. Latha K.M.\"><div class=\"ssmrv-dept-prof-header\"><span class=\"ssmrv-dept-prof-name\">👤 Mrs. Latha K.M.</span></div><div class=\"ssmrv-faculty-badges\"><span class=\"ssmrv-badge-desig\">🎖️ Accounts Executive</span><span class=\"ssmrv-badge-dept\">🏛️ Administration & Finance</span></div><div class=\"ssmrv-dept-prof-actions\"><span class=\"ssmrv-dept-prof-cta\">👤 View Full Profile</span><a href=\"https://www.ssmrv.edu.in/academics/non_teaching_staff/\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"ssmrv-dept-visit-btn\">🌐 Visit Website Page ↗</a></div><div class=\"ssmrv-dept-prof-meta\"><div>🎓 <b>Qualifications:</b> Accounts & Office Administration • Accounts Executive, SSMRV Office</div><div>🔬 <b>Specialisation:</b> Student Fee Desk & Accounts Support</div><div class=\"ssmrv-dept-prof-comm\">🛡️ <b>Role:</b> Accounts Executive</div></div></div><div class=\"ssmrv-dept-profile-item\" data-profile-id=\"mr-roopesh-r-k\" title=\"Click to view full profile of Mr. Roopesh R.K.\"><div class=\"ssmrv-dept-prof-header\"><span class=\"ssmrv-dept-prof-name\">👤 Mr. Roopesh R.K.</span></div><div class=\"ssmrv-faculty-badges\"><span class=\"ssmrv-badge-desig\">🎖️ Admin Executive</span><span class=\"ssmrv-badge-dept\">🏛️ Administration & Finance</span></div><div class=\"ssmrv-dept-prof-actions\"><span class=\"ssmrv-dept-prof-cta\">👤 View Full Profile</span><a href=\"https://www.ssmrv.edu.in/academics/non_teaching_staff/\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"ssmrv-dept-visit-btn\">🌐 Visit Website Page ↗</a></div><div class=\"ssmrv-dept-prof-meta\"><div>🎓 <b>Qualifications:</b> Campus Operations & Administration • Admin Executive, SSMRV Office</div><div>🔬 <b>Specialisation:</b> Campus Facilities, Event Logistics & Office Operations</div><div class=\"ssmrv-dept-prof-comm\">🛡️ <b>Role:</b> Admin Executive</div></div></div><div class=\"ssmrv-dept-profile-item\" data-profile-id=\"mrs-nethravathi-m\" title=\"Click to view full profile of Mrs. Nethravathi M\"><div class=\"ssmrv-dept-prof-header\"><span class=\"ssmrv-dept-prof-name\">👤 Mrs. Nethravathi M</span></div><div class=\"ssmrv-faculty-badges\"><span class=\"ssmrv-badge-desig\">🎖️ Admin Executive</span><span class=\"ssmrv-badge-dept\">🏛️ Administration & Finance</span></div><div class=\"ssmrv-dept-prof-actions\"><span class=\"ssmrv-dept-prof-cta\">👤 View Full Profile</span><a href=\"https://www.ssmrv.edu.in/academics/non_teaching_staff/\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"ssmrv-dept-visit-btn\">🌐 Visit Website Page ↗</a></div><div class=\"ssmrv-dept-prof-meta\"><div>🎓 <b>Qualifications:</b> Administrative Support & Documentation • Admin Executive, SSMRV Office</div><div>🔬 <b>Specialisation:</b> Reception, Student Inquiries & Documentation</div><div class=\"ssmrv-dept-prof-comm\">🛡️ <b>Role:</b> Admin Executive</div></div></div><div class=\"ssmrv-dept-profile-item\" data-profile-id=\"sri-chandrashekar-m\" title=\"Click to view full profile of Sri. Chandrashekar M\"><div class=\"ssmrv-dept-prof-header\"><span class=\"ssmrv-dept-prof-name\">👤 Sri. Chandrashekar M</span></div><div class=\"ssmrv-faculty-badges\"><span class=\"ssmrv-badge-desig\">🎖️ Attender (Group D Support Staff)</span><span class=\"ssmrv-badge-dept\">🏛️ Administration & Finance</span></div><div class=\"ssmrv-dept-prof-actions\"><span class=\"ssmrv-dept-prof-cta\">👤 View Full Profile</span><a href=\"https://www.ssmrv.edu.in/academics/non_teaching_staff/\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"ssmrv-dept-visit-btn\">🌐 Visit Website Page ↗</a></div><div class=\"ssmrv-dept-prof-meta\"><div>🎓 <b>Qualifications:</b> Campus Support Services • Group D Support Staff, SSMRV College</div><div>🔬 <b>Specialisation:</b> Department & Classroom Support</div><div class=\"ssmrv-dept-prof-comm\">🛡️ <b>Role:</b> Group D Support Staff</div></div></div><div class=\"ssmrv-dept-profile-item\" data-profile-id=\"sri-dasegowda-s-t\" title=\"Click to view full profile of Sri. Dasegowda S.T.\"><div class=\"ssmrv-dept-prof-header\"><span class=\"ssmrv-dept-prof-name\">👤 Sri. Dasegowda S.T.</span></div><div class=\"ssmrv-faculty-badges\"><span class=\"ssmrv-badge-desig\">🎖️ Attender (Group D Support Staff)</span><span class=\"ssmrv-badge-dept\">🏛️ Administration & Finance</span></div><div class=\"ssmrv-dept-prof-actions\"><span class=\"ssmrv-dept-prof-cta\">👤 View Full Profile</span><a href=\"https://www.ssmrv.edu.in/academics/non_teaching_staff/\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"ssmrv-dept-visit-btn\">🌐 Visit Website Page ↗</a></div><div class=\"ssmrv-dept-prof-meta\"><div>🎓 <b>Qualifications:</b> Campus Support Services • Group D Support Staff, SSMRV College</div><div>🔬 <b>Specialisation:</b> Department & Office Support</div><div class=\"ssmrv-dept-prof-comm\">🛡️ <b>Role:</b> Group D Support Staff</div></div></div><div class=\"ssmrv-dept-profile-item\" data-profile-id=\"smt-nandini-h-k\" title=\"Click to view full profile of Smt. Nandini H.K.\"><div class=\"ssmrv-dept-prof-header\"><span class=\"ssmrv-dept-prof-name\">👤 Smt. Nandini H.K.</span></div><div class=\"ssmrv-faculty-badges\"><span class=\"ssmrv-badge-desig\">🎖️ Attender (Group D Support Staff)</span><span class=\"ssmrv-badge-dept\">🏛️ Administration & Finance</span></div><div class=\"ssmrv-dept-prof-actions\"><span class=\"ssmrv-dept-prof-cta\">👤 View Full Profile</span><a href=\"https://www.ssmrv.edu.in/academics/non_teaching_staff/\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"ssmrv-dept-visit-btn\">🌐 Visit Website Page ↗</a></div><div class=\"ssmrv-dept-prof-meta\"><div>🎓 <b>Qualifications:</b> Campus Support Services • Group D Support Staff, SSMRV College</div><div>🔬 <b>Specialisation:</b> Department & Office Support</div><div class=\"ssmrv-dept-prof-comm\">🛡️ <b>Role:</b> Group D Support Staff</div></div></div><div class=\"ssmrv-dept-profile-item\" data-profile-id=\"mr-subhash\" title=\"Click to view full profile of Mr. Subhash\"><div class=\"ssmrv-dept-prof-header\"><span class=\"ssmrv-dept-prof-name\">👤 Mr. Subhash</span></div><div class=\"ssmrv-faculty-badges\"><span class=\"ssmrv-badge-desig\">🎖️ Attender (Group D Support Staff)</span><span class=\"ssmrv-badge-dept\">🏛️ Administration & Finance</span></div><div class=\"ssmrv-dept-prof-actions\"><span class=\"ssmrv-dept-prof-cta\">👤 View Full Profile</span><a href=\"https://www.ssmrv.edu.in/academics/non_teaching_staff/\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"ssmrv-dept-visit-btn\">🌐 Visit Website Page ↗</a></div><div class=\"ssmrv-dept-prof-meta\"><div>🎓 <b>Qualifications:</b> Campus Support Services • Group D Support Staff, SSMRV College</div><div>🔬 <b>Specialisation:</b> Department & Office Support</div><div class=\"ssmrv-dept-prof-comm\">🛡️ <b>Role:</b> Group D Support Staff</div></div></div><div class=\"ssmrv-dept-profile-item\" data-profile-id=\"ms-uma\" title=\"Click to view full profile of Ms. Uma\"><div class=\"ssmrv-dept-prof-header\"><span class=\"ssmrv-dept-prof-name\">👤 Ms. Uma</span></div><div class=\"ssmrv-faculty-badges\"><span class=\"ssmrv-badge-desig\">🎖️ Attender (Group D Support Staff)</span><span class=\"ssmrv-badge-dept\">🏛️ Administration & Finance</span></div><div class=\"ssmrv-dept-prof-actions\"><span class=\"ssmrv-dept-prof-cta\">👤 View Full Profile</span><a href=\"https://www.ssmrv.edu.in/academics/non_teaching_staff/\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"ssmrv-dept-visit-btn\">🌐 Visit Website Page ↗</a></div><div class=\"ssmrv-dept-prof-meta\"><div>🎓 <b>Qualifications:</b> Campus Support Services • Group D Support Staff, SSMRV College</div><div>🔬 <b>Specialisation:</b> Department & Office Support</div><div class=\"ssmrv-dept-prof-comm\">🛡️ <b>Role:</b> Group D Support Staff</div></div></div><div class=\"ssmrv-dept-profile-item\" data-profile-id=\"mr-mahadev-prasad\" title=\"Click to view full profile of Mr. Mahadev Prasad\"><div class=\"ssmrv-dept-prof-header\"><span class=\"ssmrv-dept-prof-name\">👤 Mr. Mahadev Prasad</span></div><div class=\"ssmrv-faculty-badges\"><span class=\"ssmrv-badge-desig\">🎖️ Attender (Group D Support Staff)</span><span class=\"ssmrv-badge-dept\">🏛️ Administration & Finance</span></div><div class=\"ssmrv-dept-prof-actions\"><span class=\"ssmrv-dept-prof-cta\">👤 View Full Profile</span><a href=\"https://www.ssmrv.edu.in/academics/non_teaching_staff/\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"ssmrv-dept-visit-btn\">🌐 Visit Website Page ↗</a></div><div class=\"ssmrv-dept-prof-meta\"><div>🎓 <b>Qualifications:</b> Campus Support Services • Group D Support Staff, SSMRV College</div><div>🔬 <b>Specialisation:</b> Department & Office Support</div><div class=\"ssmrv-dept-prof-comm\">🛡️ <b>Role:</b> Group D Support Staff</div></div></div></div>",
      "buttons": [
          {
              "text": "👤 Mrs. Vani M.U.",
              "action": "profile:mrs-vani-m-u"
          },
          {
              "text": "👤 Ms. Yeshwanthi R.",
              "action": "profile:ms-yeshwanthi-r"
          },
          {
              "text": "👤 Ms. Jyothi K.S.",
              "action": "profile:ms-jyothi-k-s"
          },
          {
              "text": "👤 Mrs. Sunithamba K",
              "action": "profile:mrs-sunithamba-k"
          },
          {
              "text": "👤 Mr. Hanumantha Reddy B",
              "action": "profile:mr-hanumantha-reddy-b"
          },
          {
              "text": "👤 Mr. Raviraj P",
              "action": "profile:mr-raviraj-p"
          },
          {
              "text": "👤 Mrs. Shashikala G.T.",
              "action": "profile:mrs-shashikala-g-t"
          },
          {
              "text": "👤 Mr. Dileepa Kumara H.M.",
              "action": "profile:mr-dileepa-kumara-h-m"
          },
          {
              "text": "👤 Mrs. Nethravathi B.V.",
              "action": "profile:mrs-nethravathi-b-v"
          },
          {
              "text": "👤 Mrs. Jayashree",
              "action": "profile:mrs-jayashree"
          },
          {
              "text": "👤 Mrs. Latha K.M.",
              "action": "profile:mrs-latha-k-m"
          },
          {
              "text": "👤 Mr. Roopesh R.K.",
              "action": "profile:mr-roopesh-r-k"
          },
          {
              "text": "👤 Mrs. Nethravathi M",
              "action": "profile:mrs-nethravathi-m"
          },
          {
              "text": "👤 Sri. Chandrashekar M",
              "action": "profile:sri-chandrashekar-m"
          },
          {
              "text": "👤 Sri. Dasegowda S.T.",
              "action": "profile:sri-dasegowda-s-t"
          },
          {
              "text": "👤 Smt. Nandini H.K.",
              "action": "profile:smt-nandini-h-k"
          },
          {
              "text": "👤 Mr. Subhash",
              "action": "profile:mr-subhash"
          },
          {
              "text": "👤 Ms. Uma",
              "action": "profile:ms-uma"
          },
          {
              "text": "👤 Mr. Mahadev Prasad",
              "action": "profile:mr-mahadev-prasad"
          },
          {
              "text": "🌐 Visit Department Faculty Webpage ↗",
              "url": "https://www.ssmrv.edu.in/academics/non_teaching_staff/"
          },
          {
              "text": "📞 Contact Administrative Office",
              "action": "flow:contact"
          },
          {
              "text": "👨‍🏫 All Departments (92)",
              "action": "flow:faculty"
          }
      ]
  },

  faculty_leadership: {
      "id": "faculty_leadership",
      "pageUrl": "https://www.ssmrv.edu.in/about_us/board_of_management/",
      "message": "<b>🏛️ Institutional Leadership &amp; RSST Board of Management (8 Profiles)</b><br><span style=\"font-size:11px;color:#475569;\">Click <b>👤 View Full Profile</b> or <b>🌐 Visit Website Page ↗</b> on any faculty card:</span><div class=\"ssmrv-dept-profile-list\"><div class=\"ssmrv-dept-profile-item\" data-profile-id=\"dr-vijayashree-l\" title=\"Click to view full profile of Dr. Vijayashree L.\"><div class=\"ssmrv-dept-prof-header\"><span class=\"ssmrv-dept-prof-name\">👤 Dr. Vijayashree L.</span></div><div class=\"ssmrv-faculty-badges\"><span class=\"ssmrv-badge-desig\">🎖️ Principal & Professor</span><span class=\"ssmrv-badge-dept\">🏛️ Institutional Leadership</span></div><div class=\"ssmrv-dept-prof-actions\"><span class=\"ssmrv-dept-prof-cta\">👤 View Full Profile</span><a href=\"https://www.ssmrv.edu.in/academics/teaching_faculty/dr-vijayashree-l/\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"ssmrv-dept-visit-btn\">🌐 Visit Website Page ↗</a></div><div class=\"ssmrv-dept-prof-meta\"><div>🎓 <b>Qualifications:</b> MBA, M.Phil., Ph.D., NET | Certified Harvard Design Thinker • 19+ Years Academic Experience (incl. 3 yrs Head & Professor of MBA) + 4 Years Industry Experience</div><div>🔬 <b>Specialisation:</b> Academic Leadership, Innovation Strategy, Entrepreneurship & Start-up Incubation, IP Creation</div><div class=\"ssmrv-dept-prof-comm\">🛡️ <b>Role:</b> Principal — SSMRV College | Chairperson — Grievance Redressal Cell</div></div></div><div class=\"ssmrv-dept-profile-item\" data-profile-id=\"dr-m-p-shyam\" title=\"Click to view full profile of Dr. M.P. Shyam\"><div class=\"ssmrv-dept-prof-header\"><span class=\"ssmrv-dept-prof-name\">👤 Dr. M.P. Shyam</span></div><div class=\"ssmrv-faculty-badges\"><span class=\"ssmrv-badge-desig\">🎖️ President — RSST / RVEI</span><span class=\"ssmrv-badge-dept\">🏛️ Board of Management (RSST)</span></div><div class=\"ssmrv-dept-prof-actions\"><span class=\"ssmrv-dept-prof-cta\">👤 View Full Profile</span><a href=\"https://www.ssmrv.edu.in/dr_m_p_shyam/\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"ssmrv-dept-visit-btn\">🌐 Visit Website Page ↗</a></div><div class=\"ssmrv-dept-prof-meta\"><div>🎓 <b>Qualifications:</b> Prominent Industrialist & Visionary Educational Leader • President, Rashtreeya Sikshana Samithi Trust (RV Institutions)</div><div>🔬 <b>Specialisation:</b> Institutional Governance, Strategic Vision & Philanthropy</div><div class=\"ssmrv-dept-prof-comm\">🛡️ <b>Role:</b> President — Board of Management (RSST / RVEI)</div></div></div><div class=\"ssmrv-dept-profile-item\" data-profile-id=\"dr-h-c-a-v-s-murthy\" title=\"Click to view full profile of Dr. (h.c.) A.V.S. Murthy\"><div class=\"ssmrv-dept-prof-header\"><span class=\"ssmrv-dept-prof-name\">👤 Dr. (h.c.) A.V.S. Murthy</span></div><div class=\"ssmrv-faculty-badges\"><span class=\"ssmrv-badge-desig\">🎖️ Hon. Secretary — RSST / RVEI</span><span class=\"ssmrv-badge-dept\">🏛️ Board of Management (RSST)</span></div><div class=\"ssmrv-dept-prof-actions\"><span class=\"ssmrv-dept-prof-cta\">👤 View Full Profile</span><a href=\"https://www.ssmrv.edu.in/dr_h_c_a_v_s_murthy/\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"ssmrv-dept-visit-btn\">🌐 Visit Website Page ↗</a></div><div class=\"ssmrv-dept-prof-meta\"><div>🎓 <b>Qualifications:</b> Doctorate (Honoris Causa) | Educational Administrator • Honorary Secretary, Rashtreeya Sikshana Samithi Trust (RSST)</div><div>🔬 <b>Specialisation:</b> Educational Administration, Institutional Growth & Trust Governance</div><div class=\"ssmrv-dept-prof-comm\">🛡️ <b>Role:</b> Hon. Secretary — RSST / RVEI | Governing Council Member</div></div></div><div class=\"ssmrv-dept-profile-item\" data-profile-id=\"mr-d-p-nagaraj\" title=\"Click to view full profile of Mr. D.P. Nagaraj\"><div class=\"ssmrv-dept-prof-header\"><span class=\"ssmrv-dept-prof-name\">👤 Mr. D.P. Nagaraj</span></div><div class=\"ssmrv-faculty-badges\"><span class=\"ssmrv-badge-desig\">🎖️ Hon. Joint Secretary — RSST / RVEI</span><span class=\"ssmrv-badge-dept\">🏛️ Board of Management (RSST)</span></div><div class=\"ssmrv-dept-prof-actions\"><span class=\"ssmrv-dept-prof-cta\">👤 View Full Profile</span><a href=\"https://www.ssmrv.edu.in/mr_d_p_nagaraj/\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"ssmrv-dept-visit-btn\">🌐 Visit Website Page ↗</a></div><div class=\"ssmrv-dept-prof-meta\"><div>🎓 <b>Qualifications:</b> Educational Administrator & Strategic Planner • Honorary Joint Secretary, Rashtreeya Sikshana Samithi Trust (RSST)</div><div>🔬 <b>Specialisation:</b> Institutional Development, Infrastructure & Academic Operations</div><div class=\"ssmrv-dept-prof-comm\">🛡️ <b>Role:</b> Hon. Joint Secretary — RSST / RVEI | Governing Council Member</div></div></div><div class=\"ssmrv-dept-profile-item\" data-profile-id=\"mr-p-s-venkatesh-babu\" title=\"Click to view full profile of Mr. P.S. Venkatesh Babu\"><div class=\"ssmrv-dept-prof-header\"><span class=\"ssmrv-dept-prof-name\">👤 Mr. P.S. Venkatesh Babu</span></div><div class=\"ssmrv-faculty-badges\"><span class=\"ssmrv-badge-desig\">🎖️ Hon. Treasurer — RSST / RVEI</span><span class=\"ssmrv-badge-dept\">🏛️ Board of Management (RSST)</span></div><div class=\"ssmrv-dept-prof-actions\"><span class=\"ssmrv-dept-prof-cta\">👤 View Full Profile</span><a href=\"https://www.ssmrv.edu.in/about_us/board_of_management/\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"ssmrv-dept-visit-btn\">🌐 Visit Website Page ↗</a></div><div class=\"ssmrv-dept-prof-meta\"><div>🎓 <b>Qualifications:</b> Financial Governance & Trust Management • Honorary Treasurer, Rashtreeya Sikshana Samithi Trust (RSST)</div><div>🔬 <b>Specialisation:</b> Financial Stewardship, Institutional Audits & Resource Allocation</div><div class=\"ssmrv-dept-prof-comm\">🛡️ <b>Role:</b> Hon. Treasurer — RSST / RVEI | Governing Council Member</div></div></div><div class=\"ssmrv-dept-profile-item\" data-profile-id=\"dr-a-c-chandrashekar-raju\" title=\"Click to view full profile of Dr. A.C. Chandrashekar Raju\"><div class=\"ssmrv-dept-prof-header\"><span class=\"ssmrv-dept-prof-name\">👤 Dr. A.C. Chandrashekar Raju</span></div><div class=\"ssmrv-faculty-badges\"><span class=\"ssmrv-badge-desig\">🎖️ Vice President — RSST / RVEI</span><span class=\"ssmrv-badge-dept\">🏛️ Board of Management (RSST)</span></div><div class=\"ssmrv-dept-prof-actions\"><span class=\"ssmrv-dept-prof-cta\">👤 View Full Profile</span><a href=\"https://www.ssmrv.edu.in/about_us/board_of_management/\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"ssmrv-dept-visit-btn\">🌐 Visit Website Page ↗</a></div><div class=\"ssmrv-dept-prof-meta\"><div>🎓 <b>Qualifications:</b> Trustee & Vice President, RSST • Supervising Committee & Board of Management, RVEI</div><div>🔬 <b>Specialisation:</b> Institutional Governance & Higher Education Leadership</div><div class=\"ssmrv-dept-prof-comm\">🛡️ <b>Role:</b> Vice President — RSST / RVEI Board of Management</div></div></div><div class=\"ssmrv-dept-profile-item\" data-profile-id=\"dr-c-vinod-hayagriv\" title=\"Click to view full profile of Dr. C. Vinod Hayagriv\"><div class=\"ssmrv-dept-prof-header\"><span class=\"ssmrv-dept-prof-name\">👤 Dr. C. Vinod Hayagriv</span></div><div class=\"ssmrv-faculty-badges\"><span class=\"ssmrv-badge-desig\">🎖️ Vice President — RSST / RVEI</span><span class=\"ssmrv-badge-dept\">🏛️ Board of Management (RSST)</span></div><div class=\"ssmrv-dept-prof-actions\"><span class=\"ssmrv-dept-prof-cta\">👤 View Full Profile</span><a href=\"https://www.ssmrv.edu.in/about_us/board_of_management/\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"ssmrv-dept-visit-btn\">🌐 Visit Website Page ↗</a></div><div class=\"ssmrv-dept-prof-meta\"><div>🎓 <b>Qualifications:</b> Trustee & Vice President, RSST • Supervising Committee & Board of Management, RVEI</div><div>🔬 <b>Specialisation:</b> Strategic Partnerships & Institutional Excellence</div><div class=\"ssmrv-dept-prof-comm\">🛡️ <b>Role:</b> Vice President — RSST / RVEI Board of Management</div></div></div><div class=\"ssmrv-dept-profile-item\" data-profile-id=\"mr-m-r-arvind\" title=\"Click to view full profile of Mr. M.R. Arvind\"><div class=\"ssmrv-dept-prof-header\"><span class=\"ssmrv-dept-prof-name\">👤 Mr. M.R. Arvind</span></div><div class=\"ssmrv-faculty-badges\"><span class=\"ssmrv-badge-desig\">🎖️ Chairman — Governing Council</span><span class=\"ssmrv-badge-dept\">🏛️ Board of Management (RSST)</span></div><div class=\"ssmrv-dept-prof-actions\"><span class=\"ssmrv-dept-prof-cta\">👤 View Full Profile</span><a href=\"https://www.ssmrv.edu.in/about_us/board_of_management/\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"ssmrv-dept-visit-btn\">🌐 Visit Website Page ↗</a></div><div class=\"ssmrv-dept-prof-meta\"><div>🎓 <b>Qualifications:</b> Trustee, RSST & Chairman, Governing Council • Governing Council Leadership, SSMRV Degree College</div><div>🔬 <b>Specialisation:</b> Academic Governance & Strategic Institutional Oversight</div><div class=\"ssmrv-dept-prof-comm\">🛡️ <b>Role:</b> Chairman — Governing Council (SSMRV College)</div></div></div></div>",
      "buttons": [
          {
              "text": "👤 Dr. Vijayashree L. (Principal)",
              "action": "profile:dr-vijayashree-l"
          },
          {
              "text": "👤 Dr. M.P. Shyam (President)",
              "action": "profile:dr-m-p-shyam"
          },
          {
              "text": "👤 Dr. (h.c.) A.V.S. Murthy",
              "action": "profile:dr-h-c-a-v-s-murthy"
          },
          {
              "text": "👤 Mr. D.P. Nagaraj",
              "action": "profile:mr-d-p-nagaraj"
          },
          {
              "text": "👤 Mr. P.S. Venkatesh Babu",
              "action": "profile:mr-p-s-venkatesh-babu"
          },
          {
              "text": "👤 Dr. A.C. Chandrashekar Raju",
              "action": "profile:dr-a-c-chandrashekar-raju"
          },
          {
              "text": "👤 Dr. C. Vinod Hayagriv",
              "action": "profile:dr-c-vinod-hayagriv"
          },
          {
              "text": "👤 Mr. M.R. Arvind",
              "action": "profile:mr-m-r-arvind"
          },
          {
              "text": "🌐 Visit Department Faculty Webpage ↗",
              "url": "https://www.ssmrv.edu.in/about_us/board_of_management/"
          },
          {
              "text": "📞 Contact Principal's Office",
              "action": "flow:contact"
          },
          {
              "text": "👨‍🏫 All Departments (92)",
              "action": "flow:faculty"
          }
      ]
  },

  faculty_committees: {
      "id": "faculty_committees",
      "pageUrl": "https://www.ssmrv.edu.in/campus_life/clubs_and_associations/statutory_committees_and_support_system/",
      "message": "<b>🛡️ Official Statutory Committees &amp; Cell Conveners (16 Conveners)</b><br><span style=\"font-size:11.5px;color:#475569;\">NAAC, UGC &amp; University Statutory Committee Heads. Click <b>View Full Profile</b> or <b>Visit Website Page ↗</b> on any card below:</span><div class=\"ssmrv-dept-profile-list\"><div class=\"ssmrv-dept-profile-item\" data-profile-id=\"ms-r-shanthi-krishna\" title=\"Click to view full profile of Mrs. R. Shanthi Krishna\"><div class=\"ssmrv-dept-prof-header\"><span class=\"ssmrv-dept-prof-name\">👤 Mrs. R. Shanthi Krishna</span></div><div class=\"ssmrv-faculty-badges\"><span class=\"ssmrv-badge-desig\">🎖️ Assistant Professor & IQAC Coordinator</span><span class=\"ssmrv-badge-dept\">🏛️ Computer Applications (BCA)</span></div><div class=\"ssmrv-dept-prof-actions\"><span class=\"ssmrv-dept-prof-cta\">👤 View Full Profile</span><a href=\"https://www.ssmrv.edu.in/academics/teaching_faculty/ms_r_shanthi_krishna/\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"ssmrv-dept-visit-btn\">🌐 Visit Website Page ↗</a></div><div class=\"ssmrv-dept-prof-meta\"><div>🎓 <b>Qualifications:</b> B.Sc (Sri Sarada College), MCA (Nehru Memorial College), M.Phil. (Manonmaniam Sundaranar University), PGP-AIML (Great Lakes Executive Learning) • 19+ Years Collegiate Teaching Experience (Former HOD BCA 2014–2024)</div><div>🔬 <b>Specialisation:</b> Machine Learning, Artificial Intelligence, Programming Languages</div><div class=\"ssmrv-dept-prof-comm\">🛡️ <b>Role:</b> IQAC Coordinator / Convener (Internal Quality Assurance Cell — NAAC)</div></div></div><div class=\"ssmrv-dept-profile-item\" data-profile-id=\"dr-vijayashree-l\" title=\"Click to view full profile of Dr. Vijayashree L.\"><div class=\"ssmrv-dept-prof-header\"><span class=\"ssmrv-dept-prof-name\">👤 Dr. Vijayashree L.</span></div><div class=\"ssmrv-faculty-badges\"><span class=\"ssmrv-badge-desig\">🎖️ Principal & Professor</span><span class=\"ssmrv-badge-dept\">🏛️ Institutional Leadership</span></div><div class=\"ssmrv-dept-prof-actions\"><span class=\"ssmrv-dept-prof-cta\">👤 View Full Profile</span><a href=\"https://www.ssmrv.edu.in/academics/teaching_faculty/dr-vijayashree-l/\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"ssmrv-dept-visit-btn\">🌐 Visit Website Page ↗</a></div><div class=\"ssmrv-dept-prof-meta\"><div>🎓 <b>Qualifications:</b> MBA, M.Phil., Ph.D., NET | Certified Harvard Design Thinker • 19+ Years Academic Experience (incl. 3 yrs Head & Professor of MBA) + 4 Years Industry Experience</div><div>🔬 <b>Specialisation:</b> Academic Leadership, Innovation Strategy, Entrepreneurship & Start-up Incubation, IP Creation</div><div class=\"ssmrv-dept-prof-comm\">🛡️ <b>Role:</b> Principal — SSMRV College | Chairperson — Grievance Redressal Cell</div></div></div><div class=\"ssmrv-dept-profile-item\" data-profile-id=\"dr-revathy-shivashankaran\" title=\"Click to view full profile of Dr. Revathy Shivashankaran\"><div class=\"ssmrv-dept-prof-header\"><span class=\"ssmrv-dept-prof-name\">👤 Dr. Revathy Shivashankaran</span></div><div class=\"ssmrv-faculty-badges\"><span class=\"ssmrv-badge-desig\">🎖️ Associate Professor and HOD – BBA</span><span class=\"ssmrv-badge-dept\">🏛️ Business Administration (BBA & Aviation)</span></div><div class=\"ssmrv-dept-prof-actions\"><span class=\"ssmrv-dept-prof-cta\">👤 View Full Profile</span><a href=\"https://www.ssmrv.edu.in/academics/teaching_faculty/dr_revathy_shivashankaran/\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"ssmrv-dept-visit-btn\">🌐 Visit Website Page ↗</a></div><div class=\"ssmrv-dept-prof-meta\"><div>🎓 <b>Qualifications:</b> B.Sc (Mathematics, University of Madras), MBA (University of Madras), M.Com (IGNOU), Ph.D. (Mother Teresa Women's University, Kodaikanal) • 25+ Years Combined Experience (16.5 Years Academia + 8.5 Years Corporate)</div><div>🔬 <b>Specialisation:</b> Organisational Behaviour & HRM, HR Analytics, General Management</div><div class=\"ssmrv-dept-prof-comm\">🛡️ <b>Role:</b> Associate Professor & HOD — BBA | College Chairperson — Internal Compliance (POSH) | Grievance Redressal Cell (BBA)</div></div></div><div class=\"ssmrv-dept-profile-item\" data-profile-id=\"mr-yallappa-m\" title=\"Click to view full profile of Mr. Yallappa M.\"><div class=\"ssmrv-dept-prof-header\"><span class=\"ssmrv-dept-prof-name\">👤 Mr. Yallappa M.</span></div><div class=\"ssmrv-faculty-badges\"><span class=\"ssmrv-badge-desig\">🎖️ Assistant Professor & NSS Programme Officer</span><span class=\"ssmrv-badge-dept\">🏛️ Commerce (B.Com)</span></div><div class=\"ssmrv-dept-prof-actions\"><span class=\"ssmrv-dept-prof-cta\">👤 View Full Profile</span><a href=\"https://www.ssmrv.edu.in/academics/teaching_faculty/mr_yallappa_m/\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"ssmrv-dept-visit-btn\">🌐 Visit Website Page ↗</a></div><div class=\"ssmrv-dept-prof-meta\"><div>🎓 <b>Qualifications:</b> B.Com (RC College, Bangalore), MFA (Central College, Bangalore University), M.Com, M.Phil, Ph.D. (Pursuing, Jain University) • 15+ Years Teaching Experience in Finance & Commerce</div><div>🔬 <b>Specialisation:</b> Finance, Financial Analysis & Accounting</div><div class=\"ssmrv-dept-prof-comm\">🛡️ <b>Role:</b> College SPOC — NSS Unit (Programme Officer) | SC/ST Cell, Entrepreneurship & Discipline Committees (B.Com)</div></div></div><div class=\"ssmrv-dept-profile-item\" data-profile-id=\"avinash-k-v\" title=\"Click to view full profile of Mr. Avinash K.V.\"><div class=\"ssmrv-dept-prof-header\"><span class=\"ssmrv-dept-prof-name\">👤 Mr. Avinash K.V.</span></div><div class=\"ssmrv-faculty-badges\"><span class=\"ssmrv-badge-desig\">🎖️ Assistant Professor & Associate NCC Officer (ANO)</span><span class=\"ssmrv-badge-dept\">🏛️ Business Administration (BBA & Aviation)</span></div><div class=\"ssmrv-dept-prof-actions\"><span class=\"ssmrv-dept-prof-cta\">👤 View Full Profile</span><a href=\"https://www.ssmrv.edu.in/academics/teaching_faculty/avinash_k_v/\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"ssmrv-dept-visit-btn\">🌐 Visit Website Page ↗</a></div><div class=\"ssmrv-dept-prof-meta\"><div>🎓 <b>Qualifications:</b> B.Com, M.Com, MBA • Management Educator & Commissioned Associate NCC Officer</div><div>🔬 <b>Specialisation:</b> Accounting and Taxation, Human Resources Management & Youth Leadership</div><div class=\"ssmrv-dept-prof-comm\">🛡️ <b>Role:</b> College SPOC — NCC Unit (Associate NCC Officer)</div></div></div><div class=\"ssmrv-dept-profile-item\" data-profile-id=\"dr-mohan-rao-c-n\" title=\"Click to view full profile of Dr. Mohan Rao C.N.\"><div class=\"ssmrv-dept-prof-header\"><span class=\"ssmrv-dept-prof-name\">👤 Dr. Mohan Rao C.N.</span></div><div class=\"ssmrv-faculty-badges\"><span class=\"ssmrv-badge-desig\">🎖️ Assistant Professor & Chief Superintendent of Examinations</span><span class=\"ssmrv-badge-dept\">🏛️ Commerce (B.Com)</span></div><div class=\"ssmrv-dept-prof-actions\"><span class=\"ssmrv-dept-prof-cta\">👤 View Full Profile</span><a href=\"https://www.ssmrv.edu.in/academics/teaching_faculty/\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"ssmrv-dept-visit-btn\">🌐 Visit Website Page ↗</a></div><div class=\"ssmrv-dept-prof-meta\"><div>🎓 <b>Qualifications:</b> M.Com, Ph.D. • Senior Academician & Examination Controller</div><div>🔬 <b>Specialisation:</b> Commerce, Corporate Accounting & University Examinations</div><div class=\"ssmrv-dept-prof-comm\">🛡️ <b>Role:</b> College SPOC & Convener — Examination Committee</div></div></div><div class=\"ssmrv-dept-profile-item\" data-profile-id=\"nandini-j\" title=\"Click to view full profile of Ms. Nandini J\"><div class=\"ssmrv-dept-prof-header\"><span class=\"ssmrv-dept-prof-name\">👤 Ms. Nandini J</span></div><div class=\"ssmrv-faculty-badges\"><span class=\"ssmrv-badge-desig\">🎖️ Assistant Professor</span><span class=\"ssmrv-badge-dept\">🏛️ Commerce (B.Com)</span></div><div class=\"ssmrv-dept-prof-actions\"><span class=\"ssmrv-dept-prof-cta\">👤 View Full Profile</span><a href=\"https://www.ssmrv.edu.in/academics/teaching_faculty/nandini_j/\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"ssmrv-dept-visit-btn\">🌐 Visit Website Page ↗</a></div><div class=\"ssmrv-dept-prof-meta\"><div>🎓 <b>Qualifications:</b> M.Com, Academic & Statutory Cell Coordinator • Commerce Teaching & Institutional Statutory Leadership</div><div>🔬 <b>Specialisation:</b> Commerce, Business Ethics & Student Welfare</div><div class=\"ssmrv-dept-prof-comm\">🛡️ <b>Role:</b> College SPOC — Anti-Ragging Cell, Human Rights Protection Cell, Anti-Drug Cell & Discipline Committee</div></div></div><div class=\"ssmrv-dept-profile-item\" data-profile-id=\"mrs-sumana-h-n\" title=\"Click to view full profile of Mrs. Sumana H.N.\"><div class=\"ssmrv-dept-prof-header\"><span class=\"ssmrv-dept-prof-name\">👤 Mrs. Sumana H.N.</span></div><div class=\"ssmrv-faculty-badges\"><span class=\"ssmrv-badge-desig\">🎖️ Placement Officer</span><span class=\"ssmrv-badge-dept\">🏛️ Training & Placement Cell (Paryapti)</span></div><div class=\"ssmrv-dept-prof-actions\"><span class=\"ssmrv-dept-prof-cta\">👤 View Full Profile</span><a href=\"https://www.ssmrv.edu.in/campus_life/placement/\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"ssmrv-dept-visit-btn\">🌐 Visit Website Page ↗</a></div><div class=\"ssmrv-dept-prof-meta\"><div>🎓 <b>Qualifications:</b> Corporate Relations, HR & Campus Recruitment Specialist • Head of Paryapti Training & Placement Cell</div><div>🔬 <b>Specialisation:</b> Campus Placements (Highest 11 LPA CTC), Corporate Tie-ups & Pre-Placement Training</div><div class=\"ssmrv-dept-prof-comm\">🛡️ <b>Role:</b> College SPOC — Placement & Career Guidance Cell (Paryapti)</div></div></div><div class=\"ssmrv-dept-profile-item\" data-profile-id=\"dr-s-chethana\" title=\"Click to view full profile of Dr. S. Chethana\"><div class=\"ssmrv-dept-prof-header\"><span class=\"ssmrv-dept-prof-name\">👤 Dr. S. Chethana</span></div><div class=\"ssmrv-faculty-badges\"><span class=\"ssmrv-badge-desig\">🎖️ Assistant Professor</span><span class=\"ssmrv-badge-dept\">🏛️ Computer Applications (BCA)</span></div><div class=\"ssmrv-dept-prof-actions\"><span class=\"ssmrv-dept-prof-cta\">👤 View Full Profile</span><a href=\"https://www.ssmrv.edu.in/academics/teaching_faculty/dr_s_chethana/\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"ssmrv-dept-visit-btn\">🌐 Visit Website Page ↗</a></div><div class=\"ssmrv-dept-prof-meta\"><div>🎓 <b>Qualifications:</b> B.Sc (Electronics, University of Mysore), MCA (IGNOU), Ph.D. (Jain University) • 22+ Years Teaching Experience in Computer Science</div><div>🔬 <b>Specialisation:</b> Artificial Intelligence, Internet of Things (IoT), Software Engineering, Medical Image Processing</div><div class=\"ssmrv-dept-prof-comm\">🛡️ <b>Role:</b> College SPOC & Convener — Innovation Cell & IPR Cell | Examination Committee (BCA)</div></div></div><div class=\"ssmrv-dept-profile-item\" data-profile-id=\"dr-vinaya-t\" title=\"Click to view full profile of Dr. Vinaya T.\"><div class=\"ssmrv-dept-prof-header\"><span class=\"ssmrv-dept-prof-name\">👤 Dr. Vinaya T.</span></div><div class=\"ssmrv-faculty-badges\"><span class=\"ssmrv-badge-desig\">🎖️ Assistant Professor and Coordinator (B.Com 2nd Year)</span><span class=\"ssmrv-badge-dept\">🏛️ Commerce (B.Com)</span></div><div class=\"ssmrv-dept-prof-actions\"><span class=\"ssmrv-dept-prof-cta\">👤 View Full Profile</span><a href=\"https://www.ssmrv.edu.in/academics/teaching_faculty/dr_vinaya_t/\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"ssmrv-dept-visit-btn\">🌐 Visit Website Page ↗</a></div><div class=\"ssmrv-dept-prof-meta\"><div>🎓 <b>Qualifications:</b> BBM, M.Com, Ph.D. (University of Mysore, Manasagangotri) • 17+ Years Teaching & Corporate Experience</div><div>🔬 <b>Specialisation:</b> Finance, Accounting, Taxation and Empirical Research</div><div class=\"ssmrv-dept-prof-comm\">🛡️ <b>Role:</b> B.Com 2nd Year Coordinator | College SPOC — Entrepreneurship Cell | Sports Committee (B.Com)</div></div></div><div class=\"ssmrv-dept-profile-item\" data-profile-id=\"mr-gokul-c\" title=\"Click to view full profile of Mr. Gokul C.\"><div class=\"ssmrv-dept-prof-header\"><span class=\"ssmrv-dept-prof-name\">👤 Mr. Gokul C.</span></div><div class=\"ssmrv-faculty-badges\"><span class=\"ssmrv-badge-desig\">🎖️ Assistant Professor and Coordinator (B.Com 1st Year)</span><span class=\"ssmrv-badge-dept\">🏛️ Commerce (B.Com)</span></div><div class=\"ssmrv-dept-prof-actions\"><span class=\"ssmrv-dept-prof-cta\">👤 View Full Profile</span><a href=\"https://www.ssmrv.edu.in/academics/teaching_faculty/mr_gokul_c/\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"ssmrv-dept-visit-btn\">🌐 Visit Website Page ↗</a></div><div class=\"ssmrv-dept-prof-meta\"><div>🎓 <b>Qualifications:</b> B.Com (Bangalore University), MBA (Bangalore University), M.Com (Annamalai University), PGDBI (Annamalai University), KSET • 10+ Years Corporate Industry Experience + 10+ Years Academic Experience</div><div>🔬 <b>Specialisation:</b> Accounting, Taxation, Financial Management & General Management</div><div class=\"ssmrv-dept-prof-comm\">🛡️ <b>Role:</b> B.Com 1st Year Coordinator | College SPOC — Alumni Association (Sammilana) | Innovation Cell (B.Com)</div></div></div><div class=\"ssmrv-dept-profile-item\" data-profile-id=\"sharavana-m\" title=\"Click to view full profile of Mr. Sharavana M\"><div class=\"ssmrv-dept-prof-header\"><span class=\"ssmrv-dept-prof-name\">👤 Mr. Sharavana M</span></div><div class=\"ssmrv-faculty-badges\"><span class=\"ssmrv-badge-desig\">🎖️ Assistant Professor</span><span class=\"ssmrv-badge-dept\">🏛️ Commerce (B.Com)</span></div><div class=\"ssmrv-dept-prof-actions\"><span class=\"ssmrv-dept-prof-cta\">👤 View Full Profile</span><a href=\"https://www.ssmrv.edu.in/academics/teaching_faculty/sharavana_m/\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"ssmrv-dept-visit-btn\">🌐 Visit Website Page ↗</a></div><div class=\"ssmrv-dept-prof-meta\"><div>🎓 <b>Qualifications:</b> M.Com, Statutory Cell Convener • Commerce Teaching & Student Support Systems</div><div>🔬 <b>Specialisation:</b> Commerce, Accounting & Inclusive Education</div><div class=\"ssmrv-dept-prof-comm\">🛡️ <b>Role:</b> College SPOC & Convener — SC/ST Cell (UGC / NAAC)</div></div></div><div class=\"ssmrv-dept-profile-item\" data-profile-id=\"chiranjivi-m-s\" title=\"Click to view full profile of Mr. Chiranjivi M S\"><div class=\"ssmrv-dept-prof-header\"><span class=\"ssmrv-dept-prof-name\">👤 Mr. Chiranjivi M S</span></div><div class=\"ssmrv-faculty-badges\"><span class=\"ssmrv-badge-desig\">🎖️ Assistant Professor & Sports Coordinator</span><span class=\"ssmrv-badge-dept\">🏛️ Physical Education & Sports</span></div><div class=\"ssmrv-dept-prof-actions\"><span class=\"ssmrv-dept-prof-cta\">👤 View Full Profile</span><a href=\"https://www.ssmrv.edu.in/academics/teaching_faculty/chiranjivi_m_s/\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"ssmrv-dept-visit-btn\">🌐 Visit Website Page ↗</a></div><div class=\"ssmrv-dept-prof-meta\"><div>🎓 <b>Qualifications:</b> Postgraduate Faculty & Sports Convener • Academic Faculty & College Sports Committee SPOC</div><div>🔬 <b>Specialisation:</b> Sports Administration, Youth Athletics & Campus Discipline</div><div class=\"ssmrv-dept-prof-comm\">🛡️ <b>Role:</b> College SPOC — Sports Committee & Discipline Committee</div></div></div><div class=\"ssmrv-dept-profile-item\" data-profile-id=\"mrs-teja-k-r\" title=\"Click to view full profile of Mrs. Teja K.R.\"><div class=\"ssmrv-dept-prof-header\"><span class=\"ssmrv-dept-prof-name\">👤 Mrs. Teja K.R.</span></div><div class=\"ssmrv-faculty-badges\"><span class=\"ssmrv-badge-desig\">🎖️ Junior Director of Physical Education</span><span class=\"ssmrv-badge-dept\">🏛️ Physical Education & Sports</span></div><div class=\"ssmrv-dept-prof-actions\"><span class=\"ssmrv-dept-prof-cta\">👤 View Full Profile</span><a href=\"https://www.ssmrv.edu.in/academics/teaching_faculty/\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"ssmrv-dept-visit-btn\">🌐 Visit Website Page ↗</a></div><div class=\"ssmrv-dept-prof-meta\"><div>🎓 <b>Qualifications:</b> M.P.Ed (Master of Physical Education) • Sports & Wellness Centre Leadership</div><div>🔬 <b>Specialisation:</b> Athletics, Indoor & Outdoor Sports Coaching, Yoga & Student Wellness</div><div class=\"ssmrv-dept-prof-comm\">🛡️ <b>Role:</b> College SPOC — Sports Committee & Sports Wellness Centre</div></div></div><div class=\"ssmrv-dept-profile-item\" data-profile-id=\"ms-bharathi-n-s\" title=\"Click to view full profile of Dr. / Ms. Bharathi N.S.\"><div class=\"ssmrv-dept-prof-header\"><span class=\"ssmrv-dept-prof-name\">👤 Dr. / Ms. Bharathi N.S.</span></div><div class=\"ssmrv-faculty-badges\"><span class=\"ssmrv-badge-desig\">🎖️ Assistant Professor</span><span class=\"ssmrv-badge-dept\">🏛️ Commerce (B.Com)</span></div><div class=\"ssmrv-dept-prof-actions\"><span class=\"ssmrv-dept-prof-cta\">👤 View Full Profile</span><a href=\"https://www.ssmrv.edu.in/academics/teaching_faculty/ms_bharathi_n_s/\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"ssmrv-dept-visit-btn\">🌐 Visit Website Page ↗</a></div><div class=\"ssmrv-dept-prof-meta\"><div>🎓 <b>Qualifications:</b> B.Com (Bangalore University), M.Com (IGNOU), MBA (Alagappa University), PGDBIO (IGNOU), Ph.D. (Christ Deemed-to-be University) • 10+ Years Teaching & Research Experience</div><div>🔬 <b>Specialisation:</b> Marketing, Finance, Accountancy, Cognitive Psychology & Neuroscience</div><div class=\"ssmrv-dept-prof-comm\">🛡️ <b>Role:</b> Internal Cultural Committee SPOC (Tarangini) | Examination Committee (B.Com)</div></div></div><div class=\"ssmrv-dept-profile-item\" data-profile-id=\"ms-soujanya-d\" title=\"Click to view full profile of Ms. Soujannya D.\"><div class=\"ssmrv-dept-prof-header\"><span class=\"ssmrv-dept-prof-name\">👤 Ms. Soujannya D.</span></div><div class=\"ssmrv-faculty-badges\"><span class=\"ssmrv-badge-desig\">🎖️ Assistant Professor (English)</span><span class=\"ssmrv-badge-dept\">🏛️ Languages & Humanities</span></div><div class=\"ssmrv-dept-prof-actions\"><span class=\"ssmrv-dept-prof-cta\">👤 View Full Profile</span><a href=\"https://www.ssmrv.edu.in/academics/teaching_faculty/ms_soujanya_d/\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"ssmrv-dept-visit-btn\">🌐 Visit Website Page ↗</a></div><div class=\"ssmrv-dept-prof-meta\"><div>🎓 <b>Qualifications:</b> B.A. (English, Psychology, Sociology), M.A. (English) • 10+ Years Experience in English Literature & Soft Skills Development</div><div>🔬 <b>Specialisation:</b> Humanities, English Literature, Poetry & Classical Music</div><div class=\"ssmrv-dept-prof-comm\">🛡️ <b>Role:</b> External Cultural Committee SPOC (Inter-Collegiate Events & Fests)</div></div></div></div>",
      "buttons": [
          {
              "text": "👤 Mrs. R. Shanthi Krishna",
              "action": "profile:ms-r-shanthi-krishna"
          },
          {
              "text": "👤 Dr. Vijayashree L.",
              "action": "profile:dr-vijayashree-l"
          },
          {
              "text": "👤 Dr. Revathy Shivashankaran",
              "action": "profile:dr-revathy-shivashankaran"
          },
          {
              "text": "👤 Mr. Yallappa M.",
              "action": "profile:mr-yallappa-m"
          },
          {
              "text": "👤 Mr. Avinash K.V.",
              "action": "profile:avinash-k-v"
          },
          {
              "text": "👤 Dr. Mohan Rao C.N.",
              "action": "profile:dr-mohan-rao-c-n"
          },
          {
              "text": "👤 Ms. Nandini J",
              "action": "profile:nandini-j"
          },
          {
              "text": "👤 Mrs. Sumana H.N.",
              "action": "profile:mrs-sumana-h-n"
          },
          {
              "text": "👤 Dr. S. Chethana",
              "action": "profile:dr-s-chethana"
          },
          {
              "text": "👤 Dr. Vinaya T.",
              "action": "profile:dr-vinaya-t"
          },
          {
              "text": "👤 Mr. Gokul C.",
              "action": "profile:mr-gokul-c"
          },
          {
              "text": "👤 Mr. Sharavana M",
              "action": "profile:sharavana-m"
          },
          {
              "text": "👤 Mr. Chiranjivi M S",
              "action": "profile:chiranjivi-m-s"
          },
          {
              "text": "👤 Mrs. Teja K.R.",
              "action": "profile:mrs-teja-k-r"
          },
          {
              "text": "👤 Dr. / Ms. Bharathi N.S.",
              "action": "profile:ms-bharathi-n-s"
          },
          {
              "text": "👤 Ms. Soujannya D.",
              "action": "profile:ms-soujanya-d"
          },
          {
              "text": "🌐 Visit Committees Webpage ↗",
              "url": "https://www.ssmrv.edu.in/campus_life/clubs_and_associations/statutory_committees_and_support_system/"
          },
          {
              "text": "🌟 Centres & Clubs",
              "action": "flow:centres_clubs"
          },
          {
              "text": "👨‍🏫 All Faculty Directory (92)",
              "action": "flow:faculty"
          }
      ]
  },

  prospectus_downloads: {
    id: "prospectus_downloads",
    pageUrl: "https://www.ssmrv.edu.in/about_us/mandatory_disclosure/",
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
    pageUrl: "https://www.ssmrv.edu.in/contact_us/",
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
  },

  centres_clubs: {
    id: "centres_clubs",
    pageUrl: "https://www.ssmrv.edu.in/campus_life/clubs_and_associations/",
    message: `<b>Centres of Excellence & Student Clubs</b><br>• <b>RAISE Centre of Excellence:</b> Research, innovation, and startup incubation.<br>• <b>Centres:</b> Culture & Heritage, Sustainability, Partnership & Global MOUs, Sports & Wellness.<br>• <b>Clubs:</b> TechVeda (Coding), Rotaract, Youth Red Cross, NSS, and E-Cell.<br><br>Which area would you like to explore?`,
    buttons: [
      { text: "🚀 Learn About RAISE Centre", action: "faq:What is RAISE Centre of Excellence?" },
      { text: "🛡️ Anti-Ragging & Support", action: "faq:What is the Anti-Ragging and Grievance Policy?" },
      { text: "🌐 View All Clubs Online", url: "https://www.ssmrv.edu.in/campus_life/clubs_and_associations/" },
      { text: "↩️ Main Menu", action: "flow:welcome" }
    ]
  },

  admissions: {
    id: "admissions",
    message: `<b>SSMRV Praveshan Admission Process</b><br>1. <b>Register:</b> Create your account on the admission portal.<br>2. <b>Apply Online:</b> Fill out the application form & upload marks cards.<br>3. <b>Interaction:</b> Attend entrance assessment & interview with faculty.<br>4. <b>Offer Letter:</b> Receive provisional seat allotment via email.<br>5. <b>Verification:</b> Complete fee payment and document verification.<br><br>📞 <b>Helpline:</b> 97395 88855 / 97396 55500 / 96065 37192`,
    buttons: [
      { text: "🌐 Online Admission Portal", url: "https://www.ssmrv.edu.in/admission_procedure/" },
      { text: "📋 Fill Quick Enquiry Form", action: "flow:inquiry_form" },
      { text: "🏫 Book Campus Visit", action: "flow:campus_visit" },
      { text: "💬 Chat on WhatsApp", url: "https://wa.me/919739588855?text=Hello%20SSMRV%20Admissions%20Team%2C%20I%20would%20like%20information%20regarding%20admissions" },
      { text: "❓ Admission FAQs", action: "faq:How can I apply for admission?" },
      { text: "↩️ Main Menu", action: "flow:welcome" }
    ]
  },

  placements: {
    id: "placements",
    pageUrl: "https://www.ssmrv.edu.in/placement/",
    message: `<b>💼 Paryapti Training & Placement Cell — Career Statistics</b><br>
• <b>Placement Record:</b> Over <b>90%+</b> students placed annually.<br>
• <b>Highest Package CTC:</b> <b>11 LPA</b> (BBA) | <b>8 LPA</b> (BCA & B.Com).<br>
• <b>Average CTC Payscale:</b> <b>5 LPA to 6.5 LPA</b>.<br>
• <b>Programme-Wise Placement Statistics:</b><br>
  - <b>BBA:</b> Highest CTC 11 LPA | Average 6.5 LPA (42+ Offers)<br>
  - <b>BCA:</b> Highest CTC 8 LPA | Average 5 LPA (84+ Offers)<br>
  - <b>B.Com:</b> Highest CTC 8 LPA | Average 5 LPA (69+ Offers)<br>
• <b>Top Recruiters:</b> Deloitte, Accenture, Infosys, Wipro, TCS, Capgemini, Cognizant, EY, KPMG, Amazon, Target, ICICI Bank.<br>
• <b>Pre-Placement Training:</b> Soft skills, technical upskilling, resume building & mock interviews starting from Semester 1.<br><br>
📞 <b>Placement Head:</b> Mrs. Sumana H.N. – <b>+91 96060 67551</b>`,
    buttons: [
      { text: "📝 Apply for Admission", action: "flow:inquiry_form" },
      { text: "📊 Explore Programmes", action: "flow:programmes" },
      { text: "🌐 View Full Placement Report", url: "https://www.ssmrv.edu.in/placement/" },
      { text: "↩️ Main Menu", action: "flow:welcome" }
    ]
  },

  campus: {
    id: "campus",
    pageUrl: "https://www.ssmrv.edu.in/campus_life/infrastructure/",
    message: `<b>Campus Life & Infrastructure</b><br>• <b>Location:</b> Prime Jayanagar 4th T Block campus with easy metro & bus connectivity.<br>• <b>Academic Spaces:</b> ICT smart classrooms, high-speed computer labs, and A/C seminar halls.<br>• <b>Library:</b> 45,000+ volumes, international journals, IEEE/EBSCO/Inflibnet digital access.<br>• <b>Sports & Health:</b> Badminton court, gym, sports ground, on-campus health clinic.<br>• <b>Clubs:</b> Cultural 'Sambhram', Rotaract, E-Cell, NSS, TechVeda, and Commerce Forum.`,
    buttons: [
      { text: "🏫 Book a Campus Visit", action: "flow:campus_visit" },
      { text: "📍 Google Maps Directions", url: "https://www.google.com/maps/search/?api=1&query=SSMRV+College+Jayanagar+Bengaluru" },
      { text: "📞 Contact Campus Office", action: "flow:contact" },
      { text: "↩️ Main Menu", action: "flow:welcome" }
    ]
  },

  contact: {
    id: "contact",
    message: `<b>Contact SSMRV College</b><br>📍 <b>Address:</b> #17, 36th Cross Road, 26th Main, 4th 'T' Block East, Jayanagar, Bengaluru - 560041<br>📞 <b>Landline:</b> 080 6824 0999<br>📱 <b>Admission Helplines:</b> 97395 88855 | 97396 55500 | 96065 37192<br>✉️ <b>Office:</b> office.ssmrv@rvei.edu.in<br>✉️ <b>Principal:</b> principal.ssmrv@rvei.edu.in<br>⏰ <b>Office Hours:</b> Mon-Fri 9:30 AM - 5:00 PM | Sat 9:30 AM - 2:00 PM`,
    buttons: [
      { text: "💬 WhatsApp Us", url: "https://wa.me/919739588855?text=Hello%20SSMRV%20Admissions%20Team" },
      { text: "📞 Call Now: 080 6824 0999", url: "tel:08068240999" },
      { text: "🗺️ Open Maps", url: "https://www.google.com/maps/search/?api=1&query=SSMRV+College+Jayanagar+Bengaluru" },
      { text: "📋 Request a Callback", action: "flow:inquiry_form" },
      { text: "↩️ Main Menu", action: "flow:welcome" }
    ]
  },

  inquiry_form: {
    id: "inquiry_form",
    message: "Please fill out this quick inquiry form and our SSMRV admission counseling team will get in touch with you shortly:",
    showForm: true,
    formType: "admission_inquiry",
    buttons: []
  },

  fee_enquiry: {
    id: "fee_enquiry",
    message: "Please enter your details below to receive the complete, official <b>Fee Structure & Scholarship sheet</b> for 2026-27:",
    showForm: true,
    formType: "fee_enquiry",
    buttons: []
  },

  campus_visit: {
    id: "campus_visit",
    message: "We'd love to welcome you to our Jayanagar campus! Fill in your preferred date and contact details to schedule your guided tour:",
    showForm: true,
    formType: "campus_visit",
    buttons: []
  },

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
  <div class="ssmrv-refund-note">* Note: Nominal institutional admission processing charge is deducted as per UGC norms. Application form fee is non-refundable.</div>
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

};
