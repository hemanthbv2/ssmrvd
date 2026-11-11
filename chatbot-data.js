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
    "department": "Leadership",
    "qualifications": "MBA, M.Phil., Ph.D., NET",
    "specialisation": "Innovation Strategy, Entrepreneurship, Harvard Design Thinking",
    "email": "principal.ssmrv@rvei.edu.in",
    "url": "https://www.ssmrv.edu.in/academics/teaching_faculty/dr-vijayashree-l/"
  },
  {
    "id": "dr_r_sheela_chandrashekar",
    "name": "Dr. R. Sheela Chandrashekar",
    "designation": "Associate Professor & HOD",
    "department": "Computer Applications (BCA)",
    "qualifications": "Ph.D., MCA, M.Phil",
    "specialisation": "Computer Applications, Cloud Computing, Database Systems",
    "email": "sheelac.ssmrv@rvei.edu.in",
    "url": "https://www.ssmrv.edu.in/academics/teaching_faculty/dr_r_sheela_chandrashekar/"
  },
  {
    "id": "dr_malini_n",
    "name": "Dr. Malini N.",
    "designation": "Associate Professor & HOD",
    "department": "Commerce (B.Com)",
    "qualifications": "B.Com, M.Com, MBA, Ph.D.",
    "specialisation": "Accounting and Taxation, Human Resources Management, Climate Governance",
    "email": "malinin.ssmrv@rvei.edu.in",
    "url": "https://www.ssmrv.edu.in/academics/teaching_faculty/dr_malini_n/"
  },
  {
    "id": "dr_lavanya_balaji",
    "name": "Dr. Lavanya Balaji",
    "designation": "Associate Professor & Head of PG Department",
    "department": "Postgraduate Studies (M.Com)",
    "qualifications": "M.Com, Ph.D.",
    "specialisation": "Postgraduate Commerce, Advanced Financial Accounting, Capital Markets",
    "email": "lavanyab.ssmrv@rvei.edu.in",
    "url": "https://www.ssmrv.edu.in/academics/teaching_faculty/dr_lavanya_balaji/"
  },
  {
    "id": "dr_jyothi_n_hosurkar",
    "name": "Dr. Jyothi N. Hosurkar",
    "designation": "Assistant Professor & HOD",
    "department": "Languages & Humanities",
    "qualifications": "M.A., Ph.D.",
    "specialisation": "Kannada Literature, Cultural Studies (13+ years experience)",
    "email": "jyothih.ssmrv@rvei.edu.in",
    "url": "https://www.ssmrv.edu.in/academics/teaching_faculty/dr_jyothi_n_hosurkar/"
  },
  {
    "id": "dr_revathy_shivashankaran",
    "name": "Dr. Revathy Shivashankaran",
    "designation": "Associate Professor & HOD",
    "department": "Business Administration (BBA)",
    "qualifications": "MBA, M.Phil., Ph.D.",
    "specialisation": "Strategic Management, Organizational Behavior, Consumer Marketing",
    "email": "revathys.ssmrv@rvei.edu.in",
    "url": "https://www.ssmrv.edu.in/academics/teaching_faculty/dr_revathy_shivashankaran/"
  },
  {
    "id": "mr_jagadish_a",
    "name": "Mr. Jagadish A.",
    "designation": "Assistant Professor & HOD",
    "department": "Business Administration (BBA Aviation)",
    "qualifications": "BCA, MBA",
    "specialisation": "Aviation Management, Airport Operations, Logistics & Supply Chain",
    "email": "jagadisha.ssmrv@rvei.edu.in",
    "url": "https://www.ssmrv.edu.in/academics/teaching_faculty/mr_jagadish_a/"
  },
  {
    "id": "dr_d_kannan",
    "name": "Dr. D. Kannan",
    "designation": "Assistant Professor",
    "department": "Languages & Humanities",
    "qualifications": "B.A. (English), M.A. (English), Ph.D.",
    "specialisation": "English Literature, Communicative English, Soft Skills Training",
    "email": "kannand.ssmrv@rvei.edu.in",
    "url": "https://www.ssmrv.edu.in/academics/teaching_faculty/dr_d_kannan/"
  },
  {
    "id": "mr_gokul_c",
    "name": "Mr. Gokul C.",
    "designation": "Assistant Professor & Coordinator (B.Com 1st Year)",
    "department": "Commerce (B.Com)",
    "qualifications": "B.Com, MBA, M.Com, KSET",
    "specialisation": "Financial Accounting, Corporate Law, Cost Management",
    "email": "gokulc.ssmrv@rvei.edu.in",
    "url": "https://www.ssmrv.edu.in/academics/teaching_faculty/mr_gokul_c/"
  },
  {
    "id": "mr_shivakumara_n",
    "name": "Mr. Shivakumara N.",
    "designation": "Assistant Professor",
    "department": "Computer Applications (BCA)",
    "qualifications": "MCA, M.Phil, NET",
    "specialisation": "Programming Languages, Data Structures, Web Technologies",
    "email": "shivakumaran.ssmrv@rvei.edu.in",
    "url": "https://www.ssmrv.edu.in/academics/teaching_faculty/mr_shivakumara_n/"
  },
  {
    "id": "mr_yallappa_m",
    "name": "Mr. Yallappa M.",
    "designation": "Assistant Professor",
    "department": "Computer Applications (BCA)",
    "qualifications": "MCA, M.Sc.",
    "specialisation": "Operating Systems, Computer Networks, Software Engineering",
    "email": "yallappam.ssmrv@rvei.edu.in",
    "url": "https://www.ssmrv.edu.in/academics/teaching_faculty/mr_yallappa_m/"
  },
  {
    "id": "ms_m_roopa_latha",
    "name": "Ms. M. Roopa Latha",
    "designation": "Assistant Professor",
    "department": "Computer Applications (BCA)",
    "qualifications": "MCA, M.Tech",
    "specialisation": "Artificial Intelligence, Python, Cloud Infrastructure",
    "email": "roopalatha.ssmrv@rvei.edu.in",
    "url": "https://www.ssmrv.edu.in/academics/teaching_faculty/ms_m_roopa_latha/"
  },
  {
    "id": "ms_deepika_l",
    "name": "Ms. Deepika L.",
    "designation": "Assistant Professor",
    "department": "Computer Applications (BCA)",
    "qualifications": "MCA",
    "specialisation": "Java Programming, Database Management Systems",
    "email": "deepikal.ssmrv@rvei.edu.in",
    "url": "https://www.ssmrv.edu.in/academics/teaching_faculty/ms_deepika_l/"
  },
  {
    "id": "ms_shakeela_m_k",
    "name": "Ms. Shakeela M.K.",
    "designation": "Assistant Professor",
    "department": "Computer Applications (BCA)",
    "qualifications": "M.Sc. (Computer Science), M.Phil",
    "specialisation": "Information Security, Computer Networks, C++",
    "email": "shakeelamk.ssmrv@rvei.edu.in",
    "url": "https://www.ssmrv.edu.in/academics/teaching_faculty/ms_shakeela_m_k/"
  },
  {
    "id": "ms_jahanavi_rao_a_v",
    "name": "Ms. Jahanavi Rao A.V.",
    "designation": "Assistant Professor",
    "department": "Computer Applications (BCA)",
    "qualifications": "BCA, MCA",
    "specialisation": "Full-Stack Development, Mobile App Development",
    "email": "jahanavirao.ssmrv@rvei.edu.in",
    "url": "https://www.ssmrv.edu.in/academics/teaching_faculty/ms_jahanavi_rao_a_v/"
  },
  {
    "id": "avinash_k_v",
    "name": "Avinash K V",
    "designation": "Associate Professor & HOD",
    "department": "Business Administration (BBA & Aviation)",
    "qualifications": "M.Com, MBA, B.Com",
    "specialisation": "Accounting and Taxation, Human Resources Management",
    "email": "avinashkv.ssmrv@rvei.edu.in",
    "url": "https://www.ssmrv.edu.in/academics/teaching_faculty/avinash-k-v/"
  },
  {
    "id": "chiranjivi_m_s",
    "name": "Chiranjivi M S",
    "designation": "Assistant Professor",
    "department": "Commerce (B.Com)",
    "qualifications": "Faculty Member",
    "specialisation": "Higher Education & Academic Mentorship",
    "email": "chiranjivi.ssmrv@rvei.edu.in",
    "url": "https://www.ssmrv.edu.in/academics/teaching_faculty/chiranjivi_m_s/"
  },
  {
    "id": "dr__kanchan_g__rajput",
    "name": "Dr. Kanchan G. Rajput",
    "designation": "Professor",
    "department": "Commerce (B.Com)",
    "qualifications": "MBA",
    "specialisation": "Domain of Finance",
    "email": "drkanchang.ssmrv@rvei.edu.in",
    "url": "https://www.ssmrv.edu.in/academics/teaching_faculty/dr_kanchan_g_rajput/"
  },
  {
    "id": "dr__lalitha_b_s_",
    "name": "Dr. Lalitha B.S.",
    "designation": "Professor",
    "department": "Postgraduate Studies (M.Com)",
    "qualifications": "M.Com, MBA",
    "specialisation": "Accounting, Finance, Banking, Supply Chain Back to Faculty",
    "email": "drlalithab.ssmrv@rvei.edu.in",
    "url": "https://www.ssmrv.edu.in/academics/teaching_faculty/dr_lalitha_b_s/"
  },
  {
    "id": "dr__prathima_vijay",
    "name": "Dr. Prathima Vijay",
    "designation": "Professor",
    "department": "Languages & Humanities",
    "qualifications": "Faculty Member",
    "specialisation": "Kannada Literature, Folklore",
    "email": "drprathima.ssmrv@rvei.edu.in",
    "url": "https://www.ssmrv.edu.in/academics/teaching_faculty/dr_prathima_vijay/"
  },
  {
    "id": "dr__rajini_k_s_",
    "name": "Dr. Rajini K.S.",
    "designation": "Professor",
    "department": "Business Administration (BBA & Aviation)",
    "qualifications": "MBA, B.Com",
    "specialisation": "Human Resource Management",
    "email": "drrajiniks.ssmrv@rvei.edu.in",
    "url": "https://www.ssmrv.edu.in/academics/teaching_faculty/dr_rajini_k_s/"
  },
  {
    "id": "dr__s__chethana",
    "name": "Dr. S. Chethana",
    "designation": "Professor",
    "department": "Computer Applications (BCA)",
    "qualifications": "MCA",
    "specialisation": "Artificial Intelligence, IoT",
    "email": "drschethan.ssmrv@rvei.edu.in",
    "url": "https://www.ssmrv.edu.in/academics/teaching_faculty/dr_s_chethana/"
  },
  {
    "id": "dr__shashikala_c_s_",
    "name": "Dr. Shashikala C.S.",
    "designation": "Professor",
    "department": "Business Administration (BBA & Aviation)",
    "qualifications": "M.Com",
    "specialisation": "Accounting and Taxation, Marketing",
    "email": "drshashika.ssmrv@rvei.edu.in",
    "url": "https://www.ssmrv.edu.in/academics/teaching_faculty/dr_shashikala_c_s/"
  },
  {
    "id": "dr__shruti_khemashetty",
    "name": "Dr. Shruti Khemashetty",
    "designation": "Professor",
    "department": "Business Administration (BBA & Aviation)",
    "qualifications": "MBA",
    "specialisation": "Human Resource Management and Marketing Back to Faculty",
    "email": "drshrutikh.ssmrv@rvei.edu.in",
    "url": "https://www.ssmrv.edu.in/academics/teaching_faculty/dr_shruti_khemashetty/"
  },
  {
    "id": "dr__suma_sannamani",
    "name": "Dr. Suma Sannamani",
    "designation": "Professor",
    "department": "Computer Applications (BCA)",
    "qualifications": "Faculty Member",
    "specialisation": "Memory Architecture, VLSI",
    "email": "drsumasann.ssmrv@rvei.edu.in",
    "url": "https://www.ssmrv.edu.in/academics/teaching_faculty/dr_suma_sannamani/"
  },
  {
    "id": "dr__sushma_c_",
    "name": "Dr. Sushma C.",
    "designation": "Professor",
    "department": "Business Administration (BBA & Aviation)",
    "qualifications": "MBA",
    "specialisation": "Accounts and Finance",
    "email": "drsushmac.ssmrv@rvei.edu.in",
    "url": "https://www.ssmrv.edu.in/academics/teaching_faculty/dr_sushma_c/"
  },
  {
    "id": "dr__v__sudha",
    "name": "Dr. V. Sudha",
    "designation": "Professor",
    "department": "Computer Applications (BCA)",
    "qualifications": "NET",
    "specialisation": "Digital Image Processing, Machine Learning",
    "email": "drvsudha.ssmrv@rvei.edu.in",
    "url": "https://www.ssmrv.edu.in/academics/teaching_faculty/dr_v_sudha/"
  },
  {
    "id": "dr__vinaya_t_",
    "name": "Dr. Vinaya T.",
    "designation": "Professor",
    "department": "Business Administration (BBA & Aviation)",
    "qualifications": "M.Com",
    "specialisation": "Finance, Accounting, Taxation and Research",
    "email": "drvinayat.ssmrv@rvei.edu.in",
    "url": "https://www.ssmrv.edu.in/academics/teaching_faculty/dr_vinaya_t/"
  },
  {
    "id": "kalaimathi_s",
    "name": "Kalaimathi S",
    "designation": "Professor",
    "department": "Languages & Humanities",
    "qualifications": "NET",
    "specialisation": "Higher Education & Academic Mentorship",
    "email": "kalaimathi.ssmrv@rvei.edu.in",
    "url": "https://www.ssmrv.edu.in/academics/teaching_faculty/kalaimathi_s/"
  },
  {
    "id": "kavitha_h_s",
    "name": "Kavitha H S",
    "designation": "Professor",
    "department": "Languages & Humanities",
    "qualifications": "Faculty Member",
    "specialisation": "Higher Education & Academic Mentorship",
    "email": "kavithahs.ssmrv@rvei.edu.in",
    "url": "https://www.ssmrv.edu.in/academics/teaching_faculty/kavitha_h_s/"
  },
  {
    "id": "mr__akshay_kumar_a_v_",
    "name": "Mr. Akshay Kumar A.V.",
    "designation": "Professor",
    "department": "Postgraduate Studies (M.Com)",
    "qualifications": "M.Com",
    "specialisation": "Accountancy, Taxation and Finance Back to Faculty",
    "email": "mrakshayku.ssmrv@rvei.edu.in",
    "url": "https://www.ssmrv.edu.in/academics/teaching_faculty/mr_akshay_kumar_a_v/"
  },
  {
    "id": "mr__arunkumar_r_",
    "name": "Mr. Arunkumar R.",
    "designation": "Professor",
    "department": "Business Administration (BBA & Aviation)",
    "qualifications": "MBA",
    "specialisation": "Finance and Human Resources",
    "email": "mrarunkuma.ssmrv@rvei.edu.in",
    "url": "https://www.ssmrv.edu.in/academics/teaching_faculty/mr_arunkumar_r/"
  },
  {
    "id": "mr__getendra_kumar_m_",
    "name": "Mr. Getendra Kumar M.",
    "designation": "Professor",
    "department": "Computer Applications (BCA)",
    "qualifications": "Faculty Member",
    "specialisation": "Database Back to Faculty",
    "email": "mrgetendra.ssmrv@rvei.edu.in",
    "url": "https://www.ssmrv.edu.in/academics/teaching_faculty/mr_getendra_kumar_m/"
  },
  {
    "id": "mr__santosh_d_bendigeri",
    "name": "Mr. Santosh D Bendigeri",
    "designation": "Professor",
    "department": "Business Administration (BBA & Aviation)",
    "qualifications": "M.Com, MBA",
    "specialisation": "Finance, Accounting and Taxation",
    "email": "mrsantoshd.ssmrv@rvei.edu.in",
    "url": "https://www.ssmrv.edu.in/academics/teaching_faculty/mr_santosh_d_bendigeri/"
  },
  {
    "id": "mrs__lavanya_b_k_",
    "name": "Mrs. Lavanya B.K.",
    "designation": "Professor",
    "department": "Postgraduate Studies (M.Com)",
    "qualifications": "M.Com, KSET",
    "specialisation": "Accounting, Taxation Papers",
    "email": "mrslavanya.ssmrv@rvei.edu.in",
    "url": "https://www.ssmrv.edu.in/academics/teaching_faculty/mrs_lavanya_b_k/"
  },
  {
    "id": "mrs__malasa_m_r_",
    "name": "Mrs. Malasa M.R.",
    "designation": "Professor",
    "department": "Computer Applications (BCA)",
    "qualifications": "MCA",
    "specialisation": "IoT Back to Faculty",
    "email": "mrsmalasam.ssmrv@rvei.edu.in",
    "url": "https://www.ssmrv.edu.in/academics/teaching_faculty/mrs_malasa_m_r/"
  },
  {
    "id": "mrs__pavana_r__kulkarni",
    "name": "Mrs. Pavana R. Kulkarni",
    "designation": "Professor",
    "department": "Business Administration (BBA & Aviation)",
    "qualifications": "MBA, M.Com",
    "specialisation": "Finance, Human Resource Management Back to Faculty",
    "email": "mrspavanar.ssmrv@rvei.edu.in",
    "url": "https://www.ssmrv.edu.in/academics/teaching_faculty/mrs_pavana_r_kulkarni/"
  },
  {
    "id": "mrs__preethi_dwarakanath",
    "name": "Mrs. Preethi Dwarakanath",
    "designation": "Professor",
    "department": "Computer Applications (BCA)",
    "qualifications": "Faculty Member",
    "specialisation": "Theoretical Computer Science, Machine Learning Back to Faculty",
    "email": "mrspreethi.ssmrv@rvei.edu.in",
    "url": "https://www.ssmrv.edu.in/academics/teaching_faculty/mrs_preethi_dwarakanath/"
  },
  {
    "id": "mrs__puja_biswas",
    "name": "Mrs. Puja Biswas",
    "designation": "Professor",
    "department": "Computer Applications (BCA)",
    "qualifications": "Faculty Member",
    "specialisation": "Information Technology, Cloud Computing, IoT Back to Faculty",
    "email": "mrspujabis.ssmrv@rvei.edu.in",
    "url": "https://www.ssmrv.edu.in/academics/teaching_faculty/mrs_puja_biswas/"
  },
  {
    "id": "mrs__vidya_u__jambagi",
    "name": "Mrs. Vidya U. Jambagi",
    "designation": "Professor",
    "department": "Business Administration (BBA & Aviation)",
    "qualifications": "M.Com, KSET",
    "specialisation": "Accounting",
    "email": "mrsvidyauj.ssmrv@rvei.edu.in",
    "url": "https://www.ssmrv.edu.in/academics/teaching_faculty/mrs_vidya_u_jambagi/"
  },
  {
    "id": "ms__bharathi_n_s_",
    "name": "Ms. Bharathi N.S.",
    "designation": "Professor",
    "department": "Business Administration (BBA & Aviation)",
    "qualifications": "M.Com, MBA",
    "specialisation": "Marketing, Finance, Accountancy, Neuroscience and Psychology",
    "email": "msbharathi.ssmrv@rvei.edu.in",
    "url": "https://www.ssmrv.edu.in/academics/teaching_faculty/ms_bharathi_n_s/"
  },
  {
    "id": "ms__bhargavi_iyer_b_s_",
    "name": "Ms. Bhargavi Iyer B.S.",
    "designation": "Professor",
    "department": "Postgraduate Studies (M.Com)",
    "qualifications": "M.Com",
    "specialisation": "Accounting and Taxation Papers",
    "email": "msbhargavi.ssmrv@rvei.edu.in",
    "url": "https://www.ssmrv.edu.in/academics/teaching_faculty/ms_bhargavi_iyer_b_s/"
  },
  {
    "id": "ms__deepthi_raju",
    "name": "Ms. Deepthi Raju",
    "designation": "Professor",
    "department": "Languages & Humanities",
    "qualifications": "Faculty Member",
    "specialisation": "Gender Studies, Urban Studies, Creative Writing Papers",
    "email": "msdeepthir.ssmrv@rvei.edu.in",
    "url": "https://www.ssmrv.edu.in/academics/teaching_faculty/ms_deepthi_raju/"
  },
  {
    "id": "ms__gayathri_kempurajan",
    "name": "Ms. Gayathri Kempurajan",
    "designation": "Professor",
    "department": "Languages & Humanities",
    "qualifications": "Faculty Member",
    "specialisation": "English Literature Papers",
    "email": "msgayathri.ssmrv@rvei.edu.in",
    "url": "https://www.ssmrv.edu.in/academics/teaching_faculty/ms_gayathri_kempurajan/"
  },
  {
    "id": "ms__m__rajatha",
    "name": "Ms. M. Rajatha",
    "designation": "Professor",
    "department": "Business Administration (BBA & Aviation)",
    "qualifications": "M.Com, MBA",
    "specialisation": "Finance, Marketing Back to Faculty",
    "email": "msmrajatha.ssmrv@rvei.edu.in",
    "url": "https://www.ssmrv.edu.in/academics/teaching_faculty/ms_m_rajatha/"
  },
  {
    "id": "ms__mokshamala_u_",
    "name": "Ms. Mokshamala U.",
    "designation": "Professor",
    "department": "Commerce (B.Com)",
    "qualifications": "B.Com",
    "specialisation": "Law Back to Faculty",
    "email": "msmokshama.ssmrv@rvei.edu.in",
    "url": "https://www.ssmrv.edu.in/academics/teaching_faculty/ms_mokshamala_u/"
  },
  {
    "id": "ms__neha_banu",
    "name": "Ms. Neha Banu",
    "designation": "Professor",
    "department": "Postgraduate Studies (M.Com)",
    "qualifications": "M.Com, B.E.",
    "specialisation": "Finance and Banking Papers",
    "email": "msnehabanu.ssmrv@rvei.edu.in",
    "url": "https://www.ssmrv.edu.in/academics/teaching_faculty/ms_neha_banu/"
  },
  {
    "id": "ms__r__shanthi_krishna",
    "name": "Ms. R. Shanthi Krishna",
    "designation": "Professor",
    "department": "Computer Applications (BCA)",
    "qualifications": "MCA",
    "specialisation": "Machine Learning, Programming Languages",
    "email": "msrshanthi.ssmrv@rvei.edu.in",
    "url": "https://www.ssmrv.edu.in/academics/teaching_faculty/ms_r_shanthi_krishna/"
  },
  {
    "id": "ms__soujanya_d_",
    "name": "Ms. Soujanya D.",
    "designation": "Professor",
    "department": "Languages & Humanities",
    "qualifications": "Faculty Member",
    "specialisation": "Humanities",
    "email": "mssoujanya.ssmrv@rvei.edu.in",
    "url": "https://www.ssmrv.edu.in/academics/teaching_faculty/ms_soujanya_d/"
  },
  {
    "id": "ms__vasugi_mudaliar_r_k_",
    "name": "Ms. Vasugi Mudaliar R.K.",
    "designation": "Professor",
    "department": "Computer Applications (BCA)",
    "qualifications": "Faculty Member",
    "specialisation": "Social Media Analytics, Data Science, Python Programming, Java Programming, Cyber Security Back to Faculty",
    "email": "msvasugimu.ssmrv@rvei.edu.in",
    "url": "https://www.ssmrv.edu.in/academics/teaching_faculty/ms_vasugi_mudaliar_r_k/"
  },
  {
    "id": "nandini_j",
    "name": "Nandini J",
    "designation": "Assistant Professor",
    "department": "Commerce (B.Com)",
    "qualifications": "Faculty Member",
    "specialisation": "Higher Education & Academic Mentorship",
    "email": "nandinij.ssmrv@rvei.edu.in",
    "url": "https://www.ssmrv.edu.in/academics/teaching_faculty/nandini_j/"
  },
  {
    "id": "prakasha_v",
    "name": "Prakasha V",
    "designation": "Professor",
    "department": "Business Administration (BBA & Aviation)",
    "qualifications": "MBA, B.Com, M.Com",
    "specialisation": "Higher Education & Academic Mentorship",
    "email": "prakashav.ssmrv@rvei.edu.in",
    "url": "https://www.ssmrv.edu.in/academics/teaching_faculty/prakasha_v/"
  },
  {
    "id": "ramamishra_yashaswi_m",
    "name": "Ramamishra Yashaswi M",
    "designation": "Professor",
    "department": "Languages & Humanities",
    "qualifications": "Faculty Member",
    "specialisation": "Higher Education & Academic Mentorship",
    "email": "ramamishra.ssmrv@rvei.edu.in",
    "url": "https://www.ssmrv.edu.in/academics/teaching_faculty/ramamishra_yashaswi_m/"
  },
  {
    "id": "sharavana_m",
    "name": "Sharavana M",
    "designation": "Assistant Professor",
    "department": "Commerce (B.Com)",
    "qualifications": "Faculty Member",
    "specialisation": "Higher Education & Academic Mentorship",
    "email": "sharavanam.ssmrv@rvei.edu.in",
    "url": "https://www.ssmrv.edu.in/academics/teaching_faculty/sharavana_m/"
  },
  {
    "id": "swathi_s_nair",
    "name": "Swathi S Nair",
    "designation": "Professor",
    "department": "Languages & Humanities",
    "qualifications": "Faculty Member",
    "specialisation": "Higher Education & Academic Mentorship",
    "email": "swathisnai.ssmrv@rvei.edu.in",
    "url": "https://www.ssmrv.edu.in/academics/teaching_faculty/swathi_s_nair/"
  },
  {
    "id": "ume_salma",
    "name": "Ume Salma",
    "designation": "Professor",
    "department": "Business Administration (BBA & Aviation)",
    "qualifications": "Faculty Member",
    "specialisation": "Higher Education & Academic Mentorship",
    "email": "umesalma.ssmrv@rvei.edu.in",
    "url": "https://www.ssmrv.edu.in/academics/teaching_faculty/ume_salma/"
  },
  {
    "id": "vaishnavi_r",
    "name": "Vaishnavi R",
    "designation": "Professor",
    "department": "Computer Applications (BCA)",
    "qualifications": "KSET, M.Com, NET",
    "specialisation": "Higher Education & Academic Mentorship",
    "email": "vaishnavir.ssmrv@rvei.edu.in",
    "url": "https://www.ssmrv.edu.in/academics/teaching_faculty/vaishnavi_r/"
  },
  {
    "id": "vedamurthy_y_n",
    "name": "Vedamurthy Y N",
    "designation": "Assistant Professor",
    "department": "Commerce (B.Com)",
    "qualifications": "Faculty Member",
    "specialisation": "Higher Education & Academic Mentorship",
    "email": "vedamurthy.ssmrv@rvei.edu.in",
    "url": "https://www.ssmrv.edu.in/academics/teaching_faculty/vedamurthy_y_n/"
  },
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
    pageUrl: "https://www.ssmrv.edu.in/about_us/board_of_management/",
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
