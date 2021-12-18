import { create } from "windows-shortcuts";
import { readdirSync } from "fs";

const dir = "C:/Program Files/WindowsApps";
const files = readdirSync(dir);
const wsFolder = files.find((name) => name.includes("WhatsApp"));
const wsDir = `${dir}/${wsFolder}/app/WhatsApp.exe`;

create(
  "%APPDATA%/Microsoft/Windows/Start Menu/Programs/WhatsApp/WhatsApp.lnk",
  wsDir,
  (err) => {
    if (err) {
      console.error('ERROR: Could not create shortcut!');
    } else {
      console.log('Shortcut created successfully!');
    }
  }
);
