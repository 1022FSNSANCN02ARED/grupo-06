const db = require("../database/models");

async function userLogged(req, res, next) {
    if (res.locals.isLogged) {
        localStorage.isLogged = true;
    }

    let userInCookie = await req.cookies.userCookie;

    if (userInCookie) {
        let userFromCookie = await db.Users.findAll({
            where: {
                email: userInCookie,
            },
        });

        if (!userFromCookie) {
            userFromCookie = await db.Users.findAll({
                where: {
                    userName: userInCookie,
                },
            });
        }

        if (userFromCookie) {
            userFromCookie = userFromCookie[0].dataValues;
            delete userFromCookie.password;
            req.session.userLogged = userFromCookie;
        }
    }

    if (req.session.userLogged) {
        res.locals.isLogged = true;
        res.locals.userLogged = req.session.userLogged;
    }

    next();
}

module.exports = userLogged;
