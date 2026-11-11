with open('script.js', 'r', encoding='utf-8') as f:
    code = f.read()

# 1. Add navHistory and currentViewState declarations
target_vars = """  let inactivityTimer = null;
  let telemetry = null;

  // DOM Elements"""

replacement_vars = """  let inactivityTimer = null;
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

  // DOM Elements"""

assert target_vars in code, "target_vars not found"
code = code.replace(target_vars, replacement_vars, 1)

# 2. Update Markup for Interactive Navigation Bar
target_markup = """        <!-- Breadcrumb Bar -->
        <div class="ssmrv-breadcrumb-bar" id="ssmrvBreadcrumb">
          <span>Navigation:</span>
          <span class="ssmrv-breadcrumb-link" id="ssmrvBreadcrumbCurrent">Home</span>
        </div>"""

replacement_markup = """        <!-- Interactive Navigation Bar with Multi-Level Backtracking -->
        <div class="ssmrv-nav-bar" id="ssmrvNavBar">
          <button class="ssmrv-nav-btn ssmrv-nav-back" id="ssmrvNavBack" type="button" title="Back to previous view" disabled>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
            <span>Back</span>
          </button>
          <div class="ssmrv-nav-breadcrumbs">
            <span class="ssmrv-crumb-trail" id="ssmrvBreadcrumbCurrent">Main Menu</span>
          </div>
          <button class="ssmrv-nav-btn ssmrv-nav-home" id="ssmrvNavHome" type="button" title="Return to Main Menu">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>
            <span>Main Menu</span>
          </button>
        </div>"""

assert target_markup in code, "target_markup not found"
code = code.replace(target_markup, replacement_markup, 1)

# 3. Update attachEvents for navBack and navHome
target_events = """    document.getElementById('ssmrvBreadcrumbCurrent').addEventListener('click', () => {
      navigateTo('welcome');
    });"""

replacement_events = """    const navBackBtn = document.getElementById('ssmrvNavBack');
    const navHomeBtn = document.getElementById('ssmrvNavHome');
    if (navBackBtn) navBackBtn.addEventListener('click', goBack);
    if (navHomeBtn) navHomeBtn.addEventListener('click', goToMainMenu);"""

assert target_events in code, "target_events not found"
code = code.replace(target_events, replacement_events, 1)

# 4. Update clearChat to clear navHistory
target_clear = """      chatMessages.innerHTML = '';
      clearInactivityTimer();
      localStorage.removeItem(STORAGE_KEY);
      navigateTo('welcome', false);"""

replacement_clear = """      chatMessages.innerHTML = '';
      navHistory = [];
      updateNavUI();
      clearInactivityTimer();
      localStorage.removeItem(STORAGE_KEY);
      goToMainMenu();"""

assert target_clear in code, "target_clear not found"
code = code.replace(target_clear, replacement_clear, 1)

# 5. Replace navigateTo and updateBreadcrumb with full history engine
target_nav = """  // ─── State Navigation ─────────────────────────────────────────
  function navigateTo(flowId, animate = true) {
    const flow = CHAT_FLOWS[flowId];
    if (!flow) return;

    currentFlowId = flowId;
    updateBreadcrumb(flowId);
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

  function updateBreadcrumb(flowId) {
    const breadcrumbEl = document.getElementById('ssmrvBreadcrumbCurrent');
    if (!breadcrumbEl) return;
    const names = {
      welcome: "Home",
      programmes: "Programmes",
      bcom_details: "B.Com Details",
      bba_details: "BBA Details",
      aviation_details: "BBA Aviation",
      bca_details: "BCA Details",
      mcom_details: "M.Com Details",
      admissions: "Admissions",
      fee_enquiry: "Fee Inquiry",
      campus_visit: "Campus Visit",
      placements: "Placements",
      faculty: "Faculty Directory",
      faculty_bca: "BCA Faculty",
      faculty_commerce: "Commerce Faculty",
      faculty_bba: "BBA Faculty",
      faculty_mcom: "M.Com Faculty",
      faculty_languages: "Languages Faculty",
      faculty_placement: "Placement Cell",
      faculty_leadership: "Leadership",
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
    breadcrumbEl.innerText = names[flowId] || flowId;
  }"""

replacement_nav = """  // ─── Multi-Level Navigation History & Backtracking Engine ─────
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
      faculty: "Faculty Directory",
      faculty_bca: "BCA Faculty",
      faculty_commerce: "Commerce Faculty",
      faculty_bba: "BBA Faculty",
      faculty_mcom: "M.Com Faculty",
      faculty_languages: "Languages Faculty",
      faculty_placement: "Placement Cell",
      faculty_leadership: "Leadership",
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
  }"""

assert target_nav in code, "target_nav not found"
code = code.replace(target_nav, replacement_nav, 1)

