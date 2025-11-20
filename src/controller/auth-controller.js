const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const usuarioService = require('../services/usuario-service');

const usuarioController = {
    login: async (req, res) => {
        try {
            const { correo, contrasena: pass } = req.body;
            const { contrasena, ...usuario } = await usuarioService.getUserByCorreo(correo);
            if (!usuario) {
                return res.status(404).json({ message: 'Usuario no encontrado' });
            }
            const valid = await bcrypt.compare(pass, contrasena);
            if (!valid) return res.status(401).json({ error: 'Credenciales inválidas' });
            const token = jwt.sign(usuario, process.env.ACCESS_SECRET, { expiresIn: '60m' });
            res.json({
                token,
                usuario
            })
        } catch (error) {
            res.status(error.status || 500).json({ message: error.message });
        }
    }
};

module.exports = usuarioController;

