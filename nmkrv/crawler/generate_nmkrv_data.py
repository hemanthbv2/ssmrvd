import json
import html as html_lib

FACULTY_CATALOG = [
    # 1. Institutional Leadership & Governance (faculty_leadership)
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

    # 2. Department of Commerce — B.Com & M.Com (faculty_commerce)
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

    # 3. Department of Management — BBA (faculty_bba)
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

    # 4. Department of Computer Applications, CS & Data Science (faculty_bca)
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

    # 5. Department of Physical & Chemical Sciences — Chemistry, Maths, Physics (faculty_physical_sciences)
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

    # 6. Department of Life Sciences — Biotechnology, Botany & Zoology (faculty_life_sciences)
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

    # 7. Department of Humanities & Media — Economics, History, Sociology, Psychology, Journalism (faculty_humanities)
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

    # 8. Department of Languages, Placements, Library & Physical Education (faculty_languages_admin)
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
]

print(f"Total curated NMKRV faculty & leadership profiles: {len(FACULTY_CATALOG)}")


def esc(s):
    return html_lib.escape(str(s or '')).replace('"', '&quot;')

def build_dept_card_html(p):
    name = esc(p['name'])
    desig = esc(p['designation'])
    dept = esc(p['department'])
    qual = esc(p.get('qualifications', ''))
    exp = esc(p.get('experience', ''))
    spec = esc(p.get('specialisation', ''))
    comm = esc(p.get('committee', ''))
    pid = esc(p['id'])
    url = esc(p.get('url', 'https://nmkrv.edu.in/faculty/'))

    rows = []
    if qual and qual != 'Official NMKRV Faculty':
        rows.append(f'<div class="ssmrv-dept-prof-row"><strong>Qualifications:</strong> {qual}</div>')
    if exp:
        rows.append(f'<div class="ssmrv-dept-prof-row"><strong>Experience:</strong> {exp}</div>')
    if spec:
        rows.append(f'<div class="ssmrv-dept-prof-row"><strong>Expertise:</strong> {spec}</div>')
    if comm:
        rows.append(f'<div class="ssmrv-dept-prof-row ssmrv-dept-prof-comm"><strong>Role:</strong> {comm}</div>')

    meta_html = ''.join(rows)
    return (
        f'<div class="ssmrv-dept-profile-item" data-profile-id="{pid}" title="Click to view full profile of {name}">'
        f'<div class="ssmrv-dept-prof-header">'
        f'<span class="ssmrv-dept-prof-name">{name}</span>'
        f'</div>'
        f'<div class="ssmrv-faculty-badges">'
        f'<span class="ssmrv-badge-desig">{desig}</span>'
        f'<span class="ssmrv-badge-dept">{dept}</span>'
        f'</div>'
        f'<div class="ssmrv-dept-prof-actions">'
        f'<span class="ssmrv-dept-prof-cta">👤 View Full Profile</span>'
        f'<a href="{url}" target="_blank" rel="noopener noreferrer" class="ssmrv-dept-visit-btn" onclick="event.stopPropagation();">🌐 Visit Website Page ↗</a>'
        f'</div>'
        f'<div class="ssmrv-dept-prof-meta">{meta_html}</div>'
        f'</div>'
    )

def build_full_profile_html(p):
    name = esc(p['name'])
    desig = esc(p['designation'])
    dept = esc(p['department'])
    qual = esc(p.get('qualifications', ''))
    exp = esc(p.get('experience', ''))
    spec = esc(p.get('specialisation', ''))
    comm = esc(p.get('committee', ''))
    bio = esc(p.get('bio', ''))
    high = esc(p.get('highlights', ''))
    email = esc(p.get('email', 'nmkrv@rvei.edu.in'))
    phone = esc(p.get('phone', '080-69018900'))
    url = esc(p.get('url', 'https://nmkrv.edu.in/faculty/'))

    rows = []
    if qual:
        rows.append(f'<div class="ssmrv-fac-row"><span class="ssmrv-fac-label">🎓 Qualifications</span><span class="ssmrv-fac-val">{qual}</span></div>')
    if exp:
        rows.append(f'<div class="ssmrv-fac-row"><span class="ssmrv-fac-label">⏳ Experience</span><span class="ssmrv-fac-val">{exp}</span></div>')
    if spec:
        rows.append(f'<div class="ssmrv-fac-row"><span class="ssmrv-fac-label">🔬 Areas of Expertise</span><span class="ssmrv-fac-val">{spec}</span></div>')
    if comm:
        rows.append(f'<div class="ssmrv-fac-row"><span class="ssmrv-fac-label">🛡️ Committee / Role</span><span class="ssmrv-fac-val ssmrv-fac-role-val">{comm}</span></div>')
    if bio:
        rows.append(f'<div class="ssmrv-fac-section"><div class="ssmrv-fac-sec-title">📖 Profile Overview</div><div class="ssmrv-fac-sec-text">{bio}</div></div>')
    if high and high != bio:
        rows.append(f'<div class="ssmrv-fac-section"><div class="ssmrv-fac-sec-title">🏆 Key Highlights</div><div class="ssmrv-fac-sec-text">{high}</div></div>')
    rows.append(
        f'<div class="ssmrv-fac-contact">'
        f'<div>📧 <a href="mailto:{email}">{email}</a></div>'
        f'<div>📞 <a href="tel:{phone.replace(" ", "").replace("-", "")}">{phone}</a></div>'
        f'</div>'
    )

    return (
        f'<div class="ssmrv-faculty-card is-full-profile">'
        f'<div class="ssmrv-faculty-name">{name}</div>'
        f'<div class="ssmrv-faculty-badges">'
        f'<span class="ssmrv-badge-desig">{desig}</span>'
        f'<span class="ssmrv-badge-dept">{dept}</span>'
        f'</div>'
        f'<div class="ssmrv-fac-actions">'
        f'<a href="{url}" target="_blank" rel="noopener noreferrer" class="ssmrv-visit-website-btn">🌐 Visit Official Website Page ↗</a>'
        f'</div>'
        f'<div class="ssmrv-faculty-meta">{"".join(rows)}</div>'
        f'</div>'
    )

