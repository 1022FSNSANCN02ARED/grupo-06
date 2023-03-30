const { Router } = require("express");
const productController = require("../controllers/productController");
const router = Router();
const upload = require("../middlewares/multer");
const validations = require("../middlewares/validations");

router.get("/", productController.catalogue);
router.get("/carrito", productController.cart);
router.get("/create", productController.create);
router.post(
    "/create",
    upload.array("image"),
    validations.products,
    productController.store
);
router.get("/details/:id", productController.details);
router.get("/:id/edit", productController.edit);
router.patch(
    "/:id",
    upload.array("image"),
    validations.products,
    productController.update
);

module.exports = router;
