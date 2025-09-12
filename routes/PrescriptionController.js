import express from 'express';
import PrescriptionService from '../services/PrescriptionService.js';

const router = express.Router();

router.get('/prescription', async (req, res) => {
  try {
    const prescriptions = await PrescriptionService.getALLPrescriptions();
    res.status(200).json(prescriptions);
  } catch (error) {
    console.error('Error fetching prescriptions:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

router.get('/getPrescription/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const prescription = await PrescriptionService.getPrescriptions(id);
    res.status(200).json(prescription);
  } catch (error) {
    console.error('Error fetching prescription:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

router.post('/postPrescription', async (req, res) => {
  const { data, doctorId, pacientId } = req.body;
  try {
    const prescription = await PrescriptionService.savePrescriptions({ data, doctorId, pacientId });
    res.status(201).json(prescription);
  } catch (error) {
    console.error('Error saving prescription:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

router.put('/prescriptions/:id', async (req, res) => {
  const { id } = req.params;
  const { data, doctorId, pacientId } = req.body;
  try {
    const updated = await PrescriptionService.updatePrescriptions(id, { data, doctorId, pacientId });
    res.status(200).json(updated);
  } catch (error) {
    console.error('Error updating prescription:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

router.delete('/prescriptions/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const deleted = await PrescriptionService.deletePrescriptions(id);
    res.status(200).json(deleted);
  } catch (error) {
    console.error('Error deleting prescription:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

export default router;