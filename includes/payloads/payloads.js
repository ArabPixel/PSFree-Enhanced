//------BIG THANKS TO SISTRO FOR THIS !!!!!--------
// @ts-nocheck
var needsGoldHEN = false;   // check if the payload requires GoldHEN's PayLoader because of .elf format
var getPayload = function(payload, onLoadEndCallback) {
  var req = new XMLHttpRequest();
  req.open('GET', payload);
  req.responseType = "arraybuffer";
  req.send();
  req.onload = function (event) {
      if (onLoadEndCallback) onLoadEndCallback(req, event);
  };
}

var sendPayload = function(url, data, onLoadEndCallback) {
  var req = new XMLHttpRequest();
  req.open("POST", url, true);
  req.send(data);

  req.onload = function (event) {
      if (onLoadEndCallback) onLoadEndCallback(req, event);
  };
}

//Load payloads with GoldHEN

function Loadpayloadlocal(PLfile, name){ //Loading Payload via Payload Param.
    var PS4IP = user.ip;
	// First do an initial check to see if the PayLoader server is running, ready or busy.
	var req = new XMLHttpRequest();
    var port = 9090;
    if (PS4IP == "127.0.0.1") {
      req.open("POST", `http://${PS4IP}:${port}/status`);
    } else {
      req.open("GET", `http://${PS4IP}:${port}/status`);
    }
		req.send();
		req.onerror = function(){
            if (user.ps4Fw >= 7.00 && user.ps4Fw <= 9.60){
                if (!isHttps()){
                    if (confirm(window.lang.disabledBinloader)){
                        Loadpayloadonline(PLfile);
                    }
                }else Loadpayloadonline(PLfile); 
            }else {
                alert(window.lang.binLoaderNotDetected);
                return;
            }
            
			//alert("Cannot Load Payload Because The BinLoader Server Is Not Running");//<<If server is not running, alert message.
            //ServerStatus("Cannot Load Payload Because The PayLoader Server Is Not Running");
			return;
		};
		req.onload = function(){
			var responseJson = JSON.parse(req.responseText);
			if (responseJson.status=="ready"){
		    getPayload(PLfile, function (req) {
				if ((req.status === 200 || req.status === 304) && req.response) {
				    //Sending bins via IP POST Method
                    sendPayload(`http://${PS4IP}:${port}`, req.response, function (req) {
                        if (req.status === 200) {
                            //alert("Payload sent !");
                            const msg = window.lang.payloadSentToPayLoader.replace("{payload}", name) + user.ip;
                            log(msg);
                        }else{
                            //alert('Payload not sent !');
                            const msg = window.lang.failedToSendToPayLoader.replace("{payload}", name) + user.ip;
                            log(msg);
                            setTimeout(() => {
                                Loadpayloadonline(PLfile);
                            }, 3000); // 3 seconds delay
                            return;
                        }
                    })
                }
			});
			} else {
				alert(window.lang.busyBinLoader);//<<If server is busy, alert message.
				return;
		  }
	  };
  }

//--------------------------------------------------

//------Payloads--------

// Load Payloads with exploit

function Loadpayloadonline(PLfile) {
    if (PLfile == undefined) {
        // run BinLoader
        sessionStorage.setItem('binloader', 1);

    // Check if Linux payload is selected
    }else if (needsGoldHEN){
        alert(window.lang.payloadOnlyWithGoldHEN);
        needsGoldHEN = false;
        return;

    }else {
        window.payload_path = PLfile;
    }
    import('../../src/alert.mjs');
}

// Linux payloads are in firmware groups and not for each
function getLinuxFolder() {
    const fwMap = {
        7.00: "fw700", 7.02: "fw700",
        9.00: "fw900",
        9.03: "fw903", 9.04: "fw903",
        9.50: "fw960", 9.51: "fw960", 9.60: "fw960",
        10.00: "fw1000", 10.01: "fw1000",
        10.50: "fw1050", 10.70: "fw1050", 10.71: "fw1050",
        11.00: "fw1100",
        11.02: "fw1102",
        11.50: "fw1150", 11.52: "fw1150",
        12.00: "fw1200", 12.02: "fw1200",
        12.50: "fw1250", 12.52: "fw1250",
        13.00: "fw1300", 13.02: "fw1302",
    };

    // If it's not found, it returns undefined
    return fwMap[Number(user.ps4Fw)] || undefined;
}
// Payloads

