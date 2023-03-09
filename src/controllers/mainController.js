const jsonDb = require("../data/products");
const bcryptjs = require("bcryptjs");
const { validationResult } = require("express-validator");

const usersModel = jsonDb("usersDataBase");

module.exports = {
    home: (req, res) => {
        res.render("home");
    },
    login: (req, res) => {
        res.render("pages/login");
    },
    loginProcess: (req, res) => {
        const resultValidation = validationResult(req);

        if (resultValidation.errors.length > 0) {
            return res.render("home", {
                errors: resultValidation.mapped(),
                oldData: req.body,
            });
        }
        return res.send(resultValidation);
        /*
        let userToLogin = usersModel.find("email", req.body.email);

        if (userToLogin) {
            console.log(req.body);
            let validationPassword = bcryptjs.compareSync(
                req.body.password,
                userToLogin.password
            );
            if (validationPassword) {
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
        */
    },
    register: (req, res) => {
        res.render("pages/register");
    },
    registerProcess: (req, res) => {
        const resultValidation = validationResult(req);

        if (resultValidation.errors.length > 0) {
            return res.render("pages/register", {
                errors: resultValidation.mapped(),
                oldData: req.body,
            });
        }
        return res.send(resultValidation);
        /*
        if (req.body) {
            let user = req.body;
            user.avatar = req.file.filename;
            (user.password = bcryptjs.hashSync(req.body.password, 10)),
                usersModel.create(user);
            res.redirect("/");
        } else {
            res.render("home");
        }
        */
    },
    turns: (req, res) => {
        res.render("pages/turns");
    },
    turnsProcess: (req, res) => {
        console.log(JSON.parse(JSON.stringify(req.body)));
        const resultValidation = validationResult(req);

        if (resultValidation.errors.length > 0) {
            return res.render("pages/turns", {
                errors: resultValidation.mapped(),
                oldData: req.body,
            });
        }
        return res.redirect("/");
    },
};
