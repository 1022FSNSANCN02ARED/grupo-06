const { Router } = require("express");
const productController = require("../controllers/productController");
const router = Router();
const path = require("path");

const multer = require("multer");
const storage = multer.diskStorage({
  destination: path.join(__dirname, "../../public/images/products"),
  filename: (req, file, cb) => {
    cb(null, "image-" + Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({
  storage,
});

router.get("/", productController.catalogue);
router.get("/catalogo", productController.catalogue);
router.get("/carrito", productController.cart);
router.get("/create", productController.create);
router.post("/create", upload.single("image"), productController.store);
router.get("/:id", productController.details);
router.get("/:id/edit", productController.edit);
router.put("/:id", productController.update);

module.exports = router;
