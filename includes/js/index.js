// @ts-nocheck
let currentLanguage = localStorage.getItem('language') || 'en';
let currentJbFlavor = localStorage.getItem('jailbreakFlavor') || 'GoldHEN';
let isAutoJailbreakEnabled = localStorage.getItem('autoJailbreak');
let selectedSecondaryPayload;
let ps4fw = null;
let platform = "Unknown";
let lastScrollY = 0;
let lastSection = localStorage.getItem('lastSection') || "initial";
const ui = {
  mainContainer: document.querySelector('.mainContainer'),

  // Sections
  initialScreen: document.getElementById('initial-screen'),
  exploitScreen: document.getElementById('exploit-main-screen'),

  // Initial screen elements
  settingsBtn: document.getElementById("settings-btn"),
  aboutBtn: document.getElementById("about-btn"),
  psLogoContainer: document.getElementById('ps-logo-container'),
  clickToStartText: document.getElementById('click-to-start-text'),
  ps4FwStatus: document.getElementById('PS4FW'),

  // Exploit screen elements
  statusMessage: document.getElementById('statusMessage'),
  consoleElement: document.getElementById('console'),
  toolsSection: document.getElementById('tools'),
  toolsTab: document.getElementById('tools-tab'),
  gamesSection: document.getElementById('games'),
  gamesTab: document.getElementById('games-tab'),
  linuxSection: document.getElementById('linux'),
  linuxTab: document.getElementById('linux-tab'),
  payloadsSectionTitle: document.getElementById('payloads-section-title'),
  exploitRunBtn: document.getElementById('exploitRun'),
  backToInitialBtn: document.getElementById('backToInitialBtn'),
  // Popups
  aboutPopupOverlay: document.getElementById('about-popup-overlay'),
  aboutPopup: document.getElementById('about-popup'),
  settingsPopupOverlay: document.getElementById('settings-popup-overlay'),
  settingsPopup: document.getElementById('settings-popup'),

  // Settings elements
  autoJbCheckbox: document.getElementById('autoJbBox'),
  langRadios: document.querySelectorAll('#chooselang input[name="language"]'),
};
const languages = {
  "en": {
    "title": "PSFree Enhanced",
    "ps4FwCompatible": `PS4 FW: {ps4fw} | Compatible`,
    "ps4FwIncompatible": `PS4 FW: {ps4fw} | Incompatible`,
    "notPs4": "You are not on a PS4, platform: ",
    "clickToStart": "Click to start",
    "chooseHEN": "Choose your HEN flavor",
    "exploitStatusHeader": "Exploit status",
    "payloadsHeader": "Payloads",
    "settingsBtnTitle": "Settings",
    "aboutMenu": "About",
    "payloadsToolsHeader": "Tools",
    "payloadsGameHeader": "Game",
    "payloadsLinuxHeader": "Linux",
    "aboutPsfreeHeader": "About PSFree Enhanced",
    "aboutVersion": "Version: 1.5.1.3",
    "aboutDescription": "A web interface to jailbreak your PS4 using PSFree chained with Lapse kernel exploit.",
    "closeButton": "Close",
    "settingsPsfreeHeader": "Settings",
    "ps4FirmwareSupportedHeader": "Supported PS4 firmware",
    "autoJailbreakText": "Jailbreak automatically",
    "languageHeader": "Language",
    "englishOption": "English",
    "arabicOption": "Arabic",
    "warnings": {
      "note1": "Make sure to close all apps before running the exploit",
      "note2": "Make sure to delete cache data before running the exploit for the first time",
      "note3": "It might take you more than one time",
    },
    "backToInitialBtn": "Back",
    "alert": "Important notice",
    "waitingUserInput": "Waiting for user action",
    "jailbreakNow": "Jailbreak process will start with ",
    "cache": "Installing Cache: ",
  },
  "ar": {
    "title": "PSFree محسن",
    "ps4FwCompatible": `بلايستايشن 4 إصدار {ps4fw} | مدعوم`,
    "ps4FwIncompatible": `بلايستايشن 4 إصدار {ps4fw} | غير مدعوم`,
    "notPs4": "انت لست على جهاز بلايستايشن 4, المنصة: ",
    "clickToStart": "انقر للبدء",
    "chooseHEN": "اختر نكهتك",
    "exploitStatusHeader": "حالة الثغرة",
    "payloadsHeader": "الإضافات",
    "settingsBtnTitle": "الإعدادات",
    "aboutMenu": "حول",
    "payloadsToolsHeader": "الأدوات",
    "payloadsGameHeader": "الألعاب",
    "payloadsLinuxHeader": "لينكس",
    "aboutPsfreeHeader": "حول PSFree المحسن",
    "aboutVersion": "الإصدار: 1.5.1.3",
    "aboutDescription": "واجهة ويب لتهكير البلايستايشن 4 بإستخدام ثغرة PSFree المربوطة مع ثغرة النواة Lapse",
    "closeButton": "إغلاق",
    "settingsPsfreeHeader": "الإعدادات",
    "ps4FirmwareSupportedHeader": "إصدارات PS4 المدعومة",
    "autoJailbreakText": "تهكير تلقائي",
    "languageHeader": "اللغة",
    "arabicOption": "العربية",
    "englishOption": "الإنجليزية",
    "warnings": {
      "note1": "تأكد من إغلاق كل التطبيقات قبل تنفيذ الثغرة",
      "note2": "تأكد من ان تقوم بمسح الملفات المؤقته قبل تنفيذ الثغرة لأول مرة",
      "note3": "قم يتطلب الأمر المحاولة اكثر من مرة",
    },
    "backToInitialBtn": "الرجوع",
    "alert": "ملاحظات هامة",
    "waitingUserInput": "في انتظار التنفيذ من المستخدم",
    "jailbreakNow": "عملية تحميل الثغرة ستبدأ بإستحدام ",
    "cache": "جاري تحميل الموقع في الذاكرة المحلية:  "
  }
}
const payloads = [
  {
    id: "App2USB",
    name: "App2USB",
    version: "1.0",
    description: "Unofficially Moves installed applications to an external USB drive.",
    author: "Stooged",
    category: "tools",
    funcName: "load_App2USB"
  },
  {
    id: "FTP",
    name: "FTP",
    version: "1.0",
    description: "Enables FTP server access for file transfers.",
    author: "xvortex",
    category: "tools",
    funcName: "load_FTP"
  },
  {
    id: "DisableUpdates",
    name: "Disable-Updates",
    version: "1.0",
    description: "Disables automatic system software updates.",
    author: "Scene",
    category: "tools",
    funcName: "load_DisableUpdates"
  },
  {
    id: "PS4Debug",
    name: "PS4-Debug",
    version: "v1.1.19",
    description: "Debugging tools for PS4.",
    author: "SiSTRo & Ctn",
    category: "tools",
    funcName: "load_PS4Debug"
  },
  {
    id: "KernelDumper",
    name: "Kernel-Dumper",
    version: "1.0",
    description: "Dumps the PS4 kernel.",
    author: "Eversion",
    category: "tools",
    funcName: "load_KernelDumper"
  },
  {
    id: "PS4DumperVTX",
    name: "PS4-Dumper-VTX",
    version: "1.0",
    description: "All-in-one game dumper for PS4.",
    author: "xvortex",
    category: "tools",
    funcName: "load_VTXDumper"
  },
  {
    id: "HistoryBlocker",
    name: "History-Blocker",
    version: "1.0",
    description: "Blocks the browser from remembering and returning to the last opened page on start. Run again to enable/disable.",
    author: "Stooged",
    category: "tools",
    funcName: "load_HistoryBlocker"
  },
  {
    id: "OrbisToolbox",
    name: "Orbis-Toolbox",
    version: "1.0",
    description: "A modification of the playstation UI to help with launching and developing homebrew..",
    author: "OSM-Made",
    category: "tools",
    funcName: "load_Orbis"
  },
  {
    id: "ToDex",
    name: "ToDex",
    version: "1.0",
    description: "Spoofs the target ID to match that of a test-kit, enables some extra options, etc.",
    author: "zecoxao",
    category: "tools",
    funcName: "load_ToDex"
  },
  {
    id: "ToDev",
    name: "ToDev",
    version: "1.0",
    description: "unlocks some PS4 Debug / TestKit Features.",
    author: "SonysNightmare",
    category: "tools",
    funcName: "load_ToDev"
  },
  {
    id: "ToKratos",
    name: "ToKratos",
    version: "1.0",
    description: "Custom firmware conversion tool.",
    author: "Various",
    category: "tools",
    funcName: "load_ToKratos"
  },
  {
    id: "ToCex",
    name: "ToCex",
    version: "1.0",
    description: "Converts console to CEX mode.",
    author: "Various",
    category: "tools",
    funcName: "load_ToCex"
  },
  {
    id: "BackupDB",
    name: "Backup-DB",
    version: "1.0",
    description: "Backs up your PS4's databases, licenses, and user data. Note this may not be useful if you have to reinitalize as your keys may change.",
    author: "Stooged",
    category: "tools",
    funcName: "load_BackupDB"
  },
  {
    id: "RestoreDB",
    name: "Restore-DB",
    version: "1.0",
    description: "Restores the data saved in the 'Backup' payload.",
    author: "Stooged",
    category: "tools",
    funcName: "load_RestoreDB"
  },
  {
    id: "RIFRenamer",
    name: "RIF-Renamer",
    version: "1.0",
    description: "Renames 'fake' RIFs to 'free' RIFs for better HEN compatibility. Use this if your PKGs only work with Mira+HEN.",
    author: "Al Azif",
    category: "tools",
    funcName: "load_RIFRenamer"
  },
  {
    id: "ExitIDU",
    name: "ExitIDU",
    version: "1.0",
    description: "Exits IDU mode and restarts the console.",
    author: "Scene Collective",
    category: "tools",
    funcName: "load_ExitIDU"
  },
  {
    id: "DisableASLR",
    name: "Disable-ASLR",
    version: "1.0",
    description: "Disables the ASLR (Address space layout randomization) to make working with memory easier/repeatable.",
    author: "Scene Collective",
    category: "tools",
    funcName: "load_DisableASLR"
  },
  {
    id: "ModuleDumper",
    name: "Module-Dumper",
    version: "1.0",
    description: "Dumps the decrypted modules from /system, /system_ex, /update and the root of the filesystem to a USB device.",
    author: "SocraticBliss",
    category: "tools",
    funcName: "load_ModuleDumper"
  },
  {
    id: "WebRTE",
    name: "WebRTE",
    version: "1.0",
    description: "Web Realtime Trainer Engine",
    author: "golden",
    category: "tools",
    funcName: "load_WebrRTE"
  },
  {
    id: "PermanentUART",
    name: "Permanent-UART",
    version: "1.0",
    description: "Enabled hardware based UART without a kernel patch, persists though updates.",
    author: "JTAG7371",
    category: "tools",
    funcName: "load_PermanentUART"
  },
  {
    id: "PUPDecrypt",
    name: "PUP-Decrypt",
    version: "1.0",
    description: "Payload to decrypt the contents of a firmware update file (PUP) on the PS4",
    author: "andy-man",
    category: "tools",
    funcName: "load_PUPDecrypt"
  },
  {
    id: "GTAVArabicGuy127",
    name: "GTAV-ArabicGuy-1.27",
    version: "1.27",
    description: "GTA V mod menu by ArabicGuy.",
    author: "ArabicGuy",
    category: "games",
    funcName: "load_GTAArbic"
  },
  {
    id: "GTAVArabicGuy132",
    name: "GTAV-ArabicGuy-1.32",
    version: "1.32",
    description: "GTA V mod menu by ArabicGuy.",
    author: "ArabicGuy",
    category: "games",
    funcName: "load_GTAArbic3"
  },
  {
    id: "GTAVArabicGuy133",
    name: "GTAV-ArabicGuy-1.33",
    version: "1.33",
    description: "GTA V mod menu by ArabicGuy.",
    author: "ArabicGuy",
    category: "games",
    funcName: "load_GTAArbic33"
  },
  {
    id: "GTAVBeefQueefMod133",
    name: "GTAV-BeefQueefMod-1.33",
    version: "1.33",
    description: "GTA V mod menu by BeefQueef.",
    author: "BeefQueef",
    category: "games",
    funcName: "load_GTABQ133"
  },
  {
    id: "GTAVBeefQueefMod134",
    name: "GTAV-BeefQueefMod-1.34",
    version: "1.34",
    description: "GTA V mod menu by BeefQueef.",
    author: "BeefQueef",
    category: "games",
    funcName: "load_GTABQ134"
  },
  {
    id: "GTAVBeefQueefMod138",
    name: "GTAV-BeefQueefMod-1.38",
    version: "1.38",
    description: "GTA V mod menu by BeefQueef.",
    author: "BeefQueef",
    category: "games",
    funcName: "load_GTABQ138"
  },
  {
    id: "GTAVWildeModz132",
    name: "GTAV-WildeModz-1.32",
    version: "1.32",
    description: "GTA V mod menu by WildeModz.",
    author: "WildeModz",
    category: "games",
    funcName: "load_GTAWM132"
  },
  {
    id: "GTAVWildeModz133",
    name: "GTAV-WildeModz-1.33",
    version: "1.33",
    description: "GTA V mod menu by WildeModz.",
    author: "WildeModz",
    category: "games",
    funcName: "load_GTAWM133"
  },
  {
    id: "GTAVWildeModz138",
    name: "GTAV-WildeModz-1.38",
    version: "1.38",
    description: "GTA V mod menu by WildeModz.",
    author: "WildeModz",
    category: "games",
    funcName: "load_GTAWM138"
  },
  {
    id: "RDR2OystersMenu100",
    name: "RDR2-OystersMenu-1.00",
    version: "1.00",
    description: "RDR2 mod menu by Oysters.",
    author: "Oysters",
    category: "games",
    funcName: "load_Oysters100"
  },
  {
    id: "RDR2OystersMenu113",
    name: "RDR2-OystersMenu-1.13",
    version: "1.13",
    description: "RDR2 mod menu by Oysters.",
    author: "Oysters",
    category: "games",
    funcName: "load_Oysters113"
  },
  {
    id: "RDR2OystersMenu119",
    name: "RDR2-OystersMenu-1.19",
    version: "1.19",
    description: "RDR2 mod menu by Oysters.",
    author: "Oysters",
    category: "games",
    funcName: "load_Oysters119"
  },
  {
    id: "RDR2OystersMenu124",
    name: "RDR2-OystersMenu-1.24",
    version: "1.24",
    description: "RDR2 mod menu by Oysters.",
    author: "Oysters",
    category: "games",
    funcName: "load_Oysters124"
  },
  {
    id: "RDR2OystersMenu129",
    name: "RDR2-OystersMenu-1.29",
    version: "1.29",
    description: "RDR2 mod menu by Oysters.",
    author: "Oysters",
    category: "games",
    funcName: "load_Oysters129"
  },
  {
    id: "Linux1GB",
    name: "Linux-1GB",
    version: "1.0",
    description: "Linux payload for PS4",
    author: "Nazky",
    category: "linux",
    funcName: "load_Linux"
  },
  {
    id: "Linux2GB",
    name: "Linux-2GB",
    version: "1.0",
    description: "Linux payload for PS4",
    author: "Nazky",
    category: "linux",
    funcName: "load_Linux2gb"
  },
  {
    id: "Linux3GB",
    name: "Linux-3GB",
    version: "1.0",
    description: "Loads a 3GB Linux payload for dual-booting.",
    author: "Nazky",
    category: "linux",
    funcName: "load_Linux3gb"
  },
  {
    id: "Linux4GB",
    name: "Linux-4GB",
    version: "1.0",
    description: "Loads a 4GB Linux payload for dual-booting.",
    author: "Nazky",
    category: "linux",
    funcName: "load_Linux4gb"
  },
  {
    id: "Linux5GB",
    name: "Linux-5GB",
    version: "1.0",
    description: "Loads a 5GB Linux payload for dual-booting.",
    author: "Nazky",
    category: "linux",
    funcName: "load_Linux5gb"
  },
];

