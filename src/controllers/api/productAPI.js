const db = require("../../database/models");

//Aqui tienen otra forma de llamar a cada uno de los modelos
//---------------------------
//Dentro del actorsAPIController uso las dos forma de poder llamar a nuestros modelo
//----------------------------------
const productAPIController = {
    list: async (req, res) => {
        const products = await db.Product.findAll();

        let respuesta = {
            meta: {
                status: 200,
                total: products.length,
                url: "api/product",
            },
            data: [],
        };

        for (const product of products) {
            const [productBrand, productImage, productCategories] =
                await Promise.all([
                    db.brands.findByPk(product.brand_id),
                    db.images.findByPk(product.image_id),
                    product.getCategories(),
                ]);

            const productData = {
                ...product.dataValues,
                category: productCategories[0].name,
                image: productImage.fileRoute,
                brand: productBrand.name,
            };

            respuesta.data.push(productData);
        }

        res.json(respuesta);
    },
    details: async (req, res) => {
        let productId = req.params.id;

        const product = await db.Product.findByPk(productId);
        console.log(product);

        let respuesta = {
            meta: {
                status: 200,
                total: 1,
                url: "api/product/:id",
            },
            data: [],
        };

        const [productBrand, productImage, productCategories] =
            await Promise.all([
                db.brands.findByPk(product.brand_id),
                db.images.findByPk(product.image_id),
                product.getCategories(),
            ]);

        const productData = {
            ...product.dataValues,
            category: productCategories[0].name,
            image: productImage.fileRoute,
            brand: productBrand.name,
        };

        respuesta.data.push(productData);

        res.json(respuesta);
    },

    lastProduct: async (req, res) => {
        let product = await db.Product.findOne({
            order: [["id", "DESC"]],
        });

        let respuesta = {
            meta: {
                status: 200,
                total: 1,
                url: "api/product",
            },
            data: [],
        };

        const [productBrand, productImage, productCategories] =
            await Promise.all([
                db.brands.findByPk(product.brand_id),
                db.images.findByPk(product.image_id),
                product.getCategories(),
            ]);

        const productData = {
            ...product.dataValues,
            category: productCategories.name,
            image: productImage.fileRoute,
            brand: productBrand.name,
        };

        respuesta.data.push(productData);

        res.json(respuesta);
    },
};

module.exports = productAPIController;
