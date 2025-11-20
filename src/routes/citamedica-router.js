const express = require('express');
const router = express.Router();
const citaMedicaController = require('../controller/citamedica-controller');
const { validateCitaMedicaCreation } = require('../middlewares/citamedica-middleware');
const { verifyAuthMiddleware } = require('../middlewares/auth-middleware');

router.use(verifyAuthMiddleware);

router.get('/paciente', citaMedicaController.getCitasMedicasByPaciente);
router.get('/:id', citaMedicaController.getCitaMedicaById);
router.get('/', citaMedicaController.getAllCitasMedicas);
router.post('/', validateCitaMedicaCreation, citaMedicaController.createCitaMedica);
router.put('/:id', citaMedicaController.updateCitaMedica);
router.delete('/:id', citaMedicaController.deleteCitaMedica);

module.exports = router;
