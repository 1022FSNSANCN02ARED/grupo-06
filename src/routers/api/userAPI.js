const { Router } = require("express");
const router = Router();
const userAPIController = require("../../controllers/api/userAPI");

//Rutas
//Listado de todos los generos
router.get("/", userAPIController.list);
router.get("/:userName", userAPIController.details);

module.exports = router;
