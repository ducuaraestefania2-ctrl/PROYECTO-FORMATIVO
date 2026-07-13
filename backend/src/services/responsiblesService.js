const responsible = require("../models/responsibleModel");


// Crear responsable
const createResponsible = async (data) => {
  try {
    const newResponsible = await new responsible(data);
    return newResponsible;
  } catch (error) {
    console.log(error);
    throw error;
  }
};


// Obtener todos los responsables
const getAllResponsibles = async () => {
  try {
    const responsibles = await responsible.findAll();
    return responsibles;
  } catch (error) {
    console.log(error);
    throw error;
  }
};


// Obtener responsable por id
const getResponsibleById = async (id) => {
  try {
    const responsibleid = await responsible.findOne({ where: { id } });
    return responsibleid;
  } catch (error) {
    console.log(error);
  }
};


// Inactivar responsable
const deleteResponsible = async (id) => {
  try {
    const deleteResponsible = await responsible.destroy({ where: { id } });
    return deleteResponsible;
  } catch (error) {
    console.log(error);
  }
};


// Actualizar responsable
const updateResponsible = async (id, data) => {
  try {
    const updateResponsible = await responsible.update(data, { where: { id } });
    return updateResponsible;
  } catch (error) {
    console.log(error);
  }
};


module.exports = {
  createResponsible,
  getAllResponsibles,
  getResponsibleById,
  deleteResponsible,
  updateResponsible,
};