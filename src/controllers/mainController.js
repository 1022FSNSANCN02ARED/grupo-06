const jsonDb = require("../data/products");
const bcryptjs = require("bcryptjs");
const model = require("../data/products");

const usersModel = jsonDb("usersDataBase");

module.exports = {
    home: (req, res) => {
        res.render("home");
    },
    login: (req, res) => {
        res.render("pages/login");
    },
    loginProcess: (req, res) => {
        let userToLogin = usersModel.find("email", req.body.email);

        if (userToLogin) {
            console.log(req.body);
            let validationPassword = bcryptjs.compareSync(
                req.body.password,
                userToLogin.password
            );
            if (validationPassword) {
                return res.redirect("/");
                delete userToLogin.password;
                req.session.userLogged = userToLogin;

                if (req.body.remember_user) {
                    res.cookie("userEmail", req.body.email, {
                        maxAge: 1000 * 60 * 60,
                    });
                }

                return res.redirect("/user/profile");
            }
        }
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
