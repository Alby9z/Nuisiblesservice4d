// Déclaration des secteurs et villes associées
const secteurs = {
    "boiserie": ["Territoire de Belfort", "Plateaux de Besançon", "Région Dijonnaise", "Héricourt et ses Alentours", "Pays de Montbeliard", "Mulhouse", "Région Strasbourgeoise", "Vesoul et ses Environs"],
    "cafard": ["Territoire de Belfort", "Plateaux de Besançon", "Région Dijonnaise", "Héricourt et ses Alentours", "Pays de Montbeliard", "Mulhouse", "Région Strasbourgeoise", "Vesoul et ses Environs"],
    "cave": ["Territoire de Belfort", "Plateaux de Besançon", "Région Dijonnaise", "Héricourt et ses Alentours", "Pays de Montbeliard", "Mulhouse", "Région Strasbourgeoise", "Vesoul et ses Environs"],
    "depigeonnage": ["Territoire de Belfort", "Plateaux de Besançon", "Région Dijonnaise", "Héricourt et ses Alentours", "Pays de Montbeliard", "Mulhouse", "Région Strasbourgeoise", "Vesoul et ses Environs"],
    "deratisation": ["Territoire de Belfort", "Plateaux de Besançon", "Région Dijonnaise", "Héricourt et ses Alentours", "Pays de Montbeliard", "Mulhouse", "Région Strasbourgeoise", "Vesoul et ses Environs"],
    "desinfection": ["Territoire de Belfort", "Plateaux de Besançon", "Région Dijonnaise", "Héricourt et ses Alentours", "Pays de Montbeliard", "Mulhouse", "Région Strasbourgeoise", "Vesoul et ses Environs"],
    "diogene": ["Territoire de Belfort", "Plateaux de Besançon", "Région Dijonnaise", "Héricourt et ses Alentours", "Pays de Montbeliard", "Mulhouse", "Région Strasbourgeoise", "Vesoul et ses Environs"],
    "eco": ["Territoire de Belfort", "Plateaux de Besançon", "Région Dijonnaise", "Héricourt et ses Alentours", "Pays de Montbeliard", "Mulhouse", "Région Strasbourgeoise", "Vesoul et ses Environs"],
    "fouine": ["Territoire de Belfort", "Plateaux de Besançon", "Région Dijonnaise", "Héricourt et ses Alentours", "Pays de Montbeliard", "Mulhouse", "Région Strasbourgeoise", "Vesoul et ses Environs"],
    "fourmis": ["Territoire de Belfort", "Plateaux de Besançon", "Région Dijonnaise", "Héricourt et ses Alentours", "Pays de Montbeliard", "Mulhouse", "Région Strasbourgeoise", "Vesoul et ses Environs"],
    "frelon": ["Territoire de Belfort", "Plateaux de Besançon", "Région Dijonnaise", "Héricourt et ses Alentours", "Pays de Montbeliard", "Mulhouse", "Région Strasbourgeoise", "Vesoul et ses Environs"],
    "gale": ["Territoire de Belfort", "Plateaux de Besançon", "Région Dijonnaise", "Héricourt et ses Alentours", "Pays de Montbeliard", "Mulhouse", "Région Strasbourgeoise", "Vesoul et ses Environs"],
    "guepes": ["Territoire de Belfort", "Plateaux de Besançon", "Région Dijonnaise", "Héricourt et ses Alentours", "Pays de Montbeliard", "Mulhouse", "Région Strasbourgeoise", "Vesoul et ses Environs"],
    "puce": ["Territoire de Belfort", "Plateaux de Besançon", "Région Dijonnaise", "Héricourt et ses Alentours", "Pays de Montbeliard", "Mulhouse", "Région Strasbourgeoise", "Vesoul et ses Environs"],
    "punaise": ["Territoire de Belfort", "Plateaux de Besançon", "Région Dijonnaise", "Héricourt et ses Alentours", "Pays de Montbeliard", "Mulhouse", "Région Strasbourgeoise", "Vesoul et ses Environs"],
};

document.addEventListener("DOMContentLoaded", function () {
    const categoryItems = document.querySelectorAll(".options-list li");
    const villeSelect = document.getElementById("villes");

    categoryItems.forEach(item => {
        item.addEventListener("click", function () {
            const selectedCategory = item.getAttribute("title").toLowerCase().trim();

            villeSelect.innerHTML = '<option value="">Sélectionnez une ville</option>';

            if (secteurs[selectedCategory]) {
                secteurs[selectedCategory].forEach(ville => {
                    const option = document.createElement("option");
                    option.value = ville;
                    option.textContent = ville.charAt(0).toUpperCase() + ville.slice(1);
                    villeSelect.appendChild(option);
                });
            }
        });
    });
});

