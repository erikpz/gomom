/*
  Warnings:

  - You are about to drop the column `efectosSecundarios` on the `EvaluacionTratamiento` table. All the data in the column will be lost.
  - You are about to drop the column `fechaEvaluacion` on the `EvaluacionTratamiento` table. All the data in the column will be lost.
  - You are about to drop the column `fechaCreacion` on the `ExpedienteMedico` table. All the data in the column will be lost.
  - You are about to drop the column `fechaFin` on the `Tratamiento` table. All the data in the column will be lost.
  - You are about to drop the column `fechaInicio` on the `Tratamiento` table. All the data in the column will be lost.
  - You are about to drop the column `tipoTratamiento` on the `Tratamiento` table. All the data in the column will be lost.
  - Added the required column `efectos_secundarios` to the `EvaluacionTratamiento` table without a default value. This is not possible if the table is not empty.
  - Added the required column `fecha_evaluacion` to the `EvaluacionTratamiento` table without a default value. This is not possible if the table is not empty.
  - Added the required column `fecha_fin` to the `Tratamiento` table without a default value. This is not possible if the table is not empty.
  - Added the required column `fecha_inicio` to the `Tratamiento` table without a default value. This is not possible if the table is not empty.
  - Added the required column `tipo_tratamiento` to the `Tratamiento` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "EvaluacionTratamiento" DROP COLUMN "efectosSecundarios",
DROP COLUMN "fechaEvaluacion",
ADD COLUMN     "efectos_secundarios" TEXT NOT NULL,
ADD COLUMN     "fecha_evaluacion" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "ExpedienteMedico" DROP COLUMN "fechaCreacion",
ADD COLUMN     "fecha_creacion" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;

-- AlterTable
ALTER TABLE "Tratamiento" DROP COLUMN "fechaFin",
DROP COLUMN "fechaInicio",
DROP COLUMN "tipoTratamiento",
ADD COLUMN     "fecha_fin" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "fecha_inicio" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "tipo_tratamiento" TEXT NOT NULL;
