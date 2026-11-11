import json, sys
sys.stdout.reconfigure(encoding='utf-8')

with open(r'c:\Users\HP\Downloads\SSMRVD\ssmrv_all_scraped.json', 'r', encoding='utf-8') as f:
    d = json.load(f)

for prog in ['bachelor_of_commerce', 'bachelors_of_business_administration', 'bachelors_of_computer_application', 'bba-_aviation_management', 'master_of_commerce']:
    if prog in d:
        print(f"*** {prog} ***")
        txt = d[prog]['text']
        # print first 1500 chars
        print(txt[txt.find("About the Programme"):txt.find("About the Programme") + 1500] if "About the Programme" in txt else txt[:1500])
        print("\n" + "-"*50 + "\n")
