// Podemos usar Express como const, pero en éste caso solo requerimos el Router de Express.
const { Router } = require("express");
const mainController = require("../controllers/mainController");

const router = Router();

router.get("/", mainController.home);
router.get("/about", mainController.about);

module.exports = router;
