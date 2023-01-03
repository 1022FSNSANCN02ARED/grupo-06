const express = require("express");
const path = require("path");

const app = express();

app.use(express.static(path.join(__dirname, "public")));

app.listen(3000, () => {
  console.log("Servidor corriendo");
});

app.get("/", (req, res) => {
  res.sendFile(path.resolve(__dirname, "views/home.html"));
});

app.get("/register", (req, res) => {
  res.sendFile(path.resolve(__dirname, "views/pages/register.html"));
});
app.get("/login", (req, res) => {
  res.sendFile(path.resolve(__dirname, "views/pages/login.html"));
});
app.get("/carrito", (req, res) => {
  res.sendFile(path.resolve(__dirname, "views/pages/carrito.html"));
});
app.get("/turnos", (req, res) => {
  res.sendFile(path.resolve(__dirname, "views/pages/turnos.html"));
});
