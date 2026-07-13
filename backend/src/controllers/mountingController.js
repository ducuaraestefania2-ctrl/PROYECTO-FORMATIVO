const Mounting = require("../models/mountingModel");

const getAllMountings = async (req, res) => {
    try {
        const mountings = await Mounting.findAll();

        res.status(200).json({
            success: true,
            data: mountings
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

const getMountingById = async (req, res) => {
    try {
        const { id } = req.params;

        const mounting = await Mounting.findByPk(id);

        if (!mounting) {
            return res.status(404).json({
                success: false,
                message: "Monta no encontrada"
            });
        }

        res.status(200).json({
            success: true,
            data: mounting
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

const createMounting = async (req, res) => {
    try {
        console.log("BODY:", req.body);

        const { mounting, result_mounting, breeding_male } = req.body;

        const newMounting = await Mounting.create({
            mounting,
            result_mounting,
            breeding_male
        });

        res.status(201).json({
            success: true,
            data: newMounting
        });

    } catch (error) {
        console.error("ERROR COMPLETO:", error);

        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

const updateMounting = async (req, res) => {
    try {
        const { id } = req.params;

        const mounting = await Mounting.findByPk(id);

        if (!mounting) {
            return res.status(404).json({
                success: false,
                message: "Monta no encontrada"
            });
        }

        await mounting.update(req.body);

        res.status(200).json({
            success: true,
            message: "Monta actualizada correctamente",
            data: mounting
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

const deleteMounting = async (req, res) => {
    try {
        const { id } = req.params;

        const mounting = await Mounting.findByPk(id);

        if (!mounting) {
            return res.status(404).json({
                success: false,
                message: "Monta no encontrada"
            });
        }

        await mounting.destroy();

        res.status(200).json({
            success: true,
            message: "Monta eliminada correctamente"
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

module.exports = {
    getAllMountings,
    getMountingById,
    createMounting,
    updateMounting,
    deleteMounting
};