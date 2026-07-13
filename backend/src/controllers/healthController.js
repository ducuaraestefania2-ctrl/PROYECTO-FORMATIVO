const getAllHealthRecords = (req, res) => {
    res.json({
        mensaje: "Obteniendo todos los registros sanitarios"
    });
};

const getHealthRecordById = (req, res) => {
    const { id } = req.params;
    res.json({
        mensaje: `Obteniendo el registro sanitario con ID: ${id}`
    });
};

const createHealthRecord = (req, res) => {
    const { diagnostico, medicamento, fechaTratamiento } = req.body;
    let errores = [];

    if (!diagnostico || diagnostico === "") {
        errores.push("El diagnóstico es requerido");
    }
    if (!medicamento || medicamento === "") {
        errores.push("El medicamento o tratamiento es requerido");
    }
    if (!fechaTratamiento || fechaTratamiento === "") {
        errores.push("La fecha del tratamiento es requerida");
    }

    if (errores.length > 0) {
        return res.status(400).json({
            success: false,
            mensaje: "Error al crear el registro sanitario",
            errores
        });
    }

    res.json({
        success: true,
        mensaje: "Registro sanitario creado con éxito"
    });
};

const updateHealthRecord = (req, res) => {
    const { id } = req.params;
    res.json({
        mensaje: `Actualizando el registro sanitario con ID: ${id}`
    });
};

const deleteHealthRecord = (req, res) => {
    const { id } = req.params;
    res.json({
        mensaje: `Inactivando el registro sanitario con ID: ${id}`
    });
};

module.exports = {
    getAllHealthRecords,
    getHealthRecordById,
    createHealthRecord,
    updateHealthRecord,
    deleteHealthRecord
};