export function GoldHEN(ps4fw) {
    if (ps4fw >= 7.00 && ps4fw <= 7.02) {
        window.payload_path = './payloads/GoldHEN/goldhen_2.3_702L.bin';
    } else if (ps4fw >= 7.50 && ps4fw <= 7.55) {
        window.payload_path = './payloads/GoldHEN/goldhen_2.3_755L.bin';
    } else {
        window.payload_path = './payloads/GoldHEN/GoldHEN.bin';
    }        
    // timeout is moved to lapse.mjs to execute after exploit success
}

export function testGoldHEN() {
    window.payload_path = './payloads/testing/goldhen_2.4b18.5_allfw_test.bin';
}  

export function HEN() {
    window.payload_path = './payloads/HEN/HEN.bin';
    // timeout is moved to lapse.mjs to execute after exploit success
}