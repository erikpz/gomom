const evaluacionService = require('../services/evaluacion-service');

const evaluacionController = {
    getAllEvaluaciones: async (req, res) => {
        try {
            const evaluaciones = await evaluacionService.getAllEvaluaciones();
            res.json(evaluaciones);
        } catch (error) {
            res.status(error.status || 500).json({ message: error.message });
        }
    },
    getEvaluacionById: async (req, res) => {
        try {
            const evaluacion = await evaluacionService.getEvaluacionById(req.params.id);
            res.json(evaluacion);
        } catch (error) {
            res.status(error.status || 500).json({ message: error.message });
        }
    },
    createEvaluacion: async (req, res) => {
        try {
            const evaluacion = await evaluacionService.createEvaluacion(req.body);
            res.json(evaluacion);
        } catch (error) {
            res.status(error.status || 500).json({ message: error.message });
        }
    },
    updateEvaluacion: async (req, res) => {
        try {
            const evaluacion = await evaluacionService.updateEvaluacion(req.params.id, req.body);
            res.json(evaluacion);
        } catch (error) {
            res.status(error.status || 500).json({ message: error.message });
        }
    },
    deleteEvaluacion: async (req, res) => {
        try {
            const evaluacion = await evaluacionService.deleteEvaluacion(req.params.id);
            res.json(evaluacion);
        } catch (error) {
            res.status(error.status || 500).json({ message: error.message });
        }
    }
};

module.exports = evaluacionController;
