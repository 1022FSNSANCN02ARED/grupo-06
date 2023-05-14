const CartProduct = require('../models/cartProduct');

module.exports = {
    getCart: async (req, res) => {
        const cartProducts = await CartProduct.findAll({
        where: {
            user_id: req.user.id,
        },
        include: ['product'],
        });

        const total = cartProducts.reduce((acc, product) => {
            return acc + product.quantity * product.product.price;
        }, 0);
        
        res.render('pages/carrito', { cartProducts, total });
    },
    addToCart: async (req, res) => {
        const existingCartProduct = await CartProduct.findOne({
        where: {
            user_id: req.user.id,
            product_id: req.body.productId,
        },
        });

        if (existingCartProduct) {
        existingCartProduct.quantity++;
        await existingCartProduct.save();
        } else {
            await CartProduct.create({
                user_id: req.user.id, 
                product_id: req.body.productId,
                quantity: 1,
        });
        }
        res.redirect('pages/carrito');
    },
    removeFromCart: async (req, res) => {
        const productId = req.params.id;

        const cartProduct = await CartProduct.findOne({
            where: {
                userId: req.currentUser.id,
                productId: productId,
            },
        });

        if (!cartProduct) {
            res.status(404).send('Producto no encontrado');
            return;
        }

        if (cartProduct.quantity === 1) {
            await cartProduct.destroy();
        } else {
            cartProduct.quantity--;
            await cartProduct.save();
        }

        res.redirect('pages/carrito');
    },
    clearCart: async (req, res) => {
        await CartProduct.destroy({
            where: {
                user_id: req.user.id,
            },
        });
        res.redirect('pages/carrito');
    }
}
  

