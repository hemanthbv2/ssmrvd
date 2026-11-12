# 1. Update script.js to remove top Back / Main Menu buttons and keep them in bottom chips only
with open('script.js', 'r', encoding='utf-8') as f:
    code = f.read()

target_markup = """        <!-- Interactive Navigation Bar with Multi-Level Backtracking -->
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

replacement_markup = """        <!-- Breadcrumb Bar -->
        <div class="ssmrv-breadcrumb-bar" id="ssmrvBreadcrumb">
          <span>Navigation:</span>
          <span class="ssmrv-breadcrumb-link" id="ssmrvBreadcrumbCurrent">Main Menu</span>
        </div>"""

assert target_markup in code, "target_markup not found in script.js"
code = code.replace(target_markup, replacement_markup, 1)

# Update attachEvents
target_events = """    const navBackBtn = document.getElementById('ssmrvNavBack');
    const navHomeBtn = document.getElementById('ssmrvNavHome');
    if (navBackBtn) navBackBtn.addEventListener('click', goBack);
    if (navHomeBtn) navHomeBtn.addEventListener('click', goToMainMenu);"""

replacement_events = """    const breadcrumbLink = document.getElementById('ssmrvBreadcrumbCurrent');
    if (breadcrumbLink) breadcrumbLink.addEventListener('click', goToMainMenu);"""

assert target_events in code, "target_events not found in script.js"
code = code.replace(target_events, replacement_events, 1)

# Update renderInquiryForm so bottom Back and Main Menu chips remain visible even when a form is open
target_form = """  function renderInquiryForm(formType = 'admission_inquiry') {
    actionsContainer.innerHTML = '';
    actionsContainer.style.display = 'none';"""

replacement_form = """  function renderInquiryForm(formType = 'admission_inquiry') {
    renderButtons([]);"""

assert target_form in code, "target_form not found in script.js"
code = code.replace(target_form, replacement_form, 1)

with open('script.js', 'w', encoding='utf-8') as f:
    f.write(code)
print("SUCCESS: Updated script.js (removed top buttons, kept bottom chips only).")

# 2. Update style.css to restore clean .ssmrv-breadcrumb-bar and keep bottom chip styles
with open('style.css', 'r', encoding='utf-8') as f:
    css = f.read()

target_css_start = "/* ─── Interactive Navigation Bar & History Backtracking ──────── */"
target_css_end = "/* Action Chip Navigation Accents */"

idx1 = css.find(target_css_start)
idx2 = css.find(target_css_end)

if idx1 != -1 and idx2 != -1:
    clean_breadcrumb_css = """.ssmrv-breadcrumb-bar {
  background: #f1f5f9;
  padding: 6px var(--space-lg);
  font-size: 11.5px;
  color: var(--text-secondary);
  display: flex;
  align-items: center;
  gap: 6px;
  border-bottom: 1px solid #e2e8f0;
}

.ssmrv-breadcrumb-link {
  color: var(--ssmrv-navy);
  font-weight: 600;
  cursor: pointer;
}

.ssmrv-breadcrumb-link:hover {
  color: var(--ssmrv-coral);
  text-decoration: underline;
}

"""
    css = css[:idx1] + clean_breadcrumb_css + css[idx2:]
    with open('style.css', 'w', encoding='utf-8') as f:
        f.write(css)
    print("SUCCESS: Updated style.css (restored clean breadcrumb bar, kept bottom chip styles).")
else:
    print("CSS boundaries not found.")
