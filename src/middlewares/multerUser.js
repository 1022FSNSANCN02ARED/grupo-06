const path = require("path");
const multer = require("multer");

const storage = multer.diskStorage({
    destination: (req, fil, cb) => {
        cb(null, path.join(__dirname, "../../public/images/avatars"));
    },
    filename: (req, file, cb) => {
        cb(null, "avatar-" + Date.now() + path.extname(file.originalname));
    },
});

const upload = multer({
    storage,
});

module.exports = upload;