// Events
// Scroll snap for the PS4
ui.mainContainer.addEventListener('scroll', () => {
  if (ui.mainContainer.scrollTop > lastScrollY) {
    // scrolling down
    if (lastSection !== "exploit") {
      ui.exploitScreen.scrollIntoView({ block: "end" });
      lastSection = "exploit";
    }
  } else if (ui.mainContainer.scrollTop < lastScrollY) {
    // scrolling up
    if (lastSection !== "initial") {
      ui.initialScreen.scrollIntoView({ block: "end" });
      lastSection = "initial";
    }
  }
  lastScrollY = ui.mainContainer.scrollTop;
});

// Launch jailbreak
ui.exploitRunBtn.addEventListener('click', () => {
  jailbreak();
});

ui.psLogoContainer.addEventListener('click', () => {
  jailbreak()
  ui.exploitScreen.scrollIntoView({ block: "end" })
});

// Auto jailbreak
ui.autoJbCheckbox.addEventListener('change', (e) => {
  isAutoJailbreakEnabled = e.target.checked;
  localStorage.setItem('autoJailbreak', e.target.checked);
  if (e.target.checked) {
    if (confirm(languages[currentLanguage].jailbreakNow + currentJbFlavor)) {
      settingsPopup()
      ui.exploitScreen.scrollIntoView({ block: "end" })
      jailbreak();
    }
  }
});
// tabs switching
ui.toolsTab.addEventListener('click', () =>{
  if (ui.toolsSection.classList.contains('hidden')){
    ui.toolsSection.classList.remove('hidden');
    ui.linuxSection.classList.add('hidden');
    ui.gamesSection.classList.add('hidden');
  }
})

