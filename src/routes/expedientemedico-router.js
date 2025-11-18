const express = require('express');
const router = express.Router();
const expedienteMedicoController = require('../controller/expedientemedico-controller');
const { validateExpedienteMedicoCreation } = require('../middlewares/expedientemedico-middleware');

router.get('/paciente', expedienteMedicoController.getExpedientesMedicosByPaciente);
router.get('/:id', expedienteMedicoController.getExpedienteMedicoById);
router.get('/', expedienteMedicoController.getAllExpedientesMedicos);
router.post('/', validateExpedienteMedicoCreation, expedienteMedicoController.createExpedienteMedico);
router.put('/:id', expedienteMedicoController.updateExpedienteMedico);
router.delete('/:id', expedienteMedicoController.deleteExpedienteMedico);

module.exports = router;
