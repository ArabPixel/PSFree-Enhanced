// @ts-nocheck
var user = {
  currentLanguage: localStorage.getItem('language') || 'en',
  currentJbFlavor: localStorage.getItem('jailbreakFlavor') || 'GoldHEN',
  platform: "PS4", // PS4/PC/Mobile etc..
  lastTab: localStorage.getItem('lastTab') || 'tools',
  advancedPayloads: localStorage.getItem('advancedPayloads') || false, // True/false
  ip: localStorage.getItem('PayLoaderIp') || window.location.hostname,
  ps4Fw: localStorage.getItem('ps4Fw'),  // Used for the case of sending the payload over the network
  clearLog: true,
  bareboneJB: localStorage.getItem('bareboneJB') === 'true',
  lapseChain: localStorage.getItem('lapseChain') === "true", //Exploit chain method
  blockJailbreak: false,  // Prevent double jailbreak execution
}
var autoJbInterval;
let lastScrollY = 0;
let lastSection = "initial";
var devMode = false;   // Dev mode for PC debugging
var rtlLangs = ["ar", "fa"];
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
  stopAutoJbBtn: document.getElementById('stopAutoJb'),

  // Exploit screen elements
  consoleElement: document.getElementById('console'),
  toolsSection: document.getElementById('tools'),
  toolsTab: document.getElementById('tools-tab'),
  linuxSection: document.getElementById('linux'),
  linuxTab: document.getElementById('linux-tab'),
  advancedPayloadsSection: document.getElementById('advanced'),
  advancedPayloadsTab: document.getElementById('advanced-tab'),
  advancedPayloadsContainer: document.querySelector('.advancedPayloadsTab'),
  advancedPayloadsInput: document.getElementById('advancedPayloadsInput'),
  customPayloadsSection: document.getElementById('custom'),
  customPayloadsTab: document.getElementById('custom-tab'),
  customPayloadInput: document.getElementById('customPayloadInput'),
  sendCustomPayloadBtn: document.getElementById('sendCustomPayloadBtn'),
  successRateText: document.getElementById('successRate'),

  payloadsSection: document.getElementById('payloadsSection'),
  payloadsList: document.getElementById("payloadsGrid"),
  payloadsSectionTitle: document.getElementById('payloads-section-title'),
  exploitRunBtn: document.getElementById('exploitRun'),
  secondHostBtn: document.querySelectorAll('.secondHostBtn'),
  ps4IpInput: document.getElementById('ps4IpInput'),
  ps4FwSelect: document.getElementById('ps4FwSelect'),
  // Popups
  aboutPopupOverlay: document.getElementById('about-popup-overlay'),
  aboutPopup: document.getElementById('about-popup'),
  settingsPopupOverlay: document.getElementById('settings-popup-overlay'),
  settingsPopup: document.getElementById('settings-popup'),
  chooseFanThresholdOverlay: document.getElementById('choose-fanThreshold-overlay'),
  chooseFanThreshold: document.getElementById('choose-fanThreshold'),
  scanGoldHENPayLoader: document.getElementById('scanPayLoader'),
  shutdownServerBtn: document.getElementById('shutdownServerBtn'),
  autoJbRetry: document.getElementById('autoJbRetry'),
  bareboneJbBtn: document.getElementById('bareboneJB'),
  bareboneJBInput: document.getElementById('bareboneJBInput'),
  exploitChainTitle: document.getElementById('exploitChainTitle'),
  userlandOnlyOnJB67x: document.getElementById('userlandOnlyOnJB67xInput'),

  // Settings elements
  langRadios: document.querySelectorAll('#chooselang input[name="language"]'),
};

// payloads tabs
function loadLastTab() {
  if (user.lastTab == "advanced" && user.advancedPayloads != "true") {
    // set last tab to tools
    user.lastTab = "tools";
    ui.toolsSection.click();
  }
  document.getElementById(user.lastTab).classList.remove('hidden');
  document.getElementById(user.lastTab + '-tab').setAttribute("aria-selected", "true");
}

