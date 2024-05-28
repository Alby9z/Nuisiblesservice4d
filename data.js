const express = require("express");
const bodyParser = require("body-parser");
const path = require("path"); // Module path pour manipuler les chemins des fichiers
const fs = require("fs");

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

// Route pour la page d'accueil avec le formulaire de recherche
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "/html/Acceuil.html"));
});

// Route POST pour traiter les données du formulaire de recherche
app.post("/rechercher", (req, res) => {
  const { nuisible } = req.body;

  // Logique pour choisir la redirection en fonction de 'nuisible'
  let redirectUrl = "/";
  switch (nuisible) {
    case "1":
      redirectUrl = "/deratisation.html";
      break;
    case "2":
      redirectUrl = "/destruction.html";
      break;
    case "3":
      redirectUrl = "/frelon.html";
      break;
    case "4":
      redirectUrl = "/punaise.html";
      break;
    case "5":
      redirectUrl = "/puce.html";
      break;
    case "6":
      redirectUrl = "/fourmis.html";
      break;
    case "7":
      redirectUrl = "/depigeonnage.html";
      break;
    case "8":
      redirectUrl = "/fouine.html";
      break;
    case "9":
      redirectUrl = "/rats-souris";
      break;
    case "10":
      redirectUrl = "/guepes-abeilles";
      break;
    case "11":
      redirectUrl = "/rats-souris";
      break;
    case "12":
      redirectUrl = "/guepes-abeilles";
      break;
    case "13":
      redirectUrl = "/rats-souris";
      break;
    case "14":
      redirectUrl = "/guepes-abeilles";
      break;
    default:
      break;
  }

  // Rediriger l'utilisateur vers la page appropriée
  res.redirect(redirectUrl);
});

// Route pour la page des rats et souris
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "/html/"));
});

// Route pour la page des guêpes et abeilles
app.get("/guepes-abeilles", (req, res) => {
  res.sendFile(path.join(__dirname, "/html/guepes-abeilles.html"));
});

// Démarrage du serveur
app.listen(port, () => {
  console.log(`Serveur démarré sur http://localhost:${port}`);
});
