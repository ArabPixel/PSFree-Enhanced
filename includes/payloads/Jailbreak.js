export function GoldHEN() {
    let goldHenVersion = localStorage.getItem('GHVer');
    switch (goldHenVersion){
        case "GHv2.4b18.7":
            window.payload_path = "./includes/payloads/GoldHEN/goldhen_v2.4b18.7.bin";
            break;
        case "GHv2.4b18.6":
            window.payload_path = "./includes/payloads/GoldHEN/goldhen_v2.4b18.6.bin";
            break;
        case "GHv2.4b18.5":
            window.payload_path = "./includes/payloads/GoldHEN/goldhen_v2.4b18.5.bin";
            break;
        case "GHv2.4b18.4":
            window.payload_path = "./includes/payloads/GoldHEN/goldhen_v2.4b18.4.bin";
            break;
        case "GHv2.4b18.2":
            window.payload_path = "./includes/payloads/GoldHEN/goldhen_v2.4b18.2.bin";
            break;
            case "GHv2.4b18":
            window.payload_path = "./includes/payloads/GoldHEN/goldhen_v2.4b18.bin";
            break;
        case "GHv2.3Fw755":
            window.payload_path = "./includes/payloads/GoldHEN/goldhen_v2.3_755L.bin";
            break;
        case "GHv2.3Fw702":
            window.payload_path = "./includes/payloads/GoldHEN/goldhen_v2.3_702L.bin";
            break;
        default:
            window.payload_path = "./includes/payloads/GoldHEN/goldhen_v2.4b18.7.bin";
            break;
    }
}

export function HEN() {
    window.payload_path = './includes/payloads/HEN/HEN.bin';
}