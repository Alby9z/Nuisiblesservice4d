const express = require("express");
const exphbs = require("express-handlebars");
const bodyParser = require("body-parser");
const helmet = require("helmet");

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(helmet());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static("public"));

// Handlebars Middleware
app.engine("handlebars", exphbs.engine({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Routes
app.get("/", (req, res) => {
  res.render("index", { title: "Nuisibles Service 4D" });
});

// Static HTML Routes
app.use("/contact", express.static("contact"));

// Post route for contact form
app.post("/contact", (req, res) => {
  const { name, email, message } = req.body;
  // Logique de traitement des données du formulaire
  console.log(`Name: ${name}, Email: ${email}, Message: ${message}`);
  res.send("Formulaire reçu");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
