const prisma = require('../config/prisma');
const { prismaErrorHandler } = require('../utils/error-handling');

const evaluacionService = {
    getAllEvaluaciones: async () => {
        try {
            return await prisma.evaluacionTratamiento.findMany();
        } catch (error) {
            prismaErrorHandler(error);
        }
    },

    getEvaluacionById: async (id) => {
        try {
            const evaluacion = await prisma.evaluacionTratamiento.findUnique({
                where: { id }
            });

            if (!evaluacion) {
                throw { status: 404, message: 'Evaluacion no encontrado' };
            }

            return evaluacion;
        } catch (error) {
            prismaErrorHandler(error);
        }
    },

    createEvaluacion: async (evaluacionData) => {
        try {
            return await prisma.evaluacionTratamiento.create({
                data: evaluacionData
            });
        } catch (error) {
            prismaErrorHandler(error);
        }
    },

    updateEvaluacion: async (id, evaluacionData) => {
        try {
            return await prisma.evaluacionTratamiento.update({
                where: { id },
                data: evaluacionData
            });
        } catch (error) {
            prismaErrorHandler(error);
        }
    },

    deleteEvaluacion: async (id) => {
        try {
            return await prisma.evaluacionTratamiento.delete({
                where: { id }
            });
        } catch (error) {
            prismaErrorHandler(error);
        }
    }
};

module.exports = evaluacionService;