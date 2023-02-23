const fs = require("fs");
const path = require("path");
const jsonDb = require("../data/products");

const productsModel = jsonDb("productsDataBase");

module.exports = {
    catalogue: (req, res) => {
        let products = productsModel.all();
        const ofertas = products.filter(product => product.discount >= 15)
        const arrayVacio = [];
         function x (){while (arrayVacio.length < 3) {
             let randomProduct = Math.floor(Math.random() * products.length);
            if(!arrayVacio.includes(randomProduct)){
                    arrayVacio.push(randomProduct);  
            }     
         }     
        }
        x()
        res.render("pages/catalogue", { products, ofertas, arrayVacio });
    },
    cart: (req, res) => {
        res.render("pages/carrito");
    },
    details: (req, res) => {
        let product = productsModel.find(req.params.id);
        res.render("pages/details", {
            product,
        });
    },
    create: (req, res) => {
        res.render("pages/create");
    },

    store: (req, res) => {
        if (req.file) {
            let product = req.body;

            product.image = "/images/products/" + req.file.filename;

            const productId = productsModel.create(product);

            res.redirect("/products/" + productId);
        } else {
            res.render("pages/create");
        }
    },
    edit: (req, res) => {
        let productToEdit = productsModel.find(req.params.id);
        res.render("pages/edit", { productToEdit: productToEdit });
    },
    update: (req, res) => {
        let product = req.body;

        product.id = req.params.id;

        productId = productsModel.update(product);

        res.render("pages/details", {
            productId,
        });
    },
    delete: (req, res) => {
        let product = productsModel.find(req.params.id);
        let imagePath = path.join(
            __dirname,
            "../public/images/products/" + product.image
        );

        productsModel.delete(req.params.id);

        if (fs.existsSync(imagePath)) {
            fs.unlinkSync(imagePath);
        }

        res.redirect("pages/catalogo");
    },
};
