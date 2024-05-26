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

document.addEventListener("DOMContentLoaded", function () {
  const container = document.querySelector(".card-slider-main");
  const leftButton = document.querySelector(".arrow-left");
  const rightButton = document.querySelector(".arrow-right");

  function updateButtonState() {
    leftButton.disabled = container.scrollLeft <= 0;
    rightButton.disabled =
      container.scrollLeft + container.offsetWidth >= container.scrollWidth;
  }

  leftButton.addEventListener("click", function () {
    container.scrollBy({
      left: -container.offsetWidth / 2,
      behavior: "smooth",
    });
  });

  rightButton.addEventListener("click", function () {
    container.scrollBy({ left: container.offsetWidth / 2, behavior: "smooth" });
  });
  container.addEventListener("scroll", updateButtonState);
  updateButtonState();
});
