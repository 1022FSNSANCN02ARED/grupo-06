const path = require("path");

module.exports = {
  home: (req, res) => {
    res.render("home");
  },
  car: (req, res) => {
    res.render("pages/carrito");
  },
  catalogue: (req, res) => {
    res.render("pages/catalogo");
  },
  login: (req, res) => {
    res.render("pages/login");
  },
  product: (req, res) => {
    res.render("pages/product");
  },
  register: (req, res) => {
    res.render("pages/register");
  },
  turns: (req, res) => {
    res.render("pages/turns");
  },
};
