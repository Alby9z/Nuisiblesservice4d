document.addEventListener("DOMContentLoaded", function () {
  const burgerIcon = document.getElementById("hamburger-icon");
  const navMenu = document.getElementById("myNav");

  burgerIcon.addEventListener("click", function () {
    navMenu.classList.toggle("active");
  });
});

// Sélectionnez l'élément à animer
const element = document.querySelector(".texte-acceuil");

// Fonction pour vérifier si un élément est dans la vue
function isElementInViewport(el) {
  const rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

// Fonction pour ajouter la classe d'animation lorsque l'élément est visible
function addAnimationClass() {
  if (isElementInViewport(element)) {
    element.classList.add("slideInDown-active");
    // Supprimer l'écouteur d'événement une fois l'animation déclenchée
    window.removeEventListener("scroll", addAnimationClass);
  }
}

// Écouteur d'événement pour déclencher l'animation lors du scroll
window.addEventListener("scroll", addAnimationClass);

// Appel initial pour vérifier si l'élément est déjà visible au chargement de la page
addAnimationClass();

function scrollTrigger(selector) {
  const elements = document.querySelectorAll(selector);

  elements.forEach((el) => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          el.classList.add("active");
        }
      });
    });

    observer.observe(el);
  });
}

scrollTrigger(".animate__slideInLeft");
