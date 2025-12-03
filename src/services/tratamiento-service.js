const prisma = require('../config/prisma');
const { prismaErrorHandler } = require('../utils/error-handling');

const tratamientoService = {
    getAllTratamientos: async () => {
        try {
            return await prisma.tratamiento.findMany();
        } catch (error) {
            throw prismaErrorHandler(error);
        }
    },

    getTratamientoById: async (id) => {
        try {
            const tratamiento = await prisma.tratamiento.findUnique({
                where: { id }
            });

            if (!tratamiento) {
                throw { status: 404, message: 'Tratamiento no encontrado' };
            }

            return tratamiento;
        } catch (error) {
            throw prismaErrorHandler(error);
        }
    },

    getTratamientosByExpedienteMedico: async ({nombre, apellido, id_paciente}) => {
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
            throw prismaErrorHandler(error);
        }
    },

    createTratamiento: async (tratamientoData) => {
        try {
            return await prisma.tratamiento.create({
                data: tratamientoData
            });
        } catch (error) {
            throw prismaErrorHandler(error);
        }
    },

    updateTratamiento: async (id, tratamientoData) => {
        try {
            return await prisma.tratamiento.update({
                where: { id },
                data: tratamientoData
            });
        } catch (error) {
            throw prismaErrorHandler(error);
        }
    },

    deleteTratamiento: async (id) => {
        try {
            return await prisma.tratamiento.delete({
                where: { id }
            });
        } catch (error) {
            throw prismaErrorHandler(error);
        }
    }
};

module.exports = tratamientoService;