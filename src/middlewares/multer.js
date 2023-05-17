const path = require("path");
const multer = require("multer");

const storage = multer.diskStorage({
    destination: path.join(__dirname, "../../public/images/products"),
    filename: (req, file, cb) => {
        cb(null, "image-" + Date.now() + path.extname(file.originalname));
    },
});

const storage2 = multer.diskStorage({
    destination: path.join(__dirname, "../../haircut/public/images/products"),
    filename: (req, file, cb) => {
        cb(null, "image-" + Date.now() + path.extname(file.originalname));
    },
});

const upload = multer({ storage });
const upload2 = multer({ storage: storage2 });

module.exports = { upload, upload2, array: upload.array.bind(upload) };
