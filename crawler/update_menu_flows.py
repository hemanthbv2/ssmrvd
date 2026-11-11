import re

with open('chatbot-data.js', 'r', encoding='utf-8') as f:
    content = f.read()

target = """  welcome: {
    id: "welcome",
    message: "👋 Welcome to <b>SSMRV Degree College</b>, Jayanagar!<br><i>'360-degree Education for Wholeness'</i> (NAAC 'A' Grade | BCU Affiliated | RSST Group).<br><br>How can I assist you today?",
    buttons: [
      { text: "📚 Explore Programmes", action: "flow:programmes" },
      { text: "📝 Admissions & Apply", action: "flow:admissions" },
      { text: "💰 Fee Structure Inquiry", action: "flow:fee_enquiry" },
      { text: "💼 Placements & Packages", action: "flow:placements" },
      { text: "👨‍🏫 Faculty & Academic Roster", action: "flow:faculty" },
      { text: "📄 Official Prospectus & AICTE", action: "flow:prospectus_downloads" },
      { text: "📍 Campus Navigation / Maps", action: "flow:campus_navigation" },
      { text: "🏫 Book Campus Visit", action: "flow:campus_visit" },
      { text: "🌟 Centres of Excellence", action: "flow:centres_clubs" },
      { text: "💬 Chat on WhatsApp", url: "https://wa.me/919739588855?text=Hello%20SSMRV%20Admissions%20Team%2C%20I%20would%20like%20information%20regarding%20admissions" },
      { text: "📞 Direct Call: 97395 88855", url: "tel:9739588855" }
    ]
  },"""

replacement = """  welcome: {
    id: "welcome",
    message: "👋 Welcome to <b>SSMRV Degree College</b>, Jayanagar!<br><i>'360-degree Education for Wholeness'</i> (NAAC 'A' Grade | BCU Affiliated | RSST Group).<br><br>How can I assist you today? Select an option or type your question:",
    buttons: [
      { text: "📚 Explore Programmes", action: "flow:programmes" },
      { text: "📝 Admissions & Apply", action: "flow:admissions" },
      { text: "👨‍🏫 Faculty Directory (63)", action: "flow:faculty" },
      { text: "💼 Placements & Packages (11 LPA)", action: "flow:placements" },
      { text: "📄 Official Downloads & AICTE", action: "flow:prospectus_downloads" },
      { text: "📍 Campus Navigation / Maps", action: "flow:campus_navigation" },
      { text: "💰 Fee Structure Inquiry", action: "flow:fee_enquiry" },
      { text: "🌐 All College Links (120+)", action: "flow:sitemap_links" },
      { text: "💬 Chat on WhatsApp", url: "https://wa.me/919739588855?text=Hello%20SSMRV%20Admissions%20Team%2C%20I%20would%20like%20information%20regarding%20admissions" },
      { text: "📞 Direct Call: 97395 88855", url: "tel:9739588855" }
    ]
  },

  main_menu: {
    id: "main_menu",
    message: "🏛️ <b>SSMRV Degree College — Main Menu</b><br>Select an institutional hub below or type what you would like to know:",
    buttons: [
      { text: "📚 Explore Programmes", action: "flow:programmes" },
      { text: "📝 Admissions & Apply", action: "flow:admissions" },
      { text: "👨‍🏫 Faculty Directory (63)", action: "flow:faculty" },
      { text: "💼 Placements & Packages (11 LPA)", action: "flow:placements" },
      { text: "📄 Official Downloads & AICTE", action: "flow:prospectus_downloads" },
      { text: "📍 Campus Navigation / Maps", action: "flow:campus_navigation" },
      { text: "💰 Fee Structure Inquiry", action: "flow:fee_enquiry" },
      { text: "🌐 All College Links (120+)", action: "flow:sitemap_links" },
      { text: "💬 Chat on WhatsApp", url: "https://wa.me/919739588855?text=Hello%20SSMRV%20Admissions%20Team%2C%20I%20would%20like%20information%20regarding%20admissions" },
      { text: "📞 Direct Call: 97395 88855", url: "tel:9739588855" }
    ]
  },"""

if target in content:
    content = content.replace(target, replacement, 1)
    with open('chatbot-data.js', 'w', encoding='utf-8') as f:
        f.write(content)
    print("SUCCESS: welcome and main_menu updated.")
else:
    print("Target not found.")
