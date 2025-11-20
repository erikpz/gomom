const express = require('express');
const router = express.Router();
const usuarioController = require('../controller/usuario-controller');
const { verifyAuthMiddleware } = require('../middlewares/auth-middleware');

router.get('/correo', usuarioController.getUsuarioByCorreo);
router.get('/:id', usuarioController.getUsuarioById);
router.get('/', usuarioController.getUsuarios);
router.post('/', usuarioController.createUsuario);
router.put('/:id', verifyAuthMiddleware, usuarioController.updateUsuario);
router.delete('/:id', verifyAuthMiddleware, usuarioController.deleteUsuario);

module.exports = router;
