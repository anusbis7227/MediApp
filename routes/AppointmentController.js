import express from 'express';
import AppointmentService from '../services/AppointmentService.js';

const router = express.Router();

router.get('/appointment', async (req, res) => {
  try {
    const appointments = await AppointmentService.getALLAppointments();
    res.status(200).json(appointments);
  } catch (error) {
    console.error('Error fetching appointments:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

router.get('/getAppointment/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const appointment = await AppointmentService.getAppointments(id);
    res.status(200).json(appointment);
  } catch (error) {
    console.error('Error fetching appointment:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

router.post('/postAppointment', async (req, res) => {
  const { data, doctorId, pacientId } = req.body;
  try {
    const appointment = await AppointmentService.saveAppointments({ data, doctorId, pacientId });
    res.status(201).json(appointment);
  } catch (error) {
    console.error('Error saving appointment:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

router.put('/appointments/:id', async (req, res) => {
  const { id } = req.params;
  const { data, doctorId, pacientId } = req.body;
  try {
    const updated = await AppointmentService.updateAppointments(id, { data, doctorId, pacientId });
    res.status(200).json(updated);
  } catch (error) {
    console.error('Error updating appointment:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

router.delete('/appointments/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const deleted = await AppointmentService.deleteAppointments(id);
    res.status(200).json(deleted);
  } catch (error) {
    console.error('Error deleting appointment:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

export default router;