import Appointment from "../models/Appointment.js";

const getAllAppointments = async () => {
  try {
    return await Appointment.find(); // Busca todos os agendamentos
  } catch (error) {
    throw new Error("Erro ao buscar agendamentos: " + error.message);
  }
};

const getAppointmentById = async (id) => {
  try {
    return await Appointment.findById(id); // Busca um agendamento por ID
  } catch (error) {
    throw new Error("Erro ao buscar agendamento: " + error.message);
  }
};

const saveAppointment = async ({ data, doctorId, pacientId }) => {
  try {
    const newAppointment = new Appointment({ data, doctorId, pacientId });
    return await newAppointment.save(); // Salva novo agendamento
  } catch (error) {
    throw new Error("Erro ao salvar agendamento: " + error.message);
  }
};

const updateAppointment = async (id, { data, doctorId, pacientId }) => {
  try {
    return await Appointment.findByIdAndUpdate(
      id,
      { data, doctorId, pacientId },
      { new: true }
    ); // Atualiza agendamento
  } catch (error) {
    throw new Error("Erro ao atualizar agendamento: " + error.message);
  }
};

const deleteAppointment = async (id) => {
  try {
    return await Appointment.findByIdAndDelete(id); // Remove agendamento
  } catch (error) {
    throw new Error("Erro ao deletar agendamento: " + error.message);
  }
};

const appointmentRepository = {
  getAllAppointments,
  getAppointmentById,
  saveAppointment,
  updateAppointment,
  deleteAppointment
};

export default appointmentRepository;