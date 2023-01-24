const products = require('../data/productsDataBase');

module.exports = {
    catalogue: (req, res) => {
        res.render('pages/catalogo');
    },
    cart: (req, res) => {
        res.render('pages/carrito');
    },
    details: (req, res) => {
        const id = req.params.id;
        const productos = products.find(e => e.id == id);
        res.render('pages/details', {
            productos
        });
    }
}