const getAllFeedings = (req, res) => {
    res.json({
        mensaje: "Obteniendo todos los registros de alimentación"
    });
};

const getFeedingById = (req, res) => {
    const { id } = req.params;
    res.json({
        mensaje: `Obteniendo el registro de alimentación con ID: ${id}`
    });
};

const createFeeding = (req, res) => {
    const { tipoAlimento, cantidad, fechaAlimentacion } = req.body;
    let errores = [];

    if (!tipoAlimento || tipoAlimento === "") {
        errores.push("El tipo de alimento es requerido");
    }
    if (!cantidad || cantidad === "") {
        errores.push("La cantidad es requerida");
    }
    if (!fechaAlimentacion || fechaAlimentacion === "") {
        errores.push("La fecha de alimentación es requerida");
    }

    if (errores.length > 0) {
        return res.status(400).json({
            success: false,
            mensaje: "Error al registrar la alimentación",
            errores
        });
    }

    res.json({
        success: true,
        mensaje: "Registro de alimentación creado con éxito"
    });
};

const updateFeeding = (req, res) => {
    const { id } = req.params;
    res.json({
        mensaje: `Actualizando el registro de alimentación con ID: ${id}`
    });
};

const deleteFeeding = (req, res) => {
    const { id } = req.params;
    res.json({
        mensaje: `Inactivando el registro de alimentación con ID: ${id}`
    });
};

module.exports = {
    getAllFeedings,
    getFeedingById,
    createFeeding,
    updateFeeding,
    deleteFeeding
};