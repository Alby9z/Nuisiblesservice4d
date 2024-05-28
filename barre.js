// Import des modules nécessaires
const express = require("express");
const bodyParser = require("body-parser");

// Initialisation d'Express
const app = express();
const port = 3000; // Port d'écoute du serveur

// Middleware body-parser pour analyser les données de formulaire
app.use(bodyParser.urlencoded({ extended: true }));

// Route pour la page d'accueil avec le formulaire de recherche
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/html/Acceuil.html"); // Envoie du fichier HTML lorsqu'on accède à '/'
});

// Route POST pour traiter les données du formulaire de recherche
app.post("/rechercher", (req, res) => {
  // Récupération des données du formulaire
  const { nuisible, type, cp } = req.body;

  // Vous pouvez ici effectuer les traitements nécessaires avec les données reçues du formulaire
  // Par exemple, enregistrer les informations dans une base de données, envoyer un email, etc.

  // Exemple de réponse : affichage des données reçues
  res.send(
    `Formulaire soumis avec succès : Nuisible ${nuisible}, Type ${type}, CP ${cp}`
  );
});

// Démarrage du serveur
app.listen(port, () => {
  console.log(`Serveur démarré sur http://localhost:${port}`);
});
