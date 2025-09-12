import express from 'express';
import bcrypt from 'bcrypt';
import DoctorService from '../services/DoctorService.js';

const router = express.Router();

// 🟢 GET - Lista todos os médicos
router.get('/doctor', async (req, res) => {
  try {
    const doctors = await DoctorService.getAllDoctors();
    res.status(200).json(doctors);
  } catch (error) {
    console.error('Error fetching doctors:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// 🔍 GET - Busca um médico por ID
router.get('/getDoctor/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const doctor = await DoctorService.getDoctor(id);
    res.status(200).json(doctor);
  } catch (error) {
    console.error('Error fetching doctor:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// 📝 POST - Cria um novo médico
router.post('/postDoctor', async (req, res) => {
  const { password, doctorId, pacientId, ...rest } = req.body;

  if (!password) {
    return res.status(400).json({ error: 'Campo "password" é obrigatório.' });
  }

  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const doctor = await DoctorService.saveDoctor({
      data: { ...rest, password: hashedPassword },
      doctorId,
      pacientId
    });
    res.status(201).json(doctor);
  } catch (error) {
    console.error('Error saving doctor:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// ✏️ PUT - Atualiza dados de um médico
router.put('/doctors/:id', async (req, res) => {
  const { id } = req.params;
  const { doctorId, pacientId, ...data } = req.body;

  try {
    const updatedDoctor = await DoctorService.updateDoctor(id, {
      data,
      doctorId,
      pacientId
    });
    res.status(200).json(updatedDoctor);
  } catch (error) {
    console.error('Error updating doctor:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// ❌ DELETE - Remove um médico
router.delete('/doctors/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const deletedDoctor = await DoctorService.deleteDoctor(id);
    res.status(200).json(deletedDoctor);
  } catch (error) {
    console.error('Error deleting doctor:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

export default router;