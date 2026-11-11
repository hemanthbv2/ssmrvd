import os
import zipfile

zip_path = r"c:\Users\HP\Downloads\SSMRVD\ssmrv-chatbot.zip"
base_dir = r"c:\Users\HP\Downloads\SSMRVD"

files_to_pack = [
    ("ssmrv-chatbot.php", "ssmrv-chatbot/ssmrv-chatbot.php"),
    ("chatbot-data.js", "ssmrv-chatbot/chatbot-data.js"),
    ("script.js", "ssmrv-chatbot/script.js"),
    ("style.css", "ssmrv-chatbot/style.css"),
    ("telemetry.js", "ssmrv-chatbot/telemetry.js"),
    ("assets/logo.png", "ssmrv-chatbot/assets/logo.png"),
    ("assets/rv-logo.png", "ssmrv-chatbot/assets/rv-logo.png"),
    ("assets/campus.png", "ssmrv-chatbot/assets/campus.png")
]

with zipfile.ZipFile(zip_path, "w", zipfile.ZIP_DEFLATED) as zipf:
    for src, dst in files_to_pack:
        full_src = os.path.join(base_dir, src)
        if os.path.exists(full_src):
            zipf.write(full_src, dst)
            print(f"Added: {src} -> {dst}")
        else:
            print(f"Warning: {src} not found!")

file_size = os.path.getsize(zip_path)
print(f"\nSuccessfully generated {zip_path} ({file_size} bytes)")
