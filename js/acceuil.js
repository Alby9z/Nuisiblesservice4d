document.addEventListener("DOMContentLoaded", function () {
  // Gestion de la recherche et redirection
  const form = document.getElementById("search-form");

  if (form) {
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
    if (optionsList) {
      optionsList.addEventListener("click", function (event) {
        const target = event.target.closest("li");
        if (target) {
          const selectedContent = target.innerText.trim();
          document.querySelector(
            ".selected-option .selected-content"
          ).textContent = selectedContent;
          document.querySelector("input[name='Nuisibles']").value =
            target.dataset.value;
        }
      });
    }
  }

  // Affichage des résultats de recherche
  const resultsSection = document.getElementById("search-results");
  if (resultsSection) {
    const urlParams = new URLSearchParams(window.location.search);
    const nuisible = urlParams.get("nuisible");
    const type = urlParams.get("type");
    const codePostal = urlParams.get("codePostal");
    const urgent = urlParams.get("urgent");

    // Utilisez ces valeurs pour afficher les résultats de recherche dynamiquement
    resultsSection.innerHTML = `
      <h2>Résultats de recherche</h2>
      <p>Nuisible: ${nuisible}</p>
      <p>Type: ${type}</p>
      <p>Code Postal: ${codePostal}</p>
      <p>Urgent: ${urgent}</p>
    `;
  }

  // Gestion de la recherche dans la page des résultats
  const searchButton = document.getElementById("search-button");
  const searchInput = document.getElementById("search-input");
  const resultsContainer = document.getElementById("results-container");
  const contentDisplay = document.getElementById("content-display");

  if (searchButton && searchInput && resultsContainer && contentDisplay) {
    const searchResults = [
      {
        title: "Cafard_Blatte",
        description: "Description de la page",
        link: "/public/Cafard_Blatte.html",
        image: "/img/icon/cafard.webp",
      },
      {
        title: "Cave-local",
        description: "Description de la page",
        link: "/public/Cave-local.html",
        image: "/img/icon/poubelle.webp",
      },
      {
        title: "Dépigeonnage",
        description: "Description de la page",
        link: "/public/Dépigeonnage.html",
        image: "/img/icon/piegon.webp",
      },
      {
        title: "Dératisation",
        description: "Description de la page",
        link: "/public/Dératisation.html",
        image: "/img/icon/poubelle.webp",
      },
      {
        title: "Désinfection",
        description: "Description de la page",
        link: "/public/Désinfection.html",
        image: "/img/icon/desinfection.webp",
      },
      {
        title: "Éco-responsable",
        description: "Description de la page",
        link: "/public/Éco-responsable.html",
        image: "/img/icon/eco.webp",
      },
      {
        title: "Fouine_Martre",
        description: "Description de la page",
        link: "/public/Fouine_Martre.html",
        image: "/img/icon/fouine.webp",
      },
      {
        title: "Cave-local",
        description: "Description de la page",
        link: "/public/Cave-local.html",
        image: "/img/icon/cafard.webp",
      },
    ];

    searchButton.addEventListener("click", function () {
      const searchTerm = searchInput.value.toLowerCase();
      const filteredResults = searchResults.filter((result) =>
        result.title.toLowerCase().includes(searchTerm)
      );

      resultsContainer.innerHTML = "";

      filteredResults.forEach((result) => {
        const resultElement = document.createElement("div");
        resultElement.classList.add("result-item");
        resultElement.innerHTML = `
          <img src="${result.image}" alt="${result.title}" class="result-icon">
          <div>
            <h3 class="result-title">${result.title}</h3>
            <p class="result-description">${result.description}</p>
          </div>
        `;

        resultElement.addEventListener("click", function () {
          fetch(result.link)
            .then((response) => response.text())
            .then((data) => {
              contentDisplay.innerHTML = data;
              contentDisplay.style.display = "block";
            });
        });

        resultsContainer.appendChild(resultElement);
      });

      document.getElementById("search-query").textContent = searchTerm;
    });
  }

  // Gestion de la sélection de type particulier par défaut
  const selectType = document.getElementById("type-select");
  if (selectType) {
    selectType.addEventListener("change", function () {
      const selectedOption = selectType.options[selectType.selectedIndex].value;
      console.log("Type sélectionné :", selectedOption);
    });

    // Sélectionner une option par défaut (option particulier)
    selectType.value = "particulier";

    // Log pour vérifier la sélection par défaut
    console.log("Type sélectionné par défaut :", selectType.value);
  }
});
