const { Router } = require("express");
const productController = require("../controllers/productController");
const router = Router();
const upload = require('../middlewares/multer')



router.get("/", productController.catalogue);
router.get("/carrito", productController.cart);
router.get("/create", productController.create);
router.post("/create", upload.single("image"), productController.store);
router.get("/:id", productController.details);
router.get("/:id/edit", productController.edit);
router.put("/:id", productController.update);

module.exports = router;