ui.linuxTab.addEventListener('click', () =>{
  if (ui.linuxSection.classList.contains('hidden')){
    ui.toolsSection.classList.add('hidden');
    ui.linuxSection.classList.remove('hidden');
    ui.gamesSection.classList.add('hidden');
  }
})

ui.gamesTab.addEventListener('click', () =>{
  if (ui.gamesSection.classList.contains('hidden')){
    ui.toolsSection.classList.add('hidden');
    ui.linuxSection.classList.add('hidden');
    ui.gamesSection.classList.remove('hidden');
  }
})

// popups
function aboutPopup() {
  ui.aboutPopupOverlay.classList.toggle('hidden');
}

function settingsPopup() {
  ui.settingsPopupOverlay.classList.toggle('hidden');
}


// Jailbreak-related functions
async function jailbreak() {
  try {
    const modules = await loadMultipleModules([
      '../payloads/Jailbreak.js',
      '../../src/alert.mjs'
    ]);
    const JailbreakModule = modules[0];

    if (currentJbFlavor == 'GoldHEN') {
      if (JailbreakModule && typeof JailbreakModule.GoldHEN === 'function') {
        JailbreakModule.GoldHEN();
      } else {
        alert("GoldHEN function not found in Jailbreak.js module");
      }
    } else {
      if (JailbreakModule && typeof JailbreakModule.HEN === 'function') {
        JailbreakModule.HEN();
      }
    }
  } catch (e) {
    console.error("Failed to jailbreak:", e);
  }
}

