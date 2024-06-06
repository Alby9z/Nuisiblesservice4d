const express = require("express");
const exphbs = require("express-handlebars");
const path = require("path");

const app = express();

// Configuration du moteur de templates Handlebars
app.engine("handlebars", exphbs());
app.set("view engine", "handlebars");

// Définition du dossier des fichiers statiques (CSS, JS, images, etc.)
app.use(express.static(path.join(__dirname, "Nuisiblesservice4d")));

// Exemple de route pour /rechercher
app.get("/rechercher", (req, res) => {
  // Simuler des résultats de recherche (à remplacer par votre propre logique)
  const results = [
    { name: "Rat", type: "Nuisible", description: "Description du rat" },
    { name: "Guêpe", type: "Nuisible", description: "Description de la guêpe" },
    {
      name: "12345",
      type: "Code Postal",
      description: "Description du code postal",
    },
    { name: "true", type: "Urgent", description: "Description de l'urgence" },
  ];

  // Rendre la vue Handlebars avec les résultats
  res.render("resultat", { results });
});

// Démarrage du serveur
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Serveur démarré sur le port ${PORT}`);
});
