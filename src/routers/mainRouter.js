const { Router } = require("express");
const router = Router();

const usersRouter = require("./usersRouter");
router.use("/", usersRouter);

const productRouter = require("./productRouter");
router.use("/products", productRouter);

const cartRouter = require("./cartRouter");
router.use("/carrito", cartRouter);

const apisRouter = require("./apiRouter");
router.use("/api", apisRouter);

module.exports = router;
