document.addEventListener("DOMContentLoaded", function () {
  const customSelect = document.querySelector(".custom-select");
  const select = customSelect.querySelector("select");
  const selectedOptionDiv = customSelect.querySelector(".selected-option");

  if (!selectedOptionDiv) {
    console.error(".selected-option element is missing");
    return;
  }

  function updateSelectedOption() {
    const selectedOption = select.options[select.selectedIndex];
    const selectedText = selectedOption.textContent.trim();
    const selectedImgSrc = selectedOption.getAttribute("data-img-src");

    console.log("Selected option:", selectedText, selectedImgSrc);

    // Vider l'option sélectionnée
    selectedOptionDiv.innerHTML = "";

    // Ajouter l'image si elle existe
    if (selectedImgSrc) {
      const selectedImg = document.createElement("img");
      selectedImg.src = selectedImgSrc;
      selectedOptionDiv.appendChild(selectedImg);
      console.log("Image added:", selectedImgSrc);
    } else {
      console.log("No image for this option");
    }

    // Ajouter le texte sélectionné
    const selectedTextNode = document.createTextNode(selectedText);
    selectedOptionDiv.appendChild(selectedTextNode);
    console.log("Text added:", selectedText);
  }

  select.addEventListener("change", updateSelectedOption);

  updateSelectedOption(); // Mettre à jour l'option sélectionnée au chargement de la page
});

/*---------------------slider-card ------------------------------------------------------------------*/

const prev = document.querySelector("#prev");
const next = document.querySelector("#next");

let carouselVp = document.querySelector("#carousel-vp");

let cCarouselInner = document.querySelector("#cCarousel-inner");
let carouselInnerWidth = cCarouselInner.getBoundingClientRect().width;

let leftValue = 0;

// Variable used to set the carousel movement value (card's width + gap)
const totalMovementSize =
  parseFloat(
    document.querySelector(".cCarousel-item").getBoundingClientRect().width,
    10
  ) +
  parseFloat(
    window.getComputedStyle(cCarouselInner).getPropertyValue("gap"),
    10
  );

prev.addEventListener("click", () => {
  if (!leftValue == 0) {
    leftValue -= -totalMovementSize;
    cCarouselInner.style.left = leftValue + "px";
  }
});

next.addEventListener("click", () => {
  const carouselVpWidth = carouselVp.getBoundingClientRect().width;
  if (carouselInnerWidth - Math.abs(leftValue) > carouselVpWidth) {
    leftValue -= totalMovementSize;
    cCarouselInner.style.left = leftValue + "px";
  }
});

const mediaQuery510 = window.matchMedia("(max-width: 510px)");
const mediaQuery770 = window.matchMedia("(max-width: 770px)");

mediaQuery510.addEventListener("change", mediaManagement);
mediaQuery770.addEventListener("change", mediaManagement);

let oldViewportWidth = window.innerWidth;

function mediaManagement() {
  const newViewportWidth = window.innerWidth;

  if (leftValue <= -totalMovementSize && oldViewportWidth < newViewportWidth) {
    leftValue += totalMovementSize;
    cCarouselInner.style.left = leftValue + "px";
    oldViewportWidth = newViewportWidth;
  } else if (
    leftValue <= -totalMovementSize &&
    oldViewportWidth > newViewportWidth
  ) {
    leftValue -= totalMovementSize;
    cCarouselInner.style.left = leftValue + "px";
    oldViewportWidth = newViewportWidth;
  }
}
<script>
  document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('hamburger-icon').addEventListener('click', function(event) {
      event.preventDefault();
      var overlay = document.getElementById('myNav');
      var icon = document.getElementById('hamburger-icon');
      if (overlay.classList.contains('open')) {
        overlay.classList.remove('open');
        icon.classList.remove('open');
      } else {
        overlay.classList.add('open');
        icon.classList.add('open');
      }
    });
  });
</script>