with open(r"c:\Users\HP\Downloads\SSMRVD\script.js", "r", encoding="utf-8") as f:
    code = f.read()

start_marker = "  function resolveUserQuery(rawText) {"
end_marker = "  function handleUserSubmit() {"

start_idx = code.find(start_marker)
end_idx = code.find(end_marker)

if start_idx == -1 or end_idx == -1:
    print("Markers not found!", start_idx, end_idx)
    exit(1)

new_fn = """  function resolveUserQuery(rawText) {
    const text = rawText.toLowerCase().trim();

    // 1. Direct Greetings
    if (/^(hi|hello|hey|good morning|good afternoon|namaste|vanakkam)/i.test(text)) {
      return {
        type: 'response',
        message: "Hello! Welcome to <b>SSMRV Degree College</b>, Jayanagar. How may I help you with admissions, faculty, courses, fees, or placements today?",
        buttons: [
          { text: "📚 Programmes", action: "flow:programmes" },
          { text: "📝 Admissions", action: "flow:admissions" },
          { text: "💰 Fees Structure", action: "flow:fee_enquiry" },
          { text: "👨‍🏫 Faculty Roster", action: "flow:faculty" },
          { text: "📄 Official Downloads", action: "flow:prospectus_downloads" },
          { text: "📍 Campus Maps", action: "flow:campus_navigation" }
        ]
      };
    }

    // 2. Official Downloads & Prospectus
    if (/\\b(prospectus|brochure|disclosure|mandatory disclosure|aicte|catalog|syllabus|calendar|handbook|pdf|download)\\b/i.test(text)) {
      return { type: 'flow', flowId: 'prospectus_downloads' };
    }

    // 3. Campus Navigation & Directions
    if (/\\b(map|maps|location|address|direction|directions|where is|how to reach|metro|bus|route|campus tour|landmark)\\b/i.test(text)) {
      return { type: 'flow', flowId: 'campus_navigation' };
    }

    // 4. Faculty Intelligence & Name Search
    if (typeof SSMRV_FACULTY_CATALOG !== 'undefined' && SSMRV_FACULTY_CATALOG.length > 0) {
      // Direct HOD questions
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
                ✉️ <b>Email:</b> <a href=\"mailto:sheelac.ssmrv@rvei.edu.in\">sheelac.ssmrv@rvei.edu.in</a>
              </div>
            </div>`,
          buttons: [
            { text: "💻 BCA Faculty List (17)", action: "flow:faculty_bca" },
            { text: "💻 BCA Course Details", action: "flow:bca_details" },
            { text: "👨‍🏫 All Faculty", action: "flow:faculty" },
            { text: "↩️ Main Menu", action: "flow:welcome" }
          ]
        };
      }

      if (/\\b(commerce|b\\.?com)\\b/i.test(text) && /\\b(hod|head)\\b/i.test(text)) {
        return {
          type: 'response',
          message: `
            <div class=\"ssmrv-faculty-card\">
              <div class=\"ssmrv-faculty-name\">Dr. Malini N.</div>
              <div class=\"ssmrv-faculty-role\">Associate Professor & HOD — Department of Commerce (B.Com)</div>
              <div class=\"ssmrv-faculty-meta\">
                🎓 <b>Qualifications:</b> B.Com, M.Com, MBA, Ph.D.<br>
                🔬 <b>Expertise:</b> Accounting & Taxation, Human Resources Analytics, Climate Governance<br>
                ✉️ <b>Email:</b> <a href=\"mailto:malinin.ssmrv@rvei.edu.in\">malinin.ssmrv@rvei.edu.in</a>
              </div>
            </div>`,
          buttons: [
            { text: "📊 Commerce Faculty (8)", action: "flow:faculty_commerce" },
            { text: "📊 B.Com Details", action: "flow:bcom_details" },
            { text: "👨‍🏫 All Faculty", action: "flow:faculty" },
            { text: "↩️ Main Menu", action: "flow:welcome" }
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
            { text: "💼 Placements & Packages", action: "flow:placements" },
            { text: "📞 Call Placement Office", url: "tel:9606067551" },
            { text: "👨‍🏫 Faculty Directory", action: "flow:faculty" },
            { text: "↩️ Main Menu", action: "flow:welcome" }
          ]
        };
      }

      // Check specific individual faculty name search
      let matchedFaculty = null;
      for (const fac of SSMRV_FACULTY_CATALOG) {
        const rawTokens = fac.name.replace(/^(Dr\\.|Mr\\.|Mrs\\.|Ms\\.|Sri\\.|Smt\\.)\\s*/i, '').toLowerCase().split(/\\s+/);
        const matchesToken = rawTokens.some(tok => tok.length >= 4 && text.includes(tok));
        if (matchesToken || text.includes(fac.name.toLowerCase())) {
          matchedFaculty = fac;
          break;
        }
      }

      if (matchedFaculty) {
        const emailHtml = matchedFaculty.email ? `<br>✉️ <b>Email:</b> <a href=\"mailto:${matchedFaculty.email}\" style=\"color:var(--ssmrv-navy); font-weight:600;\">${matchedFaculty.email}</a>` : '';
        const qualHtml = matchedFaculty.qualifications ? `<br>🎓 <b>Qualifications:</b> ${matchedFaculty.qualifications}` : '';
        const specHtml = matchedFaculty.specialisation ? `<br>🔬 <b>Specialisation:</b> <i>${matchedFaculty.specialisation}</i>` : '';

        return {
          type: 'response',
          message: `
            <div class=\"ssmrv-faculty-card\">
              <div class=\"ssmrv-faculty-name\">${matchedFaculty.name}</div>
              <div class=\"ssmrv-faculty-role\">${matchedFaculty.designation} — ${matchedFaculty.department}</div>
              <div class=\"ssmrv-faculty-meta\">
                ${qualHtml}
                ${specHtml}
                ${emailHtml}
              </div>
            </div>`,
          buttons: [
            { text: "🌐 View Faculty Profile Online", url: matchedFaculty.url },
            { text: "👨‍🏫 Explore All Faculty", action: "flow:faculty" },
            { text: "📞 Contact Academic Office", action: "flow:contact" },
            { text: "↩️ Main Menu", action: "flow:welcome" }
          ]
        };
      }

      // Department-specific faculty queries
      if (/\\b(bca|computer|software|coding)\\b/i.test(text) && /\\b(faculty|teacher|professor|hod|staff|who teaches)\\b/i.test(text)) {
        return { type: 'flow', flowId: 'faculty_bca' };
      }
      if (/\\b(commerce|b\\.?com|accounting|taxation)\\b/i.test(text) && /\\b(faculty|teacher|professor|hod|staff|who teaches)\\b/i.test(text)) {
        return { type: 'flow', flowId: 'faculty_commerce' };
      }
      if (/\\b(bba|management|aviation)\\b/i.test(text) && /\\b(faculty|teacher|professor|hod|staff|who teaches)\\b/i.test(text)) {
        return { type: 'flow', flowId: 'faculty_bba' };
      }
      if (/\\b(language|languages|kannada|english|hindi)\\b/i.test(text) && /\\b(faculty|teacher|professor|hod|staff)\\b/i.test(text)) {
        return { type: 'flow', flowId: 'faculty_languages' };
      }
      if (/\\b(m\\.?com|postgraduate|pg)\\b/i.test(text) && /\\b(faculty|teacher|professor|hod|staff)\\b/i.test(text)) {
        return { type: 'flow', flowId: 'faculty_mcom' };
      }
      if (/\\b(principal|head of college|director|leader)\\b/i.test(text)) {
        return { type: 'flow', flowId: 'faculty_leadership' };
      }
      if (/\\b(faculty|teacher|professor|hod|lecturer|staff)\\b/i.test(text)) {
        return { type: 'flow', flowId: 'faculty' };
      }
    }

    // 5. Intent Routing for Programs & Flow Targets
    if (/\\b(b\\.?com|commerce|accounting)\\b/i.test(text)) {
      return { type: 'flow', flowId: 'bcom_details' };
    }
    if (/\\b(aviation|airport|airline|bba am)\\b/i.test(text)) {
      return { type: 'flow', flowId: 'aviation_details' };
    }
    if (/\\b(bba|business administration|management)\\b/i.test(text)) {
      return { type: 'flow', flowId: 'bba_details' };
    }
    if (/\\b(bca|computer|software|coding|it)\\b/i.test(text)) {
      return { type: 'flow', flowId: 'bca_details' };
    }
    if (/\\b(m\\.?com|postgraduate|pg|master of commerce)\\b/i.test(text)) {
      return { type: 'flow', flowId: 'mcom_details' };
    }
    if (/\\b(fee|fees|cost|tuition|price|fee structure)\\b/i.test(text)) {
      return { type: 'flow', flowId: 'fee_enquiry' };
    }
    if (/\\b(visit|campus tour|come to college|see campus)\\b/i.test(text)) {
      return { type: 'flow', flowId: 'campus_visit' };
    }
    if (/\\b(placement|placements|package|salary|recruitment|recruiter|paryapti)\\b/i.test(text)) {
      return { type: 'flow', flowId: 'placements' };
    }
    if (/\\b(admission|admissions|apply|application|eligibility|praveshan)\\b/i.test(text)) {
      return { type: 'flow', flowId: 'admissions' };
    }
    if (/\\b(club|centre|centers|sustainability|rotaract|nss|heritage|excellence|raise)\\b/i.test(text)) {
      return { type: 'flow', flowId: 'centres_clubs' };
    }
    if (/\\b(contact|phone|email|call|number|office|help)\\b/i.test(text)) {
      return { type: 'flow', flowId: 'contact' };
    }

    // 6. Match against Knowledge Base FAQs
    let bestMatch = null;
    let highestScore = 0;

    SSMRV_FAQS.forEach(faq => {
      const score = calculateFuzzyScore(text, [...faq.keywords, faq.q]);
      if (score > highestScore) {
        highestScore = score;
        bestMatch = faq;
      }
    });

    if (bestMatch && highestScore >= 1.5) {
      return {
        type: 'response',
        message: `<b>${bestMatch.q}</b><br><br>${bestMatch.a}`,
        buttons: [
          { text: "📋 Request a Callback", action: "flow:inquiry_form" },
          { text: "💰 Request Fee Details", action: "flow:fee_enquiry" },
          { text: "📚 Explore Programmes", action: "flow:programmes" },
          { text: "↩️ Main Menu", action: "flow:welcome" }
        ]
      };
    }

    // 7. Fallback handler
    return {
      type: 'response',
      message: "I want to make sure you get the exact information! Could you please select an option below, or request a call from our admission counselors?",
      buttons: [
        { text: "📚 Programmes Offered", action: "flow:programmes" },
        { text: "📝 Admission Process (Praveshan)", action: "flow:admissions" },
        { text: "💰 Fee Structure Inquiry", action: "flow:fee_enquiry" },
        { text: "👨‍🏫 Faculty Directory", action: "flow:faculty" },
        { text: "📄 Official Downloads", action: "flow:prospectus_downloads" },
        { text: "📍 Campus Navigation", action: "flow:campus_navigation" }
      ]
    };
  }

"""

code = code[:start_idx] + new_fn + code[end_idx:]

with open(r"c:\Users\HP\Downloads\SSMRVD\script.js", "w", encoding="utf-8") as f:
    f.write(code)

print("Replacement done successfully!")
