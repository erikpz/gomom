const expedienteMedicoService = require('../services/expedientemedico-service');

const expedienteMedicoController = {
    getAllExpedientesMedicos: async (req, res) => {
        try {
            const expedientesMedicos = await expedienteMedicoService.getAllExpedientesMedicos();
            res.json(expedientesMedicos);
        } catch (error) {
            res.status(error.status || 500).json({ message: error.message });
        }
    },
    getExpedienteMedicoById: async (req, res) => {
        try {
            const expedienteMedico = await expedienteMedicoService.getExpedienteMedicoById(req.params.id);
            res.json(expedienteMedico);
        } catch (error) {
            res.status(error.status || 500).json({ message: error.message });
        }
    },
    getExpedientesMedicosByPaciente: async (req, res) => {
        try {
            const { nombre, apellido, id_paciente } = req.query;
            const expedientesMedicos = await expedienteMedicoService.getExpedientesMedicosByPaciente({nombre, apellido, id_paciente});
            res.json(expedientesMedicos);
        } catch (error) {
            res.status(error.status || 500).json({ message: error.message });
        }
    },
    createExpedienteMedico: async (req, res) => {
        try {
            const expedienteMedico = await expedienteMedicoService.createExpedienteMedico(req.body);
            res.json(expedienteMedico);
        } catch (error) {
            res.status(error.status || 500).json({ message: error.message });
        }
    },
    updateExpedienteMedico: async (req, res) => {
        try {
            const expedienteMedico = await expedienteMedicoService.updateExpedienteMedico(req.params.id, req.body);
            res.json(expedienteMedico);
        } catch (error) {
            res.status(error.status || 500).json({ message: error.message });
        }
    },
    deleteExpedienteMedico: async (req, res) => {
        try {
            const expedienteMedico = await expedienteMedicoService.deleteExpedienteMedico(req.params.id);
            res.json(expedienteMedico);
        } catch (error) {
            res.status(error.status || 500).json({ message: error.message });
        }
    }
};

module.exports = expedienteMedicoController;
