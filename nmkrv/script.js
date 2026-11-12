/**
 * NMKRV College (Autonomous) Chatbot — Conversational Engine & State Machine
 * Features:
 * - Levenshtein Distance & Token Jaccard Fuzzy Matching Algorithm
 * - Contextual Multi-turn State Machine with Breadcrumb Trails & Full Backtracking
 * - Dual-Write Telemetry Bridge
 * - 120s Inactivity Nudge Engine
 * - LocalStorage Session Persistence
 */

(function () {
  'use strict';

  // ─── Constants & State ───────────────────────────────────────
  const STORAGE_KEY = 'nmkrv_chatbot_session_v1';
  const INACTIVITY_TIMEOUT = 120000; // 120 seconds
  let isOpen = false;
  let isTyping = false;
  let currentFlowId = 'welcome';
  let welcomePromptDismissed = false;
  let inactivityTimer = null;
  let telemetry = null;

  // Multi-Level Backtracking Navigation History
  let navHistory = [];
  let currentViewState = {
    type: 'flow',
    flowId: 'welcome',
    searchQuery: null,
    resolution: null,
    title: 'Main Menu'
  };

  // DOM Elements
  let triggerBtn, chatWindow, chatMessages, chatInput, sendBtn, actionsContainer, typingIndicator, welcomePrompt;

  // Helper to resolve logo
  const getLogoUrl = () => {
    return (window.ssmrvChatbotSettings && window.ssmrvChatbotSettings.logoUrl)
      ? window.ssmrvChatbotSettings.logoUrl
      : 'assets/logo.png';
  };

  const getRvLogoUrl = () => {
    return (window.ssmrvChatbotSettings && window.ssmrvChatbotSettings.rvLogoUrl)
      ? window.ssmrvChatbotSettings.rvLogoUrl
      : 'assets/rv-logo.png';
  };

  // ─── Initialize Engine ──────────────────────────────────────
  function init() {
    // Initialize Telemetry
    if (window.SSMRVTelemetry) {
      telemetry = new window.SSMRVTelemetry();
    }

    // Build DOM structure if not statically present
    ensureChatMarkup();

    // Cache DOM references
    triggerBtn = document.getElementById('ssmrvTrigger');
    chatWindow = document.getElementById('ssmrvChatWindow');
    chatMessages = document.getElementById('ssmrvMessages');
    chatInput = document.getElementById('ssmrvInput');
    sendBtn = document.getElementById('ssmrvSend');
    actionsContainer = document.getElementById('ssmrvActions');
    typingIndicator = document.getElementById('ssmrvTyping');
    welcomePrompt = document.getElementById('ssmrvWelcomePrompt');

    // Attach Event Listeners
    attachEvents();

    // Restore or start fresh
    const restored = loadState();
    if (!restored) {
      navigateTo('welcome', false);
      if (!welcomePromptDismissed && welcomePrompt) {
        setTimeout(() => {
          if (!isOpen && welcomePrompt) welcomePrompt.style.display = 'flex';
        }, 1200);
      }
    }
  }

  // ─── Inject Widget Markup ────────────────────────────────────
  function ensureChatMarkup() {
    if (document.getElementById('ssmrvChatWindow')) return;

    const logoSrc = getLogoUrl();
    const rvLogoSrc = getRvLogoUrl();

    const widgetHtml = `
      <!-- Welcome Prompt Floating Card -->
      <div class="ssmrv-welcome-prompt" id="ssmrvWelcomePrompt" style="display:none;">
        <div class="ssmrv-welcome-header">
          <span class="ssmrv-welcome-title">
            <span>🎓</span> NMKRV Admissions Desk
          </span>
          <button class="ssmrv-welcome-close" id="ssmrvPromptClose" title="Dismiss">&times;</button>
        </div>
        <div class="ssmrv-welcome-body">
          Welcome to NMKRV College (Autonomous), Jayanagar. Explore UG, PG, Ph.D. programmes, faculty profiles, or ask any question!
        </div>
        <div class="ssmrv-welcome-cta">
          Chat with us <span>&rarr;</span>
        </div>
      </div>

      <!-- Floating Trigger Button -->
      <div class="ssmrv-chat-trigger" id="ssmrvTrigger" title="Open NMKRV Admissions Chat">
        <div class="ssmrv-trigger-pulse"></div>
        <div class="ssmrv-trigger-badge">1</div>
        <img src="${rvLogoSrc}" alt="RV Crest" class="ssmrv-trigger-rv-crest">
        <svg class="ssmrv-trigger-close-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" style="display:none;">
          <line x1="18" y1="6" x2="6" y2="18"></line>
          <line x1="6" y1="6" x2="18" y2="18"></line>
        </svg>
      </div>

      <!-- Main Chat Window -->
      <div class="ssmrv-chat-window" id="ssmrvChatWindow" role="dialog" aria-label="NMKRV Chatbot">
        <!-- Header -->
        <header class="ssmrv-chat-header">
          <div class="ssmrv-header-info">
            <div class="ssmrv-avatar-wrapper">
              <img src="${rvLogoSrc}" alt="RV Crest" class="ssmrv-avatar-img">
              <span class="ssmrv-status-indicator" title="Online"></span>
            </div>
            <div class="ssmrv-header-text">
              <span class="ssmrv-college-title">
                NMKRV College <span class="ssmrv-verified-badge">✓</span>
              </span>
              <span class="ssmrv-college-subtitle">
                <span>●</span> Online | Jayanagar, Bengaluru
              </span>
            </div>
          </div>
          <div class="ssmrv-header-actions">
            <button class="ssmrv-header-btn" id="ssmrvClearChat" title="Clear Chat History">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path></svg>
            </button>
            <button class="ssmrv-header-btn" id="ssmrvCloseChat" title="Close Chat">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
            </button>
          </div>
        </header>

        <!-- Breadcrumb Bar -->
        <div class="ssmrv-breadcrumb-bar" id="ssmrvBreadcrumb">
          <span>Navigation:</span>
          <span class="ssmrv-breadcrumb-link" id="ssmrvBreadcrumbCurrent">Main Menu</span>
        </div>

        <!-- Messages Area -->
        <div class="ssmrv-chat-messages" id="ssmrvMessages">
          <!-- Messages will be injected dynamically -->
        </div>

        <!-- Typing Indicator -->
        <div class="ssmrv-typing-indicator" id="ssmrvTyping">
          <div class="ssmrv-msg-avatar">
            <img src="${logoSrc}" alt="NMKRV">
          </div>
          <div class="ssmrv-typing-bubble">
            <span class="ssmrv-typing-dot"></span>
            <span class="ssmrv-typing-dot"></span>
            <span class="ssmrv-typing-dot"></span>
          </div>
        </div>

        <!-- Quick Action Buttons Container -->
        <div class="ssmrv-actions-container" id="ssmrvActions">
          <!-- Quick action chips injected here -->
        </div>

        <!-- Input Bar -->
        <form class="ssmrv-chat-input-bar" id="ssmrvInputForm">
          <input type="text" class="ssmrv-chat-input" id="ssmrvInput" placeholder="Ask about B.Sc, B.Com, BBA, BCA, M.Sc, M.Com, placements.." autocomplete="off">
          <button type="submit" class="ssmrv-chat-send-btn" id="ssmrvSend" title="Send Message">
            <svg viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <line x1="22" y1="2" x2="11" y2="13"></line>
              <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
            </svg>
          </button>
        </form>

        <!-- Footer -->
        <div class="ssmrv-chat-footer">
          Official Admissions Portal • <a href="https://nmkrv.edu.in" target="_blank">nmkrv.edu.in</a>
        </div>
      </div>
    `;

    const container = document.createElement('div');
    container.className = 'ssmrv-chatbot-widget';
    container.innerHTML = widgetHtml;
    document.body.appendChild(container);
  }

  // ─── Event Binding ───────────────────────────────────────────
  function attachEvents() {
    triggerBtn.addEventListener('click', toggleChat);
    document.getElementById('ssmrvCloseChat').addEventListener('click', toggleChat);
    document.getElementById('ssmrvClearChat').addEventListener('click', clearChat);

    if (welcomePrompt) {
      welcomePrompt.addEventListener('click', (e) => {
        if (e.target.id === 'ssmrvPromptClose') {
          e.stopPropagation();
          welcomePrompt.style.display = 'none';
          welcomePromptDismissed = true;
          saveState();
        } else {
          welcomePrompt.style.display = 'none';
          toggleChat();
        }
      });
    }

    document.getElementById('ssmrvInputForm').addEventListener('submit', (e) => {
      e.preventDefault();
      handleUserSubmit();
    });

    const breadcrumbLink = document.getElementById('ssmrvBreadcrumbCurrent');
    if (breadcrumbLink) breadcrumbLink.addEventListener('click', goToMainMenu);

    if (chatMessages) {
      chatMessages.addEventListener('click', (e) => {
        if (e.target.closest('a')) return;
        const profileCard = e.target.closest('.ssmrv-dept-profile-item[data-profile-id]');
        if (profileCard) {
          const pid = profileCard.getAttribute('data-profile-id');
          if (pid) showFacultyProfile(pid);
        }
      });
    }
  }

  function toggleChat() {
    isOpen = !isOpen;
    if (isOpen) {
      chatWindow.classList.add('is-open');
      if (welcomePrompt) welcomePrompt.style.display = 'none';
      const badge = triggerBtn.querySelector('.ssmrv-trigger-badge');
      if (badge) badge.style.display = 'none';
      setTimeout(() => chatInput.focus(), 300);
      resetInactivityTimer();
      if (telemetry) telemetry.trackEvent('chat_opened');
    } else {
      chatWindow.classList.remove('is-open');
      clearInactivityTimer();
      if (telemetry) telemetry.trackEvent('chat_closed');
    }
    saveState();
  }

  function clearChat() {
    if (confirm('Clear entire conversation history?')) {
      chatMessages.innerHTML = '';
      navHistory = [];
      updateNavUI();
      clearInactivityTimer();
      localStorage.removeItem(STORAGE_KEY);
      goToMainMenu();
      if (telemetry) telemetry.trackEvent('chat_cleared');
    }
  }

  // ─── Inactivity Engine ────────────────────────────────────────
  function resetInactivityTimer() {
    clearInactivityTimer();
    if (isOpen) {
      inactivityTimer = setTimeout(() => {
        appendBotMessage(
          `Hello 👋<br><br>Let us know if you need any details regarding <b>NMKRV College (Autonomous) programmes, faculty, admissions, or placements</b>.`
        );
        renderButtons([
          { text: "📚 Explore Programmes", action: "flow:programmes" },
          { text: "📝 Admissions & Apply", action: "flow:admissions" },
          { text: "👨‍🏫 Faculty Directory", action: "flow:faculty" },
          { text: "💼 Placements & Packages", action: "flow:placements" }
        ]);
        saveState();
      }, INACTIVITY_TIMEOUT);
    }
  }

  function clearInactivityTimer() {
    if (inactivityTimer) {
      clearTimeout(inactivityTimer);
      inactivityTimer = null;
    }
  }

  // ─── Multi-Level Navigation History & Backtracking Engine ─────
  function getBreadcrumbName(flowId) {
    if (!flowId) return "Search Result";
    const names = {
      welcome: "Main Menu",
      main_menu: "Main Menu",
      programmes: "Programmes",
      bsc_details: "B.Sc. Programmes",
      ba_details: "B.A. Programmes",
      bcom_details: "B.Com Details",
      bba_details: "BBA Details",
      bca_details: "BCA Details",
      pg_details: "PG Programmes",
      phd_vac_details: "Ph.D. & Value-Added",
      admissions: "Admissions",
      placements: "Placements & DISHA",
      scholarships: "Scholarships",
      faculty: "Faculty Directory",
      faculty_directory: "Faculty Directory",
      faculty_leadership: "Institutional Leadership",
      faculty_commerce: "Commerce Faculty",
      faculty_commerce_mgmt: "Commerce & Management Faculty",
      faculty_bba: "Management (BBA) Faculty",
      faculty_bca: "BCA & CS Faculty",
      faculty_cs_bca: "Computer Science & BCA Faculty",
      faculty_physical_sciences: "Physical & Chemical Sciences",
      faculty_life_sciences: "Life Sciences Faculty",
      faculty_humanities: "Humanities & Media Studies",
      faculty_languages_admin: "Languages, Library & Sports",
      about_nmkrv: "About NMKRV College",
      research_iqac_exams: "IQAC, Research & Exams",
      centres_clubs: "Student Clubs & Associations",
      campus: "Campus Life & Facilities",
      prospectus_downloads: "Official Downloads",
      campus_navigation: "Campus Directions",
      alumni: "Alumni Network",
      contact: "Contact Us"
    };
    return names[flowId] || flowId;
  }

  function updateBreadcrumb(flowId) {
    updateBreadcrumbTitle(getBreadcrumbName(flowId));
  }

  function updateBreadcrumbTitle(title) {
    const breadcrumbEl = document.getElementById('ssmrvBreadcrumbCurrent');
    if (breadcrumbEl) {
      breadcrumbEl.innerText = title;
    }
  }

  function pushNavState(state) {
    if (!state) return;
    if (navHistory.length > 0) {
      const top = navHistory[navHistory.length - 1];
      if (top.type === state.type && top.flowId === state.flowId && top.searchQuery === state.searchQuery) {
        return;
      }
    }
    navHistory.push({
      type: state.type,
      flowId: state.flowId || null,
      searchQuery: state.searchQuery || null,
      resolution: state.resolution ? JSON.parse(JSON.stringify(state.resolution)) : null,
      title: state.title || (state.flowId ? getBreadcrumbName(state.flowId) : (state.searchQuery ? ('Search: ' + state.searchQuery) : 'Main Menu'))
    });
    updateNavUI();
  }

  function updateNavUI() {
    const backBtn = document.getElementById('ssmrvNavBack');
    if (backBtn) {
      if (navHistory.length > 0) {
        backBtn.disabled = false;
        backBtn.classList.remove('is-disabled');
        const top = navHistory[navHistory.length - 1];
        backBtn.title = top.searchQuery ? `Back to search: "${top.searchQuery}"` : `Back to ${top.title || 'previous view'}`;
      } else {
        backBtn.disabled = true;
        backBtn.classList.add('is-disabled');
        backBtn.title = 'No previous view';
      }
    }
  }

  function goBack() {
    if (navHistory.length === 0) {
      goToMainMenu();
      return;
    }

    resetInactivityTimer();
    const prevState = navHistory.pop();
    updateNavUI();

    if (prevState.type === 'search' && prevState.resolution) {
      appendUserMessage(`⬅️ Back to: "${prevState.searchQuery}"`);
      currentViewState = prevState;
      currentFlowId = null;
      updateBreadcrumbTitle(prevState.title || `Search: "${prevState.searchQuery}"`);

      showTyping(true);
      setTimeout(() => {
        showTyping(false);
        appendBotMessage(prevState.resolution.message, prevState.resolution.pageUrl);
        renderButtons(prevState.resolution.buttons || []);
        saveState();
      }, 350);
    } else if (prevState.flowId) {
      const flowName = getBreadcrumbName(prevState.flowId);
      appendUserMessage(`⬅️ Back to ${flowName}`);
      currentViewState = prevState;
      navigateTo(prevState.flowId, true, false);
    } else {
      goToMainMenu();
    }

    if (telemetry) {
      telemetry.trackEvent('nav_back_clicked', {
        restoredType: prevState.type,
        target: prevState.flowId || prevState.searchQuery
      });
    }
  }

  function goToMainMenu() {
    resetInactivityTimer();
    if (currentFlowId !== 'welcome' && currentFlowId !== 'main_menu') {
      pushNavState(currentViewState);
      appendUserMessage('🏠 Main Menu');
    }
    currentViewState = {
      type: 'flow',
      flowId: 'welcome',
      searchQuery: null,
      resolution: null,
      title: 'Main Menu'
    };
    navigateTo('welcome', true, false);
    if (telemetry) {
      telemetry.trackEvent('main_menu_clicked');
    }
  }

  function navigateTo(flowId, animate = true, pushHistory = true) {
    const flow = CHAT_FLOWS[flowId];
    if (!flow) return;

    if (pushHistory && currentViewState && (currentViewState.flowId !== flowId || currentViewState.type === 'search')) {
      pushNavState(currentViewState);
    }

    currentFlowId = flowId;
    currentViewState = {
      type: 'flow',
      flowId: flowId,
      searchQuery: null,
      resolution: null,
      title: getBreadcrumbName(flowId)
    };

    updateBreadcrumb(flowId);
    updateNavUI();
    resetInactivityTimer();

    if (animate) {
      showTyping(true);
      setTimeout(() => {
        showTyping(false);
        appendBotMessage(flow.message, flow.pageUrl);
        renderButtons(flow.buttons || []);
        saveState();
      }, 450);
    } else {
      appendBotMessage(flow.message, flow.pageUrl);
      renderButtons(flow.buttons || []);
      saveState();
    }

    if (telemetry) {
      telemetry.trackEvent('flow_navigated', { flowId });
    }
  }

  // ─── Rendering Helpers ───────────────────────────────────────
  function appendUserMessage(text) {
    const msgEl = document.createElement('div');
    msgEl.className = 'ssmrv-message user';
    msgEl.innerHTML = `
      <div class="ssmrv-msg-avatar">You</div>
      <div class="ssmrv-msg-content-wrap">
        <div class="ssmrv-message-bubble">${escapeHtml(text)}</div>
        <span class="ssmrv-msg-time">${getCurrentTime()}</span>
      </div>
    `;
    chatMessages.appendChild(msgEl);
    scrollToBottom();
  }

  function appendBotMessage(html, pageUrl = null) {
    const rvLogoSrc = getRvLogoUrl();
    const msgEl = document.createElement('div');
    msgEl.className = 'ssmrv-message bot';

    const targetUrl = pageUrl || (typeof CHAT_FLOWS !== 'undefined' && CHAT_FLOWS[currentFlowId] ? CHAT_FLOWS[currentFlowId].pageUrl : null);

    let sourceLinkHtml = '';
    if (targetUrl && !html.includes('ssmrv-source-link')) {
      const displayUrl = targetUrl.replace(/^https?:\/\/(www\.)?/, '').replace(/\/$/, '');
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
    smartScrollLatestBotMessage();
  }

  function smartScrollLatestBotMessage() {
    requestAnimationFrame(() => {
      const botMsgs = chatMessages.querySelectorAll('.ssmrv-message.bot');
      if (!botMsgs.length) {
        scrollToBottom();
        return;
      }
      const lastMsg = botMsgs[botMsgs.length - 1];
      if (lastMsg.offsetHeight > chatMessages.clientHeight * 0.65) {
        chatMessages.scrollTop = Math.max(0, lastMsg.offsetTop - chatMessages.offsetTop - 8);
      } else {
        scrollToBottom();
      }
    });
  }

  function showTyping(show) {
    isTyping = show;
    if (show) {
      typingIndicator.classList.add('is-visible');
    } else {
      typingIndicator.classList.remove('is-visible');
    }
    scrollToBottom();
  }

  function scrollToBottom() {
    chatMessages.scrollTop = chatMessages.scrollHeight;
  }

  function renderButtons(rawButtons) {
    actionsContainer.innerHTML = '';
    if (!rawButtons) rawButtons = [];

    const filteredButtons = rawButtons.filter(b => {
      const txt = (b.text || '').toLowerCase();
      return !txt.includes('back to main menu') && !txt.includes('return to main menu');
    });

    const finalButtons = [...filteredButtons];
    if (navHistory.length > 0) {
      finalButtons.push({ text: "⬅️ Back", action: "nav:back", isNavBack: true });
    }
    if (currentFlowId !== 'welcome' && currentFlowId !== 'main_menu') {
      finalButtons.push({ text: "🏠 Main Menu", action: "nav:home", isNavHome: true });
    }

    if (finalButtons.length === 0) {
      actionsContainer.style.display = 'none';
      return;
    }

    actionsContainer.style.display = 'flex';
    finalButtons.forEach(btn => {
      const chip = document.createElement('button');
      chip.type = 'button';
      chip.className = 'ssmrv-action-chip';
      if (btn.isNavBack) chip.classList.add('is-nav-back');
      if (btn.isNavHome) chip.classList.add('is-nav-home');
      if (btn.action && btn.action.startsWith('profile:')) chip.classList.add('is-profile-chip');
      if (btn.isPrimary || (btn.action && (btn.action.includes('inquiry') || btn.action.includes('fee')))) chip.classList.add('is-primary');
      chip.innerHTML = btn.text;

      chip.addEventListener('click', () => {
        resetInactivityTimer();
        if (btn.action === 'nav:back') {
          goBack();
        } else if (btn.action === 'nav:home') {
          goToMainMenu();
        } else if (btn.url) {
          if (btn.url.startsWith('tel:')) {
            window.location.href = btn.url;
          } else {
            window.open(btn.url, '_blank');
          }
          if (telemetry) telemetry.trackEvent('external_link_clicked', { url: btn.url, label: btn.text });
        } else if (btn.action) {
          if (btn.action.startsWith('profile:')) {
            const profileId = btn.action.replace('profile:', '');
            showFacultyProfile(profileId);
          } else if (btn.action.startsWith('flow:')) {
            const targetFlow = btn.action.replace('flow:', '');
            appendUserMessage(btn.text.replace(/^[^\w\s]+/, '').trim());
            if (targetFlow === 'welcome' || targetFlow === 'main_menu') {
              goToMainMenu();
            } else {
              navigateTo(targetFlow);
            }
          } else if (btn.action.startsWith('faq:')) {
            const question = btn.action.replace('faq:', '');
            appendUserMessage(question);
            handleFaqAnswer(question);
          }
        }
      });

      actionsContainer.appendChild(chip);
    });
    smartScrollLatestBotMessage();
  }

  // ─── Rich Faculty Profile Rendering & Navigation ──────────────
  function findFacultyById(facultyId) {
    if (typeof SSMRV_FACULTY_CATALOG === 'undefined') return null;
    return SSMRV_FACULTY_CATALOG.find(f => f.id === facultyId) || null;
  }

  function buildFacultyProfileCardHtml(fac) {
    if (!fac) return '';
    const qualHtml = fac.qualifications ? `<div class="ssmrv-fac-row"><span class="ssmrv-fac-label">🎓 Qualifications</span><span class="ssmrv-fac-val">${fac.qualifications}</span></div>` : '';
    const expHtml = fac.experience ? `<div class="ssmrv-fac-row"><span class="ssmrv-fac-label">⏳ Experience</span><span class="ssmrv-fac-val">${fac.experience}</span></div>` : '';
    const specHtml = fac.specialisation ? `<div class="ssmrv-fac-row"><span class="ssmrv-fac-label">🔬 Areas of Expertise</span><span class="ssmrv-fac-val">${fac.specialisation}</span></div>` : '';
    const commHtml = fac.committee ? `<div class="ssmrv-fac-row"><span class="ssmrv-fac-label">🛡️ Institutional Role</span><span class="ssmrv-fac-val ssmrv-fac-role-val">${fac.committee}</span></div>` : '';
    const bioHtml = fac.bio ? `<div class="ssmrv-fac-section"><div class="ssmrv-fac-sec-title">📖 Profile Overview</div><div class="ssmrv-fac-sec-text">${fac.bio}</div></div>` : '';
    const highHtml = fac.highlights ? `<div class="ssmrv-fac-section"><div class="ssmrv-fac-sec-title">🏆 Publications &amp; Highlights</div><div class="ssmrv-fac-sec-text">${fac.highlights}</div></div>` : '';
    const emailHtml = fac.email ? `✉️ <a href="mailto:${fac.email}">${fac.email}</a>` : '';
    const phoneHtml = fac.phone ? `📞 <a href="tel:${fac.phone.replace(/\s+/g, '')}">${fac.phone}</a>` : '';
    const contactBar = (emailHtml || phoneHtml) ? `<div class="ssmrv-fac-contact">${emailHtml}${emailHtml && phoneHtml ? ' &nbsp;•&nbsp; ' : ''}${phoneHtml}</div>` : '';
    const visitWebsiteBtn = fac.url ? `
      <div class="ssmrv-fac-actions">
        <a href="${fac.url}" target="_blank" rel="noopener noreferrer" class="ssmrv-visit-website-btn">
          🌐 Visit Official Website Page ↗
        </a>
      </div>` : '';

    return `
      <div class="ssmrv-faculty-card">
        <div class="ssmrv-faculty-name">${fac.name}</div>
        <div class="ssmrv-faculty-badges">
          <span class="ssmrv-badge-desig">${fac.designation}</span>
          <span class="ssmrv-badge-dept">${fac.department}</span>
        </div>
        ${visitWebsiteBtn}
        <div class="ssmrv-faculty-meta">
          ${qualHtml}
          ${expHtml}
          ${specHtml}
          ${commHtml}
        </div>
        ${bioHtml}
        ${highHtml}
        ${contactBar}
      </div>`;
  }

  function buildFacultyProfileResolution(fac, extraButtons = []) {
    if (!fac) return null;
    const deptBtn = fac.deptFlow
      ? { text: `🏛️ ${fac.department} Faculty`, action: `flow:${fac.deptFlow}` }
      : { text: "👨‍🏫 Faculty Directory", action: "flow:faculty" };
    return {
      type: 'response',
      pageUrl: fac.url,
      message: buildFacultyProfileCardHtml(fac),
      buttons: [
        { text: "🌐 Visit Official Website Page ↗", url: fac.url, isPrimary: true },
        ...extraButtons,
        deptBtn,
        { text: "👨‍🏫 Faculty Directory", action: "flow:faculty" }
      ]
    };
  }

  function showFacultyProfile(facultyId) {
    const fac = findFacultyById(facultyId);
    if (!fac || isTyping) return;

    pushNavState(currentViewState);
    resetInactivityTimer();
    appendUserMessage(`${fac.name}`);

    const resolution = buildFacultyProfileResolution(fac);
    currentFlowId = null;
    currentViewState = {
      type: 'search',
      flowId: null,
      searchQuery: fac.name,
      resolution: resolution,
      title: `Profile: ${fac.name}`
    };
    updateBreadcrumbTitle(`Profile: ${fac.name}`);
    updateNavUI();

    showTyping(true);
    setTimeout(() => {
      showTyping(false);
      appendBotMessage(resolution.message, resolution.pageUrl);
      renderButtons(resolution.buttons || []);
      saveState();
    }, 300);

    if (telemetry) {
      telemetry.trackEvent('faculty_profile_viewed', { id: fac.id, name: fac.name, department: fac.department });
    }
  }

  // ─── Algorithms: Fuzzy Search & Intent Matching ───────────────

  function levenshteinDistance(a, b) {
    const matrix = [];
    for (let i = 0; i <= b.length; i++) matrix[i] = [i];
    for (let j = 0; j <= a.length; j++) matrix[0][j] = j;

    for (let i = 1; i <= b.length; i++) {
      for (let j = 1; j <= a.length; j++) {
        if (b.charAt(i - 1) === a.charAt(j - 1)) {
          matrix[i][j] = matrix[i - 1][j - 1];
        } else {
          matrix[i][j] = Math.min(
            matrix[i - 1][j - 1] + 1,
            matrix[i][j - 1] + 1,
            matrix[i - 1][j] + 1
          );
        }
      }
    }
    return matrix[b.length][a.length];
  }

  function calculateFuzzyScore(query, targetKeywords) {
    const queryTokens = query.toLowerCase().split(/\s+/).filter(t => t.length > 1);
    if (queryTokens.length === 0) return 0;

    let score = 0;
    queryTokens.forEach(qToken => {
      targetKeywords.forEach(kw => {
        const kwLower = kw.toLowerCase();
        if (kwLower === qToken) {
          score += 3.0;
        } else if (kwLower.includes(qToken) || qToken.includes(kwLower)) {
          score += 1.8;
        } else {
          const maxLen = Math.max(qToken.length, kwLower.length);
          if (maxLen > 3) {
            const dist = levenshteinDistance(qToken, kwLower);
            if (dist <= 1) {
              score += 1.5;
            } else if (dist <= 2 && maxLen >= 6) {
              score += 0.8;
            }
          }
        }
      });
    });

    return score;
  }

  function resolveUserQuery(rawText) {
    const text = rawText.toLowerCase().trim();

    // 0. Direct Main Menu & Home triggers
    if (/^(menu|main menu|home|start over|options|help menu|show menu)$/i.test(text)) {
      return { type: 'flow', flowId: 'welcome' };
    }

    // 1. Direct Greetings
    if (/^(hi|hello|hey|good morning|good afternoon|namaste|vanakkam)/i.test(text)) {
      return {
        type: 'response',
        message: "Hello! Welcome to <b>NMKRV College (Autonomous)</b>, Jayanagar. How may I help you with programmes, faculty, admissions, or placements today?",
        buttons: [
          { text: "📚 Explore Programmes", action: "flow:programmes" },
          { text: "📝 Admissions & Apply", action: "flow:admissions" },
          { text: "👨‍🏫 Faculty Directory", action: "flow:faculty" },
          { text: "💼 Placements & Packages", action: "flow:placements" },
          { text: "📄 Official Downloads", action: "flow:prospectus_downloads" },
          { text: "📍 Campus Navigation", action: "flow:campus_navigation" }
        ]
      };
    }

    // 1.b Scholarships & Endowments
    if (/\b(scholarship|scholarships|financial aid|ssp|nsp|freeship|merit award|meda)\b/i.test(text)) {
      return { type: 'flow', flowId: 'scholarships' };
    }

    // 1.c Alumni Association Intent
    if (/\b(alumni|alumnus|sammilana|past students|old students)\b/i.test(text)) {
      return { type: 'flow', flowId: 'alumni' };
    }

    // 1.d IQAC, Research, COE & Examinations
    if (/\b(iqac|ccr|research|coe|controller of examination|exam|examinations|naac|nirf|aqar)\b/i.test(text) && !/\b(phd|ph\.d)\b/i.test(text)) {
      return { type: 'flow', flowId: 'research_iqac_exams' };
    }

    // 1.e Smart URL Matcher for "link for X" or "website for Y"
    if (/\b(link|url|website|site|webpage)\b/i.test(text) && typeof SSMRV_ALL_PAGES !== 'undefined') {
      let matchedPage = null;
      for (const p of SSMRV_ALL_PAGES) {
        const tLower = p.title.toLowerCase();
        const uLower = p.url.toLowerCase();
        if (text.includes('bca') && uLower.includes('bca')) { matchedPage = p; break; }
        if ((text.includes('b.com') || text.includes('bcom') || text.includes('commerce')) && uLower.includes('commerce')) { matchedPage = p; break; }
        if (text.includes('bba') && uLower.includes('bba')) { matchedPage = p; break; }
        if ((text.includes('b.sc') || text.includes('bsc')) && uLower.includes('b-sc')) { matchedPage = p; break; }
        if ((text.includes('b.a') || text.includes('journalism')) && uLower.includes('humanities')) { matchedPage = p; break; }
        if (text.includes('placement') && uLower.includes('placement')) { matchedPage = p; break; }
        if ((text.includes('admission') || text.includes('apply')) && uLower.includes('admission')) { matchedPage = p; break; }
        if (text.includes('scholarship') && uLower.includes('scholarship')) { matchedPage = p; break; }
        if (text.includes('alumni') && uLower.includes('alumni')) { matchedPage = p; break; }
        if (text.includes('hostel') && uLower.includes('hostel')) { matchedPage = p; break; }
      }
      if (matchedPage) {
        return {
          type: 'response',
          pageUrl: matchedPage.url,
          message: `Official web link for <b>${escapeHtml(matchedPage.title)}</b>:`,
          buttons: [
            { text: "🌐 Visit Official Webpage ↗", url: matchedPage.url },
            { text: "📚 Explore Programmes", action: "flow:programmes" }
          ]
        };
      }
    }

    // 2. Official Downloads & Prospectus
    if (/\b(prospectus|brochure|disclosure|mandatory disclosure|aicte|catalog|syllabus|calendar|handbook|pdf|download)\b/i.test(text)) {
      return { type: 'flow', flowId: 'prospectus_downloads' };
    }

    // 3. Campus Navigation & Directions
    if (/\b(map|maps|location|address|direction|directions|where is|how to reach|metro|bus|route|campus tour|landmark|visit|come to college|see campus)\b/i.test(text)) {
      return { type: 'flow', flowId: 'campus_navigation' };
    }

    // 4. Comprehensive Faculty, Staff & Statutory Intelligence
    if (typeof SSMRV_FACULTY_CATALOG !== 'undefined' && SSMRV_FACULTY_CATALOG.length > 0) {
      
      // A. Direct Principal & Key Officers Lookups
      if (/\b(principal)\b/i.test(text) && /\b(who|name|profile|message|college|nmkrv|suchithra)\b/i.test(text)) {
        return buildFacultyProfileResolution(findFacultyById('dr-r-suchithra'));
      }

      if (/\b(coe|controller of examination)\b/i.test(text) && /\b(who|name|profile|head|officer)\b/i.test(text)) {
        return buildFacultyProfileResolution(findFacultyById('mrs-shilpa-p'));
      }

      if (/\b(placement|disha)\b/i.test(text) && /\b(officer|manager|head|incharge|in-charge|who is)\b/i.test(text)) {
        return buildFacultyProfileResolution(findFacultyById('ms-chaitra-v-c'), [
          { text: "💼 Placements & Packages", action: "flow:placements" }
        ]);
      }

      if (/\b(bca|computer)\b/i.test(text) && /\b(hod|head|coordinator)\b/i.test(text)) {
        const sneha = findFacultyById('mrs-snehaprabha-v');
        const raghu = findFacultyById('mr-raghavendra-b-l');
        return {
          type: 'response',
          pageUrl: "https://nmkrv.edu.in/cs-and-application/",
          message: `${buildFacultyProfileCardHtml(sneha)}${buildFacultyProfileCardHtml(raghu)}`,
          buttons: [
            { text: "👤 Mrs. Snehaprabha V", action: "profile:mrs-snehaprabha-v" },
            { text: "👤 Mr. Raghavendra B L", action: "profile:mr-raghavendra-b-l" },
            { text: "💻 Computer Science & BCA Faculty", action: "flow:faculty_cs_bca" }
          ]
        };
      }

      if (/\b(commerce|b\.?com|m\.?com|bba|management)\b/i.test(text) && /\b(hod|head|dean)\b/i.test(text)) {
        const savitha = findFacultyById('dr-savitha-b-n');
        const veena = findFacultyById('dr-veena-m-d');
        return {
          type: 'response',
          pageUrl: "https://nmkrv.edu.in/commerce-and-management-faculty-page/",
          message: `${buildFacultyProfileCardHtml(savitha)}${buildFacultyProfileCardHtml(veena)}`,
          buttons: [
            { text: "👤 Dr. Savitha B N (UG Dean & HoD)", action: "profile:dr-savitha-b-n" },
            { text: "👤 Dr. Veena M D (BBA HoD)", action: "profile:dr-veena-m-d" },
            { text: "👤 Dr. Roopa T N (M.Com Co-ordinator)", action: "profile:dr-roopa-t-n" },
            { text: "📊 Commerce & Management Faculty", action: "flow:faculty_commerce_mgmt" }
          ]
        };
      }

      // B. Multi-Token Individual Search across ALL 116 Profiles
      const matchedList = [];
      const textWords = text.replace(/[^a-zA-Z0-9\s]/g, ' ').split(/\s+/).filter(w => w.length >= 3);
      
      for (const fac of SSMRV_FACULTY_CATALOG) {
        const cleanName = fac.name.replace(/^(Dr\.|Mr\.|Mrs\.|Ms\.|Sri\.|Smt\.|Prof\.|Wg\.\s*Cdr\.)\s*/i, '').toLowerCase();
        const rawTokens = cleanName.split(/\s+/).map(t => t.replace(/[^a-zA-Z0-9]/g, '')).filter(t => t.length >= 3);
        const matchesExactWord = rawTokens.some(tok => textWords.includes(tok));
        if (matchesExactWord) {
          matchedList.push(fac);
        }
      }

      if (matchedList.length === 0) {
        for (const fac of SSMRV_FACULTY_CATALOG) {
          const cleanName = fac.name.replace(/^(Dr\.|Mr\.|Mrs\.|Ms\.|Sri\.|Smt\.|Prof\.|Wg\.\s*Cdr\.)\s*/i, '').toLowerCase();
          if (text.includes(cleanName) || cleanName.includes(text)) {
            matchedList.push(fac);
          }
        }
      }

      if (matchedList.length > 0) {
        const primary = matchedList[0];
        const relatedBtns = matchedList.slice(1, 5).map(other => ({
          text: `👤 ${other.name} (${other.department})`,
          action: `profile:${other.id}`
        }));
        return buildFacultyProfileResolution(primary, relatedBtns);
      }

      // Department-specific faculty queries
      if (/\b(bca|computer|software|coding|data science)\b/i.test(text) && /\b(faculty|teacher|professor|hod|staff|who teaches)\b/i.test(text)) {
        return { type: 'flow', flowId: 'faculty_cs_bca' };
      }
      if (/\b(commerce|b\.?com|bba|management|m\.?com|accounting)\b/i.test(text) && /\b(faculty|teacher|professor|hod|staff|who teaches)\b/i.test(text)) {
        return { type: 'flow', flowId: 'faculty_commerce_mgmt' };
      }
      if (/\b(chemistry|physics|mathematics|math|physical science)\b/i.test(text) && /\b(faculty|teacher|professor|hod|staff|who teaches)\b/i.test(text)) {
        return { type: 'flow', flowId: 'faculty_physical_sciences' };
      }
      if (/\b(biotechnology|botany|zoology|genetics|biochemistry|nutrition|life science)\b/i.test(text) && /\b(faculty|teacher|professor|hod|staff|who teaches)\b/i.test(text)) {
        return { type: 'flow', flowId: 'faculty_life_sciences' };
      }
      if (/\b(psychology|journalism|history|economics|sociology|political|humanities|b\.?ed)\b/i.test(text) && /\b(faculty|teacher|professor|hod|staff|who teaches)\b/i.test(text)) {
        return { type: 'flow', flowId: 'faculty_humanities' };
      }
      if (/\b(language|languages|kannada|english|hindi|sanskrit|library|librarian|sports)\b/i.test(text) && /\b(faculty|teacher|professor|hod|staff)\b/i.test(text)) {
        return { type: 'flow', flowId: 'faculty_languages_admin' };
      }
      if (/\b(principal|head of college|director|leader)\b/i.test(text)) {
        return { type: 'flow', flowId: 'faculty_leadership' };
      }
      if (/\b(faculty|teacher|professor|hod|lecturer|staff)\b/i.test(text)) {
        return { type: 'flow', flowId: 'faculty' };
      }
    }

    // 5. Intent Routing for Programs & Flow Targets
    if (/\b(placement|placements|package|salary|recruitment|recruiter|disha)\b/i.test(text)) {
      return { type: 'flow', flowId: 'placements' };
    }
    if (/\b(admission|admissions|apply|application|eligibility|co-ed|coed)\b/i.test(text)) {
      return { type: 'flow', flowId: 'admissions' };
    }
    if (/\b(phd|ph\.d|doctoral|value added|vac|certificate course|b\.?ed|integrated)\b/i.test(text)) {
      return { type: 'flow', flowId: 'phd_vac_details' };
    }
    if (/\b(m\.?sc|m\.?com|m\.?a|postgraduate|pg|master)\b/i.test(text)) {
      return { type: 'flow', flowId: 'pg_details' };
    }
    if (/\b(b\.?sc|science|biotech|botany|zoology|chemistry|physics|mathematics|psychology|nutrition|dietetics|data science)\b/i.test(text)) {
      return { type: 'flow', flowId: 'bsc_details' };
    }
    if (/\b(b\.?a|arts|humanities|journalism|history|economics|sociology|political)\b/i.test(text)) {
      return { type: 'flow', flowId: 'ba_details' };
    }
    if (/\b(b\.?com|commerce|accounting|acca|fintech)\b/i.test(text)) {
      return { type: 'flow', flowId: 'bcom_details' };
    }
    if (/\b(bba|business administration|management)\b/i.test(text)) {
      return { type: 'flow', flowId: 'bba_details' };
    }
    if (/\b(bca|computer|software|coding|it)\b/i.test(text)) {
      return { type: 'flow', flowId: 'bca_details' };
    }
    if (/\b(hostel|accommodation|library|saraswathi|lab|labs|auditorium|shashwathi|gym|sports|facility|facilities)\b/i.test(text)) {
      return { type: 'flow', flowId: 'campus' };
    }
    if (/\b(club|clubs|association|ncc|nss|rotaract|rangers|red cross|cultural|eco|sadbhavana)\b/i.test(text)) {
      return { type: 'flow', flowId: 'centres_clubs' };
    }
    if (/\b(contact|phone|email|call|number|office|help)\b/i.test(text)) {
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
          { text: "📚 Explore Programmes", action: "flow:programmes" },
          { text: "📝 Admission Procedure", action: "flow:admissions" },
          { text: "📞 Contact College Office", action: "flow:contact" }
        ]
      };
    }

    // 7. Fallback handler
    return {
      type: 'response',
      message: "I want to make sure you get the exact information! Please select an option below:",
      buttons: [
        { text: "📚 Explore Programmes", action: "flow:programmes" },
        { text: "📝 Admissions & Apply", action: "flow:admissions" },
        { text: "👨‍🏫 Faculty Directory", action: "flow:faculty" },
        { text: "💼 Placements & Packages", action: "flow:placements" },
        { text: "📄 Official Downloads", action: "flow:prospectus_downloads" },
        { text: "📍 Campus Navigation", action: "flow:campus_navigation" }
      ]
    };
  }

  function handleUserSubmit() {
    const text = chatInput.value.trim();
    if (!text || isTyping) return;

    chatInput.value = '';
    appendUserMessage(text);
    resetInactivityTimer();

    pushNavState(currentViewState);

    if (telemetry) {
      telemetry.trackEvent('user_message', { query: text });
    }

    showTyping(true);
    setTimeout(() => {
      showTyping(false);
      const resolution = resolveUserQuery(text);

      if (resolution.type === 'flow') {
        currentViewState = {
          type: 'flow',
          flowId: resolution.flowId,
          searchQuery: text,
          resolution: null,
          title: getBreadcrumbName(resolution.flowId)
        };
        navigateTo(resolution.flowId, false, false);
      } else {
        currentFlowId = null;
        currentViewState = {
          type: 'search',
          flowId: null,
          searchQuery: text,
          resolution: resolution,
          title: `Search: "${text}"`
        };
        updateBreadcrumbTitle(`Search: "${text}"`);
        updateNavUI();
        appendBotMessage(resolution.message, resolution.pageUrl);
        renderButtons(resolution.buttons || []);
        saveState();
      }
    }, 450);
  }

  function handleFaqAnswer(question) {
    const faq = SSMRV_FAQS.find(f => f.q === question);
    if (!faq) return;

    pushNavState(currentViewState);
    resetInactivityTimer();
    showTyping(true);
    setTimeout(() => {
      showTyping(false);
      const resolution = {
        type: 'response',
        message: `<b>${faq.q}</b><br><br>${faq.a}`,
        buttons: [
          { text: "📚 Explore Programmes", action: "flow:programmes" },
          { text: "📝 Admission Procedure", action: "flow:admissions" },
          { text: "📞 Contact College Office", action: "flow:contact" }
        ]
      };
      currentFlowId = null;
      currentViewState = {
        type: 'search',
        flowId: null,
        searchQuery: question,
        resolution: resolution,
        title: `FAQ: "${question}"`
      };
      updateBreadcrumbTitle(`FAQ: "${question}"`);
      updateNavUI();
      appendBotMessage(resolution.message);
      renderButtons(resolution.buttons);
      saveState();
    }, 400);
  }

  // ─── Local Storage Persistence ────────────────────────────────
  function saveState() {
    try {
      const messages = [];
      chatMessages.querySelectorAll('.ssmrv-message').forEach(el => {
        const isBot = el.classList.contains('bot');
        const bubble = el.querySelector('.ssmrv-message-bubble');
        const time = el.querySelector('.ssmrv-msg-time');
        if (bubble) {
          messages.push({
            type: isBot ? 'bot' : 'user',
            html: bubble.innerHTML,
            time: time ? time.innerText : getCurrentTime()
          });
        }
      });

      const state = {
        isOpen,
        currentFlowId,
        currentViewState,
        navHistory: navHistory.slice(-20),
        welcomePromptDismissed,
        messages: messages.slice(-30)
      };

      localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    } catch (e) {
      console.debug('Failed to save chat state', e);
    }
  }

  function loadState() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return false;

      const state = JSON.parse(raw);
      welcomePromptDismissed = state.welcomePromptDismissed || false;
      currentFlowId = state.currentFlowId || 'welcome';
      currentViewState = state.currentViewState || {
        type: 'flow',
        flowId: currentFlowId,
        searchQuery: null,
        resolution: null,
        title: getBreadcrumbName(currentFlowId)
      };
      navHistory = state.navHistory || [];

      if (state.messages && state.messages.length > 0) {
        state.messages.forEach(m => {
          if (m.type === 'bot') {
            appendBotMessage(m.html);
          } else {
            appendUserMessage(m.html);
          }
        });

        if (currentViewState.type === 'search' && currentViewState.resolution) {
          renderButtons(currentViewState.resolution.buttons || []);
          updateBreadcrumbTitle(currentViewState.title || `Search: "${currentViewState.searchQuery}"`);
        } else {
          const flow = CHAT_FLOWS[currentFlowId];
          if (flow && !flow.showForm) {
            renderButtons(flow.buttons || []);
          }
          updateBreadcrumb(currentFlowId);
        }
        updateNavUI();
        return true;
      }
    } catch (e) {
      console.debug('Failed to load chat state', e);
    }
    return false;
  }

  // ─── Utilities ────────────────────────────────────────────────
  function getCurrentTime() {
    const now = new Date();
    return now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  }

  function escapeHtml(str) {
    if (!str) return '';
    return str.replace(/&/g, '&amp;')
              .replace(/</g, '&lt;')
              .replace(/>/g, '&gt;')
              .replace(/"/g, '&quot;')
              .replace(/'/g, '&#039;');
  }

  // ─── Boot ─────────────────────────────────────────────────────
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