DEPT_DEFS = [
    ("faculty_leadership", "🏛️ Institutional Leadership & Governance", "Board of Management (RSST), Governing Body, Principal, COE & IQAC Leadership", "https://nmkrv.edu.in/board-of-management/"),
    ("faculty_commerce", "📊 Department of Commerce (B.Com & M.Com)", "UG & PG Commerce, Accounting, Taxation & FinTech Faculty", "https://nmkrv.edu.in/commerce/"),
    ("faculty_bba", "📈 Department of Management (BBA)", "AICTE Approved Bachelor of Business Administration Faculty", "https://nmkrv.edu.in/management/"),
    ("faculty_bca", "💻 Department of Computer Applications, CS & Data Science", "AICTE Approved BCA, B.Sc. Computer Science & M.Sc. Data Science Faculty", "https://nmkrv.edu.in/bca/"),
    ("faculty_physical_sciences", "🔬 Department of Physical & Chemical Sciences", "Chemistry (UG, PG & Ph.D.), Mathematics (UG & PG) and Physics Faculty", "https://nmkrv.edu.in/science/chemistry/"),
    ("faculty_life_sciences", "🧬 Department of Life Sciences", "Biotechnology (UG & PG), Botany and Zoology Faculty", "https://nmkrv.edu.in/science/biotechnology/"),
    ("faculty_humanities", "🎭 Department of Humanities & Media Studies", "Journalism & Mass Communication, Economics, History, Sociology & Psychology Faculty", "https://nmkrv.edu.in/humanities/"),
    ("faculty_languages_admin", "🗣️ Languages, Placements, Library, NCC & Sports", "English, Kannada, Hindi, Sanskrit, DISHA Placements, Library, NCC & Sports", "https://nmkrv.edu.in/language/")
]

CONFIG = {
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
        "admissionsHelpline": ["+91 80 69018900", "+91 80 69018901"],
        "landline": ["080-69018900", "080-69018901", "080-69018904"],
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
}

PROGRAMMES = {
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
}

# Build clean ALL_PAGES list from nmkrv_clean_pages.json (excluding any spam/dummy pages)
with open("c:/Users/HP/Downloads/SSMRVD/nmkrv/nmkrv_clean_pages.json", "r", encoding="utf-8") as f:
    raw_pages = json.load(f)

ALL_PAGES = []
bad_keywords = ['cuanwin', 'togel', 'cindototo', 'dummy', 'example', 'lorem ipsum']
for u, info in sorted(raw_pages.items()):
    if u.startswith('http://'):
        continue
    title = info['title']
    body_text = ' '.join(info['body_lines'])
    if any(bk in (title + ' ' + body_text[:300]).lower() for bk in bad_keywords):
        if 'dummy' in u or 'example' in u or 'cuanwin' in title.lower() or 'cindototo' in title.lower():
            continue
    snippet = ' '.join([l for l in info['body_lines'][1:12] if 'lorem ipsum' not in l.lower()])[:280]
    ALL_PAGES.append({
        "url": u,
        "title": title.replace(" -", "").strip() or u,
        "snippet": snippet
    })

FAQS = [
    {
        "q": "Is NMKRV College now a co-educational institution?",
        "a": "Yes! Established in 1973 by Rashtreeya Sikshana Samithi Trust (RSST) in memory of Sri. Meda Kasturiranga Setty and Smt. Nagarathnamma Meda Kasturiranga Setty, **NMKRV College became a Co-Educational Institution from the academic year 2025**, extending its five-decade legacy of excellence to all learners.",
        "keywords": ["co-ed", "coed", "co educational", "boys", "men", "women", "girls", "history", "established", "1973", "2025"],
        "flow": "about_nmkrv"
    },
    {
        "q": "Is NMKRV College an Autonomous college?",
        "a": "Yes. NMKRV College is an **Autonomous Institution affiliated to Bangalore University**. It was one of the first five colleges in Karnataka to be granted **Autonomous Status by the UGC in 2005** (implemented in 2006) and was honoured with the **'College with Potential for Excellence' (CPE)** award by the UGC in 2010.",
        "keywords": ["autonomous", "autonomy", "university", "affiliation", "bangalore university", "ugc", "cpe", "naac", "aicte"],
        "flow": "about_nmkrv"
    },
    {
        "q": "What Undergraduate (UG) courses are offered at NMKRV College?",
        "a": "NMKRV College offers Undergraduate programmes across Science, Commerce, Management, Computer Applications, Humanities, and Languages:\n• **B.Sc.** (PCM, PMCs, CBZ, CZBt, MBtCs, PBZ)\n• **B.Com.** (General, Vocational Tax Procedure & Practice, and FinTech & AI)\n• **BBA** (AICTE Approved — 90 Seats)\n• **BCA** (AICTE Approved — 60 Seats)\n• **B.A.** (History, Economics, Sociology, Psychology, Journalism, Optional English & Optional Kannada)\n• **4-Year Integrated B.Ed.** (B.A. B.Ed. & B.Sc. B.Ed.)",
        "keywords": ["ug", "undergraduate", "courses", "programmes", "programs", "degree", "bsc", "bcom", "bba", "bca", "ba"],
        "flow": "programmes"
    },
    {
        "q": "What Postgraduate (PG) and Ph.D. courses are offered at NMKRV College?",
        "a": "NMKRV College offers Postgraduate and Research programmes:\n• **M.Com.** (Accounting & Taxation / Finance & Banking)\n• **M.Sc. Chemistry** (Organic Chemistry Specialization)\n• **M.Sc. Data Science**\n• **M.Sc. Mathematics**\n• **M.Sc. Biotechnology**\n• **M.A. Journalism & Mass Communication**\n• **Ph.D. Research Programme in Chemistry** (Recognized Research Centre affiliated to Bangalore University)",
        "keywords": ["pg", "postgraduate", "masters", "mcom", "msc", "ma", "phd", "doctoral", "research", "data science"],
        "flow": "pg_details"
    },
    {
        "q": "How do I apply for UG or PG Admission at NMKRV College?",
        "a": "You can apply online through the official NMKRV Admission Portals:\n• **UG Admissions (SAP Portal):** Apply via the official RVEI SAP Admission Portal (`scode/NMKC`)\n• **PG Admissions:** Apply via the official NMKRV PG Admissions Portal (`nmkrv.in8.nopaperforms.com`)\n• **Offline / Campus Desk:** Visit the Admissions Office at 45/1, 22nd Cross, Jayanagar 3rd Block, Bengaluru - 560011 (`080-69018900 / 901`).",
        "keywords": ["apply", "admission", "application", "procedure", "process", "portal", "sap", "seat", "cutoff"],
        "flow": "admissions"
    },
    {
        "q": "What is the fee structure and refund policy at NMKRV College?",
        "a": "Fee structures vary by programme (Aided / Un-Aided / AICTE Approved BBA & BCA) and admission category. Scholarships and fee waivers are provided to meritorious and economically underprivileged students.\n• **UGC Fee Refund Policy:** NMKRV College follows the official UGC Refund Policy (100% refund 15+ days before last date; 90% less than 15 days before; 80% within 15 days after; 50% between 15–30 days after).\n• Please contact the College Admissions Office at **080-69018900 / 901** or **nmkrv@rvei.edu.in** for exact category-wise fee details.",
        "keywords": ["fee", "fees", "cost", "tuition", "refund", "cancellation", "payment"],
        "flow": "admissions"
    },
    {
        "q": "How are placements at NMKRV College (DISHA Placement Cell)?",
        "a": "**DISHA — The Training & Placement Centre** at NMKRV College (established in 2007–08) operates on the principle of *'College to Career'* and trains students in **CAKES** (Competency, Attitude, Knowledge, Ethics & Skill).\n• **Top Recruiters:** Deloitte, Wipro, Accenture, TCS, Infosys, HCL, Citi Bank, JP Morgan, Northern Trust, HDFC, Fidelity, IBM, Airtel, Axis Bank, Wells Fargo, Capgemini, Codeyoung & Microland.\n• **Placement Coordinator:** Ms. Chaitra V. C. (`+91 83100 63697`, `placement.nmkrv@rvei.edu.in`).",
        "keywords": ["placement", "placements", "jobs", "disha", "companies", "recruiters", "package", "salary", "internship", "career"],
        "flow": "placements"
    },
    {
        "q": "Does NMKRV College have a hostel and library?",
        "a": "Yes!\n• **RSST Girls Hostel:** Established in 1992 with dining hall, reading room, daily newspapers, purified water, free Wi-Fi, and 7:30 PM security curfew.\n• **Library & Information Centre:** Spans **3,993.29 sq.ft.** with **60,097+ books**, **7,530 reference books**, **2,021 SC/ST Book Bank books**, **135 Braille books**, **DELNET & INFLIBNET N-List** e-resources, OPAC, and **JAWS & NVDA** assistive software for visually challenged students.",
        "keywords": ["hostel", "accommodation", "library", "books", "inflibnet", "delnet", "braille", "facilities", "infrastructure"],
        "flow": "campus"
    },
    {
        "q": "What scholarships are available at NMKRV College?",
        "a": "NMKRV College facilitates numerous Government and Trust scholarships:\n1. **SC/ST Scholarship (SMIS & National Scholarship Portal)**\n2. **Post-Matric Scholarship for BCM Students (Karepass)**\n3. **MHRD Merit Scholarship**\n4. **Karnataka Science & Technology Academy (KSTA) Scholarship**\n5. **Sir C. V. Raman Scholarship** for Science students\n6. **Karnataka Minority Development Corporation (KMDC) Scholarship**\n7. **NHFDC Scholarship** for Differently-Abled students\n8. **RSST Management Scholarships & Fee Waivers** for meritorious and economically weaker students.",
        "keywords": ["scholarship", "scholarships", "financial aid", "sc", "st", "obc", "merit", "cv raman", "ksta"],
        "flow": "scholarships"
    }
]

