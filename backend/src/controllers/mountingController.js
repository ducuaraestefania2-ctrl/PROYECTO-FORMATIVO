const {
    createMountingService,
    getAllMountings: getAllMountingsService,
    getMountingById: getMountingByIdService,
    updateMounting: updateMountingService,
    deleteMounting: deleteMountingService
} = require("../services/mountingService");

const Response = require("../functions/response");

// Obtener todas las montas
const getAllMountings = async (req, res) => {

    try {

        const mountings = await getAllMountingsService();

        const response = new Response(
            true,
            "Registros encontrados",
            mountings
        );

        return res.status(200).json(response.json);

    } catch (error) {

        const response = new Response(
            false,
            "Error al obtener las montas",
            error.message
        );

        return res.status(500).json(response.json);
    }

};


// Obtener monta por ID
const getMountingByIdController = async (req, res) => {

    try {

        const { id } = req.params;

        const mounting = await getMountingByIdService(id);

        if (!mounting) {

            const response = new Response(
                false,
                "Monta no encontrada",
                null
            );

            return res.status(404).json(response.json);
        }

        const response = new Response(
            true,
            "Registro encontrado",
            mounting
        );

        return res.status(200).json(response.json);

    } catch (error) {

        const response = new Response(
            false,
            "Error al obtener la monta",
            error.message
        );

        return res.status(500).json(response.json);
    }

};
// Crear monta
const createMounting = async (req, res) => {

    const {
        mounting,
        result_mounting,
        breeding_male
    } = req.body;


    let errors = [];


    if (
    mounting === undefined ||
    result_mounting === undefined ||
    breeding_male === undefined
) {
    errors.push("Todos los campos son obligatorios");
}

    if (mounting === "") {
        errors.push("El campo mounting no puede estar vacío");
    }

    if (result_mounting === "") {
        errors.push("El campo result_mounting no puede estar vacío");
    }

    if (breeding_male === "") {
        errors.push("El campo breeding_male no puede estar vacío");
    }


    if (errors.length > 0) {

        const response = new Response(
            false,
            "Error al crear la monta",
            errors
        );

        return res.status(400).json(response.json);
    }


    const data = {
        mounting,
        result_mounting,
        breeding_male
    };


    try {

        const mountingCreated = await createMountingService(data);


        const response = new Response(
            true,
            "Monta registrada exitosamente",
            mountingCreated
        );


        return res.status(201).json(response.json);


    } catch (error) {

        console.error("Error al registrar la monta:", error);


        const response = new Response(
            false,
            "Error interno al registrar la monta",
            error.message
        );


        return res.status(500).json(response.json);
    }
};



// Actualizar monta
const updateMounting = async (req, res) => {

    try {

        const { id } = req.params;


        const {
            mounting,
            result_mounting,
            breeding_male
        } = req.body;



        const updatedMounting = await updateMountingService(id, {
            mounting,
            result_mounting,
            breeding_male
        });



        return res.status(200).json({
            mensaje: `Monta actualizada con ID: ${id}`,
            mounting: updatedMounting
        });



    } catch (error) {

        console.error("Error al actualizar la monta:", error);


        const response = new Response(
            false,
            "Error interno al actualizar la monta",
            error.message
        );


        return res.status(500).json(response.json);
    }
};



// Inactivar monta
const deleteMounting = async (req, res) => {

    try {

        const { id } = req.params;


        const [updated] = await deleteMountingService(id);



        if (updated === 0) {

            return res.status(404).json({
                mensaje: "Monta no encontrada"
            });

        }



        return res.status(200).json({
            mensaje: `Monta con ID ${id} inactivada correctamente`
        });



    } catch (error) {

        console.error(error);


        return res.status(500).json({
            mensaje: "Error al inactivar la monta"
        });

    }
};



module.exports = {
    getAllMountings,
    getMountingById: getMountingByIdController,
    createMounting,
    updateMounting,
    deleteMounting
};