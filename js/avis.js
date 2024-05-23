document.getElementsByTagName("h1")[0].style.fontSize = "6vw";

document
  .getElementById("contactForm")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Empêche le formulaire de se soumettre normalement

    // Récupération des valeurs des champs
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;

    // Affichage du message de confirmation
    var confirmationMessage = document.getElementById("confirmationMessage");
    confirmationMessage.classList.remove("hidden");

    // Masquage du message de confirmation après 4 secondes
    setTimeout(function () {
      confirmationMessage.classList.add("hidden");
    }, 4000);

    // Réinitialisation des champs du formulaire
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("message").value = "";
  });