function saveLastTab(tab) {
  // Update state
  user.lastTab = tab;
  localStorage.setItem('lastTab', tab);

  // Define the map of containers
  const sections = {
    'tools': ui.toolsSection,
    'linux': ui.linuxSection,
    'advanced': ui.advancedPayloadsSection,
    'custom': ui.customPayloadsSection
  };

  // Nuke contents of every section but the active one and custom to free memory
  Object.keys(sections).forEach(key => {
    if (key !== tab && sections[key] && key != 'custom') {
      sections[key].innerHTML = '';
    }
  });
}

// popups
function aboutPopup() {
  ui.aboutPopupOverlay.classList.toggle('hidden');
}

function settingsPopup() {
  ui.settingsPopupOverlay.classList.toggle('hidden');
}

function chooseFanThreshold() {
  ui.chooseFanThresholdOverlay.classList.toggle('hidden');
}

// display settings panel for new users to explore the options :)
if (localStorage.getItem("NewUser") != "0") {
  settingsPopup();
}

function updateUserlandOnlyOnJB67x(checked) {
  localStorage.setItem('userlandOnlyOnJB67x', checked);
}

function userlandOnlyOnJB67x() {
  var value = localStorage.getItem('userlandOnlyOnJB67x') == "true";
  ui.userlandOnlyOnJB67x.checked = value;
}

function sleep(ms = 0) {
  return new Promise(resolve => setTimeout(resolve, ms));
}


// Jailbreak-related functions
async function jailbreak() {
  if (user.platform !== "PS4") return;

  // clear terminal
  ui.consoleElement.textContent = '';
  // stop counter
  if (autoJbInterval) clearInterval(autoJbInterval);

  // Make it retry untill success
  sessionStorage.setItem('autoJbRetry', 'true');

  // Skip if payload were chosen, useful when a payload were chosen from payloads.js
  if (sessionStorage.getItem('payload_path') == (null || undefined)) {
    // Choose HEN
    chooseHEN();
  }

  cleanUp();

  // barebone exploit prefered? go to exploit file
  if (user.bareboneJB) {
    location.href = "./exploit.html";
    return;
  }
  let fwVersion = Number(user.ps4Fw);

  switch (true) {
    case (fwVersion >= 6.70 && fwVersion <= 6.72):
      log("Initializing Exploit...");
      var value = localStorage.getItem('userlandOnlyOnJB67x') == "true";
      if (value) {
        // set userlandOnlyOnJB67x to false, on reload to load userland exploit
        localStorage.setItem('userlandOnlyOnJB67x', "false");
        // set jailbreakNow to true to automatically launch jailbreak function
        sessionStorage.setItem("jailbreakNow", 'true');
        location.reload();
      }
      badHoistJailbreak();
      break;
    case (fwVersion >= 7.00 && fwVersion <= 9.60):
      psfreeLapse();
      break;
  }
  // add one jailbreak attempt to the stats
  updateJbStats(1, 0);
}

async function psfreeLapse() {
  // Exploit chain method check
  if (user.lapseChain) {
    try {
      await loadScript('./src/alert.mjs');
    } catch (e) {
      log("alert.mjs is not defined", "red");
    }
  } else {
    log("Loading Feyzee61's PSFree Lapse implementation..");
    try {
      await loadScript('./includes/js/exploits/bundle.js');

      if (typeof doJailBreak === "function") {
        doJailBreak();
      } else {
        log("Error: doJailBreak is not defined", "red");
      }
    } catch (e) {
      log("Failed to load bundle script: " + e.message, "red");
    }
  }
}

