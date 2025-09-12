import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const pacientSchema = new Schema({
  name: {
    type: String,
    required: [true, 'Pacient name is required']
  },
  age: {
    type: Number,
    required: [true, 'Pacient age is required']
  },
  alergy: {
    type: String,
    required: false
  },
  email: {
    type: String,
    required: false
  },
  phone: {
    type: String,
    required: [true, 'Phone number is required']
  },
  address: {
    type: String,
    required: false
  },
  especialty: {
    type: String,
    required: false
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

const Pacient = mongoose.model('Pacient', pacientSchema);

export default Pacient;