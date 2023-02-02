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
    const allProducts = products.findAll();
    const productos = allProducts.find((e) => e.id == id);
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
    const allProducts = products.findAll();
    const productToEdit = allProducts.find((e) => e.id == id);
    res.render("pages/edit", { productToEdit: productToEdit });
  },

  update: (req, res) => {
    let allProducts = products.findAll();
    const id = req.params.id;
    let productToEdit = allProducts.find((product) => product.id == id);

    if (productToEdit) {
      productToEdit.name = req.body.name;
      console.log(productToEdit);
      res.render("pages/details", { product: productToEdit });
    }
  },
};
