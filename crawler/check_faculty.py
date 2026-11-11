import json

with open("crawler/compiled_faculty_directory.json", "r", encoding="utf-8") as f:
    data = json.load(f)

for item in data:
    if any(k in item["name"].lower() for k in ["malini", "kannan", "vijayashree", "gokul", "shivakumara", "sumana", "shylaja", "vani"]):
        print(item["name"], "-->", item["designation"], "|", item["department"], "|", item["qualifications"])
