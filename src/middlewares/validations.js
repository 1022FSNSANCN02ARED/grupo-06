const path = require("path");
const { body } = require("express-validator");
const multer = require("multer");

const validations = {
    register: [
        body("name")
            .notEmpty()
            .withMessage("Debes escribir un nombre.")
            .bail()
            .matches(/^[a-zA-ZñÑáéíóúÁÉÍÓÚ\s\d]+$/)
            .withMessage("Solo se admiten letras y números.")
            .bail()
            .isLength({ min: 3, max: 20 })
            .withMessage("Debe tener de 3 a 20 caracteres."),
        body("lastname")
            .notEmpty()
            .withMessage("Debes escribir un apellido.")
            .bail()
            .matches(/^[a-zA-ZñÑáéíóúÁÉÍÓÚ\s\d]+$/)
            .withMessage("Solo se admiten letras y números.")
            .bail()
            .isLength({ min: 3, max: 20 })
            .withMessage("Debe tener de 6 a 20 caracteres."),
        body("username")
            .notEmpty()
            .withMessage("Debes escribir un nombre de usuario.")
            .bail()
            .matches(/^[a-zA-ZñÑáéíóúÁÉÍÓÚ\s\d]+$/)
            .withMessage("Solo se admiten letras y números.")
            .bail()
            .isLength({ min: 6, max: 20 })
            .withMessage("Debe tener de 6 a 20 caracteres."),
        body("email")
            .notEmpty()
            .withMessage("Debes escribir un email válido.")
            .bail()
            .isEmail()
            .withMessage("Debes escribir un email en formato válido."),
        body("password")
            .notEmpty()
            .withMessage("Debes escribir una contraseña.")
            .bail()
            .isLength({ min: 6 })
            .withMessage("Debe tener como mínimo 6 caracteres."),
        body("phone")
            .notEmpty()
            .withMessage("Debes escribir un número de celular.")
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
            .withMessage("Email/usuario o contraseña inválidos."),
        body("loginPassword")
            .notEmpty()
            .withMessage("Email/usuario o contraseña inválidos."),
    ],
    turns: [
        body("date")
            .notEmpty()
            .withMessage("Selecciona una fecha.")
            .bail()
            .isDate()
            .withMessage("Selecciona una fecha."),
        body("turnsTime").notEmpty().withMessage("Selecciona un horario."),
    ],
    products: [
        body("name")
            .notEmpty()
            .withMessage("Ingresa el nombre del producto.")
            .bail()
            .matches(/^[a-zA-ZñÑáéíóúÁÉÍÓÚ\s\d]+$/)
            .withMessage("Solo se admiten letras y números."),
        body("price").notEmpty().withMessage("Ingresa el precio del producto"),

        body("category_id").notEmpty().withMessage("Selecciona una categoría."),
        body("discount")
            .optional()
            .custom((value, { req }) => {
                discount = req.body.discount;
                if (discount == 0) {
                    return true;
                } else if (discount >= 1 && discount <= 100) {
                    return true;
                } else {
                    throw new Error("Debe ingresar un número entre 1 y 100");
                }
            }),

        body("image").custom((value, { req }) => {
            let file = req.files[0];
            let acceptedExtensions = [".jpg", ".png"];

            if (file) {
                let fileExtension = path.extname(file.originalname);
                console.log(fileExtension);
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
            .withMessage("Ingresa la descripción del producto."),
    ],
    editProfile: [
        body("firstName")
            .notEmpty()
            .withMessage("Debes escribir un nombre.")
            .bail()
            .matches(/^[a-zA-ZñÑáéíóúÁÉÍÓÚ\s\d]+$/)
            .withMessage("Solo se admiten letras y números.")
            .bail()
            .isLength({ max: 20 })
            .withMessage("Debe tener como máximo 20 caracteres."),
        body("lastName")
            .notEmpty()
            .withMessage("Debes escribir un apellido.")
            .bail()
            .matches(/^[a-zA-ZñÑáéíóúÁÉÍÓÚ\s\d]+$/)
            .withMessage("Solo se admiten letras y números.")
            .bail()
            .isLength({ max: 20 })
            .withMessage("Debe tener como máximo 20 caracteres."),
        body("userName")
            .notEmpty()
            .withMessage("Debes escribir un nombre de usuario.")
            .bail()
            .matches(/^[a-zA-ZñÑáéíóúÁÉÍÓÚ\s\d]+$/)
            .withMessage("Solo se admiten letras y números.")
            .bail()
            .isLength({ max: 20 })
            .withMessage("Debe tener como máximo 20 caracteres."),
        body("email")
            .notEmpty()
            .withMessage("Debes escribir un email válido.")
            .bail()
            .isEmail()
            .withMessage("Debes escribir un email en formato válido."),
        body("cellphone")
            .notEmpty()
            .withMessage("Debes escribir un numero de celular.")
            .bail()
            .isLength({ min: 6, max: 20 })
            .withMessage("Debe tener entre 6 y 20 dígitos."),
    ],
};

module.exports = validations;
