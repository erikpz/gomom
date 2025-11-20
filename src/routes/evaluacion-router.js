const express = require('express');
const router = express.Router();
const evaluacionController = require('../controller/evaluacion-controller');
const { validateEvaluacionCreation } = require('../middlewares/evaluacion-middleware');
const { verifyAuthMiddleware } = require('../middlewares/auth-middleware');

router.use(verifyAuthMiddleware);

router.get('/:id', evaluacionController.getEvaluacionById);
router.get('/', evaluacionController.getAllEvaluaciones);
router.post('/', validateEvaluacionCreation, evaluacionController.createEvaluacion);
router.put('/:id', evaluacionController.updateEvaluacion);
router.delete('/:id', evaluacionController.deleteEvaluacion);

module.exports = router;