async function loadMultipleModules(files) {
  try {
    // Dynamically import all modules
    const modules = await Promise.all(files.map(file => import(file)));
    return modules; // array of imported modules
  } catch (error) {
    console.error("Error loading modules:", error);
    throw error;
  }
}

async function binloader() {
  try {
    sessionStorage.setItem('binloader', 1);
    const modules = await loadMultipleModules([
      '../../src/alert.mjs'
    ]);
    console.log("All modules are loaded!");

    const goldhenModule = modules[0];
    if (goldhenModule && typeof goldhenModule.runBinLoader === 'function') {
      goldhenModule.runBinLoader();
    } else {
      console.error("GoldHEN function not found in GoldHEN.js module");
    }
  } catch (e) {
    console.error("Failed to jailbreak:", e);
  }
}
function isHttps() {
  return window.location.protocol === 'https:';
}

async function Loadpayloads(payload) {
  try {
    let modules;
    sessionStorage.removeItem('binloader');
    if (isHttps()) {
      modules = await loadMultipleModules([
        '../payloads/payloads.js',
        '../../src/alert.mjs'
      ]);
    } else {
      modules = await loadMultipleModules([
        '../payloads/payloads.js'
      ]);
    }
    console.log("All modules are loaded!");

    const payloadModule = modules[0];
    if (payloadModule && typeof payloadModule[payload] === 'function') {
      payloadModule[payload]();
    } else {
      alert(`${payload} function not found in payloads.js module`);
    }
  } catch (e) {
    alert(`Failed to load ${payload}:`, e);
  }
}

