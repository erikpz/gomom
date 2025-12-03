const prisma = require('../config/prisma');
const { prismaErrorHandler } = require('../utils/error-handling');

const profesionalSaludService = {
    getAllProfesionalesSalud: async () => {
        try {
            return await prisma.profesionalSalud.findMany();
        } catch (error) {
            throw prismaErrorHandler(error);
        }
    },

    getProfesionalSaludById: async (id) => {
        try {
            const profesionalSalud = await prisma.profesionalSalud.findUnique({
                where: { id }
            });

            if (!profesionalSalud) {
                throw { status: 404, message: 'ProfesionalSalud no encontrado' };
            }

            return profesionalSalud;
        } catch (error) {
            throw prismaErrorHandler(error);
        }
    },

    getProfesionalSaludByNombre: async ({nombre, apellido}) => {
        if (!nombre && !apellido) return [];
        try {
            const profesionalesSalud = await prisma.profesionalSalud.findMany({
                where: {
                    OR: [
                        { nombre: { contains: nombre, mode: 'insensitive' } },
                        { apellido: { contains: apellido, mode: 'insensitive' } }
                    ]
                }
            });
            
            if (profesionalesSalud.length === 0) {
                throw { status: 404, message: 'ProfesionalSalud no encontrado' };
            }
            return profesionalesSalud;
        } catch (error) {
            throw prismaErrorHandler(error);
        }
    },

    createProfesionalSalud: async (profesionalSaludData) => {
        try {
            return await prisma.profesionalSalud.create({
                data: profesionalSaludData
            });
        } catch (error) {
            throw prismaErrorHandler(error);
        }
    },

    updateProfesionalSalud: async (id, profesionalSaludData) => {
        try {
            return await prisma.profesionalSalud.update({
                where: { id },
                data: profesionalSaludData
            });
        } catch (error) {
            throw prismaErrorHandler(error);
        }
    },

    deleteProfesionalSalud: async (id) => {
        try {
            return await prisma.profesionalSalud.delete({
                where: { id }
            });
        } catch (error) {
            throw prismaErrorHandler(error);
        }
    }
};

module.exports = profesionalSaludService;