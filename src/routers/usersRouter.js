const { Router } = require("express");
const router = Router();
const mainController = require("../controllers/mainController");
const upload = require('../middlewares/multer');

router.get("/", mainController.home);
router.get("/login", mainController.login);
router.get("/register", mainController.register);
router.post("/register",upload.single(""), mainController.processRegister);
router.get("/turnos", mainController.turns);

module.exports = router