const { Router } = require("express");
const router = Router();
const mainController = require("../controllers/mainController");

router.get("/", mainController.home);
router.get("/login", mainController.login);
router.get("/register", mainController.register);
router.get("/turnos", mainController.turns);

module.exports = router