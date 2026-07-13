const mortality = require("../models/mortalityModel");

// Crear mortalidad
const createMortality = async (data) => {
  try {
    const newMortality = await mortality.create(data);
    return newMortality;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

// Obtener todas las mortalidades
const getAllMortalities = async () => {
  try {
    const mortalities = await mortality.findAll();
    return mortalities;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

// Obtener mortalidad por id
const getMortalityById = async (id) => {
  try {
    const mortalityid = await mortality.findOne({ where: { id } });
    return mortalityid;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

// Eliminar mortalidad
const deleteMortality = async (id) => {
  try {
    const deletedMortality = await mortality.destroy({ where: { id } });
    return deletedMortality;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

// Actualizar mortalidad
const updateMortality = async (id, data) => {
  try {
    await mortality.update(data, { where: { id } });

    const updatedMortality = await mortality.findOne({ where: { id } });
    return updatedMortality;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

module.exports = {
  createMortality,
  getAllMortalities,
  getMortalityById,
  deleteMortality,
  updateMortality,
};