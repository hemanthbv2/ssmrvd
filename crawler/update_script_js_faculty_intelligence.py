with open('script.js', 'r', encoding='utf-8') as f:
    code = f.read()

# 1. Update getBreadcrumbName in script.js
target_breadcrumbs = """      faculty_languages: "Languages Faculty",
      faculty_placement: "Placement Cell",
      faculty_leadership: "Leadership",
      cancellation_refund: "Refund Policy","""

replacement_breadcrumbs = """      faculty_languages: "Languages Faculty",
      faculty_placement: "Placement Cell",
      faculty_leadership: "Leadership (7)",
      faculty_sports: "Sports Leadership",
      faculty_library: "Library Hub",
      faculty_admin: "Administration (12)",
      faculty_committees: "Statutory Committees",
      cancellation_refund: "Refund Policy","""

assert target_breadcrumbs in code, "target_breadcrumbs not found in script.js"
code = code.replace(target_breadcrumbs, replacement_breadcrumbs, 1)

# 2. Update faculty intelligence and lookup in resolveUserQuery
target_faculty_block_start = """    // 4. Faculty Intelligence & Name Search
    if (typeof SSMRV_FACULTY_CATALOG !== 'undefined' && SSMRV_FACULTY_CATALOG.length > 0) {"""

target_faculty_block_end = """      // Department-specific faculty queries
      if (/\\b(bca|computer|software|coding)\\b/i.test(text) && /\\b(faculty|teacher|professor|hod|staff|who teaches)\\b/i.test(text)) {"""

idx_start = code.find(target_faculty_block_start)
idx_end = code.find(target_faculty_block_end)

if idx_start == -1 or idx_end == -1:
    raise Exception(f"Could not locate faculty block boundaries ({idx_start}, {idx_end})")

