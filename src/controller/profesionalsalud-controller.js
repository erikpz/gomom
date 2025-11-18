const profesionalSaludService = require('../services/profesionalsalud-service');

const profesionalSaludController = {
    getAllProfesionalesSalud: async (req, res) => {
        try {
            const profesionalesSalud = await profesionalSaludService.getAllProfesionalesSalud();
            res.json(profesionalesSalud);
        } catch (error) {
            res.status(error.status || 500).json({ message: error.message });
        }
    },
    getProfesionalSaludById: async (req, res) => {
        try {
            const profesionalSalud = await profesionalSaludService.getProfesionalSaludById(req.params.id);
            res.json(profesionalSalud);
        } catch (error) {
            res.status(error.status || 500).json({ message: error.message });
        }
    },
    getProfesionalSaludByNombre: async (req, res) => {
        try {
            const { nombre, apellido } = req.query;
            const profesionalSalud = await profesionalSaludService.getProfesionalSaludByNombre({nombre, apellido});
            res.json(profesionalSalud);
        } catch (error) {
            res.status(error.status || 500).json({ message: error.message });
        }
    },
    createProfesionalSalud: async (req, res) => {
        try {
            const profesionalSalud = await profesionalSaludService.createProfesionalSalud(req.body);
            res.json(profesionalSalud);
        } catch (error) {
            res.status(error.status || 500).json({ message: error.message });
        }
    },
    updateProfesionalSalud: async (req, res) => {
        try {
            const profesionalSalud = await profesionalSaludService.updateProfesionalSalud(req.params.id, req.body);
            res.json(profesionalSalud);
        } catch (error) {
            res.status(error.status || 500).json({ message: error.message });
        }
    },
    deleteProfesionalSalud: async (req, res) => {
        try {
            const profesionalSalud = await profesionalSaludService.deleteProfesionalSalud(req.params.id);
            res.json(profesionalSalud);
        } catch (error) {
            res.status(error.status || 500).json({ message: error.message });
        }
    }
};

module.exports = profesionalSaludController;
