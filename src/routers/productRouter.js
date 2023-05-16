const { Router } = require("express");
const productController = require("../controllers/productController");
const router = Router();
const upload = require("../middlewares/multer");
const validations = require("../middlewares/validations");
const isAdmin = require("../middlewares/isAdmin");

router.get("/", productController.catalogue);

router.get("/create", isAdmin, productController.create);
router.post(
    "/create",
    isAdmin,
    upload.array("image", 5),
    validations.products,
    productController.store
);
router.get("/details/:id", productController.details);
router.get("/:id/edit", isAdmin, productController.edit);
router.patch(
    "/:id",
    isAdmin,
    upload.array("image"),
    validations.products,
    productController.update
);
router.delete("/:id", isAdmin, productController.delete);

module.exports = router;
