const fs = require("fs");
const path = require("path");
const jsonDb = require("../data/products");

const usersModel = jsonDb("usersDataBase");

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
  },
};