FLOWS = {
    "welcome": {
        "message": "👋 Welcome to **NMKRV College (Autonomous)**, Jayanagar, Bengaluru!\n*Five Decades of Excellence in Higher Education* (Est. 1973 | Co-Ed | UGC Autonomous & CPE | NAAC Accredited | RSST / RV Group).\n\nHow can I assist you today? Select an option or type your question:",
        "actions": [
            {"text": "📚 Explore Programmes", "action": "flow", "value": "programmes"},
            {"text": "📝 Admissions & Apply", "action": "flow", "value": "admissions"},
            {"text": "👨‍🏫 Faculty Directory", "action": "flow", "value": "faculty_directory"},
            {"text": "💼 Placements & Packages", "action": "flow", "value": "placements"},
            {"text": "🎓 Scholarships & Aid", "action": "flow", "value": "scholarships"},
            {"text": "📄 Official Downloads & NIRF", "action": "flow", "value": "prospectus_downloads"},
            {"text": "🏛️ Campus Life, Hostel & Clubs", "action": "flow", "value": "campus"},
            {"text": "📍 Campus Navigation & Maps", "action": "flow", "value": "campus_navigation"},
            {"text": "📞 Contact College Office", "action": "flow", "value": "contact"}
        ]
    },
    "main_menu": {
        "message": "🏠 **NMKRV College — Main Menu**\nSelect any category below or type your question in the search box:",
        "actions": [
            {"text": "📚 Explore Programmes", "action": "flow", "value": "programmes"},
            {"text": "📝 Admissions & Apply", "action": "flow", "value": "admissions"},
            {"text": "👨‍🏫 Faculty Directory", "action": "flow", "value": "faculty_directory"},
            {"text": "💼 Placements & Packages", "action": "flow", "value": "placements"},
            {"text": "🎓 Scholarships & Aid", "action": "flow", "value": "scholarships"},
            {"text": "📄 Official Downloads & NIRF", "action": "flow", "value": "prospectus_downloads"},
            {"text": "🏛️ Campus Life, Hostel & Clubs", "action": "flow", "value": "campus"},
            {"text": "🔬 Research, IQAC & Exams", "action": "flow", "value": "research_iqac_exams"},
            {"text": "📍 Campus Navigation & Maps", "action": "flow", "value": "campus_navigation"},
            {"text": "📞 Contact College Office", "action": "flow", "value": "contact"}
        ]
    },
    "about_nmkrv": {
        "message": "🏛️ **About NMKRV College (Autonomous), Jayanagar**\n\n• **Established:** 1973 in fond memory of **Sri. Meda Kasturiranga Setty** and **Smt. Nagarathnamma Meda Kasturiranga Setty** under **Rashtreeya Sikshana Samithi Trust (RSST / RVEI)**.\n• **Co-Educational Milestone (2025):** After over five decades of empowering women, NMKRV College transitioned into a **Co-Educational Institution in 2025**, extending equal opportunity to all learners.\n• **Autonomous & CPE Status:** Granted **UGC Autonomous Status in 2005** (affiliated to Bangalore University) and recognized as a **'College with Potential for Excellence' (CPE)** by UGC in 2010.\n• **Accreditations & Grants:** NAAC Accredited | AICTE Approved (BBA & BCA) | **DST-FIST** Grant (Rs. 1.1 Crore) | **DBT-STAR College Scheme** (Chemistry, Botany & Zoology).\n• **Principal:** **Dr. R. Suchithra** (`MCA, Ph.D.`).",
        "actions": [
            {"text": "🌐 Official About Us Page", "action": "link", "value": "https://nmkrv.edu.in/about-college/"},
            {"text": "🏛️ Board of Management", "action": "flow", "value": "faculty_leadership"},
            {"text": "📚 Explore Programmes", "action": "flow", "value": "programmes"}
        ]
    },
    "programmes": {
        "message": "🎓 **Academic Programmes at NMKRV College (Autonomous)**\nAffiliated to **Bangalore University** under SEP / Autonomous Curriculum:\n\n**Undergraduate (UG) Programmes:**\n• **🔬 B.Sc. (Physical & Life Sciences)** — PCM, PMCs, CBZ, CZBt, MBtCs, PBZ\n• **📊 B.Com.** — General, Vocational Tax Procedure & Practice, FinTech & AI\n• **📈 BBA** — Business Administration (AICTE Approved)\n• **💻 BCA** — Computer Applications (AICTE Approved)\n• **🎭 B.A. (Humanities & Media)** — HES, JPEng, JPKan, ESP\n\n**Postgraduate (PG), Integrated & Doctoral Programmes:**\n• **🎓 PG Programmes** — M.Com, M.Sc. (Chemistry, Data Science, Mathematics, Biotechnology), M.A. Journalism & Mass Communication\n• **🔬 Ph.D. & Integrated B.Ed. & Value-Added Courses**\n\nSelect a programme for complete curriculum & eligibility details:",
        "actions": [
            {"text": "🔬 B.Sc. Science Programmes", "action": "flow", "value": "bsc_details"},
            {"text": "📊 B.Com (General, Tax & FinTech)", "action": "flow", "value": "bcom_details"},
            {"text": "📈 BBA (AICTE Approved)", "action": "flow", "value": "bba_details"},
            {"text": "💻 BCA (AICTE Approved)", "action": "flow", "value": "bca_details"},
            {"text": "🎭 B.A. (Humanities & Journalism)", "action": "flow", "value": "ba_details"},
            {"text": "🎓 PG Programmes (M.Sc / M.Com / M.A)", "action": "flow", "value": "pg_details"},
            {"text": "🏅 Ph.D. & Value-Added Courses", "action": "flow", "value": "phd_vac_details"}
        ]
    },
    "bsc_details": {
        "message": "🔬 **Bachelor of Science (B.Sc.) — Physical & Life Sciences**\n\n• **Duration:** 3 Years (6 Semesters) Autonomous Curriculum\n• **Recognitions:** Supported by **DST-FIST (Rs. 1.1 Crore)** & **DBT-STAR College Scheme** (Chemistry, Botany & Zoology)\n• **B.Sc. Combinations Offered:**\n  1. **PCM:** Physics, Chemistry, Mathematics\n  2. **PMCs:** Physics, Mathematics, Computer Science\n  3. **CBZ:** Chemistry, Botany, Zoology\n  4. **CZBt:** Chemistry, Zoology, Biotechnology\n  5. **MBtCs:** Microbiology, Biotechnology, Computer Science\n  6. **PBZ:** Psychology, Botany, Zoology\n• **Eligibility:** Pass in 10+2 / II PUC with relevant Science subjects.\n• **Highlights:** Herbal Medicinal Garden, FOSS Mathematics Lab, Molecular Biology & Genetic Engineering Labs, and Semester V/VI research projects.",
        "actions": [
            {"text": "🌐 Official B.Sc. Science Page", "action": "link", "value": "https://nmkrv.edu.in/science/"},
            {"text": "🔬 Physical Sciences Faculty", "action": "flow", "value": "faculty_physical_sciences"},
            {"text": "🧬 Life Sciences Faculty", "action": "flow", "value": "faculty_life_sciences"},
            {"text": "📝 How to Apply", "action": "flow", "value": "admissions"},
            {"text": "⬅️ Back to Programmes", "action": "flow", "value": "programmes"}
        ]
    },
    "bcom_details": {
        "message": "📊 **Bachelor of Commerce (B.Com.)**\n\n• **Duration:** 3 Years (6 Semesters) under SEP / Autonomous Scheme\n• **Streams Offered:**\n  1. **B.Com. General** (Financial & Corporate Accounting, Costing, Banking, Stock & Commodity Markets)\n  2. **B.Com. Vocational** — Tax Procedure and Practice (TPP)\n  3. **B.Com. in FinTech and Artificial Intelligence (AI)**\n• **Eligibility:** Pass in 10+2 / II PUC or equivalent.\n• **Career Outcomes:** Chartered Accountancy, Corporate Finance, Taxation, Banking, Auditing, FinTech Analytics & M.Com.",
        "actions": [
            {"text": "🌐 Official Commerce Page", "action": "link", "value": "https://nmkrv.edu.in/commerce/"},
            {"text": "📊 Commerce Faculty", "action": "flow", "value": "faculty_commerce"},
            {"text": "📝 How to Apply", "action": "flow", "value": "admissions"},
            {"text": "⬅️ Back to Programmes", "action": "flow", "value": "programmes"}
        ]
    },
    "bba_details": {
        "message": "📈 **Bachelor of Business Administration (BBA)**\n\n• **Approval:** AICTE Approved & Affiliated to Bangalore University (Autonomous)\n• **Duration:** 3 Years (6 Semesters) | **Sanctioned Intake:** 90 Seats\n• **Specialisations:**\n  - Finance & Accounting\n  - Human Resource Management (HRM)\n  - Marketing Management & Entrepreneurship\n• **Eligibility:** Pass in 10+2 / II PUC in any stream (Arts, Science, or Commerce).\n• **Highlights:** Case-study pedagogy, E-Cell startup mentorship, industrial visits, and dedicatedBBA Seminar Hall.",
        "actions": [
            {"text": "🌐 Official BBA Page", "action": "link", "value": "https://nmkrv.edu.in/management/"},
            {"text": "📈 BBA Management Faculty", "action": "flow", "value": "faculty_bba"},
            {"text": "📝 How to Apply", "action": "flow", "value": "admissions"},
            {"text": "⬅️ Back to Programmes", "action": "flow", "value": "programmes"}
        ]
    },
    "bca_details": {
        "message": "💻 **Bachelor of Computer Applications (BCA)**\n\n• **Approval:** AICTE Approved & Affiliated to Bangalore University (Autonomous)\n• **Duration:** 3 Years (6 Semesters) | **Sanctioned Intake:** 60 Seats\n• **Core Curriculum:**\n  - Programming in C, Data Structures, Object-Oriented Programming in Java & Python\n  - RDBMS, Operating Systems, Linux Programming & Computer Networks\n  - Web Technologies, Software Engineering, Cloud Computing & AI Projects\n• **Infrastructure:** 6 Dedicated Computer Laboratories (13th Gen Intel Core i5 / i7 systems with Windows 11 Pro & Ubuntu Linux).\n• **Eligibility:** Pass in 10+2 / II PUC or 3-Year Diploma from a recognized board.",
        "actions": [
            {"text": "🌐 Official BCA Page", "action": "link", "value": "https://nmkrv.edu.in/bca/"},
            {"text": "📥 BCA Syllabus (PDF)", "action": "link", "value": "https://nmkrv.edu.in/wp-content/uploads/2026/04/BCA_Syllabus_2025_26-2.pdf"},
            {"text": "💻 BCA & CS Faculty", "action": "flow", "value": "faculty_bca"},
            {"text": "📝 How to Apply", "action": "flow", "value": "admissions"},
            {"text": "⬅️ Back to Programmes", "action": "flow", "value": "programmes"}
        ]
    },
    "ba_details": {
        "message": "🎭 **Bachelor of Arts (B.A.) — Humanities, Journalism & Languages**\n\n• **Duration:** 3 Years (6 Semesters) under SEP / Autonomous Curriculum\n• **Core Disciplines Offered:**\n  - **History** (Ancient, Medieval & Modern Indian History, Archaeology & Heritage)\n  - **Economics** (Micro/Macro Economics, Monetary, Public & Development Economics)\n  - **Sociology** (Indian Society, Rural/Urban Sociology & Social Research)\n  - **Psychology** (Basic, Developmental, Abnormal, Social & Industrial/Organizational Psychology)\n  - **Journalism & Mass Communication** (Print, Broadcast, Digital Media & Studio Production)\n  - **Optional English & Optional Kannada**\n• **Languages Offered:** Kannada, English, Hindi, Sanskrit & Urdu.",
        "actions": [
            {"text": "🌐 Official Humanities Page", "action": "link", "value": "https://nmkrv.edu.in/humanities/"},
            {"text": "🎭 Humanities & Media Faculty", "action": "flow", "value": "faculty_humanities"},
            {"text": "🗣️ Languages Faculty", "action": "flow", "value": "faculty_languages_admin"},
            {"text": "📝 How to Apply", "action": "flow", "value": "admissions"},
            {"text": "⬅️ Back to Programmes", "action": "flow", "value": "programmes"}
        ]
    },
    "pg_details": {
        "message": "🎓 **Postgraduate (PG) Programmes at NMKRV College**\nFull-Time 2-Year (4 Semesters) Autonomous Master's Programmes:\n\n1. **📊 M.Com. (Master of Commerce):** Accounting & Taxation / Finance & Banking, Business Analytics & SQL, Project Management & Risk Management.\n2. **🧪 M.Sc. Chemistry (Organic Chemistry Specialization):** Inorganic, Organic, Physical & Analytical Chemistry, Spectroscopy, Organometallic & Medicinal Chemistry.\n3. **📈 M.Sc. Data Science:** Analytics, Machine Learning, Statistical Modelling & Domain Data Science.\n4. **📐 M.Sc. Mathematics:** Algebra, Real/Complex/Functional Analysis, Topology, Differential Geometry, Fluid Mechanics & Discrete Maths.\n5. **🧬 M.Sc. Biotechnology:** Molecular Biology, Genetic Engineering, Immunology & Bioprocess Technology.\n6. **🎙️ M.A. Journalism & Mass Communication:** Electronic & Digital Media, Broadcast Production, Corporate Communication & 8-Week Media Internship.\n\n• **Eligibility:** Bachelor's degree in the relevant discipline with minimum 50% aggregate (45% for SC/ST).",
        "actions": [
            {"text": "🌐 Official PG Programmes Page", "action": "link", "value": "https://nmkrv.edu.in/pg-programmes/"},
            {"text": "🖥️ Apply for PG Online", "action": "link", "value": "https://nmkrv.in8.nopaperforms.com"},
            {"text": "📊 M.Com Details", "action": "link", "value": "https://nmkrv.edu.in/m-com/"},
            {"text": "🧪 M.Sc. Chemistry Details", "action": "link", "value": "https://nmkrv.edu.in/m-sc-chemistry/"},
            {"text": "📈 M.Sc. Data Science Details", "action": "link", "value": "https://nmkrv.edu.in/m-sc-data-science/"},
            {"text": "⬅️ Back to Programmes", "action": "flow", "value": "programmes"}
        ]
    },
    "phd_vac_details": {
        "message": "🏅 **Doctoral (Ph.D.), Integrated B.Ed. & Value-Added Courses**\n\n**1. Ph.D. Research Programme in Chemistry:**\n• Affiliated to Bangalore University with recognized Research Guides **Dr. G. S. Suresh** and **Dr. Y. Venkataramanappa**.\n• Coursework covers *Foundations of Research*, *Methods in Research for Science*, and *Research Publication & Writing*.\n\n**2. 4-Year Integrated B.Ed. Programmes:**\n• **B.A. B.Ed.** and **B.Sc. B.Ed.** (4-Year Integrated Teacher Education Programmes).\n\n**3. Career-Oriented Value-Added Certificate Courses (30–60 Hours):**\n• **Forensic Sciences** (60 Hrs — Dept. of Chemistry)\n• **Basics in Bioinformatics** (60 Hrs — Dept. of Biotechnology in association with GenEclat Technologies LLP)\n• **Biochemistry Techniques in Routine Diagnostic Laboratory Practice**\n• **Molecular Biology Techniques**\n• **Basic Computer Skills & Self Presentations**",
        "actions": [
            {"text": "🌐 Official Ph.D. Programme Page", "action": "link", "value": "https://nmkrv.edu.in/phd-programme/"},
            {"text": "🌐 Value-Added Courses Page", "action": "link", "value": "https://nmkrv.edu.in/value-added-courses/"},
            {"text": "⬅️ Back to Programmes", "action": "flow", "value": "programmes"}
        ]
    },
    "admissions": {
        "message": "📝 **Admissions at NMKRV College (Autonomous)**\n\n**Step-by-Step Admission Procedure:**\n1. **Online Application:**\n   - **UG Programmes (B.Sc, B.Com, BBA, BCA, B.A):** Apply via the official RVEI SAP Admission Portal (`scode/NMKC`).\n   - **PG Programmes (M.Com, M.Sc, M.A):** Apply via the official NMKRV PG Admissions Portal.\n2. **Selection & Eligibility:**\n   - Minimum Acceptance Level: **50%** in qualifying exam for General category (**45%** for SC/ST/OBC).\n   - Counselling and document verification at the Jayanagar 3rd Block campus.\n3. **Documents Required:**\n   - 10th / SSLC & 12th / II PUC Marks Cards (and Degree Marks Cards for PG)\n   - Transfer Certificate (TC), Migration Certificate (if outside Karnataka), Caste/Income Certificate (if applicable), Aadhaar Card & Passport-size photographs.\n4. **Fee Structure & Refund Policy:**\n   - Fees are structured as per Aided / Un-Aided / AICTE norms. Full UGC Refund Policy applies on withdrawal. Contact the Admissions Desk at **080-69018900 / 901** for category-wise fee details.",
        "actions": [
            {"text": "🖥️ UG Online Application (SAP Portal)", "action": "link", "value": "https://wds-prd.rvei.edu.in:4430/sap/bc/ui5_ui5/sap/znmkrv/index.html#/scode/NMKC"},
            {"text": "🎓 PG Online Application Portal", "action": "link", "value": "https://nmkrv.in8.nopaperforms.com"},
            {"text": "🎓 Scholarships & Fee Waivers", "action": "flow", "value": "scholarships"},
            {"text": "📞 Contact Admissions Office", "action": "flow", "value": "contact"}
        ]
    },
    "scholarships": {
        "message": "🎓 **Scholarships & Financial Aid at NMKRV College**\nNMKRV College provides extensive Government and RSST Management scholarships, plus special support (Braille books, audio tools) for differently-abled students:\n\n1. **SC Scholarship (SMIS)** — Department of Social Welfare\n2. **ST Scholarship** — National Scholarship Portal (`scholarships.gov.in`)\n3. **Post-Matric Scholarship for BCM Students** (`karepass.cgg.gov.in`)\n4. **MHRD Merit Scholarship** — Ministry of Education\n5. **Karnataka Science & Technology Academy (KSTA) Scholarship** for Science students\n6. **Sir C. V. Raman Scholarship** for Science students\n7. **Karnataka Minority Development Corporation (KMDC) Scholarship**\n8. **NHFDC Scholarship** for Differently-Abled students\n9. **RSST Institutional Scholarships & Fee Waivers** for meritorious and economically underprivileged students.",
        "actions": [
            {"text": "🌐 Official Scholarships Page", "action": "link", "value": "https://nmkrv.edu.in/scholarship/"},
            {"text": "📝 Admissions & Apply", "action": "flow", "value": "admissions"}
        ]
    },
    "placements": {
        "message": "💼 **DISHA — Training & Placement Centre at NMKRV College**\nEstablished in 2007–08, **DISHA** (*'Direction'*) works on the core principle of **'College to Career'**, equipping students with **CAKES** (*Competency, Attitude, Knowledge, Ethics & Skill*).\n\n• **Recent Placement Highlights:**\n  - **Highest Package:** **8.36 LPA** (Codeyoung — International Sales Specialist)\n  - **Other Top Packages:** **6.00 LPA** (Material Depot), **5.05 LPA** (Accenture), **5.00 LPA** (Airtel), **4.50 LPA** (Crane Outsourcing), **4.00 LPA** (Sagility, Dyuti Technologies), **3.80 LPA** (Muthoot), **3.50 LPA** (Kotak Life, TCS), **3.40 LPA** (GR Management Solutions), **3.20 LPA** (Wells Fargo, Nivara Housing Finance).\n• **Premier Recruiters:** Deloitte, Wipro, Accenture, TCS, Infosys, HCL, Citi Bank, JP Morgan, Northern Trust, IBM, Fidelity, HDFC, ICICI, Axis Bank, Capgemini, Piramal Finance & Quess Corp.\n• **Placement Officer:** **Ms. Chaitra V. C.** (`+91 83100 63697` | `placement.nmkrv@rvei.edu.in`).",
        "actions": [
            {"text": "🌐 DISHA Placement Centre Page", "action": "link", "value": "https://nmkrv.edu.in/training-and-placement-centre/"},
            {"text": "📊 Official Placement Report", "action": "link", "value": "https://nmkrv.edu.in/placement-report/"},
            {"text": "👤 Ms. Chaitra V. C. (Placement Head)", "action": "flow", "value": "profile_ms-chaitra-v-c"}
        ]
    },
    "campus": {
        "message": "🏛️ **Campus Life, Hostel, Library & Clubs at NMKRV College**\nSituated on a lush **4.5-acre green campus** in Jayanagar 3rd Block, Bengaluru:\n\n• **📚 Library & Information Centre:** 3,993 sq.ft. reading hall (85 seats), **60,097+ books**, **7,530 reference volumes**, **2,021 SC/ST Book Bank books**, **135 Braille books**, **DELNET & INFLIBNET N-List**, OPAC, and **JAWS/NVDA** software.\n• **🏠 RSST Girls Hostel:** Safe residential facility with dining hall, reading room, newspapers, purified drinking water & free Wi-Fi.\n• **🏟️ Sports & Gymnasium:** 29,040 sq.ft. outdoor playground (Basketball, Throwball, Volleyball, Football, Cricket, Kho-Kho, Kabaddi) & 2 Indoor Sports Halls (Table Tennis, Chess, Carrom).\n• **🎭 Vibrant Student Clubs:**\n  - **Nupur** (Dance Club) | **Ninaada** (Music Club) | **Navyata** (Fashion Club) | **Natya** (Theatre Club)\n  - **NCC** (1 Karnataka Girls Battalion) | **NSS** | **Youth Red Cross** | **Unnat Bharat Abhiyan (UBA)**\n  - **Eco Club** | **Fine Arts Club** | **Utkarsh Quiz Club** | **E-Cell** | **Psychology Forum** | **Forum for Strength & Intellect (FSI)** | **Aarogya Kendra**",
        "actions": [
            {"text": "🌐 Student Clubs Directory", "action": "link", "value": "https://nmkrv.edu.in/clubs/"},
            {"text": "📚 Library & Information Centre", "action": "link", "value": "https://nmkrv.edu.in/library/"},
            {"text": "🏠 RSST Girls Hostel Page", "action": "link", "value": "https://nmkrv.edu.in/rsst-girls-hostel/"},
            {"text": "🌱 Green Campus Initiatives", "action": "link", "value": "https://nmkrv.edu.in/green-initiatives/"}
        ]
    },
    "research_iqac_exams": {
        "message": "🔬 **Research (CCR), IQAC & Autonomous Examinations**\n\n• **Centre for Coordination of Research (CCR):**\n  - Established in 2018 to promote funded research, patents, and academic consultancy.\n  - **UGC STRIDE Grant:** Sanctioned **Rs. 53,00,000/-** for Research Capacity Building & HRD, alongside multiple UGC Minor Research Projects.\n  - **Research & Ethics Advisory Committee:** Coordinated by **Dr. Mrunalini B. R.**\n• **Internal Quality Assurance Cell (IQAC):**\n  - Established on **01.06.2001**; Chaired by Principal **Dr. R. Suchithra** and Coordinated by **Dr. Sharada T.**\n• **Office of the Controller of Examinations (COE):**\n  - Led by **Mrs. Shilpa P.** (`coe.nmkrv@rvei.edu.in`, `080-69018999`).\n  - Conducts Continuous Internal Assessment (CIA), Mid-Semester (MSE), End-Semester (ESE) with barcode/QR confidentiality, digital evaluation, and Fast-Track VI Semester exams.",
        "actions": [
            {"text": "🌐 Research & CCR Page", "action": "link", "value": "https://nmkrv.edu.in/research/"},
            {"text": "🌐 Funded Research Projects", "action": "link", "value": "https://nmkrv.edu.in/projects/"},
            {"text": "🌐 IQAC Portal & Policies", "action": "link", "value": "https://nmkrv.edu.in/iqac/"},
            {"text": "🌐 Controller of Examinations (COE)", "action": "link", "value": "https://nmkrv.edu.in/examinations/"}
        ]
    },
    "prospectus_downloads": {
        "message": "📄 **Official Documents, Mandatory Disclosures & NIRF Reports**\nDownload official regulatory disclosures, NIRF rankings, and institutional policy documents directly from `nmkrv.edu.in`:",
        "actions": [
            {"text": "📥 AICTE Mandatory Disclosure (PDF)", "action": "link", "value": "https://nmkrv.edu.in/wp-content/uploads/2026/03/mandatory-disclosure-final-1-1-1.pdf"},
            {"text": "📥 NIRF College Report 2024–25 (PDF)", "action": "link", "value": "https://nmkrv.edu.in/wp-content/uploads/2025/02/NIRF-24-25-COLLEGE.pdf"},
            {"text": "📥 NIRF Overall Report 2024–25 (PDF)", "action": "link", "value": "https://nmkrv.edu.in/wp-content/uploads/2025/02/NMKRV-24-25-Overall.pdf"},
            {"text": "📥 BCA Syllabus 2025–26 (PDF)", "action": "link", "value": "https://nmkrv.edu.in/wp-content/uploads/2026/04/BCA_Syllabus_2025_26-2.pdf"},
            {"text": "📥 B.Sc Chemistry Syllabus (PDF)", "action": "link", "value": "https://nmkrv.edu.in/wp-content/uploads/2026/04/B.Sc-Chemistry-syllabus-I-VI-sem-1.pdf"},
            {"text": "🌐 All NIRF Reports Page", "action": "link", "value": "https://nmkrv.edu.in/nirf/"},
            {"text": "🌐 AQAR & NAAC Reports", "action": "link", "value": "https://nmkrv.edu.in/aqar/"}
        ]
    },
    "campus_navigation": {
        "message": "📍 **NMKRV College — Campus Location & How to Reach**\n\n• **Official Address:**\n  **NMKRV College (Autonomous)**\n  45/1, 22nd Cross, Jayanagar 3rd Block,\n  Bengaluru – 560011, Karnataka, India\n\n• **Connectivity & Landmarks:**\n  - **Nearest Metro Station:** Jayanagar Metro Station (Green Line) — walking distance (~600m) in Jayanagar 3rd Block\n  - **Nearest Bus Hub:** Jayanagar 4th Block TTMC Bus Stand\n  - **City Railway Station:** 6.9 km | **Kempegowda International Airport:** 38.5 km\n  - **Barrier-Free Campus:** Equipped with 1.5m wheelchair ramps, passenger lifts, tactile/accessible restrooms, and reserved parking.",
        "actions": [
            {"text": "🗺️ Open in Google Maps", "action": "link", "value": "https://www.google.com/maps/search/?api=1&query=NMKRV+College+Jayanagar+3rd+Block+Bengaluru"},
            {"text": "📞 Contact College Office", "action": "flow", "value": "contact"}
        ]
    },
    "contact": {
        "message": "📞 **Contact NMKRV College, Jayanagar**\n\n• **📍 Address:** 45/1, 22nd Cross, Jayanagar 3rd Block, Bengaluru - 560011, Karnataka\n• **☎️ College Office & Admissions:** `080-69018900` / `080-69018901` / `080-69018904`\n• **☎️ Controller of Examinations (COE):** `080-69018999` (Visiting Hours: 2:00 PM – 4:00 PM, Mon–Fri)\n• **💼 Placements (DISHA Cell):** `+91 83100 63697` (Ms. Chaitra V. C.)\n• **📧 Official Emails:**\n  - General / Office: `nmkrv@rvei.edu.in` | `contact@nmkrv.rvei.edu.in`\n  - Principal: `principal.nmkrv@rvei.edu.in`\n  - Examinations: `coe.nmkrv@rvei.edu.in`\n  - Placements: `placement.nmkrv@rvei.edu.in`\n• **🕒 Office Hours:** Mon–Fri: 9:30 AM – 4:30 PM | Saturday: 9:30 AM – 2:00 PM",
        "actions": [
            {"text": "🗺️ Open Google Maps", "action": "link", "value": "https://www.google.com/maps/search/?api=1&query=NMKRV+College+Jayanagar+3rd+Block+Bengaluru"},
            {"text": "🌐 Official Contact Us Page", "action": "link", "value": "https://nmkrv.edu.in/contact-us/"}
        ]
    }
}

