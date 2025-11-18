const express = require('express');
const app = express();
const dotenv = require('dotenv');
const { errors } = require('celebrate');
const pacienteRouter = require('./src/routes/paciente-router');
const profesionalSaludRouter = require('./src/routes/profesionalsalud-router');
const citaMedicaRouter = require('./src/routes/citamedica-router');
const expedienteMedicoRouter = require('./src/routes/expedientemedico-router');
const tratamientoRouter = require('./src/routes/tratamiento-router');
const { globalErrorHandler } = require('./src/utils/error-handling');

dotenv.config();
app.use(express.json());

app.get('/', async (req, res) => {
  res.send('¡Hola Gomom!');
});

app.use('/api/pacientes', pacienteRouter);
app.use('/api/profesional-salud', profesionalSaludRouter);
app.use('/api/cita-medica', citaMedicaRouter);
app.use('/api/expediente-medico', expedienteMedicoRouter);
app.use('/api/tratamiento', tratamientoRouter);

app.use(errors());
app.use(globalErrorHandler);

app.listen(process.env.PORT || 3000, () => {
  console.log(`Servidor corriendo en http://localhost:${process.env.PORT || 3000}`);
});