# 6. Update renderButtons to inject Back and Main Menu chips
target_buttons = """  function renderButtons(buttons) {
    actionsContainer.innerHTML = '';
    if (!buttons || buttons.length === 0) {
      actionsContainer.style.display = 'none';
      return;
    }

    actionsContainer.style.display = 'flex';
    buttons.forEach(btn => {
      const chip = document.createElement('button');
      chip.type = 'button';
      chip.className = 'ssmrv-action-chip';
      if (btn.action && (btn.action.includes('inquiry') || btn.action.includes('fee'))) chip.classList.add('is-primary');
      chip.innerHTML = btn.text;

      chip.addEventListener('click', () => {
        resetInactivityTimer();
        if (btn.url) {
          if (btn.url.startsWith('tel:')) {
            window.location.href = btn.url;
          } else {
            window.open(btn.url, '_blank');
          }
          if (telemetry) telemetry.trackEvent('external_link_clicked', { url: btn.url, label: btn.text });
        } else if (btn.action) {
          if (btn.action.startsWith('flow:')) {
            const targetFlow = btn.action.replace('flow:', '');
            appendUserMessage(btn.text.replace(/^[^\w\s]+/, '').trim());
            navigateTo(targetFlow);
          } else if (btn.action.startsWith('faq:')) {
            const question = btn.action.replace('faq:', '');
            appendUserMessage(question);
            handleFaqAnswer(question);
          }
        }
      });

      actionsContainer.appendChild(chip);
    });
  }"""

replacement_buttons = """  function renderButtons(rawButtons) {
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
      if (btn.action && (btn.action.includes('inquiry') || btn.action.includes('fee'))) chip.classList.add('is-primary');
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
          if (btn.action.startsWith('flow:')) {
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
  }"""

assert target_buttons in code, "target_buttons not found"
code = code.replace(target_buttons, replacement_buttons, 1)

# 7. Add Menu natural language matching in resolveUserQuery
target_query_top = """  function resolveUserQuery(rawText) {
    const text = rawText.toLowerCase().trim();

    // 1. Direct Greetings"""

replacement_query_top = """  function resolveUserQuery(rawText) {
    const text = rawText.toLowerCase().trim();

    // 0. Direct Main Menu & Home triggers
    if (/^(menu|main menu|home|start over|options|help menu|show menu)$/i.test(text)) {
      return { type: 'flow', flowId: 'welcome' };
    }

    // 1. Direct Greetings"""

assert target_query_top in code, "target_query_top not found"
code = code.replace(target_query_top, replacement_query_top, 1)

# 8. Update handleUserSubmit to push search state into navHistory
target_submit = """  function handleUserSubmit() {
    const text = chatInput.value.trim();
    if (!text || isTyping) return;

    chatInput.value = '';
    appendUserMessage(text);
    resetInactivityTimer();

    if (telemetry) {
      telemetry.trackEvent('user_message', { query: text });
    }

    showTyping(true);
    setTimeout(() => {
      showTyping(false);
      const resolution = resolveUserQuery(text);

      if (resolution.type === 'flow') {
        navigateTo(resolution.flowId);
      } else {
        appendBotMessage(resolution.message);
        renderButtons(resolution.buttons || []);
        saveState();
      }
    }, 450);
  }

  function handleFaqAnswer(question) {
    const faq = SSMRV_FAQS.find(f => f.q === question);
    if (!faq) return;

    resetInactivityTimer();
    showTyping(true);
    setTimeout(() => {
      showTyping(false);
      appendBotMessage(`<b>${faq.q}</b><br><br>${faq.a}`);
      renderButtons([
        { text: "📋 Request a Callback", action: "flow:inquiry_form" },
        { text: "💰 Fee Structure Inquiry", action: "flow:fee_enquiry" },
        { text: "📚 Explore Programmes", action: "flow:programmes" },
        { text: "↩️ Main Menu", action: "flow:welcome" }
      ]);
      saveState();
    }, 400);
  }"""

replacement_submit = """  function handleUserSubmit() {
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
  }"""

assert target_submit in code, "target_submit not found"
code = code.replace(target_submit, replacement_submit, 1)

# 9. Update saveState and loadState to persist navHistory
target_storage = """      const state = {
        isOpen,
        currentFlowId,
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

      if (state.messages && state.messages.length > 0) {
        state.messages.forEach(m => {
          if (m.type === 'bot') {
            appendBotMessage(m.html);
          } else {
            appendUserMessage(m.html);
          }
        });

        const flow = CHAT_FLOWS[currentFlowId];
        if (flow && !flow.showForm) {
          renderButtons(flow.buttons || []);
        }
        updateBreadcrumb(currentFlowId);
        return true;
      }"""

replacement_storage = """      const state = {
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
      }"""

assert target_storage in code, "target_storage not found"
code = code.replace(target_storage, replacement_storage, 1)

with open('script.js', 'w', encoding='utf-8') as f:
    f.write(code)

print("SUCCESS: script.js updated with navigation history and backtracking engine.")
