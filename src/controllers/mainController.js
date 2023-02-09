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
  proccesRegister:(req, res)=>{
    return res.render("home")
    if(req.file){
      let user = req.body;
      user.avatar = req.file.filename;
      usersModel.create(user);
      res.redirect("home");
    } else {
      res.render("home")
    }
       
  },
  turns: (req, res) => {
    res.render("pages/turns");
  },
};
