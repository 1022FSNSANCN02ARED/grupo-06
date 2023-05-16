const express = require("express");
const router = express.Router();

const categoryAPI = require("./api/categoryAPI.js");
router.use("/category", categoryAPI);

const productAPI = require("./api/productAPI.js");
router.use("/product", productAPI);

const userAPI = require("./api/userAPI.js");
router.use("/user", userAPI);

module.exports = router;