export function HEN(){
    Loadpayloadlocal("./includes/payloads/HEN/HEN.bin");
}

// Dumpers

export function load_AppDumper(name){
    Loadpayloadlocal("./includes/payloads/Bins/Dumper/ps4-app-dumper.bin", name);
}

export function load_KernelDumper(name){
    Loadpayloadlocal("./includes/payloads/Bins/Dumper/ps4-kernel-dumper.bin", name);
}


export function load_ModuleDumper(name){
    Loadpayloadlocal("./includes/payloads/Bins/Dumper/ps4-module-dumper.bin", name);
}

// Tools

export function load_BinLoader(name){
    if (user.ps4Fw >= 7.00 && user.ps4Fw <= 9.60){
        Loadpayloadonline(undefined);
    }else alert(window.lang.unsupportedFirmware + user.ps4Fw);
}

export function load_Elfldr(name){
    Loadpayloadlocal("./includes/payloads/Bins/Tools/elfldr.bin", name)
}

export function load_PS4Debug(name){
    if (user.ps4Fw <= 12.02){
        Loadpayloadlocal("./includes/payloads/Bins/Tools/ps4debug.bin", name);
    }else alert(window.lang.unsupportedFirmware + user.ps4Fw);
}

export function load_App2USB(name){
    Loadpayloadlocal("./includes/payloads/Bins/Tools/ps4-app2usb.bin", name);
}


export function load_BackupDB(name){
    Loadpayloadlocal("./includes/payloads/Bins/Tools/ps4-backup.bin", name);
}

export function load_RestoreDB(name){
    Loadpayloadlocal("./includes/payloads/Bins/Tools/ps4-restore.bin", name);
}

export function load_DisableASLR(name){
    Loadpayloadlocal("./includes/payloads/Bins/Tools/ps4-disable-aslr.bin", name);
}

export function load_DisableUpdates(name){
    Loadpayloadlocal("./includes/payloads/Bins/Tools/ps4-disable-updates.bin", name);
}

export function load_EnableUpdates(name){
    Loadpayloadlocal("./includes/payloads/Bins/Tools/ps4-enable-updates.bin", name);
}

export function load_ExitIDU(name){
    Loadpayloadlocal("./includes/payloads/Bins/Tools/ps4-exit-idu.bin", name);
}
  
export function load_FTP(name){
    Loadpayloadlocal("./includes/payloads/Bins/Tools/ps4-ftp.bin", name);
}
  
export function load_HistoryBlocker(name){
    Loadpayloadlocal("./includes/payloads/Bins/Tools/ps4-history-blocker.bin", name);
}
  
export function load_RIFRenamer(name){
    Loadpayloadlocal("./includes/payloads/Bins/Tools/ps4-rif-renamer.bin", name);
}
  
export function load_Orbis(name){
    if (user.ps4Fw != 5.05 || user.ps4Fw != 6.72 || user.ps4Fw != 7.02 || user.ps4Fw != 7.55 || user.ps4Fw != 9.00){
        alert(window.lang.unsupportedFirmware + user.ps4Fw);
    }else Loadpayloadlocal("./includes/payloads/Bins/Tools/Orbis-Toolbox-900.bin", name);
}

export function load_WebRTE(name){
    if (user.ps4Fw != 5.05 && user.ps4Fw != 6.72 && (user.ps4Fw < 7.00 || user.ps4Fw > 11.00)){
        //  5.05, 6.72 And 7.00 - 11.00
        alert(window.lang.unsupportedFirmware + user.ps4Fw);
    }else Loadpayloadlocal("./includes/payloads/Bins/Tools/WebRTE.bin", name);
}

