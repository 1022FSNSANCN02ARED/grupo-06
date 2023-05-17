const { Router } = require("express");
const router = Router();
const mainController = require("../controllers/mainController");
const multerUser = require("../middlewares/multerUser");
const validations = require("../middlewares/validations");
const guest = require("../middlewares/guest");
const auth = require("../middlewares/auth");

router.get("/", mainController.home);
router.post("/login", validations.login, mainController.loginProcess);
router.get("/register", guest, mainController.register);
router.post(
    "/register",
    multerUser.upload.single("avatar"),
    validations.register,
    mainController.registerProcess
);

router.get("/profile", auth, mainController.profile);
router.get("/logout", mainController.logout);
router.get("/turnos", mainController.turns);
router.post("/turnos", validations.turns, mainController.turnsProcess);
router.delete("/profile", mainController.userDelete);
router.put("/editProfile", validations.editProfile, mainController.editProfile);

module.exports = router;
