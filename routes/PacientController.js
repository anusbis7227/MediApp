import express from 'express';
import PacientService from '../services/PacientService.js';

let router = express.Router();

router.get('/pacient', async (req, res) => {
    try {
        const pacients = await PacientService.getALLPacients();
        res.status(pacients);
    } catch (error) {
        console.error('Error fetching pacients:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

router.get('/getPacient/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const pacient = await PacientService.getPacients(id);
        res.status(pacient);
    } catch (error) {
        console.error('Error fetching pacients:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

router.post('/postPacient', async (req, res) => {
    const { data, pacientId, doctorId } = req.body;
    try {
        const pacient = await PacientService.savePacients({ data, pacientId, doctorId });
        res.status(pacient);
    } catch (error) {
        console.error('Error saving pacients:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

router.put('/pacients/:id', async (req, res) => {
    const { id } = req.params;
    const { data, pacientId, doctorId } = req.body;
    try {
        const pacient = await PacientService.updatePacients(id, { data, pacientId, doctorId });
        res.status(pacient);
    } catch (error) {
        console.error('Error updating pacients:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

router.delete('/pacients/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const pacient = await PacientService.deletePacients(id);
        res.status(200).json(pacient);
    } catch (error) {
        console.error('Error deleting pacients:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

export default router;
