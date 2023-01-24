const productController = require('./productController');

module.exports = {
  home: (req, res) => {
    res.render("home");
  },
  login: (req, res) => {
    res.render("pages/login");
  },
  register: (req, res) => {
    res.render("pages/register");
  },
  turns: (req, res) => {
    res.render("pages/turns");
  }
};
