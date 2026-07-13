const express = require('express');
const router = express.Router();

const {
    getAllResponsibles,
    getResponsibleById,
    createResponsible,
    updateResponsible,
    deleteResponsible
} = require("../controllers/responsiblesController.js");

// GET todos
router.get("/", getAllResponsibles);

// GET por ID
router.get("/:id", getResponsibleById);

// POST crear
router.post("/", createResponsible);

// PUT actualizar
router.put("/:id", updateResponsible);

// DELETE eliminar
router.delete("/:id", deleteResponsible);

module.exports = router;