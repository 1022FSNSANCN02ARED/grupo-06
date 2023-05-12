const bcryptjs = require("bcryptjs");
const { validationResult } = require("express-validator");
const { uuid } = require("uuidv4");
const db = require("../database/models");

module.exports = {
    home: (req, res) => {
        return res.render("home");
    },
    loginProcess: async (req, res) => {
        const resultValidation = validationResult(req);

        if (resultValidation.errors.length > 0) {
            return res.render("home", {
                errors: resultValidation.mapped(),
                oldData: req.body,
            });
        }

        let emailToLogin = await db.Users.findAll({
            where: {
                email: req.body.login,
            },
        });

        let usernameToLogin = await db.Users.findAll({
            where: {
                userName: req.body.login,
            },
        });

        if (emailToLogin.length > 0) {
            let validationPassword = bcryptjs.compareSync(
                req.body.loginPassword,
                emailToLogin[0].password
            );
            if (validationPassword) {
                delete emailToLogin[0].password;
                req.session.userLogged = emailToLogin[0];
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
        } else if (usernameToLogin.length > 0) {
            let validationPassword = bcryptjs.compareSync(
                req.body.loginPassword,
                usernameToLogin[0].password
            );
            if (validationPassword) {
                delete usernameToLogin[0].password;
                req.session.userLogged = usernameToLogin[0];
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
    registerProcess: async (req, res) => {
        const resultValidation = validationResult(req);

        if (resultValidation.errors.length > 0) {
            return res.render("pages/register", {
                errors: resultValidation.mapped(),
                oldData: req.body,
            });
        }

        let emailInDb = await db.Users.findAll({
            where: {
                email: req.body.email,
            },
        });
        let usernameInDb = await db.Users.findAll({
            where: {
                userName: req.body.username,
            },
        });

        if (emailInDb.length > 0) {
            return res.render("pages/register", {
                errors: {
                    email: {
                        msg: "El email ya está registrado",
                    },
                },
                oldData: req.body,
            });
        } else if (usernameInDb.length > 0) {
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

        user.password = bcryptjs.hashSync(req.body.password, 10);

        await db.Users.create({
            id: uuid(),
            firstName: user.name,
            lastName: user.lastname,
            userName: user.username,
            email: user.email,
            password: user.password,
            cellphone: user.phone,
            avatar: user.avatar,
        });

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
    turns: async (req, res) => {
        const hairdressers = await db.peluqueros.findAll();

        console.log(hairdressers);

        return res.render("pages/turns", {
            hairdressers: hairdressers,
        });
    },
    turnsProcess: (req, res) => {
        if (!res.locals.isLogged) {
            promp("Debes estar logueado.");
        }
        // Poner validación logging in antes de enviar form, de preferencia con js para front

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

        console.log(req.body);

        return res.send("Validaciones correctas");
    },
    userDelete: async (req, res) => {
        let user = req.session.userLogged;

        await db.Users.destroy({
            where: {
                email: user.email,
            },
        });

        res.clearCookie("userCookie");
        req.session.destroy();

        return res.redirect("/");
    },
};
