//------BIG THANKS TO SISTRO FOR THIS !!!!!--------

var getPayload = function(payload, onLoadEndCallback) {
  var req = new XMLHttpRequest();
  req.open('GET', payload);
  req.send();
  req.responseType = "arraybuffer";
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
			//alert("Cannot Load Payload Because The BinLoader Server Is Not Running");//<<If server is not running, alert message.
            //ServerStatus("Cannot Load Payload Because The BinLoader Server Is Not Running");
            Loadpayloadonline(PLfile);
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
    Loadpayloadlocal("./includes/payloads/Bins/Dumper/appdumper.bin");
}

export function load_KernelDumper(){
    Loadpayloadlocal("./includes/payloads/Bins/Dumper/kerneldumper.bin");
}

export function load_VTXDumper(){
    Loadpayloadlocal("./includes/payloads/Bins/Dumper/ps4-dumper-vtx-900.bin");
}

export function load_ModuleDumper(){
    Loadpayloadlocal("./includes/payloads/Bins/Dumper/moduledumper.bin");

}


// Tools

export function load_BinLoader(){
    Loadpayloadonline(undefined);
}

export function load_PS4Debug(){
    Loadpayloadlocal("./includes/payloads/Bins/Tools/ps4debug.bin");
}

export function load_App2USB(){
    Loadpayloadlocal("./includes/payloads/Bins/Tools/app2usb.bin");
}


export function load_BackupDB(){
    Loadpayloadlocal("./includes/payloads/Bins/Tools/backupdb.bin");
}

export function load_RestoreDB(){
    Loadpayloadlocal("./includes/payloads/Bins/Tools/exitidu.bin");
}

export function load_DisableASLR(){
    Loadpayloadlocal("./includes/payloads/Bins/Tools/disableaslr.bin");
}

export function load_DisableUpdates(){
    Loadpayloadlocal("./includes/payloads/Bins/Tools/disableupdates.bin");
}

export function load_EnableUpdates(){
    Loadpayloadlocal("./includes/payloads/Bins/Tools/enbaleupdates.bin");
}

export function load_ExitIDU(){
    Loadpayloadlocal("./includes/payloads/Bins/Tools/exitidu.bin");
}
  
export function load_FTP(){
    Loadpayloadlocal(".includes/payloads//Bins/Tools/ftp.bin");
}
  
export function load_HistoryBlocker(){
    Loadpayloadlocal("./includes/payloads/Bins/Tools/historyblocker.bin");
}
  
export function load_RIFRenamer(){
    Loadpayloadlocal("./includes/payloads/Bins/Tools/rifrenamer.bin");
}
  
export function load_Orbis(){
    Loadpayloadlocal("./includes/payloads/Bins/Tools/Orbis-Toolbox-900.bin");
}

export function load_WebrRTE(){
    Loadpayloadlocal("./includes/payloads/Bins/Tools/WebRTE_900.bin");
}

export function load_ToDex(){
    Loadpayloadlocal("./includes/payloads/Bins/Tools/ToDex.bin");
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

export function load_KernelClock(){
    Loadpayloadlocal("./includes/payloads/Bins/Tools/kernel-clock.bin");
}

export function load_PermanentUART(){
    Loadpayloadlocal("./includes/payloads/Bins/Tools/permanent-uart.bin");
}

export function load_PUPDecrypt(){
    Loadpayloadlocal("./includes/payloads/Bins/Tools/pup-decrypt.bin");
}

// Linux

export function load_Linux(){
    Loadpayloadlocal("./includes/payloads/Bins/Linux/LinuxLoader-900.bin");
}

export function load_Linux2gb(){
    Loadpayloadlocal("./includes/payloads/Bins/Linux/LinuxLoader-900-2gb.bin");
}

export function load_Linux3gb(){
    Loadpayloadlocal("./includes/payloads/Bins/Linux/LinuxLoader-900-3gb.bin");
}

export function load_Linux4gb(){
    Loadpayloadlocal("./includes/payloads/Bins/Linux/LinuxLoader-900-4gb.bin");
}

export function load_Linux5gb(){
    Loadpayloadlocal("./includes/payloads/Bins/Linux/LinuxLoader-900-5gb.bin");
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

// AppCache

export function load_AppCache(){
    Loadpayloadlocal("./includes/payloads/Bins/Tools/appcache-install.bin");
}

// Testing tools
export function load_ps4debugTest() {
    Loadpayloadlocal("./testing/ps4debug_v1.1.19.bin");
}