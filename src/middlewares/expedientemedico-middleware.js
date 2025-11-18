const { celebrate, Joi, Segments } = require('celebrate');

const validateExpedienteMedicoCreation = celebrate({
  [Segments.BODY]: Joi.object().keys({
    fecha_creacion: Joi.date().required(),
    diagnostico: Joi.string().required(),
    id_paciente: Joi.string().required(),
  })
});

module.exports = {
  validateExpedienteMedicoCreation
};