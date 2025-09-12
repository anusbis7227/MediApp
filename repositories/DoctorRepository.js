import Doctor from "../models/Doctor.js";

const getAllDoctors = async () => {
  try {
    return await Doctor.find();
  } catch (error) {
    throw new Error("Erro ao buscar médicos: " + error.message);
  }
};

const saveDoctor = async ({ data, doctorId, pacientId }) => {
  try {
    const newDoctor = new Doctor({
      ...data,
      doctorId,
      pacientId
    });
    return await newDoctor.save();
  } catch (error) {
    throw new Error("Erro ao salvar médico: " + error.message);
  }
};

const getDoctorById = async (id) => {
  try {
    return await Doctor.findById(id);
  } catch (error) {
    throw new Error("Erro ao buscar médico: " + error.message);
  }
};

const updateDoctor = async (id, { data, doctorId, pacientId }) => {
  try {
    return await Doctor.findByIdAndUpdate(
      id,
      { ...data, doctorId, pacientId },
      { new: true }
    );
  } catch (error) {
    throw new Error("Erro ao atualizar médico: " + error.message);
  }
};

const deleteDoctor = async (id) => {
  try {
    return await Doctor.findByIdAndDelete(id);
  } catch (error) {
    throw new Error("Erro ao deletar médico: " + error.message);
  }
};

const doctorRepository = {
  getAllDoctors,
  saveDoctor,
  getDoctorById,
  updateDoctor,
  deleteDoctor
};

export default doctorRepository;