// Taken from Feyzee61 ps4jb
async function badHoistJailbreak() {
  if (window.entrypoint672_result < 1) {
    log("An error occured during Bad Hoist Entrypoint\nRetrying..", "orange");
    await sleep(2000);
    location.reload();
    return;
  }
  else
    log("Bad Hoist Entrypoint succeeded");
  if (window.exploitsetup672_result < 1) {
    log("An error occured during Exploit Setup\nPlease refresh page and try again...", "red");
    return;
  }
  else
    log("Exploit Setup complete\n");
  log("Starting Kernel Exploit...");
  await sleep(200); // Wait 200ms

  await loadScript('./includes/js/exploits/672kexploit.js');
  var result = KernelExploit672();

  if (result === 0 || result === 91) {
    log("\nKernel exploit succeeded", "green");
    // Inject HEN payload
    getPayload672(sessionStorage.getItem('payload_path'));

    log("\nBad Hoist by Fire30, 6.7x Kernel Exploit by Sleirsgoevy");
    log("Implementation taken from Feyzee61");
    jailbreakSuccess();
  } else if (result === 179) {
    getPayload672(sessionStorage.getItem('payload_path'));

    log("\nAlready jailbroken, skipping..", "green");
    jailbreakSuccess();
  } else {
    log("\nAn error occured during Kernel Exploit\nPlease restart console and try again...", "red");
  }
}

function jailbreakSuccess() {
  if (sessionStorage.getItem('jailbreakNow') == "true" && user.ps4Fw >= 6.70 && user.ps4Fw <= 6.72) {
    sessionStorage.removeItem('jailbreakNow');
    localStorage.setItem("userlandOnlyOnJB67x", "false");
  }
  sessionStorage.setItem('autoJbRetry', 'false');
  updateJbStats(0, 1);
  setTimeout(() => { window.location.href = "./"; }, 5000);
}

// Taken from Feyzee61's ps4jb
function getScript(source) {
  return new Promise((resolve, reject) => {
    const gs = document.createElement('script');
    gs.src = source;
    gs.async = false;
    gs.onload = () => resolve();
    gs.onerror = () => reject(new Error("Script load failed: " + source));
    document.body.appendChild(gs);
  });
}

// Taken from Feyzee61's ps4jb
async function loadScript(script_js) {
  window.script_loaded = 0;
  await getScript(script_js);
  // Wait for script to be loaded
  while (window.script_loaded < 1) {
    await sleep(50); // Wait 50ms
  }
}

function isHttps() {
  return window.location.protocol === 'https:';
}

async function Loadpayloads(payload, name, payloadId) {
  if (user.platform != "PS4") {
    var inputIp = ui.ps4IpInput.value.trim();
    if (inputIp == null || inputIp == undefined || inputIp == "" || /\s/.test(inputIp)) {
      alert(window.lang.ps4IpInvalid);
      return;
    }

    if (user.ps4Fw == null || user.ps4Fw == 'undefined') {
      ui.ps4FwSelect.style.border = "2px solid red";
      return;
    }
    user.ip = inputIp;
  }
  try {
    sessionStorage.removeItem('binloader');
    if (payload == "chooseFanThreshold") {
      chooseFanThreshold();
      return;
    }

    // Try to find the function in global scope or window.payloads
    const targetFunc = window[payload] || (window.payloads && window.payloads[payload]);

    if (typeof targetFunc === 'function') {
      if (payload == "custom") {
        var payloadFile = ui.customPayloadInput.files[0];
        if (!payloadFile) return;
        targetFunc(payloadFile);
      } else {
        targetFunc(name, payloadId);
      }
    } else {
      alert(`Payload function ${payload} not found.`);
    }

  } catch (e) {
    alert('Failed to load payload: ' + payload + " | Error: " + e);
  }
}

// Apply lanuage after loading the language file
async function initLanguage() {
  try {
    await loadLanguage();
    applyLanguage(user.currentLanguage);
    updateJbStats(false, false);
  } catch (e) {
    console.error(e);
  }
}

