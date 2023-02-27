const path = require("path");
const { body } = require("express-validator");

const validations = [
    /* Register validations */
    body("name").notEmpty().withMessage("Debes escribir un nombre."),
    body("lastname").notEmpty().withMessage("Debes escribir un nombre."),
    body("username").notEmpty().withMessage("Debes escribir un apellido."),
    body("email")
        .notEmpty()
        .withMessage("Debes escribir un email válido.")
        .bail()
        .isEmail()
        .withMessage("Debes escribir un email en formato válido."),
    body("password").notEmpty().withMessage("Debes escribir una contraseña."),
    body("phone")
        .notEmpty()
        .withMessage("Debes escribir un numero de celular."),
    body("avatar").custom((value, { req }) => {
        let file = req.file;
        let acceptedExtensions = [".jpg", ".png"];

        if (file) {
            let fileExtension = path.extname(file.originalname);
            if (!acceptedExtensions.includes(fileExtension)) {
                throw new Error(
                    "Las extensiones de imágenes permitidas son .jpg o .png."
                );
            }
        }

        return true;
    }),

    /* Login validations */
    body("login")
        .notEmpty()
        .withMessage("Email/usuario o contraseña inválidos."),
    body("loginPassword")
        .notEmpty()
        .withMessage("Debes escribir una contraseña."),
];

module.exports = validations;
