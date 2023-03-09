const { Router } = require("express");
const router = Router();
const mainController = require("../controllers/mainController");
const uploadUser = require("../middlewares/multerUser");
const validations = require("../middlewares/validations");

router.get("/", mainController.home);
router.get("/login", mainController.login);
router.post("/login", validations.login, mainController.loginProcess);
router.get("/register", mainController.register);
router.post(
    "/register",
    uploadUser.single("avatar"),
    validations.register,
    mainController.registerProcess
);
router.get("/turnos", mainController.turns);
router.post("/turnos", validations.turns, mainController.turnsProcess);

module.exports = router;
