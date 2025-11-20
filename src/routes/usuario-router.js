const express = require('express');
const router = express.Router();
const usuarioController = require('../controller/usuario-controller');

router.get('/correo', usuarioController.getUsuarioByCorreo);
router.get('/:id', usuarioController.getUsuarioById);
router.get('/', usuarioController.getUsuarios);
router.post('/', usuarioController.createUsuario);
router.put('/:id', usuarioController.updateUsuario);
router.delete('/:id', usuarioController.deleteUsuario);

module.exports = router;
