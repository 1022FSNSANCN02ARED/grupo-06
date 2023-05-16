const { Router } = require("express");
const router = Router();
const userAPIController = require("../../controllers/api/userAPI");

//Rutas
//Listado de todos los generos
router.get("/", userAPIController.list);

module.exports = router;
