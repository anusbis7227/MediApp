import prescriptionRepository from "../repositories/PrescriptionRepository.js";

const getAllPrescriptions = async () => {
  try {
    return await prescriptionRepository.getAllPrescriptions();
  } catch (error) {
    throw new Error("Erro ao buscar prescrições: " + error.message);
  }
};

const getPrescription = async (id) => {
  try {
    return await prescriptionRepository.getPrescriptionById(id);
  } catch (error) {
    throw new Error("Erro ao buscar prescrição: " + error.message);
  }
};

const savePrescription = async ({ data, doctorId, pacientId }) => {
  try {
    return await prescriptionRepository.savePrescription({ data, doctorId, pacientId });
  } catch (error) {
    throw new Error("Erro ao salvar prescrição: " + error.message);
  }
};

const updatePrescription = async (id, { data, doctorId, pacientId }) => {
  try {
    return await prescriptionRepository.updatePrescription(id, { data, doctorId, pacientId });
  } catch (error) {
    throw new Error("Erro ao atualizar prescrição: " + error.message);
  }
};

const deletePrescription = async (id) => {
  try {
    return await prescriptionRepository.deletePrescription(id);
  } catch (error) {
    throw new Error("Erro ao deletar prescrição: " + error.message);
  }
};

const PrescriptionService = {
  getAllPrescriptions,
  getPrescription,
  savePrescription,
  updatePrescription,
  deletePrescription
};

export default PrescriptionService;