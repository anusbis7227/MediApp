import pacientRepository from "../repositories/PacientRepository.js";

const getAllPacients = async () => {
  try {
    return await pacientRepository.getAllPacients();
  } catch (error) {
    throw new Error("Erro ao buscar pacientes: " + error.message);
  }
};

const getPacient = async (id) => {
  try {
    return await pacientRepository.getPacientById(id);
  } catch (error) {
    throw new Error("Erro ao buscar paciente: " + error.message);
  }
};

const savePacient = async ({ data, doctorId, pacientId }) => {
  try {
    return await pacientRepository.savePacient({ data, doctorId, pacientId });
  } catch (error) {
    throw new Error("Erro ao salvar paciente: " + error.message);
  }
};

const updatePacient = async (id, { data, doctorId, pacientId }) => {
  try {
    return await pacientRepository.updatePacient(id, { data, doctorId, pacientId });
  } catch (error) {
    throw new Error("Erro ao atualizar paciente: " + error.message);
  }
};

const deletePacient = async (id) => {
  try {
    return await pacientRepository.deletePacient(id);
  } catch (error) {
    throw new Error("Erro ao deletar paciente: " + error.message);
  }
};

const PacientService = {
  getAllPacients,
  getPacient,
  savePacient,
  updatePacient,
  deletePacient
};

export default PacientService;