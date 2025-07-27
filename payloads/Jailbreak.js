let jailbreakVersion =  localStorage.getItem('jailbreakVersion') || 'testGoldHEN';
export function GoldHEN() {
    switch (jailbreakVersion) {
    case 'testGoldHEN':
        window.payload_path = './payloads/testing/goldhen_2.4b18.5_allfw_test.bin';
        break;
        case '2.4b18.4':
        window.payload_path = './payloads/GoldHEN/GoldHEN.bin';
        case 'v2.3/702':
        window.payload_path = './payloads/GoldHEN/goldhen_2.3_702L.bin';
        break;
        case 'v2.3/55':
        window.payload_path = './payloads/GoldHEN/goldhen_2.3_755L.bin';
        break;
    default:
        window.payload_path = './payloads/testing/goldhen_2.4b18.5_allfw_test.bin';
        break;
    }
    // timeout is moved lapse.mjs to execute after exploit success
}

export function HEN() {
    window.payload_path = './payloads/HEN/HEN.bin';
    // timeout is moved lapse.mjs to execute after exploit success
}