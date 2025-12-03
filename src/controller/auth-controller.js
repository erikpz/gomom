const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const usuarioService = require('../services/usuario-service');

const usuarioController = {
    login: async (req, res) => {
        try {
            const { correo, contrasena: pass } = req.body;
            const { contrasena, ...usuario } = await usuarioService.getUserByCorreo(correo);
            const valid = await bcrypt.compare(pass, contrasena);
            if (!valid) return res.status(401).json({ message: 'Credenciales inválidas' });
            const token = jwt.sign(usuario, process.env.ACCESS_SECRET, { expiresIn: '60m' });
            res.json({
                token,
                usuario
            });
        } catch (error) {
            res.status(error.status || 500).json({ message: error.message });
        }
    },
    register: async (req, res) => {
        try {
            const userData = req.body;
            const salt = await bcrypt.genSalt(10);
            const hashed = await bcrypt.hash(userData.contrasena, salt);
            const { nombre, apellido, correo, telefono, role } = userData;
            const { contrasena, ...usuario } = await usuarioService.createUser({
                correo,
                contrasena: hashed,
                nombre,
                apellido,
                telefono,
                role
            });
            const token = jwt.sign(usuario, process.env.ACCESS_SECRET, { expiresIn: '60m' });
            res.json({
                token,
                usuario
            });
        } catch (error) {
            res.status(error.status || 500).json({ message: error.message });
        }
    }
};

module.exports = usuarioController;

