const birth = require("../models/birthModel");

// Crear nacimiento
const createBirth = async (data) => {
  try {
    const newBirth = await birth.create(data);
    return newBirth;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

// Obtener todos los nacimientos
const getAllBirths = async () => {
  try {
    return await birth.findAll();
  } catch (error) {
    console.log(error);x  
    throw error;
  }
};

// Obtener nacimiento por id
const getBirthById = async (id) => {
  try {
    return await birth.findOne({ where: { id } });
  } catch (error) {
    console.log(error);
    throw error;
  }
};

// Eliminar nacimiento
const deleteBirth = async (id) => {
  try {
    return await birth.destroy({ where: { id } });
  } catch (error) {
    console.log(error);
    throw error;
  }
};

// Actualizar nacimiento
const updateBirth = async (id, data) => {
  try {
    await birth.update(data, { where: { id } });
    return await birth.findByPk(id);
  } catch (error) {
    console.log(error);
    throw error;
  }
};

module.exports = {
  createBirth,
  getAllBirths,
  getBirthById,
  deleteBirth,
  updateBirth,
};