const path = require("path");
const express = require("express");
const mainRouter = require("./routers/mainRouter");
const methodOverride = require("method-override");

const app = express();

app.listen(3000, () => {
  console.log("Servidor funcionando");
});

app.use(express.static(path.join(__dirname, "../public")));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(methodOverride("_method"));
app.use(mainRouter);
app.use((req, res) => {
  res.status(404).render("notFound");
});

app.set("view engine", "ejs");
