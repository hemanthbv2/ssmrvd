import json
import re

# Read compiled faculty
with open(r"c:\Users\HP\Downloads\SSMRVD\crawler\ssmrv_final_faculty.json", "r", encoding="utf-8") as fp:
    faculty_catalog = json.load(fp)

# Read current chatbot-data.js
with open(r"c:\Users\HP\Downloads\SSMRVD\chatbot-data.js", "r", encoding="utf-8") as fp:
    content = fp.read()

# 1. Add downloads & navigation into SSMRV_CONFIG
downloads_snippet = """  downloads: {
    mandatoryDisclosurePdf: "https://www.ssmrv.edu.in/wp-content/uploads/2026/04/MDC2025-26.pdf",
    aicteApprovalPdf: "https://www.ssmrv.edu.in/wp-content/uploads/2026/01/AICTE-approval-copy.pdf",
    academicCalendarPdf: "https://www.ssmrv.edu.in/wp-content/uploads/2026/07/ACOE-26-27-Odd-Sem.pdf",
    prospectusPdf: "https://www.ssmrv.edu.in/wp-content/uploads/2026/04/MDC2025-26.pdf"
  },
  navigation: {
    address: "#17, 36th Cross Road, 26th Main, 4th 'T' Block East, Jayanagar, Bengaluru - 560041",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=SSMRV+College+Jayanagar+Bengaluru",
    nearestMetro: "Jayanagar / Rashtriya Vidyalaya Road Station (Green Line) - 1.2 km",
    busStop: "Jayanagar 4th T Block / RV Teachers College Bus Stop (BMTC Routes 18, 25, 215, 365)"
  },
"""

if "downloads:" not in content:
    content = content.replace('  contacts: {', downloads_snippet + '  contacts: {')

# 2. Add SSMRV_FACULTY_CATALOG
faculty_js = f"\nconst SSMRV_FACULTY_CATALOG = {json.dumps(faculty_catalog, indent=2)};\n"

# Replace existing or insert before SSMRV_KNOWLEDGE_BASE
if "const SSMRV_FACULTY_CATALOG" in content:
    content = re.sub(r'const SSMRV_FACULTY_CATALOG = \[.*?\];', faculty_js.strip(), content, flags=re.DOTALL)
else:
    content = content.replace("const SSMRV_KNOWLEDGE_BASE = [", faculty_js + "\nconst SSMRV_KNOWLEDGE_BASE = [")

# Write out updated chatbot-data.js
with open(r"c:\Users\HP\Downloads\SSMRVD\chatbot-data.js", "w", encoding="utf-8") as fp:
    fp.write(content)

print("chatbot-data.js updated with SSMRV_FACULTY_CATALOG and downloads!")
