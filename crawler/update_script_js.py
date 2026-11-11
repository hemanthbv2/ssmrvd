import re

with open(r"c:\Users\HP\Downloads\SSMRVD\script.js", "r", encoding="utf-8") as fp:
    content = fp.read()

# 1. Add getRvLogoUrl helper
if "getRvLogoUrl" not in content:
    old_logo_helper = """  const getLogoUrl = () => {
    return (window.ssmrvChatbotSettings && window.ssmrvChatbotSettings.logoUrl)
      ? window.ssmrvChatbotSettings.logoUrl
      : 'assets/logo.png';
  };"""
    new_logo_helper = """  const getLogoUrl = () => {
    return (window.ssmrvChatbotSettings && window.ssmrvChatbotSettings.logoUrl)
      ? window.ssmrvChatbotSettings.logoUrl
      : 'assets/logo.png';
  };

  const getRvLogoUrl = () => {
    return (window.ssmrvChatbotSettings && window.ssmrvChatbotSettings.rvLogoUrl)
      ? window.ssmrvChatbotSettings.rvLogoUrl
      : 'assets/rv-logo.png';
  };"""
    content = content.replace(old_logo_helper, new_logo_helper)

# 2. Update ensureChatMarkup to include rvLogoSrc
old_ensure = """    const logoSrc = getLogoUrl();
    const primaryPhone = (typeof SSMRV_CONFIG !== 'undefined' && SSMRV_CONFIG.contacts) 
      ? SSMRV_CONFIG.contacts.primaryHelpline 
      : '+91 97395 88855';"""

new_ensure = """    const logoSrc = getLogoUrl();
    const rvLogoSrc = getRvLogoUrl();
    const primaryPhone = (typeof SSMRV_CONFIG !== 'undefined' && SSMRV_CONFIG.contacts) 
      ? SSMRV_CONFIG.contacts.primaryHelpline 
      : '+91 97395 88855';"""

content = content.replace(old_ensure, new_ensure)

# 3. Update trigger button markup
old_trigger = """      <!-- Floating Trigger Button -->
      <div class="ssmrv-chat-trigger" id="ssmrvTrigger" title="Open SSMRV Admissions Chat">
        <div class="ssmrv-trigger-pulse"></div>
        <div class="ssmrv-trigger-badge">1</div>
        <svg class="ssmrv-trigger-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
        </svg>
      </div>"""

new_trigger = """      <!-- Floating Trigger Button -->
      <div class="ssmrv-chat-trigger" id="ssmrvTrigger" title="Open SSMRV Admissions Chat">
        <div class="ssmrv-trigger-pulse"></div>
        <div class="ssmrv-trigger-badge">1</div>
        <img src="${rvLogoSrc}" alt="RV Crest" class="ssmrv-trigger-rv-crest">
        <svg class="ssmrv-trigger-close-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" style="display:none;">
          <line x1="18" y1="6" x2="6" y2="18"></line>
          <line x1="6" y1="6" x2="18" y2="18"></line>
        </svg>
      </div>"""

content = content.replace(old_trigger, new_trigger)

# 4. Update header avatar to use rvLogoSrc
old_header_avatar = """            <div class="ssmrv-avatar-wrapper">
              <img src="${logoSrc}" alt="SSMRV Logo" class="ssmrv-avatar-img">
              <span class="ssmrv-status-indicator" title="Online"></span>
            </div>"""

new_header_avatar = """            <div class="ssmrv-avatar-wrapper">
              <img src="${rvLogoSrc}" alt="RV Crest" class="ssmrv-avatar-img">
              <span class="ssmrv-status-indicator" title="Online"></span>
            </div>"""

content = content.replace(old_header_avatar, new_header_avatar)

# 5. Update appendBotMessage to use rvLogoSrc
old_append_bot = """  function appendBotMessage(html) {
    const logoSrc = getLogoUrl();
    const msgEl = document.createElement('div');
    msgEl.className = 'ssmrv-message bot';
    msgEl.innerHTML = `
      <div class="ssmrv-msg-avatar">
        <img src="${logoSrc}" alt="SSMRV">
      </div>"""

new_append_bot = """  function appendBotMessage(html) {
    const rvLogoSrc = getRvLogoUrl();
    const msgEl = document.createElement('div');
    msgEl.className = 'ssmrv-message bot';
    msgEl.innerHTML = `
      <div class="ssmrv-msg-avatar">
        <img src="${rvLogoSrc}" alt="RV Crest">
      </div>"""

content = content.replace(old_append_bot, new_append_bot)

# 6. Update breadcrumbs
old_breadcrumbs = """      faculty: "Faculty & Leadership",
      centres_clubs: "Centres & Clubs","""

