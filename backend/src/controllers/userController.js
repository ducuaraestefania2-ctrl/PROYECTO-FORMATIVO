const User = require("../models/userModel");

const getAllUsers = (req, res) => {
    res.json({ mensaje: "Obteniendo todos los usuarios" });
}

const getUserById = (req, res) => {
    const { id } = req.params;
    res.json({ mensaje: `Obteniendo el usuario con ID: ${id}` });
}

const createUser = async (req, res) => {
    try {

        const user = await User.create(req.body);

        res.status(201).json({
            mensaje: "Usuario creado correctamente",
            user
        });

    } catch (error) {

        console.log("Error:", error);

        res.status(500).json({
            mensaje: "Error al crear usuario",
            error: error.message
        });

    }
}

const updateUser = (req, res) => {
    const { id } = req.params;
    res.json({ mensaje: `Actualizando el usuario con ID: ${id}` });
}

const deleteUser = (req, res) => {
    const { id } = req.params;
    res.json({ mensaje: `Inactivando el usuario con ID: ${id}` });
}

module.exports = {
    getAllUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser
}