const jsonDb = require("../data/models");
const usersModel = jsonDb("usersDataBase");

function userLogged(req, res, next) {
    res.locals.isLogged = false;

    let userInCookie = req.cookies.userCookie;
    let userFromCookie = usersModel.findByField("email", userInCookie);
    if (!userFromCookie) {
        userFromCookie = usersModel.findByField("username", userInCookie);
    }

    if (userFromCookie) {
        res.locals.userLogged = userFromCookie;
    }

    if (req.session.userLogged) {
        res.locals.isLogged = true;
        res.locals.userLogged = req.session.userLogged;
    }

    next();
}

module.exports = userLogged;