new_breadcrumbs = """      faculty: "Faculty Directory",
      faculty_bca: "BCA Faculty",
      faculty_commerce: "Commerce Faculty",
      faculty_bba: "BBA Faculty",
      faculty_mcom: "M.Com Faculty",
      faculty_languages: "Languages Faculty",
      faculty_placement: "Placement Cell",
      faculty_leadership: "Leadership",
      prospectus_downloads: "Official Downloads",
      campus_navigation: "Campus Directions",
      centres_clubs: "Centres & Clubs","""

content = content.replace(old_breadcrumbs, new_breadcrumbs)

# 7. Update resolveUserQuery with Faculty and Download Intelligence
old_resolve_block = """    if (/\b(faculty|teacher|professor|hod|lecturer|staff|principal)\b/i.test(text)) {
      return { type: 'flow', flowId: 'faculty' };
    }
    if (/\b(club|centre|centers|sustainability|rotaract|nss|heritage|excellence)\b/i.test(text)) {
      return { type: 'flow', flowId: 'centres_clubs' };
    }"""

new_resolve_block = """    // 2.a Official Downloads & Prospectus Intent
    if (/\b(prospectus|brochure|disclosure|mandatory disclosure|aicte|catalog|syllabus|calendar|handbook|pdf|download)\b/i.test(text)) {
      return { type: 'flow', flowId: 'prospectus_downloads' };
    }

    // 2.b Campus Navigation & Directions Intent
    if (/\b(map|maps|location|address|direction|directions|where is|how to reach|metro|bus|route|campus tour|landmark)\b/i.test(text)) {
      return { type: 'flow', flowId: 'campus_navigation' };
    }

    // 2.c Specific Faculty Name Lookup
    if (typeof SSMRV_FACULTY_CATALOG !== 'undefined' && SSMRV_FACULTY_CATALOG.length > 0) {
      let matchedFaculty = null;
      for (const fac of SSMRV_FACULTY_CATALOG) {
        const rawTokens = fac.name.replace(/^(Dr\.|Mr\.|Mrs\.|Ms\.|Sri\.|Smt\.)\s*/i, '').toLowerCase().split(/\s+/);
        const matchesToken = rawTokens.some(tok => tok.length >= 4 && text.includes(tok));
        if (matchesToken || text.includes(fac.name.toLowerCase())) {
          matchedFaculty = fac;
          break;
        }
      }

      if (matchedFaculty) {
        const emailHtml = matchedFaculty.email ? `<br>✉️ <b>Email:</b> <a href="mailto:${matchedFaculty.email}" style="color:var(--ssmrv-navy); font-weight:600;">${matchedFaculty.email}</a>` : '';
        const qualHtml = matchedFaculty.qualifications ? `<br>🎓 <b>Qualifications:</b> ${matchedFaculty.qualifications}` : '';
        const specHtml = matchedFaculty.specialisation ? `<br>🔬 <b>Specialisation:</b> <i>${matchedFaculty.specialisation}</i>` : '';

        return {
          type: 'response',
          message: `
            <div class="ssmrv-faculty-card">
              <div class="ssmrv-faculty-name">${matchedFaculty.name}</div>
              <div class="ssmrv-faculty-role">${matchedFaculty.designation} — ${matchedFaculty.department}</div>
              <div class="ssmrv-faculty-meta">
                ${qualHtml}
                ${specHtml}
                ${emailHtml}
              </div>
            </div>`,
          buttons: [
            { text: "🌐 View Faculty Profile Online", url: matchedFaculty.url },
            { text: "👨‍🏫 Explore All Faculty", action: "flow:faculty" },
            { text: "📞 Contact Office", action: "flow:contact" },
            { text: "↩️ Main Menu", action: "flow:welcome" }
          ]
        };
      }

      // Department Faculty Routes
      if (/\b(bca|computer|software|coding)\b/i.test(text) && /\b(faculty|teacher|professor|hod|staff|who teaches)\b/i.test(text)) {
        return { type: 'flow', flowId: 'faculty_bca' };
      }
      if (/\b(commerce|b\.?com|accounting|taxation)\b/i.test(text) && /\b(faculty|teacher|professor|hod|staff|who teaches)\b/i.test(text)) {
        return { type: 'flow', flowId: 'faculty_commerce' };
      }
      if (/\b(bba|management|aviation)\b/i.test(text) && /\b(faculty|teacher|professor|hod|staff|who teaches)\b/i.test(text)) {
        return { type: 'flow', flowId: 'faculty_bba' };
      }
      if (/\b(placement|recruitment|job|paryapti)\b/i.test(text) && /\b(officer|head|incharge|in-charge|who is)\b/i.test(text)) {
        return { type: 'flow', flowId: 'faculty_placement' };
      }
      if (/\b(language|languages|kannada|english|hindi)\b/i.test(text) && /\b(faculty|teacher|professor|hod|staff)\b/i.test(text)) {
        return { type: 'flow', flowId: 'faculty_languages' };
      }
      if (/\b(principal|head of college|director)\b/i.test(text)) {
        return { type: 'flow', flowId: 'faculty_leadership' };
      }
    }

    if (/\b(faculty|teacher|professor|hod|lecturer|staff|principal)\b/i.test(text)) {
      return { type: 'flow', flowId: 'faculty' };
    }
    if (/\b(club|centre|centers|sustainability|rotaract|nss|heritage|excellence)\b/i.test(text)) {
      return { type: 'flow', flowId: 'centres_clubs' };
    }"""

