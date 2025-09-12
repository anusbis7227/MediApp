import doctorRepository from "../repositories/DoctorRepository.js";

const getAllDoctors = async () => {
  try {
    return await doctorRepository.getAllDoctors();
  } catch (error) {
    throw new Error("Erro ao buscar médicos: " + error.message);
  }
};

const getDoctor = async (id) => {
  try {
    return await doctorRepository.getDoctorById(id);
  } catch (error) {
    throw new Error("Erro ao buscar médico: " + error.message);
  }
};

const saveDoctor = async ({ data, doctorId, pacientId }) => {
  try {
    return await doctorRepository.saveDoctor({ data, doctorId, pacientId });
  } catch (error) {
    throw new Error("Erro ao salvar médico: " + error.message);
  }
};

const updateDoctor = async (id, { data, doctorId, pacientId }) => {
  try {
    return await doctorRepository.updateDoctor(id, { data, doctorId, pacientId });
  } catch (error) {
    throw new Error("Erro ao atualizar médico: " + error.message);
  }
};

const deleteDoctor = async (id) => {
  try {
    return await doctorRepository.deleteDoctor(id);
  } catch (error) {
    throw new Error("Erro ao deletar médico: " + error.message);
  }
};

const DoctorService = {
  getAllDoctors,
  getDoctor,
  saveDoctor,
  updateDoctor,
  deleteDoctor
};

export default DoctorService;