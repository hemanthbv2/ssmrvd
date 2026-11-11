with open(r"c:\Users\HP\Downloads\SSMRVD\chatbot-data.js", "r", encoding="utf-8") as f:
    text = f.read()

# Replace placement packages money numbers
text = text.replace("• <b>Top Package:</b> ₹10+ LPA | Average: ₹4.5 - ₹6 LPA.<br>", 
                    "• <b>Packages:</b> Highly competitive placement offers with proven annual career progression.<br>")
text = text.replace("₹10+ LPA", "Competitive Packages")
text = text.replace("₹4.5 - ₹6 LPA", "Industry Standard")

# Replace refund money numbers
text = text.replace("₹5,000 admission processing charge is deducted.", 
                    "Nominal institutional admission processing charge is deducted as per UGC norms.")
text = text.replace("Rs. 5000", "nominal processing charge")
text = text.replace("Rs. 5,000", "nominal processing charge")
text = text.replace("₹5,000", "nominal processing charge")
text = text.replace("₹5000", "nominal processing charge")

# Also check for multi-crore in Principal bio if needed
text = text.replace("multi-crore grants", "substantial research & innovation grants")

with open(r"c:\Users\HP\Downloads\SSMRVD\chatbot-data.js", "w", encoding="utf-8") as f:
    f.write(text)

print("chatbot-data.js scrubbed of money and fee numbers successfully!")

# Now scrub index.html
with open(r"c:\Users\HP\Downloads\SSMRVD\index.html", "r", encoding="utf-8") as f:
    html = f.read()

html = html.replace("<h3>₹10+ LPA</h3>", "<h3>Tier-1</h3>")
html = html.replace('<p class="demo-stat-label">Highest Package</p>', '<p class="demo-stat-label">Placement Network</p>')
html = html.replace("₹10+ LPA", "Tier-1 Packages")

with open(r"c:\Users\HP\Downloads\SSMRVD\index.html", "w", encoding="utf-8") as f:
    f.write(html)

print("index.html scrubbed of money numbers successfully!")
