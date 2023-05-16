const db = require("../database/models");

async function userLogged(req, res, next) {
    if (res.locals.isLogged) {
        localStorage.isLogged = true;
    }

    let userInCookie = await req.cookies.userCookie;

    if (userInCookie) {
        let userFromCookie = await db.Users.findOne({
            where: {
                email: userInCookie,
            },
        });

        if (!userFromCookie) {
            userFromCookie = await db.Users.findOne({
                where: {
                    userName: userInCookie,
                },
            });
        }

        if (userFromCookie) {
            userFromCookie = userFromCookie.dataValues;
            delete userFromCookie.password;
            console.log(userFromCookie);
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