# Add faculty_directory flow and all department flows + individual profile flows
dept_Buttons = []
for flow_key, title, subtitle, dept_url in DEPT_DEFS:
    short_label = title.split(" (")[0].replace("Department of ", "")
    dept_Buttons.append({"text": short_label, "action": f"flow:{flow_key}"})

    members = [p for p in FACULTY_CATALOG if p["deptFlow"] == flow_key]
    cards_html = "".join(build_dept_card_html(p) for p in members)
    msg = (
        f'<div class="ssmrv-flow-heading">{esc(title)}</div>'
        f'<div class="ssmrv-flow-subheading">{esc(subtitle)} — Select <b>View Full Profile</b> or <b>Visit Website Page ↗</b> on any card below:</div>'
        f'<div class="ssmrv-dept-profile-list">{cards_html}</div>'
    )
    buttons = [{"text": f"👤 {p['name']}", "action": f"profile:{p['id']}"} for p in members]
    buttons.append({"text": "🌐 Visit Department Webpage ↗", "url": dept_url})
    buttons.append({"text": "👨‍🏫 All Faculty Departments", "action": "flow:faculty"})
    FLOWS[flow_key] = {"id": flow_key, "pageUrl": dept_url, "message": msg, "buttons": buttons}

    for p in members:
        p_msg = build_full_profile_html(p)
        p_buttons = [
            {"text": "🌐 Visit Official Website Page ↗", "url": p["url"], "isPrimary": True},
            {"text": f"🏛️ {short_label}", "action": f"flow:{flow_key}"},
            {"text": "👨‍🏫 All Faculty Departments", "action": "flow:faculty"}
        ]
        FLOWS[f"profile_{p['id']}"] = {"id": f"profile_{p['id']}", "pageUrl": p["url"], "message": p_msg, "buttons": p_buttons}

