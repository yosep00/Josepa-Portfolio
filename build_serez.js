const fs = require("fs");
const path = require("path");

const appJsPath = path.join(__dirname, "app.js");
let appJs = fs.readFileSync(appJsPath, "utf8");

const enReplacement = `htmlContent: \`
                    <div class="serez-section">
                        <h2 class="serez-title">Brand Style Guide</h2>
                        <p class="serez-desc">A comprehensive manual detailing the dark editorial aesthetic, typography, and visual language of the Serez brand.</p>
                        <iframe src="serez/style-guide.html?id=serez-iframe-style" id="serez-iframe-style" class="serez-iframe" scrolling="no" frameborder="0"></iframe>
                    </div>
                    <div class="serez-section" style="background:#05030a;">
                        <h2 class="serez-title">Landing Page Design</h2>
                        <p class="serez-desc">High-converting, non-linear fluid layout with parallax effects designed for the Masterclass.</p>
                        <iframe src="serez/index.html?id=serez-iframe-landing" id="serez-iframe-landing" class="serez-iframe" scrolling="no" frameborder="0"></iframe>
                    </div>
                    <div class="serez-section">
                        <h2 class="serez-title">Mini E-Book</h2>
                        <p class="serez-desc">A4 printable PDF layout maintaining full consistency with the established brand manual.</p>
                        <iframe src="serez/ebook.html?id=serez-iframe-ebook" id="serez-iframe-ebook" class="serez-iframe" scrolling="no" frameborder="0"></iframe>
                    </div>
                    <div class="serez-section" style="background:#05030a;">
                        <h2 class="serez-title">YouTube Thumbnail</h2>
                        <p class="serez-desc">Engaging and visually striking thumbnail designed to capture attention and reflect the brand's premium feel.</p>
                        <iframe src="serez/thumbnail-generator.html?id=serez-iframe-thumb" id="serez-iframe-thumb" class="serez-iframe" scrolling="no" frameborder="0"></iframe>
                    </div>
                \`
            },
            { category: "ui", id: "selist"`;

const esReplacement = `htmlContent: \`
                    <div class="serez-section">
                        <h2 class="serez-title">Manual de Línea Gráfica</h2>
                        <p class="serez-desc">Un manual completo que detalla la estética 'dark editorial', la tipografía y el lenguaje visual de la marca Serez.</p>
                        <iframe src="serez/style-guide.html?id=serez-iframe-style-es" id="serez-iframe-style-es" class="serez-iframe" scrolling="no" frameborder="0"></iframe>
                    </div>
                    <div class="serez-section" style="background:#05030a;">
                        <h2 class="serez-title">Diseño de Landing Page</h2>
                        <p class="serez-desc">Diseño fluido, no lineal y de alta conversión con efectos de paralaje diseñado para la Masterclass.</p>
                        <iframe src="serez/index.html?id=serez-iframe-landing-es" id="serez-iframe-landing-es" class="serez-iframe" scrolling="no" frameborder="0"></iframe>
                    </div>
                    <div class="serez-section">
                        <h2 class="serez-title">Mini E-Book</h2>
                        <p class="serez-desc">Diseño en formato PDF (A4) imprimible manteniendo consistencia total con el manual de marca establecido.</p>
                        <iframe src="serez/ebook.html?id=serez-iframe-ebook-es" id="serez-iframe-ebook-es" class="serez-iframe" scrolling="no" frameborder="0"></iframe>
                    </div>
                    <div class="serez-section" style="background:#05030a;">
                        <h2 class="serez-title">Miniatura para YouTube</h2>
                        <p class="serez-desc">Miniatura atractiva y visualmente impactante diseñada para captar la atención y reflejar la calidad premium de la marca.</p>
                        <iframe src="serez/thumbnail-generator.html?id=serez-iframe-thumb-es" id="serez-iframe-thumb-es" class="serez-iframe" scrolling="no" frameborder="0"></iframe>
                    </div>
                \`
            },
            { category: "ui", id: "selist"`;

const generalRegex = /htmlContent:\s*`[\s\S]*?`\s*\},\n\s*\{\s*category:\s*"ui",\s*id:\s*"selist"/g;

let matchCount = 0;
appJs = appJs.replace(generalRegex, (match) => {
    matchCount++;
    if (matchCount === 1) return enReplacement;
    if (matchCount === 2) return esReplacement;
    return match;
});

// Add message listener to app.js
if (!appJs.includes("resize-iframe")) {
    appJs += `
// --- Iframe Communication for Serez HTML Native ---
window.addEventListener("message", (e) => {
    if (e.data.type === "resize-iframe") {
        const iframe = document.getElementById(e.data.id);
        if (iframe) {
            iframe.style.height = e.data.height + "px";
        }
    }
});

document.addEventListener('DOMContentLoaded', () => {
    const modalOverlayElement = document.getElementById("modal-overlay");
    if (modalOverlayElement) {
        modalOverlayElement.addEventListener("scroll", () => {
            const scrollY = modalOverlayElement.scrollTop;
            document.querySelectorAll(".serez-iframe").forEach(iframe => {
                if (iframe.contentWindow) {
                    iframe.contentWindow.postMessage({ type: "parent-scroll", scrollY: scrollY, offsetTop: iframe.offsetTop }, "*");
                }
            });
        });
    }
});
`;
}

fs.writeFileSync(appJsPath, appJs);

// Modify serez/script.js
const scriptJsPath = path.join(__dirname, "serez", "script.js");
let scriptJs = fs.readFileSync(scriptJsPath, "utf8");

if (!scriptJs.includes("resize-iframe")) {
    scriptJs += `
// --- Iframe Communication ---
window.addEventListener("load", () => {
    const urlParams = new URLSearchParams(window.location.search);
    const myId = urlParams.get("id");
    
    const sendHeight = () => {
        if (myId && window.parent) {
            window.parent.postMessage({
                type: "resize-iframe",
                id: myId,
                height: document.documentElement.scrollHeight
            }, "*");
        }
    };
    
    sendHeight();
    setTimeout(sendHeight, 500);
    setTimeout(sendHeight, 1500);
    
    if (window.ResizeObserver) {
        new ResizeObserver(sendHeight).observe(document.body);
    }
});

// Parallax sync via parent message
window.addEventListener("message", (e) => {
    if (e.data.type === "parent-scroll") {
        let scrolled = e.data.scrollY - e.data.offsetTop;
        if (scrolled < 0) scrolled = 0;
        
        const parallaxElements = document.querySelectorAll(".parallax-img .cover-img, .banner-img");
        parallaxElements.forEach(el => {
            el.style.transform = \`translateY(\${scrolled * 0.15}px) scale(1.05)\`;
        });
        
        document.querySelectorAll('.animate-on-scroll:not(.is-visible)').forEach(el => {
            const rect = el.getBoundingClientRect();
            const parentWindowHeight = window.parent.innerHeight || 800;
            if (rect.top < e.data.scrollY + parentWindowHeight * 0.85 - e.data.offsetTop) {
                el.classList.add('is-visible');
            }
        });
    }
});
`;
    fs.writeFileSync(scriptJsPath, scriptJs);
}

// Add CSS to style.css for .serez-iframe
const styleCssPath = path.join(__dirname, "style.css");
let styleCss = fs.readFileSync(styleCssPath, "utf8");
if (!styleCss.includes(".serez-iframe")) {
    styleCss += `
.serez-iframe {
    width: 100%;
    border: none;
    overflow: hidden;
    margin: 0;
    padding: 0;
    display: block;
}
`;
    fs.writeFileSync(styleCssPath, styleCss);
}

console.log("Files updated successfully");