function loadAutoJb() {
  ui.autoJbCheckbox.checked = isAutoJailbreakEnabled == 'true' ? true : false;
  if (isAutoJailbreakEnabled == 'true') {
    if (confirm(languages[currentLanguage].jailbreakNow + currentJbFlavor)) {
      ui.exploitScreen.scrollIntoView({ block: "end" })
      jailbreak();
    }
  }
}

function setGoldHENVer(value){
  localStorage.setItem('GHVer', value);
}

function loadGoldHENVer(){
  const goldHenVer = localStorage.getItem("GHVer") || "GHv2.4b18.5";
  document.querySelector(`input[name="goldhen"][value="${goldHenVer}"]`).checked = true;
}


function loadLanguage() {
  var language = localStorage.getItem("language");
  if (language == null) {
    document.querySelector('input[name=language][value="en"]').checked = true;
  } else document.querySelector(`input[name="language"][value="${language}`).checked = true;
}

// Update UI langauge
function applyLanguage(lang) {
  currentLanguage = lang;
  const strings = languages[currentLanguage];

  if (!strings) {
    console.error(`Language list ${lang} is not available`);
    return;
  }

  document.title = strings.title || "PSFree Enhanced";
  document.dir = (currentLanguage === 'ar') ? 'rtl' : 'ltr';
  document.lang = currentLanguage;


  // Check if ps4 is supported
  if (ps4fw === null) {
    ui.ps4FwStatus.textContent = strings.notPs4 + platform;
    ui.ps4FwStatus.style.color = 'red';
  } else if (ps4fw <= 9.60) {
    ui.ps4FwStatus.textContent = strings.ps4FwCompatible.replace('{ps4fw}', ps4fw);
    ui.ps4FwStatus.style.color = 'green';
  } else {
    ui.ps4FwStatus.textContent = strings.ps4FwIncompatible.replace('{ps4fw}', ps4fw);
    ui.ps4FwStatus.style.color = 'red';
  }
  // Main screen elements
  ui.settingsBtn.title = strings.settingsBtnTitle;
  ui.clickToStartText.textContent = strings.clickToStart;
  document.querySelector('#choosejb-initial h3').textContent = strings.chooseHEN;

  // About us popup
  ui.aboutPopup.querySelector('h2').textContent = strings.aboutPsfreeHeader;
  ui.aboutPopup.querySelectorAll('p')[0].textContent = strings.aboutVersion;
  ui.aboutPopup.querySelectorAll('p')[1].textContent = strings.aboutDescription;
  ui.aboutPopup.querySelector('#PS4FWOK h3').textContent = strings.ps4FirmwareSupportedHeader;
  ui.aboutPopup.querySelector('#close-about').textContent = strings.closeButton;

  // Settings popup
  ui.settingsPopup.querySelector('h2').textContent = strings.settingsPsfreeHeader;
  ui.settingsPopup.querySelector('#autojbchkb p').textContent = strings.autoJailbreakText;
  ui.settingsPopup.querySelector('#chooselang h3').textContent = strings.languageHeader;
  ui.settingsPopup.querySelector('#enLang').textContent = strings.englishOption;
  ui.settingsPopup.querySelector('#arLang').textContent = strings.arabicOption;
  ui.settingsPopup.querySelector('#close-settings').textContent = strings.closeButton;

  // Warning element (Exploit section)
  const warningHeader = document.querySelector('#warningBox p');
  const warningNotes = document.querySelector('#warningBox ul');
  if (warningNotes) {
    const items = warningNotes.querySelectorAll('li');
    if (items[0]) items[0].textContent = strings.warnings.note1;
    if (items[1]) items[1].textContent = strings.warnings.note2;
    if (items[2]) items[2].textContent = strings.warnings.note3;
  }
  warningHeader.textContent = strings.alert;

  // Buttons
  ui.backToInitialBtn.textContent = strings.backToInitialBtn;
  ui.exploitRunBtn.title = strings.clickToStart;
  ui.aboutBtn.title = strings.aboutMenu;

  document.querySelector('#exploit-status-panel h2').textContent = strings.exploitStatusHeader;
  ui.payloadsSectionTitle.textContent = strings.payloadsHeader;
  ui.toolsTab.textContent = strings.payloadsToolsHeader;
  ui.linuxTab.textContent = strings.payloadsLinuxHeader;
  ui.gamesTab.textContent = strings.payloadsGameHeader;
  ui.consoleElement.querySelector('center').textContent = strings.waitingUserInput;
}


