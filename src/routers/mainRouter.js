// Podemos usar Express como const, pero en éste caso solo requerimos el Router de Express.
const { Router } = require("express");
const mainController = require("../controllers/mainController");

const router = Router();

router.get("/", mainController.home);
router.get("/login", mainController.login);
router.get("/register", mainController.register);
router.get("/turnos", mainController.turns);

const productRouter = require("./productRouter");
router.use("/products", productRouter);

module.exports = router;
