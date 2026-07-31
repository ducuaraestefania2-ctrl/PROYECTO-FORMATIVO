const express = require("express");
const router = express.Router();

const {
    getAllUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser
} = require("../controllers/userController.js");

/**
 * @swagger
 * /api/user:
 *   get:
 *     summary: Obtener todos los usuarios
 *     responses:
 *       200:
 *         description: Lista de usuarios
 */
router.get("/", getAllUsers);

/**
 * @swagger
 * /api/user/{id}:
 *   get:
 *     summary: Obtener usuario por ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Usuario encontrado
 */
router.get("/:id", getUserById);

/**
 * @swagger
 * /api/user:
 *   post:
 *     summary: Crear usuario
 *     responses:
 *       201:
 *         description: Usuario creado
 */
router.post("/", createUser);

/**
 * @swagger
 * /api/user/{id}:
 *   put:
 *     summary: Actualizar usuario
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Usuario actualizado
 */
router.put("/:id", updateUser);

/**
 * @swagger
 * /api/user/{id}:
 *   delete:
 *     summary: Eliminar usuario
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Usuario eliminado
 */
router.delete("/:id", deleteUser);

module.exports = router;