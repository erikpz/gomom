const express = require('express');
const router = express.Router();
const profesionalSaludController = require('../controller/profesionalSalud-controller');
const { validateProfesionalSaludCreation } = require('../middlewares/profesionalsalud-middleware');

router.get('/search', profesionalSaludController.getProfesionalSaludByNombre);
router.get('/:id', profesionalSaludController.getProfesionalSaludById);
router.get('/', profesionalSaludController.getAllProfesionalesSalud);
router.post('/', validateProfesionalSaludCreation, profesionalSaludController.createProfesionalSalud);
router.put('/:id', profesionalSaludController.updateProfesionalSalud);
router.delete('/:id', profesionalSaludController.deleteProfesionalSalud);

module.exports = router;