// Load settings
async function loadSettings() {
  try {
    CheckFW();
    loadJbFlavor();
    await initLanguage();
    loadTheme();
    loadColor();
    renderPayloads(payloadsList);
    loadAdvancedPayloads();
    loadLastTab();
    loadGoldHENVer();
    autoJailbreak();
    updateBareboneJB();
    loadLapseChain();
    userlandOnlyOnJB67x();
  } catch (e) {
    alert("Error in loadSettings: " + e.message);
  }
}

function getPayloadCategoryClass(category) {
  switch (category) {
    case 'tools': return 'category-tools';
    case 'linux': return 'category-linux';
    case 'advanced': return 'category-advanced';
    default: return '';
  }
}

function renderPayloads(payloads) {
  // Identify the target container first
  const firstCategory = payloads[0].category;
  let targetContainer;

  if (firstCategory === 'tools') targetContainer = ui.toolsSection;
  else if (firstCategory === 'linux') targetContainer = ui.linuxSection;
  else if (firstCategory === 'advanced') targetContainer = ui.advancedPayloadsSection;

  // Clear to prevent duplicates
  if (targetContainer) targetContainer.innerHTML = '';

  payloads.forEach(payload => {
    const payloadCard = document.createElement('div');
    payloadCard.id = payload.id;
    payloadCard.onclick = () => Loadpayloads(payload.funcName, payload.name, payload.id);
    payloadCard.className = `payload payload-card relative group cursor-pointer duration-300 transform hover:scale-102`;
    payloadCard.dataset.payloadId = payload.id;

    payloadCard.innerHTML = `
    <button style="width: 100%;">
      <div class="bg-gray-800 border border-white/20 rounded-xl p-6 h-full">
          <div class="flex items-start justify-between mb-4">
              <div class="flex items-center space-x-3">
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
      case "linux":
        ui.linuxSection.appendChild(payloadCard);
        break;
      case "advanced":
        ui.advancedPayloadsSection.appendChild(payloadCard);
        break;
      default:
        ui.toolsSection.appendChild(payloadCard);
        break;
    }
  });

}

// Handling cache
function DLProgress(e) {
  var Percent = (Math.round(e.loaded / e.total * 100));
  document.title = ((window.lang && window.lang.cache) || "Caching ") + " " + Percent + "%";
}
function DisplayCacheProgress() {
  setTimeout(function () {
    document.title = "\u2713";
  }, 1000);
  setTimeout(function () {
    // location.reload();
    document.title = ((window.lang && window.lang.title) || "PSFree Enhanced");
  }, 2000);
}

function terminateCache() {
  if (window.applicationCache) {
    // Status 3 is 'downloading', Status 1 is 'checking'
    if (window.applicationCache.status === 3 || window.applicationCache.status === 1) {
      console.log("Terminating cache process to save memory...");
      window.applicationCache.abort();

      // restore title
      document.title = window.lang.title || "PSFree Enhanced";

      // cleanup
      window.applicationCache.removeEventListener("progress", DLProgress);
      window.applicationCache.oncached = null;
      window.applicationCache.onupdateready = null;
    }
  }
}


function setAdvancedPayloads(inputState) {
  // Update variable/localstorage value
  user.advancedPayloads = inputState;
  localStorage.setItem("advancedPayloads", inputState)
  if (inputState == true) {
    // Its true, show tab and render payloads
    ui.advancedPayloadsContainer.classList.remove('hidden')
    renderPayloads(payloadsList.filter(p => p.category === 'advanced'));
  } else {
    // its false, hide payloads' tab and move to tools' tab
    ui.advancedPayloadsContainer.classList.add('hidden')
    ui.toolsTab.click();
  }
}

function loadAdvancedPayloads() {
  if (user.advancedPayloads == "true") {
    // its true, check the box, show tab and load the payloads
    ui.advancedPayloadsInput.checked = true;
    ui.advancedPayloadsContainer.classList.remove('hidden')
    renderPayloads(payloadsList.filter(p => p.category === 'advanced'));
  }
}

// keep base ip and chop the rest
// e.g. 192.168.20.156 => 192.168.20
function baseIp(ip) {
  return ip.substring(0, ip.lastIndexOf('.'));
}

function findPs4FromBaseIP(ip) {
  return new Promise((resolve, reject) => {
    const base = baseIp(ip);
    let checked = 0;
    const total = 254;
    let found = false;

    function onDone() {
      checked++;
      if (checked === total && !found) {
        reject(new Error('BinLoader not found on subnet'));
        alert(window.lang.payLoaderNotFound);
      }
    }

    for (let i = 1; i <= total; i++) {
      const checkIp = `${base}.${i}`;
      const req = new XMLHttpRequest();
      req.open('POST', `http://${checkIp}:9090/status`);
      req.timeout = 1000;

      req.onload = function () {
        if (found) { onDone(); return; }
        try {
          const json = JSON.parse(req.responseText);
          if (json.status === 'ready') {
            found = true;
            user.ip = checkIp;
            try { localStorage.setItem('PayLoaderIp', checkIp); } catch (_) { }
            if (ui.ps4IpInput && !ui.ps4IpInput.classList.contains('hidden')) {
              ui.ps4IpInput.value = checkIp;
              localStorage.setItem('ps4Ip', checkIp);
            }
            alert(window.lang.payLoaderFound + checkIp);
            resolve(checkIp);
          }
        } catch (_) { }
        onDone();
      };

      req.onerror = function () { onDone(); };
      req.ontimeout = function () { onDone(); };

      req.send();
    }
  });
}

