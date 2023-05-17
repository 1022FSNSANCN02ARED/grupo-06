const { Router } = require("express");
const router = Router();
const productAPIController = require("../../controllers/api/productAPI");

//Rutas
//Listado de todos los generos
router.get("/", productAPIController.list);
router.get("/last", productAPIController.lastProduct);
router.get("/:id", productAPIController.details);

module.exports = router;
