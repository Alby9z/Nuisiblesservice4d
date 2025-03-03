document.addEventListener("DOMContentLoaded", function () {
    // Gestion du menu burger
    let burgerBtn = document.querySelector(".btn-burger"),
        sidebar = document.querySelector(".sidebar-burger"),
        featBtn = document.querySelector(".feat-btn"),
        servBtn = document.querySelector(".serv-btn"),
        featShow = document.querySelector(".feat-show"),
        servShow = document.querySelector(".serv-show");

    if (burgerBtn && sidebar) {
        burgerBtn.addEventListener("click", function () {
            burgerBtn.classList.toggle("click");
            sidebar.classList.toggle("show");
        });
    }

    if (featBtn && featShow) {
        featBtn.addEventListener("click", function () {
            featShow.classList.toggle("show");
            let icon = featBtn.querySelector("ion-icon");
            if (icon) icon.classList.toggle("rotate");
        });
    }

    if (servBtn && servShow) {
        servBtn.addEventListener("click", function () {
            servShow.classList.toggle("show1");
            let icon = servBtn.querySelector("ion-icon");
            if (icon) icon.classList.toggle("rotate");
        });
    }

    let submenuLinks = document.querySelectorAll(".li-sous-menu a");
    submenuLinks.forEach(link => {
        link.addEventListener("click", function () {
            sidebar.classList.remove("show");
            burgerBtn.classList.remove("click");
        });
    });
});

// Sélectionner une option dans la liste déroulante
document.addEventListener("DOMContentLoaded", function () {
    let selectedOption = document.querySelector(".selected-option"),
        optionsList = document.querySelector(".options-list"),
        selectedContent = document.querySelector(".selected-option .selected-content"),
        nuisibleInput = document.querySelector('input[name="Nuisibles"]');

    if (optionsList) optionsList.style.display = "none";

    if (selectedOption) {
        selectedOption.addEventListener("click", function () {
            if (optionsList) {
                optionsList.style.display = (optionsList.style.display === "none" || optionsList.style.display === "") ? "block" : "none";
                optionsList.classList.toggle("open");
            }
        });
    }

    document.querySelectorAll(".options-list li").forEach(function (option) {
        option.addEventListener("click", function () {
            let text = option.textContent.trim(),
                iconSrc = option.getAttribute("data-icon"),
                value = option.getAttribute("data-value");

            if (selectedContent && nuisibleInput) {
                selectedContent.innerHTML = `<img class="selected-icon" src="${iconSrc}" alt="${text}"> ${text}`;
                nuisibleInput.value = value;
                optionsList.style.display = "none";
                optionsList.classList.remove("open");
            }
        });
    });

    // Fermer la liste déroulante si on clique ailleurs
    document.addEventListener("click", function (event) {
        if (selectedOption && !selectedOption.contains(event.target) && optionsList && !optionsList.contains(event.target)) {
            optionsList.style.display = "none";
            optionsList.classList.remove("open");
        }
    });
});

// Carousel : gestion de la navigation
document.addEventListener("DOMContentLoaded", function () {
    let prevBtn = document.querySelector("#prev"),
        nextBtn = document.querySelector("#next"),
        carouselViewport = document.querySelector("#carousel-vp"),
        carouselInner = document.querySelector("#cCarousel-inner");

    if (!prevBtn || !nextBtn || !carouselViewport || !carouselInner) return;

    let viewportWidth = carouselInner.getBoundingClientRect().width,
        currentPosition = 0,
        itemWidth = parseFloat(document.querySelector(".cCarousel-item").getBoundingClientRect().width, 10) + parseFloat(window.getComputedStyle(carouselInner).getPropertyValue("gap"), 10);

    prevBtn.addEventListener("click", () => {
        if (currentPosition !== 0) {
            currentPosition += itemWidth;
            carouselInner.style.left = currentPosition + "px";
        }
    });

    nextBtn.addEventListener("click", () => {
        if (viewportWidth - Math.abs(currentPosition) > carouselViewport.getBoundingClientRect().width) {
            currentPosition -= itemWidth;
            carouselInner.style.left = currentPosition + "px";
        }
    });

    let mediaQuerySmall = window.matchMedia("(max-width: 510px)"),
        mediaQueryMedium = window.matchMedia("(max-width: 770px)");

    function handleResize() {
        let width = window.innerWidth;
        if (currentPosition <= -itemWidth && width !== window.innerWidth) {
            currentPosition = width < window.innerWidth ? currentPosition + itemWidth : currentPosition - itemWidth;
            carouselInner.style.left = currentPosition + "px";
        }
    }

    mediaQuerySmall.addEventListener("change", handleResize);
    mediaQueryMedium.addEventListener("change", handleResize);
});
