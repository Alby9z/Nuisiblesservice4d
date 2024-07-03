document.addEventListener("DOMContentLoaded", function () {
  const btnGeolocation = document.getElementById("btn-geolocation");
  const cpInput = document.getElementById("cp");
  const mapIframe = document.querySelector(".google-map"); // Sélectionner l'iframe de la carte

  btnGeolocation.addEventListener("click", function () {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition, showError);
    } else {
      alert("La géolocalisation n'est pas supportée par ce navigateur.");
    }
  });

  function showPosition(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;

    console.log(`Latitude: ${lat}, Longitude: ${lon}`);

    // Utiliser un service de géocodage pour obtenir le code postal à partir des coordonnées
    fetch(
      `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${lat}&lon=${lon}`
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data); // Ajouter ce log pour voir la réponse complète

        if (data.address && data.address.postcode) {
          const postalCode = data.address.postcode;
          cpInput.value = postalCode;
          console.log(`Postal Code: ${postalCode}`); // Ajouter ce log pour voir le code postal trouvé
        } else {
          alert("Impossible d'obtenir le code postal à partir de la position.");
        }

        // Mettre à jour l'URL de l'iframe de la carte avec les nouvelles coordonnées
        mapIframe.src = `https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d43114.71689098716!2d${lon}!3d${lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sfr!2sfr!4v1711764725539!5m2!1sfr!2sfr`;
      })
      .catch((error) => console.error("Erreur:", error));
  }

  function showError(error) {
    switch (error.code) {
      case error.PERMISSION_DENIED:
        alert("L'utilisateur a refusé la demande de géolocalisation.");
        break;
      case error.POSITION_UNAVAILABLE:
        alert("Les informations de localisation sont indisponibles.");
        break;
      case error.TIMEOUT:
        alert("La demande de géolocalisation a expiré.");
        break;
      case error.UNKNOWN_ERROR:
        alert("Une erreur inconnue s'est produite.");
        break;
    }
  }
});
