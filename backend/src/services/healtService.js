const health = require("../models/healthModel");


// Crear salud
const createHealth = async (data) => {
  try {
    const newHealth = await new health(data);
    return newHealth;
  } catch (error) {
    console.log(error);
    throw error;
  }
};


// Obtener todos los registros de salud
const getAllHealths = async () => {
  try {
    const healths = await health.findAll();
    return healths;
  } catch (error) {
    console.log(error);
    throw error;
  }
};


// Obtener salud por id
const getHealthById = async (id) => {
  try {
    const healthid = await health.findOne({ where: { id } });
    return healthid;
  } catch (error) {
    console.log(error);
  }
};


// Inactivar salud
const deleteHealth = async (id) => {
  try {
    const deleteHealth = await health.destroy({ where: { id } });
    return deleteHealth;
  } catch (error) {
    console.log(error);
  }
};


// Actualizar salud
const updateHealth = async (id, data) => {
  try {
    const updateHealth = await health.update(data, { where: { id } });
    return updateHealth;
  } catch (error) {
    console.log(error);
  }
};


module.exports = {
  createHealth,
  getAllHealths,
  getHealthById,
  deleteHealth,
  updateHealth,
};