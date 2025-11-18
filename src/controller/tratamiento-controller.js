const tratamientoService = require('../services/tratamiento-service');

const tratamientoController = {
    getAllTratamientos: async (req, res) => {
        try {
            const tratamientos = await tratamientoService.getAllTratamientos();
            res.json(tratamientos);
        } catch (error) {
            res.status(error.status || 500).json({ message: error.message });
        }
    },
    getTratamientoById: async (req, res) => {
        try {
            const tratamiento = await tratamientoService.getTratamientoById(req.params.id);
            res.json(tratamiento);
        } catch (error) {
            res.status(error.status || 500).json({ message: error.message });
        }
    },
    getTratamientosByExpedienteMedico: async (req, res) => {
        try {
            const { nombre, apellido, id_paciente } = req.query;
            const tratamientos = await tratamientoService.getTratamientosByExpedienteMedico({nombre, apellido, id_paciente});
            res.json(tratamientos);
        } catch (error) {
            res.status(error.status || 500).json({ message: error.message });
        }
    },
    createTratamiento: async (req, res) => {
        try {
            const tratamiento = await tratamientoService.createTratamiento(req.body);
            res.json(tratamiento);
        } catch (error) {
            res.status(error.status || 500).json({ message: error.message });
        }
    },
    updateTratamiento: async (req, res) => {
        try {
            const tratamiento = await tratamientoService.updateTratamiento(req.params.id, req.body);
            res.json(tratamiento);
        } catch (error) {
            res.status(error.status || 500).json({ message: error.message });
        }
    },
    deleteTratamiento: async (req, res) => {
        try {
            const tratamiento = await tratamientoService.deleteTratamiento(req.params.id);
            res.json(tratamiento);
        } catch (error) {
            res.status(error.status || 500).json({ message: error.message });
        }
    }
};

module.exports = tratamientoController;
