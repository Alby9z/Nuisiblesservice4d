const fs = require("fs");

app.post("/rechercher", (req, res) => {
  const { nuisible, type, cp } = req.body;
  const data = {
    nuisible: nuisible,
    type: type,
    cp: cp,
  };

  // Écrire les données dans un fichier JSON
  fs.writeFile("data.json", JSON.stringify(data), (err) => {
    if (err) throw err;
    console.log("Les données ont été enregistrées.");
  });

  // Rediriger l'utilisateur vers une nouvelle page
  res.redirect("/confirmation");
});
