const { celebrate, Joi, Segments } = require('celebrate');

const validateEvaluacionCreation = celebrate({
  [Segments.BODY]: Joi.object().keys({
    fecha_evaluacion: Joi.date().required(),
    efectividad: Joi.string().required(),
    efectos_secundarios: Joi.string().required(),
    id_tratamiento: Joi.string().required(),
  })
});

module.exports = {
  validateEvaluacionCreation
};