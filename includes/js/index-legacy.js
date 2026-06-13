"use strict";

function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
// @ts-nocheck
var user = {
  currentLanguage: localStorage.getItem('language') || 'en',
  currentJbFlavor: localStorage.getItem('jailbreakFlavor') || 'GoldHEN',
  platform: "PS4",
  // PS4/PC/Mobile etc..
  lastTab: localStorage.getItem('lastTab') || 'tools',
  advancedPayloads: localStorage.getItem('advancedPayloads') || false,
  // True/false
  ip: localStorage.getItem('PayLoaderIp') || window.location.hostname,
  ps4Fw: localStorage.getItem('ps4Fw'),
  // Used for the case of sending the payload over the network
  clearLog: true,
  bareboneJB: localStorage.getItem('bareboneJB') === 'true',
  secondLapse: localStorage.getItem('secondLapse') === "true",
  //Exploit chain method
  blockJailbreak: false // Prevent double jailbreak execution
};
var autoJbInterval;
var lastScrollY = 0;
var lastSection = "initial";
var devMode = false; // Dev mode for PC debugging
var rtlLangs = ["ar", "fa"];
var ui = {
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
  secondLapse: document.getElementById('secondLapse'),
  exploitChainTitle: document.getElementById('exploitChainTitle'),
  userlandOnlyOnJB67x: document.getElementById('userlandOnlyOnJB67xInput'),
  // Settings elements
  langRadios: document.querySelectorAll('#chooselang input[name="language"]')
};
var payloadsList = [{
  id: "FTP",
  name: "FTP",
  author: "Scene Collective",
  description: "Enables FTP server access for file transfers.",
  specificFW: "",
  category: "tools",
  funcName: "load_FTP"
}, {
  id: "BinLoader",
  name: "BinLoader",
  author: "PSFree Exploit",
  description: "Launches BinLoader server on port 9020 to send bin payloads.",
  specificFW: "7.00 - 9.60",
  category: "tools",
  funcName: "load_BinLoader"
}, {
  id: "ElfLoader",
  name: "ElfLoader",
  author: "John Tornblom",
  description: "Launches ElfLoader server on port 9021 to send elf payloads.",
  specificFW: "",
  category: "tools",
  funcName: "load_Elfldr"
}, {
  id: "WebSrv",
  name: "PS4-Websrv",
  author: "ArabPixel",
  description: "Launches a web server on port 80 on the PS4 to load payloads using external devices on the fly.",
  specificFW: "",
  category: "tools",
  funcName: "load_WebSrv"
}, {
  id: "DisableUpdates",
  name: "Disable-Updates",
  author: "Scene Collective",
  description: "Disables automatic system software updates.",
  specificFW: "",
  category: "tools",
  funcName: "load_DisableUpdates"
}, {
  id: "FanThreshold",
  name: "Fan-Threshold",
  author: "Scene Collective",
  description: "Sets the cooling fan's profile on the PlayStation 4",
  specificFW: "",
  category: "tools",
  funcName: "chooseFanThreshold"
}, {
  id: "HistoryBlocker",
  name: "History-Blocker",
  author: "Stooged",
  description: "Blocks the browser from remembering and returning to the last opened page on start. Run again to enable/disable.",
  specificFW: "",
  category: "tools",
  funcName: "load_HistoryBlocker"
}, {
  id: "NpFakeSignin",
  name: "NP Fake Signin",
  author: "earthonion",
  description: "Sets PSN state to 'signed in' on PS4, use after fake activation. Useful for vue after free",
  specificFW: "",
  category: "tools",
  funcName: "load_npFakeSignin"
}, {
  id: "OrbisToolbox",
  name: "Orbis-Toolbox",
  author: "OSM-Made",
  description: "A modification of the playstation UI to help with launching and developing homebrew..",
  specificFW: "5.05, 6.72, 7.02, 7.55, 9.00",
  category: "tools",
  funcName: "load_Orbis"
}, {
  id: "BackupDB",
  name: "Backup-DB",
  author: "Stooged",
  description: "Backs up your PS4's databases, licenses, and user data. Note this may not be useful if you have to reinitalize as your keys may change.",
  specificFW: "",
  category: "tools",
  funcName: "load_BackupDB"
}, {
  id: "RestoreDB",
  name: "Restore-DB",
  author: "Stooged",
  description: "Restores the data saved in the 'Backup' payload.",
  specificFW: "",
  category: "tools",
  funcName: "load_RestoreDB"
}, {
  id: "ExitIDU",
  name: "ExitIDU",
  author: "Scene Collective",
  description: "Exits IDU mode and restarts the console.",
  specificFW: "",
  category: "tools",
  funcName: "load_ExitIDU"
}, {
  id: "WebRTE",
  name: "WebRTE",
  author: "Made by golden<br>updated by EchoStretch",
  description: "Web Realtime Trainer Engine",
  specificFW: "5.05, 6.72, 7.00-11.00",
  category: "tools",
  funcName: "load_WebRTE"
}, {
  id: "App2USB",
  name: "App2USB",
  author: "Stooged",
  description: "Unofficially Moves installed applications to an external USB drive.",
  specificFW: "",
  category: "tools",
  funcName: "load_App2USB"
}, {
  id: "Linux1024mb",
  name: "Linux Loader 1GB",
  author: "ps4boot<br>ArabPixel, rmux",
  description: "Linux Loader for all consoles. 1GB VRAM. Select for first install",
  specificFW: "7.00 - 13.02",
  category: "linux",
  funcName: "load_Linux"
}, {
  id: "Linux2048mb",
  name: "Linux Loader 2GB",
  author: "ps4boot<br>ArabPixel, rmux",
  description: "Linux Loader for all consoles. 2GB VRAM.",
  specificFW: "7.00 - 13.02",
  category: "linux",
  funcName: "load_Linux"
}, {
  id: "Linux3072mb",
  name: "Linux Loader 3GB",
  author: "ps4boot<br>ArabPixel, rmux",
  description: "Linux Loader for all consoles. 3GB VRAM.",
  specificFW: "7.00 - 13.02",
  category: "linux",
  funcName: "load_Linux"
}, {
  id: "Linux4096mb",
  name: "Linux Loader 4GB",
  author: "ps4boot<br>ArabPixel, rmux",
  description: "Linux Loader for all consoles. 4GB VRAM.",
  specificFW: "7.00 - 13.02",
  category: "linux",
  funcName: "load_Linux"
}, {
  id: "Linux128mb",
  name: "Linux Loader 128MB",
  author: "ps4boot<br>ArabPixel, rmux",
  description: "Linux Loader for all consoles. 128MB VRAM.",
  specificFW: "7.00 - 13.02",
  category: "linux",
  funcName: "load_Linux"
}, {
  id: "Linux256mb",
  name: "Linux Loader 256MB",
  author: "ps4boot<br>ArabPixel, rmux",
  description: "Linux Loader for all consoles. 256MB VRAM.",
  specificFW: "7.00 - 13.02",
  category: "linux",
  funcName: "load_Linux"
}, {
  id: "Linux512mb",
  name: "Linux Loader 512MB",
  author: "ps4boot<br>ArabPixel, rmux",
  description: "Linux Loader for all consoles. 512MB VRAM.",
  specificFW: "7.00 - 13.02",
  category: "linux",
  funcName: "load_Linux"
}];
var advancedPayloads = [{
  id: "PS4Debug",
  name: "PS4-Debug",
  author: "CTN & SiSTR0",
  description: "Debugging tools for PS4.",
  specificFW: "up to 12.02",
  category: "advanced",
  funcName: "load_PS4Debug"
}, {
  id: "PUPDecrypt",
  name: "PUP-Decrypt",
  author: "andy-man",
  description: "Payload to decrypt the contents of a firmware update file (PUP) on the PS4",
  specificFW: "",
  category: "advanced",
  funcName: "load_PUPDecrypt"
}, {
  id: "ModuleDumper",
  name: "Module-Dumper",
  author: "SocraticBliss",
  description: "Dumps the decrypted modules from /system, /system_ex, /update and the root of the filesystem to a USB device.",
  specificFW: "",
  category: "advanced",
  funcName: "load_ModuleDumper"
}, {
  id: "KernelDumper",
  name: "Kernel-Dumper",
  author: "Eversion",
  description: "Dumps the PS4 kernel.",
  specificFW: "",
  category: "advanced",
  funcName: "load_KernelDumper"
}, {
  id: "DisableASLR",
  name: "Disable-ASLR",
  author: "Scene Collective",
  description: "Disables the ASLR (Address space layout randomization) to make working with memory easier/repeatable.",
  specificFW: "",
  category: "advanced",
  funcName: "load_DisableASLR"
}, {
  id: "PermanentUART",
  name: "Permanent-UART",
  author: "JTAG7371",
  description: "Enabled hardware based UART without a kernel patch, persists though updates.",
  specificFW: "",
  category: "advanced",
  funcName: "load_PermanentUART"
}, {
  id: "RIFRenamer",
  name: "RIF-Renamer",
  author: "Al Azif",
  description: "Renames 'fake' RIFs to 'free' RIFs for better HEN compatibility. Use this if your PKGs only work with Mira+HEN.",
  specificFW: "",
  category: "advanced",
  funcName: "load_RIFRenamer"
}];
// Events
// Scroll snap for the PS4
ui.mainContainer.addEventListener('scroll', function () {
  // Only apply if using a PS4
  if (user.platform != "PS4" || !ui.initialScreen) return;
  if (ui.mainContainer.scrollTop > lastScrollY) {
    // scrolling down
    if (lastSection !== "exploit") {
      document.getElementById('exploitContainer').scrollIntoView({
        block: "end"
      });
      lastSection = "exploit";
    }
  } else if (ui.mainContainer.scrollTop < lastScrollY) {
    // scrolling up
    if (lastSection !== "initial") {
      ui.initialScreen.scrollIntoView({
        block: "end"
      });
      lastSection = "initial";
    }
  }
  lastScrollY = ui.mainContainer.scrollTop;
});

