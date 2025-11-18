const { celebrate, Joi, Segments } = require('celebrate');

const validateProfesionalSaludCreation = celebrate({
  [Segments.BODY]: Joi.object().keys({
    nombre: Joi.string().max(50).required(),
    apellido: Joi.string().max(50).required(),
    especialidad: Joi.string().max(50).required(),
    telefono: Joi.string().max(15).required(),
    correo: Joi.string().email().required(),
    
  })
});

module.exports = {
  validateProfesionalSaludCreation
};