const fs = require("fs");
const path = require("path");
const { validationResult } = require("express-validator");
const db = require("../database/models");

module.exports = {
    catalogue: async (req, res) => {
        const products = await db.Product.findAll();

        products.forEach(async (product) => {
            const productBrand = await db.brands.findByPk(product.brand_id);
            const productImage = await db.images.findByPk(product.image_id);
            const productCategories = await product.getCategories();

            product.category = productCategories[0].name;
            product.image = productImage.fileRoute;
            product.brand = productBrand.name;

            const ofertas = products.filter(
                (product) => product.discount >= 15
            );

            const arrayVacio = [];
            while (arrayVacio.length < 3) {
                let randomProduct = Math.floor(Math.random() * products.length);
                if (!arrayVacio.includes(randomProduct)) {
                    arrayVacio.push(randomProduct);
                }
            }

            return res.render("pages/catalogue", {
                products,
                ofertas,
                arrayVacio,
            });
        });
    },

    cart: (req, res) => {
        return res.render("pages/carrito");
    },
    details: async (req, res) => {
        let product = await db.Product.findByPk(req.params.id);
        const productBrand = await db.brands.findByPk(product.brand_id);
        const productImage = await db.images.findByPk(product.image_id);
        const productCategories = await product.getCategories();

        product.category = productCategories[0].name;
        product.image = productImage.fileRoute;
        product.brand = productBrand.name;

        return res.render("pages/details", { product: product });
    },
    create: async (req, res) => {
        const [brands, categories] = await Promise.all([
            db.brands.findAll(),
            db.Category.findAll(),
        ]);
        return res.render("pages/create", {
            brand: brands,
            categories: categories,
        });
    },

    store: async (req, res) => {
        const resultValidation = validationResult(req);

        if (resultValidation.errors.length > 0) {
            const [brands, categories] = await Promise.all([
                db.brands.findAll(),
                db.Category.findAll(),
            ]);

            return res.render("pages/create", {
                brand: brands,
                categories: categories,
                errors: resultValidation.mapped(),
                oldData: req.body,
            });
        }

        let product = req.body;

        if (product.addbrand === "") {
            delete product.addbrand;
        }

        if (!product.discount) {
            product.discount = 0;
        }

        if (req.files.length > 0) {
            product.image = [];

            for (let i = 0; i < req.files.length; i++) {
                let image = "/images/products/" + req.files[i].filename;
                product.image.push(image);
            }

            const images = Promise.all(
                product.image.map((image) =>
                    db.images.create({
                        fileRoute: image,
                    })
                )
            );

            let imageId = images.map((image) => image.id);
            product.image = imageId;

            const createdProduct = await db.Product.create({
                name: product.name,
                price: product.price,
                brand_id: product.brand_id,
                discount: product.discount,
                description: product.description,
                image_id: product.image,
            });

            await createdProduct.addCategory(product.category_id);
            return res.redirect("/products/details/" + createdProduct.id);
        } else {
            const createdProduct = await db.Product.create({
                name: product.name,
                price: product.price,
                brand_id: product.brand_id,
                discount: product.discount,
                description: product.description,
                image_id: 1,
            });

            await createdProduct.addCategory(product.category_id);
            return res.redirect("/products/details/" + createdProduct.id);
        }
    },
    edit: async (req, res) => {
        let brands = db.brands.findAll();
        let categories = db.Category.findAll();
        let product = await db.Product.findByPk(req.params.id);
        const productBrand = await db.brands.findByPk(product.brand_id);
        const productImage = await db.images.findByPk(product.image_id);
        const productCategories = await product.getCategories();

        product.category = productCategories[0].name;
        product.image = productImage.fileRoute;
        product.brand = productBrand.name;

        Promise.all([brands, categories]).then((resultado) => {
            return res.render("pages/edit", {
                brand: resultado[0],
                categories: resultado[1],
                productToEdit: product,
            });
        });
    },
    update: async (req, res) => {
        const resultValidation = validationResult(req);

        if (resultValidation.errors.length > 0) {
            console.log(resultValidation.errors);
            const [brands, categories] = await Promise.all([
                db.brands.findAll(),
                db.Category.findAll(),
            ]);

            console.log(req.body);

            return res.render("pages/edit", {
                brand: brands,
                categories: categories,
                errors: resultValidation.mapped(),
                productToEdit: req.body,
                oldData: req.body,
            });
        }

        let product = req.body;

        if (product.addbrand === "") {
            delete product.addbrand;
        }

        if (!product.discount) {
            product.discount = 0;
        }

        if (req.files.length > 0) {
            product.image = [];

            for (let i = 0; i < req.files.length; i++) {
                let image = "/images/products/" + req.files[i].filename;
                product.image.push(image);
            }

            const images = Promise.all(
                product.image.map((image) =>
                    db.images.create({
                        fileRoute: image,
                    })
                )
            );

            let imageId = images.map((image) => image.id);
            product.image = imageId;

            const createdProduct = await db.Product.update(
                {
                    name: product.name,
                    price: product.price,
                    brand_id: product.brand_id,
                    discount: product.discount,
                    description: product.description,
                    image_id: product.image,
                },
                {
                    where: {
                        id: req.params.id,
                    },
                }
            );

            console.log(createdProduct);
            await createdProduct.setCategory(product.category_id);
            return res.redirect("/products/details/" + createdProduct.id);
        } else {
            const productToEdit = await db.Product.findByPk(req.params.id);

            productToEdit.name = product.name;
            productToEdit.price = product.price;
            productToEdit.brand_id = product.brand_id;
            productToEdit.discount = product.discount;
            productToEdit.description = product.description;
            productToEdit.image_id = 1;

            await productToEdit.save();

            await productToEdit.setCategories(product.category_id);
            return res.redirect("/products/details/" + productToEdit.id);
        }
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
