document.addEventListener("DOMContentLoaded", function () {
  const resultsContainer = document.getElementById("results-container");
  const contentDisplay = document.getElementById("content-display");

  // Fonction pour afficher le contenu dynamique
  function displayContent(title, description) {
    contentDisplay.innerHTML = `
          <h2>${title}</h2>
          <p>${description}</p>
      `;
    contentDisplay.style.display = "block";
  }

  // Fonction pour obtenir les paramètres de l'URL
  function getQueryParams() {
    const params = {};
    const queryString = window.location.search.substring(1);
    const regex = /([^&=]+)=([^&]*)/g;
    let m;
    while ((m = regex.exec(queryString))) {
      params[decodeURIComponent(m[1])] = decodeURIComponent(m[2]);
    }
    return params;
  }

  // Lire les paramètres de l'URL
  const params = getQueryParams();

  // Afficher les résultats en fonction des paramètres
  if (params.nuisible && params.type && params.cp) {
    const title = `Résultats pour ${params.nuisible}, ${params.type}, ${
      params.cp
    }, Urgent: ${params.urgent ? "Oui" : "Non"}`;
    const description =
      "Ici se trouvent les résultats correspondant à votre recherche.";
    displayContent(title, description);

    // Ajouter ici du code pour générer dynamiquement les résultats en fonction des paramètres
    // Par exemple, ajouter des éléments dans resultsContainer
    const resultItem = document.createElement("div");
    resultItem.classList.add("result-item");
    resultItem.innerHTML = `
      <h3 class="result-title">${title}</h3>
      <p class="result-description">${description}</p>
    `;
    resultsContainer.appendChild(resultItem);
  }

  resultsContainer.addEventListener("click", function (e) {
    if (e.target.closest(".result-item")) {
      const item = e.target.closest(".result-item");
      const title = item.querySelector(".result-title").textContent;
      const description = item.querySelector(".result-description").textContent;
      displayContent(title, description);
    }
  });
});
