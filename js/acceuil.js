document.addEventListener("DOMContentLoaded", function () {
  const burgerIcon = document.getElementById("hamburger-icon");
  const navMenu = document.getElementById("myNav");

  burgerIcon.addEventListener("click", function () {
    navMenu.classList.toggle("active");
  });
});
document.addEventListener("DOMContentLoaded", function () {
  var customSelect = document.querySelector(".custom-select");
  var select = customSelect.querySelector("select");
  var selectedOption = select.options[select.selectedIndex];
  var selectedText = selectedOption.text;
  var selectedImgSrc = selectedOption.getAttribute("data-img-src");

  customSelect.setAttribute("data-selected", selectedText);
  var ul = document.createElement("ul");

  Array.from(select.options).forEach(function (option) {
    var li = document.createElement("li");
    li.textContent = option.textContent;
    li.setAttribute("data-value", option.value);

    var img = document.createElement("img");
    img.src = option.getAttribute("data-img-src");
    li.prepend(img);

    li.addEventListener("click", function () {
      select.value = option.value;
      customSelect.setAttribute("data-selected", option.textContent);
      customSelect.classList.remove("open");
    });

    ul.appendChild(li);
  });

  customSelect.appendChild(ul);

  customSelect.addEventListener("click", function () {
    customSelect.classList.toggle("open");
  });
});

/*---------------------slider-card ------------------------------------------------------------------*/

let priceCard = document.querySelectorAll(".range-card");
let activeBtn = document.getElementById("price-slider-cnt");
let movingSlider = document.getElementById("moving-slider-cnt");
let decrementBtn = document.getElementById("step-down-btn");
let incrementBtn = document.getElementById("step-up-btn");
let activeSliderPosition;
let priceCardWidth;
let cardActivate = false;
let currentRate;
let animateInterval;
let selectedPlan = "";
let activeCount = 15;

priceCard.forEach((card, index) => {
  card.addEventListener("click", () => {
    if (!card.classList.contains("blured")) {
      if (!card.classList.contains("active")) {
        clickedCard = card.getAttribute("data-count");
        selectedPlan = clickedCard;
        priceCard.forEach((slide) => slide.classList.remove("active"));
        card.classList.add("active");
        cardActivate = true;
        let currentDir =
          card.getBoundingClientRect().left >= screen.width / 2
            ? "increment"
            : "decrement";
        activeCount = clickedCard;
        getPosition(activeCount, currentDir);
      }
    }
  });
});

function autoScroll() {
  priceCard.forEach((card) => {
    card.classList.remove("active");
  });
  moveRight();
}

function animateSlide() {
  animateInterval = setInterval(autoScroll, 5000);
}
animateSlide();

incrementBtn.addEventListener("click", () => {
  clearInterval(animateInterval);
  moveRight();
  priceCard.forEach((card) => card.classList.remove("active"));
  cardActivate = false;
  animateSlide();
  selectedPlan = "";
});

decrementBtn.addEventListener("click", () => {
  clearInterval(animateInterval);
  moveLeft();
  priceCard.forEach((card) => card.classList.remove("active"));
  cardActivate = false;
  animateSlide();
  selectedPlan = "";
});

function moveLeft() {
  if (activeCount == 15) {
    activeCount = 55;
  } else {
    activeCount = Number(activeCount) - 5;
  }
  getPosition(activeCount, "decrement");
}

function moveRight() {
  if (activeCount == 55) {
    activeCount = 15;
  } else {
    activeCount = Number(activeCount) + 5;
  }
  getPosition(activeCount, "increment");
}

window.addEventListener("resize", () => {
  getPosition(15, "increment");
  activeCount = 15;
});

function getPosition(currentCard, currentDirection) {
  let priceCard = document.querySelectorAll(".range-card");
  if (movingSlider.classList.contains("animating"))
    movingSlider.classList.remove("animating");
  let movableDis;
  if (currentDirection == "increment") {
    removableElement = priceCard[0];
    priceCard[0].remove();
    movingSlider.insertAdjacentElement("beforeend", removableElement);
    priceCard.forEach((card) => {
      centerPoint = activeBtn.offsetWidth / 2;
      if (card.getAttribute("data-count") == currentCard) {
        priceCardCenter = card.offsetWidth / 2;
        activeSliderPosition = card.offsetLeft;
        movableDis =
          -(activeSliderPosition + priceCardCenter - centerPoint) + 147 + "px";
      }
    });
    movingSlider.style.setProperty("--movable_distance", movableDis);
  } else if (currentDirection == "decrement") {
    removableElement = priceCard[priceCard.length - 1];
    priceCard[priceCard.length - 1].remove();
    movingSlider.insertAdjacentElement("afterbegin", removableElement);
    priceCard.forEach((card) => {
      centerPoint = activeBtn.offsetWidth / 2;
      if (card.getAttribute("data-count") == currentCard) {
        priceCardCenter = card.offsetWidth / 2;
        activeSliderPosition = card.offsetLeft;
        movableDis =
          -(activeSliderPosition + priceCardCenter - centerPoint) - 147 + "px";
      }
    });
    movingSlider.style.setProperty("--movable_distance", movableDis);
  }

  priceCard.forEach((card) => {
    card.classList.add("blured");
  });
  priceCard.forEach((card) => {
    centerPoint = activeBtn.offsetWidth / 2;
    if (!movingSlider.classList.contains("animating"))
      movingSlider.classList.add("animating");
    if (card.getAttribute("data-count") == currentCard) {
      priceCardCenter = card.offsetWidth / 2;
      activeSliderPosition = card.offsetLeft;
      movableDistance =
        -(activeSliderPosition + priceCardCenter - centerPoint) + "px";
      movingSlider.style.setProperty("--movable_distance", movableDistance);
      card.classList.add("active");
      if (card.previousElementSibling) {
        card.previousElementSibling.classList.remove("blured");
      }
      if (card.nextElementSibling) {
        card.nextElementSibling.classList.remove("blured");
      }
      card.classList.remove("blured");
    }
  });
}
getPosition(15, "increment");
