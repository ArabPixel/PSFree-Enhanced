// Define the available language files
const languageFiles = ["en", "fa", "ar", "ru"];

var user = user || {};
user.currentLanguage = sessionStorage.getItem("language") || "en";

async function initLanguageUI() {
    const list = document.getElementById("language-list");
    if (!list) return;

    list.innerHTML = ""; // clear

    for (const code of languageFiles) {
        try {
            const lang = await loadLanguageFile(code);

            // create radio
            const label = document.createElement("label");
            label.className = "flex items-center text-white/80";

            const input = document.createElement("input");
            input.type = "radio";
            input.name = "language";
            input.value = code;
            input.className = "ml-2";
            input.checked = (code === user.currentLanguage);

            input.onchange = () => setLanguage(code);

            const p = document.createElement("p");
            p.textContent = lang.langname;

            label.appendChild(input);
            label.appendChild(p);

            list.appendChild(label);
        } catch (e) {
            console.warn("Failed to load language", code, e);
        }
    }

    // Add reload notice button
    let reloadBtn = document.getElementById("reload-language-btn");
    if (!reloadBtn) {
        reloadBtn = document.createElement("button");
        reloadBtn.id = "reload-language-btn";
        reloadBtn.className = "mt-4 flex items-center justify-center w-10 h-10 bg-blue-600 rounded hover:bg-blue-700";
        reloadBtn.title = "Changing languages requires a reload";

        reloadBtn.innerHTML = `
            <svg width="24" height="24" viewBox="0 0 60.369 60.369" xmlns="http://www.w3.org/2000/svg">
                <g transform="translate(-446.571 -211.615)">
                    <path d="M504.547,265.443h-9.019a30.964,30.964,0,0,0-29.042-52.733,1.5,1.5,0,1,0,.792,2.894,27.955,27.955,0,0,1,25.512,48.253l0-10.169h-.011a1.493,1.493,0,0,0-2.985,0h0v13.255a1.5,1.5,0,0,0,1.5,1.5h13.256a1.5,1.5,0,1,0,0-3Z" fill="#fff"/>
                    <path d="M485.389,267.995a27.956,27.956,0,0,1-25.561-48.213l0,10.2h.015a1.491,1.491,0,0,0,2.978,0h.007V216.791a1.484,1.484,0,0,0-1.189-1.532l-.018-.005a1.533,1.533,0,0,0-.223-.022c-.024,0-.046-.007-.07-.007H448.071a1.5,1.5,0,0,0,0,3h8.995a30.963,30.963,0,0,0,29.115,52.664,1.5,1.5,0,0,0-.792-2.894Z" fill="#fff"/>
                </g>
            </svg>
        `;

        reloadBtn.onclick = () => location.reload();
        list.parentNode.appendChild(reloadBtn);
    }
}

// Load a language JS file dynamically
function loadLanguageFile(code) {
    return new Promise((resolve, reject) => {
        const existing = document.getElementById("langScript_" + code);
        if (existing) {
            resolve(window.lang);
            return;
        }

        const script = document.createElement("script");
        script.src = `./includes/js/languages/${code}.js`;
        script.id = "langScript_" + code;

        script.onload = () => resolve(window.lang);
        script.onerror = () => reject(new Error("Failed to load " + code));

        document.head.appendChild(script);
    });
}

function setLanguage(code) {
    user.currentLanguage = code;
    sessionStorage.setItem("language", code);

    // remove old lang script
    document.querySelectorAll('script[id^="langScript_"]').forEach(s => s.remove());

    // load new language
    loadLanguageFile(code).then(lang => {
        window.lang = lang;
        updateTextWithLang();

        // start pulsing reload button
        const reloadBtn = document.getElementById("reload-language-btn");
        if (reloadBtn) reloadBtn.classList.add("pulse-lang-infinite");
    });
}

// Optional: update UI texts after switching language
function updateTextWithLang() {
    if (!window.lang) return;
    const clickText = document.getElementById("click-to-start-text");
    if (clickText) clickText.textContent = window.lang.clickToStart || clickText.textContent;

    const payloadsTitle = document.getElementById("payloads-section-title");
    if (payloadsTitle) payloadsTitle.textContent = window.lang.payloadsHeader || payloadsTitle.textContent;

    const ghVerTitle = document.getElementById("ghVer");
    if (ghVerTitle) ghVerTitle.textContent = window.lang.ghVer || ghVerTitle.textContent;

    const languageHeader = document.querySelector("#chooselang h3");
    if (languageHeader) languageHeader.textContent = window.lang.languageHeader || languageHeader.textContent;
}

// Init after DOM ready
document.addEventListener("DOMContentLoaded", initLanguageUI);

// Add CSS for pulsing animation
const style = document.createElement("style");
style.textContent = `
    @keyframes pulseLangInfinite {
        0% { background-color: #facc15; } /* yellow */
        50% { background-color: #3b82f6; } /* blue */
        100% { background-color: #facc15; }
    }
    .pulse-lang-infinite {
        animation: pulseLangInfinite 1.5s ease-in-out infinite;
    }
`;
document.head.appendChild(style);
