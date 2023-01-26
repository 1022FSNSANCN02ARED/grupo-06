const { findAll } = require("../data/products");
const products = require("../data/products");

module.exports = {
  catalogue: (req, res) => {
    res.render("pages/catalogo");
  },
  cart: (req, res) => {
    res.render("pages/carrito");
  },
  details: (req, res) => {
    const id = req.params.id;
    const products = findAll();
    const productos = products.find((e) => e.id == id);
    res.render("pages/details", {
      productos,
    });
  },
  create: (req, res) => {
    res.render("pages/create");
  },

  store: (req, res) => {
    const product = {
      id: Date.now(),
      name: req.body.name,
      description: req.body.description,
      category: req.body.category,
      price: Number(req.body.price),
      discount: Number(req.body.discount),
      image: req.file ? req.file.filename : "default-image.png",
    };
    // res.send(product);
    products.saveProduct(product);

    res.redirect(product);
  },

  edit: (req, res) => {
    const id = req.params.id;
    const products = findAll();
    const product = products.find((e) => e.id == id);
    res.render("pages/edit", { product });
  },

  update: (req, res) => {
    let products = findAll();
    let productToEdit = products.find((product) => product.id == req.params.id);
    console.log(productToEdit);
    if (productToEdit) {
      productToEdit.name = req.body.name;
    }
    console.log(productToEdit);
    res.render("pages/details", { product: productToEdit });
  },
};
