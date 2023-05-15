const express = require('express');
const router = express.Router();
const cartController = require('../controllers/cartController');


router.get('/', cartController.getCart);
router.post('/add/:id', cartController.addToCart);
router.post('/buy/:id', cartController.buyNow);
router.post('/increase/:id', cartController.increaseProduct);
router.delete('/remove/:id', cartController.removeFromCart);
router.delete('/clear/:id', cartController.clearCart);

module.exports = router;
