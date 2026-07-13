const getAllBirths = (req, res) => {
    res.json({mensaje: "Obteniendo todos los registros de nacimientos"});
}

const getBirthsById = (req, res) => {
    const {id} = req.params;
    res.json({mensaje: `Obteniendo el registro de nacimiento con ID: ${id}`});
}

const createBirths = (req, res) => {
    res.json({mensaje: "Creando un nuevo registro de nacimiento"});
}

const updateBirths = (req, res) => {
    const {id} = req.params;
    res.json({mensaje: `Actualizando el registro de nacimiento con ID: ${id}`});
}

const deleteBirths = (req, res) => {
    const {id} = req.params;
    res.json({mensaje: `Eliminando el registro de nacimiento con ID: ${id}`});
}

module.exports = {
    getAllBirths,
    getBirthsById,
    createBirths,
    updateBirths,
    deleteBirths
};