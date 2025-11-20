const prisma = require('../config/prisma');
const { prismaErrorHandler } = require('../utils/error-handling');

const citaMedicaService = {
    getAllCitasMedicas: async () => {
        try {
            return await prisma.citaMedica.findMany();
        } catch (error) {
            prismaErrorHandler(error);
        }
    },

    getCitaMedicaById: async (id) => {
        try {
            const citaMedica = await prisma.citaMedica.findUnique({
                where: { id }
            });

            if (!citaMedica) {
                throw { status: 404, message: 'CitaMedica no encontrado' };
            }

            return citaMedica;
        } catch (error) {
            prismaErrorHandler(error);
        }
    },

    getCitasMedicasByPaciente: async ({nombre, apellido, id_paciente}) => {
        try {
            const pacientes = await prisma.paciente.findMany({
                where: {
                    OR: [
                        { nombre: { contains: nombre, mode: 'insensitive' } },
                        { apellido: { contains: apellido, mode: 'insensitive' } },
                        { id: id_paciente }
                    ],
                },
                include: {
                    citasMedicas: {
                        include: {
                            profesionalSalud: true
                        }
                    }
                }
            });

            if (pacientes.length === 0) {
                throw { status: 404, message: 'Paciente no encontrado' };
            }

            return pacientes;
        } catch (error) {
            prismaErrorHandler(error);
        }
    },

    createCitaMedica: async (citaMedicaData) => {
        try {
            return await prisma.citaMedica.create({
                data: citaMedicaData
            });
        } catch (error) {
            prismaErrorHandler(error);
        }
    },

    updateCitaMedica: async (id, citaMedicaData) => {
        try {
            return await prisma.citaMedica.update({
                where: { id },
                data: citaMedicaData
            });
        } catch (error) {
            prismaErrorHandler(error);
        }
    },

    deleteCitaMedica: async (id) => {
        try {
            return await prisma.citaMedica.delete({
                where: { id }
            });
        } catch (error) {
            prismaErrorHandler(error);
        }
    }
};

module.exports = citaMedicaService;