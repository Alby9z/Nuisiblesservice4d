document.addEventListener("DOMContentLoaded", function() {
    let e = document.querySelector(".btn-burger"),
        t = document.querySelector(".sidebar-burger"),
        n = document.querySelector(".feat-btn"),
        l = document.querySelector(".serv-btn"),
        i = document.querySelector(".feat-show"),
        s = document.querySelector(".serv-show");
    if (e && t) {
        e.addEventListener("click", function() {
            e.classList.toggle("click");
            t.classList.toggle("show");
        });
    }
    if (n && i) {
        n.addEventListener("click", function() {
            i.classList.toggle("show");
            let icon = n.querySelector("ion-icon");
            if (icon) icon.classList.toggle("rotate");
        });
    }
    if (l && s) {
        l.addEventListener("click", function() {
            s.classList.toggle("show1");
            let icon = l.querySelector("ion-icon");
            if (icon) icon.classList.toggle("rotate");
        });
    }
    let o = document.querySelectorAll(".li-sous-menu a");
    o.forEach(n => {
        n.addEventListener("click", function() {
            t.classList.remove("show");
            e.classList.remove("click");
        });
    });
});
document.addEventListener("DOMContentLoaded", function() {
    let e = document.querySelector(".selected-option"),
        t = document.querySelector(".options-list"),
        n = document.querySelector(".selected-option .selected-content"),
        l = document.querySelector('input[name="Nuisibles"]'),
        i = document.getElementById("search-form");

    if (t) t.style.display = "none";
    if (e) {
        e.addEventListener("click", function() {
            if (t) {
                if (t.style.display === "none" || t.style.display === "") {
                    t.style.display = "block";
                    t.classList.add("open");
                } else {
                    t.style.display = "none";
                    t.classList.remove("open");
                }
            }
        });
    }
    document.querySelectorAll(".options-list li").forEach(function(e) {
        e.addEventListener("click", function() {
            let i = e.textContent.trim(),
                s = e.getAttribute("data-icon"),
                o = e.getAttribute("data-value");
            if (n && l) {
                n.innerHTML = `<img class="selected-icon" src="${s}" alt="${i}"> ${i}`;
                l.value = o;
                t.style.display = "none";
                t.classList.remove("open");
            }
        });
    });
    document.addEventListener("click", function(n) {
        if (e && !e.contains(n.target) && t && !t.contains(n.target)) {
            t.style.display = "none";
            t.classList.remove("open");
        }
    });
    if (i) {
        i.addEventListener("submit", function(e) {
            e.preventDefault();
            let t = l ? l.value : null,
                n = document.getElementById("type-select").value,
                i = document.getElementById("cp").value,
                s = document.getElementById("urgent-switch").checked ? "oui" : "non";

            if (!n) {
                alert("Veuillez sélectionner votre type (particulier ou entreprise).");
                return;
            }
            if (!i) {
                alert("Veuillez entrer votre code postal.");
                return;
            }
            let o = {
                1: "deratisation.html",
                2: "guepes-frelons.html",
                3: "frelon_asiatique.html",
                4: "punaise_de_lit.html",
                5: "puce.html",
                6: "depigeonnage.html",
                7: "fouine_martre.html",
                8: "cafard_blatte.html",
                9: "fourmis.html",
                10: "gale.html",
                11: "syndrome_de_diogene.html",
                12: "cave-local.html",
                13: "traitement_boiserie.html",
                14: "desinfection.html",
                15: "eco-responsable.html"
            }[t];
            if (o) {
                let r = `?type=${n}&cp=${i}&urgent=${s}`;
                console.log(`Redirection vers : ${o} ${r}`);
                window.location.href = `${o}${r}`;
            } else {
                alert("Veuillez sélectionner une catégorie de nuisible.");
            }
        });
    }
});
document.addEventListener("DOMContentLoaded", function() {
    let e = document.querySelector("#prev"),
        t = document.querySelector("#next"),
        n = document.querySelector("#carousel-vp"),
        l = document.querySelector("#cCarousel-inner");

    if (!e || !t || !n || !l) return;
    let i = l.getBoundingClientRect().width,
        s = 0,
        o = parseFloat(document.querySelector(".cCarousel-item").getBoundingClientRect().width, 10) +
        parseFloat(window.getComputedStyle(l).getPropertyValue("gap"), 10);

    e.addEventListener("click", () => {
        if (s !== 0) {
            s += o;
            l.style.left = s + "px";
        }
    });
    t.addEventListener("click", () => {
        let e = n.getBoundingClientRect().width;
        if (i - Math.abs(s) > e) {
            s -= o;
            l.style.left = s + "px";
        }
    });
    let r = window.matchMedia("(max-width: 510px)"),
        a = window.matchMedia("(max-width: 770px)");
    r.addEventListener("change", u);
    a.addEventListener("change", u);
    let c = window.innerWidth;
    function u() {
        let e = window.innerWidth;
        if (s <= -o && c < e) {
            s += o;
            l.style.left = s + "px";
            c = e;
        } else if (s <= -o && c > e) {
            s -= o;
            l.style.left = s + "px";
            c = e;
        }
    }
});
document.getElementById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault();
    let formData = new FormData(this);
    fetch("send_email.php", {
        method: "POST",
        body: formData
    }).then(response => response.text()).then(responseText => {
        document.getElementById("confirmationMessage").style.display = "block";
        document.getElementById("contactForm").reset();
    }).catch(error => console.error("Erreur:", error));
});

