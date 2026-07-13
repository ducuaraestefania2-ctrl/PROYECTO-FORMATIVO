const getAllResponsibles = (req, res) => {
    res.json({
        mensaje: "Obteniendo todos los registros de responsables",
        responsable: "Sistema"
    });
}

const getResponsibleById = (req, res) => {
    const { id } = req.params;
    res.json({
        mensaje: `Obteniendo el registro de responsable con ID: ${id}`,
        responsable: "Sistema"
    });
}

const createResponsible = (req, res) => {
    res.json({
        mensaje: "Creando un nuevo registro de responsable",
        responsable: "Usuario"
    });
}

const updateResponsible = (req, res) => {
    const { id } = req.params;
    res.json({
        mensaje: `Actualizando el registro de responsable con ID: ${id}`,
        responsable: "Usuario"
    });
}

const deleteResponsible = (req, res) => {
    const { id } = req.params;
    res.json({
        mensaje: `Eliminando el registro de responsable con ID: ${id}`,
        responsable: "Administrador"
    });
}

module.exports = {
    getAllResponsibles,
    getResponsibleById,
    createResponsible,
    updateResponsible,
    deleteResponsible
};