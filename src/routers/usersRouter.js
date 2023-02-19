const {
    Router
} = require("express");
const router = Router();
const mainController = require("../controllers/mainController");
const uploadUser = require("../middlewares/multerUser");

router.get("/", mainController.home);
router.get("/login", mainController.login);
router.post("/login", mainController.loginProcess);
router.get("/register", mainController.register);
router.post(
    "/register",
    uploadUser.single("avatar"),
    mainController.processRegister
);
router.get("/turnos", mainController.turns);

module.exports = router;