// --------------gestion rechch ----------------------------------------------
document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("search-form");

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const selectedOption = document.querySelector(
      ".selected-option .selected-content"
    ).textContent;
    const nuisible =
      selectedOption !== "Choisissez un nuisible" ? selectedOption : "";
    const type = document.getElementById("type-select").value;
    const codePostal = document.getElementById("cp").value;
    const urgent = document.getElementById("urgent-switch").checked;

    const queryString = `?nuisible=${encodeURIComponent(
      nuisible
    )}&type=${encodeURIComponent(type)}&codePostal=${encodeURIComponent(
      codePostal
    )}&urgent=${encodeURIComponent(urgent)}`;

    // Redirige vers la page des résultats de recherche avec les paramètres de requête
    window.location.href = "/public/search.html" + queryString;
  });

  // Gestion de la sélection des options
  const optionsList = document.querySelector(".options-list");
  optionsList.addEventListener("click", function (event) {
    const target = event.target.closest("li");
    if (target) {
      const selectedContent = target.innerText.trim();
      document.querySelector(".selected-option .selected-content").textContent =
        selectedContent;
      document.querySelector("input[name='Nuisibles']").value =
        target.dataset.value;
    }
  });
});

// ------------------resultat rechch --------------------------------
document.addEventListener("DOMContentLoaded", function () {
  const urlParams = new URLSearchParams(window.location.search);
  const nuisible = urlParams.get("nuisible");
  const type = urlParams.get("type");
  const codePostal = urlParams.get("codePostal");
  const urgent = urlParams.get("urgent");

  // Utilisez ces valeurs pour afficher les résultats de recherche dynamiquement
  const resultsSection = document.getElementById("search-results");
  resultsSection.innerHTML = `
        <h2>Résultats de recherche</h2>
        <p>Nuisible: ${nuisible}</p>
        <p>Type: ${type}</p>
        <p>Code Postal: ${codePostal}</p>
        <p>Urgent: ${urgent}</p>
    `;
});

/*---------------------particulier ------------------------------------------------------------------*/
document.addEventListener("DOMContentLoaded", function () {
  const selectType = document.getElementById("type-select");

  // Écouter les changements sur le select
  selectType.addEventListener("change", function () {
    const selectedOption = selectType.options[selectType.selectedIndex].value;
    console.log("Type sélectionné :", selectedOption);
    // Vous pouvez ajouter ici la logique supplémentaire en fonction du type sélectionné
  });

  // Sélectionner une option par défaut (option particulier)
  selectType.value = "particulier";

  // Log pour vérifier la sélection par défaut
  console.log("Type sélectionné par défaut :", selectType.value);
});
