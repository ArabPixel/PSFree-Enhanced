export function GoldHEN() {
    let goldHenVersion = localStorage.getItem('GHVer');
    switch (goldHenVersion){
        case "GHv2.4b18.9":
            window.payload_path = "./includes/payloads/GoldHEN/goldhen_v2.4b18.9.bin";
            break;
        case "GHv2.4b18.8":
            window.payload_path = "./includes/payloads/GoldHEN/goldhen_v2.4b18.8.bin";
            break;
        case "GHv2.4b18.7":
            window.payload_path = "./includes/payloads/GoldHEN/goldhen_v2.4b18.7.bin";
            break;
        case "GHv2.4b18.6":
            window.payload_path = "./includes/payloads/GoldHEN/goldhen_v2.4b18.6.bin";
            break;
        case "GHv2.4b18.5":
            window.payload_path = "./includes/payloads/GoldHEN/goldhen_v2.4b18.5.bin";
            break;
        default:
            window.payload_path = "./includes/payloads/GoldHEN/goldhen_v2.4b18.9.bin";
            break;
    }
}

export function HEN() {
    window.payload_path = './includes/payloads/HEN/HEN.bin';
}