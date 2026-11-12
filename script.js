/**
 * SSMRV Chatbot — Conversational Engine & State Machine
 * Features:
 * - Levenshtein Distance & Token Jaccard Fuzzy Matching Algorithm
 * - Contextual Multi-turn State Machine with Breadcrumb Trails
 * - Dynamic Contextual Form Engine (Fee Inquiry, Campus Visit, Admission Inquiry)
 * - Google Sheets Direct Integration + Dual-Write Telemetry Bridge
 * - 120s Inactivity Nudge Engine
 * - LocalStorage Session Persistence
 */

(function () {
  'use strict';

  // ─── Constants & State ───────────────────────────────────────
  const STORAGE_KEY = 'ssmrv_chatbot_session_v1';
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
    const primaryPhone = (typeof SSMRV_CONFIG !== 'undefined' && SSMRV_CONFIG.contacts) 
      ? SSMRV_CONFIG.contacts.primaryHelpline 
      : '+91 97395 88855';
    const waUrl = (typeof SSMRV_CONFIG !== 'undefined' && SSMRV_CONFIG.whatsappUrl)
      ? SSMRV_CONFIG.whatsappUrl
      : 'https://wa.me/919739588855';

    const widgetHtml = `
      <!-- Welcome Prompt Floating Card -->
      <div class="ssmrv-welcome-prompt" id="ssmrvWelcomePrompt" style="display:none;">
        <div class="ssmrv-welcome-header">
          <span class="ssmrv-welcome-title">
            <span>🎓</span> SSMRV Admissions Desk
          </span>
          <button class="ssmrv-welcome-close" id="ssmrvPromptClose" title="Dismiss">&times;</button>
        </div>
        <div class="ssmrv-welcome-body">
          Welcome to Sivananda Sarma Memorial RV Degree College. Explore admissions, courses, or ask any question!
        </div>
        <div class="ssmrv-welcome-cta">
          Chat with us <span>&rarr;</span>
        </div>
      </div>

      <!-- Floating Trigger Button -->
      <div class="ssmrv-chat-trigger" id="ssmrvTrigger" title="Open SSMRV Admissions Chat">
        <div class="ssmrv-trigger-pulse"></div>
        <div class="ssmrv-trigger-badge">1</div>
        <img src="${rvLogoSrc}" alt="RV Crest" class="ssmrv-trigger-rv-crest">
        <svg class="ssmrv-trigger-close-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" style="display:none;">
          <line x1="18" y1="6" x2="6" y2="18"></line>
          <line x1="6" y1="6" x2="18" y2="18"></line>
        </svg>
      </div>

      <!-- Main Chat Window -->
      <div class="ssmrv-chat-window" id="ssmrvChatWindow" role="dialog" aria-label="SSMRV Chatbot">
        <!-- Header -->
        <header class="ssmrv-chat-header">
          <div class="ssmrv-header-info">
            <div class="ssmrv-avatar-wrapper">
              <img src="${rvLogoSrc}" alt="RV Crest" class="ssmrv-avatar-img">
              <span class="ssmrv-status-indicator" title="Online"></span>
            </div>
            <div class="ssmrv-header-text">
              <span class="ssmrv-college-title">
                SSMRV Degree College <span class="ssmrv-verified-badge">✓</span>
              </span>
              <span class="ssmrv-college-subtitle">
                <span>●</span> Online | Jayanagar, Bengaluru
              </span>
            </div>
          </div>
          <div class="ssmrv-header-actions">
            <a href="tel:${primaryPhone.replace(/\s+/g, '')}" class="ssmrv-header-btn" title="Call Admissions Desk (${primaryPhone})">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
            </a>
            <a href="${waUrl}" target="_blank" class="ssmrv-header-btn" title="Chat on WhatsApp">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z"/></svg>
            </a>
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
            <img src="${logoSrc}" alt="SSMRV">
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
          <input type="text" class="ssmrv-chat-input" id="ssmrvInput" placeholder="Ask about B.Com, BBA, fees, BCA, placements..." autocomplete="off">
          <button type="submit" class="ssmrv-chat-send-btn" id="ssmrvSend" title="Send Message">
            <svg viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <line x1="22" y1="2" x2="11" y2="13"></line>
              <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
            </svg>
          </button>
        </form>

        <!-- Footer -->
        <div class="ssmrv-chat-footer">
          Official Admissions Portal • <a href="https://www.ssmrv.edu.in" target="_blank">ssmrv.edu.in</a>
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
          `Hello 👋<br><br>Just checking in to see if you need assistance regarding <b>SSMRV College admissions, fee structures, or placements</b>.<br><br><b>Admissions for 2026-27 are currently ongoing!</b>`
        );
        renderButtons([
          { text: "📊 B.Com Admissions", action: "flow:bcom_details" },
          { text: "📈 BBA Honours", action: "flow:bba_details" },
          { text: "💻 BCA Tech", action: "flow:bca_details" },
          { text: "💰 Request Fee Sheet", action: "flow:fee_enquiry" },
          { text: "📞 Call Helpline", url: "tel:9739588855" }
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
      bcom_details: "B.Com Details",
      bba_details: "BBA Details",
      aviation_details: "BBA Aviation",
      bca_details: "BCA Details",
      mcom_details: "M.Com Details",
      admissions: "Admissions",
      fee_enquiry: "Fee Inquiry",
      campus_visit: "Campus Visit",
      placements: "Placements (11 LPA)",
      faculty: "Faculty Directory (92)",
      faculty_bca: "BCA Faculty (11)",
      faculty_commerce: "Commerce Faculty (23)",
      faculty_bba: "BBA & Aviation (11)",
      faculty_mcom: "M.Com Faculty (3)",
      faculty_languages: "Languages Faculty (10)",
      faculty_placement: "Placement Cell (2)",
      faculty_leadership: "Leadership (8)",
      faculty_sports: "Sports Leadership (3)",
      faculty_library: "Library Hub (2)",
      faculty_admin: "Administration (19)",
      faculty_committees: "Statutory Committees",
      cancellation_refund: "Refund Policy",
      alumni: "Alumni Network",
      sitemap_links: "All College Links",
      links_programmes: "Program Links",
      links_admissions: "Admission Links",
      prospectus_downloads: "Official Downloads",
      campus_navigation: "Campus Directions",
      centres_clubs: "Centres & Clubs",
      campus: "Campus Life",
      contact: "Contact Us",
      inquiry_form: "Inquiry Form"
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
      // 🎯 RESTORE PREVIOUS WHAT HE SEARCHED
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
      // 🎯 RESTORE PREVIOUS FLOW
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
        if (flow.showForm) {
          renderInquiryForm(flow.formType || 'admission_inquiry');
        } else {
          renderButtons(flow.buttons || []);
        }
        saveState();
      }, 450);
    } else {
      appendBotMessage(flow.message, flow.pageUrl);
      if (flow.showForm) {
        renderInquiryForm(flow.formType || 'admission_inquiry');
      } else {
        renderButtons(flow.buttons || []);
      }
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

    // Auto-resolve pageUrl from active flow if not explicitly passed
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

    // Filter out redundant legacy back-to-menu chips
    const filteredButtons = rawButtons.filter(b => {
      const txt = (b.text || '').toLowerCase();
      return !txt.includes('back to main menu') && !txt.includes('return to main menu');
    });

    const finalButtons = [...filteredButtons];
    // Dynamic Back chip if history exists
    if (navHistory.length > 0) {
      finalButtons.push({ text: "⬅️ Back", action: "nav:back", isNavBack: true });
    }
    // Dynamic Main Menu chip if not currently on Main Menu
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
    const qualHtml = fac.qualifications ? `<div class="ssmrv-fac-row">🎓 <b>Qualifications:</b> ${fac.qualifications}</div>` : '';
    const expHtml = fac.experience ? `<div class="ssmrv-fac-row">⏳ <b>Experience:</b> ${fac.experience}</div>` : '';
    const specHtml = fac.specialisation ? `<div class="ssmrv-fac-row">🔬 <b>Specialisations &amp; Interests:</b> <i>${fac.specialisation}</i></div>` : '';
    const commHtml = fac.committee ? `<div class="ssmrv-fac-row">🛡️ <b>Committee / Role:</b> <span style="color:#b45309; font-weight:600;">${fac.committee}</span></div>` : '';
    const bioHtml = fac.bio ? `<div class="ssmrv-fac-row ssmrv-fac-bio">📖 <b>Profile Overview:</b> ${fac.bio}</div>` : '';
    const highHtml = fac.highlights ? `<div class="ssmrv-fac-row ssmrv-fac-high">🏆 <b>Publications &amp; Highlights:</b> ${fac.highlights}</div>` : '';
    const emailHtml = fac.email ? `✉️ <b>Email:</b> <a href="mailto:${fac.email}" style="color:var(--ssmrv-navy); font-weight:600;">${fac.email}</a>` : '';
    const phoneHtml = fac.phone ? `📞 <b>Phone:</b> <a href="tel:${fac.phone.replace(/\s+/g, '')}" style="color:var(--ssmrv-navy); font-weight:600;">${fac.phone}</a>` : '';
    const contactBar = (emailHtml || phoneHtml) ? `<div class="ssmrv-fac-contact">${emailHtml}${emailHtml && phoneHtml ? ' &nbsp;|&nbsp; ' : ''}${phoneHtml}</div>` : '';
    const visitWebsiteBtn = fac.url ? `
      <div class="ssmrv-fac-actions">
        <a href="${fac.url}" target="_blank" rel="noopener noreferrer" class="ssmrv-visit-website-btn">
          🌐 Visit Official Website Page ↗
        </a>
      </div>` : '';

    return `
      <div class="ssmrv-faculty-card">
        <div class="ssmrv-faculty-name">👤 ${fac.name}</div>
        <div class="ssmrv-faculty-badges">
          <span class="ssmrv-badge-desig">🎖️ ${fac.designation}</span>
          <span class="ssmrv-badge-dept">🏛️ ${fac.department}</span>
        </div>
        ${visitWebsiteBtn}
        <div class="ssmrv-faculty-meta">
          <div class="ssmrv-fac-row">🏛️ <b>Department:</b> ${fac.department}</div>
          <div class="ssmrv-fac-row">🎖️ <b>Designation:</b> ${fac.designation}</div>
          ${qualHtml}
          ${expHtml}
          ${specHtml}
          ${commHtml}
          ${bioHtml}
          ${highHtml}
          ${contactBar}
        </div>
      </div>`;
  }

  function buildFacultyProfileResolution(fac, extraButtons = []) {
    if (!fac) return null;
    const deptBtn = fac.deptFlow
      ? { text: `🏛️ ${fac.department} Faculty`, action: `flow:${fac.deptFlow}` }
      : { text: "👨‍🏫 All Faculty (92)", action: "flow:faculty" };
    return {
      type: 'response',
      pageUrl: fac.url,
      message: buildFacultyProfileCardHtml(fac),
      buttons: [
        { text: "🌐 Visit Official Website Page ↗", url: fac.url, isPrimary: true },
        ...extraButtons,
        deptBtn,
        { text: "👨‍🏫 All Faculty Directory (92)", action: "flow:faculty" }
      ]
    };
  }

  function showFacultyProfile(facultyId) {
    const fac = findFacultyById(facultyId);
    if (!fac || isTyping) return;

    pushNavState(currentViewState);
    resetInactivityTimer();
    appendUserMessage(`👤 ${fac.name} (${fac.designation})`);

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

  // ─── Dynamic Form Rendering ───────────────────────────────────
  function renderInquiryForm(formType = 'admission_inquiry') {
    renderButtons([]);

    let title = '📝 SSMRV Admission Callback Request';
    let extraFields = '';
    let submitText = 'Submit Inquiry & Request Callback 🚀';

    if (formType === 'fee_enquiry') {
      title = '💰 Official Fee Structure & Prospectus Request';
      submitText = 'Send Me the Complete Fee Details 📊';
      extraFields = `
        <div class="ssmrv-input-group">
          <label class="ssmrv-input-label">12th / PUC Percentage (%) *</label>
          <input type="number" class="ssmrv-form-input" id="leadMarks" placeholder="e.g. 85" min="35" max="100">
          <span class="ssmrv-error-msg" id="errLeadMarks">Please enter your percentage or expected score.</span>
        </div>
      `;
    } else if (formType === 'campus_visit') {
      title = '🏫 Schedule Guided Campus Visit';
      submitText = 'Confirm Campus Tour Booking 📍';
      extraFields = `
        <div class="ssmrv-input-group">
          <label class="ssmrv-input-label">Preferred Date of Visit *</label>
          <input type="date" class="ssmrv-form-input" id="leadDate" required>
          <span class="ssmrv-error-msg" id="errLeadDate">Please pick a preferred date (Mon-Sat).</span>
        </div>
      `;
    }

    const formEl = document.createElement('div');
    formEl.className = 'ssmrv-form-card';
    formEl.innerHTML = `
      <div class="ssmrv-form-title">${title}</div>
      <div class="ssmrv-input-group">
        <label class="ssmrv-input-label">Student Name *</label>
        <input type="text" class="ssmrv-form-input" id="leadName" placeholder="e.g. Rahul Sharma" required>
        <span class="ssmrv-error-msg" id="errLeadName">Please enter full name (at least 3 characters).</span>
      </div>
      <div class="ssmrv-input-group">
        <label class="ssmrv-input-label">Mobile Number *</label>
        <input type="tel" class="ssmrv-form-input" id="leadPhone" placeholder="10-digit mobile number" maxlength="10" required>
        <span class="ssmrv-error-msg" id="errLeadPhone">Please enter a valid 10-digit Indian mobile number.</span>
      </div>
      <div class="ssmrv-input-group">
        <label class="ssmrv-input-label">Email ID *</label>
        <input type="email" class="ssmrv-form-input" id="leadEmail" placeholder="e.g. rahul@gmail.com" required>
        <span class="ssmrv-error-msg" id="errLeadEmail">Please enter a valid email address.</span>
      </div>
      <div class="ssmrv-input-group">
        <label class="ssmrv-input-label">Programme of Interest *</label>
        <select class="ssmrv-form-select" id="leadProgram">
          <option value="B.Com">B.Com (General / Professional CA/CS/ACCA)</option>
          <option value="BBA">BBA (General Honours)</option>
          <option value="BBA Aviation">BBA – Aviation Management (BBA-AM)</option>
          <option value="BCA">BCA (Computer Applications / Emerging Tech)</option>
          <option value="M.Com">M.Com (Postgraduate)</option>
        </select>
      </div>
      ${extraFields}
      <button type="button" class="ssmrv-form-submit-btn" id="leadSubmitBtn">
        ${submitText}
      </button>
    `;

    chatMessages.appendChild(formEl);
    scrollToBottom();

    const submitBtn = formEl.querySelector('#leadSubmitBtn');
    submitBtn.addEventListener('click', () => handleLeadSubmission(formEl, formType));
  }

  function handleLeadSubmission(formEl, formType) {
    const nameInput = formEl.querySelector('#leadName');
    const phoneInput = formEl.querySelector('#leadPhone');
    const emailInput = formEl.querySelector('#leadEmail');
    const progSelect = formEl.querySelector('#leadProgram');
    const marksInput = formEl.querySelector('#leadMarks');
    const dateInput = formEl.querySelector('#leadDate');

    const errName = formEl.querySelector('#errLeadName');
    const errPhone = formEl.querySelector('#errLeadPhone');
    const errEmail = formEl.querySelector('#errLeadEmail');
    const errMarks = formEl.querySelector('#errLeadMarks');
    const errDate = formEl.querySelector('#errLeadDate');

    let isValid = true;

    // Name
    const name = nameInput.value.trim();
    if (name.length < 3) {
      nameInput.classList.add('is-invalid');
      errName.classList.add('is-visible');
      isValid = false;
    } else {
      nameInput.classList.remove('is-invalid');
      errName.classList.remove('is-visible');
    }

    // Phone (10 digits starting with 6-9)
    const phone = phoneInput.value.trim();
    const phoneRegex = /^[6-9]\d{9}$/;
    if (!phoneRegex.test(phone)) {
      phoneInput.classList.add('is-invalid');
      errPhone.classList.add('is-visible');
      isValid = false;
    } else {
      phoneInput.classList.remove('is-invalid');
      errPhone.classList.remove('is-visible');
    }

    // Email
    const email = emailInput.value.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      emailInput.classList.add('is-invalid');
      errEmail.classList.add('is-visible');
      isValid = false;
    } else {
      emailInput.classList.remove('is-invalid');
      errEmail.classList.remove('is-visible');
    }

    // Optional marks
    let marks = '';
    if (marksInput) {
      marks = marksInput.value.trim();
      if (!marks || Number(marks) < 30 || Number(marks) > 100) {
        marksInput.classList.add('is-invalid');
        if (errMarks) errMarks.classList.add('is-visible');
        isValid = false;
      } else {
        marksInput.classList.remove('is-invalid');
        if (errMarks) errMarks.classList.remove('is-visible');
      }
    }

    // Optional date
    let visitDate = '';
    if (dateInput) {
      visitDate = dateInput.value;
      if (!visitDate) {
        dateInput.classList.add('is-invalid');
        if (errDate) errDate.classList.add('is-visible');
        isValid = false;
      } else {
        dateInput.classList.remove('is-invalid');
        if (errDate) errDate.classList.remove('is-visible');
      }
    }

    if (!isValid) return;

    const submitBtn = formEl.querySelector('#leadSubmitBtn');
    submitBtn.disabled = true;
    submitBtn.innerText = 'Submitting...';

    const leadData = {
      formType,
      name,
      phone,
      email,
      program: progSelect.value,
      marks: marks || undefined,
      visitDate: visitDate || undefined,
      source: 'SSMRV Chatbot',
      timestamp: new Date().toISOString()
    };

    // 1. Dual-Write Telemetry
    if (telemetry) {
      telemetry.trackLead(leadData);
    }

    // 2. Google Sheets Webhook Dispatch (if configured)
    const sheetsUrl = (typeof GOOGLE_SHEETS_URL !== 'undefined' && GOOGLE_SHEETS_URL) ? GOOGLE_SHEETS_URL : '';
    if (sheetsUrl) {
      fetch(sheetsUrl, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(leadData)
      }).catch(err => console.debug('[SSMRV Sheets]', err));
    }

    // Confirmation message
    setTimeout(() => {
      let confirmMsg = `Your inquiry for <b>${escapeHtml(progSelect.value)}</b> has been registered. An admission counselor will contact you at <b>${escapeHtml(phone)}</b>.`;
      if (formType === 'fee_enquiry') {
        confirmMsg = `Thank you! The fee breakdown for <b>${escapeHtml(progSelect.value)}</b> has been routed. Our counseling desk will call you at <b>${escapeHtml(phone)}</b> with scholarship eligibility details.`;
      } else if (formType === 'campus_visit') {
        confirmMsg = `Your campus visit for <b>${escapeHtml(visitDate)}</b> has been requested! Our team will contact you at <b>${escapeHtml(phone)}</b> to finalize your campus tour slot.`;
      }

      formEl.innerHTML = `
        <div style="text-align:center; padding: 14px 4px;">
          <div style="font-size:32px; margin-bottom:6px;">🎉</div>
          <div style="font-weight:700; color:var(--ssmrv-navy); font-size:15px;">Thank You, ${escapeHtml(name)}!</div>
          <div style="font-size:12.5px; color:var(--text-secondary); margin-top:6px; line-height:1.5;">
            ${confirmMsg}
          </div>
        </div>
      `;
      saveState();

      renderButtons([
        { text: "📚 Explore Programmes", action: "flow:programmes" },
        { text: "💬 Chat on WhatsApp", url: "https://wa.me/919739588855?text=Hello%20SSMRV%20Admissions%20Team" },
        { text: "📞 Call Helpline", url: "tel:9739588855" },
        { text: "↩️ Main Menu", action: "flow:welcome" }
      ]);
    }, 500);
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

    // 1.b Admission Cancellation & UGC Refund Matrix Intent
    if (/\b(cancel|cancellation|refund|surrender|withdraw admission|fee return|money back)\b/i.test(text)) {
      return { type: 'flow', flowId: 'cancellation_refund' };
    }

    // 1.c Alumni Association Intent
    if (/\b(alumni|alumnus|sammilana|past students|old students)\b/i.test(text)) {
      return { type: 'flow', flowId: 'alumni' };
    }

    // 1.d All Links & Sitemap Directory Intent
    if (/\b(all links|page links|sitemap|website links|all pages|directory|all urls)\b/i.test(text)) {
      return { type: 'flow', flowId: 'sitemap_links' };
    }

    // 1.e Smart URL Matcher for "link for X" or "website for Y"
    if (/\b(link|url|website|site|webpage)\b/i.test(text) && typeof SSMRV_ALL_PAGES !== 'undefined') {
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

    // 2. Official Downloads & Prospectus
    if (/\b(prospectus|brochure|disclosure|mandatory disclosure|aicte|catalog|syllabus|calendar|handbook|pdf|download)\b/i.test(text)) {
      return { type: 'flow', flowId: 'prospectus_downloads' };
    }

    // 3. Campus Navigation & Directions
    if (/\b(map|maps|location|address|direction|directions|where is|how to reach|metro|bus|route|campus tour|landmark)\b/i.test(text)) {
      return { type: 'flow', flowId: 'campus_navigation' };
    }

    // 4. Comprehensive Faculty, Staff & Statutory Intelligence (92 Profiles)
    if (typeof SSMRV_FACULTY_CATALOG !== 'undefined' && SSMRV_FACULTY_CATALOG.length > 0) {
      
      // A. Statutory Committee & Cell Conveners
      if (/\b(nss|national service scheme)\b/i.test(text)) {
        return buildFacultyProfileResolution(findFacultyById('mr-yallappa-m'), [
          { text: "🛡️ All Statutory Committees", action: "flow:faculty_committees" }
        ]);
      }

      if (/\b(ncc|national cadet corps)\b/i.test(text)) {
        return buildFacultyProfileResolution(findFacultyById('avinash-k-v'), [
          { text: "🛡️ All Statutory Committees", action: "flow:faculty_committees" }
        ]);
      }

      if (/\b(iqac|naac coordinator|quality assurance)\b/i.test(text)) {
        return buildFacultyProfileResolution(findFacultyById('ms-r-shanthi-krishna'), [
          { text: "🛡️ All Statutory Committees", action: "flow:faculty_committees" }
        ]);
      }

      if (/\b(exam|examination|chief superintendent)\b/i.test(text) && /\b(head|convener|incharge|officer|who|committee)\b/i.test(text)) {
        return buildFacultyProfileResolution(findFacultyById('dr-mohan-rao-c-n'), [
          { text: "🛡️ All Statutory Committees", action: "flow:faculty_committees" }
        ]);
      }

      if (/\b(sports|physical education|gym|wellness|athletics)\b/i.test(text) && /\b(director|head|faculty|teacher|officer|who)\b/i.test(text)) {
        const teja = findFacultyById('mrs-teja-k-r');
        const bopanna = findFacultyById('mr-m-m-bopanna');
        const chiranjivi = findFacultyById('chiranjivi-m-s');
        return {
          type: 'response',
          pageUrl: "https://www.ssmrv.edu.in/campus_life/clubs_and_associations/sports_and_wellness_centre/",
          message: `${buildFacultyProfileCardHtml(teja)}${buildFacultyProfileCardHtml(bopanna)}`,
          buttons: [
            { text: "👤 Mrs. Teja K.R. Profile", action: "profile:mrs-teja-k-r" },
            { text: "👤 Mr. M.M. Bopanna Profile", action: "profile:mr-m-m-bopanna" },
            { text: "👤 Mr. Chiranjivi M S Profile", action: "profile:chiranjivi-m-s" },
            { text: "⚽ All Sports Leadership (3)", action: "flow:faculty_sports" }
          ]
        };
      }

      if (/\b(library|librarian|knowledge hub)\b/i.test(text) && /\b(head|incharge|officer|who|staff)\b/i.test(text)) {
        const shylaja = findFacultyById('mrs-shylaja-t-m');
        const guranna = findFacultyById('mr-guranna-sajjan');
        return {
          type: 'response',
          pageUrl: "https://www.ssmrv.edu.in/academics/non_teaching_staff/",
          message: `${buildFacultyProfileCardHtml(shylaja)}${buildFacultyProfileCardHtml(guranna)}`,
          buttons: [
            { text: "👤 Mrs. Shylaja T.M. Profile", action: "profile:mrs-shylaja-t-m" },
            { text: "👤 Mr. Guranna Sajjan Profile", action: "profile:mr-guranna-sajjan" },
            { text: "📖 Library Hub Details", action: "flow:faculty_library" }
          ]
        };
      }

      // B. Direct HOD & Principal Lookups
      if (/\b(principal)\b/i.test(text) && /\b(who|name|profile|message|college|ssmrv)\b/i.test(text)) {
        return buildFacultyProfileResolution(findFacultyById('dr-vijayashree-l'), [
          { text: "🏛️ All Leadership (8)", action: "flow:faculty_leadership" }
        ]);
      }

      if (/\b(bca|computer)\b/i.test(text) && /\b(hod|head)\b/i.test(text)) {
        return buildFacultyProfileResolution(findFacultyById('dr-r-sheela-chandrashekar'), [
          { text: "💻 BCA Course Details", action: "flow:bca_details" }
        ]);
      }

      if (/\b(commerce|b\.?com)\b/i.test(text) && /\b(hod|head)\b/i.test(text)) {
        const malini = findFacultyById('dr-malini-n');
        const samskruthi = findFacultyById('ms-samskruthi-b-l');
        return {
          type: 'response',
          pageUrl: malini ? malini.url : "https://www.ssmrv.edu.in/academics/teaching_faculty/",
          message: `${buildFacultyProfileCardHtml(malini)}${buildFacultyProfileCardHtml(samskruthi)}`,
          buttons: [
            { text: "👤 Dr. Malini N. Profile", action: "profile:dr-malini-n" },
            { text: "👤 Ms. Samskruthi B. L. Profile", action: "profile:ms-samskruthi-b-l" },
            { text: "📊 Commerce Faculty (23)", action: "flow:faculty_commerce" },
            { text: "📊 B.Com Details", action: "flow:bcom_details" }
          ]
        };
      }

      if (/\b(aviation|bba am)\b/i.test(text) && /\b(hod|head)\b/i.test(text)) {
        return buildFacultyProfileResolution(findFacultyById('mr-jagadish-a'), [
          { text: "✈️ BBA Aviation Details", action: "flow:aviation_details" }
        ]);
      }

      if (/\b(bba|business administration)\b/i.test(text) && /\b(hod|head)\b/i.test(text)) {
        const revathy = findFacultyById('dr-revathy-shivashankaran');
        const jagadish = findFacultyById('mr-jagadish-a');
        return {
          type: 'response',
          pageUrl: revathy ? revathy.url : "https://www.ssmrv.edu.in/academics/teaching_faculty/",
          message: `${buildFacultyProfileCardHtml(revathy)}${buildFacultyProfileCardHtml(jagadish)}`,
          buttons: [
            { text: "👤 Dr. Revathy Shivashankaran", action: "profile:dr-revathy-shivashankaran" },
            { text: "👤 Mr. Jagadish A. (Aviation)", action: "profile:mr-jagadish-a" },
            { text: "📈 BBA & Aviation Faculty (11)", action: "flow:faculty_bba" },
            { text: "📈 BBA Course Details", action: "flow:bba_details" }
          ]
        };
      }

      if (/\b(m\.?com|postgraduate|pg)\b/i.test(text) && /\b(hod|head)\b/i.test(text)) {
        return buildFacultyProfileResolution(findFacultyById('dr-lavanya-balaji'), [
          { text: "🎓 M.Com Course Details", action: "flow:mcom_details" }
        ]);
      }

      if (/\b(languages?|humanities|kannada|english|hindi|sanskrit)\b/i.test(text) && /\b(hod|head)\b/i.test(text)) {
        return buildFacultyProfileResolution(findFacultyById('dr-jyothi-n-hosurkar'));
      }

      if (/\b(placement|paryapti)\b/i.test(text) && /\b(officer|head|incharge|in-charge|who is)\b/i.test(text)) {
        return buildFacultyProfileResolution(findFacultyById('mrs-sumana-h-n'), [
          { text: "👤 Mr. Naresh K.N. (HR)", action: "profile:mr-naresh-k-n" },
          { text: "💼 Placements & Packages (11 LPA)", action: "flow:placements" }
        ]);
      }

      // C. Multi-Token Individual Search across ALL 92 Profiles
      const matchedList = [];
      const textWords = text.replace(/[^a-zA-Z0-9\s]/g, ' ').split(/\s+/).filter(w => w.length >= 3);
      
      // 1. Exact token search
      for (const fac of SSMRV_FACULTY_CATALOG) {
        const cleanName = fac.name.replace(/^(Dr\.|Mr\.|Mrs\.|Ms\.|Sri\.|Smt\.|Prof\.)\s*/i, '').toLowerCase();
        const rawTokens = cleanName.split(/\s+/).map(t => t.replace(/[^a-zA-Z0-9]/g, '')).filter(t => t.length >= 3);
        const matchesExactWord = rawTokens.some(tok => textWords.includes(tok));
        if (matchesExactWord) {
          matchedList.push(fac);
        }
      }

      // 2. Substring search fallback
      if (matchedList.length === 0) {
        for (const fac of SSMRV_FACULTY_CATALOG) {
          const cleanName = fac.name.replace(/^(Dr\.|Mr\.|Mrs\.|Ms\.|Sri\.|Smt\.|Prof\.)\s*/i, '').toLowerCase();
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
      if (/\b(bca|computer|software|coding)\b/i.test(text) && /\b(faculty|teacher|professor|hod|staff|who teaches)\b/i.test(text)) {
        return { type: 'flow', flowId: 'faculty_bca' };
      }
      if (/\b(commerce|b\.?com|accounting|taxation)\b/i.test(text) && /\b(faculty|teacher|professor|hod|staff|who teaches)\b/i.test(text)) {
        return { type: 'flow', flowId: 'faculty_commerce' };
      }
      if (/\b(bba|management|aviation)\b/i.test(text) && /\b(faculty|teacher|professor|hod|staff|who teaches)\b/i.test(text)) {
        return { type: 'flow', flowId: 'faculty_bba' };
      }
      if (/\b(language|languages|kannada|english|hindi|sanskrit)\b/i.test(text) && /\b(faculty|teacher|professor|hod|staff)\b/i.test(text)) {
        return { type: 'flow', flowId: 'faculty_languages' };
      }
      if (/\b(m\.?com|postgraduate|pg)\b/i.test(text) && /\b(faculty|teacher|professor|hod|staff)\b/i.test(text)) {
        return { type: 'flow', flowId: 'faculty_mcom' };
      }
      if (/\b(principal|head of college|director|leader)\b/i.test(text)) {
        return { type: 'flow', flowId: 'faculty_leadership' };
      }
      if (/\b(faculty|teacher|professor|hod|lecturer|staff)\b/i.test(text)) {
        return { type: 'flow', flowId: 'faculty' };
      }
    }

    // 5. Intent Routing for Programs & Flow Targets
    if (/\b(fee|fees|cost|tuition|price|fee structure)\b/i.test(text)) {
      return { type: 'flow', flowId: 'fee_enquiry' };
    }
    if (/\b(placement|placements|package|salary|recruitment|recruiter|paryapti)\b/i.test(text)) {
      return { type: 'flow', flowId: 'placements' };
    }
    if (/\b(visit|campus tour|come to college|see campus)\b/i.test(text)) {
      return { type: 'flow', flowId: 'campus_visit' };
    }
    if (/\b(admission|admissions|apply|application|eligibility|praveshan)\b/i.test(text)) {
      return { type: 'flow', flowId: 'admissions' };
    }
    if (/\b(b\.?com|commerce|accounting)\b/i.test(text)) {
      return { type: 'flow', flowId: 'bcom_details' };
    }
    if (/\b(aviation|airport|airline|bba am)\b/i.test(text)) {
      return { type: 'flow', flowId: 'aviation_details' };
    }
    if (/\b(bba|business administration|management)\b/i.test(text)) {
      return { type: 'flow', flowId: 'bba_details' };
    }
    if (/\b(bca|computer|software|coding|it)\b/i.test(text)) {
      return { type: 'flow', flowId: 'bca_details' };
    }
    if (/\b(m\.?com|postgraduate|pg|master of commerce)\b/i.test(text)) {
      return { type: 'flow', flowId: 'mcom_details' };
    }
    if (/\b(club|centre|centers|sustainability|rotaract|nss|heritage|excellence|raise)\b/i.test(text)) {
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

  function handleUserSubmit() {
    const text = chatInput.value.trim();
    if (!text || isTyping) return;

    chatInput.value = '';
    appendUserMessage(text);
    resetInactivityTimer();

    // Snapshot current view to nav history before performing search
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
          { text: "📋 Request a Callback", action: "flow:inquiry_form" },
          { text: "💰 Fee Structure Inquiry", action: "flow:fee_enquiry" },
          { text: "📚 Explore Programmes", action: "flow:programmes" }
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
