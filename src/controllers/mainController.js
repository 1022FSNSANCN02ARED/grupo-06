const path = require("path");

module.exports = {
  home: (req, res) => {
    res.render("home");
  },
  about: (req, res) => {
    res.render("about");
  },
};
