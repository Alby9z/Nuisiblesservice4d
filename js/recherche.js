// Rechercher.js

document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector(".chercher");

  form.addEventListener("submit", function (event) {
    event.preventDefault(); // Empêche l'envoi du formulaire par défaut

    // Récupérer les valeurs des champs du formulaire
    const nuisible = document.getElementById("nuisible-select").value;
    const type = document.getElementById("type-select").value;
    const codePostal = document.getElementById("cp").value;
    const urgent = document.getElementById("urgent-switch").checked;

    // Construire l'URL de redirection avec les paramètres du formulaire
    const baseUrl = "/js/recherche.js"; // URL de la page de recherche
    const queryParams = `?nuisible=${nuisible}&type=${type}&cp=${codePostal}&urgent=${urgent}`;

    const redirectUrl = baseUrl + queryParams;

    // Rediriger l'utilisateur vers la page de recherche avec les paramètres
    window.location.href = redirectUrl;
  });
});

// Fonction pour récupérer les résultats de la recherche du serveur
function getSearchResults() {
  fetch("/js/recherche.js")
    .then((response) => response.json())
    .then((data) => {
      const resultsContainer = document.getElementById("results-container");
      resultsContainer.innerHTML = ""; // Vider le conteneur des résultats existants

      data.results.forEach((result) => {
        const resultElement = document.createElement("div");
        resultElement.classList.add("result-item");
        resultElement.innerHTML = `
                    <h3>${result.name}</h3>
                    <p>Type: ${result.type}</p>
                    <p>Description: ${result.description}</p>
                `;
        resultsContainer.appendChild(resultElement);
      });
    })
    .catch((error) => {
      console.error("Erreur lors de la récupération des résultats:", error);
    });
}

// Appeler la fonction pour récupérer et afficher les résultats au chargement de la page
document.addEventListener("DOMContentLoaded", () => {
  getSearchResults();
});
