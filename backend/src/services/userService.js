const user = require("../models/userModel");

// Crear usuario
const createUserService = async (data) => {
  try {
    const newUser = await user.create(data);
    return newUser;
  } catch (error) {
    console.log("ERROR COMPLETO:", error);
    console.log("MENSAJE SQL:", error.parent?.sqlMessage);
    throw error;
  }
};



// Obtener todos los usuarios
const getAllUsers = async () => {
    try {
        const users = await user.findAll();
        return users;
    } catch (error) {
        throw error;
    }
};

// Obtener usuario por ID
const getUserById = async (id) => {
    try {
        const userFound = await user.findByPk(id);
        return userFound;
    } catch (error) {
        throw error;
    }
};

// Eliminar usuario
const deleteIdUsers = async (id) => {
    try {
        const deletedUser = await user.destroy({
            where: { id }
        });

        return deletedUser;
    } catch (error) {
        throw error;
    }
};

// Actualizar usuario
const updateUser = async (id, data) => {
    try {
        const updatedUser = await user.update(data, {
            where: { id }
        });

        return updatedUser;
    } catch (error) {
        throw error;
    }
};

module.exports = {
    createUserService,
    getAllUsers,
    getUserById,
    deleteIdUsers,
    updateUser
};