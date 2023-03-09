const path = require("path");
const { body } = require("express-validator");

const validations = {
    register: [
        body("name")
            .notEmpty()
            .withMessage("Debes escribir un nombre.")
            .bail()
            .matches(/^[a-zA-Z0-9 ]+$/)
            .withMessage("Solo se admiten letras y números."),
        body("lastname")
            .notEmpty()
            .withMessage("Debes escribir un apellido.")
            .bail()
            .matches(/^[a-zA-Z0-9 ]+$/)
            .withMessage("Solo se admiten letras y números."),
        body("username")
            .notEmpty()
            .withMessage("Debes escribir un nombre de usuario.")
            .bail()
            .matches(/^[a-zA-Z0-9 ]+$/)
            .withMessage("Solo se admiten letras y números."),
        body("email")
            .notEmpty()
            .withMessage("Debes escribir un email válido.")
            .bail()
            .isEmail()
            .withMessage("Debes escribir un email en formato válido."),
        body("password")
            .notEmpty()
            .withMessage("Debes escribir una contraseña."),
        body("phone")
            .notEmpty()
            .withMessage("Debes escribir un numero de celular.")
            .bail()
            .isLength({ min: 6, max: 20 })
            .withMessage("Debe tener entre 6 y 20 dígitos."),
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
    ],
    login: [
        body("login")
            .notEmpty()
            .withMessage("Email/usuario o contraseña inválidos.")
            .bail()
            .matches(/^[a-zA-Z0-9 ]+$/)
            .withMessage("Solo se admiten letras y números."),
        body("loginPassword")
            .notEmpty()
            .withMessage("Debes escribir una contraseña."),
    ],
    turns: [
        body("date").notEmpty().withMessage("Selecciona una fecha."),
        body("turnsTime").notEmpty().withMessage("Selecciona un horario."),
    ],
    store: [
        body("name")
            .notEmpty()
            .withMessage("Ingresa el nombre del producto.")
            .bail()
            .matches(/^[a-zA-Z0-9 ]+$/)
            .withMessage("Solo se admiten letras y números."),
        body("price").notEmpty().withMessage("Ingresa el precio del producto"),
        body("brand")
            .notEmpty()
            .withMessage("Ingresa la marca del producto.")
            .bail()
            .matches(/^[a-zA-Z0-9 ]+$/)
            .withMessage("Solo se admiten letras y números."),
        body("category").notEmpty().withMessage("Selecciona una categoría."),
        body("discount")
            .optional()
            .isInt({ min: 1, max: 100 })
            .withMessage("Debe ingresar un número entre 1 y 100"),
        body("image").custom((value, { req }) => {
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
        body("description")
            .notEmpty()
            .withMessage("Ingresa el nombre del producto."),
    ],
};

module.exports = validations;