fac_dir_flow = {
    "id": "faculty",
    "pageUrl": "https://nmkrv.edu.in/research-faculty/",
    "message": (
        '<div class="ssmrv-flow-heading">👨‍🏫 NMKRV College — Complete Faculty &amp; Leadership Directory</div>'
        '<div class="ssmrv-flow-body">Explore complete academic profiles across all departments of <b>NMKRV College (Autonomous)</b>, including qualifications, experience, areas of expertise, committee roles, and direct links to official webpage profiles on <code>nmkrv.edu.in</code>.<br><br>'
        '💡 <i>Tip: Select any department below or type any professor\'s name in the chat box.</i></div>'
    ),
    "buttons": dept_Buttons + [
        {"text": "🌐 Visit Research Faculty Webpage ↗", "url": "https://nmkrv.edu.in/research-faculty/"}
    ]
}
FLOWS["faculty"] = fac_dir_flow
FLOWS["faculty_directory"] = fac_dir_flow
FLOWS["faculty_commerce_mgmt"] = FLOWS["faculty_commerce"]
FLOWS["faculty_cs_bca"] = FLOWS["faculty_bca"]
FLOWS["centres_clubs"] = FLOWS["campus"]
FLOWS["alumni"] = {
    "id": "alumni",
    "pageUrl": "https://nmkrv.edu.in/alumni/",
    "message": "🤝 <b>NMKRV College Alumni Association</b><br><br>Over five decades since 1973, NMKRV College has nurtured thousands of accomplished alumni serving across civil services, science, media, academia, corporate leadership, and the arts.<br><br>• <b>Alumni Engagement:</b> Annual Alumni Meet, Guest Lectures, Career Mentorship &amp; Endowment Scholarships.",
    "buttons": [
        {"text": "🌐 Visit Official Alumni Page ↗", "url": "https://nmkrv.edu.in/alumni/"},
        {"text": "📞 Contact College Office", "action": "flow:contact"}
    ]
}

