const path = require("path");
const express = require("express");
const mainRouter = require("./routers/mainRouter");
const methodOverride = require("method-override");
const session = require("express-session");
const userLogged = require("./middlewares/userLogged");
const cookies = require("cookie-parser");

const app = express();

app.listen(3000, () => {
    console.log("Servidor funcionando");
});

app.use(
    session({
        secret: "fb81f7b0-3562-4c30-ba91-a78f4f77bb77",
        resave: false,
        saveUninitialized: false,
    })
);
app.use(cookies());
app.use(userLogged);
app.use(express.static(path.join(__dirname, "../public")));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(methodOverride("_method"));
app.use(mainRouter);
app.use((req, res) => {
    res.status(404).render("pages/notFound");
});

app.set("views", path.join(__dirname, "./views"));
app.set("view engine", "ejs");