content = content.replace(old_resolve_block, new_resolve_block)

# 8. Update toggleChat to toggle close icon vs trigger logo
old_toggle = """    if (isOpen) {
      chatWindow.classList.add('is-open');
      triggerBtn.classList.add('is-active');
      triggerBtn.querySelector('.ssmrv-trigger-icon').style.display = 'none';
      if (!triggerBtn.querySelector('.ssmrv-trigger-close-icon')) {
        const closeSvg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        closeSvg.setAttribute('class', 'ssmrv-trigger-close-icon');
        closeSvg.setAttribute('viewBox', '0 0 24 24');
        closeSvg.setAttribute('fill', 'none');
        closeSvg.setAttribute('stroke', 'currentColor');
        closeSvg.setAttribute('stroke-width', '2.5');
        closeSvg.innerHTML = '<line x1=\"18\" y1=\"6\" x2=\"6\" y2=\"18\"></line><line x1=\"6\" y1=\"6\" x2=\"18\" y2=\"18\"></line>';
        triggerBtn.appendChild(closeSvg);
      } else {
        triggerBtn.querySelector('.ssmrv-trigger-close-icon').style.display = 'block';
      }"""

new_toggle = """    if (isOpen) {
      chatWindow.classList.add('is-open');
      triggerBtn.classList.add('is-active');
      const crest = triggerBtn.querySelector('.ssmrv-trigger-rv-crest');
      if (crest) crest.style.display = 'none';
      const triggerIcon = triggerBtn.querySelector('.ssmrv-trigger-icon');
      if (triggerIcon) triggerIcon.style.display = 'none';
      let closeSvg = triggerBtn.querySelector('.ssmrv-trigger-close-icon');
      if (!closeSvg) {
        closeSvg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        closeSvg.setAttribute('class', 'ssmrv-trigger-close-icon');
        closeSvg.setAttribute('viewBox', '0 0 24 24');
        closeSvg.setAttribute('fill', 'none');
        closeSvg.setAttribute('stroke', 'currentColor');
        closeSvg.setAttribute('stroke-width', '2.5');
        closeSvg.innerHTML = '<line x1=\"18\" y1=\"6\" x2=\"6\" y2=\"18\"></line><line x1=\"6\" y1=\"6\" x2=\"18\" y2=\"18\"></line>';
        triggerBtn.appendChild(closeSvg);
      }
      closeSvg.style.display = 'block';"""

content = content.replace(old_toggle, new_toggle)

# Update the close branch of toggleChat
old_close_branch = """    } else {
      chatWindow.classList.remove('is-open');
      triggerBtn.classList.remove('is-active');
      triggerBtn.querySelector('.ssmrv-trigger-icon').style.display = 'block';
      const closeSvg = triggerBtn.querySelector('.ssmrv-trigger-close-icon');
      if (closeSvg) closeSvg.style.display = 'none';
      clearInactivityTimer();
    }"""

new_close_branch = """    } else {
      chatWindow.classList.remove('is-open');
      triggerBtn.classList.remove('is-active');
      const crest = triggerBtn.querySelector('.ssmrv-trigger-rv-crest');
      if (crest) crest.style.display = 'block';
      const triggerIcon = triggerBtn.querySelector('.ssmrv-trigger-icon');
      if (triggerIcon) triggerIcon.style.display = 'block';
      const closeSvg = triggerBtn.querySelector('.ssmrv-trigger-close-icon');
      if (closeSvg) closeSvg.style.display = 'none';
      clearInactivityTimer();
    }"""

content = content.replace(old_close_branch, new_close_branch)

with open(r"c:\Users\HP\Downloads\SSMRVD\script.js", "w", encoding="utf-8") as fp:
    fp.write(content)

print("script.js updated successfully!")
