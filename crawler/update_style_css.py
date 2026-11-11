with open('style.css', 'r', encoding='utf-8') as f:
    css = f.read()

target = """.ssmrv-breadcrumb-bar {
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
}"""

replacement = """/* ─── Interactive Navigation Bar & History Backtracking ──────── */
.ssmrv-nav-bar {
  background: #f8fafc;
  padding: 6px var(--space-md);
  font-size: 12px;
  color: var(--text-secondary);
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  border-bottom: 1px solid #e2e8f0;
  min-height: 36px;
  box-sizing: border-box;
}

.ssmrv-nav-btn {
  display: inline-flex;
  align-items: center;
  gap: 5px;
  padding: 4px 10px;
  border-radius: var(--radius-sm);
  border: 1px solid #cbd5e1;
  background: #ffffff;
  color: var(--ssmrv-navy);
  font-size: 11px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.15s ease;
  user-select: none;
  line-height: 1;
}

.ssmrv-nav-btn svg {
  flex-shrink: 0;
}

.ssmrv-nav-btn:hover:not(:disabled) {
  background: #f1f5f9;
  border-color: #94a3b8;
  transform: translateY(-1px);
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
}

.ssmrv-nav-btn:disabled,
.ssmrv-nav-btn.is-disabled {
  opacity: 0.38;
  cursor: not-allowed;
  border-color: #e2e8f0;
  background: #f8fafc;
  color: #94a3b8;
  transform: none;
  box-shadow: none;
}

.ssmrv-nav-home {
  border-color: rgba(243, 183, 67, 0.6);
  background: #fffdf5;
  color: #92400e;
}

.ssmrv-nav-home:hover:not(:disabled) {
  background: #fffbeb;
  border-color: var(--ssmrv-gold);
  color: #78350f;
}

.ssmrv-nav-breadcrumbs {
  flex: 1;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  text-align: center;
  font-weight: 500;
  padding: 0 4px;
}

.ssmrv-crumb-trail {
  color: var(--ssmrv-navy);
  font-weight: 700;
  font-size: 11.5px;
  cursor: default;
}

/* Action Chip Navigation Accents */
.ssmrv-action-chip.is-nav-back {
  background: #f8fafc;
  border-color: #cbd5e1;
  color: var(--ssmrv-navy);
  font-weight: 600;
}

.ssmrv-action-chip.is-nav-back:hover {
  background: #e2e8f0;
  border-color: var(--ssmrv-navy);
}

.ssmrv-action-chip.is-nav-home {
  background: #fffdf5;
  border-color: rgba(243, 183, 67, 0.7);
  color: #92400e;
  font-weight: 600;
}

.ssmrv-action-chip.is-nav-home:hover {
  background: #fef3c7;
  border-color: var(--ssmrv-gold);
}"""

if target in css:
    css = css.replace(target, replacement, 1)
    with open('style.css', 'w', encoding='utf-8') as f:
        f.write(css)
    print("SUCCESS: style.css updated.")
else:
    print("Target not found in style.css.")
