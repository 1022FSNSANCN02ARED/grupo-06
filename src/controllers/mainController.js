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
  processRegister:(req, res)=>{
   
    if(req.body){
      let user = req.body;
      user.avatar = req.file.filename;
      
      usersModel.create(user);
      res.redirect("/");
    } else {
      res.render("home")
    }
       
  },
  turns: (req, res) => {
    res.render("pages/turns");
  },
};
