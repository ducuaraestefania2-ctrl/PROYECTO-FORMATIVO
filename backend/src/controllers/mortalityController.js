const getAllMortality = (req, res) => {
    res.json({mensaje: "Obteniendo todos los registros de mortalidad"});
}

const getMortalityById = (req, res) => {
    const {id} = req.params;
    res.json({mensaje: `Obteniendo el registro de mortalidad con ID: ${id}`});
}

const createMortality = (req, res) => {
    res.json({mensaje: "Creando un nuevo registro de mortalidad"});
}

const updateMortality = (req, res) => {
    const {id} = req.params;
    res.json({mensaje: `Actualizando el registro de mortalidad con ID: ${id}`});
}

const deleteMortality = (req, res) => {
    const {id} = req.params;
    res.json({mensaje: `inactivando el registro de mortalidad con ID: ${id}`});
}

module.exports = {
    getAllMortality,
    getMortalityById,
    createMortality,
    updateMortality,
    deleteMortality
};