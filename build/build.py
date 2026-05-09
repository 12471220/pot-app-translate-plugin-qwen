#!/usr/bin/env python3
import json
import zipfile
import os
import glob

# 1. Read info.json to get plugin id and icon filename
with open("info.json", "r") as f:
    info = json.load(f)

plugin_id = info["id"]
icon_file = info["icon"]

# 2. Build the potext (zip) file into build/ directory
output_name = f"{plugin_id}.potext"
output_dir = "build"
os.makedirs(output_dir, exist_ok=True)
output_path = os.path.join(output_dir, output_name)

with zipfile.ZipFile(output_path, "w", zipfile.ZIP_DEFLATED) as zf:
    for name in ["main.js", "info.json", icon_file]:
        zf.write(name, arcname=name)

print(f"Built: {output_path}")

# 3. Clean up old potext files in build/ (keep only the latest)
for old in glob.glob(f"{output_dir}/*.potext"):
    if old != output_path:
        os.remove(old)
        print(f"Removed old: {old}")