function isLocalIP(ip) {
  return /^(127\.|192\.168\.|10\.|172\.(1[6-9]|2[0-9]|3[0-1])\.)/.test(ip);
}

function ipGuess() {
  const host = window.location.hostname;
  const isPS4 = (user.platform === "PS4" || typeof window.ps4Fw !== 'undefined');

  // 1. is it a local network ? (192.168.x.x, 10.x.x.x, etc.)
  if (isLocalIP(host)) {
    if (isPS4) {
      user.ip = "127.0.0.1";
      if (!ui.ps4IpInput.classList.contains("hidden")) {
        ui.ps4IpInput.value = user.ip;
      }
      return; // PS4 browsing its own local server
    } else {
      // PC browsing a hosted site.
      findPs4FromBaseIP(host);
      return;
    }
  }

  // 2. is it localhost or 127.0.0.1
  const isLoopback = (host === "localhost" || host === "127.0.0.1");
  if (isLoopback) {
    if (isPS4) {
      return host;
    } else {
      alert("Can't scan for ip since its not provided")
      // PC browsing a PC-hosted site.
      // Cant scan for a PayLoader server because we only have localhost or 127.0.0.1
      return;
    }
  }
}

function log(message, color) {
  if (user.clearLog) {
    ui.consoleElement.textContent = '';
    user.clearLog = false;
  }
  const span = document.createElement('span');
  span.textContent = message + '\n';
  if (color) {
    span.style.color = color;
  }
  ui.consoleElement.appendChild(span);
}

// To be only used when this project is served on a PS4-Websrv payload on a PS4.
// Send shutdown request to the server
function shutdownServer() {
  if (!confirm(window.lang.shutdownServerConfirm)) return;

  fetch('/shutdown')
    .then(() => {
      alert("Server is shutting down. The page will now reload.");
      window.location.reload();
    })
    .catch(err => {
      alert("Server stopped? (connection lost).");
      window.location.reload();
    });
}

/**
 * A Function to add an attempt and/or a success exploit and update the localStorage.
 * @param {boolean} attemp - Set to true if a jailbreak attempt was made.
 * @param {boolean} isSuccess - Set to true if the jailbreak was successful.
 * - Set both to false will only update the stats, useful when reloading the page.
 */
