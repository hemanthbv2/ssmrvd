import json

with open(r'c:\Users\HP\Downloads\SSMRVD\ssmrv_all_scraped.json', 'r', encoding='utf-8') as f:
    d = json.load(f)

for k in ['placement', 'admission_procedure', 'bachelor_of_commerce', 'bachelors_of_computer_application', 'faq', 'contact_us']:
    if k in d:
        print(f"=== {k} ===")
        print(d[k]['text'][:1000])
        print("\n" + "="*40 + "\n")
