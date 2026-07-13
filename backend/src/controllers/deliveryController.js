const { successResponse, errorResponse 

} = require("../functions/response.js");

const getAllDelivery = (req, res) => {
    res.json({mensaje: "Obteniendo todos los partos"});
}

const getDeliveryById = (req, res) => {
    const {id} = req.params;
    res.json({mensaje: `Obteniendo el parto con ID: ${id}`});
}

const createDelivery = (req, res) => {
    res.json({mensaje: "Creando un nuevo parto"});
}

const updateDelivery = (req, res) => {
    const {id} = req.params;
    res.json({mensaje: `Actualizando el parto con ID: ${id}`});
}

const deleteDelivery = (req, res) => {
    const {id} = req.params;
    res.json({mensaje: `Eliminando el parto con ID: ${id}`});
}

module.exports = {
    getAllDelivery,
    getDeliveryById,
    createDelivery,
    updateDelivery,
    deleteDelivery
};