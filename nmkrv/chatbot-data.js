/**
 * NMKRV College (Autonomous) Chatbot — Complete Knowledge Base & Conversation Flow Data
 * Source: Official https://nmkrv.edu.in/ & AICTE Mandatory Disclosure
 */

const GOOGLE_SHEETS_URL = (window.ssmrvChatbotSettings && window.ssmrvChatbotSettings.googleSheetsUrl)
  ? window.ssmrvChatbotSettings.googleSheetsUrl
  : '';

const SSMRV_CONFIG = {
  "collegeName": "NMKRV College (Autonomous)",
  "shortName": "NMKRV College",
  "tagline": "Five Decades of Excellence in Higher Education — Co-Educational Autonomous Institution",
  "established": 1973,
  "trust": "Rashtreeya Sikshana Samithi Trust (RSST / RV Educational Institutions, Est. 1940)",
  "accreditation": "UGC Autonomous (since 2005) | UGC 'College with Potential for Excellence' (CPE) | NAAC Accredited | AICTE Approved (BBA & BCA)",
  "affiliation": "Bangalore University (Autonomous Status)",
  "ranking": "DST-FIST Funded (Rs. 1.1 Crore) & DBT-STAR College Scheme Recipient",
  "campusAddress": "45/1, 22nd Cross, Jayanagar 3rd Block, Bengaluru - 560011, Karnataka, India",
  "landmark": "Jayanagar 3rd Block, Bengaluru (4.5-Acre Green Campus)",
  "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=NMKRV+College+Jayanagar+3rd+Block+Bengaluru",
  "websiteUrl": "https://nmkrv.edu.in/",
  "admissionPortalUrl": "https://wds-prd.rvei.edu.in:4430/sap/bc/ui5_ui5/sap/znmkrv/index.html#/scode/NMKC",
  "sapPortalUrl": "https://wds-prd.rvei.edu.in:4430/sap/bc/ui5_ui5/sap/znmkrv/index.html#/scode/NMKC",
  "pgAdmissionPortalUrl": "https://nmkrv.in8.nopaperforms.com",
  "contacts": {
    "admissionsHelpline": [
      "+91 80 69018900",
      "+91 80 69018901"
    ],
    "landline": [
      "080-69018900",
      "080-69018901",
      "080-69018904"
    ],
    "coePhone": "080-69018999",
    "placements": {
      "officer": "Ms. Chaitra V. C. (Manager – Training & Placements, DISHA) – +91 83100 63697",
      "email": "placement.nmkrv@rvei.edu.in"
    },
    "emails": {
      "office": "nmkrv@rvei.edu.in",
      "general": "contact@nmkrv.rvei.edu.in",
      "principal": "principal.nmkrv@rvei.edu.in",
      "coe": "coe.nmkrv@rvei.edu.in",
      "placement": "placement.nmkrv@rvei.edu.in"
    },
    "officeHours": "Monday to Friday: 9:30 AM – 4:30 PM | Saturday: 9:30 AM – 2:00 PM"
  },
  "social": {
    "instagram": "https://www.instagram.com/nmkrvcollegeforwomen_official/",
    "facebook": "https://www.facebook.com/NMKRVCollegeforWomen/",
    "linkedin": "https://www.linkedin.com/school/nmkrvcollegeforwomen/",
    "twitter": "https://twitter.com/NMKRV_Official"
  },
  "leadership": {
    "president": "Dr. M.P. Shyam (President, RVEI)",
    "secretary": "Dr.(h.c.) A.V.S. Murthy (Hon. Secretary, RVEI)",
    "jointSecretary": "Mr. D.P. Nagaraj (Hon. Joint Secretary, RVEI)",
    "treasurer": "Mr. P.S. Venkatesh Babu (Hon. Treasurer, RVEI)",
    "governingChairman": "Ms. Maya Chandra (Chairperson, Governing Body)",
    "principal": "Dr. R. Suchithra (Principal, NMKRV College)"
  }
};

const SSMRV_PROGRAMMES = {
  "bsc": {
    "id": "bsc",
    "name": "Bachelor of Science (B.Sc. — Physical & Life Sciences)",
    "duration": "3 Years (6 Semesters) under SEP / Autonomous Curriculum",
    "affiliation": "Bangalore University (Autonomous) | DBT-STAR & DST-FIST Supported",
    "combinations": [
      "B.Sc. PCM — Physics, Chemistry, Mathematics",
      "B.Sc. PMCs — Physics, Mathematics, Computer Science",
      "B.Sc. CBZ — Chemistry, Botany, Zoology",
      "B.Sc. CZBt — Chemistry, Zoology, Biotechnology",
      "B.Sc. MBtCs — Microbiology, Biotechnology, Computer Science",
      "B.Sc. PBZ — Psychology, Botany, Zoology"
    ],
    "eligibility": "Pass in 10+2 / II PUC with relevant Science subjects from a recognized board (Minimum 50% for General category; 45% for SC/ST/OBC).",
    "url": "https://nmkrv.edu.in/science/"
  },
  "ba": {
    "id": "ba",
    "name": "Bachelor of Arts (B.A. — Humanities & Media Studies)",
    "duration": "3 Years (6 Semesters) under SEP / Autonomous Curriculum",
    "affiliation": "Bangalore University (Autonomous)",
    "combinations": [
      "History, Economics, Sociology (HES)",
      "Journalism, Psychology, Optional English (JPEng)",
      "Journalism, Psychology, Optional Kannada (JPKan)",
      "Economics, Sociology, Psychology (ESP)"
    ],
    "eligibility": "Pass in 10+2 / II PUC or equivalent in any stream from a recognized board.",
    "url": "https://nmkrv.edu.in/humanities/"
  },
  "bcom": {
    "id": "bcom",
    "name": "Bachelor of Commerce (B.Com General, Vocational Tax & FinTech/AI)",
    "duration": "3 Years (6 Semesters) under SEP / Autonomous Curriculum",
    "affiliation": "Bangalore University (Autonomous)",
    "specialisations": [
      "B.Com General (Accounting, Taxation, Finance & Banking)",
      "B.Com Vocational — Tax Procedure and Practice (TPP)",
      "B.Com in FinTech and Artificial Intelligence (AI)"
    ],
    "eligibility": "Pass in 10+2 / II PUC or equivalent with Commerce/Accountancy from a recognized board.",
    "url": "https://nmkrv.edu.in/commerce/"
  },
  "bba": {
    "id": "bba",
    "name": "Bachelor of Business Administration (BBA)",
    "duration": "3 Years (6 Semesters) | AICTE Approved (Sanctioned Intake: 90 Seats)",
    "affiliation": "Bangalore University (Autonomous) & AICTE Approved",
    "specialisations": [
      "Human Resource Management",
      "Finance & Accounting",
      "Marketing Management & Business Strategy"
    ],
    "eligibility": "Pass in 10+2 / II PUC in any stream (Arts, Science, or Commerce) from a recognized board.",
    "url": "https://nmkrv.edu.in/management/"
  },
  "bca": {
    "id": "bca",
    "name": "Bachelor of Computer Applications (BCA)",
    "duration": "3 Years (6 Semesters) | AICTE Approved (Sanctioned Intake: 60 Seats)",
    "affiliation": "Bangalore University (Autonomous) & AICTE Approved",
    "highlights": [
      "C, Data Structures, Object-Oriented Programming in Java & Python",
      "Database Management Systems (RDBMS), Linux & Operating Systems",
      "Web Technologies, Cloud Computing & Software Engineering Projects"
    ],
    "eligibility": "Pass in 10+2 / II PUC or 3-Year Diploma from a recognized board.",
    "url": "https://nmkrv.edu.in/bca/"
  },
  "pg": {
    "id": "pg",
    "name": "Postgraduate Programmes (M.Com, M.Sc. & M.A.)",
    "duration": "2 Years (4 Semesters) | Full-Time Autonomous PG Programmes",
    "programmes": [
      "M.Com (Accounting & Taxation / Finance & Banking / Project Management & Business Analytics)",
      "M.Sc. Chemistry (Organic Chemistry Specialization)",
      "M.Sc. Data Science (Analytics, Machine Learning & Big Data)",
      "M.Sc. Mathematics (Pure & Applied Mathematics, Fluid Mechanics, Topology)",
      "M.Sc. Biotechnology (Molecular Biology, Genetic Engineering & Bioprocess)",
      "M.A. Journalism & Mass Communication (Broadcast, Print, Digital Media & Corporate Communication)"
    ],
    "eligibility": "Bachelor's degree in the relevant discipline with minimum 50% aggregate marks (45% for SC/ST/Cat-I).",
    "url": "https://nmkrv.edu.in/pg-programmes/"
  },
  "phd": {
    "id": "phd",
    "name": "Doctoral (Ph.D.) & Integrated B.Ed. Programmes",
    "duration": "Ph.D. as per Bangalore University Norms | 4-Year Integrated B.A. B.Ed. & B.Sc. B.Ed.",
    "url": "https://nmkrv.edu.in/phd-programme/"
  }
};

const SSMRV_FACULTY_CATALOG = [
  {
    "id": "dr-m-p-shyam",
    "name": "Dr. M.P. Shyam",
    "designation": "President — RSST / RVEI",
    "department": "Board of Management (RSST)",
    "deptFlow": "faculty_leadership",
    "qualifications": "Industrialist & Educational Philanthropist",
    "experience": "President, Rashtreeya Sikshana Samithi Trust (RSST / RV Educational Institutions)",
    "specialisation": "Institutional Governance, Strategic Vision & Educational Philanthropy",
    "bio": "Dr. M.P. Shyam serves as the President of Rashtreeya Sikshana Samithi Trust (RSST), guiding over 20 premier RV Educational Institutions including NMKRV College towards global academic excellence.",
    "highlights": "President of RSST managing RV Educational Institutions since 1940 legacy.",
    "committee": "President — RSST / RVEI Board of Management",
    "email": "nmkrv@rvei.edu.in",
    "phone": "080-69018900",
    "url": "https://nmkrv.edu.in/board-of-management/"
  },
  {
    "id": "dr-a-c-chandrashekar-raju",
    "name": "Dr. A.C. Chandrashekar Raju",
    "designation": "Vice President — RSST / RVEI",
    "department": "Board of Management (RSST)",
    "deptFlow": "faculty_leadership",
    "qualifications": "Trustee & Vice President, RSST",
    "experience": "Board of Management, RV Educational Institutions",
    "specialisation": "Higher Education Governance & Institutional Development",
    "bio": "Dr. A.C. Chandrashekar Raju serves as Vice President of Rashtreeya Sikshana Samithi Trust (RVEI) on the Board of Management.",
    "highlights": "Vice President, RSST / RVEI Board of Management.",
    "committee": "Vice President — RSST / RVEI",
    "email": "nmkrv@rvei.edu.in",
    "phone": "080-69018900",
    "url": "https://nmkrv.edu.in/board-of-management/"
  },
  {
    "id": "dr-c-vinod-hayagriv",
    "name": "Dr. C. Vinod Hayagriv",
    "designation": "Vice President — RSST / RVEI",
    "department": "Board of Management (RSST)",
    "deptFlow": "faculty_leadership",
    "qualifications": "Managing Director & Director, C. Krishniah Chetty Group | Ph.D. (Hon.)",
    "experience": "Vice President, Rashtreeya Sikshana Samithi Trust (RSST)",
    "specialisation": "Corporate Governance, Heritage Enterprise & Educational Stewardship",
    "bio": "Dr. C. Vinod Hayagriv serves as Vice President of RSST / RVEI, bringing decades of leadership in corporate governance and educational stewardship.",
    "highlights": "Vice President, RSST / RVEI Board of Management.",
    "committee": "Vice President — RSST / RVEI",
    "email": "nmkrv@rvei.edu.in",
    "phone": "080-69018900",
    "url": "https://nmkrv.edu.in/board-of-management/"
  },
  {
    "id": "dr-a-v-s-murthy",
    "name": "Dr.(h.c.) A.V.S. Murthy",
    "designation": "Hon. Secretary — RSST / RVEI",
    "department": "Board of Management (RSST)",
    "deptFlow": "faculty_leadership",
    "qualifications": "Doctorate (Honoris Causa) | Educational Administrator",
    "experience": "Decades of Educational Administration across RV Educational Institutions",
    "specialisation": "Educational Policy, Institutional Administration & Trust Management",
    "bio": "Dr.(h.c.) A.V.S. Murthy is the Honorary Secretary of Rashtreeya Sikshana Samithi Trust (RSST / RVEI) and serves on the Governing Body and Academic Council of NMKRV College.",
    "highlights": "Hon. Secretary of RSST & Member of Governing Body and Academic Council.",
    "committee": "Hon. Secretary — RSST / RVEI | Governing Body & Academic Council Member",
    "email": "nmkrv@rvei.edu.in",
    "phone": "080-69018900",
    "url": "https://nmkrv.edu.in/board-of-management/"
  },
  {
    "id": "mr-d-p-nagaraj",
    "name": "Mr. D.P. Nagaraj",
    "designation": "Hon. Joint Secretary — RSST / RVEI",
    "department": "Board of Management (RSST)",
    "deptFlow": "faculty_leadership",
    "qualifications": "Educational Administrator & Trustee",
    "experience": "Honorary Joint Secretary, Rashtreeya Sikshana Samithi Trust (RSST)",
    "specialisation": "Institutional Development, Infrastructure & Academic Operations",
    "bio": "Mr. D.P. Nagaraj serves as the Honorary Joint Secretary of RSST / RVEI and Member of the Governing Body of NMKRV College.",
    "highlights": "Honorary Joint Secretary of RSST & Governing Body Member.",
    "committee": "Hon. Joint Secretary — RSST / RVEI | Governing Body Member",
    "email": "nmkrv@rvei.edu.in",
    "phone": "080-69018900",
    "url": "https://nmkrv.edu.in/board-of-management/"
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
    "bio": "Mr. P.S. Venkatesh Babu is the Honorary Treasurer of RSST / RVEI and serves as a Trustee Member on the Governing Body of NMKRV College.",
    "highlights": "Honorary Treasurer of RSST & Governing Body Member.",
    "committee": "Hon. Treasurer — RSST / RVEI | Governing Body Member",
    "email": "nmkrv@rvei.edu.in",
    "phone": "080-69018900",
    "url": "https://nmkrv.edu.in/board-of-management/"
  },
  {
    "id": "mr-nikhil-a-murthy",
    "name": "Mr. Nikhil A. Murthy",
    "designation": "Assistant Secretary — RSST / RVEI",
    "department": "Board of Management (RSST)",
    "deptFlow": "faculty_leadership",
    "qualifications": "Educational Administration & Operations",
    "experience": "Assistant Secretary, Rashtreeya Sikshana Samithi Trust (RVEI)",
    "specialisation": "Modern Campus Operations, Digital Transformation & Youth Initiatives",
    "bio": "Mr. Nikhil A. Murthy serves as Assistant Secretary of RSST / RVEI and Member of the Governing Body of NMKRV College.",
    "highlights": "Assistant Secretary, RVEI Board of Management & Governing Body Member.",
    "committee": "Assistant Secretary — RSST / RVEI | Governing Body Member",
    "email": "nmkrv@rvei.edu.in",
    "phone": "080-69018900",
    "url": "https://nmkrv.edu.in/board-of-management/"
  },
  {
    "id": "ms-maya-chandra",
    "name": "Ms. Maya Chandra",
    "designation": "Chairperson — Governing Body",
    "department": "Governing Body (NMKRV College)",
    "deptFlow": "faculty_leadership",
    "qualifications": "Trustee, RSS Trust | Filmmaker & Media Entrepreneur",
    "experience": "Chairperson, Governing Body of NMKRV College & Trustee, RSST",
    "specialisation": "Institutional Leadership, Media Communication, Women Empowerment & Inclusive Education",
    "bio": "Ms. Maya Chandra serves as the Chairperson of the Governing Body of NMKRV College and Trustee of Rashtreeya Sikshana Samithi Trust (RSST), spearheading strategic initiatives, cultural vibrancy, and academic modernization.",
    "highlights": "Chairperson, Governing Body of NMKRV College & IQAC Member.",
    "committee": "Chairperson — Governing Body | Trustee — RSS Trust | IQAC Member",
    "email": "nmkrv@rvei.edu.in",
    "phone": "080-69018900",
    "url": "https://nmkrv.edu.in/board-of-management/"
  },
  {
    "id": "sri-k-s-akhilesh-babu",
    "name": "Sri. K.S. Akhilesh Babu",
    "designation": "Trustee — RSS Trust",
    "department": "Governing Body (NMKRV College)",
    "deptFlow": "faculty_leadership",
    "qualifications": "Trustee, Rashtreeya Sikshana Samithi Trust",
    "experience": "Member-Trustee, Governing Body of NMKRV College",
    "specialisation": "Institutional Governance & Trust Oversight",
    "bio": "Sri. K.S. Akhilesh Babu is a Trustee of Rashtreeya Sikshana Samithi Trust (RSST) and serves as a Member of the Governing Body of NMKRV College.",
    "highlights": "Member-Trustee, Governing Body of NMKRV College.",
    "committee": "Governing Body Member — NMKRV College",
    "email": "nmkrv@rvei.edu.in",
    "phone": "080-69018900",
    "url": "https://nmkrv.edu.in/board-of-management/"
  },
  {
    "id": "wg-cdr-shivanand",
    "name": "Wg. Cdr. Shivanand",
    "designation": "NMKRV Campus Director",
    "department": "Institutional Leadership",
    "deptFlow": "faculty_leadership",
    "qualifications": "Wing Commander (Retd.) | Campus Administration",
    "experience": "NMKRV Campus Director & Member of Governing Body",
    "specialisation": "Campus Operations, Infrastructure Management, Security & Administration",
    "bio": "Wg. Cdr. Shivanand serves as the NMKRV Campus Director and Member of the Governing Body, overseeing campus infrastructure, facilities, and operations.",
    "highlights": "NMKRV Campus Director & Governing Body Member.",
    "committee": "NMKRV Campus Director | Governing Body Member",
    "email": "nmkrv@rvei.edu.in",
    "phone": "080-69018900",
    "url": "https://nmkrv.edu.in/board-of-management/"
  },
  {
    "id": "sri-syed-shahameer",
    "name": "Sri. Syed Shahameer",
    "designation": "Registrar — RSS Trust",
    "department": "Governing Body (NMKRV College)",
    "deptFlow": "faculty_leadership",
    "qualifications": "Registrar, Rashtreeya Sikshana Samithi Trust",
    "experience": "Special Invitee, Governing Body of NMKRV College",
    "specialisation": "Academic Compliance, Trust Administration & Regulatory Affairs",
    "bio": "Sri. Syed Shahameer serves as the Registrar of Rashtreeya Sikshana Samithi Trust (RSST) and Special Invitee on the Governing Body of NMKRV College.",
    "highlights": "Registrar, RSS Trust & Special Invitee on Governing Body.",
    "committee": "Registrar — RSS Trust | Governing Body Special Invitee",
    "email": "nmkrv@rvei.edu.in",
    "phone": "080-69018900",
    "url": "https://nmkrv.edu.in/board-of-management/"
  },
  {
    "id": "dr-r-suchithra",
    "name": "Dr. R. Suchithra",
    "designation": "Principal — NMKRV College",
    "department": "Institutional Leadership",
    "deptFlow": "faculty_leadership",
    "qualifications": "MCA, Ph.D.",
    "experience": "23+ Years Teaching Experience & 10 Years Research Experience",
    "specialisation": "Cloud Computing, Java Programming, User Interface Design",
    "bio": "Dr. R. Suchithra is the Principal of NMKRV College, Chairperson of the Academic Council, IQAC, Anti-Ragging Cell, and Internal Complaints Committee (ICC). She has guided 17 research scholars, published 45 papers in national and international journals/conferences, authored 3 books, filed/granted 3 patents, and completed 2 ICSSR-funded research projects.",
    "highlights": "Guided 17 research scholars | 45 Research Publications | 3 Books Published | 3 Patents | 2 ICSSR Projects.",
    "committee": "Principal — NMKRV College | Chairperson — Academic Council, IQAC, Anti-Ragging Cell & ICC",
    "email": "principal.nmkrv@rvei.edu.in",
    "phone": "080-69018904",
    "url": "https://nmkrv.edu.in/about-principal-message/"
  },
  {
    "id": "ms-shilpa-p",
    "name": "Mrs. Shilpa P.",
    "designation": "Controller of Examinations (COE) & Assistant Professor",
    "department": "Office of the Controller of Examinations / Chemistry",
    "deptFlow": "faculty_leadership",
    "qualifications": "M.Sc., M.Phil., (Ph.D.)",
    "experience": "Controller of Examinations & Senior Faculty in Chemistry",
    "specialisation": "Autonomous Examination Governance, Evaluation Systems & Chemical Sciences",
    "bio": "Mrs. Shilpa P. serves as the Controller of Examinations (COE) at NMKRV College and Assistant Professor in the Department of Chemistry. She leads the autonomous examination cell and serves on the Academic Council.",
    "highlights": "Controller of Examinations (COE) & Member of Academic Council.",
    "committee": "Controller of Examinations (COE) | Academic Council Member",
    "email": "coe.nmkrv@rvei.edu.in",
    "phone": "080-69018999",
    "url": "https://nmkrv.edu.in/examinations/"
  },
  {
    "id": "mrs-suman-prasad",
    "name": "Mrs. Suman Prasad",
    "designation": "Academic Coordinator & Associate Professor",
    "department": "Institutional Leadership / Biotechnology",
    "deptFlow": "faculty_leadership",
    "qualifications": "M.Sc. Biotechnology",
    "experience": "Academic Coordinator & Senior Faculty in Biotechnology",
    "specialisation": "Biotechnology, Enzymology, Curriculum Design & Academic Quality Assurance",
    "bio": "Mrs. Suman Prasad serves as the Academic Coordinator of NMKRV College and Associate Professor in the Department of Biotechnology. She is a member of the IQAC and Unnat Bharat Abhiyan (UBA) Advisory Committee and served as Principal Investigator for a UGC Minor Research Project.",
    "highlights": "Academic Coordinator, IQAC Member & UGC Minor Research Project Principal Investigator.",
    "committee": "Academic Coordinator — NMKRV College | IQAC Member | UBA Advisory Committee",
    "email": "sumanprasad.nmkrv@rvei.edu.in",
    "phone": "080-69018900",
    "url": "https://nmkrv.edu.in/iqac/"
  },
  {
    "id": "dr-sharada-t",
    "name": "Dr. Sharada T.",
    "designation": "IQAC Coordinator & Head of Department (Journalism)",
    "department": "Institutional Leadership / Journalism & Mass Communication",
    "deptFlow": "faculty_leadership",
    "qualifications": "M.S. Communication, Ph.D., NET",
    "experience": "HoD & PG Coordinator (Journalism) | IQAC Coordinator",
    "specialisation": "Journalism, Mass Communication, Media Research & Institutional Quality Assurance",
    "bio": "Dr. Sharada T. is the IQAC Coordinator, Member-Secretary of the Governing Body and Academic Council, and Head & PG Coordinator of the Department of Journalism and Mass Communication at NMKRV College.",
    "highlights": "IQAC Coordinator | Member-Secretary of Governing Body & Academic Council | Research Faculty.",
    "committee": "IQAC Coordinator | Member-Secretary — Governing Body & Academic Council | Coordinator — Literary Club",
    "email": "sharada.nmkrv@rvei.edu.in",
    "phone": "080-69018900",
    "url": "https://nmkrv.edu.in/iqac/"
  },
  {
    "id": "dr-renuka-somalu-rathod",
    "name": "Dr. Renuka Somalu Rathod",
    "designation": "Assistant Professor",
    "department": "Commerce (B.Com & M.Com)",
    "deptFlow": "faculty_commerce",
    "qualifications": "M.Com., Ph.D.",
    "experience": "Senior Faculty & Research Guide in Commerce",
    "specialisation": "Taxation Law and Practice, Corporate Accounting & Financial Management",
    "bio": "Dr. Renuka Somalu Rathod is an Assistant Professor and Research Faculty member in the Department of Commerce at NMKRV College, specializing in Taxation Law and Practice and Corporate Accounting.",
    "highlights": "Recognized Research Faculty & E-Content Developer for Taxation Law and Practice.",
    "committee": "Research Faculty — Commerce",
    "email": "renukasrathod.nmkrv@rvei.edu.in",
    "phone": "080-69018900",
    "url": "https://nmkrv.edu.in/commerce/"
  },
  {
    "id": "prof-manjunatha-r",
    "name": "Prof. Manjunatha R.",
    "designation": "Assistant Professor",
    "department": "Commerce (B.Com)",
    "deptFlow": "faculty_commerce",
    "qualifications": "M.Com., NET",
    "experience": "Senior Teaching Experience in Commerce & Accounting",
    "specialisation": "Advanced Corporate Accounting, Holding Company Accounts & Financial Reporting",
    "bio": "Prof. Manjunatha R. serves as Assistant Professor in the Department of Commerce at NMKRV College and is an Executive Committee Member of the Unnat Bharat Abhiyan (UBA) Cell.",
    "highlights": "E-Content Author for Advanced Corporate Accounting & UBA Executive Committee Member.",
    "committee": "Executive Committee Member — Unnat Bharat Abhiyan (UBA)",
    "email": "manjunathar.nmkrv@rvei.edu.in",
    "phone": "080-69018900",
    "url": "https://nmkrv.edu.in/commerce/"
  },
  {
    "id": "mrs-jyothi-r-aiyangar",
    "name": "Mrs. Jyothi R. Aiyangar",
    "designation": "Assistant Professor",
    "department": "Commerce (B.Com)",
    "deptFlow": "faculty_commerce",
    "qualifications": "M.Com., PGDFM",
    "experience": "Academic & Examination Administration Experience",
    "specialisation": "Principles and Practices of Auditing, Financial Management & Corporate Accounting",
    "bio": "Mrs. Jyothi R. Aiyangar is an Assistant Professor in the Department of Commerce and a core member of the Office of the Controller of Examinations (COE) and the Innovation & Social Media Cell.",
    "highlights": "Examination Core Team Member & Social Media Cell Member.",
    "committee": "Exam Core Team — COE | Member — Innovation & Social Media Cell",
    "email": "jyothir.nmkrv@rvei.edu.in",
    "phone": "080-69018900",
    "url": "https://nmkrv.edu.in/commerce/"
  },
  {
    "id": "mrs-geetha-p",
    "name": "Mrs. Geetha P.",
    "designation": "Assistant Professor",
    "department": "Commerce (B.Com)",
    "deptFlow": "faculty_commerce",
    "qualifications": "M.Com.",
    "experience": "Teaching Experience in Commerce & E-Business",
    "specialisation": "E-Business and Accounting, Financial Accounting & Marketing Management",
    "bio": "Mrs. Geetha P. is an Assistant Professor in the Department of Commerce at NMKRV College. She serves as the Coordinator of the Fine Arts Club and is a member of the SC/ST Committee.",
    "highlights": "Coordinator of Fine Arts Club & Member of SC/ST Committee.",
    "committee": "Coordinator — Fine Arts Club | Member — SC/ST Committee",
    "email": "geethap.nmkrv@rvei.edu.in",
    "phone": "080-69018900",
    "url": "https://nmkrv.edu.in/commerce/"
  },
  {
    "id": "mrs-shilpa-a",
    "name": "Mrs. Shilpa A.",
    "designation": "Assistant Professor",
    "department": "Commerce (B.Com)",
    "deptFlow": "faculty_commerce",
    "qualifications": "M.Com.",
    "experience": "Teaching Experience in Commerce & Capital Markets",
    "specialisation": "Stock and Commodity Markets, Financial Services & Corporate Administration",
    "bio": "Mrs. Shilpa A. is an Assistant Professor in the Department of Commerce and serves on the Fine Arts Club Committee.",
    "highlights": "E-Content Developer for Stock and Commodity Markets.",
    "committee": "Committee Member — Fine Arts Club",
    "email": "shilpaa.nmkrv@rvei.edu.in",
    "phone": "080-69018900",
    "url": "https://nmkrv.edu.in/commerce/"
  },
  {
    "id": "ms-manasa-j",
    "name": "Ms. Manasa J.",
    "designation": "Assistant Professor",
    "department": "Commerce (B.Com)",
    "deptFlow": "faculty_commerce",
    "qualifications": "M.Com., KSET",
    "experience": "Teaching Experience in Commerce & Taxation",
    "specialisation": "Goods and Services Tax (GST), Indirect Taxation & Financial Accounting",
    "bio": "Ms. Manasa J. is an Assistant Professor in the Department of Commerce at NMKRV College, specializing in Goods and Services Tax (GST) and Financial Accounting.",
    "highlights": "E-Content Author for Goods and Services Tax-II.",
    "committee": "Department of Commerce",
    "email": "manasaj.nmkrv@rvei.edu.in",
    "phone": "080-69018900",
    "url": "https://nmkrv.edu.in/commerce/"
  },
  {
    "id": "mrs-anu-revamma-parvathi",
    "name": "Mrs. Anu Revamma Parvathi",
    "designation": "Assistant Professor",
    "department": "Commerce (B.Com)",
    "deptFlow": "faculty_commerce",
    "qualifications": "M.Com., KSET",
    "experience": "Teaching & Institutional Committee Leadership",
    "specialisation": "Advanced Financial Accounting, Corporate Accounting & Business Operations",
    "bio": "Mrs. Anu Revamma Parvathi is an Assistant Professor in the Department of Commerce. She serves as the Coordinator of the Anti-Ragging Cell, Coordinator of the Innovation & Social Media Cell, Member of the IQAC, and Coordinator/Member of the Youth Red Cross.",
    "highlights": "Coordinator — Anti-Ragging Cell & Innovation/Social Media Cell | IQAC Member.",
    "committee": "Coordinator — Anti-Ragging Cell, Innovation Cell & Social Media Cell | IQAC & Youth Red Cross Member",
    "email": "anurevammap.nmkrv@rvei.edu.in",
    "phone": "080-69018900",
    "url": "https://nmkrv.edu.in/commerce/"
  },
  {
    "id": "mrs-sarala-d",
    "name": "Mrs. Sarala D.",
    "designation": "Assistant Professor",
    "department": "Commerce (B.Com)",
    "deptFlow": "faculty_commerce",
    "qualifications": "M.Com., B.Ed., DFD, K-SET",
    "experience": "Teaching Experience in Quantitative Analysis & Commerce",
    "specialisation": "Quantitative Analysis for Business Decisions (QABD), Statistics & Cost Accounting",
    "bio": "Mrs. Sarala D. is an Assistant Professor in the Department of Commerce and serves on the IQAC, Anti-Ragging Cell, and Forum for Strength and Intellect (FSI).",
    "highlights": "IQAC Member, Anti-Ragging Cell Member & FSI Committee Member.",
    "committee": "Member — IQAC, Anti-Ragging Cell & Forum for Strength and Intellect",
    "email": "saralad.nmkrv@rvei.edu.in",
    "phone": "080-69018900",
    "url": "https://nmkrv.edu.in/commerce/"
  },
  {
    "id": "mrs-chinmayee-s-dixit",
    "name": "Mrs. Chinmayee S. Dixit",
    "designation": "Assistant Professor",
    "department": "Commerce (B.Com)",
    "deptFlow": "faculty_commerce",
    "qualifications": "M.Com.",
    "experience": "Teaching Experience in Commerce & Management",
    "specialisation": "Financial Accounting, Cost Management & Corporate Administration",
    "bio": "Mrs. Chinmayee S. Dixit serves as Assistant Professor in the Department of Commerce at NMKRV College.",
    "highlights": "Faculty Member, Department of Commerce.",
    "committee": "Department of Commerce",
    "email": "nmkrv@rvei.edu.in",
    "phone": "080-69018900",
    "url": "https://nmkrv.edu.in/commerce/"
  },
  {
    "id": "mrs-swetha-a-m",
    "name": "Mrs. Swetha A. M.",
    "designation": "Assistant Professor",
    "department": "Commerce (B.Com)",
    "deptFlow": "faculty_commerce",
    "qualifications": "M.Com., KSET",
    "experience": "Teaching Experience in Commerce & Accounting",
    "specialisation": "Corporate Accounting, Financial Management & Banking Operations",
    "bio": "Mrs. Swetha A. M. serves as Assistant Professor in the Department of Commerce at NMKRV College.",
    "highlights": "KSET Qualified Faculty in Commerce.",
    "committee": "Department of Commerce",
    "email": "nmkrv@rvei.edu.in",
    "phone": "080-69018900",
    "url": "https://nmkrv.edu.in/commerce/"
  },
  {
    "id": "mrs-prathiksha-p",
    "name": "Mrs. Prathiksha P.",
    "designation": "Lecturer",
    "department": "Commerce (B.Com)",
    "deptFlow": "faculty_commerce",
    "qualifications": "M.Com.",
    "experience": "Teaching Experience in Commerce",
    "specialisation": "Financial Accounting, Business Management & Marketing",
    "bio": "Mrs. Prathiksha P. serves as Lecturer in the Department of Commerce at NMKRV College.",
    "highlights": "Faculty Member, Department of Commerce.",
    "committee": "Department of Commerce",
    "email": "nmkrv@rvei.edu.in",
    "phone": "080-69018900",
    "url": "https://nmkrv.edu.in/commerce/"
  },
  {
    "id": "ms-rajeshwari-nag-shilpa",
    "name": "Ms. Rajeshwari Nag Shilpa",
    "designation": "Assistant Professor",
    "department": "Commerce (B.Com)",
    "deptFlow": "faculty_commerce",
    "qualifications": "M.Com.",
    "experience": "Teaching Experience in Commerce",
    "specialisation": "Accounting, Taxation & Corporate Administration",
    "bio": "Ms. Rajeshwari Nag Shilpa serves as Assistant Professor in the Department of Commerce at NMKRV College.",
    "highlights": "Faculty Member, Department of Commerce.",
    "committee": "Department of Commerce",
    "email": "nmkrv@rvei.edu.in",
    "phone": "080-69018900",
    "url": "https://nmkrv.edu.in/commerce/"
  },
  {
    "id": "ms-dhrakshayini",
    "name": "Ms. Dhrakshayini",
    "designation": "Assistant Professor",
    "department": "Commerce (B.Com)",
    "deptFlow": "faculty_commerce",
    "qualifications": "M.Com.",
    "experience": "Teaching Experience in Commerce",
    "specialisation": "Commerce, Financial Services & Business Studies",
    "bio": "Ms. Dhrakshayini serves as Assistant Professor in the Department of Commerce at NMKRV College.",
    "highlights": "Faculty Member, Department of Commerce.",
    "committee": "Department of Commerce",
    "email": "nmkrv@rvei.edu.in",
    "phone": "080-69018900",
    "url": "https://nmkrv.edu.in/commerce/"
  },
  {
    "id": "ms-shilpa-navin",
    "name": "Ms. Shilpa Navin",
    "designation": "Assistant Professor",
    "department": "Commerce (B.Com)",
    "deptFlow": "faculty_commerce",
    "qualifications": "M.Com.",
    "experience": "Teaching Experience in Commerce",
    "specialisation": "Commerce, FinTech & Business Accounting",
    "bio": "Ms. Shilpa Navin serves as Assistant Professor in the Department of Commerce at NMKRV College.",
    "highlights": "Faculty Member, Department of Commerce.",
    "committee": "Department of Commerce",
    "email": "nmkrv@rvei.edu.in",
    "phone": "080-69018900",
    "url": "https://nmkrv.edu.in/commerce/"
  },
  {
    "id": "dr-shridhar-murthy",
    "name": "Dr. S. V. Shridhara Murthy",
    "designation": "Associate Professor",
    "department": "Commerce (B.Com)",
    "deptFlow": "faculty_commerce",
    "qualifications": "M.Com., Ph.D.",
    "experience": "Senior Associate Professor & Research Investigator in Commerce",
    "specialisation": "Investment Management, Portfolio Analysis, Micro-Finance & Rural Development",
    "bio": "Dr. S. V. Shridhara Murthy is an Associate Professor in the Department of Commerce, Coordinator of the Forum for Strength and Intellect (FSI), and Principal Investigator of a UGC-funded Minor Research Project on Micro-Finance.",
    "highlights": "Coordinator — Forum for Strength and Intellect (FSI) & UGC Research Project PI.",
    "committee": "Coordinator — Forum for Strength and Intellect (FSI)",
    "email": "sridharamurthysv.nmkrv@rvei.edu.in",
    "phone": "080-69018900",
    "url": "https://nmkrv.edu.in/forum-for-strength-and-intellect/"
  },
  {
    "id": "ms-shashirekha-b-v",
    "name": "Ms. Shashirekha B. V.",
    "designation": "Assistant Professor",
    "department": "Commerce (B.Com)",
    "deptFlow": "faculty_commerce",
    "qualifications": "M.Com.",
    "experience": "Teaching & Entrepreneurship Mentorship Experience",
    "specialisation": "Business Regulations, Entrepreneurship Development & Corporate Law",
    "bio": "Ms. Shashirekha B. V. is an Assistant Professor in the Department of Commerce and serves as the Coordinator of the Entrepreneurship Cell (E-Cell) at NMKRV College.",
    "highlights": "Coordinator — Entrepreneurship Cell (E-Cell).",
    "committee": "Coordinator — E-Cell",
    "email": "shashirekhabv.nmkrv@rvei.edu.in",
    "phone": "080-69018900",
    "url": "https://nmkrv.edu.in/e-cell/"
  },
  {
    "id": "ms-shobha-v",
    "name": "Ms. Shobha V.",
    "designation": "Assistant Professor",
    "department": "Commerce (B.Com)",
    "deptFlow": "faculty_commerce",
    "qualifications": "M.Com.",
    "experience": "Teaching Experience in Commerce & Taxation",
    "specialisation": "Integrated Goods and Services Tax (IGST) Act & Business Decisions",
    "bio": "Ms. Shobha V. is an Assistant Professor in the Department of Commerce and a member of the Forum for Strength and Intellect (FSI).",
    "highlights": "E-Content Author for IGST Act 2017 & Business Decisions.",
    "committee": "Member — Forum for Strength and Intellect (FSI)",
    "email": "shobhav.nmkrv@rvei.edu.in",
    "phone": "080-69018900",
    "url": "https://nmkrv.edu.in/forum-for-strength-and-intellect/"
  },
  {
    "id": "mrs-madhuri-s-d",
    "name": "Mrs. Madhuri S. D.",
    "designation": "Assistant Professor — PG Commerce",
    "department": "PG Commerce (M.Com)",
    "deptFlow": "faculty_commerce",
    "qualifications": "M.Com., MBA, PGDBFM",
    "experience": "Postgraduate Teaching Experience in Commerce & Management",
    "specialisation": "Strategic Management, Advanced Financial Management, Banking & Risk Management",
    "bio": "Mrs. Madhuri S. D. serves as Assistant Professor in the Postgraduate Department of Commerce (M.Com) at NMKRV College.",
    "highlights": "Postgraduate M.Com Faculty with triple masters/diploma credentials (M.Com, MBA, PGDBFM).",
    "committee": "PG Department of Commerce (M.Com)",
    "email": "nmkrv@rvei.edu.in",
    "phone": "080-69018900",
    "url": "https://nmkrv.edu.in/m-com/"
  },
  {
    "id": "dr-krishika-m-a",
    "name": "Dr. Krishika M. A.",
    "designation": "Assistant Professor — PG Commerce",
    "department": "PG Commerce (M.Com)",
    "deptFlow": "faculty_commerce",
    "qualifications": "M.Com., M.Phil., Ph.D.",
    "experience": "Postgraduate Teaching & Research Experience",
    "specialisation": "Business Research Methods, Corporate Financial Reporting & Quantitative Techniques",
    "bio": "Dr. Krishika M. A. serves as Assistant Professor in the Postgraduate Department of Commerce (M.Com) at NMKRV College.",
    "highlights": "Doctorate Faculty in Postgraduate Commerce (M.Com).",
    "committee": "PG Department of Commerce (M.Com)",
    "email": "nmkrv@rvei.edu.in",
    "phone": "080-69018900",
    "url": "https://nmkrv.edu.in/m-com/"
  },
  {
    "id": "mrs-anupama-m-a",
    "name": "Mrs. Anupama M. A.",
    "designation": "Assistant Professor",
    "department": "Management (BBA)",
    "deptFlow": "faculty_bba",
    "qualifications": "M.Com., ICWA Inter, MBA",
    "experience": "16+ Years at NMKRV College (Joined August 2009)",
    "specialisation": "Financial Management, Cost & Management Accounting, Business Strategy",
    "bio": "Mrs. Anupama M. A. is a senior Assistant Professor in the Department of Management (BBA) at NMKRV College since August 2009 and serves as the Coordinator of Navyata — The Fashion Club.",
    "highlights": "16+ Years at NMKRV College | Coordinator — Navyata Fashion Club.",
    "committee": "Coordinator — Navyata (The Fashion Club)",
    "email": "anupama.nmkrv@rvei.edu.in",
    "phone": "080-69018900",
    "url": "https://nmkrv.edu.in/management/"
  },
  {
    "id": "mrs-roopashree-a",
    "name": "Mrs. Roopashree A.",
    "designation": "Assistant Professor",
    "department": "Management (BBA)",
    "deptFlow": "faculty_bba",
    "qualifications": "MBA, PGDHRM",
    "experience": "13+ Years at NMKRV College (Joined December 2012)",
    "specialisation": "Human Resource Management, Organizational Behaviour & Entrepreneurship",
    "bio": "Mrs. Roopashree A. is an Assistant Professor in the Department of Management (BBA) since December 2012. She serves as Coordinator of the Entrepreneurship Cell (E-Cell) and Member of the Examination Core Team.",
    "highlights": "Coordinator — E-Cell & Member of Examination Core Team (COE).",
    "committee": "Coordinator — E-Cell | Exam Core Team — COE",
    "email": "roopashree.nmkrv@rvei.edu.in",
    "phone": "080-69018900",
    "url": "https://nmkrv.edu.in/management/"
  },
  {
    "id": "ms-pooja-v",
    "name": "Ms. Pooja V.",
    "designation": "Assistant Professor",
    "department": "Management (BBA)",
    "deptFlow": "faculty_bba",
    "qualifications": "MBA",
    "experience": "Full-Time Faculty in Management (Joined February 2024)",
    "specialisation": "Marketing Management, Business Administration & Corporate Communication",
    "bio": "Ms. Pooja V. is an Assistant Professor in the Department of Management (BBA) at NMKRV College and a member of the Innovation Cell and Social Media Cell.",
    "highlights": "Member — Innovation Cell & Social Media Cell.",
    "committee": "Member — Innovation Cell & Social Media Cell",
    "email": "nmkrv@rvei.edu.in",
    "phone": "080-69018900",
    "url": "https://nmkrv.edu.in/management/"
  },
  {
    "id": "ms-sharada-a",
    "name": "Ms. Sharada A.",
    "designation": "Assistant Professor",
    "department": "Management (BBA)",
    "deptFlow": "faculty_bba",
    "qualifications": "M.Com.",
    "experience": "Full-Time Faculty in Management (Joined August 2024)",
    "specialisation": "Accounting for Managers, Business Regulations & Financial Markets",
    "bio": "Ms. Sharada A. serves as Assistant Professor in the Department of Management (BBA) at NMKRV College.",
    "highlights": "AICTE Approved BBA Faculty Member.",
    "committee": "Department of Management (BBA)",
    "email": "nmkrv@rvei.edu.in",
    "phone": "080-69018900",
    "url": "https://nmkrv.edu.in/management/"
  },
  {
    "id": "dr-kumar-d-n",
    "name": "Dr. Kumar D. N.",
    "designation": "Faculty Member",
    "department": "Management (BBA)",
    "deptFlow": "faculty_bba",
    "qualifications": "MBA, Ph.D.",
    "experience": "Teaching & Research Experience in Management",
    "specialisation": "Business Management & Organizational Studies",
    "bio": "Dr. Kumar D. N. serves in the Department of Management and as Coordinator on the Library Advisory Committee at NMKRV College.",
    "highlights": "Coordinator — Library Advisory Committee.",
    "committee": "Coordinator — Library Advisory Committee",
    "email": "nmkrv@rvei.edu.in",
    "phone": "080-69018900",
    "url": "https://nmkrv.edu.in/library/"
  },
  {
    "id": "mrs-vandana-g-p",
    "name": "Mrs. Vandana G. P.",
    "designation": "Assistant Professor",
    "department": "Computer Applications (BCA)",
    "deptFlow": "faculty_bca",
    "qualifications": "MCA",
    "experience": "Full-Time Faculty in BCA (Joined June 2022)",
    "specialisation": "Software Engineering, Database Management Systems & Web Technologies",
    "bio": "Mrs. Vandana G. P. serves as Assistant Professor in the AICTE-approved Department of Computer Applications (BCA) at NMKRV College.",
    "highlights": "Core Faculty Member, Department of Computer Applications (BCA).",
    "committee": "Department of Computer Applications (BCA)",
    "email": "nmkrv@rvei.edu.in",
    "phone": "080-69018900",
    "url": "https://nmkrv.edu.in/bca/"
  },
  {
    "id": "mrs-bindhya-m",
    "name": "Mrs. Bindhya M.",
    "designation": "Assistant Professor",
    "department": "Computer Applications (BCA)",
    "deptFlow": "faculty_bca",
    "qualifications": "MCA, M.Sc. Computer Science",
    "experience": "8+ Years at NMKRV College (Joined January 2018)",
    "specialisation": "Object-Oriented Programming, Data Structures & Operating Systems",
    "bio": "Mrs. Bindhya M. is an Assistant Professor in the Department of Computer Applications (BCA) since January 2018 and serves on the Examination Core Team in the Office of the Controller of Examinations.",
    "highlights": "Member — Examination Core Team (COE) & Senior BCA Faculty.",
    "committee": "Exam Core Team — Office of the Controller of Examinations",
    "email": "bindhyam.nmkrv@rvei.edu.in",
    "phone": "080-69018900",
    "url": "https://nmkrv.edu.in/bca/"
  },
  {
    "id": "ms-haritha-n",
    "name": "Ms. Haritha N.",
    "designation": "Assistant Professor",
    "department": "Computer Applications (BCA)",
    "deptFlow": "faculty_bca",
    "qualifications": "MCA",
    "experience": "Full-Time Faculty in BCA (Joined October 2023)",
    "specialisation": "Computer Networks, Programming in C/Java & Cloud Computing",
    "bio": "Ms. Haritha N. serves as Assistant Professor in the Department of Computer Applications (BCA) at NMKRV College.",
    "highlights": "AICTE Approved BCA Faculty Member.",
    "committee": "Department of Computer Applications (BCA)",
    "email": "nmkrv@rvei.edu.in",
    "phone": "080-69018900",
    "url": "https://nmkrv.edu.in/bca/"
  },
  {
    "id": "ms-rochana-g",
    "name": "Ms. Rochana G.",
    "designation": "Assistant Professor",
    "department": "Computer Applications (BCA)",
    "deptFlow": "faculty_bca",
    "qualifications": "MCA, M.Sc. Data Science",
    "experience": "Full-Time Faculty in BCA (Joined August 2024)",
    "specialisation": "Data Science, Python Programming & Machine Learning",
    "bio": "Ms. Rochana G. is an Assistant Professor in the Department of Computer Applications (BCA) and serves as a member of the Innovation Cell and Social Media Cell.",
    "highlights": "Member — Innovation Cell & Social Media Cell.",
    "committee": "Member — Innovation Cell & Social Media Cell",
    "email": "nmkrv@rvei.edu.in",
    "phone": "080-69018900",
    "url": "https://nmkrv.edu.in/bca/"
  },
  {
    "id": "ms-aishwarya-s",
    "name": "Ms. Aishwarya S.",
    "designation": "Assistant Professor",
    "department": "Computer Applications (BCA)",
    "deptFlow": "faculty_bca",
    "qualifications": "MCA",
    "experience": "Full-Time Faculty in BCA (Joined September 2024)",
    "specialisation": "Web Application Development, RDBMS & Software Testing",
    "bio": "Ms. Aishwarya S. serves as Assistant Professor in the Department of Computer Applications (BCA) at NMKRV College.",
    "highlights": "AICTE Approved BCA Faculty Member.",
    "committee": "Department of Computer Applications (BCA)",
    "email": "nmkrv@rvei.edu.in",
    "phone": "080-69018900",
    "url": "https://nmkrv.edu.in/bca/"
  },
  {
    "id": "dr-hamsha-k",
    "name": "Dr. Hamsha K.",
    "designation": "Assistant Professor",
    "department": "Computer Science (B.Sc CS)",
    "deptFlow": "faculty_bca",
    "qualifications": "B.E., M.S., M.Tech., Ph.D.",
    "experience": "Senior Faculty & Research Supervisor in Computer Science",
    "specialisation": "Computer Networks, Artificial Intelligence, Algorithms & Data Structures",
    "bio": "Dr. Hamsha K. is an Assistant Professor in the Department of Computer Science, a recognized Research Faculty member, and a Member of the Academic Council at NMKRV College.",
    "highlights": "Member — Academic Council & Recognized Research Faculty in Computer Science.",
    "committee": "Member — Academic Council | Research Faculty — Computer Science",
    "email": "hamsha.nmkrv@rvei.edu.in",
    "phone": "080-69018900",
    "url": "https://nmkrv.edu.in/science/cs/"
  },
  {
    "id": "mrs-sudha-g",
    "name": "Mrs. Sudha G.",
    "designation": "Assistant Professor",
    "department": "Computer Science & Applications (B.Sc CS / BCA)",
    "deptFlow": "faculty_bca",
    "qualifications": "B.E. Computer Science, M.A. English",
    "experience": "21+ Years at NMKRV College (Joined September 2004)",
    "specialisation": "Digital Computer Fundamentals, Linux Programming, Operating Systems & Java",
    "bio": "Mrs. Sudha G. is a senior Assistant Professor in the Department of Computer Science & Applications at NMKRV College with over two decades of teaching experience since September 2004.",
    "highlights": "21+ Years of dedicated teaching service at NMKRV College.",
    "committee": "Department of Computer Science & BCA",
    "email": "sudhag.nmkrv@rvei.edu.in",
    "phone": "080-69018900",
    "url": "https://nmkrv.edu.in/science/cs/"
  },
  {
    "id": "ms-vaishnavi-k",
    "name": "Ms. Vaishnavi K.",
    "designation": "Assistant Professor",
    "department": "Computer Science & Applications (B.Sc CS / BCA)",
    "deptFlow": "faculty_bca",
    "qualifications": "B.E. Computer Science, MCA",
    "experience": "Full-Time Faculty (Joined February 2024)",
    "specialisation": "Programming in C, Web Technologies & Visual Programming",
    "bio": "Ms. Vaishnavi K. serves as Assistant Professor in the Department of Computer Science and Computer Applications at NMKRV College.",
    "highlights": "Faculty Member, Computer Science & BCA.",
    "committee": "Department of Computer Science & BCA",
    "email": "nmkrv@rvei.edu.in",
    "phone": "080-69018900",
    "url": "https://nmkrv.edu.in/science/cs/"
  },
  {
    "id": "mrs-deepalakshmi-r",
    "name": "Mrs. Deepalakshmi R.",
    "designation": "Assistant Professor — M.Sc. Data Science & BCA",
    "department": "PG Data Science & Computer Applications",
    "deptFlow": "faculty_bca",
    "qualifications": "B.E. Computer Science, M.Tech. Data Science",
    "experience": "Full-Time Faculty (Joined August 2021)",
    "specialisation": "Data Science, Big Data Analytics, Machine Learning & Statistical Modelling",
    "bio": "Mrs. Deepalakshmi R. serves as Assistant Professor in the Postgraduate Department of M.Sc. Data Science and BCA at NMKRV College.",
    "highlights": "Lead Faculty for M.Sc. Data Science & AICTE BCA Faculty.",
    "committee": "PG Department of Data Science",
    "email": "nmkrv@rvei.edu.in",
    "phone": "080-69018900",
    "url": "https://nmkrv.edu.in/m-sc-data-science/"
  },
  {
    "id": "ms-aishwarya-m",
    "name": "Ms. Aishwarya M.",
    "designation": "Assistant Professor — M.Sc. Data Science",
    "department": "PG Data Science (M.Sc.)",
    "deptFlow": "faculty_bca",
    "qualifications": "M.Sc.",
    "experience": "Postgraduate Teaching Experience in Data Science",
    "specialisation": "Data Analytics, Python for Data Science & Predictive Modelling",
    "bio": "Ms. Aishwarya M. serves as Assistant Professor in the Postgraduate Department of M.Sc. Data Science at NMKRV College.",
    "highlights": "Faculty Member, PG Department of Data Science.",
    "committee": "PG Department of Data Science",
    "email": "nmkrv@rvei.edu.in",
    "phone": "080-69018900",
    "url": "https://nmkrv.edu.in/m-sc-data-science/"
  },
  {
    "id": "ms-supriti-chakraborthy",
    "name": "Ms. Supriti Chakraborthy",
    "designation": "Assistant Professor — M.Sc. Data Science",
    "department": "PG Data Science (M.Sc.)",
    "deptFlow": "faculty_bca",
    "qualifications": "M.Sc.",
    "experience": "Postgraduate Teaching Experience in Data Science",
    "specialisation": "Statistical Inference, Data Visualization & Computational Analytics",
    "bio": "Ms. Supriti Chakraborthy serves as Assistant Professor in the Postgraduate Department of M.Sc. Data Science at NMKRV College.",
    "highlights": "Faculty Member, PG Department of Data Science.",
    "committee": "PG Department of Data Science",
    "email": "nmkrv@rvei.edu.in",
    "phone": "080-69018900",
    "url": "https://nmkrv.edu.in/m-sc-data-science/"
  },
  {
    "id": "dr-venkataramanappa-y",
    "name": "Dr. Y. Venkataramanappa",
    "designation": "Assistant Professor & PG Coordinator (Chemistry)",
    "department": "PG & Research Chemistry (M.Sc. & Ph.D.)",
    "deptFlow": "faculty_physical_sciences",
    "qualifications": "M.Sc., Ph.D.",
    "experience": "PG Coordinator, Ph.D. Research Guide & Governing Body Member",
    "specialisation": "Analytical Chemistry, Spectrophotometric Environmental Analysis & Inorganic Chemistry",
    "bio": "Dr. Y. Venkataramanappa is the PG Coordinator of the Department of Chemistry, a recognized Bangalore University Ph.D. Research Guide, Member of the Governing Body, and Member of the Research Advisory Committee. He has led UGC-funded research projects on trace environmental analysis.",
    "highlights": "Ph.D. Research Guide | Governing Body Member | PG Chemistry Coordinator | UGC MRP Principal Investigator.",
    "committee": "Member — Governing Body & Research Advisory Committee | Ph.D. Research Guide",
    "email": "venkataramanappa.nmkrv@rvei.edu.in",
    "phone": "080-69018900",
    "url": "https://nmkrv.edu.in/m-sc-chemistry/"
  },
  {
    "id": "dr-santhosh-a-s",
    "name": "Dr. Santhosh A. S.",
    "designation": "Assistant Professor & Head (Chemistry)",
    "department": "Chemistry (B.Sc.)",
    "deptFlow": "faculty_physical_sciences",
    "qualifications": "M.Sc., B.Ed., Ph.D.",
    "experience": "Head of Department (UG Chemistry) & Research Faculty",
    "specialisation": "Electrochemistry, Nanomaterials, Analytical & Physical Chemistry",
    "bio": "Dr. Santhosh A. S. serves as Assistant Professor and Head of the Department of Chemistry at NMKRV College and is a member of the Research Advisory Committee.",
    "highlights": "Head of Department (Chemistry) & Member of Research Advisory Committee.",
    "committee": "HoD — Chemistry | Member — Research Advisory Committee",
    "email": "santhoshas.nmkrv@rvei.edu.in",
    "phone": "080-69018900",
    "url": "https://nmkrv.edu.in/science/chemistry/"
  },
  {
    "id": "mrs-suparna-k",
    "name": "Mrs. Suparna K.",
    "designation": "Assistant Professor",
    "department": "Chemistry (B.Sc.)",
    "deptFlow": "faculty_physical_sciences",
    "qualifications": "M.Sc., NET",
    "experience": "Teaching & Institutional Quality Assurance Experience",
    "specialisation": "Organic & Inorganic Chemistry, Green Chemistry & Analytical Techniques",
    "bio": "Mrs. Suparna K. is an Assistant Professor in the Department of Chemistry, Coordinator of the Youth Red Cross, and a Member of the Internal Quality Assurance Cell (IQAC).",
    "highlights": "Coordinator — Youth Red Cross & Member of IQAC.",
    "committee": "Coordinator — Youth Red Cross | Member — IQAC",
    "email": "suparnak.nmkrv@rvei.edu.in",
    "phone": "080-69018900",
    "url": "https://nmkrv.edu.in/science/chemistry/"
  },
  {
    "id": "dr-shruthi-c-d",
    "name": "Dr. Shruthi C. D.",
    "designation": "Assistant Professor",
    "department": "Chemistry (B.Sc.)",
    "deptFlow": "faculty_physical_sciences",
    "qualifications": "M.Sc., Ph.D.",
    "experience": "Teaching & Research Experience in Chemical Sciences",
    "specialisation": "Organic Synthesis, Medicinal Chemistry & Spectroscopy",
    "bio": "Dr. Shruthi C. D. is an Assistant Professor and Research Faculty member in the Department of Chemistry and serves as a Committee Member of the Youth Red Cross.",
    "highlights": "Recognized Research Faculty in Chemistry & Youth Red Cross Member.",
    "committee": "Research Faculty — Chemistry | Member — Youth Red Cross",
    "email": "shruthicd.nmkrv@rvei.edu.in",
    "phone": "080-69018900",
    "url": "https://nmkrv.edu.in/science/chemistry/"
  },
  {
    "id": "dr-shridevi-salagare",
    "name": "Dr. Shridevi Salagare",
    "designation": "Assistant Professor",
    "department": "Chemistry (B.Sc.)",
    "deptFlow": "faculty_physical_sciences",
    "qualifications": "M.Sc., B.Ed., Ph.D.",
    "experience": "Teaching & Research Experience in Chemistry",
    "specialisation": "Inorganic, Physical & Analytical Chemistry",
    "bio": "Dr. Shridevi Salagare is an Assistant Professor and recognized Research Faculty member in the Department of Chemistry at NMKRV College.",
    "highlights": "Recognized Research Faculty in Chemistry.",
    "committee": "Research Faculty — Chemistry",
    "email": "nmkrv@rvei.edu.in",
    "phone": "080-69018900",
    "url": "https://nmkrv.edu.in/science/chemistry/"
  },
  {
    "id": "ms-savitha-n",
    "name": "Ms. Savitha N.",
    "designation": "Assistant Professor",
    "department": "Chemistry (B.Sc.)",
    "deptFlow": "faculty_physical_sciences",
    "qualifications": "M.Sc. Chemistry",
    "experience": "Teaching Experience in Undergraduate Chemistry",
    "specialisation": "General & Practical Chemistry, Forensic Science Certificate Course",
    "bio": "Ms. Savitha N. serves as Assistant Professor in the Department of Chemistry at NMKRV College.",
    "highlights": "Faculty Member, DBT-STAR Supported Department of Chemistry.",
    "committee": "Department of Chemistry",
    "email": "nmkrv@rvei.edu.in",
    "phone": "080-69018900",
    "url": "https://nmkrv.edu.in/science/chemistry/"
  },
  {
    "id": "dr-roopa-d-l",
    "name": "Dr. Roopa D. L.",
    "designation": "Assistant Professor — PG Chemistry",
    "department": "PG Chemistry (M.Sc.)",
    "deptFlow": "faculty_physical_sciences",
    "qualifications": "M.Sc., Ph.D.",
    "experience": "Postgraduate Teaching, Consultancy & Research Experience",
    "specialisation": "Organic Reaction Mechanisms, Heterocyclic Chemistry & Characterization Consultancy",
    "bio": "Dr. Roopa D. L. is an Assistant Professor in the Postgraduate Department of Chemistry (M.Sc. Chemistry) and serves on the Research Advisory Committee at NMKRV College.",
    "highlights": "Member — Research Advisory Committee & Research Consultancy Faculty.",
    "committee": "Member — Research Advisory Committee | PG Chemistry",
    "email": "roopadl.nmkrv@rvei.edu.in",
    "phone": "080-69018900",
    "url": "https://nmkrv.edu.in/m-sc-chemistry/"
  },
  {
    "id": "dr-shamala-d",
    "name": "Dr. Shamala D.",
    "designation": "Assistant Professor — PG Chemistry",
    "department": "PG Chemistry (M.Sc.)",
    "deptFlow": "faculty_physical_sciences",
    "qualifications": "M.Sc., Ph.D.",
    "experience": "Postgraduate Teaching & Research Consultancy Experience",
    "specialisation": "Crystallography, Molecular Structure Elucidation & Organic Spectroscopy",
    "bio": "Dr. Shamala D. is an Assistant Professor and Research Faculty member in the Postgraduate Department of Chemistry (M.Sc. Chemistry) at NMKRV College.",
    "highlights": "Recognized Research & Consultancy Faculty in PG Chemistry.",
    "committee": "Research Faculty — PG Chemistry",
    "email": "shamalad.nmkrv@rvei.edu.in",
    "phone": "080-69018900",
    "url": "https://nmkrv.edu.in/m-sc-chemistry/"
  },
  {
    "id": "dr-vidyagayatri-m",
    "name": "Dr. Vidyagayatri M.",
    "designation": "Assistant Professor — PG Chemistry",
    "department": "PG Chemistry (M.Sc.)",
    "deptFlow": "faculty_physical_sciences",
    "qualifications": "M.Sc., Ph.D.",
    "experience": "Postgraduate Teaching & Research Consultancy Experience",
    "specialisation": "Medicinal Organic Chemistry, Natural Products & Stereochemistry",
    "bio": "Dr. Vidyagayatri M. is an Assistant Professor and Research Faculty member in the Postgraduate Department of Chemistry (M.Sc. Chemistry) at NMKRV College.",
    "highlights": "Recognized Research & Consultancy Faculty in PG Chemistry.",
    "committee": "Research Faculty — PG Chemistry",
    "email": "vidyagayatri.nmkrv@rvei.edu.in",
    "phone": "080-69018900",
    "url": "https://nmkrv.edu.in/m-sc-chemistry/"
  },
  {
    "id": "dr-govindagouda-patil",
    "name": "Dr. Govindagouda Shreenivasa Patil",
    "designation": "Assistant Professor — PG Chemistry",
    "department": "PG Chemistry (M.Sc.)",
    "deptFlow": "faculty_physical_sciences",
    "qualifications": "M.Sc., Ph.D., UGC-NET",
    "experience": "Postgraduate Teaching & Research Experience in Chemistry",
    "specialisation": "Organometallic Chemistry, Catalysis & Retrosynthetic Analysis",
    "bio": "Dr. Govindagouda Shreenivasa Patil is an Assistant Professor and Research Faculty member in the Postgraduate Department of Chemistry at NMKRV College.",
    "highlights": "UGC-NET & Ph.D. Qualified Research Faculty in PG Chemistry.",
    "committee": "Research Faculty — PG Chemistry",
    "email": "nmkrv@rvei.edu.in",
    "phone": "080-69018900",
    "url": "https://nmkrv.edu.in/m-sc-chemistry/"
  },
  {
    "id": "dr-shyamala-r",
    "name": "Dr. Shyamala R.",
    "designation": "Assistant Professor — PG Chemistry",
    "department": "PG Chemistry (M.Sc.)",
    "deptFlow": "faculty_physical_sciences",
    "qualifications": "M.Sc., B.Ed., Ph.D.",
    "experience": "Postgraduate Teaching & Research Experience",
    "specialisation": "Physical Chemistry, Quantum Mechanics & Chemical Kinetics",
    "bio": "Dr. Shyamala R. is an Assistant Professor and Research Faculty member in the Postgraduate Department of Chemistry at NMKRV College.",
    "highlights": "Recognized Research Faculty in PG Chemistry.",
    "committee": "Research Faculty — PG Chemistry",
    "email": "nmkrv@rvei.edu.in",
    "phone": "080-69018900",
    "url": "https://nmkrv.edu.in/m-sc-chemistry/"
  },
  {
    "id": "ms-nayana-k-o",
    "name": "Ms. Nayana K. O.",
    "designation": "Assistant Professor — PG Chemistry",
    "department": "PG Chemistry (M.Sc.)",
    "deptFlow": "faculty_physical_sciences",
    "qualifications": "M.Sc. Chemistry",
    "experience": "Postgraduate Teaching Experience in Chemistry",
    "specialisation": "Analytical & Organic Chemistry",
    "bio": "Ms. Nayana K. O. serves as Assistant Professor in the Postgraduate Department of Chemistry at NMKRV College.",
    "highlights": "Faculty Member, PG Department of Chemistry.",
    "committee": "PG Department of Chemistry",
    "email": "nmkrv@rvei.edu.in",
    "phone": "080-69018900",
    "url": "https://nmkrv.edu.in/m-sc-chemistry/"
  },
  {
    "id": "dr-sheeba-s",
    "name": "Dr. Sheeba S.",
    "designation": "Assistant Professor",
    "department": "Mathematics (B.Sc. & M.Sc.)",
    "deptFlow": "faculty_physical_sciences",
    "qualifications": "M.Sc., Ph.D.",
    "experience": "Senior Faculty & Research Member in Mathematics",
    "specialisation": "Differential Equations, Fluid Mechanics, Linear Algebra & Numerical Methods",
    "bio": "Dr. Sheeba S. is an Assistant Professor in the Department of Mathematics and a member of the Research Advisory Committee at NMKRV College.",
    "highlights": "Member — Research Advisory Committee & Recognized Research Faculty.",
    "committee": "Member — Research Advisory Committee | Department of Mathematics",
    "email": "sheeba.nmkrv@rvei.edu.in",
    "phone": "080-69018900",
    "url": "https://nmkrv.edu.in/science/maths/"
  },
  {
    "id": "dr-saba-tarannum",
    "name": "Dr. Saba Tarannum",
    "designation": "Assistant Professor",
    "department": "Mathematics (B.Sc. & M.Sc.)",
    "deptFlow": "faculty_physical_sciences",
    "qualifications": "M.Sc., Ph.D.",
    "experience": "Teaching, Research & IQAC Quality Assurance Experience",
    "specialisation": "Abstract Algebra, Real & Complex Analysis, Topology & FOSS Tools",
    "bio": "Dr. Saba Tarannum is an Assistant Professor in the Department of Mathematics, a recognized Research Faculty member, and a core Member of the Internal Quality Assurance Cell (IQAC).",
    "highlights": "Member — IQAC & Recognized Research Faculty in Mathematics.",
    "committee": "Member — IQAC | Research Faculty — Mathematics",
    "email": "sabatarnnum.nmkrv@rvei.edu.in",
    "phone": "080-69018900",
    "url": "https://nmkrv.edu.in/science/maths/"
  },
  {
    "id": "mrs-radharani-v",
    "name": "Mrs. Radharani V.",
    "designation": "Assistant Professor",
    "department": "Mathematics (B.Sc.)",
    "deptFlow": "faculty_physical_sciences",
    "qualifications": "M.Sc. Mathematics",
    "experience": "Teaching Experience in Undergraduate Mathematics",
    "specialisation": "Matrices, Calculus, Fourier Series & Vector Differential Calculus",
    "bio": "Mrs. Radharani V. serves as Assistant Professor in the Department of Mathematics at NMKRV College.",
    "highlights": "E-Content & FOSS Mathematics Laboratory Faculty.",
    "committee": "Department of Mathematics",
    "email": "radharaniv.nmkrv@rvei.edu.in",
    "phone": "080-69018900",
    "url": "https://nmkrv.edu.in/science/maths/"
  },
  {
    "id": "ms-gowthami-g",
    "name": "Ms. Gowthami G.",
    "designation": "Assistant Professor — M.Sc. Mathematics",
    "department": "PG Mathematics (M.Sc.)",
    "deptFlow": "faculty_physical_sciences",
    "qualifications": "M.Sc. Mathematics",
    "experience": "Postgraduate Teaching Experience in Mathematics",
    "specialisation": "Topology, Functional Analysis, Differential Geometry & Discrete Mathematics",
    "bio": "Ms. Gowthami G. serves as Assistant Professor in the Postgraduate Department of Mathematics (M.Sc. Mathematics) and is a Member of the IQAC at NMKRV College.",
    "highlights": "Member — Internal Quality Assurance Cell (IQAC) & PG Mathematics Faculty.",
    "committee": "Member — IQAC | PG Department of Mathematics",
    "email": "gowthamig.nmkrv@rvei.edu.in",
    "phone": "080-69018900",
    "url": "https://nmkrv.edu.in/m-sc-mathematics/"
  },
  {
    "id": "mrs-mamatha-b-n",
    "name": "Mrs. Mamatha B. N.",
    "designation": "Assistant Professor",
    "department": "Physics (B.Sc.)",
    "deptFlow": "faculty_physical_sciences",
    "qualifications": "M.Sc. Physics",
    "experience": "Teaching Experience in Undergraduate Physics",
    "specialisation": "Classical Mechanics, Thermodynamics, Optics & Electronics",
    "bio": "Mrs. Mamatha B. N. serves as Assistant Professor in the Department of Physics at NMKRV College.",
    "highlights": "Senior Faculty Member, Department of Physics.",
    "committee": "Department of Physics",
    "email": "mamathabn.nmkrv@rvei.edu.in",
    "phone": "080-69018900",
    "url": "https://nmkrv.edu.in/science/physics/"
  },
  {
    "id": "mr-pavan-kumar-c-s",
    "name": "Mr. Pavan Kumar C. S.",
    "designation": "Assistant Professor",
    "department": "Physics (B.Sc.)",
    "deptFlow": "faculty_physical_sciences",
    "qualifications": "M.Sc. Physics",
    "experience": "Teaching & IQAC Quality Assurance Experience",
    "specialisation": "Quantum Mechanics, Radiation Physics, Electromagnetism & Solid State Physics",
    "bio": "Mr. Pavan Kumar C. S. is an Assistant Professor in the Department of Physics and serves as a Member of the Internal Quality Assurance Cell (IQAC).",
    "highlights": "Member — Internal Quality Assurance Cell (IQAC).",
    "committee": "Member — IQAC | Department of Physics",
    "email": "nmkrv@rvei.edu.in",
    "phone": "080-69018900",
    "url": "https://nmkrv.edu.in/science/physics/"
  },
  {
    "id": "prof-gunavathi-v",
    "name": "Prof. Gunavathi V.",
    "designation": "Assistant Professor",
    "department": "Physics (B.Sc.)",
    "deptFlow": "faculty_physical_sciences",
    "qualifications": "M.Sc. Physics",
    "experience": "Senior Faculty & Academic Council Member",
    "specialisation": "Mechanics, Fluid Dynamics, Cryogenics & Experimental Physics",
    "bio": "Prof. Gunavathi V. serves as Assistant Professor in the Department of Physics and is a Faculty Member on the Academic Council of NMKRV College.",
    "highlights": "Member-Faculty on the Academic Council of NMKRV College.",
    "committee": "Member — Academic Council | Department of Physics",
    "email": "nmkrv@rvei.edu.in",
    "phone": "080-69018900",
    "url": "https://nmkrv.edu.in/science/physics/"
  },
  {
    "id": "mrs-priya-r",
    "name": "Mrs. Priya R.",
    "designation": "Assistant Professor",
    "department": "Biotechnology (B.Sc.)",
    "deptFlow": "faculty_life_sciences",
    "qualifications": "M.Sc. Biotechnology",
    "experience": "Senior Faculty & UGC Research Project Co-Investigator",
    "specialisation": "Microbiology, Genetic Engineering, Molecular Biology & Environmental Biotechnology",
    "bio": "Mrs. Priya R. is an Assistant Professor in the Department of Biotechnology. She serves as a Member of the Academic Council, Coordinator of the Eco Club, Member of the Anti-Ragging Cell, and Co-Investigator of a UGC Minor Research Project.",
    "highlights": "Member — Academic Council | Coordinator — Eco Club | Member — Anti-Ragging Cell.",
    "committee": "Member — Academic Council & Anti-Ragging Cell | Coordinator — Eco Club",
    "email": "priyar.nmkrv@rvei.edu.in",
    "phone": "080-69018900",
    "url": "https://nmkrv.edu.in/science/biotechnology/"
  },
  {
    "id": "mrs-bhamamani-b-j",
    "name": "Mrs. Bhamamani B. J.",
    "designation": "Assistant Professor",
    "department": "Biotechnology (B.Sc.)",
    "deptFlow": "faculty_life_sciences",
    "qualifications": "M.Sc. Biotechnology",
    "experience": "Teaching & Student Welfare Committee Experience",
    "specialisation": "Cell Biology, Immunology, Animal & Plant Biotechnology",
    "bio": "Mrs. Bhamamani B. J. is an Assistant Professor in the Department of Biotechnology and serves on the IQAC, Grievance Redressal Committee (GRC), Internal Complaints Committee (ICC), and Fine Arts Club.",
    "highlights": "Member — IQAC, Grievance Redressal Committee (GRC) & Internal Complaints Committee (ICC).",
    "committee": "Member — IQAC, GRC, ICC & Fine Arts Club",
    "email": "bhamamanibj.nmkrv@rvei.edu.in",
    "phone": "080-69018900",
    "url": "https://nmkrv.edu.in/science/biotechnology/"
  },
  {
    "id": "mrs-nalina-n",
    "name": "Mrs. Nalina N.",
    "designation": "Assistant Professor",
    "department": "Biotechnology (B.Sc.)",
    "deptFlow": "faculty_life_sciences",
    "qualifications": "M.Sc., M.Phil.",
    "experience": "Teaching Experience in Biotechnology",
    "specialisation": "Biomolecules, Industrial Biotechnology, Fermentation Technology & Bioinformatics",
    "bio": "Mrs. Nalina N. is an Assistant Professor in the Department of Biotechnology and serves as a member of the Innovation Cell and Social Media Cell.",
    "highlights": "Member — Innovation Cell & Social Media Cell.",
    "committee": "Member — Innovation Cell & Social Media Cell",
    "email": "nmkrv@rvei.edu.in",
    "phone": "080-69018900",
    "url": "https://nmkrv.edu.in/science/biotechnology/"
  },
  {
    "id": "dr-mrunalini-b-r",
    "name": "Dr. Mrunalini B. R.",
    "designation": "Assistant Professor & PG Coordinator (M.Sc. Biotechnology)",
    "department": "PG Biotechnology (M.Sc.)",
    "deptFlow": "faculty_life_sciences",
    "qualifications": "M.Sc., M.Phil., Ph.D.",
    "experience": "Coordinator — M.Sc. Biotechnology & Research Advisory Committee",
    "specialisation": "Molecular Biology, Recombinant DNA Technology, Bioprocess Engineering & Genomics",
    "bio": "Dr. Mrunalini B. R. is the PG Coordinator for M.Sc. Biotechnology, Coordinator of the Research Advisory Committee under the Centre for Coordination of Research (CCR), and a Member of the IQAC and Innovation Cell.",
    "highlights": "Coordinator — Research Advisory Committee & PG Biotechnology | Member — IQAC.",
    "committee": "Coordinator — Research Advisory Committee & M.Sc. Biotechnology | Member — IQAC",
    "email": "nmkrv@rvei.edu.in",
    "phone": "080-69018900",
    "url": "https://nmkrv.edu.in/msc-biotechnology/"
  },
  {
    "id": "dr-aruna-nair",
    "name": "Dr. Aruna Nair",
    "designation": "Assistant Professor — M.Sc. Biotechnology",
    "department": "PG Biotechnology (M.Sc.)",
    "deptFlow": "faculty_life_sciences",
    "qualifications": "M.Sc., Ph.D.",
    "experience": "Postgraduate Teaching & Research Experience in Biotechnology",
    "specialisation": "Plant & Microbial Biotechnology, Molecular Diagnostics",
    "bio": "Dr. Aruna Nair serves as Assistant Professor in the Postgraduate Department of M.Sc. Biotechnology at NMKRV College.",
    "highlights": "Doctorate Faculty in PG Biotechnology.",
    "committee": "PG Department of Biotechnology",
    "email": "nmkrv@rvei.edu.in",
    "phone": "080-69018900",
    "url": "https://nmkrv.edu.in/msc-biotechnology/"
  },
  {
    "id": "ms-tanaya-naik",
    "name": "Ms. Tanaya Naik",
    "designation": "Assistant Professor — M.Sc. Biotechnology",
    "department": "PG Biotechnology (M.Sc.)",
    "deptFlow": "faculty_life_sciences",
    "qualifications": "M.Sc. Biotechnology",
    "experience": "Postgraduate Teaching Experience in Biotechnology",
    "specialisation": "Immunology, Genetic Engineering & Biostatistical Analysis",
    "bio": "Ms. Tanaya Naik serves as Assistant Professor in the Postgraduate Department of M.Sc. Biotechnology at NMKRV College.",
    "highlights": "Faculty Member, PG Department of Biotechnology.",
    "committee": "PG Department of Biotechnology",
    "email": "nmkrv@rvei.edu.in",
    "phone": "080-69018900",
    "url": "https://nmkrv.edu.in/msc-biotechnology/"
  },
  {
    "id": "dr-srikala-s-reddy",
    "name": "Dr. Srikala S. Reddy",
    "designation": "Lecturer",
    "department": "Botany (B.Sc.)",
    "deptFlow": "faculty_life_sciences",
    "qualifications": "M.Sc., [Ph.D.]",
    "experience": "Teaching & Herbal Medicinal Garden Curation Experience",
    "specialisation": "Microbial Diversity, Phycology, Plant Taxonomy & Medicinal Botany",
    "bio": "Dr. Srikala S. Reddy serves in the DBT-STAR supported Department of Botany at NMKRV College, mentoring students in plant sciences, biodiversity conservation, and the campus Herbal Medicinal Garden.",
    "highlights": "Faculty Member, DBT-STAR Supported Department of Botany.",
    "committee": "Department of Botany",
    "email": "nmkrv@rvei.edu.in",
    "phone": "080-69018900",
    "url": "https://nmkrv.edu.in/science/botany/"
  },
  {
    "id": "dr-parinitha-mahishi",
    "name": "Dr. Parinitha Mahishi",
    "designation": "Research Faculty",
    "department": "Botany (B.Sc.)",
    "deptFlow": "faculty_life_sciences",
    "qualifications": "M.Sc., Ph.D.",
    "experience": "Research & Ethnobotanical Studies in Plant Sciences",
    "specialisation": "Ethnobotany, Medicinal Plants, Ecology & Biodiversity Conservation",
    "bio": "Dr. Parinitha Mahishi is a recognized Research Faculty member in the Department of Botany at NMKRV College.",
    "highlights": "Recognized Research Faculty in Botany.",
    "committee": "Research Faculty — Botany",
    "email": "nmkrv@rvei.edu.in",
    "phone": "080-69018900",
    "url": "https://nmkrv.edu.in/research-faculty/"
  },
  {
    "id": "prof-meenakumari-t",
    "name": "Prof. Meenakumari T.",
    "designation": "Associate Professor & Head (Zoology)",
    "department": "Zoology (B.Sc.)",
    "deptFlow": "faculty_life_sciences",
    "qualifications": "M.Sc. Zoology",
    "experience": "Associate Professor & Head of Department of Zoology",
    "specialisation": "Animal Physiology, Genetics, Developmental Biology & Health Outreach",
    "bio": "Prof. Meenakumari T. serves as Associate Professor and Head of the Department of Zoology and Coordinator of the Aarogya Kendra (Campus Health Centre) at NMKRV College.",
    "highlights": "Head of Department (Zoology) & Coordinator — Aarogya Kendra.",
    "committee": "HoD — Zoology | Coordinator — Aarogya Kendra",
    "email": "nmkrv@rvei.edu.in",
    "phone": "080-69018900",
    "url": "https://nmkrv.edu.in/aarogya-kendra/"
  },
  {
    "id": "mrs-manjula-j",
    "name": "Mrs. Manjula J.",
    "designation": "Assistant Professor",
    "department": "Zoology (B.Sc.)",
    "deptFlow": "faculty_life_sciences",
    "qualifications": "M.Sc., M.Phil., K-SET",
    "experience": "Senior Faculty in Zoology & NSS Programme Officer",
    "specialisation": "Non-Chordates, Chordates, Ecology, Cell Biology & Community Outreach",
    "bio": "Mrs. Manjula J. is an Assistant Professor in the Department of Zoology. She serves as a Member of the Academic Council, Coordinator of the National Service Scheme (NSS), and Chairperson/Member of the SC/ST Committee.",
    "highlights": "Member — Academic Council | Coordinator — NSS | Member — SC/ST Committee.",
    "committee": "Member — Academic Council & SC/ST Committee | Coordinator — NSS",
    "email": "manjulaj.nmkrv@rvei.edu.in",
    "phone": "080-69018900",
    "url": "https://nmkrv.edu.in/science/zoology/"
  },
  {
    "id": "dr-hemalatha-b-n",
    "name": "Dr. Hemalatha B. N.",
    "designation": "Assistant Professor",
    "department": "Zoology (B.Sc.)",
    "deptFlow": "faculty_life_sciences",
    "qualifications": "M.Sc., B.Ed., Ph.D.",
    "experience": "Teaching & Research Experience in Zoology",
    "specialisation": "Animal Diversity, Comparative Anatomy, Physiology & Environmental Biology",
    "bio": "Dr. Hemalatha B. N. is an Assistant Professor and recognized Research Faculty member in the DBT-STAR supported Department of Zoology at NMKRV College.",
    "highlights": "Recognized Research Faculty in Zoology.",
    "committee": "Research Faculty — Zoology",
    "email": "nmkrv@rvei.edu.in",
    "phone": "080-69018900",
    "url": "https://nmkrv.edu.in/science/zoology/"
  },
  {
    "id": "dr-shashikala-k-b",
    "name": "Dr. Shashikala K. B.",
    "designation": "Assistant Professor",
    "department": "Zoology (B.Sc.)",
    "deptFlow": "faculty_life_sciences",
    "qualifications": "M.Sc., Ph.D., KSET",
    "experience": "Teaching & Research Experience in Zoology",
    "specialisation": "Genetics, Evolutionary Biology, Entomology & Applied Zoology",
    "bio": "Dr. Shashikala K. B. is an Assistant Professor and recognized Research Faculty member in the Department of Zoology at NMKRV College.",
    "highlights": "Recognized Research Faculty in Zoology.",
    "committee": "Research Faculty — Zoology",
    "email": "nmkrv@rvei.edu.in",
    "phone": "080-69018900",
    "url": "https://nmkrv.edu.in/science/zoology/"
  },
  {
    "id": "dr-sharangouda-j-patil",
    "name": "Dr. Sharangouda J. Patil",
    "designation": "Research Faculty",
    "department": "Zoology (B.Sc.)",
    "deptFlow": "faculty_life_sciences",
    "qualifications": "M.Sc., Ph.D.",
    "experience": "Research & Publications in Life Sciences and Zoology",
    "specialisation": "Reproductive Physiology, Medicinal Pharmacology & Toxicology",
    "bio": "Dr. Sharangouda J. Patil is a recognized Research Faculty member in the Department of Zoology at NMKRV College.",
    "highlights": "Recognized Research Faculty in Zoology.",
    "committee": "Research Faculty — Zoology",
    "email": "nmkrv@rvei.edu.in",
    "phone": "080-69018900",
    "url": "https://nmkrv.edu.in/research-faculty/"
  },
  {
    "id": "ms-sandya-s-c",
    "name": "Ms. Sandya S. C.",
    "designation": "Assistant Professor",
    "department": "Journalism & Mass Communication (B.A. & M.A.)",
    "deptFlow": "faculty_humanities",
    "qualifications": "M.A. Journalism & Mass Communication",
    "experience": "Teaching Experience in Print, Broadcast & Digital Journalism",
    "specialisation": "Reporting & Editing, Broadcast Journalism, Media Laws & Corporate Communication",
    "bio": "Ms. Sandya S. C. serves as Assistant Professor in the Department of Journalism and Mass Communication at NMKRV College.",
    "highlights": "Faculty Member, Department of Journalism & Mass Communication.",
    "committee": "Department of Journalism & Mass Communication",
    "email": "nmkrv@rvei.edu.in",
    "phone": "080-69018900",
    "url": "https://nmkrv.edu.in/humanities/journalism/"
  },
  {
    "id": "ms-shwetha-p-b",
    "name": "Ms. Shwetha P. B.",
    "designation": "Assistant Professor",
    "department": "Journalism & Mass Communication (B.A. & M.A.)",
    "deptFlow": "faculty_humanities",
    "qualifications": "M.A. Journalism & Mass Communication",
    "experience": "Teaching Experience in Media & Communication Studies",
    "specialisation": "Digital Media, Development Communication, Public Relations & Advertising",
    "bio": "Ms. Shwetha P. B. serves as Assistant Professor in the Department of Journalism and Mass Communication at NMKRV College.",
    "highlights": "Faculty Member, Department of Journalism & Mass Communication.",
    "committee": "Department of Journalism & Mass Communication",
    "email": "nmkrv@rvei.edu.in",
    "phone": "080-69018900",
    "url": "https://nmkrv.edu.in/humanities/journalism/"
  },
  {
    "id": "ms-akshatha-a-g",
    "name": "Ms. Akshatha A. G.",
    "designation": "Assistant Professor & Cultural Coordinator",
    "department": "Journalism & Cultural Activities",
    "deptFlow": "faculty_humanities",
    "qualifications": "M.A. Journalism & Mass Communication",
    "experience": "Teaching, Media Production & Cultural Event Coordination",
    "specialisation": "Cultural Choreography (Nupur Dance Club), Media Production & Event Management",
    "bio": "Ms. Akshatha A. G. is an Assistant Professor in the Department of Journalism and serves as Coordinator of Cultural Activities, Nupur Dance Troupe, and Media Cell at NMKRV College.",
    "highlights": "Coordinator — Nupur Dance Troupe & Media Production Cell.",
    "committee": "Coordinator — Nupur Dance Club & Media Cell",
    "email": "akshathaag.nmkrv@rvei.edu.in",
    "phone": "080-69018900",
    "url": "https://nmkrv.edu.in/cultural-activities/"
  },
  {
    "id": "ms-megha-s",
    "name": "Ms. Megha S.",
    "designation": "Assistant Professor",
    "department": "Journalism & Cultural Activities",
    "deptFlow": "faculty_humanities",
    "qualifications": "M.A. Journalism & Mass Communication",
    "experience": "Media Production & Cultural Activities Coordination",
    "specialisation": "Audio-Visual Production, Theatre/Cultural Coordination & Content Writing",
    "bio": "Ms. Megha S. is an Assistant Professor in the Department of Journalism and serves as a Coordinator for Cultural Activities and Media Production at NMKRV College.",
    "highlights": "Coordinator — Cultural Activities & Media Production Cell.",
    "committee": "Coordinator — Cultural Activities & Media Cell",
    "email": "meghas.nmkrv@rvei.edu.in",
    "phone": "080-69018900",
    "url": "https://nmkrv.edu.in/cultural-activities/"
  },
  {
    "id": "mr-mohanmurthy-a",
    "name": "Mr. Mohanmurthy A.",
    "designation": "Coordinator — Media Cell",
    "department": "Media & Communication Cell",
    "deptFlow": "faculty_humanities",
    "qualifications": "Media & Visual Communication",
    "experience": "Media Production & E-Content Development Coordinator",
    "specialisation": "Photography, Video Editing, Audio Production & E-Content Development",
    "bio": "Mr. Mohanmurthy A. serves as Coordinator in the Media & E-Content Production Cell at NMKRV College.",
    "highlights": "Coordinator — Media & E-Content Production Cell.",
    "committee": "Coordinator — Media Cell",
    "email": "mohanmurthy.nmkrv@rvei.edu.in",
    "phone": "080-69018900",
    "url": "https://nmkrv.edu.in/faculty/"
  },
  {
    "id": "mr-revanth-d-v",
    "name": "Mr. Revanth D. V.",
    "designation": "Media & E-Content Specialist",
    "department": "Media & Communication Cell",
    "deptFlow": "faculty_humanities",
    "qualifications": "Media Production & Documentary Filmmaking",
    "experience": "Studio Production, Documentary Filmmaking & Event Management",
    "specialisation": "Video & Audio Production, Photography, Script Writing, Documentary Film Making & E-Content Development",
    "bio": "Mr. Revanth D. V. leads studio media production, documentary filmmaking, script writing, and e-content development at NMKRV College.",
    "highlights": "Expert in Video/Audio Production, Documentary Filmmaking & E-Content Development.",
    "committee": "Media & E-Content Production Cell",
    "email": "nmkrv@rvei.edu.in",
    "phone": "080-69018900",
    "url": "https://nmkrv.edu.in/faculty/"
  },
  {
    "id": "dr-mahanthesh-b-havani",
    "name": "Dr. Mahanthesh B. Havani",
    "designation": "Assistant Professor",
    "department": "Economics (B.A.)",
    "deptFlow": "faculty_humanities",
    "qualifications": "M.A., NET, KSET, Ph.D.",
    "experience": "Senior Faculty & Research Advisor in Economics",
    "specialisation": "Micro & Macro Economics, Development Economics, Indian Economy & Rural Development",
    "bio": "Dr. Mahanthesh B. Havani is an Assistant Professor in the Department of Economics, Member of the Research Advisory Committee, and Coordinator of the Unnat Bharat Abhiyan (UBA) Cell at NMKRV College.",
    "highlights": "Coordinator — Unnat Bharat Abhiyan (UBA) & Member of Research Advisory Committee.",
    "committee": "Coordinator — Unnat Bharat Abhiyan (UBA) | Member — Research Advisory Committee",
    "email": "mahantheshbh.nmkrv@rvei.edu.in",
    "phone": "080-69018900",
    "url": "https://nmkrv.edu.in/humanities/economics/"
  },
  {
    "id": "dr-shiva-kumar-s-m",
    "name": "Dr. Shiva Kumar S. M.",
    "designation": "Assistant Professor",
    "department": "Economics (B.A.)",
    "deptFlow": "faculty_humanities",
    "qualifications": "M.A., Ph.D., NET, KSET",
    "experience": "Teaching & Research Experience in Economics",
    "specialisation": "Monetary Economics, International Economics, Public Finance & Indian Financial System",
    "bio": "Dr. Shiva Kumar S. M. serves as Assistant Professor in the Department of Economics at NMKRV College.",
    "highlights": "Ph.D., NET & KSET Qualified Faculty in Economics.",
    "committee": "Department of Economics",
    "email": "nmkrv@rvei.edu.in",
    "phone": "080-69018900",
    "url": "https://nmkrv.edu.in/humanities/economics/"
  },
  {
    "id": "ms-shruthi-c",
    "name": "Ms. Shruthi C.",
    "designation": "Assistant Professor",
    "department": "Economics (B.A.)",
    "deptFlow": "faculty_humanities",
    "qualifications": "M.A. Economics",
    "experience": "Teaching Experience in Undergraduate Economics",
    "specialisation": "Economic Doctrines, Microeconomic Analysis & Indian Economy",
    "bio": "Ms. Shruthi C. serves as Assistant Professor in the Department of Economics at NMKRV College.",
    "highlights": "Faculty Member, Department of Economics.",
    "committee": "Department of Economics",
    "email": "nmkrv@rvei.edu.in",
    "phone": "080-69018900",
    "url": "https://nmkrv.edu.in/humanities/economics/"
  },
  {
    "id": "ms-ashwini-s-history",
    "name": "Ms. Ashwini S.",
    "designation": "Assistant Professor",
    "department": "History (B.A.)",
    "deptFlow": "faculty_humanities",
    "qualifications": "M.A. History",
    "experience": "Teaching, Examination & Student Welfare Leadership",
    "specialisation": "History of Ancient, Medieval & Modern India, Archaeology & Heritage Studies",
    "bio": "Ms. Ashwini S. is an Assistant Professor in the Department of History. She serves on the Examination Core Team (COE), as Co-Convenor of the Grievance Redressal Committee (GRC), and as a Member of the Anti-Ragging Cell, Internal Complaints Committee (ICC), and UBA Executive Committee.",
    "highlights": "Co-Convenor — Grievance Redressal Committee | Exam Core Team | Anti-Ragging & ICC Member.",
    "committee": "Co-Convenor — GRC | Member — Exam Core Team, Anti-Ragging Cell, ICC & UBA",
    "email": "ashwinis.nmkrv@rvei.edu.in",
    "phone": "080-69018900",
    "url": "https://nmkrv.edu.in/humanities/history/"
  },
  {
    "id": "mrs-sowmya-b",
    "name": "Mrs. Sowmya B.",
    "designation": "Assistant Professor",
    "department": "Sociology (B.A.)",
    "deptFlow": "faculty_humanities",
    "qualifications": "M.A., B.Ed.",
    "experience": "Teaching & Social Outreach Experience in Sociology",
    "specialisation": "Indian Society, Social Institutions, Rural Sociology & Gender Studies",
    "bio": "Mrs. Sowmya B. is an Assistant Professor in the Department of Sociology and serves as a Member of the Anti-Ragging Cell and the Unnat Bharat Abhiyan (UBA) Executive Committee.",
    "highlights": "Member — Anti-Ragging Cell & Unnat Bharat Abhiyan (UBA) Executive Committee.",
    "committee": "Member — Anti-Ragging Cell & UBA Executive Committee",
    "email": "sowmyab.nmkrv@rvei.edu.in",
    "phone": "080-69018900",
    "url": "https://nmkrv.edu.in/humanities/sociology/"
  },
  {
    "id": "mrs-gayathri-g",
    "name": "Mrs. Gayathri G.",
    "designation": "Assistant Professor",
    "department": "Sociology (B.A.)",
    "deptFlow": "faculty_humanities",
    "qualifications": "M.A., B.Ed.",
    "experience": "Teaching Experience in Sociology",
    "specialisation": "Sociological Theories, Social Research Methods & Cultural Studies",
    "bio": "Mrs. Gayathri G. serves as Assistant Professor in the Department of Sociology at NMKRV College.",
    "highlights": "Faculty Member, Department of Sociology.",
    "committee": "Department of Sociology",
    "email": "nmkrv@rvei.edu.in",
    "phone": "080-69018900",
    "url": "https://nmkrv.edu.in/humanities/sociology/"
  },
  {
    "id": "dr-megha-dhadoti",
    "name": "Dr. Megha Dhadoti",
    "designation": "Assistant Professor",
    "department": "Sociology (B.A.)",
    "deptFlow": "faculty_humanities",
    "qualifications": "M.A., Ph.D., KSET, NET",
    "experience": "Teaching, Research & Quality Assurance Experience in Sociology",
    "specialisation": "Sociology of Development, Gender Studies, Urban Sociology & Social Research",
    "bio": "Dr. Megha Dhadoti is an Assistant Professor and recognized Research Faculty member in the Department of Sociology. She serves as a Member of the Internal Quality Assurance Cell (IQAC), Innovation Cell, and Social Media Cell.",
    "highlights": "Member — IQAC, Innovation Cell & Social Media Cell | Recognized Research Faculty.",
    "committee": "Member — IQAC, Innovation Cell & Social Media Cell | Research Faculty",
    "email": "nmkrv@rvei.edu.in",
    "phone": "080-69018900",
    "url": "https://nmkrv.edu.in/humanities/sociology/"
  },
  {
    "id": "dr-suman-n",
    "name": "Dr. Suman N.",
    "designation": "Assistant Professor",
    "department": "Psychology (B.A. & B.Sc.)",
    "deptFlow": "faculty_humanities",
    "qualifications": "M.Sc., Ph.D.",
    "experience": "Senior Faculty & Research Supervisor in Psychology",
    "specialisation": "Basic Psychological Processes, Developmental, Abnormal & Clinical Psychology",
    "bio": "Dr. Suman N. is an Assistant Professor and recognized Research Faculty member in the Department of Psychology. She serves as Convenor of the Grievance Redressal Committee (GRC) and Member of the Internal Complaints Committee (ICC).",
    "highlights": "Convenor — Grievance Redressal Committee (GRC) | ICC Member | Research Faculty.",
    "committee": "Convenor — Grievance Redressal Committee (GRC) | Member — ICC",
    "email": "nmkrv@rvei.edu.in",
    "phone": "080-69018900",
    "url": "https://nmkrv.edu.in/humanities/physiology/"
  },
  {
    "id": "dr-asha-h",
    "name": "Dr. Asha H.",
    "designation": "Assistant Professor",
    "department": "Psychology (B.A. & B.Sc.)",
    "deptFlow": "faculty_humanities",
    "qualifications": "M.Sc., Ph.D., NET, SLET, PGDHRM",
    "experience": "Teaching & Research Experience in Psychology and HR",
    "specialisation": "Industrial and Organisational Psychology, Social Psychology & Counselling",
    "bio": "Dr. Asha H. is an Assistant Professor and recognized Research Faculty member in the Department of Psychology at NMKRV College.",
    "highlights": "Ph.D., NET, SLET & PGDHRM Qualified Research Faculty in Psychology.",
    "committee": "Research Faculty — Psychology",
    "email": "nmkrv@rvei.edu.in",
    "phone": "080-69018900",
    "url": "https://nmkrv.edu.in/humanities/physiology/"
  },
  {
    "id": "mrs-roopashree-b-r",
    "name": "Mrs. Roopashree B. R.",
    "designation": "Assistant Professor",
    "department": "Psychology (B.A. & B.Sc.)",
    "deptFlow": "faculty_humanities",
    "qualifications": "M.Sc. Psychology",
    "experience": "Teaching Experience in Psychology",
    "specialisation": "Developmental Psychology, Experimental Psychology & Behavioural Assessment",
    "bio": "Mrs. Roopashree B. R. serves as Assistant Professor in the Department of Psychology at NMKRV College.",
    "highlights": "Faculty Member, Department of Psychology.",
    "committee": "Department of Psychology",
    "email": "nmkrv@rvei.edu.in",
    "phone": "080-69018900",
    "url": "https://nmkrv.edu.in/humanities/physiology/"
  },
  {
    "id": "dr-mamatha-j",
    "name": "Dr. Mamatha J.",
    "designation": "Assistant Professor",
    "department": "Psychology (B.A. & B.Sc.)",
    "deptFlow": "faculty_humanities",
    "qualifications": "M.A., SLET, Ph.D.",
    "experience": "Teaching & Research Experience in Psychology",
    "specialisation": "Abnormal Psychology, Social Psychology & Mental Health",
    "bio": "Dr. Mamatha J. is an Assistant Professor in the Department of Psychology and serves as a Member of the Research Advisory Committee at NMKRV College.",
    "highlights": "Member — Research Advisory Committee & Recognized Research Faculty.",
    "committee": "Member — Research Advisory Committee | Department of Psychology",
    "email": "nmkrv@rvei.edu.in",
    "phone": "080-69018900",
    "url": "https://nmkrv.edu.in/humanities/physiology/"
  },
  {
    "id": "mrs-akhila-v-bhatta",
    "name": "Mrs. Akhila V. Bhatta",
    "designation": "Lecturer",
    "department": "Psychology (B.A. & B.Sc.)",
    "deptFlow": "faculty_humanities",
    "qualifications": "M.A. Psychology",
    "experience": "Teaching & Cultural Music Club Coordination",
    "specialisation": "General Psychology, Counselling & Classical/Contemporary Vocal Music",
    "bio": "Mrs. Akhila V. Bhatta serves in the Department of Psychology and is the Coordinator of Ninaada — The Official Music Club of NMKRV College.",
    "highlights": "Coordinator — Ninaada (The Music Club).",
    "committee": "Coordinator — Ninaada Music Club",
    "email": "akhilav.nmkrv@rvei.edu.in",
    "phone": "080-69018900",
    "url": "https://nmkrv.edu.in/humanities/physiology/"
  },
  {
    "id": "ms-veena-k",
    "name": "Ms. Veena K.",
    "designation": "Assistant Professor",
    "department": "Psychology (B.A. & B.Sc.)",
    "deptFlow": "faculty_humanities",
    "qualifications": "M.Sc. Psychology",
    "experience": "Teaching & Student Wellness Coordination",
    "specialisation": "Psychological Assessment, Emotional Well-being & Counselling",
    "bio": "Ms. Veena K. serves as Assistant Professor in the Department of Psychology and Coordinator of the Psychology Forum at NMKRV College.",
    "highlights": "Coordinator — Psychology Forum.",
    "committee": "Coordinator — Psychology Forum",
    "email": "veenak.nmkrv@rvei.edu.in",
    "phone": "080-69018900",
    "url": "https://nmkrv.edu.in/psychology-forum/"
  },
  {
    "id": "dr-veena-devi-r-s",
    "name": "Dr. Veena Devi R. S.",
    "designation": "Assistant Professor",
    "department": "English & Optional English",
    "deptFlow": "faculty_languages_admin",
    "qualifications": "M.A., Ph.D.",
    "experience": "Full-Time Faculty in English (Joined September 2022)",
    "specialisation": "British & Indian English Literature, Literary Criticism, Gender Studies & Communicative English",
    "bio": "Dr. Veena Devi R. S. is an Assistant Professor and recognized Research Faculty member in the Department of English and Optional English at NMKRV College.",
    "highlights": "Recognized Research Faculty in English Literature.",
    "committee": "Research Faculty — Department of English",
    "email": "nmkrv@rvei.edu.in",
    "phone": "080-69018900",
    "url": "https://nmkrv.edu.in/language/english/"
  },
  {
    "id": "ms-mareena-joseph",
    "name": "Ms. Mareena Joseph",
    "designation": "Assistant Professor",
    "department": "English",
    "deptFlow": "faculty_languages_admin",
    "qualifications": "M.A. English",
    "experience": "Teaching Experience in English Language & Literature",
    "specialisation": "English Literature, Communication Skills & Academic Writing",
    "bio": "Ms. Mareena Joseph serves as Assistant Professor in the Department of English at NMKRV College.",
    "highlights": "Faculty Member, Department of English.",
    "committee": "Department of English",
    "email": "nmkrv@rvei.edu.in",
    "phone": "080-69018900",
    "url": "https://nmkrv.edu.in/language-2/"
  },
  {
    "id": "ms-parvathy-menon",
    "name": "Ms. Parvathy Menon",
    "designation": "Assistant Professor",
    "department": "English",
    "deptFlow": "faculty_languages_admin",
    "qualifications": "M.A. English",
    "experience": "Teaching Experience in English Language & Literature",
    "specialisation": "Literary Studies, Postcolonial Literature & Language Proficiency",
    "bio": "Ms. Parvathy Menon serves as Assistant Professor in the Department of English at NMKRV College.",
    "highlights": "Faculty Member, Department of English.",
    "committee": "Department of English",
    "email": "nmkrv@rvei.edu.in",
    "phone": "080-69018900",
    "url": "https://nmkrv.edu.in/language-2/"
  },
  {
    "id": "dr-sandhya-l-hegde",
    "name": "Dr. Sandhya L. Hegde",
    "designation": "Assistant Professor",
    "department": "Kannada & Optional Kannada",
    "deptFlow": "faculty_languages_admin",
    "qualifications": "M.A., M.Phil., Ph.D., NET, SLET/KSET",
    "experience": "Full-Time Faculty at NMKRV College (Joined July 2019)",
    "specialisation": "Classical & Modern Kannada Literature, Cultural Studies, Folklore & Literary Research",
    "bio": "Dr. Sandhya L. Hegde is an Assistant Professor in the Department of Kannada and Optional Kannada and serves on the Research Advisory Committee at NMKRV College.",
    "highlights": "Member — Research Advisory Committee & Recognized Research Faculty in Kannada.",
    "committee": "Member — Research Advisory Committee | Department of Kannada",
    "email": "sandhyalhegde.nmkrv@rvei.edu.in",
    "phone": "080-69018900",
    "url": "https://nmkrv.edu.in/language/kannada/"
  },
  {
    "id": "prof-basavaraja-amarappa",
    "name": "Prof. Basavaraja Amarappa",
    "designation": "Assistant Professor",
    "department": "Kannada & Optional Kannada",
    "deptFlow": "faculty_languages_admin",
    "qualifications": "M.A., NET, KSET",
    "experience": "Senior Faculty in Kannada Language & Literature",
    "specialisation": "Kannada Literature, Poetics, Cultural History & Language Computing",
    "bio": "Prof. Basavaraja Amarappa is an Assistant Professor in the Department of Kannada and Optional Kannada and serves as a Member of the SC/ST Committee at NMKRV College.",
    "highlights": "Member — SC/ST Committee & Senior Faculty in Kannada.",
    "committee": "Member — SC/ST Committee | Department of Kannada",
    "email": "basavarajaa.nmkrv@rvei.edu.in",
    "phone": "080-69018900",
    "url": "https://nmkrv.edu.in/language/kannada/"
  },
  {
    "id": "mrs-leelavathi-p",
    "name": "Mrs. Leelavathi P.",
    "designation": "Assistant Professor",
    "department": "Kannada & Optional Kannada",
    "deptFlow": "faculty_languages_admin",
    "qualifications": "M.A., B.Ed., M.Phil., NET",
    "experience": "15+ Years at NMKRV College (Joined July 2010)",
    "specialisation": "Kannada Literature, Grammar, Classical Texts & Pedagogy",
    "bio": "Mrs. Leelavathi P. has served as Assistant Professor in the Department of Kannada and Optional Kannada at NMKRV College since July 2010.",
    "highlights": "15+ Years of Teaching Excellence in Kannada at NMKRV College.",
    "committee": "Department of Kannada",
    "email": "leelavathip.nmkrv@rvei.edu.in",
    "phone": "080-69018900",
    "url": "https://nmkrv.edu.in/language/kannada/"
  },
  {
    "id": "mrs-sumana-a-s",
    "name": "Mrs. Sumana A. S.",
    "designation": "Assistant Professor",
    "department": "Kannada & Optional Kannada",
    "deptFlow": "faculty_languages_admin",
    "qualifications": "M.A. Kannada",
    "experience": "Teaching & Student Governance Committee Experience",
    "specialisation": "Kannada Literature & Cultural Studies",
    "bio": "Mrs. Sumana A. S. is an Assistant Professor in the Department of Kannada and serves as a Member of the IQAC, Grievance Redressal Committee (GRC), and Internal Complaints Committee (ICC).",
    "highlights": "Member — IQAC, Grievance Redressal Committee (GRC) & Internal Complaints Committee (ICC).",
    "committee": "Member — IQAC, GRC & ICC",
    "email": "nmkrv@rvei.edu.in",
    "phone": "080-69018900",
    "url": "https://nmkrv.edu.in/language/kannada/"
  },
  {
    "id": "dr-seema-sharma",
    "name": "Dr. Seema Sharma",
    "designation": "Head of the Department (HOD) — Hindi",
    "department": "Hindi",
    "deptFlow": "faculty_languages_admin",
    "qualifications": "M.A., M.Phil., Ph.D., M.Ed.",
    "experience": "Head of the Department of Hindi & Research Faculty",
    "specialisation": "Classical & Modern Hindi Literature, Translation Studies & Poetry",
    "bio": "Dr. Seema Sharma is the Head of the Department (HOD) of Hindi and a recognized Research Faculty member at NMKRV College.",
    "highlights": "Head of the Department (Hindi) & Recognized Research Faculty.",
    "committee": "HoD — Department of Hindi | Research Faculty",
    "email": "seemasharma.nmkrv@rvei.edu.in",
    "phone": "080-69018900",
    "url": "https://nmkrv.edu.in/language/hindi/"
  },
  {
    "id": "dr-urmi-dutta",
    "name": "Dr. Urmi Dutta",
    "designation": "Assistant Professor",
    "department": "Hindi",
    "deptFlow": "faculty_languages_admin",
    "qualifications": "M.A., B.Ed., Ph.D.",
    "experience": "Full-Time Faculty in Hindi (Joined March 2021)",
    "specialisation": "Hindi Literature, Functional Hindi, Drama & Literary Criticism",
    "bio": "Dr. Urmi Dutta serves as Assistant Professor in the Department of Hindi at NMKRV College.",
    "highlights": "Doctorate Faculty in the Department of Hindi.",
    "committee": "Department of Hindi",
    "email": "urmidutta.nmkrv@rvei.edu.in",
    "phone": "080-69018900",
    "url": "https://nmkrv.edu.in/language/hindi/"
  },
  {
    "id": "dr-pankaja-nayana",
    "name": "Dr. Pankaja Nayana",
    "designation": "Assistant Professor & Research Faculty",
    "department": "Sanskrit",
    "deptFlow": "faculty_languages_admin",
    "qualifications": "M.A., Ph.D. in Sanskrit",
    "experience": "Teaching & Research Experience in Classical Sanskrit",
    "specialisation": "Sanskrit Literature, Vedic Studies, Indian Knowledge Systems (IKS) & Classical Drama",
    "bio": "Dr. Pankaja Nayana serves as Assistant Professor and recognized Research Faculty member in the Department of Sanskrit at NMKRV College.",
    "highlights": "Recognized Research Faculty in Sanskrit & Indian Knowledge Systems.",
    "committee": "Research Faculty — Department of Sanskrit",
    "email": "nmkrv@rvei.edu.in",
    "phone": "080-69018900",
    "url": "https://nmkrv.edu.in/language/sanskrit/"
  },
  {
    "id": "ms-chaitra-v-c",
    "name": "Ms. Chaitra V. C.",
    "designation": "Manager — Training & Placements (DISHA)",
    "department": "DISHA Training & Placement Centre",
    "deptFlow": "faculty_languages_admin",
    "qualifications": "Corporate Relations, HR & Career Development",
    "experience": "Manager – Training & Placements, DISHA Cell, NMKRV College",
    "specialisation": "Campus Recruitment, Pre-Placement Training (CAKES), Industry Relations & Career Guidance",
    "bio": "Ms. Chaitra V. C. leads DISHA — The Training and Placement Centre at NMKRV College, coordinating pre-placement skill enhancement training and campus recruitment drives with top corporate recruiters including Deloitte, Wipro, Accenture, TCS, Infosys, Citi Bank, JP Morgan, and Codeyoung.",
    "highlights": "Leads DISHA Placement Cell ('College to Career') with 350+ placements across premier MNCs.",
    "committee": "Manager & Coordinator — DISHA Training & Placement Centre",
    "email": "chaitravc.nmkrv@rvei.edu.in",
    "phone": "+91 83100 63697",
    "url": "https://nmkrv.edu.in/training-and-placement-centre/"
  },
  {
    "id": "mrs-radhika-d",
    "name": "Mrs. Radhika D.",
    "designation": "Librarian",
    "department": "Library & Information Centre",
    "deptFlow": "faculty_languages_admin",
    "qualifications": "M.L.I.Sc.",
    "experience": "Head Librarian & Member of Academic Council",
    "specialisation": "Library & Information Science, Digital Repositories (INFLIBNET, DELNET, OPAC) & Braille Accessibility",
    "bio": "Mrs. Radhika D. serves as the Librarian of NMKRV College and is a Member of the Academic Council, managing over 60,097 books, 7,530 reference volumes, DELNET/INFLIBNET e-resources, and assistive Braille/JAWS/NVDA facilities.",
    "highlights": "Member — Academic Council | Manages 60,097+ Books & Digital E-Library.",
    "committee": "Librarian | Member — Academic Council",
    "email": "nmkrv@rvei.edu.in",
    "phone": "080-69018900",
    "url": "https://nmkrv.edu.in/library/"
  },
  {
    "id": "ms-ashwini-s-ped",
    "name": "Ms. Ashwini S. (Physical Education)",
    "designation": "Assistant Physical Education Director",
    "department": "Physical Education & Sports",
    "deptFlow": "faculty_languages_admin",
    "qualifications": "M.P.Ed.",
    "experience": "Sports Coaching, Athletics & Quiz Club Coordination",
    "specialisation": "Outdoor & Indoor Sports Training, Inter-Collegiate Athletics & Utkarsh Quiz Club",
    "bio": "Ms. Ashwini S. serves as the Assistant Physical Education Director in the Department of Physical Education & Sports and is the Coordinator of the Utkarsh Quiz Club at NMKRV College.",
    "highlights": "Assistant Physical Education Director & Coordinator — Utkarsh Quiz Club.",
    "committee": "Coordinator — Utkarsh Quiz Club | Department of Physical Education",
    "email": "nmkrv@rvei.edu.in",
    "phone": "080-69018900",
    "url": "https://nmkrv.edu.in/utkarsh-quiz-club/"
  },
  {
    "id": "capt-chaithanya-ramesh",
    "name": "Capt. Chaithanya Ramesh",
    "designation": "Associate NCC Officer (ANO)",
    "department": "National Cadet Corps (NCC)",
    "deptFlow": "faculty_languages_admin",
    "qualifications": "Commissioned Associate NCC Officer (Captain)",
    "experience": "1 Karnataka Girls Battalion, Bangalore 'A' Group",
    "specialisation": "Military Training, Leadership, Republic Day Camp (RDC), Adventure & Social Service",
    "bio": "Capt. Chaithanya Ramesh is the Associate NCC Officer (ANO) leading the NMKRV College NCC Wing under 1 Karnataka Girls Battalion (Bangalore 'A' Group) and serves on the Unnat Bharat Abhiyan (UBA) Executive Committee.",
    "highlights": "Associate NCC Officer (1 Karnataka Girls Battalion) & UBA Executive Committee Member.",
    "committee": "Associate NCC Officer (ANO) — NCC | Member — UBA Executive Committee",
    "email": "nmkrv@rvei.edu.in",
    "phone": "080-69018900",
    "url": "https://nmkrv.edu.in/ncc/"
  },
  {
    "id": "dr-g-n-sangeetha",
    "name": "Dr. G. N. Sangeetha",
    "designation": "Head — Documentation Wing & Governing Body Member",
    "department": "Administration & Documentation Wing",
    "deptFlow": "faculty_languages_admin",
    "qualifications": "Ph.D.",
    "experience": "Institutional Documentation, Administration & Research",
    "specialisation": "Institutional Documentation, Quality Records & Academic Governance",
    "bio": "Dr. G. N. Sangeetha heads the Documentation Wing at NMKRV College, is listed among the Research Faculty (Administration), and serves as a Member of the Governing Body.",
    "highlights": "Member — Governing Body & Head of Documentation Wing.",
    "committee": "Member — Governing Body | Documentation Wing",
    "email": "nmkrv@rvei.edu.in",
    "phone": "080-69018900",
    "url": "https://nmkrv.edu.in/board-of-management/"
  }
];

const SSMRV_ALL_PAGES = [
  {
    "url": "https://nmkrv.edu.in/",
    "title": "NMKRV College Bangalore | UG, PG & Research Programs",
    "snippet": "Enquire Now! We are now embarking on the journey of co-education, building upon a five-decade legacy of shaping the future. IKS-SDG - 2026 READ MORE Transformative Science for Sustainability and Global Resilience READ MORE ICIQSI 2027 READ MORE WELCOME TO NMKRV COLLEGE"
  },
  {
    "url": "https://nmkrv.edu.in/ICIQSI%202027.html",
    "title": "ICIQSI 2027 — International Conference on Intelligent Computing, Quantum Technologies & Sustainable Innovations",
    "snippet": "ICIQSI 2027 IEEE Conference Home About Tracks Dates Registration Submission Committee Contact Submit Paper"
  },
  {
    "url": "https://nmkrv.edu.in/TSGR.html",
    "title": "International Conference on Transformative Science for Sustainability and Global Resilience | NMKRV College, Bengaluru",
    "snippet": "Conference Date 4 December 2026 Submit Abstract ↗ Register Now Home About Important Dates Call for Papers Tracks Speakers Registration"
  },
  {
    "url": "https://nmkrv.edu.in/aarogya-kendra/",
    "title": "Aarogya Kendra",
    "snippet": "Home » Aarogya Kendra AArogya Kendra The College houses a dedicated healthcare unit called Arogya Kendra, which aims to provide comprehensive first aid and healthcare services to students. The facility focuses on addressing various aspects of women’s health, ranging from common a"
  },
  {
    "url": "https://nmkrv.edu.in/about",
    "title": "About NMKRV College | Excellence in Co‑Ed Education, Bangalore",
    "snippet": "Home » About College ABOUT NMKRV COLLEGE About College Principal's Message Founder's Journey Vision & Mission NMKRV College was established in 1973 in the fond memory of Sri. Meda Kasturiranga Setty and Smt. Nagarathnamma Meda Kasturiranga Setty, guided by the noble vision that “"
  },
  {
    "url": "https://nmkrv.edu.in/about-college/",
    "title": "About NMKRV College | Excellence in Co‑Ed Education, Bangalore",
    "snippet": "Home » About College ABOUT NMKRV COLLEGE About College Principal's Message Founder's Journey Vision & Mission NMKRV College was established in 1973 in the fond memory of Sri. Meda Kasturiranga Setty and Smt. Nagarathnamma Meda Kasturiranga Setty, guided by the noble vision that “"
  },
  {
    "url": "https://nmkrv.edu.in/about-founder-message/",
    "title": "About-Founder-Message",
    "snippet": "Home » About-Founder-Message FOUNDER'S JOURNEY About College Principal's Message Founder's Journey Vision & Mission late Sri M.C. Sivananda Sarma Founder The story of one man’s dream and unwavering focus in the face of all odds continues to inspire us into the future. Sri. Sivana"
  },
  {
    "url": "https://nmkrv.edu.in/about-principal-message/",
    "title": "About-Principal-Message",
    "snippet": "Home » About-Principal-Message PRINCIPAL'S MESSAGE About College Principal's Message Founder's Journey Vision & Mission Dr. R. Suchithra PRINCIPAL Greetings from NMKRV College, a college which has nearly five decades of excellence in education. Our founder Shri. Meda Kasturiranga"
  },
  {
    "url": "https://nmkrv.edu.in/about-us-2/",
    "title": "About Us",
    "snippet": ""
  },
  {
    "url": "https://nmkrv.edu.in/about-us/",
    "title": "About NMKRV",
    "snippet": "Home » About NMKRV About College Principal's Message Founder's Message Vision & Mission About NMKRV COLLEGE FOR WOMEN NMKRV College for Women was founded by Sri. Meda Kasturiranga Setty and Smt. Nagarathnamma Meda Kasturiranga Setty in the year 1973 The founder’s believed in the "
  },
  {
    "url": "https://nmkrv.edu.in/about-vision-mission/",
    "title": "About-Vision-Mission",
    "snippet": "Home » About-Vision-Mission VISION & MISSION About College Principal's Message Founder's Journey Vision & Mission Vision By imparting quality education in this fast-changing technological world. Working towards gender equality by addressing gender issues. Moulding and conscientis"
  },
  {
    "url": "https://nmkrv.edu.in/achievements/",
    "title": "Achievement",
    "snippet": "Home » Achievement ACHIEVEMENTS OF OUR COLLEGE Students, faculty and alumni of NMKRV College have achieved remarkable success by winning accolades across national and international platforms. Our renowned faculty members have pushed the boundaries of knowledge through influential"
  },
  {
    "url": "https://nmkrv.edu.in/alisu-palisu/",
    "title": "ALISU PALISU",
    "snippet": "Home » ALISU PALISU ALISU PALISU Campus Counselling is a total Mental Health Program offered to all; both students and faculty to reach a state of Well- being. OBJECTIVES Unlike academic exercises and related intervention programmes, predictability of Mental- health issues is low"
  },
  {
    "url": "https://nmkrv.edu.in/alumni/",
    "title": "Alumni",
    "snippet": "Home » Alumni ALUMNI ONCE AN RV’IAN, ALWAYS AN RV’IAN NMKRV College, established in 1973, has emerged as one of Bengaluru’s premier institutions, with over 20,000 students having graduated since its inception. In 2015, the NMKRV College Alumni Association was officially establish"
  },
  {
    "url": "https://nmkrv.edu.in/ananya/",
    "title": "Ananya",
    "snippet": "Home » Ananya ANANYA ‘ANANYA’ is an umbrella of all EC/CC activities of NMKRV College for Women OBJECTIVES In alignment with the vision statement of NMKRV College ‘EDUCATE ENRICH EMPOWER, the college pledges for all round personality development of today’s young women. ANANYA aim"
  },
  {
    "url": "https://nmkrv.edu.in/aqar-2020-21/",
    "title": "AQAR 2020 21",
    "snippet": "Home » AQAR 2020 – 21 AQAR 2020 - 21 University Data S.No Content 1 Affiliation Letter : Bangalore university 2 Annual Report - Bangalore University 3 Calendar of Events 2020-21"
  },
  {
    "url": "https://nmkrv.edu.in/aqar-2021-22/",
    "title": "AQAR 2021 22",
    "snippet": "Home » AQAR 2021 – 22 AQAR 2021 - 22 University Data S.No Content 1 Affiliation Letter : Bangalore university 2 AQAR - 2.1.2 : State Government Circular indicating the Reserved Categories 3 AQAR - 3.1.2 : Institution Seed Money"
  },
  {
    "url": "https://nmkrv.edu.in/aqar-2023-24/",
    "title": "AQAR 2023-24",
    "snippet": "Home » AQAR 2023-24 AQAR 2023 - 24 University Data S.No Content 1 1.4.2 Feedback : Student Feedback on Curriculum 2 1.4.1 Student Feedback on Curriculum Design and Development - Google Forms 3 2.7.1 Student Satisfaction Survey"
  },
  {
    "url": "https://nmkrv.edu.in/aqar/",
    "title": "AQAR",
    "snippet": "Home » AQAR AQAR - Files AQAR 2023 - 24 AQAR 2022 - 23 AQAR 2021 - 22 AQAR 2020 - 21 AQAR - REports AQAR 2022 - 23 AQAR 2021 - 22 AQAR 2020 - 21 Archive"
  },
  {
    "url": "https://nmkrv.edu.in/aqar/aqar-2022-23/",
    "title": "AQAR 2022-23",
    "snippet": "Home » AQAR » AQAR 2022-23 AQAR 2022 - 23 University Data S.No Content Affiliation Letter : Bangalore university AQAR- 1.1.1 BOARD OF STUDIES - MINUTES OF MEETING AQAR-1.1.3 SYLLABUS AQAR- 1.3.2 VALUE ADDED COURSES AQAR -1.3.4 PROJECTS/ INTERNSHIP 1"
  },
  {
    "url": "https://nmkrv.edu.in/b-ed-notifications/",
    "title": "B.Ed Notifications",
    "snippet": "Home » B.Ed Notifications IMPORTANT NOTIFICATIONS Integrated B.Ed Calendar of Events 2023-24 Integrated B.Ed Calendar of Events 2022-23 Integrated B.Ed Calendar of Events 2021-22 Integrated B.Ed Calendar of Events 2020-21 Integrated B.Ed Calendar of Events 2019-20 Integrated B.Ed"
  },
  {
    "url": "https://nmkrv.edu.in/bba-alumni-feedback-on-curriculum/",
    "title": "BBA ALUMNI FEEDBACK ON CURRICULUM",
    "snippet": "Home » BBA ALUMNI FEEDBACK ON CURRICULUM BBA – ALUMNI FEEDBACK ON CURRICULUMBS 2015 2016 2017"
  },
  {
    "url": "https://nmkrv.edu.in/bba-student-feedback-on-curriculum/",
    "title": "BBA STUDENT FEEDBACK ON CURRICULUM",
    "snippet": "Home » BBA STUDENT FEEDBACK ON CURRICULUM BBA – STUDENT FEEDBACK ON CURRICULUMBS 2015 2016 2017"
  },
  {
    "url": "https://nmkrv.edu.in/bca/",
    "title": "Under graduation in BCA | Degree in Computer Application",
    "snippet": "Home » BCA Department of Computer Applications The Department of Computer Applications was established in the year 2022-23, following its bifurcation from the Department of Computer Science in 2023. The department is equipped with state-of-the-art infrastructure, including a mode"
  },
  {
    "url": "https://nmkrv.edu.in/bcom-alumni-feedback-on-curriculum/",
    "title": "BCOM ALUMNI FEEDBACK ON CURRICULUM",
    "snippet": "Home » BCOM ALUMNI FEEDBACK ON CURRICULUM BCOM – ALUMNI FEEDBACK ON CURRICULUMBS B.Com - Gen 2015 - 16 B.Com - TPP 2015 - 16 B.Com - TTM 2015 - 16 B.Com - Gen 2016 - 17 B.Com - TPP 2016 - 17 B.Com - TTM 2016 - 17 B.Com - Gen 2017 - 18 B.Com - Tax 2017 - 18 B.Com - Gen 2018 - 19"
  },
  {
    "url": "https://nmkrv.edu.in/bcom-student-feedback-on-curriculum/",
    "title": "BCOM STUDENT FEEDBACK ON CURRICULUM",
    "snippet": "Home » BCOM STUDENT FEEDBACK ON CURRICULUM Bcom – STUDENT FEEDBACK ON CURRICULUM B.Com Gen 2015 - 16 B.Com Voc 2015 - 16 B.Com Voc(TPP) 2015 - 16 B.Com Gen 2016 - 17 B.Com Voc 2016 - 17 B.Com Voc (TTM) 2016 - 17 B.Com Gen 2017 - 18 B.Com TAX 2017 - 18 B.Com Gen 2018 - 19"
  },
  {
    "url": "https://nmkrv.edu.in/biotechnology/",
    "title": "BIOTECHNOLOGY",
    "snippet": "Home » Science » BIOTECHNOLOGY BIOTECHNOLOGY Vision and Mission Course Outcome Laboratory Syllabus PROFILE Vision Quality education to develop competent Biotechnologists for the welfare of society. mission To regularly update the course curriculum, catering to the needs of academ"
  },
  {
    "url": "https://nmkrv.edu.in/board-of-management/",
    "title": "Board Of Management",
    "snippet": "Home » Board Of Management Governing Body Academic Council Members Trustees BOARD OF MANAGEMENT Dr. M.P. Shyam President, RVEI Dr. A.C. Chandrashekar Raju Vice President, RVEI"
  },
  {
    "url": "https://nmkrv.edu.in/botany/",
    "title": "Botany",
    "snippet": "Home » Science » Botany BOTANY Vision and Mission Course Outcome Laboratory PROFILE Vision Acquire, benefit and contribute to the knowledge of Plant Sciences. mission To provide and update knowledge in various fields of plant sciences. To create awareness of industrial, health, a"
  },
  {
    "url": "https://nmkrv.edu.in/bsc-alumni-feedback-on-curriculum/",
    "title": "BSc ALUMNI FEEDBACK ON CURRICULUM",
    "snippet": "Home » BSc ALUMNI FEEDBACK ON CURRICULUM BSc – ALUMNI FEEDBACK ON CURRICULUMBS PMCs 2014 - 15 PMCs 2017 - 18 PCM 2014 - 15 PCM 2017 - 18 CZBT 2014 - 15 CZBT 2017 - 18 CBZ 2014 - 15 CBZ 2017 - 18"
  },
  {
    "url": "https://nmkrv.edu.in/bsc-student-feedback-on-curriculum/",
    "title": "BSc STUDENT FEEDBACK ON CURRICULUM",
    "snippet": "Home » BSc STUDENT FEEDBACK ON CURRICULUM BSC – STUDENT FEEDBACK ON CURRICULUM CBZ 2014 - 15 CBZ 2018 - 19 CBZ 2019 - 20 CZBT 2014 - 15 CZBT 2018 - 19 CZBT 2019 - 20 PCM 2014 - 15 PCM 2017 - 18 PCM 2019 - 20"
  },
  {
    "url": "https://nmkrv.edu.in/category/uncategorized/",
    "title": "Uncategorized Archives",
    "snippet": "Dummy 4 Post author: nmkrvcw Post published: April 12, 2023 Post category: Uncategorized Continue Reading Dummy 4 Dummy 5 Post author: nmkrvcw Post published: April 12, 2023 Post category: Uncategorized"
  },
  {
    "url": "https://nmkrv.edu.in/chemistry/",
    "title": "Chemistry",
    "snippet": "Home » Science » Chemistry CHEMISTRY Vision and Mission Course Outcome Laboratory Syllabus PROFILE Vision The vision of the department is to make the students research-oriented and employable and enable them to become confident and competent with better comprehension and applicat"
  },
  {
    "url": "https://nmkrv.edu.in/clubs/",
    "title": "Clubs",
    "snippet": "Home » Clubs OUR CLUBS UNNAT BHARAT ABHIYAN(UBA) SPORTS CULTURAL ACTIVITIES National Service Scheme (NSS) YOUTH RED CROSS ECO CLUB FINE ARTS CLUB FORUM FOR STRENGTH AND INTELLECT(FSI) LITERARY ACTIVITIES"
  },
  {
    "url": "https://nmkrv.edu.in/comments/feed/",
    "title": "Comments for",
    "snippet": "https://nmkrv.edu.in/ Wed, 28 Oct 2026 05:03:14 +0000 hourly 1 https://wordpress.org/?v=7.0.2"
  },
  {
    "url": "https://nmkrv.edu.in/commerce/",
    "title": "Under graduation in Commerce | Degree in Commerce Bangalore",
    "snippet": "Home » Commerce COMMERCE Vision and Mission Course Outcome Syllabus PROFILE Vision • To foster commitment, competence and cohesiveness. mission • Sustained pursuit of goals. • A blend of comprehensive curriculum and vocational skills."
  },
  {
    "url": "https://nmkrv.edu.in/conference/",
    "title": "Conference",
    "snippet": "ONE DAY INTERNATIONAL CONFERENCE ON INDIAN KNOWLEDGE SYSTEM & SUSTAINABLE DEVELOPMENT GOALS DATE: 27th March 2026 Organised by: Department of Social Sciences and Languages, NMKRV COLLEGE, Bengaluru THEME: Rethinking Sustainability through the Lens of Indian Knowledge Systems. Ven"
  },
  {
    "url": "https://nmkrv.edu.in/conference_nmkrv_final.html",
    "title": "IKS & SDG International Conference 2026 – NMKRV College",
    "snippet": "Abstract 30th Sept, 2026 Acceptance 5th Oct, 2026 Full Paper 2nd Nov, 2026 Submit Abstract Register Now Home Conference Objectives"
  },
  {
    "url": "https://nmkrv.edu.in/contact",
    "title": "Contact Us",
    "snippet": "Home » Contact Us Contact US Address 45/1,22nd Cross,Jayanagar,III Block Karnataka,India Phone number +91-80-69018900 / 901 Email Business Hours Monday to Friday: 9.30am to 4.30pm Saturday:9.30am to 2.00pm"
  },
  {
    "url": "https://nmkrv.edu.in/contact-us/",
    "title": "Contact Us",
    "snippet": "Home » Contact Us Contact US Address 45/1,22nd Cross,Jayanagar,III Block Karnataka,India Phone number +91-80-69018900 / 901 Email Business Hours Monday to Friday: 9.30am to 4.30pm Saturday:9.30am to 2.00pm"
  },
  {
    "url": "https://nmkrv.edu.in/criteria-1/",
    "title": "Criteria1",
    "snippet": "Home » Criteria -1 Curriculum Design and Development 1.1 - POs, PSOs, COs Programme Outcome Programme Specific Outcome Course Outcome 1.1.2 - Percentage of Syllabus Revised Academic Council Minutes"
  },
  {
    "url": "https://nmkrv.edu.in/cs/",
    "title": "CS",
    "snippet": "Home » Science » CS COMPUTER SCIENCE Vision and Mission Course Outcome Laboratory PROFILE Vision • “To provide a qualitative environment – a platform for the students to equip themselves and enter into the technological and scientific arena, with human values” mission • To provid"
  },
  {
    "url": "https://nmkrv.edu.in/cultural-activities/",
    "title": "CULTURAL ACTIVITIES",
    "snippet": "Home » CULTURAL ACTIVITIES CULTURAL ACTIVITIES ABOUT CULTURAL ACTIVITIES: Life at NMKRV provides an encouraging, invigorating environment. Three years of campus life offers abundant opportunities to experience, explore, and choose alternative areas of interest that could bring ab"
  },
  {
    "url": "https://nmkrv.edu.in/e-cell/",
    "title": "E-CELL",
    "snippet": "Home » E-CELL E - cell The Entrepreneurship Development Cell is a platform for students to develop their skills and frame their careers in Entrepreneurship. Formation of the E-cell is in association with the Pradhan Mantri Yuva Udyamita Abhiyan program conducted by the Ministry o"
  },
  {
    "url": "https://nmkrv.edu.in/e-content/",
    "title": "E Content",
    "snippet": "Home » E – Content E-CONTENT DEPARTMENT OF CHEMISTRY Bioenergetics and Glycolysis Glass DEPARTMENT OF BIOTECHNOLOGY Electrophoresis PCR DEPARTMENT OF MATHEMATICS Differential equations"
  },
  {
    "url": "https://nmkrv.edu.in/eco-club/",
    "title": "ECO CLUB",
    "snippet": "Home » ECO CLUB ECO CLUB NELADAVVA, THE ECO – CLUB Consistent efforts are being made across the globe by various local and global organisations to sensitise the student community about the exhaustive nature of our valuable resources and the need to preserve them. With similar obj"
  },
  {
    "url": "https://nmkrv.edu.in/economics/",
    "title": "Economics",
    "snippet": "Home » Humanities » Economics ECONOMICS Vision and Mission Course Outcome Syllabus PROFILE Vision By 2035, the Department of Economics aims to develop future educators, policymakers, planners, and administrators with critical thinking skills and ethical values, enabling them to m"
  },
  {
    "url": "https://nmkrv.edu.in/english/",
    "title": "English",
    "snippet": "Home » Language » English ENGLISH Vision and Mission Syllabus PROFILE Vision Imparting quality education in this fast-changing technological and knowledge driven world. Working towards gender equality by addressing gender issues and promoting inclusiveness. Moulding and conscient"
  },
  {
    "url": "https://nmkrv.edu.in/equipments/",
    "title": "Equipments",
    "snippet": "Home » Equipments Application for characterization Consultancy charges for characterization Sample for characterization"
  },
  {
    "url": "https://nmkrv.edu.in/ethics/",
    "title": "Ethics",
    "snippet": "Home » Ethics RESEARCH & ETHICS ADVISORY COMMITTEE To provide guidance for future growth on research-related issues, the Research Advisory Committee under CCR is formulated under the patronage of the principal. The committee provides policy guidelines and direction for the growth"
  },
  {
    "url": "https://nmkrv.edu.in/events/",
    "title": "EVENTS",
    "snippet": "Home » EVENTS Events Event 1 EVENTS HELD READ MORE READ MORE READ MORE"
  },
  {
    "url": "https://nmkrv.edu.in/examinations/",
    "title": "Examinations",
    "snippet": "Home » Examinations Profile Exam Core Team Rules & Regulations Evaluation Criteria Notifications Promotion Criteria Application Forms/Links Examination Reforms Grievances Staff"
  },
  {
    "url": "https://nmkrv.edu.in/faculty/",
    "title": "Faculty",
    "snippet": "Home » Faculty Dr. Y. Venkataramanappa CURRICULUM VITAE EXPERTISE Dr Vidyagayatri M CURRICULUM VITAE EXPERTISE Dr. D L Roopa CURRICULUM VITAE EXPERTISE Dr. James Bound"
  },
  {
    "url": "https://nmkrv.edu.in/feed/",
    "title": "https://nmkrv.edu.in/feed/",
    "snippet": "Wed, 12 Apr 2023 06:40:53 +0000 en-US hourly 1 https://wordpress.org/?v=7.0.2 https://nmkrv.edu.in/wp-content/uploads/2024/02/cropped-android-chrome-512x512-1-32x32.png https://nmkrv.edu.in/ 32 32 Dummy 4 https://nmkrv.edu.in/dummy-4/"
  },
  {
    "url": "https://nmkrv.edu.in/feedback-policy/",
    "title": "Feedback Policy",
    "snippet": "Home » Feedback Policy FEED BACK POLICY The institution aims to empower the students for succeeding in the changing world to become a responsible citizen. The institution through a structured feedback mechanism from various stakeholders ensures quality teaching, learning process,"
  },
  {
    "url": "https://nmkrv.edu.in/fine-arts-club/",
    "title": "FINE ARTS CLUB",
    "snippet": "Home » FINE ARTS CLUB FINE ARTS CLUB FINE ART is “a visual art considered to have been created primarily for artistic and intellectual purposes and judged for its beauty and meaningfulness, specifically, painting, sculpture, drawing, water colour, graphics, and architecture”. Our"
  },
  {
    "url": "https://nmkrv.edu.in/forum-for-strength-and-intellect/",
    "title": "FORUM FOR STRENGTH AND INTELLECT",
    "snippet": "Home » FORUM FOR STRENGTH AND INTELLECT FORUM FOR STRENGTH AND INTELLECT ‘Forum for Strength and Intellect’, inaugurated in June 2017, aims at imparting training techniques that will assist a student in developing Confidence and Assertiveness, factors needed to deal with troublin"
  },
  {
    "url": "https://nmkrv.edu.in/gender-internship-programme/",
    "title": "Gender Internship Programme",
    "snippet": "Home » Gender Internship Programme Gender Internship Programme Gender equality has been a greater voice for the discrimination and inequality which many women are facing in today’s society. The higher educational institutions play a pivotal role in bridging the gaps in gender ine"
  },
  {
    "url": "https://nmkrv.edu.in/green-initiatives/",
    "title": "Green Initiatives",
    "snippet": "Home » Green Initiatives GREEN INITIATIVES The Green Initiative’s objective is to offset Greenhouse gases emitted by human activities. While there are innumerable sustainable practices, we at NMKRV endeavored to create an “Environmentally Conscious Workplace” through the followin"
  },
  {
    "url": "https://nmkrv.edu.in/grievences/",
    "title": "Grievences",
    "snippet": "Home » Grievences Anti Sexual Harassement Anti Ragging Anti Sexual Harrasement (KNOW MORE) Name of the student Email Course Register Number Grievance SUBMIT"
  },
  {
    "url": "https://nmkrv.edu.in/hindi/",
    "title": "Hindi",
    "snippet": "Home » Language » Hindi HINDI Vision and Mission Syllabus PROFILE Vision The Department of Hindi envisions a vibrant and transformative learning environment that fosters creativity, innovation and a passion for classical literature, where students realise their potential and facu"
  },
  {
    "url": "https://nmkrv.edu.in/history/",
    "title": "History",
    "snippet": "Home » Humanities » History HISTORY Vision and Mission Course Outcome PROFILE Vision Envisions in developing world-class historians, ethical leaders, researchers, and scholars in the field of History, driven by a rigorous curriculum, research, and experiential learning that empow"
  },
  {
    "url": "https://nmkrv.edu.in/humanities-alumni-feedback-on-curriculum/",
    "title": "HUMANITIES – ALUMNI FEEDBACK ON CURRICULUM",
    "snippet": "Home » HUMANITIES – ALUMNI FEEDBACK ON CURRICULUM HUMANITIES – ALUMNI FEEDBACK ON CURRICULUM JKP 2014-15 JEP 2014-15 HES 2014-15 ESP 2014-15 JKP 2017-18 JEP 2017 - 18 HES 2017 - 18 ESP 2017 - 18"
  },
  {
    "url": "https://nmkrv.edu.in/humanities-student-feedback-on-curriculum/",
    "title": "HUMANITIES – STUDENT FEEDBACK ON CURRICULUM",
    "snippet": "Home » HUMANITIES – STUDENT FEEDBACK ON CURRICULUM HUMANITIES – STUDENT FEEDBACK ON CURRICULUM ESP 2014 - 15 ESP 2018 - 19 ESP 2019 - 20 HES 2014 - 15 HES 2018 - 19 HES 2019 - 20 JEP 2014 - 15 JEP 2018 - 19 JEP 2019 - 20"
  },
  {
    "url": "https://nmkrv.edu.in/humanities/",
    "title": "Under graduation in womens college",
    "snippet": "Home » Humanities HUMANITIES The humanities field of study gives students a profound understanding of human society, culture, and history. The college’s humanities department provides a nurturing and intellectually stimulating environment for students through its curriculum, whic"
  },
  {
    "url": "https://nmkrv.edu.in/humanities/economics/",
    "title": "Economics",
    "snippet": "Home » Humanities » Economics ECONOMICS Vision and Mission Course Outcome Syllabus PROFILE Vision By 2035, the Department of Economics aims to develop future educators, policymakers, planners, and administrators with critical thinking skills and ethical values, enabling them to m"
  },
  {
    "url": "https://nmkrv.edu.in/humanities/history/",
    "title": "History",
    "snippet": "Home » Humanities » History HISTORY Vision and Mission Course Outcome PROFILE Vision Envisions in developing world-class historians, ethical leaders, researchers, and scholars in the field of History, driven by a rigorous curriculum, research, and experiential learning that empow"
  },
  {
    "url": "https://nmkrv.edu.in/humanities/journalism/",
    "title": "Journalism",
    "snippet": "Home » Humanities » Journalism JOURNALISM Vision and Mission Course Outcome PROFILE Vision To nurture ethical and creative media professionals who inform, educate, and inspire society through truthful and inclusive journalism mission To provide strong theoretical and practical tr"
  },
  {
    "url": "https://nmkrv.edu.in/humanities/optional-english/",
    "title": "Optional English",
    "snippet": "Home » Humanities » Optional English OPTIONAL ENGLISH Course Outcome PROGRAMME SPECIFIC OUTCOME In societies like ours, English studies cannot follow a single, uniform or centralised tradition, such as the predominantly Anglo-Saxon one. Simply grouping Western and non-Western tra"
  },
  {
    "url": "https://nmkrv.edu.in/humanities/optional-kannada/",
    "title": "Optional Kannada",
    "snippet": "Home » Humanities » Optional Kannada OPTIONAL KANNADA Course Outcome COURSE OUTCOME SEMESTER/ TITLE OF THE COURSE LEARNING OUTCOME PROGRAM SPECIFIC OUTCOME ಮೊದಲನೇ ಸೆಮಿಸ್ಟರ್ ಸಾಹಿತ್ಯ ಚರಿತ್ರೆಯನ್ನು ಮೊಟ್ಟಮೊದಲು ವಿದ್ಯಾರ್ಥಿಗಳಿಗೆ ಓದಿಸುವ ಉದ್ದೇಶ ನಮ್ಮದು. ಕನ್ನಡ ಸಾಹಿತ್ಯ ಚರಿತ್ರೆಯ ಸ್ವರೂಪ, ಉದ್ದೇಶ"
  },
  {
    "url": "https://nmkrv.edu.in/humanities/physiology/",
    "title": "Psychology",
    "snippet": "Home » Humanities » Psychology PSYCHOLOGY Vision and Mission Course Outcome Syllabus Profile A degree programme with Psychology as one of the core subjects equips students for a fulfilling career and a well-balanced life. Graduates who pursue professional roles in their areas of "
  },
  {
    "url": "https://nmkrv.edu.in/humanities/sociology/",
    "title": "Sociology",
    "snippet": "Home » Humanities » Sociology SOCIOLOGY Vision and Mission Course Outcome Syllabus PROFILE Vision By 2035, the Department of Economics aims to develop future educators, policymakers, planners, and administrators with critical thinking skills and ethical values, enabling them to m"
  },
  {
    "url": "https://nmkrv.edu.in/infrastructure/",
    "title": "Infrastructure",
    "snippet": "Home » Infrastructure INFRASTRUCTURE All Campus Canteen Infrastructure"
  },
  {
    "url": "https://nmkrv.edu.in/iqac/",
    "title": "IQAC",
    "snippet": "Home » IQAC About Functions Composition of IQAC Policies Mandatory Disclosures IQAC Minutes & Action taken Reports Reports Best Practices Institutional Distinctiveness The IQAC cell was established on 1.6.2001 as a quality sustenance measure to initiate, plan and supervise variou"
  },
  {
    "url": "https://nmkrv.edu.in/journalism/",
    "title": "Journalism",
    "snippet": "Home » Humanities » Journalism JOURNALISM Vision and Mission Course Outcome PROFILE Vision To nurture ethical and creative media professionals who inform, educate, and inspire society through truthful and inclusive journalism mission To provide strong theoretical and practical tr"
  },
  {
    "url": "https://nmkrv.edu.in/kannada/",
    "title": "Kannada",
    "snippet": "Home » Language » Kannada KANNADA Vision and Mission PROFILE Vision ಕನ್ನಡ ಭಾಷೆ ಮತ್ತು ಸಾಹಿತ್ಯದ ಅಧ್ಯಯನದ ಮೂಲಕ ವಿದ್ಯಾರ್ಥಿಗಳಲ್ಲಿ ಸೃಜನಾತ್ಮಕತೆ, ಸಾಮಾಜಿಕ ಬದ್ಧತೆ ಹಾಗೂ ಮಾನವೀಯ ಮೌಲ್ಯ ಮತ್ತು ಆತ್ಮಾಭಿಮಾನವನ್ನು ಬೆಳೆಸಿ ಆ ಮೂಲಕ ಇಡೀ ಜಗತ್ತಿನ ಜ್ಙಾನ ಪರಂಪರೆಗೆ ಮುಖಾಮುಖಿಯಾಗುವ ಆತ್ಮವಿಶ್ವಾಸವನ್ನು ತುಂಬುವುದು. ಕನ್ನಡ"
  },
  {
    "url": "https://nmkrv.edu.in/language-2/",
    "title": "Under graduation in Kannada, English, Hindi and Sanskrit",
    "snippet": "Home » LANGUAGE LANGUGES FACULTY Dr Sandhya Hegde Assistant Professor M.A , M.Phil, P.hD, NET, KSET FACULTY Ms. Mareena Joesph Assistant Professor M.A."
  },
  {
    "url": "https://nmkrv.edu.in/language/",
    "title": "Language",
    "snippet": "Home » Language LANGUAGE KANNADA ENGLISH HINDI SANSKRIT"
  },
  {
    "url": "https://nmkrv.edu.in/language/english/",
    "title": "English",
    "snippet": "Home » Language » English ENGLISH Vision and Mission Syllabus PROFILE Vision Imparting quality education in this fast-changing technological and knowledge driven world. Working towards gender equality by addressing gender issues and promoting inclusiveness. Moulding and conscient"
  },
  {
    "url": "https://nmkrv.edu.in/language/hindi/",
    "title": "Hindi",
    "snippet": "Home » Language » Hindi HINDI Vision and Mission Syllabus PROFILE Vision The Department of Hindi envisions a vibrant and transformative learning environment that fosters creativity, innovation and a passion for classical literature, where students realise their potential and facu"
  },
  {
    "url": "https://nmkrv.edu.in/language/kannada/",
    "title": "Kannada",
    "snippet": "Home » Language » Kannada KANNADA Vision and Mission PROFILE Vision ಕನ್ನಡ ಭಾಷೆ ಮತ್ತು ಸಾಹಿತ್ಯದ ಅಧ್ಯಯನದ ಮೂಲಕ ವಿದ್ಯಾರ್ಥಿಗಳಲ್ಲಿ ಸೃಜನಾತ್ಮಕತೆ, ಸಾಮಾಜಿಕ ಬದ್ಧತೆ ಹಾಗೂ ಮಾನವೀಯ ಮೌಲ್ಯ ಮತ್ತು ಆತ್ಮಾಭಿಮಾನವನ್ನು ಬೆಳೆಸಿ ಆ ಮೂಲಕ ಇಡೀ ಜಗತ್ತಿನ ಜ್ಙಾನ ಪರಂಪರೆಗೆ ಮುಖಾಮುಖಿಯಾಗುವ ಆತ್ಮವಿಶ್ವಾಸವನ್ನು ತುಂಬುವುದು. ಕನ್ನಡ"
  },
  {
    "url": "https://nmkrv.edu.in/language/sanskrit/",
    "title": "Sanskrit",
    "snippet": "Home » Language » Sanskrit SANSKRIT Vision and Mission Syllabus PROFILE Vision “Let noble thoughts come to us from every side.” – Rigveda mission “Stop not till the goal is reached.” – Katopanishad"
  },
  {
    "url": "https://nmkrv.edu.in/language/urdu/",
    "title": "Urdu",
    "snippet": "Home » Language » Urdu URDU FACULTY Name"
  },
  {
    "url": "https://nmkrv.edu.in/library/",
    "title": "Library",
    "snippet": "Home » Library Our library, as any other, is a living cultural institution that enriches our knowledge, strengthens our values and empowers our autonomy. NMKRV library has an incredible amount of resources for you. Resources available include in-person help and virtual reference "
  },
  {
    "url": "https://nmkrv.edu.in/literary-activities/",
    "title": "LITERARY ACTIVITIES",
    "snippet": "Home » LITERARY ACTIVITIES LITERARY ACTIVITY The Literary Activities include writing, reporting and editing news stories on all college events for the College news bulletin ‘Vartha Vahini’ which is brought out half yearly on Republic Day and Independence Day. The students are tra"
  },
  {
    "url": "https://nmkrv.edu.in/m-com/",
    "title": "M.Com",
    "snippet": "Home » PG Programmes » M.Com MASTER OF COMMERCE A course on Project Management and business strategy will be included in the upcoming admission cycle to align the students with current industry demands, providing them with a competitive edge in the job market. Vision and Mission "
  },
  {
    "url": "https://nmkrv.edu.in/m-sc-chemistry/",
    "title": "M.Sc Chemistry",
    "snippet": "Home » PG Programmes » M.Sc Chemistry M.Sc CHEMISTRY Vision and Mission Course Outcome Laboratory PROFILE Vision Impart quality education and training in chemistry to enable successful careers for postgraduate students in the fields of research, education and industry application"
  },
  {
    "url": "https://nmkrv.edu.in/m-sc-data-science/",
    "title": "M.Sc Data Science",
    "snippet": "Home » PG Programmes » M.Sc Data Science M.SC DATA SCIENCE Vision and Mission PROFILE Vision The course is designed to nurture postgraduate students into analytical and ethical thought leaders. It aims to expose students to best practices in each subject area, enabling them to ad"
  },
  {
    "url": "https://nmkrv.edu.in/m-sc-mathematics/",
    "title": "M.Sc Mathematics",
    "snippet": "Home » PG Programmes » M.Sc Mathematics M.Sc MATHEMATICS Vision and Mission Course Outcome PROFILE Vision To enhance cognitive, personal, and inter-personal abilities. To provide professional expertise to handle GDs and interviews. To enrich, enhance and empower students to be a "
  },
  {
    "url": "https://nmkrv.edu.in/ma-journalism-mass-communication/",
    "title": "MA Journalism & Mass Communication",
    "snippet": "Home » PG Programmes » MA Journalism & Mass Communication MA J0URNALISM & MASS COMMUNICATION Vision and Mission Course Outcome Laboratory PROFILE Vision To conscientise students to face the emerging media technology and to prepare them for challenging global media scenario. Missi"
  },
  {
    "url": "https://nmkrv.edu.in/management/",
    "title": "Under graduation in Management | Degree in Management Bangalore",
    "snippet": "Home » Management MANAGEMENT Vision and Mission Course Outcome Syllabus PROFILE Vision • To build managerial approach, effective and efficient human resource with ethical values mission • To develop a strong intellectual, ethical human capital base with the right kind of attitude"
  },
  {
    "url": "https://nmkrv.edu.in/maths/",
    "title": "Maths",
    "snippet": "Home » Science » Maths MATHEMATICS Vision and Mission Course Outcome PROFILE Vision To remedy maths phobia through authentic learning based on hands-on experience with computers. To foster experimental, problem-oriented learning of mathematics. To show that ICT can be a panacea f"
  },
  {
    "url": "https://nmkrv.edu.in/msc-biotechnology/",
    "title": "MSc Biotechnology",
    "snippet": "Home » MSc Biotechnology Department of M.sc Biotechnology Vision and Mission Course Outcome PROFILE Vision The purpose of this course is to create responsible individuals with thorough knowledge of the workings of biotechnology, as a tool to manipulate the biological world in ser"
  },
  {
    "url": "https://nmkrv.edu.in/naac-4th-cycle/",
    "title": "NAAC 4th Cycle",
    "snippet": ""
  },
  {
    "url": "https://nmkrv.edu.in/natya-theatre-club-gallery/",
    "title": "NATYA THEATRE CLUB GALLERY",
    "snippet": "Home » NATYA THEATRE CLUB GALLERY NATYA THEATRE CLUB GALLERY"
  },
  {
    "url": "https://nmkrv.edu.in/navyata-the-fashion-club/",
    "title": "NAVYATA THE FASHION CLUB",
    "snippet": "Home » NAVYATA THE FASHION CLUB NAVYATA THE FASHION CLUB"
  },
  {
    "url": "https://nmkrv.edu.in/ncc/",
    "title": "NCC",
    "snippet": "Home » NCC NCC NMKRV an autonomous Institution, and one of the reputed Women’s college in Bangalore since 1971. The National Cadet Corps is the largest tri- service youth organization in India dedicated to grooming the youth of the country into disciplined and responsible citizen"
  },
  {
    "url": "https://nmkrv.edu.in/newweb/bba-alumni-feedback-on-curriculum/",
    "title": "BBA ALUMNI FEEDBACK ON CURRICULUM",
    "snippet": "Home » BBA ALUMNI FEEDBACK ON CURRICULUM BBA – ALUMNI FEEDBACK ON CURRICULUMBS 2015 2016 2017"
  },
  {
    "url": "https://nmkrv.edu.in/newweb/bba-student-feedback-on-curriculum/",
    "title": "BBA STUDENT FEEDBACK ON CURRICULUM",
    "snippet": "Home » BBA STUDENT FEEDBACK ON CURRICULUM BBA – STUDENT FEEDBACK ON CURRICULUMBS 2015 2016 2017"
  },
  {
    "url": "https://nmkrv.edu.in/newweb/bcom-alumni-feedback-on-curriculum/",
    "title": "BCOM ALUMNI FEEDBACK ON CURRICULUM",
    "snippet": "Home » BCOM ALUMNI FEEDBACK ON CURRICULUM BCOM – ALUMNI FEEDBACK ON CURRICULUMBS B.Com - Gen 2015 - 16 B.Com - TPP 2015 - 16 B.Com - TTM 2015 - 16 B.Com - Gen 2016 - 17 B.Com - TPP 2016 - 17 B.Com - TTM 2016 - 17 B.Com - Gen 2017 - 18 B.Com - Tax 2017 - 18 B.Com - Gen 2018 - 19"
  },
  {
    "url": "https://nmkrv.edu.in/newweb/bcom-student-feedback-on-curriculum/",
    "title": "BCOM STUDENT FEEDBACK ON CURRICULUM",
    "snippet": "Home » BCOM STUDENT FEEDBACK ON CURRICULUM Bcom – STUDENT FEEDBACK ON CURRICULUM B.Com Gen 2015 - 16 B.Com Voc 2015 - 16 B.Com Voc(TPP) 2015 - 16 B.Com Gen 2016 - 17 B.Com Voc 2016 - 17 B.Com Voc (TTM) 2016 - 17 B.Com Gen 2017 - 18 B.Com TAX 2017 - 18 B.Com Gen 2018 - 19"
  },
  {
    "url": "https://nmkrv.edu.in/newweb/bsc-alumni-feedback-on-curriculum/",
    "title": "BSc ALUMNI FEEDBACK ON CURRICULUM",
    "snippet": "Home » BSc ALUMNI FEEDBACK ON CURRICULUM BSc – ALUMNI FEEDBACK ON CURRICULUMBS PMCs 2014 - 15 PMCs 2017 - 18 PCM 2014 - 15 PCM 2017 - 18 CZBT 2014 - 15 CZBT 2017 - 18 CBZ 2014 - 15 CBZ 2017 - 18"
  },
  {
    "url": "https://nmkrv.edu.in/newweb/bsc-student-feedback-on-curriculum/",
    "title": "BSc STUDENT FEEDBACK ON CURRICULUM",
    "snippet": "Home » BSc STUDENT FEEDBACK ON CURRICULUM BSC – STUDENT FEEDBACK ON CURRICULUM CBZ 2014 - 15 CBZ 2018 - 19 CBZ 2019 - 20 CZBT 2014 - 15 CZBT 2018 - 19 CZBT 2019 - 20 PCM 2014 - 15 PCM 2017 - 18 PCM 2019 - 20"
  },
  {
    "url": "https://nmkrv.edu.in/newweb/humanities-alumni-feedback-on-curriculum/",
    "title": "HUMANITIES – ALUMNI FEEDBACK ON CURRICULUM",
    "snippet": "Home » HUMANITIES – ALUMNI FEEDBACK ON CURRICULUM HUMANITIES – ALUMNI FEEDBACK ON CURRICULUM JKP 2014-15 JEP 2014-15 HES 2014-15 ESP 2014-15 JKP 2017-18 JEP 2017 - 18 HES 2017 - 18 ESP 2017 - 18"
  },
  {
    "url": "https://nmkrv.edu.in/newweb/humanities-student-feedback-on-curriculum/",
    "title": "HUMANITIES – STUDENT FEEDBACK ON CURRICULUM",
    "snippet": "Home » HUMANITIES – STUDENT FEEDBACK ON CURRICULUM HUMANITIES – STUDENT FEEDBACK ON CURRICULUM ESP 2014 - 15 ESP 2018 - 19 ESP 2019 - 20 HES 2014 - 15 HES 2018 - 19 HES 2019 - 20 JEP 2014 - 15 JEP 2018 - 19 JEP 2019 - 20"
  },
  {
    "url": "https://nmkrv.edu.in/newweb/natya-theatre-club-gallery/",
    "title": "NATYA THEATRE CLUB GALLERY",
    "snippet": "Home » NATYA THEATRE CLUB GALLERY NATYA THEATRE CLUB GALLERY"
  },
  {
    "url": "https://nmkrv.edu.in/newweb/navyata-the-fashion-club/",
    "title": "NAVYATA THE FASHION CLUB",
    "snippet": "Home » NAVYATA THE FASHION CLUB NAVYATA THE FASHION CLUB"
  },
  {
    "url": "https://nmkrv.edu.in/newweb/ninnada-the-music-club-gallery/",
    "title": "NINNADA THE MUSIC CLUB GALLERY",
    "snippet": "Home » NINNADA THE MUSIC CLUB GALLERY NINNADA THE MUSIC CLUB GALLERY"
  },
  {
    "url": "https://nmkrv.edu.in/newweb/nupur-dance-club/",
    "title": "NUPUR DANCE CLUB",
    "snippet": "Home » NUPUR DANCE CLUB NUPUR DANCE CLUB"
  },
  {
    "url": "https://nmkrv.edu.in/newweb/pg-alumni-feedback-on-curriculum/",
    "title": "PG ALUMNI FEEDBACK ON CURRICULUM",
    "snippet": "Home » PG ALUMNI FEEDBACK ON CURRICULUM PG – ALUMNI FEEDBACK ON CURRICULUMBS MSc Mathematics 2014 - 15 MSc Mathematics 2016 - 17 MSc Mathematics 2018 - 19 MSc Chemistry 2014 - 15 MSc Chemistry 2016 - 17 MSc Chemistry 2018 - 19 Mcom 2014 - 15 Mcom 2016 - 17 Mcom 2018 - 19"
  },
  {
    "url": "https://nmkrv.edu.in/newweb/pg-programmes/",
    "title": "Post graduation in Chemistry, Commerce, Data Science and Journalism",
    "snippet": "Home » PG Programmes PG PROGRAMMES Welcome to our Postgraduate Programmes where you will challenge, inspire and transform you! You’ll learn from distinguished faculty, have immersive experiences and gain real-world insights. Our state-of-the-art infrastructure and research-driven"
  },
  {
    "url": "https://nmkrv.edu.in/newweb/pg-student-feedback-on-curriculum/",
    "title": "PG STUDENT FEEDBACK ON CURRICULUM",
    "snippet": "Home » PG STUDENT FEEDBACK ON CURRICULUM PG – STUDENT FEEDBACK ON CURRICULUMBS MSc Mathematics 2014 - 15 MSc Mathematics 2016 - 17 MSc Mathematics 2018 - 19 MSc Mathematics 2019 - 20 MSc Chemistry 2014 - 15 MSc Chemistry 2016 - 17 MSc Chemistry 2018 - 19 MSc Chemistry 2019 - 20 M"
  },
  {
    "url": "https://nmkrv.edu.in/ninnada-the-music-club-gallery/",
    "title": "NINNADA THE MUSIC CLUB GALLERY",
    "snippet": "Home » NINNADA THE MUSIC CLUB GALLERY NINNADA THE MUSIC CLUB GALLERY"
  },
  {
    "url": "https://nmkrv.edu.in/nirf/",
    "title": "NIRF",
    "snippet": "Home » NIRF NIRF - REports College Overall NIRF - College 2025 - 26 NIRF - Overall 2025 - 26 NIRF - College 2024 - 25 NIRF - Overall 2024 - 25 NIRF - College 2023 - 24 NIRF - Overall 2023 - 24 NIRF - College 2022 - 23"
  },
  {
    "url": "https://nmkrv.edu.in/notifications/",
    "title": "UG Notifications",
    "snippet": "Home » UG Notifications IMPORTANT NOTIFICATIONS UG Odd Semester Calendar of Events 2023-24 UG Even Semester Calendar of Events 2023-24 UG Odd Semester Calendar of Events 2022-23 UG Even Semester Calendar of Events 2022-23 UG Odd Semester Calendar of Events 2021-22 UG Odd Semester"
  },
  {
    "url": "https://nmkrv.edu.in/nss/",
    "title": "NSS",
    "snippet": "Home » NSS National Service Scheme (NSS) NSS is an Indian government-sponsored public service program conducted by the Ministry of Youth Affairs and Sports, Government of India. The symbol for the NSS is the giant Rath. The wheel portrays the cycle of creation, preservation and r"
  },
  {
    "url": "https://nmkrv.edu.in/nupur-dance-club/",
    "title": "NUPUR DANCE CLUB",
    "snippet": "Home » NUPUR DANCE CLUB NUPUR DANCE CLUB"
  },
  {
    "url": "https://nmkrv.edu.in/optional-english/",
    "title": "Optional English",
    "snippet": "Home » Humanities » Optional English OPTIONAL ENGLISH Course Outcome PROGRAMME SPECIFIC OUTCOME In societies like ours, English studies cannot follow a single, uniform or centralised tradition, such as the predominantly Anglo-Saxon one. Simply grouping Western and non-Western tra"
  },
  {
    "url": "https://nmkrv.edu.in/optional-kannada/",
    "title": "Optional Kannada",
    "snippet": "Home » Humanities » Optional Kannada OPTIONAL KANNADA Course Outcome COURSE OUTCOME SEMESTER/ TITLE OF THE COURSE LEARNING OUTCOME PROGRAM SPECIFIC OUTCOME ಮೊದಲನೇ ಸೆಮಿಸ್ಟರ್ ಸಾಹಿತ್ಯ ಚರಿತ್ರೆಯನ್ನು ಮೊಟ್ಟಮೊದಲು ವಿದ್ಯಾರ್ಥಿಗಳಿಗೆ ಓದಿಸುವ ಉದ್ದೇಶ ನಮ್ಮದು. ಕನ್ನಡ ಸಾಹಿತ್ಯ ಚರಿತ್ರೆಯ ಸ್ವರೂಪ, ಉದ್ದೇಶ"
  },
  {
    "url": "https://nmkrv.edu.in/organogram-of-the-institution/",
    "title": "Organogram of The Institution",
    "snippet": "Home » Organogram of The Institution"
  },
  {
    "url": "https://nmkrv.edu.in/outreach-programme/",
    "title": "Outreach programme",
    "snippet": "Home » Outreach programme Outreach sports programme We believe the best way to contribute to the nation is through community service! Plan of Action – Under the able guidance of Prof Padmini – H.O.D Physical Education department – NMKRV College for Women, a sports development ini"
  },
  {
    "url": "https://nmkrv.edu.in/pg-alumni-feedback-on-curriculum/",
    "title": "PG ALUMNI FEEDBACK ON CURRICULUM",
    "snippet": "Home » PG ALUMNI FEEDBACK ON CURRICULUM PG – ALUMNI FEEDBACK ON CURRICULUMBS MSc Mathematics 2014 - 15 MSc Mathematics 2016 - 17 MSc Mathematics 2018 - 19 MSc Chemistry 2014 - 15 MSc Chemistry 2016 - 17 MSc Chemistry 2018 - 19 Mcom 2014 - 15 Mcom 2016 - 17 Mcom 2018 - 19"
  },
  {
    "url": "https://nmkrv.edu.in/pg-notifications/",
    "title": "PG Notifications",
    "snippet": "Home » PG Notifications IMPORTANT NOTIFICATIONS PG Odd Semester Calendar of Events 2023-24 PG Odd Semester Calendar of Events 2022-23 PG Even Semester Calendar of Events 2022-23 PG Odd Semester Calendar of Events 2019-20 PG Even Semester Calendar of Events 2019-20 PG Odd Semester"
  },
  {
    "url": "https://nmkrv.edu.in/pg-programmes/",
    "title": "Post graduation in Chemistry, Commerce, Data Science and Journalism",
    "snippet": "Home » PG Programmes PG PROGRAMMES Welcome to our Postgraduate Programmes where you will challenge, inspire and transform you! You’ll learn from distinguished faculty, have immersive experiences and gain real-world insights. Our state-of-the-art infrastructure and research-driven"
  },
  {
    "url": "https://nmkrv.edu.in/pg-programmes/m-com/",
    "title": "M.Com",
    "snippet": "Home » PG Programmes » M.Com MASTER OF COMMERCE A course on Project Management and business strategy will be included in the upcoming admission cycle to align the students with current industry demands, providing them with a competitive edge in the job market. Vision and Mission "
  },
  {
    "url": "https://nmkrv.edu.in/pg-programmes/m-sc-chemistry/",
    "title": "M.Sc Chemistry",
    "snippet": "Home » PG Programmes » M.Sc Chemistry M.Sc CHEMISTRY Vision and Mission Course Outcome Laboratory PROFILE Vision Impart quality education and training in chemistry to enable successful careers for postgraduate students in the fields of research, education and industry application"
  },
  {
    "url": "https://nmkrv.edu.in/pg-programmes/m-sc-data-science/",
    "title": "M.Sc Data Science",
    "snippet": "Home » PG Programmes » M.Sc Data Science M.SC DATA SCIENCE Vision and Mission PROFILE Vision The course is designed to nurture postgraduate students into analytical and ethical thought leaders. It aims to expose students to best practices in each subject area, enabling them to ad"
  },
  {
    "url": "https://nmkrv.edu.in/pg-programmes/m-sc-mathematics/",
    "title": "M.Sc Mathematics",
    "snippet": "Home » PG Programmes » M.Sc Mathematics M.Sc MATHEMATICS Vision and Mission Course Outcome PROFILE Vision To enhance cognitive, personal, and inter-personal abilities. To provide professional expertise to handle GDs and interviews. To enrich, enhance and empower students to be a "
  },
  {
    "url": "https://nmkrv.edu.in/pg-programmes/ma-journalism-mass-communication/",
    "title": "MA Journalism & Mass Communication",
    "snippet": "Home » PG Programmes » MA Journalism & Mass Communication MA J0URNALISM & MASS COMMUNICATION Vision and Mission Course Outcome Laboratory PROFILE Vision To conscientise students to face the emerging media technology and to prepare them for challenging global media scenario. Missi"
  },
  {
    "url": "https://nmkrv.edu.in/pg-student-feedback-on-curriculum/",
    "title": "PG STUDENT FEEDBACK ON CURRICULUM",
    "snippet": "Home » PG STUDENT FEEDBACK ON CURRICULUM PG – STUDENT FEEDBACK ON CURRICULUMBS MSc Mathematics 2014 - 15 MSc Mathematics 2016 - 17 MSc Mathematics 2018 - 19 MSc Mathematics 2019 - 20 MSc Chemistry 2014 - 15 MSc Chemistry 2016 - 17 MSc Chemistry 2018 - 19 MSc Chemistry 2019 - 20 M"
  },
  {
    "url": "https://nmkrv.edu.in/phd-programme/",
    "title": "NMKRV Doctorate Degree for BSC and BEd in Banaglore",
    "snippet": "Home » PhD Programme Doctorate B.Sc Doctoral study in chemistry at NMKRV College (affiliated to Bangalore University ) prepares scholars for research and teaching careers with diverse emphases on physical, energy, materials, analytical and environmental sciences. The Ph.D. Progra"
  },
  {
    "url": "https://nmkrv.edu.in/physics/",
    "title": "Physics",
    "snippet": "Home » Science » Physics PHYSICS Vision and Mission Course Outcome Laboratory PROFILE Vision To build a foundation for excellence by igniting interests and passions in the study of Physics. To take up minor research projects and to commence UGC sponsored add-on courses. mission T"
  },
  {
    "url": "https://nmkrv.edu.in/physiology/",
    "title": "Psychology",
    "snippet": "Home » Humanities » Psychology PSYCHOLOGY Vision and Mission Course Outcome Syllabus Profile A degree programme with Psychology as one of the core subjects equips students for a fulfilling career and a well-balanced life. Graduates who pursue professional roles in their areas of "
  },
  {
    "url": "https://nmkrv.edu.in/placement-report/",
    "title": "Placement Report",
    "snippet": "Home » Placement Report PLACEMENTS REPORT Year No. of students attended No. of students selected 2013 – 14 320 251 2014 – 15 320 271"
  },
  {
    "url": "https://nmkrv.edu.in/privacy_policy",
    "title": "PRIVACY POLICY",
    "snippet": "Home » PRIVACY POLICY PRIVACY POLICY At NMKRV College, we are committed to protecting your privacy. This Privacy Policy explains how we collect, use, store and share information through our website ( nmkrv.edu.in ) and related digital services. By accessing or using our website o"
  },
  {
    "url": "https://nmkrv.edu.in/privacy_policy/",
    "title": "PRIVACY POLICY",
    "snippet": "Home » PRIVACY POLICY PRIVACY POLICY At NMKRV College, we are committed to protecting your privacy. This Privacy Policy explains how we collect, use, store and share information through our website ( nmkrv.edu.in ) and related digital services. By accessing or using our website o"
  },
  {
    "url": "https://nmkrv.edu.in/project-emboss/",
    "title": "Project Emboss",
    "snippet": "Home » Project Emboss Project Emboss Braille facility in NMKRV library OBJECTIVES The BRAILLE wing for visually impaired students was started in the NMKRV College library in 2009, to empower them by providing access to information through ‘SCREEN READER’ on the computer and BRAIL"
  },
  {
    "url": "https://nmkrv.edu.in/projects/",
    "title": "Projects",
    "snippet": "Home » Projects UGC Major and Minor Research Projects Sl.No Title of the Project/ Scheme Name of the Principal Investigator/ Co-Investigator Funding Agency Duration Period Amount Sanctioned 1. Research Capacity Building"
  },
  {
    "url": "https://nmkrv.edu.in/psychology-forum/",
    "title": "PSYCHOLOGY FORUM",
    "snippet": "Home » PSYCHOLOGY FORUM PSYCHOLOGY FORUM About Psychology forum: The Psychology forum was formed in the college to provide an opportunity for the students of all streams, who are interested in the subject of Psychology to enroll and participate actively in the ongoing programs. S"
  },
  {
    "url": "https://nmkrv.edu.in/public-cell/",
    "title": "Public Cell",
    "snippet": "Home » Public Cell public cell"
  },
  {
    "url": "https://nmkrv.edu.in/research-faculty/",
    "title": "Research Faculty",
    "snippet": "Home » Research Faculty The highly accomplished and diverse research faculty of NMKRV College bring extensive expertise and a passion for discovery to their respective fields. The research faculty enriches our institution’s intellectual environment, fostering a culture of innovat"
  },
  {
    "url": "https://nmkrv.edu.in/research/",
    "title": "Research",
    "snippet": "Home » Research RESEARCH Research, considered the primary aim of higher education, not only contributes to a person’s academic growth, but it also helps society achieve sustainable development. There are many government and non-government organisations that have been funding a lo"
  },
  {
    "url": "https://nmkrv.edu.in/rsst-girls-hostel/",
    "title": "RSST Girls Hostel",
    "snippet": "Home » RSST Girls Hostel RSST GIRLS HOSTEL The RSST Trust Hostel was established in 1992 to accommodate Dental and Engineering students. In 2013, it expanded its services to include MBA students, marking a significant milestone in its journey. Rules and regulations: To ensure a s"
  },
  {
    "url": "https://nmkrv.edu.in/sanskrit/",
    "title": "Sanskrit",
    "snippet": "Home » Language » Sanskrit SANSKRIT Vision and Mission Syllabus PROFILE Vision “Let noble thoughts come to us from every side.” – Rigveda mission “Stop not till the goal is reached.” – Katopanishad"
  },
  {
    "url": "https://nmkrv.edu.in/scholarship/",
    "title": "Scholarship",
    "snippet": "Home » Scholarship The Management, known for its magnanimity and charitable views, has set up several scholarships. Differently-abled students have been provided with facilities like cassette players, cassettes, and braille texts, and scholarships are offered to students who come"
  },
  {
    "url": "https://nmkrv.edu.in/science/",
    "title": "Under graduation in Womens College",
    "snippet": "Home » Science Programme Outcome B.Sc PCM Physics | Chemistry | Mathematics The graduates of B.Sc PCM will be able to: Acquire theoretical as well as practical knowledge in physics, chemistry, and mathematics. Create a strong interest and background in basic science and mathemati"
  },
  {
    "url": "https://nmkrv.edu.in/science/biotechnology/",
    "title": "BIOTECHNOLOGY",
    "snippet": "Home » Science » BIOTECHNOLOGY BIOTECHNOLOGY Vision and Mission Course Outcome Laboratory Syllabus PROFILE Vision Quality education to develop competent Biotechnologists for the welfare of society. mission To regularly update the course curriculum, catering to the needs of academ"
  },
  {
    "url": "https://nmkrv.edu.in/science/botany/",
    "title": "Botany",
    "snippet": "Home » Science » Botany BOTANY Vision and Mission Course Outcome Laboratory PROFILE Vision Acquire, benefit and contribute to the knowledge of Plant Sciences. mission To provide and update knowledge in various fields of plant sciences. To create awareness of industrial, health, a"
  },
  {
    "url": "https://nmkrv.edu.in/science/chemistry/",
    "title": "Chemistry",
    "snippet": "Home » Science » Chemistry CHEMISTRY Vision and Mission Course Outcome Laboratory Syllabus PROFILE Vision The vision of the department is to make the students research-oriented and employable and enable them to become confident and competent with better comprehension and applicat"
  },
  {
    "url": "https://nmkrv.edu.in/science/cs/",
    "title": "CS",
    "snippet": "Home » Science » CS COMPUTER SCIENCE Vision and Mission Course Outcome Laboratory PROFILE Vision • “To provide a qualitative environment – a platform for the students to equip themselves and enter into the technological and scientific arena, with human values” mission • To provid"
  },
  {
    "url": "https://nmkrv.edu.in/science/maths/",
    "title": "Maths",
    "snippet": "Home » Science » Maths MATHEMATICS Vision and Mission Course Outcome PROFILE Vision To remedy maths phobia through authentic learning based on hands-on experience with computers. To foster experimental, problem-oriented learning of mathematics. To show that ICT can be a panacea f"
  },
  {
    "url": "https://nmkrv.edu.in/science/physics/",
    "title": "Physics",
    "snippet": "Home » Science » Physics PHYSICS Vision and Mission Course Outcome Laboratory PROFILE Vision To build a foundation for excellence by igniting interests and passions in the study of Physics. To take up minor research projects and to commence UGC sponsored add-on courses. mission T"
  },
  {
    "url": "https://nmkrv.edu.in/science/zoology/",
    "title": "Zoology",
    "snippet": "Home » Science » Zoology ZOOLOGY Vision and Mission Course Outcome Laboratory PROFILE Vision To inculcate and nurture scientific temper, respect, and appreciation for nature by providing a wide spectrum of knowledge of the anatomy, physiology, systematics, ecology, behaviour, and"
  },
  {
    "url": "https://nmkrv.edu.in/sociology/",
    "title": "Sociology",
    "snippet": "Home » Humanities » Sociology SOCIOLOGY Vision and Mission Course Outcome Syllabus PROFILE Vision By 2035, the Department of Economics aims to develop future educators, policymakers, planners, and administrators with critical thinking skills and ethical values, enabling them to m"
  },
  {
    "url": "https://nmkrv.edu.in/sports-images/",
    "title": "Sports-images",
    "snippet": "Home » Sports-images SPORTS"
  },
  {
    "url": "https://nmkrv.edu.in/tfcms-2025/",
    "title": "TFCMS 2025",
    "snippet": "Two-day International Conference on “Transcending Frontiers in Chemical and Material Sciences” (TFCMS-2025) ABOUT THE COLLEGE: The NMKRV College was founded in 1973 by the RV Educational Institutions an educational consortium which manages twenty-five excellent educational instit"
  },
  {
    "url": "https://nmkrv.edu.in/training-and-placement-centre/",
    "title": "Training and Placement Centre",
    "snippet": "Home » Training and Placement Centre PLACEMENTS Contact us Ms Chaitra V C Manager – Training & Placements +91 8310063697 chaitravc.nmkrv@rvei.edu.in “Progress is the activity of today and the assurance of tomorrow.” Placement is one of the core hubs of education. DISHA- The place"
  },
  {
    "url": "https://nmkrv.edu.in/uba-2/",
    "title": "UBA",
    "snippet": "Home » UBA UBA ABOUT UBA: Ministry of Human Resource Development (MHRD), Government of India has launched a programme ‘UNNAT BHARAT ABHIYAN’ aiming to connect the higher educational institutions to the villages and rural areas. The primary objectives of Unnat Bharat Abhiyan are t"
  },
  {
    "url": "https://nmkrv.edu.in/utkarsh-quiz-club/",
    "title": "UTKARSH QUIZ CLUB",
    "snippet": "Home » UTKARSH QUIZ CLUB UTKARSH QUIZ CLUB About UQC: The UQC aims to promote Learning through Fun and Interactive manner. Quizzing is viewed as a recreational activity that enhances logical and analytical skills, Inter- personal skills and a robust craving for accomplishing acad"
  },
  {
    "url": "https://nmkrv.edu.in/value-added-courses/",
    "title": "Value Added Courses",
    "snippet": "Home » Value Added Courses VALUE - ADDED COURSES WHAT ARE VALUE-ADDED COURSES? To augment the curriculum, the college offers various Value-Added Courses to the students with the primary objective of enhancing employability skills, bridging the gap between industry and academia, d"
  },
  {
    "url": "https://nmkrv.edu.in/varthavahini/",
    "title": "Varthavahini",
    "snippet": "Home » Varthavahini Varthavahini Varthavahini Edition 1 January 2020 January 2019 January 2018 January 2017 January 2016 Varthavahini Edition 2 August 2020 August 2019"
  },
  {
    "url": "https://nmkrv.edu.in/voices/",
    "title": "Voices",
    "snippet": "Home » Voices VOICES ‘ANANYA’ is an umbrella of all EC/CC activities of NMKRV College for Women"
  },
  {
    "url": "https://nmkrv.edu.in/youth-red-cross/",
    "title": "YOUTH RED CROSS",
    "snippet": "Home » YOUTH RED CROSS YOUTH RED CROSS The YRC aims to inspire, encourage and initiate all forms of humanitarian activities so that human suffering can be minimized and thus contribute in creating peace in the society. Young volunteers have the potential to make a significant con"
  },
  {
    "url": "https://nmkrv.edu.in/zoology/",
    "title": "Zoology",
    "snippet": "Home » Science » Zoology ZOOLOGY Vision and Mission Course Outcome Laboratory PROFILE Vision To inculcate and nurture scientific temper, respect, and appreciation for nature by providing a wide spectrum of knowledge of the anatomy, physiology, systematics, ecology, behaviour, and"
  }
];

const SSMRV_FAQS = [
  {
    "q": "Is NMKRV College now a co-educational institution?",
    "a": "Yes! Established in 1973 by Rashtreeya Sikshana Samithi Trust (RSST) in memory of Sri. Meda Kasturiranga Setty and Smt. Nagarathnamma Meda Kasturiranga Setty, <b>NMKRV College became a Co-Educational Institution from the academic year 2025</b>, extending its five-decade legacy of excellence to all learners.",
    "keywords": [
      "co-ed",
      "coed",
      "co educational",
      "boys",
      "men",
      "women",
      "girls",
      "history",
      "established",
      "1973",
      "2025"
    ],
    "flow": "about_nmkrv"
  },
  {
    "q": "Is NMKRV College an Autonomous college?",
    "a": "Yes. NMKRV College is an <b>Autonomous Institution affiliated to Bangalore University</b>. It was one of the first five colleges in Karnataka to be granted <b>Autonomous Status by the UGC in 2005</b> (implemented in 2006) and was honoured with the <b>'College with Potential for Excellence' (CPE)</b> award by the UGC in 2010.",
    "keywords": [
      "autonomous",
      "autonomy",
      "university",
      "affiliation",
      "bangalore university",
      "ugc",
      "cpe",
      "naac",
      "aicte"
    ],
    "flow": "about_nmkrv"
  },
  {
    "q": "What Undergraduate (UG) courses are offered at NMKRV College?",
    "a": "NMKRV College offers Undergraduate programmes across Science, Commerce, Management, Computer Applications, Humanities, and Languages:<br>• <b>B.Sc.</b> (PCM, PMCs, CBZ, CZBt, MBtCs, PBZ)<br>• <b>B.Com.</b> (General, Vocational Tax Procedure & Practice, and FinTech & AI)<br>• <b>BBA</b> (AICTE Approved — 90 Seats)<br>• <b>BCA</b> (AICTE Approved — 60 Seats)<br>• <b>B.A.</b> (History, Economics, Sociology, Psychology, Journalism, Optional English & Optional Kannada)<br>• <b>4-Year Integrated B.Ed.</b> (B.A. B.Ed. & B.Sc. B.Ed.)",
    "keywords": [
      "ug",
      "undergraduate",
      "courses",
      "programmes",
      "programs",
      "degree",
      "bsc",
      "bcom",
      "bba",
      "bca",
      "ba"
    ],
    "flow": "programmes"
  },
  {
    "q": "What Postgraduate (PG) and Ph.D. courses are offered at NMKRV College?",
    "a": "NMKRV College offers Postgraduate and Research programmes:<br>• <b>M.Com.</b> (Accounting & Taxation / Finance & Banking)<br>• <b>M.Sc. Chemistry</b> (Organic Chemistry Specialization)<br>• <b>M.Sc. Data Science</b><br>• <b>M.Sc. Mathematics</b><br>• <b>M.Sc. Biotechnology</b><br>• <b>M.A. Journalism & Mass Communication</b><br>• <b>Ph.D. Research Programme in Chemistry</b> (Recognized Research Centre affiliated to Bangalore University)",
    "keywords": [
      "pg",
      "postgraduate",
      "masters",
      "mcom",
      "msc",
      "ma",
      "phd",
      "doctoral",
      "research",
      "data science"
    ],
    "flow": "pg_details"
  },
  {
    "q": "How do I apply for UG or PG Admission at NMKRV College?",
    "a": "You can apply online through the official NMKRV Admission Portals:<br>• <b>UG Admissions (SAP Portal):</b> Apply via the official RVEI SAP Admission Portal (<code>scode/NMKC</code>)<br>• <b>PG Admissions:</b> Apply via the official NMKRV PG Admissions Portal (<code>nmkrv.in8.nopaperforms.com</code>)<br>• <b>Offline / Campus Desk:</b> Visit the Admissions Office at 45/1, 22nd Cross, Jayanagar 3rd Block, Bengaluru - 560011 (<code>080-69018900 / 901</code>).",
    "keywords": [
      "apply",
      "admission",
      "application",
      "procedure",
      "process",
      "portal",
      "sap",
      "seat",
      "cutoff"
    ],
    "flow": "admissions"
  },
  {
    "q": "What is the fee structure and refund policy at NMKRV College?",
    "a": "Fee structures vary by programme (Aided / Un-Aided / AICTE Approved BBA & BCA) and admission category. Scholarships and fee waivers are provided to meritorious and economically underprivileged students.<br>• <b>UGC Fee Refund Policy:</b> NMKRV College follows the official UGC Refund Policy (100% refund 15+ days before last date; 90% less than 15 days before; 80% within 15 days after; 50% between 15–30 days after).<br>• Please contact the College Admissions Office at <b>080-69018900 / 901</b> or <b>nmkrv@rvei.edu.in</b> for exact category-wise fee details.",
    "keywords": [
      "fee",
      "fees",
      "cost",
      "tuition",
      "refund",
      "cancellation",
      "payment"
    ],
    "flow": "admissions"
  },
  {
    "q": "How are placements at NMKRV College (DISHA Placement Cell)?",
    "a": "<b>DISHA — The Training & Placement Centre</b> at NMKRV College (established in 2007–08) operates on the principle of <i>'College to Career'</i> and trains students in <b>CAKES</b> (Competency, Attitude, Knowledge, Ethics & Skill).<br>• <b>Top Recruiters:</b> Deloitte, Wipro, Accenture, TCS, Infosys, HCL, Citi Bank, JP Morgan, Northern Trust, HDFC, Fidelity, IBM, Airtel, Axis Bank, Wells Fargo, Capgemini, Codeyoung & Microland.<br>• <b>Placement Coordinator:</b> Ms. Chaitra V. C. (<code>+91 83100 63697</code>, <code>placement.nmkrv@rvei.edu.in</code>).",
    "keywords": [
      "placement",
      "placements",
      "jobs",
      "disha",
      "companies",
      "recruiters",
      "package",
      "salary",
      "internship",
      "career"
    ],
    "flow": "placements"
  },
  {
    "q": "Does NMKRV College have a hostel and library?",
    "a": "Yes!<br>• <b>RSST Girls Hostel:</b> Established in 1992 with dining hall, reading room, daily newspapers, purified water, free Wi-Fi, and 7:30 PM security curfew.<br>• <b>Library & Information Centre:</b> Spans <b>3,993.29 sq.ft.</b> with <b>60,097+ books</b>, <b>7,530 reference books</b>, <b>2,021 SC/ST Book Bank books</b>, <b>135 Braille books</b>, <b>DELNET & INFLIBNET N-List</b> e-resources, OPAC, and <b>JAWS & NVDA</b> assistive software for visually challenged students.",
    "keywords": [
      "hostel",
      "accommodation",
      "library",
      "books",
      "inflibnet",
      "delnet",
      "braille",
      "facilities",
      "infrastructure"
    ],
    "flow": "campus"
  },
  {
    "q": "What scholarships are available at NMKRV College?",
    "a": "NMKRV College facilitates numerous Government and Trust scholarships:<br>1. <b>SC/ST Scholarship (SMIS & National Scholarship Portal)</b><br>2. <b>Post-Matric Scholarship for BCM Students (Karepass)</b><br>3. <b>MHRD Merit Scholarship</b><br>4. <b>Karnataka Science & Technology Academy (KSTA) Scholarship</b><br>5. <b>Sir C. V. Raman Scholarship</b> for Science students<br>6. <b>Karnataka Minority Development Corporation (KMDC) Scholarship</b><br>7. <b>NHFDC Scholarship</b> for Differently-Abled students<br>8. <b>RSST Management Scholarships & Fee Waivers</b> for meritorious and economically weaker students.",
    "keywords": [
      "scholarship",
      "scholarships",
      "financial aid",
      "sc",
      "st",
      "obc",
      "merit",
      "cv raman",
      "ksta"
    ],
    "flow": "scholarships"
  }
];

const CHAT_FLOWS = {
  "welcome": {
    "message": "👋 Welcome to <b>NMKRV College (Autonomous)</b>, Jayanagar, Bengaluru!<br><i>Five Decades of Excellence in Higher Education</i> (Est. 1973 | Co-Ed | UGC Autonomous & CPE | NAAC Accredited | RSST / RV Group).<br><br>How can I assist you today? Select an option or type your question:",
    "id": "welcome",
    "pageUrl": "https://nmkrv.edu.in/",
    "buttons": [
      {
        "text": "📚 Explore Programmes",
        "action": "flow:programmes"
      },
      {
        "text": "📝 Admissions & Apply",
        "action": "flow:admissions"
      },
      {
        "text": "👨‍🏫 Faculty Directory",
        "action": "flow:faculty"
      },
      {
        "text": "💼 Placements & Packages",
        "action": "flow:placements"
      },
      {
        "text": "🎓 Scholarships & Aid",
        "action": "flow:scholarships"
      },
      {
        "text": "📄 Official Downloads",
        "action": "flow:prospectus_downloads"
      },
      {
        "text": "🏛️ Campus Life, Hostel & Clubs",
        "action": "flow:campus"
      },
      {
        "text": "📍 Campus Navigation & Maps",
        "action": "flow:campus_navigation"
      },
      {
        "text": "📞 Contact College Office",
        "action": "flow:contact"
      }
    ]
  },
  "main_menu": {
    "message": "🏠 <b>NMKRV College — Main Menu</b><br>Select any category below or type your question in the search box:",
    "id": "main_menu",
    "pageUrl": "https://nmkrv.edu.in/",
    "buttons": [
      {
        "text": "📚 Explore Programmes",
        "action": "flow:programmes"
      },
      {
        "text": "📝 Admissions & Apply",
        "action": "flow:admissions"
      },
      {
        "text": "👨‍🏫 Faculty Directory",
        "action": "flow:faculty"
      },
      {
        "text": "💼 Placements & Packages",
        "action": "flow:placements"
      },
      {
        "text": "🎓 Scholarships & Aid",
        "action": "flow:scholarships"
      },
      {
        "text": "📄 Official Downloads",
        "action": "flow:prospectus_downloads"
      },
      {
        "text": "🏛️ Campus Life, Hostel & Clubs",
        "action": "flow:campus"
      },
      {
        "text": "🔬 Research, IQAC & Exams",
        "action": "flow:research_iqac_exams"
      },
      {
        "text": "📍 Campus Navigation & Maps",
        "action": "flow:campus_navigation"
      },
      {
        "text": "📞 Contact College Office",
        "action": "flow:contact"
      }
    ]
  },
  "about_nmkrv": {
    "message": "🏛️ <b>About NMKRV College (Autonomous), Jayanagar</b><br><br>• <b>Established:</b> 1973 in fond memory of <b>Sri. Meda Kasturiranga Setty</b> and <b>Smt. Nagarathnamma Meda Kasturiranga Setty</b> under <b>Rashtreeya Sikshana Samithi Trust (RSST / RVEI)</b>.<br>• <b>Co-Educational Milestone (2025):</b> After over five decades of empowering women, NMKRV College transitioned into a <b>Co-Educational Institution in 2025</b>, extending equal opportunity to all learners.<br>• <b>Autonomous & CPE Status:</b> Granted <b>UGC Autonomous Status in 2005</b> (affiliated to Bangalore University) and recognized as a <b>'College with Potential for Excellence' (CPE)</b> by UGC in 2010.<br>• <b>Accreditations & Grants:</b> NAAC Accredited | AICTE Approved (BBA & BCA) | <b>DST-FIST</b> Grant (Rs. 1.1 Crore) | <b>DBT-STAR College Scheme</b> (Chemistry, Botany & Zoology).<br>• <b>Principal:</b> <b>Dr. R. Suchithra</b> (<code>MCA, Ph.D.</code>).",
    "id": "about_nmkrv",
    "pageUrl": "https://nmkrv.edu.in/about-college/",
    "buttons": [
      {
        "text": "🌐 Official About Us Page",
        "url": "https://nmkrv.edu.in/about-college/"
      },
      {
        "text": "🏛️ Board of Management",
        "action": "flow:faculty_leadership"
      },
      {
        "text": "📚 Explore Programmes",
        "action": "flow:programmes"
      }
    ]
  },
  "programmes": {
    "message": "🎓 <b>Academic Programmes at NMKRV College (Autonomous)</b><br>Affiliated to <b>Bangalore University</b> under SEP / Autonomous Curriculum:<br><br><b>Undergraduate (UG) Programmes:</b><br>• <b>🔬 B.Sc. (Physical & Life Sciences)</b> — PCM, PMCs, CBZ, CZBt, MBtCs, PBZ<br>• <b>📊 B.Com.</b> — General, Vocational Tax Procedure & Practice, FinTech & AI<br>• <b>📈 BBA</b> — Business Administration (AICTE Approved)<br>• <b>💻 BCA</b> — Computer Applications (AICTE Approved)<br>• <b>🎭 B.A. (Humanities & Media)</b> — HES, JPEng, JPKan, ESP<br><br><b>Postgraduate (PG), Integrated & Doctoral Programmes:</b><br>• <b>🎓 PG Programmes</b> — M.Com, M.Sc. (Chemistry, Data Science, Mathematics, Biotechnology), M.A. Journalism & Mass Communication<br>• <b>🔬 Ph.D. & Integrated B.Ed. & Value-Added Courses</b><br><br>Select a programme for complete curriculum & eligibility details:",
    "id": "programmes",
    "pageUrl": "https://nmkrv.edu.in/ug-programmes/",
    "buttons": [
      {
        "text": "🔬 B.Sc. Science Programmes",
        "action": "flow:bsc_details"
      },
      {
        "text": "📊 B.Com (General, Tax & FinTech)",
        "action": "flow:bcom_details"
      },
      {
        "text": "📈 BBA (AICTE Approved)",
        "action": "flow:bba_details"
      },
      {
        "text": "💻 BCA (AICTE Approved)",
        "action": "flow:bca_details"
      },
      {
        "text": "🎭 B.A. (Humanities & Journalism)",
        "action": "flow:ba_details"
      },
      {
        "text": "🎓 PG Programmes (M.Sc / M.Com / M.A)",
        "action": "flow:pg_details"
      },
      {
        "text": "🏅 Ph.D. & Value-Added Courses",
        "action": "flow:phd_vac_details"
      }
    ]
  },
  "bsc_details": {
    "message": "🔬 <b>Bachelor of Science (B.Sc.) — Physical & Life Sciences</b><br><br>• <b>Duration:</b> 3 Years (6 Semesters) Autonomous Curriculum<br>• <b>Recognitions:</b> Supported by <b>DST-FIST (Rs. 1.1 Crore)</b> & <b>DBT-STAR College Scheme</b> (Chemistry, Botany & Zoology)<br>• <b>B.Sc. Combinations Offered:</b><br>  1. <b>PCM:</b> Physics, Chemistry, Mathematics<br>  2. <b>PMCs:</b> Physics, Mathematics, Computer Science<br>  3. <b>CBZ:</b> Chemistry, Botany, Zoology<br>  4. <b>CZBt:</b> Chemistry, Zoology, Biotechnology<br>  5. <b>MBtCs:</b> Microbiology, Biotechnology, Computer Science<br>  6. <b>PBZ:</b> Psychology, Botany, Zoology<br>• <b>Eligibility:</b> Pass in 10+2 / II PUC with relevant Science subjects.<br>• <b>Highlights:</b> Herbal Medicinal Garden, FOSS Mathematics Lab, Molecular Biology & Genetic Engineering Labs, and Semester V/VI research projects.",
    "id": "bsc_details",
    "pageUrl": "https://nmkrv.edu.in/science/",
    "buttons": [
      {
        "text": "🌐 Official B.Sc. Science Page",
        "url": "https://nmkrv.edu.in/science/"
      },
      {
        "text": "🔬 Physical Sciences Faculty",
        "action": "flow:faculty_physical_sciences"
      },
      {
        "text": "🧬 Life Sciences Faculty",
        "action": "flow:faculty_life_sciences"
      },
      {
        "text": "📝 How to Apply",
        "action": "flow:admissions"
      }
    ]
  },
  "bcom_details": {
    "message": "📊 <b>Bachelor of Commerce (B.Com.)</b><br><br>• <b>Duration:</b> 3 Years (6 Semesters) under SEP / Autonomous Scheme<br>• <b>Streams Offered:</b><br>  1. <b>B.Com. General</b> (Financial & Corporate Accounting, Costing, Banking, Stock & Commodity Markets)<br>  2. <b>B.Com. Vocational</b> — Tax Procedure and Practice (TPP)<br>  3. <b>B.Com. in FinTech and Artificial Intelligence (AI)</b><br>• <b>Eligibility:</b> Pass in 10+2 / II PUC or equivalent.<br>• <b>Career Outcomes:</b> Chartered Accountancy, Corporate Finance, Taxation, Banking, Auditing, FinTech Analytics & M.Com.",
    "id": "bcom_details",
    "pageUrl": "https://nmkrv.edu.in/commerce/",
    "buttons": [
      {
        "text": "🌐 Official Commerce Page",
        "url": "https://nmkrv.edu.in/commerce/"
      },
      {
        "text": "📊 Commerce Faculty",
        "action": "flow:faculty_commerce"
      },
      {
        "text": "📝 How to Apply",
        "action": "flow:admissions"
      }
    ]
  },
  "bba_details": {
    "message": "📈 <b>Bachelor of Business Administration (BBA)</b><br><br>• <b>Approval:</b> AICTE Approved & Affiliated to Bangalore University (Autonomous)<br>• <b>Duration:</b> 3 Years (6 Semesters) | <b>Sanctioned Intake:</b> 90 Seats<br>• <b>Specialisations:</b><br>  - Finance & Accounting<br>  - Human Resource Management (HRM)<br>  - Marketing Management & Entrepreneurship<br>• <b>Eligibility:</b> Pass in 10+2 / II PUC in any stream (Arts, Science, or Commerce).<br>• <b>Highlights:</b> Case-study pedagogy, E-Cell startup mentorship, industrial visits, and dedicatedBBA Seminar Hall.",
    "id": "bba_details",
    "pageUrl": "https://nmkrv.edu.in/management/",
    "buttons": [
      {
        "text": "🌐 Official BBA Page",
        "url": "https://nmkrv.edu.in/management/"
      },
      {
        "text": "📈 BBA Management Faculty",
        "action": "flow:faculty_bba"
      },
      {
        "text": "📝 How to Apply",
        "action": "flow:admissions"
      }
    ]
  },
  "bca_details": {
    "message": "💻 <b>Bachelor of Computer Applications (BCA)</b><br><br>• <b>Approval:</b> AICTE Approved & Affiliated to Bangalore University (Autonomous)<br>• <b>Duration:</b> 3 Years (6 Semesters) | <b>Sanctioned Intake:</b> 60 Seats<br>• <b>Core Curriculum:</b><br>  - Programming in C, Data Structures, Object-Oriented Programming in Java & Python<br>  - RDBMS, Operating Systems, Linux Programming & Computer Networks<br>  - Web Technologies, Software Engineering, Cloud Computing & AI Projects<br>• <b>Infrastructure:</b> 6 Dedicated Computer Laboratories (13th Gen Intel Core i5 / i7 systems with Windows 11 Pro & Ubuntu Linux).<br>• <b>Eligibility:</b> Pass in 10+2 / II PUC or 3-Year Diploma from a recognized board.",
    "id": "bca_details",
    "pageUrl": "https://nmkrv.edu.in/bca/",
    "buttons": [
      {
        "text": "🌐 Official BCA Page",
        "url": "https://nmkrv.edu.in/bca/"
      },
      {
        "text": "📥 BCA Syllabus (PDF)",
        "url": "https://nmkrv.edu.in/wp-content/uploads/2026/04/BCA_Syllabus_2025_26-2.pdf"
      },
      {
        "text": "💻 BCA & CS Faculty",
        "action": "flow:faculty_bca"
      },
      {
        "text": "📝 How to Apply",
        "action": "flow:admissions"
      }
    ]
  },
  "ba_details": {
    "message": "🎭 <b>Bachelor of Arts (B.A.) — Humanities, Journalism & Languages</b><br><br>• <b>Duration:</b> 3 Years (6 Semesters) under SEP / Autonomous Curriculum<br>• <b>Core Disciplines Offered:</b><br>  - <b>History</b> (Ancient, Medieval & Modern Indian History, Archaeology & Heritage)<br>  - <b>Economics</b> (Micro/Macro Economics, Monetary, Public & Development Economics)<br>  - <b>Sociology</b> (Indian Society, Rural/Urban Sociology & Social Research)<br>  - <b>Psychology</b> (Basic, Developmental, Abnormal, Social & Industrial/Organizational Psychology)<br>  - <b>Journalism & Mass Communication</b> (Print, Broadcast, Digital Media & Studio Production)<br>  - <b>Optional English & Optional Kannada</b><br>• <b>Languages Offered:</b> Kannada, English, Hindi, Sanskrit & Urdu.",
    "id": "ba_details",
    "pageUrl": "https://nmkrv.edu.in/humanities/",
    "buttons": [
      {
        "text": "🌐 Official Humanities Page",
        "url": "https://nmkrv.edu.in/humanities/"
      },
      {
        "text": "🎭 Humanities & Media Faculty",
        "action": "flow:faculty_humanities"
      },
      {
        "text": "🗣️ Languages Faculty",
        "action": "flow:faculty_languages_admin"
      },
      {
        "text": "📝 How to Apply",
        "action": "flow:admissions"
      }
    ]
  },
  "pg_details": {
    "message": "🎓 <b>Postgraduate (PG) Programmes at NMKRV College</b><br>Full-Time 2-Year (4 Semesters) Autonomous Master's Programmes:<br><br>1. <b>📊 M.Com. (Master of Commerce):</b> Accounting & Taxation / Finance & Banking, Business Analytics & SQL, Project Management & Risk Management.<br>2. <b>🧪 M.Sc. Chemistry (Organic Chemistry Specialization):</b> Inorganic, Organic, Physical & Analytical Chemistry, Spectroscopy, Organometallic & Medicinal Chemistry.<br>3. <b>📈 M.Sc. Data Science:</b> Analytics, Machine Learning, Statistical Modelling & Domain Data Science.<br>4. <b>📐 M.Sc. Mathematics:</b> Algebra, Real/Complex/Functional Analysis, Topology, Differential Geometry, Fluid Mechanics & Discrete Maths.<br>5. <b>🧬 M.Sc. Biotechnology:</b> Molecular Biology, Genetic Engineering, Immunology & Bioprocess Technology.<br>6. <b>🎙️ M.A. Journalism & Mass Communication:</b> Electronic & Digital Media, Broadcast Production, Corporate Communication & 8-Week Media Internship.<br><br>• <b>Eligibility:</b> Bachelor's degree in the relevant discipline with minimum 50% aggregate (45% for SC/ST).",
    "id": "pg_details",
    "pageUrl": "https://nmkrv.edu.in/pg-programmes/",
    "buttons": [
      {
        "text": "🌐 Official PG Programmes Page",
        "url": "https://nmkrv.edu.in/pg-programmes/"
      },
      {
        "text": "🖥️ Apply for PG Online",
        "url": "https://nmkrv.in8.nopaperforms.com"
      },
      {
        "text": "📊 M.Com Details",
        "url": "https://nmkrv.edu.in/m-com/"
      },
      {
        "text": "🧪 M.Sc. Chemistry Details",
        "url": "https://nmkrv.edu.in/m-sc-chemistry/"
      },
      {
        "text": "📈 M.Sc. Data Science Details",
        "url": "https://nmkrv.edu.in/m-sc-data-science/"
      }
    ]
  },
  "phd_vac_details": {
    "message": "🏅 <b>Doctoral (Ph.D.), Integrated B.Ed. & Value-Added Courses</b><br><br><b>1. Ph.D. Research Programme in Chemistry:</b><br>• Affiliated to Bangalore University with recognized Research Guides <b>Dr. G. S. Suresh</b> and <b>Dr. Y. Venkataramanappa</b>.<br>• Coursework covers <i>Foundations of Research</i>, <i>Methods in Research for Science</i>, and <i>Research Publication & Writing</i>.<br><br><b>2. 4-Year Integrated B.Ed. Programmes:</b><br>• <b>B.A. B.Ed.</b> and <b>B.Sc. B.Ed.</b> (4-Year Integrated Teacher Education Programmes).<br><br><b>3. Career-Oriented Value-Added Certificate Courses (30–60 Hours):</b><br>• <b>Forensic Sciences</b> (60 Hrs — Dept. of Chemistry)<br>• <b>Basics in Bioinformatics</b> (60 Hrs — Dept. of Biotechnology in association with GenEclat Technologies LLP)<br>• <b>Biochemistry Techniques in Routine Diagnostic Laboratory Practice</b><br>• <b>Molecular Biology Techniques</b><br>• <b>Basic Computer Skills & Self Presentations</b>",
    "id": "phd_vac_details",
    "pageUrl": "https://nmkrv.edu.in/phd-programme/",
    "buttons": [
      {
        "text": "🌐 Official Ph.D. Programme Page",
        "url": "https://nmkrv.edu.in/phd-programme/"
      },
      {
        "text": "🌐 Value-Added Courses Page",
        "url": "https://nmkrv.edu.in/value-added-courses/"
      }
    ]
  },
  "admissions": {
    "message": "📝 <b>Admissions at NMKRV College (Autonomous)</b><br><br><b>Step-by-Step Admission Procedure:</b><br>1. <b>Online Application:</b><br>   - <b>UG Programmes (B.Sc, B.Com, BBA, BCA, B.A):</b> Apply via the official RVEI SAP Admission Portal (<code>scode/NMKC</code>).<br>   - <b>PG Programmes (M.Com, M.Sc, M.A):</b> Apply via the official NMKRV PG Admissions Portal.<br>2. <b>Selection & Eligibility:</b><br>   - Minimum Acceptance Level: <b>50%</b> in qualifying exam for General category (<b>45%</b> for SC/ST/OBC).<br>   - Counselling and document verification at the Jayanagar 3rd Block campus.<br>3. <b>Documents Required:</b><br>   - 10th / SSLC & 12th / II PUC Marks Cards (and Degree Marks Cards for PG)<br>   - Transfer Certificate (TC), Migration Certificate (if outside Karnataka), Caste/Income Certificate (if applicable), Aadhaar Card & Passport-size photographs.<br>4. <b>Fee Structure & Refund Policy:</b><br>   - Fees are structured as per Aided / Un-Aided / AICTE norms. Full UGC Refund Policy applies on withdrawal. Contact the Admissions Desk at <b>080-69018900 / 901</b> for category-wise fee details.",
    "id": "admissions",
    "pageUrl": "https://nmkrv.edu.in/admission-2023-2024/",
    "buttons": [
      {
        "text": "🖥️ UG Online Application (SAP Portal)",
        "url": "https://wds-prd.rvei.edu.in:4430/sap/bc/ui5_ui5/sap/znmkrv/index.html#/scode/NMKC"
      },
      {
        "text": "🎓 PG Online Application Portal",
        "url": "https://nmkrv.in8.nopaperforms.com"
      },
      {
        "text": "🎓 Scholarships & Fee Waivers",
        "action": "flow:scholarships"
      },
      {
        "text": "📞 Contact Admissions Office",
        "action": "flow:contact"
      }
    ]
  },
  "scholarships": {
    "message": "🎓 <b>Scholarships & Financial Aid at NMKRV College</b><br>NMKRV College provides extensive Government and RSST Management scholarships, plus special support (Braille books, audio tools) for differently-abled students:<br><br>1. <b>SC Scholarship (SMIS)</b> — Department of Social Welfare<br>2. <b>ST Scholarship</b> — National Scholarship Portal (<code>scholarships.gov.in</code>)<br>3. <b>Post-Matric Scholarship for BCM Students</b> (<code>karepass.cgg.gov.in</code>)<br>4. <b>MHRD Merit Scholarship</b> — Ministry of Education<br>5. <b>Karnataka Science & Technology Academy (KSTA) Scholarship</b> for Science students<br>6. <b>Sir C. V. Raman Scholarship</b> for Science students<br>7. <b>Karnataka Minority Development Corporation (KMDC) Scholarship</b><br>8. <b>NHFDC Scholarship</b> for Differently-Abled students<br>9. <b>RSST Institutional Scholarships & Fee Waivers</b> for meritorious and economically underprivileged students.",
    "id": "scholarships",
    "pageUrl": "https://nmkrv.edu.in/scholarship/",
    "buttons": [
      {
        "text": "🌐 Official Scholarships Page",
        "url": "https://nmkrv.edu.in/scholarship/"
      },
      {
        "text": "📝 Admissions & Apply",
        "action": "flow:admissions"
      }
    ]
  },
  "placements": {
    "message": "💼 <b>DISHA — Training & Placement Centre at NMKRV College</b><br>Established in 2007–08, <b>DISHA</b> (<i>'Direction'</i>) works on the core principle of <b>'College to Career'</b>, equipping students with <b>CAKES</b> (<i>Competency, Attitude, Knowledge, Ethics & Skill</i>).<br><br>• <b>Recent Placement Highlights:</b><br>  - <b>Highest Package:</b> <b>8.36 LPA</b> (Codeyoung — International Sales Specialist)<br>  - <b>Other Top Packages:</b> <b>6.00 LPA</b> (Material Depot), <b>5.05 LPA</b> (Accenture), <b>5.00 LPA</b> (Airtel), <b>4.50 LPA</b> (Crane Outsourcing), <b>4.00 LPA</b> (Sagility, Dyuti Technologies), <b>3.80 LPA</b> (Muthoot), <b>3.50 LPA</b> (Kotak Life, TCS), <b>3.40 LPA</b> (GR Management Solutions), <b>3.20 LPA</b> (Wells Fargo, Nivara Housing Finance).<br>• <b>Premier Recruiters:</b> Deloitte, Wipro, Accenture, TCS, Infosys, HCL, Citi Bank, JP Morgan, Northern Trust, IBM, Fidelity, HDFC, ICICI, Axis Bank, Capgemini, Piramal Finance & Quess Corp.<br>• <b>Placement Officer:</b> <b>Ms. Chaitra V. C.</b> (<code>+91 83100 63697</code> | <code>placement.nmkrv@rvei.edu.in</code>).",
    "id": "placements",
    "pageUrl": "https://nmkrv.edu.in/training-and-placement-centre/",
    "buttons": [
      {
        "text": "🌐 DISHA Placement Centre Page",
        "url": "https://nmkrv.edu.in/training-and-placement-centre/"
      },
      {
        "text": "📊 Official Placement Report",
        "url": "https://nmkrv.edu.in/placement-report/"
      },
      {
        "text": "👤 Ms. Chaitra V. C. (Placement Head)",
        "action": "profile:ms-chaitra-v-c"
      }
    ]
  },
  "campus": {
    "message": "🏛️ <b>Campus Life, Hostel, Library & Clubs at NMKRV College</b><br>Situated on a lush <b>4.5-acre green campus</b> in Jayanagar 3rd Block, Bengaluru:<br><br>• <b>📚 Library & Information Centre:</b> 3,993 sq.ft. reading hall (85 seats), <b>60,097+ books</b>, <b>7,530 reference volumes</b>, <b>2,021 SC/ST Book Bank books</b>, <b>135 Braille books</b>, <b>DELNET & INFLIBNET N-List</b>, OPAC, and <b>JAWS/NVDA</b> software.<br>• <b>🏠 RSST Girls Hostel:</b> Safe residential facility with dining hall, reading room, newspapers, purified drinking water & free Wi-Fi.<br>• <b>🏟️ Sports & Gymnasium:</b> 29,040 sq.ft. outdoor playground (Basketball, Throwball, Volleyball, Football, Cricket, Kho-Kho, Kabaddi) & 2 Indoor Sports Halls (Table Tennis, Chess, Carrom).<br>• <b>🎭 Vibrant Student Clubs:</b><br>  - <b>Nupur</b> (Dance Club) | <b>Ninaada</b> (Music Club) | <b>Navyata</b> (Fashion Club) | <b>Natya</b> (Theatre Club)<br>  - <b>NCC</b> (1 Karnataka Girls Battalion) | <b>NSS</b> | <b>Youth Red Cross</b> | <b>Unnat Bharat Abhiyan (UBA)</b><br>  - <b>Eco Club</b> | <b>Fine Arts Club</b> | <b>Utkarsh Quiz Club</b> | <b>E-Cell</b> | <b>Psychology Forum</b> | <b>Forum for Strength & Intellect (FSI)</b> | <b>Aarogya Kendra</b>",
    "id": "centres_clubs",
    "pageUrl": "https://nmkrv.edu.in/clubs/",
    "buttons": [
      {
        "text": "🌐 Student Clubs Directory",
        "url": "https://nmkrv.edu.in/clubs/"
      },
      {
        "text": "📚 Library & Information Centre",
        "url": "https://nmkrv.edu.in/library/"
      },
      {
        "text": "🏠 RSST Girls Hostel Page",
        "url": "https://nmkrv.edu.in/rsst-girls-hostel/"
      },
      {
        "text": "🌱 Green Campus Initiatives",
        "url": "https://nmkrv.edu.in/green-initiatives/"
      }
    ]
  },
  "research_iqac_exams": {
    "message": "🔬 <b>Research (CCR), IQAC & Autonomous Examinations</b><br><br>• <b>Centre for Coordination of Research (CCR):</b><br>  - Established in 2018 to promote funded research, patents, and academic consultancy.<br>  - <b>UGC STRIDE Grant:</b> Sanctioned <b>Rs. 53,00,000/-</b> for Research Capacity Building & HRD, alongside multiple UGC Minor Research Projects.<br>  - <b>Research & Ethics Advisory Committee:</b> Coordinated by <b>Dr. Mrunalini B. R.</b><br>• <b>Internal Quality Assurance Cell (IQAC):</b><br>  - Established on <b>01.06.2001</b>; Chaired by Principal <b>Dr. R. Suchithra</b> and Coordinated by <b>Dr. Sharada T.</b><br>• <b>Office of the Controller of Examinations (COE):</b><br>  - Led by <b>Mrs. Shilpa P.</b> (<code>coe.nmkrv@rvei.edu.in</code>, <code>080-69018999</code>).<br>  - Conducts Continuous Internal Assessment (CIA), Mid-Semester (MSE), End-Semester (ESE) with barcode/QR confidentiality, digital evaluation, and Fast-Track VI Semester exams.",
    "id": "research_iqac_exams",
    "pageUrl": "https://nmkrv.edu.in/iqac/",
    "buttons": [
      {
        "text": "🌐 Research & CCR Page",
        "url": "https://nmkrv.edu.in/research/"
      },
      {
        "text": "🌐 Funded Research Projects",
        "url": "https://nmkrv.edu.in/projects/"
      },
      {
        "text": "🌐 IQAC Portal & Policies",
        "url": "https://nmkrv.edu.in/iqac/"
      },
      {
        "text": "🌐 Controller of Examinations (COE)",
        "url": "https://nmkrv.edu.in/examinations/"
      }
    ]
  },
  "prospectus_downloads": {
    "message": "📄 <b>Official Documents, Mandatory Disclosures & NIRF Reports</b><br>Download official regulatory disclosures, NIRF rankings, and institutional policy documents directly from <code>nmkrv.edu.in</code>:",
    "id": "prospectus_downloads",
    "pageUrl": "https://nmkrv.edu.in/nirf/",
    "buttons": [
      {
        "text": "📥 AICTE Mandatory Disclosure (PDF)",
        "url": "https://nmkrv.edu.in/wp-content/uploads/2026/03/mandatory-disclosure-final-1-1-1.pdf"
      },
      {
        "text": "📥 NIRF College Report 2024–25 (PDF)",
        "url": "https://nmkrv.edu.in/wp-content/uploads/2025/02/NIRF-24-25-COLLEGE.pdf"
      },
      {
        "text": "📥 NIRF Overall Report 2024–25 (PDF)",
        "url": "https://nmkrv.edu.in/wp-content/uploads/2025/02/NMKRV-24-25-Overall.pdf"
      },
      {
        "text": "📥 BCA Syllabus 2025–26 (PDF)",
        "url": "https://nmkrv.edu.in/wp-content/uploads/2026/04/BCA_Syllabus_2025_26-2.pdf"
      },
      {
        "text": "📥 B.Sc Chemistry Syllabus (PDF)",
        "url": "https://nmkrv.edu.in/wp-content/uploads/2026/04/B.Sc-Chemistry-syllabus-I-VI-sem-1.pdf"
      },
      {
        "text": "🌐 All NIRF Reports Page",
        "url": "https://nmkrv.edu.in/nirf/"
      },
      {
        "text": "🌐 AQAR & NAAC Reports",
        "url": "https://nmkrv.edu.in/aqar/"
      }
    ]
  },
  "campus_navigation": {
    "message": "📍 <b>NMKRV College — Campus Location & How to Reach</b><br><br>• <b>Official Address:</b><br>  <b>NMKRV College (Autonomous)</b><br>  45/1, 22nd Cross, Jayanagar 3rd Block,<br>  Bengaluru – 560011, Karnataka, India<br><br>• <b>Connectivity & Landmarks:</b><br>  - <b>Nearest Metro Station:</b> Jayanagar Metro Station (Green Line) — walking distance (~600m) in Jayanagar 3rd Block<br>  - <b>Nearest Bus Hub:</b> Jayanagar 4th Block TTMC Bus Stand<br>  - <b>City Railway Station:</b> 6.9 km | <b>Kempegowda International Airport:</b> 38.5 km<br>  - <b>Barrier-Free Campus:</b> Equipped with 1.5m wheelchair ramps, passenger lifts, tactile/accessible restrooms, and reserved parking.",
    "id": "campus_navigation",
    "pageUrl": "https://nmkrv.edu.in/contact-us/",
    "buttons": [
      {
        "text": "🗺️ Open in Google Maps",
        "url": "https://www.google.com/maps/search/?api=1&query=NMKRV+College+Jayanagar+3rd+Block+Bengaluru"
      },
      {
        "text": "📞 Contact College Office",
        "action": "flow:contact"
      }
    ]
  },
  "contact": {
    "message": "📞 <b>Contact NMKRV College, Jayanagar</b><br><br>• <b>📍 Address:</b> 45/1, 22nd Cross, Jayanagar 3rd Block, Bengaluru - 560011, Karnataka<br>• <b>☎️ College Office & Admissions:</b> <code>080-69018900</code> / <code>080-69018901</code> / <code>080-69018904</code><br>• <b>☎️ Controller of Examinations (COE):</b> <code>080-69018999</code> (Visiting Hours: 2:00 PM – 4:00 PM, Mon–Fri)<br>• <b>💼 Placements (DISHA Cell):</b> <code>+91 83100 63697</code> (Ms. Chaitra V. C.)<br>• <b>📧 Official Emails:</b><br>  - General / Office: <code>nmkrv@rvei.edu.in</code> | <code>contact@nmkrv.rvei.edu.in</code><br>  - Principal: <code>principal.nmkrv@rvei.edu.in</code><br>  - Examinations: <code>coe.nmkrv@rvei.edu.in</code><br>  - Placements: <code>placement.nmkrv@rvei.edu.in</code><br>• <b>🕒 Office Hours:</b> Mon–Fri: 9:30 AM – 4:30 PM | Saturday: 9:30 AM – 2:00 PM",
    "id": "contact",
    "pageUrl": "https://nmkrv.edu.in/contact-us/",
    "buttons": [
      {
        "text": "🗺️ Open Google Maps",
        "url": "https://www.google.com/maps/search/?api=1&query=NMKRV+College+Jayanagar+3rd+Block+Bengaluru"
      },
      {
        "text": "🌐 Official Contact Us Page",
        "url": "https://nmkrv.edu.in/contact-us/"
      }
    ]
  },
  "faculty_leadership": {
    "id": "faculty_leadership",
    "pageUrl": "https://nmkrv.edu.in/board-of-management/",
    "message": "<div class=\"ssmrv-flow-heading\">🏛️ Institutional Leadership &amp; Governance</div><div class=\"ssmrv-flow-subheading\">Board of Management (RSST), Governing Body, Principal, COE &amp; IQAC Leadership — Select <b>View Full Profile</b> or <b>Visit Website Page ↗</b> on any card below:</div><div class=\"ssmrv-dept-profile-list\"><div class=\"ssmrv-dept-profile-item\" data-profile-id=\"dr-m-p-shyam\" title=\"Click to view full profile of Dr. M.P. Shyam\"><div class=\"ssmrv-dept-prof-header\"><span class=\"ssmrv-dept-prof-name\">Dr. M.P. Shyam</span></div><div class=\"ssmrv-faculty-badges\"><span class=\"ssmrv-badge-desig\">President — RSST / RVEI</span><span class=\"ssmrv-badge-dept\">Board of Management (RSST)</span></div><div class=\"ssmrv-dept-prof-actions\"><span class=\"ssmrv-dept-prof-cta\">👤 View Full Profile</span><a href=\"https://nmkrv.edu.in/board-of-management/\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"ssmrv-dept-visit-btn\" onclick=\"event.stopPropagation();\">🌐 Visit Website Page ↗</a></div><div class=\"ssmrv-dept-prof-meta\"><div class=\"ssmrv-dept-prof-row\"><strong>Qualifications:</strong> Industrialist &amp; Educational Philanthropist</div><div class=\"ssmrv-dept-prof-row\"><strong>Experience:</strong> President, Rashtreeya Sikshana Samithi Trust (RSST / RV Educational Institutions)</div><div class=\"ssmrv-dept-prof-row\"><strong>Expertise:</strong> Institutional Governance, Strategic Vision &amp; Educational Philanthropy</div><div class=\"ssmrv-dept-prof-row ssmrv-dept-prof-comm\"><strong>Role:</strong> President — RSST / RVEI Board of Management</div></div></div><div class=\"ssmrv-dept-profile-item\" data-profile-id=\"dr-a-c-chandrashekar-raju\" title=\"Click to view full profile of Dr. A.C. Chandrashekar Raju\"><div class=\"ssmrv-dept-prof-header\"><span class=\"ssmrv-dept-prof-name\">Dr. A.C. Chandrashekar Raju</span></div><div class=\"ssmrv-faculty-badges\"><span class=\"ssmrv-badge-desig\">Vice President — RSST / RVEI</span><span class=\"ssmrv-badge-dept\">Board of Management (RSST)</span></div><div class=\"ssmrv-dept-prof-actions\"><span class=\"ssmrv-dept-prof-cta\">👤 View Full Profile</span><a href=\"https://nmkrv.edu.in/board-of-management/\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"ssmrv-dept-visit-btn\" onclick=\"event.stopPropagation();\">🌐 Visit Website Page ↗</a></div><div class=\"ssmrv-dept-prof-meta\"><div class=\"ssmrv-dept-prof-row\"><strong>Qualifications:</strong> Trustee &amp; Vice President, RSST</div><div class=\"ssmrv-dept-prof-row\"><strong>Experience:</strong> Board of Management, RV Educational Institutions</div><div class=\"ssmrv-dept-prof-row\"><strong>Expertise:</strong> Higher Education Governance &amp; Institutional Development</div><div class=\"ssmrv-dept-prof-row ssmrv-dept-prof-comm\"><strong>Role:</strong> Vice President — RSST / RVEI</div></div></div><div class=\"ssmrv-dept-profile-item\" data-profile-id=\"dr-c-vinod-hayagriv\" title=\"Click to view full profile of Dr. C. Vinod Hayagriv\"><div class=\"ssmrv-dept-prof-header\"><span class=\"ssmrv-dept-prof-name\">Dr. C. Vinod Hayagriv</span></div><div class=\"ssmrv-faculty-badges\"><span class=\"ssmrv-badge-desig\">Vice President — RSST / RVEI</span><span class=\"ssmrv-badge-dept\">Board of Management (RSST)</span></div><div class=\"ssmrv-dept-prof-actions\"><span class=\"ssmrv-dept-prof-cta\">👤 View Full Profile</span><a href=\"https://nmkrv.edu.in/board-of-management/\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"ssmrv-dept-visit-btn\" onclick=\"event.stopPropagation();\">🌐 Visit Website Page ↗</a></div><div class=\"ssmrv-dept-prof-meta\"><div class=\"ssmrv-dept-prof-row\"><strong>Qualifications:</strong> Managing Director &amp; Director, C. Krishniah Chetty Group | Ph.D. (Hon.)</div><div class=\"ssmrv-dept-prof-row\"><strong>Experience:</strong> Vice President, Rashtreeya Sikshana Samithi Trust (RSST)</div><div class=\"ssmrv-dept-prof-row\"><strong>Expertise:</strong> Corporate Governance, Heritage Enterprise &amp; Educational Stewardship</div><div class=\"ssmrv-dept-prof-row ssmrv-dept-prof-comm\"><strong>Role:</strong> Vice President — RSST / RVEI</div></div></div><div class=\"ssmrv-dept-profile-item\" data-profile-id=\"dr-a-v-s-murthy\" title=\"Click to view full profile of Dr.(h.c.) A.V.S. Murthy\"><div class=\"ssmrv-dept-prof-header\"><span class=\"ssmrv-dept-prof-name\">Dr.(h.c.) A.V.S. Murthy</span></div><div class=\"ssmrv-faculty-badges\"><span class=\"ssmrv-badge-desig\">Hon. Secretary — RSST / RVEI</span><span class=\"ssmrv-badge-dept\">Board of Management (RSST)</span></div><div class=\"ssmrv-dept-prof-actions\"><span class=\"ssmrv-dept-prof-cta\">👤 View Full Profile</span><a href=\"https://nmkrv.edu.in/board-of-management/\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"ssmrv-dept-visit-btn\" onclick=\"event.stopPropagation();\">🌐 Visit Website Page ↗</a></div><div class=\"ssmrv-dept-prof-meta\"><div class=\"ssmrv-dept-prof-row\"><strong>Qualifications:</strong> Doctorate (Honoris Causa) | Educational Administrator</div><div class=\"ssmrv-dept-prof-row\"><strong>Experience:</strong> Decades of Educational Administration across RV Educational Institutions</div><div class=\"ssmrv-dept-prof-row\"><strong>Expertise:</strong> Educational Policy, Institutional Administration &amp; Trust Management</div><div class=\"ssmrv-dept-prof-row ssmrv-dept-prof-comm\"><strong>Role:</strong> Hon. Secretary — RSST / RVEI | Governing Body &amp; Academic Council Member</div></div></div><div class=\"ssmrv-dept-profile-item\" data-profile-id=\"mr-d-p-nagaraj\" title=\"Click to view full profile of Mr. D.P. Nagaraj\"><div class=\"ssmrv-dept-prof-header\"><span class=\"ssmrv-dept-prof-name\">Mr. D.P. Nagaraj</span></div><div class=\"ssmrv-faculty-badges\"><span class=\"ssmrv-badge-desig\">Hon. Joint Secretary — RSST / RVEI</span><span class=\"ssmrv-badge-dept\">Board of Management (RSST)</span></div><div class=\"ssmrv-dept-prof-actions\"><span class=\"ssmrv-dept-prof-cta\">👤 View Full Profile</span><a href=\"https://nmkrv.edu.in/board-of-management/\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"ssmrv-dept-visit-btn\" onclick=\"event.stopPropagation();\">🌐 Visit Website Page ↗</a></div><div class=\"ssmrv-dept-prof-meta\"><div class=\"ssmrv-dept-prof-row\"><strong>Qualifications:</strong> Educational Administrator &amp; Trustee</div><div class=\"ssmrv-dept-prof-row\"><strong>Experience:</strong> Honorary Joint Secretary, Rashtreeya Sikshana Samithi Trust (RSST)</div><div class=\"ssmrv-dept-prof-row\"><strong>Expertise:</strong> Institutional Development, Infrastructure &amp; Academic Operations</div><div class=\"ssmrv-dept-prof-row ssmrv-dept-prof-comm\"><strong>Role:</strong> Hon. Joint Secretary — RSST / RVEI | Governing Body Member</div></div></div><div class=\"ssmrv-dept-profile-item\" data-profile-id=\"mr-p-s-venkatesh-babu\" title=\"Click to view full profile of Mr. P.S. Venkatesh Babu\"><div class=\"ssmrv-dept-prof-header\"><span class=\"ssmrv-dept-prof-name\">Mr. P.S. Venkatesh Babu</span></div><div class=\"ssmrv-faculty-badges\"><span class=\"ssmrv-badge-desig\">Hon. Treasurer — RSST / RVEI</span><span class=\"ssmrv-badge-dept\">Board of Management (RSST)</span></div><div class=\"ssmrv-dept-prof-actions\"><span class=\"ssmrv-dept-prof-cta\">👤 View Full Profile</span><a href=\"https://nmkrv.edu.in/board-of-management/\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"ssmrv-dept-visit-btn\" onclick=\"event.stopPropagation();\">🌐 Visit Website Page ↗</a></div><div class=\"ssmrv-dept-prof-meta\"><div class=\"ssmrv-dept-prof-row\"><strong>Qualifications:</strong> Financial Governance &amp; Trust Management</div><div class=\"ssmrv-dept-prof-row\"><strong>Experience:</strong> Honorary Treasurer, Rashtreeya Sikshana Samithi Trust (RSST)</div><div class=\"ssmrv-dept-prof-row\"><strong>Expertise:</strong> Financial Stewardship, Institutional Audits &amp; Resource Allocation</div><div class=\"ssmrv-dept-prof-row ssmrv-dept-prof-comm\"><strong>Role:</strong> Hon. Treasurer — RSST / RVEI | Governing Body Member</div></div></div><div class=\"ssmrv-dept-profile-item\" data-profile-id=\"mr-nikhil-a-murthy\" title=\"Click to view full profile of Mr. Nikhil A. Murthy\"><div class=\"ssmrv-dept-prof-header\"><span class=\"ssmrv-dept-prof-name\">Mr. Nikhil A. Murthy</span></div><div class=\"ssmrv-faculty-badges\"><span class=\"ssmrv-badge-desig\">Assistant Secretary — RSST / RVEI</span><span class=\"ssmrv-badge-dept\">Board of Management (RSST)</span></div><div class=\"ssmrv-dept-prof-actions\"><span class=\"ssmrv-dept-prof-cta\">👤 View Full Profile</span><a href=\"https://nmkrv.edu.in/board-of-management/\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"ssmrv-dept-visit-btn\" onclick=\"event.stopPropagation();\">🌐 Visit Website Page ↗</a></div><div class=\"ssmrv-dept-prof-meta\"><div class=\"ssmrv-dept-prof-row\"><strong>Qualifications:</strong> Educational Administration &amp; Operations</div><div class=\"ssmrv-dept-prof-row\"><strong>Experience:</strong> Assistant Secretary, Rashtreeya Sikshana Samithi Trust (RVEI)</div><div class=\"ssmrv-dept-prof-row\"><strong>Expertise:</strong> Modern Campus Operations, Digital Transformation &amp; Youth Initiatives</div><div class=\"ssmrv-dept-prof-row ssmrv-dept-prof-comm\"><strong>Role:</strong> Assistant Secretary — RSST / RVEI | Governing Body Member</div></div></div><div class=\"ssmrv-dept-profile-item\" data-profile-id=\"ms-maya-chandra\" title=\"Click to view full profile of Ms. Maya Chandra\"><div class=\"ssmrv-dept-prof-header\"><span class=\"ssmrv-dept-prof-name\">Ms. Maya Chandra</span></div><div class=\"ssmrv-faculty-badges\"><span class=\"ssmrv-badge-desig\">Chairperson — Governing Body</span><span class=\"ssmrv-badge-dept\">Governing Body (NMKRV College)</span></div><div class=\"ssmrv-dept-prof-actions\"><span class=\"ssmrv-dept-prof-cta\">👤 View Full Profile</span><a href=\"https://nmkrv.edu.in/board-of-management/\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"ssmrv-dept-visit-btn\" onclick=\"event.stopPropagation();\">🌐 Visit Website Page ↗</a></div><div class=\"ssmrv-dept-prof-meta\"><div class=\"ssmrv-dept-prof-row\"><strong>Qualifications:</strong> Trustee, RSS Trust | Filmmaker &amp; Media Entrepreneur</div><div class=\"ssmrv-dept-prof-row\"><strong>Experience:</strong> Chairperson, Governing Body of NMKRV College &amp; Trustee, RSST</div><div class=\"ssmrv-dept-prof-row\"><strong>Expertise:</strong> Institutional Leadership, Media Communication, Women Empowerment &amp; Inclusive Education</div><div class=\"ssmrv-dept-prof-row ssmrv-dept-prof-comm\"><strong>Role:</strong> Chairperson — Governing Body | Trustee — RSS Trust | IQAC Member</div></div></div><div class=\"ssmrv-dept-profile-item\" data-profile-id=\"sri-k-s-akhilesh-babu\" title=\"Click to view full profile of Sri. K.S. Akhilesh Babu\"><div class=\"ssmrv-dept-prof-header\"><span class=\"ssmrv-dept-prof-name\">Sri. K.S. Akhilesh Babu</span></div><div class=\"ssmrv-faculty-badges\"><span class=\"ssmrv-badge-desig\">Trustee — RSS Trust</span><span class=\"ssmrv-badge-dept\">Governing Body (NMKRV College)</span></div><div class=\"ssmrv-dept-prof-actions\"><span class=\"ssmrv-dept-prof-cta\">👤 View Full Profile</span><a href=\"https://nmkrv.edu.in/board-of-management/\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"ssmrv-dept-visit-btn\" onclick=\"event.stopPropagation();\">🌐 Visit Website Page ↗</a></div><div class=\"ssmrv-dept-prof-meta\"><div class=\"ssmrv-dept-prof-row\"><strong>Qualifications:</strong> Trustee, Rashtreeya Sikshana Samithi Trust</div><div class=\"ssmrv-dept-prof-row\"><strong>Experience:</strong> Member-Trustee, Governing Body of NMKRV College</div><div class=\"ssmrv-dept-prof-row\"><strong>Expertise:</strong> Institutional Governance &amp; Trust Oversight</div><div class=\"ssmrv-dept-prof-row ssmrv-dept-prof-comm\"><strong>Role:</strong> Governing Body Member — NMKRV College</div></div></div><div class=\"ssmrv-dept-profile-item\" data-profile-id=\"wg-cdr-shivanand\" title=\"Click to view full profile of Wg. Cdr. Shivanand\"><div class=\"ssmrv-dept-prof-header\"><span class=\"ssmrv-dept-prof-name\">Wg. Cdr. Shivanand</span></div><div class=\"ssmrv-faculty-badges\"><span class=\"ssmrv-badge-desig\">NMKRV Campus Director</span><span class=\"ssmrv-badge-dept\">Institutional Leadership</span></div><div class=\"ssmrv-dept-prof-actions\"><span class=\"ssmrv-dept-prof-cta\">👤 View Full Profile</span><a href=\"https://nmkrv.edu.in/board-of-management/\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"ssmrv-dept-visit-btn\" onclick=\"event.stopPropagation();\">🌐 Visit Website Page ↗</a></div><div class=\"ssmrv-dept-prof-meta\"><div class=\"ssmrv-dept-prof-row\"><strong>Qualifications:</strong> Wing Commander (Retd.) | Campus Administration</div><div class=\"ssmrv-dept-prof-row\"><strong>Experience:</strong> NMKRV Campus Director &amp; Member of Governing Body</div><div class=\"ssmrv-dept-prof-row\"><strong>Expertise:</strong> Campus Operations, Infrastructure Management, Security &amp; Administration</div><div class=\"ssmrv-dept-prof-row ssmrv-dept-prof-comm\"><strong>Role:</strong> NMKRV Campus Director | Governing Body Member</div></div></div><div class=\"ssmrv-dept-profile-item\" data-profile-id=\"sri-syed-shahameer\" title=\"Click to view full profile of Sri. Syed Shahameer\"><div class=\"ssmrv-dept-prof-header\"><span class=\"ssmrv-dept-prof-name\">Sri. Syed Shahameer</span></div><div class=\"ssmrv-faculty-badges\"><span class=\"ssmrv-badge-desig\">Registrar — RSS Trust</span><span class=\"ssmrv-badge-dept\">Governing Body (NMKRV College)</span></div><div class=\"ssmrv-dept-prof-actions\"><span class=\"ssmrv-dept-prof-cta\">👤 View Full Profile</span><a href=\"https://nmkrv.edu.in/board-of-management/\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"ssmrv-dept-visit-btn\" onclick=\"event.stopPropagation();\">🌐 Visit Website Page ↗</a></div><div class=\"ssmrv-dept-prof-meta\"><div class=\"ssmrv-dept-prof-row\"><strong>Qualifications:</strong> Registrar, Rashtreeya Sikshana Samithi Trust</div><div class=\"ssmrv-dept-prof-row\"><strong>Experience:</strong> Special Invitee, Governing Body of NMKRV College</div><div class=\"ssmrv-dept-prof-row\"><strong>Expertise:</strong> Academic Compliance, Trust Administration &amp; Regulatory Affairs</div><div class=\"ssmrv-dept-prof-row ssmrv-dept-prof-comm\"><strong>Role:</strong> Registrar — RSS Trust | Governing Body Special Invitee</div></div></div><div class=\"ssmrv-dept-profile-item\" data-profile-id=\"dr-r-suchithra\" title=\"Click to view full profile of Dr. R. Suchithra\"><div class=\"ssmrv-dept-prof-header\"><span class=\"ssmrv-dept-prof-name\">Dr. R. Suchithra</span></div><div class=\"ssmrv-faculty-badges\"><span class=\"ssmrv-badge-desig\">Principal — NMKRV College</span><span class=\"ssmrv-badge-dept\">Institutional Leadership</span></div><div class=\"ssmrv-dept-prof-actions\"><span class=\"ssmrv-dept-prof-cta\">👤 View Full Profile</span><a href=\"https://nmkrv.edu.in/about-principal-message/\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"ssmrv-dept-visit-btn\" onclick=\"event.stopPropagation();\">🌐 Visit Website Page ↗</a></div><div class=\"ssmrv-dept-prof-meta\"><div class=\"ssmrv-dept-prof-row\"><strong>Qualifications:</strong> MCA, Ph.D.</div><div class=\"ssmrv-dept-prof-row\"><strong>Experience:</strong> 23+ Years Teaching Experience &amp; 10 Years Research Experience</div><div class=\"ssmrv-dept-prof-row\"><strong>Expertise:</strong> Cloud Computing, Java Programming, User Interface Design</div><div class=\"ssmrv-dept-prof-row ssmrv-dept-prof-comm\"><strong>Role:</strong> Principal — NMKRV College | Chairperson — Academic Council, IQAC, Anti-Ragging Cell &amp; ICC</div></div></div><div class=\"ssmrv-dept-profile-item\" data-profile-id=\"ms-shilpa-p\" title=\"Click to view full profile of Mrs. Shilpa P.\"><div class=\"ssmrv-dept-prof-header\"><span class=\"ssmrv-dept-prof-name\">Mrs. Shilpa P.</span></div><div class=\"ssmrv-faculty-badges\"><span class=\"ssmrv-badge-desig\">Controller of Examinations (COE) &amp; Assistant Professor</span><span class=\"ssmrv-badge-dept\">Office of the Controller of Examinations / Chemistry</span></div><div class=\"ssmrv-dept-prof-actions\"><span class=\"ssmrv-dept-prof-cta\">👤 View Full Profile</span><a href=\"https://nmkrv.edu.in/examinations/\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"ssmrv-dept-visit-btn\" onclick=\"event.stopPropagation();\">🌐 Visit Website Page ↗</a></div><div class=\"ssmrv-dept-prof-meta\"><div class=\"ssmrv-dept-prof-row\"><strong>Qualifications:</strong> M.Sc., M.Phil., (Ph.D.)</div><div class=\"ssmrv-dept-prof-row\"><strong>Experience:</strong> Controller of Examinations &amp; Senior Faculty in Chemistry</div><div class=\"ssmrv-dept-prof-row\"><strong>Expertise:</strong> Autonomous Examination Governance, Evaluation Systems &amp; Chemical Sciences</div><div class=\"ssmrv-dept-prof-row ssmrv-dept-prof-comm\"><strong>Role:</strong> Controller of Examinations (COE) | Academic Council Member</div></div></div><div class=\"ssmrv-dept-profile-item\" data-profile-id=\"mrs-suman-prasad\" title=\"Click to view full profile of Mrs. Suman Prasad\"><div class=\"ssmrv-dept-prof-header\"><span class=\"ssmrv-dept-prof-name\">Mrs. Suman Prasad</span></div><div class=\"ssmrv-faculty-badges\"><span class=\"ssmrv-badge-desig\">Academic Coordinator &amp; Associate Professor</span><span class=\"ssmrv-badge-dept\">Institutional Leadership / Biotechnology</span></div><div class=\"ssmrv-dept-prof-actions\"><span class=\"ssmrv-dept-prof-cta\">👤 View Full Profile</span><a href=\"https://nmkrv.edu.in/iqac/\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"ssmrv-dept-visit-btn\" onclick=\"event.stopPropagation();\">🌐 Visit Website Page ↗</a></div><div class=\"ssmrv-dept-prof-meta\"><div class=\"ssmrv-dept-prof-row\"><strong>Qualifications:</strong> M.Sc. Biotechnology</div><div class=\"ssmrv-dept-prof-row\"><strong>Experience:</strong> Academic Coordinator &amp; Senior Faculty in Biotechnology</div><div class=\"ssmrv-dept-prof-row\"><strong>Expertise:</strong> Biotechnology, Enzymology, Curriculum Design &amp; Academic Quality Assurance</div><div class=\"ssmrv-dept-prof-row ssmrv-dept-prof-comm\"><strong>Role:</strong> Academic Coordinator — NMKRV College | IQAC Member | UBA Advisory Committee</div></div></div><div class=\"ssmrv-dept-profile-item\" data-profile-id=\"dr-sharada-t\" title=\"Click to view full profile of Dr. Sharada T.\"><div class=\"ssmrv-dept-prof-header\"><span class=\"ssmrv-dept-prof-name\">Dr. Sharada T.</span></div><div class=\"ssmrv-faculty-badges\"><span class=\"ssmrv-badge-desig\">IQAC Coordinator &amp; Head of Department (Journalism)</span><span class=\"ssmrv-badge-dept\">Institutional Leadership / Journalism &amp; Mass Communication</span></div><div class=\"ssmrv-dept-prof-actions\"><span class=\"ssmrv-dept-prof-cta\">👤 View Full Profile</span><a href=\"https://nmkrv.edu.in/iqac/\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"ssmrv-dept-visit-btn\" onclick=\"event.stopPropagation();\">🌐 Visit Website Page ↗</a></div><div class=\"ssmrv-dept-prof-meta\"><div class=\"ssmrv-dept-prof-row\"><strong>Qualifications:</strong> M.S. Communication, Ph.D., NET</div><div class=\"ssmrv-dept-prof-row\"><strong>Experience:</strong> HoD &amp; PG Coordinator (Journalism) | IQAC Coordinator</div><div class=\"ssmrv-dept-prof-row\"><strong>Expertise:</strong> Journalism, Mass Communication, Media Research &amp; Institutional Quality Assurance</div><div class=\"ssmrv-dept-prof-row ssmrv-dept-prof-comm\"><strong>Role:</strong> IQAC Coordinator | Member-Secretary — Governing Body &amp; Academic Council | Coordinator — Literary Club</div></div></div></div>",
    "buttons": [
      {
        "text": "👤 Dr. M.P. Shyam",
        "action": "profile:dr-m-p-shyam"
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
        "text": "👤 Dr.(h.c.) A.V.S. Murthy",
        "action": "profile:dr-a-v-s-murthy"
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
        "text": "👤 Mr. Nikhil A. Murthy",
        "action": "profile:mr-nikhil-a-murthy"
      },
      {
        "text": "👤 Ms. Maya Chandra",
        "action": "profile:ms-maya-chandra"
      },
      {
        "text": "👤 Sri. K.S. Akhilesh Babu",
        "action": "profile:sri-k-s-akhilesh-babu"
      },
      {
        "text": "👤 Wg. Cdr. Shivanand",
        "action": "profile:wg-cdr-shivanand"
      },
      {
        "text": "👤 Sri. Syed Shahameer",
        "action": "profile:sri-syed-shahameer"
      },
      {
        "text": "👤 Dr. R. Suchithra",
        "action": "profile:dr-r-suchithra"
      },
      {
        "text": "👤 Mrs. Shilpa P.",
        "action": "profile:ms-shilpa-p"
      },
      {
        "text": "👤 Mrs. Suman Prasad",
        "action": "profile:mrs-suman-prasad"
      },
      {
        "text": "👤 Dr. Sharada T.",
        "action": "profile:dr-sharada-t"
      },
      {
        "text": "🌐 Visit Department Webpage ↗",
        "url": "https://nmkrv.edu.in/board-of-management/"
      },
      {
        "text": "👨‍🏫 All Faculty Departments",
        "action": "flow:faculty"
      }
    ]
  },
  "profile_dr-m-p-shyam": {
    "id": "profile_dr-m-p-shyam",
    "pageUrl": "https://nmkrv.edu.in/board-of-management/",
    "message": "<div class=\"ssmrv-faculty-card is-full-profile\"><div class=\"ssmrv-faculty-name\">Dr. M.P. Shyam</div><div class=\"ssmrv-faculty-badges\"><span class=\"ssmrv-badge-desig\">President — RSST / RVEI</span><span class=\"ssmrv-badge-dept\">Board of Management (RSST)</span></div><div class=\"ssmrv-fac-actions\"><a href=\"https://nmkrv.edu.in/board-of-management/\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"ssmrv-visit-website-btn\">🌐 Visit Official Website Page ↗</a></div><div class=\"ssmrv-faculty-meta\"><div class=\"ssmrv-fac-row\"><span class=\"ssmrv-fac-label\">🎓 Qualifications</span><span class=\"ssmrv-fac-val\">Industrialist &amp; Educational Philanthropist</span></div><div class=\"ssmrv-fac-row\"><span class=\"ssmrv-fac-label\">⏳ Experience</span><span class=\"ssmrv-fac-val\">President, Rashtreeya Sikshana Samithi Trust (RSST / RV Educational Institutions)</span></div><div class=\"ssmrv-fac-row\"><span class=\"ssmrv-fac-label\">🔬 Areas of Expertise</span><span class=\"ssmrv-fac-val\">Institutional Governance, Strategic Vision &amp; Educational Philanthropy</span></div><div class=\"ssmrv-fac-row\"><span class=\"ssmrv-fac-label\">🛡️ Committee / Role</span><span class=\"ssmrv-fac-val ssmrv-fac-role-val\">President — RSST / RVEI Board of Management</span></div><div class=\"ssmrv-fac-section\"><div class=\"ssmrv-fac-sec-title\">📖 Profile Overview</div><div class=\"ssmrv-fac-sec-text\">Dr. M.P. Shyam serves as the President of Rashtreeya Sikshana Samithi Trust (RSST), guiding over 20 premier RV Educational Institutions including NMKRV College towards global academic excellence.</div></div><div class=\"ssmrv-fac-section\"><div class=\"ssmrv-fac-sec-title\">🏆 Key Highlights</div><div class=\"ssmrv-fac-sec-text\">President of RSST managing RV Educational Institutions since 1940 legacy.</div></div><div class=\"ssmrv-fac-contact\"><div>📧 <a href=\"mailto:nmkrv@rvei.edu.in\">nmkrv@rvei.edu.in</a></div><div>📞 <a href=\"tel:08069018900\">080-69018900</a></div></div></div></div>",
    "buttons": [
      {
        "text": "🌐 Visit Official Website Page ↗",
        "url": "https://nmkrv.edu.in/board-of-management/",
        "isPrimary": true
      },
      {
        "text": "🏛️ 🏛️ Institutional Leadership & Governance",
        "action": "flow:faculty_leadership"
      },
      {
        "text": "👨‍🏫 All Faculty Departments",
        "action": "flow:faculty"
      }
    ]
  },
  "profile_dr-a-c-chandrashekar-raju": {
    "id": "profile_dr-a-c-chandrashekar-raju",
    "pageUrl": "https://nmkrv.edu.in/board-of-management/",
    "message": "<div class=\"ssmrv-faculty-card is-full-profile\"><div class=\"ssmrv-faculty-name\">Dr. A.C. Chandrashekar Raju</div><div class=\"ssmrv-faculty-badges\"><span class=\"ssmrv-badge-desig\">Vice President — RSST / RVEI</span><span class=\"ssmrv-badge-dept\">Board of Management (RSST)</span></div><div class=\"ssmrv-fac-actions\"><a href=\"https://nmkrv.edu.in/board-of-management/\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"ssmrv-visit-website-btn\">🌐 Visit Official Website Page ↗</a></div><div class=\"ssmrv-faculty-meta\"><div class=\"ssmrv-fac-row\"><span class=\"ssmrv-fac-label\">🎓 Qualifications</span><span class=\"ssmrv-fac-val\">Trustee &amp; Vice President, RSST</span></div><div class=\"ssmrv-fac-row\"><span class=\"ssmrv-fac-label\">⏳ Experience</span><span class=\"ssmrv-fac-val\">Board of Management, RV Educational Institutions</span></div><div class=\"ssmrv-fac-row\"><span class=\"ssmrv-fac-label\">🔬 Areas of Expertise</span><span class=\"ssmrv-fac-val\">Higher Education Governance &amp; Institutional Development</span></div><div class=\"ssmrv-fac-row\"><span class=\"ssmrv-fac-label\">🛡️ Committee / Role</span><span class=\"ssmrv-fac-val ssmrv-fac-role-val\">Vice President — RSST / RVEI</span></div><div class=\"ssmrv-fac-section\"><div class=\"ssmrv-fac-sec-title\">📖 Profile Overview</div><div class=\"ssmrv-fac-sec-text\">Dr. A.C. Chandrashekar Raju serves as Vice President of Rashtreeya Sikshana Samithi Trust (RVEI) on the Board of Management.</div></div><div class=\"ssmrv-fac-section\"><div class=\"ssmrv-fac-sec-title\">🏆 Key Highlights</div><div class=\"ssmrv-fac-sec-text\">Vice President, RSST / RVEI Board of Management.</div></div><div class=\"ssmrv-fac-contact\"><div>📧 <a href=\"mailto:nmkrv@rvei.edu.in\">nmkrv@rvei.edu.in</a></div><div>📞 <a href=\"tel:08069018900\">080-69018900</a></div></div></div></div>",
    "buttons": [
      {
        "text": "🌐 Visit Official Website Page ↗",
        "url": "https://nmkrv.edu.in/board-of-management/",
        "isPrimary": true
      },
      {
        "text": "🏛️ 🏛️ Institutional Leadership & Governance",
        "action": "flow:faculty_leadership"
      },
      {
        "text": "👨‍🏫 All Faculty Departments",
        "action": "flow:faculty"
      }
    ]
  },
  "profile_dr-c-vinod-hayagriv": {
    "id": "profile_dr-c-vinod-hayagriv",
    "pageUrl": "https://nmkrv.edu.in/board-of-management/",
    "message": "<div class=\"ssmrv-faculty-card is-full-profile\"><div class=\"ssmrv-faculty-name\">Dr. C. Vinod Hayagriv</div><div class=\"ssmrv-faculty-badges\"><span class=\"ssmrv-badge-desig\">Vice President — RSST / RVEI</span><span class=\"ssmrv-badge-dept\">Board of Management (RSST)</span></div><div class=\"ssmrv-fac-actions\"><a href=\"https://nmkrv.edu.in/board-of-management/\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"ssmrv-visit-website-btn\">🌐 Visit Official Website Page ↗</a></div><div class=\"ssmrv-faculty-meta\"><div class=\"ssmrv-fac-row\"><span class=\"ssmrv-fac-label\">🎓 Qualifications</span><span class=\"ssmrv-fac-val\">Managing Director &amp; Director, C. Krishniah Chetty Group | Ph.D. (Hon.)</span></div><div class=\"ssmrv-fac-row\"><span class=\"ssmrv-fac-label\">⏳ Experience</span><span class=\"ssmrv-fac-val\">Vice President, Rashtreeya Sikshana Samithi Trust (RSST)</span></div><div class=\"ssmrv-fac-row\"><span class=\"ssmrv-fac-label\">🔬 Areas of Expertise</span><span class=\"ssmrv-fac-val\">Corporate Governance, Heritage Enterprise &amp; Educational Stewardship</span></div><div class=\"ssmrv-fac-row\"><span class=\"ssmrv-fac-label\">🛡️ Committee / Role</span><span class=\"ssmrv-fac-val ssmrv-fac-role-val\">Vice President — RSST / RVEI</span></div><div class=\"ssmrv-fac-section\"><div class=\"ssmrv-fac-sec-title\">📖 Profile Overview</div><div class=\"ssmrv-fac-sec-text\">Dr. C. Vinod Hayagriv serves as Vice President of RSST / RVEI, bringing decades of leadership in corporate governance and educational stewardship.</div></div><div class=\"ssmrv-fac-section\"><div class=\"ssmrv-fac-sec-title\">🏆 Key Highlights</div><div class=\"ssmrv-fac-sec-text\">Vice President, RSST / RVEI Board of Management.</div></div><div class=\"ssmrv-fac-contact\"><div>📧 <a href=\"mailto:nmkrv@rvei.edu.in\">nmkrv@rvei.edu.in</a></div><div>📞 <a href=\"tel:08069018900\">080-69018900</a></div></div></div></div>",
    "buttons": [
      {
        "text": "🌐 Visit Official Website Page ↗",
        "url": "https://nmkrv.edu.in/board-of-management/",
        "isPrimary": true
      },
      {
        "text": "🏛️ 🏛️ Institutional Leadership & Governance",
        "action": "flow:faculty_leadership"
      },
      {
        "text": "👨‍🏫 All Faculty Departments",
        "action": "flow:faculty"
      }
    ]
  },
  "profile_dr-a-v-s-murthy": {
    "id": "profile_dr-a-v-s-murthy",
    "pageUrl": "https://nmkrv.edu.in/board-of-management/",
    "message": "<div class=\"ssmrv-faculty-card is-full-profile\"><div class=\"ssmrv-faculty-name\">Dr.(h.c.) A.V.S. Murthy</div><div class=\"ssmrv-faculty-badges\"><span class=\"ssmrv-badge-desig\">Hon. Secretary — RSST / RVEI</span><span class=\"ssmrv-badge-dept\">Board of Management (RSST)</span></div><div class=\"ssmrv-fac-actions\"><a href=\"https://nmkrv.edu.in/board-of-management/\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"ssmrv-visit-website-btn\">🌐 Visit Official Website Page ↗</a></div><div class=\"ssmrv-faculty-meta\"><div class=\"ssmrv-fac-row\"><span class=\"ssmrv-fac-label\">🎓 Qualifications</span><span class=\"ssmrv-fac-val\">Doctorate (Honoris Causa) | Educational Administrator</span></div><div class=\"ssmrv-fac-row\"><span class=\"ssmrv-fac-label\">⏳ Experience</span><span class=\"ssmrv-fac-val\">Decades of Educational Administration across RV Educational Institutions</span></div><div class=\"ssmrv-fac-row\"><span class=\"ssmrv-fac-label\">🔬 Areas of Expertise</span><span class=\"ssmrv-fac-val\">Educational Policy, Institutional Administration &amp; Trust Management</span></div><div class=\"ssmrv-fac-row\"><span class=\"ssmrv-fac-label\">🛡️ Committee / Role</span><span class=\"ssmrv-fac-val ssmrv-fac-role-val\">Hon. Secretary — RSST / RVEI | Governing Body &amp; Academic Council Member</span></div><div class=\"ssmrv-fac-section\"><div class=\"ssmrv-fac-sec-title\">📖 Profile Overview</div><div class=\"ssmrv-fac-sec-text\">Dr.(h.c.) A.V.S. Murthy is the Honorary Secretary of Rashtreeya Sikshana Samithi Trust (RSST / RVEI) and serves on the Governing Body and Academic Council of NMKRV College.</div></div><div class=\"ssmrv-fac-section\"><div class=\"ssmrv-fac-sec-title\">🏆 Key Highlights</div><div class=\"ssmrv-fac-sec-text\">Hon. Secretary of RSST &amp; Member of Governing Body and Academic Council.</div></div><div class=\"ssmrv-fac-contact\"><div>📧 <a href=\"mailto:nmkrv@rvei.edu.in\">nmkrv@rvei.edu.in</a></div><div>📞 <a href=\"tel:08069018900\">080-69018900</a></div></div></div></div>",
    "buttons": [
      {
        "text": "🌐 Visit Official Website Page ↗",
        "url": "https://nmkrv.edu.in/board-of-management/",
        "isPrimary": true
      },
      {
        "text": "🏛️ 🏛️ Institutional Leadership & Governance",
        "action": "flow:faculty_leadership"
      },
      {
        "text": "👨‍🏫 All Faculty Departments",
        "action": "flow:faculty"
      }
    ]
  },
  "profile_mr-d-p-nagaraj": {
    "id": "profile_mr-d-p-nagaraj",
    "pageUrl": "https://nmkrv.edu.in/board-of-management/",
    "message": "<div class=\"ssmrv-faculty-card is-full-profile\"><div class=\"ssmrv-faculty-name\">Mr. D.P. Nagaraj</div><div class=\"ssmrv-faculty-badges\"><span class=\"ssmrv-badge-desig\">Hon. Joint Secretary — RSST / RVEI</span><span class=\"ssmrv-badge-dept\">Board of Management (RSST)</span></div><div class=\"ssmrv-fac-actions\"><a href=\"https://nmkrv.edu.in/board-of-management/\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"ssmrv-visit-website-btn\">🌐 Visit Official Website Page ↗</a></div><div class=\"ssmrv-faculty-meta\"><div class=\"ssmrv-fac-row\"><span class=\"ssmrv-fac-label\">🎓 Qualifications</span><span class=\"ssmrv-fac-val\">Educational Administrator &amp; Trustee</span></div><div class=\"ssmrv-fac-row\"><span class=\"ssmrv-fac-label\">⏳ Experience</span><span class=\"ssmrv-fac-val\">Honorary Joint Secretary, Rashtreeya Sikshana Samithi Trust (RSST)</span></div><div class=\"ssmrv-fac-row\"><span class=\"ssmrv-fac-label\">🔬 Areas of Expertise</span><span class=\"ssmrv-fac-val\">Institutional Development, Infrastructure &amp; Academic Operations</span></div><div class=\"ssmrv-fac-row\"><span class=\"ssmrv-fac-label\">🛡️ Committee / Role</span><span class=\"ssmrv-fac-val ssmrv-fac-role-val\">Hon. Joint Secretary — RSST / RVEI | Governing Body Member</span></div><div class=\"ssmrv-fac-section\"><div class=\"ssmrv-fac-sec-title\">📖 Profile Overview</div><div class=\"ssmrv-fac-sec-text\">Mr. D.P. Nagaraj serves as the Honorary Joint Secretary of RSST / RVEI and Member of the Governing Body of NMKRV College.</div></div><div class=\"ssmrv-fac-section\"><div class=\"ssmrv-fac-sec-title\">🏆 Key Highlights</div><div class=\"ssmrv-fac-sec-text\">Honorary Joint Secretary of RSST &amp; Governing Body Member.</div></div><div class=\"ssmrv-fac-contact\"><div>📧 <a href=\"mailto:nmkrv@rvei.edu.in\">nmkrv@rvei.edu.in</a></div><div>📞 <a href=\"tel:08069018900\">080-69018900</a></div></div></div></div>",
    "buttons": [
      {
        "text": "🌐 Visit Official Website Page ↗",
        "url": "https://nmkrv.edu.in/board-of-management/",
        "isPrimary": true
      },
      {
        "text": "🏛️ 🏛️ Institutional Leadership & Governance",
        "action": "flow:faculty_leadership"
      },
      {
        "text": "👨‍🏫 All Faculty Departments",
        "action": "flow:faculty"
      }
    ]
  },
  "profile_mr-p-s-venkatesh-babu": {
    "id": "profile_mr-p-s-venkatesh-babu",
    "pageUrl": "https://nmkrv.edu.in/board-of-management/",
    "message": "<div class=\"ssmrv-faculty-card is-full-profile\"><div class=\"ssmrv-faculty-name\">Mr. P.S. Venkatesh Babu</div><div class=\"ssmrv-faculty-badges\"><span class=\"ssmrv-badge-desig\">Hon. Treasurer — RSST / RVEI</span><span class=\"ssmrv-badge-dept\">Board of Management (RSST)</span></div><div class=\"ssmrv-fac-actions\"><a href=\"https://nmkrv.edu.in/board-of-management/\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"ssmrv-visit-website-btn\">🌐 Visit Official Website Page ↗</a></div><div class=\"ssmrv-faculty-meta\"><div class=\"ssmrv-fac-row\"><span class=\"ssmrv-fac-label\">🎓 Qualifications</span><span class=\"ssmrv-fac-val\">Financial Governance &amp; Trust Management</span></div><div class=\"ssmrv-fac-row\"><span class=\"ssmrv-fac-label\">⏳ Experience</span><span class=\"ssmrv-fac-val\">Honorary Treasurer, Rashtreeya Sikshana Samithi Trust (RSST)</span></div><div class=\"ssmrv-fac-row\"><span class=\"ssmrv-fac-label\">🔬 Areas of Expertise</span><span class=\"ssmrv-fac-val\">Financial Stewardship, Institutional Audits &amp; Resource Allocation</span></div><div class=\"ssmrv-fac-row\"><span class=\"ssmrv-fac-label\">🛡️ Committee / Role</span><span class=\"ssmrv-fac-val ssmrv-fac-role-val\">Hon. Treasurer — RSST / RVEI | Governing Body Member</span></div><div class=\"ssmrv-fac-section\"><div class=\"ssmrv-fac-sec-title\">📖 Profile Overview</div><div class=\"ssmrv-fac-sec-text\">Mr. P.S. Venkatesh Babu is the Honorary Treasurer of RSST / RVEI and serves as a Trustee Member on the Governing Body of NMKRV College.</div></div><div class=\"ssmrv-fac-section\"><div class=\"ssmrv-fac-sec-title\">🏆 Key Highlights</div><div class=\"ssmrv-fac-sec-text\">Honorary Treasurer of RSST &amp; Governing Body Member.</div></div><div class=\"ssmrv-fac-contact\"><div>📧 <a href=\"mailto:nmkrv@rvei.edu.in\">nmkrv@rvei.edu.in</a></div><div>📞 <a href=\"tel:08069018900\">080-69018900</a></div></div></div></div>",
    "buttons": [
      {
        "text": "🌐 Visit Official Website Page ↗",
        "url": "https://nmkrv.edu.in/board-of-management/",
        "isPrimary": true
      },
      {
        "text": "🏛️ 🏛️ Institutional Leadership & Governance",
        "action": "flow:faculty_leadership"
      },
      {
        "text": "👨‍🏫 All Faculty Departments",
        "action": "flow:faculty"
      }
    ]
  },
  "profile_mr-nikhil-a-murthy": {
    "id": "profile_mr-nikhil-a-murthy",
    "pageUrl": "https://nmkrv.edu.in/board-of-management/",
    "message": "<div class=\"ssmrv-faculty-card is-full-profile\"><div class=\"ssmrv-faculty-name\">Mr. Nikhil A. Murthy</div><div class=\"ssmrv-faculty-badges\"><span class=\"ssmrv-badge-desig\">Assistant Secretary — RSST / RVEI</span><span class=\"ssmrv-badge-dept\">Board of Management (RSST)</span></div><div class=\"ssmrv-fac-actions\"><a href=\"https://nmkrv.edu.in/board-of-management/\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"ssmrv-visit-website-btn\">🌐 Visit Official Website Page ↗</a></div><div class=\"ssmrv-faculty-meta\"><div class=\"ssmrv-fac-row\"><span class=\"ssmrv-fac-label\">🎓 Qualifications</span><span class=\"ssmrv-fac-val\">Educational Administration &amp; Operations</span></div><div class=\"ssmrv-fac-row\"><span class=\"ssmrv-fac-label\">⏳ Experience</span><span class=\"ssmrv-fac-val\">Assistant Secretary, Rashtreeya Sikshana Samithi Trust (RVEI)</span></div><div class=\"ssmrv-fac-row\"><span class=\"ssmrv-fac-label\">🔬 Areas of Expertise</span><span class=\"ssmrv-fac-val\">Modern Campus Operations, Digital Transformation &amp; Youth Initiatives</span></div><div class=\"ssmrv-fac-row\"><span class=\"ssmrv-fac-label\">🛡️ Committee / Role</span><span class=\"ssmrv-fac-val ssmrv-fac-role-val\">Assistant Secretary — RSST / RVEI | Governing Body Member</span></div><div class=\"ssmrv-fac-section\"><div class=\"ssmrv-fac-sec-title\">📖 Profile Overview</div><div class=\"ssmrv-fac-sec-text\">Mr. Nikhil A. Murthy serves as Assistant Secretary of RSST / RVEI and Member of the Governing Body of NMKRV College.</div></div><div class=\"ssmrv-fac-section\"><div class=\"ssmrv-fac-sec-title\">🏆 Key Highlights</div><div class=\"ssmrv-fac-sec-text\">Assistant Secretary, RVEI Board of Management &amp; Governing Body Member.</div></div><div class=\"ssmrv-fac-contact\"><div>📧 <a href=\"mailto:nmkrv@rvei.edu.in\">nmkrv@rvei.edu.in</a></div><div>📞 <a href=\"tel:08069018900\">080-69018900</a></div></div></div></div>",
    "buttons": [
      {
        "text": "🌐 Visit Official Website Page ↗",
        "url": "https://nmkrv.edu.in/board-of-management/",
        "isPrimary": true
      },
      {
        "text": "🏛️ 🏛️ Institutional Leadership & Governance",
        "action": "flow:faculty_leadership"
      },
      {
        "text": "👨‍🏫 All Faculty Departments",
        "action": "flow:faculty"
      }
    ]
  },
  "profile_ms-maya-chandra": {
    "id": "profile_ms-maya-chandra",
    "pageUrl": "https://nmkrv.edu.in/board-of-management/",
    "message": "<div class=\"ssmrv-faculty-card is-full-profile\"><div class=\"ssmrv-faculty-name\">Ms. Maya Chandra</div><div class=\"ssmrv-faculty-badges\"><span class=\"ssmrv-badge-desig\">Chairperson — Governing Body</span><span class=\"ssmrv-badge-dept\">Governing Body (NMKRV College)</span></div><div class=\"ssmrv-fac-actions\"><a href=\"https://nmkrv.edu.in/board-of-management/\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"ssmrv-visit-website-btn\">🌐 Visit Official Website Page ↗</a></div><div class=\"ssmrv-faculty-meta\"><div class=\"ssmrv-fac-row\"><span class=\"ssmrv-fac-label\">🎓 Qualifications</span><span class=\"ssmrv-fac-val\">Trustee, RSS Trust | Filmmaker &amp; Media Entrepreneur</span></div><div class=\"ssmrv-fac-row\"><span class=\"ssmrv-fac-label\">⏳ Experience</span><span class=\"ssmrv-fac-val\">Chairperson, Governing Body of NMKRV College &amp; Trustee, RSST</span></div><div class=\"ssmrv-fac-row\"><span class=\"ssmrv-fac-label\">🔬 Areas of Expertise</span><span class=\"ssmrv-fac-val\">Institutional Leadership, Media Communication, Women Empowerment &amp; Inclusive Education</span></div><div class=\"ssmrv-fac-row\"><span class=\"ssmrv-fac-label\">🛡️ Committee / Role</span><span class=\"ssmrv-fac-val ssmrv-fac-role-val\">Chairperson — Governing Body | Trustee — RSS Trust | IQAC Member</span></div><div class=\"ssmrv-fac-section\"><div class=\"ssmrv-fac-sec-title\">📖 Profile Overview</div><div class=\"ssmrv-fac-sec-text\">Ms. Maya Chandra serves as the Chairperson of the Governing Body of NMKRV College and Trustee of Rashtreeya Sikshana Samithi Trust (RSST), spearheading strategic initiatives, cultural vibrancy, and academic modernization.</div></div><div class=\"ssmrv-fac-section\"><div class=\"ssmrv-fac-sec-title\">🏆 Key Highlights</div><div class=\"ssmrv-fac-sec-text\">Chairperson, Governing Body of NMKRV College &amp; IQAC Member.</div></div><div class=\"ssmrv-fac-contact\"><div>📧 <a href=\"mailto:nmkrv@rvei.edu.in\">nmkrv@rvei.edu.in</a></div><div>📞 <a href=\"tel:08069018900\">080-69018900</a></div></div></div></div>",
    "buttons": [
      {
        "text": "🌐 Visit Official Website Page ↗",
        "url": "https://nmkrv.edu.in/board-of-management/",
        "isPrimary": true
      },
      {
        "text": "🏛️ 🏛️ Institutional Leadership & Governance",
        "action": "flow:faculty_leadership"
      },
      {
        "text": "👨‍🏫 All Faculty Departments",
        "action": "flow:faculty"
      }
    ]
  },
  "profile_sri-k-s-akhilesh-babu": {
    "id": "profile_sri-k-s-akhilesh-babu",
    "pageUrl": "https://nmkrv.edu.in/board-of-management/",
    "message": "<div class=\"ssmrv-faculty-card is-full-profile\"><div class=\"ssmrv-faculty-name\">Sri. K.S. Akhilesh Babu</div><div class=\"ssmrv-faculty-badges\"><span class=\"ssmrv-badge-desig\">Trustee — RSS Trust</span><span class=\"ssmrv-badge-dept\">Governing Body (NMKRV College)</span></div><div class=\"ssmrv-fac-actions\"><a href=\"https://nmkrv.edu.in/board-of-management/\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"ssmrv-visit-website-btn\">🌐 Visit Official Website Page ↗</a></div><div class=\"ssmrv-faculty-meta\"><div class=\"ssmrv-fac-row\"><span class=\"ssmrv-fac-label\">🎓 Qualifications</span><span class=\"ssmrv-fac-val\">Trustee, Rashtreeya Sikshana Samithi Trust</span></div><div class=\"ssmrv-fac-row\"><span class=\"ssmrv-fac-label\">⏳ Experience</span><span class=\"ssmrv-fac-val\">Member-Trustee, Governing Body of NMKRV College</span></div><div class=\"ssmrv-fac-row\"><span class=\"ssmrv-fac-label\">🔬 Areas of Expertise</span><span class=\"ssmrv-fac-val\">Institutional Governance &amp; Trust Oversight</span></div><div class=\"ssmrv-fac-row\"><span class=\"ssmrv-fac-label\">🛡️ Committee / Role</span><span class=\"ssmrv-fac-val ssmrv-fac-role-val\">Governing Body Member — NMKRV College</span></div><div class=\"ssmrv-fac-section\"><div class=\"ssmrv-fac-sec-title\">📖 Profile Overview</div><div class=\"ssmrv-fac-sec-text\">Sri. K.S. Akhilesh Babu is a Trustee of Rashtreeya Sikshana Samithi Trust (RSST) and serves as a Member of the Governing Body of NMKRV College.</div></div><div class=\"ssmrv-fac-section\"><div class=\"ssmrv-fac-sec-title\">🏆 Key Highlights</div><div class=\"ssmrv-fac-sec-text\">Member-Trustee, Governing Body of NMKRV College.</div></div><div class=\"ssmrv-fac-contact\"><div>📧 <a href=\"mailto:nmkrv@rvei.edu.in\">nmkrv@rvei.edu.in</a></div><div>📞 <a href=\"tel:08069018900\">080-69018900</a></div></div></div></div>",
    "buttons": [
      {
        "text": "🌐 Visit Official Website Page ↗",
        "url": "https://nmkrv.edu.in/board-of-management/",
        "isPrimary": true
      },
      {
        "text": "🏛️ 🏛️ Institutional Leadership & Governance",
        "action": "flow:faculty_leadership"
      },
      {
        "text": "👨‍🏫 All Faculty Departments",
        "action": "flow:faculty"
      }
    ]
  },
  "profile_wg-cdr-shivanand": {
    "id": "profile_wg-cdr-shivanand",
    "pageUrl": "https://nmkrv.edu.in/board-of-management/",
    "message": "<div class=\"ssmrv-faculty-card is-full-profile\"><div class=\"ssmrv-faculty-name\">Wg. Cdr. Shivanand</div><div class=\"ssmrv-faculty-badges\"><span class=\"ssmrv-badge-desig\">NMKRV Campus Director</span><span class=\"ssmrv-badge-dept\">Institutional Leadership</span></div><div class=\"ssmrv-fac-actions\"><a href=\"https://nmkrv.edu.in/board-of-management/\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"ssmrv-visit-website-btn\">🌐 Visit Official Website Page ↗</a></div><div class=\"ssmrv-faculty-meta\"><div class=\"ssmrv-fac-row\"><span class=\"ssmrv-fac-label\">🎓 Qualifications</span><span class=\"ssmrv-fac-val\">Wing Commander (Retd.) | Campus Administration</span></div><div class=\"ssmrv-fac-row\"><span class=\"ssmrv-fac-label\">⏳ Experience</span><span class=\"ssmrv-fac-val\">NMKRV Campus Director &amp; Member of Governing Body</span></div><div class=\"ssmrv-fac-row\"><span class=\"ssmrv-fac-label\">🔬 Areas of Expertise</span><span class=\"ssmrv-fac-val\">Campus Operations, Infrastructure Management, Security &amp; Administration</span></div><div class=\"ssmrv-fac-row\"><span class=\"ssmrv-fac-label\">🛡️ Committee / Role</span><span class=\"ssmrv-fac-val ssmrv-fac-role-val\">NMKRV Campus Director | Governing Body Member</span></div><div class=\"ssmrv-fac-section\"><div class=\"ssmrv-fac-sec-title\">📖 Profile Overview</div><div class=\"ssmrv-fac-sec-text\">Wg. Cdr. Shivanand serves as the NMKRV Campus Director and Member of the Governing Body, overseeing campus infrastructure, facilities, and operations.</div></div><div class=\"ssmrv-fac-section\"><div class=\"ssmrv-fac-sec-title\">🏆 Key Highlights</div><div class=\"ssmrv-fac-sec-text\">NMKRV Campus Director &amp; Governing Body Member.</div></div><div class=\"ssmrv-fac-contact\"><div>📧 <a href=\"mailto:nmkrv@rvei.edu.in\">nmkrv@rvei.edu.in</a></div><div>📞 <a href=\"tel:08069018900\">080-69018900</a></div></div></div></div>",
    "buttons": [
      {
        "text": "🌐 Visit Official Website Page ↗",
        "url": "https://nmkrv.edu.in/board-of-management/",
        "isPrimary": true
      },
      {
        "text": "🏛️ 🏛️ Institutional Leadership & Governance",
        "action": "flow:faculty_leadership"
      },
      {
        "text": "👨‍🏫 All Faculty Departments",
        "action": "flow:faculty"
      }
    ]
  },
  "profile_sri-syed-shahameer": {
    "id": "profile_sri-syed-shahameer",
    "pageUrl": "https://nmkrv.edu.in/board-of-management/",
    "message": "<div class=\"ssmrv-faculty-card is-full-profile\"><div class=\"ssmrv-faculty-name\">Sri. Syed Shahameer</div><div class=\"ssmrv-faculty-badges\"><span class=\"ssmrv-badge-desig\">Registrar — RSS Trust</span><span class=\"ssmrv-badge-dept\">Governing Body (NMKRV College)</span></div><div class=\"ssmrv-fac-actions\"><a href=\"https://nmkrv.edu.in/board-of-management/\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"ssmrv-visit-website-btn\">🌐 Visit Official Website Page ↗</a></div><div class=\"ssmrv-faculty-meta\"><div class=\"ssmrv-fac-row\"><span class=\"ssmrv-fac-label\">🎓 Qualifications</span><span class=\"ssmrv-fac-val\">Registrar, Rashtreeya Sikshana Samithi Trust</span></div><div class=\"ssmrv-fac-row\"><span class=\"ssmrv-fac-label\">⏳ Experience</span><span class=\"ssmrv-fac-val\">Special Invitee, Governing Body of NMKRV College</span></div><div class=\"ssmrv-fac-row\"><span class=\"ssmrv-fac-label\">🔬 Areas of Expertise</span><span class=\"ssmrv-fac-val\">Academic Compliance, Trust Administration &amp; Regulatory Affairs</span></div><div class=\"ssmrv-fac-row\"><span class=\"ssmrv-fac-label\">🛡️ Committee / Role</span><span class=\"ssmrv-fac-val ssmrv-fac-role-val\">Registrar — RSS Trust | Governing Body Special Invitee</span></div><div class=\"ssmrv-fac-section\"><div class=\"ssmrv-fac-sec-title\">📖 Profile Overview</div><div class=\"ssmrv-fac-sec-text\">Sri. Syed Shahameer serves as the Registrar of Rashtreeya Sikshana Samithi Trust (RSST) and Special Invitee on the Governing Body of NMKRV College.</div></div><div class=\"ssmrv-fac-section\"><div class=\"ssmrv-fac-sec-title\">🏆 Key Highlights</div><div class=\"ssmrv-fac-sec-text\">Registrar, RSS Trust &amp; Special Invitee on Governing Body.</div></div><div class=\"ssmrv-fac-contact\"><div>📧 <a href=\"mailto:nmkrv@rvei.edu.in\">nmkrv@rvei.edu.in</a></div><div>📞 <a href=\"tel:08069018900\">080-69018900</a></div></div></div></div>",
    "buttons": [
      {
        "text": "🌐 Visit Official Website Page ↗",
        "url": "https://nmkrv.edu.in/board-of-management/",
        "isPrimary": true
      },
      {
        "text": "🏛️ 🏛️ Institutional Leadership & Governance",
        "action": "flow:faculty_leadership"
      },
      {
        "text": "👨‍🏫 All Faculty Departments",
        "action": "flow:faculty"
      }
    ]
  },
  "profile_dr-r-suchithra": {
    "id": "profile_dr-r-suchithra",
    "pageUrl": "https://nmkrv.edu.in/about-principal-message/",
    "message": "<div class=\"ssmrv-faculty-card is-full-profile\"><div class=\"ssmrv-faculty-name\">Dr. R. Suchithra</div><div class=\"ssmrv-faculty-badges\"><span class=\"ssmrv-badge-desig\">Principal — NMKRV College</span><span class=\"ssmrv-badge-dept\">Institutional Leadership</span></div><div class=\"ssmrv-fac-actions\"><a href=\"https://nmkrv.edu.in/about-principal-message/\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"ssmrv-visit-website-btn\">🌐 Visit Official Website Page ↗</a></div><div class=\"ssmrv-faculty-meta\"><div class=\"ssmrv-fac-row\"><span class=\"ssmrv-fac-label\">🎓 Qualifications</span><span class=\"ssmrv-fac-val\">MCA, Ph.D.</span></div><div class=\"ssmrv-fac-row\"><span class=\"ssmrv-fac-label\">⏳ Experience</span><span class=\"ssmrv-fac-val\">23+ Years Teaching Experience &amp; 10 Years Research Experience</span></div><div class=\"ssmrv-fac-row\"><span class=\"ssmrv-fac-label\">🔬 Areas of Expertise</span><span class=\"ssmrv-fac-val\">Cloud Computing, Java Programming, User Interface Design</span></div><div class=\"ssmrv-fac-row\"><span class=\"ssmrv-fac-label\">🛡️ Committee / Role</span><span class=\"ssmrv-fac-val ssmrv-fac-role-val\">Principal — NMKRV College | Chairperson — Academic Council, IQAC, Anti-Ragging Cell &amp; ICC</span></div><div class=\"ssmrv-fac-section\"><div class=\"ssmrv-fac-sec-title\">📖 Profile Overview</div><div class=\"ssmrv-fac-sec-text\">Dr. R. Suchithra is the Principal of NMKRV College, Chairperson of the Academic Council, IQAC, Anti-Ragging Cell, and Internal Complaints Committee (ICC). She has guided 17 research scholars, published 45 papers in national and international journals/conferences, authored 3 books, filed/granted 3 patents, and completed 2 ICSSR-funded research projects.</div></div><div class=\"ssmrv-fac-section\"><div class=\"ssmrv-fac-sec-title\">🏆 Key Highlights</div><div class=\"ssmrv-fac-sec-text\">Guided 17 research scholars | 45 Research Publications | 3 Books Published | 3 Patents | 2 ICSSR Projects.</div></div><div class=\"ssmrv-fac-contact\"><div>📧 <a href=\"mailto:principal.nmkrv@rvei.edu.in\">principal.nmkrv@rvei.edu.in</a></div><div>📞 <a href=\"tel:08069018904\">080-69018904</a></div></div></div></div>",
    "buttons": [
      {
        "text": "🌐 Visit Official Website Page ↗",
        "url": "https://nmkrv.edu.in/about-principal-message/",
        "isPrimary": true
      },
      {
        "text": "🏛️ 🏛️ Institutional Leadership & Governance",
        "action": "flow:faculty_leadership"
      },
      {
        "text": "👨‍🏫 All Faculty Departments",
        "action": "flow:faculty"
      }
    ]
  },
  "profile_ms-shilpa-p": {
    "id": "profile_ms-shilpa-p",
    "pageUrl": "https://nmkrv.edu.in/examinations/",
    "message": "<div class=\"ssmrv-faculty-card is-full-profile\"><div class=\"ssmrv-faculty-name\">Mrs. Shilpa P.</div><div class=\"ssmrv-faculty-badges\"><span class=\"ssmrv-badge-desig\">Controller of Examinations (COE) &amp; Assistant Professor</span><span class=\"ssmrv-badge-dept\">Office of the Controller of Examinations / Chemistry</span></div><div class=\"ssmrv-fac-actions\"><a href=\"https://nmkrv.edu.in/examinations/\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"ssmrv-visit-website-btn\">🌐 Visit Official Website Page ↗</a></div><div class=\"ssmrv-faculty-meta\"><div class=\"ssmrv-fac-row\"><span class=\"ssmrv-fac-label\">🎓 Qualifications</span><span class=\"ssmrv-fac-val\">M.Sc., M.Phil., (Ph.D.)</span></div><div class=\"ssmrv-fac-row\"><span class=\"ssmrv-fac-label\">⏳ Experience</span><span class=\"ssmrv-fac-val\">Controller of Examinations &amp; Senior Faculty in Chemistry</span></div><div class=\"ssmrv-fac-row\"><span class=\"ssmrv-fac-label\">🔬 Areas of Expertise</span><span class=\"ssmrv-fac-val\">Autonomous Examination Governance, Evaluation Systems &amp; Chemical Sciences</span></div><div class=\"ssmrv-fac-row\"><span class=\"ssmrv-fac-label\">🛡️ Committee / Role</span><span class=\"ssmrv-fac-val ssmrv-fac-role-val\">Controller of Examinations (COE) | Academic Council Member</span></div><div class=\"ssmrv-fac-section\"><div class=\"ssmrv-fac-sec-title\">📖 Profile Overview</div><div class=\"ssmrv-fac-sec-text\">Mrs. Shilpa P. serves as the Controller of Examinations (COE) at NMKRV College and Assistant Professor in the Department of Chemistry. She leads the autonomous examination cell and serves on the Academic Council.</div></div><div class=\"ssmrv-fac-section\"><div class=\"ssmrv-fac-sec-title\">🏆 Key Highlights</div><div class=\"ssmrv-fac-sec-text\">Controller of Examinations (COE) &amp; Member of Academic Council.</div></div><div class=\"ssmrv-fac-contact\"><div>📧 <a href=\"mailto:coe.nmkrv@rvei.edu.in\">coe.nmkrv@rvei.edu.in</a></div><div>📞 <a href=\"tel:08069018999\">080-69018999</a></div></div></div></div>",
    "buttons": [
      {
        "text": "🌐 Visit Official Website Page ↗",
        "url": "https://nmkrv.edu.in/examinations/",
        "isPrimary": true
      },
      {
        "text": "🏛️ 🏛️ Institutional Leadership & Governance",
        "action": "flow:faculty_leadership"
      },
      {
        "text": "👨‍🏫 All Faculty Departments",
        "action": "flow:faculty"
      }
    ]
  },
  "profile_mrs-suman-prasad": {
    "id": "profile_mrs-suman-prasad",
    "pageUrl": "https://nmkrv.edu.in/iqac/",
    "message": "<div class=\"ssmrv-faculty-card is-full-profile\"><div class=\"ssmrv-faculty-name\">Mrs. Suman Prasad</div><div class=\"ssmrv-faculty-badges\"><span class=\"ssmrv-badge-desig\">Academic Coordinator &amp; Associate Professor</span><span class=\"ssmrv-badge-dept\">Institutional Leadership / Biotechnology</span></div><div class=\"ssmrv-fac-actions\"><a href=\"https://nmkrv.edu.in/iqac/\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"ssmrv-visit-website-btn\">🌐 Visit Official Website Page ↗</a></div><div class=\"ssmrv-faculty-meta\"><div class=\"ssmrv-fac-row\"><span class=\"ssmrv-fac-label\">🎓 Qualifications</span><span class=\"ssmrv-fac-val\">M.Sc. Biotechnology</span></div><div class=\"ssmrv-fac-row\"><span class=\"ssmrv-fac-label\">⏳ Experience</span><span class=\"ssmrv-fac-val\">Academic Coordinator &amp; Senior Faculty in Biotechnology</span></div><div class=\"ssmrv-fac-row\"><span class=\"ssmrv-fac-label\">🔬 Areas of Expertise</span><span class=\"ssmrv-fac-val\">Biotechnology, Enzymology, Curriculum Design &amp; Academic Quality Assurance</span></div><div class=\"ssmrv-fac-row\"><span class=\"ssmrv-fac-label\">🛡️ Committee / Role</span><span class=\"ssmrv-fac-val ssmrv-fac-role-val\">Academic Coordinator — NMKRV College | IQAC Member | UBA Advisory Committee</span></div><div class=\"ssmrv-fac-section\"><div class=\"ssmrv-fac-sec-title\">📖 Profile Overview</div><div class=\"ssmrv-fac-sec-text\">Mrs. Suman Prasad serves as the Academic Coordinator of NMKRV College and Associate Professor in the Department of Biotechnology. She is a member of the IQAC and Unnat Bharat Abhiyan (UBA) Advisory Committee and served as Principal Investigator for a UGC Minor Research Project.</div></div><div class=\"ssmrv-fac-section\"><div class=\"ssmrv-fac-sec-title\">🏆 Key Highlights</div><div class=\"ssmrv-fac-sec-text\">Academic Coordinator, IQAC Member &amp; UGC Minor Research Project Principal Investigator.</div></div><div class=\"ssmrv-fac-contact\"><div>📧 <a href=\"mailto:sumanprasad.nmkrv@rvei.edu.in\">sumanprasad.nmkrv@rvei.edu.in</a></div><div>📞 <a href=\"tel:08069018900\">080-69018900</a></div></div></div></div>",
    "buttons": [
      {
        "text": "🌐 Visit Official Website Page ↗",
        "url": "https://nmkrv.edu.in/iqac/",
        "isPrimary": true
      },
      {
        "text": "🏛️ 🏛️ Institutional Leadership & Governance",
        "action": "flow:faculty_leadership"
      },
      {
        "text": "👨‍🏫 All Faculty Departments",
        "action": "flow:faculty"
      }
    ]
  },
  "profile_dr-sharada-t": {
    "id": "profile_dr-sharada-t",
    "pageUrl": "https://nmkrv.edu.in/iqac/",
    "message": "<div class=\"ssmrv-faculty-card is-full-profile\"><div class=\"ssmrv-faculty-name\">Dr. Sharada T.</div><div class=\"ssmrv-faculty-badges\"><span class=\"ssmrv-badge-desig\">IQAC Coordinator &amp; Head of Department (Journalism)</span><span class=\"ssmrv-badge-dept\">Institutional Leadership / Journalism &amp; Mass Communication</span></div><div class=\"ssmrv-fac-actions\"><a href=\"https://nmkrv.edu.in/iqac/\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"ssmrv-visit-website-btn\">🌐 Visit Official Website Page ↗</a></div><div class=\"ssmrv-faculty-meta\"><div class=\"ssmrv-fac-row\"><span class=\"ssmrv-fac-label\">🎓 Qualifications</span><span class=\"ssmrv-fac-val\">M.S. Communication, Ph.D., NET</span></div><div class=\"ssmrv-fac-row\"><span class=\"ssmrv-fac-label\">⏳ Experience</span><span class=\"ssmrv-fac-val\">HoD &amp; PG Coordinator (Journalism) | IQAC Coordinator</span></div><div class=\"ssmrv-fac-row\"><span class=\"ssmrv-fac-label\">🔬 Areas of Expertise</span><span class=\"ssmrv-fac-val\">Journalism, Mass Communication, Media Research &amp; Institutional Quality Assurance</span></div><div class=\"ssmrv-fac-row\"><span class=\"ssmrv-fac-label\">🛡️ Committee / Role</span><span class=\"ssmrv-fac-val ssmrv-fac-role-val\">IQAC Coordinator | Member-Secretary — Governing Body &amp; Academic Council | Coordinator — Literary Club</span></div><div class=\"ssmrv-fac-section\"><div class=\"ssmrv-fac-sec-title\">📖 Profile Overview</div><div class=\"ssmrv-fac-sec-text\">Dr. Sharada T. is the IQAC Coordinator, Member-Secretary of the Governing Body and Academic Council, and Head &amp; PG Coordinator of the Department of Journalism and Mass Communication at NMKRV College.</div></div><div class=\"ssmrv-fac-section\"><div class=\"ssmrv-fac-sec-title\">🏆 Key Highlights</div><div class=\"ssmrv-fac-sec-text\">IQAC Coordinator | Member-Secretary of Governing Body &amp; Academic Council | Research Faculty.</div></div><div class=\"ssmrv-fac-contact\"><div>📧 <a href=\"mailto:sharada.nmkrv@rvei.edu.in\">sharada.nmkrv@rvei.edu.in</a></div><div>📞 <a href=\"tel:08069018900\">080-69018900</a></div></div></div></div>",
    "buttons": [
      {
        "text": "🌐 Visit Official Website Page ↗",
        "url": "https://nmkrv.edu.in/iqac/",
        "isPrimary": true
      },
      {
        "text": "🏛️ 🏛️ Institutional Leadership & Governance",
        "action": "flow:faculty_leadership"
      },
      {
        "text": "👨‍🏫 All Faculty Departments",
        "action": "flow:faculty"
      }
    ]
  },
  "faculty_commerce": {
    "id": "faculty_commerce_mgmt",
    "pageUrl": "https://nmkrv.edu.in/commerce/",
    "message": "<div class=\"ssmrv-flow-heading\">📊 Department of Commerce (B.Com &amp; M.Com)</div><div class=\"ssmrv-flow-subheading\">UG &amp; PG Commerce, Accounting, Taxation &amp; FinTech Faculty — Select <b>View Full Profile</b> or <b>Visit Website Page ↗</b> on any card below:</div><div class=\"ssmrv-dept-profile-list\"><div class=\"ssmrv-dept-profile-item\" data-profile-id=\"dr-renuka-somalu-rathod\" title=\"Click to view full profile of Dr. Renuka Somalu Rathod\"><div class=\"ssmrv-dept-prof-header\"><span class=\"ssmrv-dept-prof-name\">Dr. Renuka Somalu Rathod</span></div><div class=\"ssmrv-faculty-badges\"><span class=\"ssmrv-badge-desig\">Assistant Professor</span><span class=\"ssmrv-badge-dept\">Commerce (B.Com &amp; M.Com)</span></div><div class=\"ssmrv-dept-prof-actions\"><span class=\"ssmrv-dept-prof-cta\">👤 View Full Profile</span><a href=\"https://nmkrv.edu.in/commerce/\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"ssmrv-dept-visit-btn\" onclick=\"event.stopPropagation();\">🌐 Visit Website Page ↗</a></div><div class=\"ssmrv-dept-prof-meta\"><div class=\"ssmrv-dept-prof-row\"><strong>Qualifications:</strong> M.Com., Ph.D.</div><div class=\"ssmrv-dept-prof-row\"><strong>Experience:</strong> Senior Faculty &amp; Research Guide in Commerce</div><div class=\"ssmrv-dept-prof-row\"><strong>Expertise:</strong> Taxation Law and Practice, Corporate Accounting &amp; Financial Management</div><div class=\"ssmrv-dept-prof-row ssmrv-dept-prof-comm\"><strong>Role:</strong> Research Faculty — Commerce</div></div></div><div class=\"ssmrv-dept-profile-item\" data-profile-id=\"prof-manjunatha-r\" title=\"Click to view full profile of Prof. Manjunatha R.\"><div class=\"ssmrv-dept-prof-header\"><span class=\"ssmrv-dept-prof-name\">Prof. Manjunatha R.</span></div><div class=\"ssmrv-faculty-badges\"><span class=\"ssmrv-badge-desig\">Assistant Professor</span><span class=\"ssmrv-badge-dept\">Commerce (B.Com)</span></div><div class=\"ssmrv-dept-prof-actions\"><span class=\"ssmrv-dept-prof-cta\">👤 View Full Profile</span><a href=\"https://nmkrv.edu.in/commerce/\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"ssmrv-dept-visit-btn\" onclick=\"event.stopPropagation();\">🌐 Visit Website Page ↗</a></div><div class=\"ssmrv-dept-prof-meta\"><div class=\"ssmrv-dept-prof-row\"><strong>Qualifications:</strong> M.Com., NET</div><div class=\"ssmrv-dept-prof-row\"><strong>Experience:</strong> Senior Teaching Experience in Commerce &amp; Accounting</div><div class=\"ssmrv-dept-prof-row\"><strong>Expertise:</strong> Advanced Corporate Accounting, Holding Company Accounts &amp; Financial Reporting</div><div class=\"ssmrv-dept-prof-row ssmrv-dept-prof-comm\"><strong>Role:</strong> Executive Committee Member — Unnat Bharat Abhiyan (UBA)</div></div></div><div class=\"ssmrv-dept-profile-item\" data-profile-id=\"mrs-jyothi-r-aiyangar\" title=\"Click to view full profile of Mrs. Jyothi R. Aiyangar\"><div class=\"ssmrv-dept-prof-header\"><span class=\"ssmrv-dept-prof-name\">Mrs. Jyothi R. Aiyangar</span></div><div class=\"ssmrv-faculty-badges\"><span class=\"ssmrv-badge-desig\">Assistant Professor</span><span class=\"ssmrv-badge-dept\">Commerce (B.Com)</span></div><div class=\"ssmrv-dept-prof-actions\"><span class=\"ssmrv-dept-prof-cta\">👤 View Full Profile</span><a href=\"https://nmkrv.edu.in/commerce/\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"ssmrv-dept-visit-btn\" onclick=\"event.stopPropagation();\">🌐 Visit Website Page ↗</a></div><div class=\"ssmrv-dept-prof-meta\"><div class=\"ssmrv-dept-prof-row\"><strong>Qualifications:</strong> M.Com., PGDFM</div><div class=\"ssmrv-dept-prof-row\"><strong>Experience:</strong> Academic &amp; Examination Administration Experience</div><div class=\"ssmrv-dept-prof-row\"><strong>Expertise:</strong> Principles and Practices of Auditing, Financial Management &amp; Corporate Accounting</div><div class=\"ssmrv-dept-prof-row ssmrv-dept-prof-comm\"><strong>Role:</strong> Exam Core Team — COE | Member — Innovation &amp; Social Media Cell</div></div></div><div class=\"ssmrv-dept-profile-item\" data-profile-id=\"mrs-geetha-p\" title=\"Click to view full profile of Mrs. Geetha P.\"><div class=\"ssmrv-dept-prof-header\"><span class=\"ssmrv-dept-prof-name\">Mrs. Geetha P.</span></div><div class=\"ssmrv-faculty-badges\"><span class=\"ssmrv-badge-desig\">Assistant Professor</span><span class=\"ssmrv-badge-dept\">Commerce (B.Com)</span></div><div class=\"ssmrv-dept-prof-actions\"><span class=\"ssmrv-dept-prof-cta\">👤 View Full Profile</span><a href=\"https://nmkrv.edu.in/commerce/\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"ssmrv-dept-visit-btn\" onclick=\"event.stopPropagation();\">🌐 Visit Website Page ↗</a></div><div class=\"ssmrv-dept-prof-meta\"><div class=\"ssmrv-dept-prof-row\"><strong>Qualifications:</strong> M.Com.</div><div class=\"ssmrv-dept-prof-row\"><strong>Experience:</strong> Teaching Experience in Commerce &amp; E-Business</div><div class=\"ssmrv-dept-prof-row\"><strong>Expertise:</strong> E-Business and Accounting, Financial Accounting &amp; Marketing Management</div><div class=\"ssmrv-dept-prof-row ssmrv-dept-prof-comm\"><strong>Role:</strong> Coordinator — Fine Arts Club | Member — SC/ST Committee</div></div></div><div class=\"ssmrv-dept-profile-item\" data-profile-id=\"mrs-shilpa-a\" title=\"Click to view full profile of Mrs. Shilpa A.\"><div class=\"ssmrv-dept-prof-header\"><span class=\"ssmrv-dept-prof-name\">Mrs. Shilpa A.</span></div><div class=\"ssmrv-faculty-badges\"><span class=\"ssmrv-badge-desig\">Assistant Professor</span><span class=\"ssmrv-badge-dept\">Commerce (B.Com)</span></div><div class=\"ssmrv-dept-prof-actions\"><span class=\"ssmrv-dept-prof-cta\">👤 View Full Profile</span><a href=\"https://nmkrv.edu.in/commerce/\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"ssmrv-dept-visit-btn\" onclick=\"event.stopPropagation();\">🌐 Visit Website Page ↗</a></div><div class=\"ssmrv-dept-prof-meta\"><div class=\"ssmrv-dept-prof-row\"><strong>Qualifications:</strong> M.Com.</div><div class=\"ssmrv-dept-prof-row\"><strong>Experience:</strong> Teaching Experience in Commerce &amp; Capital Markets</div><div class=\"ssmrv-dept-prof-row\"><strong>Expertise:</strong> Stock and Commodity Markets, Financial Services &amp; Corporate Administration</div><div class=\"ssmrv-dept-prof-row ssmrv-dept-prof-comm\"><strong>Role:</strong> Committee Member — Fine Arts Club</div></div></div><div class=\"ssmrv-dept-profile-item\" data-profile-id=\"ms-manasa-j\" title=\"Click to view full profile of Ms. Manasa J.\"><div class=\"ssmrv-dept-prof-header\"><span class=\"ssmrv-dept-prof-name\">Ms. Manasa J.</span></div><div class=\"ssmrv-faculty-badges\"><span class=\"ssmrv-badge-desig\">Assistant Professor</span><span class=\"ssmrv-badge-dept\">Commerce (B.Com)</span></div><div class=\"ssmrv-dept-prof-actions\"><span class=\"ssmrv-dept-prof-cta\">👤 View Full Profile</span><a href=\"https://nmkrv.edu.in/commerce/\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"ssmrv-dept-visit-btn\" onclick=\"event.stopPropagation();\">🌐 Visit Website Page ↗</a></div><div class=\"ssmrv-dept-prof-meta\"><div class=\"ssmrv-dept-prof-row\"><strong>Qualifications:</strong> M.Com., KSET</div><div class=\"ssmrv-dept-prof-row\"><strong>Experience:</strong> Teaching Experience in Commerce &amp; Taxation</div><div class=\"ssmrv-dept-prof-row\"><strong>Expertise:</strong> Goods and Services Tax (GST), Indirect Taxation &amp; Financial Accounting</div><div class=\"ssmrv-dept-prof-row ssmrv-dept-prof-comm\"><strong>Role:</strong> Department of Commerce</div></div></div><div class=\"ssmrv-dept-profile-item\" data-profile-id=\"mrs-anu-revamma-parvathi\" title=\"Click to view full profile of Mrs. Anu Revamma Parvathi\"><div class=\"ssmrv-dept-prof-header\"><span class=\"ssmrv-dept-prof-name\">Mrs. Anu Revamma Parvathi</span></div><div class=\"ssmrv-faculty-badges\"><span class=\"ssmrv-badge-desig\">Assistant Professor</span><span class=\"ssmrv-badge-dept\">Commerce (B.Com)</span></div><div class=\"ssmrv-dept-prof-actions\"><span class=\"ssmrv-dept-prof-cta\">👤 View Full Profile</span><a href=\"https://nmkrv.edu.in/commerce/\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"ssmrv-dept-visit-btn\" onclick=\"event.stopPropagation();\">🌐 Visit Website Page ↗</a></div><div class=\"ssmrv-dept-prof-meta\"><div class=\"ssmrv-dept-prof-row\"><strong>Qualifications:</strong> M.Com., KSET</div><div class=\"ssmrv-dept-prof-row\"><strong>Experience:</strong> Teaching &amp; Institutional Committee Leadership</div><div class=\"ssmrv-dept-prof-row\"><strong>Expertise:</strong> Advanced Financial Accounting, Corporate Accounting &amp; Business Operations</div><div class=\"ssmrv-dept-prof-row ssmrv-dept-prof-comm\"><strong>Role:</strong> Coordinator — Anti-Ragging Cell, Innovation Cell &amp; Social Media Cell | IQAC &amp; Youth Red Cross Member</div></div></div><div class=\"ssmrv-dept-profile-item\" data-profile-id=\"mrs-sarala-d\" title=\"Click to view full profile of Mrs. Sarala D.\"><div class=\"ssmrv-dept-prof-header\"><span class=\"ssmrv-dept-prof-name\">Mrs. Sarala D.</span></div><div class=\"ssmrv-faculty-badges\"><span class=\"ssmrv-badge-desig\">Assistant Professor</span><span class=\"ssmrv-badge-dept\">Commerce (B.Com)</span></div><div class=\"ssmrv-dept-prof-actions\"><span class=\"ssmrv-dept-prof-cta\">👤 View Full Profile</span><a href=\"https://nmkrv.edu.in/commerce/\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"ssmrv-dept-visit-btn\" onclick=\"event.stopPropagation();\">🌐 Visit Website Page ↗</a></div><div class=\"ssmrv-dept-prof-meta\"><div class=\"ssmrv-dept-prof-row\"><strong>Qualifications:</strong> M.Com., B.Ed., DFD, K-SET</div><div class=\"ssmrv-dept-prof-row\"><strong>Experience:</strong> Teaching Experience in Quantitative Analysis &amp; Commerce</div><div class=\"ssmrv-dept-prof-row\"><strong>Expertise:</strong> Quantitative Analysis for Business Decisions (QABD), Statistics &amp; Cost Accounting</div><div class=\"ssmrv-dept-prof-row ssmrv-dept-prof-comm\"><strong>Role:</strong> Member — IQAC, Anti-Ragging Cell &amp; Forum for Strength and Intellect</div></div></div><div class=\"ssmrv-dept-profile-item\" data-profile-id=\"mrs-chinmayee-s-dixit\" title=\"Click to view full profile of Mrs. Chinmayee S. Dixit\"><div class=\"ssmrv-dept-prof-header\"><span class=\"ssmrv-dept-prof-name\">Mrs. Chinmayee S. Dixit</span></div><div class=\"ssmrv-faculty-badges\"><span class=\"ssmrv-badge-desig\">Assistant Professor</span><span class=\"ssmrv-badge-dept\">Commerce (B.Com)</span></div><div class=\"ssmrv-dept-prof-actions\"><span class=\"ssmrv-dept-prof-cta\">👤 View Full Profile</span><a href=\"https://nmkrv.edu.in/commerce/\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"ssmrv-dept-visit-btn\" onclick=\"event.stopPropagation();\">🌐 Visit Website Page ↗</a></div><div class=\"ssmrv-dept-prof-meta\"><div class=\"ssmrv-dept-prof-row\"><strong>Qualifications:</strong> M.Com.</div><div class=\"ssmrv-dept-prof-row\"><strong>Experience:</strong> Teaching Experience in Commerce &amp; Management</div><div class=\"ssmrv-dept-prof-row\"><strong>Expertise:</strong> Financial Accounting, Cost Management &amp; Corporate Administration</div><div class=\"ssmrv-dept-prof-row ssmrv-dept-prof-comm\"><strong>Role:</strong> Department of Commerce</div></div></div><div class=\"ssmrv-dept-profile-item\" data-profile-id=\"mrs-swetha-a-m\" title=\"Click to view full profile of Mrs. Swetha A. M.\"><div class=\"ssmrv-dept-prof-header\"><span class=\"ssmrv-dept-prof-name\">Mrs. Swetha A. M.</span></div><div class=\"ssmrv-faculty-badges\"><span class=\"ssmrv-badge-desig\">Assistant Professor</span><span class=\"ssmrv-badge-dept\">Commerce (B.Com)</span></div><div class=\"ssmrv-dept-prof-actions\"><span class=\"ssmrv-dept-prof-cta\">👤 View Full Profile</span><a href=\"https://nmkrv.edu.in/commerce/\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"ssmrv-dept-visit-btn\" onclick=\"event.stopPropagation();\">🌐 Visit Website Page ↗</a></div><div class=\"ssmrv-dept-prof-meta\"><div class=\"ssmrv-dept-prof-row\"><strong>Qualifications:</strong> M.Com., KSET</div><div class=\"ssmrv-dept-prof-row\"><strong>Experience:</strong> Teaching Experience in Commerce &amp; Accounting</div><div class=\"ssmrv-dept-prof-row\"><strong>Expertise:</strong> Corporate Accounting, Financial Management &amp; Banking Operations</div><div class=\"ssmrv-dept-prof-row ssmrv-dept-prof-comm\"><strong>Role:</strong> Department of Commerce</div></div></div><div class=\"ssmrv-dept-profile-item\" data-profile-id=\"mrs-prathiksha-p\" title=\"Click to view full profile of Mrs. Prathiksha P.\"><div class=\"ssmrv-dept-prof-header\"><span class=\"ssmrv-dept-prof-name\">Mrs. Prathiksha P.</span></div><div class=\"ssmrv-faculty-badges\"><span class=\"ssmrv-badge-desig\">Lecturer</span><span class=\"ssmrv-badge-dept\">Commerce (B.Com)</span></div><div class=\"ssmrv-dept-prof-actions\"><span class=\"ssmrv-dept-prof-cta\">👤 View Full Profile</span><a href=\"https://nmkrv.edu.in/commerce/\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"ssmrv-dept-visit-btn\" onclick=\"event.stopPropagation();\">🌐 Visit Website Page ↗</a></div><div class=\"ssmrv-dept-prof-meta\"><div class=\"ssmrv-dept-prof-row\"><strong>Qualifications:</strong> M.Com.</div><div class=\"ssmrv-dept-prof-row\"><strong>Experience:</strong> Teaching Experience in Commerce</div><div class=\"ssmrv-dept-prof-row\"><strong>Expertise:</strong> Financial Accounting, Business Management &amp; Marketing</div><div class=\"ssmrv-dept-prof-row ssmrv-dept-prof-comm\"><strong>Role:</strong> Department of Commerce</div></div></div><div class=\"ssmrv-dept-profile-item\" data-profile-id=\"ms-rajeshwari-nag-shilpa\" title=\"Click to view full profile of Ms. Rajeshwari Nag Shilpa\"><div class=\"ssmrv-dept-prof-header\"><span class=\"ssmrv-dept-prof-name\">Ms. Rajeshwari Nag Shilpa</span></div><div class=\"ssmrv-faculty-badges\"><span class=\"ssmrv-badge-desig\">Assistant Professor</span><span class=\"ssmrv-badge-dept\">Commerce (B.Com)</span></div><div class=\"ssmrv-dept-prof-actions\"><span class=\"ssmrv-dept-prof-cta\">👤 View Full Profile</span><a href=\"https://nmkrv.edu.in/commerce/\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"ssmrv-dept-visit-btn\" onclick=\"event.stopPropagation();\">🌐 Visit Website Page ↗</a></div><div class=\"ssmrv-dept-prof-meta\"><div class=\"ssmrv-dept-prof-row\"><strong>Qualifications:</strong> M.Com.</div><div class=\"ssmrv-dept-prof-row\"><strong>Experience:</strong> Teaching Experience in Commerce</div><div class=\"ssmrv-dept-prof-row\"><strong>Expertise:</strong> Accounting, Taxation &amp; Corporate Administration</div><div class=\"ssmrv-dept-prof-row ssmrv-dept-prof-comm\"><strong>Role:</strong> Department of Commerce</div></div></div><div class=\"ssmrv-dept-profile-item\" data-profile-id=\"ms-dhrakshayini\" title=\"Click to view full profile of Ms. Dhrakshayini\"><div class=\"ssmrv-dept-prof-header\"><span class=\"ssmrv-dept-prof-name\">Ms. Dhrakshayini</span></div><div class=\"ssmrv-faculty-badges\"><span class=\"ssmrv-badge-desig\">Assistant Professor</span><span class=\"ssmrv-badge-dept\">Commerce (B.Com)</span></div><div class=\"ssmrv-dept-prof-actions\"><span class=\"ssmrv-dept-prof-cta\">👤 View Full Profile</span><a href=\"https://nmkrv.edu.in/commerce/\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"ssmrv-dept-visit-btn\" onclick=\"event.stopPropagation();\">🌐 Visit Website Page ↗</a></div><div class=\"ssmrv-dept-prof-meta\"><div class=\"ssmrv-dept-prof-row\"><strong>Qualifications:</strong> M.Com.</div><div class=\"ssmrv-dept-prof-row\"><strong>Experience:</strong> Teaching Experience in Commerce</div><div class=\"ssmrv-dept-prof-row\"><strong>Expertise:</strong> Commerce, Financial Services &amp; Business Studies</div><div class=\"ssmrv-dept-prof-row ssmrv-dept-prof-comm\"><strong>Role:</strong> Department of Commerce</div></div></div><div class=\"ssmrv-dept-profile-item\" data-profile-id=\"ms-shilpa-navin\" title=\"Click to view full profile of Ms. Shilpa Navin\"><div class=\"ssmrv-dept-prof-header\"><span class=\"ssmrv-dept-prof-name\">Ms. Shilpa Navin</span></div><div class=\"ssmrv-faculty-badges\"><span class=\"ssmrv-badge-desig\">Assistant Professor</span><span class=\"ssmrv-badge-dept\">Commerce (B.Com)</span></div><div class=\"ssmrv-dept-prof-actions\"><span class=\"ssmrv-dept-prof-cta\">👤 View Full Profile</span><a href=\"https://nmkrv.edu.in/commerce/\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"ssmrv-dept-visit-btn\" onclick=\"event.stopPropagation();\">🌐 Visit Website Page ↗</a></div><div class=\"ssmrv-dept-prof-meta\"><div class=\"ssmrv-dept-prof-row\"><strong>Qualifications:</strong> M.Com.</div><div class=\"ssmrv-dept-prof-row\"><strong>Experience:</strong> Teaching Experience in Commerce</div><div class=\"ssmrv-dept-prof-row\"><strong>Expertise:</strong> Commerce, FinTech &amp; Business Accounting</div><div class=\"ssmrv-dept-prof-row ssmrv-dept-prof-comm\"><strong>Role:</strong> Department of Commerce</div></div></div><div class=\"ssmrv-dept-profile-item\" data-profile-id=\"dr-shridhar-murthy\" title=\"Click to view full profile of Dr. S. V. Shridhara Murthy\"><div class=\"ssmrv-dept-prof-header\"><span class=\"ssmrv-dept-prof-name\">Dr. S. V. Shridhara Murthy</span></div><div class=\"ssmrv-faculty-badges\"><span class=\"ssmrv-badge-desig\">Associate Professor</span><span class=\"ssmrv-badge-dept\">Commerce (B.Com)</span></div><div class=\"ssmrv-dept-prof-actions\"><span class=\"ssmrv-dept-prof-cta\">👤 View Full Profile</span><a href=\"https://nmkrv.edu.in/forum-for-strength-and-intellect/\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"ssmrv-dept-visit-btn\" onclick=\"event.stopPropagation();\">🌐 Visit Website Page ↗</a></div><div class=\"ssmrv-dept-prof-meta\"><div class=\"ssmrv-dept-prof-row\"><strong>Qualifications:</strong> M.Com., Ph.D.</div><div class=\"ssmrv-dept-prof-row\"><strong>Experience:</strong> Senior Associate Professor &amp; Research Investigator in Commerce</div><div class=\"ssmrv-dept-prof-row\"><strong>Expertise:</strong> Investment Management, Portfolio Analysis, Micro-Finance &amp; Rural Development</div><div class=\"ssmrv-dept-prof-row ssmrv-dept-prof-comm\"><strong>Role:</strong> Coordinator — Forum for Strength and Intellect (FSI)</div></div></div><div class=\"ssmrv-dept-profile-item\" data-profile-id=\"ms-shashirekha-b-v\" title=\"Click to view full profile of Ms. Shashirekha B. V.\"><div class=\"ssmrv-dept-prof-header\"><span class=\"ssmrv-dept-prof-name\">Ms. Shashirekha B. V.</span></div><div class=\"ssmrv-faculty-badges\"><span class=\"ssmrv-badge-desig\">Assistant Professor</span><span class=\"ssmrv-badge-dept\">Commerce (B.Com)</span></div><div class=\"ssmrv-dept-prof-actions\"><span class=\"ssmrv-dept-prof-cta\">👤 View Full Profile</span><a href=\"https://nmkrv.edu.in/e-cell/\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"ssmrv-dept-visit-btn\" onclick=\"event.stopPropagation();\">🌐 Visit Website Page ↗</a></div><div class=\"ssmrv-dept-prof-meta\"><div class=\"ssmrv-dept-prof-row\"><strong>Qualifications:</strong> M.Com.</div><div class=\"ssmrv-dept-prof-row\"><strong>Experience:</strong> Teaching &amp; Entrepreneurship Mentorship Experience</div><div class=\"ssmrv-dept-prof-row\"><strong>Expertise:</strong> Business Regulations, Entrepreneurship Development &amp; Corporate Law</div><div class=\"ssmrv-dept-prof-row ssmrv-dept-prof-comm\"><strong>Role:</strong> Coordinator — E-Cell</div></div></div><div class=\"ssmrv-dept-profile-item\" data-profile-id=\"ms-shobha-v\" title=\"Click to view full profile of Ms. Shobha V.\"><div class=\"ssmrv-dept-prof-header\"><span class=\"ssmrv-dept-prof-name\">Ms. Shobha V.</span></div><div class=\"ssmrv-faculty-badges\"><span class=\"ssmrv-badge-desig\">Assistant Professor</span><span class=\"ssmrv-badge-dept\">Commerce (B.Com)</span></div><div class=\"ssmrv-dept-prof-actions\"><span class=\"ssmrv-dept-prof-cta\">👤 View Full Profile</span><a href=\"https://nmkrv.edu.in/forum-for-strength-and-intellect/\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"ssmrv-dept-visit-btn\" onclick=\"event.stopPropagation();\">🌐 Visit Website Page ↗</a></div><div class=\"ssmrv-dept-prof-meta\"><div class=\"ssmrv-dept-prof-row\"><strong>Qualifications:</strong> M.Com.</div><div class=\"ssmrv-dept-prof-row\"><strong>Experience:</strong> Teaching Experience in Commerce &amp; Taxation</div><div class=\"ssmrv-dept-prof-row\"><strong>Expertise:</strong> Integrated Goods and Services Tax (IGST) Act &amp; Business Decisions</div><div class=\"ssmrv-dept-prof-row ssmrv-dept-prof-comm\"><strong>Role:</strong> Member — Forum for Strength and Intellect (FSI)</div></div></div><div class=\"ssmrv-dept-profile-item\" data-profile-id=\"mrs-madhuri-s-d\" title=\"Click to view full profile of Mrs. Madhuri S. D.\"><div class=\"ssmrv-dept-prof-header\"><span class=\"ssmrv-dept-prof-name\">Mrs. Madhuri S. D.</span></div><div class=\"ssmrv-faculty-badges\"><span class=\"ssmrv-badge-desig\">Assistant Professor — PG Commerce</span><span class=\"ssmrv-badge-dept\">PG Commerce (M.Com)</span></div><div class=\"ssmrv-dept-prof-actions\"><span class=\"ssmrv-dept-prof-cta\">👤 View Full Profile</span><a href=\"https://nmkrv.edu.in/m-com/\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"ssmrv-dept-visit-btn\" onclick=\"event.stopPropagation();\">🌐 Visit Website Page ↗</a></div><div class=\"ssmrv-dept-prof-meta\"><div class=\"ssmrv-dept-prof-row\"><strong>Qualifications:</strong> M.Com., MBA, PGDBFM</div><div class=\"ssmrv-dept-prof-row\"><strong>Experience:</strong> Postgraduate Teaching Experience in Commerce &amp; Management</div><div class=\"ssmrv-dept-prof-row\"><strong>Expertise:</strong> Strategic Management, Advanced Financial Management, Banking &amp; Risk Management</div><div class=\"ssmrv-dept-prof-row ssmrv-dept-prof-comm\"><strong>Role:</strong> PG Department of Commerce (M.Com)</div></div></div><div class=\"ssmrv-dept-profile-item\" data-profile-id=\"dr-krishika-m-a\" title=\"Click to view full profile of Dr. Krishika M. A.\"><div class=\"ssmrv-dept-prof-header\"><span class=\"ssmrv-dept-prof-name\">Dr. Krishika M. A.</span></div><div class=\"ssmrv-faculty-badges\"><span class=\"ssmrv-badge-desig\">Assistant Professor — PG Commerce</span><span class=\"ssmrv-badge-dept\">PG Commerce (M.Com)</span></div><div class=\"ssmrv-dept-prof-actions\"><span class=\"ssmrv-dept-prof-cta\">👤 View Full Profile</span><a href=\"https://nmkrv.edu.in/m-com/\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"ssmrv-dept-visit-btn\" onclick=\"event.stopPropagation();\">🌐 Visit Website Page ↗</a></div><div class=\"ssmrv-dept-prof-meta\"><div class=\"ssmrv-dept-prof-row\"><strong>Qualifications:</strong> M.Com., M.Phil., Ph.D.</div><div class=\"ssmrv-dept-prof-row\"><strong>Experience:</strong> Postgraduate Teaching &amp; Research Experience</div><div class=\"ssmrv-dept-prof-row\"><strong>Expertise:</strong> Business Research Methods, Corporate Financial Reporting &amp; Quantitative Techniques</div><div class=\"ssmrv-dept-prof-row ssmrv-dept-prof-comm\"><strong>Role:</strong> PG Department of Commerce (M.Com)</div></div></div></div>",
    "buttons": [
      {
        "text": "👤 Dr. Renuka Somalu Rathod",
        "action": "profile:dr-renuka-somalu-rathod"
      },
      {
        "text": "👤 Prof. Manjunatha R.",
        "action": "profile:prof-manjunatha-r"
      },
      {
        "text": "👤 Mrs. Jyothi R. Aiyangar",
        "action": "profile:mrs-jyothi-r-aiyangar"
      },
      {
        "text": "👤 Mrs. Geetha P.",
        "action": "profile:mrs-geetha-p"
      },
      {
        "text": "👤 Mrs. Shilpa A.",
        "action": "profile:mrs-shilpa-a"
      },
      {
        "text": "👤 Ms. Manasa J.",
        "action": "profile:ms-manasa-j"
      },
      {
        "text": "👤 Mrs. Anu Revamma Parvathi",
        "action": "profile:mrs-anu-revamma-parvathi"
      },
      {
        "text": "👤 Mrs. Sarala D.",
        "action": "profile:mrs-sarala-d"
      },
      {
        "text": "👤 Mrs. Chinmayee S. Dixit",
        "action": "profile:mrs-chinmayee-s-dixit"
      },
      {
        "text": "👤 Mrs. Swetha A. M.",
        "action": "profile:mrs-swetha-a-m"
      },
      {
        "text": "👤 Mrs. Prathiksha P.",
        "action": "profile:mrs-prathiksha-p"
      },
      {
        "text": "👤 Ms. Rajeshwari Nag Shilpa",
        "action": "profile:ms-rajeshwari-nag-shilpa"
      },
      {
        "text": "👤 Ms. Dhrakshayini",
        "action": "profile:ms-dhrakshayini"
      },
      {
        "text": "👤 Ms. Shilpa Navin",
        "action": "profile:ms-shilpa-navin"
      },
      {
        "text": "👤 Dr. S. V. Shridhara Murthy",
        "action": "profile:dr-shridhar-murthy"
      },
      {
        "text": "👤 Ms. Shashirekha B. V.",
        "action": "profile:ms-shashirekha-b-v"
      },
      {
        "text": "👤 Ms. Shobha V.",
        "action": "profile:ms-shobha-v"
      },
      {
        "text": "👤 Mrs. Madhuri S. D.",
        "action": "profile:mrs-madhuri-s-d"
      },
      {
        "text": "👤 Dr. Krishika M. A.",
        "action": "profile:dr-krishika-m-a"
      },
      {
        "text": "🌐 Visit Department Webpage ↗",
        "url": "https://nmkrv.edu.in/commerce/"
      },
      {
        "text": "👨‍🏫 All Faculty Departments",
        "action": "flow:faculty"
      }
    ]
  },
  "profile_dr-renuka-somalu-rathod": {
    "id": "profile_dr-renuka-somalu-rathod",
    "pageUrl": "https://nmkrv.edu.in/commerce/",
    "message": "<div class=\"ssmrv-faculty-card is-full-profile\"><div class=\"ssmrv-faculty-name\">Dr. Renuka Somalu Rathod</div><div class=\"ssmrv-faculty-badges\"><span class=\"ssmrv-badge-desig\">Assistant Professor</span><span class=\"ssmrv-badge-dept\">Commerce (B.Com &amp; M.Com)</span></div><div class=\"ssmrv-fac-actions\"><a href=\"https://nmkrv.edu.in/commerce/\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"ssmrv-visit-website-btn\">🌐 Visit Official Website Page ↗</a></div><div class=\"ssmrv-faculty-meta\"><div class=\"ssmrv-fac-row\"><span class=\"ssmrv-fac-label\">🎓 Qualifications</span><span class=\"ssmrv-fac-val\">M.Com., Ph.D.</span></div><div class=\"ssmrv-fac-row\"><span class=\"ssmrv-fac-label\">⏳ Experience</span><span class=\"ssmrv-fac-val\">Senior Faculty &amp; Research Guide in Commerce</span></div><div class=\"ssmrv-fac-row\"><span class=\"ssmrv-fac-label\">🔬 Areas of Expertise</span><span class=\"ssmrv-fac-val\">Taxation Law and Practice, Corporate Accounting &amp; Financial Management</span></div><div class=\"ssmrv-fac-row\"><span class=\"ssmrv-fac-label\">🛡️ Committee / Role</span><span class=\"ssmrv-fac-val ssmrv-fac-role-val\">Research Faculty — Commerce</span></div><div class=\"ssmrv-fac-section\"><div class=\"ssmrv-fac-sec-title\">📖 Profile Overview</div><div class=\"ssmrv-fac-sec-text\">Dr. Renuka Somalu Rathod is an Assistant Professor and Research Faculty member in the Department of Commerce at NMKRV College, specializing in Taxation Law and Practice and Corporate Accounting.</div></div><div class=\"ssmrv-fac-section\"><div class=\"ssmrv-fac-sec-title\">🏆 Key Highlights</div><div class=\"ssmrv-fac-sec-text\">Recognized Research Faculty &amp; E-Content Developer for Taxation Law and Practice.</div></div><div class=\"ssmrv-fac-contact\"><div>📧 <a href=\"mailto:renukasrathod.nmkrv@rvei.edu.in\">renukasrathod.nmkrv@rvei.edu.in</a></div><div>📞 <a href=\"tel:08069018900\">080-69018900</a></div></div></div></div>",
    "buttons": [
      {
        "text": "🌐 Visit Official Website Page ↗",
        "url": "https://nmkrv.edu.in/commerce/",
        "isPrimary": true
      },
      {
        "text": "🏛️ 📊 Commerce",
        "action": "flow:faculty_commerce"
      },
      {
        "text": "👨‍🏫 All Faculty Departments",
        "action": "flow:faculty"
      }
    ]
  },
  "profile_prof-manjunatha-r": {
    "id": "profile_prof-manjunatha-r",
    "pageUrl": "https://nmkrv.edu.in/commerce/",
    "message": "<div class=\"ssmrv-faculty-card is-full-profile\"><div class=\"ssmrv-faculty-name\">Prof. Manjunatha R.</div><div class=\"ssmrv-faculty-badges\"><span class=\"ssmrv-badge-desig\">Assistant Professor</span><span class=\"ssmrv-badge-dept\">Commerce (B.Com)</span></div><div class=\"ssmrv-fac-actions\"><a href=\"https://nmkrv.edu.in/commerce/\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"ssmrv-visit-website-btn\">🌐 Visit Official Website Page ↗</a></div><div class=\"ssmrv-faculty-meta\"><div class=\"ssmrv-fac-row\"><span class=\"ssmrv-fac-label\">🎓 Qualifications</span><span class=\"ssmrv-fac-val\">M.Com., NET</span></div><div class=\"ssmrv-fac-row\"><span class=\"ssmrv-fac-label\">⏳ Experience</span><span class=\"ssmrv-fac-val\">Senior Teaching Experience in Commerce &amp; Accounting</span></div><div class=\"ssmrv-fac-row\"><span class=\"ssmrv-fac-label\">🔬 Areas of Expertise</span><span class=\"ssmrv-fac-val\">Advanced Corporate Accounting, Holding Company Accounts &amp; Financial Reporting</span></div><div class=\"ssmrv-fac-row\"><span class=\"ssmrv-fac-label\">🛡️ Committee / Role</span><span class=\"ssmrv-fac-val ssmrv-fac-role-val\">Executive Committee Member — Unnat Bharat Abhiyan (UBA)</span></div><div class=\"ssmrv-fac-section\"><div class=\"ssmrv-fac-sec-title\">📖 Profile Overview</div><div class=\"ssmrv-fac-sec-text\">Prof. Manjunatha R. serves as Assistant Professor in the Department of Commerce at NMKRV College and is an Executive Committee Member of the Unnat Bharat Abhiyan (UBA) Cell.</div></div><div class=\"ssmrv-fac-section\"><div class=\"ssmrv-fac-sec-title\">🏆 Key Highlights</div><div class=\"ssmrv-fac-sec-text\">E-Content Author for Advanced Corporate Accounting &amp; UBA Executive Committee Member.</div></div><div class=\"ssmrv-fac-contact\"><div>📧 <a href=\"mailto:manjunathar.nmkrv@rvei.edu.in\">manjunathar.nmkrv@rvei.edu.in</a></div><div>📞 <a href=\"tel:08069018900\">080-69018900</a></div></div></div></div>",
    "buttons": [
      {
        "text": "🌐 Visit Official Website Page ↗",
        "url": "https://nmkrv.edu.in/commerce/",
        "isPrimary": true
      },
      {
        "text": "🏛️ 📊 Commerce",
        "action": "flow:faculty_commerce"
      },
      {
        "text": "👨‍🏫 All Faculty Departments",
        "action": "flow:faculty"
      }
    ]
  },
  "profile_mrs-jyothi-r-aiyangar": {
    "id": "profile_mrs-jyothi-r-aiyangar",
    "pageUrl": "https://nmkrv.edu.in/commerce/",
    "message": "<div class=\"ssmrv-faculty-card is-full-profile\"><div class=\"ssmrv-faculty-name\">Mrs. Jyothi R. Aiyangar</div><div class=\"ssmrv-faculty-badges\"><span class=\"ssmrv-badge-desig\">Assistant Professor</span><span class=\"ssmrv-badge-dept\">Commerce (B.Com)</span></div><div class=\"ssmrv-fac-actions\"><a href=\"https://nmkrv.edu.in/commerce/\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"ssmrv-visit-website-btn\">🌐 Visit Official Website Page ↗</a></div><div class=\"ssmrv-faculty-meta\"><div class=\"ssmrv-fac-row\"><span class=\"ssmrv-fac-label\">🎓 Qualifications</span><span class=\"ssmrv-fac-val\">M.Com., PGDFM</span></div><div class=\"ssmrv-fac-row\"><span class=\"ssmrv-fac-label\">⏳ Experience</span><span class=\"ssmrv-fac-val\">Academic &amp; Examination Administration Experience</span></div><div class=\"ssmrv-fac-row\"><span class=\"ssmrv-fac-label\">🔬 Areas of Expertise</span><span class=\"ssmrv-fac-val\">Principles and Practices of Auditing, Financial Management &amp; Corporate Accounting</span></div><div class=\"ssmrv-fac-row\"><span class=\"ssmrv-fac-label\">🛡️ Committee / Role</span><span class=\"ssmrv-fac-val ssmrv-fac-role-val\">Exam Core Team — COE | Member — Innovation &amp; Social Media Cell</span></div><div class=\"ssmrv-fac-section\"><div class=\"ssmrv-fac-sec-title\">📖 Profile Overview</div><div class=\"ssmrv-fac-sec-text\">Mrs. Jyothi R. Aiyangar is an Assistant Professor in the Department of Commerce and a core member of the Office of the Controller of Examinations (COE) and the Innovation &amp; Social Media Cell.</div></div><div class=\"ssmrv-fac-section\"><div class=\"ssmrv-fac-sec-title\">🏆 Key Highlights</div><div class=\"ssmrv-fac-sec-text\">Examination Core Team Member &amp; Social Media Cell Member.</div></div><div class=\"ssmrv-fac-contact\"><div>📧 <a href=\"mailto:jyothir.nmkrv@rvei.edu.in\">jyothir.nmkrv@rvei.edu.in</a></div><div>📞 <a href=\"tel:08069018900\">080-69018900</a></div></div></div></div>",
    "buttons": [
      {
        "text": "🌐 Visit Official Website Page ↗",
        "url": "https://nmkrv.edu.in/commerce/",
        "isPrimary": true
      },
      {
        "text": "🏛️ 📊 Commerce",
        "action": "flow:faculty_commerce"
      },
      {
        "text": "👨‍🏫 All Faculty Departments",
        "action": "flow:faculty"
      }
    ]
  },
  "profile_mrs-geetha-p": {
    "id": "profile_mrs-geetha-p",
    "pageUrl": "https://nmkrv.edu.in/commerce/",
    "message": "<div class=\"ssmrv-faculty-card is-full-profile\"><div class=\"ssmrv-faculty-name\">Mrs. Geetha P.</div><div class=\"ssmrv-faculty-badges\"><span class=\"ssmrv-badge-desig\">Assistant Professor</span><span class=\"ssmrv-badge-dept\">Commerce (B.Com)</span></div><div class=\"ssmrv-fac-actions\"><a href=\"https://nmkrv.edu.in/commerce/\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"ssmrv-visit-website-btn\">🌐 Visit Official Website Page ↗</a></div><div class=\"ssmrv-faculty-meta\"><div class=\"ssmrv-fac-row\"><span class=\"ssmrv-fac-label\">🎓 Qualifications</span><span class=\"ssmrv-fac-val\">M.Com.</span></div><div class=\"ssmrv-fac-row\"><span class=\"ssmrv-fac-label\">⏳ Experience</span><span class=\"ssmrv-fac-val\">Teaching Experience in Commerce &amp; E-Business</span></div><div class=\"ssmrv-fac-row\"><span class=\"ssmrv-fac-label\">🔬 Areas of Expertise</span><span class=\"ssmrv-fac-val\">E-Business and Accounting, Financial Accounting &amp; Marketing Management</span></div><div class=\"ssmrv-fac-row\"><span class=\"ssmrv-fac-label\">🛡️ Committee / Role</span><span class=\"ssmrv-fac-val ssmrv-fac-role-val\">Coordinator — Fine Arts Club | Member — SC/ST Committee</span></div><div class=\"ssmrv-fac-section\"><div class=\"ssmrv-fac-sec-title\">📖 Profile Overview</div><div class=\"ssmrv-fac-sec-text\">Mrs. Geetha P. is an Assistant Professor in the Department of Commerce at NMKRV College. She serves as the Coordinator of the Fine Arts Club and is a member of the SC/ST Committee.</div></div><div class=\"ssmrv-fac-section\"><div class=\"ssmrv-fac-sec-title\">🏆 Key Highlights</div><div class=\"ssmrv-fac-sec-text\">Coordinator of Fine Arts Club &amp; Member of SC/ST Committee.</div></div><div class=\"ssmrv-fac-contact\"><div>📧 <a href=\"mailto:geethap.nmkrv@rvei.edu.in\">geethap.nmkrv@rvei.edu.in</a></div><div>📞 <a href=\"tel:08069018900\">080-69018900</a></div></div></div></div>",
    "buttons": [
      {
        "text": "🌐 Visit Official Website Page ↗",
        "url": "https://nmkrv.edu.in/commerce/",
        "isPrimary": true
      },
      {
        "text": "🏛️ 📊 Commerce",
        "action": "flow:faculty_commerce"
      },
      {
        "text": "👨‍🏫 All Faculty Departments",
        "action": "flow:faculty"
      }
    ]
  },
  "profile_mrs-shilpa-a": {
    "id": "profile_mrs-shilpa-a",
    "pageUrl": "https://nmkrv.edu.in/commerce/",
    "message": "<div class=\"ssmrv-faculty-card is-full-profile\"><div class=\"ssmrv-faculty-name\">Mrs. Shilpa A.</div><div class=\"ssmrv-faculty-badges\"><span class=\"ssmrv-badge-desig\">Assistant Professor</span><span class=\"ssmrv-badge-dept\">Commerce (B.Com)</span></div><div class=\"ssmrv-fac-actions\"><a href=\"https://nmkrv.edu.in/commerce/\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"ssmrv-visit-website-btn\">🌐 Visit Official Website Page ↗</a></div><div class=\"ssmrv-faculty-meta\"><div class=\"ssmrv-fac-row\"><span class=\"ssmrv-fac-label\">🎓 Qualifications</span><span class=\"ssmrv-fac-val\">M.Com.</span></div><div class=\"ssmrv-fac-row\"><span class=\"ssmrv-fac-label\">⏳ Experience</span><span class=\"ssmrv-fac-val\">Teaching Experience in Commerce &amp; Capital Markets</span></div><div class=\"ssmrv-fac-row\"><span class=\"ssmrv-fac-label\">🔬 Areas of Expertise</span><span class=\"ssmrv-fac-val\">Stock and Commodity Markets, Financial Services &amp; Corporate Administration</span></div><div class=\"ssmrv-fac-row\"><span class=\"ssmrv-fac-label\">🛡️ Committee / Role</span><span class=\"ssmrv-fac-val ssmrv-fac-role-val\">Committee Member — Fine Arts Club</span></div><div class=\"ssmrv-fac-section\"><div class=\"ssmrv-fac-sec-title\">📖 Profile Overview</div><div class=\"ssmrv-fac-sec-text\">Mrs. Shilpa A. is an Assistant Professor in the Department of Commerce and serves on the Fine Arts Club Committee.</div></div><div class=\"ssmrv-fac-section\"><div class=\"ssmrv-fac-sec-title\">🏆 Key Highlights</div><div class=\"ssmrv-fac-sec-text\">E-Content Developer for Stock and Commodity Markets.</div></div><div class=\"ssmrv-fac-contact\"><div>📧 <a href=\"mailto:shilpaa.nmkrv@rvei.edu.in\">shilpaa.nmkrv@rvei.edu.in</a></div><div>📞 <a href=\"tel:08069018900\">080-69018900</a></div></div></div></div>",
    "buttons": [
      {
        "text": "🌐 Visit Official Website Page ↗",
        "url": "https://nmkrv.edu.in/commerce/",
        "isPrimary": true
      },
      {
        "text": "🏛️ 📊 Commerce",
        "action": "flow:faculty_commerce"
      },
      {
        "text": "👨‍🏫 All Faculty Departments",
        "action": "flow:faculty"
      }
    ]
  },
  "profile_ms-manasa-j": {
    "id": "profile_ms-manasa-j",
    "pageUrl": "https://nmkrv.edu.in/commerce/",
    "message": "<div class=\"ssmrv-faculty-card is-full-profile\"><div class=\"ssmrv-faculty-name\">Ms. Manasa J.</div><div class=\"ssmrv-faculty-badges\"><span class=\"ssmrv-badge-desig\">Assistant Professor</span><span class=\"ssmrv-badge-dept\">Commerce (B.Com)</span></div><div class=\"ssmrv-fac-actions\"><a href=\"https://nmkrv.edu.in/commerce/\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"ssmrv-visit-website-btn\">🌐 Visit Official Website Page ↗</a></div><div class=\"ssmrv-faculty-meta\"><div class=\"ssmrv-fac-row\"><span class=\"ssmrv-fac-label\">🎓 Qualifications</span><span class=\"ssmrv-fac-val\">M.Com., KSET</span></div><div class=\"ssmrv-fac-row\"><span class=\"ssmrv-fac-label\">⏳ Experience</span><span class=\"ssmrv-fac-val\">Teaching Experience in Commerce &amp; Taxation</span></div><div class=\"ssmrv-fac-row\"><span class=\"ssmrv-fac-label\">🔬 Areas of Expertise</span><span class=\"ssmrv-fac-val\">Goods and Services Tax (GST), Indirect Taxation &amp; Financial Accounting</span></div><div class=\"ssmrv-fac-row\"><span class=\"ssmrv-fac-label\">🛡️ Committee / Role</span><span class=\"ssmrv-fac-val ssmrv-fac-role-val\">Department of Commerce</span></div><div class=\"ssmrv-fac-section\"><div class=\"ssmrv-fac-sec-title\">📖 Profile Overview</div><div class=\"ssmrv-fac-sec-text\">Ms. Manasa J. is an Assistant Professor in the Department of Commerce at NMKRV College, specializing in Goods and Services Tax (GST) and Financial Accounting.</div></div><div class=\"ssmrv-fac-section\"><div class=\"ssmrv-fac-sec-title\">🏆 Key Highlights</div><div class=\"ssmrv-fac-sec-text\">E-Content Author for Goods and Services Tax-II.</div></div><div class=\"ssmrv-fac-contact\"><div>📧 <a href=\"mailto:manasaj.nmkrv@rvei.edu.in\">manasaj.nmkrv@rvei.edu.in</a></div><div>📞 <a href=\"tel:08069018900\">080-69018900</a></div></div></div></div>",
    "buttons": [
      {
        "text": "🌐 Visit Official Website Page ↗",
        "url": "https://nmkrv.edu.in/commerce/",
        "isPrimary": true
      },
      {
        "text": "🏛️ 📊 Commerce",
        "action": "flow:faculty_commerce"
      },
      {
        "text": "👨‍🏫 All Faculty Departments",
        "action": "flow:faculty"
      }
    ]
  },
  "profile_mrs-anu-revamma-parvathi": {
    "id": "profile_mrs-anu-revamma-parvathi",
    "pageUrl": "https://nmkrv.edu.in/commerce/",
    "message": "<div class=\"ssmrv-faculty-card is-full-profile\"><div class=\"ssmrv-faculty-name\">Mrs. Anu Revamma Parvathi</div><div class=\"ssmrv-faculty-badges\"><span class=\"ssmrv-badge-desig\">Assistant Professor</span><span class=\"ssmrv-badge-dept\">Commerce (B.Com)</span></div><div class=\"ssmrv-fac-actions\"><a href=\"https://nmkrv.edu.in/commerce/\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"ssmrv-visit-website-btn\">🌐 Visit Official Website Page ↗</a></div><div class=\"ssmrv-faculty-meta\"><div class=\"ssmrv-fac-row\"><span class=\"ssmrv-fac-label\">🎓 Qualifications</span><span class=\"ssmrv-fac-val\">M.Com., KSET</span></div><div class=\"ssmrv-fac-row\"><span class=\"ssmrv-fac-label\">⏳ Experience</span><span class=\"ssmrv-fac-val\">Teaching &amp; Institutional Committee Leadership</span></div><div class=\"ssmrv-fac-row\"><span class=\"ssmrv-fac-label\">🔬 Areas of Expertise</span><span class=\"ssmrv-fac-val\">Advanced Financial Accounting, Corporate Accounting &amp; Business Operations</span></div><div class=\"ssmrv-fac-row\"><span class=\"ssmrv-fac-label\">🛡️ Committee / Role</span><span class=\"ssmrv-fac-val ssmrv-fac-role-val\">Coordinator — Anti-Ragging Cell, Innovation Cell &amp; Social Media Cell | IQAC &amp; Youth Red Cross Member</span></div><div class=\"ssmrv-fac-section\"><div class=\"ssmrv-fac-sec-title\">📖 Profile Overview</div><div class=\"ssmrv-fac-sec-text\">Mrs. Anu Revamma Parvathi is an Assistant Professor in the Department of Commerce. She serves as the Coordinator of the Anti-Ragging Cell, Coordinator of the Innovation &amp; Social Media Cell, Member of the IQAC, and Coordinator/Member of the Youth Red Cross.</div></div><div class=\"ssmrv-fac-section\"><div class=\"ssmrv-fac-sec-title\">🏆 Key Highlights</div><div class=\"ssmrv-fac-sec-text\">Coordinator — Anti-Ragging Cell &amp; Innovation/Social Media Cell | IQAC Member.</div></div><div class=\"ssmrv-fac-contact\"><div>📧 <a href=\"mailto:anurevammap.nmkrv@rvei.edu.in\">anurevammap.nmkrv@rvei.edu.in</a></div><div>📞 <a href=\"tel:08069018900\">080-69018900</a></div></div></div></div>",
    "buttons": [
      {
        "text": "🌐 Visit Official Website Page ↗",
        "url": "https://nmkrv.edu.in/commerce/",
        "isPrimary": true
      },
      {
        "text": "🏛️ 📊 Commerce",
        "action": "flow:faculty_commerce"
      },
      {
        "text": "👨‍🏫 All Faculty Departments",
        "action": "flow:faculty"
      }
    ]
  },
  "profile_mrs-sarala-d": {
    "id": "profile_mrs-sarala-d",
    "pageUrl": "https://nmkrv.edu.in/commerce/",
    "message": "<div class=\"ssmrv-faculty-card is-full-profile\"><div class=\"ssmrv-faculty-name\">Mrs. Sarala D.</div><div class=\"ssmrv-faculty-badges\"><span class=\"ssmrv-badge-desig\">Assistant Professor</span><span class=\"ssmrv-badge-dept\">Commerce (B.Com)</span></div><div class=\"ssmrv-fac-actions\"><a href=\"https://nmkrv.edu.in/commerce/\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"ssmrv-visit-website-btn\">🌐 Visit Official Website Page ↗</a></div><div class=\"ssmrv-faculty-meta\"><div class=\"ssmrv-fac-row\"><span class=\"ssmrv-fac-label\">🎓 Qualifications</span><span class=\"ssmrv-fac-val\">M.Com., B.Ed., DFD, K-SET</span></div><div class=\"ssmrv-fac-row\"><span class=\"ssmrv-fac-label\">⏳ Experience</span><span class=\"ssmrv-fac-val\">Teaching Experience in Quantitative Analysis &amp; Commerce</span></div><div class=\"ssmrv-fac-row\"><span class=\"ssmrv-fac-label\">🔬 Areas of Expertise</span><span class=\"ssmrv-fac-val\">Quantitative Analysis for Business Decisions (QABD), Statistics &amp; Cost Accounting</span></div><div class=\"ssmrv-fac-row\"><span class=\"ssmrv-fac-label\">🛡️ Committee / Role</span><span class=\"ssmrv-fac-val ssmrv-fac-role-val\">Member — IQAC, Anti-Ragging Cell &amp; Forum for Strength and Intellect</span></div><div class=\"ssmrv-fac-section\"><div class=\"ssmrv-fac-sec-title\">📖 Profile Overview</div><div class=\"ssmrv-fac-sec-text\">Mrs. Sarala D. is an Assistant Professor in the Department of Commerce and serves on the IQAC, Anti-Ragging Cell, and Forum for Strength and Intellect (FSI).</div></div><div class=\"ssmrv-fac-section\"><div class=\"ssmrv-fac-sec-title\">🏆 Key Highlights</div><div class=\"ssmrv-fac-sec-text\">IQAC Member, Anti-Ragging Cell Member &amp; FSI Committee Member.</div></div><div class=\"ssmrv-fac-contact\"><div>📧 <a href=\"mailto:saralad.nmkrv@rvei.edu.in\">saralad.nmkrv@rvei.edu.in</a></div><div>📞 <a href=\"tel:08069018900\">080-69018900</a></div></div></div></div>",
    "buttons": [
      {
        "text": "🌐 Visit Official Website Page ↗",
        "url": "https://nmkrv.edu.in/commerce/",
        "isPrimary": true
      },
      {
        "text": "🏛️ 📊 Commerce",
        "action": "flow:faculty_commerce"
      },
      {
        "text": "👨‍🏫 All Faculty Departments",
        "action": "flow:faculty"
      }
    ]
  },
  "profile_mrs-chinmayee-s-dixit": {
    "id": "profile_mrs-chinmayee-s-dixit",
    "pageUrl": "https://nmkrv.edu.in/commerce/",
    "message": "<div class=\"ssmrv-faculty-card is-full-profile\"><div class=\"ssmrv-faculty-name\">Mrs. Chinmayee S. Dixit</div><div class=\"ssmrv-faculty-badges\"><span class=\"ssmrv-badge-desig\">Assistant Professor</span><span class=\"ssmrv-badge-dept\">Commerce (B.Com)</span></div><div class=\"ssmrv-fac-actions\"><a href=\"https://nmkrv.edu.in/commerce/\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"ssmrv-visit-website-btn\">🌐 Visit Official Website Page ↗</a></div><div class=\"ssmrv-faculty-meta\"><div class=\"ssmrv-fac-row\"><span class=\"ssmrv-fac-label\">🎓 Qualifications</span><span class=\"ssmrv-fac-val\">M.Com.</span></div><div class=\"ssmrv-fac-row\"><span class=\"ssmrv-fac-label\">⏳ Experience</span><span class=\"ssmrv-fac-val\">Teaching Experience in Commerce &amp; Management</span></div><div class=\"ssmrv-fac-row\"><span class=\"ssmrv-fac-label\">🔬 Areas of Expertise</span><span class=\"ssmrv-fac-val\">Financial Accounting, Cost Management &amp; Corporate Administration</span></div><div class=\"ssmrv-fac-row\"><span class=\"ssmrv-fac-label\">🛡️ Committee / Role</span><span class=\"ssmrv-fac-val ssmrv-fac-role-val\">Department of Commerce</span></div><div class=\"ssmrv-fac-section\"><div class=\"ssmrv-fac-sec-title\">📖 Profile Overview</div><div class=\"ssmrv-fac-sec-text\">Mrs. Chinmayee S. Dixit serves as Assistant Professor in the Department of Commerce at NMKRV College.</div></div><div class=\"ssmrv-fac-section\"><div class=\"ssmrv-fac-sec-title\">🏆 Key Highlights</div><div class=\"ssmrv-fac-sec-text\">Faculty Member, Department of Commerce.</div></div><div class=\"ssmrv-fac-contact\"><div>📧 <a href=\"mailto:nmkrv@rvei.edu.in\">nmkrv@rvei.edu.in</a></div><div>📞 <a href=\"tel:08069018900\">080-69018900</a></div></div></div></div>",
    "buttons": [
      {
        "text": "🌐 Visit Official Website Page ↗",
        "url": "https://nmkrv.edu.in/commerce/",
        "isPrimary": true
      },
      {
        "text": "🏛️ 📊 Commerce",
        "action": "flow:faculty_commerce"
      },
      {
        "text": "👨‍🏫 All Faculty Departments",
        "action": "flow:faculty"
      }
    ]
  },
  "profile_mrs-swetha-a-m": {
    "id": "profile_mrs-swetha-a-m",
    "pageUrl": "https://nmkrv.edu.in/commerce/",
    "message": "<div class=\"ssmrv-faculty-card is-full-profile\"><div class=\"ssmrv-faculty-name\">Mrs. Swetha A. M.</div><div class=\"ssmrv-faculty-badges\"><span class=\"ssmrv-badge-desig\">Assistant Professor</span><span class=\"ssmrv-badge-dept\">Commerce (B.Com)</span></div><div class=\"ssmrv-fac-actions\"><a href=\"https://nmkrv.edu.in/commerce/\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"ssmrv-visit-website-btn\">🌐 Visit Official Website Page ↗</a></div><div class=\"ssmrv-faculty-meta\"><div class=\"ssmrv-fac-row\"><span class=\"ssmrv-fac-label\">🎓 Qualifications</span><span class=\"ssmrv-fac-val\">M.Com., KSET</span></div><div class=\"ssmrv-fac-row\"><span class=\"ssmrv-fac-label\">⏳ Experience</span><span class=\"ssmrv-fac-val\">Teaching Experience in Commerce &amp; Accounting</span></div><div class=\"ssmrv-fac-row\"><span class=\"ssmrv-fac-label\">🔬 Areas of Expertise</span><span class=\"ssmrv-fac-val\">Corporate Accounting, Financial Management &amp; Banking Operations</span></div><div class=\"ssmrv-fac-row\"><span class=\"ssmrv-fac-label\">🛡️ Committee / Role</span><span class=\"ssmrv-fac-val ssmrv-fac-role-val\">Department of Commerce</span></div><div class=\"ssmrv-fac-section\"><div class=\"ssmrv-fac-sec-title\">📖 Profile Overview</div><div class=\"ssmrv-fac-sec-text\">Mrs. Swetha A. M. serves as Assistant Professor in the Department of Commerce at NMKRV College.</div></div><div class=\"ssmrv-fac-section\"><div class=\"ssmrv-fac-sec-title\">🏆 Key Highlights</div><div class=\"ssmrv-fac-sec-text\">KSET Qualified Faculty in Commerce.</div></div><div class=\"ssmrv-fac-contact\"><div>📧 <a href=\"mailto:nmkrv@rvei.edu.in\">nmkrv@rvei.edu.in</a></div><div>📞 <a href=\"tel:08069018900\">080-69018900</a></div></div></div></div>",
    "buttons": [
      {
        "text": "🌐 Visit Official Website Page ↗",
        "url": "https://nmkrv.edu.in/commerce/",
        "isPrimary": true
      },
      {
        "text": "🏛️ 📊 Commerce",
        "action": "flow:faculty_commerce"
      },
      {
        "text": "👨‍🏫 All Faculty Departments",
        "action": "flow:faculty"
      }
    ]
  },
  "profile_mrs-prathiksha-p": {
    "id": "profile_mrs-prathiksha-p",
    "pageUrl": "https://nmkrv.edu.in/commerce/",
    "message": "<div class=\"ssmrv-faculty-card is-full-profile\"><div class=\"ssmrv-faculty-name\">Mrs. Prathiksha P.</div><div class=\"ssmrv-faculty-badges\"><span class=\"ssmrv-badge-desig\">Lecturer</span><span class=\"ssmrv-badge-dept\">Commerce (B.Com)</span></div><div class=\"ssmrv-fac-actions\"><a href=\"https://nmkrv.edu.in/commerce/\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"ssmrv-visit-website-btn\">🌐 Visit Official Website Page ↗</a></div><div class=\"ssmrv-faculty-meta\"><div class=\"ssmrv-fac-row\"><span class=\"ssmrv-fac-label\">🎓 Qualifications</span><span class=\"ssmrv-fac-val\">M.Com.</span></div><div class=\"ssmrv-fac-row\"><span class=\"ssmrv-fac-label\">⏳ Experience</span><span class=\"ssmrv-fac-val\">Teaching Experience in Commerce</span></div><div class=\"ssmrv-fac-row\"><span class=\"ssmrv-fac-label\">🔬 Areas of Expertise</span><span class=\"ssmrv-fac-val\">Financial Accounting, Business Management &amp; Marketing</span></div><div class=\"ssmrv-fac-row\"><span class=\"ssmrv-fac-label\">🛡️ Committee / Role</span><span class=\"ssmrv-fac-val ssmrv-fac-role-val\">Department of Commerce</span></div><div class=\"ssmrv-fac-section\"><div class=\"ssmrv-fac-sec-title\">📖 Profile Overview</div><div class=\"ssmrv-fac-sec-text\">Mrs. Prathiksha P. serves as Lecturer in the Department of Commerce at NMKRV College.</div></div><div class=\"ssmrv-fac-section\"><div class=\"ssmrv-fac-sec-title\">🏆 Key Highlights</div><div class=\"ssmrv-fac-sec-text\">Faculty Member, Department of Commerce.</div></div><div class=\"ssmrv-fac-contact\"><div>📧 <a href=\"mailto:nmkrv@rvei.edu.in\">nmkrv@rvei.edu.in</a></div><div>📞 <a href=\"tel:08069018900\">080-69018900</a></div></div></div></div>",
    "buttons": [
      {
        "text": "🌐 Visit Official Website Page ↗",
        "url": "https://nmkrv.edu.in/commerce/",
        "isPrimary": true
      },
      {
        "text": "🏛️ 📊 Commerce",
        "action": "flow:faculty_commerce"
      },
      {
        "text": "👨‍🏫 All Faculty Departments",
        "action": "flow:faculty"
      }
    ]
  },
  "profile_ms-rajeshwari-nag-shilpa": {
    "id": "profile_ms-rajeshwari-nag-shilpa",
    "pageUrl": "https://nmkrv.edu.in/commerce/",
    "message": "<div class=\"ssmrv-faculty-card is-full-profile\"><div class=\"ssmrv-faculty-name\">Ms. Rajeshwari Nag Shilpa</div><div class=\"ssmrv-faculty-badges\"><span class=\"ssmrv-badge-desig\">Assistant Professor</span><span class=\"ssmrv-badge-dept\">Commerce (B.Com)</span></div><div class=\"ssmrv-fac-actions\"><a href=\"https://nmkrv.edu.in/commerce/\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"ssmrv-visit-website-btn\">🌐 Visit Official Website Page ↗</a></div><div class=\"ssmrv-faculty-meta\"><div class=\"ssmrv-fac-row\"><span class=\"ssmrv-fac-label\">🎓 Qualifications</span><span class=\"ssmrv-fac-val\">M.Com.</span></div><div class=\"ssmrv-fac-row\"><span class=\"ssmrv-fac-label\">⏳ Experience</span><span class=\"ssmrv-fac-val\">Teaching Experience in Commerce</span></div><div class=\"ssmrv-fac-row\"><span class=\"ssmrv-fac-label\">🔬 Areas of Expertise</span><span class=\"ssmrv-fac-val\">Accounting, Taxation &amp; Corporate Administration</span></div><div class=\"ssmrv-fac-row\"><span class=\"ssmrv-fac-label\">🛡️ Committee / Role</span><span class=\"ssmrv-fac-val ssmrv-fac-role-val\">Department of Commerce</span></div><div class=\"ssmrv-fac-section\"><div class=\"ssmrv-fac-sec-title\">📖 Profile Overview</div><div class=\"ssmrv-fac-sec-text\">Ms. Rajeshwari Nag Shilpa serves as Assistant Professor in the Department of Commerce at NMKRV College.</div></div><div class=\"ssmrv-fac-section\"><div class=\"ssmrv-fac-sec-title\">🏆 Key Highlights</div><div class=\"ssmrv-fac-sec-text\">Faculty Member, Department of Commerce.</div></div><div class=\"ssmrv-fac-contact\"><div>📧 <a href=\"mailto:nmkrv@rvei.edu.in\">nmkrv@rvei.edu.in</a></div><div>📞 <a href=\"tel:08069018900\">080-69018900</a></div></div></div></div>",
    "buttons": [
      {
        "text": "🌐 Visit Official Website Page ↗",
        "url": "https://nmkrv.edu.in/commerce/",
        "isPrimary": true
      },
      {
        "text": "🏛️ 📊 Commerce",
        "action": "flow:faculty_commerce"
      },
      {
        "text": "👨‍🏫 All Faculty Departments",
        "action": "flow:faculty"
      }
    ]
  },
  "profile_ms-dhrakshayini": {
    "id": "profile_ms-dhrakshayini",
    "pageUrl": "https://nmkrv.edu.in/commerce/",
    "message": "<div class=\"ssmrv-faculty-card is-full-profile\"><div class=\"ssmrv-faculty-name\">Ms. Dhrakshayini</div><div class=\"ssmrv-faculty-badges\"><span class=\"ssmrv-badge-desig\">Assistant Professor</span><span class=\"ssmrv-badge-dept\">Commerce (B.Com)</span></div><div class=\"ssmrv-fac-actions\"><a href=\"https://nmkrv.edu.in/commerce/\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"ssmrv-visit-website-btn\">🌐 Visit Official Website Page ↗</a></div><div class=\"ssmrv-faculty-meta\"><div class=\"ssmrv-fac-row\"><span class=\"ssmrv-fac-label\">🎓 Qualifications</span><span class=\"ssmrv-fac-val\">M.Com.</span></div><div class=\"ssmrv-fac-row\"><span class=\"ssmrv-fac-label\">⏳ Experience</span><span class=\"ssmrv-fac-val\">Teaching Experience in Commerce</span></div><div class=\"ssmrv-fac-row\"><span class=\"ssmrv-fac-label\">🔬 Areas of Expertise</span><span class=\"ssmrv-fac-val\">Commerce, Financial Services &amp; Business Studies</span></div><div class=\"ssmrv-fac-row\"><span class=\"ssmrv-fac-label\">🛡️ Committee / Role</span><span class=\"ssmrv-fac-val ssmrv-fac-role-val\">Department of Commerce</span></div><div class=\"ssmrv-fac-section\"><div class=\"ssmrv-fac-sec-title\">📖 Profile Overview</div><div class=\"ssmrv-fac-sec-text\">Ms. Dhrakshayini serves as Assistant Professor in the Department of Commerce at NMKRV College.</div></div><div class=\"ssmrv-fac-section\"><div class=\"ssmrv-fac-sec-title\">🏆 Key Highlights</div><div class=\"ssmrv-fac-sec-text\">Faculty Member, Department of Commerce.</div></div><div class=\"ssmrv-fac-contact\"><div>📧 <a href=\"mailto:nmkrv@rvei.edu.in\">nmkrv@rvei.edu.in</a></div><div>📞 <a href=\"tel:08069018900\">080-69018900</a></div></div></div></div>",
    "buttons": [
      {
        "text": "🌐 Visit Official Website Page ↗",
        "url": "https://nmkrv.edu.in/commerce/",
        "isPrimary": true
      },
      {
        "text": "🏛️ 📊 Commerce",
        "action": "flow:faculty_commerce"
      },
      {
        "text": "👨‍🏫 All Faculty Departments",
        "action": "flow:faculty"
      }
    ]
  },
  "profile_ms-shilpa-navin": {
    "id": "profile_ms-shilpa-navin",
    "pageUrl": "https://nmkrv.edu.in/commerce/",
    "message": "<div class=\"ssmrv-faculty-card is-full-profile\"><div class=\"ssmrv-faculty-name\">Ms. Shilpa Navin</div><div class=\"ssmrv-faculty-badges\"><span class=\"ssmrv-badge-desig\">Assistant Professor</span><span class=\"ssmrv-badge-dept\">Commerce (B.Com)</span></div><div class=\"ssmrv-fac-actions\"><a href=\"https://nmkrv.edu.in/commerce/\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"ssmrv-visit-website-btn\">🌐 Visit Official Website Page ↗</a></div><div class=\"ssmrv-faculty-meta\"><div class=\"ssmrv-fac-row\"><span class=\"ssmrv-fac-label\">🎓 Qualifications</span><span class=\"ssmrv-fac-val\">M.Com.</span></div><div class=\"ssmrv-fac-row\"><span class=\"ssmrv-fac-label\">⏳ Experience</span><span class=\"ssmrv-fac-val\">Teaching Experience in Commerce</span></div><div class=\"ssmrv-fac-row\"><span class=\"ssmrv-fac-label\">🔬 Areas of Expertise</span><span class=\"ssmrv-fac-val\">Commerce, FinTech &amp; Business Accounting</span></div><div class=\"ssmrv-fac-row\"><span class=\"ssmrv-fac-label\">🛡️ Committee / Role</span><span class=\"ssmrv-fac-val ssmrv-fac-role-val\">Department of Commerce</span></div><div class=\"ssmrv-fac-section\"><div class=\"ssmrv-fac-sec-title\">📖 Profile Overview</div><div class=\"ssmrv-fac-sec-text\">Ms. Shilpa Navin serves as Assistant Professor in the Department of Commerce at NMKRV College.</div></div><div class=\"ssmrv-fac-section\"><div class=\"ssmrv-fac-sec-title\">🏆 Key Highlights</div><div class=\"ssmrv-fac-sec-text\">Faculty Member, Department of Commerce.</div></div><div class=\"ssmrv-fac-contact\"><div>📧 <a href=\"mailto:nmkrv@rvei.edu.in\">nmkrv@rvei.edu.in</a></div><div>📞 <a href=\"tel:08069018900\">080-69018900</a></div></div></div></div>",
    "buttons": [
      {
        "text": "🌐 Visit Official Website Page ↗",
        "url": "https://nmkrv.edu.in/commerce/",
        "isPrimary": true
      },
      {
        "text": "🏛️ 📊 Commerce",
        "action": "flow:faculty_commerce"
      },
      {
        "text": "👨‍🏫 All Faculty Departments",
        "action": "flow:faculty"
      }
    ]
  },
  "profile_dr-shridhar-murthy": {
    "id": "profile_dr-shridhar-murthy",
    "pageUrl": "https://nmkrv.edu.in/forum-for-strength-and-intellect/",
    "message": "<div class=\"ssmrv-faculty-card is-full-profile\"><div class=\"ssmrv-faculty-name\">Dr. S. V. Shridhara Murthy</div><div class=\"ssmrv-faculty-badges\"><span class=\"ssmrv-badge-desig\">Associate Professor</span><span class=\"ssmrv-badge-dept\">Commerce (B.Com)</span></div><div class=\"ssmrv-fac-actions\"><a href=\"https://nmkrv.edu.in/forum-for-strength-and-intellect/\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"ssmrv-visit-website-btn\">🌐 Visit Official Website Page ↗</a></div><div class=\"ssmrv-faculty-meta\"><div class=\"ssmrv-fac-row\"><span class=\"ssmrv-fac-label\">🎓 Qualifications</span><span class=\"ssmrv-fac-val\">M.Com., Ph.D.</span></div><div class=\"ssmrv-fac-row\"><span class=\"ssmrv-fac-label\">⏳ Experience</span><span class=\"ssmrv-fac-val\">Senior Associate Professor &amp; Research Investigator in Commerce</span></div><div class=\"ssmrv-fac-row\"><span class=\"ssmrv-fac-label\">🔬 Areas of Expertise</span><span class=\"ssmrv-fac-val\">Investment Management, Portfolio Analysis, Micro-Finance &amp; Rural Development</span></div><div class=\"ssmrv-fac-row\"><span class=\"ssmrv-fac-label\">🛡️ Committee / Role</span><span class=\"ssmrv-fac-val ssmrv-fac-role-val\">Coordinator — Forum for Strength and Intellect (FSI)</span></div><div class=\"ssmrv-fac-section\"><div class=\"ssmrv-fac-sec-title\">📖 Profile Overview</div><div class=\"ssmrv-fac-sec-text\">Dr. S. V. Shridhara Murthy is an Associate Professor in the Department of Commerce, Coordinator of the Forum for Strength and Intellect (FSI), and Principal Investigator of a UGC-funded Minor Research Project on Micro-Finance.</div></div><div class=\"ssmrv-fac-section\"><div class=\"ssmrv-fac-sec-title\">🏆 Key Highlights</div><div class=\"ssmrv-fac-sec-text\">Coordinator — Forum for Strength and Intellect (FSI) &amp; UGC Research Project PI.</div></div><div class=\"ssmrv-fac-contact\"><div>📧 <a href=\"mailto:sridharamurthysv.nmkrv@rvei.edu.in\">sridharamurthysv.nmkrv@rvei.edu.in</a></div><div>📞 <a href=\"tel:08069018900\">080-69018900</a></div></div></div></div>",
    "buttons": [
      {
        "text": "🌐 Visit Official Website Page ↗",
        "url": "https://nmkrv.edu.in/forum-for-strength-and-intellect/",
        "isPrimary": true
      },
      {
        "text": "🏛️ 📊 Commerce",
        "action": "flow:faculty_commerce"
      },
      {
        "text": "👨‍🏫 All Faculty Departments",
        "action": "flow:faculty"
      }
    ]
  },
  "profile_ms-shashirekha-b-v": {
    "id": "profile_ms-shashirekha-b-v",
    "pageUrl": "https://nmkrv.edu.in/e-cell/",
    "message": "<div class=\"ssmrv-faculty-card is-full-profile\"><div class=\"ssmrv-faculty-name\">Ms. Shashirekha B. V.</div><div class=\"ssmrv-faculty-badges\"><span class=\"ssmrv-badge-desig\">Assistant Professor</span><span class=\"ssmrv-badge-dept\">Commerce (B.Com)</span></div><div class=\"ssmrv-fac-actions\"><a href=\"https://nmkrv.edu.in/e-cell/\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"ssmrv-visit-website-btn\">🌐 Visit Official Website Page ↗</a></div><div class=\"ssmrv-faculty-meta\"><div class=\"ssmrv-fac-row\"><span class=\"ssmrv-fac-label\">🎓 Qualifications</span><span class=\"ssmrv-fac-val\">M.Com.</span></div><div class=\"ssmrv-fac-row\"><span class=\"ssmrv-fac-label\">⏳ Experience</span><span class=\"ssmrv-fac-val\">Teaching &amp; Entrepreneurship Mentorship Experience</span></div><div class=\"ssmrv-fac-row\"><span class=\"ssmrv-fac-label\">🔬 Areas of Expertise</span><span class=\"ssmrv-fac-val\">Business Regulations, Entrepreneurship Development &amp; Corporate Law</span></div><div class=\"ssmrv-fac-row\"><span class=\"ssmrv-fac-label\">🛡️ Committee / Role</span><span class=\"ssmrv-fac-val ssmrv-fac-role-val\">Coordinator — E-Cell</span></div><div class=\"ssmrv-fac-section\"><div class=\"ssmrv-fac-sec-title\">📖 Profile Overview</div><div class=\"ssmrv-fac-sec-text\">Ms. Shashirekha B. V. is an Assistant Professor in the Department of Commerce and serves as the Coordinator of the Entrepreneurship Cell (E-Cell) at NMKRV College.</div></div><div class=\"ssmrv-fac-section\"><div class=\"ssmrv-fac-sec-title\">🏆 Key Highlights</div><div class=\"ssmrv-fac-sec-text\">Coordinator — Entrepreneurship Cell (E-Cell).</div></div><div class=\"ssmrv-fac-contact\"><div>📧 <a href=\"mailto:shashirekhabv.nmkrv@rvei.edu.in\">shashirekhabv.nmkrv@rvei.edu.in</a></div><div>📞 <a href=\"tel:08069018900\">080-69018900</a></div></div></div></div>",
    "buttons": [
      {
        "text": "🌐 Visit Official Website Page ↗",
        "url": "https://nmkrv.edu.in/e-cell/",
        "isPrimary": true
      },
      {
        "text": "🏛️ 📊 Commerce",
        "action": "flow:faculty_commerce"
      },
      {
        "text": "👨‍🏫 All Faculty Departments",
        "action": "flow:faculty"
      }
    ]
  },
  "profile_ms-shobha-v": {
    "id": "profile_ms-shobha-v",
    "pageUrl": "https://nmkrv.edu.in/forum-for-strength-and-intellect/",
    "message": "<div class=\"ssmrv-faculty-card is-full-profile\"><div class=\"ssmrv-faculty-name\">Ms. Shobha V.</div><div class=\"ssmrv-faculty-badges\"><span class=\"ssmrv-badge-desig\">Assistant Professor</span><span class=\"ssmrv-badge-dept\">Commerce (B.Com)</span></div><div class=\"ssmrv-fac-actions\"><a href=\"https://nmkrv.edu.in/forum-for-strength-and-intellect/\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"ssmrv-visit-website-btn\">🌐 Visit Official Website Page ↗</a></div><div class=\"ssmrv-faculty-meta\"><div class=\"ssmrv-fac-row\"><span class=\"ssmrv-fac-label\">🎓 Qualifications</span><span class=\"ssmrv-fac-val\">M.Com.</span></div><div class=\"ssmrv-fac-row\"><span class=\"ssmrv-fac-label\">⏳ Experience</span><span class=\"ssmrv-fac-val\">Teaching Experience in Commerce &amp; Taxation</span></div><div class=\"ssmrv-fac-row\"><span class=\"ssmrv-fac-label\">🔬 Areas of Expertise</span><span class=\"ssmrv-fac-val\">Integrated Goods and Services Tax (IGST) Act &amp; Business Decisions</span></div><div class=\"ssmrv-fac-row\"><span class=\"ssmrv-fac-label\">🛡️ Committee / Role</span><span class=\"ssmrv-fac-val ssmrv-fac-role-val\">Member — Forum for Strength and Intellect (FSI)</span></div><div class=\"ssmrv-fac-section\"><div class=\"ssmrv-fac-sec-title\">📖 Profile Overview</div><div class=\"ssmrv-fac-sec-text\">Ms. Shobha V. is an Assistant Professor in the Department of Commerce and a member of the Forum for Strength and Intellect (FSI).</div></div><div class=\"ssmrv-fac-section\"><div class=\"ssmrv-fac-sec-title\">🏆 Key Highlights</div><div class=\"ssmrv-fac-sec-text\">E-Content Author for IGST Act 2017 &amp; Business Decisions.</div></div><div class=\"ssmrv-fac-contact\"><div>📧 <a href=\"mailto:shobhav.nmkrv@rvei.edu.in\">shobhav.nmkrv@rvei.edu.in</a></div><div>📞 <a href=\"tel:08069018900\">080-69018900</a></div></div></div></div>",
    "buttons": [
      {
        "text": "🌐 Visit Official Website Page ↗",
        "url": "https://nmkrv.edu.in/forum-for-strength-and-intellect/",
        "isPrimary": true
      },
      {
        "text": "🏛️ 📊 Commerce",
        "action": "flow:faculty_commerce"
      },
      {
        "text": "👨‍🏫 All Faculty Departments",
        "action": "flow:faculty"
      }
    ]
  },
  "profile_mrs-madhuri-s-d": {
    "id": "profile_mrs-madhuri-s-d",
    "pageUrl": "https://nmkrv.edu.in/m-com/",
    "message": "<div class=\"ssmrv-faculty-card is-full-profile\"><div class=\"ssmrv-faculty-name\">Mrs. Madhuri S. D.</div><div class=\"ssmrv-faculty-badges\"><span class=\"ssmrv-badge-desig\">Assistant Professor — PG Commerce</span><span class=\"ssmrv-badge-dept\">PG Commerce (M.Com)</span></div><div class=\"ssmrv-fac-actions\"><a href=\"https://nmkrv.edu.in/m-com/\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"ssmrv-visit-website-btn\">🌐 Visit Official Website Page ↗</a></div><div class=\"ssmrv-faculty-meta\"><div class=\"ssmrv-fac-row\"><span class=\"ssmrv-fac-label\">🎓 Qualifications</span><span class=\"ssmrv-fac-val\">M.Com., MBA, PGDBFM</span></div><div class=\"ssmrv-fac-row\"><span class=\"ssmrv-fac-label\">⏳ Experience</span><span class=\"ssmrv-fac-val\">Postgraduate Teaching Experience in Commerce &amp; Management</span></div><div class=\"ssmrv-fac-row\"><span class=\"ssmrv-fac-label\">🔬 Areas of Expertise</span><span class=\"ssmrv-fac-val\">Strategic Management, Advanced Financial Management, Banking &amp; Risk Management</span></div><div class=\"ssmrv-fac-row\"><span class=\"ssmrv-fac-label\">🛡️ Committee / Role</span><span class=\"ssmrv-fac-val ssmrv-fac-role-val\">PG Department of Commerce (M.Com)</span></div><div class=\"ssmrv-fac-section\"><div class=\"ssmrv-fac-sec-title\">📖 Profile Overview</div><div class=\"ssmrv-fac-sec-text\">Mrs. Madhuri S. D. serves as Assistant Professor in the Postgraduate Department of Commerce (M.Com) at NMKRV College.</div></div><div class=\"ssmrv-fac-section\"><div class=\"ssmrv-fac-sec-title\">🏆 Key Highlights</div><div class=\"ssmrv-fac-sec-text\">Postgraduate M.Com Faculty with triple masters/diploma credentials (M.Com, MBA, PGDBFM).</div></div><div class=\"ssmrv-fac-contact\"><div>📧 <a href=\"mailto:nmkrv@rvei.edu.in\">nmkrv@rvei.edu.in</a></div><div>📞 <a href=\"tel:08069018900\">080-69018900</a></div></div></div></div>",
    "buttons": [
      {
        "text": "🌐 Visit Official Website Page ↗",
        "url": "https://nmkrv.edu.in/m-com/",
        "isPrimary": true
      },
      {
        "text": "🏛️ 📊 Commerce",
        "action": "flow:faculty_commerce"
      },
      {
        "text": "👨‍🏫 All Faculty Departments",
        "action": "flow:faculty"
      }
    ]
  },
  "profile_dr-krishika-m-a": {
    "id": "profile_dr-krishika-m-a",
    "pageUrl": "https://nmkrv.edu.in/m-com/",
    "message": "<div class=\"ssmrv-faculty-card is-full-profile\"><div class=\"ssmrv-faculty-name\">Dr. Krishika M. A.</div><div class=\"ssmrv-faculty-badges\"><span class=\"ssmrv-badge-desig\">Assistant Professor — PG Commerce</span><span class=\"ssmrv-badge-dept\">PG Commerce (M.Com)</span></div><div class=\"ssmrv-fac-actions\"><a href=\"https://nmkrv.edu.in/m-com/\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"ssmrv-visit-website-btn\">🌐 Visit Official Website Page ↗</a></div><div class=\"ssmrv-faculty-meta\"><div class=\"ssmrv-fac-row\"><span class=\"ssmrv-fac-label\">🎓 Qualifications</span><span class=\"ssmrv-fac-val\">M.Com., M.Phil., Ph.D.</span></div><div class=\"ssmrv-fac-row\"><span class=\"ssmrv-fac-label\">⏳ Experience</span><span class=\"ssmrv-fac-val\">Postgraduate Teaching &amp; Research Experience</span></div><div class=\"ssmrv-fac-row\"><span class=\"ssmrv-fac-label\">🔬 Areas of Expertise</span><span class=\"ssmrv-fac-val\">Business Research Methods, Corporate Financial Reporting &amp; Quantitative Techniques</span></div><div class=\"ssmrv-fac-row\"><span class=\"ssmrv-fac-label\">🛡️ Committee / Role</span><span class=\"ssmrv-fac-val ssmrv-fac-role-val\">PG Department of Commerce (M.Com)</span></div><div class=\"ssmrv-fac-section\"><div class=\"ssmrv-fac-sec-title\">📖 Profile Overview</div><div class=\"ssmrv-fac-sec-text\">Dr. Krishika M. A. serves as Assistant Professor in the Postgraduate Department of Commerce (M.Com) at NMKRV College.</div></div><div class=\"ssmrv-fac-section\"><div class=\"ssmrv-fac-sec-title\">🏆 Key Highlights</div><div class=\"ssmrv-fac-sec-text\">Doctorate Faculty in Postgraduate Commerce (M.Com).</div></div><div class=\"ssmrv-fac-contact\"><div>📧 <a href=\"mailto:nmkrv@rvei.edu.in\">nmkrv@rvei.edu.in</a></div><div>📞 <a href=\"tel:08069018900\">080-69018900</a></div></div></div></div>",
    "buttons": [
      {
        "text": "🌐 Visit Official Website Page ↗",
        "url": "https://nmkrv.edu.in/m-com/",
        "isPrimary": true
      },
      {
        "text": "🏛️ 📊 Commerce",
        "action": "flow:faculty_commerce"
      },
      {
        "text": "👨‍🏫 All Faculty Departments",
        "action": "flow:faculty"
      }
    ]
  },
  "faculty_bba": {
    "id": "faculty_bba",
    "pageUrl": "https://nmkrv.edu.in/management/",
    "message": "<div class=\"ssmrv-flow-heading\">📈 Department of Management (BBA)</div><div class=\"ssmrv-flow-subheading\">AICTE Approved Bachelor of Business Administration Faculty — Select <b>View Full Profile</b> or <b>Visit Website Page ↗</b> on any card below:</div><div class=\"ssmrv-dept-profile-list\"><div class=\"ssmrv-dept-profile-item\" data-profile-id=\"mrs-anupama-m-a\" title=\"Click to view full profile of Mrs. Anupama M. A.\"><div class=\"ssmrv-dept-prof-header\"><span class=\"ssmrv-dept-prof-name\">Mrs. Anupama M. A.</span></div><div class=\"ssmrv-faculty-badges\"><span class=\"ssmrv-badge-desig\">Assistant Professor</span><span class=\"ssmrv-badge-dept\">Management (BBA)</span></div><div class=\"ssmrv-dept-prof-actions\"><span class=\"ssmrv-dept-prof-cta\">👤 View Full Profile</span><a href=\"https://nmkrv.edu.in/management/\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"ssmrv-dept-visit-btn\" onclick=\"event.stopPropagation();\">🌐 Visit Website Page ↗</a></div><div class=\"ssmrv-dept-prof-meta\"><div class=\"ssmrv-dept-prof-row\"><strong>Qualifications:</strong> M.Com., ICWA Inter, MBA</div><div class=\"ssmrv-dept-prof-row\"><strong>Experience:</strong> 16+ Years at NMKRV College (Joined August 2009)</div><div class=\"ssmrv-dept-prof-row\"><strong>Expertise:</strong> Financial Management, Cost &amp; Management Accounting, Business Strategy</div><div class=\"ssmrv-dept-prof-row ssmrv-dept-prof-comm\"><strong>Role:</strong> Coordinator — Navyata (The Fashion Club)</div></div></div><div class=\"ssmrv-dept-profile-item\" data-profile-id=\"mrs-roopashree-a\" title=\"Click to view full profile of Mrs. Roopashree A.\"><div class=\"ssmrv-dept-prof-header\"><span class=\"ssmrv-dept-prof-name\">Mrs. Roopashree A.</span></div><div class=\"ssmrv-faculty-badges\"><span class=\"ssmrv-badge-desig\">Assistant Professor</span><span class=\"ssmrv-badge-dept\">Management (BBA)</span></div><div class=\"ssmrv-dept-prof-actions\"><span class=\"ssmrv-dept-prof-cta\">👤 View Full Profile</span><a href=\"https://nmkrv.edu.in/management/\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"ssmrv-dept-visit-btn\" onclick=\"event.stopPropagation();\">🌐 Visit Website Page ↗</a></div><div class=\"ssmrv-dept-prof-meta\"><div class=\"ssmrv-dept-prof-row\"><strong>Qualifications:</strong> MBA, PGDHRM</div><div class=\"ssmrv-dept-prof-row\"><strong>Experience:</strong> 13+ Years at NMKRV College (Joined December 2012)</div><div class=\"ssmrv-dept-prof-row\"><strong>Expertise:</strong> Human Resource Management, Organizational Behaviour &amp; Entrepreneurship</div><div class=\"ssmrv-dept-prof-row ssmrv-dept-prof-comm\"><strong>Role:</strong> Coordinator — E-Cell | Exam Core Team — COE</div></div></div><div class=\"ssmrv-dept-profile-item\" data-profile-id=\"ms-pooja-v\" title=\"Click to view full profile of Ms. Pooja V.\"><div class=\"ssmrv-dept-prof-header\"><span class=\"ssmrv-dept-prof-name\">Ms. Pooja V.</span></div><div class=\"ssmrv-faculty-badges\"><span class=\"ssmrv-badge-desig\">Assistant Professor</span><span class=\"ssmrv-badge-dept\">Management (BBA)</span></div><div class=\"ssmrv-dept-prof-actions\"><span class=\"ssmrv-dept-prof-cta\">👤 View Full Profile</span><a href=\"https://nmkrv.edu.in/management/\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"ssmrv-dept-visit-btn\" onclick=\"event.stopPropagation();\">🌐 Visit Website Page ↗</a></div><div class=\"ssmrv-dept-prof-meta\"><div class=\"ssmrv-dept-prof-row\"><strong>Qualifications:</strong> MBA</div><div class=\"ssmrv-dept-prof-row\"><strong>Experience:</strong> Full-Time Faculty in Management (Joined February 2024)</div><div class=\"ssmrv-dept-prof-row\"><strong>Expertise:</strong> Marketing Management, Business Administration &amp; Corporate Communication</div><div class=\"ssmrv-dept-prof-row ssmrv-dept-prof-comm\"><strong>Role:</strong> Member — Innovation Cell &amp; Social Media Cell</div></div></div><div class=\"ssmrv-dept-profile-item\" data-profile-id=\"ms-sharada-a\" title=\"Click to view full profile of Ms. Sharada A.\"><div class=\"ssmrv-dept-prof-header\"><span class=\"ssmrv-dept-prof-name\">Ms. Sharada A.</span></div><div class=\"ssmrv-faculty-badges\"><span class=\"ssmrv-badge-desig\">Assistant Professor</span><span class=\"ssmrv-badge-dept\">Management (BBA)</span></div><div class=\"ssmrv-dept-prof-actions\"><span class=\"ssmrv-dept-prof-cta\">👤 View Full Profile</span><a href=\"https://nmkrv.edu.in/management/\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"ssmrv-dept-visit-btn\" onclick=\"event.stopPropagation();\">🌐 Visit Website Page ↗</a></div><div class=\"ssmrv-dept-prof-meta\"><div class=\"ssmrv-dept-prof-row\"><strong>Qualifications:</strong> M.Com.</div><div class=\"ssmrv-dept-prof-row\"><strong>Experience:</strong> Full-Time Faculty in Management (Joined August 2024)</div><div class=\"ssmrv-dept-prof-row\"><strong>Expertise:</strong> Accounting for Managers, Business Regulations &amp; Financial Markets</div><div class=\"ssmrv-dept-prof-row ssmrv-dept-prof-comm\"><strong>Role:</strong> Department of Management (BBA)</div></div></div><div class=\"ssmrv-dept-profile-item\" data-profile-id=\"dr-kumar-d-n\" title=\"Click to view full profile of Dr. Kumar D. N.\"><div class=\"ssmrv-dept-prof-header\"><span class=\"ssmrv-dept-prof-name\">Dr. Kumar D. N.</span></div><div class=\"ssmrv-faculty-badges\"><span class=\"ssmrv-badge-desig\">Faculty Member</span><span class=\"ssmrv-badge-dept\">Management (BBA)</span></div><div class=\"ssmrv-dept-prof-actions\"><span class=\"ssmrv-dept-prof-cta\">👤 View Full Profile</span><a href=\"https://nmkrv.edu.in/library/\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"ssmrv-dept-visit-btn\" onclick=\"event.stopPropagation();\">🌐 Visit Website Page ↗</a></div><div class=\"ssmrv-dept-prof-meta\"><div class=\"ssmrv-dept-prof-row\"><strong>Qualifications:</strong> MBA, Ph.D.</div><div class=\"ssmrv-dept-prof-row\"><strong>Experience:</strong> Teaching &amp; Research Experience in Management</div><div class=\"ssmrv-dept-prof-row\"><strong>Expertise:</strong> Business Management &amp; Organizational Studies</div><div class=\"ssmrv-dept-prof-row ssmrv-dept-prof-comm\"><strong>Role:</strong> Coordinator — Library Advisory Committee</div></div></div></div>",
    "buttons": [
      {
        "text": "👤 Mrs. Anupama M. A.",
        "action": "profile:mrs-anupama-m-a"
      },
      {
        "text": "👤 Mrs. Roopashree A.",
        "action": "profile:mrs-roopashree-a"
      },
      {
        "text": "👤 Ms. Pooja V.",
        "action": "profile:ms-pooja-v"
      },
      {
        "text": "👤 Ms. Sharada A.",
        "action": "profile:ms-sharada-a"
      },
      {
        "text": "👤 Dr. Kumar D. N.",
        "action": "profile:dr-kumar-d-n"
      },
      {
        "text": "🌐 Visit Department Webpage ↗",
        "url": "https://nmkrv.edu.in/management/"
      },
      {
        "text": "👨‍🏫 All Faculty Departments",
        "action": "flow:faculty"
      }
    ]
  },
  "profile_mrs-anupama-m-a": {
    "id": "profile_mrs-anupama-m-a",
    "pageUrl": "https://nmkrv.edu.in/management/",
    "message": "<div class=\"ssmrv-faculty-card is-full-profile\"><div class=\"ssmrv-faculty-name\">Mrs. Anupama M. A.</div><div class=\"ssmrv-faculty-badges\"><span class=\"ssmrv-badge-desig\">Assistant Professor</span><span class=\"ssmrv-badge-dept\">Management (BBA)</span></div><div class=\"ssmrv-fac-actions\"><a href=\"https://nmkrv.edu.in/management/\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"ssmrv-visit-website-btn\">🌐 Visit Official Website Page ↗</a></div><div class=\"ssmrv-faculty-meta\"><div class=\"ssmrv-fac-row\"><span class=\"ssmrv-fac-label\">🎓 Qualifications</span><span class=\"ssmrv-fac-val\">M.Com., ICWA Inter, MBA</span></div><div class=\"ssmrv-fac-row\"><span class=\"ssmrv-fac-label\">⏳ Experience</span><span class=\"ssmrv-fac-val\">16+ Years at NMKRV College (Joined August 2009)</span></div><div class=\"ssmrv-fac-row\"><span class=\"ssmrv-fac-label\">🔬 Areas of Expertise</span><span class=\"ssmrv-fac-val\">Financial Management, Cost &amp; Management Accounting, Business Strategy</span></div><div class=\"ssmrv-fac-row\"><span class=\"ssmrv-fac-label\">🛡️ Committee / Role</span><span class=\"ssmrv-fac-val ssmrv-fac-role-val\">Coordinator — Navyata (The Fashion Club)</span></div><div class=\"ssmrv-fac-section\"><div class=\"ssmrv-fac-sec-title\">📖 Profile Overview</div><div class=\"ssmrv-fac-sec-text\">Mrs. Anupama M. A. is a senior Assistant Professor in the Department of Management (BBA) at NMKRV College since August 2009 and serves as the Coordinator of Navyata — The Fashion Club.</div></div><div class=\"ssmrv-fac-section\"><div class=\"ssmrv-fac-sec-title\">🏆 Key Highlights</div><div class=\"ssmrv-fac-sec-text\">16+ Years at NMKRV College | Coordinator — Navyata Fashion Club.</div></div><div class=\"ssmrv-fac-contact\"><div>📧 <a href=\"mailto:anupama.nmkrv@rvei.edu.in\">anupama.nmkrv@rvei.edu.in</a></div><div>📞 <a href=\"tel:08069018900\">080-69018900</a></div></div></div></div>",
    "buttons": [
      {
        "text": "🌐 Visit Official Website Page ↗",
        "url": "https://nmkrv.edu.in/management/",
        "isPrimary": true
      },
      {
        "text": "🏛️ 📈 Management",
        "action": "flow:faculty_bba"
      },
      {
        "text": "👨‍🏫 All Faculty Departments",
        "action": "flow:faculty"
      }
    ]
  },
  "profile_mrs-roopashree-a": {
    "id": "profile_mrs-roopashree-a",
    "pageUrl": "https://nmkrv.edu.in/management/",
    "message": "<div class=\"ssmrv-faculty-card is-full-profile\"><div class=\"ssmrv-faculty-name\">Mrs. Roopashree A.</div><div class=\"ssmrv-faculty-badges\"><span class=\"ssmrv-badge-desig\">Assistant Professor</span><span class=\"ssmrv-badge-dept\">Management (BBA)</span></div><div class=\"ssmrv-fac-actions\"><a href=\"https://nmkrv.edu.in/management/\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"ssmrv-visit-website-btn\">🌐 Visit Official Website Page ↗</a></div><div class=\"ssmrv-faculty-meta\"><div class=\"ssmrv-fac-row\"><span class=\"ssmrv-fac-label\">🎓 Qualifications</span><span class=\"ssmrv-fac-val\">MBA, PGDHRM</span></div><div class=\"ssmrv-fac-row\"><span class=\"ssmrv-fac-label\">⏳ Experience</span><span class=\"ssmrv-fac-val\">13+ Years at NMKRV College (Joined December 2012)</span></div><div class=\"ssmrv-fac-row\"><span class=\"ssmrv-fac-label\">🔬 Areas of Expertise</span><span class=\"ssmrv-fac-val\">Human Resource Management, Organizational Behaviour &amp; Entrepreneurship</span></div><div class=\"ssmrv-fac-row\"><span class=\"ssmrv-fac-label\">🛡️ Committee / Role</span><span class=\"ssmrv-fac-val ssmrv-fac-role-val\">Coordinator — E-Cell | Exam Core Team — COE</span></div><div class=\"ssmrv-fac-section\"><div class=\"ssmrv-fac-sec-title\">📖 Profile Overview</div><div class=\"ssmrv-fac-sec-text\">Mrs. Roopashree A. is an Assistant Professor in the Department of Management (BBA) since December 2012. She serves as Coordinator of the Entrepreneurship Cell (E-Cell) and Member of the Examination Core Team.</div></div><div class=\"ssmrv-fac-section\"><div class=\"ssmrv-fac-sec-title\">🏆 Key Highlights</div><div class=\"ssmrv-fac-sec-text\">Coordinator — E-Cell &amp; Member of Examination Core Team (COE).</div></div><div class=\"ssmrv-fac-contact\"><div>📧 <a href=\"mailto:roopashree.nmkrv@rvei.edu.in\">roopashree.nmkrv@rvei.edu.in</a></div><div>📞 <a href=\"tel:08069018900\">080-69018900</a></div></div></div></div>",
    "buttons": [
      {
        "text": "🌐 Visit Official Website Page ↗",
        "url": "https://nmkrv.edu.in/management/",
        "isPrimary": true
      },
      {
        "text": "🏛️ 📈 Management",
        "action": "flow:faculty_bba"
      },
      {
        "text": "👨‍🏫 All Faculty Departments",
        "action": "flow:faculty"
      }
    ]
  },
  "profile_ms-pooja-v": {
    "id": "profile_ms-pooja-v",
    "pageUrl": "https://nmkrv.edu.in/management/",
    "message": "<div class=\"ssmrv-faculty-card is-full-profile\"><div class=\"ssmrv-faculty-name\">Ms. Pooja V.</div><div class=\"ssmrv-faculty-badges\"><span class=\"ssmrv-badge-desig\">Assistant Professor</span><span class=\"ssmrv-badge-dept\">Management (BBA)</span></div><div class=\"ssmrv-fac-actions\"><a href=\"https://nmkrv.edu.in/management/\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"ssmrv-visit-website-btn\">🌐 Visit Official Website Page ↗</a></div><div class=\"ssmrv-faculty-meta\"><div class=\"ssmrv-fac-row\"><span class=\"ssmrv-fac-label\">🎓 Qualifications</span><span class=\"ssmrv-fac-val\">MBA</span></div><div class=\"ssmrv-fac-row\"><span class=\"ssmrv-fac-label\">⏳ Experience</span><span class=\"ssmrv-fac-val\">Full-Time Faculty in Management (Joined February 2024)</span></div><div class=\"ssmrv-fac-row\"><span class=\"ssmrv-fac-label\">🔬 Areas of Expertise</span><span class=\"ssmrv-fac-val\">Marketing Management, Business Administration &amp; Corporate Communication</span></div><div class=\"ssmrv-fac-row\"><span class=\"ssmrv-fac-label\">🛡️ Committee / Role</span><span class=\"ssmrv-fac-val ssmrv-fac-role-val\">Member — Innovation Cell &amp; Social Media Cell</span></div><div class=\"ssmrv-fac-section\"><div class=\"ssmrv-fac-sec-title\">📖 Profile Overview</div><div class=\"ssmrv-fac-sec-text\">Ms. Pooja V. is an Assistant Professor in the Department of Management (BBA) at NMKRV College and a member of the Innovation Cell and Social Media Cell.</div></div><div class=\"ssmrv-fac-section\"><div class=\"ssmrv-fac-sec-title\">🏆 Key Highlights</div><div class=\"ssmrv-fac-sec-text\">Member — Innovation Cell &amp; Social Media Cell.</div></div><div class=\"ssmrv-fac-contact\"><div>📧 <a href=\"mailto:nmkrv@rvei.edu.in\">nmkrv@rvei.edu.in</a></div><div>📞 <a href=\"tel:08069018900\">080-69018900</a></div></div></div></div>",
    "buttons": [
      {
        "text": "🌐 Visit Official Website Page ↗",
        "url": "https://nmkrv.edu.in/management/",
        "isPrimary": true
      },
      {
        "text": "🏛️ 📈 Management",
        "action": "flow:faculty_bba"
      },
      {
        "text": "👨‍🏫 All Faculty Departments",
        "action": "flow:faculty"
      }
    ]
  },
  "profile_ms-sharada-a": {
    "id": "profile_ms-sharada-a",
    "pageUrl": "https://nmkrv.edu.in/management/",
    "message": "<div class=\"ssmrv-faculty-card is-full-profile\"><div class=\"ssmrv-faculty-name\">Ms. Sharada A.</div><div class=\"ssmrv-faculty-badges\"><span class=\"ssmrv-badge-desig\">Assistant Professor</span><span class=\"ssmrv-badge-dept\">Management (BBA)</span></div><div class=\"ssmrv-fac-actions\"><a href=\"https://nmkrv.edu.in/management/\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"ssmrv-visit-website-btn\">🌐 Visit Official Website Page ↗</a></div><div class=\"ssmrv-faculty-meta\"><div class=\"ssmrv-fac-row\"><span class=\"ssmrv-fac-label\">🎓 Qualifications</span><span class=\"ssmrv-fac-val\">M.Com.</span></div><div class=\"ssmrv-fac-row\"><span class=\"ssmrv-fac-label\">⏳ Experience</span><span class=\"ssmrv-fac-val\">Full-Time Faculty in Management (Joined August 2024)</span></div><div class=\"ssmrv-fac-row\"><span class=\"ssmrv-fac-label\">🔬 Areas of Expertise</span><span class=\"ssmrv-fac-val\">Accounting for Managers, Business Regulations &amp; Financial Markets</span></div><div class=\"ssmrv-fac-row\"><span class=\"ssmrv-fac-label\">🛡️ Committee / Role</span><span class=\"ssmrv-fac-val ssmrv-fac-role-val\">Department of Management (BBA)</span></div><div class=\"ssmrv-fac-section\"><div class=\"ssmrv-fac-sec-title\">📖 Profile Overview</div><div class=\"ssmrv-fac-sec-text\">Ms. Sharada A. serves as Assistant Professor in the Department of Management (BBA) at NMKRV College.</div></div><div class=\"ssmrv-fac-section\"><div class=\"ssmrv-fac-sec-title\">🏆 Key Highlights</div><div class=\"ssmrv-fac-sec-text\">AICTE Approved BBA Faculty Member.</div></div><div class=\"ssmrv-fac-contact\"><div>📧 <a href=\"mailto:nmkrv@rvei.edu.in\">nmkrv@rvei.edu.in</a></div><div>📞 <a href=\"tel:08069018900\">080-69018900</a></div></div></div></div>",
    "buttons": [
      {
        "text": "🌐 Visit Official Website Page ↗",
        "url": "https://nmkrv.edu.in/management/",
        "isPrimary": true
      },
      {
        "text": "🏛️ 📈 Management",
        "action": "flow:faculty_bba"
      },
      {
        "text": "👨‍🏫 All Faculty Departments",
        "action": "flow:faculty"
      }
    ]
  },
  "profile_dr-kumar-d-n": {
    "id": "profile_dr-kumar-d-n",
    "pageUrl": "https://nmkrv.edu.in/library/",
    "message": "<div class=\"ssmrv-faculty-card is-full-profile\"><div class=\"ssmrv-faculty-name\">Dr. Kumar D. N.</div><div class=\"ssmrv-faculty-badges\"><span class=\"ssmrv-badge-desig\">Faculty Member</span><span class=\"ssmrv-badge-dept\">Management (BBA)</span></div><div class=\"ssmrv-fac-actions\"><a href=\"https://nmkrv.edu.in/library/\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"ssmrv-visit-website-btn\">🌐 Visit Official Website Page ↗</a></div><div class=\"ssmrv-faculty-meta\"><div class=\"ssmrv-fac-row\"><span class=\"ssmrv-fac-label\">🎓 Qualifications</span><span class=\"ssmrv-fac-val\">MBA, Ph.D.</span></div><div class=\"ssmrv-fac-row\"><span class=\"ssmrv-fac-label\">⏳ Experience</span><span class=\"ssmrv-fac-val\">Teaching &amp; Research Experience in Management</span></div><div class=\"ssmrv-fac-row\"><span class=\"ssmrv-fac-label\">🔬 Areas of Expertise</span><span class=\"ssmrv-fac-val\">Business Management &amp; Organizational Studies</span></div><div class=\"ssmrv-fac-row\"><span class=\"ssmrv-fac-label\">🛡️ Committee / Role</span><span class=\"ssmrv-fac-val ssmrv-fac-role-val\">Coordinator — Library Advisory Committee</span></div><div class=\"ssmrv-fac-section\"><div class=\"ssmrv-fac-sec-title\">📖 Profile Overview</div><div class=\"ssmrv-fac-sec-text\">Dr. Kumar D. N. serves in the Department of Management and as Coordinator on the Library Advisory Committee at NMKRV College.</div></div><div class=\"ssmrv-fac-section\"><div class=\"ssmrv-fac-sec-title\">🏆 Key Highlights</div><div class=\"ssmrv-fac-sec-text\">Coordinator — Library Advisory Committee.</div></div><div class=\"ssmrv-fac-contact\"><div>📧 <a href=\"mailto:nmkrv@rvei.edu.in\">nmkrv@rvei.edu.in</a></div><div>📞 <a href=\"tel:08069018900\">080-69018900</a></div></div></div></div>",
    "buttons": [
      {
        "text": "🌐 Visit Official Website Page ↗",
        "url": "https://nmkrv.edu.in/library/",
        "isPrimary": true
      },
      {
        "text": "🏛️ 📈 Management",
        "action": "flow:faculty_bba"
      },
      {
        "text": "👨‍🏫 All Faculty Departments",
        "action": "flow:faculty"
      }
    ]
  },
  "faculty_bca": {
    "id": "faculty_cs_bca",
    "pageUrl": "https://nmkrv.edu.in/bca/",
    "message": "<div class=\"ssmrv-flow-heading\">💻 Department of Computer Applications, CS &amp; Data Science</div><div class=\"ssmrv-flow-subheading\">AICTE Approved BCA, B.Sc. Computer Science &amp; M.Sc. Data Science Faculty — Select <b>View Full Profile</b> or <b>Visit Website Page ↗</b> on any card below:</div><div class=\"ssmrv-dept-profile-list\"><div class=\"ssmrv-dept-profile-item\" data-profile-id=\"mrs-vandana-g-p\" title=\"Click to view full profile of Mrs. Vandana G. P.\"><div class=\"ssmrv-dept-prof-header\"><span class=\"ssmrv-dept-prof-name\">Mrs. Vandana G. P.</span></div><div class=\"ssmrv-faculty-badges\"><span class=\"ssmrv-badge-desig\">Assistant Professor</span><span class=\"ssmrv-badge-dept\">Computer Applications (BCA)</span></div><div class=\"ssmrv-dept-prof-actions\"><span class=\"ssmrv-dept-prof-cta\">👤 View Full Profile</span><a href=\"https://nmkrv.edu.in/bca/\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"ssmrv-dept-visit-btn\" onclick=\"event.stopPropagation();\">🌐 Visit Website Page ↗</a></div><div class=\"ssmrv-dept-prof-meta\"><div class=\"ssmrv-dept-prof-row\"><strong>Qualifications:</strong> MCA</div><div class=\"ssmrv-dept-prof-row\"><strong>Experience:</strong> Full-Time Faculty in BCA (Joined June 2022)</div><div class=\"ssmrv-dept-prof-row\"><strong>Expertise:</strong> Software Engineering, Database Management Systems &amp; Web Technologies</div><div class=\"ssmrv-dept-prof-row ssmrv-dept-prof-comm\"><strong>Role:</strong> Department of Computer Applications (BCA)</div></div></div><div class=\"ssmrv-dept-profile-item\" data-profile-id=\"mrs-bindhya-m\" title=\"Click to view full profile of Mrs. Bindhya M.\"><div class=\"ssmrv-dept-prof-header\"><span class=\"ssmrv-dept-prof-name\">Mrs. Bindhya M.</span></div><div class=\"ssmrv-faculty-badges\"><span class=\"ssmrv-badge-desig\">Assistant Professor</span><span class=\"ssmrv-badge-dept\">Computer Applications (BCA)</span></div><div class=\"ssmrv-dept-prof-actions\"><span class=\"ssmrv-dept-prof-cta\">👤 View Full Profile</span><a href=\"https://nmkrv.edu.in/bca/\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"ssmrv-dept-visit-btn\" onclick=\"event.stopPropagation();\">🌐 Visit Website Page ↗</a></div><div class=\"ssmrv-dept-prof-meta\"><div class=\"ssmrv-dept-prof-row\"><strong>Qualifications:</strong> MCA, M.Sc. Computer Science</div><div class=\"ssmrv-dept-prof-row\"><strong>Experience:</strong> 8+ Years at NMKRV College (Joined January 2018)</div><div class=\"ssmrv-dept-prof-row\"><strong>Expertise:</strong> Object-Oriented Programming, Data Structures &amp; Operating Systems</div><div class=\"ssmrv-dept-prof-row ssmrv-dept-prof-comm\"><strong>Role:</strong> Exam Core Team — Office of the Controller of Examinations</div></div></div><div class=\"ssmrv-dept-profile-item\" data-profile-id=\"ms-haritha-n\" title=\"Click to view full profile of Ms. Haritha N.\"><div class=\"ssmrv-dept-prof-header\"><span class=\"ssmrv-dept-prof-name\">Ms. Haritha N.</span></div><div class=\"ssmrv-faculty-badges\"><span class=\"ssmrv-badge-desig\">Assistant Professor</span><span class=\"ssmrv-badge-dept\">Computer Applications (BCA)</span></div><div class=\"ssmrv-dept-prof-actions\"><span class=\"ssmrv-dept-prof-cta\">👤 View Full Profile</span><a href=\"https://nmkrv.edu.in/bca/\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"ssmrv-dept-visit-btn\" onclick=\"event.stopPropagation();\">🌐 Visit Website Page ↗</a></div><div class=\"ssmrv-dept-prof-meta\"><div class=\"ssmrv-dept-prof-row\"><strong>Qualifications:</strong> MCA</div><div class=\"ssmrv-dept-prof-row\"><strong>Experience:</strong> Full-Time Faculty in BCA (Joined October 2023)</div><div class=\"ssmrv-dept-prof-row\"><strong>Expertise:</strong> Computer Networks, Programming in C/Java &amp; Cloud Computing</div><div class=\"ssmrv-dept-prof-row ssmrv-dept-prof-comm\"><strong>Role:</strong> Department of Computer Applications (BCA)</div></div></div><div class=\"ssmrv-dept-profile-item\" data-profile-id=\"ms-rochana-g\" title=\"Click to view full profile of Ms. Rochana G.\"><div class=\"ssmrv-dept-prof-header\"><span class=\"ssmrv-dept-prof-name\">Ms. Rochana G.</span></div><div class=\"ssmrv-faculty-badges\"><span class=\"ssmrv-badge-desig\">Assistant Professor</span><span class=\"ssmrv-badge-dept\">Computer Applications (BCA)</span></div><div class=\"ssmrv-dept-prof-actions\"><span class=\"ssmrv-dept-prof-cta\">👤 View Full Profile</span><a href=\"https://nmkrv.edu.in/bca/\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"ssmrv-dept-visit-btn\" onclick=\"event.stopPropagation();\">🌐 Visit Website Page ↗</a></div><div class=\"ssmrv-dept-prof-meta\"><div class=\"ssmrv-dept-prof-row\"><strong>Qualifications:</strong> MCA, M.Sc. Data Science</div><div class=\"ssmrv-dept-prof-row\"><strong>Experience:</strong> Full-Time Faculty in BCA (Joined August 2024)</div><div class=\"ssmrv-dept-prof-row\"><strong>Expertise:</strong> Data Science, Python Programming &amp; Machine Learning</div><div class=\"ssmrv-dept-prof-row ssmrv-dept-prof-comm\"><strong>Role:</strong> Member — Innovation Cell &amp; Social Media Cell</div></div></div><div class=\"ssmrv-dept-profile-item\" data-profile-id=\"ms-aishwarya-s\" title=\"Click to view full profile of Ms. Aishwarya S.\"><div class=\"ssmrv-dept-prof-header\"><span class=\"ssmrv-dept-prof-name\">Ms. Aishwarya S.</span></div><div class=\"ssmrv-faculty-badges\"><span class=\"ssmrv-badge-desig\">Assistant Professor</span><span class=\"ssmrv-badge-dept\">Computer Applications (BCA)</span></div><div class=\"ssmrv-dept-prof-actions\"><span class=\"ssmrv-dept-prof-cta\">👤 View Full Profile</span><a href=\"https://nmkrv.edu.in/bca/\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"ssmrv-dept-visit-btn\" onclick=\"event.stopPropagation();\">🌐 Visit Website Page ↗</a></div><div class=\"ssmrv-dept-prof-meta\"><div class=\"ssmrv-dept-prof-row\"><strong>Qualifications:</strong> MCA</div><div class=\"ssmrv-dept-prof-row\"><strong>Experience:</strong> Full-Time Faculty in BCA (Joined September 2024)</div><div class=\"ssmrv-dept-prof-row\"><strong>Expertise:</strong> Web Application Development, RDBMS &amp; Software Testing</div><div class=\"ssmrv-dept-prof-row ssmrv-dept-prof-comm\"><strong>Role:</strong> Department of Computer Applications (BCA)</div></div></div><div class=\"ssmrv-dept-profile-item\" data-profile-id=\"dr-hamsha-k\" title=\"Click to view full profile of Dr. Hamsha K.\"><div class=\"ssmrv-dept-prof-header\"><span class=\"ssmrv-dept-prof-name\">Dr. Hamsha K.</span></div><div class=\"ssmrv-faculty-badges\"><span class=\"ssmrv-badge-desig\">Assistant Professor</span><span class=\"ssmrv-badge-dept\">Computer Science (B.Sc CS)</span></div><div class=\"ssmrv-dept-prof-actions\"><span class=\"ssmrv-dept-prof-cta\">👤 View Full Profile</span><a href=\"https://nmkrv.edu.in/science/cs/\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"ssmrv-dept-visit-btn\" onclick=\"event.stopPropagation();\">🌐 Visit Website Page ↗</a></div><div class=\"ssmrv-dept-prof-meta\"><div class=\"ssmrv-dept-prof-row\"><strong>Qualifications:</strong> B.E., M.S., M.Tech., Ph.D.</div><div class=\"ssmrv-dept-prof-row\"><strong>Experience:</strong> Senior Faculty &amp; Research Supervisor in Computer Science</div><div class=\"ssmrv-dept-prof-row\"><strong>Expertise:</strong> Computer Networks, Artificial Intelligence, Algorithms &amp; Data Structures</div><div class=\"ssmrv-dept-prof-row ssmrv-dept-prof-comm\"><strong>Role:</strong> Member — Academic Council | Research Faculty — Computer Science</div></div></div><div class=\"ssmrv-dept-profile-item\" data-profile-id=\"mrs-sudha-g\" title=\"Click to view full profile of Mrs. Sudha G.\"><div class=\"ssmrv-dept-prof-header\"><span class=\"ssmrv-dept-prof-name\">Mrs. Sudha G.</span></div><div class=\"ssmrv-faculty-badges\"><span class=\"ssmrv-badge-desig\">Assistant Professor</span><span class=\"ssmrv-badge-dept\">Computer Science &amp; Applications (B.Sc CS / BCA)</span></div><div class=\"ssmrv-dept-prof-actions\"><span class=\"ssmrv-dept-prof-cta\">👤 View Full Profile</span><a href=\"https://nmkrv.edu.in/science/cs/\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"ssmrv-dept-visit-btn\" onclick=\"event.stopPropagation();\">🌐 Visit Website Page ↗</a></div><div class=\"ssmrv-dept-prof-meta\"><div class=\"ssmrv-dept-prof-row\"><strong>Qualifications:</strong> B.E. Computer Science, M.A. English</div><div class=\"ssmrv-dept-prof-row\"><strong>Experience:</strong> 21+ Years at NMKRV College (Joined September 2004)</div><div class=\"ssmrv-dept-prof-row\"><strong>Expertise:</strong> Digital Computer Fundamentals, Linux Programming, Operating Systems &amp; Java</div><div class=\"ssmrv-dept-prof-row ssmrv-dept-prof-comm\"><strong>Role:</strong> Department of Computer Science &amp; BCA</div></div></div><div class=\"ssmrv-dept-profile-item\" data-profile-id=\"ms-vaishnavi-k\" title=\"Click to view full profile of Ms. Vaishnavi K.\"><div class=\"ssmrv-dept-prof-header\"><span class=\"ssmrv-dept-prof-name\">Ms. Vaishnavi K.</span></div><div class=\"ssmrv-faculty-badges\"><span class=\"ssmrv-badge-desig\">Assistant Professor</span><span class=\"ssmrv-badge-dept\">Computer Science &amp; Applications (B.Sc CS / BCA)</span></div><div class=\"ssmrv-dept-prof-actions\"><span class=\"ssmrv-dept-prof-cta\">👤 View Full Profile</span><a href=\"https://nmkrv.edu.in/science/cs/\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"ssmrv-dept-visit-btn\" onclick=\"event.stopPropagation();\">🌐 Visit Website Page ↗</a></div><div class=\"ssmrv-dept-prof-meta\"><div class=\"ssmrv-dept-prof-row\"><strong>Qualifications:</strong> B.E. Computer Science, MCA</div><div class=\"ssmrv-dept-prof-row\"><strong>Experience:</strong> Full-Time Faculty (Joined February 2024)</div><div class=\"ssmrv-dept-prof-row\"><strong>Expertise:</strong> Programming in C, Web Technologies &amp; Visual Programming</div><div class=\"ssmrv-dept-prof-row ssmrv-dept-prof-comm\"><strong>Role:</strong> Department of Computer Science &amp; BCA</div></div></div><div class=\"ssmrv-dept-profile-item\" data-profile-id=\"mrs-deepalakshmi-r\" title=\"Click to view full profile of Mrs. Deepalakshmi R.\"><div class=\"ssmrv-dept-prof-header\"><span class=\"ssmrv-dept-prof-name\">Mrs. Deepalakshmi R.</span></div><div class=\"ssmrv-faculty-badges\"><span class=\"ssmrv-badge-desig\">Assistant Professor — M.Sc. Data Science &amp; BCA</span><span class=\"ssmrv-badge-dept\">PG Data Science &amp; Computer Applications</span></div><div class=\"ssmrv-dept-prof-actions\"><span class=\"ssmrv-dept-prof-cta\">👤 View Full Profile</span><a href=\"https://nmkrv.edu.in/m-sc-data-science/\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"ssmrv-dept-visit-btn\" onclick=\"event.stopPropagation();\">🌐 Visit Website Page ↗</a></div><div class=\"ssmrv-dept-prof-meta\"><div class=\"ssmrv-dept-prof-row\"><strong>Qualifications:</strong> B.E. Computer Science, M.Tech. Data Science</div><div class=\"ssmrv-dept-prof-row\"><strong>Experience:</strong> Full-Time Faculty (Joined August 2021)</div><div class=\"ssmrv-dept-prof-row\"><strong>Expertise:</strong> Data Science, Big Data Analytics, Machine Learning &amp; Statistical Modelling</div><div class=\"ssmrv-dept-prof-row ssmrv-dept-prof-comm\"><strong>Role:</strong> PG Department of Data Science</div></div></div><div class=\"ssmrv-dept-profile-item\" data-profile-id=\"ms-aishwarya-m\" title=\"Click to view full profile of Ms. Aishwarya M.\"><div class=\"ssmrv-dept-prof-header\"><span class=\"ssmrv-dept-prof-name\">Ms. Aishwarya M.</span></div><div class=\"ssmrv-faculty-badges\"><span class=\"ssmrv-badge-desig\">Assistant Professor — M.Sc. Data Science</span><span class=\"ssmrv-badge-dept\">PG Data Science (M.Sc.)</span></div><div class=\"ssmrv-dept-prof-actions\"><span class=\"ssmrv-dept-prof-cta\">👤 View Full Profile</span><a href=\"https://nmkrv.edu.in/m-sc-data-science/\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"ssmrv-dept-visit-btn\" onclick=\"event.stopPropagation();\">🌐 Visit Website Page ↗</a></div><div class=\"ssmrv-dept-prof-meta\"><div class=\"ssmrv-dept-prof-row\"><strong>Qualifications:</strong> M.Sc.</div><div class=\"ssmrv-dept-prof-row\"><strong>Experience:</strong> Postgraduate Teaching Experience in Data Science</div><div class=\"ssmrv-dept-prof-row\"><strong>Expertise:</strong> Data Analytics, Python for Data Science &amp; Predictive Modelling</div><div class=\"ssmrv-dept-prof-row ssmrv-dept-prof-comm\"><strong>Role:</strong> PG Department of Data Science</div></div></div><div class=\"ssmrv-dept-profile-item\" data-profile-id=\"ms-supriti-chakraborthy\" title=\"Click to view full profile of Ms. Supriti Chakraborthy\"><div class=\"ssmrv-dept-prof-header\"><span class=\"ssmrv-dept-prof-name\">Ms. Supriti Chakraborthy</span></div><div class=\"ssmrv-faculty-badges\"><span class=\"ssmrv-badge-desig\">Assistant Professor — M.Sc. Data Science</span><span class=\"ssmrv-badge-dept\">PG Data Science (M.Sc.)</span></div><div class=\"ssmrv-dept-prof-actions\"><span class=\"ssmrv-dept-prof-cta\">👤 View Full Profile</span><a href=\"https://nmkrv.edu.in/m-sc-data-science/\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"ssmrv-dept-visit-btn\" onclick=\"event.stopPropagation();\">🌐 Visit Website Page ↗</a></div><div class=\"ssmrv-dept-prof-meta\"><div class=\"ssmrv-dept-prof-row\"><strong>Qualifications:</strong> M.Sc.</div><div class=\"ssmrv-dept-prof-row\"><strong>Experience:</strong> Postgraduate Teaching Experience in Data Science</div><div class=\"ssmrv-dept-prof-row\"><strong>Expertise:</strong> Statistical Inference, Data Visualization &amp; Computational Analytics</div><div class=\"ssmrv-dept-prof-row ssmrv-dept-prof-comm\"><strong>Role:</strong> PG Department of Data Science</div></div></div></div>",
    "buttons": [
      {
        "text": "👤 Mrs. Vandana G. P.",
        "action": "profile:mrs-vandana-g-p"
      },
      {
        "text": "👤 Mrs. Bindhya M.",
        "action": "profile:mrs-bindhya-m"
      },
      {
        "text": "👤 Ms. Haritha N.",
        "action": "profile:ms-haritha-n"
      },
      {
        "text": "👤 Ms. Rochana G.",
        "action": "profile:ms-rochana-g"
      },
      {
        "text": "👤 Ms. Aishwarya S.",
        "action": "profile:ms-aishwarya-s"
      },
      {
        "text": "👤 Dr. Hamsha K.",
        "action": "profile:dr-hamsha-k"
      },
      {
        "text": "👤 Mrs. Sudha G.",
        "action": "profile:mrs-sudha-g"
      },
      {
        "text": "👤 Ms. Vaishnavi K.",
        "action": "profile:ms-vaishnavi-k"
      },
      {
        "text": "👤 Mrs. Deepalakshmi R.",
        "action": "profile:mrs-deepalakshmi-r"
      },
      {
        "text": "👤 Ms. Aishwarya M.",
        "action": "profile:ms-aishwarya-m"
      },
      {
        "text": "👤 Ms. Supriti Chakraborthy",
        "action": "profile:ms-supriti-chakraborthy"
      },
      {
        "text": "🌐 Visit Department Webpage ↗",
        "url": "https://nmkrv.edu.in/bca/"
      },
      {
        "text": "👨‍🏫 All Faculty Departments",
        "action": "flow:faculty"
      }
    ]
  },
  "profile_mrs-vandana-g-p": {
    "id": "profile_mrs-vandana-g-p",
    "pageUrl": "https://nmkrv.edu.in/bca/",
    "message": "<div class=\"ssmrv-faculty-card is-full-profile\"><div class=\"ssmrv-faculty-name\">Mrs. Vandana G. P.</div><div class=\"ssmrv-faculty-badges\"><span class=\"ssmrv-badge-desig\">Assistant Professor</span><span class=\"ssmrv-badge-dept\">Computer Applications (BCA)</span></div><div class=\"ssmrv-fac-actions\"><a href=\"https://nmkrv.edu.in/bca/\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"ssmrv-visit-website-btn\">🌐 Visit Official Website Page ↗</a></div><div class=\"ssmrv-faculty-meta\"><div class=\"ssmrv-fac-row\"><span class=\"ssmrv-fac-label\">🎓 Qualifications</span><span class=\"ssmrv-fac-val\">MCA</span></div><div class=\"ssmrv-fac-row\"><span class=\"ssmrv-fac-label\">⏳ Experience</span><span class=\"ssmrv-fac-val\">Full-Time Faculty in BCA (Joined June 2022)</span></div><div class=\"ssmrv-fac-row\"><span class=\"ssmrv-fac-label\">🔬 Areas of Expertise</span><span class=\"ssmrv-fac-val\">Software Engineering, Database Management Systems &amp; Web Technologies</span></div><div class=\"ssmrv-fac-row\"><span class=\"ssmrv-fac-label\">🛡️ Committee / Role</span><span class=\"ssmrv-fac-val ssmrv-fac-role-val\">Department of Computer Applications (BCA)</span></div><div class=\"ssmrv-fac-section\"><div class=\"ssmrv-fac-sec-title\">📖 Profile Overview</div><div class=\"ssmrv-fac-sec-text\">Mrs. Vandana G. P. serves as Assistant Professor in the AICTE-approved Department of Computer Applications (BCA) at NMKRV College.</div></div><div class=\"ssmrv-fac-section\"><div class=\"ssmrv-fac-sec-title\">🏆 Key Highlights</div><div class=\"ssmrv-fac-sec-text\">Core Faculty Member, Department of Computer Applications (BCA).</div></div><div class=\"ssmrv-fac-contact\"><div>📧 <a href=\"mailto:nmkrv@rvei.edu.in\">nmkrv@rvei.edu.in</a></div><div>📞 <a href=\"tel:08069018900\">080-69018900</a></div></div></div></div>",
    "buttons": [
      {
        "text": "🌐 Visit Official Website Page ↗",
        "url": "https://nmkrv.edu.in/bca/",
        "isPrimary": true
      },
      {
        "text": "🏛️ 💻 Computer Applications, CS & Data Science",
        "action": "flow:faculty_bca"
      },
      {
        "text": "👨‍🏫 All Faculty Departments",
        "action": "flow:faculty"
      }
    ]
  },
  "profile_mrs-bindhya-m": {
    "id": "profile_mrs-bindhya-m",
    "pageUrl": "https://nmkrv.edu.in/bca/",
    "message": "<div class=\"ssmrv-faculty-card is-full-profile\"><div class=\"ssmrv-faculty-name\">Mrs. Bindhya M.</div><div class=\"ssmrv-faculty-badges\"><span class=\"ssmrv-badge-desig\">Assistant Professor</span><span class=\"ssmrv-badge-dept\">Computer Applications (BCA)</span></div><div class=\"ssmrv-fac-actions\"><a href=\"https://nmkrv.edu.in/bca/\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"ssmrv-visit-website-btn\">🌐 Visit Official Website Page ↗</a></div><div class=\"ssmrv-faculty-meta\"><div class=\"ssmrv-fac-row\"><span class=\"ssmrv-fac-label\">🎓 Qualifications</span><span class=\"ssmrv-fac-val\">MCA, M.Sc. Computer Science</span></div><div class=\"ssmrv-fac-row\"><span class=\"ssmrv-fac-label\">⏳ Experience</span><span class=\"ssmrv-fac-val\">8+ Years at NMKRV College (Joined January 2018)</span></div><div class=\"ssmrv-fac-row\"><span class=\"ssmrv-fac-label\">🔬 Areas of Expertise</span><span class=\"ssmrv-fac-val\">Object-Oriented Programming, Data Structures &amp; Operating Systems</span></div><div class=\"ssmrv-fac-row\"><span class=\"ssmrv-fac-label\">🛡️ Committee / Role</span><span class=\"ssmrv-fac-val ssmrv-fac-role-val\">Exam Core Team — Office of the Controller of Examinations</span></div><div class=\"ssmrv-fac-section\"><div class=\"ssmrv-fac-sec-title\">📖 Profile Overview</div><div class=\"ssmrv-fac-sec-text\">Mrs. Bindhya M. is an Assistant Professor in the Department of Computer Applications (BCA) since January 2018 and serves on the Examination Core Team in the Office of the Controller of Examinations.</div></div><div class=\"ssmrv-fac-section\"><div class=\"ssmrv-fac-sec-title\">🏆 Key Highlights</div><div class=\"ssmrv-fac-sec-text\">Member — Examination Core Team (COE) &amp; Senior BCA Faculty.</div></div><div class=\"ssmrv-fac-contact\"><div>📧 <a href=\"mailto:bindhyam.nmkrv@rvei.edu.in\">bindhyam.nmkrv@rvei.edu.in</a></div><div>📞 <a href=\"tel:08069018900\">080-69018900</a></div></div></div></div>",
    "buttons": [
      {
        "text": "🌐 Visit Official Website Page ↗",
        "url": "https://nmkrv.edu.in/bca/",
        "isPrimary": true
      },
      {
        "text": "🏛️ 💻 Computer Applications, CS & Data Science",
        "action": "flow:faculty_bca"
      },
      {
        "text": "👨‍🏫 All Faculty Departments",
        "action": "flow:faculty"
      }
    ]
  },
  "profile_ms-haritha-n": {
    "id": "profile_ms-haritha-n",
    "pageUrl": "https://nmkrv.edu.in/bca/",
    "message": "<div class=\"ssmrv-faculty-card is-full-profile\"><div class=\"ssmrv-faculty-name\">Ms. Haritha N.</div><div class=\"ssmrv-faculty-badges\"><span class=\"ssmrv-badge-desig\">Assistant Professor</span><span class=\"ssmrv-badge-dept\">Computer Applications (BCA)</span></div><div class=\"ssmrv-fac-actions\"><a href=\"https://nmkrv.edu.in/bca/\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"ssmrv-visit-website-btn\">🌐 Visit Official Website Page ↗</a></div><div class=\"ssmrv-faculty-meta\"><div class=\"ssmrv-fac-row\"><span class=\"ssmrv-fac-label\">🎓 Qualifications</span><span class=\"ssmrv-fac-val\">MCA</span></div><div class=\"ssmrv-fac-row\"><span class=\"ssmrv-fac-label\">⏳ Experience</span><span class=\"ssmrv-fac-val\">Full-Time Faculty in BCA (Joined October 2023)</span></div><div class=\"ssmrv-fac-row\"><span class=\"ssmrv-fac-label\">🔬 Areas of Expertise</span><span class=\"ssmrv-fac-val\">Computer Networks, Programming in C/Java &amp; Cloud Computing</span></div><div class=\"ssmrv-fac-row\"><span class=\"ssmrv-fac-label\">🛡️ Committee / Role</span><span class=\"ssmrv-fac-val ssmrv-fac-role-val\">Department of Computer Applications (BCA)</span></div><div class=\"ssmrv-fac-section\"><div class=\"ssmrv-fac-sec-title\">📖 Profile Overview</div><div class=\"ssmrv-fac-sec-text\">Ms. Haritha N. serves as Assistant Professor in the Department of Computer Applications (BCA) at NMKRV College.</div></div><div class=\"ssmrv-fac-section\"><div class=\"ssmrv-fac-sec-title\">🏆 Key Highlights</div><div class=\"ssmrv-fac-sec-text\">AICTE Approved BCA Faculty Member.</div></div><div class=\"ssmrv-fac-contact\"><div>📧 <a href=\"mailto:nmkrv@rvei.edu.in\">nmkrv@rvei.edu.in</a></div><div>📞 <a href=\"tel:08069018900\">080-69018900</a></div></div></div></div>",
    "buttons": [
      {
        "text": "🌐 Visit Official Website Page ↗",
        "url": "https://nmkrv.edu.in/bca/",
        "isPrimary": true
      },
      {
        "text": "🏛️ 💻 Computer Applications, CS & Data Science",
        "action": "flow:faculty_bca"
      },
      {
        "text": "👨‍🏫 All Faculty Departments",
        "action": "flow:faculty"
      }
    ]
  },
  "profile_ms-rochana-g": {
    "id": "profile_ms-rochana-g",
    "pageUrl": "https://nmkrv.edu.in/bca/",
    "message": "<div class=\"ssmrv-faculty-card is-full-profile\"><div class=\"ssmrv-faculty-name\">Ms. Rochana G.</div><div class=\"ssmrv-faculty-badges\"><span class=\"ssmrv-badge-desig\">Assistant Professor</span><span class=\"ssmrv-badge-dept\">Computer Applications (BCA)</span></div><div class=\"ssmrv-fac-actions\"><a href=\"https://nmkrv.edu.in/bca/\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"ssmrv-visit-website-btn\">🌐 Visit Official Website Page ↗</a></div><div class=\"ssmrv-faculty-meta\"><div class=\"ssmrv-fac-row\"><span class=\"ssmrv-fac-label\">🎓 Qualifications</span><span class=\"ssmrv-fac-val\">MCA, M.Sc. Data Science</span></div><div class=\"ssmrv-fac-row\"><span class=\"ssmrv-fac-label\">⏳ Experience</span><span class=\"ssmrv-fac-val\">Full-Time Faculty in BCA (Joined August 2024)</span></div><div class=\"ssmrv-fac-row\"><span class=\"ssmrv-fac-label\">🔬 Areas of Expertise</span><span class=\"ssmrv-fac-val\">Data Science, Python Programming &amp; Machine Learning</span></div><div class=\"ssmrv-fac-row\"><span class=\"ssmrv-fac-label\">🛡️ Committee / Role</span><span class=\"ssmrv-fac-val ssmrv-fac-role-val\">Member — Innovation Cell &amp; Social Media Cell</span></div><div class=\"ssmrv-fac-section\"><div class=\"ssmrv-fac-sec-title\">📖 Profile Overview</div><div class=\"ssmrv-fac-sec-text\">Ms. Rochana G. is an Assistant Professor in the Department of Computer Applications (BCA) and serves as a member of the Innovation Cell and Social Media Cell.</div></div><div class=\"ssmrv-fac-section\"><div class=\"ssmrv-fac-sec-title\">🏆 Key Highlights</div><div class=\"ssmrv-fac-sec-text\">Member — Innovation Cell &amp; Social Media Cell.</div></div><div class=\"ssmrv-fac-contact\"><div>📧 <a href=\"mailto:nmkrv@rvei.edu.in\">nmkrv@rvei.edu.in</a></div><div>📞 <a href=\"tel:08069018900\">080-69018900</a></div></div></div></div>",
    "buttons": [
      {
        "text": "🌐 Visit Official Website Page ↗",
        "url": "https://nmkrv.edu.in/bca/",
        "isPrimary": true
      },
      {
        "text": "🏛️ 💻 Computer Applications, CS & Data Science",
        "action": "flow:faculty_bca"
      },
      {
        "text": "👨‍🏫 All Faculty Departments",
        "action": "flow:faculty"
      }
    ]
  },
  "profile_ms-aishwarya-s": {
    "id": "profile_ms-aishwarya-s",
    "pageUrl": "https://nmkrv.edu.in/bca/",
    "message": "<div class=\"ssmrv-faculty-card is-full-profile\"><div class=\"ssmrv-faculty-name\">Ms. Aishwarya S.</div><div class=\"ssmrv-faculty-badges\"><span class=\"ssmrv-badge-desig\">Assistant Professor</span><span class=\"ssmrv-badge-dept\">Computer Applications (BCA)</span></div><div class=\"ssmrv-fac-actions\"><a href=\"https://nmkrv.edu.in/bca/\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"ssmrv-visit-website-btn\">🌐 Visit Official Website Page ↗</a></div><div class=\"ssmrv-faculty-meta\"><div class=\"ssmrv-fac-row\"><span class=\"ssmrv-fac-label\">🎓 Qualifications</span><span class=\"ssmrv-fac-val\">MCA</span></div><div class=\"ssmrv-fac-row\"><span class=\"ssmrv-fac-label\">⏳ Experience</span><span class=\"ssmrv-fac-val\">Full-Time Faculty in BCA (Joined September 2024)</span></div><div class=\"ssmrv-fac-row\"><span class=\"ssmrv-fac-label\">🔬 Areas of Expertise</span><span class=\"ssmrv-fac-val\">Web Application Development, RDBMS &amp; Software Testing</span></div><div class=\"ssmrv-fac-row\"><span class=\"ssmrv-fac-label\">🛡️ Committee / Role</span><span class=\"ssmrv-fac-val ssmrv-fac-role-val\">Department of Computer Applications (BCA)</span></div><div class=\"ssmrv-fac-section\"><div class=\"ssmrv-fac-sec-title\">📖 Profile Overview</div><div class=\"ssmrv-fac-sec-text\">Ms. Aishwarya S. serves as Assistant Professor in the Department of Computer Applications (BCA) at NMKRV College.</div></div><div class=\"ssmrv-fac-section\"><div class=\"ssmrv-fac-sec-title\">🏆 Key Highlights</div><div class=\"ssmrv-fac-sec-text\">AICTE Approved BCA Faculty Member.</div></div><div class=\"ssmrv-fac-contact\"><div>📧 <a href=\"mailto:nmkrv@rvei.edu.in\">nmkrv@rvei.edu.in</a></div><div>📞 <a href=\"tel:08069018900\">080-69018900</a></div></div></div></div>",
    "buttons": [
      {
        "text": "🌐 Visit Official Website Page ↗",
        "url": "https://nmkrv.edu.in/bca/",
        "isPrimary": true
      },
      {
        "text": "🏛️ 💻 Computer Applications, CS & Data Science",
        "action": "flow:faculty_bca"
      },
      {
        "text": "👨‍🏫 All Faculty Departments",
        "action": "flow:faculty"
      }
    ]
  },
  "profile_dr-hamsha-k": {
    "id": "profile_dr-hamsha-k",
    "pageUrl": "https://nmkrv.edu.in/science/cs/",
    "message": "<div class=\"ssmrv-faculty-card is-full-profile\"><div class=\"ssmrv-faculty-name\">Dr. Hamsha K.</div><div class=\"ssmrv-faculty-badges\"><span class=\"ssmrv-badge-desig\">Assistant Professor</span><span class=\"ssmrv-badge-dept\">Computer Science (B.Sc CS)</span></div><div class=\"ssmrv-fac-actions\"><a href=\"https://nmkrv.edu.in/science/cs/\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"ssmrv-visit-website-btn\">🌐 Visit Official Website Page ↗</a></div><div class=\"ssmrv-faculty-meta\"><div class=\"ssmrv-fac-row\"><span class=\"ssmrv-fac-label\">🎓 Qualifications</span><span class=\"ssmrv-fac-val\">B.E., M.S., M.Tech., Ph.D.</span></div><div class=\"ssmrv-fac-row\"><span class=\"ssmrv-fac-label\">⏳ Experience</span><span class=\"ssmrv-fac-val\">Senior Faculty &amp; Research Supervisor in Computer Science</span></div><div class=\"ssmrv-fac-row\"><span class=\"ssmrv-fac-label\">🔬 Areas of Expertise</span><span class=\"ssmrv-fac-val\">Computer Networks, Artificial Intelligence, Algorithms &amp; Data Structures</span></div><div class=\"ssmrv-fac-row\"><span class=\"ssmrv-fac-label\">🛡️ Committee / Role</span><span class=\"ssmrv-fac-val ssmrv-fac-role-val\">Member — Academic Council | Research Faculty — Computer Science</span></div><div class=\"ssmrv-fac-section\"><div class=\"ssmrv-fac-sec-title\">📖 Profile Overview</div><div class=\"ssmrv-fac-sec-text\">Dr. Hamsha K. is an Assistant Professor in the Department of Computer Science, a recognized Research Faculty member, and a Member of the Academic Council at NMKRV College.</div></div><div class=\"ssmrv-fac-section\"><div class=\"ssmrv-fac-sec-title\">🏆 Key Highlights</div><div class=\"ssmrv-fac-sec-text\">Member — Academic Council &amp; Recognized Research Faculty in Computer Science.</div></div><div class=\"ssmrv-fac-contact\"><div>📧 <a href=\"mailto:hamsha.nmkrv@rvei.edu.in\">hamsha.nmkrv@rvei.edu.in</a></div><div>📞 <a href=\"tel:08069018900\">080-69018900</a></div></div></div></div>",
    "buttons": [
      {
        "text": "🌐 Visit Official Website Page ↗",
        "url": "https://nmkrv.edu.in/science/cs/",
        "isPrimary": true
      },
      {
        "text": "🏛️ 💻 Computer Applications, CS & Data Science",
        "action": "flow:faculty_bca"
      },
      {
        "text": "👨‍🏫 All Faculty Departments",
        "action": "flow:faculty"
      }
    ]
  },
  "profile_mrs-sudha-g": {
    "id": "profile_mrs-sudha-g",
    "pageUrl": "https://nmkrv.edu.in/science/cs/",
    "message": "<div class=\"ssmrv-faculty-card is-full-profile\"><div class=\"ssmrv-faculty-name\">Mrs. Sudha G.</div><div class=\"ssmrv-faculty-badges\"><span class=\"ssmrv-badge-desig\">Assistant Professor</span><span class=\"ssmrv-badge-dept\">Computer Science &amp; Applications (B.Sc CS / BCA)</span></div><div class=\"ssmrv-fac-actions\"><a href=\"https://nmkrv.edu.in/science/cs/\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"ssmrv-visit-website-btn\">🌐 Visit Official Website Page ↗</a></div><div class=\"ssmrv-faculty-meta\"><div class=\"ssmrv-fac-row\"><span class=\"ssmrv-fac-label\">🎓 Qualifications</span><span class=\"ssmrv-fac-val\">B.E. Computer Science, M.A. English</span></div><div class=\"ssmrv-fac-row\"><span class=\"ssmrv-fac-label\">⏳ Experience</span><span class=\"ssmrv-fac-val\">21+ Years at NMKRV College (Joined September 2004)</span></div><div class=\"ssmrv-fac-row\"><span class=\"ssmrv-fac-label\">🔬 Areas of Expertise</span><span class=\"ssmrv-fac-val\">Digital Computer Fundamentals, Linux Programming, Operating Systems &amp; Java</span></div><div class=\"ssmrv-fac-row\"><span class=\"ssmrv-fac-label\">🛡️ Committee / Role</span><span class=\"ssmrv-fac-val ssmrv-fac-role-val\">Department of Computer Science &amp; BCA</span></div><div class=\"ssmrv-fac-section\"><div class=\"ssmrv-fac-sec-title\">📖 Profile Overview</div><div class=\"ssmrv-fac-sec-text\">Mrs. Sudha G. is a senior Assistant Professor in the Department of Computer Science &amp; Applications at NMKRV College with over two decades of teaching experience since September 2004.</div></div><div class=\"ssmrv-fac-section\"><div class=\"ssmrv-fac-sec-title\">🏆 Key Highlights</div><div class=\"ssmrv-fac-sec-text\">21+ Years of dedicated teaching service at NMKRV College.</div></div><div class=\"ssmrv-fac-contact\"><div>📧 <a href=\"mailto:sudhag.nmkrv@rvei.edu.in\">sudhag.nmkrv@rvei.edu.in</a></div><div>📞 <a href=\"tel:08069018900\">080-69018900</a></div></div></div></div>",
    "buttons": [
      {
        "text": "🌐 Visit Official Website Page ↗",
        "url": "https://nmkrv.edu.in/science/cs/",
        "isPrimary": true
      },
      {
        "text": "🏛️ 💻 Computer Applications, CS & Data Science",
        "action": "flow:faculty_bca"
      },
      {
        "text": "👨‍🏫 All Faculty Departments",
        "action": "flow:faculty"
      }
    ]
  },
  "profile_ms-vaishnavi-k": {
    "id": "profile_ms-vaishnavi-k",
    "pageUrl": "https://nmkrv.edu.in/science/cs/",
    "message": "<div class=\"ssmrv-faculty-card is-full-profile\"><div class=\"ssmrv-faculty-name\">Ms. Vaishnavi K.</div><div class=\"ssmrv-faculty-badges\"><span class=\"ssmrv-badge-desig\">Assistant Professor</span><span class=\"ssmrv-badge-dept\">Computer Science &amp; Applications (B.Sc CS / BCA)</span></div><div class=\"ssmrv-fac-actions\"><a href=\"https://nmkrv.edu.in/science/cs/\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"ssmrv-visit-website-btn\">🌐 Visit Official Website Page ↗</a></div><div class=\"ssmrv-faculty-meta\"><div class=\"ssmrv-fac-row\"><span class=\"ssmrv-fac-label\">🎓 Qualifications</span><span class=\"ssmrv-fac-val\">B.E. Computer Science, MCA</span></div><div class=\"ssmrv-fac-row\"><span class=\"ssmrv-fac-label\">⏳ Experience</span><span class=\"ssmrv-fac-val\">Full-Time Faculty (Joined February 2024)</span></div><div class=\"ssmrv-fac-row\"><span class=\"ssmrv-fac-label\">🔬 Areas of Expertise</span><span class=\"ssmrv-fac-val\">Programming in C, Web Technologies &amp; Visual Programming</span></div><div class=\"ssmrv-fac-row\"><span class=\"ssmrv-fac-label\">🛡️ Committee / Role</span><span class=\"ssmrv-fac-val ssmrv-fac-role-val\">Department of Computer Science &amp; BCA</span></div><div class=\"ssmrv-fac-section\"><div class=\"ssmrv-fac-sec-title\">📖 Profile Overview</div><div class=\"ssmrv-fac-sec-text\">Ms. Vaishnavi K. serves as Assistant Professor in the Department of Computer Science and Computer Applications at NMKRV College.</div></div><div class=\"ssmrv-fac-section\"><div class=\"ssmrv-fac-sec-title\">🏆 Key Highlights</div><div class=\"ssmrv-fac-sec-text\">Faculty Member, Computer Science &amp; BCA.</div></div><div class=\"ssmrv-fac-contact\"><div>📧 <a href=\"mailto:nmkrv@rvei.edu.in\">nmkrv@rvei.edu.in</a></div><div>📞 <a href=\"tel:08069018900\">080-69018900</a></div></div></div></div>",
    "buttons": [
      {
        "text": "🌐 Visit Official Website Page ↗",
        "url": "https://nmkrv.edu.in/science/cs/",
        "isPrimary": true
      },
      {
        "text": "🏛️ 💻 Computer Applications, CS & Data Science",
        "action": "flow:faculty_bca"
      },
      {
        "text": "👨‍🏫 All Faculty Departments",
        "action": "flow:faculty"
      }
    ]
  },
  "profile_mrs-deepalakshmi-r": {
    "id": "profile_mrs-deepalakshmi-r",
    "pageUrl": "https://nmkrv.edu.in/m-sc-data-science/",
    "message": "<div class=\"ssmrv-faculty-card is-full-profile\"><div class=\"ssmrv-faculty-name\">Mrs. Deepalakshmi R.</div><div class=\"ssmrv-faculty-badges\"><span class=\"ssmrv-badge-desig\">Assistant Professor — M.Sc. Data Science &amp; BCA</span><span class=\"ssmrv-badge-dept\">PG Data Science &amp; Computer Applications</span></div><div class=\"ssmrv-fac-actions\"><a href=\"https://nmkrv.edu.in/m-sc-data-science/\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"ssmrv-visit-website-btn\">🌐 Visit Official Website Page ↗</a></div><div class=\"ssmrv-faculty-meta\"><div class=\"ssmrv-fac-row\"><span class=\"ssmrv-fac-label\">🎓 Qualifications</span><span class=\"ssmrv-fac-val\">B.E. Computer Science, M.Tech. Data Science</span></div><div class=\"ssmrv-fac-row\"><span class=\"ssmrv-fac-label\">⏳ Experience</span><span class=\"ssmrv-fac-val\">Full-Time Faculty (Joined August 2021)</span></div><div class=\"ssmrv-fac-row\"><span class=\"ssmrv-fac-label\">🔬 Areas of Expertise</span><span class=\"ssmrv-fac-val\">Data Science, Big Data Analytics, Machine Learning &amp; Statistical Modelling</span></div><div class=\"ssmrv-fac-row\"><span class=\"ssmrv-fac-label\">🛡️ Committee / Role</span><span class=\"ssmrv-fac-val ssmrv-fac-role-val\">PG Department of Data Science</span></div><div class=\"ssmrv-fac-section\"><div class=\"ssmrv-fac-sec-title\">📖 Profile Overview</div><div class=\"ssmrv-fac-sec-text\">Mrs. Deepalakshmi R. serves as Assistant Professor in the Postgraduate Department of M.Sc. Data Science and BCA at NMKRV College.</div></div><div class=\"ssmrv-fac-section\"><div class=\"ssmrv-fac-sec-title\">🏆 Key Highlights</div><div class=\"ssmrv-fac-sec-text\">Lead Faculty for M.Sc. Data Science &amp; AICTE BCA Faculty.</div></div><div class=\"ssmrv-fac-contact\"><div>📧 <a href=\"mailto:nmkrv@rvei.edu.in\">nmkrv@rvei.edu.in</a></div><div>📞 <a href=\"tel:08069018900\">080-69018900</a></div></div></div></div>",
    "buttons": [
      {
        "text": "🌐 Visit Official Website Page ↗",
        "url": "https://nmkrv.edu.in/m-sc-data-science/",
        "isPrimary": true
      },
      {
        "text": "🏛️ 💻 Computer Applications, CS & Data Science",
        "action": "flow:faculty_bca"
      },
      {
        "text": "👨‍🏫 All Faculty Departments",
        "action": "flow:faculty"
      }
    ]
  },
  "profile_ms-aishwarya-m": {
    "id": "profile_ms-aishwarya-m",
    "pageUrl": "https://nmkrv.edu.in/m-sc-data-science/",
    "message": "<div class=\"ssmrv-faculty-card is-full-profile\"><div class=\"ssmrv-faculty-name\">Ms. Aishwarya M.</div><div class=\"ssmrv-faculty-badges\"><span class=\"ssmrv-badge-desig\">Assistant Professor — M.Sc. Data Science</span><span class=\"ssmrv-badge-dept\">PG Data Science (M.Sc.)</span></div><div class=\"ssmrv-fac-actions\"><a href=\"https://nmkrv.edu.in/m-sc-data-science/\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"ssmrv-visit-website-btn\">🌐 Visit Official Website Page ↗</a></div><div class=\"ssmrv-faculty-meta\"><div class=\"ssmrv-fac-row\"><span class=\"ssmrv-fac-label\">🎓 Qualifications</span><span class=\"ssmrv-fac-val\">M.Sc.</span></div><div class=\"ssmrv-fac-row\"><span class=\"ssmrv-fac-label\">⏳ Experience</span><span class=\"ssmrv-fac-val\">Postgraduate Teaching Experience in Data Science</span></div><div class=\"ssmrv-fac-row\"><span class=\"ssmrv-fac-label\">🔬 Areas of Expertise</span><span class=\"ssmrv-fac-val\">Data Analytics, Python for Data Science &amp; Predictive Modelling</span></div><div class=\"ssmrv-fac-row\"><span class=\"ssmrv-fac-label\">🛡️ Committee / Role</span><span class=\"ssmrv-fac-val ssmrv-fac-role-val\">PG Department of Data Science</span></div><div class=\"ssmrv-fac-section\"><div class=\"ssmrv-fac-sec-title\">📖 Profile Overview</div><div class=\"ssmrv-fac-sec-text\">Ms. Aishwarya M. serves as Assistant Professor in the Postgraduate Department of M.Sc. Data Science at NMKRV College.</div></div><div class=\"ssmrv-fac-section\"><div class=\"ssmrv-fac-sec-title\">🏆 Key Highlights</div><div class=\"ssmrv-fac-sec-text\">Faculty Member, PG Department of Data Science.</div></div><div class=\"ssmrv-fac-contact\"><div>📧 <a href=\"mailto:nmkrv@rvei.edu.in\">nmkrv@rvei.edu.in</a></div><div>📞 <a href=\"tel:08069018900\">080-69018900</a></div></div></div></div>",
    "buttons": [
      {
        "text": "🌐 Visit Official Website Page ↗",
        "url": "https://nmkrv.edu.in/m-sc-data-science/",
        "isPrimary": true
      },
      {
        "text": "🏛️ 💻 Computer Applications, CS & Data Science",
        "action": "flow:faculty_bca"
      },
      {
        "text": "👨‍🏫 All Faculty Departments",
        "action": "flow:faculty"
      }
    ]
  },
  "profile_ms-supriti-chakraborthy": {
    "id": "profile_ms-supriti-chakraborthy",
    "pageUrl": "https://nmkrv.edu.in/m-sc-data-science/",
    "message": "<div class=\"ssmrv-faculty-card is-full-profile\"><div class=\"ssmrv-faculty-name\">Ms. Supriti Chakraborthy</div><div class=\"ssmrv-faculty-badges\"><span class=\"ssmrv-badge-desig\">Assistant Professor — M.Sc. Data Science</span><span class=\"ssmrv-badge-dept\">PG Data Science (M.Sc.)</span></div><div class=\"ssmrv-fac-actions\"><a href=\"https://nmkrv.edu.in/m-sc-data-science/\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"ssmrv-visit-website-btn\">🌐 Visit Official Website Page ↗</a></div><div class=\"ssmrv-faculty-meta\"><div class=\"ssmrv-fac-row\"><span class=\"ssmrv-fac-label\">🎓 Qualifications</span><span class=\"ssmrv-fac-val\">M.Sc.</span></div><div class=\"ssmrv-fac-row\"><span class=\"ssmrv-fac-label\">⏳ Experience</span><span class=\"ssmrv-fac-val\">Postgraduate Teaching Experience in Data Science</span></div><div class=\"ssmrv-fac-row\"><span class=\"ssmrv-fac-label\">🔬 Areas of Expertise</span><span class=\"ssmrv-fac-val\">Statistical Inference, Data Visualization &amp; Computational Analytics</span></div><div class=\"ssmrv-fac-row\"><span class=\"ssmrv-fac-label\">🛡️ Committee / Role</span><span class=\"ssmrv-fac-val ssmrv-fac-role-val\">PG Department of Data Science</span></div><div class=\"ssmrv-fac-section\"><div class=\"ssmrv-fac-sec-title\">📖 Profile Overview</div><div class=\"ssmrv-fac-sec-text\">Ms. Supriti Chakraborthy serves as Assistant Professor in the Postgraduate Department of M.Sc. Data Science at NMKRV College.</div></div><div class=\"ssmrv-fac-section\"><div class=\"ssmrv-fac-sec-title\">🏆 Key Highlights</div><div class=\"ssmrv-fac-sec-text\">Faculty Member, PG Department of Data Science.</div></div><div class=\"ssmrv-fac-contact\"><div>📧 <a href=\"mailto:nmkrv@rvei.edu.in\">nmkrv@rvei.edu.in</a></div><div>📞 <a href=\"tel:08069018900\">080-69018900</a></div></div></div></div>",
    "buttons": [
      {
        "text": "🌐 Visit Official Website Page ↗",
        "url": "https://nmkrv.edu.in/m-sc-data-science/",
        "isPrimary": true
      },
      {
        "text": "🏛️ 💻 Computer Applications, CS & Data Science",
        "action": "flow:faculty_bca"
      },
      {
        "text": "👨‍🏫 All Faculty Departments",
        "action": "flow:faculty"
      }
    ]
  },
  "faculty_physical_sciences": {
    "id": "faculty_physical_sciences",
    "pageUrl": "https://nmkrv.edu.in/science/chemistry/",
    "message": "<div class=\"ssmrv-flow-heading\">🔬 Department of Physical &amp; Chemical Sciences</div><div class=\"ssmrv-flow-subheading\">Chemistry (UG, PG &amp; Ph.D.), Mathematics (UG &amp; PG) and Physics Faculty — Select <b>View Full Profile</b> or <b>Visit Website Page ↗</b> on any card below:</div><div class=\"ssmrv-dept-profile-list\"><div class=\"ssmrv-dept-profile-item\" data-profile-id=\"dr-venkataramanappa-y\" title=\"Click to view full profile of Dr. Y. Venkataramanappa\"><div class=\"ssmrv-dept-prof-header\"><span class=\"ssmrv-dept-prof-name\">Dr. Y. Venkataramanappa</span></div><div class=\"ssmrv-faculty-badges\"><span class=\"ssmrv-badge-desig\">Assistant Professor &amp; PG Coordinator (Chemistry)</span><span class=\"ssmrv-badge-dept\">PG &amp; Research Chemistry (M.Sc. &amp; Ph.D.)</span></div><div class=\"ssmrv-dept-prof-actions\"><span class=\"ssmrv-dept-prof-cta\">👤 View Full Profile</span><a href=\"https://nmkrv.edu.in/m-sc-chemistry/\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"ssmrv-dept-visit-btn\" onclick=\"event.stopPropagation();\">🌐 Visit Website Page ↗</a></div><div class=\"ssmrv-dept-prof-meta\"><div class=\"ssmrv-dept-prof-row\"><strong>Qualifications:</strong> M.Sc., Ph.D.</div><div class=\"ssmrv-dept-prof-row\"><strong>Experience:</strong> PG Coordinator, Ph.D. Research Guide &amp; Governing Body Member</div><div class=\"ssmrv-dept-prof-row\"><strong>Expertise:</strong> Analytical Chemistry, Spectrophotometric Environmental Analysis &amp; Inorganic Chemistry</div><div class=\"ssmrv-dept-prof-row ssmrv-dept-prof-comm\"><strong>Role:</strong> Member — Governing Body &amp; Research Advisory Committee | Ph.D. Research Guide</div></div></div><div class=\"ssmrv-dept-profile-item\" data-profile-id=\"dr-santhosh-a-s\" title=\"Click to view full profile of Dr. Santhosh A. S.\"><div class=\"ssmrv-dept-prof-header\"><span class=\"ssmrv-dept-prof-name\">Dr. Santhosh A. S.</span></div><div class=\"ssmrv-faculty-badges\"><span class=\"ssmrv-badge-desig\">Assistant Professor &amp; Head (Chemistry)</span><span class=\"ssmrv-badge-dept\">Chemistry (B.Sc.)</span></div><div class=\"ssmrv-dept-prof-actions\"><span class=\"ssmrv-dept-prof-cta\">👤 View Full Profile</span><a href=\"https://nmkrv.edu.in/science/chemistry/\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"ssmrv-dept-visit-btn\" onclick=\"event.stopPropagation();\">🌐 Visit Website Page ↗</a></div><div class=\"ssmrv-dept-prof-meta\"><div class=\"ssmrv-dept-prof-row\"><strong>Qualifications:</strong> M.Sc., B.Ed., Ph.D.</div><div class=\"ssmrv-dept-prof-row\"><strong>Experience:</strong> Head of Department (UG Chemistry) &amp; Research Faculty</div><div class=\"ssmrv-dept-prof-row\"><strong>Expertise:</strong> Electrochemistry, Nanomaterials, Analytical &amp; Physical Chemistry</div><div class=\"ssmrv-dept-prof-row ssmrv-dept-prof-comm\"><strong>Role:</strong> HoD — Chemistry | Member — Research Advisory Committee</div></div></div><div class=\"ssmrv-dept-profile-item\" data-profile-id=\"mrs-suparna-k\" title=\"Click to view full profile of Mrs. Suparna K.\"><div class=\"ssmrv-dept-prof-header\"><span class=\"ssmrv-dept-prof-name\">Mrs. Suparna K.</span></div><div class=\"ssmrv-faculty-badges\"><span class=\"ssmrv-badge-desig\">Assistant Professor</span><span class=\"ssmrv-badge-dept\">Chemistry (B.Sc.)</span></div><div class=\"ssmrv-dept-prof-actions\"><span class=\"ssmrv-dept-prof-cta\">👤 View Full Profile</span><a href=\"https://nmkrv.edu.in/science/chemistry/\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"ssmrv-dept-visit-btn\" onclick=\"event.stopPropagation();\">🌐 Visit Website Page ↗</a></div><div class=\"ssmrv-dept-prof-meta\"><div class=\"ssmrv-dept-prof-row\"><strong>Qualifications:</strong> M.Sc., NET</div><div class=\"ssmrv-dept-prof-row\"><strong>Experience:</strong> Teaching &amp; Institutional Quality Assurance Experience</div><div class=\"ssmrv-dept-prof-row\"><strong>Expertise:</strong> Organic &amp; Inorganic Chemistry, Green Chemistry &amp; Analytical Techniques</div><div class=\"ssmrv-dept-prof-row ssmrv-dept-prof-comm\"><strong>Role:</strong> Coordinator — Youth Red Cross | Member — IQAC</div></div></div><div class=\"ssmrv-dept-profile-item\" data-profile-id=\"dr-shruthi-c-d\" title=\"Click to view full profile of Dr. Shruthi C. D.\"><div class=\"ssmrv-dept-prof-header\"><span class=\"ssmrv-dept-prof-name\">Dr. Shruthi C. D.</span></div><div class=\"ssmrv-faculty-badges\"><span class=\"ssmrv-badge-desig\">Assistant Professor</span><span class=\"ssmrv-badge-dept\">Chemistry (B.Sc.)</span></div><div class=\"ssmrv-dept-prof-actions\"><span class=\"ssmrv-dept-prof-cta\">👤 View Full Profile</span><a href=\"https://nmkrv.edu.in/science/chemistry/\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"ssmrv-dept-visit-btn\" onclick=\"event.stopPropagation();\">🌐 Visit Website Page ↗</a></div><div class=\"ssmrv-dept-prof-meta\"><div class=\"ssmrv-dept-prof-row\"><strong>Qualifications:</strong> M.Sc., Ph.D.</div><div class=\"ssmrv-dept-prof-row\"><strong>Experience:</strong> Teaching &amp; Research Experience in Chemical Sciences</div><div class=\"ssmrv-dept-prof-row\"><strong>Expertise:</strong> Organic Synthesis, Medicinal Chemistry &amp; Spectroscopy</div><div class=\"ssmrv-dept-prof-row ssmrv-dept-prof-comm\"><strong>Role:</strong> Research Faculty — Chemistry | Member — Youth Red Cross</div></div></div><div class=\"ssmrv-dept-profile-item\" data-profile-id=\"dr-shridevi-salagare\" title=\"Click to view full profile of Dr. Shridevi Salagare\"><div class=\"ssmrv-dept-prof-header\"><span class=\"ssmrv-dept-prof-name\">Dr. Shridevi Salagare</span></div><div class=\"ssmrv-faculty-badges\"><span class=\"ssmrv-badge-desig\">Assistant Professor</span><span class=\"ssmrv-badge-dept\">Chemistry (B.Sc.)</span></div><div class=\"ssmrv-dept-prof-actions\"><span class=\"ssmrv-dept-prof-cta\">👤 View Full Profile</span><a href=\"https://nmkrv.edu.in/science/chemistry/\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"ssmrv-dept-visit-btn\" onclick=\"event.stopPropagation();\">🌐 Visit Website Page ↗</a></div><div class=\"ssmrv-dept-prof-meta\"><div class=\"ssmrv-dept-prof-row\"><strong>Qualifications:</strong> M.Sc., B.Ed., Ph.D.</div><div class=\"ssmrv-dept-prof-row\"><strong>Experience:</strong> Teaching &amp; Research Experience in Chemistry</div><div class=\"ssmrv-dept-prof-row\"><strong>Expertise:</strong> Inorganic, Physical &amp; Analytical Chemistry</div><div class=\"ssmrv-dept-prof-row ssmrv-dept-prof-comm\"><strong>Role:</strong> Research Faculty — Chemistry</div></div></div><div class=\"ssmrv-dept-profile-item\" data-profile-id=\"ms-savitha-n\" title=\"Click to view full profile of Ms. Savitha N.\"><div class=\"ssmrv-dept-prof-header\"><span class=\"ssmrv-dept-prof-name\">Ms. Savitha N.</span></div><div class=\"ssmrv-faculty-badges\"><span class=\"ssmrv-badge-desig\">Assistant Professor</span><span class=\"ssmrv-badge-dept\">Chemistry (B.Sc.)</span></div><div class=\"ssmrv-dept-prof-actions\"><span class=\"ssmrv-dept-prof-cta\">👤 View Full Profile</span><a href=\"https://nmkrv.edu.in/science/chemistry/\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"ssmrv-dept-visit-btn\" onclick=\"event.stopPropagation();\">🌐 Visit Website Page ↗</a></div><div class=\"ssmrv-dept-prof-meta\"><div class=\"ssmrv-dept-prof-row\"><strong>Qualifications:</strong> M.Sc. Chemistry</div><div class=\"ssmrv-dept-prof-row\"><strong>Experience:</strong> Teaching Experience in Undergraduate Chemistry</div><div class=\"ssmrv-dept-prof-row\"><strong>Expertise:</strong> General &amp; Practical Chemistry, Forensic Science Certificate Course</div><div class=\"ssmrv-dept-prof-row ssmrv-dept-prof-comm\"><strong>Role:</strong> Department of Chemistry</div></div></div><div class=\"ssmrv-dept-profile-item\" data-profile-id=\"dr-roopa-d-l\" title=\"Click to view full profile of Dr. Roopa D. L.\"><div class=\"ssmrv-dept-prof-header\"><span class=\"ssmrv-dept-prof-name\">Dr. Roopa D. L.</span></div><div class=\"ssmrv-faculty-badges\"><span class=\"ssmrv-badge-desig\">Assistant Professor — PG Chemistry</span><span class=\"ssmrv-badge-dept\">PG Chemistry (M.Sc.)</span></div><div class=\"ssmrv-dept-prof-actions\"><span class=\"ssmrv-dept-prof-cta\">👤 View Full Profile</span><a href=\"https://nmkrv.edu.in/m-sc-chemistry/\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"ssmrv-dept-visit-btn\" onclick=\"event.stopPropagation();\">🌐 Visit Website Page ↗</a></div><div class=\"ssmrv-dept-prof-meta\"><div class=\"ssmrv-dept-prof-row\"><strong>Qualifications:</strong> M.Sc., Ph.D.</div><div class=\"ssmrv-dept-prof-row\"><strong>Experience:</strong> Postgraduate Teaching, Consultancy &amp; Research Experience</div><div class=\"ssmrv-dept-prof-row\"><strong>Expertise:</strong> Organic Reaction Mechanisms, Heterocyclic Chemistry &amp; Characterization Consultancy</div><div class=\"ssmrv-dept-prof-row ssmrv-dept-prof-comm\"><strong>Role:</strong> Member — Research Advisory Committee | PG Chemistry</div></div></div><div class=\"ssmrv-dept-profile-item\" data-profile-id=\"dr-shamala-d\" title=\"Click to view full profile of Dr. Shamala D.\"><div class=\"ssmrv-dept-prof-header\"><span class=\"ssmrv-dept-prof-name\">Dr. Shamala D.</span></div><div class=\"ssmrv-faculty-badges\"><span class=\"ssmrv-badge-desig\">Assistant Professor — PG Chemistry</span><span class=\"ssmrv-badge-dept\">PG Chemistry (M.Sc.)</span></div><div class=\"ssmrv-dept-prof-actions\"><span class=\"ssmrv-dept-prof-cta\">👤 View Full Profile</span><a href=\"https://nmkrv.edu.in/m-sc-chemistry/\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"ssmrv-dept-visit-btn\" onclick=\"event.stopPropagation();\">🌐 Visit Website Page ↗</a></div><div class=\"ssmrv-dept-prof-meta\"><div class=\"ssmrv-dept-prof-row\"><strong>Qualifications:</strong> M.Sc., Ph.D.</div><div class=\"ssmrv-dept-prof-row\"><strong>Experience:</strong> Postgraduate Teaching &amp; Research Consultancy Experience</div><div class=\"ssmrv-dept-prof-row\"><strong>Expertise:</strong> Crystallography, Molecular Structure Elucidation &amp; Organic Spectroscopy</div><div class=\"ssmrv-dept-prof-row ssmrv-dept-prof-comm\"><strong>Role:</strong> Research Faculty — PG Chemistry</div></div></div><div class=\"ssmrv-dept-profile-item\" data-profile-id=\"dr-vidyagayatri-m\" title=\"Click to view full profile of Dr. Vidyagayatri M.\"><div class=\"ssmrv-dept-prof-header\"><span class=\"ssmrv-dept-prof-name\">Dr. Vidyagayatri M.</span></div><div class=\"ssmrv-faculty-badges\"><span class=\"ssmrv-badge-desig\">Assistant Professor — PG Chemistry</span><span class=\"ssmrv-badge-dept\">PG Chemistry (M.Sc.)</span></div><div class=\"ssmrv-dept-prof-actions\"><span class=\"ssmrv-dept-prof-cta\">👤 View Full Profile</span><a href=\"https://nmkrv.edu.in/m-sc-chemistry/\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"ssmrv-dept-visit-btn\" onclick=\"event.stopPropagation();\">🌐 Visit Website Page ↗</a></div><div class=\"ssmrv-dept-prof-meta\"><div class=\"ssmrv-dept-prof-row\"><strong>Qualifications:</strong> M.Sc., Ph.D.</div><div class=\"ssmrv-dept-prof-row\"><strong>Experience:</strong> Postgraduate Teaching &amp; Research Consultancy Experience</div><div class=\"ssmrv-dept-prof-row\"><strong>Expertise:</strong> Medicinal Organic Chemistry, Natural Products &amp; Stereochemistry</div><div class=\"ssmrv-dept-prof-row ssmrv-dept-prof-comm\"><strong>Role:</strong> Research Faculty — PG Chemistry</div></div></div><div class=\"ssmrv-dept-profile-item\" data-profile-id=\"dr-govindagouda-patil\" title=\"Click to view full profile of Dr. Govindagouda Shreenivasa Patil\"><div class=\"ssmrv-dept-prof-header\"><span class=\"ssmrv-dept-prof-name\">Dr. Govindagouda Shreenivasa Patil</span></div><div class=\"ssmrv-faculty-badges\"><span class=\"ssmrv-badge-desig\">Assistant Professor — PG Chemistry</span><span class=\"ssmrv-badge-dept\">PG Chemistry (M.Sc.)</span></div><div class=\"ssmrv-dept-prof-actions\"><span class=\"ssmrv-dept-prof-cta\">👤 View Full Profile</span><a href=\"https://nmkrv.edu.in/m-sc-chemistry/\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"ssmrv-dept-visit-btn\" onclick=\"event.stopPropagation();\">🌐 Visit Website Page ↗</a></div><div class=\"ssmrv-dept-prof-meta\"><div class=\"ssmrv-dept-prof-row\"><strong>Qualifications:</strong> M.Sc., Ph.D., UGC-NET</div><div class=\"ssmrv-dept-prof-row\"><strong>Experience:</strong> Postgraduate Teaching &amp; Research Experience in Chemistry</div><div class=\"ssmrv-dept-prof-row\"><strong>Expertise:</strong> Organometallic Chemistry, Catalysis &amp; Retrosynthetic Analysis</div><div class=\"ssmrv-dept-prof-row ssmrv-dept-prof-comm\"><strong>Role:</strong> Research Faculty — PG Chemistry</div></div></div><div class=\"ssmrv-dept-profile-item\" data-profile-id=\"dr-shyamala-r\" title=\"Click to view full profile of Dr. Shyamala R.\"><div class=\"ssmrv-dept-prof-header\"><span class=\"ssmrv-dept-prof-name\">Dr. Shyamala R.</span></div><div class=\"ssmrv-faculty-badges\"><span class=\"ssmrv-badge-desig\">Assistant Professor — PG Chemistry</span><span class=\"ssmrv-badge-dept\">PG Chemistry (M.Sc.)</span></div><div class=\"ssmrv-dept-prof-actions\"><span class=\"ssmrv-dept-prof-cta\">👤 View Full Profile</span><a href=\"https://nmkrv.edu.in/m-sc-chemistry/\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"ssmrv-dept-visit-btn\" onclick=\"event.stopPropagation();\">🌐 Visit Website Page ↗</a></div><div class=\"ssmrv-dept-prof-meta\"><div class=\"ssmrv-dept-prof-row\"><strong>Qualifications:</strong> M.Sc., B.Ed., Ph.D.</div><div class=\"ssmrv-dept-prof-row\"><strong>Experience:</strong> Postgraduate Teaching &amp; Research Experience</div><div class=\"ssmrv-dept-prof-row\"><strong>Expertise:</strong> Physical Chemistry, Quantum Mechanics &amp; Chemical Kinetics</div><div class=\"ssmrv-dept-prof-row ssmrv-dept-prof-comm\"><strong>Role:</strong> Research Faculty — PG Chemistry</div></div></div><div class=\"ssmrv-dept-profile-item\" data-profile-id=\"ms-nayana-k-o\" title=\"Click to view full profile of Ms. Nayana K. O.\"><div class=\"ssmrv-dept-prof-header\"><span class=\"ssmrv-dept-prof-name\">Ms. Nayana K. O.</span></div><div class=\"ssmrv-faculty-badges\"><span class=\"ssmrv-badge-desig\">Assistant Professor — PG Chemistry</span><span class=\"ssmrv-badge-dept\">PG Chemistry (M.Sc.)</span></div><div class=\"ssmrv-dept-prof-actions\"><span class=\"ssmrv-dept-prof-cta\">👤 View Full Profile</span><a href=\"https://nmkrv.edu.in/m-sc-chemistry/\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"ssmrv-dept-visit-btn\" onclick=\"event.stopPropagation();\">🌐 Visit Website Page ↗</a></div><div class=\"ssmrv-dept-prof-meta\"><div class=\"ssmrv-dept-prof-row\"><strong>Qualifications:</strong> M.Sc. Chemistry</div><div class=\"ssmrv-dept-prof-row\"><strong>Experience:</strong> Postgraduate Teaching Experience in Chemistry</div><div class=\"ssmrv-dept-prof-row\"><strong>Expertise:</strong> Analytical &amp; Organic Chemistry</div><div class=\"ssmrv-dept-prof-row ssmrv-dept-prof-comm\"><strong>Role:</strong> PG Department of Chemistry</div></div></div><div class=\"ssmrv-dept-profile-item\" data-profile-id=\"dr-sheeba-s\" title=\"Click to view full profile of Dr. Sheeba S.\"><div class=\"ssmrv-dept-prof-header\"><span class=\"ssmrv-dept-prof-name\">Dr. Sheeba S.</span></div><div class=\"ssmrv-faculty-badges\"><span class=\"ssmrv-badge-desig\">Assistant Professor</span><span class=\"ssmrv-badge-dept\">Mathematics (B.Sc. &amp; M.Sc.)</span></div><div class=\"ssmrv-dept-prof-actions\"><span class=\"ssmrv-dept-prof-cta\">👤 View Full Profile</span><a href=\"https://nmkrv.edu.in/science/maths/\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"ssmrv-dept-visit-btn\" onclick=\"event.stopPropagation();\">🌐 Visit Website Page ↗</a></div><div class=\"ssmrv-dept-prof-meta\"><div class=\"ssmrv-dept-prof-row\"><strong>Qualifications:</strong> M.Sc., Ph.D.</div><div class=\"ssmrv-dept-prof-row\"><strong>Experience:</strong> Senior Faculty &amp; Research Member in Mathematics</div><div class=\"ssmrv-dept-prof-row\"><strong>Expertise:</strong> Differential Equations, Fluid Mechanics, Linear Algebra &amp; Numerical Methods</div><div class=\"ssmrv-dept-prof-row ssmrv-dept-prof-comm\"><strong>Role:</strong> Member — Research Advisory Committee | Department of Mathematics</div></div></div><div class=\"ssmrv-dept-profile-item\" data-profile-id=\"dr-saba-tarannum\" title=\"Click to view full profile of Dr. Saba Tarannum\"><div class=\"ssmrv-dept-prof-header\"><span class=\"ssmrv-dept-prof-name\">Dr. Saba Tarannum</span></div><div class=\"ssmrv-faculty-badges\"><span class=\"ssmrv-badge-desig\">Assistant Professor</span><span class=\"ssmrv-badge-dept\">Mathematics (B.Sc. &amp; M.Sc.)</span></div><div class=\"ssmrv-dept-prof-actions\"><span class=\"ssmrv-dept-prof-cta\">👤 View Full Profile</span><a href=\"https://nmkrv.edu.in/science/maths/\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"ssmrv-dept-visit-btn\" onclick=\"event.stopPropagation();\">🌐 Visit Website Page ↗</a></div><div class=\"ssmrv-dept-prof-meta\"><div class=\"ssmrv-dept-prof-row\"><strong>Qualifications:</strong> M.Sc., Ph.D.</div><div class=\"ssmrv-dept-prof-row\"><strong>Experience:</strong> Teaching, Research &amp; IQAC Quality Assurance Experience</div><div class=\"ssmrv-dept-prof-row\"><strong>Expertise:</strong> Abstract Algebra, Real &amp; Complex Analysis, Topology &amp; FOSS Tools</div><div class=\"ssmrv-dept-prof-row ssmrv-dept-prof-comm\"><strong>Role:</strong> Member — IQAC | Research Faculty — Mathematics</div></div></div><div class=\"ssmrv-dept-profile-item\" data-profile-id=\"mrs-radharani-v\" title=\"Click to view full profile of Mrs. Radharani V.\"><div class=\"ssmrv-dept-prof-header\"><span class=\"ssmrv-dept-prof-name\">Mrs. Radharani V.</span></div><div class=\"ssmrv-faculty-badges\"><span class=\"ssmrv-badge-desig\">Assistant Professor</span><span class=\"ssmrv-badge-dept\">Mathematics (B.Sc.)</span></div><div class=\"ssmrv-dept-prof-actions\"><span class=\"ssmrv-dept-prof-cta\">👤 View Full Profile</span><a href=\"https://nmkrv.edu.in/science/maths/\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"ssmrv-dept-visit-btn\" onclick=\"event.stopPropagation();\">🌐 Visit Website Page ↗</a></div><div class=\"ssmrv-dept-prof-meta\"><div class=\"ssmrv-dept-prof-row\"><strong>Qualifications:</strong> M.Sc. Mathematics</div><div class=\"ssmrv-dept-prof-row\"><strong>Experience:</strong> Teaching Experience in Undergraduate Mathematics</div><div class=\"ssmrv-dept-prof-row\"><strong>Expertise:</strong> Matrices, Calculus, Fourier Series &amp; Vector Differential Calculus</div><div class=\"ssmrv-dept-prof-row ssmrv-dept-prof-comm\"><strong>Role:</strong> Department of Mathematics</div></div></div><div class=\"ssmrv-dept-profile-item\" data-profile-id=\"ms-gowthami-g\" title=\"Click to view full profile of Ms. Gowthami G.\"><div class=\"ssmrv-dept-prof-header\"><span class=\"ssmrv-dept-prof-name\">Ms. Gowthami G.</span></div><div class=\"ssmrv-faculty-badges\"><span class=\"ssmrv-badge-desig\">Assistant Professor — M.Sc. Mathematics</span><span class=\"ssmrv-badge-dept\">PG Mathematics (M.Sc.)</span></div><div class=\"ssmrv-dept-prof-actions\"><span class=\"ssmrv-dept-prof-cta\">👤 View Full Profile</span><a href=\"https://nmkrv.edu.in/m-sc-mathematics/\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"ssmrv-dept-visit-btn\" onclick=\"event.stopPropagation();\">🌐 Visit Website Page ↗</a></div><div class=\"ssmrv-dept-prof-meta\"><div class=\"ssmrv-dept-prof-row\"><strong>Qualifications:</strong> M.Sc. Mathematics</div><div class=\"ssmrv-dept-prof-row\"><strong>Experience:</strong> Postgraduate Teaching Experience in Mathematics</div><div class=\"ssmrv-dept-prof-row\"><strong>Expertise:</strong> Topology, Functional Analysis, Differential Geometry &amp; Discrete Mathematics</div><div class=\"ssmrv-dept-prof-row ssmrv-dept-prof-comm\"><strong>Role:</strong> Member — IQAC | PG Department of Mathematics</div></div></div><div class=\"ssmrv-dept-profile-item\" data-profile-id=\"mrs-mamatha-b-n\" title=\"Click to view full profile of Mrs. Mamatha B. N.\"><div class=\"ssmrv-dept-prof-header\"><span class=\"ssmrv-dept-prof-name\">Mrs. Mamatha B. N.</span></div><div class=\"ssmrv-faculty-badges\"><span class=\"ssmrv-badge-desig\">Assistant Professor</span><span class=\"ssmrv-badge-dept\">Physics (B.Sc.)</span></div><div class=\"ssmrv-dept-prof-actions\"><span class=\"ssmrv-dept-prof-cta\">👤 View Full Profile</span><a href=\"https://nmkrv.edu.in/science/physics/\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"ssmrv-dept-visit-btn\" onclick=\"event.stopPropagation();\">🌐 Visit Website Page ↗</a></div><div class=\"ssmrv-dept-prof-meta\"><div class=\"ssmrv-dept-prof-row\"><strong>Qualifications:</strong> M.Sc. Physics</div><div class=\"ssmrv-dept-prof-row\"><strong>Experience:</strong> Teaching Experience in Undergraduate Physics</div><div class=\"ssmrv-dept-prof-row\"><strong>Expertise:</strong> Classical Mechanics, Thermodynamics, Optics &amp; Electronics</div><div class=\"ssmrv-dept-prof-row ssmrv-dept-prof-comm\"><strong>Role:</strong> Department of Physics</div></div></div><div class=\"ssmrv-dept-profile-item\" data-profile-id=\"mr-pavan-kumar-c-s\" title=\"Click to view full profile of Mr. Pavan Kumar C. S.\"><div class=\"ssmrv-dept-prof-header\"><span class=\"ssmrv-dept-prof-name\">Mr. Pavan Kumar C. S.</span></div><div class=\"ssmrv-faculty-badges\"><span class=\"ssmrv-badge-desig\">Assistant Professor</span><span class=\"ssmrv-badge-dept\">Physics (B.Sc.)</span></div><div class=\"ssmrv-dept-prof-actions\"><span class=\"ssmrv-dept-prof-cta\">👤 View Full Profile</span><a href=\"https://nmkrv.edu.in/science/physics/\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"ssmrv-dept-visit-btn\" onclick=\"event.stopPropagation();\">🌐 Visit Website Page ↗</a></div><div class=\"ssmrv-dept-prof-meta\"><div class=\"ssmrv-dept-prof-row\"><strong>Qualifications:</strong> M.Sc. Physics</div><div class=\"ssmrv-dept-prof-row\"><strong>Experience:</strong> Teaching &amp; IQAC Quality Assurance Experience</div><div class=\"ssmrv-dept-prof-row\"><strong>Expertise:</strong> Quantum Mechanics, Radiation Physics, Electromagnetism &amp; Solid State Physics</div><div class=\"ssmrv-dept-prof-row ssmrv-dept-prof-comm\"><strong>Role:</strong> Member — IQAC | Department of Physics</div></div></div><div class=\"ssmrv-dept-profile-item\" data-profile-id=\"prof-gunavathi-v\" title=\"Click to view full profile of Prof. Gunavathi V.\"><div class=\"ssmrv-dept-prof-header\"><span class=\"ssmrv-dept-prof-name\">Prof. Gunavathi V.</span></div><div class=\"ssmrv-faculty-badges\"><span class=\"ssmrv-badge-desig\">Assistant Professor</span><span class=\"ssmrv-badge-dept\">Physics (B.Sc.)</span></div><div class=\"ssmrv-dept-prof-actions\"><span class=\"ssmrv-dept-prof-cta\">👤 View Full Profile</span><a href=\"https://nmkrv.edu.in/science/physics/\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"ssmrv-dept-visit-btn\" onclick=\"event.stopPropagation();\">🌐 Visit Website Page ↗</a></div><div class=\"ssmrv-dept-prof-meta\"><div class=\"ssmrv-dept-prof-row\"><strong>Qualifications:</strong> M.Sc. Physics</div><div class=\"ssmrv-dept-prof-row\"><strong>Experience:</strong> Senior Faculty &amp; Academic Council Member</div><div class=\"ssmrv-dept-prof-row\"><strong>Expertise:</strong> Mechanics, Fluid Dynamics, Cryogenics &amp; Experimental Physics</div><div class=\"ssmrv-dept-prof-row ssmrv-dept-prof-comm\"><strong>Role:</strong> Member — Academic Council | Department of Physics</div></div></div></div>",
    "buttons": [
      {
        "text": "👤 Dr. Y. Venkataramanappa",
        "action": "profile:dr-venkataramanappa-y"
      },
      {
        "text": "👤 Dr. Santhosh A. S.",
        "action": "profile:dr-santhosh-a-s"
      },
      {
        "text": "👤 Mrs. Suparna K.",
        "action": "profile:mrs-suparna-k"
      },
      {
        "text": "👤 Dr. Shruthi C. D.",
        "action": "profile:dr-shruthi-c-d"
      },
      {
        "text": "👤 Dr. Shridevi Salagare",
        "action": "profile:dr-shridevi-salagare"
      },
      {
        "text": "👤 Ms. Savitha N.",
        "action": "profile:ms-savitha-n"
      },
      {
        "text": "👤 Dr. Roopa D. L.",
        "action": "profile:dr-roopa-d-l"
      },
      {
        "text": "👤 Dr. Shamala D.",
        "action": "profile:dr-shamala-d"
      },
      {
        "text": "👤 Dr. Vidyagayatri M.",
        "action": "profile:dr-vidyagayatri-m"
      },
      {
        "text": "👤 Dr. Govindagouda Shreenivasa Patil",
        "action": "profile:dr-govindagouda-patil"
      },
      {
        "text": "👤 Dr. Shyamala R.",
        "action": "profile:dr-shyamala-r"
      },
      {
        "text": "👤 Ms. Nayana K. O.",
        "action": "profile:ms-nayana-k-o"
      },
      {
        "text": "👤 Dr. Sheeba S.",
        "action": "profile:dr-sheeba-s"
      },
      {
        "text": "👤 Dr. Saba Tarannum",
        "action": "profile:dr-saba-tarannum"
      },
      {
        "text": "👤 Mrs. Radharani V.",
        "action": "profile:mrs-radharani-v"
      },
      {
        "text": "👤 Ms. Gowthami G.",
        "action": "profile:ms-gowthami-g"
      },
      {
        "text": "👤 Mrs. Mamatha B. N.",
        "action": "profile:mrs-mamatha-b-n"
      },
      {
        "text": "👤 Mr. Pavan Kumar C. S.",
        "action": "profile:mr-pavan-kumar-c-s"
      },
      {
        "text": "👤 Prof. Gunavathi V.",
        "action": "profile:prof-gunavathi-v"
      },
      {
        "text": "🌐 Visit Department Webpage ↗",
        "url": "https://nmkrv.edu.in/science/chemistry/"
      },
      {
        "text": "👨‍🏫 All Faculty Departments",
        "action": "flow:faculty"
      }
    ]
  },
  "profile_dr-venkataramanappa-y": {
    "id": "profile_dr-venkataramanappa-y",
    "pageUrl": "https://nmkrv.edu.in/m-sc-chemistry/",
    "message": "<div class=\"ssmrv-faculty-card is-full-profile\"><div class=\"ssmrv-faculty-name\">Dr. Y. Venkataramanappa</div><div class=\"ssmrv-faculty-badges\"><span class=\"ssmrv-badge-desig\">Assistant Professor &amp; PG Coordinator (Chemistry)</span><span class=\"ssmrv-badge-dept\">PG &amp; Research Chemistry (M.Sc. &amp; Ph.D.)</span></div><div class=\"ssmrv-fac-actions\"><a href=\"https://nmkrv.edu.in/m-sc-chemistry/\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"ssmrv-visit-website-btn\">🌐 Visit Official Website Page ↗</a></div><div class=\"ssmrv-faculty-meta\"><div class=\"ssmrv-fac-row\"><span class=\"ssmrv-fac-label\">🎓 Qualifications</span><span class=\"ssmrv-fac-val\">M.Sc., Ph.D.</span></div><div class=\"ssmrv-fac-row\"><span class=\"ssmrv-fac-label\">⏳ Experience</span><span class=\"ssmrv-fac-val\">PG Coordinator, Ph.D. Research Guide &amp; Governing Body Member</span></div><div class=\"ssmrv-fac-row\"><span class=\"ssmrv-fac-label\">🔬 Areas of Expertise</span><span class=\"ssmrv-fac-val\">Analytical Chemistry, Spectrophotometric Environmental Analysis &amp; Inorganic Chemistry</span></div><div class=\"ssmrv-fac-row\"><span class=\"ssmrv-fac-label\">🛡️ Committee / Role</span><span class=\"ssmrv-fac-val ssmrv-fac-role-val\">Member — Governing Body &amp; Research Advisory Committee | Ph.D. Research Guide</span></div><div class=\"ssmrv-fac-section\"><div class=\"ssmrv-fac-sec-title\">📖 Profile Overview</div><div class=\"ssmrv-fac-sec-text\">Dr. Y. Venkataramanappa is the PG Coordinator of the Department of Chemistry, a recognized Bangalore University Ph.D. Research Guide, Member of the Governing Body, and Member of the Research Advisory Committee. He has led UGC-funded research projects on trace environmental analysis.</div></div><div class=\"ssmrv-fac-section\"><div class=\"ssmrv-fac-sec-title\">🏆 Key Highlights</div><div class=\"ssmrv-fac-sec-text\">Ph.D. Research Guide | Governing Body Member | PG Chemistry Coordinator | UGC MRP Principal Investigator.</div></div><div class=\"ssmrv-fac-contact\"><div>📧 <a href=\"mailto:venkataramanappa.nmkrv@rvei.edu.in\">venkataramanappa.nmkrv@rvei.edu.in</a></div><div>📞 <a href=\"tel:08069018900\">080-69018900</a></div></div></div></div>",
    "buttons": [
      {
        "text": "🌐 Visit Official Website Page ↗",
        "url": "https://nmkrv.edu.in/m-sc-chemistry/",
        "isPrimary": true
      },
      {
        "text": "🏛️ 🔬 Physical & Chemical Sciences",
        "action": "flow:faculty_physical_sciences"
      },
      {
        "text": "👨‍🏫 All Faculty Departments",
        "action": "flow:faculty"
      }
    ]
  },
  "profile_dr-santhosh-a-s": {
    "id": "profile_dr-santhosh-a-s",
    "pageUrl": "https://nmkrv.edu.in/science/chemistry/",
    "message": "<div class=\"ssmrv-faculty-card is-full-profile\"><div class=\"ssmrv-faculty-name\">Dr. Santhosh A. S.</div><div class=\"ssmrv-faculty-badges\"><span class=\"ssmrv-badge-desig\">Assistant Professor &amp; Head (Chemistry)</span><span class=\"ssmrv-badge-dept\">Chemistry (B.Sc.)</span></div><div class=\"ssmrv-fac-actions\"><a href=\"https://nmkrv.edu.in/science/chemistry/\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"ssmrv-visit-website-btn\">🌐 Visit Official Website Page ↗</a></div><div class=\"ssmrv-faculty-meta\"><div class=\"ssmrv-fac-row\"><span class=\"ssmrv-fac-label\">🎓 Qualifications</span><span class=\"ssmrv-fac-val\">M.Sc., B.Ed., Ph.D.</span></div><div class=\"ssmrv-fac-row\"><span class=\"ssmrv-fac-label\">⏳ Experience</span><span class=\"ssmrv-fac-val\">Head of Department (UG Chemistry) &amp; Research Faculty</span></div><div class=\"ssmrv-fac-row\"><span class=\"ssmrv-fac-label\">🔬 Areas of Expertise</span><span class=\"ssmrv-fac-val\">Electrochemistry, Nanomaterials, Analytical &amp; Physical Chemistry</span></div><div class=\"ssmrv-fac-row\"><span class=\"ssmrv-fac-label\">🛡️ Committee / Role</span><span class=\"ssmrv-fac-val ssmrv-fac-role-val\">HoD — Chemistry | Member — Research Advisory Committee</span></div><div class=\"ssmrv-fac-section\"><div class=\"ssmrv-fac-sec-title\">📖 Profile Overview</div><div class=\"ssmrv-fac-sec-text\">Dr. Santhosh A. S. serves as Assistant Professor and Head of the Department of Chemistry at NMKRV College and is a member of the Research Advisory Committee.</div></div><div class=\"ssmrv-fac-section\"><div class=\"ssmrv-fac-sec-title\">🏆 Key Highlights</div><div class=\"ssmrv-fac-sec-text\">Head of Department (Chemistry) &amp; Member of Research Advisory Committee.</div></div><div class=\"ssmrv-fac-contact\"><div>📧 <a href=\"mailto:santhoshas.nmkrv@rvei.edu.in\">santhoshas.nmkrv@rvei.edu.in</a></div><div>📞 <a href=\"tel:08069018900\">080-69018900</a></div></div></div></div>",
    "buttons": [
      {
        "text": "🌐 Visit Official Website Page ↗",
        "url": "https://nmkrv.edu.in/science/chemistry/",
        "isPrimary": true
      },
      {
        "text": "🏛️ 🔬 Physical & Chemical Sciences",
        "action": "flow:faculty_physical_sciences"
      },
      {
        "text": "👨‍🏫 All Faculty Departments",
        "action": "flow:faculty"
      }
    ]
  },
  "profile_mrs-suparna-k": {
    "id": "profile_mrs-suparna-k",
    "pageUrl": "https://nmkrv.edu.in/science/chemistry/",
    "message": "<div class=\"ssmrv-faculty-card is-full-profile\"><div class=\"ssmrv-faculty-name\">Mrs. Suparna K.</div><div class=\"ssmrv-faculty-badges\"><span class=\"ssmrv-badge-desig\">Assistant Professor</span><span class=\"ssmrv-badge-dept\">Chemistry (B.Sc.)</span></div><div class=\"ssmrv-fac-actions\"><a href=\"https://nmkrv.edu.in/science/chemistry/\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"ssmrv-visit-website-btn\">🌐 Visit Official Website Page ↗</a></div><div class=\"ssmrv-faculty-meta\"><div class=\"ssmrv-fac-row\"><span class=\"ssmrv-fac-label\">🎓 Qualifications</span><span class=\"ssmrv-fac-val\">M.Sc., NET</span></div><div class=\"ssmrv-fac-row\"><span class=\"ssmrv-fac-label\">⏳ Experience</span><span class=\"ssmrv-fac-val\">Teaching &amp; Institutional Quality Assurance Experience</span></div><div class=\"ssmrv-fac-row\"><span class=\"ssmrv-fac-label\">🔬 Areas of Expertise</span><span class=\"ssmrv-fac-val\">Organic &amp; Inorganic Chemistry, Green Chemistry &amp; Analytical Techniques</span></div><div class=\"ssmrv-fac-row\"><span class=\"ssmrv-fac-label\">🛡️ Committee / Role</span><span class=\"ssmrv-fac-val ssmrv-fac-role-val\">Coordinator — Youth Red Cross | Member — IQAC</span></div><div class=\"ssmrv-fac-section\"><div class=\"ssmrv-fac-sec-title\">📖 Profile Overview</div><div class=\"ssmrv-fac-sec-text\">Mrs. Suparna K. is an Assistant Professor in the Department of Chemistry, Coordinator of the Youth Red Cross, and a Member of the Internal Quality Assurance Cell (IQAC).</div></div><div class=\"ssmrv-fac-section\"><div class=\"ssmrv-fac-sec-title\">🏆 Key Highlights</div><div class=\"ssmrv-fac-sec-text\">Coordinator — Youth Red Cross &amp; Member of IQAC.</div></div><div class=\"ssmrv-fac-contact\"><div>📧 <a href=\"mailto:suparnak.nmkrv@rvei.edu.in\">suparnak.nmkrv@rvei.edu.in</a></div><div>📞 <a href=\"tel:08069018900\">080-69018900</a></div></div></div></div>",
    "buttons": [
      {
        "text": "🌐 Visit Official Website Page ↗",
        "url": "https://nmkrv.edu.in/science/chemistry/",
        "isPrimary": true
      },
      {
        "text": "🏛️ 🔬 Physical & Chemical Sciences",
        "action": "flow:faculty_physical_sciences"
      },
      {
        "text": "👨‍🏫 All Faculty Departments",
        "action": "flow:faculty"
      }
    ]
  },
  "profile_dr-shruthi-c-d": {
    "id": "profile_dr-shruthi-c-d",
    "pageUrl": "https://nmkrv.edu.in/science/chemistry/",
    "message": "<div class=\"ssmrv-faculty-card is-full-profile\"><div class=\"ssmrv-faculty-name\">Dr. Shruthi C. D.</div><div class=\"ssmrv-faculty-badges\"><span class=\"ssmrv-badge-desig\">Assistant Professor</span><span class=\"ssmrv-badge-dept\">Chemistry (B.Sc.)</span></div><div class=\"ssmrv-fac-actions\"><a href=\"https://nmkrv.edu.in/science/chemistry/\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"ssmrv-visit-website-btn\">🌐 Visit Official Website Page ↗</a></div><div class=\"ssmrv-faculty-meta\"><div class=\"ssmrv-fac-row\"><span class=\"ssmrv-fac-label\">🎓 Qualifications</span><span class=\"ssmrv-fac-val\">M.Sc., Ph.D.</span></div><div class=\"ssmrv-fac-row\"><span class=\"ssmrv-fac-label\">⏳ Experience</span><span class=\"ssmrv-fac-val\">Teaching &amp; Research Experience in Chemical Sciences</span></div><div class=\"ssmrv-fac-row\"><span class=\"ssmrv-fac-label\">🔬 Areas of Expertise</span><span class=\"ssmrv-fac-val\">Organic Synthesis, Medicinal Chemistry &amp; Spectroscopy</span></div><div class=\"ssmrv-fac-row\"><span class=\"ssmrv-fac-label\">🛡️ Committee / Role</span><span class=\"ssmrv-fac-val ssmrv-fac-role-val\">Research Faculty — Chemistry | Member — Youth Red Cross</span></div><div class=\"ssmrv-fac-section\"><div class=\"ssmrv-fac-sec-title\">📖 Profile Overview</div><div class=\"ssmrv-fac-sec-text\">Dr. Shruthi C. D. is an Assistant Professor and Research Faculty member in the Department of Chemistry and serves as a Committee Member of the Youth Red Cross.</div></div><div class=\"ssmrv-fac-section\"><div class=\"ssmrv-fac-sec-title\">🏆 Key Highlights</div><div class=\"ssmrv-fac-sec-text\">Recognized Research Faculty in Chemistry &amp; Youth Red Cross Member.</div></div><div class=\"ssmrv-fac-contact\"><div>📧 <a href=\"mailto:shruthicd.nmkrv@rvei.edu.in\">shruthicd.nmkrv@rvei.edu.in</a></div><div>📞 <a href=\"tel:08069018900\">080-69018900</a></div></div></div></div>",
    "buttons": [
      {
        "text": "🌐 Visit Official Website Page ↗",
        "url": "https://nmkrv.edu.in/science/chemistry/",
        "isPrimary": true
      },
      {
        "text": "🏛️ 🔬 Physical & Chemical Sciences",
        "action": "flow:faculty_physical_sciences"
      },
      {
        "text": "👨‍🏫 All Faculty Departments",
        "action": "flow:faculty"
      }
    ]
  },
  "profile_dr-shridevi-salagare": {
    "id": "profile_dr-shridevi-salagare",
    "pageUrl": "https://nmkrv.edu.in/science/chemistry/",
    "message": "<div class=\"ssmrv-faculty-card is-full-profile\"><div class=\"ssmrv-faculty-name\">Dr. Shridevi Salagare</div><div class=\"ssmrv-faculty-badges\"><span class=\"ssmrv-badge-desig\">Assistant Professor</span><span class=\"ssmrv-badge-dept\">Chemistry (B.Sc.)</span></div><div class=\"ssmrv-fac-actions\"><a href=\"https://nmkrv.edu.in/science/chemistry/\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"ssmrv-visit-website-btn\">🌐 Visit Official Website Page ↗</a></div><div class=\"ssmrv-faculty-meta\"><div class=\"ssmrv-fac-row\"><span class=\"ssmrv-fac-label\">🎓 Qualifications</span><span class=\"ssmrv-fac-val\">M.Sc., B.Ed., Ph.D.</span></div><div class=\"ssmrv-fac-row\"><span class=\"ssmrv-fac-label\">⏳ Experience</span><span class=\"ssmrv-fac-val\">Teaching &amp; Research Experience in Chemistry</span></div><div class=\"ssmrv-fac-row\"><span class=\"ssmrv-fac-label\">🔬 Areas of Expertise</span><span class=\"ssmrv-fac-val\">Inorganic, Physical &amp; Analytical Chemistry</span></div><div class=\"ssmrv-fac-row\"><span class=\"ssmrv-fac-label\">🛡️ Committee / Role</span><span class=\"ssmrv-fac-val ssmrv-fac-role-val\">Research Faculty — Chemistry</span></div><div class=\"ssmrv-fac-section\"><div class=\"ssmrv-fac-sec-title\">📖 Profile Overview</div><div class=\"ssmrv-fac-sec-text\">Dr. Shridevi Salagare is an Assistant Professor and recognized Research Faculty member in the Department of Chemistry at NMKRV College.</div></div><div class=\"ssmrv-fac-section\"><div class=\"ssmrv-fac-sec-title\">🏆 Key Highlights</div><div class=\"ssmrv-fac-sec-text\">Recognized Research Faculty in Chemistry.</div></div><div class=\"ssmrv-fac-contact\"><div>📧 <a href=\"mailto:nmkrv@rvei.edu.in\">nmkrv@rvei.edu.in</a></div><div>📞 <a href=\"tel:08069018900\">080-69018900</a></div></div></div></div>",
    "buttons": [
      {
        "text": "🌐 Visit Official Website Page ↗",
        "url": "https://nmkrv.edu.in/science/chemistry/",
        "isPrimary": true
      },
      {
        "text": "🏛️ 🔬 Physical & Chemical Sciences",
        "action": "flow:faculty_physical_sciences"
      },
      {
        "text": "👨‍🏫 All Faculty Departments",
        "action": "flow:faculty"
      }
    ]
  },
  "profile_ms-savitha-n": {
    "id": "profile_ms-savitha-n",
    "pageUrl": "https://nmkrv.edu.in/science/chemistry/",
    "message": "<div class=\"ssmrv-faculty-card is-full-profile\"><div class=\"ssmrv-faculty-name\">Ms. Savitha N.</div><div class=\"ssmrv-faculty-badges\"><span class=\"ssmrv-badge-desig\">Assistant Professor</span><span class=\"ssmrv-badge-dept\">Chemistry (B.Sc.)</span></div><div class=\"ssmrv-fac-actions\"><a href=\"https://nmkrv.edu.in/science/chemistry/\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"ssmrv-visit-website-btn\">🌐 Visit Official Website Page ↗</a></div><div class=\"ssmrv-faculty-meta\"><div class=\"ssmrv-fac-row\"><span class=\"ssmrv-fac-label\">🎓 Qualifications</span><span class=\"ssmrv-fac-val\">M.Sc. Chemistry</span></div><div class=\"ssmrv-fac-row\"><span class=\"ssmrv-fac-label\">⏳ Experience</span><span class=\"ssmrv-fac-val\">Teaching Experience in Undergraduate Chemistry</span></div><div class=\"ssmrv-fac-row\"><span class=\"ssmrv-fac-label\">🔬 Areas of Expertise</span><span class=\"ssmrv-fac-val\">General &amp; Practical Chemistry, Forensic Science Certificate Course</span></div><div class=\"ssmrv-fac-row\"><span class=\"ssmrv-fac-label\">🛡️ Committee / Role</span><span class=\"ssmrv-fac-val ssmrv-fac-role-val\">Department of Chemistry</span></div><div class=\"ssmrv-fac-section\"><div class=\"ssmrv-fac-sec-title\">📖 Profile Overview</div><div class=\"ssmrv-fac-sec-text\">Ms. Savitha N. serves as Assistant Professor in the Department of Chemistry at NMKRV College.</div></div><div class=\"ssmrv-fac-section\"><div class=\"ssmrv-fac-sec-title\">🏆 Key Highlights</div><div class=\"ssmrv-fac-sec-text\">Faculty Member, DBT-STAR Supported Department of Chemistry.</div></div><div class=\"ssmrv-fac-contact\"><div>📧 <a href=\"mailto:nmkrv@rvei.edu.in\">nmkrv@rvei.edu.in</a></div><div>📞 <a href=\"tel:08069018900\">080-69018900</a></div></div></div></div>",
    "buttons": [
      {
        "text": "🌐 Visit Official Website Page ↗",
        "url": "https://nmkrv.edu.in/science/chemistry/",
        "isPrimary": true
      },
      {
        "text": "🏛️ 🔬 Physical & Chemical Sciences",
        "action": "flow:faculty_physical_sciences"
      },
      {
        "text": "👨‍🏫 All Faculty Departments",
        "action": "flow:faculty"
      }
    ]
  },
  "profile_dr-roopa-d-l": {
    "id": "profile_dr-roopa-d-l",
    "pageUrl": "https://nmkrv.edu.in/m-sc-chemistry/",
    "message": "<div class=\"ssmrv-faculty-card is-full-profile\"><div class=\"ssmrv-faculty-name\">Dr. Roopa D. L.</div><div class=\"ssmrv-faculty-badges\"><span class=\"ssmrv-badge-desig\">Assistant Professor — PG Chemistry</span><span class=\"ssmrv-badge-dept\">PG Chemistry (M.Sc.)</span></div><div class=\"ssmrv-fac-actions\"><a href=\"https://nmkrv.edu.in/m-sc-chemistry/\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"ssmrv-visit-website-btn\">🌐 Visit Official Website Page ↗</a></div><div class=\"ssmrv-faculty-meta\"><div class=\"ssmrv-fac-row\"><span class=\"ssmrv-fac-label\">🎓 Qualifications</span><span class=\"ssmrv-fac-val\">M.Sc., Ph.D.</span></div><div class=\"ssmrv-fac-row\"><span class=\"ssmrv-fac-label\">⏳ Experience</span><span class=\"ssmrv-fac-val\">Postgraduate Teaching, Consultancy &amp; Research Experience</span></div><div class=\"ssmrv-fac-row\"><span class=\"ssmrv-fac-label\">🔬 Areas of Expertise</span><span class=\"ssmrv-fac-val\">Organic Reaction Mechanisms, Heterocyclic Chemistry &amp; Characterization Consultancy</span></div><div class=\"ssmrv-fac-row\"><span class=\"ssmrv-fac-label\">🛡️ Committee / Role</span><span class=\"ssmrv-fac-val ssmrv-fac-role-val\">Member — Research Advisory Committee | PG Chemistry</span></div><div class=\"ssmrv-fac-section\"><div class=\"ssmrv-fac-sec-title\">📖 Profile Overview</div><div class=\"ssmrv-fac-sec-text\">Dr. Roopa D. L. is an Assistant Professor in the Postgraduate Department of Chemistry (M.Sc. Chemistry) and serves on the Research Advisory Committee at NMKRV College.</div></div><div class=\"ssmrv-fac-section\"><div class=\"ssmrv-fac-sec-title\">🏆 Key Highlights</div><div class=\"ssmrv-fac-sec-text\">Member — Research Advisory Committee &amp; Research Consultancy Faculty.</div></div><div class=\"ssmrv-fac-contact\"><div>📧 <a href=\"mailto:roopadl.nmkrv@rvei.edu.in\">roopadl.nmkrv@rvei.edu.in</a></div><div>📞 <a href=\"tel:08069018900\">080-69018900</a></div></div></div></div>",
    "buttons": [
      {
        "text": "🌐 Visit Official Website Page ↗",
        "url": "https://nmkrv.edu.in/m-sc-chemistry/",
        "isPrimary": true
      },
      {
        "text": "🏛️ 🔬 Physical & Chemical Sciences",
        "action": "flow:faculty_physical_sciences"
      },
      {
        "text": "👨‍🏫 All Faculty Departments",
        "action": "flow:faculty"
      }
    ]
  },
  "profile_dr-shamala-d": {
    "id": "profile_dr-shamala-d",
    "pageUrl": "https://nmkrv.edu.in/m-sc-chemistry/",
    "message": "<div class=\"ssmrv-faculty-card is-full-profile\"><div class=\"ssmrv-faculty-name\">Dr. Shamala D.</div><div class=\"ssmrv-faculty-badges\"><span class=\"ssmrv-badge-desig\">Assistant Professor — PG Chemistry</span><span class=\"ssmrv-badge-dept\">PG Chemistry (M.Sc.)</span></div><div class=\"ssmrv-fac-actions\"><a href=\"https://nmkrv.edu.in/m-sc-chemistry/\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"ssmrv-visit-website-btn\">🌐 Visit Official Website Page ↗</a></div><div class=\"ssmrv-faculty-meta\"><div class=\"ssmrv-fac-row\"><span class=\"ssmrv-fac-label\">🎓 Qualifications</span><span class=\"ssmrv-fac-val\">M.Sc., Ph.D.</span></div><div class=\"ssmrv-fac-row\"><span class=\"ssmrv-fac-label\">⏳ Experience</span><span class=\"ssmrv-fac-val\">Postgraduate Teaching &amp; Research Consultancy Experience</span></div><div class=\"ssmrv-fac-row\"><span class=\"ssmrv-fac-label\">🔬 Areas of Expertise</span><span class=\"ssmrv-fac-val\">Crystallography, Molecular Structure Elucidation &amp; Organic Spectroscopy</span></div><div class=\"ssmrv-fac-row\"><span class=\"ssmrv-fac-label\">🛡️ Committee / Role</span><span class=\"ssmrv-fac-val ssmrv-fac-role-val\">Research Faculty — PG Chemistry</span></div><div class=\"ssmrv-fac-section\"><div class=\"ssmrv-fac-sec-title\">📖 Profile Overview</div><div class=\"ssmrv-fac-sec-text\">Dr. Shamala D. is an Assistant Professor and Research Faculty member in the Postgraduate Department of Chemistry (M.Sc. Chemistry) at NMKRV College.</div></div><div class=\"ssmrv-fac-section\"><div class=\"ssmrv-fac-sec-title\">🏆 Key Highlights</div><div class=\"ssmrv-fac-sec-text\">Recognized Research &amp; Consultancy Faculty in PG Chemistry.</div></div><div class=\"ssmrv-fac-contact\"><div>📧 <a href=\"mailto:shamalad.nmkrv@rvei.edu.in\">shamalad.nmkrv@rvei.edu.in</a></div><div>📞 <a href=\"tel:08069018900\">080-69018900</a></div></div></div></div>",
    "buttons": [
      {
        "text": "🌐 Visit Official Website Page ↗",
        "url": "https://nmkrv.edu.in/m-sc-chemistry/",
        "isPrimary": true
      },
      {
        "text": "🏛️ 🔬 Physical & Chemical Sciences",
        "action": "flow:faculty_physical_sciences"
      },
      {
        "text": "👨‍🏫 All Faculty Departments",
        "action": "flow:faculty"
      }
    ]
  },
  "profile_dr-vidyagayatri-m": {
    "id": "profile_dr-vidyagayatri-m",
    "pageUrl": "https://nmkrv.edu.in/m-sc-chemistry/",
    "message": "<div class=\"ssmrv-faculty-card is-full-profile\"><div class=\"ssmrv-faculty-name\">Dr. Vidyagayatri M.</div><div class=\"ssmrv-faculty-badges\"><span class=\"ssmrv-badge-desig\">Assistant Professor — PG Chemistry</span><span class=\"ssmrv-badge-dept\">PG Chemistry (M.Sc.)</span></div><div class=\"ssmrv-fac-actions\"><a href=\"https://nmkrv.edu.in/m-sc-chemistry/\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"ssmrv-visit-website-btn\">🌐 Visit Official Website Page ↗</a></div><div class=\"ssmrv-faculty-meta\"><div class=\"ssmrv-fac-row\"><span class=\"ssmrv-fac-label\">🎓 Qualifications</span><span class=\"ssmrv-fac-val\">M.Sc., Ph.D.</span></div><div class=\"ssmrv-fac-row\"><span class=\"ssmrv-fac-label\">⏳ Experience</span><span class=\"ssmrv-fac-val\">Postgraduate Teaching &amp; Research Consultancy Experience</span></div><div class=\"ssmrv-fac-row\"><span class=\"ssmrv-fac-label\">🔬 Areas of Expertise</span><span class=\"ssmrv-fac-val\">Medicinal Organic Chemistry, Natural Products &amp; Stereochemistry</span></div><div class=\"ssmrv-fac-row\"><span class=\"ssmrv-fac-label\">🛡️ Committee / Role</span><span class=\"ssmrv-fac-val ssmrv-fac-role-val\">Research Faculty — PG Chemistry</span></div><div class=\"ssmrv-fac-section\"><div class=\"ssmrv-fac-sec-title\">📖 Profile Overview</div><div class=\"ssmrv-fac-sec-text\">Dr. Vidyagayatri M. is an Assistant Professor and Research Faculty member in the Postgraduate Department of Chemistry (M.Sc. Chemistry) at NMKRV College.</div></div><div class=\"ssmrv-fac-section\"><div class=\"ssmrv-fac-sec-title\">🏆 Key Highlights</div><div class=\"ssmrv-fac-sec-text\">Recognized Research &amp; Consultancy Faculty in PG Chemistry.</div></div><div class=\"ssmrv-fac-contact\"><div>📧 <a href=\"mailto:vidyagayatri.nmkrv@rvei.edu.in\">vidyagayatri.nmkrv@rvei.edu.in</a></div><div>📞 <a href=\"tel:08069018900\">080-69018900</a></div></div></div></div>",
    "buttons": [
      {
        "text": "🌐 Visit Official Website Page ↗",
        "url": "https://nmkrv.edu.in/m-sc-chemistry/",
        "isPrimary": true
      },
      {
        "text": "🏛️ 🔬 Physical & Chemical Sciences",
        "action": "flow:faculty_physical_sciences"
      },
      {
        "text": "👨‍🏫 All Faculty Departments",
        "action": "flow:faculty"
      }
    ]
  },
  "profile_dr-govindagouda-patil": {
    "id": "profile_dr-govindagouda-patil",
    "pageUrl": "https://nmkrv.edu.in/m-sc-chemistry/",
    "message": "<div class=\"ssmrv-faculty-card is-full-profile\"><div class=\"ssmrv-faculty-name\">Dr. Govindagouda Shreenivasa Patil</div><div class=\"ssmrv-faculty-badges\"><span class=\"ssmrv-badge-desig\">Assistant Professor — PG Chemistry</span><span class=\"ssmrv-badge-dept\">PG Chemistry (M.Sc.)</span></div><div class=\"ssmrv-fac-actions\"><a href=\"https://nmkrv.edu.in/m-sc-chemistry/\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"ssmrv-visit-website-btn\">🌐 Visit Official Website Page ↗</a></div><div class=\"ssmrv-faculty-meta\"><div class=\"ssmrv-fac-row\"><span class=\"ssmrv-fac-label\">🎓 Qualifications</span><span class=\"ssmrv-fac-val\">M.Sc., Ph.D., UGC-NET</span></div><div class=\"ssmrv-fac-row\"><span class=\"ssmrv-fac-label\">⏳ Experience</span><span class=\"ssmrv-fac-val\">Postgraduate Teaching &amp; Research Experience in Chemistry</span></div><div class=\"ssmrv-fac-row\"><span class=\"ssmrv-fac-label\">🔬 Areas of Expertise</span><span class=\"ssmrv-fac-val\">Organometallic Chemistry, Catalysis &amp; Retrosynthetic Analysis</span></div><div class=\"ssmrv-fac-row\"><span class=\"ssmrv-fac-label\">🛡️ Committee / Role</span><span class=\"ssmrv-fac-val ssmrv-fac-role-val\">Research Faculty — PG Chemistry</span></div><div class=\"ssmrv-fac-section\"><div class=\"ssmrv-fac-sec-title\">📖 Profile Overview</div><div class=\"ssmrv-fac-sec-text\">Dr. Govindagouda Shreenivasa Patil is an Assistant Professor and Research Faculty member in the Postgraduate Department of Chemistry at NMKRV College.</div></div><div class=\"ssmrv-fac-section\"><div class=\"ssmrv-fac-sec-title\">🏆 Key Highlights</div><div class=\"ssmrv-fac-sec-text\">UGC-NET &amp; Ph.D. Qualified Research Faculty in PG Chemistry.</div></div><div class=\"ssmrv-fac-contact\"><div>📧 <a href=\"mailto:nmkrv@rvei.edu.in\">nmkrv@rvei.edu.in</a></div><div>📞 <a href=\"tel:08069018900\">080-69018900</a></div></div></div></div>",
    "buttons": [
      {
        "text": "🌐 Visit Official Website Page ↗",
        "url": "https://nmkrv.edu.in/m-sc-chemistry/",
        "isPrimary": true
      },
      {
        "text": "🏛️ 🔬 Physical & Chemical Sciences",
        "action": "flow:faculty_physical_sciences"
      },
      {
        "text": "👨‍🏫 All Faculty Departments",
        "action": "flow:faculty"
      }
    ]
  },
  "profile_dr-shyamala-r": {
    "id": "profile_dr-shyamala-r",
    "pageUrl": "https://nmkrv.edu.in/m-sc-chemistry/",
    "message": "<div class=\"ssmrv-faculty-card is-full-profile\"><div class=\"ssmrv-faculty-name\">Dr. Shyamala R.</div><div class=\"ssmrv-faculty-badges\"><span class=\"ssmrv-badge-desig\">Assistant Professor — PG Chemistry</span><span class=\"ssmrv-badge-dept\">PG Chemistry (M.Sc.)</span></div><div class=\"ssmrv-fac-actions\"><a href=\"https://nmkrv.edu.in/m-sc-chemistry/\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"ssmrv-visit-website-btn\">🌐 Visit Official Website Page ↗</a></div><div class=\"ssmrv-faculty-meta\"><div class=\"ssmrv-fac-row\"><span class=\"ssmrv-fac-label\">🎓 Qualifications</span><span class=\"ssmrv-fac-val\">M.Sc., B.Ed., Ph.D.</span></div><div class=\"ssmrv-fac-row\"><span class=\"ssmrv-fac-label\">⏳ Experience</span><span class=\"ssmrv-fac-val\">Postgraduate Teaching &amp; Research Experience</span></div><div class=\"ssmrv-fac-row\"><span class=\"ssmrv-fac-label\">🔬 Areas of Expertise</span><span class=\"ssmrv-fac-val\">Physical Chemistry, Quantum Mechanics &amp; Chemical Kinetics</span></div><div class=\"ssmrv-fac-row\"><span class=\"ssmrv-fac-label\">🛡️ Committee / Role</span><span class=\"ssmrv-fac-val ssmrv-fac-role-val\">Research Faculty — PG Chemistry</span></div><div class=\"ssmrv-fac-section\"><div class=\"ssmrv-fac-sec-title\">📖 Profile Overview</div><div class=\"ssmrv-fac-sec-text\">Dr. Shyamala R. is an Assistant Professor and Research Faculty member in the Postgraduate Department of Chemistry at NMKRV College.</div></div><div class=\"ssmrv-fac-section\"><div class=\"ssmrv-fac-sec-title\">🏆 Key Highlights</div><div class=\"ssmrv-fac-sec-text\">Recognized Research Faculty in PG Chemistry.</div></div><div class=\"ssmrv-fac-contact\"><div>📧 <a href=\"mailto:nmkrv@rvei.edu.in\">nmkrv@rvei.edu.in</a></div><div>📞 <a href=\"tel:08069018900\">080-69018900</a></div></div></div></div>",
    "buttons": [
      {
        "text": "🌐 Visit Official Website Page ↗",
        "url": "https://nmkrv.edu.in/m-sc-chemistry/",
        "isPrimary": true
      },
      {
        "text": "🏛️ 🔬 Physical & Chemical Sciences",
        "action": "flow:faculty_physical_sciences"
      },
      {
        "text": "👨‍🏫 All Faculty Departments",
        "action": "flow:faculty"
      }
    ]
  },
  "profile_ms-nayana-k-o": {
    "id": "profile_ms-nayana-k-o",
    "pageUrl": "https://nmkrv.edu.in/m-sc-chemistry/",
    "message": "<div class=\"ssmrv-faculty-card is-full-profile\"><div class=\"ssmrv-faculty-name\">Ms. Nayana K. O.</div><div class=\"ssmrv-faculty-badges\"><span class=\"ssmrv-badge-desig\">Assistant Professor — PG Chemistry</span><span class=\"ssmrv-badge-dept\">PG Chemistry (M.Sc.)</span></div><div class=\"ssmrv-fac-actions\"><a href=\"https://nmkrv.edu.in/m-sc-chemistry/\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"ssmrv-visit-website-btn\">🌐 Visit Official Website Page ↗</a></div><div class=\"ssmrv-faculty-meta\"><div class=\"ssmrv-fac-row\"><span class=\"ssmrv-fac-label\">🎓 Qualifications</span><span class=\"ssmrv-fac-val\">M.Sc. Chemistry</span></div><div class=\"ssmrv-fac-row\"><span class=\"ssmrv-fac-label\">⏳ Experience</span><span class=\"ssmrv-fac-val\">Postgraduate Teaching Experience in Chemistry</span></div><div class=\"ssmrv-fac-row\"><span class=\"ssmrv-fac-label\">🔬 Areas of Expertise</span><span class=\"ssmrv-fac-val\">Analytical &amp; Organic Chemistry</span></div><div class=\"ssmrv-fac-row\"><span class=\"ssmrv-fac-label\">🛡️ Committee / Role</span><span class=\"ssmrv-fac-val ssmrv-fac-role-val\">PG Department of Chemistry</span></div><div class=\"ssmrv-fac-section\"><div class=\"ssmrv-fac-sec-title\">📖 Profile Overview</div><div class=\"ssmrv-fac-sec-text\">Ms. Nayana K. O. serves as Assistant Professor in the Postgraduate Department of Chemistry at NMKRV College.</div></div><div class=\"ssmrv-fac-section\"><div class=\"ssmrv-fac-sec-title\">🏆 Key Highlights</div><div class=\"ssmrv-fac-sec-text\">Faculty Member, PG Department of Chemistry.</div></div><div class=\"ssmrv-fac-contact\"><div>📧 <a href=\"mailto:nmkrv@rvei.edu.in\">nmkrv@rvei.edu.in</a></div><div>📞 <a href=\"tel:08069018900\">080-69018900</a></div></div></div></div>",
    "buttons": [
      {
        "text": "🌐 Visit Official Website Page ↗",
        "url": "https://nmkrv.edu.in/m-sc-chemistry/",
        "isPrimary": true
      },
      {
        "text": "🏛️ 🔬 Physical & Chemical Sciences",
        "action": "flow:faculty_physical_sciences"
      },
      {
        "text": "👨‍🏫 All Faculty Departments",
        "action": "flow:faculty"
      }
    ]
  },
  "profile_dr-sheeba-s": {
    "id": "profile_dr-sheeba-s",
    "pageUrl": "https://nmkrv.edu.in/science/maths/",
    "message": "<div class=\"ssmrv-faculty-card is-full-profile\"><div class=\"ssmrv-faculty-name\">Dr. Sheeba S.</div><div class=\"ssmrv-faculty-badges\"><span class=\"ssmrv-badge-desig\">Assistant Professor</span><span class=\"ssmrv-badge-dept\">Mathematics (B.Sc. &amp; M.Sc.)</span></div><div class=\"ssmrv-fac-actions\"><a href=\"https://nmkrv.edu.in/science/maths/\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"ssmrv-visit-website-btn\">🌐 Visit Official Website Page ↗</a></div><div class=\"ssmrv-faculty-meta\"><div class=\"ssmrv-fac-row\"><span class=\"ssmrv-fac-label\">🎓 Qualifications</span><span class=\"ssmrv-fac-val\">M.Sc., Ph.D.</span></div><div class=\"ssmrv-fac-row\"><span class=\"ssmrv-fac-label\">⏳ Experience</span><span class=\"ssmrv-fac-val\">Senior Faculty &amp; Research Member in Mathematics</span></div><div class=\"ssmrv-fac-row\"><span class=\"ssmrv-fac-label\">🔬 Areas of Expertise</span><span class=\"ssmrv-fac-val\">Differential Equations, Fluid Mechanics, Linear Algebra &amp; Numerical Methods</span></div><div class=\"ssmrv-fac-row\"><span class=\"ssmrv-fac-label\">🛡️ Committee / Role</span><span class=\"ssmrv-fac-val ssmrv-fac-role-val\">Member — Research Advisory Committee | Department of Mathematics</span></div><div class=\"ssmrv-fac-section\"><div class=\"ssmrv-fac-sec-title\">📖 Profile Overview</div><div class=\"ssmrv-fac-sec-text\">Dr. Sheeba S. is an Assistant Professor in the Department of Mathematics and a member of the Research Advisory Committee at NMKRV College.</div></div><div class=\"ssmrv-fac-section\"><div class=\"ssmrv-fac-sec-title\">🏆 Key Highlights</div><div class=\"ssmrv-fac-sec-text\">Member — Research Advisory Committee &amp; Recognized Research Faculty.</div></div><div class=\"ssmrv-fac-contact\"><div>📧 <a href=\"mailto:sheeba.nmkrv@rvei.edu.in\">sheeba.nmkrv@rvei.edu.in</a></div><div>📞 <a href=\"tel:08069018900\">080-69018900</a></div></div></div></div>",
    "buttons": [
      {
        "text": "🌐 Visit Official Website Page ↗",
        "url": "https://nmkrv.edu.in/science/maths/",
        "isPrimary": true
      },
      {
        "text": "🏛️ 🔬 Physical & Chemical Sciences",
        "action": "flow:faculty_physical_sciences"
      },
      {
        "text": "👨‍🏫 All Faculty Departments",
        "action": "flow:faculty"
      }
    ]
  },
  "profile_dr-saba-tarannum": {
    "id": "profile_dr-saba-tarannum",
    "pageUrl": "https://nmkrv.edu.in/science/maths/",
    "message": "<div class=\"ssmrv-faculty-card is-full-profile\"><div class=\"ssmrv-faculty-name\">Dr. Saba Tarannum</div><div class=\"ssmrv-faculty-badges\"><span class=\"ssmrv-badge-desig\">Assistant Professor</span><span class=\"ssmrv-badge-dept\">Mathematics (B.Sc. &amp; M.Sc.)</span></div><div class=\"ssmrv-fac-actions\"><a href=\"https://nmkrv.edu.in/science/maths/\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"ssmrv-visit-website-btn\">🌐 Visit Official Website Page ↗</a></div><div class=\"ssmrv-faculty-meta\"><div class=\"ssmrv-fac-row\"><span class=\"ssmrv-fac-label\">🎓 Qualifications</span><span class=\"ssmrv-fac-val\">M.Sc., Ph.D.</span></div><div class=\"ssmrv-fac-row\"><span class=\"ssmrv-fac-label\">⏳ Experience</span><span class=\"ssmrv-fac-val\">Teaching, Research &amp; IQAC Quality Assurance Experience</span></div><div class=\"ssmrv-fac-row\"><span class=\"ssmrv-fac-label\">🔬 Areas of Expertise</span><span class=\"ssmrv-fac-val\">Abstract Algebra, Real &amp; Complex Analysis, Topology &amp; FOSS Tools</span></div><div class=\"ssmrv-fac-row\"><span class=\"ssmrv-fac-label\">🛡️ Committee / Role</span><span class=\"ssmrv-fac-val ssmrv-fac-role-val\">Member — IQAC | Research Faculty — Mathematics</span></div><div class=\"ssmrv-fac-section\"><div class=\"ssmrv-fac-sec-title\">📖 Profile Overview</div><div class=\"ssmrv-fac-sec-text\">Dr. Saba Tarannum is an Assistant Professor in the Department of Mathematics, a recognized Research Faculty member, and a core Member of the Internal Quality Assurance Cell (IQAC).</div></div><div class=\"ssmrv-fac-section\"><div class=\"ssmrv-fac-sec-title\">🏆 Key Highlights</div><div class=\"ssmrv-fac-sec-text\">Member — IQAC &amp; Recognized Research Faculty in Mathematics.</div></div><div class=\"ssmrv-fac-contact\"><div>📧 <a href=\"mailto:sabatarnnum.nmkrv@rvei.edu.in\">sabatarnnum.nmkrv@rvei.edu.in</a></div><div>📞 <a href=\"tel:08069018900\">080-69018900</a></div></div></div></div>",
    "buttons": [
      {
        "text": "🌐 Visit Official Website Page ↗",
        "url": "https://nmkrv.edu.in/science/maths/",
        "isPrimary": true
      },
      {
        "text": "🏛️ 🔬 Physical & Chemical Sciences",
        "action": "flow:faculty_physical_sciences"
      },
      {
        "text": "👨‍🏫 All Faculty Departments",
        "action": "flow:faculty"
      }
    ]
  },
  "profile_mrs-radharani-v": {
    "id": "profile_mrs-radharani-v",
    "pageUrl": "https://nmkrv.edu.in/science/maths/",
    "message": "<div class=\"ssmrv-faculty-card is-full-profile\"><div class=\"ssmrv-faculty-name\">Mrs. Radharani V.</div><div class=\"ssmrv-faculty-badges\"><span class=\"ssmrv-badge-desig\">Assistant Professor</span><span class=\"ssmrv-badge-dept\">Mathematics (B.Sc.)</span></div><div class=\"ssmrv-fac-actions\"><a href=\"https://nmkrv.edu.in/science/maths/\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"ssmrv-visit-website-btn\">🌐 Visit Official Website Page ↗</a></div><div class=\"ssmrv-faculty-meta\"><div class=\"ssmrv-fac-row\"><span class=\"ssmrv-fac-label\">🎓 Qualifications</span><span class=\"ssmrv-fac-val\">M.Sc. Mathematics</span></div><div class=\"ssmrv-fac-row\"><span class=\"ssmrv-fac-label\">⏳ Experience</span><span class=\"ssmrv-fac-val\">Teaching Experience in Undergraduate Mathematics</span></div><div class=\"ssmrv-fac-row\"><span class=\"ssmrv-fac-label\">🔬 Areas of Expertise</span><span class=\"ssmrv-fac-val\">Matrices, Calculus, Fourier Series &amp; Vector Differential Calculus</span></div><div class=\"ssmrv-fac-row\"><span class=\"ssmrv-fac-label\">🛡️ Committee / Role</span><span class=\"ssmrv-fac-val ssmrv-fac-role-val\">Department of Mathematics</span></div><div class=\"ssmrv-fac-section\"><div class=\"ssmrv-fac-sec-title\">📖 Profile Overview</div><div class=\"ssmrv-fac-sec-text\">Mrs. Radharani V. serves as Assistant Professor in the Department of Mathematics at NMKRV College.</div></div><div class=\"ssmrv-fac-section\"><div class=\"ssmrv-fac-sec-title\">🏆 Key Highlights</div><div class=\"ssmrv-fac-sec-text\">E-Content &amp; FOSS Mathematics Laboratory Faculty.</div></div><div class=\"ssmrv-fac-contact\"><div>📧 <a href=\"mailto:radharaniv.nmkrv@rvei.edu.in\">radharaniv.nmkrv@rvei.edu.in</a></div><div>📞 <a href=\"tel:08069018900\">080-69018900</a></div></div></div></div>",
    "buttons": [
      {
        "text": "🌐 Visit Official Website Page ↗",
        "url": "https://nmkrv.edu.in/science/maths/",
        "isPrimary": true
      },
      {
        "text": "🏛️ 🔬 Physical & Chemical Sciences",
        "action": "flow:faculty_physical_sciences"
      },
      {
        "text": "👨‍🏫 All Faculty Departments",
        "action": "flow:faculty"
      }
    ]
  },
  "profile_ms-gowthami-g": {
    "id": "profile_ms-gowthami-g",
    "pageUrl": "https://nmkrv.edu.in/m-sc-mathematics/",
    "message": "<div class=\"ssmrv-faculty-card is-full-profile\"><div class=\"ssmrv-faculty-name\">Ms. Gowthami G.</div><div class=\"ssmrv-faculty-badges\"><span class=\"ssmrv-badge-desig\">Assistant Professor — M.Sc. Mathematics</span><span class=\"ssmrv-badge-dept\">PG Mathematics (M.Sc.)</span></div><div class=\"ssmrv-fac-actions\"><a href=\"https://nmkrv.edu.in/m-sc-mathematics/\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"ssmrv-visit-website-btn\">🌐 Visit Official Website Page ↗</a></div><div class=\"ssmrv-faculty-meta\"><div class=\"ssmrv-fac-row\"><span class=\"ssmrv-fac-label\">🎓 Qualifications</span><span class=\"ssmrv-fac-val\">M.Sc. Mathematics</span></div><div class=\"ssmrv-fac-row\"><span class=\"ssmrv-fac-label\">⏳ Experience</span><span class=\"ssmrv-fac-val\">Postgraduate Teaching Experience in Mathematics</span></div><div class=\"ssmrv-fac-row\"><span class=\"ssmrv-fac-label\">🔬 Areas of Expertise</span><span class=\"ssmrv-fac-val\">Topology, Functional Analysis, Differential Geometry &amp; Discrete Mathematics</span></div><div class=\"ssmrv-fac-row\"><span class=\"ssmrv-fac-label\">🛡️ Committee / Role</span><span class=\"ssmrv-fac-val ssmrv-fac-role-val\">Member — IQAC | PG Department of Mathematics</span></div><div class=\"ssmrv-fac-section\"><div class=\"ssmrv-fac-sec-title\">📖 Profile Overview</div><div class=\"ssmrv-fac-sec-text\">Ms. Gowthami G. serves as Assistant Professor in the Postgraduate Department of Mathematics (M.Sc. Mathematics) and is a Member of the IQAC at NMKRV College.</div></div><div class=\"ssmrv-fac-section\"><div class=\"ssmrv-fac-sec-title\">🏆 Key Highlights</div><div class=\"ssmrv-fac-sec-text\">Member — Internal Quality Assurance Cell (IQAC) &amp; PG Mathematics Faculty.</div></div><div class=\"ssmrv-fac-contact\"><div>📧 <a href=\"mailto:gowthamig.nmkrv@rvei.edu.in\">gowthamig.nmkrv@rvei.edu.in</a></div><div>📞 <a href=\"tel:08069018900\">080-69018900</a></div></div></div></div>",
    "buttons": [
      {
        "text": "🌐 Visit Official Website Page ↗",
        "url": "https://nmkrv.edu.in/m-sc-mathematics/",
        "isPrimary": true
      },
      {
        "text": "🏛️ 🔬 Physical & Chemical Sciences",
        "action": "flow:faculty_physical_sciences"
      },
      {
        "text": "👨‍🏫 All Faculty Departments",
        "action": "flow:faculty"
      }
    ]
  },
  "profile_mrs-mamatha-b-n": {
    "id": "profile_mrs-mamatha-b-n",
    "pageUrl": "https://nmkrv.edu.in/science/physics/",
    "message": "<div class=\"ssmrv-faculty-card is-full-profile\"><div class=\"ssmrv-faculty-name\">Mrs. Mamatha B. N.</div><div class=\"ssmrv-faculty-badges\"><span class=\"ssmrv-badge-desig\">Assistant Professor</span><span class=\"ssmrv-badge-dept\">Physics (B.Sc.)</span></div><div class=\"ssmrv-fac-actions\"><a href=\"https://nmkrv.edu.in/science/physics/\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"ssmrv-visit-website-btn\">🌐 Visit Official Website Page ↗</a></div><div class=\"ssmrv-faculty-meta\"><div class=\"ssmrv-fac-row\"><span class=\"ssmrv-fac-label\">🎓 Qualifications</span><span class=\"ssmrv-fac-val\">M.Sc. Physics</span></div><div class=\"ssmrv-fac-row\"><span class=\"ssmrv-fac-label\">⏳ Experience</span><span class=\"ssmrv-fac-val\">Teaching Experience in Undergraduate Physics</span></div><div class=\"ssmrv-fac-row\"><span class=\"ssmrv-fac-label\">🔬 Areas of Expertise</span><span class=\"ssmrv-fac-val\">Classical Mechanics, Thermodynamics, Optics &amp; Electronics</span></div><div class=\"ssmrv-fac-row\"><span class=\"ssmrv-fac-label\">🛡️ Committee / Role</span><span class=\"ssmrv-fac-val ssmrv-fac-role-val\">Department of Physics</span></div><div class=\"ssmrv-fac-section\"><div class=\"ssmrv-fac-sec-title\">📖 Profile Overview</div><div class=\"ssmrv-fac-sec-text\">Mrs. Mamatha B. N. serves as Assistant Professor in the Department of Physics at NMKRV College.</div></div><div class=\"ssmrv-fac-section\"><div class=\"ssmrv-fac-sec-title\">🏆 Key Highlights</div><div class=\"ssmrv-fac-sec-text\">Senior Faculty Member, Department of Physics.</div></div><div class=\"ssmrv-fac-contact\"><div>📧 <a href=\"mailto:mamathabn.nmkrv@rvei.edu.in\">mamathabn.nmkrv@rvei.edu.in</a></div><div>📞 <a href=\"tel:08069018900\">080-69018900</a></div></div></div></div>",
    "buttons": [
      {
        "text": "🌐 Visit Official Website Page ↗",
        "url": "https://nmkrv.edu.in/science/physics/",
        "isPrimary": true
      },
      {
        "text": "🏛️ 🔬 Physical & Chemical Sciences",
        "action": "flow:faculty_physical_sciences"
      },
      {
        "text": "👨‍🏫 All Faculty Departments",
        "action": "flow:faculty"
      }
    ]
  },
  "profile_mr-pavan-kumar-c-s": {
    "id": "profile_mr-pavan-kumar-c-s",
    "pageUrl": "https://nmkrv.edu.in/science/physics/",
    "message": "<div class=\"ssmrv-faculty-card is-full-profile\"><div class=\"ssmrv-faculty-name\">Mr. Pavan Kumar C. S.</div><div class=\"ssmrv-faculty-badges\"><span class=\"ssmrv-badge-desig\">Assistant Professor</span><span class=\"ssmrv-badge-dept\">Physics (B.Sc.)</span></div><div class=\"ssmrv-fac-actions\"><a href=\"https://nmkrv.edu.in/science/physics/\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"ssmrv-visit-website-btn\">🌐 Visit Official Website Page ↗</a></div><div class=\"ssmrv-faculty-meta\"><div class=\"ssmrv-fac-row\"><span class=\"ssmrv-fac-label\">🎓 Qualifications</span><span class=\"ssmrv-fac-val\">M.Sc. Physics</span></div><div class=\"ssmrv-fac-row\"><span class=\"ssmrv-fac-label\">⏳ Experience</span><span class=\"ssmrv-fac-val\">Teaching &amp; IQAC Quality Assurance Experience</span></div><div class=\"ssmrv-fac-row\"><span class=\"ssmrv-fac-label\">🔬 Areas of Expertise</span><span class=\"ssmrv-fac-val\">Quantum Mechanics, Radiation Physics, Electromagnetism &amp; Solid State Physics</span></div><div class=\"ssmrv-fac-row\"><span class=\"ssmrv-fac-label\">🛡️ Committee / Role</span><span class=\"ssmrv-fac-val ssmrv-fac-role-val\">Member — IQAC | Department of Physics</span></div><div class=\"ssmrv-fac-section\"><div class=\"ssmrv-fac-sec-title\">📖 Profile Overview</div><div class=\"ssmrv-fac-sec-text\">Mr. Pavan Kumar C. S. is an Assistant Professor in the Department of Physics and serves as a Member of the Internal Quality Assurance Cell (IQAC).</div></div><div class=\"ssmrv-fac-section\"><div class=\"ssmrv-fac-sec-title\">🏆 Key Highlights</div><div class=\"ssmrv-fac-sec-text\">Member — Internal Quality Assurance Cell (IQAC).</div></div><div class=\"ssmrv-fac-contact\"><div>📧 <a href=\"mailto:nmkrv@rvei.edu.in\">nmkrv@rvei.edu.in</a></div><div>📞 <a href=\"tel:08069018900\">080-69018900</a></div></div></div></div>",
    "buttons": [
      {
        "text": "🌐 Visit Official Website Page ↗",
        "url": "https://nmkrv.edu.in/science/physics/",
        "isPrimary": true
      },
      {
        "text": "🏛️ 🔬 Physical & Chemical Sciences",
        "action": "flow:faculty_physical_sciences"
      },
      {
        "text": "👨‍🏫 All Faculty Departments",
        "action": "flow:faculty"
      }
    ]
  },
  "profile_prof-gunavathi-v": {
    "id": "profile_prof-gunavathi-v",
    "pageUrl": "https://nmkrv.edu.in/science/physics/",
    "message": "<div class=\"ssmrv-faculty-card is-full-profile\"><div class=\"ssmrv-faculty-name\">Prof. Gunavathi V.</div><div class=\"ssmrv-faculty-badges\"><span class=\"ssmrv-badge-desig\">Assistant Professor</span><span class=\"ssmrv-badge-dept\">Physics (B.Sc.)</span></div><div class=\"ssmrv-fac-actions\"><a href=\"https://nmkrv.edu.in/science/physics/\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"ssmrv-visit-website-btn\">🌐 Visit Official Website Page ↗</a></div><div class=\"ssmrv-faculty-meta\"><div class=\"ssmrv-fac-row\"><span class=\"ssmrv-fac-label\">🎓 Qualifications</span><span class=\"ssmrv-fac-val\">M.Sc. Physics</span></div><div class=\"ssmrv-fac-row\"><span class=\"ssmrv-fac-label\">⏳ Experience</span><span class=\"ssmrv-fac-val\">Senior Faculty &amp; Academic Council Member</span></div><div class=\"ssmrv-fac-row\"><span class=\"ssmrv-fac-label\">🔬 Areas of Expertise</span><span class=\"ssmrv-fac-val\">Mechanics, Fluid Dynamics, Cryogenics &amp; Experimental Physics</span></div><div class=\"ssmrv-fac-row\"><span class=\"ssmrv-fac-label\">🛡️ Committee / Role</span><span class=\"ssmrv-fac-val ssmrv-fac-role-val\">Member — Academic Council | Department of Physics</span></div><div class=\"ssmrv-fac-section\"><div class=\"ssmrv-fac-sec-title\">📖 Profile Overview</div><div class=\"ssmrv-fac-sec-text\">Prof. Gunavathi V. serves as Assistant Professor in the Department of Physics and is a Faculty Member on the Academic Council of NMKRV College.</div></div><div class=\"ssmrv-fac-section\"><div class=\"ssmrv-fac-sec-title\">🏆 Key Highlights</div><div class=\"ssmrv-fac-sec-text\">Member-Faculty on the Academic Council of NMKRV College.</div></div><div class=\"ssmrv-fac-contact\"><div>📧 <a href=\"mailto:nmkrv@rvei.edu.in\">nmkrv@rvei.edu.in</a></div><div>📞 <a href=\"tel:08069018900\">080-69018900</a></div></div></div></div>",
    "buttons": [
      {
        "text": "🌐 Visit Official Website Page ↗",
        "url": "https://nmkrv.edu.in/science/physics/",
        "isPrimary": true
      },
      {
        "text": "🏛️ 🔬 Physical & Chemical Sciences",
        "action": "flow:faculty_physical_sciences"
      },
      {
        "text": "👨‍🏫 All Faculty Departments",
        "action": "flow:faculty"
      }
    ]
  },
  "faculty_life_sciences": {
    "id": "faculty_life_sciences",
    "pageUrl": "https://nmkrv.edu.in/science/biotechnology/",
    "message": "<div class=\"ssmrv-flow-heading\">🧬 Department of Life Sciences</div><div class=\"ssmrv-flow-subheading\">Biotechnology (UG &amp; PG), Botany and Zoology Faculty — Select <b>View Full Profile</b> or <b>Visit Website Page ↗</b> on any card below:</div><div class=\"ssmrv-dept-profile-list\"><div class=\"ssmrv-dept-profile-item\" data-profile-id=\"mrs-priya-r\" title=\"Click to view full profile of Mrs. Priya R.\"><div class=\"ssmrv-dept-prof-header\"><span class=\"ssmrv-dept-prof-name\">Mrs. Priya R.</span></div><div class=\"ssmrv-faculty-badges\"><span class=\"ssmrv-badge-desig\">Assistant Professor</span><span class=\"ssmrv-badge-dept\">Biotechnology (B.Sc.)</span></div><div class=\"ssmrv-dept-prof-actions\"><span class=\"ssmrv-dept-prof-cta\">👤 View Full Profile</span><a href=\"https://nmkrv.edu.in/science/biotechnology/\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"ssmrv-dept-visit-btn\" onclick=\"event.stopPropagation();\">🌐 Visit Website Page ↗</a></div><div class=\"ssmrv-dept-prof-meta\"><div class=\"ssmrv-dept-prof-row\"><strong>Qualifications:</strong> M.Sc. Biotechnology</div><div class=\"ssmrv-dept-prof-row\"><strong>Experience:</strong> Senior Faculty &amp; UGC Research Project Co-Investigator</div><div class=\"ssmrv-dept-prof-row\"><strong>Expertise:</strong> Microbiology, Genetic Engineering, Molecular Biology &amp; Environmental Biotechnology</div><div class=\"ssmrv-dept-prof-row ssmrv-dept-prof-comm\"><strong>Role:</strong> Member — Academic Council &amp; Anti-Ragging Cell | Coordinator — Eco Club</div></div></div><div class=\"ssmrv-dept-profile-item\" data-profile-id=\"mrs-bhamamani-b-j\" title=\"Click to view full profile of Mrs. Bhamamani B. J.\"><div class=\"ssmrv-dept-prof-header\"><span class=\"ssmrv-dept-prof-name\">Mrs. Bhamamani B. J.</span></div><div class=\"ssmrv-faculty-badges\"><span class=\"ssmrv-badge-desig\">Assistant Professor</span><span class=\"ssmrv-badge-dept\">Biotechnology (B.Sc.)</span></div><div class=\"ssmrv-dept-prof-actions\"><span class=\"ssmrv-dept-prof-cta\">👤 View Full Profile</span><a href=\"https://nmkrv.edu.in/science/biotechnology/\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"ssmrv-dept-visit-btn\" onclick=\"event.stopPropagation();\">🌐 Visit Website Page ↗</a></div><div class=\"ssmrv-dept-prof-meta\"><div class=\"ssmrv-dept-prof-row\"><strong>Qualifications:</strong> M.Sc. Biotechnology</div><div class=\"ssmrv-dept-prof-row\"><strong>Experience:</strong> Teaching &amp; Student Welfare Committee Experience</div><div class=\"ssmrv-dept-prof-row\"><strong>Expertise:</strong> Cell Biology, Immunology, Animal &amp; Plant Biotechnology</div><div class=\"ssmrv-dept-prof-row ssmrv-dept-prof-comm\"><strong>Role:</strong> Member — IQAC, GRC, ICC &amp; Fine Arts Club</div></div></div><div class=\"ssmrv-dept-profile-item\" data-profile-id=\"mrs-nalina-n\" title=\"Click to view full profile of Mrs. Nalina N.\"><div class=\"ssmrv-dept-prof-header\"><span class=\"ssmrv-dept-prof-name\">Mrs. Nalina N.</span></div><div class=\"ssmrv-faculty-badges\"><span class=\"ssmrv-badge-desig\">Assistant Professor</span><span class=\"ssmrv-badge-dept\">Biotechnology (B.Sc.)</span></div><div class=\"ssmrv-dept-prof-actions\"><span class=\"ssmrv-dept-prof-cta\">👤 View Full Profile</span><a href=\"https://nmkrv.edu.in/science/biotechnology/\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"ssmrv-dept-visit-btn\" onclick=\"event.stopPropagation();\">🌐 Visit Website Page ↗</a></div><div class=\"ssmrv-dept-prof-meta\"><div class=\"ssmrv-dept-prof-row\"><strong>Qualifications:</strong> M.Sc., M.Phil.</div><div class=\"ssmrv-dept-prof-row\"><strong>Experience:</strong> Teaching Experience in Biotechnology</div><div class=\"ssmrv-dept-prof-row\"><strong>Expertise:</strong> Biomolecules, Industrial Biotechnology, Fermentation Technology &amp; Bioinformatics</div><div class=\"ssmrv-dept-prof-row ssmrv-dept-prof-comm\"><strong>Role:</strong> Member — Innovation Cell &amp; Social Media Cell</div></div></div><div class=\"ssmrv-dept-profile-item\" data-profile-id=\"dr-mrunalini-b-r\" title=\"Click to view full profile of Dr. Mrunalini B. R.\"><div class=\"ssmrv-dept-prof-header\"><span class=\"ssmrv-dept-prof-name\">Dr. Mrunalini B. R.</span></div><div class=\"ssmrv-faculty-badges\"><span class=\"ssmrv-badge-desig\">Assistant Professor &amp; PG Coordinator (M.Sc. Biotechnology)</span><span class=\"ssmrv-badge-dept\">PG Biotechnology (M.Sc.)</span></div><div class=\"ssmrv-dept-prof-actions\"><span class=\"ssmrv-dept-prof-cta\">👤 View Full Profile</span><a href=\"https://nmkrv.edu.in/msc-biotechnology/\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"ssmrv-dept-visit-btn\" onclick=\"event.stopPropagation();\">🌐 Visit Website Page ↗</a></div><div class=\"ssmrv-dept-prof-meta\"><div class=\"ssmrv-dept-prof-row\"><strong>Qualifications:</strong> M.Sc., M.Phil., Ph.D.</div><div class=\"ssmrv-dept-prof-row\"><strong>Experience:</strong> Coordinator — M.Sc. Biotechnology &amp; Research Advisory Committee</div><div class=\"ssmrv-dept-prof-row\"><strong>Expertise:</strong> Molecular Biology, Recombinant DNA Technology, Bioprocess Engineering &amp; Genomics</div><div class=\"ssmrv-dept-prof-row ssmrv-dept-prof-comm\"><strong>Role:</strong> Coordinator — Research Advisory Committee &amp; M.Sc. Biotechnology | Member — IQAC</div></div></div><div class=\"ssmrv-dept-profile-item\" data-profile-id=\"dr-aruna-nair\" title=\"Click to view full profile of Dr. Aruna Nair\"><div class=\"ssmrv-dept-prof-header\"><span class=\"ssmrv-dept-prof-name\">Dr. Aruna Nair</span></div><div class=\"ssmrv-faculty-badges\"><span class=\"ssmrv-badge-desig\">Assistant Professor — M.Sc. Biotechnology</span><span class=\"ssmrv-badge-dept\">PG Biotechnology (M.Sc.)</span></div><div class=\"ssmrv-dept-prof-actions\"><span class=\"ssmrv-dept-prof-cta\">👤 View Full Profile</span><a href=\"https://nmkrv.edu.in/msc-biotechnology/\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"ssmrv-dept-visit-btn\" onclick=\"event.stopPropagation();\">🌐 Visit Website Page ↗</a></div><div class=\"ssmrv-dept-prof-meta\"><div class=\"ssmrv-dept-prof-row\"><strong>Qualifications:</strong> M.Sc., Ph.D.</div><div class=\"ssmrv-dept-prof-row\"><strong>Experience:</strong> Postgraduate Teaching &amp; Research Experience in Biotechnology</div><div class=\"ssmrv-dept-prof-row\"><strong>Expertise:</strong> Plant &amp; Microbial Biotechnology, Molecular Diagnostics</div><div class=\"ssmrv-dept-prof-row ssmrv-dept-prof-comm\"><strong>Role:</strong> PG Department of Biotechnology</div></div></div><div class=\"ssmrv-dept-profile-item\" data-profile-id=\"ms-tanaya-naik\" title=\"Click to view full profile of Ms. Tanaya Naik\"><div class=\"ssmrv-dept-prof-header\"><span class=\"ssmrv-dept-prof-name\">Ms. Tanaya Naik</span></div><div class=\"ssmrv-faculty-badges\"><span class=\"ssmrv-badge-desig\">Assistant Professor — M.Sc. Biotechnology</span><span class=\"ssmrv-badge-dept\">PG Biotechnology (M.Sc.)</span></div><div class=\"ssmrv-dept-prof-actions\"><span class=\"ssmrv-dept-prof-cta\">👤 View Full Profile</span><a href=\"https://nmkrv.edu.in/msc-biotechnology/\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"ssmrv-dept-visit-btn\" onclick=\"event.stopPropagation();\">🌐 Visit Website Page ↗</a></div><div class=\"ssmrv-dept-prof-meta\"><div class=\"ssmrv-dept-prof-row\"><strong>Qualifications:</strong> M.Sc. Biotechnology</div><div class=\"ssmrv-dept-prof-row\"><strong>Experience:</strong> Postgraduate Teaching Experience in Biotechnology</div><div class=\"ssmrv-dept-prof-row\"><strong>Expertise:</strong> Immunology, Genetic Engineering &amp; Biostatistical Analysis</div><div class=\"ssmrv-dept-prof-row ssmrv-dept-prof-comm\"><strong>Role:</strong> PG Department of Biotechnology</div></div></div><div class=\"ssmrv-dept-profile-item\" data-profile-id=\"dr-srikala-s-reddy\" title=\"Click to view full profile of Dr. Srikala S. Reddy\"><div class=\"ssmrv-dept-prof-header\"><span class=\"ssmrv-dept-prof-name\">Dr. Srikala S. Reddy</span></div><div class=\"ssmrv-faculty-badges\"><span class=\"ssmrv-badge-desig\">Lecturer</span><span class=\"ssmrv-badge-dept\">Botany (B.Sc.)</span></div><div class=\"ssmrv-dept-prof-actions\"><span class=\"ssmrv-dept-prof-cta\">👤 View Full Profile</span><a href=\"https://nmkrv.edu.in/science/botany/\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"ssmrv-dept-visit-btn\" onclick=\"event.stopPropagation();\">🌐 Visit Website Page ↗</a></div><div class=\"ssmrv-dept-prof-meta\"><div class=\"ssmrv-dept-prof-row\"><strong>Qualifications:</strong> M.Sc., [Ph.D.]</div><div class=\"ssmrv-dept-prof-row\"><strong>Experience:</strong> Teaching &amp; Herbal Medicinal Garden Curation Experience</div><div class=\"ssmrv-dept-prof-row\"><strong>Expertise:</strong> Microbial Diversity, Phycology, Plant Taxonomy &amp; Medicinal Botany</div><div class=\"ssmrv-dept-prof-row ssmrv-dept-prof-comm\"><strong>Role:</strong> Department of Botany</div></div></div><div class=\"ssmrv-dept-profile-item\" data-profile-id=\"dr-parinitha-mahishi\" title=\"Click to view full profile of Dr. Parinitha Mahishi\"><div class=\"ssmrv-dept-prof-header\"><span class=\"ssmrv-dept-prof-name\">Dr. Parinitha Mahishi</span></div><div class=\"ssmrv-faculty-badges\"><span class=\"ssmrv-badge-desig\">Research Faculty</span><span class=\"ssmrv-badge-dept\">Botany (B.Sc.)</span></div><div class=\"ssmrv-dept-prof-actions\"><span class=\"ssmrv-dept-prof-cta\">👤 View Full Profile</span><a href=\"https://nmkrv.edu.in/research-faculty/\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"ssmrv-dept-visit-btn\" onclick=\"event.stopPropagation();\">🌐 Visit Website Page ↗</a></div><div class=\"ssmrv-dept-prof-meta\"><div class=\"ssmrv-dept-prof-row\"><strong>Qualifications:</strong> M.Sc., Ph.D.</div><div class=\"ssmrv-dept-prof-row\"><strong>Experience:</strong> Research &amp; Ethnobotanical Studies in Plant Sciences</div><div class=\"ssmrv-dept-prof-row\"><strong>Expertise:</strong> Ethnobotany, Medicinal Plants, Ecology &amp; Biodiversity Conservation</div><div class=\"ssmrv-dept-prof-row ssmrv-dept-prof-comm\"><strong>Role:</strong> Research Faculty — Botany</div></div></div><div class=\"ssmrv-dept-profile-item\" data-profile-id=\"prof-meenakumari-t\" title=\"Click to view full profile of Prof. Meenakumari T.\"><div class=\"ssmrv-dept-prof-header\"><span class=\"ssmrv-dept-prof-name\">Prof. Meenakumari T.</span></div><div class=\"ssmrv-faculty-badges\"><span class=\"ssmrv-badge-desig\">Associate Professor &amp; Head (Zoology)</span><span class=\"ssmrv-badge-dept\">Zoology (B.Sc.)</span></div><div class=\"ssmrv-dept-prof-actions\"><span class=\"ssmrv-dept-prof-cta\">👤 View Full Profile</span><a href=\"https://nmkrv.edu.in/aarogya-kendra/\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"ssmrv-dept-visit-btn\" onclick=\"event.stopPropagation();\">🌐 Visit Website Page ↗</a></div><div class=\"ssmrv-dept-prof-meta\"><div class=\"ssmrv-dept-prof-row\"><strong>Qualifications:</strong> M.Sc. Zoology</div><div class=\"ssmrv-dept-prof-row\"><strong>Experience:</strong> Associate Professor &amp; Head of Department of Zoology</div><div class=\"ssmrv-dept-prof-row\"><strong>Expertise:</strong> Animal Physiology, Genetics, Developmental Biology &amp; Health Outreach</div><div class=\"ssmrv-dept-prof-row ssmrv-dept-prof-comm\"><strong>Role:</strong> HoD — Zoology | Coordinator — Aarogya Kendra</div></div></div><div class=\"ssmrv-dept-profile-item\" data-profile-id=\"mrs-manjula-j\" title=\"Click to view full profile of Mrs. Manjula J.\"><div class=\"ssmrv-dept-prof-header\"><span class=\"ssmrv-dept-prof-name\">Mrs. Manjula J.</span></div><div class=\"ssmrv-faculty-badges\"><span class=\"ssmrv-badge-desig\">Assistant Professor</span><span class=\"ssmrv-badge-dept\">Zoology (B.Sc.)</span></div><div class=\"ssmrv-dept-prof-actions\"><span class=\"ssmrv-dept-prof-cta\">👤 View Full Profile</span><a href=\"https://nmkrv.edu.in/science/zoology/\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"ssmrv-dept-visit-btn\" onclick=\"event.stopPropagation();\">🌐 Visit Website Page ↗</a></div><div class=\"ssmrv-dept-prof-meta\"><div class=\"ssmrv-dept-prof-row\"><strong>Qualifications:</strong> M.Sc., M.Phil., K-SET</div><div class=\"ssmrv-dept-prof-row\"><strong>Experience:</strong> Senior Faculty in Zoology &amp; NSS Programme Officer</div><div class=\"ssmrv-dept-prof-row\"><strong>Expertise:</strong> Non-Chordates, Chordates, Ecology, Cell Biology &amp; Community Outreach</div><div class=\"ssmrv-dept-prof-row ssmrv-dept-prof-comm\"><strong>Role:</strong> Member — Academic Council &amp; SC/ST Committee | Coordinator — NSS</div></div></div><div class=\"ssmrv-dept-profile-item\" data-profile-id=\"dr-hemalatha-b-n\" title=\"Click to view full profile of Dr. Hemalatha B. N.\"><div class=\"ssmrv-dept-prof-header\"><span class=\"ssmrv-dept-prof-name\">Dr. Hemalatha B. N.</span></div><div class=\"ssmrv-faculty-badges\"><span class=\"ssmrv-badge-desig\">Assistant Professor</span><span class=\"ssmrv-badge-dept\">Zoology (B.Sc.)</span></div><div class=\"ssmrv-dept-prof-actions\"><span class=\"ssmrv-dept-prof-cta\">👤 View Full Profile</span><a href=\"https://nmkrv.edu.in/science/zoology/\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"ssmrv-dept-visit-btn\" onclick=\"event.stopPropagation();\">🌐 Visit Website Page ↗</a></div><div class=\"ssmrv-dept-prof-meta\"><div class=\"ssmrv-dept-prof-row\"><strong>Qualifications:</strong> M.Sc., B.Ed., Ph.D.</div><div class=\"ssmrv-dept-prof-row\"><strong>Experience:</strong> Teaching &amp; Research Experience in Zoology</div><div class=\"ssmrv-dept-prof-row\"><strong>Expertise:</strong> Animal Diversity, Comparative Anatomy, Physiology &amp; Environmental Biology</div><div class=\"ssmrv-dept-prof-row ssmrv-dept-prof-comm\"><strong>Role:</strong> Research Faculty — Zoology</div></div></div><div class=\"ssmrv-dept-profile-item\" data-profile-id=\"dr-shashikala-k-b\" title=\"Click to view full profile of Dr. Shashikala K. B.\"><div class=\"ssmrv-dept-prof-header\"><span class=\"ssmrv-dept-prof-name\">Dr. Shashikala K. B.</span></div><div class=\"ssmrv-faculty-badges\"><span class=\"ssmrv-badge-desig\">Assistant Professor</span><span class=\"ssmrv-badge-dept\">Zoology (B.Sc.)</span></div><div class=\"ssmrv-dept-prof-actions\"><span class=\"ssmrv-dept-prof-cta\">👤 View Full Profile</span><a href=\"https://nmkrv.edu.in/science/zoology/\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"ssmrv-dept-visit-btn\" onclick=\"event.stopPropagation();\">🌐 Visit Website Page ↗</a></div><div class=\"ssmrv-dept-prof-meta\"><div class=\"ssmrv-dept-prof-row\"><strong>Qualifications:</strong> M.Sc., Ph.D., KSET</div><div class=\"ssmrv-dept-prof-row\"><strong>Experience:</strong> Teaching &amp; Research Experience in Zoology</div><div class=\"ssmrv-dept-prof-row\"><strong>Expertise:</strong> Genetics, Evolutionary Biology, Entomology &amp; Applied Zoology</div><div class=\"ssmrv-dept-prof-row ssmrv-dept-prof-comm\"><strong>Role:</strong> Research Faculty — Zoology</div></div></div><div class=\"ssmrv-dept-profile-item\" data-profile-id=\"dr-sharangouda-j-patil\" title=\"Click to view full profile of Dr. Sharangouda J. Patil\"><div class=\"ssmrv-dept-prof-header\"><span class=\"ssmrv-dept-prof-name\">Dr. Sharangouda J. Patil</span></div><div class=\"ssmrv-faculty-badges\"><span class=\"ssmrv-badge-desig\">Research Faculty</span><span class=\"ssmrv-badge-dept\">Zoology (B.Sc.)</span></div><div class=\"ssmrv-dept-prof-actions\"><span class=\"ssmrv-dept-prof-cta\">👤 View Full Profile</span><a href=\"https://nmkrv.edu.in/research-faculty/\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"ssmrv-dept-visit-btn\" onclick=\"event.stopPropagation();\">🌐 Visit Website Page ↗</a></div><div class=\"ssmrv-dept-prof-meta\"><div class=\"ssmrv-dept-prof-row\"><strong>Qualifications:</strong> M.Sc., Ph.D.</div><div class=\"ssmrv-dept-prof-row\"><strong>Experience:</strong> Research &amp; Publications in Life Sciences and Zoology</div><div class=\"ssmrv-dept-prof-row\"><strong>Expertise:</strong> Reproductive Physiology, Medicinal Pharmacology &amp; Toxicology</div><div class=\"ssmrv-dept-prof-row ssmrv-dept-prof-comm\"><strong>Role:</strong> Research Faculty — Zoology</div></div></div></div>",
    "buttons": [
      {
        "text": "👤 Mrs. Priya R.",
        "action": "profile:mrs-priya-r"
      },
      {
        "text": "👤 Mrs. Bhamamani B. J.",
        "action": "profile:mrs-bhamamani-b-j"
      },
      {
        "text": "👤 Mrs. Nalina N.",
        "action": "profile:mrs-nalina-n"
      },
      {
        "text": "👤 Dr. Mrunalini B. R.",
        "action": "profile:dr-mrunalini-b-r"
      },
      {
        "text": "👤 Dr. Aruna Nair",
        "action": "profile:dr-aruna-nair"
      },
      {
        "text": "👤 Ms. Tanaya Naik",
        "action": "profile:ms-tanaya-naik"
      },
      {
        "text": "👤 Dr. Srikala S. Reddy",
        "action": "profile:dr-srikala-s-reddy"
      },
      {
        "text": "👤 Dr. Parinitha Mahishi",
        "action": "profile:dr-parinitha-mahishi"
      },
      {
        "text": "👤 Prof. Meenakumari T.",
        "action": "profile:prof-meenakumari-t"
      },
      {
        "text": "👤 Mrs. Manjula J.",
        "action": "profile:mrs-manjula-j"
      },
      {
        "text": "👤 Dr. Hemalatha B. N.",
        "action": "profile:dr-hemalatha-b-n"
      },
      {
        "text": "👤 Dr. Shashikala K. B.",
        "action": "profile:dr-shashikala-k-b"
      },
      {
        "text": "👤 Dr. Sharangouda J. Patil",
        "action": "profile:dr-sharangouda-j-patil"
      },
      {
        "text": "🌐 Visit Department Webpage ↗",
        "url": "https://nmkrv.edu.in/science/biotechnology/"
      },
      {
        "text": "👨‍🏫 All Faculty Departments",
        "action": "flow:faculty"
      }
    ]
  },
  "profile_mrs-priya-r": {
    "id": "profile_mrs-priya-r",
    "pageUrl": "https://nmkrv.edu.in/science/biotechnology/",
    "message": "<div class=\"ssmrv-faculty-card is-full-profile\"><div class=\"ssmrv-faculty-name\">Mrs. Priya R.</div><div class=\"ssmrv-faculty-badges\"><span class=\"ssmrv-badge-desig\">Assistant Professor</span><span class=\"ssmrv-badge-dept\">Biotechnology (B.Sc.)</span></div><div class=\"ssmrv-fac-actions\"><a href=\"https://nmkrv.edu.in/science/biotechnology/\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"ssmrv-visit-website-btn\">🌐 Visit Official Website Page ↗</a></div><div class=\"ssmrv-faculty-meta\"><div class=\"ssmrv-fac-row\"><span class=\"ssmrv-fac-label\">🎓 Qualifications</span><span class=\"ssmrv-fac-val\">M.Sc. Biotechnology</span></div><div class=\"ssmrv-fac-row\"><span class=\"ssmrv-fac-label\">⏳ Experience</span><span class=\"ssmrv-fac-val\">Senior Faculty &amp; UGC Research Project Co-Investigator</span></div><div class=\"ssmrv-fac-row\"><span class=\"ssmrv-fac-label\">🔬 Areas of Expertise</span><span class=\"ssmrv-fac-val\">Microbiology, Genetic Engineering, Molecular Biology &amp; Environmental Biotechnology</span></div><div class=\"ssmrv-fac-row\"><span class=\"ssmrv-fac-label\">🛡️ Committee / Role</span><span class=\"ssmrv-fac-val ssmrv-fac-role-val\">Member — Academic Council &amp; Anti-Ragging Cell | Coordinator — Eco Club</span></div><div class=\"ssmrv-fac-section\"><div class=\"ssmrv-fac-sec-title\">📖 Profile Overview</div><div class=\"ssmrv-fac-sec-text\">Mrs. Priya R. is an Assistant Professor in the Department of Biotechnology. She serves as a Member of the Academic Council, Coordinator of the Eco Club, Member of the Anti-Ragging Cell, and Co-Investigator of a UGC Minor Research Project.</div></div><div class=\"ssmrv-fac-section\"><div class=\"ssmrv-fac-sec-title\">🏆 Key Highlights</div><div class=\"ssmrv-fac-sec-text\">Member — Academic Council | Coordinator — Eco Club | Member — Anti-Ragging Cell.</div></div><div class=\"ssmrv-fac-contact\"><div>📧 <a href=\"mailto:priyar.nmkrv@rvei.edu.in\">priyar.nmkrv@rvei.edu.in</a></div><div>📞 <a href=\"tel:08069018900\">080-69018900</a></div></div></div></div>",
    "buttons": [
      {
        "text": "🌐 Visit Official Website Page ↗",
        "url": "https://nmkrv.edu.in/science/biotechnology/",
        "isPrimary": true
      },
      {
        "text": "🏛️ 🧬 Life Sciences",
        "action": "flow:faculty_life_sciences"
      },
      {
        "text": "👨‍🏫 All Faculty Departments",
        "action": "flow:faculty"
      }
    ]
  },
  "profile_mrs-bhamamani-b-j": {
    "id": "profile_mrs-bhamamani-b-j",
    "pageUrl": "https://nmkrv.edu.in/science/biotechnology/",
    "message": "<div class=\"ssmrv-faculty-card is-full-profile\"><div class=\"ssmrv-faculty-name\">Mrs. Bhamamani B. J.</div><div class=\"ssmrv-faculty-badges\"><span class=\"ssmrv-badge-desig\">Assistant Professor</span><span class=\"ssmrv-badge-dept\">Biotechnology (B.Sc.)</span></div><div class=\"ssmrv-fac-actions\"><a href=\"https://nmkrv.edu.in/science/biotechnology/\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"ssmrv-visit-website-btn\">🌐 Visit Official Website Page ↗</a></div><div class=\"ssmrv-faculty-meta\"><div class=\"ssmrv-fac-row\"><span class=\"ssmrv-fac-label\">🎓 Qualifications</span><span class=\"ssmrv-fac-val\">M.Sc. Biotechnology</span></div><div class=\"ssmrv-fac-row\"><span class=\"ssmrv-fac-label\">⏳ Experience</span><span class=\"ssmrv-fac-val\">Teaching &amp; Student Welfare Committee Experience</span></div><div class=\"ssmrv-fac-row\"><span class=\"ssmrv-fac-label\">🔬 Areas of Expertise</span><span class=\"ssmrv-fac-val\">Cell Biology, Immunology, Animal &amp; Plant Biotechnology</span></div><div class=\"ssmrv-fac-row\"><span class=\"ssmrv-fac-label\">🛡️ Committee / Role</span><span class=\"ssmrv-fac-val ssmrv-fac-role-val\">Member — IQAC, GRC, ICC &amp; Fine Arts Club</span></div><div class=\"ssmrv-fac-section\"><div class=\"ssmrv-fac-sec-title\">📖 Profile Overview</div><div class=\"ssmrv-fac-sec-text\">Mrs. Bhamamani B. J. is an Assistant Professor in the Department of Biotechnology and serves on the IQAC, Grievance Redressal Committee (GRC), Internal Complaints Committee (ICC), and Fine Arts Club.</div></div><div class=\"ssmrv-fac-section\"><div class=\"ssmrv-fac-sec-title\">🏆 Key Highlights</div><div class=\"ssmrv-fac-sec-text\">Member — IQAC, Grievance Redressal Committee (GRC) &amp; Internal Complaints Committee (ICC).</div></div><div class=\"ssmrv-fac-contact\"><div>📧 <a href=\"mailto:bhamamanibj.nmkrv@rvei.edu.in\">bhamamanibj.nmkrv@rvei.edu.in</a></div><div>📞 <a href=\"tel:08069018900\">080-69018900</a></div></div></div></div>",
    "buttons": [
      {
        "text": "🌐 Visit Official Website Page ↗",
        "url": "https://nmkrv.edu.in/science/biotechnology/",
        "isPrimary": true
      },
      {
        "text": "🏛️ 🧬 Life Sciences",
        "action": "flow:faculty_life_sciences"
      },
      {
        "text": "👨‍🏫 All Faculty Departments",
        "action": "flow:faculty"
      }
    ]
  },
  "profile_mrs-nalina-n": {
    "id": "profile_mrs-nalina-n",
    "pageUrl": "https://nmkrv.edu.in/science/biotechnology/",
    "message": "<div class=\"ssmrv-faculty-card is-full-profile\"><div class=\"ssmrv-faculty-name\">Mrs. Nalina N.</div><div class=\"ssmrv-faculty-badges\"><span class=\"ssmrv-badge-desig\">Assistant Professor</span><span class=\"ssmrv-badge-dept\">Biotechnology (B.Sc.)</span></div><div class=\"ssmrv-fac-actions\"><a href=\"https://nmkrv.edu.in/science/biotechnology/\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"ssmrv-visit-website-btn\">🌐 Visit Official Website Page ↗</a></div><div class=\"ssmrv-faculty-meta\"><div class=\"ssmrv-fac-row\"><span class=\"ssmrv-fac-label\">🎓 Qualifications</span><span class=\"ssmrv-fac-val\">M.Sc., M.Phil.</span></div><div class=\"ssmrv-fac-row\"><span class=\"ssmrv-fac-label\">⏳ Experience</span><span class=\"ssmrv-fac-val\">Teaching Experience in Biotechnology</span></div><div class=\"ssmrv-fac-row\"><span class=\"ssmrv-fac-label\">🔬 Areas of Expertise</span><span class=\"ssmrv-fac-val\">Biomolecules, Industrial Biotechnology, Fermentation Technology &amp; Bioinformatics</span></div><div class=\"ssmrv-fac-row\"><span class=\"ssmrv-fac-label\">🛡️ Committee / Role</span><span class=\"ssmrv-fac-val ssmrv-fac-role-val\">Member — Innovation Cell &amp; Social Media Cell</span></div><div class=\"ssmrv-fac-section\"><div class=\"ssmrv-fac-sec-title\">📖 Profile Overview</div><div class=\"ssmrv-fac-sec-text\">Mrs. Nalina N. is an Assistant Professor in the Department of Biotechnology and serves as a member of the Innovation Cell and Social Media Cell.</div></div><div class=\"ssmrv-fac-section\"><div class=\"ssmrv-fac-sec-title\">🏆 Key Highlights</div><div class=\"ssmrv-fac-sec-text\">Member — Innovation Cell &amp; Social Media Cell.</div></div><div class=\"ssmrv-fac-contact\"><div>📧 <a href=\"mailto:nmkrv@rvei.edu.in\">nmkrv@rvei.edu.in</a></div><div>📞 <a href=\"tel:08069018900\">080-69018900</a></div></div></div></div>",
    "buttons": [
      {
        "text": "🌐 Visit Official Website Page ↗",
        "url": "https://nmkrv.edu.in/science/biotechnology/",
        "isPrimary": true
      },
      {
        "text": "🏛️ 🧬 Life Sciences",
        "action": "flow:faculty_life_sciences"
      },
      {
        "text": "👨‍🏫 All Faculty Departments",
        "action": "flow:faculty"
      }
    ]
  },
  "profile_dr-mrunalini-b-r": {
    "id": "profile_dr-mrunalini-b-r",
    "pageUrl": "https://nmkrv.edu.in/msc-biotechnology/",
    "message": "<div class=\"ssmrv-faculty-card is-full-profile\"><div class=\"ssmrv-faculty-name\">Dr. Mrunalini B. R.</div><div class=\"ssmrv-faculty-badges\"><span class=\"ssmrv-badge-desig\">Assistant Professor &amp; PG Coordinator (M.Sc. Biotechnology)</span><span class=\"ssmrv-badge-dept\">PG Biotechnology (M.Sc.)</span></div><div class=\"ssmrv-fac-actions\"><a href=\"https://nmkrv.edu.in/msc-biotechnology/\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"ssmrv-visit-website-btn\">🌐 Visit Official Website Page ↗</a></div><div class=\"ssmrv-faculty-meta\"><div class=\"ssmrv-fac-row\"><span class=\"ssmrv-fac-label\">🎓 Qualifications</span><span class=\"ssmrv-fac-val\">M.Sc., M.Phil., Ph.D.</span></div><div class=\"ssmrv-fac-row\"><span class=\"ssmrv-fac-label\">⏳ Experience</span><span class=\"ssmrv-fac-val\">Coordinator — M.Sc. Biotechnology &amp; Research Advisory Committee</span></div><div class=\"ssmrv-fac-row\"><span class=\"ssmrv-fac-label\">🔬 Areas of Expertise</span><span class=\"ssmrv-fac-val\">Molecular Biology, Recombinant DNA Technology, Bioprocess Engineering &amp; Genomics</span></div><div class=\"ssmrv-fac-row\"><span class=\"ssmrv-fac-label\">🛡️ Committee / Role</span><span class=\"ssmrv-fac-val ssmrv-fac-role-val\">Coordinator — Research Advisory Committee &amp; M.Sc. Biotechnology | Member — IQAC</span></div><div class=\"ssmrv-fac-section\"><div class=\"ssmrv-fac-sec-title\">📖 Profile Overview</div><div class=\"ssmrv-fac-sec-text\">Dr. Mrunalini B. R. is the PG Coordinator for M.Sc. Biotechnology, Coordinator of the Research Advisory Committee under the Centre for Coordination of Research (CCR), and a Member of the IQAC and Innovation Cell.</div></div><div class=\"ssmrv-fac-section\"><div class=\"ssmrv-fac-sec-title\">🏆 Key Highlights</div><div class=\"ssmrv-fac-sec-text\">Coordinator — Research Advisory Committee &amp; PG Biotechnology | Member — IQAC.</div></div><div class=\"ssmrv-fac-contact\"><div>📧 <a href=\"mailto:nmkrv@rvei.edu.in\">nmkrv@rvei.edu.in</a></div><div>📞 <a href=\"tel:08069018900\">080-69018900</a></div></div></div></div>",
    "buttons": [
      {
        "text": "🌐 Visit Official Website Page ↗",
        "url": "https://nmkrv.edu.in/msc-biotechnology/",
        "isPrimary": true
      },
      {
        "text": "🏛️ 🧬 Life Sciences",
        "action": "flow:faculty_life_sciences"
      },
      {
        "text": "👨‍🏫 All Faculty Departments",
        "action": "flow:faculty"
      }
    ]
  },
  "profile_dr-aruna-nair": {
    "id": "profile_dr-aruna-nair",
    "pageUrl": "https://nmkrv.edu.in/msc-biotechnology/",
    "message": "<div class=\"ssmrv-faculty-card is-full-profile\"><div class=\"ssmrv-faculty-name\">Dr. Aruna Nair</div><div class=\"ssmrv-faculty-badges\"><span class=\"ssmrv-badge-desig\">Assistant Professor — M.Sc. Biotechnology</span><span class=\"ssmrv-badge-dept\">PG Biotechnology (M.Sc.)</span></div><div class=\"ssmrv-fac-actions\"><a href=\"https://nmkrv.edu.in/msc-biotechnology/\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"ssmrv-visit-website-btn\">🌐 Visit Official Website Page ↗</a></div><div class=\"ssmrv-faculty-meta\"><div class=\"ssmrv-fac-row\"><span class=\"ssmrv-fac-label\">🎓 Qualifications</span><span class=\"ssmrv-fac-val\">M.Sc., Ph.D.</span></div><div class=\"ssmrv-fac-row\"><span class=\"ssmrv-fac-label\">⏳ Experience</span><span class=\"ssmrv-fac-val\">Postgraduate Teaching &amp; Research Experience in Biotechnology</span></div><div class=\"ssmrv-fac-row\"><span class=\"ssmrv-fac-label\">🔬 Areas of Expertise</span><span class=\"ssmrv-fac-val\">Plant &amp; Microbial Biotechnology, Molecular Diagnostics</span></div><div class=\"ssmrv-fac-row\"><span class=\"ssmrv-fac-label\">🛡️ Committee / Role</span><span class=\"ssmrv-fac-val ssmrv-fac-role-val\">PG Department of Biotechnology</span></div><div class=\"ssmrv-fac-section\"><div class=\"ssmrv-fac-sec-title\">📖 Profile Overview</div><div class=\"ssmrv-fac-sec-text\">Dr. Aruna Nair serves as Assistant Professor in the Postgraduate Department of M.Sc. Biotechnology at NMKRV College.</div></div><div class=\"ssmrv-fac-section\"><div class=\"ssmrv-fac-sec-title\">🏆 Key Highlights</div><div class=\"ssmrv-fac-sec-text\">Doctorate Faculty in PG Biotechnology.</div></div><div class=\"ssmrv-fac-contact\"><div>📧 <a href=\"mailto:nmkrv@rvei.edu.in\">nmkrv@rvei.edu.in</a></div><div>📞 <a href=\"tel:08069018900\">080-69018900</a></div></div></div></div>",
    "buttons": [
      {
        "text": "🌐 Visit Official Website Page ↗",
        "url": "https://nmkrv.edu.in/msc-biotechnology/",
        "isPrimary": true
      },
      {
        "text": "🏛️ 🧬 Life Sciences",
        "action": "flow:faculty_life_sciences"
      },
      {
        "text": "👨‍🏫 All Faculty Departments",
        "action": "flow:faculty"
      }
    ]
  },
  "profile_ms-tanaya-naik": {
    "id": "profile_ms-tanaya-naik",
    "pageUrl": "https://nmkrv.edu.in/msc-biotechnology/",
    "message": "<div class=\"ssmrv-faculty-card is-full-profile\"><div class=\"ssmrv-faculty-name\">Ms. Tanaya Naik</div><div class=\"ssmrv-faculty-badges\"><span class=\"ssmrv-badge-desig\">Assistant Professor — M.Sc. Biotechnology</span><span class=\"ssmrv-badge-dept\">PG Biotechnology (M.Sc.)</span></div><div class=\"ssmrv-fac-actions\"><a href=\"https://nmkrv.edu.in/msc-biotechnology/\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"ssmrv-visit-website-btn\">🌐 Visit Official Website Page ↗</a></div><div class=\"ssmrv-faculty-meta\"><div class=\"ssmrv-fac-row\"><span class=\"ssmrv-fac-label\">🎓 Qualifications</span><span class=\"ssmrv-fac-val\">M.Sc. Biotechnology</span></div><div class=\"ssmrv-fac-row\"><span class=\"ssmrv-fac-label\">⏳ Experience</span><span class=\"ssmrv-fac-val\">Postgraduate Teaching Experience in Biotechnology</span></div><div class=\"ssmrv-fac-row\"><span class=\"ssmrv-fac-label\">🔬 Areas of Expertise</span><span class=\"ssmrv-fac-val\">Immunology, Genetic Engineering &amp; Biostatistical Analysis</span></div><div class=\"ssmrv-fac-row\"><span class=\"ssmrv-fac-label\">🛡️ Committee / Role</span><span class=\"ssmrv-fac-val ssmrv-fac-role-val\">PG Department of Biotechnology</span></div><div class=\"ssmrv-fac-section\"><div class=\"ssmrv-fac-sec-title\">📖 Profile Overview</div><div class=\"ssmrv-fac-sec-text\">Ms. Tanaya Naik serves as Assistant Professor in the Postgraduate Department of M.Sc. Biotechnology at NMKRV College.</div></div><div class=\"ssmrv-fac-section\"><div class=\"ssmrv-fac-sec-title\">🏆 Key Highlights</div><div class=\"ssmrv-fac-sec-text\">Faculty Member, PG Department of Biotechnology.</div></div><div class=\"ssmrv-fac-contact\"><div>📧 <a href=\"mailto:nmkrv@rvei.edu.in\">nmkrv@rvei.edu.in</a></div><div>📞 <a href=\"tel:08069018900\">080-69018900</a></div></div></div></div>",
    "buttons": [
      {
        "text": "🌐 Visit Official Website Page ↗",
        "url": "https://nmkrv.edu.in/msc-biotechnology/",
        "isPrimary": true
      },
      {
        "text": "🏛️ 🧬 Life Sciences",
        "action": "flow:faculty_life_sciences"
      },
      {
        "text": "👨‍🏫 All Faculty Departments",
        "action": "flow:faculty"
      }
    ]
  },
  "profile_dr-srikala-s-reddy": {
    "id": "profile_dr-srikala-s-reddy",
    "pageUrl": "https://nmkrv.edu.in/science/botany/",
    "message": "<div class=\"ssmrv-faculty-card is-full-profile\"><div class=\"ssmrv-faculty-name\">Dr. Srikala S. Reddy</div><div class=\"ssmrv-faculty-badges\"><span class=\"ssmrv-badge-desig\">Lecturer</span><span class=\"ssmrv-badge-dept\">Botany (B.Sc.)</span></div><div class=\"ssmrv-fac-actions\"><a href=\"https://nmkrv.edu.in/science/botany/\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"ssmrv-visit-website-btn\">🌐 Visit Official Website Page ↗</a></div><div class=\"ssmrv-faculty-meta\"><div class=\"ssmrv-fac-row\"><span class=\"ssmrv-fac-label\">🎓 Qualifications</span><span class=\"ssmrv-fac-val\">M.Sc., [Ph.D.]</span></div><div class=\"ssmrv-fac-row\"><span class=\"ssmrv-fac-label\">⏳ Experience</span><span class=\"ssmrv-fac-val\">Teaching &amp; Herbal Medicinal Garden Curation Experience</span></div><div class=\"ssmrv-fac-row\"><span class=\"ssmrv-fac-label\">🔬 Areas of Expertise</span><span class=\"ssmrv-fac-val\">Microbial Diversity, Phycology, Plant Taxonomy &amp; Medicinal Botany</span></div><div class=\"ssmrv-fac-row\"><span class=\"ssmrv-fac-label\">🛡️ Committee / Role</span><span class=\"ssmrv-fac-val ssmrv-fac-role-val\">Department of Botany</span></div><div class=\"ssmrv-fac-section\"><div class=\"ssmrv-fac-sec-title\">📖 Profile Overview</div><div class=\"ssmrv-fac-sec-text\">Dr. Srikala S. Reddy serves in the DBT-STAR supported Department of Botany at NMKRV College, mentoring students in plant sciences, biodiversity conservation, and the campus Herbal Medicinal Garden.</div></div><div class=\"ssmrv-fac-section\"><div class=\"ssmrv-fac-sec-title\">🏆 Key Highlights</div><div class=\"ssmrv-fac-sec-text\">Faculty Member, DBT-STAR Supported Department of Botany.</div></div><div class=\"ssmrv-fac-contact\"><div>📧 <a href=\"mailto:nmkrv@rvei.edu.in\">nmkrv@rvei.edu.in</a></div><div>📞 <a href=\"tel:08069018900\">080-69018900</a></div></div></div></div>",
    "buttons": [
      {
        "text": "🌐 Visit Official Website Page ↗",
        "url": "https://nmkrv.edu.in/science/botany/",
        "isPrimary": true
      },
      {
        "text": "🏛️ 🧬 Life Sciences",
        "action": "flow:faculty_life_sciences"
      },
      {
        "text": "👨‍🏫 All Faculty Departments",
        "action": "flow:faculty"
      }
    ]
  },
  "profile_dr-parinitha-mahishi": {
    "id": "profile_dr-parinitha-mahishi",
    "pageUrl": "https://nmkrv.edu.in/research-faculty/",
    "message": "<div class=\"ssmrv-faculty-card is-full-profile\"><div class=\"ssmrv-faculty-name\">Dr. Parinitha Mahishi</div><div class=\"ssmrv-faculty-badges\"><span class=\"ssmrv-badge-desig\">Research Faculty</span><span class=\"ssmrv-badge-dept\">Botany (B.Sc.)</span></div><div class=\"ssmrv-fac-actions\"><a href=\"https://nmkrv.edu.in/research-faculty/\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"ssmrv-visit-website-btn\">🌐 Visit Official Website Page ↗</a></div><div class=\"ssmrv-faculty-meta\"><div class=\"ssmrv-fac-row\"><span class=\"ssmrv-fac-label\">🎓 Qualifications</span><span class=\"ssmrv-fac-val\">M.Sc., Ph.D.</span></div><div class=\"ssmrv-fac-row\"><span class=\"ssmrv-fac-label\">⏳ Experience</span><span class=\"ssmrv-fac-val\">Research &amp; Ethnobotanical Studies in Plant Sciences</span></div><div class=\"ssmrv-fac-row\"><span class=\"ssmrv-fac-label\">🔬 Areas of Expertise</span><span class=\"ssmrv-fac-val\">Ethnobotany, Medicinal Plants, Ecology &amp; Biodiversity Conservation</span></div><div class=\"ssmrv-fac-row\"><span class=\"ssmrv-fac-label\">🛡️ Committee / Role</span><span class=\"ssmrv-fac-val ssmrv-fac-role-val\">Research Faculty — Botany</span></div><div class=\"ssmrv-fac-section\"><div class=\"ssmrv-fac-sec-title\">📖 Profile Overview</div><div class=\"ssmrv-fac-sec-text\">Dr. Parinitha Mahishi is a recognized Research Faculty member in the Department of Botany at NMKRV College.</div></div><div class=\"ssmrv-fac-section\"><div class=\"ssmrv-fac-sec-title\">🏆 Key Highlights</div><div class=\"ssmrv-fac-sec-text\">Recognized Research Faculty in Botany.</div></div><div class=\"ssmrv-fac-contact\"><div>📧 <a href=\"mailto:nmkrv@rvei.edu.in\">nmkrv@rvei.edu.in</a></div><div>📞 <a href=\"tel:08069018900\">080-69018900</a></div></div></div></div>",
    "buttons": [
      {
        "text": "🌐 Visit Official Website Page ↗",
        "url": "https://nmkrv.edu.in/research-faculty/",
        "isPrimary": true
      },
      {
        "text": "🏛️ 🧬 Life Sciences",
        "action": "flow:faculty_life_sciences"
      },
      {
        "text": "👨‍🏫 All Faculty Departments",
        "action": "flow:faculty"
      }
    ]
  },
  "profile_prof-meenakumari-t": {
    "id": "profile_prof-meenakumari-t",
    "pageUrl": "https://nmkrv.edu.in/aarogya-kendra/",
    "message": "<div class=\"ssmrv-faculty-card is-full-profile\"><div class=\"ssmrv-faculty-name\">Prof. Meenakumari T.</div><div class=\"ssmrv-faculty-badges\"><span class=\"ssmrv-badge-desig\">Associate Professor &amp; Head (Zoology)</span><span class=\"ssmrv-badge-dept\">Zoology (B.Sc.)</span></div><div class=\"ssmrv-fac-actions\"><a href=\"https://nmkrv.edu.in/aarogya-kendra/\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"ssmrv-visit-website-btn\">🌐 Visit Official Website Page ↗</a></div><div class=\"ssmrv-faculty-meta\"><div class=\"ssmrv-fac-row\"><span class=\"ssmrv-fac-label\">🎓 Qualifications</span><span class=\"ssmrv-fac-val\">M.Sc. Zoology</span></div><div class=\"ssmrv-fac-row\"><span class=\"ssmrv-fac-label\">⏳ Experience</span><span class=\"ssmrv-fac-val\">Associate Professor &amp; Head of Department of Zoology</span></div><div class=\"ssmrv-fac-row\"><span class=\"ssmrv-fac-label\">🔬 Areas of Expertise</span><span class=\"ssmrv-fac-val\">Animal Physiology, Genetics, Developmental Biology &amp; Health Outreach</span></div><div class=\"ssmrv-fac-row\"><span class=\"ssmrv-fac-label\">🛡️ Committee / Role</span><span class=\"ssmrv-fac-val ssmrv-fac-role-val\">HoD — Zoology | Coordinator — Aarogya Kendra</span></div><div class=\"ssmrv-fac-section\"><div class=\"ssmrv-fac-sec-title\">📖 Profile Overview</div><div class=\"ssmrv-fac-sec-text\">Prof. Meenakumari T. serves as Associate Professor and Head of the Department of Zoology and Coordinator of the Aarogya Kendra (Campus Health Centre) at NMKRV College.</div></div><div class=\"ssmrv-fac-section\"><div class=\"ssmrv-fac-sec-title\">🏆 Key Highlights</div><div class=\"ssmrv-fac-sec-text\">Head of Department (Zoology) &amp; Coordinator — Aarogya Kendra.</div></div><div class=\"ssmrv-fac-contact\"><div>📧 <a href=\"mailto:nmkrv@rvei.edu.in\">nmkrv@rvei.edu.in</a></div><div>📞 <a href=\"tel:08069018900\">080-69018900</a></div></div></div></div>",
    "buttons": [
      {
        "text": "🌐 Visit Official Website Page ↗",
        "url": "https://nmkrv.edu.in/aarogya-kendra/",
        "isPrimary": true
      },
      {
        "text": "🏛️ 🧬 Life Sciences",
        "action": "flow:faculty_life_sciences"
      },
      {
        "text": "👨‍🏫 All Faculty Departments",
        "action": "flow:faculty"
      }
    ]
  },
  "profile_mrs-manjula-j": {
    "id": "profile_mrs-manjula-j",
    "pageUrl": "https://nmkrv.edu.in/science/zoology/",
    "message": "<div class=\"ssmrv-faculty-card is-full-profile\"><div class=\"ssmrv-faculty-name\">Mrs. Manjula J.</div><div class=\"ssmrv-faculty-badges\"><span class=\"ssmrv-badge-desig\">Assistant Professor</span><span class=\"ssmrv-badge-dept\">Zoology (B.Sc.)</span></div><div class=\"ssmrv-fac-actions\"><a href=\"https://nmkrv.edu.in/science/zoology/\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"ssmrv-visit-website-btn\">🌐 Visit Official Website Page ↗</a></div><div class=\"ssmrv-faculty-meta\"><div class=\"ssmrv-fac-row\"><span class=\"ssmrv-fac-label\">🎓 Qualifications</span><span class=\"ssmrv-fac-val\">M.Sc., M.Phil., K-SET</span></div><div class=\"ssmrv-fac-row\"><span class=\"ssmrv-fac-label\">⏳ Experience</span><span class=\"ssmrv-fac-val\">Senior Faculty in Zoology &amp; NSS Programme Officer</span></div><div class=\"ssmrv-fac-row\"><span class=\"ssmrv-fac-label\">🔬 Areas of Expertise</span><span class=\"ssmrv-fac-val\">Non-Chordates, Chordates, Ecology, Cell Biology &amp; Community Outreach</span></div><div class=\"ssmrv-fac-row\"><span class=\"ssmrv-fac-label\">🛡️ Committee / Role</span><span class=\"ssmrv-fac-val ssmrv-fac-role-val\">Member — Academic Council &amp; SC/ST Committee | Coordinator — NSS</span></div><div class=\"ssmrv-fac-section\"><div class=\"ssmrv-fac-sec-title\">📖 Profile Overview</div><div class=\"ssmrv-fac-sec-text\">Mrs. Manjula J. is an Assistant Professor in the Department of Zoology. She serves as a Member of the Academic Council, Coordinator of the National Service Scheme (NSS), and Chairperson/Member of the SC/ST Committee.</div></div><div class=\"ssmrv-fac-section\"><div class=\"ssmrv-fac-sec-title\">🏆 Key Highlights</div><div class=\"ssmrv-fac-sec-text\">Member — Academic Council | Coordinator — NSS | Member — SC/ST Committee.</div></div><div class=\"ssmrv-fac-contact\"><div>📧 <a href=\"mailto:manjulaj.nmkrv@rvei.edu.in\">manjulaj.nmkrv@rvei.edu.in</a></div><div>📞 <a href=\"tel:08069018900\">080-69018900</a></div></div></div></div>",
    "buttons": [
      {
        "text": "🌐 Visit Official Website Page ↗",
        "url": "https://nmkrv.edu.in/science/zoology/",
        "isPrimary": true
      },
      {
        "text": "🏛️ 🧬 Life Sciences",
        "action": "flow:faculty_life_sciences"
      },
      {
        "text": "👨‍🏫 All Faculty Departments",
        "action": "flow:faculty"
      }
    ]
  },
  "profile_dr-hemalatha-b-n": {
    "id": "profile_dr-hemalatha-b-n",
    "pageUrl": "https://nmkrv.edu.in/science/zoology/",
    "message": "<div class=\"ssmrv-faculty-card is-full-profile\"><div class=\"ssmrv-faculty-name\">Dr. Hemalatha B. N.</div><div class=\"ssmrv-faculty-badges\"><span class=\"ssmrv-badge-desig\">Assistant Professor</span><span class=\"ssmrv-badge-dept\">Zoology (B.Sc.)</span></div><div class=\"ssmrv-fac-actions\"><a href=\"https://nmkrv.edu.in/science/zoology/\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"ssmrv-visit-website-btn\">🌐 Visit Official Website Page ↗</a></div><div class=\"ssmrv-faculty-meta\"><div class=\"ssmrv-fac-row\"><span class=\"ssmrv-fac-label\">🎓 Qualifications</span><span class=\"ssmrv-fac-val\">M.Sc., B.Ed., Ph.D.</span></div><div class=\"ssmrv-fac-row\"><span class=\"ssmrv-fac-label\">⏳ Experience</span><span class=\"ssmrv-fac-val\">Teaching &amp; Research Experience in Zoology</span></div><div class=\"ssmrv-fac-row\"><span class=\"ssmrv-fac-label\">🔬 Areas of Expertise</span><span class=\"ssmrv-fac-val\">Animal Diversity, Comparative Anatomy, Physiology &amp; Environmental Biology</span></div><div class=\"ssmrv-fac-row\"><span class=\"ssmrv-fac-label\">🛡️ Committee / Role</span><span class=\"ssmrv-fac-val ssmrv-fac-role-val\">Research Faculty — Zoology</span></div><div class=\"ssmrv-fac-section\"><div class=\"ssmrv-fac-sec-title\">📖 Profile Overview</div><div class=\"ssmrv-fac-sec-text\">Dr. Hemalatha B. N. is an Assistant Professor and recognized Research Faculty member in the DBT-STAR supported Department of Zoology at NMKRV College.</div></div><div class=\"ssmrv-fac-section\"><div class=\"ssmrv-fac-sec-title\">🏆 Key Highlights</div><div class=\"ssmrv-fac-sec-text\">Recognized Research Faculty in Zoology.</div></div><div class=\"ssmrv-fac-contact\"><div>📧 <a href=\"mailto:nmkrv@rvei.edu.in\">nmkrv@rvei.edu.in</a></div><div>📞 <a href=\"tel:08069018900\">080-69018900</a></div></div></div></div>",
    "buttons": [
      {
        "text": "🌐 Visit Official Website Page ↗",
        "url": "https://nmkrv.edu.in/science/zoology/",
        "isPrimary": true
      },
      {
        "text": "🏛️ 🧬 Life Sciences",
        "action": "flow:faculty_life_sciences"
      },
      {
        "text": "👨‍🏫 All Faculty Departments",
        "action": "flow:faculty"
      }
    ]
  },
  "profile_dr-shashikala-k-b": {
    "id": "profile_dr-shashikala-k-b",
    "pageUrl": "https://nmkrv.edu.in/science/zoology/",
    "message": "<div class=\"ssmrv-faculty-card is-full-profile\"><div class=\"ssmrv-faculty-name\">Dr. Shashikala K. B.</div><div class=\"ssmrv-faculty-badges\"><span class=\"ssmrv-badge-desig\">Assistant Professor</span><span class=\"ssmrv-badge-dept\">Zoology (B.Sc.)</span></div><div class=\"ssmrv-fac-actions\"><a href=\"https://nmkrv.edu.in/science/zoology/\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"ssmrv-visit-website-btn\">🌐 Visit Official Website Page ↗</a></div><div class=\"ssmrv-faculty-meta\"><div class=\"ssmrv-fac-row\"><span class=\"ssmrv-fac-label\">🎓 Qualifications</span><span class=\"ssmrv-fac-val\">M.Sc., Ph.D., KSET</span></div><div class=\"ssmrv-fac-row\"><span class=\"ssmrv-fac-label\">⏳ Experience</span><span class=\"ssmrv-fac-val\">Teaching &amp; Research Experience in Zoology</span></div><div class=\"ssmrv-fac-row\"><span class=\"ssmrv-fac-label\">🔬 Areas of Expertise</span><span class=\"ssmrv-fac-val\">Genetics, Evolutionary Biology, Entomology &amp; Applied Zoology</span></div><div class=\"ssmrv-fac-row\"><span class=\"ssmrv-fac-label\">🛡️ Committee / Role</span><span class=\"ssmrv-fac-val ssmrv-fac-role-val\">Research Faculty — Zoology</span></div><div class=\"ssmrv-fac-section\"><div class=\"ssmrv-fac-sec-title\">📖 Profile Overview</div><div class=\"ssmrv-fac-sec-text\">Dr. Shashikala K. B. is an Assistant Professor and recognized Research Faculty member in the Department of Zoology at NMKRV College.</div></div><div class=\"ssmrv-fac-section\"><div class=\"ssmrv-fac-sec-title\">🏆 Key Highlights</div><div class=\"ssmrv-fac-sec-text\">Recognized Research Faculty in Zoology.</div></div><div class=\"ssmrv-fac-contact\"><div>📧 <a href=\"mailto:nmkrv@rvei.edu.in\">nmkrv@rvei.edu.in</a></div><div>📞 <a href=\"tel:08069018900\">080-69018900</a></div></div></div></div>",
    "buttons": [
      {
        "text": "🌐 Visit Official Website Page ↗",
        "url": "https://nmkrv.edu.in/science/zoology/",
        "isPrimary": true
      },
      {
        "text": "🏛️ 🧬 Life Sciences",
        "action": "flow:faculty_life_sciences"
      },
      {
        "text": "👨‍🏫 All Faculty Departments",
        "action": "flow:faculty"
      }
    ]
  },
  "profile_dr-sharangouda-j-patil": {
    "id": "profile_dr-sharangouda-j-patil",
    "pageUrl": "https://nmkrv.edu.in/research-faculty/",
    "message": "<div class=\"ssmrv-faculty-card is-full-profile\"><div class=\"ssmrv-faculty-name\">Dr. Sharangouda J. Patil</div><div class=\"ssmrv-faculty-badges\"><span class=\"ssmrv-badge-desig\">Research Faculty</span><span class=\"ssmrv-badge-dept\">Zoology (B.Sc.)</span></div><div class=\"ssmrv-fac-actions\"><a href=\"https://nmkrv.edu.in/research-faculty/\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"ssmrv-visit-website-btn\">🌐 Visit Official Website Page ↗</a></div><div class=\"ssmrv-faculty-meta\"><div class=\"ssmrv-fac-row\"><span class=\"ssmrv-fac-label\">🎓 Qualifications</span><span class=\"ssmrv-fac-val\">M.Sc., Ph.D.</span></div><div class=\"ssmrv-fac-row\"><span class=\"ssmrv-fac-label\">⏳ Experience</span><span class=\"ssmrv-fac-val\">Research &amp; Publications in Life Sciences and Zoology</span></div><div class=\"ssmrv-fac-row\"><span class=\"ssmrv-fac-label\">🔬 Areas of Expertise</span><span class=\"ssmrv-fac-val\">Reproductive Physiology, Medicinal Pharmacology &amp; Toxicology</span></div><div class=\"ssmrv-fac-row\"><span class=\"ssmrv-fac-label\">🛡️ Committee / Role</span><span class=\"ssmrv-fac-val ssmrv-fac-role-val\">Research Faculty — Zoology</span></div><div class=\"ssmrv-fac-section\"><div class=\"ssmrv-fac-sec-title\">📖 Profile Overview</div><div class=\"ssmrv-fac-sec-text\">Dr. Sharangouda J. Patil is a recognized Research Faculty member in the Department of Zoology at NMKRV College.</div></div><div class=\"ssmrv-fac-section\"><div class=\"ssmrv-fac-sec-title\">🏆 Key Highlights</div><div class=\"ssmrv-fac-sec-text\">Recognized Research Faculty in Zoology.</div></div><div class=\"ssmrv-fac-contact\"><div>📧 <a href=\"mailto:nmkrv@rvei.edu.in\">nmkrv@rvei.edu.in</a></div><div>📞 <a href=\"tel:08069018900\">080-69018900</a></div></div></div></div>",
    "buttons": [
      {
        "text": "🌐 Visit Official Website Page ↗",
        "url": "https://nmkrv.edu.in/research-faculty/",
        "isPrimary": true
      },
      {
        "text": "🏛️ 🧬 Life Sciences",
        "action": "flow:faculty_life_sciences"
      },
      {
        "text": "👨‍🏫 All Faculty Departments",
        "action": "flow:faculty"
      }
    ]
  },
  "faculty_humanities": {
    "id": "faculty_humanities",
    "pageUrl": "https://nmkrv.edu.in/humanities/",
    "message": "<div class=\"ssmrv-flow-heading\">🎭 Department of Humanities &amp; Media Studies</div><div class=\"ssmrv-flow-subheading\">Journalism &amp; Mass Communication, Economics, History, Sociology &amp; Psychology Faculty — Select <b>View Full Profile</b> or <b>Visit Website Page ↗</b> on any card below:</div><div class=\"ssmrv-dept-profile-list\"><div class=\"ssmrv-dept-profile-item\" data-profile-id=\"ms-sandya-s-c\" title=\"Click to view full profile of Ms. Sandya S. C.\"><div class=\"ssmrv-dept-prof-header\"><span class=\"ssmrv-dept-prof-name\">Ms. Sandya S. C.</span></div><div class=\"ssmrv-faculty-badges\"><span class=\"ssmrv-badge-desig\">Assistant Professor</span><span class=\"ssmrv-badge-dept\">Journalism &amp; Mass Communication (B.A. &amp; M.A.)</span></div><div class=\"ssmrv-dept-prof-actions\"><span class=\"ssmrv-dept-prof-cta\">👤 View Full Profile</span><a href=\"https://nmkrv.edu.in/humanities/journalism/\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"ssmrv-dept-visit-btn\" onclick=\"event.stopPropagation();\">🌐 Visit Website Page ↗</a></div><div class=\"ssmrv-dept-prof-meta\"><div class=\"ssmrv-dept-prof-row\"><strong>Qualifications:</strong> M.A. Journalism &amp; Mass Communication</div><div class=\"ssmrv-dept-prof-row\"><strong>Experience:</strong> Teaching Experience in Print, Broadcast &amp; Digital Journalism</div><div class=\"ssmrv-dept-prof-row\"><strong>Expertise:</strong> Reporting &amp; Editing, Broadcast Journalism, Media Laws &amp; Corporate Communication</div><div class=\"ssmrv-dept-prof-row ssmrv-dept-prof-comm\"><strong>Role:</strong> Department of Journalism &amp; Mass Communication</div></div></div><div class=\"ssmrv-dept-profile-item\" data-profile-id=\"ms-shwetha-p-b\" title=\"Click to view full profile of Ms. Shwetha P. B.\"><div class=\"ssmrv-dept-prof-header\"><span class=\"ssmrv-dept-prof-name\">Ms. Shwetha P. B.</span></div><div class=\"ssmrv-faculty-badges\"><span class=\"ssmrv-badge-desig\">Assistant Professor</span><span class=\"ssmrv-badge-dept\">Journalism &amp; Mass Communication (B.A. &amp; M.A.)</span></div><div class=\"ssmrv-dept-prof-actions\"><span class=\"ssmrv-dept-prof-cta\">👤 View Full Profile</span><a href=\"https://nmkrv.edu.in/humanities/journalism/\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"ssmrv-dept-visit-btn\" onclick=\"event.stopPropagation();\">🌐 Visit Website Page ↗</a></div><div class=\"ssmrv-dept-prof-meta\"><div class=\"ssmrv-dept-prof-row\"><strong>Qualifications:</strong> M.A. Journalism &amp; Mass Communication</div><div class=\"ssmrv-dept-prof-row\"><strong>Experience:</strong> Teaching Experience in Media &amp; Communication Studies</div><div class=\"ssmrv-dept-prof-row\"><strong>Expertise:</strong> Digital Media, Development Communication, Public Relations &amp; Advertising</div><div class=\"ssmrv-dept-prof-row ssmrv-dept-prof-comm\"><strong>Role:</strong> Department of Journalism &amp; Mass Communication</div></div></div><div class=\"ssmrv-dept-profile-item\" data-profile-id=\"ms-akshatha-a-g\" title=\"Click to view full profile of Ms. Akshatha A. G.\"><div class=\"ssmrv-dept-prof-header\"><span class=\"ssmrv-dept-prof-name\">Ms. Akshatha A. G.</span></div><div class=\"ssmrv-faculty-badges\"><span class=\"ssmrv-badge-desig\">Assistant Professor &amp; Cultural Coordinator</span><span class=\"ssmrv-badge-dept\">Journalism &amp; Cultural Activities</span></div><div class=\"ssmrv-dept-prof-actions\"><span class=\"ssmrv-dept-prof-cta\">👤 View Full Profile</span><a href=\"https://nmkrv.edu.in/cultural-activities/\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"ssmrv-dept-visit-btn\" onclick=\"event.stopPropagation();\">🌐 Visit Website Page ↗</a></div><div class=\"ssmrv-dept-prof-meta\"><div class=\"ssmrv-dept-prof-row\"><strong>Qualifications:</strong> M.A. Journalism &amp; Mass Communication</div><div class=\"ssmrv-dept-prof-row\"><strong>Experience:</strong> Teaching, Media Production &amp; Cultural Event Coordination</div><div class=\"ssmrv-dept-prof-row\"><strong>Expertise:</strong> Cultural Choreography (Nupur Dance Club), Media Production &amp; Event Management</div><div class=\"ssmrv-dept-prof-row ssmrv-dept-prof-comm\"><strong>Role:</strong> Coordinator — Nupur Dance Club &amp; Media Cell</div></div></div><div class=\"ssmrv-dept-profile-item\" data-profile-id=\"ms-megha-s\" title=\"Click to view full profile of Ms. Megha S.\"><div class=\"ssmrv-dept-prof-header\"><span class=\"ssmrv-dept-prof-name\">Ms. Megha S.</span></div><div class=\"ssmrv-faculty-badges\"><span class=\"ssmrv-badge-desig\">Assistant Professor</span><span class=\"ssmrv-badge-dept\">Journalism &amp; Cultural Activities</span></div><div class=\"ssmrv-dept-prof-actions\"><span class=\"ssmrv-dept-prof-cta\">👤 View Full Profile</span><a href=\"https://nmkrv.edu.in/cultural-activities/\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"ssmrv-dept-visit-btn\" onclick=\"event.stopPropagation();\">🌐 Visit Website Page ↗</a></div><div class=\"ssmrv-dept-prof-meta\"><div class=\"ssmrv-dept-prof-row\"><strong>Qualifications:</strong> M.A. Journalism &amp; Mass Communication</div><div class=\"ssmrv-dept-prof-row\"><strong>Experience:</strong> Media Production &amp; Cultural Activities Coordination</div><div class=\"ssmrv-dept-prof-row\"><strong>Expertise:</strong> Audio-Visual Production, Theatre/Cultural Coordination &amp; Content Writing</div><div class=\"ssmrv-dept-prof-row ssmrv-dept-prof-comm\"><strong>Role:</strong> Coordinator — Cultural Activities &amp; Media Cell</div></div></div><div class=\"ssmrv-dept-profile-item\" data-profile-id=\"mr-mohanmurthy-a\" title=\"Click to view full profile of Mr. Mohanmurthy A.\"><div class=\"ssmrv-dept-prof-header\"><span class=\"ssmrv-dept-prof-name\">Mr. Mohanmurthy A.</span></div><div class=\"ssmrv-faculty-badges\"><span class=\"ssmrv-badge-desig\">Coordinator — Media Cell</span><span class=\"ssmrv-badge-dept\">Media &amp; Communication Cell</span></div><div class=\"ssmrv-dept-prof-actions\"><span class=\"ssmrv-dept-prof-cta\">👤 View Full Profile</span><a href=\"https://nmkrv.edu.in/faculty/\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"ssmrv-dept-visit-btn\" onclick=\"event.stopPropagation();\">🌐 Visit Website Page ↗</a></div><div class=\"ssmrv-dept-prof-meta\"><div class=\"ssmrv-dept-prof-row\"><strong>Qualifications:</strong> Media &amp; Visual Communication</div><div class=\"ssmrv-dept-prof-row\"><strong>Experience:</strong> Media Production &amp; E-Content Development Coordinator</div><div class=\"ssmrv-dept-prof-row\"><strong>Expertise:</strong> Photography, Video Editing, Audio Production &amp; E-Content Development</div><div class=\"ssmrv-dept-prof-row ssmrv-dept-prof-comm\"><strong>Role:</strong> Coordinator — Media Cell</div></div></div><div class=\"ssmrv-dept-profile-item\" data-profile-id=\"mr-revanth-d-v\" title=\"Click to view full profile of Mr. Revanth D. V.\"><div class=\"ssmrv-dept-prof-header\"><span class=\"ssmrv-dept-prof-name\">Mr. Revanth D. V.</span></div><div class=\"ssmrv-faculty-badges\"><span class=\"ssmrv-badge-desig\">Media &amp; E-Content Specialist</span><span class=\"ssmrv-badge-dept\">Media &amp; Communication Cell</span></div><div class=\"ssmrv-dept-prof-actions\"><span class=\"ssmrv-dept-prof-cta\">👤 View Full Profile</span><a href=\"https://nmkrv.edu.in/faculty/\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"ssmrv-dept-visit-btn\" onclick=\"event.stopPropagation();\">🌐 Visit Website Page ↗</a></div><div class=\"ssmrv-dept-prof-meta\"><div class=\"ssmrv-dept-prof-row\"><strong>Qualifications:</strong> Media Production &amp; Documentary Filmmaking</div><div class=\"ssmrv-dept-prof-row\"><strong>Experience:</strong> Studio Production, Documentary Filmmaking &amp; Event Management</div><div class=\"ssmrv-dept-prof-row\"><strong>Expertise:</strong> Video &amp; Audio Production, Photography, Script Writing, Documentary Film Making &amp; E-Content Development</div><div class=\"ssmrv-dept-prof-row ssmrv-dept-prof-comm\"><strong>Role:</strong> Media &amp; E-Content Production Cell</div></div></div><div class=\"ssmrv-dept-profile-item\" data-profile-id=\"dr-mahanthesh-b-havani\" title=\"Click to view full profile of Dr. Mahanthesh B. Havani\"><div class=\"ssmrv-dept-prof-header\"><span class=\"ssmrv-dept-prof-name\">Dr. Mahanthesh B. Havani</span></div><div class=\"ssmrv-faculty-badges\"><span class=\"ssmrv-badge-desig\">Assistant Professor</span><span class=\"ssmrv-badge-dept\">Economics (B.A.)</span></div><div class=\"ssmrv-dept-prof-actions\"><span class=\"ssmrv-dept-prof-cta\">👤 View Full Profile</span><a href=\"https://nmkrv.edu.in/humanities/economics/\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"ssmrv-dept-visit-btn\" onclick=\"event.stopPropagation();\">🌐 Visit Website Page ↗</a></div><div class=\"ssmrv-dept-prof-meta\"><div class=\"ssmrv-dept-prof-row\"><strong>Qualifications:</strong> M.A., NET, KSET, Ph.D.</div><div class=\"ssmrv-dept-prof-row\"><strong>Experience:</strong> Senior Faculty &amp; Research Advisor in Economics</div><div class=\"ssmrv-dept-prof-row\"><strong>Expertise:</strong> Micro &amp; Macro Economics, Development Economics, Indian Economy &amp; Rural Development</div><div class=\"ssmrv-dept-prof-row ssmrv-dept-prof-comm\"><strong>Role:</strong> Coordinator — Unnat Bharat Abhiyan (UBA) | Member — Research Advisory Committee</div></div></div><div class=\"ssmrv-dept-profile-item\" data-profile-id=\"dr-shiva-kumar-s-m\" title=\"Click to view full profile of Dr. Shiva Kumar S. M.\"><div class=\"ssmrv-dept-prof-header\"><span class=\"ssmrv-dept-prof-name\">Dr. Shiva Kumar S. M.</span></div><div class=\"ssmrv-faculty-badges\"><span class=\"ssmrv-badge-desig\">Assistant Professor</span><span class=\"ssmrv-badge-dept\">Economics (B.A.)</span></div><div class=\"ssmrv-dept-prof-actions\"><span class=\"ssmrv-dept-prof-cta\">👤 View Full Profile</span><a href=\"https://nmkrv.edu.in/humanities/economics/\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"ssmrv-dept-visit-btn\" onclick=\"event.stopPropagation();\">🌐 Visit Website Page ↗</a></div><div class=\"ssmrv-dept-prof-meta\"><div class=\"ssmrv-dept-prof-row\"><strong>Qualifications:</strong> M.A., Ph.D., NET, KSET</div><div class=\"ssmrv-dept-prof-row\"><strong>Experience:</strong> Teaching &amp; Research Experience in Economics</div><div class=\"ssmrv-dept-prof-row\"><strong>Expertise:</strong> Monetary Economics, International Economics, Public Finance &amp; Indian Financial System</div><div class=\"ssmrv-dept-prof-row ssmrv-dept-prof-comm\"><strong>Role:</strong> Department of Economics</div></div></div><div class=\"ssmrv-dept-profile-item\" data-profile-id=\"ms-shruthi-c\" title=\"Click to view full profile of Ms. Shruthi C.\"><div class=\"ssmrv-dept-prof-header\"><span class=\"ssmrv-dept-prof-name\">Ms. Shruthi C.</span></div><div class=\"ssmrv-faculty-badges\"><span class=\"ssmrv-badge-desig\">Assistant Professor</span><span class=\"ssmrv-badge-dept\">Economics (B.A.)</span></div><div class=\"ssmrv-dept-prof-actions\"><span class=\"ssmrv-dept-prof-cta\">👤 View Full Profile</span><a href=\"https://nmkrv.edu.in/humanities/economics/\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"ssmrv-dept-visit-btn\" onclick=\"event.stopPropagation();\">🌐 Visit Website Page ↗</a></div><div class=\"ssmrv-dept-prof-meta\"><div class=\"ssmrv-dept-prof-row\"><strong>Qualifications:</strong> M.A. Economics</div><div class=\"ssmrv-dept-prof-row\"><strong>Experience:</strong> Teaching Experience in Undergraduate Economics</div><div class=\"ssmrv-dept-prof-row\"><strong>Expertise:</strong> Economic Doctrines, Microeconomic Analysis &amp; Indian Economy</div><div class=\"ssmrv-dept-prof-row ssmrv-dept-prof-comm\"><strong>Role:</strong> Department of Economics</div></div></div><div class=\"ssmrv-dept-profile-item\" data-profile-id=\"ms-ashwini-s-history\" title=\"Click to view full profile of Ms. Ashwini S.\"><div class=\"ssmrv-dept-prof-header\"><span class=\"ssmrv-dept-prof-name\">Ms. Ashwini S.</span></div><div class=\"ssmrv-faculty-badges\"><span class=\"ssmrv-badge-desig\">Assistant Professor</span><span class=\"ssmrv-badge-dept\">History (B.A.)</span></div><div class=\"ssmrv-dept-prof-actions\"><span class=\"ssmrv-dept-prof-cta\">👤 View Full Profile</span><a href=\"https://nmkrv.edu.in/humanities/history/\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"ssmrv-dept-visit-btn\" onclick=\"event.stopPropagation();\">🌐 Visit Website Page ↗</a></div><div class=\"ssmrv-dept-prof-meta\"><div class=\"ssmrv-dept-prof-row\"><strong>Qualifications:</strong> M.A. History</div><div class=\"ssmrv-dept-prof-row\"><strong>Experience:</strong> Teaching, Examination &amp; Student Welfare Leadership</div><div class=\"ssmrv-dept-prof-row\"><strong>Expertise:</strong> History of Ancient, Medieval &amp; Modern India, Archaeology &amp; Heritage Studies</div><div class=\"ssmrv-dept-prof-row ssmrv-dept-prof-comm\"><strong>Role:</strong> Co-Convenor — GRC | Member — Exam Core Team, Anti-Ragging Cell, ICC &amp; UBA</div></div></div><div class=\"ssmrv-dept-profile-item\" data-profile-id=\"mrs-sowmya-b\" title=\"Click to view full profile of Mrs. Sowmya B.\"><div class=\"ssmrv-dept-prof-header\"><span class=\"ssmrv-dept-prof-name\">Mrs. Sowmya B.</span></div><div class=\"ssmrv-faculty-badges\"><span class=\"ssmrv-badge-desig\">Assistant Professor</span><span class=\"ssmrv-badge-dept\">Sociology (B.A.)</span></div><div class=\"ssmrv-dept-prof-actions\"><span class=\"ssmrv-dept-prof-cta\">👤 View Full Profile</span><a href=\"https://nmkrv.edu.in/humanities/sociology/\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"ssmrv-dept-visit-btn\" onclick=\"event.stopPropagation();\">🌐 Visit Website Page ↗</a></div><div class=\"ssmrv-dept-prof-meta\"><div class=\"ssmrv-dept-prof-row\"><strong>Qualifications:</strong> M.A., B.Ed.</div><div class=\"ssmrv-dept-prof-row\"><strong>Experience:</strong> Teaching &amp; Social Outreach Experience in Sociology</div><div class=\"ssmrv-dept-prof-row\"><strong>Expertise:</strong> Indian Society, Social Institutions, Rural Sociology &amp; Gender Studies</div><div class=\"ssmrv-dept-prof-row ssmrv-dept-prof-comm\"><strong>Role:</strong> Member — Anti-Ragging Cell &amp; UBA Executive Committee</div></div></div><div class=\"ssmrv-dept-profile-item\" data-profile-id=\"mrs-gayathri-g\" title=\"Click to view full profile of Mrs. Gayathri G.\"><div class=\"ssmrv-dept-prof-header\"><span class=\"ssmrv-dept-prof-name\">Mrs. Gayathri G.</span></div><div class=\"ssmrv-faculty-badges\"><span class=\"ssmrv-badge-desig\">Assistant Professor</span><span class=\"ssmrv-badge-dept\">Sociology (B.A.)</span></div><div class=\"ssmrv-dept-prof-actions\"><span class=\"ssmrv-dept-prof-cta\">👤 View Full Profile</span><a href=\"https://nmkrv.edu.in/humanities/sociology/\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"ssmrv-dept-visit-btn\" onclick=\"event.stopPropagation();\">🌐 Visit Website Page ↗</a></div><div class=\"ssmrv-dept-prof-meta\"><div class=\"ssmrv-dept-prof-row\"><strong>Qualifications:</strong> M.A., B.Ed.</div><div class=\"ssmrv-dept-prof-row\"><strong>Experience:</strong> Teaching Experience in Sociology</div><div class=\"ssmrv-dept-prof-row\"><strong>Expertise:</strong> Sociological Theories, Social Research Methods &amp; Cultural Studies</div><div class=\"ssmrv-dept-prof-row ssmrv-dept-prof-comm\"><strong>Role:</strong> Department of Sociology</div></div></div><div class=\"ssmrv-dept-profile-item\" data-profile-id=\"dr-megha-dhadoti\" title=\"Click to view full profile of Dr. Megha Dhadoti\"><div class=\"ssmrv-dept-prof-header\"><span class=\"ssmrv-dept-prof-name\">Dr. Megha Dhadoti</span></div><div class=\"ssmrv-faculty-badges\"><span class=\"ssmrv-badge-desig\">Assistant Professor</span><span class=\"ssmrv-badge-dept\">Sociology (B.A.)</span></div><div class=\"ssmrv-dept-prof-actions\"><span class=\"ssmrv-dept-prof-cta\">👤 View Full Profile</span><a href=\"https://nmkrv.edu.in/humanities/sociology/\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"ssmrv-dept-visit-btn\" onclick=\"event.stopPropagation();\">🌐 Visit Website Page ↗</a></div><div class=\"ssmrv-dept-prof-meta\"><div class=\"ssmrv-dept-prof-row\"><strong>Qualifications:</strong> M.A., Ph.D., KSET, NET</div><div class=\"ssmrv-dept-prof-row\"><strong>Experience:</strong> Teaching, Research &amp; Quality Assurance Experience in Sociology</div><div class=\"ssmrv-dept-prof-row\"><strong>Expertise:</strong> Sociology of Development, Gender Studies, Urban Sociology &amp; Social Research</div><div class=\"ssmrv-dept-prof-row ssmrv-dept-prof-comm\"><strong>Role:</strong> Member — IQAC, Innovation Cell &amp; Social Media Cell | Research Faculty</div></div></div><div class=\"ssmrv-dept-profile-item\" data-profile-id=\"dr-suman-n\" title=\"Click to view full profile of Dr. Suman N.\"><div class=\"ssmrv-dept-prof-header\"><span class=\"ssmrv-dept-prof-name\">Dr. Suman N.</span></div><div class=\"ssmrv-faculty-badges\"><span class=\"ssmrv-badge-desig\">Assistant Professor</span><span class=\"ssmrv-badge-dept\">Psychology (B.A. &amp; B.Sc.)</span></div><div class=\"ssmrv-dept-prof-actions\"><span class=\"ssmrv-dept-prof-cta\">👤 View Full Profile</span><a href=\"https://nmkrv.edu.in/humanities/physiology/\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"ssmrv-dept-visit-btn\" onclick=\"event.stopPropagation();\">🌐 Visit Website Page ↗</a></div><div class=\"ssmrv-dept-prof-meta\"><div class=\"ssmrv-dept-prof-row\"><strong>Qualifications:</strong> M.Sc., Ph.D.</div><div class=\"ssmrv-dept-prof-row\"><strong>Experience:</strong> Senior Faculty &amp; Research Supervisor in Psychology</div><div class=\"ssmrv-dept-prof-row\"><strong>Expertise:</strong> Basic Psychological Processes, Developmental, Abnormal &amp; Clinical Psychology</div><div class=\"ssmrv-dept-prof-row ssmrv-dept-prof-comm\"><strong>Role:</strong> Convenor — Grievance Redressal Committee (GRC) | Member — ICC</div></div></div><div class=\"ssmrv-dept-profile-item\" data-profile-id=\"dr-asha-h\" title=\"Click to view full profile of Dr. Asha H.\"><div class=\"ssmrv-dept-prof-header\"><span class=\"ssmrv-dept-prof-name\">Dr. Asha H.</span></div><div class=\"ssmrv-faculty-badges\"><span class=\"ssmrv-badge-desig\">Assistant Professor</span><span class=\"ssmrv-badge-dept\">Psychology (B.A. &amp; B.Sc.)</span></div><div class=\"ssmrv-dept-prof-actions\"><span class=\"ssmrv-dept-prof-cta\">👤 View Full Profile</span><a href=\"https://nmkrv.edu.in/humanities/physiology/\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"ssmrv-dept-visit-btn\" onclick=\"event.stopPropagation();\">🌐 Visit Website Page ↗</a></div><div class=\"ssmrv-dept-prof-meta\"><div class=\"ssmrv-dept-prof-row\"><strong>Qualifications:</strong> M.Sc., Ph.D., NET, SLET, PGDHRM</div><div class=\"ssmrv-dept-prof-row\"><strong>Experience:</strong> Teaching &amp; Research Experience in Psychology and HR</div><div class=\"ssmrv-dept-prof-row\"><strong>Expertise:</strong> Industrial and Organisational Psychology, Social Psychology &amp; Counselling</div><div class=\"ssmrv-dept-prof-row ssmrv-dept-prof-comm\"><strong>Role:</strong> Research Faculty — Psychology</div></div></div><div class=\"ssmrv-dept-profile-item\" data-profile-id=\"mrs-roopashree-b-r\" title=\"Click to view full profile of Mrs. Roopashree B. R.\"><div class=\"ssmrv-dept-prof-header\"><span class=\"ssmrv-dept-prof-name\">Mrs. Roopashree B. R.</span></div><div class=\"ssmrv-faculty-badges\"><span class=\"ssmrv-badge-desig\">Assistant Professor</span><span class=\"ssmrv-badge-dept\">Psychology (B.A. &amp; B.Sc.)</span></div><div class=\"ssmrv-dept-prof-actions\"><span class=\"ssmrv-dept-prof-cta\">👤 View Full Profile</span><a href=\"https://nmkrv.edu.in/humanities/physiology/\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"ssmrv-dept-visit-btn\" onclick=\"event.stopPropagation();\">🌐 Visit Website Page ↗</a></div><div class=\"ssmrv-dept-prof-meta\"><div class=\"ssmrv-dept-prof-row\"><strong>Qualifications:</strong> M.Sc. Psychology</div><div class=\"ssmrv-dept-prof-row\"><strong>Experience:</strong> Teaching Experience in Psychology</div><div class=\"ssmrv-dept-prof-row\"><strong>Expertise:</strong> Developmental Psychology, Experimental Psychology &amp; Behavioural Assessment</div><div class=\"ssmrv-dept-prof-row ssmrv-dept-prof-comm\"><strong>Role:</strong> Department of Psychology</div></div></div><div class=\"ssmrv-dept-profile-item\" data-profile-id=\"dr-mamatha-j\" title=\"Click to view full profile of Dr. Mamatha J.\"><div class=\"ssmrv-dept-prof-header\"><span class=\"ssmrv-dept-prof-name\">Dr. Mamatha J.</span></div><div class=\"ssmrv-faculty-badges\"><span class=\"ssmrv-badge-desig\">Assistant Professor</span><span class=\"ssmrv-badge-dept\">Psychology (B.A. &amp; B.Sc.)</span></div><div class=\"ssmrv-dept-prof-actions\"><span class=\"ssmrv-dept-prof-cta\">👤 View Full Profile</span><a href=\"https://nmkrv.edu.in/humanities/physiology/\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"ssmrv-dept-visit-btn\" onclick=\"event.stopPropagation();\">🌐 Visit Website Page ↗</a></div><div class=\"ssmrv-dept-prof-meta\"><div class=\"ssmrv-dept-prof-row\"><strong>Qualifications:</strong> M.A., SLET, Ph.D.</div><div class=\"ssmrv-dept-prof-row\"><strong>Experience:</strong> Teaching &amp; Research Experience in Psychology</div><div class=\"ssmrv-dept-prof-row\"><strong>Expertise:</strong> Abnormal Psychology, Social Psychology &amp; Mental Health</div><div class=\"ssmrv-dept-prof-row ssmrv-dept-prof-comm\"><strong>Role:</strong> Member — Research Advisory Committee | Department of Psychology</div></div></div><div class=\"ssmrv-dept-profile-item\" data-profile-id=\"mrs-akhila-v-bhatta\" title=\"Click to view full profile of Mrs. Akhila V. Bhatta\"><div class=\"ssmrv-dept-prof-header\"><span class=\"ssmrv-dept-prof-name\">Mrs. Akhila V. Bhatta</span></div><div class=\"ssmrv-faculty-badges\"><span class=\"ssmrv-badge-desig\">Lecturer</span><span class=\"ssmrv-badge-dept\">Psychology (B.A. &amp; B.Sc.)</span></div><div class=\"ssmrv-dept-prof-actions\"><span class=\"ssmrv-dept-prof-cta\">👤 View Full Profile</span><a href=\"https://nmkrv.edu.in/humanities/physiology/\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"ssmrv-dept-visit-btn\" onclick=\"event.stopPropagation();\">🌐 Visit Website Page ↗</a></div><div class=\"ssmrv-dept-prof-meta\"><div class=\"ssmrv-dept-prof-row\"><strong>Qualifications:</strong> M.A. Psychology</div><div class=\"ssmrv-dept-prof-row\"><strong>Experience:</strong> Teaching &amp; Cultural Music Club Coordination</div><div class=\"ssmrv-dept-prof-row\"><strong>Expertise:</strong> General Psychology, Counselling &amp; Classical/Contemporary Vocal Music</div><div class=\"ssmrv-dept-prof-row ssmrv-dept-prof-comm\"><strong>Role:</strong> Coordinator — Ninaada Music Club</div></div></div><div class=\"ssmrv-dept-profile-item\" data-profile-id=\"ms-veena-k\" title=\"Click to view full profile of Ms. Veena K.\"><div class=\"ssmrv-dept-prof-header\"><span class=\"ssmrv-dept-prof-name\">Ms. Veena K.</span></div><div class=\"ssmrv-faculty-badges\"><span class=\"ssmrv-badge-desig\">Assistant Professor</span><span class=\"ssmrv-badge-dept\">Psychology (B.A. &amp; B.Sc.)</span></div><div class=\"ssmrv-dept-prof-actions\"><span class=\"ssmrv-dept-prof-cta\">👤 View Full Profile</span><a href=\"https://nmkrv.edu.in/psychology-forum/\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"ssmrv-dept-visit-btn\" onclick=\"event.stopPropagation();\">🌐 Visit Website Page ↗</a></div><div class=\"ssmrv-dept-prof-meta\"><div class=\"ssmrv-dept-prof-row\"><strong>Qualifications:</strong> M.Sc. Psychology</div><div class=\"ssmrv-dept-prof-row\"><strong>Experience:</strong> Teaching &amp; Student Wellness Coordination</div><div class=\"ssmrv-dept-prof-row\"><strong>Expertise:</strong> Psychological Assessment, Emotional Well-being &amp; Counselling</div><div class=\"ssmrv-dept-prof-row ssmrv-dept-prof-comm\"><strong>Role:</strong> Coordinator — Psychology Forum</div></div></div></div>",
    "buttons": [
      {
        "text": "👤 Ms. Sandya S. C.",
        "action": "profile:ms-sandya-s-c"
      },
      {
        "text": "👤 Ms. Shwetha P. B.",
        "action": "profile:ms-shwetha-p-b"
      },
      {
        "text": "👤 Ms. Akshatha A. G.",
        "action": "profile:ms-akshatha-a-g"
      },
      {
        "text": "👤 Ms. Megha S.",
        "action": "profile:ms-megha-s"
      },
      {
        "text": "👤 Mr. Mohanmurthy A.",
        "action": "profile:mr-mohanmurthy-a"
      },
      {
        "text": "👤 Mr. Revanth D. V.",
        "action": "profile:mr-revanth-d-v"
      },
      {
        "text": "👤 Dr. Mahanthesh B. Havani",
        "action": "profile:dr-mahanthesh-b-havani"
      },
      {
        "text": "👤 Dr. Shiva Kumar S. M.",
        "action": "profile:dr-shiva-kumar-s-m"
      },
      {
        "text": "👤 Ms. Shruthi C.",
        "action": "profile:ms-shruthi-c"
      },
      {
        "text": "👤 Ms. Ashwini S.",
        "action": "profile:ms-ashwini-s-history"
      },
      {
        "text": "👤 Mrs. Sowmya B.",
        "action": "profile:mrs-sowmya-b"
      },
      {
        "text": "👤 Mrs. Gayathri G.",
        "action": "profile:mrs-gayathri-g"
      },
      {
        "text": "👤 Dr. Megha Dhadoti",
        "action": "profile:dr-megha-dhadoti"
      },
      {
        "text": "👤 Dr. Suman N.",
        "action": "profile:dr-suman-n"
      },
      {
        "text": "👤 Dr. Asha H.",
        "action": "profile:dr-asha-h"
      },
      {
        "text": "👤 Mrs. Roopashree B. R.",
        "action": "profile:mrs-roopashree-b-r"
      },
      {
        "text": "👤 Dr. Mamatha J.",
        "action": "profile:dr-mamatha-j"
      },
      {
        "text": "👤 Mrs. Akhila V. Bhatta",
        "action": "profile:mrs-akhila-v-bhatta"
      },
      {
        "text": "👤 Ms. Veena K.",
        "action": "profile:ms-veena-k"
      },
      {
        "text": "🌐 Visit Department Webpage ↗",
        "url": "https://nmkrv.edu.in/humanities/"
      },
      {
        "text": "👨‍🏫 All Faculty Departments",
        "action": "flow:faculty"
      }
    ]
  },
  "profile_ms-sandya-s-c": {
    "id": "profile_ms-sandya-s-c",
    "pageUrl": "https://nmkrv.edu.in/humanities/journalism/",
    "message": "<div class=\"ssmrv-faculty-card is-full-profile\"><div class=\"ssmrv-faculty-name\">Ms. Sandya S. C.</div><div class=\"ssmrv-faculty-badges\"><span class=\"ssmrv-badge-desig\">Assistant Professor</span><span class=\"ssmrv-badge-dept\">Journalism &amp; Mass Communication (B.A. &amp; M.A.)</span></div><div class=\"ssmrv-fac-actions\"><a href=\"https://nmkrv.edu.in/humanities/journalism/\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"ssmrv-visit-website-btn\">🌐 Visit Official Website Page ↗</a></div><div class=\"ssmrv-faculty-meta\"><div class=\"ssmrv-fac-row\"><span class=\"ssmrv-fac-label\">🎓 Qualifications</span><span class=\"ssmrv-fac-val\">M.A. Journalism &amp; Mass Communication</span></div><div class=\"ssmrv-fac-row\"><span class=\"ssmrv-fac-label\">⏳ Experience</span><span class=\"ssmrv-fac-val\">Teaching Experience in Print, Broadcast &amp; Digital Journalism</span></div><div class=\"ssmrv-fac-row\"><span class=\"ssmrv-fac-label\">🔬 Areas of Expertise</span><span class=\"ssmrv-fac-val\">Reporting &amp; Editing, Broadcast Journalism, Media Laws &amp; Corporate Communication</span></div><div class=\"ssmrv-fac-row\"><span class=\"ssmrv-fac-label\">🛡️ Committee / Role</span><span class=\"ssmrv-fac-val ssmrv-fac-role-val\">Department of Journalism &amp; Mass Communication</span></div><div class=\"ssmrv-fac-section\"><div class=\"ssmrv-fac-sec-title\">📖 Profile Overview</div><div class=\"ssmrv-fac-sec-text\">Ms. Sandya S. C. serves as Assistant Professor in the Department of Journalism and Mass Communication at NMKRV College.</div></div><div class=\"ssmrv-fac-section\"><div class=\"ssmrv-fac-sec-title\">🏆 Key Highlights</div><div class=\"ssmrv-fac-sec-text\">Faculty Member, Department of Journalism &amp; Mass Communication.</div></div><div class=\"ssmrv-fac-contact\"><div>📧 <a href=\"mailto:nmkrv@rvei.edu.in\">nmkrv@rvei.edu.in</a></div><div>📞 <a href=\"tel:08069018900\">080-69018900</a></div></div></div></div>",
    "buttons": [
      {
        "text": "🌐 Visit Official Website Page ↗",
        "url": "https://nmkrv.edu.in/humanities/journalism/",
        "isPrimary": true
      },
      {
        "text": "🏛️ 🎭 Humanities & Media Studies",
        "action": "flow:faculty_humanities"
      },
      {
        "text": "👨‍🏫 All Faculty Departments",
        "action": "flow:faculty"
      }
    ]
  },
  "profile_ms-shwetha-p-b": {
    "id": "profile_ms-shwetha-p-b",
    "pageUrl": "https://nmkrv.edu.in/humanities/journalism/",
    "message": "<div class=\"ssmrv-faculty-card is-full-profile\"><div class=\"ssmrv-faculty-name\">Ms. Shwetha P. B.</div><div class=\"ssmrv-faculty-badges\"><span class=\"ssmrv-badge-desig\">Assistant Professor</span><span class=\"ssmrv-badge-dept\">Journalism &amp; Mass Communication (B.A. &amp; M.A.)</span></div><div class=\"ssmrv-fac-actions\"><a href=\"https://nmkrv.edu.in/humanities/journalism/\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"ssmrv-visit-website-btn\">🌐 Visit Official Website Page ↗</a></div><div class=\"ssmrv-faculty-meta\"><div class=\"ssmrv-fac-row\"><span class=\"ssmrv-fac-label\">🎓 Qualifications</span><span class=\"ssmrv-fac-val\">M.A. Journalism &amp; Mass Communication</span></div><div class=\"ssmrv-fac-row\"><span class=\"ssmrv-fac-label\">⏳ Experience</span><span class=\"ssmrv-fac-val\">Teaching Experience in Media &amp; Communication Studies</span></div><div class=\"ssmrv-fac-row\"><span class=\"ssmrv-fac-label\">🔬 Areas of Expertise</span><span class=\"ssmrv-fac-val\">Digital Media, Development Communication, Public Relations &amp; Advertising</span></div><div class=\"ssmrv-fac-row\"><span class=\"ssmrv-fac-label\">🛡️ Committee / Role</span><span class=\"ssmrv-fac-val ssmrv-fac-role-val\">Department of Journalism &amp; Mass Communication</span></div><div class=\"ssmrv-fac-section\"><div class=\"ssmrv-fac-sec-title\">📖 Profile Overview</div><div class=\"ssmrv-fac-sec-text\">Ms. Shwetha P. B. serves as Assistant Professor in the Department of Journalism and Mass Communication at NMKRV College.</div></div><div class=\"ssmrv-fac-section\"><div class=\"ssmrv-fac-sec-title\">🏆 Key Highlights</div><div class=\"ssmrv-fac-sec-text\">Faculty Member, Department of Journalism &amp; Mass Communication.</div></div><div class=\"ssmrv-fac-contact\"><div>📧 <a href=\"mailto:nmkrv@rvei.edu.in\">nmkrv@rvei.edu.in</a></div><div>📞 <a href=\"tel:08069018900\">080-69018900</a></div></div></div></div>",
    "buttons": [
      {
        "text": "🌐 Visit Official Website Page ↗",
        "url": "https://nmkrv.edu.in/humanities/journalism/",
        "isPrimary": true
      },
      {
        "text": "🏛️ 🎭 Humanities & Media Studies",
        "action": "flow:faculty_humanities"
      },
      {
        "text": "👨‍🏫 All Faculty Departments",
        "action": "flow:faculty"
      }
    ]
  },
  "profile_ms-akshatha-a-g": {
    "id": "profile_ms-akshatha-a-g",
    "pageUrl": "https://nmkrv.edu.in/cultural-activities/",
    "message": "<div class=\"ssmrv-faculty-card is-full-profile\"><div class=\"ssmrv-faculty-name\">Ms. Akshatha A. G.</div><div class=\"ssmrv-faculty-badges\"><span class=\"ssmrv-badge-desig\">Assistant Professor &amp; Cultural Coordinator</span><span class=\"ssmrv-badge-dept\">Journalism &amp; Cultural Activities</span></div><div class=\"ssmrv-fac-actions\"><a href=\"https://nmkrv.edu.in/cultural-activities/\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"ssmrv-visit-website-btn\">🌐 Visit Official Website Page ↗</a></div><div class=\"ssmrv-faculty-meta\"><div class=\"ssmrv-fac-row\"><span class=\"ssmrv-fac-label\">🎓 Qualifications</span><span class=\"ssmrv-fac-val\">M.A. Journalism &amp; Mass Communication</span></div><div class=\"ssmrv-fac-row\"><span class=\"ssmrv-fac-label\">⏳ Experience</span><span class=\"ssmrv-fac-val\">Teaching, Media Production &amp; Cultural Event Coordination</span></div><div class=\"ssmrv-fac-row\"><span class=\"ssmrv-fac-label\">🔬 Areas of Expertise</span><span class=\"ssmrv-fac-val\">Cultural Choreography (Nupur Dance Club), Media Production &amp; Event Management</span></div><div class=\"ssmrv-fac-row\"><span class=\"ssmrv-fac-label\">🛡️ Committee / Role</span><span class=\"ssmrv-fac-val ssmrv-fac-role-val\">Coordinator — Nupur Dance Club &amp; Media Cell</span></div><div class=\"ssmrv-fac-section\"><div class=\"ssmrv-fac-sec-title\">📖 Profile Overview</div><div class=\"ssmrv-fac-sec-text\">Ms. Akshatha A. G. is an Assistant Professor in the Department of Journalism and serves as Coordinator of Cultural Activities, Nupur Dance Troupe, and Media Cell at NMKRV College.</div></div><div class=\"ssmrv-fac-section\"><div class=\"ssmrv-fac-sec-title\">🏆 Key Highlights</div><div class=\"ssmrv-fac-sec-text\">Coordinator — Nupur Dance Troupe &amp; Media Production Cell.</div></div><div class=\"ssmrv-fac-contact\"><div>📧 <a href=\"mailto:akshathaag.nmkrv@rvei.edu.in\">akshathaag.nmkrv@rvei.edu.in</a></div><div>📞 <a href=\"tel:08069018900\">080-69018900</a></div></div></div></div>",
    "buttons": [
      {
        "text": "🌐 Visit Official Website Page ↗",
        "url": "https://nmkrv.edu.in/cultural-activities/",
        "isPrimary": true
      },
      {
        "text": "🏛️ 🎭 Humanities & Media Studies",
        "action": "flow:faculty_humanities"
      },
      {
        "text": "👨‍🏫 All Faculty Departments",
        "action": "flow:faculty"
      }
    ]
  },
  "profile_ms-megha-s": {
    "id": "profile_ms-megha-s",
    "pageUrl": "https://nmkrv.edu.in/cultural-activities/",
    "message": "<div class=\"ssmrv-faculty-card is-full-profile\"><div class=\"ssmrv-faculty-name\">Ms. Megha S.</div><div class=\"ssmrv-faculty-badges\"><span class=\"ssmrv-badge-desig\">Assistant Professor</span><span class=\"ssmrv-badge-dept\">Journalism &amp; Cultural Activities</span></div><div class=\"ssmrv-fac-actions\"><a href=\"https://nmkrv.edu.in/cultural-activities/\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"ssmrv-visit-website-btn\">🌐 Visit Official Website Page ↗</a></div><div class=\"ssmrv-faculty-meta\"><div class=\"ssmrv-fac-row\"><span class=\"ssmrv-fac-label\">🎓 Qualifications</span><span class=\"ssmrv-fac-val\">M.A. Journalism &amp; Mass Communication</span></div><div class=\"ssmrv-fac-row\"><span class=\"ssmrv-fac-label\">⏳ Experience</span><span class=\"ssmrv-fac-val\">Media Production &amp; Cultural Activities Coordination</span></div><div class=\"ssmrv-fac-row\"><span class=\"ssmrv-fac-label\">🔬 Areas of Expertise</span><span class=\"ssmrv-fac-val\">Audio-Visual Production, Theatre/Cultural Coordination &amp; Content Writing</span></div><div class=\"ssmrv-fac-row\"><span class=\"ssmrv-fac-label\">🛡️ Committee / Role</span><span class=\"ssmrv-fac-val ssmrv-fac-role-val\">Coordinator — Cultural Activities &amp; Media Cell</span></div><div class=\"ssmrv-fac-section\"><div class=\"ssmrv-fac-sec-title\">📖 Profile Overview</div><div class=\"ssmrv-fac-sec-text\">Ms. Megha S. is an Assistant Professor in the Department of Journalism and serves as a Coordinator for Cultural Activities and Media Production at NMKRV College.</div></div><div class=\"ssmrv-fac-section\"><div class=\"ssmrv-fac-sec-title\">🏆 Key Highlights</div><div class=\"ssmrv-fac-sec-text\">Coordinator — Cultural Activities &amp; Media Production Cell.</div></div><div class=\"ssmrv-fac-contact\"><div>📧 <a href=\"mailto:meghas.nmkrv@rvei.edu.in\">meghas.nmkrv@rvei.edu.in</a></div><div>📞 <a href=\"tel:08069018900\">080-69018900</a></div></div></div></div>",
    "buttons": [
      {
        "text": "🌐 Visit Official Website Page ↗",
        "url": "https://nmkrv.edu.in/cultural-activities/",
        "isPrimary": true
      },
      {
        "text": "🏛️ 🎭 Humanities & Media Studies",
        "action": "flow:faculty_humanities"
      },
      {
        "text": "👨‍🏫 All Faculty Departments",
        "action": "flow:faculty"
      }
    ]
  },
  "profile_mr-mohanmurthy-a": {
    "id": "profile_mr-mohanmurthy-a",
    "pageUrl": "https://nmkrv.edu.in/faculty/",
    "message": "<div class=\"ssmrv-faculty-card is-full-profile\"><div class=\"ssmrv-faculty-name\">Mr. Mohanmurthy A.</div><div class=\"ssmrv-faculty-badges\"><span class=\"ssmrv-badge-desig\">Coordinator — Media Cell</span><span class=\"ssmrv-badge-dept\">Media &amp; Communication Cell</span></div><div class=\"ssmrv-fac-actions\"><a href=\"https://nmkrv.edu.in/faculty/\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"ssmrv-visit-website-btn\">🌐 Visit Official Website Page ↗</a></div><div class=\"ssmrv-faculty-meta\"><div class=\"ssmrv-fac-row\"><span class=\"ssmrv-fac-label\">🎓 Qualifications</span><span class=\"ssmrv-fac-val\">Media &amp; Visual Communication</span></div><div class=\"ssmrv-fac-row\"><span class=\"ssmrv-fac-label\">⏳ Experience</span><span class=\"ssmrv-fac-val\">Media Production &amp; E-Content Development Coordinator</span></div><div class=\"ssmrv-fac-row\"><span class=\"ssmrv-fac-label\">🔬 Areas of Expertise</span><span class=\"ssmrv-fac-val\">Photography, Video Editing, Audio Production &amp; E-Content Development</span></div><div class=\"ssmrv-fac-row\"><span class=\"ssmrv-fac-label\">🛡️ Committee / Role</span><span class=\"ssmrv-fac-val ssmrv-fac-role-val\">Coordinator — Media Cell</span></div><div class=\"ssmrv-fac-section\"><div class=\"ssmrv-fac-sec-title\">📖 Profile Overview</div><div class=\"ssmrv-fac-sec-text\">Mr. Mohanmurthy A. serves as Coordinator in the Media &amp; E-Content Production Cell at NMKRV College.</div></div><div class=\"ssmrv-fac-section\"><div class=\"ssmrv-fac-sec-title\">🏆 Key Highlights</div><div class=\"ssmrv-fac-sec-text\">Coordinator — Media &amp; E-Content Production Cell.</div></div><div class=\"ssmrv-fac-contact\"><div>📧 <a href=\"mailto:mohanmurthy.nmkrv@rvei.edu.in\">mohanmurthy.nmkrv@rvei.edu.in</a></div><div>📞 <a href=\"tel:08069018900\">080-69018900</a></div></div></div></div>",
    "buttons": [
      {
        "text": "🌐 Visit Official Website Page ↗",
        "url": "https://nmkrv.edu.in/faculty/",
        "isPrimary": true
      },
      {
        "text": "🏛️ 🎭 Humanities & Media Studies",
        "action": "flow:faculty_humanities"
      },
      {
        "text": "👨‍🏫 All Faculty Departments",
        "action": "flow:faculty"
      }
    ]
  },
  "profile_mr-revanth-d-v": {
    "id": "profile_mr-revanth-d-v",
    "pageUrl": "https://nmkrv.edu.in/faculty/",
    "message": "<div class=\"ssmrv-faculty-card is-full-profile\"><div class=\"ssmrv-faculty-name\">Mr. Revanth D. V.</div><div class=\"ssmrv-faculty-badges\"><span class=\"ssmrv-badge-desig\">Media &amp; E-Content Specialist</span><span class=\"ssmrv-badge-dept\">Media &amp; Communication Cell</span></div><div class=\"ssmrv-fac-actions\"><a href=\"https://nmkrv.edu.in/faculty/\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"ssmrv-visit-website-btn\">🌐 Visit Official Website Page ↗</a></div><div class=\"ssmrv-faculty-meta\"><div class=\"ssmrv-fac-row\"><span class=\"ssmrv-fac-label\">🎓 Qualifications</span><span class=\"ssmrv-fac-val\">Media Production &amp; Documentary Filmmaking</span></div><div class=\"ssmrv-fac-row\"><span class=\"ssmrv-fac-label\">⏳ Experience</span><span class=\"ssmrv-fac-val\">Studio Production, Documentary Filmmaking &amp; Event Management</span></div><div class=\"ssmrv-fac-row\"><span class=\"ssmrv-fac-label\">🔬 Areas of Expertise</span><span class=\"ssmrv-fac-val\">Video &amp; Audio Production, Photography, Script Writing, Documentary Film Making &amp; E-Content Development</span></div><div class=\"ssmrv-fac-row\"><span class=\"ssmrv-fac-label\">🛡️ Committee / Role</span><span class=\"ssmrv-fac-val ssmrv-fac-role-val\">Media &amp; E-Content Production Cell</span></div><div class=\"ssmrv-fac-section\"><div class=\"ssmrv-fac-sec-title\">📖 Profile Overview</div><div class=\"ssmrv-fac-sec-text\">Mr. Revanth D. V. leads studio media production, documentary filmmaking, script writing, and e-content development at NMKRV College.</div></div><div class=\"ssmrv-fac-section\"><div class=\"ssmrv-fac-sec-title\">🏆 Key Highlights</div><div class=\"ssmrv-fac-sec-text\">Expert in Video/Audio Production, Documentary Filmmaking &amp; E-Content Development.</div></div><div class=\"ssmrv-fac-contact\"><div>📧 <a href=\"mailto:nmkrv@rvei.edu.in\">nmkrv@rvei.edu.in</a></div><div>📞 <a href=\"tel:08069018900\">080-69018900</a></div></div></div></div>",
    "buttons": [
      {
        "text": "🌐 Visit Official Website Page ↗",
        "url": "https://nmkrv.edu.in/faculty/",
        "isPrimary": true
      },
      {
        "text": "🏛️ 🎭 Humanities & Media Studies",
        "action": "flow:faculty_humanities"
      },
      {
        "text": "👨‍🏫 All Faculty Departments",
        "action": "flow:faculty"
      }
    ]
  },
  "profile_dr-mahanthesh-b-havani": {
    "id": "profile_dr-mahanthesh-b-havani",
    "pageUrl": "https://nmkrv.edu.in/humanities/economics/",
    "message": "<div class=\"ssmrv-faculty-card is-full-profile\"><div class=\"ssmrv-faculty-name\">Dr. Mahanthesh B. Havani</div><div class=\"ssmrv-faculty-badges\"><span class=\"ssmrv-badge-desig\">Assistant Professor</span><span class=\"ssmrv-badge-dept\">Economics (B.A.)</span></div><div class=\"ssmrv-fac-actions\"><a href=\"https://nmkrv.edu.in/humanities/economics/\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"ssmrv-visit-website-btn\">🌐 Visit Official Website Page ↗</a></div><div class=\"ssmrv-faculty-meta\"><div class=\"ssmrv-fac-row\"><span class=\"ssmrv-fac-label\">🎓 Qualifications</span><span class=\"ssmrv-fac-val\">M.A., NET, KSET, Ph.D.</span></div><div class=\"ssmrv-fac-row\"><span class=\"ssmrv-fac-label\">⏳ Experience</span><span class=\"ssmrv-fac-val\">Senior Faculty &amp; Research Advisor in Economics</span></div><div class=\"ssmrv-fac-row\"><span class=\"ssmrv-fac-label\">🔬 Areas of Expertise</span><span class=\"ssmrv-fac-val\">Micro &amp; Macro Economics, Development Economics, Indian Economy &amp; Rural Development</span></div><div class=\"ssmrv-fac-row\"><span class=\"ssmrv-fac-label\">🛡️ Committee / Role</span><span class=\"ssmrv-fac-val ssmrv-fac-role-val\">Coordinator — Unnat Bharat Abhiyan (UBA) | Member — Research Advisory Committee</span></div><div class=\"ssmrv-fac-section\"><div class=\"ssmrv-fac-sec-title\">📖 Profile Overview</div><div class=\"ssmrv-fac-sec-text\">Dr. Mahanthesh B. Havani is an Assistant Professor in the Department of Economics, Member of the Research Advisory Committee, and Coordinator of the Unnat Bharat Abhiyan (UBA) Cell at NMKRV College.</div></div><div class=\"ssmrv-fac-section\"><div class=\"ssmrv-fac-sec-title\">🏆 Key Highlights</div><div class=\"ssmrv-fac-sec-text\">Coordinator — Unnat Bharat Abhiyan (UBA) &amp; Member of Research Advisory Committee.</div></div><div class=\"ssmrv-fac-contact\"><div>📧 <a href=\"mailto:mahantheshbh.nmkrv@rvei.edu.in\">mahantheshbh.nmkrv@rvei.edu.in</a></div><div>📞 <a href=\"tel:08069018900\">080-69018900</a></div></div></div></div>",
    "buttons": [
      {
        "text": "🌐 Visit Official Website Page ↗",
        "url": "https://nmkrv.edu.in/humanities/economics/",
        "isPrimary": true
      },
      {
        "text": "🏛️ 🎭 Humanities & Media Studies",
        "action": "flow:faculty_humanities"
      },
      {
        "text": "👨‍🏫 All Faculty Departments",
        "action": "flow:faculty"
      }
    ]
  },
  "profile_dr-shiva-kumar-s-m": {
    "id": "profile_dr-shiva-kumar-s-m",
    "pageUrl": "https://nmkrv.edu.in/humanities/economics/",
    "message": "<div class=\"ssmrv-faculty-card is-full-profile\"><div class=\"ssmrv-faculty-name\">Dr. Shiva Kumar S. M.</div><div class=\"ssmrv-faculty-badges\"><span class=\"ssmrv-badge-desig\">Assistant Professor</span><span class=\"ssmrv-badge-dept\">Economics (B.A.)</span></div><div class=\"ssmrv-fac-actions\"><a href=\"https://nmkrv.edu.in/humanities/economics/\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"ssmrv-visit-website-btn\">🌐 Visit Official Website Page ↗</a></div><div class=\"ssmrv-faculty-meta\"><div class=\"ssmrv-fac-row\"><span class=\"ssmrv-fac-label\">🎓 Qualifications</span><span class=\"ssmrv-fac-val\">M.A., Ph.D., NET, KSET</span></div><div class=\"ssmrv-fac-row\"><span class=\"ssmrv-fac-label\">⏳ Experience</span><span class=\"ssmrv-fac-val\">Teaching &amp; Research Experience in Economics</span></div><div class=\"ssmrv-fac-row\"><span class=\"ssmrv-fac-label\">🔬 Areas of Expertise</span><span class=\"ssmrv-fac-val\">Monetary Economics, International Economics, Public Finance &amp; Indian Financial System</span></div><div class=\"ssmrv-fac-row\"><span class=\"ssmrv-fac-label\">🛡️ Committee / Role</span><span class=\"ssmrv-fac-val ssmrv-fac-role-val\">Department of Economics</span></div><div class=\"ssmrv-fac-section\"><div class=\"ssmrv-fac-sec-title\">📖 Profile Overview</div><div class=\"ssmrv-fac-sec-text\">Dr. Shiva Kumar S. M. serves as Assistant Professor in the Department of Economics at NMKRV College.</div></div><div class=\"ssmrv-fac-section\"><div class=\"ssmrv-fac-sec-title\">🏆 Key Highlights</div><div class=\"ssmrv-fac-sec-text\">Ph.D., NET &amp; KSET Qualified Faculty in Economics.</div></div><div class=\"ssmrv-fac-contact\"><div>📧 <a href=\"mailto:nmkrv@rvei.edu.in\">nmkrv@rvei.edu.in</a></div><div>📞 <a href=\"tel:08069018900\">080-69018900</a></div></div></div></div>",
    "buttons": [
      {
        "text": "🌐 Visit Official Website Page ↗",
        "url": "https://nmkrv.edu.in/humanities/economics/",
        "isPrimary": true
      },
      {
        "text": "🏛️ 🎭 Humanities & Media Studies",
        "action": "flow:faculty_humanities"
      },
      {
        "text": "👨‍🏫 All Faculty Departments",
        "action": "flow:faculty"
      }
    ]
  },
  "profile_ms-shruthi-c": {
    "id": "profile_ms-shruthi-c",
    "pageUrl": "https://nmkrv.edu.in/humanities/economics/",
    "message": "<div class=\"ssmrv-faculty-card is-full-profile\"><div class=\"ssmrv-faculty-name\">Ms. Shruthi C.</div><div class=\"ssmrv-faculty-badges\"><span class=\"ssmrv-badge-desig\">Assistant Professor</span><span class=\"ssmrv-badge-dept\">Economics (B.A.)</span></div><div class=\"ssmrv-fac-actions\"><a href=\"https://nmkrv.edu.in/humanities/economics/\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"ssmrv-visit-website-btn\">🌐 Visit Official Website Page ↗</a></div><div class=\"ssmrv-faculty-meta\"><div class=\"ssmrv-fac-row\"><span class=\"ssmrv-fac-label\">🎓 Qualifications</span><span class=\"ssmrv-fac-val\">M.A. Economics</span></div><div class=\"ssmrv-fac-row\"><span class=\"ssmrv-fac-label\">⏳ Experience</span><span class=\"ssmrv-fac-val\">Teaching Experience in Undergraduate Economics</span></div><div class=\"ssmrv-fac-row\"><span class=\"ssmrv-fac-label\">🔬 Areas of Expertise</span><span class=\"ssmrv-fac-val\">Economic Doctrines, Microeconomic Analysis &amp; Indian Economy</span></div><div class=\"ssmrv-fac-row\"><span class=\"ssmrv-fac-label\">🛡️ Committee / Role</span><span class=\"ssmrv-fac-val ssmrv-fac-role-val\">Department of Economics</span></div><div class=\"ssmrv-fac-section\"><div class=\"ssmrv-fac-sec-title\">📖 Profile Overview</div><div class=\"ssmrv-fac-sec-text\">Ms. Shruthi C. serves as Assistant Professor in the Department of Economics at NMKRV College.</div></div><div class=\"ssmrv-fac-section\"><div class=\"ssmrv-fac-sec-title\">🏆 Key Highlights</div><div class=\"ssmrv-fac-sec-text\">Faculty Member, Department of Economics.</div></div><div class=\"ssmrv-fac-contact\"><div>📧 <a href=\"mailto:nmkrv@rvei.edu.in\">nmkrv@rvei.edu.in</a></div><div>📞 <a href=\"tel:08069018900\">080-69018900</a></div></div></div></div>",
    "buttons": [
      {
        "text": "🌐 Visit Official Website Page ↗",
        "url": "https://nmkrv.edu.in/humanities/economics/",
        "isPrimary": true
      },
      {
        "text": "🏛️ 🎭 Humanities & Media Studies",
        "action": "flow:faculty_humanities"
      },
      {
        "text": "👨‍🏫 All Faculty Departments",
        "action": "flow:faculty"
      }
    ]
  },
  "profile_ms-ashwini-s-history": {
    "id": "profile_ms-ashwini-s-history",
    "pageUrl": "https://nmkrv.edu.in/humanities/history/",
    "message": "<div class=\"ssmrv-faculty-card is-full-profile\"><div class=\"ssmrv-faculty-name\">Ms. Ashwini S.</div><div class=\"ssmrv-faculty-badges\"><span class=\"ssmrv-badge-desig\">Assistant Professor</span><span class=\"ssmrv-badge-dept\">History (B.A.)</span></div><div class=\"ssmrv-fac-actions\"><a href=\"https://nmkrv.edu.in/humanities/history/\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"ssmrv-visit-website-btn\">🌐 Visit Official Website Page ↗</a></div><div class=\"ssmrv-faculty-meta\"><div class=\"ssmrv-fac-row\"><span class=\"ssmrv-fac-label\">🎓 Qualifications</span><span class=\"ssmrv-fac-val\">M.A. History</span></div><div class=\"ssmrv-fac-row\"><span class=\"ssmrv-fac-label\">⏳ Experience</span><span class=\"ssmrv-fac-val\">Teaching, Examination &amp; Student Welfare Leadership</span></div><div class=\"ssmrv-fac-row\"><span class=\"ssmrv-fac-label\">🔬 Areas of Expertise</span><span class=\"ssmrv-fac-val\">History of Ancient, Medieval &amp; Modern India, Archaeology &amp; Heritage Studies</span></div><div class=\"ssmrv-fac-row\"><span class=\"ssmrv-fac-label\">🛡️ Committee / Role</span><span class=\"ssmrv-fac-val ssmrv-fac-role-val\">Co-Convenor — GRC | Member — Exam Core Team, Anti-Ragging Cell, ICC &amp; UBA</span></div><div class=\"ssmrv-fac-section\"><div class=\"ssmrv-fac-sec-title\">📖 Profile Overview</div><div class=\"ssmrv-fac-sec-text\">Ms. Ashwini S. is an Assistant Professor in the Department of History. She serves on the Examination Core Team (COE), as Co-Convenor of the Grievance Redressal Committee (GRC), and as a Member of the Anti-Ragging Cell, Internal Complaints Committee (ICC), and UBA Executive Committee.</div></div><div class=\"ssmrv-fac-section\"><div class=\"ssmrv-fac-sec-title\">🏆 Key Highlights</div><div class=\"ssmrv-fac-sec-text\">Co-Convenor — Grievance Redressal Committee | Exam Core Team | Anti-Ragging &amp; ICC Member.</div></div><div class=\"ssmrv-fac-contact\"><div>📧 <a href=\"mailto:ashwinis.nmkrv@rvei.edu.in\">ashwinis.nmkrv@rvei.edu.in</a></div><div>📞 <a href=\"tel:08069018900\">080-69018900</a></div></div></div></div>",
    "buttons": [
      {
        "text": "🌐 Visit Official Website Page ↗",
        "url": "https://nmkrv.edu.in/humanities/history/",
        "isPrimary": true
      },
      {
        "text": "🏛️ 🎭 Humanities & Media Studies",
        "action": "flow:faculty_humanities"
      },
      {
        "text": "👨‍🏫 All Faculty Departments",
        "action": "flow:faculty"
      }
    ]
  },
  "profile_mrs-sowmya-b": {
    "id": "profile_mrs-sowmya-b",
    "pageUrl": "https://nmkrv.edu.in/humanities/sociology/",
    "message": "<div class=\"ssmrv-faculty-card is-full-profile\"><div class=\"ssmrv-faculty-name\">Mrs. Sowmya B.</div><div class=\"ssmrv-faculty-badges\"><span class=\"ssmrv-badge-desig\">Assistant Professor</span><span class=\"ssmrv-badge-dept\">Sociology (B.A.)</span></div><div class=\"ssmrv-fac-actions\"><a href=\"https://nmkrv.edu.in/humanities/sociology/\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"ssmrv-visit-website-btn\">🌐 Visit Official Website Page ↗</a></div><div class=\"ssmrv-faculty-meta\"><div class=\"ssmrv-fac-row\"><span class=\"ssmrv-fac-label\">🎓 Qualifications</span><span class=\"ssmrv-fac-val\">M.A., B.Ed.</span></div><div class=\"ssmrv-fac-row\"><span class=\"ssmrv-fac-label\">⏳ Experience</span><span class=\"ssmrv-fac-val\">Teaching &amp; Social Outreach Experience in Sociology</span></div><div class=\"ssmrv-fac-row\"><span class=\"ssmrv-fac-label\">🔬 Areas of Expertise</span><span class=\"ssmrv-fac-val\">Indian Society, Social Institutions, Rural Sociology &amp; Gender Studies</span></div><div class=\"ssmrv-fac-row\"><span class=\"ssmrv-fac-label\">🛡️ Committee / Role</span><span class=\"ssmrv-fac-val ssmrv-fac-role-val\">Member — Anti-Ragging Cell &amp; UBA Executive Committee</span></div><div class=\"ssmrv-fac-section\"><div class=\"ssmrv-fac-sec-title\">📖 Profile Overview</div><div class=\"ssmrv-fac-sec-text\">Mrs. Sowmya B. is an Assistant Professor in the Department of Sociology and serves as a Member of the Anti-Ragging Cell and the Unnat Bharat Abhiyan (UBA) Executive Committee.</div></div><div class=\"ssmrv-fac-section\"><div class=\"ssmrv-fac-sec-title\">🏆 Key Highlights</div><div class=\"ssmrv-fac-sec-text\">Member — Anti-Ragging Cell &amp; Unnat Bharat Abhiyan (UBA) Executive Committee.</div></div><div class=\"ssmrv-fac-contact\"><div>📧 <a href=\"mailto:sowmyab.nmkrv@rvei.edu.in\">sowmyab.nmkrv@rvei.edu.in</a></div><div>📞 <a href=\"tel:08069018900\">080-69018900</a></div></div></div></div>",
    "buttons": [
      {
        "text": "🌐 Visit Official Website Page ↗",
        "url": "https://nmkrv.edu.in/humanities/sociology/",
        "isPrimary": true
      },
      {
        "text": "🏛️ 🎭 Humanities & Media Studies",
        "action": "flow:faculty_humanities"
      },
      {
        "text": "👨‍🏫 All Faculty Departments",
        "action": "flow:faculty"
      }
    ]
  },
  "profile_mrs-gayathri-g": {
    "id": "profile_mrs-gayathri-g",
    "pageUrl": "https://nmkrv.edu.in/humanities/sociology/",
    "message": "<div class=\"ssmrv-faculty-card is-full-profile\"><div class=\"ssmrv-faculty-name\">Mrs. Gayathri G.</div><div class=\"ssmrv-faculty-badges\"><span class=\"ssmrv-badge-desig\">Assistant Professor</span><span class=\"ssmrv-badge-dept\">Sociology (B.A.)</span></div><div class=\"ssmrv-fac-actions\"><a href=\"https://nmkrv.edu.in/humanities/sociology/\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"ssmrv-visit-website-btn\">🌐 Visit Official Website Page ↗</a></div><div class=\"ssmrv-faculty-meta\"><div class=\"ssmrv-fac-row\"><span class=\"ssmrv-fac-label\">🎓 Qualifications</span><span class=\"ssmrv-fac-val\">M.A., B.Ed.</span></div><div class=\"ssmrv-fac-row\"><span class=\"ssmrv-fac-label\">⏳ Experience</span><span class=\"ssmrv-fac-val\">Teaching Experience in Sociology</span></div><div class=\"ssmrv-fac-row\"><span class=\"ssmrv-fac-label\">🔬 Areas of Expertise</span><span class=\"ssmrv-fac-val\">Sociological Theories, Social Research Methods &amp; Cultural Studies</span></div><div class=\"ssmrv-fac-row\"><span class=\"ssmrv-fac-label\">🛡️ Committee / Role</span><span class=\"ssmrv-fac-val ssmrv-fac-role-val\">Department of Sociology</span></div><div class=\"ssmrv-fac-section\"><div class=\"ssmrv-fac-sec-title\">📖 Profile Overview</div><div class=\"ssmrv-fac-sec-text\">Mrs. Gayathri G. serves as Assistant Professor in the Department of Sociology at NMKRV College.</div></div><div class=\"ssmrv-fac-section\"><div class=\"ssmrv-fac-sec-title\">🏆 Key Highlights</div><div class=\"ssmrv-fac-sec-text\">Faculty Member, Department of Sociology.</div></div><div class=\"ssmrv-fac-contact\"><div>📧 <a href=\"mailto:nmkrv@rvei.edu.in\">nmkrv@rvei.edu.in</a></div><div>📞 <a href=\"tel:08069018900\">080-69018900</a></div></div></div></div>",
    "buttons": [
      {
        "text": "🌐 Visit Official Website Page ↗",
        "url": "https://nmkrv.edu.in/humanities/sociology/",
        "isPrimary": true
      },
      {
        "text": "🏛️ 🎭 Humanities & Media Studies",
        "action": "flow:faculty_humanities"
      },
      {
        "text": "👨‍🏫 All Faculty Departments",
        "action": "flow:faculty"
      }
    ]
  },
  "profile_dr-megha-dhadoti": {
    "id": "profile_dr-megha-dhadoti",
    "pageUrl": "https://nmkrv.edu.in/humanities/sociology/",
    "message": "<div class=\"ssmrv-faculty-card is-full-profile\"><div class=\"ssmrv-faculty-name\">Dr. Megha Dhadoti</div><div class=\"ssmrv-faculty-badges\"><span class=\"ssmrv-badge-desig\">Assistant Professor</span><span class=\"ssmrv-badge-dept\">Sociology (B.A.)</span></div><div class=\"ssmrv-fac-actions\"><a href=\"https://nmkrv.edu.in/humanities/sociology/\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"ssmrv-visit-website-btn\">🌐 Visit Official Website Page ↗</a></div><div class=\"ssmrv-faculty-meta\"><div class=\"ssmrv-fac-row\"><span class=\"ssmrv-fac-label\">🎓 Qualifications</span><span class=\"ssmrv-fac-val\">M.A., Ph.D., KSET, NET</span></div><div class=\"ssmrv-fac-row\"><span class=\"ssmrv-fac-label\">⏳ Experience</span><span class=\"ssmrv-fac-val\">Teaching, Research &amp; Quality Assurance Experience in Sociology</span></div><div class=\"ssmrv-fac-row\"><span class=\"ssmrv-fac-label\">🔬 Areas of Expertise</span><span class=\"ssmrv-fac-val\">Sociology of Development, Gender Studies, Urban Sociology &amp; Social Research</span></div><div class=\"ssmrv-fac-row\"><span class=\"ssmrv-fac-label\">🛡️ Committee / Role</span><span class=\"ssmrv-fac-val ssmrv-fac-role-val\">Member — IQAC, Innovation Cell &amp; Social Media Cell | Research Faculty</span></div><div class=\"ssmrv-fac-section\"><div class=\"ssmrv-fac-sec-title\">📖 Profile Overview</div><div class=\"ssmrv-fac-sec-text\">Dr. Megha Dhadoti is an Assistant Professor and recognized Research Faculty member in the Department of Sociology. She serves as a Member of the Internal Quality Assurance Cell (IQAC), Innovation Cell, and Social Media Cell.</div></div><div class=\"ssmrv-fac-section\"><div class=\"ssmrv-fac-sec-title\">🏆 Key Highlights</div><div class=\"ssmrv-fac-sec-text\">Member — IQAC, Innovation Cell &amp; Social Media Cell | Recognized Research Faculty.</div></div><div class=\"ssmrv-fac-contact\"><div>📧 <a href=\"mailto:nmkrv@rvei.edu.in\">nmkrv@rvei.edu.in</a></div><div>📞 <a href=\"tel:08069018900\">080-69018900</a></div></div></div></div>",
    "buttons": [
      {
        "text": "🌐 Visit Official Website Page ↗",
        "url": "https://nmkrv.edu.in/humanities/sociology/",
        "isPrimary": true
      },
      {
        "text": "🏛️ 🎭 Humanities & Media Studies",
        "action": "flow:faculty_humanities"
      },
      {
        "text": "👨‍🏫 All Faculty Departments",
        "action": "flow:faculty"
      }
    ]
  },
  "profile_dr-suman-n": {
    "id": "profile_dr-suman-n",
    "pageUrl": "https://nmkrv.edu.in/humanities/physiology/",
    "message": "<div class=\"ssmrv-faculty-card is-full-profile\"><div class=\"ssmrv-faculty-name\">Dr. Suman N.</div><div class=\"ssmrv-faculty-badges\"><span class=\"ssmrv-badge-desig\">Assistant Professor</span><span class=\"ssmrv-badge-dept\">Psychology (B.A. &amp; B.Sc.)</span></div><div class=\"ssmrv-fac-actions\"><a href=\"https://nmkrv.edu.in/humanities/physiology/\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"ssmrv-visit-website-btn\">🌐 Visit Official Website Page ↗</a></div><div class=\"ssmrv-faculty-meta\"><div class=\"ssmrv-fac-row\"><span class=\"ssmrv-fac-label\">🎓 Qualifications</span><span class=\"ssmrv-fac-val\">M.Sc., Ph.D.</span></div><div class=\"ssmrv-fac-row\"><span class=\"ssmrv-fac-label\">⏳ Experience</span><span class=\"ssmrv-fac-val\">Senior Faculty &amp; Research Supervisor in Psychology</span></div><div class=\"ssmrv-fac-row\"><span class=\"ssmrv-fac-label\">🔬 Areas of Expertise</span><span class=\"ssmrv-fac-val\">Basic Psychological Processes, Developmental, Abnormal &amp; Clinical Psychology</span></div><div class=\"ssmrv-fac-row\"><span class=\"ssmrv-fac-label\">🛡️ Committee / Role</span><span class=\"ssmrv-fac-val ssmrv-fac-role-val\">Convenor — Grievance Redressal Committee (GRC) | Member — ICC</span></div><div class=\"ssmrv-fac-section\"><div class=\"ssmrv-fac-sec-title\">📖 Profile Overview</div><div class=\"ssmrv-fac-sec-text\">Dr. Suman N. is an Assistant Professor and recognized Research Faculty member in the Department of Psychology. She serves as Convenor of the Grievance Redressal Committee (GRC) and Member of the Internal Complaints Committee (ICC).</div></div><div class=\"ssmrv-fac-section\"><div class=\"ssmrv-fac-sec-title\">🏆 Key Highlights</div><div class=\"ssmrv-fac-sec-text\">Convenor — Grievance Redressal Committee (GRC) | ICC Member | Research Faculty.</div></div><div class=\"ssmrv-fac-contact\"><div>📧 <a href=\"mailto:nmkrv@rvei.edu.in\">nmkrv@rvei.edu.in</a></div><div>📞 <a href=\"tel:08069018900\">080-69018900</a></div></div></div></div>",
    "buttons": [
      {
        "text": "🌐 Visit Official Website Page ↗",
        "url": "https://nmkrv.edu.in/humanities/physiology/",
        "isPrimary": true
      },
      {
        "text": "🏛️ 🎭 Humanities & Media Studies",
        "action": "flow:faculty_humanities"
      },
      {
        "text": "👨‍🏫 All Faculty Departments",
        "action": "flow:faculty"
      }
    ]
  },
  "profile_dr-asha-h": {
    "id": "profile_dr-asha-h",
    "pageUrl": "https://nmkrv.edu.in/humanities/physiology/",
    "message": "<div class=\"ssmrv-faculty-card is-full-profile\"><div class=\"ssmrv-faculty-name\">Dr. Asha H.</div><div class=\"ssmrv-faculty-badges\"><span class=\"ssmrv-badge-desig\">Assistant Professor</span><span class=\"ssmrv-badge-dept\">Psychology (B.A. &amp; B.Sc.)</span></div><div class=\"ssmrv-fac-actions\"><a href=\"https://nmkrv.edu.in/humanities/physiology/\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"ssmrv-visit-website-btn\">🌐 Visit Official Website Page ↗</a></div><div class=\"ssmrv-faculty-meta\"><div class=\"ssmrv-fac-row\"><span class=\"ssmrv-fac-label\">🎓 Qualifications</span><span class=\"ssmrv-fac-val\">M.Sc., Ph.D., NET, SLET, PGDHRM</span></div><div class=\"ssmrv-fac-row\"><span class=\"ssmrv-fac-label\">⏳ Experience</span><span class=\"ssmrv-fac-val\">Teaching &amp; Research Experience in Psychology and HR</span></div><div class=\"ssmrv-fac-row\"><span class=\"ssmrv-fac-label\">🔬 Areas of Expertise</span><span class=\"ssmrv-fac-val\">Industrial and Organisational Psychology, Social Psychology &amp; Counselling</span></div><div class=\"ssmrv-fac-row\"><span class=\"ssmrv-fac-label\">🛡️ Committee / Role</span><span class=\"ssmrv-fac-val ssmrv-fac-role-val\">Research Faculty — Psychology</span></div><div class=\"ssmrv-fac-section\"><div class=\"ssmrv-fac-sec-title\">📖 Profile Overview</div><div class=\"ssmrv-fac-sec-text\">Dr. Asha H. is an Assistant Professor and recognized Research Faculty member in the Department of Psychology at NMKRV College.</div></div><div class=\"ssmrv-fac-section\"><div class=\"ssmrv-fac-sec-title\">🏆 Key Highlights</div><div class=\"ssmrv-fac-sec-text\">Ph.D., NET, SLET &amp; PGDHRM Qualified Research Faculty in Psychology.</div></div><div class=\"ssmrv-fac-contact\"><div>📧 <a href=\"mailto:nmkrv@rvei.edu.in\">nmkrv@rvei.edu.in</a></div><div>📞 <a href=\"tel:08069018900\">080-69018900</a></div></div></div></div>",
    "buttons": [
      {
        "text": "🌐 Visit Official Website Page ↗",
        "url": "https://nmkrv.edu.in/humanities/physiology/",
        "isPrimary": true
      },
      {
        "text": "🏛️ 🎭 Humanities & Media Studies",
        "action": "flow:faculty_humanities"
      },
      {
        "text": "👨‍🏫 All Faculty Departments",
        "action": "flow:faculty"
      }
    ]
  },
  "profile_mrs-roopashree-b-r": {
    "id": "profile_mrs-roopashree-b-r",
    "pageUrl": "https://nmkrv.edu.in/humanities/physiology/",
    "message": "<div class=\"ssmrv-faculty-card is-full-profile\"><div class=\"ssmrv-faculty-name\">Mrs. Roopashree B. R.</div><div class=\"ssmrv-faculty-badges\"><span class=\"ssmrv-badge-desig\">Assistant Professor</span><span class=\"ssmrv-badge-dept\">Psychology (B.A. &amp; B.Sc.)</span></div><div class=\"ssmrv-fac-actions\"><a href=\"https://nmkrv.edu.in/humanities/physiology/\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"ssmrv-visit-website-btn\">🌐 Visit Official Website Page ↗</a></div><div class=\"ssmrv-faculty-meta\"><div class=\"ssmrv-fac-row\"><span class=\"ssmrv-fac-label\">🎓 Qualifications</span><span class=\"ssmrv-fac-val\">M.Sc. Psychology</span></div><div class=\"ssmrv-fac-row\"><span class=\"ssmrv-fac-label\">⏳ Experience</span><span class=\"ssmrv-fac-val\">Teaching Experience in Psychology</span></div><div class=\"ssmrv-fac-row\"><span class=\"ssmrv-fac-label\">🔬 Areas of Expertise</span><span class=\"ssmrv-fac-val\">Developmental Psychology, Experimental Psychology &amp; Behavioural Assessment</span></div><div class=\"ssmrv-fac-row\"><span class=\"ssmrv-fac-label\">🛡️ Committee / Role</span><span class=\"ssmrv-fac-val ssmrv-fac-role-val\">Department of Psychology</span></div><div class=\"ssmrv-fac-section\"><div class=\"ssmrv-fac-sec-title\">📖 Profile Overview</div><div class=\"ssmrv-fac-sec-text\">Mrs. Roopashree B. R. serves as Assistant Professor in the Department of Psychology at NMKRV College.</div></div><div class=\"ssmrv-fac-section\"><div class=\"ssmrv-fac-sec-title\">🏆 Key Highlights</div><div class=\"ssmrv-fac-sec-text\">Faculty Member, Department of Psychology.</div></div><div class=\"ssmrv-fac-contact\"><div>📧 <a href=\"mailto:nmkrv@rvei.edu.in\">nmkrv@rvei.edu.in</a></div><div>📞 <a href=\"tel:08069018900\">080-69018900</a></div></div></div></div>",
    "buttons": [
      {
        "text": "🌐 Visit Official Website Page ↗",
        "url": "https://nmkrv.edu.in/humanities/physiology/",
        "isPrimary": true
      },
      {
        "text": "🏛️ 🎭 Humanities & Media Studies",
        "action": "flow:faculty_humanities"
      },
      {
        "text": "👨‍🏫 All Faculty Departments",
        "action": "flow:faculty"
      }
    ]
  },
  "profile_dr-mamatha-j": {
    "id": "profile_dr-mamatha-j",
    "pageUrl": "https://nmkrv.edu.in/humanities/physiology/",
    "message": "<div class=\"ssmrv-faculty-card is-full-profile\"><div class=\"ssmrv-faculty-name\">Dr. Mamatha J.</div><div class=\"ssmrv-faculty-badges\"><span class=\"ssmrv-badge-desig\">Assistant Professor</span><span class=\"ssmrv-badge-dept\">Psychology (B.A. &amp; B.Sc.)</span></div><div class=\"ssmrv-fac-actions\"><a href=\"https://nmkrv.edu.in/humanities/physiology/\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"ssmrv-visit-website-btn\">🌐 Visit Official Website Page ↗</a></div><div class=\"ssmrv-faculty-meta\"><div class=\"ssmrv-fac-row\"><span class=\"ssmrv-fac-label\">🎓 Qualifications</span><span class=\"ssmrv-fac-val\">M.A., SLET, Ph.D.</span></div><div class=\"ssmrv-fac-row\"><span class=\"ssmrv-fac-label\">⏳ Experience</span><span class=\"ssmrv-fac-val\">Teaching &amp; Research Experience in Psychology</span></div><div class=\"ssmrv-fac-row\"><span class=\"ssmrv-fac-label\">🔬 Areas of Expertise</span><span class=\"ssmrv-fac-val\">Abnormal Psychology, Social Psychology &amp; Mental Health</span></div><div class=\"ssmrv-fac-row\"><span class=\"ssmrv-fac-label\">🛡️ Committee / Role</span><span class=\"ssmrv-fac-val ssmrv-fac-role-val\">Member — Research Advisory Committee | Department of Psychology</span></div><div class=\"ssmrv-fac-section\"><div class=\"ssmrv-fac-sec-title\">📖 Profile Overview</div><div class=\"ssmrv-fac-sec-text\">Dr. Mamatha J. is an Assistant Professor in the Department of Psychology and serves as a Member of the Research Advisory Committee at NMKRV College.</div></div><div class=\"ssmrv-fac-section\"><div class=\"ssmrv-fac-sec-title\">🏆 Key Highlights</div><div class=\"ssmrv-fac-sec-text\">Member — Research Advisory Committee &amp; Recognized Research Faculty.</div></div><div class=\"ssmrv-fac-contact\"><div>📧 <a href=\"mailto:nmkrv@rvei.edu.in\">nmkrv@rvei.edu.in</a></div><div>📞 <a href=\"tel:08069018900\">080-69018900</a></div></div></div></div>",
    "buttons": [
      {
        "text": "🌐 Visit Official Website Page ↗",
        "url": "https://nmkrv.edu.in/humanities/physiology/",
        "isPrimary": true
      },
      {
        "text": "🏛️ 🎭 Humanities & Media Studies",
        "action": "flow:faculty_humanities"
      },
      {
        "text": "👨‍🏫 All Faculty Departments",
        "action": "flow:faculty"
      }
    ]
  },
  "profile_mrs-akhila-v-bhatta": {
    "id": "profile_mrs-akhila-v-bhatta",
    "pageUrl": "https://nmkrv.edu.in/humanities/physiology/",
    "message": "<div class=\"ssmrv-faculty-card is-full-profile\"><div class=\"ssmrv-faculty-name\">Mrs. Akhila V. Bhatta</div><div class=\"ssmrv-faculty-badges\"><span class=\"ssmrv-badge-desig\">Lecturer</span><span class=\"ssmrv-badge-dept\">Psychology (B.A. &amp; B.Sc.)</span></div><div class=\"ssmrv-fac-actions\"><a href=\"https://nmkrv.edu.in/humanities/physiology/\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"ssmrv-visit-website-btn\">🌐 Visit Official Website Page ↗</a></div><div class=\"ssmrv-faculty-meta\"><div class=\"ssmrv-fac-row\"><span class=\"ssmrv-fac-label\">🎓 Qualifications</span><span class=\"ssmrv-fac-val\">M.A. Psychology</span></div><div class=\"ssmrv-fac-row\"><span class=\"ssmrv-fac-label\">⏳ Experience</span><span class=\"ssmrv-fac-val\">Teaching &amp; Cultural Music Club Coordination</span></div><div class=\"ssmrv-fac-row\"><span class=\"ssmrv-fac-label\">🔬 Areas of Expertise</span><span class=\"ssmrv-fac-val\">General Psychology, Counselling &amp; Classical/Contemporary Vocal Music</span></div><div class=\"ssmrv-fac-row\"><span class=\"ssmrv-fac-label\">🛡️ Committee / Role</span><span class=\"ssmrv-fac-val ssmrv-fac-role-val\">Coordinator — Ninaada Music Club</span></div><div class=\"ssmrv-fac-section\"><div class=\"ssmrv-fac-sec-title\">📖 Profile Overview</div><div class=\"ssmrv-fac-sec-text\">Mrs. Akhila V. Bhatta serves in the Department of Psychology and is the Coordinator of Ninaada — The Official Music Club of NMKRV College.</div></div><div class=\"ssmrv-fac-section\"><div class=\"ssmrv-fac-sec-title\">🏆 Key Highlights</div><div class=\"ssmrv-fac-sec-text\">Coordinator — Ninaada (The Music Club).</div></div><div class=\"ssmrv-fac-contact\"><div>📧 <a href=\"mailto:akhilav.nmkrv@rvei.edu.in\">akhilav.nmkrv@rvei.edu.in</a></div><div>📞 <a href=\"tel:08069018900\">080-69018900</a></div></div></div></div>",
    "buttons": [
      {
        "text": "🌐 Visit Official Website Page ↗",
        "url": "https://nmkrv.edu.in/humanities/physiology/",
        "isPrimary": true
      },
      {
        "text": "🏛️ 🎭 Humanities & Media Studies",
        "action": "flow:faculty_humanities"
      },
      {
        "text": "👨‍🏫 All Faculty Departments",
        "action": "flow:faculty"
      }
    ]
  },
  "profile_ms-veena-k": {
    "id": "profile_ms-veena-k",
    "pageUrl": "https://nmkrv.edu.in/psychology-forum/",
    "message": "<div class=\"ssmrv-faculty-card is-full-profile\"><div class=\"ssmrv-faculty-name\">Ms. Veena K.</div><div class=\"ssmrv-faculty-badges\"><span class=\"ssmrv-badge-desig\">Assistant Professor</span><span class=\"ssmrv-badge-dept\">Psychology (B.A. &amp; B.Sc.)</span></div><div class=\"ssmrv-fac-actions\"><a href=\"https://nmkrv.edu.in/psychology-forum/\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"ssmrv-visit-website-btn\">🌐 Visit Official Website Page ↗</a></div><div class=\"ssmrv-faculty-meta\"><div class=\"ssmrv-fac-row\"><span class=\"ssmrv-fac-label\">🎓 Qualifications</span><span class=\"ssmrv-fac-val\">M.Sc. Psychology</span></div><div class=\"ssmrv-fac-row\"><span class=\"ssmrv-fac-label\">⏳ Experience</span><span class=\"ssmrv-fac-val\">Teaching &amp; Student Wellness Coordination</span></div><div class=\"ssmrv-fac-row\"><span class=\"ssmrv-fac-label\">🔬 Areas of Expertise</span><span class=\"ssmrv-fac-val\">Psychological Assessment, Emotional Well-being &amp; Counselling</span></div><div class=\"ssmrv-fac-row\"><span class=\"ssmrv-fac-label\">🛡️ Committee / Role</span><span class=\"ssmrv-fac-val ssmrv-fac-role-val\">Coordinator — Psychology Forum</span></div><div class=\"ssmrv-fac-section\"><div class=\"ssmrv-fac-sec-title\">📖 Profile Overview</div><div class=\"ssmrv-fac-sec-text\">Ms. Veena K. serves as Assistant Professor in the Department of Psychology and Coordinator of the Psychology Forum at NMKRV College.</div></div><div class=\"ssmrv-fac-section\"><div class=\"ssmrv-fac-sec-title\">🏆 Key Highlights</div><div class=\"ssmrv-fac-sec-text\">Coordinator — Psychology Forum.</div></div><div class=\"ssmrv-fac-contact\"><div>📧 <a href=\"mailto:veenak.nmkrv@rvei.edu.in\">veenak.nmkrv@rvei.edu.in</a></div><div>📞 <a href=\"tel:08069018900\">080-69018900</a></div></div></div></div>",
    "buttons": [
      {
        "text": "🌐 Visit Official Website Page ↗",
        "url": "https://nmkrv.edu.in/psychology-forum/",
        "isPrimary": true
      },
      {
        "text": "🏛️ 🎭 Humanities & Media Studies",
        "action": "flow:faculty_humanities"
      },
      {
        "text": "👨‍🏫 All Faculty Departments",
        "action": "flow:faculty"
      }
    ]
  },
  "faculty_languages_admin": {
    "id": "faculty_languages_admin",
    "pageUrl": "https://nmkrv.edu.in/language/",
    "message": "<div class=\"ssmrv-flow-heading\">🗣️ Languages, Placements, Library, NCC &amp; Sports</div><div class=\"ssmrv-flow-subheading\">English, Kannada, Hindi, Sanskrit, DISHA Placements, Library, NCC &amp; Sports — Select <b>View Full Profile</b> or <b>Visit Website Page ↗</b> on any card below:</div><div class=\"ssmrv-dept-profile-list\"><div class=\"ssmrv-dept-profile-item\" data-profile-id=\"dr-veena-devi-r-s\" title=\"Click to view full profile of Dr. Veena Devi R. S.\"><div class=\"ssmrv-dept-prof-header\"><span class=\"ssmrv-dept-prof-name\">Dr. Veena Devi R. S.</span></div><div class=\"ssmrv-faculty-badges\"><span class=\"ssmrv-badge-desig\">Assistant Professor</span><span class=\"ssmrv-badge-dept\">English &amp; Optional English</span></div><div class=\"ssmrv-dept-prof-actions\"><span class=\"ssmrv-dept-prof-cta\">👤 View Full Profile</span><a href=\"https://nmkrv.edu.in/language/english/\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"ssmrv-dept-visit-btn\" onclick=\"event.stopPropagation();\">🌐 Visit Website Page ↗</a></div><div class=\"ssmrv-dept-prof-meta\"><div class=\"ssmrv-dept-prof-row\"><strong>Qualifications:</strong> M.A., Ph.D.</div><div class=\"ssmrv-dept-prof-row\"><strong>Experience:</strong> Full-Time Faculty in English (Joined September 2022)</div><div class=\"ssmrv-dept-prof-row\"><strong>Expertise:</strong> British &amp; Indian English Literature, Literary Criticism, Gender Studies &amp; Communicative English</div><div class=\"ssmrv-dept-prof-row ssmrv-dept-prof-comm\"><strong>Role:</strong> Research Faculty — Department of English</div></div></div><div class=\"ssmrv-dept-profile-item\" data-profile-id=\"ms-mareena-joseph\" title=\"Click to view full profile of Ms. Mareena Joseph\"><div class=\"ssmrv-dept-prof-header\"><span class=\"ssmrv-dept-prof-name\">Ms. Mareena Joseph</span></div><div class=\"ssmrv-faculty-badges\"><span class=\"ssmrv-badge-desig\">Assistant Professor</span><span class=\"ssmrv-badge-dept\">English</span></div><div class=\"ssmrv-dept-prof-actions\"><span class=\"ssmrv-dept-prof-cta\">👤 View Full Profile</span><a href=\"https://nmkrv.edu.in/language-2/\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"ssmrv-dept-visit-btn\" onclick=\"event.stopPropagation();\">🌐 Visit Website Page ↗</a></div><div class=\"ssmrv-dept-prof-meta\"><div class=\"ssmrv-dept-prof-row\"><strong>Qualifications:</strong> M.A. English</div><div class=\"ssmrv-dept-prof-row\"><strong>Experience:</strong> Teaching Experience in English Language &amp; Literature</div><div class=\"ssmrv-dept-prof-row\"><strong>Expertise:</strong> English Literature, Communication Skills &amp; Academic Writing</div><div class=\"ssmrv-dept-prof-row ssmrv-dept-prof-comm\"><strong>Role:</strong> Department of English</div></div></div><div class=\"ssmrv-dept-profile-item\" data-profile-id=\"ms-parvathy-menon\" title=\"Click to view full profile of Ms. Parvathy Menon\"><div class=\"ssmrv-dept-prof-header\"><span class=\"ssmrv-dept-prof-name\">Ms. Parvathy Menon</span></div><div class=\"ssmrv-faculty-badges\"><span class=\"ssmrv-badge-desig\">Assistant Professor</span><span class=\"ssmrv-badge-dept\">English</span></div><div class=\"ssmrv-dept-prof-actions\"><span class=\"ssmrv-dept-prof-cta\">👤 View Full Profile</span><a href=\"https://nmkrv.edu.in/language-2/\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"ssmrv-dept-visit-btn\" onclick=\"event.stopPropagation();\">🌐 Visit Website Page ↗</a></div><div class=\"ssmrv-dept-prof-meta\"><div class=\"ssmrv-dept-prof-row\"><strong>Qualifications:</strong> M.A. English</div><div class=\"ssmrv-dept-prof-row\"><strong>Experience:</strong> Teaching Experience in English Language &amp; Literature</div><div class=\"ssmrv-dept-prof-row\"><strong>Expertise:</strong> Literary Studies, Postcolonial Literature &amp; Language Proficiency</div><div class=\"ssmrv-dept-prof-row ssmrv-dept-prof-comm\"><strong>Role:</strong> Department of English</div></div></div><div class=\"ssmrv-dept-profile-item\" data-profile-id=\"dr-sandhya-l-hegde\" title=\"Click to view full profile of Dr. Sandhya L. Hegde\"><div class=\"ssmrv-dept-prof-header\"><span class=\"ssmrv-dept-prof-name\">Dr. Sandhya L. Hegde</span></div><div class=\"ssmrv-faculty-badges\"><span class=\"ssmrv-badge-desig\">Assistant Professor</span><span class=\"ssmrv-badge-dept\">Kannada &amp; Optional Kannada</span></div><div class=\"ssmrv-dept-prof-actions\"><span class=\"ssmrv-dept-prof-cta\">👤 View Full Profile</span><a href=\"https://nmkrv.edu.in/language/kannada/\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"ssmrv-dept-visit-btn\" onclick=\"event.stopPropagation();\">🌐 Visit Website Page ↗</a></div><div class=\"ssmrv-dept-prof-meta\"><div class=\"ssmrv-dept-prof-row\"><strong>Qualifications:</strong> M.A., M.Phil., Ph.D., NET, SLET/KSET</div><div class=\"ssmrv-dept-prof-row\"><strong>Experience:</strong> Full-Time Faculty at NMKRV College (Joined July 2019)</div><div class=\"ssmrv-dept-prof-row\"><strong>Expertise:</strong> Classical &amp; Modern Kannada Literature, Cultural Studies, Folklore &amp; Literary Research</div><div class=\"ssmrv-dept-prof-row ssmrv-dept-prof-comm\"><strong>Role:</strong> Member — Research Advisory Committee | Department of Kannada</div></div></div><div class=\"ssmrv-dept-profile-item\" data-profile-id=\"prof-basavaraja-amarappa\" title=\"Click to view full profile of Prof. Basavaraja Amarappa\"><div class=\"ssmrv-dept-prof-header\"><span class=\"ssmrv-dept-prof-name\">Prof. Basavaraja Amarappa</span></div><div class=\"ssmrv-faculty-badges\"><span class=\"ssmrv-badge-desig\">Assistant Professor</span><span class=\"ssmrv-badge-dept\">Kannada &amp; Optional Kannada</span></div><div class=\"ssmrv-dept-prof-actions\"><span class=\"ssmrv-dept-prof-cta\">👤 View Full Profile</span><a href=\"https://nmkrv.edu.in/language/kannada/\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"ssmrv-dept-visit-btn\" onclick=\"event.stopPropagation();\">🌐 Visit Website Page ↗</a></div><div class=\"ssmrv-dept-prof-meta\"><div class=\"ssmrv-dept-prof-row\"><strong>Qualifications:</strong> M.A., NET, KSET</div><div class=\"ssmrv-dept-prof-row\"><strong>Experience:</strong> Senior Faculty in Kannada Language &amp; Literature</div><div class=\"ssmrv-dept-prof-row\"><strong>Expertise:</strong> Kannada Literature, Poetics, Cultural History &amp; Language Computing</div><div class=\"ssmrv-dept-prof-row ssmrv-dept-prof-comm\"><strong>Role:</strong> Member — SC/ST Committee | Department of Kannada</div></div></div><div class=\"ssmrv-dept-profile-item\" data-profile-id=\"mrs-leelavathi-p\" title=\"Click to view full profile of Mrs. Leelavathi P.\"><div class=\"ssmrv-dept-prof-header\"><span class=\"ssmrv-dept-prof-name\">Mrs. Leelavathi P.</span></div><div class=\"ssmrv-faculty-badges\"><span class=\"ssmrv-badge-desig\">Assistant Professor</span><span class=\"ssmrv-badge-dept\">Kannada &amp; Optional Kannada</span></div><div class=\"ssmrv-dept-prof-actions\"><span class=\"ssmrv-dept-prof-cta\">👤 View Full Profile</span><a href=\"https://nmkrv.edu.in/language/kannada/\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"ssmrv-dept-visit-btn\" onclick=\"event.stopPropagation();\">🌐 Visit Website Page ↗</a></div><div class=\"ssmrv-dept-prof-meta\"><div class=\"ssmrv-dept-prof-row\"><strong>Qualifications:</strong> M.A., B.Ed., M.Phil., NET</div><div class=\"ssmrv-dept-prof-row\"><strong>Experience:</strong> 15+ Years at NMKRV College (Joined July 2010)</div><div class=\"ssmrv-dept-prof-row\"><strong>Expertise:</strong> Kannada Literature, Grammar, Classical Texts &amp; Pedagogy</div><div class=\"ssmrv-dept-prof-row ssmrv-dept-prof-comm\"><strong>Role:</strong> Department of Kannada</div></div></div><div class=\"ssmrv-dept-profile-item\" data-profile-id=\"mrs-sumana-a-s\" title=\"Click to view full profile of Mrs. Sumana A. S.\"><div class=\"ssmrv-dept-prof-header\"><span class=\"ssmrv-dept-prof-name\">Mrs. Sumana A. S.</span></div><div class=\"ssmrv-faculty-badges\"><span class=\"ssmrv-badge-desig\">Assistant Professor</span><span class=\"ssmrv-badge-dept\">Kannada &amp; Optional Kannada</span></div><div class=\"ssmrv-dept-prof-actions\"><span class=\"ssmrv-dept-prof-cta\">👤 View Full Profile</span><a href=\"https://nmkrv.edu.in/language/kannada/\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"ssmrv-dept-visit-btn\" onclick=\"event.stopPropagation();\">🌐 Visit Website Page ↗</a></div><div class=\"ssmrv-dept-prof-meta\"><div class=\"ssmrv-dept-prof-row\"><strong>Qualifications:</strong> M.A. Kannada</div><div class=\"ssmrv-dept-prof-row\"><strong>Experience:</strong> Teaching &amp; Student Governance Committee Experience</div><div class=\"ssmrv-dept-prof-row\"><strong>Expertise:</strong> Kannada Literature &amp; Cultural Studies</div><div class=\"ssmrv-dept-prof-row ssmrv-dept-prof-comm\"><strong>Role:</strong> Member — IQAC, GRC &amp; ICC</div></div></div><div class=\"ssmrv-dept-profile-item\" data-profile-id=\"dr-seema-sharma\" title=\"Click to view full profile of Dr. Seema Sharma\"><div class=\"ssmrv-dept-prof-header\"><span class=\"ssmrv-dept-prof-name\">Dr. Seema Sharma</span></div><div class=\"ssmrv-faculty-badges\"><span class=\"ssmrv-badge-desig\">Head of the Department (HOD) — Hindi</span><span class=\"ssmrv-badge-dept\">Hindi</span></div><div class=\"ssmrv-dept-prof-actions\"><span class=\"ssmrv-dept-prof-cta\">👤 View Full Profile</span><a href=\"https://nmkrv.edu.in/language/hindi/\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"ssmrv-dept-visit-btn\" onclick=\"event.stopPropagation();\">🌐 Visit Website Page ↗</a></div><div class=\"ssmrv-dept-prof-meta\"><div class=\"ssmrv-dept-prof-row\"><strong>Qualifications:</strong> M.A., M.Phil., Ph.D., M.Ed.</div><div class=\"ssmrv-dept-prof-row\"><strong>Experience:</strong> Head of the Department of Hindi &amp; Research Faculty</div><div class=\"ssmrv-dept-prof-row\"><strong>Expertise:</strong> Classical &amp; Modern Hindi Literature, Translation Studies &amp; Poetry</div><div class=\"ssmrv-dept-prof-row ssmrv-dept-prof-comm\"><strong>Role:</strong> HoD — Department of Hindi | Research Faculty</div></div></div><div class=\"ssmrv-dept-profile-item\" data-profile-id=\"dr-urmi-dutta\" title=\"Click to view full profile of Dr. Urmi Dutta\"><div class=\"ssmrv-dept-prof-header\"><span class=\"ssmrv-dept-prof-name\">Dr. Urmi Dutta</span></div><div class=\"ssmrv-faculty-badges\"><span class=\"ssmrv-badge-desig\">Assistant Professor</span><span class=\"ssmrv-badge-dept\">Hindi</span></div><div class=\"ssmrv-dept-prof-actions\"><span class=\"ssmrv-dept-prof-cta\">👤 View Full Profile</span><a href=\"https://nmkrv.edu.in/language/hindi/\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"ssmrv-dept-visit-btn\" onclick=\"event.stopPropagation();\">🌐 Visit Website Page ↗</a></div><div class=\"ssmrv-dept-prof-meta\"><div class=\"ssmrv-dept-prof-row\"><strong>Qualifications:</strong> M.A., B.Ed., Ph.D.</div><div class=\"ssmrv-dept-prof-row\"><strong>Experience:</strong> Full-Time Faculty in Hindi (Joined March 2021)</div><div class=\"ssmrv-dept-prof-row\"><strong>Expertise:</strong> Hindi Literature, Functional Hindi, Drama &amp; Literary Criticism</div><div class=\"ssmrv-dept-prof-row ssmrv-dept-prof-comm\"><strong>Role:</strong> Department of Hindi</div></div></div><div class=\"ssmrv-dept-profile-item\" data-profile-id=\"dr-pankaja-nayana\" title=\"Click to view full profile of Dr. Pankaja Nayana\"><div class=\"ssmrv-dept-prof-header\"><span class=\"ssmrv-dept-prof-name\">Dr. Pankaja Nayana</span></div><div class=\"ssmrv-faculty-badges\"><span class=\"ssmrv-badge-desig\">Assistant Professor &amp; Research Faculty</span><span class=\"ssmrv-badge-dept\">Sanskrit</span></div><div class=\"ssmrv-dept-prof-actions\"><span class=\"ssmrv-dept-prof-cta\">👤 View Full Profile</span><a href=\"https://nmkrv.edu.in/language/sanskrit/\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"ssmrv-dept-visit-btn\" onclick=\"event.stopPropagation();\">🌐 Visit Website Page ↗</a></div><div class=\"ssmrv-dept-prof-meta\"><div class=\"ssmrv-dept-prof-row\"><strong>Qualifications:</strong> M.A., Ph.D. in Sanskrit</div><div class=\"ssmrv-dept-prof-row\"><strong>Experience:</strong> Teaching &amp; Research Experience in Classical Sanskrit</div><div class=\"ssmrv-dept-prof-row\"><strong>Expertise:</strong> Sanskrit Literature, Vedic Studies, Indian Knowledge Systems (IKS) &amp; Classical Drama</div><div class=\"ssmrv-dept-prof-row ssmrv-dept-prof-comm\"><strong>Role:</strong> Research Faculty — Department of Sanskrit</div></div></div><div class=\"ssmrv-dept-profile-item\" data-profile-id=\"ms-chaitra-v-c\" title=\"Click to view full profile of Ms. Chaitra V. C.\"><div class=\"ssmrv-dept-prof-header\"><span class=\"ssmrv-dept-prof-name\">Ms. Chaitra V. C.</span></div><div class=\"ssmrv-faculty-badges\"><span class=\"ssmrv-badge-desig\">Manager — Training &amp; Placements (DISHA)</span><span class=\"ssmrv-badge-dept\">DISHA Training &amp; Placement Centre</span></div><div class=\"ssmrv-dept-prof-actions\"><span class=\"ssmrv-dept-prof-cta\">👤 View Full Profile</span><a href=\"https://nmkrv.edu.in/training-and-placement-centre/\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"ssmrv-dept-visit-btn\" onclick=\"event.stopPropagation();\">🌐 Visit Website Page ↗</a></div><div class=\"ssmrv-dept-prof-meta\"><div class=\"ssmrv-dept-prof-row\"><strong>Qualifications:</strong> Corporate Relations, HR &amp; Career Development</div><div class=\"ssmrv-dept-prof-row\"><strong>Experience:</strong> Manager – Training &amp; Placements, DISHA Cell, NMKRV College</div><div class=\"ssmrv-dept-prof-row\"><strong>Expertise:</strong> Campus Recruitment, Pre-Placement Training (CAKES), Industry Relations &amp; Career Guidance</div><div class=\"ssmrv-dept-prof-row ssmrv-dept-prof-comm\"><strong>Role:</strong> Manager &amp; Coordinator — DISHA Training &amp; Placement Centre</div></div></div><div class=\"ssmrv-dept-profile-item\" data-profile-id=\"mrs-radhika-d\" title=\"Click to view full profile of Mrs. Radhika D.\"><div class=\"ssmrv-dept-prof-header\"><span class=\"ssmrv-dept-prof-name\">Mrs. Radhika D.</span></div><div class=\"ssmrv-faculty-badges\"><span class=\"ssmrv-badge-desig\">Librarian</span><span class=\"ssmrv-badge-dept\">Library &amp; Information Centre</span></div><div class=\"ssmrv-dept-prof-actions\"><span class=\"ssmrv-dept-prof-cta\">👤 View Full Profile</span><a href=\"https://nmkrv.edu.in/library/\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"ssmrv-dept-visit-btn\" onclick=\"event.stopPropagation();\">🌐 Visit Website Page ↗</a></div><div class=\"ssmrv-dept-prof-meta\"><div class=\"ssmrv-dept-prof-row\"><strong>Qualifications:</strong> M.L.I.Sc.</div><div class=\"ssmrv-dept-prof-row\"><strong>Experience:</strong> Head Librarian &amp; Member of Academic Council</div><div class=\"ssmrv-dept-prof-row\"><strong>Expertise:</strong> Library &amp; Information Science, Digital Repositories (INFLIBNET, DELNET, OPAC) &amp; Braille Accessibility</div><div class=\"ssmrv-dept-prof-row ssmrv-dept-prof-comm\"><strong>Role:</strong> Librarian | Member — Academic Council</div></div></div><div class=\"ssmrv-dept-profile-item\" data-profile-id=\"ms-ashwini-s-ped\" title=\"Click to view full profile of Ms. Ashwini S. (Physical Education)\"><div class=\"ssmrv-dept-prof-header\"><span class=\"ssmrv-dept-prof-name\">Ms. Ashwini S. (Physical Education)</span></div><div class=\"ssmrv-faculty-badges\"><span class=\"ssmrv-badge-desig\">Assistant Physical Education Director</span><span class=\"ssmrv-badge-dept\">Physical Education &amp; Sports</span></div><div class=\"ssmrv-dept-prof-actions\"><span class=\"ssmrv-dept-prof-cta\">👤 View Full Profile</span><a href=\"https://nmkrv.edu.in/utkarsh-quiz-club/\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"ssmrv-dept-visit-btn\" onclick=\"event.stopPropagation();\">🌐 Visit Website Page ↗</a></div><div class=\"ssmrv-dept-prof-meta\"><div class=\"ssmrv-dept-prof-row\"><strong>Qualifications:</strong> M.P.Ed.</div><div class=\"ssmrv-dept-prof-row\"><strong>Experience:</strong> Sports Coaching, Athletics &amp; Quiz Club Coordination</div><div class=\"ssmrv-dept-prof-row\"><strong>Expertise:</strong> Outdoor &amp; Indoor Sports Training, Inter-Collegiate Athletics &amp; Utkarsh Quiz Club</div><div class=\"ssmrv-dept-prof-row ssmrv-dept-prof-comm\"><strong>Role:</strong> Coordinator — Utkarsh Quiz Club | Department of Physical Education</div></div></div><div class=\"ssmrv-dept-profile-item\" data-profile-id=\"capt-chaithanya-ramesh\" title=\"Click to view full profile of Capt. Chaithanya Ramesh\"><div class=\"ssmrv-dept-prof-header\"><span class=\"ssmrv-dept-prof-name\">Capt. Chaithanya Ramesh</span></div><div class=\"ssmrv-faculty-badges\"><span class=\"ssmrv-badge-desig\">Associate NCC Officer (ANO)</span><span class=\"ssmrv-badge-dept\">National Cadet Corps (NCC)</span></div><div class=\"ssmrv-dept-prof-actions\"><span class=\"ssmrv-dept-prof-cta\">👤 View Full Profile</span><a href=\"https://nmkrv.edu.in/ncc/\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"ssmrv-dept-visit-btn\" onclick=\"event.stopPropagation();\">🌐 Visit Website Page ↗</a></div><div class=\"ssmrv-dept-prof-meta\"><div class=\"ssmrv-dept-prof-row\"><strong>Qualifications:</strong> Commissioned Associate NCC Officer (Captain)</div><div class=\"ssmrv-dept-prof-row\"><strong>Experience:</strong> 1 Karnataka Girls Battalion, Bangalore &#x27;A&#x27; Group</div><div class=\"ssmrv-dept-prof-row\"><strong>Expertise:</strong> Military Training, Leadership, Republic Day Camp (RDC), Adventure &amp; Social Service</div><div class=\"ssmrv-dept-prof-row ssmrv-dept-prof-comm\"><strong>Role:</strong> Associate NCC Officer (ANO) — NCC | Member — UBA Executive Committee</div></div></div><div class=\"ssmrv-dept-profile-item\" data-profile-id=\"dr-g-n-sangeetha\" title=\"Click to view full profile of Dr. G. N. Sangeetha\"><div class=\"ssmrv-dept-prof-header\"><span class=\"ssmrv-dept-prof-name\">Dr. G. N. Sangeetha</span></div><div class=\"ssmrv-faculty-badges\"><span class=\"ssmrv-badge-desig\">Head — Documentation Wing &amp; Governing Body Member</span><span class=\"ssmrv-badge-dept\">Administration &amp; Documentation Wing</span></div><div class=\"ssmrv-dept-prof-actions\"><span class=\"ssmrv-dept-prof-cta\">👤 View Full Profile</span><a href=\"https://nmkrv.edu.in/board-of-management/\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"ssmrv-dept-visit-btn\" onclick=\"event.stopPropagation();\">🌐 Visit Website Page ↗</a></div><div class=\"ssmrv-dept-prof-meta\"><div class=\"ssmrv-dept-prof-row\"><strong>Qualifications:</strong> Ph.D.</div><div class=\"ssmrv-dept-prof-row\"><strong>Experience:</strong> Institutional Documentation, Administration &amp; Research</div><div class=\"ssmrv-dept-prof-row\"><strong>Expertise:</strong> Institutional Documentation, Quality Records &amp; Academic Governance</div><div class=\"ssmrv-dept-prof-row ssmrv-dept-prof-comm\"><strong>Role:</strong> Member — Governing Body | Documentation Wing</div></div></div></div>",
    "buttons": [
      {
        "text": "👤 Dr. Veena Devi R. S.",
        "action": "profile:dr-veena-devi-r-s"
      },
      {
        "text": "👤 Ms. Mareena Joseph",
        "action": "profile:ms-mareena-joseph"
      },
      {
        "text": "👤 Ms. Parvathy Menon",
        "action": "profile:ms-parvathy-menon"
      },
      {
        "text": "👤 Dr. Sandhya L. Hegde",
        "action": "profile:dr-sandhya-l-hegde"
      },
      {
        "text": "👤 Prof. Basavaraja Amarappa",
        "action": "profile:prof-basavaraja-amarappa"
      },
      {
        "text": "👤 Mrs. Leelavathi P.",
        "action": "profile:mrs-leelavathi-p"
      },
      {
        "text": "👤 Mrs. Sumana A. S.",
        "action": "profile:mrs-sumana-a-s"
      },
      {
        "text": "👤 Dr. Seema Sharma",
        "action": "profile:dr-seema-sharma"
      },
      {
        "text": "👤 Dr. Urmi Dutta",
        "action": "profile:dr-urmi-dutta"
      },
      {
        "text": "👤 Dr. Pankaja Nayana",
        "action": "profile:dr-pankaja-nayana"
      },
      {
        "text": "👤 Ms. Chaitra V. C.",
        "action": "profile:ms-chaitra-v-c"
      },
      {
        "text": "👤 Mrs. Radhika D.",
        "action": "profile:mrs-radhika-d"
      },
      {
        "text": "👤 Ms. Ashwini S. (Physical Education)",
        "action": "profile:ms-ashwini-s-ped"
      },
      {
        "text": "👤 Capt. Chaithanya Ramesh",
        "action": "profile:capt-chaithanya-ramesh"
      },
      {
        "text": "👤 Dr. G. N. Sangeetha",
        "action": "profile:dr-g-n-sangeetha"
      },
      {
        "text": "🌐 Visit Department Webpage ↗",
        "url": "https://nmkrv.edu.in/language/"
      },
      {
        "text": "👨‍🏫 All Faculty Departments",
        "action": "flow:faculty"
      }
    ]
  },
  "profile_dr-veena-devi-r-s": {
    "id": "profile_dr-veena-devi-r-s",
    "pageUrl": "https://nmkrv.edu.in/language/english/",
    "message": "<div class=\"ssmrv-faculty-card is-full-profile\"><div class=\"ssmrv-faculty-name\">Dr. Veena Devi R. S.</div><div class=\"ssmrv-faculty-badges\"><span class=\"ssmrv-badge-desig\">Assistant Professor</span><span class=\"ssmrv-badge-dept\">English &amp; Optional English</span></div><div class=\"ssmrv-fac-actions\"><a href=\"https://nmkrv.edu.in/language/english/\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"ssmrv-visit-website-btn\">🌐 Visit Official Website Page ↗</a></div><div class=\"ssmrv-faculty-meta\"><div class=\"ssmrv-fac-row\"><span class=\"ssmrv-fac-label\">🎓 Qualifications</span><span class=\"ssmrv-fac-val\">M.A., Ph.D.</span></div><div class=\"ssmrv-fac-row\"><span class=\"ssmrv-fac-label\">⏳ Experience</span><span class=\"ssmrv-fac-val\">Full-Time Faculty in English (Joined September 2022)</span></div><div class=\"ssmrv-fac-row\"><span class=\"ssmrv-fac-label\">🔬 Areas of Expertise</span><span class=\"ssmrv-fac-val\">British &amp; Indian English Literature, Literary Criticism, Gender Studies &amp; Communicative English</span></div><div class=\"ssmrv-fac-row\"><span class=\"ssmrv-fac-label\">🛡️ Committee / Role</span><span class=\"ssmrv-fac-val ssmrv-fac-role-val\">Research Faculty — Department of English</span></div><div class=\"ssmrv-fac-section\"><div class=\"ssmrv-fac-sec-title\">📖 Profile Overview</div><div class=\"ssmrv-fac-sec-text\">Dr. Veena Devi R. S. is an Assistant Professor and recognized Research Faculty member in the Department of English and Optional English at NMKRV College.</div></div><div class=\"ssmrv-fac-section\"><div class=\"ssmrv-fac-sec-title\">🏆 Key Highlights</div><div class=\"ssmrv-fac-sec-text\">Recognized Research Faculty in English Literature.</div></div><div class=\"ssmrv-fac-contact\"><div>📧 <a href=\"mailto:nmkrv@rvei.edu.in\">nmkrv@rvei.edu.in</a></div><div>📞 <a href=\"tel:08069018900\">080-69018900</a></div></div></div></div>",
    "buttons": [
      {
        "text": "🌐 Visit Official Website Page ↗",
        "url": "https://nmkrv.edu.in/language/english/",
        "isPrimary": true
      },
      {
        "text": "🏛️ 🗣️ Languages, Placements, Library, NCC & Sports",
        "action": "flow:faculty_languages_admin"
      },
      {
        "text": "👨‍🏫 All Faculty Departments",
        "action": "flow:faculty"
      }
    ]
  },
  "profile_ms-mareena-joseph": {
    "id": "profile_ms-mareena-joseph",
    "pageUrl": "https://nmkrv.edu.in/language-2/",
    "message": "<div class=\"ssmrv-faculty-card is-full-profile\"><div class=\"ssmrv-faculty-name\">Ms. Mareena Joseph</div><div class=\"ssmrv-faculty-badges\"><span class=\"ssmrv-badge-desig\">Assistant Professor</span><span class=\"ssmrv-badge-dept\">English</span></div><div class=\"ssmrv-fac-actions\"><a href=\"https://nmkrv.edu.in/language-2/\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"ssmrv-visit-website-btn\">🌐 Visit Official Website Page ↗</a></div><div class=\"ssmrv-faculty-meta\"><div class=\"ssmrv-fac-row\"><span class=\"ssmrv-fac-label\">🎓 Qualifications</span><span class=\"ssmrv-fac-val\">M.A. English</span></div><div class=\"ssmrv-fac-row\"><span class=\"ssmrv-fac-label\">⏳ Experience</span><span class=\"ssmrv-fac-val\">Teaching Experience in English Language &amp; Literature</span></div><div class=\"ssmrv-fac-row\"><span class=\"ssmrv-fac-label\">🔬 Areas of Expertise</span><span class=\"ssmrv-fac-val\">English Literature, Communication Skills &amp; Academic Writing</span></div><div class=\"ssmrv-fac-row\"><span class=\"ssmrv-fac-label\">🛡️ Committee / Role</span><span class=\"ssmrv-fac-val ssmrv-fac-role-val\">Department of English</span></div><div class=\"ssmrv-fac-section\"><div class=\"ssmrv-fac-sec-title\">📖 Profile Overview</div><div class=\"ssmrv-fac-sec-text\">Ms. Mareena Joseph serves as Assistant Professor in the Department of English at NMKRV College.</div></div><div class=\"ssmrv-fac-section\"><div class=\"ssmrv-fac-sec-title\">🏆 Key Highlights</div><div class=\"ssmrv-fac-sec-text\">Faculty Member, Department of English.</div></div><div class=\"ssmrv-fac-contact\"><div>📧 <a href=\"mailto:nmkrv@rvei.edu.in\">nmkrv@rvei.edu.in</a></div><div>📞 <a href=\"tel:08069018900\">080-69018900</a></div></div></div></div>",
    "buttons": [
      {
        "text": "🌐 Visit Official Website Page ↗",
        "url": "https://nmkrv.edu.in/language-2/",
        "isPrimary": true
      },
      {
        "text": "🏛️ 🗣️ Languages, Placements, Library, NCC & Sports",
        "action": "flow:faculty_languages_admin"
      },
      {
        "text": "👨‍🏫 All Faculty Departments",
        "action": "flow:faculty"
      }
    ]
  },
  "profile_ms-parvathy-menon": {
    "id": "profile_ms-parvathy-menon",
    "pageUrl": "https://nmkrv.edu.in/language-2/",
    "message": "<div class=\"ssmrv-faculty-card is-full-profile\"><div class=\"ssmrv-faculty-name\">Ms. Parvathy Menon</div><div class=\"ssmrv-faculty-badges\"><span class=\"ssmrv-badge-desig\">Assistant Professor</span><span class=\"ssmrv-badge-dept\">English</span></div><div class=\"ssmrv-fac-actions\"><a href=\"https://nmkrv.edu.in/language-2/\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"ssmrv-visit-website-btn\">🌐 Visit Official Website Page ↗</a></div><div class=\"ssmrv-faculty-meta\"><div class=\"ssmrv-fac-row\"><span class=\"ssmrv-fac-label\">🎓 Qualifications</span><span class=\"ssmrv-fac-val\">M.A. English</span></div><div class=\"ssmrv-fac-row\"><span class=\"ssmrv-fac-label\">⏳ Experience</span><span class=\"ssmrv-fac-val\">Teaching Experience in English Language &amp; Literature</span></div><div class=\"ssmrv-fac-row\"><span class=\"ssmrv-fac-label\">🔬 Areas of Expertise</span><span class=\"ssmrv-fac-val\">Literary Studies, Postcolonial Literature &amp; Language Proficiency</span></div><div class=\"ssmrv-fac-row\"><span class=\"ssmrv-fac-label\">🛡️ Committee / Role</span><span class=\"ssmrv-fac-val ssmrv-fac-role-val\">Department of English</span></div><div class=\"ssmrv-fac-section\"><div class=\"ssmrv-fac-sec-title\">📖 Profile Overview</div><div class=\"ssmrv-fac-sec-text\">Ms. Parvathy Menon serves as Assistant Professor in the Department of English at NMKRV College.</div></div><div class=\"ssmrv-fac-section\"><div class=\"ssmrv-fac-sec-title\">🏆 Key Highlights</div><div class=\"ssmrv-fac-sec-text\">Faculty Member, Department of English.</div></div><div class=\"ssmrv-fac-contact\"><div>📧 <a href=\"mailto:nmkrv@rvei.edu.in\">nmkrv@rvei.edu.in</a></div><div>📞 <a href=\"tel:08069018900\">080-69018900</a></div></div></div></div>",
    "buttons": [
      {
        "text": "🌐 Visit Official Website Page ↗",
        "url": "https://nmkrv.edu.in/language-2/",
        "isPrimary": true
      },
      {
        "text": "🏛️ 🗣️ Languages, Placements, Library, NCC & Sports",
        "action": "flow:faculty_languages_admin"
      },
      {
        "text": "👨‍🏫 All Faculty Departments",
        "action": "flow:faculty"
      }
    ]
  },
  "profile_dr-sandhya-l-hegde": {
    "id": "profile_dr-sandhya-l-hegde",
    "pageUrl": "https://nmkrv.edu.in/language/kannada/",
    "message": "<div class=\"ssmrv-faculty-card is-full-profile\"><div class=\"ssmrv-faculty-name\">Dr. Sandhya L. Hegde</div><div class=\"ssmrv-faculty-badges\"><span class=\"ssmrv-badge-desig\">Assistant Professor</span><span class=\"ssmrv-badge-dept\">Kannada &amp; Optional Kannada</span></div><div class=\"ssmrv-fac-actions\"><a href=\"https://nmkrv.edu.in/language/kannada/\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"ssmrv-visit-website-btn\">🌐 Visit Official Website Page ↗</a></div><div class=\"ssmrv-faculty-meta\"><div class=\"ssmrv-fac-row\"><span class=\"ssmrv-fac-label\">🎓 Qualifications</span><span class=\"ssmrv-fac-val\">M.A., M.Phil., Ph.D., NET, SLET/KSET</span></div><div class=\"ssmrv-fac-row\"><span class=\"ssmrv-fac-label\">⏳ Experience</span><span class=\"ssmrv-fac-val\">Full-Time Faculty at NMKRV College (Joined July 2019)</span></div><div class=\"ssmrv-fac-row\"><span class=\"ssmrv-fac-label\">🔬 Areas of Expertise</span><span class=\"ssmrv-fac-val\">Classical &amp; Modern Kannada Literature, Cultural Studies, Folklore &amp; Literary Research</span></div><div class=\"ssmrv-fac-row\"><span class=\"ssmrv-fac-label\">🛡️ Committee / Role</span><span class=\"ssmrv-fac-val ssmrv-fac-role-val\">Member — Research Advisory Committee | Department of Kannada</span></div><div class=\"ssmrv-fac-section\"><div class=\"ssmrv-fac-sec-title\">📖 Profile Overview</div><div class=\"ssmrv-fac-sec-text\">Dr. Sandhya L. Hegde is an Assistant Professor in the Department of Kannada and Optional Kannada and serves on the Research Advisory Committee at NMKRV College.</div></div><div class=\"ssmrv-fac-section\"><div class=\"ssmrv-fac-sec-title\">🏆 Key Highlights</div><div class=\"ssmrv-fac-sec-text\">Member — Research Advisory Committee &amp; Recognized Research Faculty in Kannada.</div></div><div class=\"ssmrv-fac-contact\"><div>📧 <a href=\"mailto:sandhyalhegde.nmkrv@rvei.edu.in\">sandhyalhegde.nmkrv@rvei.edu.in</a></div><div>📞 <a href=\"tel:08069018900\">080-69018900</a></div></div></div></div>",
    "buttons": [
      {
        "text": "🌐 Visit Official Website Page ↗",
        "url": "https://nmkrv.edu.in/language/kannada/",
        "isPrimary": true
      },
      {
        "text": "🏛️ 🗣️ Languages, Placements, Library, NCC & Sports",
        "action": "flow:faculty_languages_admin"
      },
      {
        "text": "👨‍🏫 All Faculty Departments",
        "action": "flow:faculty"
      }
    ]
  },
  "profile_prof-basavaraja-amarappa": {
    "id": "profile_prof-basavaraja-amarappa",
    "pageUrl": "https://nmkrv.edu.in/language/kannada/",
    "message": "<div class=\"ssmrv-faculty-card is-full-profile\"><div class=\"ssmrv-faculty-name\">Prof. Basavaraja Amarappa</div><div class=\"ssmrv-faculty-badges\"><span class=\"ssmrv-badge-desig\">Assistant Professor</span><span class=\"ssmrv-badge-dept\">Kannada &amp; Optional Kannada</span></div><div class=\"ssmrv-fac-actions\"><a href=\"https://nmkrv.edu.in/language/kannada/\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"ssmrv-visit-website-btn\">🌐 Visit Official Website Page ↗</a></div><div class=\"ssmrv-faculty-meta\"><div class=\"ssmrv-fac-row\"><span class=\"ssmrv-fac-label\">🎓 Qualifications</span><span class=\"ssmrv-fac-val\">M.A., NET, KSET</span></div><div class=\"ssmrv-fac-row\"><span class=\"ssmrv-fac-label\">⏳ Experience</span><span class=\"ssmrv-fac-val\">Senior Faculty in Kannada Language &amp; Literature</span></div><div class=\"ssmrv-fac-row\"><span class=\"ssmrv-fac-label\">🔬 Areas of Expertise</span><span class=\"ssmrv-fac-val\">Kannada Literature, Poetics, Cultural History &amp; Language Computing</span></div><div class=\"ssmrv-fac-row\"><span class=\"ssmrv-fac-label\">🛡️ Committee / Role</span><span class=\"ssmrv-fac-val ssmrv-fac-role-val\">Member — SC/ST Committee | Department of Kannada</span></div><div class=\"ssmrv-fac-section\"><div class=\"ssmrv-fac-sec-title\">📖 Profile Overview</div><div class=\"ssmrv-fac-sec-text\">Prof. Basavaraja Amarappa is an Assistant Professor in the Department of Kannada and Optional Kannada and serves as a Member of the SC/ST Committee at NMKRV College.</div></div><div class=\"ssmrv-fac-section\"><div class=\"ssmrv-fac-sec-title\">🏆 Key Highlights</div><div class=\"ssmrv-fac-sec-text\">Member — SC/ST Committee &amp; Senior Faculty in Kannada.</div></div><div class=\"ssmrv-fac-contact\"><div>📧 <a href=\"mailto:basavarajaa.nmkrv@rvei.edu.in\">basavarajaa.nmkrv@rvei.edu.in</a></div><div>📞 <a href=\"tel:08069018900\">080-69018900</a></div></div></div></div>",
    "buttons": [
      {
        "text": "🌐 Visit Official Website Page ↗",
        "url": "https://nmkrv.edu.in/language/kannada/",
        "isPrimary": true
      },
      {
        "text": "🏛️ 🗣️ Languages, Placements, Library, NCC & Sports",
        "action": "flow:faculty_languages_admin"
      },
      {
        "text": "👨‍🏫 All Faculty Departments",
        "action": "flow:faculty"
      }
    ]
  },
  "profile_mrs-leelavathi-p": {
    "id": "profile_mrs-leelavathi-p",
    "pageUrl": "https://nmkrv.edu.in/language/kannada/",
    "message": "<div class=\"ssmrv-faculty-card is-full-profile\"><div class=\"ssmrv-faculty-name\">Mrs. Leelavathi P.</div><div class=\"ssmrv-faculty-badges\"><span class=\"ssmrv-badge-desig\">Assistant Professor</span><span class=\"ssmrv-badge-dept\">Kannada &amp; Optional Kannada</span></div><div class=\"ssmrv-fac-actions\"><a href=\"https://nmkrv.edu.in/language/kannada/\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"ssmrv-visit-website-btn\">🌐 Visit Official Website Page ↗</a></div><div class=\"ssmrv-faculty-meta\"><div class=\"ssmrv-fac-row\"><span class=\"ssmrv-fac-label\">🎓 Qualifications</span><span class=\"ssmrv-fac-val\">M.A., B.Ed., M.Phil., NET</span></div><div class=\"ssmrv-fac-row\"><span class=\"ssmrv-fac-label\">⏳ Experience</span><span class=\"ssmrv-fac-val\">15+ Years at NMKRV College (Joined July 2010)</span></div><div class=\"ssmrv-fac-row\"><span class=\"ssmrv-fac-label\">🔬 Areas of Expertise</span><span class=\"ssmrv-fac-val\">Kannada Literature, Grammar, Classical Texts &amp; Pedagogy</span></div><div class=\"ssmrv-fac-row\"><span class=\"ssmrv-fac-label\">🛡️ Committee / Role</span><span class=\"ssmrv-fac-val ssmrv-fac-role-val\">Department of Kannada</span></div><div class=\"ssmrv-fac-section\"><div class=\"ssmrv-fac-sec-title\">📖 Profile Overview</div><div class=\"ssmrv-fac-sec-text\">Mrs. Leelavathi P. has served as Assistant Professor in the Department of Kannada and Optional Kannada at NMKRV College since July 2010.</div></div><div class=\"ssmrv-fac-section\"><div class=\"ssmrv-fac-sec-title\">🏆 Key Highlights</div><div class=\"ssmrv-fac-sec-text\">15+ Years of Teaching Excellence in Kannada at NMKRV College.</div></div><div class=\"ssmrv-fac-contact\"><div>📧 <a href=\"mailto:leelavathip.nmkrv@rvei.edu.in\">leelavathip.nmkrv@rvei.edu.in</a></div><div>📞 <a href=\"tel:08069018900\">080-69018900</a></div></div></div></div>",
    "buttons": [
      {
        "text": "🌐 Visit Official Website Page ↗",
        "url": "https://nmkrv.edu.in/language/kannada/",
        "isPrimary": true
      },
      {
        "text": "🏛️ 🗣️ Languages, Placements, Library, NCC & Sports",
        "action": "flow:faculty_languages_admin"
      },
      {
        "text": "👨‍🏫 All Faculty Departments",
        "action": "flow:faculty"
      }
    ]
  },
  "profile_mrs-sumana-a-s": {
    "id": "profile_mrs-sumana-a-s",
    "pageUrl": "https://nmkrv.edu.in/language/kannada/",
    "message": "<div class=\"ssmrv-faculty-card is-full-profile\"><div class=\"ssmrv-faculty-name\">Mrs. Sumana A. S.</div><div class=\"ssmrv-faculty-badges\"><span class=\"ssmrv-badge-desig\">Assistant Professor</span><span class=\"ssmrv-badge-dept\">Kannada &amp; Optional Kannada</span></div><div class=\"ssmrv-fac-actions\"><a href=\"https://nmkrv.edu.in/language/kannada/\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"ssmrv-visit-website-btn\">🌐 Visit Official Website Page ↗</a></div><div class=\"ssmrv-faculty-meta\"><div class=\"ssmrv-fac-row\"><span class=\"ssmrv-fac-label\">🎓 Qualifications</span><span class=\"ssmrv-fac-val\">M.A. Kannada</span></div><div class=\"ssmrv-fac-row\"><span class=\"ssmrv-fac-label\">⏳ Experience</span><span class=\"ssmrv-fac-val\">Teaching &amp; Student Governance Committee Experience</span></div><div class=\"ssmrv-fac-row\"><span class=\"ssmrv-fac-label\">🔬 Areas of Expertise</span><span class=\"ssmrv-fac-val\">Kannada Literature &amp; Cultural Studies</span></div><div class=\"ssmrv-fac-row\"><span class=\"ssmrv-fac-label\">🛡️ Committee / Role</span><span class=\"ssmrv-fac-val ssmrv-fac-role-val\">Member — IQAC, GRC &amp; ICC</span></div><div class=\"ssmrv-fac-section\"><div class=\"ssmrv-fac-sec-title\">📖 Profile Overview</div><div class=\"ssmrv-fac-sec-text\">Mrs. Sumana A. S. is an Assistant Professor in the Department of Kannada and serves as a Member of the IQAC, Grievance Redressal Committee (GRC), and Internal Complaints Committee (ICC).</div></div><div class=\"ssmrv-fac-section\"><div class=\"ssmrv-fac-sec-title\">🏆 Key Highlights</div><div class=\"ssmrv-fac-sec-text\">Member — IQAC, Grievance Redressal Committee (GRC) &amp; Internal Complaints Committee (ICC).</div></div><div class=\"ssmrv-fac-contact\"><div>📧 <a href=\"mailto:nmkrv@rvei.edu.in\">nmkrv@rvei.edu.in</a></div><div>📞 <a href=\"tel:08069018900\">080-69018900</a></div></div></div></div>",
    "buttons": [
      {
        "text": "🌐 Visit Official Website Page ↗",
        "url": "https://nmkrv.edu.in/language/kannada/",
        "isPrimary": true
      },
      {
        "text": "🏛️ 🗣️ Languages, Placements, Library, NCC & Sports",
        "action": "flow:faculty_languages_admin"
      },
      {
        "text": "👨‍🏫 All Faculty Departments",
        "action": "flow:faculty"
      }
    ]
  },
  "profile_dr-seema-sharma": {
    "id": "profile_dr-seema-sharma",
    "pageUrl": "https://nmkrv.edu.in/language/hindi/",
    "message": "<div class=\"ssmrv-faculty-card is-full-profile\"><div class=\"ssmrv-faculty-name\">Dr. Seema Sharma</div><div class=\"ssmrv-faculty-badges\"><span class=\"ssmrv-badge-desig\">Head of the Department (HOD) — Hindi</span><span class=\"ssmrv-badge-dept\">Hindi</span></div><div class=\"ssmrv-fac-actions\"><a href=\"https://nmkrv.edu.in/language/hindi/\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"ssmrv-visit-website-btn\">🌐 Visit Official Website Page ↗</a></div><div class=\"ssmrv-faculty-meta\"><div class=\"ssmrv-fac-row\"><span class=\"ssmrv-fac-label\">🎓 Qualifications</span><span class=\"ssmrv-fac-val\">M.A., M.Phil., Ph.D., M.Ed.</span></div><div class=\"ssmrv-fac-row\"><span class=\"ssmrv-fac-label\">⏳ Experience</span><span class=\"ssmrv-fac-val\">Head of the Department of Hindi &amp; Research Faculty</span></div><div class=\"ssmrv-fac-row\"><span class=\"ssmrv-fac-label\">🔬 Areas of Expertise</span><span class=\"ssmrv-fac-val\">Classical &amp; Modern Hindi Literature, Translation Studies &amp; Poetry</span></div><div class=\"ssmrv-fac-row\"><span class=\"ssmrv-fac-label\">🛡️ Committee / Role</span><span class=\"ssmrv-fac-val ssmrv-fac-role-val\">HoD — Department of Hindi | Research Faculty</span></div><div class=\"ssmrv-fac-section\"><div class=\"ssmrv-fac-sec-title\">📖 Profile Overview</div><div class=\"ssmrv-fac-sec-text\">Dr. Seema Sharma is the Head of the Department (HOD) of Hindi and a recognized Research Faculty member at NMKRV College.</div></div><div class=\"ssmrv-fac-section\"><div class=\"ssmrv-fac-sec-title\">🏆 Key Highlights</div><div class=\"ssmrv-fac-sec-text\">Head of the Department (Hindi) &amp; Recognized Research Faculty.</div></div><div class=\"ssmrv-fac-contact\"><div>📧 <a href=\"mailto:seemasharma.nmkrv@rvei.edu.in\">seemasharma.nmkrv@rvei.edu.in</a></div><div>📞 <a href=\"tel:08069018900\">080-69018900</a></div></div></div></div>",
    "buttons": [
      {
        "text": "🌐 Visit Official Website Page ↗",
        "url": "https://nmkrv.edu.in/language/hindi/",
        "isPrimary": true
      },
      {
        "text": "🏛️ 🗣️ Languages, Placements, Library, NCC & Sports",
        "action": "flow:faculty_languages_admin"
      },
      {
        "text": "👨‍🏫 All Faculty Departments",
        "action": "flow:faculty"
      }
    ]
  },
  "profile_dr-urmi-dutta": {
    "id": "profile_dr-urmi-dutta",
    "pageUrl": "https://nmkrv.edu.in/language/hindi/",
    "message": "<div class=\"ssmrv-faculty-card is-full-profile\"><div class=\"ssmrv-faculty-name\">Dr. Urmi Dutta</div><div class=\"ssmrv-faculty-badges\"><span class=\"ssmrv-badge-desig\">Assistant Professor</span><span class=\"ssmrv-badge-dept\">Hindi</span></div><div class=\"ssmrv-fac-actions\"><a href=\"https://nmkrv.edu.in/language/hindi/\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"ssmrv-visit-website-btn\">🌐 Visit Official Website Page ↗</a></div><div class=\"ssmrv-faculty-meta\"><div class=\"ssmrv-fac-row\"><span class=\"ssmrv-fac-label\">🎓 Qualifications</span><span class=\"ssmrv-fac-val\">M.A., B.Ed., Ph.D.</span></div><div class=\"ssmrv-fac-row\"><span class=\"ssmrv-fac-label\">⏳ Experience</span><span class=\"ssmrv-fac-val\">Full-Time Faculty in Hindi (Joined March 2021)</span></div><div class=\"ssmrv-fac-row\"><span class=\"ssmrv-fac-label\">🔬 Areas of Expertise</span><span class=\"ssmrv-fac-val\">Hindi Literature, Functional Hindi, Drama &amp; Literary Criticism</span></div><div class=\"ssmrv-fac-row\"><span class=\"ssmrv-fac-label\">🛡️ Committee / Role</span><span class=\"ssmrv-fac-val ssmrv-fac-role-val\">Department of Hindi</span></div><div class=\"ssmrv-fac-section\"><div class=\"ssmrv-fac-sec-title\">📖 Profile Overview</div><div class=\"ssmrv-fac-sec-text\">Dr. Urmi Dutta serves as Assistant Professor in the Department of Hindi at NMKRV College.</div></div><div class=\"ssmrv-fac-section\"><div class=\"ssmrv-fac-sec-title\">🏆 Key Highlights</div><div class=\"ssmrv-fac-sec-text\">Doctorate Faculty in the Department of Hindi.</div></div><div class=\"ssmrv-fac-contact\"><div>📧 <a href=\"mailto:urmidutta.nmkrv@rvei.edu.in\">urmidutta.nmkrv@rvei.edu.in</a></div><div>📞 <a href=\"tel:08069018900\">080-69018900</a></div></div></div></div>",
    "buttons": [
      {
        "text": "🌐 Visit Official Website Page ↗",
        "url": "https://nmkrv.edu.in/language/hindi/",
        "isPrimary": true
      },
      {
        "text": "🏛️ 🗣️ Languages, Placements, Library, NCC & Sports",
        "action": "flow:faculty_languages_admin"
      },
      {
        "text": "👨‍🏫 All Faculty Departments",
        "action": "flow:faculty"
      }
    ]
  },
  "profile_dr-pankaja-nayana": {
    "id": "profile_dr-pankaja-nayana",
    "pageUrl": "https://nmkrv.edu.in/language/sanskrit/",
    "message": "<div class=\"ssmrv-faculty-card is-full-profile\"><div class=\"ssmrv-faculty-name\">Dr. Pankaja Nayana</div><div class=\"ssmrv-faculty-badges\"><span class=\"ssmrv-badge-desig\">Assistant Professor &amp; Research Faculty</span><span class=\"ssmrv-badge-dept\">Sanskrit</span></div><div class=\"ssmrv-fac-actions\"><a href=\"https://nmkrv.edu.in/language/sanskrit/\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"ssmrv-visit-website-btn\">🌐 Visit Official Website Page ↗</a></div><div class=\"ssmrv-faculty-meta\"><div class=\"ssmrv-fac-row\"><span class=\"ssmrv-fac-label\">🎓 Qualifications</span><span class=\"ssmrv-fac-val\">M.A., Ph.D. in Sanskrit</span></div><div class=\"ssmrv-fac-row\"><span class=\"ssmrv-fac-label\">⏳ Experience</span><span class=\"ssmrv-fac-val\">Teaching &amp; Research Experience in Classical Sanskrit</span></div><div class=\"ssmrv-fac-row\"><span class=\"ssmrv-fac-label\">🔬 Areas of Expertise</span><span class=\"ssmrv-fac-val\">Sanskrit Literature, Vedic Studies, Indian Knowledge Systems (IKS) &amp; Classical Drama</span></div><div class=\"ssmrv-fac-row\"><span class=\"ssmrv-fac-label\">🛡️ Committee / Role</span><span class=\"ssmrv-fac-val ssmrv-fac-role-val\">Research Faculty — Department of Sanskrit</span></div><div class=\"ssmrv-fac-section\"><div class=\"ssmrv-fac-sec-title\">📖 Profile Overview</div><div class=\"ssmrv-fac-sec-text\">Dr. Pankaja Nayana serves as Assistant Professor and recognized Research Faculty member in the Department of Sanskrit at NMKRV College.</div></div><div class=\"ssmrv-fac-section\"><div class=\"ssmrv-fac-sec-title\">🏆 Key Highlights</div><div class=\"ssmrv-fac-sec-text\">Recognized Research Faculty in Sanskrit &amp; Indian Knowledge Systems.</div></div><div class=\"ssmrv-fac-contact\"><div>📧 <a href=\"mailto:nmkrv@rvei.edu.in\">nmkrv@rvei.edu.in</a></div><div>📞 <a href=\"tel:08069018900\">080-69018900</a></div></div></div></div>",
    "buttons": [
      {
        "text": "🌐 Visit Official Website Page ↗",
        "url": "https://nmkrv.edu.in/language/sanskrit/",
        "isPrimary": true
      },
      {
        "text": "🏛️ 🗣️ Languages, Placements, Library, NCC & Sports",
        "action": "flow:faculty_languages_admin"
      },
      {
        "text": "👨‍🏫 All Faculty Departments",
        "action": "flow:faculty"
      }
    ]
  },
  "profile_ms-chaitra-v-c": {
    "id": "profile_ms-chaitra-v-c",
    "pageUrl": "https://nmkrv.edu.in/training-and-placement-centre/",
    "message": "<div class=\"ssmrv-faculty-card is-full-profile\"><div class=\"ssmrv-faculty-name\">Ms. Chaitra V. C.</div><div class=\"ssmrv-faculty-badges\"><span class=\"ssmrv-badge-desig\">Manager — Training &amp; Placements (DISHA)</span><span class=\"ssmrv-badge-dept\">DISHA Training &amp; Placement Centre</span></div><div class=\"ssmrv-fac-actions\"><a href=\"https://nmkrv.edu.in/training-and-placement-centre/\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"ssmrv-visit-website-btn\">🌐 Visit Official Website Page ↗</a></div><div class=\"ssmrv-faculty-meta\"><div class=\"ssmrv-fac-row\"><span class=\"ssmrv-fac-label\">🎓 Qualifications</span><span class=\"ssmrv-fac-val\">Corporate Relations, HR &amp; Career Development</span></div><div class=\"ssmrv-fac-row\"><span class=\"ssmrv-fac-label\">⏳ Experience</span><span class=\"ssmrv-fac-val\">Manager – Training &amp; Placements, DISHA Cell, NMKRV College</span></div><div class=\"ssmrv-fac-row\"><span class=\"ssmrv-fac-label\">🔬 Areas of Expertise</span><span class=\"ssmrv-fac-val\">Campus Recruitment, Pre-Placement Training (CAKES), Industry Relations &amp; Career Guidance</span></div><div class=\"ssmrv-fac-row\"><span class=\"ssmrv-fac-label\">🛡️ Committee / Role</span><span class=\"ssmrv-fac-val ssmrv-fac-role-val\">Manager &amp; Coordinator — DISHA Training &amp; Placement Centre</span></div><div class=\"ssmrv-fac-section\"><div class=\"ssmrv-fac-sec-title\">📖 Profile Overview</div><div class=\"ssmrv-fac-sec-text\">Ms. Chaitra V. C. leads DISHA — The Training and Placement Centre at NMKRV College, coordinating pre-placement skill enhancement training and campus recruitment drives with top corporate recruiters including Deloitte, Wipro, Accenture, TCS, Infosys, Citi Bank, JP Morgan, and Codeyoung.</div></div><div class=\"ssmrv-fac-section\"><div class=\"ssmrv-fac-sec-title\">🏆 Key Highlights</div><div class=\"ssmrv-fac-sec-text\">Leads DISHA Placement Cell (&#x27;College to Career&#x27;) with 350+ placements across premier MNCs.</div></div><div class=\"ssmrv-fac-contact\"><div>📧 <a href=\"mailto:chaitravc.nmkrv@rvei.edu.in\">chaitravc.nmkrv@rvei.edu.in</a></div><div>📞 <a href=\"tel:+918310063697\">+91 83100 63697</a></div></div></div></div>",
    "buttons": [
      {
        "text": "🌐 Visit Official Website Page ↗",
        "url": "https://nmkrv.edu.in/training-and-placement-centre/",
        "isPrimary": true
      },
      {
        "text": "🏛️ 🗣️ Languages, Placements, Library, NCC & Sports",
        "action": "flow:faculty_languages_admin"
      },
      {
        "text": "👨‍🏫 All Faculty Departments",
        "action": "flow:faculty"
      }
    ]
  },
  "profile_mrs-radhika-d": {
    "id": "profile_mrs-radhika-d",
    "pageUrl": "https://nmkrv.edu.in/library/",
    "message": "<div class=\"ssmrv-faculty-card is-full-profile\"><div class=\"ssmrv-faculty-name\">Mrs. Radhika D.</div><div class=\"ssmrv-faculty-badges\"><span class=\"ssmrv-badge-desig\">Librarian</span><span class=\"ssmrv-badge-dept\">Library &amp; Information Centre</span></div><div class=\"ssmrv-fac-actions\"><a href=\"https://nmkrv.edu.in/library/\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"ssmrv-visit-website-btn\">🌐 Visit Official Website Page ↗</a></div><div class=\"ssmrv-faculty-meta\"><div class=\"ssmrv-fac-row\"><span class=\"ssmrv-fac-label\">🎓 Qualifications</span><span class=\"ssmrv-fac-val\">M.L.I.Sc.</span></div><div class=\"ssmrv-fac-row\"><span class=\"ssmrv-fac-label\">⏳ Experience</span><span class=\"ssmrv-fac-val\">Head Librarian &amp; Member of Academic Council</span></div><div class=\"ssmrv-fac-row\"><span class=\"ssmrv-fac-label\">🔬 Areas of Expertise</span><span class=\"ssmrv-fac-val\">Library &amp; Information Science, Digital Repositories (INFLIBNET, DELNET, OPAC) &amp; Braille Accessibility</span></div><div class=\"ssmrv-fac-row\"><span class=\"ssmrv-fac-label\">🛡️ Committee / Role</span><span class=\"ssmrv-fac-val ssmrv-fac-role-val\">Librarian | Member — Academic Council</span></div><div class=\"ssmrv-fac-section\"><div class=\"ssmrv-fac-sec-title\">📖 Profile Overview</div><div class=\"ssmrv-fac-sec-text\">Mrs. Radhika D. serves as the Librarian of NMKRV College and is a Member of the Academic Council, managing over 60,097 books, 7,530 reference volumes, DELNET/INFLIBNET e-resources, and assistive Braille/JAWS/NVDA facilities.</div></div><div class=\"ssmrv-fac-section\"><div class=\"ssmrv-fac-sec-title\">🏆 Key Highlights</div><div class=\"ssmrv-fac-sec-text\">Member — Academic Council | Manages 60,097+ Books &amp; Digital E-Library.</div></div><div class=\"ssmrv-fac-contact\"><div>📧 <a href=\"mailto:nmkrv@rvei.edu.in\">nmkrv@rvei.edu.in</a></div><div>📞 <a href=\"tel:08069018900\">080-69018900</a></div></div></div></div>",
    "buttons": [
      {
        "text": "🌐 Visit Official Website Page ↗",
        "url": "https://nmkrv.edu.in/library/",
        "isPrimary": true
      },
      {
        "text": "🏛️ 🗣️ Languages, Placements, Library, NCC & Sports",
        "action": "flow:faculty_languages_admin"
      },
      {
        "text": "👨‍🏫 All Faculty Departments",
        "action": "flow:faculty"
      }
    ]
  },
  "profile_ms-ashwini-s-ped": {
    "id": "profile_ms-ashwini-s-ped",
    "pageUrl": "https://nmkrv.edu.in/utkarsh-quiz-club/",
    "message": "<div class=\"ssmrv-faculty-card is-full-profile\"><div class=\"ssmrv-faculty-name\">Ms. Ashwini S. (Physical Education)</div><div class=\"ssmrv-faculty-badges\"><span class=\"ssmrv-badge-desig\">Assistant Physical Education Director</span><span class=\"ssmrv-badge-dept\">Physical Education &amp; Sports</span></div><div class=\"ssmrv-fac-actions\"><a href=\"https://nmkrv.edu.in/utkarsh-quiz-club/\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"ssmrv-visit-website-btn\">🌐 Visit Official Website Page ↗</a></div><div class=\"ssmrv-faculty-meta\"><div class=\"ssmrv-fac-row\"><span class=\"ssmrv-fac-label\">🎓 Qualifications</span><span class=\"ssmrv-fac-val\">M.P.Ed.</span></div><div class=\"ssmrv-fac-row\"><span class=\"ssmrv-fac-label\">⏳ Experience</span><span class=\"ssmrv-fac-val\">Sports Coaching, Athletics &amp; Quiz Club Coordination</span></div><div class=\"ssmrv-fac-row\"><span class=\"ssmrv-fac-label\">🔬 Areas of Expertise</span><span class=\"ssmrv-fac-val\">Outdoor &amp; Indoor Sports Training, Inter-Collegiate Athletics &amp; Utkarsh Quiz Club</span></div><div class=\"ssmrv-fac-row\"><span class=\"ssmrv-fac-label\">🛡️ Committee / Role</span><span class=\"ssmrv-fac-val ssmrv-fac-role-val\">Coordinator — Utkarsh Quiz Club | Department of Physical Education</span></div><div class=\"ssmrv-fac-section\"><div class=\"ssmrv-fac-sec-title\">📖 Profile Overview</div><div class=\"ssmrv-fac-sec-text\">Ms. Ashwini S. serves as the Assistant Physical Education Director in the Department of Physical Education &amp; Sports and is the Coordinator of the Utkarsh Quiz Club at NMKRV College.</div></div><div class=\"ssmrv-fac-section\"><div class=\"ssmrv-fac-sec-title\">🏆 Key Highlights</div><div class=\"ssmrv-fac-sec-text\">Assistant Physical Education Director &amp; Coordinator — Utkarsh Quiz Club.</div></div><div class=\"ssmrv-fac-contact\"><div>📧 <a href=\"mailto:nmkrv@rvei.edu.in\">nmkrv@rvei.edu.in</a></div><div>📞 <a href=\"tel:08069018900\">080-69018900</a></div></div></div></div>",
    "buttons": [
      {
        "text": "🌐 Visit Official Website Page ↗",
        "url": "https://nmkrv.edu.in/utkarsh-quiz-club/",
        "isPrimary": true
      },
      {
        "text": "🏛️ 🗣️ Languages, Placements, Library, NCC & Sports",
        "action": "flow:faculty_languages_admin"
      },
      {
        "text": "👨‍🏫 All Faculty Departments",
        "action": "flow:faculty"
      }
    ]
  },
  "profile_capt-chaithanya-ramesh": {
    "id": "profile_capt-chaithanya-ramesh",
    "pageUrl": "https://nmkrv.edu.in/ncc/",
    "message": "<div class=\"ssmrv-faculty-card is-full-profile\"><div class=\"ssmrv-faculty-name\">Capt. Chaithanya Ramesh</div><div class=\"ssmrv-faculty-badges\"><span class=\"ssmrv-badge-desig\">Associate NCC Officer (ANO)</span><span class=\"ssmrv-badge-dept\">National Cadet Corps (NCC)</span></div><div class=\"ssmrv-fac-actions\"><a href=\"https://nmkrv.edu.in/ncc/\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"ssmrv-visit-website-btn\">🌐 Visit Official Website Page ↗</a></div><div class=\"ssmrv-faculty-meta\"><div class=\"ssmrv-fac-row\"><span class=\"ssmrv-fac-label\">🎓 Qualifications</span><span class=\"ssmrv-fac-val\">Commissioned Associate NCC Officer (Captain)</span></div><div class=\"ssmrv-fac-row\"><span class=\"ssmrv-fac-label\">⏳ Experience</span><span class=\"ssmrv-fac-val\">1 Karnataka Girls Battalion, Bangalore &#x27;A&#x27; Group</span></div><div class=\"ssmrv-fac-row\"><span class=\"ssmrv-fac-label\">🔬 Areas of Expertise</span><span class=\"ssmrv-fac-val\">Military Training, Leadership, Republic Day Camp (RDC), Adventure &amp; Social Service</span></div><div class=\"ssmrv-fac-row\"><span class=\"ssmrv-fac-label\">🛡️ Committee / Role</span><span class=\"ssmrv-fac-val ssmrv-fac-role-val\">Associate NCC Officer (ANO) — NCC | Member — UBA Executive Committee</span></div><div class=\"ssmrv-fac-section\"><div class=\"ssmrv-fac-sec-title\">📖 Profile Overview</div><div class=\"ssmrv-fac-sec-text\">Capt. Chaithanya Ramesh is the Associate NCC Officer (ANO) leading the NMKRV College NCC Wing under 1 Karnataka Girls Battalion (Bangalore &#x27;A&#x27; Group) and serves on the Unnat Bharat Abhiyan (UBA) Executive Committee.</div></div><div class=\"ssmrv-fac-section\"><div class=\"ssmrv-fac-sec-title\">🏆 Key Highlights</div><div class=\"ssmrv-fac-sec-text\">Associate NCC Officer (1 Karnataka Girls Battalion) &amp; UBA Executive Committee Member.</div></div><div class=\"ssmrv-fac-contact\"><div>📧 <a href=\"mailto:nmkrv@rvei.edu.in\">nmkrv@rvei.edu.in</a></div><div>📞 <a href=\"tel:08069018900\">080-69018900</a></div></div></div></div>",
    "buttons": [
      {
        "text": "🌐 Visit Official Website Page ↗",
        "url": "https://nmkrv.edu.in/ncc/",
        "isPrimary": true
      },
      {
        "text": "🏛️ 🗣️ Languages, Placements, Library, NCC & Sports",
        "action": "flow:faculty_languages_admin"
      },
      {
        "text": "👨‍🏫 All Faculty Departments",
        "action": "flow:faculty"
      }
    ]
  },
  "profile_dr-g-n-sangeetha": {
    "id": "profile_dr-g-n-sangeetha",
    "pageUrl": "https://nmkrv.edu.in/board-of-management/",
    "message": "<div class=\"ssmrv-faculty-card is-full-profile\"><div class=\"ssmrv-faculty-name\">Dr. G. N. Sangeetha</div><div class=\"ssmrv-faculty-badges\"><span class=\"ssmrv-badge-desig\">Head — Documentation Wing &amp; Governing Body Member</span><span class=\"ssmrv-badge-dept\">Administration &amp; Documentation Wing</span></div><div class=\"ssmrv-fac-actions\"><a href=\"https://nmkrv.edu.in/board-of-management/\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"ssmrv-visit-website-btn\">🌐 Visit Official Website Page ↗</a></div><div class=\"ssmrv-faculty-meta\"><div class=\"ssmrv-fac-row\"><span class=\"ssmrv-fac-label\">🎓 Qualifications</span><span class=\"ssmrv-fac-val\">Ph.D.</span></div><div class=\"ssmrv-fac-row\"><span class=\"ssmrv-fac-label\">⏳ Experience</span><span class=\"ssmrv-fac-val\">Institutional Documentation, Administration &amp; Research</span></div><div class=\"ssmrv-fac-row\"><span class=\"ssmrv-fac-label\">🔬 Areas of Expertise</span><span class=\"ssmrv-fac-val\">Institutional Documentation, Quality Records &amp; Academic Governance</span></div><div class=\"ssmrv-fac-row\"><span class=\"ssmrv-fac-label\">🛡️ Committee / Role</span><span class=\"ssmrv-fac-val ssmrv-fac-role-val\">Member — Governing Body | Documentation Wing</span></div><div class=\"ssmrv-fac-section\"><div class=\"ssmrv-fac-sec-title\">📖 Profile Overview</div><div class=\"ssmrv-fac-sec-text\">Dr. G. N. Sangeetha heads the Documentation Wing at NMKRV College, is listed among the Research Faculty (Administration), and serves as a Member of the Governing Body.</div></div><div class=\"ssmrv-fac-section\"><div class=\"ssmrv-fac-sec-title\">🏆 Key Highlights</div><div class=\"ssmrv-fac-sec-text\">Member — Governing Body &amp; Head of Documentation Wing.</div></div><div class=\"ssmrv-fac-contact\"><div>📧 <a href=\"mailto:nmkrv@rvei.edu.in\">nmkrv@rvei.edu.in</a></div><div>📞 <a href=\"tel:08069018900\">080-69018900</a></div></div></div></div>",
    "buttons": [
      {
        "text": "🌐 Visit Official Website Page ↗",
        "url": "https://nmkrv.edu.in/board-of-management/",
        "isPrimary": true
      },
      {
        "text": "🏛️ 🗣️ Languages, Placements, Library, NCC & Sports",
        "action": "flow:faculty_languages_admin"
      },
      {
        "text": "👨‍🏫 All Faculty Departments",
        "action": "flow:faculty"
      }
    ]
  },
  "faculty": {
    "id": "faculty_directory",
    "pageUrl": "https://nmkrv.edu.in/research-faculty/",
    "message": "<div class=\"ssmrv-flow-heading\">👨‍🏫 NMKRV College — Complete Faculty &amp; Leadership Directory</div><div class=\"ssmrv-flow-body\">Explore complete academic profiles across all departments of <b>NMKRV College (Autonomous)</b>, including qualifications, experience, areas of expertise, committee roles, and direct links to official webpage profiles on <code>nmkrv.edu.in</code>.<br><br>💡 <i>Tip: Select any department below or type any professor's name in the chat box.</i></div>",
    "buttons": [
      {
        "text": "🏛️ Institutional Leadership & Governance",
        "action": "flow:faculty_leadership"
      },
      {
        "text": "📊 Commerce",
        "action": "flow:faculty_commerce"
      },
      {
        "text": "📈 Management",
        "action": "flow:faculty_bba"
      },
      {
        "text": "💻 Computer Applications, CS & Data Science",
        "action": "flow:faculty_bca"
      },
      {
        "text": "🔬 Physical & Chemical Sciences",
        "action": "flow:faculty_physical_sciences"
      },
      {
        "text": "🧬 Life Sciences",
        "action": "flow:faculty_life_sciences"
      },
      {
        "text": "🎭 Humanities & Media Studies",
        "action": "flow:faculty_humanities"
      },
      {
        "text": "🗣️ Languages, Placements, Library, NCC & Sports",
        "action": "flow:faculty_languages_admin"
      },
      {
        "text": "🌐 Visit Research Faculty Webpage ↗",
        "url": "https://nmkrv.edu.in/research-faculty/"
      }
    ]
  },
  "faculty_directory": {
    "id": "faculty_directory",
    "pageUrl": "https://nmkrv.edu.in/research-faculty/",
    "message": "<div class=\"ssmrv-flow-heading\">👨‍🏫 NMKRV College — Complete Faculty &amp; Leadership Directory</div><div class=\"ssmrv-flow-body\">Explore complete academic profiles across all departments of <b>NMKRV College (Autonomous)</b>, including qualifications, experience, areas of expertise, committee roles, and direct links to official webpage profiles on <code>nmkrv.edu.in</code>.<br><br>💡 <i>Tip: Select any department below or type any professor's name in the chat box.</i></div>",
    "buttons": [
      {
        "text": "🏛️ Institutional Leadership & Governance",
        "action": "flow:faculty_leadership"
      },
      {
        "text": "📊 Commerce",
        "action": "flow:faculty_commerce"
      },
      {
        "text": "📈 Management",
        "action": "flow:faculty_bba"
      },
      {
        "text": "💻 Computer Applications, CS & Data Science",
        "action": "flow:faculty_bca"
      },
      {
        "text": "🔬 Physical & Chemical Sciences",
        "action": "flow:faculty_physical_sciences"
      },
      {
        "text": "🧬 Life Sciences",
        "action": "flow:faculty_life_sciences"
      },
      {
        "text": "🎭 Humanities & Media Studies",
        "action": "flow:faculty_humanities"
      },
      {
        "text": "🗣️ Languages, Placements, Library, NCC & Sports",
        "action": "flow:faculty_languages_admin"
      },
      {
        "text": "🌐 Visit Research Faculty Webpage ↗",
        "url": "https://nmkrv.edu.in/research-faculty/"
      }
    ]
  },
  "faculty_commerce_mgmt": {
    "id": "faculty_commerce_mgmt",
    "pageUrl": "https://nmkrv.edu.in/commerce/",
    "message": "<div class=\"ssmrv-flow-heading\">📊 Department of Commerce (B.Com &amp; M.Com)</div><div class=\"ssmrv-flow-subheading\">UG &amp; PG Commerce, Accounting, Taxation &amp; FinTech Faculty — Select <b>View Full Profile</b> or <b>Visit Website Page ↗</b> on any card below:</div><div class=\"ssmrv-dept-profile-list\"><div class=\"ssmrv-dept-profile-item\" data-profile-id=\"dr-renuka-somalu-rathod\" title=\"Click to view full profile of Dr. Renuka Somalu Rathod\"><div class=\"ssmrv-dept-prof-header\"><span class=\"ssmrv-dept-prof-name\">Dr. Renuka Somalu Rathod</span></div><div class=\"ssmrv-faculty-badges\"><span class=\"ssmrv-badge-desig\">Assistant Professor</span><span class=\"ssmrv-badge-dept\">Commerce (B.Com &amp; M.Com)</span></div><div class=\"ssmrv-dept-prof-actions\"><span class=\"ssmrv-dept-prof-cta\">👤 View Full Profile</span><a href=\"https://nmkrv.edu.in/commerce/\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"ssmrv-dept-visit-btn\" onclick=\"event.stopPropagation();\">🌐 Visit Website Page ↗</a></div><div class=\"ssmrv-dept-prof-meta\"><div class=\"ssmrv-dept-prof-row\"><strong>Qualifications:</strong> M.Com., Ph.D.</div><div class=\"ssmrv-dept-prof-row\"><strong>Experience:</strong> Senior Faculty &amp; Research Guide in Commerce</div><div class=\"ssmrv-dept-prof-row\"><strong>Expertise:</strong> Taxation Law and Practice, Corporate Accounting &amp; Financial Management</div><div class=\"ssmrv-dept-prof-row ssmrv-dept-prof-comm\"><strong>Role:</strong> Research Faculty — Commerce</div></div></div><div class=\"ssmrv-dept-profile-item\" data-profile-id=\"prof-manjunatha-r\" title=\"Click to view full profile of Prof. Manjunatha R.\"><div class=\"ssmrv-dept-prof-header\"><span class=\"ssmrv-dept-prof-name\">Prof. Manjunatha R.</span></div><div class=\"ssmrv-faculty-badges\"><span class=\"ssmrv-badge-desig\">Assistant Professor</span><span class=\"ssmrv-badge-dept\">Commerce (B.Com)</span></div><div class=\"ssmrv-dept-prof-actions\"><span class=\"ssmrv-dept-prof-cta\">👤 View Full Profile</span><a href=\"https://nmkrv.edu.in/commerce/\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"ssmrv-dept-visit-btn\" onclick=\"event.stopPropagation();\">🌐 Visit Website Page ↗</a></div><div class=\"ssmrv-dept-prof-meta\"><div class=\"ssmrv-dept-prof-row\"><strong>Qualifications:</strong> M.Com., NET</div><div class=\"ssmrv-dept-prof-row\"><strong>Experience:</strong> Senior Teaching Experience in Commerce &amp; Accounting</div><div class=\"ssmrv-dept-prof-row\"><strong>Expertise:</strong> Advanced Corporate Accounting, Holding Company Accounts &amp; Financial Reporting</div><div class=\"ssmrv-dept-prof-row ssmrv-dept-prof-comm\"><strong>Role:</strong> Executive Committee Member — Unnat Bharat Abhiyan (UBA)</div></div></div><div class=\"ssmrv-dept-profile-item\" data-profile-id=\"mrs-jyothi-r-aiyangar\" title=\"Click to view full profile of Mrs. Jyothi R. Aiyangar\"><div class=\"ssmrv-dept-prof-header\"><span class=\"ssmrv-dept-prof-name\">Mrs. Jyothi R. Aiyangar</span></div><div class=\"ssmrv-faculty-badges\"><span class=\"ssmrv-badge-desig\">Assistant Professor</span><span class=\"ssmrv-badge-dept\">Commerce (B.Com)</span></div><div class=\"ssmrv-dept-prof-actions\"><span class=\"ssmrv-dept-prof-cta\">👤 View Full Profile</span><a href=\"https://nmkrv.edu.in/commerce/\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"ssmrv-dept-visit-btn\" onclick=\"event.stopPropagation();\">🌐 Visit Website Page ↗</a></div><div class=\"ssmrv-dept-prof-meta\"><div class=\"ssmrv-dept-prof-row\"><strong>Qualifications:</strong> M.Com., PGDFM</div><div class=\"ssmrv-dept-prof-row\"><strong>Experience:</strong> Academic &amp; Examination Administration Experience</div><div class=\"ssmrv-dept-prof-row\"><strong>Expertise:</strong> Principles and Practices of Auditing, Financial Management &amp; Corporate Accounting</div><div class=\"ssmrv-dept-prof-row ssmrv-dept-prof-comm\"><strong>Role:</strong> Exam Core Team — COE | Member — Innovation &amp; Social Media Cell</div></div></div><div class=\"ssmrv-dept-profile-item\" data-profile-id=\"mrs-geetha-p\" title=\"Click to view full profile of Mrs. Geetha P.\"><div class=\"ssmrv-dept-prof-header\"><span class=\"ssmrv-dept-prof-name\">Mrs. Geetha P.</span></div><div class=\"ssmrv-faculty-badges\"><span class=\"ssmrv-badge-desig\">Assistant Professor</span><span class=\"ssmrv-badge-dept\">Commerce (B.Com)</span></div><div class=\"ssmrv-dept-prof-actions\"><span class=\"ssmrv-dept-prof-cta\">👤 View Full Profile</span><a href=\"https://nmkrv.edu.in/commerce/\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"ssmrv-dept-visit-btn\" onclick=\"event.stopPropagation();\">🌐 Visit Website Page ↗</a></div><div class=\"ssmrv-dept-prof-meta\"><div class=\"ssmrv-dept-prof-row\"><strong>Qualifications:</strong> M.Com.</div><div class=\"ssmrv-dept-prof-row\"><strong>Experience:</strong> Teaching Experience in Commerce &amp; E-Business</div><div class=\"ssmrv-dept-prof-row\"><strong>Expertise:</strong> E-Business and Accounting, Financial Accounting &amp; Marketing Management</div><div class=\"ssmrv-dept-prof-row ssmrv-dept-prof-comm\"><strong>Role:</strong> Coordinator — Fine Arts Club | Member — SC/ST Committee</div></div></div><div class=\"ssmrv-dept-profile-item\" data-profile-id=\"mrs-shilpa-a\" title=\"Click to view full profile of Mrs. Shilpa A.\"><div class=\"ssmrv-dept-prof-header\"><span class=\"ssmrv-dept-prof-name\">Mrs. Shilpa A.</span></div><div class=\"ssmrv-faculty-badges\"><span class=\"ssmrv-badge-desig\">Assistant Professor</span><span class=\"ssmrv-badge-dept\">Commerce (B.Com)</span></div><div class=\"ssmrv-dept-prof-actions\"><span class=\"ssmrv-dept-prof-cta\">👤 View Full Profile</span><a href=\"https://nmkrv.edu.in/commerce/\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"ssmrv-dept-visit-btn\" onclick=\"event.stopPropagation();\">🌐 Visit Website Page ↗</a></div><div class=\"ssmrv-dept-prof-meta\"><div class=\"ssmrv-dept-prof-row\"><strong>Qualifications:</strong> M.Com.</div><div class=\"ssmrv-dept-prof-row\"><strong>Experience:</strong> Teaching Experience in Commerce &amp; Capital Markets</div><div class=\"ssmrv-dept-prof-row\"><strong>Expertise:</strong> Stock and Commodity Markets, Financial Services &amp; Corporate Administration</div><div class=\"ssmrv-dept-prof-row ssmrv-dept-prof-comm\"><strong>Role:</strong> Committee Member — Fine Arts Club</div></div></div><div class=\"ssmrv-dept-profile-item\" data-profile-id=\"ms-manasa-j\" title=\"Click to view full profile of Ms. Manasa J.\"><div class=\"ssmrv-dept-prof-header\"><span class=\"ssmrv-dept-prof-name\">Ms. Manasa J.</span></div><div class=\"ssmrv-faculty-badges\"><span class=\"ssmrv-badge-desig\">Assistant Professor</span><span class=\"ssmrv-badge-dept\">Commerce (B.Com)</span></div><div class=\"ssmrv-dept-prof-actions\"><span class=\"ssmrv-dept-prof-cta\">👤 View Full Profile</span><a href=\"https://nmkrv.edu.in/commerce/\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"ssmrv-dept-visit-btn\" onclick=\"event.stopPropagation();\">🌐 Visit Website Page ↗</a></div><div class=\"ssmrv-dept-prof-meta\"><div class=\"ssmrv-dept-prof-row\"><strong>Qualifications:</strong> M.Com., KSET</div><div class=\"ssmrv-dept-prof-row\"><strong>Experience:</strong> Teaching Experience in Commerce &amp; Taxation</div><div class=\"ssmrv-dept-prof-row\"><strong>Expertise:</strong> Goods and Services Tax (GST), Indirect Taxation &amp; Financial Accounting</div><div class=\"ssmrv-dept-prof-row ssmrv-dept-prof-comm\"><strong>Role:</strong> Department of Commerce</div></div></div><div class=\"ssmrv-dept-profile-item\" data-profile-id=\"mrs-anu-revamma-parvathi\" title=\"Click to view full profile of Mrs. Anu Revamma Parvathi\"><div class=\"ssmrv-dept-prof-header\"><span class=\"ssmrv-dept-prof-name\">Mrs. Anu Revamma Parvathi</span></div><div class=\"ssmrv-faculty-badges\"><span class=\"ssmrv-badge-desig\">Assistant Professor</span><span class=\"ssmrv-badge-dept\">Commerce (B.Com)</span></div><div class=\"ssmrv-dept-prof-actions\"><span class=\"ssmrv-dept-prof-cta\">👤 View Full Profile</span><a href=\"https://nmkrv.edu.in/commerce/\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"ssmrv-dept-visit-btn\" onclick=\"event.stopPropagation();\">🌐 Visit Website Page ↗</a></div><div class=\"ssmrv-dept-prof-meta\"><div class=\"ssmrv-dept-prof-row\"><strong>Qualifications:</strong> M.Com., KSET</div><div class=\"ssmrv-dept-prof-row\"><strong>Experience:</strong> Teaching &amp; Institutional Committee Leadership</div><div class=\"ssmrv-dept-prof-row\"><strong>Expertise:</strong> Advanced Financial Accounting, Corporate Accounting &amp; Business Operations</div><div class=\"ssmrv-dept-prof-row ssmrv-dept-prof-comm\"><strong>Role:</strong> Coordinator — Anti-Ragging Cell, Innovation Cell &amp; Social Media Cell | IQAC &amp; Youth Red Cross Member</div></div></div><div class=\"ssmrv-dept-profile-item\" data-profile-id=\"mrs-sarala-d\" title=\"Click to view full profile of Mrs. Sarala D.\"><div class=\"ssmrv-dept-prof-header\"><span class=\"ssmrv-dept-prof-name\">Mrs. Sarala D.</span></div><div class=\"ssmrv-faculty-badges\"><span class=\"ssmrv-badge-desig\">Assistant Professor</span><span class=\"ssmrv-badge-dept\">Commerce (B.Com)</span></div><div class=\"ssmrv-dept-prof-actions\"><span class=\"ssmrv-dept-prof-cta\">👤 View Full Profile</span><a href=\"https://nmkrv.edu.in/commerce/\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"ssmrv-dept-visit-btn\" onclick=\"event.stopPropagation();\">🌐 Visit Website Page ↗</a></div><div class=\"ssmrv-dept-prof-meta\"><div class=\"ssmrv-dept-prof-row\"><strong>Qualifications:</strong> M.Com., B.Ed., DFD, K-SET</div><div class=\"ssmrv-dept-prof-row\"><strong>Experience:</strong> Teaching Experience in Quantitative Analysis &amp; Commerce</div><div class=\"ssmrv-dept-prof-row\"><strong>Expertise:</strong> Quantitative Analysis for Business Decisions (QABD), Statistics &amp; Cost Accounting</div><div class=\"ssmrv-dept-prof-row ssmrv-dept-prof-comm\"><strong>Role:</strong> Member — IQAC, Anti-Ragging Cell &amp; Forum for Strength and Intellect</div></div></div><div class=\"ssmrv-dept-profile-item\" data-profile-id=\"mrs-chinmayee-s-dixit\" title=\"Click to view full profile of Mrs. Chinmayee S. Dixit\"><div class=\"ssmrv-dept-prof-header\"><span class=\"ssmrv-dept-prof-name\">Mrs. Chinmayee S. Dixit</span></div><div class=\"ssmrv-faculty-badges\"><span class=\"ssmrv-badge-desig\">Assistant Professor</span><span class=\"ssmrv-badge-dept\">Commerce (B.Com)</span></div><div class=\"ssmrv-dept-prof-actions\"><span class=\"ssmrv-dept-prof-cta\">👤 View Full Profile</span><a href=\"https://nmkrv.edu.in/commerce/\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"ssmrv-dept-visit-btn\" onclick=\"event.stopPropagation();\">🌐 Visit Website Page ↗</a></div><div class=\"ssmrv-dept-prof-meta\"><div class=\"ssmrv-dept-prof-row\"><strong>Qualifications:</strong> M.Com.</div><div class=\"ssmrv-dept-prof-row\"><strong>Experience:</strong> Teaching Experience in Commerce &amp; Management</div><div class=\"ssmrv-dept-prof-row\"><strong>Expertise:</strong> Financial Accounting, Cost Management &amp; Corporate Administration</div><div class=\"ssmrv-dept-prof-row ssmrv-dept-prof-comm\"><strong>Role:</strong> Department of Commerce</div></div></div><div class=\"ssmrv-dept-profile-item\" data-profile-id=\"mrs-swetha-a-m\" title=\"Click to view full profile of Mrs. Swetha A. M.\"><div class=\"ssmrv-dept-prof-header\"><span class=\"ssmrv-dept-prof-name\">Mrs. Swetha A. M.</span></div><div class=\"ssmrv-faculty-badges\"><span class=\"ssmrv-badge-desig\">Assistant Professor</span><span class=\"ssmrv-badge-dept\">Commerce (B.Com)</span></div><div class=\"ssmrv-dept-prof-actions\"><span class=\"ssmrv-dept-prof-cta\">👤 View Full Profile</span><a href=\"https://nmkrv.edu.in/commerce/\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"ssmrv-dept-visit-btn\" onclick=\"event.stopPropagation();\">🌐 Visit Website Page ↗</a></div><div class=\"ssmrv-dept-prof-meta\"><div class=\"ssmrv-dept-prof-row\"><strong>Qualifications:</strong> M.Com., KSET</div><div class=\"ssmrv-dept-prof-row\"><strong>Experience:</strong> Teaching Experience in Commerce &amp; Accounting</div><div class=\"ssmrv-dept-prof-row\"><strong>Expertise:</strong> Corporate Accounting, Financial Management &amp; Banking Operations</div><div class=\"ssmrv-dept-prof-row ssmrv-dept-prof-comm\"><strong>Role:</strong> Department of Commerce</div></div></div><div class=\"ssmrv-dept-profile-item\" data-profile-id=\"mrs-prathiksha-p\" title=\"Click to view full profile of Mrs. Prathiksha P.\"><div class=\"ssmrv-dept-prof-header\"><span class=\"ssmrv-dept-prof-name\">Mrs. Prathiksha P.</span></div><div class=\"ssmrv-faculty-badges\"><span class=\"ssmrv-badge-desig\">Lecturer</span><span class=\"ssmrv-badge-dept\">Commerce (B.Com)</span></div><div class=\"ssmrv-dept-prof-actions\"><span class=\"ssmrv-dept-prof-cta\">👤 View Full Profile</span><a href=\"https://nmkrv.edu.in/commerce/\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"ssmrv-dept-visit-btn\" onclick=\"event.stopPropagation();\">🌐 Visit Website Page ↗</a></div><div class=\"ssmrv-dept-prof-meta\"><div class=\"ssmrv-dept-prof-row\"><strong>Qualifications:</strong> M.Com.</div><div class=\"ssmrv-dept-prof-row\"><strong>Experience:</strong> Teaching Experience in Commerce</div><div class=\"ssmrv-dept-prof-row\"><strong>Expertise:</strong> Financial Accounting, Business Management &amp; Marketing</div><div class=\"ssmrv-dept-prof-row ssmrv-dept-prof-comm\"><strong>Role:</strong> Department of Commerce</div></div></div><div class=\"ssmrv-dept-profile-item\" data-profile-id=\"ms-rajeshwari-nag-shilpa\" title=\"Click to view full profile of Ms. Rajeshwari Nag Shilpa\"><div class=\"ssmrv-dept-prof-header\"><span class=\"ssmrv-dept-prof-name\">Ms. Rajeshwari Nag Shilpa</span></div><div class=\"ssmrv-faculty-badges\"><span class=\"ssmrv-badge-desig\">Assistant Professor</span><span class=\"ssmrv-badge-dept\">Commerce (B.Com)</span></div><div class=\"ssmrv-dept-prof-actions\"><span class=\"ssmrv-dept-prof-cta\">👤 View Full Profile</span><a href=\"https://nmkrv.edu.in/commerce/\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"ssmrv-dept-visit-btn\" onclick=\"event.stopPropagation();\">🌐 Visit Website Page ↗</a></div><div class=\"ssmrv-dept-prof-meta\"><div class=\"ssmrv-dept-prof-row\"><strong>Qualifications:</strong> M.Com.</div><div class=\"ssmrv-dept-prof-row\"><strong>Experience:</strong> Teaching Experience in Commerce</div><div class=\"ssmrv-dept-prof-row\"><strong>Expertise:</strong> Accounting, Taxation &amp; Corporate Administration</div><div class=\"ssmrv-dept-prof-row ssmrv-dept-prof-comm\"><strong>Role:</strong> Department of Commerce</div></div></div><div class=\"ssmrv-dept-profile-item\" data-profile-id=\"ms-dhrakshayini\" title=\"Click to view full profile of Ms. Dhrakshayini\"><div class=\"ssmrv-dept-prof-header\"><span class=\"ssmrv-dept-prof-name\">Ms. Dhrakshayini</span></div><div class=\"ssmrv-faculty-badges\"><span class=\"ssmrv-badge-desig\">Assistant Professor</span><span class=\"ssmrv-badge-dept\">Commerce (B.Com)</span></div><div class=\"ssmrv-dept-prof-actions\"><span class=\"ssmrv-dept-prof-cta\">👤 View Full Profile</span><a href=\"https://nmkrv.edu.in/commerce/\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"ssmrv-dept-visit-btn\" onclick=\"event.stopPropagation();\">🌐 Visit Website Page ↗</a></div><div class=\"ssmrv-dept-prof-meta\"><div class=\"ssmrv-dept-prof-row\"><strong>Qualifications:</strong> M.Com.</div><div class=\"ssmrv-dept-prof-row\"><strong>Experience:</strong> Teaching Experience in Commerce</div><div class=\"ssmrv-dept-prof-row\"><strong>Expertise:</strong> Commerce, Financial Services &amp; Business Studies</div><div class=\"ssmrv-dept-prof-row ssmrv-dept-prof-comm\"><strong>Role:</strong> Department of Commerce</div></div></div><div class=\"ssmrv-dept-profile-item\" data-profile-id=\"ms-shilpa-navin\" title=\"Click to view full profile of Ms. Shilpa Navin\"><div class=\"ssmrv-dept-prof-header\"><span class=\"ssmrv-dept-prof-name\">Ms. Shilpa Navin</span></div><div class=\"ssmrv-faculty-badges\"><span class=\"ssmrv-badge-desig\">Assistant Professor</span><span class=\"ssmrv-badge-dept\">Commerce (B.Com)</span></div><div class=\"ssmrv-dept-prof-actions\"><span class=\"ssmrv-dept-prof-cta\">👤 View Full Profile</span><a href=\"https://nmkrv.edu.in/commerce/\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"ssmrv-dept-visit-btn\" onclick=\"event.stopPropagation();\">🌐 Visit Website Page ↗</a></div><div class=\"ssmrv-dept-prof-meta\"><div class=\"ssmrv-dept-prof-row\"><strong>Qualifications:</strong> M.Com.</div><div class=\"ssmrv-dept-prof-row\"><strong>Experience:</strong> Teaching Experience in Commerce</div><div class=\"ssmrv-dept-prof-row\"><strong>Expertise:</strong> Commerce, FinTech &amp; Business Accounting</div><div class=\"ssmrv-dept-prof-row ssmrv-dept-prof-comm\"><strong>Role:</strong> Department of Commerce</div></div></div><div class=\"ssmrv-dept-profile-item\" data-profile-id=\"dr-shridhar-murthy\" title=\"Click to view full profile of Dr. S. V. Shridhara Murthy\"><div class=\"ssmrv-dept-prof-header\"><span class=\"ssmrv-dept-prof-name\">Dr. S. V. Shridhara Murthy</span></div><div class=\"ssmrv-faculty-badges\"><span class=\"ssmrv-badge-desig\">Associate Professor</span><span class=\"ssmrv-badge-dept\">Commerce (B.Com)</span></div><div class=\"ssmrv-dept-prof-actions\"><span class=\"ssmrv-dept-prof-cta\">👤 View Full Profile</span><a href=\"https://nmkrv.edu.in/forum-for-strength-and-intellect/\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"ssmrv-dept-visit-btn\" onclick=\"event.stopPropagation();\">🌐 Visit Website Page ↗</a></div><div class=\"ssmrv-dept-prof-meta\"><div class=\"ssmrv-dept-prof-row\"><strong>Qualifications:</strong> M.Com., Ph.D.</div><div class=\"ssmrv-dept-prof-row\"><strong>Experience:</strong> Senior Associate Professor &amp; Research Investigator in Commerce</div><div class=\"ssmrv-dept-prof-row\"><strong>Expertise:</strong> Investment Management, Portfolio Analysis, Micro-Finance &amp; Rural Development</div><div class=\"ssmrv-dept-prof-row ssmrv-dept-prof-comm\"><strong>Role:</strong> Coordinator — Forum for Strength and Intellect (FSI)</div></div></div><div class=\"ssmrv-dept-profile-item\" data-profile-id=\"ms-shashirekha-b-v\" title=\"Click to view full profile of Ms. Shashirekha B. V.\"><div class=\"ssmrv-dept-prof-header\"><span class=\"ssmrv-dept-prof-name\">Ms. Shashirekha B. V.</span></div><div class=\"ssmrv-faculty-badges\"><span class=\"ssmrv-badge-desig\">Assistant Professor</span><span class=\"ssmrv-badge-dept\">Commerce (B.Com)</span></div><div class=\"ssmrv-dept-prof-actions\"><span class=\"ssmrv-dept-prof-cta\">👤 View Full Profile</span><a href=\"https://nmkrv.edu.in/e-cell/\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"ssmrv-dept-visit-btn\" onclick=\"event.stopPropagation();\">🌐 Visit Website Page ↗</a></div><div class=\"ssmrv-dept-prof-meta\"><div class=\"ssmrv-dept-prof-row\"><strong>Qualifications:</strong> M.Com.</div><div class=\"ssmrv-dept-prof-row\"><strong>Experience:</strong> Teaching &amp; Entrepreneurship Mentorship Experience</div><div class=\"ssmrv-dept-prof-row\"><strong>Expertise:</strong> Business Regulations, Entrepreneurship Development &amp; Corporate Law</div><div class=\"ssmrv-dept-prof-row ssmrv-dept-prof-comm\"><strong>Role:</strong> Coordinator — E-Cell</div></div></div><div class=\"ssmrv-dept-profile-item\" data-profile-id=\"ms-shobha-v\" title=\"Click to view full profile of Ms. Shobha V.\"><div class=\"ssmrv-dept-prof-header\"><span class=\"ssmrv-dept-prof-name\">Ms. Shobha V.</span></div><div class=\"ssmrv-faculty-badges\"><span class=\"ssmrv-badge-desig\">Assistant Professor</span><span class=\"ssmrv-badge-dept\">Commerce (B.Com)</span></div><div class=\"ssmrv-dept-prof-actions\"><span class=\"ssmrv-dept-prof-cta\">👤 View Full Profile</span><a href=\"https://nmkrv.edu.in/forum-for-strength-and-intellect/\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"ssmrv-dept-visit-btn\" onclick=\"event.stopPropagation();\">🌐 Visit Website Page ↗</a></div><div class=\"ssmrv-dept-prof-meta\"><div class=\"ssmrv-dept-prof-row\"><strong>Qualifications:</strong> M.Com.</div><div class=\"ssmrv-dept-prof-row\"><strong>Experience:</strong> Teaching Experience in Commerce &amp; Taxation</div><div class=\"ssmrv-dept-prof-row\"><strong>Expertise:</strong> Integrated Goods and Services Tax (IGST) Act &amp; Business Decisions</div><div class=\"ssmrv-dept-prof-row ssmrv-dept-prof-comm\"><strong>Role:</strong> Member — Forum for Strength and Intellect (FSI)</div></div></div><div class=\"ssmrv-dept-profile-item\" data-profile-id=\"mrs-madhuri-s-d\" title=\"Click to view full profile of Mrs. Madhuri S. D.\"><div class=\"ssmrv-dept-prof-header\"><span class=\"ssmrv-dept-prof-name\">Mrs. Madhuri S. D.</span></div><div class=\"ssmrv-faculty-badges\"><span class=\"ssmrv-badge-desig\">Assistant Professor — PG Commerce</span><span class=\"ssmrv-badge-dept\">PG Commerce (M.Com)</span></div><div class=\"ssmrv-dept-prof-actions\"><span class=\"ssmrv-dept-prof-cta\">👤 View Full Profile</span><a href=\"https://nmkrv.edu.in/m-com/\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"ssmrv-dept-visit-btn\" onclick=\"event.stopPropagation();\">🌐 Visit Website Page ↗</a></div><div class=\"ssmrv-dept-prof-meta\"><div class=\"ssmrv-dept-prof-row\"><strong>Qualifications:</strong> M.Com., MBA, PGDBFM</div><div class=\"ssmrv-dept-prof-row\"><strong>Experience:</strong> Postgraduate Teaching Experience in Commerce &amp; Management</div><div class=\"ssmrv-dept-prof-row\"><strong>Expertise:</strong> Strategic Management, Advanced Financial Management, Banking &amp; Risk Management</div><div class=\"ssmrv-dept-prof-row ssmrv-dept-prof-comm\"><strong>Role:</strong> PG Department of Commerce (M.Com)</div></div></div><div class=\"ssmrv-dept-profile-item\" data-profile-id=\"dr-krishika-m-a\" title=\"Click to view full profile of Dr. Krishika M. A.\"><div class=\"ssmrv-dept-prof-header\"><span class=\"ssmrv-dept-prof-name\">Dr. Krishika M. A.</span></div><div class=\"ssmrv-faculty-badges\"><span class=\"ssmrv-badge-desig\">Assistant Professor — PG Commerce</span><span class=\"ssmrv-badge-dept\">PG Commerce (M.Com)</span></div><div class=\"ssmrv-dept-prof-actions\"><span class=\"ssmrv-dept-prof-cta\">👤 View Full Profile</span><a href=\"https://nmkrv.edu.in/m-com/\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"ssmrv-dept-visit-btn\" onclick=\"event.stopPropagation();\">🌐 Visit Website Page ↗</a></div><div class=\"ssmrv-dept-prof-meta\"><div class=\"ssmrv-dept-prof-row\"><strong>Qualifications:</strong> M.Com., M.Phil., Ph.D.</div><div class=\"ssmrv-dept-prof-row\"><strong>Experience:</strong> Postgraduate Teaching &amp; Research Experience</div><div class=\"ssmrv-dept-prof-row\"><strong>Expertise:</strong> Business Research Methods, Corporate Financial Reporting &amp; Quantitative Techniques</div><div class=\"ssmrv-dept-prof-row ssmrv-dept-prof-comm\"><strong>Role:</strong> PG Department of Commerce (M.Com)</div></div></div></div>",
    "buttons": [
      {
        "text": "👤 Dr. Renuka Somalu Rathod",
        "action": "profile:dr-renuka-somalu-rathod"
      },
      {
        "text": "👤 Prof. Manjunatha R.",
        "action": "profile:prof-manjunatha-r"
      },
      {
        "text": "👤 Mrs. Jyothi R. Aiyangar",
        "action": "profile:mrs-jyothi-r-aiyangar"
      },
      {
        "text": "👤 Mrs. Geetha P.",
        "action": "profile:mrs-geetha-p"
      },
      {
        "text": "👤 Mrs. Shilpa A.",
        "action": "profile:mrs-shilpa-a"
      },
      {
        "text": "👤 Ms. Manasa J.",
        "action": "profile:ms-manasa-j"
      },
      {
        "text": "👤 Mrs. Anu Revamma Parvathi",
        "action": "profile:mrs-anu-revamma-parvathi"
      },
      {
        "text": "👤 Mrs. Sarala D.",
        "action": "profile:mrs-sarala-d"
      },
      {
        "text": "👤 Mrs. Chinmayee S. Dixit",
        "action": "profile:mrs-chinmayee-s-dixit"
      },
      {
        "text": "👤 Mrs. Swetha A. M.",
        "action": "profile:mrs-swetha-a-m"
      },
      {
        "text": "👤 Mrs. Prathiksha P.",
        "action": "profile:mrs-prathiksha-p"
      },
      {
        "text": "👤 Ms. Rajeshwari Nag Shilpa",
        "action": "profile:ms-rajeshwari-nag-shilpa"
      },
      {
        "text": "👤 Ms. Dhrakshayini",
        "action": "profile:ms-dhrakshayini"
      },
      {
        "text": "👤 Ms. Shilpa Navin",
        "action": "profile:ms-shilpa-navin"
      },
      {
        "text": "👤 Dr. S. V. Shridhara Murthy",
        "action": "profile:dr-shridhar-murthy"
      },
      {
        "text": "👤 Ms. Shashirekha B. V.",
        "action": "profile:ms-shashirekha-b-v"
      },
      {
        "text": "👤 Ms. Shobha V.",
        "action": "profile:ms-shobha-v"
      },
      {
        "text": "👤 Mrs. Madhuri S. D.",
        "action": "profile:mrs-madhuri-s-d"
      },
      {
        "text": "👤 Dr. Krishika M. A.",
        "action": "profile:dr-krishika-m-a"
      },
      {
        "text": "🌐 Visit Department Webpage ↗",
        "url": "https://nmkrv.edu.in/commerce/"
      },
      {
        "text": "👨‍🏫 All Faculty Departments",
        "action": "flow:faculty"
      }
    ]
  },
  "faculty_cs_bca": {
    "id": "faculty_cs_bca",
    "pageUrl": "https://nmkrv.edu.in/bca/",
    "message": "<div class=\"ssmrv-flow-heading\">💻 Department of Computer Applications, CS &amp; Data Science</div><div class=\"ssmrv-flow-subheading\">AICTE Approved BCA, B.Sc. Computer Science &amp; M.Sc. Data Science Faculty — Select <b>View Full Profile</b> or <b>Visit Website Page ↗</b> on any card below:</div><div class=\"ssmrv-dept-profile-list\"><div class=\"ssmrv-dept-profile-item\" data-profile-id=\"mrs-vandana-g-p\" title=\"Click to view full profile of Mrs. Vandana G. P.\"><div class=\"ssmrv-dept-prof-header\"><span class=\"ssmrv-dept-prof-name\">Mrs. Vandana G. P.</span></div><div class=\"ssmrv-faculty-badges\"><span class=\"ssmrv-badge-desig\">Assistant Professor</span><span class=\"ssmrv-badge-dept\">Computer Applications (BCA)</span></div><div class=\"ssmrv-dept-prof-actions\"><span class=\"ssmrv-dept-prof-cta\">👤 View Full Profile</span><a href=\"https://nmkrv.edu.in/bca/\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"ssmrv-dept-visit-btn\" onclick=\"event.stopPropagation();\">🌐 Visit Website Page ↗</a></div><div class=\"ssmrv-dept-prof-meta\"><div class=\"ssmrv-dept-prof-row\"><strong>Qualifications:</strong> MCA</div><div class=\"ssmrv-dept-prof-row\"><strong>Experience:</strong> Full-Time Faculty in BCA (Joined June 2022)</div><div class=\"ssmrv-dept-prof-row\"><strong>Expertise:</strong> Software Engineering, Database Management Systems &amp; Web Technologies</div><div class=\"ssmrv-dept-prof-row ssmrv-dept-prof-comm\"><strong>Role:</strong> Department of Computer Applications (BCA)</div></div></div><div class=\"ssmrv-dept-profile-item\" data-profile-id=\"mrs-bindhya-m\" title=\"Click to view full profile of Mrs. Bindhya M.\"><div class=\"ssmrv-dept-prof-header\"><span class=\"ssmrv-dept-prof-name\">Mrs. Bindhya M.</span></div><div class=\"ssmrv-faculty-badges\"><span class=\"ssmrv-badge-desig\">Assistant Professor</span><span class=\"ssmrv-badge-dept\">Computer Applications (BCA)</span></div><div class=\"ssmrv-dept-prof-actions\"><span class=\"ssmrv-dept-prof-cta\">👤 View Full Profile</span><a href=\"https://nmkrv.edu.in/bca/\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"ssmrv-dept-visit-btn\" onclick=\"event.stopPropagation();\">🌐 Visit Website Page ↗</a></div><div class=\"ssmrv-dept-prof-meta\"><div class=\"ssmrv-dept-prof-row\"><strong>Qualifications:</strong> MCA, M.Sc. Computer Science</div><div class=\"ssmrv-dept-prof-row\"><strong>Experience:</strong> 8+ Years at NMKRV College (Joined January 2018)</div><div class=\"ssmrv-dept-prof-row\"><strong>Expertise:</strong> Object-Oriented Programming, Data Structures &amp; Operating Systems</div><div class=\"ssmrv-dept-prof-row ssmrv-dept-prof-comm\"><strong>Role:</strong> Exam Core Team — Office of the Controller of Examinations</div></div></div><div class=\"ssmrv-dept-profile-item\" data-profile-id=\"ms-haritha-n\" title=\"Click to view full profile of Ms. Haritha N.\"><div class=\"ssmrv-dept-prof-header\"><span class=\"ssmrv-dept-prof-name\">Ms. Haritha N.</span></div><div class=\"ssmrv-faculty-badges\"><span class=\"ssmrv-badge-desig\">Assistant Professor</span><span class=\"ssmrv-badge-dept\">Computer Applications (BCA)</span></div><div class=\"ssmrv-dept-prof-actions\"><span class=\"ssmrv-dept-prof-cta\">👤 View Full Profile</span><a href=\"https://nmkrv.edu.in/bca/\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"ssmrv-dept-visit-btn\" onclick=\"event.stopPropagation();\">🌐 Visit Website Page ↗</a></div><div class=\"ssmrv-dept-prof-meta\"><div class=\"ssmrv-dept-prof-row\"><strong>Qualifications:</strong> MCA</div><div class=\"ssmrv-dept-prof-row\"><strong>Experience:</strong> Full-Time Faculty in BCA (Joined October 2023)</div><div class=\"ssmrv-dept-prof-row\"><strong>Expertise:</strong> Computer Networks, Programming in C/Java &amp; Cloud Computing</div><div class=\"ssmrv-dept-prof-row ssmrv-dept-prof-comm\"><strong>Role:</strong> Department of Computer Applications (BCA)</div></div></div><div class=\"ssmrv-dept-profile-item\" data-profile-id=\"ms-rochana-g\" title=\"Click to view full profile of Ms. Rochana G.\"><div class=\"ssmrv-dept-prof-header\"><span class=\"ssmrv-dept-prof-name\">Ms. Rochana G.</span></div><div class=\"ssmrv-faculty-badges\"><span class=\"ssmrv-badge-desig\">Assistant Professor</span><span class=\"ssmrv-badge-dept\">Computer Applications (BCA)</span></div><div class=\"ssmrv-dept-prof-actions\"><span class=\"ssmrv-dept-prof-cta\">👤 View Full Profile</span><a href=\"https://nmkrv.edu.in/bca/\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"ssmrv-dept-visit-btn\" onclick=\"event.stopPropagation();\">🌐 Visit Website Page ↗</a></div><div class=\"ssmrv-dept-prof-meta\"><div class=\"ssmrv-dept-prof-row\"><strong>Qualifications:</strong> MCA, M.Sc. Data Science</div><div class=\"ssmrv-dept-prof-row\"><strong>Experience:</strong> Full-Time Faculty in BCA (Joined August 2024)</div><div class=\"ssmrv-dept-prof-row\"><strong>Expertise:</strong> Data Science, Python Programming &amp; Machine Learning</div><div class=\"ssmrv-dept-prof-row ssmrv-dept-prof-comm\"><strong>Role:</strong> Member — Innovation Cell &amp; Social Media Cell</div></div></div><div class=\"ssmrv-dept-profile-item\" data-profile-id=\"ms-aishwarya-s\" title=\"Click to view full profile of Ms. Aishwarya S.\"><div class=\"ssmrv-dept-prof-header\"><span class=\"ssmrv-dept-prof-name\">Ms. Aishwarya S.</span></div><div class=\"ssmrv-faculty-badges\"><span class=\"ssmrv-badge-desig\">Assistant Professor</span><span class=\"ssmrv-badge-dept\">Computer Applications (BCA)</span></div><div class=\"ssmrv-dept-prof-actions\"><span class=\"ssmrv-dept-prof-cta\">👤 View Full Profile</span><a href=\"https://nmkrv.edu.in/bca/\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"ssmrv-dept-visit-btn\" onclick=\"event.stopPropagation();\">🌐 Visit Website Page ↗</a></div><div class=\"ssmrv-dept-prof-meta\"><div class=\"ssmrv-dept-prof-row\"><strong>Qualifications:</strong> MCA</div><div class=\"ssmrv-dept-prof-row\"><strong>Experience:</strong> Full-Time Faculty in BCA (Joined September 2024)</div><div class=\"ssmrv-dept-prof-row\"><strong>Expertise:</strong> Web Application Development, RDBMS &amp; Software Testing</div><div class=\"ssmrv-dept-prof-row ssmrv-dept-prof-comm\"><strong>Role:</strong> Department of Computer Applications (BCA)</div></div></div><div class=\"ssmrv-dept-profile-item\" data-profile-id=\"dr-hamsha-k\" title=\"Click to view full profile of Dr. Hamsha K.\"><div class=\"ssmrv-dept-prof-header\"><span class=\"ssmrv-dept-prof-name\">Dr. Hamsha K.</span></div><div class=\"ssmrv-faculty-badges\"><span class=\"ssmrv-badge-desig\">Assistant Professor</span><span class=\"ssmrv-badge-dept\">Computer Science (B.Sc CS)</span></div><div class=\"ssmrv-dept-prof-actions\"><span class=\"ssmrv-dept-prof-cta\">👤 View Full Profile</span><a href=\"https://nmkrv.edu.in/science/cs/\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"ssmrv-dept-visit-btn\" onclick=\"event.stopPropagation();\">🌐 Visit Website Page ↗</a></div><div class=\"ssmrv-dept-prof-meta\"><div class=\"ssmrv-dept-prof-row\"><strong>Qualifications:</strong> B.E., M.S., M.Tech., Ph.D.</div><div class=\"ssmrv-dept-prof-row\"><strong>Experience:</strong> Senior Faculty &amp; Research Supervisor in Computer Science</div><div class=\"ssmrv-dept-prof-row\"><strong>Expertise:</strong> Computer Networks, Artificial Intelligence, Algorithms &amp; Data Structures</div><div class=\"ssmrv-dept-prof-row ssmrv-dept-prof-comm\"><strong>Role:</strong> Member — Academic Council | Research Faculty — Computer Science</div></div></div><div class=\"ssmrv-dept-profile-item\" data-profile-id=\"mrs-sudha-g\" title=\"Click to view full profile of Mrs. Sudha G.\"><div class=\"ssmrv-dept-prof-header\"><span class=\"ssmrv-dept-prof-name\">Mrs. Sudha G.</span></div><div class=\"ssmrv-faculty-badges\"><span class=\"ssmrv-badge-desig\">Assistant Professor</span><span class=\"ssmrv-badge-dept\">Computer Science &amp; Applications (B.Sc CS / BCA)</span></div><div class=\"ssmrv-dept-prof-actions\"><span class=\"ssmrv-dept-prof-cta\">👤 View Full Profile</span><a href=\"https://nmkrv.edu.in/science/cs/\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"ssmrv-dept-visit-btn\" onclick=\"event.stopPropagation();\">🌐 Visit Website Page ↗</a></div><div class=\"ssmrv-dept-prof-meta\"><div class=\"ssmrv-dept-prof-row\"><strong>Qualifications:</strong> B.E. Computer Science, M.A. English</div><div class=\"ssmrv-dept-prof-row\"><strong>Experience:</strong> 21+ Years at NMKRV College (Joined September 2004)</div><div class=\"ssmrv-dept-prof-row\"><strong>Expertise:</strong> Digital Computer Fundamentals, Linux Programming, Operating Systems &amp; Java</div><div class=\"ssmrv-dept-prof-row ssmrv-dept-prof-comm\"><strong>Role:</strong> Department of Computer Science &amp; BCA</div></div></div><div class=\"ssmrv-dept-profile-item\" data-profile-id=\"ms-vaishnavi-k\" title=\"Click to view full profile of Ms. Vaishnavi K.\"><div class=\"ssmrv-dept-prof-header\"><span class=\"ssmrv-dept-prof-name\">Ms. Vaishnavi K.</span></div><div class=\"ssmrv-faculty-badges\"><span class=\"ssmrv-badge-desig\">Assistant Professor</span><span class=\"ssmrv-badge-dept\">Computer Science &amp; Applications (B.Sc CS / BCA)</span></div><div class=\"ssmrv-dept-prof-actions\"><span class=\"ssmrv-dept-prof-cta\">👤 View Full Profile</span><a href=\"https://nmkrv.edu.in/science/cs/\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"ssmrv-dept-visit-btn\" onclick=\"event.stopPropagation();\">🌐 Visit Website Page ↗</a></div><div class=\"ssmrv-dept-prof-meta\"><div class=\"ssmrv-dept-prof-row\"><strong>Qualifications:</strong> B.E. Computer Science, MCA</div><div class=\"ssmrv-dept-prof-row\"><strong>Experience:</strong> Full-Time Faculty (Joined February 2024)</div><div class=\"ssmrv-dept-prof-row\"><strong>Expertise:</strong> Programming in C, Web Technologies &amp; Visual Programming</div><div class=\"ssmrv-dept-prof-row ssmrv-dept-prof-comm\"><strong>Role:</strong> Department of Computer Science &amp; BCA</div></div></div><div class=\"ssmrv-dept-profile-item\" data-profile-id=\"mrs-deepalakshmi-r\" title=\"Click to view full profile of Mrs. Deepalakshmi R.\"><div class=\"ssmrv-dept-prof-header\"><span class=\"ssmrv-dept-prof-name\">Mrs. Deepalakshmi R.</span></div><div class=\"ssmrv-faculty-badges\"><span class=\"ssmrv-badge-desig\">Assistant Professor — M.Sc. Data Science &amp; BCA</span><span class=\"ssmrv-badge-dept\">PG Data Science &amp; Computer Applications</span></div><div class=\"ssmrv-dept-prof-actions\"><span class=\"ssmrv-dept-prof-cta\">👤 View Full Profile</span><a href=\"https://nmkrv.edu.in/m-sc-data-science/\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"ssmrv-dept-visit-btn\" onclick=\"event.stopPropagation();\">🌐 Visit Website Page ↗</a></div><div class=\"ssmrv-dept-prof-meta\"><div class=\"ssmrv-dept-prof-row\"><strong>Qualifications:</strong> B.E. Computer Science, M.Tech. Data Science</div><div class=\"ssmrv-dept-prof-row\"><strong>Experience:</strong> Full-Time Faculty (Joined August 2021)</div><div class=\"ssmrv-dept-prof-row\"><strong>Expertise:</strong> Data Science, Big Data Analytics, Machine Learning &amp; Statistical Modelling</div><div class=\"ssmrv-dept-prof-row ssmrv-dept-prof-comm\"><strong>Role:</strong> PG Department of Data Science</div></div></div><div class=\"ssmrv-dept-profile-item\" data-profile-id=\"ms-aishwarya-m\" title=\"Click to view full profile of Ms. Aishwarya M.\"><div class=\"ssmrv-dept-prof-header\"><span class=\"ssmrv-dept-prof-name\">Ms. Aishwarya M.</span></div><div class=\"ssmrv-faculty-badges\"><span class=\"ssmrv-badge-desig\">Assistant Professor — M.Sc. Data Science</span><span class=\"ssmrv-badge-dept\">PG Data Science (M.Sc.)</span></div><div class=\"ssmrv-dept-prof-actions\"><span class=\"ssmrv-dept-prof-cta\">👤 View Full Profile</span><a href=\"https://nmkrv.edu.in/m-sc-data-science/\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"ssmrv-dept-visit-btn\" onclick=\"event.stopPropagation();\">🌐 Visit Website Page ↗</a></div><div class=\"ssmrv-dept-prof-meta\"><div class=\"ssmrv-dept-prof-row\"><strong>Qualifications:</strong> M.Sc.</div><div class=\"ssmrv-dept-prof-row\"><strong>Experience:</strong> Postgraduate Teaching Experience in Data Science</div><div class=\"ssmrv-dept-prof-row\"><strong>Expertise:</strong> Data Analytics, Python for Data Science &amp; Predictive Modelling</div><div class=\"ssmrv-dept-prof-row ssmrv-dept-prof-comm\"><strong>Role:</strong> PG Department of Data Science</div></div></div><div class=\"ssmrv-dept-profile-item\" data-profile-id=\"ms-supriti-chakraborthy\" title=\"Click to view full profile of Ms. Supriti Chakraborthy\"><div class=\"ssmrv-dept-prof-header\"><span class=\"ssmrv-dept-prof-name\">Ms. Supriti Chakraborthy</span></div><div class=\"ssmrv-faculty-badges\"><span class=\"ssmrv-badge-desig\">Assistant Professor — M.Sc. Data Science</span><span class=\"ssmrv-badge-dept\">PG Data Science (M.Sc.)</span></div><div class=\"ssmrv-dept-prof-actions\"><span class=\"ssmrv-dept-prof-cta\">👤 View Full Profile</span><a href=\"https://nmkrv.edu.in/m-sc-data-science/\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"ssmrv-dept-visit-btn\" onclick=\"event.stopPropagation();\">🌐 Visit Website Page ↗</a></div><div class=\"ssmrv-dept-prof-meta\"><div class=\"ssmrv-dept-prof-row\"><strong>Qualifications:</strong> M.Sc.</div><div class=\"ssmrv-dept-prof-row\"><strong>Experience:</strong> Postgraduate Teaching Experience in Data Science</div><div class=\"ssmrv-dept-prof-row\"><strong>Expertise:</strong> Statistical Inference, Data Visualization &amp; Computational Analytics</div><div class=\"ssmrv-dept-prof-row ssmrv-dept-prof-comm\"><strong>Role:</strong> PG Department of Data Science</div></div></div></div>",
    "buttons": [
      {
        "text": "👤 Mrs. Vandana G. P.",
        "action": "profile:mrs-vandana-g-p"
      },
      {
        "text": "👤 Mrs. Bindhya M.",
        "action": "profile:mrs-bindhya-m"
      },
      {
        "text": "👤 Ms. Haritha N.",
        "action": "profile:ms-haritha-n"
      },
      {
        "text": "👤 Ms. Rochana G.",
        "action": "profile:ms-rochana-g"
      },
      {
        "text": "👤 Ms. Aishwarya S.",
        "action": "profile:ms-aishwarya-s"
      },
      {
        "text": "👤 Dr. Hamsha K.",
        "action": "profile:dr-hamsha-k"
      },
      {
        "text": "👤 Mrs. Sudha G.",
        "action": "profile:mrs-sudha-g"
      },
      {
        "text": "👤 Ms. Vaishnavi K.",
        "action": "profile:ms-vaishnavi-k"
      },
      {
        "text": "👤 Mrs. Deepalakshmi R.",
        "action": "profile:mrs-deepalakshmi-r"
      },
      {
        "text": "👤 Ms. Aishwarya M.",
        "action": "profile:ms-aishwarya-m"
      },
      {
        "text": "👤 Ms. Supriti Chakraborthy",
        "action": "profile:ms-supriti-chakraborthy"
      },
      {
        "text": "🌐 Visit Department Webpage ↗",
        "url": "https://nmkrv.edu.in/bca/"
      },
      {
        "text": "👨‍🏫 All Faculty Departments",
        "action": "flow:faculty"
      }
    ]
  },
  "centres_clubs": {
    "message": "🏛️ <b>Campus Life, Hostel, Library & Clubs at NMKRV College</b><br>Situated on a lush <b>4.5-acre green campus</b> in Jayanagar 3rd Block, Bengaluru:<br><br>• <b>📚 Library & Information Centre:</b> 3,993 sq.ft. reading hall (85 seats), <b>60,097+ books</b>, <b>7,530 reference volumes</b>, <b>2,021 SC/ST Book Bank books</b>, <b>135 Braille books</b>, <b>DELNET & INFLIBNET N-List</b>, OPAC, and <b>JAWS/NVDA</b> software.<br>• <b>🏠 RSST Girls Hostel:</b> Safe residential facility with dining hall, reading room, newspapers, purified drinking water & free Wi-Fi.<br>• <b>🏟️ Sports & Gymnasium:</b> 29,040 sq.ft. outdoor playground (Basketball, Throwball, Volleyball, Football, Cricket, Kho-Kho, Kabaddi) & 2 Indoor Sports Halls (Table Tennis, Chess, Carrom).<br>• <b>🎭 Vibrant Student Clubs:</b><br>  - <b>Nupur</b> (Dance Club) | <b>Ninaada</b> (Music Club) | <b>Navyata</b> (Fashion Club) | <b>Natya</b> (Theatre Club)<br>  - <b>NCC</b> (1 Karnataka Girls Battalion) | <b>NSS</b> | <b>Youth Red Cross</b> | <b>Unnat Bharat Abhiyan (UBA)</b><br>  - <b>Eco Club</b> | <b>Fine Arts Club</b> | <b>Utkarsh Quiz Club</b> | <b>E-Cell</b> | <b>Psychology Forum</b> | <b>Forum for Strength & Intellect (FSI)</b> | <b>Aarogya Kendra</b>",
    "id": "centres_clubs",
    "pageUrl": "https://nmkrv.edu.in/clubs/",
    "buttons": [
      {
        "text": "🌐 Student Clubs Directory",
        "url": "https://nmkrv.edu.in/clubs/"
      },
      {
        "text": "📚 Library & Information Centre",
        "url": "https://nmkrv.edu.in/library/"
      },
      {
        "text": "🏠 RSST Girls Hostel Page",
        "url": "https://nmkrv.edu.in/rsst-girls-hostel/"
      },
      {
        "text": "🌱 Green Campus Initiatives",
        "url": "https://nmkrv.edu.in/green-initiatives/"
      }
    ]
  },
  "alumni": {
    "id": "alumni",
    "pageUrl": "https://nmkrv.edu.in/alumni/",
    "message": "🤝 <b>NMKRV College Alumni Association</b><br><br>Over five decades since 1973, NMKRV College has nurtured thousands of accomplished alumni serving across civil services, science, media, academia, corporate leadership, and the arts.<br><br>• <b>Alumni Engagement:</b> Annual Alumni Meet, Guest Lectures, Career Mentorship &amp; Endowment Scholarships.",
    "buttons": [
      {
        "text": "🌐 Visit Official Alumni Page ↗",
        "url": "https://nmkrv.edu.in/alumni/"
      },
      {
        "text": "📞 Contact College Office",
        "action": "flow:contact"
      }
    ]
  }
};
