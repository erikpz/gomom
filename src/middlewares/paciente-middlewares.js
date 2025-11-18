const { celebrate, Joi, Segments } = require('celebrate');

const validatePacienteCreation = celebrate({
  [Segments.BODY]: Joi.object().keys({
    nombre: Joi.string().max(50).required(),
    apellido: Joi.string().max(50).required(),
    fecha_nacimiento: Joi.date().required(),
    telefono: Joi.string().max(15).required(),
    correo: Joi.string().email().required(),
    
  })
});

module.exports = {
  validatePacienteCreation
};