function saveJbFlavor(name, value) {
  localStorage.setItem("jailbreakFlavor", value);
  // Apply hen selector to both inputs
  document.querySelector(`input[name="${name == "hen" ? "hen2" : "hen"}"][value="${value}"]`).checked = true;
  currentJbFlavor = value;
};

function loadJbFlavor() {
  const flavor = currentJbFlavor || 'GoldHEN';
  const henRadio = document.querySelector(`input[name="hen"][value="${flavor}"]`);
  const hen2Radio = document.querySelector(`input[name="hen2"][value="${flavor}"]`);

  if (henRadio && hen2Radio) {
    henRadio.checked = true;
    hen2Radio.checked = true;
  }
}

function saveLanguage() {
  const language = document.querySelector('input[name="language"]:checked').value;
  localStorage.setItem('language', language);
  currentLanguage = language;
  applyLanguage(language);
};

function CheckFW() {
  const userAgent = navigator.userAgent;
  const ps4Regex = /PlayStation 4/;
  let fwVersion = navigator.userAgent.substring(navigator.userAgent.indexOf('5.0 (') + 19, navigator.userAgent.indexOf(') Apple')).replace("layStation 4/","");
  const elementsToHide = [
    'ps-logo-container', 'choosejb-initial', 'exploit-main-screen', 'scrollDown',
    'payloadsbtn', 'autojbchkb', 'click-to-start-text', 'chooseGoldHEN'
  ];

  if (ps4Regex.test(userAgent)) {
    if (fwVersion >= 7.00 && fwVersion <= 9.60) {
      document.getElementById('PS4FW').style.color = 'green';
    } else {
      document.getElementById('PS4FW').style.color = 'red';

      elementsToHide.forEach(id => {
        const el = document.getElementById(id);
        if (el) el.style.display = 'none';
      });
    }
    ps4fw = fwVersion;
    let fwElement = "fw"+fwVersion.replace('.','');
    document.getElementById(fwElement).classList.add('fwSelected');
    // Display only Compatible GoldHENs
    const GoldHENsOption = {
      "9.60": ["GHv2.3Fw755", "GHv2.3Fw702"],
      "9.00": ["GHv2.3Fw755", "GHv2.3Fw702"],
      "9.03": ["GHv2.3Fw755", "GHv2.3Fw702", "GHv2.4b18", "GHv2.4b18.2"],
      "7.55": ["GHv2.4b18.4", "GHv2.4b18.2", "GHv2.4b18"],
      "7.02": ["GHv2.4b18.4", "GHv2.4b18.2", "GHv2.4b18"]
    };
    // To remove all of them with one line in case the firmware is not listed
    const allElements = [
      "GHv2.3Fw755",
      "GHv2.3Fw702",
      "GHv2.4b18",
      "GHv2.4b18.4",
      "GHv2.4b18.2"
    ];
    const idsToRemove = GoldHENsOption[ps4fw] || allElements;

    idsToRemove.forEach(id => {
      const el = document.getElementById(id);
      if (el) el.remove();
    });

  } else {
    platform = 'Unknown platform';

    if (/Android/.test(userAgent)) platform = 'Android';
    else if (/iPhone|iPad|iPod/.test(userAgent)) platform = 'iOS';
    else if (/Macintosh/.test(userAgent)) platform = 'MacOS';
    else if (/Windows/.test(userAgent)) platform = 'Windows';
    else if (/Linux/.test(userAgent)) platform = 'Linux';

    document.getElementById('PS4FW').style.color = 'red';
    elementsToHide.forEach(id => {
      const el = document.getElementById(id);
      if (el) el.style.display = 'none';
    });
  }
}

