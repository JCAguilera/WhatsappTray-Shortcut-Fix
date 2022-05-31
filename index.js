import { create } from "windows-shortcuts";
import { readdirSync } from "fs";

const dir = "C:/Program Files/WindowsApps";
const files = readdirSync(dir); // List all windows apps
const wsFolders = files.filter((name) => name.includes("WhatsAppDesktop")); // Look for WhatsApp Desktop

// Get files and folders count for each WhatsApp Desktop folder
const wsFolderMap = {};
for (const wsFolder of wsFolders) {
  const contents = readdirSync(`${dir}/${wsFolder}/app`);
  wsFolderMap[wsFolder] = contents.length;
}

// Get folder with most items in it
const wsFolder = Object.keys(wsFolderMap).reduce((a, b) => wsFolderMap[a] > wsFolderMap[b] ? a : b);

// Create the shortcut
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
