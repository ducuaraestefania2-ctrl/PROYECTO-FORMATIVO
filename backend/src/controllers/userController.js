const {
    createUserService,
    getAllUsers: getAllUsersService,
    getUserById: getUserByIdService,
    updateUser: updateUserService,
    deleteIdUsers: deleteUserService
} = require("../services/userService");

const Response = require("../functions/response");
const path = require ("path")
const fs = require("fs");
const { getTemplateEmail, sendEmail } = require("../services/emailService");

// Obtener todos los usuarios
const getAllUsers = async (req, res) => {

    try {

        const users = await getAllUsersService();

        const response = new Response(
            true,
            "Registros encontrados",
            users
        );

        return res.status(200).json(response.json);

    } catch (error) {

        const response = new Response(
            false,
            "Error al obtener los usuarios",
            error.message
        );

        return res.status(500).json(response.json);
    }

};

// Obtener usuario por ID
const getUserByIdController = async (req, res) => {

    try {

        const { id } = req.params;

        const user = await getUserByIdService(id);

        if (!user) {

            const response = new Response(
                false,
                "Usuario no encontrado",
                null
            );

            return res.status(404).json(response.json);
        }

        const response = new Response(
            true,
            "Registro encontrado",
            user
        );

        return res.status(200).json(response.json);

    } catch (error) {

        const response = new Response(
            false,
            "Error al obtener el usuario",
            error.message
        );

        return res.status(500).json(response.json);
    }

};
// Crear usuario
const createUser = async (req, res) => {

    const {
        name,
        email,
        password,
        documentId,
        postJob,
        verifyEmail,
        active
    } = req.body;

    let errors = [];

    if (
        !name ||
        !email ||
        !password ||
        !documentId ||
        !postJob ||
        verifyEmail === undefined ||
        active === undefined
    ) {
        errors.push("Todos los campos son obligatorios");
    }

    if (name === "") errors.push("El campo name no puede estar vacío");
    if (email === "") errors.push("El campo email no puede estar vacío");
    if (password === "") errors.push("El campo password no puede estar vacío");
    if (documentId === "") errors.push("El campo documentId no puede estar vacío");
    if (postJob === "") errors.push("El campo postJob no puede estar vacío");

    if (errors.length > 0) {

        const response = new Response(
            false,
            "Error al crear el usuario",
            errors
        );

        return res.status(400).json(response.json);
    }

    const data = {
        name,
        email,
        password,
        documentId,
        postJob,
        verifyEmail,
        active
    };

    try {

        const user = await createUserService(data);
        //inicio de envio de correo de confirmacion

// Ruta del archivo JSON
let templatePath = path.join(
    process.cwd(),
    "public",
    "template",
    "configEmail.json"
);

// Leer configuración
const confirmEmailTemplate = fs.readFileSync(
    templatePath,
    "utf8"
);

const dataTemplate = JSON.parse(confirmEmailTemplate);

// Leer archivo HTML
const templatehtml = fs.readFileSync(
    path.join(process.cwd(), dataTemplate.html),
    "utf8"
);

// Reemplazar propiedades
let htmlModific = templatehtml;

for (const key in dataTemplate.params) {

htmlModific = htmlModific.replaceAll("@nameBtn", dataTemplate.params["@nameBtn"]);
htmlModific = htmlModific.replaceAll("@cuentaempresa", dataTemplate.params["@cuentaempresa"]);
htmlModific = htmlModific.replaceAll("@Link", dataTemplate.params["@Link"]);
htmlModific = htmlModific.replaceAll("@name", name);

}

console.log("ASUNTO:");
console.log(dataTemplate.subject);

console.log("HTML:");
console.log(htmlModific);
await sendEmail(
    email,
    dataTemplate.subject,
    "",
    htmlModific
);
// fin de correo de confirmacion

        const response = new Response(
            true,
            "Usuario creado exitosamente",
            user
        );

        return res.status(201).json(response.json);

    } catch (error) {

        console.error("Error al crear el usuario:", error);

        const response = new Response(
            false,
            "Error interno al crear el usuario",
            error.message
        );

        return res.status(500).json(response.json);
    }
};

// Actualizar usuario
const updateUser = async (req, res) => {

    try {

        const { id } = req.params;

        const {
            name,
            email,
            password,
            documentId,
            postJob,
            verifyEmail,
            active
        } = req.body;

        const updatedUser = await updateUserService(id, {
            name,
            email,
            password,
            documentId,
            postJob,
            verifyEmail,
            active
        });

        return res.status(200).json({
            mensaje: `Usuario actualizado con ID: ${id}`,
            user: updatedUser
        });

    } catch (error) {

        console.error("Error al actualizar el usuario:", error);

        const response = new Response(
            false,
            "Error interno al actualizar el usuario",
            error.message
        );

        return res.status(500).json(response.json);
    }
};

// Eliminar usuario
const deleteUser = async (req, res) => {

    try {

        const { id } = req.params;

        const updated = await deleteUserService(id);

        if (updated === 0) {
            return res.status(404).json({
                mensaje: "Usuario no encontrado"
            });
        }

        return res.status(200).json({
            mensaje: `Usuario con ID ${id} inactivado correctamente`
        });

    } catch (error) {

        console.error(error);

        return res.status(500).json({
            mensaje: "Error al inactivar el usuario",
            error: error.message
        });
    }
};

module.exports = {
    getAllUsers,
    getUserById: getUserByIdController,
    createUser,
    updateUser,
    deleteUser
}; 