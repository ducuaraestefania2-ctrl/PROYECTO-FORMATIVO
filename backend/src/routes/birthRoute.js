const express = require('express');
const router = express.Router();

const {
    getAllBirths,
    getBirthsById,
    createBirths,
    updateBirths,
    deleteBirths
} = require("../controllers/birthsController.js");

// Obtener todos los nacimientos
router.get("/births", getAllBirths);

// Obtener nacimiento por ID
router.get("/births/:id", getBirthsById);

// Crear nacimiento
router.post("/births", createBirths);

// Actualizar nacimiento
router.put("/births/:id", updateBirths);

// Eliminar nacimiento
router.delete("/births/:id", deleteBirths);

module.exports = router;