export function load_PermanentUART(name){
    Loadpayloadlocal("./includes/payloads/Bins/Tools/ps4-permanent-uart.bin", name);
}

export function load_PUPDecrypt(name){
    Loadpayloadlocal("./includes/payloads/Bins/Tools/pup-decrypt.bin", name);
}

export function load_FanThreshold(name){
    const temp = sessionStorage.getItem('fanTemp');
    Loadpayloadlocal(`./includes/payloads/Bins/Tools/fan-thresholds/ps4-fan-threshold${temp}.bin`, name);
}

// Linux
export function load_Linux1(name){
    const linuxFwFolder = getLinuxFolder(user.ps4Fw);
    if (linuxFwFolder){
        var ps4Model = localStorage.getItem('ps4Model');
        var southbridge = localStorage.getItem('southbridge');
        Loadpayloadlocal("./includes/payloads/Linux/" + linuxFwFolder + "/payload-" + linuxFwFolder.replace("fw", "") + "-1gb" + (ps4Model == "pro" ? "-pro" : '') + (southbridge == "baikal" ? "-" + southbridge : "") + ".elf", name);
        needsGoldHEN = true;
    }else alert(window.lang.unsupportedFirmware + user.ps4Fw);
}

export function load_Linux2(name){
    const linuxFwFolder = getLinuxFolder(user.ps4Fw);
    if (linuxFwFolder){
        var ps4Model = localStorage.getItem('ps4Model');
        var southbridge = localStorage.getItem('southbridge');
        Loadpayloadlocal("./includes/payloads/Linux/" + linuxFwFolder + "/payload-" + linuxFwFolder.replace("fw", "") + "-2gb" + (ps4Model == "pro" ? "-pro" : '') + (southbridge == "baikal" ? "-" + southbridge : "") + ".elf", name);
        needsGoldHEN = true;
    }else alert(window.lang.unsupportedFirmware + user.ps4Fw);
}

export function load_Linux3(name){
    const linuxFwFolder = getLinuxFolder(user.ps4Fw);
    if (linuxFwFolder){
        var ps4Model = localStorage.getItem('ps4Model');
        var southbridge = localStorage.getItem('southbridge');
        Loadpayloadlocal("./includes/payloads/Linux/" + linuxFwFolder + "/payload-" + linuxFwFolder.replace("fw", "") + "-3gb" + (ps4Model == "pro" ? "-pro" : '') + (southbridge == "baikal" ? "-" + southbridge : "") + ".elf", name);
        needsGoldHEN = true;
    }else alert(window.lang.unsupportedFirmware + user.ps4Fw);
}

export function load_Linux4(name){
    const linuxFwFolder = getLinuxFolder(user.ps4Fw);
    if (linuxFwFolder){
        var ps4Model = localStorage.getItem('ps4Model');
        var southbridge = localStorage.getItem('southbridge');
        Loadpayloadlocal("./includes/payloads/Linux/" + linuxFwFolder + "/payload-" + linuxFwFolder.replace("fw", "") + "-4gb" + (ps4Model == "pro" ? "-pro" : '') + (southbridge == "baikal" ? "-" + southbridge : "") + ".elf", name);
        needsGoldHEN = true;
    }else alert(window.lang.unsupportedFirmware + user.ps4Fw);
}

export function load_npFakeSignin(name){
    Loadpayloadlocal("./includes/payloads/Bins/Tools/np-fake-signin-ps4.elf", name);
}

export function load_WebSrv(name){
    Loadpayloadlocal("./includes/payloads/Bins/Tools/ps4-websrv.bin", name);
}

// Custom uploaded Payload
export function custom(payloadFile){
    if (!payloadFile) {
        alert("Empty file");
        return;
    }
    Loadpayloadlocal(URL.createObjectURL(payloadFile), payloadFile.name);
    log(window.lang.customPayloadLoaded + payloadFile.name);
}
