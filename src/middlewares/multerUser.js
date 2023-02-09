const path = require("path");
const multer = require("multer");

const storage = multer.diskStorage({
  destination: path.join(__dirname, "../../public/images/avatars"),
  filename: (req, file, cb) => {
    cb(null, "image-" + Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({
  storage,
});

module.exports = upload;