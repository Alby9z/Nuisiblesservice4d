const express = require("express");
const path = require("path");
const { engine } = require("express-handlebars");
const helmet = require("helmet");

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware pour parser les données de formulaire
app.use(express.urlencoded({ extended: true }));

// Middleware pour servir les fichiers statiques depuis le dossier 'public'
app.use(express.static(path.join(__dirname, "public")));

// Configuration de Handlebars comme moteur de template
app.engine(
  "handlebars",
  engine({
    defaultLayout: "main",
    extname: ".handlebars",
  })
);
app.set("view engine", "handlebars");

// Utiliser helmet pour configurer les en-têtes de sécurité, y compris CSP
app.use(
  helmet({
    contentSecurityPolicy: {
      useDefaults: true,
      directives: {
        "script-src": ["'self'", "'unsafe-eval'"], // Ajout de 'unsafe-eval'
        // Vous pouvez ajouter d'autres directives ici
      },
    },
  })
);

// Route pour la page d'accueil
app.get("/", (req, res) => {
  res.render("home");
});

// Route POST pour gérer la soumission du formulaire de recherche
app.post("/search", (req, res) => {
  const { Nuisibles, cp, type, urgent } = req.body;
  res.redirect(
    `/result?Nuisibles=${Nuisibles}&cp=${cp}&type=${type}&urgent=${urgent}`
  );
});

// Route pour afficher les résultats avec Handlebars
app.get("/result", (req, res) => {
  const { Nuisibles, cp, type, urgent } = req.query;
  // Simuler des résultats de recherche pour l'exemple
  const results = [
    { name: "Rat", type: "Rongeur", description: "Rat trouvé dans le grenier" },
    { name: "Souris", type: "Rongeur", description: "Souris dans la cuisine" },
  ];
  res.render("result", { Nuisibles, cp, type, urgent, results });
});

// Démarrer le serveur
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
