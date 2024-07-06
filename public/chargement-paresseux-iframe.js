document.addEventListener("DOMContentLoaded", function() {
    const iframes = document.querySelectorAll("iframe[data-src]");

    const chargerIframeParesseux = (iframe) => {
        const rect = iframe.getBoundingClientRect();
        const hauteurFenetre = window.innerHeight || document.documentElement.clientHeight;

        if (rect.top <= hauteurFenetre) {
            iframe.src = iframe.getAttribute("data-src");
            iframe.removeAttribute("data-src");
        }
    };

    const auDéfilement = () => {
        iframes.forEach((iframe) => {
            if (iframe.getAttribute("data-src")) {
                chargerIframeParesseux(iframe);
            }
        });
    };

    window.addEventListener("scroll", auDéfilement);
    window.addEventListener("resize", auDéfilement);
    auDéfilement(); // Vérification initiale
});