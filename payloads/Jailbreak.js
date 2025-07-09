export function GoldHEN() {
    window.payload_path = './payloads/GoldHEN/GoldHEN.bin';
    setTimeout(() => {
        sessionStorage.setItem('jbsuccess', 1);
        window.location.reload();
    }, 3000); // 3 seconds delay
}

export function HEN() {
    window.payload_path = `./payloads/HEN/HEN.bin`;
    setTimeout(() => {
        sessionStorage.setItem('jbsuccess', 1);
        window.location.reload();
    }, 3000); // 3 seconds delay
}