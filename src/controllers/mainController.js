const path = require("path");

module.exports = {
  home: (req, res) => {
    res.render("home");
  },
  car: (req, res) => {
    res.render("carrito");
  },
  catalogue: (req, res) => {
    res.render("catalogo");
  },
  login: (req, res) => {
    res.render("login");
  },
  product: (req, res) => {
    res.render("product");
  },
  register: (req, res) => {
    res.render("register");
  },
  turns: (req, res) => {
    res.render("turns");
  },
};
