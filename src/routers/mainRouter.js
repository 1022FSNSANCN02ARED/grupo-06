// Podemos usar Express como const, pero en éste caso solo requerimos el Router de Express.
const { Router } = require("express");
const router = Router();

const usersRouter = require("./usersRouter");
router.use("/", usersRouter);

const productRouter = require("./productRouter");
router.use("/products", productRouter);

module.exports = router;
