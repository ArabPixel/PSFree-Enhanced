// @ts-nocheck
let currentLanguage = localStorage.getItem('language') || 'en';
let currentJbFlavor = localStorage.getItem('jailbreakFlavor') || 'GoldHEN';
let platform = "Unknown";
let lastScrollY = 0;
let lastSection = "initial";
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
  payloadsSection: document.getElementById('payloadsSection'),
  payloadsList: document.getElementById("payloadsGrid"),
  payloadsSectionTitle: document.getElementById('payloads-section-title'),
  exploitRunBtn: document.getElementById('exploitRun'),
  secondHostBtn: document.querySelectorAll('.secondHostBtn'),
  // Popups
  aboutPopupOverlay: document.getElementById('about-popup-overlay'),
  aboutPopup: document.getElementById('about-popup'),
  settingsPopupOverlay: document.getElementById('settings-popup-overlay'),
  settingsPopup: document.getElementById('settings-popup'),
  chooseFanThresholdOverlay: document.getElementById('choose-fanThreshold-overlay'),
  chooseFanThreshold: document.getElementById('choose-fanThreshold'),

  // Settings elements
  langRadios: document.querySelectorAll('#chooselang input[name="language"]'),
};
const payloads = [
  {
    id: "App2USB",
    name: "App2USB",
    author: "Stooged",
    description: "Unofficially Moves installed applications to an external USB drive.",
    specificFW: "",
    category: "tools",
    funcName: "load_App2USB"
  },
    {
    id: "BinLoader",
    name: "BinLoader",
    author: "PSFree Exploit",
    description: "Launches BinLoader server on port 9020 to send payloads.",
    specificFW: "7.00 - 9.60",
    category: "tools",
    funcName: "load_BinLoader"
  },
  {
    id: "FTP",
    name: "FTP",
    author: "xvortex",
    description: "Enables FTP server access for file transfers.",
    specificFW: "",
    category: "tools",
    funcName: "load_FTP"
  },
  {
    id: "DisableUpdates",
    name: "Disable-Updates",
    author: "Scene Collective",
    description: "Disables automatic system software updates.",
    specificFW: "",
    category: "tools",
    funcName: "load_DisableUpdates"
  },
  {
    id: "PS4Debug",
    name: "PS4-Debug",
    author: "CTN & SiSTR0",
    description: "Debugging tools for PS4.",
    specificFW: "",
    category: "tools",
    funcName: "load_PS4Debug"
  },
  {
    id: "KernelDumper",
    name: "Kernel-Dumper",
    author: "Eversion",
    description: "Dumps the PS4 kernel.",
    specificFW: "",
    category: "tools",
    funcName: "load_KernelDumper"
  },
  {
    id: "PS4DumperVTX",
    name: "PS4-Dumper-VTX",
    author: "xvortex",
    description: "All-in-one game dumper for PS4.",
    specificFW: "9.00",
    category: "tools",
    funcName: "load_VTXDumper"
  },
  {
    id: "FanThreshold",
    name: "Fan-Threshold",
    author: "Scene Collective",
    description: "Sets the cooling fan's profile on the PlayStation 4",
    specificFW: "",
    category: "tools",
    funcName: "chooseFanThreshold"
  },
  {
    id: "HistoryBlocker",
    name: "History-Blocker",
    author: "Stooged",
    description: "Blocks the browser from remembering and returning to the last opened page on start. Run again to enable/disable.",
    specificFW: "",
    category: "tools",
    funcName: "load_HistoryBlocker"
  },
  {
    id: "EnableBrowser",
    name: "Enable-Browser",
    author: "Scene Collective",
    description: "Permanently activates the browser without needing to sign into PSN.",
    specificFW: "",
    category: "tools",
    funcName: "load_EnableBrowser"
  },
  {
    id: "OrbisToolbox",
    name: "Orbis-Toolbox",
    author: "OSM-Made",
    description: "A modification of the playstation UI to help with launching and developing homebrew..",
    specificFW: "5.05, 6.72, 7.02, 7.55, 9.00",
    category: "tools",
    funcName: "load_Orbis"
  },
  {
    id: "ToDex",
    name: "ToDex",
    author: "zecoxao",
    description: "Spoofs the target ID to match that of a test-kit, enables some extra options, etc.",
    specificFW: "",
    category: "tools",
    funcName: "load_ToDex"
  },
  {
    id: "ToDev",
    name: "ToDev",
    author: "SonysNightmare",
    description: "unlocks some PS4 Debug / TestKit Features.",
    specificFW: "",
    category: "tools",
    funcName: "load_ToDev"
  },
  {
    id: "ToKratos",
    name: "ToKratos",
    author: "Various",
    description: "Custom firmware conversion tool.",
    specificFW: "",
    category: "tools",
    funcName: "load_ToKratos"
  },
  {
    id: "ToCex",
    name: "ToCex",
    author: "Various",
    description: "Converts console to CEX mode.",
    specificFW: "",
    category: "tools",
    funcName: "load_ToCex"
  },
  {
    id: "BackupDB",
    name: "Backup-DB",
    author: "Stooged",
    description: "Backs up your PS4's databases, licenses, and user data. Note this may not be useful if you have to reinitalize as your keys may change.",
    specificFW: "",
    category: "tools",
    funcName: "load_BackupDB"
  },
  {
    id: "RestoreDB",
    name: "Restore-DB",
    author: "Stooged",
    description: "Restores the data saved in the 'Backup' payload.",
    specificFW: "",
    category: "tools",
    funcName: "load_RestoreDB"
  },
  {
    id: "RIFRenamer",
    name: "RIF-Renamer",
    author: "Al Azif",
    description: "Renames 'fake' RIFs to 'free' RIFs for better HEN compatibility. Use this if your PKGs only work with Mira+HEN.",
    specificFW: "",
    category: "tools",
    funcName: "load_RIFRenamer"
  },
  {
    id: "ExitIDU",
    name: "ExitIDU",
    author: "Scene Collective",
    description: "Exits IDU mode and restarts the console.",
    specificFW: "",
    category: "tools",
    funcName: "load_ExitIDU"
  },
  {
    id: "DisableASLR", 
    name: "Disable-ASLR",
    author: "Scene Collective",
    description: "Disables the ASLR (Address space layout randomization) to make working with memory easier/repeatable.",
    specificFW: "",
    category: "tools",
    funcName: "load_DisableASLR"
  },
  {
    id: "ModuleDumper",
    name: "Module-Dumper",
    author: "SocraticBliss",
    description: "Dumps the decrypted modules from /system, /system_ex, /update and the root of the filesystem to a USB device.",
    specificFW: "",
    category: "tools",
    funcName: "load_ModuleDumper"
  },
  {
    id: "WebRTE",
    name: "WebRTE",
    author: "Made by golden<br>updated by EchoStretch",
    description: "Web Realtime Trainer Engine",
    specificFW: "5.05, 6.72, 7.00-11.00",
    category: "tools",
    funcName: "load_WebRTE"
  },
  {
    id: "PermanentUART",
    name: "Permanent-UART",
    author: "JTAG7371",
    description: "Enabled hardware based UART without a kernel patch, persists though updates.",
    specificFW: "",
    category: "tools",
    funcName: "load_PermanentUART"
  },
  {
    id: "PUPDecrypt",
    name: "PUP-Decrypt",
    author: "andy-man",
    description: "Payload to decrypt the contents of a firmware update file (PUP) on the PS4",
    specificFW: "",
    category: "tools",
    funcName: "load_PUPDecrypt"
  },
  {
    id: "GTAVArabicGuy127",
    name: "GTAV-ArabicGuy-1.27",
    author: "ArabicGuy",
    description: "GTA V mod menu by ArabicGuy.",
    specificFW: "",
    category: "games",
    funcName: "load_GTAArbic"
  },
  {
    id: "GTAVArabicGuy132",
    name: "GTAV-ArabicGuy-1.32",
    author: "ArabicGuy",
    description: "GTA V mod menu by ArabicGuy.",
    specificFW: "",
    category: "games",
    funcName: "load_GTAArbic3"
  },
  {
    id: "GTAVArabicGuy133",
    name: "GTAV-ArabicGuy-1.33",
    author: "ArabicGuy",
    description: "GTA V mod menu by ArabicGuy.",
    specificFW: "",
    category: "games",
    funcName: "load_GTAArbic33"
  },
  {
    id: "GTAVBeefQueefMod133",
    name: "GTAV-BeefQueefMod-1.33",
    author: "BeefQueef",
    description: "GTA V mod menu by BeefQueef.",
    specificFW: "",
    category: "games",
    funcName: "load_GTABQ133"
  },
  {
    id: "GTAVBeefQueefMod134",
    name: "GTAV-BeefQueefMod-1.34",
    author: "BeefQueef",
    description: "GTA V mod menu by BeefQueef.",
    specificFW: "",
    category: "games",
    funcName: "load_GTABQ134"
  },
  {
    id: "GTAVBeefQueefMod138",
    name: "GTAV-BeefQueefMod-1.38",
    author: "BeefQueef",
    description: "GTA V mod menu by BeefQueef.",
    specificFW: "",
    category: "games",
    funcName: "load_GTABQ138"
  },
  {
    id: "GTAVWildeModz132",
    name: "GTAV-WildeModz-1.32",
    author: "WildeModz",
    description: "GTA V mod menu by WildeModz.",
    specificFW: "",
    category: "games",
    funcName: "load_GTAWM132"
  },
  {
    id: "GTAVWildeModz133",
    name: "GTAV-WildeModz-1.33",
    author: "WildeModz",
    description: "GTA V mod menu by WildeModz.",
    specificFW: "",
    category: "games",
    funcName: "load_GTAWM133"
  },
  {
    id: "GTAVWildeModz138",
    name: "GTAV-WildeModz-1.38",
    author: "WildeModz",
    description: "GTA V mod menu by WildeModz.",
    specificFW: "",
    category: "games",
    funcName: "load_GTAWM138"
  },
  {
    id: "RDR2OystersMenu100",
    name: "RDR2-OystersMenu-0",
    author: "Oysters",
    description: "RDR2 mod menu by Oysters.",
    specificFW: "",
    category: "games",
    funcName: "load_Oysters100"
  },
  {
    id: "RDR2OystersMenu113",
    name: "RDR2-OystersMenu-1.13",
    author: "Oysters",
    description: "RDR2 mod menu by Oysters.",
    specificFW: "",
    category: "games",
    funcName: "load_Oysters113"
  },
  {
    id: "RDR2OystersMenu119",
    name: "RDR2-OystersMenu-1.19",
    author: "Oysters",
    description: "RDR2 mod menu by Oysters.",
    specificFW: "",
    category: "games",
    funcName: "load_Oysters119"
  },
  {
    id: "RDR2OystersMenu124",
    name: "RDR2-OystersMenu-1.24",
    author: "Oysters",
    description: "RDR2 mod menu by Oysters.",
    specificFW: "",
    category: "games",
    funcName: "load_Oysters124"
  },
  {
    id: "RDR2OystersMenu129",
    name: "RDR2-OystersMenu-1.29",
    author: "Oysters",
    description: "RDR2 mod menu by Oysters.",
    specificFW: "",
    category: "games",
    funcName: "load_Oysters129"
  },
  {
    id: "Linux1GB",
    name: "Linux-1GB",
    author: "Nazky",
    description: "Linux payload for PS4",
    specificFW: "9.00",
    category: "linux",
    funcName: "load_Linux"
  },
  {
    id: "Linux2GB",
    name: "Linux-2GB",
    author: "Nazky",
    description: "Linux payload for PS4",
    specificFW: "9.00",
    category: "linux",
    funcName: "load_Linux2gb"
  },
  {
    id: "Linux3GB",
    name: "Linux-3GB",
    author: "Nazky",
    description: "Loads a 3GB Linux payload for dual-booting.",
    specificFW: "9.00",
    category: "linux",
    funcName: "load_Linux3gb"
  },
  {
    id: "Linux4GB",
    name: "Linux-4GB",
    author: "Nazky",
    description: "Loads a 4GB Linux payload for dual-booting.",
    specificFW: "9.00",
    category: "linux",
    funcName: "load_Linux4gb"
  },
  {
    id: "Linux5GB",
    name: "Linux-5GB",
    author: "Nazky",
    description: "Loads a 5GB Linux payload for dual-booting.",
    specificFW: "9.00",
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

// tabs switching
ui.toolsTab.addEventListener('click', () =>{
  if (ui.toolsSection.classList.contains('hidden')){
    ui.toolsSection.classList.remove('hidden');
    ui.linuxSection.classList.add('hidden');
    ui.gamesSection.classList.add('hidden');
  }
  ui.payloadsList.scrollTop = 0;
})

ui.linuxTab.addEventListener('click', () =>{
  if (ui.linuxSection.classList.contains('hidden')){
    ui.toolsSection.classList.add('hidden');
    ui.linuxSection.classList.remove('hidden');
    ui.gamesSection.classList.add('hidden');
  }
  ui.payloadsList.scrollTop = 0;
})

ui.gamesTab.addEventListener('click', () =>{
  if (ui.gamesSection.classList.contains('hidden')){
    ui.toolsSection.classList.add('hidden');
    ui.linuxSection.classList.add('hidden');
    ui.gamesSection.classList.remove('hidden');
  }
  ui.payloadsList.scrollTop = 0;
})

// popups
function aboutPopup() {
  ui.aboutPopupOverlay.classList.toggle('hidden');
}

function settingsPopup() {
  ui.settingsPopupOverlay.classList.toggle('hidden');
}

function chooseFanThreshold(){
  ui.chooseFanThresholdOverlay.classList.toggle('hidden');
}


// Jailbreak-related functions
async function jailbreak() {
  sessionStorage.removeItem('binloader');
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
    alert("Failed to jailbreak: " + e);
  }
}

async function loadMultipleModules(files) {
  try {
    // Dynamically import all modules
    const modules = await Promise.all(files.map(file => import(file)));
    return modules; // array of imported modules
  } catch (error) {
    alert("Error loading modules: " + error);
    throw error;
  }
}

function isHttps() {
  return window.location.protocol === 'https:';
}

async function Loadpayloads(payload) {
  try {
    let modules;
    sessionStorage.removeItem('binloader');
    if (payload == "chooseFanThreshold"){
      chooseFanThreshold();
      return;
    }
      modules = await loadMultipleModules([
        '../payloads/payloads.js'
      ]);
    console.log("All modules are loaded!");

    const payloadModule = modules[0];
    if (payloadModule && typeof payloadModule[payload] === 'function') {
      payloadModule[payload]();
    } else {
      alert(`${payload} function not found in payloads.js module`);
    }
  } catch (e) {
    alert(`Failed to load ${payload}: ${e}`);
  }
}

function setGoldHENVer(value){
  localStorage.setItem('GHVer', value);
}

function loadGoldHENVer(){
  const goldHenVer = localStorage.getItem("GHVer") || "GHv2.4b18.6";
  document.querySelector(`input[name="goldhen"][value="${goldHenVer}"]`).checked = true;
}


function loadLanguage() {
  document.querySelector(`input[name="language"][value="${currentLanguage}"]`).checked = true;
  const langScript = document.getElementById("langScript");
  if(langScript) langScript.remove();
  // load language file
  return new Promise((resolve, reject) => {
    const script = document.createElement('script');
    script.src = `./includes/js/languages/${currentLanguage}.js`;
    script.onload = () => resolve(window.lang);
    script.id = "langScript";
    script.onerror = () => reject(new Error(`Failed to load ${currentLanguage}`));
    document.head.appendChild(script);
  });
}
// Apply lanuage after loading the language file
async function initLanguage() {
  try {
      await loadLanguage(currentLanguage);
      applyLanguage(currentLanguage);
  } catch (e) {
      console.error(e);
  }
}

// Update UI langauge
function applyLanguage(lang) {
  currentLanguage = lang;
  const strings = window.lang

  if (!strings) {
    console.error(`Language list ${lang} is not available`);
    return;
  }
  /**
   * Safely updates element's textContent only if translation exists and is not empty.
   * @param {HTMLElement} element - The DOM element to update.
   * @param {string} key - The key in the 'strings' object.
   */
  const updateText = (element, key) => {
    const translation = strings[key];
    // Check if element exists, and translation is a non-empty string.
    if (element && translation && typeof translation === 'string' && translation.length > 0) { 
      element.textContent = translation;
    }
  };

  /**
   * Safely updates element's title attribute only if translation exists and is not empty.
   * @param {HTMLElement} element - The DOM element to update.
   * @param {string} key - The key in the 'strings' object.
   */
  const updateTitle = (element, key) => {
    const translation = strings[key];
    // Check if element exists, and translation is a non-empty string.
    if (element && translation && typeof translation === 'string' && translation.length > 0) { 
      element.title = translation;
    }
  };

  // Document Properties
  document.title = strings.title || "PSFree Enhanced";
  document.dir = (currentLanguage === 'ar') ? 'rtl' : 'ltr';
  document.lang = currentLanguage;


  // PS4 Firmware Status Check
  const ps4Fw = window.ps4Fw;
  const ps4StatusElement = ui.ps4FwStatus;

  if (ps4Fw === undefined) {
    if (strings.notPs4 && strings.notPs4.length > 0) {
      ps4StatusElement.textContent = strings.notPs4 + platform;
    }
    ps4StatusElement.style.color = 'red';
  } else if (ps4Fw <= 9.60) {
    if (strings.ps4FwCompatible && strings.ps4FwCompatible.length > 0) {
      ps4StatusElement.textContent = strings.ps4FwCompatible.replace('{ps4fw}', ps4Fw);
    }
    ps4StatusElement.style.color = 'green';
  } else {
    if (strings.ps4FwIncompatible && strings.ps4FwIncompatible.length > 0) {
      ps4StatusElement.textContent = strings.ps4FwIncompatible.replace('{ps4fw}', ps4Fw);
    }
    ps4StatusElement.style.color = 'orange';
  }

  // Main Screen Elements
  updateTitle(ui.settingsBtn, 'settingsBtnTitle');
  updateText(ui.clickToStartText, 'clickToStart');
  updateText(document.querySelector('#choosejb-initial h3'), 'chooseHEN');

  // About Us Popup
  updateText(ui.aboutPopup.querySelector('h2'), 'aboutPsfreeHeader');
  
  const aboutParagraphs = ui.aboutPopup.querySelectorAll('p');
  updateText(aboutParagraphs[0], 'aboutVersion');
  updateText(aboutParagraphs[1], 'aboutDescription');
  
  updateText(ui.aboutPopup.querySelector('#PS4FWOK h3'), 'ps4FirmwareSupportedHeader');
  updateText(ui.aboutPopup.querySelector('#close-about'), 'closeButton');

  // Fan Threshold
  updateText(ui.chooseFanThreshold.querySelector('#close-fanChoose'), 'closeButton');
  updateText(ui.chooseFanThreshold.querySelector('h2'), 'fanTitle');
  updateText(ui.chooseFanThreshold.querySelector('p'), 'fanDescription');
  updateText(ui.chooseFanThreshold.querySelector('h3'), 'selectTemp');
  updateText(document.getElementById('defaultTemp'), 'default');

  // Settings Popup 
  updateText(ui.settingsPopup.querySelector('h2'), 'settingsPsfreeHeader');
  updateText(ui.settingsPopup.querySelector('#chooselang h3'), 'languageHeader');
  updateText(ui.settingsPopup.querySelector('#close-settings'), 'closeButton');
  updateText(ui.settingsPopup.querySelector('#ghVer'), 'ghVer');
  updateText(ui.settingsPopup.querySelector('#chooseGoldHEN summary'), 'otherVer'); 
  updateText(ui.settingsPopup.querySelector('#latestVer'), 'latestVer');

  // Warning element (Exploit section)
  const warningHeader = document.querySelector('#warningBox p');
  const warningNotes = document.querySelector('#warningBox ul');
  
  if (warningNotes && strings.warnings) {
    const items = warningNotes.querySelectorAll('li');
    // Check both existence and length for nested properties
    if (items[0] && strings.warnings.note1 && strings.warnings.note1.length > 0) items[0].textContent = strings.warnings.note1;
    if (items[1] && strings.warnings.note2 && strings.warnings.note2.length > 0) items[1].textContent = strings.warnings.note2;
    if (items[2] && strings.warnings.note3 && strings.warnings.note3.length > 0) items[2].textContent = strings.warnings.note3;
  }
  updateText(warningHeader, 'alert');
  
  if (isHttps()){
    const httpsHostElement = document.getElementById("httpsHost");
    if (httpsHostElement && strings.httpsHost && strings.httpsHost.length > 0){
        httpsHostElement.innerText = strings.httpsHost;
    }
    ui.secondHostBtn[1].style.display = "block";
  }

  // --- Buttons ---
  updateText(ui.secondHostBtn[0], 'secondHostBtn');
  updateText(ui.secondHostBtn[1], 'secondHostBtn');
  updateTitle(ui.exploitRunBtn, 'clickToStart')
  updateTitle(ui.aboutBtn, 'aboutMenu');

  updateText(document.querySelector('#exploit-status-panel h2'), 'exploitStatusHeader');
  updateText(ui.payloadsSectionTitle, 'payloadsHeader');
  updateText(ui.toolsTab, 'payloadsToolsHeader');
  updateText(ui.linuxTab, 'payloadsLinuxHeader');
  updateText(ui.gamesTab, 'payloadsGameHeader');
  updateText(ui.consoleElement.querySelector('center'), 'waitingUserInput');
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
  initLanguage();
};

function CheckFW() {
  const userAgent = navigator.userAgent;
  const ps4Regex = /PlayStation 4/;
  let fwVersion = navigator.userAgent.substring(navigator.userAgent.indexOf('5.0 (') + 19, navigator.userAgent.indexOf(') Apple')).replace("layStation 4/","");
  let elementsToHide = [
    'ps-logo-container', 'choosejb-initial', 'exploit-main-screen', 'scrollDown',
    'click-to-start-text', 'chooseGoldHEN'
  ];

  if (ps4Regex.test(userAgent)) {
    if (fwVersion >= 7.00 && fwVersion <= 9.60) {
      document.getElementById('PS4FW').style.color = 'green';

      // Highlight firmware in about popup
      let fwElement = "fw"+fwVersion.replace('.','');
      document.getElementById(fwElement).classList.add('fwSelected');
    } else {
      document.getElementById('PS4FW').style.color = 'red';
      if (isHttps()){
        ui.secondHostBtn[0].style.display = "block";
      }else{
        // modify elements inside elementsToHide for unsupported ps4 firmware to load using GoldHEN's BinLoader
        const toRemove = ['exploit-main-screen', 'scrollDown'];
        elementsToHide = elementsToHide.filter(e => !toRemove.includes(e));
        elementsToHide.push('initial-screen', 'exploit-status-panel', 'henSelection');
        document.getElementById('exploitContainer').style.display = "block";
        // Sizing the payload's section
        ui.payloadsSection.style.width = "75%";
        ui.payloadsSection.style.margin = "auto";
      }

      elementsToHide.forEach(id => {
        const el = document.getElementById(id);
        if (el) el.style.display = 'none';
      });
    }
    window.ps4Fw = fwVersion;
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
    const idsToRemove = GoldHENsOption[fwVersion] || allElements;

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
    initLanguage(currentLanguage);
    renderPayloads();
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
                      <p class="text-start text-cyan-300" style="font-size: 0.75rem">${payload.author}</p>
                  </div>
              </div>
              <span class="px-2 py-1 rounded-full text-xs border ${getPayloadCategoryClass(payload.category)}">
                  ${payload.category}
              </span>
          </div>
          <p class="text-start text-white/70 text-sm leading-relaxed">${payload.description}</p>
          <div class="flex items-center justify-between text-xs text-white/60">
          <p style="color: orange;">${payload.specificFW != '' ? payload.specificFW : ""} </p>
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
  document.title = window.lang.cache + " " + Percent + "%"; 
}
function DisplayCacheProgress() { 
  setTimeout(function () {
    document.title = "\u2713"; 
  }, 1000);
    setTimeout(function () { 
      location.reload();
    }, 3000); 
  }
