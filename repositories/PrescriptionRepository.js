import Prescription from "../models/Prescription.js";

const getALLPrescriptions = async () => {
    try {
        return await Prescription.find();
    } catch (error) {
        throw new Error('Error fetching prescriptions: ' + error.message);
    }
}
const savePrescription = async ({ data, prescriptionId, doctorId }) => {
    try {
        const newPrescription = new Prescription({ data, prescriptionId, doctorId });
        return await newPrescription.save();
    } catch (error) {
        throw new Error('Error saving prescription: ' + error.message);
    }
};

const getPrescriptionById = async (id) => {
    try {
        return await Prescription.findById(id);
    } catch (error) {
        throw new Error('Error fetching prescription: ' + error.message);
    }
};

const updatePrescription = async (id, { data, prescriptionId, doctorId }) => {
    try {
        return await Prescription.findByIdAndUpdate(id, { data, prescriptionId, doctorId }, { new: true });
    } catch (error) {
        throw new Error('Error updating prescription: ' + error.message);
    }
}

const deletePrescription = async (id) => {
    try {
        return await Prescription.findByIdAndDelete(id);
    } catch (error) {
        throw new Error('Error deleting prescription: ' + error.message);
    }
}

const prescriptionRepository = {
    getALLPrescriptions,
    savePrescription,
    getPrescriptionById,
    updatePrescription,
    deletePrescription
};

export default prescriptionRepository;