import re as _re

def md_to_html(text):
    if '<div class="' in text:
        return text
    t = _re.sub(r'\*\*(.+?)\*\*', r'<b>\1</b>', text)
    t = _re.sub(r'\*(.+?)\*', r'<i>\1</i>', t)
    t = _re.sub(r'`(.+?)`', r'<code>\1</code>', t)
    t = t.replace('\n', '<br>')
    return t

for f in FAQS:
    f["a"] = md_to_html(f["a"])

PAGE_URL_MAP = {
    "welcome": "https://nmkrv.edu.in/",
    "main_menu": "https://nmkrv.edu.in/",
    "about_nmkrv": "https://nmkrv.edu.in/about-college/",
    "programmes": "https://nmkrv.edu.in/ug-programmes/",
    "bsc_details": "https://nmkrv.edu.in/science/",
    "bcom_details": "https://nmkrv.edu.in/commerce/",
    "bba_details": "https://nmkrv.edu.in/management/",
    "bca_details": "https://nmkrv.edu.in/bca/",
    "ba_details": "https://nmkrv.edu.in/humanities/",
    "pg_details": "https://nmkrv.edu.in/pg-programmes/",
    "phd_vac_details": "https://nmkrv.edu.in/phd-programme/",
    "admissions": "https://nmkrv.edu.in/admission-2023-2024/",
    "scholarships": "https://nmkrv.edu.in/scholarship/",
    "placements": "https://nmkrv.edu.in/training-and-placement-centre/",
    "campus": "https://nmkrv.edu.in/clubs/",
    "research_iqac_exams": "https://nmkrv.edu.in/iqac/",
    "prospectus_downloads": "https://nmkrv.edu.in/nirf/",
    "campus_navigation": "https://nmkrv.edu.in/contact-us/",
    "contact": "https://nmkrv.edu.in/contact-us/"
}

