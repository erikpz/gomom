const prisma = require('../config/prisma');
const { prismaErrorHandler } = require('../utils/error-handling');

const pacienteService = {
    getAllPacientes: async () => {
        try {
            return await prisma.paciente.findMany();
        } catch (error) {
            prismaErrorHandler(error);
        }
    },

    getPacienteById: async (id) => {
        try {
            const paciente = await prisma.paciente.findUnique({
                where: { id }
            });

            if (!paciente) {
                throw { status: 404, message: 'Paciente no encontrado' };
            }

            return paciente;
        } catch (error) {
            prismaErrorHandler(error);
        }
    },

    getPacienteByNombre: async ({nombre, apellido,}) => {
        if (!nombre && !apellido) return [];
        try {
            const pacientes = await prisma.paciente.findMany({
                where: {
                    OR: [
                        { nombre: { contains: nombre, mode: 'insensitive' } },
                        { apellido: { contains: apellido, mode: 'insensitive' } },
                    ]
                }
            });
            
            return pacientes;
        } catch (error) {
            prismaErrorHandler(error);
        }
    },

    createPaciente: async (pacienteData) => {
        try {
            return await prisma.paciente.create({
                data: pacienteData
            });
        } catch (error) {
            prismaErrorHandler(error);
        }
    },

    updatePaciente: async (id, pacienteData) => {
        try {
            return await prisma.paciente.update({
                where: { id },
                data: pacienteData
            });
        } catch (error) {
            prismaErrorHandler(error);
        }
    },

    deletePaciente: async (id) => {
        try {
            return await prisma.paciente.delete({
                where: { id }
            });
        } catch (error) {
            prismaErrorHandler(error);
        }
    }
};

module.exports = pacienteService;