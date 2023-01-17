// Podemos usar Express como const, pero en éste caso solo requerimos el Router de Express.
const { Router } = require("express");
const mainController = require("../controllers/mainController");

const router = Router();

router.get("/", mainController.home);
router.get("/carrito", mainController.car);
router.get("/catalogo", mainController.catalogue);
router.get("/login", mainController.login);
router.get("/product", mainController.product);
router.get("/register", mainController.register);
router.get("/turnos", mainController.turns);

module.exports = router;
