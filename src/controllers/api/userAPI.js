const db = require("../../database/models");

//Aqui tienen otra forma de llamar a cada uno de los modelos
//---------------------------
//Dentro del actorsAPIController uso las dos forma de poder llamar a nuestros modelo
//----------------------------------
const userAPIController = {
    list: (req, res) => {
        db.Users.findAll().then((users) => {
            let allUsers = users.map((user) => {
                const { password, ...userWithoutPassword } = user.toJSON();
                return userWithoutPassword;
            });

            let respuesta = {
                meta: {
                    status: 200,
                    total: allUsers.length,
                    url: "api/user",
                },
                data: allUsers,
            };

            res.json(respuesta);
        });
    },
    details: async (req, res) => {
        let userName = req.params.userName;

        const user = await db.Users.findOne({
            where: {
                userName: userName,
            },
        });

        let respuesta = {
            meta: {
                status: 200,
                total: 1,
                url: "api/user/:userName",
            },
            data: [],
        };

        respuesta.data.push(user);

        res.json(respuesta);
    },
};

module.exports = userAPIController;
