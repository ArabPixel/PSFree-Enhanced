//------BIG THANKS TO SISTRO FOR THIS !!!!!--------

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

function Loadpayloadlocal(PLfile){ //Loading Payload via Payload Param.
    var PS4IP = "127.0.0.1";

	// First do an initial check to see if the BinLoader server is running, ready or busy.
	var req = new XMLHttpRequest();
    if (PS4IP == "127.0.0.1") {
      req.open("POST", `http://${PS4IP}:9090/status`);
    } else {
      req.open("GET", `http://${PS4IP}:9090/status`);
    }
		req.send();
		req.onerror = function(){
            if (window.ps4Fw >= 7.00 && window.ps4Fw <= 9.60){
                if (!isHttps()){
                    if (confirm("Binloader is not running, load payload using the exploit instead?")){
                        Loadpayloadonline(PLfile);
                    }
                }else Loadpayloadonline(PLfile); 
            }else {
                alert("GoldHEN's BinLoader is not running, enable it first!");
                return;
            }
            
			//alert("Cannot Load Payload Because The BinLoader Server Is Not Running");//<<If server is not running, alert message.
            //ServerStatus("Cannot Load Payload Because The BinLoader Server Is Not Running");
			return;
		};
		req.onload = function(){
			var responseJson = JSON.parse(req.responseText);
			if (responseJson.status=="ready"){
		    getPayload(PLfile, function (req) {
				if ((req.status === 200 || req.status === 304) && req.response) {
				    //Sending bins via IP POST Method
                    sendPayload(`http://${PS4IP}:9090`, req.response, function (req) {
                        if (req.status === 200) {
                            //alert("Payload sent !");
                        }else{
                            //alert('Payload not sent !');
                            setTimeout(() => {
                                Loadpayloadonline(PLfile);
                            }, 3000); // 3 seconds delay
                            return;
                        }
                    })
                }
			});
			} else {
				alert("Cannot Load Payload Because The BinLoader Server Is Busy");//<<If server is busy, alert message.
				return;
		  }
	  };
  }

//--------------------------------------------------

//------Payloads--------

// Load Payloads with exploit

function Loadpayloadonline(PLfile) {
    if (PLfile == undefined){
        sessionStorage.setItem('binloader', 1);
    }else window.payload_path = PLfile;
    import('../../src/alert.mjs');
}

// Payloads

export function HEN(){
    Loadpayloadlocal("./includes/payloads/HEN/HEN.bin");
}

// Dumpers

export function load_AppDumper(){
    Loadpayloadlocal("./includes/payloads/Bins/Dumper/ps4-app-dumper.bin");
}

export function load_KernelDumper(){
    Loadpayloadlocal("./includes/payloads/Bins/Dumper/ps4-kernel-dumper.bin");
}

export function load_VTXDumper(){
    if (window.ps4Fw != 9.00){
        alert(`Unsupported firmware ${window.ps4Fw}`);
    }else Loadpayloadlocal("./includes/payloads/Bins/Dumper/ps4-dumper-vtx-900.bin");
}

export function load_ModuleDumper(){
    Loadpayloadlocal("./includes/payloads/Bins/Dumper/ps4-module-dumper.bin");
}


// Tools

export function load_BinLoader(){
    if (window.ps4Fw >= 7.00 && window.ps4Fw <= 9.60){
        Loadpayloadonline(undefined);
    }else alert(`Unsupported firmware ${window.ps4Fw}`);
}

export function load_PS4Debug(){
    Loadpayloadlocal("./includes/payloads/Bins/Tools/ps4debug.bin");
}

export function load_App2USB(){
    Loadpayloadlocal("./includes/payloads/Bins/Tools/ps4-app2usb.bin");
}


export function load_BackupDB(){
    Loadpayloadlocal("./includes/payloads/Bins/Tools/ps4-backup.bin");
}

export function load_RestoreDB(){
    Loadpayloadlocal("./includes/payloads/Bins/Tools/ps4-restore.bin");
}

export function load_DisableASLR(){
    Loadpayloadlocal("./includes/payloads/Bins/Tools/ps4-disable-aslr.bin");
}

export function load_DisableUpdates(){
    Loadpayloadlocal("./includes/payloads/Bins/Tools/ps4-disable-updates.bin");
}

export function load_EnableUpdates(){
    Loadpayloadlocal("./includes/payloads/Bins/Tools/ps4-enable-updates.bin");
}

export function load_ExitIDU(){
    Loadpayloadlocal("./includes/payloads/Bins/Tools/ps4-exit-idu.bin");
}
  
export function load_FTP(){
    Loadpayloadlocal("./includes/payloads//Bins/Tools/ps4-ftp.bin");
}
  
export function load_HistoryBlocker(){
    Loadpayloadlocal("./includes/payloads/Bins/Tools/ps4-history-blocker.bin");
}
  
export function load_RIFRenamer(){
    Loadpayloadlocal("./includes/payloads/Bins/Tools/ps4-rif-renamer.bin");
}
  
export function load_Orbis(){
    if (window.ps4Fw != 5.05 || window.ps4Fw != 6.72 || window.ps4Fw != 7.02 || window.ps4Fw != 7.55 || window.ps4Fw != 9.00){
        alert(`Unsupported firmware ${window.ps4Fw}`);
    }else Loadpayloadlocal("./includes/payloads/Bins/Tools/Orbis-Toolbox-900.bin");
}

