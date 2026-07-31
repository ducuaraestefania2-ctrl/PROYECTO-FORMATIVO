const express = require("express");
const router = express.Router();

const { sendTestEmail } = require("../controllers/emailController");

// Ruta para enviar un correo de prueba
router.post("/test", sendTestEmail);

module.exports = router;