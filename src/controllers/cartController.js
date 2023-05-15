const db = require("../database/models");

module.exports = {
    getCart: async (req, res) => {
        const cartProducts = await db.CartProduct.findAll({
            where: {
                user_id: res.locals.userLogged.id,
            },
            include: ["product"],
        });
    
        const total = await cartProducts.reduce((acc, product) => {
            return acc + (product.quantity * product.product.price);
        }, 0);
    
        return res.render('pages/carrito', { cartProducts, total });
    },
    addToCart: async (req, res) => {
        const existingCartProduct = await db.CartProduct.findOne({
        where: {
            user_id: res.locals.userLogged.id,
            product_id: req.params.id,
        },
        });
        if (existingCartProduct) {
        existingCartProduct.quantity++;
        await existingCartProduct.save();
        } else {
            await db.CartProduct.create({
                user_id: res.locals.userLogged.id, 
                product_id: req.params.id,
                quantity: 1,
        });
        }
       return res.redirect('/products/');
    },
    buyNow: async (req, res) => {
        const existingCartProduct = await db.CartProduct.findOne({
        where: {
            user_id: res.locals.userLogged.id,
            product_id: req.params.id,
        },
        });
        if (existingCartProduct) {
        existingCartProduct.quantity++;
        await existingCartProduct.save();
        } else {
            await db.CartProduct.create({
                user_id: res.locals.userLogged.id, 
                product_id: req.params.id,
                quantity: 1,
        });
        }
       return res.redirect('/carrito');
    },
    increaseProduct: async (req, res) => {
        const existingCartProduct = await db.CartProduct.findOne({
        where: {
            user_id: res.locals.userLogged.id,
            product_id: req.params.id,
        },
        });
        if (existingCartProduct) {
        existingCartProduct.quantity++;
        await existingCartProduct.save();
        } else {
            await db.CartProduct.create({
                user_id: res.locals.userLogged.id, 
                product_id: req.params.id,
                quantity: 1,
        });
        }
        const cartProducts = await db.CartProduct.findAll({
            where: {
                user_id: res.locals.userLogged.id,
            },
            include: ["product"],
        });
    
        const total = await cartProducts.reduce((acc, product) => {
            return acc + (product.quantity * product.product.price);
        }, 0);
        return res.render('pages/carrito', { cartProducts, total });
    },
    removeFromCart: async (req, res) => {
        const productId = req.params.id;
        console.log(productId)
        const productToDelete = await db.CartProduct.findOne({
            where: {
                user_id: res.locals.userLogged.id,
                product_id: productId,
            },
        });
        if (productToDelete) {
            if (productToDelete.quantity == 1) {
                await productToDelete.destroy();
            } else {
                productToDelete.quantity--;
                await productToDelete.save();
            }
        }
        const cartProducts = await db.CartProduct.findAll({
            where: {
                user_id: res.locals.userLogged.id,
            },
            include: ["product"],
        });
    
        const total = await cartProducts.reduce((acc, product) => {
            return acc + (product.quantity * product.product.price);
        }, 0);
        return res.render('pages/carrito', { cartProducts, total });
    },
    clearCart: async (req, res) => {
        await db.CartProduct.destroy({
            where: {
                user_id: res.locals.userLogged.id,
            },
        });
       return res.redirect('/carrito');
    }
}
  

