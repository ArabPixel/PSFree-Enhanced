// Template language file for PSFree Enhanced
// Copy this file, rename it (e.g., fr.js), and fill in translations
// DO NOT remove or rename keys, only replace empty strings
// (Check en.js for Examples.)
window.lang = {
    // Language display name (shows in the language selector)
    "langname": "",
    "type": "", // Specify RTL if its read from RIGHT TO LEFT or LTR if its read from LEFT TO RIGHT
    // Main UI title
    "title": "",

    // PS4 firmware compatibility messages
    "ps4FwCompatible": "",   // Message for compatible firmware, {ps4fw} is replaced dynamically
    "ps4FwIncompatible": "", // Message for incompatible firmware, {ps4fw} is replaced dynamically
    "notPs4": "",            // Message when the page is loaded on a non-PS4 device
    "clickToStart": "",      // Text for the main "Click to start" button
    "chooseHEN": "",         // Header for HEN selection section
    "exploitStatusHeader": "", // Header for the exploit console panel
    "payloadsHeader": "",    // Header for the payloads panel
    "settingsBtnTitle": "",  // Tooltip for settings button
    "aboutMenu": "",         // Text for the About button
    "payloadsToolsHeader": "", // Tab title: Tools
    "payloadsGameHeader": "",  // Tab title: Games
    "payloadsLinuxHeader": "", // Tab title: Linux

    // About popup
    "aboutPsfreeHeader": "",    // About popup header
    "aboutVersion": "",         // Version text in About popup
    "aboutDescription": "",     // Description text in About popup
    "closeButton": "",          // "Close" button text

    // Settings popup
    "settingsPsfreeHeader": "",  // Settings popup header
    "ps4FirmwareSupportedHeader": "", // "Supported PS4 firmware" text
    "languageHeader": "",        // Language section header

    // Warning messages (nested object)
    "warnings": {
        "note1": "", // "Make sure to delete cache data before running exploit..."
        "note2": "", // "Allow caching process to complete..."
        "note3": ""  // "It might take multiple tries to achieve the jailbreak"
    },

    "secondHostBtn": "", // External payload link button text
    "alert": "",         // Heading for important notice box
    "waitingUserInput": "", // Text when waiting for user input
    "cache": "",         // Cache installation progress text
    "httpsHost": "",     // Message for HTTPS fallback host scenario
    "ghVer": "",         // GoldHEN Versions header in settings
    "otherVer": "",      // Text for "Other versions" dropdown
    "latestVer": "",     // Text for "Latest" label

    // Fan section
    "fanTitle": "",       // "Fan Threshold" title
    "fanDescription": "", // Description under fan threshold
    "selectTemp": "",     // Header for temperature selection
    "default": "",        // Text label for default fan temperature

    // GoldHEN support message
    "goldhenFirmwareSemiSupported": "",

    // Southbridge & Model section
    "southbridgeHeader": "", // Header for Southbridge & Model section
    "southbridgeHelp": "",   // "Need help?" text
    "southbridgeHelp1": "",  // Instruction: How to find Southbridge on PS4
    "southbridgeHelp2": "",  // Warning about wrong selection causing kernel panic
    "selectSouthbridge": "", // Text for button: "Select your Southbridge and PS4 Model"

    // Payloads-specific messages
    "linuxOnlyWithGoldHEN": "",      // Warning that Linux payloads require GoldHEN
    "busyBinLoader": "",             // Error: BinLoader server is busy
    "binLoaderNotDetected": "",      // Error: BinLoader not running or detected
    "disabledBinloader": "",         // Message suggesting fallback if BinLoader is off
    "unsupportedFirmware": ""        // Error when firmware is unsupported
};

/*
GUIDE FOR CREATING A LANGUAGE FILE:

1. Copy this file into /includes/js/languages/
   e.g., fr.js, de.js, tr.js

2. Set "langname" to the native name of the language
   e.g., "Français", "Deutsch", "Türkçe"

3. Fill in translations for each key.
   - Do NOT remove or rename keys.
   - Leave nested objects intact (like "warnings").

4. Preserve placeholders:
   - {ps4fw}, {user}, etc., must remain exactly as-is.

5. Add the filename to the languages array in langhandler.js:
   const languageFiles = ["en", "ar", "ru", "fr"];

6. Reload the page and select the language to test.
*/
