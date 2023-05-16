const { Router } = require("express");
const router = Router();
const categoryAPIController = require("../../controllers/api/categoryAPI");

//Rutas
//Listado de todos los generos
router.get("/", categoryAPIController.list);

module.exports = router;
