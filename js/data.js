const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

// Serve static files (like images and CSS)
app.use(express.static(path.join(__dirname, "/public")));

// Route pour la page d'accueil avec le formulaire de recherche
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "/html/Acceuil.html"));
});

// Route POST pour traiter les données du formulaire de recherche
app.post("/rechercher", (req, res) => {
  const { nuisible } = req.body;

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
      redirectUrl = "/depiegonnage.html";
      break;
    case "7":
      redirectUrl = "/fouine.html";
      break;
    case "8":
      redirectUrl = "/cafard.html";
      break;
    case "9":
      redirectUrl = "/fourmis.html";
      break;
    case "10":
      redirectUrl = "/gale.html";
      break;
    case "11":
      redirectUrl = "/syndrome.html";
      break;
    case "12":
      redirectUrl = "/cave-local.html";
      break;
    case "13":
      redirectUrl = "/désinfection.html";
      break;
    case "14":
      redirectUrl = "/eco.html";
      break;
    default:
      break;
  }

  res.redirect(redirectUrl);
});

// Routes pour les pages spécifiques
app.get("/deratisation.html", (req, res) => {
  res.sendFile(path.join(__dirname, "/html/dératisation.html"));
});

app.get("/destruction.html", (req, res) => {
  res.sendFile(path.join(__dirname, "/html/destruction.html"));
});

app.get("/frelon.html", (req, res) => {
  res.sendFile(path.join(__dirname, "/html/frelon.html"));
});

app.get("/punaise.html", (req, res) => {
  res.sendFile(path.join(__dirname, "/html/punaise.html"));
});

app.get("/puce.html", (req, res) => {
  res.sendFile(path.join(__dirname, "/html/puce.html"));
});

app.get("/depiegonnage.html", (req, res) => {
  res.sendFile(path.join(__dirname, "/html/depiegonnage.html"));
});

app.get("/fouine.html", (req, res) => {
  res.sendFile(path.join(__dirname, "/html/fouine.html"));
});

app.get("/cafard.html", (req, res) => {
  res.sendFile(path.join(__dirname, "/html/cafard.html"));
});

app.get("/fourmis.html", (req, res) => {
  res.sendFile(path.join(__dirname, "/html/fourmis.html"));
});

app.get("/gale.html", (req, res) => {
  res.sendFile(path.join(__dirname, "/html/gale.html"));
});

app.get("/syndrome.html", (req, res) => {
  res.sendFile(path.join(__dirname, "/html/syndrome.html"));
});

app.get("/cave-local.html", (req, res) => {
  res.sendFile(path.join(__dirname, "/html/cave-local.html"));
});

app.get("/désinfection.html", (req, res) => {
  res.sendFile(path.join(__dirname, "/html/désinfection.html"));
});

app.get("/eco.html", (req, res) => {
  res.sendFile(path.join(__dirname, "/html/eco.html"));
});

// Démarrage du serveur
app.listen(port, () => {
  console.log(`Serveur démarré sur http://localhost:${port}`);
});
