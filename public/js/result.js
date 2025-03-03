document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("search-form");
    const nuisibleInput = document.querySelector(".selected-value");
    const typeSelect = document.getElementById("type-select");
    const villesSelect = document.getElementById("villes");

    const pages = {
        "cafards-blattes-particulier-territoire-de-belfort": "/public/cafard/cafard-belfort.html",
        "rats-particulier-belfort": "../rat/rat-belfort.html",
        "guepes-particulier-dijon": "/public/guepes-dijon.html",
        "frelons-professionnel-mulhouse": "/public/frelons-mulhouse.html",
        "punaises-particulier-strasbourg": "/public/punaises-strasbourg.html",
        "fourmis-particulier-besancon": "/public/fourmis-besancon.html",
    };

    const villesDisponibles = ["Territoire de Belfort", "Dijon", "Mulhouse", "Strasbourg", "Besancon", "Vesoul"];
    villesDisponibles.forEach((ville) => {
        const option = document.createElement("option");
        option.value = ville.toLowerCase().replace(/\s+/g, '-');
        option.textContent = ville;
        villesSelect.appendChild(option);
    });

    const options = document.querySelectorAll(".options-list li");
    options.forEach((option) => {
        option.addEventListener("click", function () {
            const value = this.getAttribute("data-value");
            const nuisibleText = this.textContent.trim();
            nuisibleInput.value = value.toLowerCase().replace(/\s+/g, '-');
            document.querySelector(".selected-content").textContent = nuisibleText;
        });
    });

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        const nuisible = nuisibleInput.value.trim().toLowerCase();
        const type = typeSelect.value.trim().toLowerCase().replace(/\s+/g, '-');
        const ville = villesSelect.value.trim().toLowerCase().replace(/\s+/g, '-');

        if (!nuisible || !type || !ville) {
            alert("Veuillez sélectionner un nuisible, un type et une ville !");
            return;
        }

        const searchKey = `${nuisible}-${type}-${ville}`;
        console.log("Clé recherchée :", searchKey);

        if (pages[searchKey]) {
            window.location.href = pages[searchKey];
        } else {
            alert("Aucune page ne correspond à votre sélection !");
        }
    });
});
