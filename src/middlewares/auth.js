function auth(req, res, next) {
    if (!req.session.userLogged) {
        return res.redirect("/register");
    }
    next();
}

module.exports = auth;
