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
  lapseChain: localStorage.getItem('lapseChain') === "true",
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
  exploitChainTitle: document.getElementById('exploitChainTitle'),
  userlandOnlyOnJB67x: document.getElementById('userlandOnlyOnJB67xInput'),
  // Settings elements
  langRadios: document.querySelectorAll('#chooselang input[name="language"]')
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
            // set userlandOnlyOnJB67x to false, on reload to load userland exploit
            localStorage.setItem('userlandOnlyOnJB67x', "false");
            // set jailbreakNow to true to automatically launch jailbreak function
            sessionStorage.setItem("jailbreakNow", 'true');
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
          if (!user.lapseChain) {
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
          log("An error occured during Bad Hoist Entrypoint\nRetrying..", "orange");
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
  if (sessionStorage.getItem('jailbreakNow') == "true" && user.ps4Fw >= 6.70 && user.ps4Fw <= 6.72) {
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
} // Apply lanuage after loading the language file
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
function initLanguage() {
  return _initLanguage.apply(this, arguments);
} // Load settings
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
function loadSettings() {
  return _loadSettings.apply(this, arguments);
}
function _loadSettings() {
  _loadSettings = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee7() {
    var _t6;
    return _regenerator().w(function (_context7) {
      while (1) switch (_context7.p = _context7.n) {
        case 0:
          _context7.p = 0;
          CheckFW();
          loadJbFlavor();
          _context7.n = 1;
          return initLanguage();
        case 1:
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
          _context7.n = 3;
          break;
        case 2:
          _context7.p = 2;
          _t6 = _context7.v;
          alert("Error in loadSettings: " + _t6.message);
        case 3:
          return _context7.a(2);
      }
    }, _callee7, null, [[0, 2]]);
  }));
  return _loadSettings.apply(this, arguments);
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
  document.title = (window.lang && window.lang.cache || "Caching ") + " " + Percent + "%";
}
function DisplayCacheProgress() {
  setTimeout(function () {
    document.title = "\u2713";
  }, 1000);
  setTimeout(function () {
    // location.reload();
    document.title = window.lang && window.lang.title || "PSFree Enhanced";
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
  localStorage.setItem("advancedPayloads", inputState);
  if (inputState == true) {
    // Its true, show tab and render payloads
    ui.advancedPayloadsContainer.classList.remove('hidden');
    renderPayloads(payloadsList.filter(function (p) {
      return p.category === 'advanced';
    }));
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
    renderPayloads(payloadsList.filter(function (p) {
      return p.category === 'advanced';
    }));
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
  var toDestroy = ['settingsBtn', 'aboutBtn', 'initialScreen', 'chooseGoldHEN', 'psLogoContainer', 'clickToStartText', 'ps4FwStatus', 'stopAutoJbBtn', 'payloadsSection', 'payloadsList', 'payloadsSectionTitle', 'ps4IpInput', 'ps4FwSelect', 'scanGoldHENPayLoader', 'shutdownServerBtn', 'aboutPopup', 'settingsPopup', 'chooseFanThreshold', 'autoJbRetry', 'chooselang', 'toolsSection', 'toolsTab', 'linuxSection', 'linuxTab', 'advancedPayloadsSection', 'advancedPayloadsTab', 'advancedPayloadsContainer', 'advancedPayloadsInput', 'customPayloadsSection', 'customPayloadsTab', 'customPayloadInput', 'sendCustomPayloadBtn', 'exploitRunBtn', 'secondHostBtn', 'aboutPopupOverlay', 'settingsPopupOverlay', 'chooseFanThresholdOverlay', 'exploitChainTitle'];
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
  var radioElement = document.querySelector("input[name=\"exploitChain\"][value=\"".concat(user.lapseChain, "\"]"));
  if (radioElement) {
    radioElement.checked = true;
  }
}