// Load settings
function loadSettings() {
  try {
    CheckFW();
    loadJbFlavor();
    loadLanguage();
    applyLanguage(currentLanguage);
    renderPayloads();
    loadAutoJb();
    loadGoldHENVer();
  } catch (e) {
    alert("Error in loadSettings: " + e.message);
  }
}

function getPayloadCategoryClass(category) {
  switch (category) {
    case 'tools': return 'category-tools';
    case 'games': return 'category-games';
    case 'linux': return 'category-linux';
    default: return '';
  }
}

function renderPayloads() {
  const payloadsToRender = payloads;

  payloadsToRender.forEach(payload => {
    const payloadCard = document.createElement('div');
    payloadCard.id = payload.id;
    payloadCard.onclick = () => Loadpayloads(payload.funcName);
    payloadCard.className = `payload payload-card relative group cursor-pointer transition-all duration-300 hover:scale-105`;
    payloadCard.dataset.payloadId = payload.id;

    payloadCard.innerHTML = `
    <button style="width: 100%;">
      <div class="bg-gray-800 border border-white/20 rounded-xl p-6 h-full">
          <div class="flex items-start justify-between mb-4">
              <div class="flex items-center space-x-3">
                  <div class="text-2xl"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-gear" viewBox="0 0 16 16"> <path d="M8 4.754a3.246 3.246 0 1 0 0 6.492 3.246 3.246 0 0 0 0-6.492zM5.754 8a2.246 2.246 0 1 1 4.492 0 2.246 2.246 0 0 1-4.492 0z"/> <path d="M9.796 1.343c-.527-1.79-3.065-1.79-3.592 0l-.094.319a.873.873 0 0 1-1.255.52l-.292-.16c-1.64-.892-3.433.902-2.54 2.541l.159.292a.873.873 0 0 1-.52 1.255l-.319.094c-1.79.527-1.79 3.065 0 3.592l.319.094a.873.873 0 0 1 .52 1.255l-.16.292c-.892 1.64.901 3.434 2.541 2.54l.292-.159a.873.873 0 0 1 1.255.52l.094.319c.527 1.79 3.065 1.79 3.592 0l.094-.319a.873.873 0 0 1 1.255-.52l.292.16c1.64.893 3.434-.902 2.54-2.541l-.159-.292a.873.873 0 0 1 .52-1.255l.319-.094c1.79-.527 1.79-3.065 0-3.592l-.319-.094a.873.873 0 0 1-.52-1.255l.16-.292c.893-1.64-.902-3.433-2.541-2.54l-.292.159a.873.873 0 0 1-1.255-.52l-.094-.319zm-2.633.283c.246-.835 1.428-.835 1.674 0l.094.319a1.873 1.873 0 0 0 2.693 1.115l.291-.16c.764-.415 1.6.42 1.184 1.185l-.159.292a1.873 1.873 0 0 0 1.116 2.692l.318.094c.835.246.835 1.428 0 1.674l-.319.094a1.873 1.873 0 0 0-1.115 2.693l.16.291c.415.764-.42 1.6-1.185 1.184l-.291-.159a1.873 1.873 0 0 0-2.693 1.116l-.094.318c-.246.835-1.428.835-1.674 0l-.094-.319a1.873 1.873 0 0 0-2.692-1.115l-.292.16c-.764.415-1.6-.42-1.184-1.185l.159-.291A1.873 1.873 0 0 0 1.945 8.93l-.319-.094c-.835-.246-.835-1.428 0-1.674l.319-.094A1.873 1.873 0 0 0 3.06 4.377l-.16-.292c-.415-.764.42-1.6 1.185-1.184l.292.159a1.873 1.873 0 0 0 2.692-1.115l.094-.319z"/> </svg></div>
                  <div>
                      <h3 class="text-start font-semibold text-white text-lg">${payload.name}</h3>
                      <p class="text-start text-cyan-300 text-sm">${payload.version}</p>
                  </div>
              </div>
              ${payload.isRecommended ? `<span class="px-2 py-1 rounded-full text-xs border">${languages[currentLanguage] ? languages[currentLanguage].recommendedLabel : 'Recommended'}</span>` : ''}
              <span class="px-2 py-1 rounded-full text-xs border ${getPayloadCategoryClass(payload.category)}">
                  ${payload.category}
              </span>
          </div>
          <p class="text-start text-white/70 text-sm leading-relaxed">${payload.description}</p>
          <div class="flex items-center justify-between text-xs text-white/60">
          </div>
      </div>
      </button>
      `;
    switch (payload.category) {
      case "tools":
        ui.toolsSection.appendChild(payloadCard);
        break;
      case "games":
        ui.gamesSection.appendChild(payloadCard);
        break;
      case "linux":
        ui.linuxSection.appendChild(payloadCard);
        break;
      default:
        ui.toolsSection.appendChild(payloadCard);
        break;
    }
  });

}

// Handling cache
function DLProgress(e) { 
  Percent = (Math.round(e.loaded / e.total * 100)); 
  document.title = languages[currentLanguage].title + " " + Percent + "%"; 
}
function DisplayCacheProgress() { 
  setTimeout(function () {
    document.title = "\u2713"; 
  }, 1000);
    setTimeout(function () { 
      window.location.href = 
      document.referrer; 
    }, 3000); 
  }
