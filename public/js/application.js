const express = require("express"),
path = require("path"),
app = express(),
PORT = process.env.PORT || 3e3;
app.use(express.static(path.join(__dirname, "public"))),
app.get("/", (p, e) => {
    e.sendFile(path.join(__dirname, "public", "acceuil.html"))
}),
app.listen(PORT, () => {
    console.log(`Serveur d\xe9marr\xe9 sur le port $ {
        PORT
    }`)
});