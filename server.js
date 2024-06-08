const express = require("express");
const path = require("path");
const exphbs = require("express-handlebars");

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware pour parser les données de formulaire
app.use(express.urlencoded({ extended: true }));

// Middleware pour servir les fichiers statiques depuis le dossier 'public'
app.use(express.static(path.join(__dirname, "public")));

// Configuration de Handlebars comme moteur de template
app.engine(
  "handlebars",
  exphbs({
    defaultLayout: "main", // Spécifie le layout par défaut des pages
    extname: ".handlebars", // Extension des fichiers de template
  })
);
app.set("view engine", "handlebars");

// Route POST pour gérer la soumission du formulaire de recherche
app.post("/search", (req, res) => {
  // Récupérer les données du formulaire depuis req.body
  const { Nuisibles, cp, type, urgent } = req.body;

  // Vous pouvez maintenant traiter ces données comme vous le souhaitez
  // Par exemple, les enregistrer dans une base de données, effectuer une recherche, etc.

  // Ensuite, vous pouvez rediriger l'utilisateur vers une autre page ou envoyer une réponse HTML
  // Ici, nous redirigeons vers une vue Handlebars pour afficher les résultats
  res.redirect(
    `/result?Nuisibles=${Nuisibles}&cp=${cp}&type=${type}&urgent=${urgent}`
  );
});

// Route pour afficher les résultats avec Handlebars
app.get("/result", (req, res) => {
  const { Nuisibles, cp, type, urgent } = req.query;
  res.render("result", { Nuisibles, cp, type, urgent });
});

// Démarrer le serveur
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
