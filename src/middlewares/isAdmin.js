function isAdmin(req, res, next) {
    if (
        !req.session ||
        !req.session.userLogged ||
        !req.session.userLogged.isAdmin
    ) {
        return res.redirect("/");
    }
    next();
}

module.exports = isAdmin;
