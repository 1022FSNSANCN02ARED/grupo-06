const bcryptjs = require("bcryptjs");
const { validationResult } = require("express-validator");
const { uuid } = require("uuidv4");
const db = require("../database/models");

module.exports = {
    home: async (req, res) => {
        const products = await db.Product.findAll();

        for (const product of products) {
            const [productBrand, productImage, productCategories] =
                await Promise.all([
                    db.brands.findByPk(product.brand_id),
                    db.images.findByPk(product.image_id),
                    product.getCategories(),
                ]);

            product.category = productCategories[0].name;
            product.image = productImage.fileRoute;
            product.brand = productBrand.name;
        }

        products.sort((a, b) => b.discount - a.discount);

        const topThreeProducts = products.slice(0, 3);

        return res.render("home", { topThreeProducts });
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
                delete res.locals.password;
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
                delete res.locals.password;
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
            isAdmin: false,
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

        const isLogged = res.locals.isLogged;

        return res.render("pages/turns", {
            hairdressers: hairdressers,
            isLogged: isLogged,
        });
    },
    turnsProcess: async (req, res) => {
        const hairdressers = await db.peluqueros.findAll();

        const resultValidation = validationResult(req);

        if (resultValidation.errors.length > 0) {
            console.log(resultValidation.errors);
            return res.render("pages/turns", {
                errors: resultValidation.mapped(),
                hairdressers: hairdressers,
                oldData: req.body,
            });
        }

        let user = req.body;
        if (!user.hairdresser) {
            user.hairdresser = "0";
        }

        console.log(req.body);

        return res.redirect("/");
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
    editProfile: async(req, res) => {
        
        console.log(req.session.userLogged)
    
        const resultValidation = validationResult(req);

        const UserToEdit = await db.Users.findByPk(req.session.userLogged.id);

        
        if (resultValidation.errors.length > 0) {
            console.log(resultValidation.mapped())
            return res.render("pages/profile", {
                
                errors: resultValidation.mapped(),
                oldData: req.body,
                user: req.session.userLogged
            });
        }
        

        
        if (UserToEdit) {
            let validationPassword = bcryptjs.compareSync(
                req.body.oldPass,
                UserToEdit.password
            );
            if (validationPassword && req.body.newPass) {
                let newPassword = bcryptjs.hashSync(req.body.newPass, 10)
                    UserToEdit.password= newPassword;
                }}

        
                const User = {
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            userName: req.body.userName,
            email: req.body.email,
            cellphone: req.body.cell,
            password: UserToEdit.password
        }
                
                
            await UserToEdit.update(User);

            
            res.clearCookie("userCookie");
            req.session.destroy();

    return res.redirect("/");

    }
}