export function load_WebrRTE(){
    if (window.ps4Fw != 5.05 || window.ps4Fw != 6.72 || (window.ps4Fw >= 7.00 && window.ps4Fw <= 11.00)){
        //  5.05, 6.72 And 7.00 - 11.00
        alert(`Unsupported firmware ${window.ps4Fw}`);
    }else Loadpayloadlocal("./includes/payloads/Bins/Tools/WebRTE_900.bin");
}

export function load_ToDex(){
    Loadpayloadlocal("./includes/payloads/Bins/Tools/ps4-todex.bin");
}

export function load_ToDev(){
    Loadpayloadlocal("./includes/payloads/Bins/Tools/ToDev.bin");
}

export function load_ToKratos(){
    Loadpayloadlocal("./includes/payloads/Bins/Tools/ToKratos.bin");
}

export function load_ToCex(){
    Loadpayloadlocal("./includes/payloads/Bins/Tools/ToCex.bin");
}

export function load_PermanentUART(){
    Loadpayloadlocal("./includes/payloads/Bins/Tools/ps4-permanent-uart.bin");
}

export function load_PUPDecrypt(){
    Loadpayloadlocal("./includes/payloads/Bins/Tools/pup-decrypt.bin");
}

export function load_FanThreshold(){
    Loadpayloadlocal("./includes/payloads/Bins/Tools/ps4-fan-threshold.bin");
}

export function load_EnableBrowser(){
    Loadpayloadlocal("./includes/payloads/Bins/Tools/ps4-enable-browser.bin");
}

// Linux

export function load_Linux(){
    if (window.ps4Fw != 9.00){
        alert(`Unsupported firmware ${window.ps4Fw}`);
    }else Loadpayloadlocal("./includes/payloads/Bins/Linux/LinuxLoader-900.bin");
}

export function load_Linux2gb(){
    if (window.ps4Fw != 9.00){
        alert(`Unsupported firmware ${window.ps4Fw}`);
    }else Loadpayloadlocal("./includes/payloads/Bins/Linux/LinuxLoader-900-2gb.bin");
}

export function load_Linux3gb(){
    if (window.ps4Fw != 9.00){
        alert(`Unsupported firmware ${window.ps4Fw}`);
    }else Loadpayloadlocal("./includes/payloads/Bins/Linux/LinuxLoader-900-3gb.bin");
}

export function load_Linux4gb(){
    if (window.ps4Fw != 9.00){
        alert(`Unsupported firmware ${window.ps4Fw}`);
    }else Loadpayloadlocal("./includes/payloads/Bins/Linux/LinuxLoader-900-4gb.bin");
}

export function load_Linux5gb(){
    if (window.ps4Fw != 9.00){
        alert(`Unsupported firmware ${window.ps4Fw}`);
    }else Loadpayloadlocal("./includes/payloads/Bins/Linux/LinuxLoader-900-5gb.bin");
}


// Mod Menu

// GTA

export function load_GTAArbic127(){
    Loadpayloadlocal("./includes/payloads/Bins/GTA/ArabicGuy-1.0-1.27-rfoodxmodz.bin");
}

export function load_GTAArbic132(){
    Loadpayloadlocal("./includes/payloads/Bins/GTA/ArabicGuy-1.0-1.32-rfoodxmodz.bin");
}

export function load_GTAArbic133(){
    Loadpayloadlocal("./includes/payloads/Bins/GTA/ArabicGuy-1.0-1.33-rfoodxmodz.bin");
}


export function load_GTABQ133(){
    Loadpayloadlocal("./includes/payloads/Bins/GTA/BeefQueefMod-1.33.bin");
}

export function load_GTABQ134(){
    Loadpayloadlocal("./includes/payloads/Bins/GTA/BeefQueefMod-1.34.bin");
}

export function load_GTABQ138(){
    Loadpayloadlocal("./includes/payloads/Bins/GTA/BeefQueefMod-1.38.bin");
}

export function load_GTAWM132(){
    Loadpayloadlocal("./includes/payloads/Bins/GTA/WildeModz-1.32.bin");
}

export function load_GTAWM134(){
    Loadpayloadlocal("./includes/payloads/Bins/GTA/WildeModz-1.34.bin");
}

export function load_GTAWM138(){
    Loadpayloadlocal("./includes/payloads/Bins/GTA/WildeModz-1.38.bin");
}

// RDR2

export function load_Oysters100(){
    Loadpayloadlocal("./includes/payloads/Bins/RDR2/OystersMenu-1.00-FREE.bin");
}


export function load_Oysters113(){
    Loadpayloadlocal("./includes/payloads/Bins/RDR2/OystersMenu-1.13-FREE.bin");
}

export function load_Oysters119(){
    Loadpayloadlocal("./includes/payloads/Bins/RDR2/OystersMenu-1.19-FREE.bin");
}

export function load_Oysters124(){
    Loadpayloadlocal("./includes/payloads/Bins/RDR2/OystersMenu-1.24-FREE.bin");
}

export function load_Oysters129(){
    Loadpayloadlocal("./includes/payloads/Bins/RDR2/OystersMenu-1.29-FREE.bin");
}