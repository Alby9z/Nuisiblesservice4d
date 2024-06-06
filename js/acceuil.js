document.addEventListener("DOMContentLoaded", function () {
  const selectWrappers = document.querySelectorAll(".custom-select-wrapper");

  selectWrappers.forEach((wrapper) => {
    const select = wrapper.querySelector(".custom-select select");
    const selectedOption = wrapper.querySelector(".selected-option");

    // Mettre à jour l'icône sélectionnée lors du changement dans la liste déroulante
    select.addEventListener("change", () => {
      const selectedIndex = select.selectedIndex;
      const selectedOptionText = select.options[selectedIndex].text;
      const selectedOptionIcon =
        select.options[selectedIndex].getAttribute("data-icon");

      selectedOption.innerHTML = `
        <img class="selected-icon" src="${selectedOptionIcon}" alt="${selectedOptionText}">
        ${selectedOptionText}
      `;
    });

    // Initialiser avec la première option sélectionnée
    const initialSelectedIndex = select.selectedIndex;
    const initialOptionText = select.options[initialSelectedIndex].text;
    const initialOptionIcon =
      select.options[initialSelectedIndex].getAttribute("data-icon");

    selectedOption.innerHTML = `
      <img class="selected-icon" src="${initialOptionIcon}" alt="${initialOptionText}">
      ${initialOptionText}
    `;
  });

  // Gestion de la soumission du formulaire
  const form = document.querySelector(".chercher");
  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const nuisible = document.getElementById("nuisible-select").value;
    const type = document.getElementById("type-select").value;
    const codePostal = document.getElementById("cp").value;
    const urgent = document.getElementById("urgent-switch").checked;

    // Ajoutez ici votre logique de traitement ou d'envoi des données du formulaire
    console.log({
      nuisible,
      type,
      codePostal,
      urgent,
    });

    // Si vous souhaitez soumettre le formulaire réellement, retirez `event.preventDefault()`
    // et décommentez la ligne suivante
    // form.submit();
  });
});

/*---------------------particulier ------------------------------------------------------------------*/
document.addEventListener("DOMContentLoaded", function () {
  const selectType = document.getElementById("type-select");

  // Écouter les changements sur le select
  selectType.addEventListener("change", function () {
    const selectedOption = selectType.options[selectType.selectedIndex].value;
    console.log("Type sélectionné :", selectedOption);
    // Vous pouvez ajouter ici la logique supplémentaire en fonction du type sélectionné
  });

  // Sélectionner une option par défaut (option particulier)
  selectType.value = "particulier";

  // Log pour vérifier la sélection par défaut
  console.log("Type sélectionné par défaut :", selectType.value);
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

(function ($) {
  $.fn.menumaker = function (options) {
    var cssmenu = $(this),
      settings = $.extend(
        {
          format: "dropdown",
          sticky: false,
        },
        options
      );
    return this.each(function () {
      $(this)
        .find(".button")
        .on("click", function () {
          $(this).toggleClass("menu-opened");
          var mainmenu = $(this).next("ul");
          if (mainmenu.hasClass("open")) {
            mainmenu.slideToggle().removeClass("open");
          } else {
            mainmenu.slideToggle().addClass("open");
            if (settings.format === "dropdown") {
              mainmenu.find("ul").show();
            }
          }
        });
      cssmenu.find("li ul").parent().addClass("has-sub");
      multiTg = function () {
        cssmenu
          .find(".has-sub")
          .prepend('<span class="submenu-button"></span>');
        cssmenu.find(".submenu-button").on("click", function () {
          $(this).toggleClass("submenu-opened");
          if ($(this).siblings("ul").hasClass("open")) {
            $(this).siblings("ul").removeClass("open").slideToggle();
          } else {
            $(this).siblings("ul").addClass("open").slideToggle();
          }
        });
      };
      if (settings.format === "multitoggle") multiTg();
      else cssmenu.addClass("dropdown");
      if (settings.sticky === true) cssmenu.css("position", "fixed");
      resizeFix = function () {
        var mediasize = 1000;
        if ($(window).width() > mediasize) {
          cssmenu.find("ul").show();
        }
        if ($(window).width() <= mediasize) {
          cssmenu.find("ul").hide().removeClass("open");
        }
      };
      resizeFix();
      return $(window).on("resize", resizeFix);
    });
  };
})(jQuery);

(function ($) {
  $(document).ready(function () {
    $("#cssmenu").menumaker({
      format: "multitoggle",
    });
  });
})(jQuery);
