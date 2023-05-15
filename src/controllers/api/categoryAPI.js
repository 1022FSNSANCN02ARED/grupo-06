const db = require("../../database/models");

//Aqui tienen otra forma de llamar a cada uno de los modelos
//---------------------------
//Dentro del actorsAPIController uso las dos forma de poder llamar a nuestros modelo
//----------------------------------
const categoryAPIController = {
    list: (req, res) => {
        db.Category.findAll().then((categorys) => {
            let respuesta = {
                meta: {
                    status: 200,
                    total: categorys.length,
                    url: "api/categorys",
                },
                data: categorys,
            };
            res.json(respuesta);
        });
    },
};

module.exports = categoryAPIController;
