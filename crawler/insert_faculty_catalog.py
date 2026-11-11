import json

with open(r"c:\Users\HP\Downloads\SSMRVD\crawler\ssmrv_final_faculty.json", "r", encoding="utf-8") as f:
    faculty_list = json.load(f)

with open(r"c:\Users\HP\Downloads\SSMRVD\chatbot-data.js", "r", encoding="utf-8") as f:
    data_js = f.read()

target = "const SSMRV_FAQS = ["
if target not in data_js:
    print("Target const SSMRV_FAQS not found!")
    exit(1)

faculty_str = f"const SSMRV_FACULTY_CATALOG = {json.dumps(faculty_list, indent=2)};\n\n"

data_js = data_js.replace(target, faculty_str + target)

with open(r"c:\Users\HP\Downloads\SSMRVD\chatbot-data.js", "w", encoding="utf-8") as f:
    f.write(data_js)

print(f"Successfully inserted SSMRV_FACULTY_CATALOG with {len(faculty_list)} members into chatbot-data.js!")
