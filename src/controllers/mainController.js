const jsonDb = require("../data/models.js");
const bcryptjs = require("bcryptjs");
const { validationResult } = require("express-validator");

const usersModel = jsonDb("usersDataBase");

module.exports = {
    home: (req, res) => {
        return res.render("home");
    },
    loginProcess: (req, res) => {
        const resultValidation = validationResult(req);

        if (resultValidation.errors.length > 0) {
            return res.render("home", {
                errors: resultValidation.mapped(),
                oldData: req.body,
            });
        }

        let emailToLogin = usersModel.findByField("email", req.body.login);
        let usernameToLogin = usersModel.findByField(
            "username",
            req.body.login
        );

        if (emailToLogin) {
            let validationPassword = bcryptjs.compareSync(
                req.body.loginPassword,
                emailToLogin.password
            );
            if (validationPassword) {
                delete emailToLogin.password;
                req.session.userLogged = emailToLogin;
                if (req.body.session || req.body.session2)
                    res.cookie("userCookie", req.body.login, {
                        maxAge: 60000 * 43200,
                    });
                return res.redirect("/profile");
            }
            return res.render("pages/register", {
                errors: {
                    login: {
                        msg: "Email/Usuario o contraseña inválidos.",
                    },
                },
                oldData: req.body,
            });
        } else if (usernameToLogin) {
            let validationPassword = bcryptjs.compareSync(
                req.body.loginPassword,
                usernameToLogin.password
            );
            if (validationPassword) {
                delete usernameToLogin.password;
                req.session.userLogged = usernameToLogin;
                if (req.body.session || req.body.session2)
                    res.cookie("userCookie", req.body.login, {
                        maxAge: 60000 * 43200,
                    });
                return res.redirect("/profile");
            }
            return res.render("pages/register", {
                errors: {
                    login: {
                        msg: "Email/Usuario o contraseña inválidos.",
                    },
                },
                oldData: req.body,
            });
        }

        return res.render("pages/register", {
            errors: {
                login: {
                    msg: "Éste mail o usuario no se encuentra registrado.",
                },
            },
            oldData: req.body,
        });
    },
    register: (req, res) => {
        return res.render("pages/register");
    },
    registerProcess: (req, res) => {
        const resultValidation = validationResult(req);

        if (resultValidation.errors.length > 0) {
            return res.render("pages/register", {
                errors: resultValidation.mapped(),
                oldData: req.body,
            });
        }

        let emailInDb = usersModel.findByField("email", req.body.email);
        let usernameInDb = usersModel.findByField(
            "username",
            req.body.username
        );

        if (emailInDb) {
            return res.render("pages/register", {
                errors: {
                    email: {
                        msg: "El email ya está registrado",
                    },
                },
                oldData: req.body,
            });
        } else if (usernameInDb) {
            return res.render("pages/register", {
                errors: {
                    username: {
                        msg: "El usuario ya está registrado",
                    },
                },
                oldData: req.body,
            });
        }

        let user = req.body;

        if (req.file) {
            user.avatar = req.file.filename;
        } else {
            user.avatar = "default.jpg";
        }

        (user.password = bcryptjs.hashSync(req.body.password, 10)),
            usersModel.create(user);

        return res.redirect("/");
    },
    profile: (req, res) => {
        return res.render("pages/profile", {
            user: req.session.userLogged,
        });
    },
    logout: (req, res) => {
        res.clearCookie("userCookie");
        req.session.destroy();
        return res.redirect("/");
    },
    turns: (req, res) => {
        return res.render("pages/turns");
    },
    turnsProcess: (req, res) => {
        const resultValidation = validationResult(req);

        if (resultValidation.errors.length > 0) {
            return res.render("pages/turns", {
                errors: resultValidation.mapped(),
                oldData: req.body,
            });
        }

        let user = req.body;
        if (!user.hairdresser) {
            user.hairdresser = "0";
        }

        return res.send("Validaciones correctas");
    },
};
