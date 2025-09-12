import appointmentRepository from "../repositories/AppointmentRepository.js";

const getAllAppointments = async () => {
  try {
    return await appointmentRepository.getAllAppointments();
  } catch (error) {
    throw new Error("Erro ao buscar todos os agendamentos: " + error.message);
  }
};

const getAppointment = async (id) => {
  try {
    return await appointmentRepository.getAppointmentById(id);
  } catch (error) {
    throw new Error("Erro ao buscar agendamento: " + error.message);
  }
};

const saveAppointment = async ({ data, doctorId, pacientId }) => {
  try {
    return await appointmentRepository.saveAppointment({ data, doctorId, pacientId });
  } catch (error) {
    throw new Error("Erro ao salvar agendamento: " + error.message);
  }
};

const updateAppointment = async (id, { data, doctorId, pacientId }) => {
  try {
    return await appointmentRepository.updateAppointment(id, { data, doctorId, pacientId });
  } catch (error) {
    throw new Error("Erro ao atualizar agendamento: " + error.message);
  }
};

const deleteAppointment = async (id) => {
  try {
    return await appointmentRepository.deleteAppointment(id);
  } catch (error) {
    throw new Error("Erro ao deletar agendamento: " + error.message);
  }
};

const AppointmentService = {
  getAllAppointments,
  getAppointment,
  saveAppointment,
  updateAppointment,
  deleteAppointment
};

export default AppointmentService;