const prisma = require('../config/prisma');
const pacienteService = require('./paciente-service');
const { prismaErrorHandler } = require('../utils/error-handling');

const expedienteMedicoService = {
    getAllExpedientesMedicos: async () => {
        try {
            return await prisma.expedienteMedico.findMany();
        } catch (error) {
            prismaErrorHandler(error);
        }
    },

    getExpedienteMedicoById: async (id) => {
        try {
            const expedienteMedico = await prisma.expedienteMedico.findUnique({
                where: { id }
            });

            if (!expedienteMedico) {
                throw { status: 404, message: 'ExpedienteMedico no encontrado' };
            }

            return expedienteMedico;
        } catch (error) {
            prismaErrorHandler(error);
        }
    },

    getExpedientesMedicosByPaciente: async ({nombre, apellido, id_paciente}) => {
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
                    expedientesMedicos: {
                        include: {
                            tratamientos: {
                                include: {
                                    evaluaciones: true
                                }
                            }
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

    createExpedienteMedico: async (expedienteMedicoData) => {
        try {
            return await prisma.expedienteMedico.create({
                data: expedienteMedicoData
            });
        } catch (error) {
            prismaErrorHandler(error);
        }
    },

    updateExpedienteMedico: async (id, expedienteMedicoData) => {
        try {
            return await prisma.expedienteMedico.update({
                where: { id },
                data: expedienteMedicoData
            });
        } catch (error) {
            prismaErrorHandler(error);
        }
    },

    deleteExpedienteMedico: async (id) => {
        try {
            return await prisma.expedienteMedico.delete({
                where: { id }
            });
        } catch (error) {
            prismaErrorHandler(error);
        }
    }
};

module.exports = expedienteMedicoService;