const jsonDb = require("../data/products");
const bcryptjs = require("bcryptjs");

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
    processRegister: (req, res) => {
        if (req.body) {
            let user = req.body;
            user.avatar = req.file.filename;
            (user.password = bcryptjs.hashSync(req.body.password, 10)),
                usersModel.create(user);
            res.redirect("/");
        } else {
            res.render("home");
        }
    },
    turns: (req, res) => {
        res.render("pages/turns");
    },
};
