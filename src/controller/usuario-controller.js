const bcrypt = require('bcryptjs');
const usuarioService = require('../services/usuario-service');

const usuarioController = {
    getUsuarios: async (req, res) => {
        try {
            const usuarios = await usuarioService.getAllUsers();
            res.json(usuarios);
        } catch (error) {
            res.status(error.status || 500).json({ message: error.message });
        }
    },
    getUsuarioById: async (req, res) => {
        try {
            const { id } = req.params;
            const usuario = await usuarioService.getUserById(id);
            if (!usuario) {
                return res.status(404).json({ message: 'Usuario no encontrado' });
            }
            res.json(usuario);
        } catch (error) {
            res.status(error.status || 500).json({ message: error.message });
        }
    },
    getUsuarioByCorreo: async (req, res) => {
        try {
            const { correo } = req.query;
            const usuario = await usuarioService.getUserByCorreo(correo);
            if (!usuario) {
                return res.status(404).json({ message: 'Usuario no encontrado' });
            }
            res.json(usuario);
        } catch (error) {
            res.status(error.status || 500).json({ message: error.message });
        }
    },
    createUsuario: async (req, res) => {
        try {
            const userData = req.body;
            const salt = await bcrypt.genSalt(10);
            const hashed = await bcrypt.hash(userData.contrasena, salt);
            const { nombre, apellido, correo, telefono, role } = userData;
            const { contrasena, ...user } = await usuarioService.createUser({
                correo,
                contrasena: hashed,
                nombre,
                apellido,
                telefono,
                role
            });

            return res.status(201).json(user);
        } catch (error) {
            res.status(error.status || 500).json({ message: error.message });
        }
    },
    updateUsuario: async (req, res) => {
        try {
            const { id } = req.params;
            const userData = req.body;
            const updatedUsuario = await usuarioService.updateUser(id, userData);
            res.json(updatedUsuario);
        } catch (error) {
            res.status(error.status || 500).json({ message: error.message });
        }
    },
    deleteUsuario: async (req, res) => {
        try {
            const { id } = req.params;
            const deletedUsuario = await usuarioService.deleteUser(id);
            res.json(deletedUsuario);
        } catch (error) {
            res.status(error.status || 500).json({ message: error.message });
        }
    }
};


module.exports = usuarioController;