// Launch jailbreak
ui.exploitRunBtn.addEventListener('click', function () {
  if (user.blockJailbreak) return;
  user.blockJailbreak = true;
  chooseHEN();
  jailbreak();
});
ui.psLogoContainer.addEventListener('click', function () {
  if (user.blockJailbreak) return;
  user.blockJailbreak = true;
  chooseHEN();
  jailbreak();
});

// tabs switching
ui.toolsTab.addEventListener('click', function () {
  if (ui.toolsSection.classList.contains('hidden')) {
    ui.toolsSection.classList.remove('hidden');
    ui.linuxSection.classList.add('hidden');
    ui.advancedPayloadsSection.classList.add('hidden');
    ui.customPayloadsSection.classList.add('hidden');
    ui.toolsTab.setAttribute("aria-selected", "true");
    ui.linuxTab.setAttribute("aria-selected", "false");
    ui.advancedPayloadsTab.setAttribute("aria-selected", "false");
    ui.customPayloadsTab.setAttribute("aria-selected", "false");
    ui.toolsSection.innerHTML = '';
    renderPayloads(payloadsList.filter(function (p) {
      return p.category === 'tools';
    }));
  }
  ui.payloadsList.scrollTop = 0;
  // Update lastTap
  saveLastTab('tools');
});
ui.linuxTab.addEventListener('click', function () {
  if (ui.linuxSection.classList.contains('hidden')) {
    ui.toolsSection.classList.add('hidden');
    ui.linuxSection.classList.remove('hidden');
    ui.advancedPayloadsSection.classList.add('hidden');
    ui.customPayloadsSection.classList.add('hidden');
    ui.toolsTab.setAttribute("aria-selected", "false");
    ui.linuxTab.setAttribute("aria-selected", "true");
    ui.advancedPayloadsTab.setAttribute("aria-selected", "false");
    ui.customPayloadsTab.setAttribute("aria-selected", "false");
    ui.linuxSection.innerHTML = '';
    renderPayloads(payloadsList.filter(function (p) {
      return p.category === 'linux';
    }));
  }
  ui.payloadsList.scrollTop = 0;
  // Update lastTap
  saveLastTab('linux');
});
ui.advancedPayloadsTab.addEventListener('click', function () {
  if (ui.advancedPayloadsSection.classList.contains('hidden')) {
    ui.toolsSection.classList.add('hidden');
    ui.linuxSection.classList.add('hidden');
    ui.advancedPayloadsSection.classList.remove('hidden');
    ui.customPayloadsSection.classList.add('hidden');
    ui.toolsTab.setAttribute("aria-selected", "false");
    ui.linuxTab.setAttribute("aria-selected", "false");
    ui.advancedPayloadsTab.setAttribute("aria-selected", "true");
    ui.customPayloadsTab.setAttribute("aria-selected", "false");
    ui.advancedPayloadsSection.innerHTML = '';
    renderPayloads(advancedPayloads);
  }
  ui.payloadsList.scrollTop = 0;
  // Update lastTap
  saveLastTab('advanced');
});
ui.customPayloadsTab.addEventListener('click', function () {
  if (ui.customPayloadsSection.classList.contains('hidden')) {
    ui.toolsSection.classList.add('hidden');
    ui.linuxSection.classList.add('hidden');
    ui.advancedPayloadsSection.classList.add('hidden');
    ui.customPayloadsSection.classList.remove('hidden');
    ui.toolsTab.setAttribute("aria-selected", "false");
    ui.linuxTab.setAttribute("aria-selected", "false");
    ui.advancedPayloadsTab.setAttribute("aria-selected", "false");
    ui.customPayloadsTab.setAttribute("aria-selected", "true");
  }
  ui.payloadsList.scrollTop = 0;
  // Update lastTap
  saveLastTab('custom');
});

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
  var sections = {
    'tools': ui.toolsSection,
    'linux': ui.linuxSection,
    'advanced': ui.advancedPayloadsSection,
    'custom': ui.customPayloadsSection
  };

  // Nuke contents of every section but the active one and custom to free memory
  Object.keys(sections).forEach(function (key) {
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
document.getElementById("close-settings").addEventListener('click', function () {
  if (localStorage.getItem("NewUser") != "0") {
    localStorage.setItem("NewUser", "0");
  }
});
function updateUserlandOnlyOnJB67x(checked) {
  localStorage.setItem('userlandOnlyOnJB67x', checked);
}
function userlandOnlyOnJB67x() {
  var value = localStorage.getItem('userlandOnlyOnJB67x') == "true";
  ui.userlandOnlyOnJB67x.checked = value;
}
function sleep() {
  var ms = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
  return new Promise(function (resolve) {
    return setTimeout(resolve, ms);
  });
}

// Jailbreak-related functions
function jailbreak() {
  return _jailbreak.apply(this, arguments);
}
function _jailbreak() {
  _jailbreak = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee() {
    var fwVersion, value, _t;
    return _regenerator().w(function (_context) {
      while (1) switch (_context.n) {
        case 0:
          if (!(user.platform !== "PS4")) {
            _context.n = 1;
            break;
          }
          return _context.a(2);
        case 1:
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
          if (!user.bareboneJB) {
            _context.n = 2;
            break;
          }
          location.href = "./exploit.html";
          return _context.a(2);
        case 2:
          fwVersion = Number(user.ps4Fw);
          _t = true;
          _context.n = _t === (fwVersion >= 6.70 && fwVersion <= 6.72) ? 3 : _t === (fwVersion >= 7.00 && fwVersion <= 9.60) ? 4 : 5;
          break;
        case 3:
          log("Initializing Exploit...");
          value = localStorage.getItem('userlandOnlyOnJB67x') == "true";
          if (value) {
            localStorage.setItem('userlandOnlyOnJB67x', "false");
            sessionStorage.setItem("jailbreakNow");
            location.reload();
          }
          badHoistJailbreak();
          return _context.a(3, 5);
        case 4:
          psfreeLapse();
          return _context.a(3, 5);
        case 5:
          // add one jailbreak attempt to the stats
          updateJbStats(1, 0);
        case 6:
          return _context.a(2);
      }
    }, _callee);
  }));
  return _jailbreak.apply(this, arguments);
}
function psfreeLapse() {
  return _psfreeLapse.apply(this, arguments);
} // Taken from Feyzee61 ps4jb
function _psfreeLapse() {
  _psfreeLapse = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2() {
    var _t2, _t3;
    return _regenerator().w(function (_context2) {
      while (1) switch (_context2.p = _context2.n) {
        case 0:
          if (!user.secondLapse) {
            _context2.n = 5;
            break;
          }
          _context2.p = 1;
          _context2.n = 2;
          return loadScript('./src/alert.mjs');
        case 2:
          _context2.n = 4;
          break;
        case 3:
          _context2.p = 3;
          _t2 = _context2.v;
          log("alert.mjs is not defined", "red");
        case 4:
          _context2.n = 9;
          break;
        case 5:
          log("Loading Feyzee61's PSFree Lapse implementation..");
          _context2.p = 6;
          _context2.n = 7;
          return loadScript('./includes/js/exploits/bundle.js');
        case 7:
          if (typeof doJailBreak === "function") {
            doJailBreak();
          } else {
            log("Error: doJailBreak is not defined", "red");
          }
          _context2.n = 9;
          break;
        case 8:
          _context2.p = 8;
          _t3 = _context2.v;
          log("Failed to load bundle script: " + _t3.message, "red");
        case 9:
          return _context2.a(2);
      }
    }, _callee2, null, [[6, 8], [1, 3]]);
  }));
  return _psfreeLapse.apply(this, arguments);
}
function badHoistJailbreak() {
  return _badHoistJailbreak.apply(this, arguments);
}
function _badHoistJailbreak() {
  _badHoistJailbreak = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee3() {
    var result;
    return _regenerator().w(function (_context3) {
      while (1) switch (_context3.n) {
        case 0:
          if (!(window.entrypoint672_result < 1)) {
            _context3.n = 2;
            break;
          }
          log("An error occured during Bad Hoist Entrypoint\nRetrying..", "red");
          _context3.n = 1;
          return sleep(2000);
        case 1:
          location.reload();
          return _context3.a(2);
        case 2:
          log("Bad Hoist Entrypoint succeeded");
        case 3:
          if (!(window.exploitsetup672_result < 1)) {
            _context3.n = 4;
            break;
          }
          log("An error occured during Exploit Setup\nPlease refresh page and try again...", "red");
          return _context3.a(2);
        case 4:
          log("Exploit Setup complete\n");
        case 5:
          log("Starting Kernel Exploit...");
          _context3.n = 6;
          return sleep(200);
        case 6:
          _context3.n = 7;
          return loadScript('./includes/js/exploits/672kexploit.js');
        case 7:
          result = KernelExploit672();
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
        case 8:
          return _context3.a(2);
      }
    }, _callee3);
  }));
  return _badHoistJailbreak.apply(this, arguments);
}
function jailbreakSuccess() {
  if (sessionStorage.getItem('jailbreakNow') == "true") {
    sessionStorage.removeItem('jailbreakNow');
    localStorage.setItem("userlandOnlyOnJB67x", "false");
  }
  sessionStorage.setItem('autoJbRetry', 'false');
  updateJbStats(0, 1);
  setTimeout(function () {
    window.location.href = "./";
  }, 5000);
}

