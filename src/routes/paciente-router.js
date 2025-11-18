const express = require('express');
const router = express.Router();
const pacienteController = require('../controller/paciente-controller');
const { validatePacienteCreation } = require('../middlewares/paciente-middlewares');

router.get('/search', pacienteController.getPacienteByNombre);
router.get('/:id', pacienteController.getPacienteById);
router.get('/', pacienteController.getAllPacientes);
router.post('/', validatePacienteCreation, pacienteController.createPaciente);
router.put('/:id', pacienteController.updatePaciente);
router.delete('/:id', pacienteController.deletePaciente);

module.exports = router;
