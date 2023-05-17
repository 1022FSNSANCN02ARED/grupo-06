const path = require("path");
const multer = require("multer");

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, path.join(__dirname, "../../public/images/avatars"));
    },
    filename: (req, file, cb) => {
        cb(null, "avatar-" + Date.now() + path.extname(file.originalname));
    },
});

const storage2 = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, path.join(__dirname, "../../haircut/public/images/avatars"));
    },
    filename: (req, file, cb) => {
        cb(null, "avatar-" + Date.now() + path.extname(file.originalname));
    },
});

const upload = multer({
    storage: storage,
});

const upload2 = multer({
    storage: storage2,
});

module.exports = { upload, upload2 };
