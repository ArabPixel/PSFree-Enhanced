function CheckFW() {
    const userAgent = navigator.userAgent;
    const ps4Regex = /PlayStation 4/;
    var fwVersion = navigator.userAgent.substring(navigator.userAgent.indexOf('5.0 (') + 19, navigator.userAgent.indexOf(') Apple')).replace("layStation 4/", "");
    var elementsToHide = [
        'ps-logo-container', 'choosejb-initial', 'exploit-main-screen', 'scrollDown',
        'click-to-start-text', 'chooseGoldHEN', 'advancedPayloads', 'chooseExploitChain'
    ];

    if (ps4Regex.test(userAgent)) {
        if (fwVersion >= 6.70 && fwVersion <= 9.60) {
            ui.ps4FwStatus.style.color = 'green';

            // Highlight firmware in about popup
            var fwElement = "fw" + fwVersion.replace('.', '');
            var el = document.getElementById(fwElement);
            if (el) el.classList.add('fwSelected');

            // show "load userland exploit only on jailbreak" option
            if (fwVersion >= 6.70 && fwVersion <= 6.72)
                document.getElementById("userlandOnlyOnJB67x").classList.toggle('hidden');
        } else {
            ui.ps4FwStatus.style.color = 'orange';
            document.getElementById('layouts').style.display = "none";
            document.getElementById('theme').style.display = "none";
            if (isHttps()) {
                ui.secondHostBtn[0].style.display = "block";
                terminateCache(); // Dont cache in case no webkit and is https
            } else {
                // modify elements inside elementsToHide for unsupported ps4 firmware to load using GoldHEN's PayLoader
                const toRemove = ['exploit-main-screen', 'scrollDown', 'advancedPayloads'];
                elementsToHide = elementsToHide.filter(e => !toRemove.includes(e));
                elementsToHide.push('initial-screen', 'exploit-status-panel', 'henSelection', 'autoJbContainer', 'successRate', 'bareboneJBOption', 'chooseExploitChain');
                if (fwVersion < 6.70) elementsToHide.push('layouts', 'theme'); // Incompatible with Compact design..
                document.getElementById('exploitContainer').style.display = "block";

                // Sizing the payload's section
                ui.payloadsSection.style.margin = "auto";
                document.getElementById('header2').classList.remove('hidden');
            }

            elementsToHide.forEach(id => {
                const el = document.getElementById(id);
                if (el) el.style.display = 'none';
            });
        }
        window.ps4Fw = fwVersion;
        user.ip = "127.0.0.1"
        user.ps4Fw = fwVersion;
    } else {
        // Not a PS4
        user.platform = 'Unknown platform';
        if (/Android/.test(userAgent)) user.platform = 'Android';
        else if (/iPhone|iPad|iPod/.test(userAgent)) user.platform = 'iOS';
        else if (/Macintosh/.test(userAgent)) user.platform = 'MacOS';
        else if (/Windows/.test(userAgent)) user.platform = 'Windows';
        else if (/Linux/.test(userAgent)) user.platform = 'Linux';

        // For user selected firmware
        if (user.ps4Fw) ui.ps4FwSelect.value = user.ps4Fw;
        // Show only if on a local server
        if ((isLocalIP(window.location.hostname) || window.location.hostname == "localhost") && !devMode) {
            // Show IP input and firmware selector for local server users on smart devices
            ui.ps4IpInput.classList.remove('hidden');
            ui.ps4FwSelect.classList.remove('hidden');
            ui.scanGoldHENPayLoader.classList.remove('hidden');
            ui.shutdownServerBtn.classList.remove('hidden');
            document.querySelector('.customPayloadsTab').classList.remove('hidden');
            ui.ps4IpInput.value = user.ip;

            const toRemove = ['exploit-main-screen', 'scrollDown', 'advancedPayloads', 'custom-tab'];
            elementsToHide = elementsToHide.filter(e => !toRemove.includes(e));
            elementsToHide.push('initial-screen', 'henSelection', 'autoJbContainer', 'successRate', 'bareboneJBOption', 'chooseExploitChain', 'layouts', 'theme');

            // Sizing the payload's section
            // Full screen for phones, centered for desktop
            if (user.platform == "Android" || user.platform == "iOS") {
                // hide console
                elementsToHide.push('exploit-status-panel');
                document.getElementById('exploitContainer').style.display = "block";
                ui.exploitScreen.style.padding = "0";
                document.getElementById('layouts').style.display = "none";
                document.getElementById('theme').style.display = "none";
            }
            ui.payloadsSection.style.width = "100%";
            ui.payloadsSection.style.margin = "auto";
            // Moving the settings icon to a better place
            document.getElementById('header2').classList.remove('hidden', 'left-6');
            document.getElementById('header2').classList.add('flex', 'inherit');
            document.getElementById('header2').querySelectorAll('button').forEach((item) => item.classList.add('border', 'border-white/20', 'rounded-xl'))
        }else{
            elementsToHide.push('theme', 'layout');
        }
        ui.ps4FwStatus.style.color = 'red';
        document.getElementById('PS4FW').style.width = "100%";
        document.getElementById('PS4FW').style.textAlign = "center";

        // Hide elements for non supported devices unless in dev mode
        if (!devMode) {
            elementsToHide.forEach(id => {
                const el = document.getElementById(id);
                if (el) el.style.display = 'none';
            });
        }
    }
}