function updateJbStats(attemp, isSuccess) {
  let total = parseInt(localStorage.getItem('jbTotal') || 0);
  let success = parseInt(localStorage.getItem('jbSuccess') || 0);

  if (attemp) {
    total++;
    localStorage.setItem('jbTotal', total);
  }
  if (isSuccess) {
    success++;
    localStorage.setItem('jbSuccess', success);
  }

  // Update UI element if present, useful for the case of exploit.html not having the ui element.
  if (ui.successRateText && window.lang) {
    let rate = ((success / total) * 100).toFixed(0);
    rate = isNaN(rate) ? "0" : rate; // Handle NaN case when total is 0
    ui.successRateText.textContent = (window.lang.successRate || "Success Rate: ") + rate + "%" + ` (${success}/${total})`;
  }
}

function clearStats() {
  if (!confirm(window.lang.clearStatsConfirm)) return;
  localStorage.removeItem('jbTotal');
  localStorage.removeItem('jbSuccess');
  ui.successRateText.textContent = window.lang.successRate + "0% (0/0)";
}

// A try to free up some memory to improve success rate
function cleanUp() {
  // terminateCache(); Still not sure if this drops the success rate and makes more crashes
  if (!window.ps4Fw) return;

  // Stop auto-jailbreak counter
  if (autoJbInterval) {
    clearInterval(autoJbInterval);
    autoJbInterval = null;
  }

  // Empty payloads sections
  if (ui.payloadsList) {
    ui.payloadsList.innerHTML = '';
  }


  // Wipe individual refs
  const toDestroy = [
    'settingsBtn', 'aboutBtn', 'initialScreen', 'chooseGoldHEN',
    'psLogoContainer', 'clickToStartText',
    'ps4FwStatus', 'stopAutoJbBtn', 'payloadsSection', 'payloadsList', 'payloadsSectionTitle',
    'ps4IpInput', 'ps4FwSelect', 'scanGoldHENPayLoader', 'shutdownServerBtn',
    'aboutPopup', 'settingsPopup', 'chooseFanThreshold', 'autoJbRetry', 'chooselang',
    'toolsSection', 'toolsTab', 'linuxSection', 'linuxTab', 'advancedPayloadsSection', 'advancedPayloadsTab',
    'advancedPayloadsContainer', 'advancedPayloadsInput', 'customPayloadsSection', 'customPayloadsTab', 'customPayloadInput',
    'sendCustomPayloadBtn', 'exploitRunBtn', 'secondHostBtn', 'aboutPopupOverlay', 'settingsPopupOverlay', 'chooseFanThresholdOverlay',
    'exploitChainTitle'
  ];
  toDestroy.forEach(key => {
    if (ui[key]) {
      if (typeof ui[key].remove === 'function') ui[key].remove();
      ui[key] = null;
    }
  });

  // Null the payload arrays — forces GC eligibility on their objects
  if (typeof payloadsList !== 'undefined' && Array.isArray(payloadsList)) {
    payloadsList.length = 0;
  }

  // Make console full screen
  document.getElementById('exploitContainer').style.display = "block";
}

function updateBareboneJB() {
  if (ui.bareboneJBInput) {
    ui.bareboneJBInput.checked = user.bareboneJB;
  }
  console.log(user.bareboneJB);
}

function setBareboneJB(checked) {
  if (user.ps4Fw >= 6.70 && user.ps4Fw <= 6.72 && checked) {
    alert("Jailbreak now?");
    cleanUp();
    location.replace('./exploit.html');
  }
  localStorage.setItem("bareboneJB", checked);
  user.bareboneJB = checked;

}

// save exploit chain method to localStorage
function lapseChain(value) {
  localStorage.setItem('lapseChain', value);
  user.lapseChain = value == "true";
}
// load option when loading the page
function loadLapseChain() {
  var chainElement = document.getElementById('chooseExploitChain');

  if (user.ps4Fw >= 6.70 && user.ps4Fw <= 6.72) {
    if (chainElement) {
      chainElement.remove();
    }
    return;
  }

  // Protective check
  var radioElement = document.querySelector(`input[name="exploitChain"][value="${user.lapseChain}"]`);
  if (radioElement) {
    radioElement.checked = true;
  }
}
