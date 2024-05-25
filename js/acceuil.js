document.addEventListener("DOMContentLoaded", function () {
  const burgerIcon = document.getElementById("hamburger-icon");
  const navMenu = document.getElementById("myNav");

  burgerIcon.addEventListener("click", function () {
    navMenu.classList.toggle("active");
  });
});

$(document).ready(function () {
  $("#icon_barre").select2({
    templateResult: function (option) {
      if (!option.id) {
        return option.text;
      }

      var imgSrc = $(option.element).data("img-src");
      if (!imgSrc) {
        return option.text;
      }

      var $img = $("<img>", {
        class: "img-option",
        src: imgSrc,
        height: "20px",
        style: "margin-right: 10px;",
      });

      var $span = $("<span>", {
        text: option.text,
      });

      var $div = $("<div>").append($img).append($span);
      return $div;
    },
  });
});
