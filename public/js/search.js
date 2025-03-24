document.addEventListener("DOMContentLoaded", function () {
    const options = document.querySelectorAll(".options-list li");
    const selectedContent = document.querySelector(".selected-content");
    const hiddenInput = document.querySelector(".selected-value");

    options.forEach(option => {
        option.addEventListener("click", function () {
            let selectedText = this.textContent.trim(); // Récupérer le texte du li
            selectedContent.textContent = selectedText; // Modifier l'affichage
            hiddenInput.value = selectedText; // Stocker la valeur dans l'input caché
        });
    });

    document.getElementById("btn-barre").addEventListener("click", function (event) {
        event.preventDefault(); // Empêche le rechargement de la page

        let nuisible = hiddenInput.value;
        let secteur = document.getElementById("villes").value;

        let pages = {
            "Rats ou Souris": {
                "Territoire de Belfort": "deratisation/dera-belfort.html",
                "Plateaux de Besançon": "deratisation/dera-besancon.html",
                "Région Dijonnaise": "deratisation/dera-dijon.html",
                "Héricourt et ses Alentours": "deratisation/dera-hericourt.html",
                "Pays de Montbeliard": "deratisation/dera-montbeliard.html",
                "Mulhouse": "deratisation/dera-mulhouse.html",
                "Région Strasbourgeoise": "deratisation/dera-strasbourg.html",
                "Vesoul et ses Environs": "deratisation/dera-vesoul.html"
            },
            "Guêpes & Frelons": {
                "Territoire de Belfort": "guepes/guepes-belfort.html",
                "Plateaux de Besançon": "guepes/guepes-besancon.html",
                "Région Dijonnaise": "guepes/guepes-dijon.html",
                "Héricourt et ses Alentours": "guepes/guepes-hericourt.html",
                "Pays de Montbeliard": "guepes/guepes-montbeliard.html",
                "Mulhouse": "guepes/guepes-mulhouse.html",
                "Région Strasbourgeoise": "guepes/guepes-strasbourg.html",
                "Vesoul et ses Environs": "guepes/guepes-vesoul.html"
            },
            "Frelons Asiatiques": {
                "Territoire de Belfort": "frelon/frelon-belfort.html",
                "Plateaux de Besançon": "frelon/frelon-besancon.html",
                "Région Dijonnaise": "frelon/frelon-dijon.html",
                "Héricourt et ses Alentours": "frelon/frelon-hericourt.html",
                "Pays de Montbeliard": "frelon/frelon-montbeliard.html",
                "Mulhouse": "frelon/frelon-mulhouse.html",
                "Région Strasbourgeoise": "frelon/frelon-strasbourg.html",
                "Vesoul et ses Environs": "frelon/frelon-vesoul.html"
            },
            "Punaises de Lit": {
                "Territoire de Belfort": "punaise/punaise-belfort.html",
                "Plateaux de Besançon": "punaise/punaise-besancon.html",
                "Région Dijonnaise": "punaise/punaise-dijon.html",
                "Héricourt et ses Alentours": "punaise/punaise-hericourt.html",
                "Pays de Montbeliard": "punaise/punaise-montbeliard.html",
                "Mulhouse": "punaise/punaise-mulhouse.html",
                "Région Strasbourgeoise": "punaise/punaise-strasbourg.html",
                "Vesoul et ses Environs": "punaise/punaise-vesoul.html"
            },
            "Puces": {
                "Territoire de Belfort": "puce/puce-belfort.html",
                "Plateaux de Besançon": "puce/puce-besancon.html",
                "Région Dijonnaise": "puce/puce-dijon.html",
                "Héricourt et ses Alentours": "puce/puce-hericourt.html",
                "Pays de Montbeliard": "puce/puce-montbeliard.html",
                "Mulhouse": "puce/puce-mulhouse.html",
                "Région Strasbourgeoise": "puce/puce-strasbourg.html",
                "Vesoul et ses Environs": "puce/puce-vesoul.html"
            },
            "Dépigeonnage": {
                "Territoire de Belfort": "depigeonnage/depig-belfort.html",
                "Plateaux de Besançon": "depigeonnage/depig-besancon.html",
                "Région Dijonnaise": "depigeonnage/depig-dijon.html",
                "Héricourt et ses Alentours": "depigeonnage/depig-hericourt.html",
                "Pays de Montbeliard": "depigeonnage/depig-montbeliard.html",
                "Mulhouse": "depigeonnage/depig-mulhouse.html",
                "Région Strasbourgeoise": "depigeonnage/depig-strasbourg.html",
                "Vesoul et ses Environs": "depigeonnage/depig-vesoul.html"
            },
            "Fouines & Martres": {
                "Territoire de Belfort": "fouine/fouine-belfort.html",
                "Plateaux de Besançon": "fouine/fouine-besancon.html",
                "Région Dijonnaise": "fouine/fouine-dijon.html",
                "Héricourt et ses Alentours": "fouine/fouine-hericourt.html",
                "Pays de Montbeliard": "fouine/fouine-montbeliard.html",
                "Mulhouse": "fouine/fouine-mulhouse.html",
                "Région Strasbourgeoise": "fouine/fouine-strasbourg.html",
                "Vesoul et ses Environs": "fouine/fouine-vesoul.html"
            },
            "Cafards & Blattes": {
                "Territoire de Belfort": "cafard/cafard-belfort.html",
                "Plateaux de Besançon": "cafard/cafard-besancon.html",
                "Région Dijonnaise": "cafard/cafard-dijon.html",
                "Héricourt et ses Alentours": "cafard/cafard-hericourt.html",
                "Pays de Montbeliard": "cafard/cafard-montbeliard.html",
                "Mulhouse": "cafard/cafard-mulhouse.html",
                "Région Strasbourgeoise": "cafard/cafard-strasbourg.html",
                "Vesoul et ses Environs": "cafard/cafard-vesoul.html"
            },
            "Fourmis": {
                "Territoire de Belfort": "fourmis/fourmis-belfort.html",
                "Plateaux de Besançon": "fourmis/fourmis-besancon.html",
                "Région Dijonnaise": "fourmis/fourmis-dijon.html",
                "Héricourt et ses Alentours": "fourmis/fourmis-hericourt.html",
                "Pays de Montbeliard": "fourmis/fourmis-montbeliard.html",
                "Mulhouse": "fourmis/fourmis-mulhouse.html",
                "Région Strasbourgeoise": "fourmis/fourmis-strasbourg.html",
                "Vesoul et ses Environs": "fourmis/fourmis-vesoul.html"
            },
            "Gale": {
                "Territoire de Belfort": "gale/gale-belfort.html",
                "Plateaux de Besançon": "gale/gale-besancon.html",
                "Région Dijonnaise": "gale/gale-dijon.html",
                "Héricourt et ses Alentours": "gale/gale-hericourt.html",
                "Pays de Montbeliard": "gale/gale-montbeliard.html",
                "Mulhouse": "gale/gale-mulhouse.html",
                "Région Strasbourgeoise": "gale/gale-strasbourg.html",
                "Vesoul et ses Environs": "gale/gale-vesoul.html"
            },
            "Syndrome de Diogène": {
                "Territoire de Belfort": "diogene/diogene-belfort.html",
                "Plateaux de Besançon": "diogene/diogene-besancon.html",
                "Région Dijonnaise": "diogene/diogene-dijon.html",
                "Héricourt et ses Alentours": "diogene/diogene-hericourt.html",
                "Pays de Montbeliard": "diogene/diogene-montbeliard.html",
                "Mulhouse": "diogene/diogene-mulhouse.html",
                "Région Strasbourgeoise": "diogene/diogene-strasbourg.html",
                "Vesoul et ses Environs": "diogene/diogene-vesoul.html"
            },
            "Cave & Local": {
                "Territoire de Belfort": "cave/cave-belfort.html",
                "Plateaux de Besançon": "cave/cave-besancon.html",
                "Région Dijonnaise": "cave/cave-dijon.html",
                "Héricourt et ses Alentours": "cave/cave-hericourt.html",
                "Pays de Montbeliard": "cave/cave-montbeliard.html",
                "Mulhouse": "cave/cave-mulhouse.html",
                "Région Strasbourgeoise": "cave/cave-strasbourg.html",
                "Vesoul et ses Environs": "cave/cave-vesoul.html"
            },
            "Traitement-Boiserie": {
                "Territoire de Belfort": "boiserie/boiserie-belfort.html",
                "Plateaux de Besançon": "boiserie/boiserie-besancon.html",
                "Région Dijonnaise": "boiserie/boiserie-dijon.html",
                "Héricourt et ses Alentours": "boiserie/boiserie-hericourt.html",
                "Pays de Montbeliard": "boiserie/boiserie-montbeliard.html",
                "Mulhouse": "boiserie/boiserie-mulhouse.html",
                "Région Strasbourgeoise": "boiserie/boiserie-strasbourg.html",
                "Vesoul et ses Environs": "boiserie/boiserie-vesoul.html"
            },
            "Désinfection": {
                "Territoire de Belfort": "desinfection/desinf-belfort.html",
                "Plateaux de Besançon": "desinfection/desinf-besancon.html",
                "Région Dijonnaise": "desinfection/desinf-dijon.html",
                "Héricourt et ses Alentours": "desinfection/desinf-hericourt.html",
                "Pays de Montbeliard": "desinfection/desinf-montbeliard.html",
                "Mulhouse": "desinfection/desinf-mulhouse.html",
                "Région Strasbourgeoise": "desinfection/desinf-strasbourg.html",
                "Vesoul et ses Environs": "desinfection/desinf-vesoul.html"
            },
            "Traitements Éco": {
                "Territoire de Belfort": "eco/eco-belfort.html",
                "Plateaux de Besançon": "eco/eco-besancon.html",
                "Région Dijonnaise": "eco/eco-dijon.html",
                "Héricourt et ses Alentours": "eco/eco-hericourt.html",
                "Pays de Montbeliard": "eco/eco-montbeliard.html",
                "Mulhouse": "eco/eco-mulhouse.html",
                "Région Strasbourgeoise": "eco/eco-strasbourg.html",
                "Vesoul et ses Environs": "eco/eco-vesoul.html"
            }
        };

        if (pages[nuisible] && pages[nuisible][secteur]) {
            window.location.href = pages[nuisible][secteur];
        } else {
            alert("Aucune page disponible pour cette sélection.");
        }
    });
});