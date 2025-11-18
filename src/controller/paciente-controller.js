const pacienteService = require('../services/paciente-service');

const pacienteController = {
    getAllPacientes: async (req, res) => {
        try {
            const pacientes = await pacienteService.getAllPacientes();
            res.json(pacientes);
        } catch (error) {
            res.status(error.status || 500).json({ message: error.message });
        }
    },
    getPacienteById: async (req, res) => {
        try {
            const paciente = await pacienteService.getPacienteById(req.params.id);
            res.json(paciente);
        } catch (error) {
            res.status(error.status || 500).json({ message: error.message });
        }
    },
    getPacienteByNombre: async (req, res) => {
        try {
            const { nombre, apellido } = req.query;
            const paciente = await pacienteService.getPacienteByNombre({nombre, apellido});
            res.json(paciente);
        } catch (error) {
            res.status(error.status || 500).json({ message: error.message });
        }
    },
    createPaciente: async (req, res) => {
        try {
            const paciente = await pacienteService.createPaciente(req.body);
            res.json(paciente);
        } catch (error) {
            res.status(error.status || 500).json({ message: error.message });
        }
    },
    updatePaciente: async (req, res) => {
        try {
            const paciente = await pacienteService.updatePaciente(req.params.id, req.body);
            res.json(paciente);
        } catch (error) {
            res.status(error.status || 500).json({ message: error.message });
        }
    },
    deletePaciente: async (req, res) => {
        try {
            const paciente = await pacienteService.deletePaciente(req.params.id);
            res.json(paciente);
        } catch (error) {
            res.status(error.status || 500).json({ message: error.message });
        }
    }
};

module.exports = pacienteController;
