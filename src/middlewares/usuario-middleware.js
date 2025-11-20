const { celebrate, Joi, Segments } = require('celebrate');

const validateUsuarioCreation = celebrate({
  [Segments.BODY]: Joi.object().keys({
    correo: Joi.string().email().required(),
    contrasena: Joi.string().min(6).required(),
    nombre: Joi.string().required(),
    apellido: Joi.string().required(),
    telefono: Joi.string().optional(),
    rol: Joi.string().valid('ENFERMERA', 'MEDICO', 'ADMINISTRADOR', 'RECEPCIONISTA').required(),
  })
});

module.exports = {
  validateUsuarioCreation
};