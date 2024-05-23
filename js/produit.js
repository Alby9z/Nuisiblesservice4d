// Sélectionnez tous les éléments avec la classe "details-tab"
const detailsTabs = document.querySelectorAll(".details-tab");

// Parcourez chaque élément avec la classe "details-tab"
detailsTabs.forEach((tab) => {
  // Ajoutez un écouteur d'événements pour le clic sur chaque élément
  tab.addEventListener("click", () => {
    // Fermez tous les éléments "details-item" sauf celui qui est cliqué
    const parentItem = tab.parentElement; // Sélectionne le parent de l'onglet actuel
    const allItems = document.querySelectorAll(".details-item"); // Sélectionne tous les éléments avec la classe "details-item"
    allItems.forEach((item) => {
      if (item !== parentItem) {
        // Si l'élément n'est pas le parent de l'onglet actuel
        item.removeAttribute("open"); // Supprime l'attribut 'open' de l'élément
      }
    });
  });

  // Ajoutez un écouteur d'événements pour le survol de la souris sur chaque élément
  tab.addEventListener("mouseover", () => {
    // Fermez tous les éléments "details-item" sauf celui qui est survolé
    const parentItem = tab.parentElement; // Sélectionne le parent de l'onglet actuel
    const allItems = document.querySelectorAll(".details-item"); // Sélectionne tous les éléments avec la classe "details-item"
    allItems.forEach((item) => {
      if (item !== parentItem) {
        // Si l'élément n'est pas le parent de l'onglet actuel
        item.removeAttribute("open"); // Supprime l'attribut 'open' de l'élément
      }
    });
  });
});

// Supprimez l'attribut 'open' de tous les éléments '.details-item' au chargement de la page
window.addEventListener("DOMContentLoaded", () => {
  const allItems = document.querySelectorAll(".details-item"); // Sélectionne tous les éléments avec la classe "details-item"
  allItems.forEach((item) => {
    item.removeAttribute("open"); // Supprime l'attribut 'open' de chaque élément
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const burgerIcon = document.getElementById("hamburger-icon");
  const navMenu = document.getElementById("myNav");

  burgerIcon.addEventListener("click", function () {
    navMenu.classList.toggle("active");
  });
});
