document.addEventListener("DOMContentLoaded", function () {
  const btnBurger = document.querySelector(".btn-burger");
  const sidebarBurger = document.querySelector(".sidebar-burger");
  const featBtn = document.querySelector(".feat-btn");
  const servBtn = document.querySelector(".serv-btn");
  const firstCaret = document.querySelector(".first");
  const secondCaret = document.querySelector(".second");
  const featShow = document.querySelector(".feat-show");
  const servShow = document.querySelector(".serv-show");
  const menuBtn = document.querySelector(".nav-burger ul li.active a");

  // Ajoute un événement de clic pour le bouton burger
  btnBurger.addEventListener("click", function () {
    btnBurger.classList.toggle("click");
    sidebarBurger.classList.toggle("show");
  });

  // Ajoute un événement de clic pour le bouton des fonctionnalités (feat-btn)
  featBtn.addEventListener("click", function () {
    featShow.classList.toggle("show");
    firstCaret.classList.toggle("rotate");
  });

  // Ajoute un événement de clic pour le bouton des services (serv-btn)
  servBtn.addEventListener("click", function () {
    servShow.classList.toggle("show1");
    secondCaret.classList.toggle("rotate");
  });

  // Ajoute un événement de clic pour le bouton "Menu" pour fermer le menu burger
  menuBtn.addEventListener("click", function () {
    sidebarBurger.classList.remove("show");
    btnBurger.classList.remove("click");
  });

  // Pour chaque élément de sous-menu, ajoutez une gestion du clic pour fermer le menu
  const subMenuItems = document.querySelectorAll(".li-sous-menu a");
  subMenuItems.forEach((item) => {
    item.addEventListener("click", function () {
      sidebarBurger.classList.remove("show");
      btnBurger.classList.remove("click");
    });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const btnBurger = document.querySelector(".btn-burger");

  btnBurger.addEventListener("click", function () {
    this.classList.toggle("click");
  });
});

// ----------------------logo barre rechch--------------------------------------------------
document.addEventListener("DOMContentLoaded", function () {
  const selectedOptionDisplay = document.querySelector(".selected-option");
  const optionsList = document.querySelector(".options-list");
  const selectedContent = document.querySelector(
    ".selected-option .selected-content"
  );
  const hiddenInput = document.querySelector('input[name="Nuisibles"]');

  // Afficher/Masquer la liste d'options
  selectedOptionDisplay.addEventListener("click", function () {
    optionsList.style.display =
      optionsList.style.display === "block" ? "none" : "block";
  });

  // Mettre à jour l'affichage de l'option sélectionnée
  function updateSelectedOptionDisplay(selectedLi) {
    const selectedOptionText = selectedLi.textContent.trim();
    const selectedOptionIcon = selectedLi.getAttribute("data-icon");
    const selectedOptionValue = selectedLi.getAttribute("data-value");

    selectedContent.innerHTML = `
      <img class="selected-icon" src="${selectedOptionIcon}" alt="${selectedOptionText}">
      ${selectedOptionText}
    `;
    hiddenInput.value = selectedOptionValue;
    optionsList.style.display = "none";
  }

  // Gérer la sélection d'une option
  document.querySelectorAll(".options-list li").forEach(function (li) {
    li.addEventListener("click", function () {
      updateSelectedOptionDisplay(li);
    });
  });

  // Fermer la liste d'options si on clique en dehors
  document.addEventListener("click", function (e) {
    if (
      !selectedOptionDisplay.contains(e.target) &&
      !optionsList.contains(e.target)
    ) {
      optionsList.style.display = "none";
    }
  });
});
// --------------gestion rechch ----------------------------------------------
document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("search-form");

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
  optionsList.addEventListener("click", function (event) {
    const target = event.target.closest("li");
    if (target) {
      const selectedContent = target.innerText.trim();
      document.querySelector(".selected-option .selected-content").textContent =
        selectedContent;
      document.querySelector("input[name='Nuisibles']").value =
        target.dataset.value;
    }
  });
});
// ------------------resultat rechch --------------------------------
document.addEventListener("DOMContentLoaded", function () {
  const urlParams = new URLSearchParams(window.location.search);
  const nuisible = urlParams.get("nuisible");
  const type = urlParams.get("type");
  const codePostal = urlParams.get("codePostal");
  const urgent = urlParams.get("urgent");

  // Utilisez ces valeurs pour afficher les résultats de recherche dynamiquement
  const resultsSection = document.getElementById("search-results");
  resultsSection.innerHTML = `
      <h2>Résultats de recherche</h2>
      <p>Nuisible: ${nuisible}</p>
      <p>Type: ${type}</p>
      <p>Code Postal: ${codePostal}</p>
      <p>Urgent: ${urgent}</p>
  `;
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
document.addEventListener("DOMContentLoaded", function () {
  const prev = document.querySelector("#prev");
  const next = document.querySelector("#next");

  let carouselVp = document.querySelector("#carousel-vp");

  let cCarouselInner = document.querySelector("#cCarousel-inner");
  let carouselInnerWidth = cCarouselInner.getBoundingClientRect().width;

  let leftValue = 0;

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

    if (
      leftValue <= -totalMovementSize &&
      oldViewportWidth < newViewportWidth
    ) {
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
});

/*---------------------Menu maker ---------------------------------------------------------------*/
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