for fkey, fobj in list(FLOWS.items()):
    fobj["id"] = fkey
    if "pageUrl" not in fobj and fkey in PAGE_URL_MAP:
        fobj["pageUrl"] = PAGE_URL_MAP[fkey]
    fobj["message"] = md_to_html(fobj["message"])
    if "actions" in fobj and "buttons" not in fobj:
        btns = []
        for a in fobj["actions"]:
            txt = a.get("text", "")
            if txt.startswith("⬅️ Back to"):
                continue
            # Ensure no numbers in main menu button labels
            if fkey in ("welcome", "main_menu"):
                txt = txt.replace(" & NIRF", "")
            act = a.get("action", "")
            val = a.get("value", "")
            if act == "link":
                btns.append({"text": txt, "url": val})
            elif act == "flow":
                if val == "faculty_directory":
                    btns.append({"text": txt, "action": "flow:faculty"})
                elif val.startswith("profile_"):
                    btns.append({"text": txt, "action": f"profile:{val[8:]}"})
                else:
                    btns.append({"text": txt, "action": f"flow:{val}"})
        fobj["buttons"] = btns
        del fobj["actions"]

# Write chatbot-data.js
out_js = f"""/**
 * NMKRV College (Autonomous) Chatbot — Complete Knowledge Base & Conversation Flow Data
 * Source: Official https://nmkrv.edu.in/ & AICTE Mandatory Disclosure
 */

const GOOGLE_SHEETS_URL = (window.ssmrvChatbotSettings && window.ssmrvChatbotSettings.googleSheetsUrl)
  ? window.ssmrvChatbotSettings.googleSheetsUrl
  : '';

const SSMRV_CONFIG = {json.dumps(CONFIG, indent=2, ensure_ascii=False)};

const SSMRV_PROGRAMMES = {json.dumps(PROGRAMMES, indent=2, ensure_ascii=False)};

const SSMRV_FACULTY_CATALOG = {json.dumps(FACULTY_CATALOG, indent=2, ensure_ascii=False)};

const SSMRV_ALL_PAGES = {json.dumps(ALL_PAGES, indent=2, ensure_ascii=False)};

const SSMRV_FAQS = {json.dumps(FAQS, indent=2, ensure_ascii=False)};

const CHAT_FLOWS = {json.dumps(FLOWS, indent=2, ensure_ascii=False)};
"""

with open("c:/Users/HP/Downloads/SSMRVD/nmkrv/chatbot-data.js", "w", encoding="utf-8") as f:
    f.write(out_js)

print(f"Successfully generated nmkrv/chatbot-data.js! Flows: {len(FLOWS)}, Faculty: {len(FACULTY_CATALOG)}, Pages: {len(ALL_PAGES)}")