// Taken from Feyzee61's ps4jb
function getScript(source) {
  return new Promise(function (resolve, reject) {
    var gs = document.createElement('script');
    gs.src = source;
    gs.async = false;
    gs.onload = function () {
      return resolve();
    };
    gs.onerror = function () {
      return reject(new Error("Script load failed: " + source));
    };
    document.body.appendChild(gs);
  });
}

// Taken from Feyzee61's ps4jb
function loadScript(_x) {
  return _loadScript.apply(this, arguments);
}
function _loadScript() {
  _loadScript = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee4(script_js) {
    return _regenerator().w(function (_context4) {
      while (1) switch (_context4.n) {
        case 0:
          window.script_loaded = 0;
          _context4.n = 1;
          return getScript(script_js);
        case 1:
          if (!(window.script_loaded < 1)) {
            _context4.n = 3;
            break;
          }
          _context4.n = 2;
          return sleep(50);
        case 2:
          _context4.n = 1;
          break;
        case 3:
          return _context4.a(2);
      }
    }, _callee4);
  }));
  return _loadScript.apply(this, arguments);
}
function isHttps() {
  return window.location.protocol === 'https:';
}
function Loadpayloads(_x2, _x3, _x4) {
  return _Loadpayloads.apply(this, arguments);
} // HEN path selection based on user preference
function _Loadpayloads() {
  _Loadpayloads = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee5(payload, name, payloadId) {
    var inputIp, targetFunc, payloadFile, _t4;
    return _regenerator().w(function (_context5) {
      while (1) switch (_context5.p = _context5.n) {
        case 0:
          if (!(user.platform != "PS4")) {
            _context5.n = 3;
            break;
          }
          inputIp = ui.ps4IpInput.value.trim();
          if (!(inputIp == null || inputIp == undefined || inputIp == "" || /\s/.test(inputIp))) {
            _context5.n = 1;
            break;
          }
          alert(window.lang.ps4IpInvalid);
          return _context5.a(2);
        case 1:
          if (!(user.ps4Fw == null || user.ps4Fw == 'undefined')) {
            _context5.n = 2;
            break;
          }
          ui.ps4FwSelect.style.border = "2px solid red";
          return _context5.a(2);
        case 2:
          user.ip = inputIp;
        case 3:
          _context5.p = 3;
          sessionStorage.removeItem('binloader');
          if (!(payload == "chooseFanThreshold")) {
            _context5.n = 4;
            break;
          }
          chooseFanThreshold();
          return _context5.a(2);
        case 4:
          // Try to find the function in global scope or window.payloads
          targetFunc = window[payload] || window.payloads && window.payloads[payload];
          if (!(typeof targetFunc === 'function')) {
            _context5.n = 8;
            break;
          }
          if (!(payload == "custom")) {
            _context5.n = 6;
            break;
          }
          payloadFile = ui.customPayloadInput.files[0];
          if (payloadFile) {
            _context5.n = 5;
            break;
          }
          return _context5.a(2);
        case 5:
          targetFunc(payloadFile);
          _context5.n = 7;
          break;
        case 6:
          targetFunc(name, payloadId);
        case 7:
          _context5.n = 9;
          break;
        case 8:
          alert("Payload function ".concat(payload, " not found."));
        case 9:
          _context5.n = 11;
          break;
        case 10:
          _context5.p = 10;
          _t4 = _context5.v;
          alert('Failed to load payload: ' + payload + " | Error: " + _t4);
        case 11:
          return _context5.a(2);
      }
    }, _callee5, null, [[3, 10]]);
  }));
  return _Loadpayloads.apply(this, arguments);
}
function GoldHEN() {
  var goldHenVersion = localStorage.getItem('GHVer');
  var basePath = "./includes/payloads/GoldHEN/";
  switch (goldHenVersion) {
    case "GHv2.4b18.9":
      sessionStorage.setItem('payload_path', basePath + "goldhen_v2.4b18.9.bin");
      break;
    case "GHv2.4b18.8":
      sessionStorage.setItem('payload_path', basePath + "goldhen_v2.4b18.8.bin");
      break;
    case "GHv2.4b18.7":
      sessionStorage.setItem('payload_path', basePath + "goldhen_v2.4b18.7.bin");
      break;
    case "GHv2.4b18.6":
      sessionStorage.setItem('payload_path', basePath + "goldhen_v2.4b18.6.bin");
      break;
    case "GHv2.4b18.5":
      sessionStorage.setItem('payload_path', basePath + "goldhen_v2.4b18.5.bin");
      break;
    default:
      sessionStorage.setItem('payload_path', basePath + "goldhen_v2.4b18.10.bin");
      break;
  }
}
function HEN() {
  sessionStorage.setItem('payload_path', './includes/payloads/HEN/HEN.bin');
}
function chooseHEN() {
  if (user.currentJbFlavor === 'HEN') {
    HEN();
  } else GoldHEN();
}
function setGoldHENVer(value) {
  localStorage.setItem('GHVer', value);
}
function loadGoldHENVer() {
  var goldHenVer = localStorage.getItem("GHVer") || "GHv2.4b18.10";
  document.querySelector("input[name=\"goldhen\"][value=\"".concat(goldHenVer, "\"]")).checked = true;
}
function loadLanguage() {
  document.querySelector("input[name=\"language\"][value=\"".concat(user.currentLanguage, "\"]")).checked = true;
  var langScript = document.getElementById("langScript");
  if (langScript) langScript.remove();
  // load language file
  return new Promise(function (resolve, reject) {
    var script = document.createElement('script');
    script.src = "./includes/js/languages/".concat(user.currentLanguage, ".js");
    script.onload = function () {
      return resolve(window.lang);
    };
    script.id = "langScript";
    script.onerror = function () {
      return reject(new Error("Failed to load ".concat(user.currentLanguage)));
    };
    document.head.appendChild(script);
  });
}
// Apply lanuage after loading the language file
function initLanguage() {
  return _initLanguage.apply(this, arguments);
} // Update UI langauge
function _initLanguage() {
  _initLanguage = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee6() {
    var _t5;
    return _regenerator().w(function (_context6) {
      while (1) switch (_context6.p = _context6.n) {
        case 0:
          _context6.p = 0;
          _context6.n = 1;
          return loadLanguage();
        case 1:
          applyLanguage(user.currentLanguage);
          updateJbStats(false, false);
          _context6.n = 3;
          break;
        case 2:
          _context6.p = 2;
          _t5 = _context6.v;
          console.error(_t5);
        case 3:
          return _context6.a(2);
      }
    }, _callee6, null, [[0, 2]]);
  }));
  return _initLanguage.apply(this, arguments);
}
function applyLanguage(lang) {
  user.currentLanguage = lang;
  var strings = window.lang;
  if (!strings) {
    console.error("Language list ".concat(lang, " is not available"));
    return;
  }
  /**
   * Safely updates element's textContent only if translation exists and is not empty.
   * @param {HTMLElement} element - The DOM element to update.
   * @param {string} key - The key in the 'strings' object.
   */
  var updateText = function updateText(element, key) {
    var translation = strings[key];
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
  var updateTitle = function updateTitle(element, key) {
    var translation = strings[key];
    // Check if element exists, and translation is a non-empty string.
    if (element && translation && typeof translation === 'string' && translation.length > 0) {
      element.title = translation;
    }
  };

  // Document Properties
  document.title = strings.title || "PSFree Enhanced";
  document.dir = rtlLangs.includes(user.currentLanguage) ? 'rtl' : 'ltr';
  ui.consoleElement.dir = document.dir;
  document.lang = user.currentLanguage;

  // PS4 Firmware Status Check
  var ps4Fw = window.ps4Fw;
  if (ps4Fw === undefined) {
    if (strings.notPs4 && strings.notPs4.length > 0) {
      ui.ps4FwStatus.textContent = strings.notPs4 + user.platform;
    }
  } else if (ps4Fw <= 9.60 && ps4Fw >= 6.70) {
    if (strings.ps4FwCompatible && strings.ps4FwCompatible.length > 0) {
      ui.ps4FwStatus.textContent = strings.ps4FwCompatible.replace('{ps4fw}', ps4Fw);
    }
  } else {
    if (strings.ps4FwIncompatible && strings.ps4FwIncompatible.length > 0) {
      ui.ps4FwStatus.textContent = strings.ps4FwIncompatible.replace('{ps4fw}', ps4Fw);
    }
  }

  // Main Screen Elements
  updateTitle(ui.settingsBtn, 'settingsBtnTitle');
  updateText(ui.clickToStartText, 'clickToStart');
  updateText(document.querySelector('#choosejb-initial h3'), 'chooseHEN');

  // About Us Popup
  if (ui.aboutPopup) {
    updateText(ui.aboutPopup.querySelector('h2'), 'aboutPsfreeHeader');
    var aboutParagraphs = ui.aboutPopup.querySelectorAll('p');
    if (aboutParagraphs.length > 0) updateText(aboutParagraphs[0], 'aboutVersion');
    if (aboutParagraphs.length > 1) updateText(aboutParagraphs[1], 'aboutDescription');
    updateText(ui.aboutPopup.querySelector('#PS4FWOK h3'), 'ps4FirmwareSupportedHeader');
    updateText(ui.aboutPopup.querySelector('#close-about'), 'closeButton');
    updateText(ui.aboutPopup.querySelector('#goldhenFirmwareSemiSupported i'), 'goldhenFirmwareSemiSupported');
    updateText(ui.aboutPopup.querySelector('#infoProtip'), 'infoProtip');
  }
  updateText(ui.bareboneJbBtn, 'bareboneJB');

  // Fan Threshold
  if (ui.chooseFanThreshold) {
    updateText(ui.chooseFanThreshold.querySelector('#close-fanChoose'), 'closeButton');
    updateText(ui.chooseFanThreshold.querySelector('h2'), 'fanTitle');
    updateText(ui.chooseFanThreshold.querySelector('p'), 'fanDescription');
    updateText(ui.chooseFanThreshold.querySelector('h3'), 'selectTemp');
  }
  updateText(document.getElementById('defaultTemp'), 'default');

  // Settings Popup 
  if (ui.settingsPopup) {
    updateText(ui.settingsPopup.querySelector('h2'), 'settingsPsfreeHeader');
    updateText(ui.settingsPopup.querySelector('#chooselang h3'), 'languageHeader');
    updateText(ui.settingsPopup.querySelector('#close-settings'), 'closeButton');
    updateText(ui.settingsPopup.querySelector('#ghVer'), 'ghVer');
    var ghOtherVer = ui.settingsPopup.querySelector('#chooseGoldHEN summary');
    if (ghOtherVer) updateText(ghOtherVer, 'otherVer');
    updateText(ui.settingsPopup.querySelector('#latestVer'), 'latestVer');
    updateText(ui.settingsPopup.querySelector('#scanPayLoader'), 'scanPayLoader');
    updateText(ui.settingsPopup.querySelector('#shutdownServerBtn'), 'shutdownServerBtn');
  }
  updateText(document.getElementById('showAdvancedPayloads'), 'showAdvancedPayloads');
  updateText(document.getElementById('optionsHeader'), 'optionsHeader');
  updateText(document.getElementById('theme'), 'theme');
  updateText(document.getElementById('defaultTheme'), 'defaultTheme');
  updateText(document.getElementById('vibrantTheme'), 'vibrantTheme');
  updateText(document.getElementById('autoJbRetryText'), 'autoJbRetryText');
  updateText(ui.exploitChainTitle, 'exploitChainTitle');
  updateText(document.getElementById('userlandOnlyOnJB67xText'), 'userlandOnlyOnJB67x');

  // Warning element (Exploit section)
  var warningHeader = document.querySelector('#warningBox p');
  var warningNotes = document.querySelector('#warningBox ul');
  if (warningNotes && strings.warnings) {
    var items = warningNotes.querySelectorAll('li');
    // Check both existence and length for nested properties
    if (items[0] && strings.warnings.note1 && strings.warnings.note1.length > 0) items[0].textContent = strings.warnings.note1;
    if (items[1] && strings.warnings.note2 && strings.warnings.note2.length > 0) items[1].textContent = strings.warnings.note2;
    if (items[2] && strings.warnings.note3 && strings.warnings.note3.length > 0) items[2].textContent = strings.warnings.note3;
  }
  updateText(warningHeader, 'alert');
  if (isHttps()) {
    ui.secondHostBtn[1].style.display = "block";
  }

  // --- Buttons ---
  updateText(ui.secondHostBtn[0], 'secondHostBtn');
  updateText(ui.secondHostBtn[1], 'secondHostBtn');
  updateTitle(ui.exploitRunBtn, 'clickToStart');
  updateTitle(ui.aboutBtn, 'aboutMenu');
  updateText(document.querySelector('#exploit-status-panel div h2'), 'exploitStatusHeader');
  updateText(ui.successRateText, 'successRate');
  updateText(ui.payloadsSectionTitle, 'payloadsHeader');
  updateText(ui.toolsTab, 'payloadsToolsHeader');
  updateText(ui.linuxTab, 'payloadsLinuxHeader');
  updateText(ui.advancedPayloadsTab, 'advanced');
  updateText(ui.consoleElement.querySelector('center'), 'waitingUserInput');

  // Change direction of 'Default' option text for the fan threshold panel
  document.getElementById('defaultTempDiv').style["float"] = rtlLangs.includes(user.currentLanguage) ? "left" : "right";
}
function saveJbFlavor(name, value) {
  localStorage.setItem("jailbreakFlavor", value);
  // Apply hen selector to both inputs
  document.querySelector("input[name=\"".concat(name == "hen" ? "hen2" : "hen", "\"][value=\"").concat(value, "\"]")).checked = true;
  user.currentJbFlavor = value;
}
;
function loadJbFlavor() {
  var flavor = user.currentJbFlavor || 'GoldHEN';
  var henRadio = document.querySelector("input[name=\"hen\"][value=\"".concat(flavor, "\"]"));
  var hen2Radio = document.querySelector("input[name=\"hen2\"][value=\"".concat(flavor, "\"]"));
  if (henRadio && hen2Radio) {
    henRadio.checked = true;
    hen2Radio.checked = true;
  }
}
function saveLanguage(language) {
  if (!language) return;
  localStorage.setItem('language', language);
  user.currentLanguage = language;
  initLanguage();
}
;
function CheckFW() {
  var userAgent = navigator.userAgent;
  var ps4Regex = /PlayStation 4/;
  var fwVersion = navigator.userAgent.substring(navigator.userAgent.indexOf('5.0 (') + 19, navigator.userAgent.indexOf(') Apple')).replace("layStation 4/", "");
  var elementsToHide = ['ps-logo-container', 'choosejb-initial', 'exploit-main-screen', 'scrollDown', 'click-to-start-text', 'chooseGoldHEN', 'advancedPayloads', 'chooseExploitChain'];
  if (ps4Regex.test(userAgent)) {
    if (fwVersion >= 6.70 && fwVersion <= 9.60) {
      ui.ps4FwStatus.style.color = 'green';

      // Highlight firmware in about popup
      var fwElement = "fw" + fwVersion.replace('.', '');
      var el = document.getElementById(fwElement);
      if (el) el.classList.add('fwSelected');

      // show "load userland exploit only on jailbreak" option
      if (fwVersion >= 6.70 && fwVersion <= 6.72) document.getElementById("userlandOnlyOnJB67x").classList.toggle('hidden');
    } else {
      ui.ps4FwStatus.style.color = 'orange';
      if (isHttps()) {
        ui.secondHostBtn[0].style.display = "block";
        terminateCache(); // Dont cache in case no webkit and is https
      } else {
        // modify elements inside elementsToHide for unsupported ps4 firmware to load using GoldHEN's PayLoader
        var toRemove = ['exploit-main-screen', 'scrollDown', 'advancedPayloads'];
        elementsToHide = elementsToHide.filter(function (e) {
          return !toRemove.includes(e);
        });
        elementsToHide.push('initial-screen', 'exploit-status-panel', 'henSelection', 'autoJbContainer', 'successRate', 'bareboneJBOption', 'chooseExploitChain');
        document.getElementById('exploitContainer').style.display = "block";

        // Sizing the payload's section
        ui.payloadsSection.style.margin = "auto";
        document.getElementById('header2').classList.remove('hidden');
      }
      elementsToHide.forEach(function (id) {
        var el = document.getElementById(id);
        if (el) el.style.display = 'none';
      });
    }
    window.ps4Fw = fwVersion;
    user.ip = "127.0.0.1";
    user.ps4Fw = fwVersion;
  } else {
    // Not a PS4
    user.platform = 'Unknown platform';
    if (/Android/.test(userAgent)) user.platform = 'Android';else if (/iPhone|iPad|iPod/.test(userAgent)) user.platform = 'iOS';else if (/Macintosh/.test(userAgent)) user.platform = 'MacOS';else if (/Windows/.test(userAgent)) user.platform = 'Windows';else if (/Linux/.test(userAgent)) user.platform = 'Linux';

    // For user selected firmware
    if (user.ps4Fw) ui.ps4FwSelect.value = user.ps4Fw;
    // Show only if on a local server
    if (isLocalIP(window.location.hostname) && !devMode) {
      // Show IP input and firmware selector for local server users on smart devices
      ui.ps4IpInput.classList.remove('hidden');
      ui.ps4FwSelect.classList.remove('hidden');
      ui.scanGoldHENPayLoader.classList.remove('hidden');
      ui.shutdownServerBtn.classList.remove('hidden');
      document.querySelector('.customPayloadsTab').classList.remove('hidden');
      ui.ps4IpInput.value = user.ip;
      var _toRemove = ['exploit-main-screen', 'scrollDown', 'advancedPayloads', 'custom-tab'];
      elementsToHide = elementsToHide.filter(function (e) {
        return !_toRemove.includes(e);
      });
      elementsToHide.push('initial-screen', 'henSelection', 'warningBox', 'autoJbContainer', 'successRate', 'bareboneJBOption', 'chooseExploitChain');

      // Sizing the payload's section
      // Full screen for phones, centered for desktop
      if (user.platform == "Android" || user.platform == "iOS") {
        // hide console
        elementsToHide.push('exploit-status-panel');
        document.getElementById('exploitContainer').style.display = "block";
        ui.exploitScreen.style.padding = "0";
      }
      ui.payloadsSection.style.width = "100%";
      ui.payloadsSection.style.margin = "auto";
      // Moving the settings icon to a better place
      document.getElementById('header2').classList.remove('hidden', 'left-6');
      document.getElementById('header2').classList.add('flex', 'inherit');
      document.getElementById('header2').querySelectorAll('button').forEach(function (item) {
        return item.classList.add('border', 'border-white/20', 'rounded-xl');
      });
      ui.ps4FwStatus.style.color = 'red';
    }

    // Hide elements for non supported devices unless in dev mode
    if (!devMode) {
      elementsToHide.forEach(function (id) {
        var el = document.getElementById(id);
        if (el) el.style.display = 'none';
      });
    }
  }
}

// Load settings
function loadSettings() {
  try {
    loadTheme();
    CheckFW();
    loadJbFlavor();
    initLanguage(user.currentLanguage);
    renderPayloads(payloadsList);
    loadAdvancedPayloads();
    loadLastTab();
    loadGoldHENVer();
    autoJailbreak();
    updateBareboneJB();
    loadSecondLapse();
    userlandOnlyOnJB67x();
  } catch (e) {
    alert("Error in loadSettings: " + e.message);
  }
}
function getPayloadCategoryClass(category) {
  switch (category) {
    case 'tools':
      return 'category-tools';
    case 'linux':
      return 'category-linux';
    case 'advanced':
      return 'category-advanced';
    default:
      return '';
  }
}
function renderPayloads(payloads) {
  // Identify the target container first
  var firstCategory = payloads[0].category;
  var targetContainer;
  if (firstCategory === 'tools') targetContainer = ui.toolsSection;else if (firstCategory === 'linux') targetContainer = ui.linuxSection;else if (firstCategory === 'advanced') targetContainer = ui.advancedPayloadsSection;

  // Clear to prevent duplicates
  if (targetContainer) targetContainer.innerHTML = '';
  payloads.forEach(function (payload) {
    var payloadCard = document.createElement('div');
    payloadCard.id = payload.id;
    payloadCard.onclick = function () {
      return Loadpayloads(payload.funcName, payload.name, payload.id);
    };
    payloadCard.className = "payload payload-card relative group cursor-pointer duration-300 transform hover:scale-102";
    payloadCard.dataset.payloadId = payload.id;
    payloadCard.innerHTML = "\n    <button style=\"width: 100%;\">\n      <div class=\"bg-gray-800 border border-white/20 rounded-xl p-6 h-full\">\n          <div class=\"flex items-start justify-between mb-4\">\n              <div class=\"flex items-center space-x-3\">\n                  <div>\n                      <h3 class=\"text-start font-semibold text-white text-lg\">".concat(payload.name, "</h3>\n                      <p class=\"text-start text-cyan-300\" style=\"font-size: 0.75rem\">").concat(payload.author, "</p>\n                  </div>\n              </div>\n              <span class=\"px-2 py-1 rounded-full text-xs border ").concat(getPayloadCategoryClass(payload.category), "\">\n                  ").concat(payload.category, "\n              </span>\n          </div>\n          <p class=\"text-start text-white/70 text-sm leading-relaxed\">").concat(payload.description, "</p>\n          <div class=\"flex items-center justify-between text-xs text-white/60\">\n          <p style=\"color: orange;\">").concat(payload.specificFW != '' ? payload.specificFW : "", " </p>\n          </div>\n      </div>\n      </button>\n      ");
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
  var Percent = Math.round(e.loaded / e.total * 100);
  document.title = window.lang.cache + " " + Percent + "%";
}
function DisplayCacheProgress() {
  setTimeout(function () {
    document.title = "\u2713";
  }, 1000);
  setTimeout(function () {
    // location.reload();
    document.title = window.lang.title || "PSFree Enhanced";
  }, 2000);
}
function terminateCache() {
  if (window.applicationCache) {
    // Status 3 is 'downloading', Status 1 is 'checking'
    if (window.applicationCache.status === 3 || window.applicationCache.status === 1) {
      console.log("Terminating cache process to save memory...");
      window.applicationCache.abort();

      // restore title
      document.title = window.lang.title;

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
  localStorage.setItem("advancedPayloads", inputState);
  if (inputState == true) {
    // Its true, show tab and render payloads
    ui.advancedPayloadsContainer.classList.remove('hidden');
    renderPayloads(advancedPayloads);
  } else {
    // its false, hide payloads' tab and move to tools' tab
    ui.advancedPayloadsContainer.classList.add('hidden');
    ui.toolsTab.click();
  }
}
function loadAdvancedPayloads() {
  if (user.advancedPayloads == "true") {
    // its true, check the box, show tab and load the payloads
    ui.advancedPayloadsInput.checked = true;
    ui.advancedPayloadsContainer.classList.remove('hidden');
    renderPayloads(advancedPayloads);
  }
}

// keep base ip and chop the rest
// e.g. 192.168.20.156 => 192.168.20
function baseIp(ip) {
  return ip.substring(0, ip.lastIndexOf('.'));
}
function findPs4FromBaseIP(ip) {
  return new Promise(function (resolve, reject) {
    var base = baseIp(ip);
    var checked = 0;
    var total = 254;
    var found = false;
    function onDone() {
      checked++;
      if (checked === total && !found) {
        reject(new Error('BinLoader not found on subnet'));
        alert(window.lang.payLoaderNotFound);
      }
    }
    var _loop = function _loop() {
      var checkIp = "".concat(base, ".").concat(i);
      var req = new XMLHttpRequest();
      req.open('POST', "http://".concat(checkIp, ":9090/status"));
      req.timeout = 1000;
      req.onload = function () {
        if (found) {
          onDone();
          return;
        }
        try {
          var json = JSON.parse(req.responseText);
          if (json.status === 'ready') {
            found = true;
            user.ip = checkIp;
            try {
              localStorage.setItem('PayLoaderIp', checkIp);
            } catch (_) {}
            if (ui.ps4IpInput && !ui.ps4IpInput.classList.contains('hidden')) {
              ui.ps4IpInput.value = checkIp;
              localStorage.setItem('ps4Ip', checkIp);
            }
            alert(window.lang.payLoaderFound + checkIp);
            resolve(checkIp);
          }
        } catch (_) {}
        onDone();
      };
      req.onerror = function () {
        onDone();
      };
      req.ontimeout = function () {
        onDone();
      };
      req.send();
    };
    for (var i = 1; i <= total; i++) {
      _loop();
    }
  });
}
function isLocalIP(ip) {
  return /^(127\.|192\.168\.|10\.|172\.(1[6-9]|2[0-9]|3[0-1])\.)/.test(ip);
}
function ipGuess() {
  var host = window.location.hostname;
  var isPS4 = user.platform === "PS4" || typeof window.ps4Fw !== 'undefined';

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
  var isLoopback = host === "localhost" || host === "127.0.0.1";
  if (isLoopback) {
    if (isPS4) {
      return host;
    } else {
      alert("Can't scan for ip since its not provided");
      // PC browsing a PC-hosted site.
      // Cant scan for a PayLoader server because we only have localhost or 127.0.0.1
      return;
    }
  }
}
// Save ps4Fw from select element (Only for communicating external device -> PS4 for local network)
ui.ps4FwSelect.addEventListener('change', function () {
  user.ps4Fw = ui.ps4FwSelect.value;
  localStorage.setItem('ps4Fw', ui.ps4FwSelect.value);
  ui.ps4FwSelect.style.border = "1px solid white";
});
function log(message, color) {
  if (user.clearLog) {
    ui.consoleElement.textContent = '';
    user.clearLog = false;
  }
  var span = document.createElement('span');
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
  fetch('/shutdown').then(function () {
    alert("Server is shutting down. The page will now reload.");
    window.location.reload();
  })["catch"](function (err) {
    alert("Server stopped? (connection lost).");
    window.location.reload();
  });
}
function setTheme(theme) {
  var styleSheet = document.getElementById('main-stylesheet');
  if (styleSheet) {
    // Ensure we don't end up with "index.css.css"
    var fileName = theme.endsWith('.css') ? theme : "".concat(theme, ".css");
    styleSheet.setAttribute('href', "./includes/".concat(fileName));
    localStorage.setItem('theme', theme);
  }
}
function loadTheme() {
  var savedTheme = localStorage.getItem('theme') || 'index';

  // Find the radio button
  var radioElement = document.querySelector("input[name=\"theme\"][value=\"".concat(savedTheme, "\"]"));

  // Fallback if the saved theme doesn't exist or is invalid
  if (!radioElement) {
    savedTheme = 'index';
    radioElement = document.querySelector("input[name=\"theme\"][value=\"index\"]");
    localStorage.setItem('theme', 'index');
    // Apply the CSS file
    setTheme(savedTheme);
  }
  // Update the UI radio button if it exists
  if (radioElement) {
    radioElement.checked = true;
  }
}
function setAutoJbRetry(checked) {
  localStorage.setItem('autoJbRetry', checked);
  sessionStorage.setItem('autoJbRetry', checked);
  if (!checked) return;
  if (confirm(window.lang.autoJbRetryConfirm)) {
    // close settings popup
    settingsPopup();
    jailbreak();
  }
}

// When jailbreak succeds, this will be stopped
function autoJailbreak() {
  if (sessionStorage.getItem('jailbreakNow') == "true") {
    jailbreak();
    return;
  }
  var checked = (localStorage.getItem('autoJbRetry') || 'true') === 'true'; // default to true if not set
  var sessionChecked = sessionStorage.getItem('autoJbRetry') == 'true';
  ui.autoJbRetry.checked = checked;
  // check if supported ps4
  if (window.ps4Fw < 6.70 || window.ps4Fw > 9.60 || !window.ps4Fw) return;

  // If auto jb is checked and previous jailbreak attempt was unsuccessful, retry jailbreak with a timer
  if (checked && sessionChecked) {
    autoJailbreakTimer();
  }
}

// localStorage retry value true but no sessionStorage value? use timer.
function autoJailbreakTimer() {
  var timer = 3; // Start a longer countdown immediately
  ui.stopAutoJbBtn.classList.toggle('hidden');
  autoJbInterval = setInterval(function () {
    ui.clickToStartText.textContent = window.lang.jailbreakCountDown.replace('{seconds}', timer);
    if (timer <= 0) {
      clearInterval(autoJbInterval);
      jailbreak();
    }
    timer--;
  }, 1000);
}

// Stop the auto jailbreak retry on button click
ui.stopAutoJbBtn.addEventListener('click', function () {
  clearInterval(autoJbInterval);
  sessionStorage.setItem('autoJbRetry', false);
  ui.stopAutoJbBtn.classList.toggle('hidden');
  ui.clickToStartText.textContent = window.lang.clickToStart;
});

/**
 * A Function to add an attempt and/or a success exploit and update the localStorage.
 * @param {boolean} attemp - Set to true if a jailbreak attempt was made.
 * @param {boolean} isSuccess - Set to true if the jailbreak was successful.
 * - Set both to false will only update the stats, useful when reloading the page.
 */
function updateJbStats(attemp, isSuccess) {
  var total = parseInt(localStorage.getItem('jbTotal') || 0);
  var success = parseInt(localStorage.getItem('jbSuccess') || 0);
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
    var rate = (success / total * 100).toFixed(0);
    rate = isNaN(rate) ? "0" : rate; // Handle NaN case when total is 0
    ui.successRateText.textContent = (window.lang.successRate || "Success Rate: ") + rate + "%" + " (".concat(success, "/").concat(total, ")");
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
  var toDestroy = ['settingsBtn', 'aboutBtn', 'initialScreen', 'chooseGoldHEN', 'psLogoContainer', 'clickToStartText', 'ps4FwStatus', 'stopAutoJbBtn', 'payloadsSection', 'payloadsList', 'payloadsSectionTitle', 'ps4IpInput', 'ps4FwSelect', 'scanGoldHENPayLoader', 'shutdownServerBtn', 'aboutPopup', 'settingsPopup', 'chooseFanThreshold', 'autoJbRetry', 'chooselang', 'toolsSection', 'toolsTab', 'linuxSection', 'linuxTab', 'advancedPayloadsSection', 'advancedPayloadsTab', 'advancedPayloadsContainer', 'advancedPayloadsInput', 'customPayloadsSection', 'customPayloadsTab', 'customPayloadInput', 'sendCustomPayloadBtn', 'exploitRunBtn', 'secondHostBtn', 'aboutPopupOverlay', 'settingsPopupOverlay', 'chooseFanThresholdOverlay', 'exploitChainTitle', 'secondLapse'];
  toDestroy.forEach(function (key) {
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
    location.replace('./exploit.html');
  }
  localStorage.setItem("bareboneJB", checked);
  user.bareboneJB = checked;
}

// save exploit chain method to localStorage
function secondLapse(value) {
  localStorage.setItem('secondLapse', value);
  user.secondLapse = value == "true";
}
// load option when loading the page
function loadSecondLapse() {
  var chainElement = document.getElementById('chooseExploitChain');
  if (user.ps4Fw >= 6.70 && user.ps4Fw <= 6.72) {
    if (chainElement) {
      chainElement.remove();
    }
    return;
  }

  // Protective check
  var radioElement = document.querySelector("input[name=\"exploitChain\"][value=\"".concat(user.secondLapse, "\"]"));
  if (radioElement) {
    radioElement.checked = true;
  }
}
