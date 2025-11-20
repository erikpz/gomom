const prisma = require('../config/prisma');
const { prismaErrorHandler } = require('../utils/error-handling');

const userService = {
    getAllUsers: async () => {
        try {
            return await prisma.usuario.findMany({
                select: {
                    id: true,
                    correo: true,
                    nombre: true,
                    apellido: true,
                    telefono: true,
                    role: true,
                }
            });
        } catch (error) {
            prismaErrorHandler(error);
        }
    },

    getUserByCorreo: async (correo) => {
        try {
            const user = await prisma.usuario.findUnique({
                where: { correo }
            });

            if (!user) {
                throw { status: 404, message: 'Usuario no encontrado' };
            }

            return user;
        } catch (error) {
            prismaErrorHandler(error);
        }
    },

    getUserById: async (id) => {
        try {
            const user = await prisma.usuario.findUnique({
                where: { id }
            });

            if (!user) {
                throw { status: 404, message: 'Usuario no encontrado' };
            }

            return user;
        } catch (error) {
            prismaErrorHandler(error);
        }
    },

    createUser: async (userData) => {
        try {
            const user = await prisma.usuario.create({
                data: userData
            });
            const { contrasena, ...userWithoutPassword } = user;
            return userWithoutPassword;
        } catch (error) {
            prismaErrorHandler(error);
        }
    },

    updateUser: async (id, userData) => {
        try {
            const user = await prisma.usuario.update({
                where: { id },
                data: userData
            });
            const { contrasena, ...userWithoutPassword } = user;
            return userWithoutPassword;
        } catch (error) {
            prismaErrorHandler(error);
        }
    },

    deleteUser: async (id) => {
        try {
            const user = await prisma.usuario.delete({
                where: { id }
            });
            const { contrasena, ...userWithoutPassword } = user;
            return userWithoutPassword;
        } catch (error) {
            prismaErrorHandler(error);
        }
    }
};

module.exports = userService;