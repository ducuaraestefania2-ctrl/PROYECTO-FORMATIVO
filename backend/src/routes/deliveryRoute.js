const express = require('express');
const router = express.Router();

const {
    getAllDelivery,
    getDeliveryById,
    createDelivery,
    updateDelivery,
    deleteDelivery
} = require("../controllers/deliveryController.js");

// Obtener todos los deliveries
router.get("/deliveries", getAllDelivery);

// Obtener delivery por ID
router.get("/deliveries/:id", getDeliveryById);

// Crear delivery
router.post("/deliveries", createDelivery);

// Actualizar delivery
router.put("/deliveries/:id", updateDelivery);

// Eliminar delivery
router.delete("/deliveries/:id", deleteDelivery);

module.exports = router;