import json
import re

with open('crawler/live_scraped_faculty_cards.json', 'r', encoding='utf-8') as f:
    cards = json.load(f)

lines = cards['All']['lines']
print(f'Total lines in "All" tab: {len(lines)}')

# Parse pairs:
# Typically Name followed by Designation
# Let's inspect the lines sequence
parsed = []
i = 1 # skip 'All'
while i < len(lines):
    line = lines[i].strip()
    if not line:
        i += 1
        continue
    
    # Check if this line looks like a name
    is_name = False
    if re.match(r'^(Dr\.|Mr\.|Mrs\.|Ms\.|Sri\.|Smt\.|Prof\.)\s+[A-Z]', line) or len(line.split()) in [2, 3, 4] and not any(kw in line.lower() for kw in ['professor', 'executive', 'director', 'coordinator', 'hod']):
        is_name = True
    
    if is_name:
        name = line
        designation = 'Assistant Professor' # default
        if i + 1 < len(lines):
            next_line = lines[i + 1].strip()
            if any(kw in next_line.lower() for kw in ['professor', 'executive', 'director', 'coordinator', 'hod', 'head', 'officer', 'in-charge']):
                designation = next_line
                i += 1
        parsed.append({'name': name, 'designation': designation})
    i += 1

print(f'Extracted {len(parsed)} faculty from the live page:')
for p in parsed:
    print(f"  {p['name']} -> {p['designation']}")

with open('crawler/parsed_live_faculty.json', 'w', encoding='utf-8') as f:
    json.dump(parsed, f, indent=2)
