const User = require("../models/ovineModel");

const getAllOvine = (req, res) => {
    res.json({ mensaje: "Obteniendo todos los ovinos" });
}

const getOvineById = (req, res) => {
    const { id } = req.params;
    res.json({ mensaje: `Obteniendo el ovejo con ID: ${id}` });
}

const createOvine = async (req, res) => {
    try {

        const ovine = await User.create(req.body);

        res.status(201).json({
            mensaje: "Ovejo creado correctamente",
            ovine
        });

    } catch (error) {

        console.log("Error:", error);

        res.status(500).json({
            mensaje: "Error al crear ovejo",
            error: error.message
        });

    }
}

const updateOvine = (req, res) => {
    const { id } = req.params;
    res.json({ mensaje: `Actualizando el ovejo con ID: ${id}` });
}

const deleteOvine = (req, res) => {
    const { id } = req.params;
    res.json({ mensaje: `Inactivando el ovejo con ID: ${id}` });
}

module.exports = {
    getAllOvine,
    getOvineById,
    createOvine,
    updateOvine,
    deleteOvine
}