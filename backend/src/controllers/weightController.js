const getAllWeights = (req, res) => {
    res.json({mensaje: "Obteniendo todos los registros de peso"});
}

const getWeightById = (req, res) => {
    const {id} = req.params;
    res.json({mensaje: `Obteniendo el registro de peso con ID: ${id}`});
}

const createWeight = (req, res) => {
    res.json({mensaje: "Creando un nuevo registro de peso"});
}

const updateWeight = (req, res) => {
    const {id} = req.params;
    res.json({mensaje: `Actualizando el registro de peso con ID: ${id}`});
}

const deleteWeight = (req, res) => {
    const {id} = req.params;
    res.json({mensaje: `Eliminando el registro de peso con ID: ${id}`});
}

module.exports = {
    getAllWeights,
    getWeightById,
    createWeight,
    updateWeight,
    deleteWeight
};