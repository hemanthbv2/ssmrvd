import re

with open(r"c:\Users\HP\Downloads\SSMRVD\script.js", "r", encoding="utf-8") as f:
    content = f.read()

# 1. Update appendBotMessage to show pageUrl below info
old_append_bot = """  function appendBotMessage(html) {
    const rvLogoSrc = getRvLogoUrl();
    const msgEl = document.createElement('div');
    msgEl.className = 'ssmrv-message bot';
    msgEl.innerHTML = `
      <div class="ssmrv-msg-avatar">
        <img src="${rvLogoSrc}" alt="RV Crest">
      </div>
      <div class="ssmrv-msg-content-wrap">
        <div class="ssmrv-message-bubble">${html}</div>
        <span class="ssmrv-msg-time">${getCurrentTime()}</span>
      </div>
    `;
    chatMessages.appendChild(msgEl);
    scrollToBottom();
  }"""

new_append_bot = """  function appendBotMessage(html, pageUrl = null) {
    const rvLogoSrc = getRvLogoUrl();
    const msgEl = document.createElement('div');
    msgEl.className = 'ssmrv-message bot';

    // Auto-resolve pageUrl from active flow if not explicitly passed
    const targetUrl = pageUrl || (typeof CHAT_FLOWS !== 'undefined' && CHAT_FLOWS[currentFlowId] ? CHAT_FLOWS[currentFlowId].pageUrl : null);

    let sourceLinkHtml = '';
    if (targetUrl && !html.includes('ssmrv-source-link')) {
      const displayUrl = targetUrl.replace(/^https?:\\/\\/(www\\.)?/, '').replace(/\\/$/, '');
      sourceLinkHtml = `
        <div class="ssmrv-source-link">
          <span class="ssmrv-source-label">🌐 Official Page:</span>
          <a href="${targetUrl}" target="_blank" rel="noopener noreferrer" class="ssmrv-source-url">
            ${displayUrl} ↗
          </a>
        </div>
      `;
    }

    msgEl.innerHTML = `
      <div class="ssmrv-msg-avatar">
        <img src="${rvLogoSrc}" alt="RV Crest">
      </div>
      <div class="ssmrv-msg-content-wrap">
        <div class="ssmrv-message-bubble">
          ${html}
          ${sourceLinkHtml}
        </div>
        <span class="ssmrv-msg-time">${getCurrentTime()}</span>
      </div>
    `;
    chatMessages.appendChild(msgEl);
    scrollToBottom();
  }"""

content = content.replace(old_append_bot, new_append_bot)

# 2. Update navigateTo to pass flow.pageUrl
old_nav_animate = "appendBotMessage(flow.message);"
new_nav_animate = "appendBotMessage(flow.message, flow.pageUrl);"
content = content.replace(old_nav_animate, new_nav_animate)

# 3. Update breadcrumbs
old_bread = 'faculty_leadership: "Leadership",'
new_bread = """faculty_leadership: "Leadership",
      cancellation_refund: "Refund Policy",
      alumni: "Alumni Network",
      sitemap_links: "All College Links",
      links_programmes: "Program Links",
      links_admissions: "Admission Links","""
content = content.replace(old_bread, new_bread)

# 4. Update resolveUserQuery with Cancellation, Alumni, Sitemap, and Link queries
insert_marker = "    // 2. Official Downloads & Prospectus"
new_intents = """    // 1.b Admission Cancellation & UGC Refund Matrix Intent
    if (/\\b(cancel|cancellation|refund|surrender|withdraw admission|fee return|money back)\\b/i.test(text)) {
      return { type: 'flow', flowId: 'cancellation_refund' };
    }

    // 1.c Alumni Association Intent
    if (/\\b(alumni|alumnus|sammilana|past students|old students)\\b/i.test(text)) {
      return { type: 'flow', flowId: 'alumni' };
    }

    // 1.d All Links & Sitemap Directory Intent
    if (/\\b(all links|page links|sitemap|website links|all pages|directory|all urls)\\b/i.test(text)) {
      return { type: 'flow', flowId: 'sitemap_links' };
    }

    // 1.e Smart URL Matcher for "link for X" or "website for Y"
    if (/\\b(link|url|website|site|webpage)\\b/i.test(text) && typeof SSMRV_ALL_PAGES !== 'undefined') {
      let matchedPage = null;
      for (const p of SSMRV_ALL_PAGES) {
        const tLower = p.title.toLowerCase();
        const uLower = p.url.toLowerCase();
        if (text.includes('bca') && (uLower.includes('computer_application') || tLower.includes('bca'))) { matchedPage = p; break; }
        if ((text.includes('b.com') || text.includes('bcom') || text.includes('commerce')) && (uLower.includes('bachelor_of_commerce') || tLower.includes('b.com'))) { matchedPage = p; break; }
        if (text.includes('aviation') && uLower.includes('aviation')) { matchedPage = p; break; }
        if (text.includes('bba') && uLower.includes('business_administration')) { matchedPage = p; break; }
        if (text.includes('mcom') && uLower.includes('master_of_commerce')) { matchedPage = p; break; }
        if (text.includes('placement') && uLower.includes('placement')) { matchedPage = p; break; }
        if ((text.includes('admission') || text.includes('apply')) && uLower.includes('admission_procedure')) { matchedPage = p; break; }
        if (text.includes('refund') && uLower.includes('cancellation')) { matchedPage = p; break; }
        if (text.includes('alumni') && uLower.includes('alumni')) { matchedPage = p; break; }
        if (text.includes('raise') && uLower.includes('raise')) { matchedPage = p; break; }
        if (text.includes('disclosure') && uLower.includes('disclosure')) { matchedPage = p; break; }
      }
      if (matchedPage) {
        return {
          type: 'response',
          pageUrl: matchedPage.url,
          message: `Official web link for <b>${escapeHtml(matchedPage.title)}</b>:`,
          buttons: [
            { text: "🌐 Open on ssmrv.edu.in", url: matchedPage.url },
            { text: "🌐 Browse All Links (120+)", action: "flow:sitemap_links" },
            { text: "↩️ Main Menu", action: "flow:welcome" }
          ]
        };
      }
    }

    // 2. Official Downloads & Prospectus"""

content = content.replace(insert_marker, new_intents)

with open(r"c:\Users\HP\Downloads\SSMRVD\script.js", "w", encoding="utf-8") as f:
    f.write(content)

print("script.js updated with source link navigation and new intents successfully!")
