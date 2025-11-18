const citaMedicaService = require('../services/citamedica-service');

const citaMedicaController = {
    getAllCitasMedicas: async (req, res) => {
        try {
            const citasMedicas = await citaMedicaService.getAllCitasMedicas();
            res.json(citasMedicas);
        } catch (error) {
            res.status(error.status || 500).json({ message: error.message });
        }
    },
    getCitaMedicaById: async (req, res) => {
        try {
            const citaMedica = await citaMedicaService.getCitaMedicaById(req.params.id);
            res.json(citaMedica);
        } catch (error) {
            res.status(error.status || 500).json({ message: error.message });
        }
    },
    getCitasMedicasByPaciente: async (req, res) => {
        try {
            const { nombre, apellido, id_paciente } = req.query;
            const citasMedicas = await citaMedicaService.getCitasMedicasByPaciente({nombre, apellido, id_paciente});
            res.json(citasMedicas);
        } catch (error) {
            res.status(error.status || 500).json({ message: error.message });
        }
    },
    createCitaMedica: async (req, res) => {
        try {
            const citaMedica = await citaMedicaService.createCitaMedica(req.body);
            res.json(citaMedica);
        } catch (error) {
            res.status(error.status || 500).json({ message: error.message });
        }
    },
    updateCitaMedica: async (req, res) => {
        try {
            const citaMedica = await citaMedicaService.updateCitaMedica(req.params.id, req.body);
            res.json(citaMedica);
        } catch (error) {
            res.status(error.status || 500).json({ message: error.message });
        }
    },
    deleteCitaMedica: async (req, res) => {
        try {
            const citaMedica = await citaMedicaService.deleteCitaMedica(req.params.id);
            res.json(citaMedica);
        } catch (error) {
            res.status(error.status || 500).json({ message: error.message });
        }
    }
};

module.exports = citaMedicaController;