replacement_faculty_block = """    // 4. Comprehensive Faculty, Staff & Statutory Intelligence (85+ Members)
    if (typeof SSMRV_FACULTY_CATALOG !== 'undefined' && SSMRV_FACULTY_CATALOG.length > 0) {
      
      // A. Statutory Committee & Cell Conveners
      if (/\\b(nss|national service scheme)\\b/i.test(text)) {
        return {
          type: 'response',
          message: `
            <div class=\"ssmrv-faculty-card\">
              <div class=\"ssmrv-faculty-name\">Mr. Yallappa M.</div>
              <div class=\"ssmrv-faculty-role\">NSS Program Officer & Assistant Professor — Department of Computer Applications (BCA)</div>
              <div class=\"ssmrv-faculty-meta\">
                🛡️ <b>Statutory Unit:</b> National Service Scheme (NSS Unit — Ministry of Youth Affairs & Sports)<br>
                🎓 <b>Qualifications:</b> MCA, M.Phil | Community Outreach & Student Leadership<br>
                ✉️ <b>Email:</b> <a href=\"mailto:yallappam.ssmrv@rvei.edu.in\">yallappam.ssmrv@rvei.edu.in</a><br>
                📞 <b>Helpline:</b> <a href=\"tel:08068240999\">080 6824 0999</a>
              </div>
            </div>`,
          buttons: [
            { text: \"🛡️ All Committees\", action: \"flow:faculty_committees\" },
            { text: \"💻 BCA Faculty List\", action: \"flow:faculty_bca\" },
            { text: \"👨‍🏫 Faculty Directory\", action: \"flow:faculty\" }
          ]
        };
      }

      if (/\\b(ncc|national cadet corps)\\b/i.test(text)) {
        return {
          type: 'response',
          message: `
            <div class=\"ssmrv-faculty-card\">
              <div class=\"ssmrv-faculty-name\">Mr. Avinash K.V.</div>
              <div class=\"ssmrv-faculty-role\">Associate NCC Officer (ANO) & Assistant Professor — Department of Management (BBA)</div>
              <div class=\"ssmrv-faculty-meta\">
                🛡️ <b>Statutory Unit:</b> National Cadet Corps (NCC Army Wing)<br>
                🎓 <b>Role:</b> Youth Development, Drill Certification & Armed Forces Mentorship<br>
                ✉️ <b>Email:</b> <a href=\"mailto:avinashkv.ssmrv@rvei.edu.in\">avinashkv.ssmrv@rvei.edu.in</a><br>
                📞 <b>Helpline:</b> <a href=\"tel:08068240999\">080 6824 0999</a>
              </div>
            </div>`,
          buttons: [
            { text: \"🛡️ All Committees\", action: \"flow:faculty_committees\" },
            { text: \"📈 BBA Faculty List\", action: \"flow:faculty_bba\" },
            { text: \"👨‍🏫 Faculty Directory\", action: \"flow:faculty\" }
          ]
        };
      }

      if (/\\b(iqac|naac coordinator|quality assurance)\\b/i.test(text)) {
        return {
          type: 'response',
          message: `
            <div class=\"ssmrv-faculty-card\">
              <div class=\"ssmrv-faculty-name\">Ms. R. Shanthi Krishna</div>
              <div class=\"ssmrv-faculty-role\">IQAC Convener & Assistant Professor — Department of Computer Applications (BCA)</div>
              <div class=\"ssmrv-faculty-meta\">
                🛡️ <b>Statutory Unit:</b> Internal Quality Assurance Cell (IQAC — NAAC 'A' Grade Oversight)<br>
                🎓 <b>Qualifications:</b> MCA, M.Phil | Institutional Accreditation & Academic Audits<br>
                ✉️ <b>Email:</b> <a href=\"mailto:shanthikrishna.ssmrv@rvei.edu.in\">shanthikrishna.ssmrv@rvei.edu.in</a><br>
                📞 <b>Helpline:</b> <a href=\"tel:08068240999\">080 6824 0999</a>
              </div>
            </div>`,
          buttons: [
            { text: \"🛡️ All Committees\", action: \"flow:faculty_committees\" },
            { text: \"💻 BCA Faculty List\", action: \"flow:faculty_bca\" },
            { text: \"👨‍🏫 Faculty Directory\", action: \"flow:faculty\" }
          ]
        };
      }

      if (/\\b(exam|examination|chief superintendent)\\b/i.test(text) && /\\b(head|convener|incharge|officer|who|committee)\\b/i.test(text)) {
        return {
          type: 'response',
          message: `
            <div class=\"ssmrv-faculty-card\">
              <div class=\"ssmrv-faculty-name\">Dr. Mohan Rao C.N.</div>
              <div class=\"ssmrv-faculty-role\">Chief Superintendent & Convener — Examination Committee</div>
              <div class=\"ssmrv-faculty-meta\">
                🛡️ <b>University Section:</b> Bengaluru City University (BCU) Examinations & Evaluation<br>
                🎓 <b>Qualifications:</b> Ph.D., M.Com | Examination Oversight & Academic Assessments<br>
                ✉️ <b>Email:</b> <a href=\"mailto:office.ssmrv@rvei.edu.in\">office.ssmrv@rvei.edu.in</a><br>
                📞 <b>Helpline:</b> <a href=\"tel:08068240999\">080 6824 0999</a>
              </div>
            </div>`,
          buttons: [
            { text: \"🛡️ All Committees\", action: \"flow:faculty_committees\" },
            { text: \"📊 Commerce Faculty\", action: \"flow:faculty_commerce\" },
            { text: \"👨‍🏫 Faculty Directory\", action: \"flow:faculty\" }
          ]
        };
      }

      if (/\\b(sports|physical education|gym|wellness|athletics)\\b/i.test(text) && /\\b(director|head|faculty|teacher|officer|who)\\b/i.test(text)) {
        return {
          type: 'response',
          message: `
            <div class=\"ssmrv-faculty-card\">
              <div class=\"ssmrv-faculty-name\">Mrs. Teja K.R. & Mr. M.M. Bopanna</div>
              <div class=\"ssmrv-faculty-role\">Physical Education & Sports Wellness Centre Leadership</div>
              <div class=\"ssmrv-faculty-meta\">
                ⚽ <b>Mrs. Teja K.R.:</b> Junior Director of Physical Education (M.P.Ed)<br>
                🏅 <b>Mr. M.M. Bopanna:</b> Senior Executive PE & Discipline Committee<br>
                🏟️ <b>Facilities:</b> State-of-the-art Gym, Yoga Hall, Table Tennis, Cricket & Football Grounds<br>
                ✉️ <b>Email:</b> <a href=\"mailto:office.ssmrv@rvei.edu.in\">office.ssmrv@rvei.edu.in</a> | 📞 <b>Phone:</b> 080 6824 0999
              </div>
            </div>`,
          buttons: [
            { text: \"⚽ Sports Leadership Details\", action: \"flow:faculty_sports\" },
            { text: \"🌟 Sports & Wellness Centre\", action: \"flow:centres_clubs\" },
            { text: \"👨‍🏫 Faculty Directory\", action: \"flow:faculty\" }
          ]
        };
      }

      if (/\\b(library|librarian|knowledge hub)\\b/i.test(text) && /\\b(head|incharge|officer|who|staff)\\b/i.test(text)) {
        return {
          type: 'response',
          message: `
            <div class=\"ssmrv-faculty-card\">
              <div class=\"ssmrv-faculty-name\">Mrs. Shylaja T.M. & Mr. Guranna Sajjan</div>
              <div class=\"ssmrv-faculty-role\">Central Library & Information Center (Knowledge Hub)</div>
              <div class=\"ssmrv-faculty-meta\">
                📖 <b>Mrs. Shylaja T.M.:</b> Library Assistant & In-Charge (M.Lib.I.Sc)<br>
                📚 <b>Mr. Guranna Sajjan:</b> Senior Executive Library (B.A., B.Lib)<br>
                💻 <b>Resources:</b> 40,000+ Books, Koha Automation, DELNET, NDLI, INFLIBNET N-LIST<br>
                ✉️ <b>Email:</b> <a href=\"mailto:library.ssmrv@rvei.edu.in\">library.ssmrv@rvei.edu.in</a> | 📞 <b>Phone:</b> 080 6824 0999
              </div>
            </div>`,
          buttons: [
            { text: \"📖 Library Hub Details\", action: \"flow:faculty_library\" },
            { text: \"👨‍🏫 Faculty Directory\", action: \"flow:faculty\" },
            { text: \"🏛️ Campus Infrastructure\", action: \"flow:campus\" }
          ]
        };
      }

      // B. Direct HOD Lookups
      if (/\\b(bca|computer)\\b/i.test(text) && /\\b(hod|head)\\b/i.test(text)) {
        return {
          type: 'response',
          message: `
            <div class=\"ssmrv-faculty-card\">
              <div class=\"ssmrv-faculty-name\">Dr. R. Sheela Chandrashekar</div>
              <div class=\"ssmrv-faculty-role\">Associate Professor & HOD — Department of Computer Applications (BCA)</div>
              <div class=\"ssmrv-faculty-meta\">
                🎓 <b>Qualifications:</b> Ph.D., MCA, M.Phil<br>
                🔬 <b>Expertise:</b> Cloud Computing, Database Management Systems<br>
                ✉️ <b>Email:</b> <a href=\"mailto:sheelac.ssmrv@rvei.edu.in\">sheelac.ssmrv@rvei.edu.in</a><br>
                📞 <b>Helpline:</b> <a href=\"tel:08068240999\">080 6824 0999</a>
              </div>
            </div>`,
          buttons: [
            { text: \"💻 BCA Faculty List (17)\", action: \"flow:faculty_bca\" },
            { text: \"💻 BCA Course Details\", action: \"flow:bca_details\" },
            { text: \"👨‍🏫 All Faculty\", action: \"flow:faculty\" }
          ]
        };
      }

      if (/\\b(commerce|b\\.?com)\\b/i.test(text) && /\\b(hod|head)\\b/i.test(text)) {
        return {
          type: 'response',
          message: `
            <div class=\"ssmrv-faculty-card\">
              <div class=\"ssmrv-faculty-name\">Dr. Malini N. & Ms. Samskruthi B. L.</div>
              <div class=\"ssmrv-faculty-role\">Associate Professors & Heads of Department — Commerce (B.Com)</div>
              <div class=\"ssmrv-faculty-meta\">
                🎓 <b>Dr. Malini N.:</b> B.Com, M.Com, MBA, Ph.D. (Taxation, Climate Governance, HR Analytics)<br>
                🎓 <b>Ms. Samskruthi B. L.:</b> M.Com, M.Phil, NET/KSET (Corporate Accounting, Banking)<br>
                ✉️ <b>Email:</b> <a href=\"mailto:malinin.ssmrv@rvei.edu.in\">malinin.ssmrv@rvei.edu.in</a><br>
                📞 <b>Direct Line:</b> <a href=\"tel:08068240999\">080 6824 0999</a>
              </div>
            </div>`,
          buttons: [
            { text: \"📊 Commerce Faculty (11)\", action: \"flow:faculty_commerce\" },
            { text: \"📊 B.Com Details\", action: \"flow:bcom_details\" },
            { text: \"👨‍🏫 All Faculty\", action: \"flow:faculty\" }
          ]
        };
      }

      if (/\\b(bba|business administration|aviation)\\b/i.test(text) && /\\b(hod|head)\\b/i.test(text)) {
        return {
          type: 'response',
          message: `
            <div class=\"ssmrv-faculty-card\">
              <div class=\"ssmrv-faculty-name\">Dr. Revathy Shivashankaran & Mr. Jagadish A.</div>
              <div class=\"ssmrv-faculty-role\">Department Leadership — Business Administration (BBA & Aviation)</div>
              <div class=\"ssmrv-faculty-meta\">
                🎓 <b>Dr. Revathy Shivashankaran:</b> Assoc. Professor & HOD — BBA Honours | POSH Chairperson<br>
                🎓 <b>Mr. Jagadish A.:</b> Asst. Professor & HOD — BBA Aviation Management (IATA Certified)<br>
                ✉️ <b>Email:</b> <a href=\"mailto:revathy.ssmrv@rvei.edu.in\">revathy.ssmrv@rvei.edu.in</a> | 📞 <b>Helpline:</b> 080 6824 0999
              </div>
            </div>`,
          buttons: [
            { text: \"📈 BBA Faculty (16)\", action: \"flow:faculty_bba\" },
            { text: \"📈 BBA Course Details\", action: \"flow:bba_details\" },
            { text: \"✈️ BBA Aviation Details\", action: \"flow:aviation_details\" }
          ]
        };
      }

      if (/\\b(m\\.?com|postgraduate|pg)\\b/i.test(text) && /\\b(hod|head)\\b/i.test(text)) {
        return {
          type: 'response',
          message: `
            <div class=\"ssmrv-faculty-card\">
              <div class=\"ssmrv-faculty-name\">Dr. Lavanya Balaji</div>
              <div class=\"ssmrv-faculty-role\">Associate Professor & Head of PG Department — Master of Commerce (M.Com)</div>
              <div class=\"ssmrv-faculty-meta\">
                🎓 <b>Qualifications:</b> M.Com, MBA, Ph.D. | 18+ yrs Research & Teaching Experience<br>
                🔬 <b>Expertise:</b> Accounting, Taxation, Corporate Finance, Capital Markets<br>
                ✉️ <b>Email:</b> <a href=\"mailto:lavanyab.ssmrv@rvei.edu.in\">lavanyab.ssmrv@rvei.edu.in</a><br>
                📞 <b>Helpline:</b> <a href=\"tel:08068240999\">080 6824 0999</a>
              </div>
            </div>`,
          buttons: [
            { text: \"🎓 M.Com Faculty (6)\", action: \"flow:faculty_mcom\" },
            { text: \"🎓 M.Com Course Details\", action: \"flow:mcom_details\" },
            { text: \"👨‍🏫 All Faculty\", action: \"flow:faculty\" }
          ]
        };
      }

      if (/\\b(languages?|humanities|kannada|english|hindi|sanskrit)\\b/i.test(text) && /\\b(hod|head)\\b/i.test(text)) {
        return {
          type: 'response',
          message: `
            <div class=\"ssmrv-faculty-card\">
              <div class=\"ssmrv-faculty-name\">Dr. Jyothi N. Hosurkar</div>
              <div class=\"ssmrv-faculty-role\">Assistant Professor & HOD — Department of Languages & Humanities</div>
              <div class=\"ssmrv-faculty-meta\">
                🎓 <b>Qualifications:</b> M.A., Ph.D. | Literature, Linguistics & Cultural Studies<br>
                ✉️ <b>Email:</b> <a href=\"mailto:jyothinh.ssmrv@rvei.edu.in\">jyothinh.ssmrv@rvei.edu.in</a><br>
                📞 <b>Helpline:</b> <a href=\"tel:08068240999\">080 6824 0999</a>
              </div>
            </div>`,
          buttons: [
            { text: \"🗣️ Languages Faculty (10)\", action: \"flow:faculty_languages\" },
            { text: \"👨‍🏫 All Faculty\", action: \"flow:faculty\" }
          ]
        };
      }

      if (/\\b(placement|paryapti)\\b/i.test(text) && /\\b(officer|head|incharge|in-charge|who is)\\b/i.test(text)) {
        return {
          type: 'response',
          message: `
            <div class=\"ssmrv-faculty-card\">
              <div class=\"ssmrv-faculty-name\">Mrs. Sumana H.N.</div>
              <div class=\"ssmrv-faculty-role\">Placement Officer — Paryapti Training & Placement Cell</div>
              <div class=\"ssmrv-faculty-meta\">
                🎓 <b>Corporate Relations & Recruitment Specialist</b><br>
                🔬 <b>Network:</b> 100+ Tier-1 Recruiters (Deloitte, Accenture, Infosys, KPMG, EY)<br>
                📞 <b>Direct Helpline:</b> <a href=\"tel:9606067551\">+91 96060 67551</a><br>
                ✉️ <b>Email:</b> <a href=\"mailto:placement.ssmrv@rvei.edu.in\">placement.ssmrv@rvei.edu.in</a>
              </div>
            </div>`,
          buttons: [
            { text: \"💼 Placements & Packages (11 LPA)\", action: \"flow:placements\" },
            { text: \"📞 Call Placement Office\", url: \"tel:9606067551\" },
            { text: \"👨‍🏫 Faculty Directory\", action: \"flow:faculty\" }
          ]
        };
      }

      // C. Multi-Token Individual Search across ALL 85 Profiles
      let matchedFaculty = null;
      const textWords = text.replace(/[^a-zA-Z0-9\\s]/g, ' ').split(/\\s+/).filter(w => w.length >= 3);
      
      // 1. Exact token search
      for (const fac of SSMRV_FACULTY_CATALOG) {
        const cleanName = fac.name.replace(/^(Dr\\.|Mr\\.|Mrs\\.|Ms\\.|Sri\\.|Smt\\.|Prof\\.)\\s*/i, '').toLowerCase();
        const rawTokens = cleanName.split(/\\s+/).map(t => t.replace(/[^a-zA-Z0-9]/g, '')).filter(t => t.length >= 3);
        const matchesExactWord = rawTokens.some(tok => textWords.includes(tok));
        if (matchesExactWord) {
          matchedFaculty = fac;
          break;
        }
      }

      // 2. Substring search fallback
      if (!matchedFaculty) {
        for (const fac of SSMRV_FACULTY_CATALOG) {
          const cleanName = fac.name.replace(/^(Dr\\.|Mr\\.|Mrs\\.|Ms\\.|Sri\\.|Smt\\.|Prof\\.)\\s*/i, '').toLowerCase();
          if (text.includes(cleanName) || cleanName.includes(text)) {
            matchedFaculty = fac;
            break;
          }
        }
      }

      if (matchedFaculty) {
        const emailHtml = matchedFaculty.email ? `<br>✉️ <b>Email:</b> <a href=\"mailto:${matchedFaculty.email}\" style=\"color:var(--ssmrv-navy); font-weight:600;\">${matchedFaculty.email}</a>` : '';
        const phoneHtml = matchedFaculty.phone ? `<br>📞 <b>Direct Line:</b> <a href=\"tel:${matchedFaculty.phone.replace(/\\s+/g, '')}\" style=\"color:var(--ssmrv-navy); font-weight:600;\">${matchedFaculty.phone}</a>` : '';
        const qualHtml = matchedFaculty.qualifications ? `<br>🎓 <b>Qualifications:</b> ${matchedFaculty.qualifications}` : '';
        const specHtml = matchedFaculty.specialisation ? `<br>🔬 <b>Specialisation:</b> <i>${matchedFaculty.specialisation}</i>` : '';
        const commHtml = matchedFaculty.committee ? `<br>🛡️ <b>Committee / Role:</b> <span style=\"color:#b45309; font-weight:600;\">${matchedFaculty.committee}</span>` : '';

        return {
          type: 'response',
          pageUrl: matchedFaculty.url,
          message: `
            <div class=\"ssmrv-faculty-card\">
              <div class=\"ssmrv-faculty-name\">${matchedFaculty.name}</div>
              <div class=\"ssmrv-faculty-role\">${matchedFaculty.designation} — ${matchedFaculty.department}</div>
              <div class=\"ssmrv-faculty-meta\">
                ${commHtml}
                ${qualHtml}
                ${specHtml}
                ${emailHtml}
                ${phoneHtml}
              </div>
            </div>`,
          buttons: [
            { text: \"🌐 View Official Webpage Profile\", url: matchedFaculty.url },
            { text: \"👨‍🏫 Explore All Faculty (85)\", action: \"flow:faculty\" },
            { text: \"📞 Contact Academic Desk\", action: \"flow:contact\" }
          ]
        };
      }
"""

code = code[:idx_start] + replacement_faculty_block + "\n" + code[idx_end:]

with open('script.js', 'w', encoding='utf-8') as f:
    f.write(code)

print("SUCCESS: script.js upgraded with comprehensive faculty intelligence!")
