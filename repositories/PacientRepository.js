import Pacient from "../models/Pacient.js";

const getALLPacients = async () => {
    try {
        return await pacient.find();
    } catch (error) {
        throw new Error('Error fetching pacients: ' + error.message);
    }
}
const savePacient = async ({ data, pacientId, doctorId }) => {
    try {
        const newPacient = new pacient({ data, pacientId, doctorId });
        return await newPacient.save();
    } catch (error) {
        throw new Error('Error saving pacient: ' + error.message);
    }
};

const getPacientById = async (id) => {
    try {
        return await pacient.findById(id);
    } catch (error) {
        throw new Error('Error fetching pacient: ' + error.message);
    }
};

const updatePacient = async (id, { data, pacientId, doctorId }) => {
    try {
        return await pacient.findByIdAndUpdate(id, { data, pacientId, doctorId }, { new: true });
    } catch (error) {
        throw new Error('Error updating pacient: ' + error.message);
    }
}

const deletePacient = async (id) => {
    try {
        return await pacient.findByIdAndDelete(id);
    } catch (error) {
        throw new Error('Error deleting pacient: ' + error.message);
    }
}

const pacientRepository = {
    getALLPacients,
    savePacient,
    getPacientById,
    updatePacient,
    deletePacient
};

export default pacientRepository;