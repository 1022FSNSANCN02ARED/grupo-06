const fs = require("fs");
const path = require("path");
const { validationResult } = require("express-validator");
const db = require("../database/models");

module.exports = {
    catalogue: (req, res) => {
        let products = db.Product.findAll().then(function (products) {
            console.log(products);
        });

        const ofertas = products.filter((product) => product.discount >= 15);
        const arrayVacio = [];
        function x() {
            while (arrayVacio.length < 3) {
                let randomProduct = Math.floor(Math.random() * products.length);
                if (!arrayVacio.includes(randomProduct)) {
                    arrayVacio.push(randomProduct);
                }
            }
        }
        x();
        res.render("pages/catalogue", { products, ofertas, arrayVacio });
    },
    cart: (req, res) => {
        res.render("pages/carrito");
    },
    details: (req, res) => {
        let product = {};
        let productsFile = fs.readFileSync(
            path.resolve(__dirname, "../data/productsDataBase.json"),
            "utf-8"
        );
        let products = JSON.parse(productsFile);

        let productId = req.params.id;

        for (let i = 0; i < products.length; i++) {
            if (products[i].id == productId) {
                product = products[i];
            }
        }
        res.render("pages/details", { product: product });
    },
    create: (req, res) => {
        res.render("pages/create");
    },

    store: (req, res) => {
        const resultValidation = validationResult(req);

        if (resultValidation.errors.length > 0) {
            return res.render("pages/create", {
                errors: resultValidation.mapped(),
                oldData: req.body,
            });
        }

        let product = req.body;

        if (!product.discount) {
            product.discount = 0;
        }

        console.log(req.files);

        if (req.files.length > 0) {
            product.image = [];

            for (let i = 0; i < req.files.length; i++) {
                let image = "/images/products/" + req.files[i].filename;
                product.image.push(image);
            }

            console.log(product);
            /*db.Product.create(product);*/

            res.redirect("/products/" + product.id);
        } else {
            res.render("pages/create");
            console.log(product);
        }
    },
    edit: (req, res) => {
        let productToEdit = productsModel.find(req.params.id);
        res.render("pages/edit", {
            productToEdit: productToEdit,
        });
    },
    update: (req, res) => {
        const resultValidation = validationResult(req);

        if (resultValidation.errors.length > 0) {
            productToEdit = req.body;
            if (!req.file) {
                productToEdit.image = req.body.img_old;
            }
            productToEdit.id = req.params.id;
            return res.render("pages/edit", {
                errors: resultValidation.mapped(),
                oldData: req.body,
                productToEdit,
            });
        }

        return res.send("Validaciones correctas");

        /*
        console.log(req.body);
        let product = req.body;

        product.id = req.params.id;

        productId = productsModel.update(product);

        return res.render("pages/turns", {
            productId,
        });
        */
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

        return res.redirect("pages/catalogo");
    },
};
