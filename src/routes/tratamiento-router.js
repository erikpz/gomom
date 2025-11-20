const express = require('express');
const router = express.Router();
const tratamientoController = require('../controller/tratamiento-controller');
const { validateTratamientoCreation } = require('../middlewares/tratamiento-middleware');
const { verifyAuthMiddleware } = require('../middlewares/auth-middleware');

router.use(verifyAuthMiddleware);

router.get('/paciente', tratamientoController.getTratamientosByExpedienteMedico);
router.get('/:id', tratamientoController.getTratamientoById);
router.get('/', tratamientoController.getAllTratamientos);
router.post('/', validateTratamientoCreation, tratamientoController.createTratamiento);
router.put('/:id', tratamientoController.updateTratamiento);
router.delete('/:id', tratamientoController.deleteTratamiento);

module.exports = router;
