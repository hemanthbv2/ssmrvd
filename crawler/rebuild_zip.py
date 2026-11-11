import zipfile
import os

files_to_zip = [
    ('ssmrv-chatbot.php', 'ssmrv-chatbot/ssmrv-chatbot.php'),
    ('chatbot-data.js', 'ssmrv-chatbot/chatbot-data.js'),
    ('script.js', 'ssmrv-chatbot/script.js'),
    ('style.css', 'ssmrv-chatbot/style.css'),
    ('telemetry.js', 'ssmrv-chatbot/telemetry.js'),
    ('assets/logo.png', 'ssmrv-chatbot/assets/logo.png'),
    ('assets/rv-logo.png', 'ssmrv-chatbot/assets/rv-logo.png')
]

zip_path = 'ssmrv-chatbot.zip'
if os.path.exists(zip_path):
    os.remove(zip_path)

with zipfile.ZipFile(zip_path, 'w', zipfile.ZIP_DEFLATED) as z:
    for src, arcname in files_to_zip:
        z.write(src, arcname)

print("SUCCESS: Rebuilt ssmrv-chatbot.zip, size:", os.path.getsize(zip_path))
