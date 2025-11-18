/*
  Warnings:

  - Added the required column `diagnostico` to the `ExpedienteMedico` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "CitaMedica" ADD COLUMN     "motivo" TEXT;

-- AlterTable
ALTER TABLE "ExpedienteMedico" ADD COLUMN     "diagnostico" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Paciente" ADD COLUMN     "direccion" TEXT;
