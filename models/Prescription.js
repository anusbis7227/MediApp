import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const PrescriptionSchema = new Schema({
  appointmentId: {
    type: String,
    required: [true, 'Appointment ID is required']
  },
  dosage: {
    type: String,
    required: [true, 'Dosage is required']
  },
  frequency: {
    type: String,
    required: [true, 'Frequency of medication is required']
  },
  startDate: {
    type: Date,
    required: [true, 'Start date of prescription is required']
  },
  instruction: {
    type: String
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

const Prescription = mongoose.model('Prescription', PrescriptionSchema);

export default Prescription;