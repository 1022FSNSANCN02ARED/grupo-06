const { Router } = require('express');
const productController = require('../controllers/productController');
const router = Router();

router.get('/', productController.catalogue);
router.get('/catalogo', productController.catalogue);
router.get('/carrito', productController.cart);
router.get('/create', productController.create);
router.get('/:id', productController.details);


module.exports = router;
