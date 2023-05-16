const db = require("../../database/models");

//Aqui tienen otra forma de llamar a cada uno de los modelos
//---------------------------
//Dentro del actorsAPIController uso las dos forma de poder llamar a nuestros modelo
//----------------------------------
const productAPIController = {
    list: (req, res) => {
        db.Product.findAll().then((categorys) => {
            let respuesta = {
                meta: {
                    status: 200,
                    total: categorys.length,
                    url: "api/product",
                },
                data: categorys,
            };
            res.json(respuesta);
        });
    },
};

module.exports = productAPIController;