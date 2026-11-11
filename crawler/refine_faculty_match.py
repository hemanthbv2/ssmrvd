with open(r"c:\Users\HP\Downloads\SSMRVD\script.js", "r", encoding="utf-8") as f:
    code = f.read()

target = """      // Check specific individual faculty name search
      let matchedFaculty = null;
      for (const fac of SSMRV_FACULTY_CATALOG) {
        const rawTokens = fac.name.replace(/^(Dr\\.|Mr\\.|Mrs\\.|Ms\\.|Sri\\.|Smt\\.)\\s*/i, '').toLowerCase().split(/\\s+/);
        const matchesToken = rawTokens.some(tok => tok.length >= 4 && text.includes(tok));
        if (matchesToken || text.includes(fac.name.toLowerCase())) {
          matchedFaculty = fac;
          break;
        }
      }"""

replacement = """      // Check specific individual faculty name search
      let matchedFaculty = null;
      const textWords = text.replace(/[^a-zA-Z0-9\\s]/g, ' ').split(/\\s+/).filter(w => w.length > 2);
      
      // 1. Exact token match (e.g., 'sumana', 'malini', 'kannan')
      for (const fac of SSMRV_FACULTY_CATALOG) {
        const cleanName = fac.name.replace(/^(Dr\\.|Mr\\.|Mrs\\.|Ms\\.|Sri\\.|Smt\\.)\\s*/i, '').toLowerCase();
        const rawTokens = cleanName.split(/\\s+/).map(t => t.replace(/[^a-zA-Z0-9]/g, '')).filter(t => t.length > 2);
        const matchesExactWord = rawTokens.some(tok => textWords.includes(tok));
        if (matchesExactWord) {
          matchedFaculty = fac;
          break;
        }
      }

      // 2. Fallback substring match
      if (!matchedFaculty) {
        for (const fac of SSMRV_FACULTY_CATALOG) {
          const cleanName = fac.name.replace(/^(Dr\\.|Mr\\.|Mrs\\.|Ms\\.|Sri\\.|Smt\\.)\\s*/i, '').toLowerCase();
          if (text.includes(cleanName) || cleanName.includes(text)) {
            matchedFaculty = fac;
            break;
          }
        }
      }"""

if target in code:
    code = code.replace(target, replacement)
    with open(r"c:\Users\HP\Downloads\SSMRVD\script.js", "w", encoding="utf-8") as f:
        f.write(code)
    print("Refined faculty matching logic successfully!")
else:
    print("Target not found for faculty matching refinement!")
