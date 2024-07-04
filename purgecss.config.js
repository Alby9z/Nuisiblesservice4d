module.exports = {
  content: ["/**/*.html", "/**/*.js"], // Chemins des fichiers où PurgeCSS doit rechercher les classes utilisées
  css: ["/css/style.css"], // Chemin vers votre fichier CSS principal à analyser
  output: "css/style.purged.css", // Chemin de sortie pour le fichier CSS purgé
  defaultExtractor: (content) => content.match(/[\w-/:]+(?<!:)/g) || [], // Extracteur par défaut pour trouver les classes utilisées
};
