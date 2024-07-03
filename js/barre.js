document.addEventListener("DOMContentLoaded", function () {
  var selectNuisibles = document.querySelector('select[name="Nuisibles"]');
  var iconContainer = document.querySelector(".barre .form-control");

  selectNuisibles.addEventListener("change", function () {
    var selectedOption = selectNuisibles.options[selectNuisibles.selectedIndex];
    if (selectedOption.dataset.icon) {
      iconContainer.style.backgroundImage =
        "url(" + selectedOption.dataset.icon + ")";
    } else {
      iconContainer.style.backgroundImage = "none";
    }
  });

  // Initialisation au chargement de la page
  var initialOption = selectNuisibles.options[selectNuisibles.selectedIndex];
  if (initialOption.dataset.icon) {
    iconContainer.style.backgroundImage =
      "url(" + initialOption.dataset.icon + ")";
  }
});
