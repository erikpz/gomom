-- CreateTable
CREATE TABLE "Paciente" (
    "id" TEXT NOT NULL,
    "nombre" TEXT NOT NULL,
    "apellido" TEXT NOT NULL,
    "fecha_nacimiento" TIMESTAMP(3) NOT NULL,
    "telefono" TEXT NOT NULL,
    "correo" TEXT NOT NULL,

    CONSTRAINT "Paciente_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ProfesionalSalud" (
    "id" TEXT NOT NULL,
    "nombre" TEXT NOT NULL,
    "apellido" TEXT NOT NULL,
    "especialidad" TEXT NOT NULL,
    "telefono" TEXT NOT NULL,
    "correo" TEXT NOT NULL,

    CONSTRAINT "ProfesionalSalud_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CitaMedica" (
    "id" TEXT NOT NULL,
    "fecha" TIMESTAMP(3) NOT NULL,
    "hora" TEXT NOT NULL,
    "id_paciente" TEXT NOT NULL,
    "id_profesionalSalud" TEXT NOT NULL,

    CONSTRAINT "CitaMedica_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ExpedienteMedico" (
    "id" TEXT NOT NULL,
    "fechaCreacion" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "id_paciente" TEXT NOT NULL,

    CONSTRAINT "ExpedienteMedico_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Tratamiento" (
    "id" TEXT NOT NULL,
    "tipoTratamiento" TEXT NOT NULL,
    "fechaInicio" TIMESTAMP(3) NOT NULL,
    "fechaFin" TIMESTAMP(3) NOT NULL,
    "id_expediente" TEXT NOT NULL,

    CONSTRAINT "Tratamiento_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "EvaluacionTratamiento" (
    "id" TEXT NOT NULL,
    "fechaEvaluacion" TIMESTAMP(3) NOT NULL,
    "efectividad" TEXT NOT NULL,
    "efectosSecundarios" TEXT NOT NULL,
    "id_tratamiento" TEXT NOT NULL,

    CONSTRAINT "EvaluacionTratamiento_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Paciente_telefono_key" ON "Paciente"("telefono");

-- CreateIndex
CREATE UNIQUE INDEX "Paciente_correo_key" ON "Paciente"("correo");

-- CreateIndex
CREATE UNIQUE INDEX "ProfesionalSalud_telefono_key" ON "ProfesionalSalud"("telefono");

-- CreateIndex
CREATE UNIQUE INDEX "ProfesionalSalud_correo_key" ON "ProfesionalSalud"("correo");

-- AddForeignKey
ALTER TABLE "CitaMedica" ADD CONSTRAINT "CitaMedica_id_paciente_fkey" FOREIGN KEY ("id_paciente") REFERENCES "Paciente"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CitaMedica" ADD CONSTRAINT "CitaMedica_id_profesionalSalud_fkey" FOREIGN KEY ("id_profesionalSalud") REFERENCES "ProfesionalSalud"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ExpedienteMedico" ADD CONSTRAINT "ExpedienteMedico_id_paciente_fkey" FOREIGN KEY ("id_paciente") REFERENCES "Paciente"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Tratamiento" ADD CONSTRAINT "Tratamiento_id_expediente_fkey" FOREIGN KEY ("id_expediente") REFERENCES "ExpedienteMedico"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "EvaluacionTratamiento" ADD CONSTRAINT "EvaluacionTratamiento_id_tratamiento_fkey" FOREIGN KEY ("id_tratamiento") REFERENCES "Tratamiento"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
