const { Router } = require("express");
const router = Router();
const mainController = require("../controllers/mainController");
const uploadUser = require("../middlewares/multerUser");
const validations = require("../middlewares/validations");

router.get("/", mainController.home);
router.get("/login", mainController.login);
router.post("/login", validations, mainController.loginProcess);
router.get("/register", mainController.register);
router.post(
    "/register",
    uploadUser.single("avatar"),
    validations,
    mainController.processRegister
);
router.get("/turnos", mainController.turns);

module.exports = router;
