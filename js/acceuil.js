document.addEventListener("DOMContentLoaded", function () {
  const customSelect = document.querySelector(".custom-select");
  const select = customSelect.querySelector("select");
  const selectedOptionDiv = document.createElement("div");
  selectedOptionDiv.className = "selected-option";
  customSelect.insertBefore(selectedOptionDiv, select);

  function updateSelectedOption() {
    const selectedOption = select.options[select.selectedIndex];
    const selectedText = selectedOption.textContent.trim();
    const selectedImgSrc = selectedOption.getAttribute("data-img-src");

    // Clear the current content
    selectedOptionDiv.innerHTML = "";

    // Add the image if it exists
    if (selectedImgSrc) {
      const selectedImg = document.createElement("img");
      selectedImg.src = selectedImgSrc;
      selectedImg.alt = selectedText;
      selectedOptionDiv.appendChild(selectedImg);
    }

    // Add the selected text
    const selectedTextNode = document.createTextNode(" " + selectedText);
    selectedOptionDiv.appendChild(selectedTextNode);
  }

  select.addEventListener("change", updateSelectedOption);

  updateSelectedOption(); // Update the selected option on page load
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
