const { celebrate, Joi, Segments } = require('celebrate');

const validateCitaMedicaCreation = celebrate({
  [Segments.BODY]: Joi.object().keys({
    fecha: Joi.date().required(),
    hora: Joi.string().required(),
    id_paciente: Joi.string().required(),
    id_profesionalSalud: Joi.string().required(),
    
  })
});

module.exports = {
  validateCitaMedicaCreation
};