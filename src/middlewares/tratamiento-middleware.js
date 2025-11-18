const { celebrate, Joi, Segments } = require('celebrate');

const validateTratamientoCreation = celebrate({
  [Segments.BODY]: Joi.object().keys({
    tipo_tratamiento: Joi.string().required(),
    fecha_inicio: Joi.date().required(),
    fecha_fin: Joi.date().required(),
    id_expediente: Joi.string().required(),
  })
});

module.exports = {
  validateTratamientoCreation
};