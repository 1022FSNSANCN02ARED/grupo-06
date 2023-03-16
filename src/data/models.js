const fs = require("fs");
const path = require("path");

let model = function (tableName) {
    return {
        filePath: path.join(__dirname, "../data/" + tableName + ".json"),
        readFile() {
            let fileContents = fs.readFileSync(this.filePath, "utf8");

            if (fileContents) {
                return JSON.parse(fileContents);
            }

            return [];
        },
        writeFile(contents) {
            let fileContents = JSON.stringify(contents, null, " ");
            fs.writeFileSync(this.filePath, fileContents);
        },
        nextId() {
            let products = this.readFile();
            let lastProduct = products.pop();

            if (lastProduct) {
                return ++lastProduct.id;
            }

            return 1;
        },
        all() {
            return this.readFile();
        },
        find(id) {
            let products = this.readFile();
            return products.find((product) => product.id == id);
        },
        findByField: function (field, text) {
            let allUsers = this.readFile();
            let userFound = allUsers.find((oneUser) => oneUser[field] === text);
            return userFound;
        },
        create(product) {
            let products = this.readFile();
            product.id = this.nextId();
            products.push(product);

            this.writeFile(products);

            return product.id;
        },
        update(product) {
            let products = this.readFile();
            let updatedProducts = products.map((oneProduct) => {
                if (oneProduct.id == product.id) {
                    return product;
                }

                return oneProduct;
            });

            this.writeFile(updatedProducts);

            return product.id;
        },
        delete(id) {
            let products = this.readFile();
            let updatedProducts = products.filter(
                (oneProduct) => oneProduct.id != id
            );

            this.writeFile(updatedProducts);
        },
    };
};

module.exports = model;
