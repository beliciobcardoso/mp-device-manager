/*
  Warnings:

  - You are about to drop the column `descricao` on the `Celular` table. All the data in the column will be lost.
  - You are about to drop the column `marcaId` on the `Celular` table. All the data in the column will be lost.
  - You are about to drop the column `modeloId` on the `Celular` table. All the data in the column will be lost.
  - You are about to drop the column `descricao` on the `Notebook` table. All the data in the column will be lost.
  - You are about to drop the column `marcaId` on the `Notebook` table. All the data in the column will be lost.
  - You are about to drop the column `modeloId` on the `Notebook` table. All the data in the column will be lost.
  - Added the required column `marca` to the `Celular` table without a default value. This is not possible if the table is not empty.
  - Added the required column `modelo` to the `Celular` table without a default value. This is not possible if the table is not empty.
  - Added the required column `marca` to the `Notebook` table without a default value. This is not possible if the table is not empty.
  - Added the required column `modelo` to the `Notebook` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Celular" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nome" TEXT NOT NULL,
    "modelo" TEXT NOT NULL,
    "marca" TEXT NOT NULL,
    "imei01" TEXT NOT NULL,
    "imei02" TEXT NOT NULL,
    "serial" TEXT NOT NULL,
    "armazenamento" TEXT NOT NULL,
    "dataCompra" DATETIME NOT NULL,
    "dataRegistro" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "status" TEXT NOT NULL DEFAULT 'DISPONÍVEL'
);
INSERT INTO "new_Celular" ("armazenamento", "dataCompra", "dataRegistro", "id", "imei01", "imei02", "nome", "serial", "status") SELECT "armazenamento", "dataCompra", "dataRegistro", "id", "imei01", "imei02", "nome", "serial", "status" FROM "Celular";
DROP TABLE "Celular";
ALTER TABLE "new_Celular" RENAME TO "Celular";
CREATE UNIQUE INDEX "Celular_imei01_key" ON "Celular"("imei01");
CREATE UNIQUE INDEX "Celular_imei02_key" ON "Celular"("imei02");
CREATE UNIQUE INDEX "Celular_serial_key" ON "Celular"("serial");
CREATE TABLE "new_Notebook" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nome" TEXT NOT NULL,
    "serial" TEXT NOT NULL,
    "marca" TEXT NOT NULL,
    "modelo" TEXT NOT NULL,
    "so" TEXT NOT NULL,
    "memoria" TEXT NOT NULL,
    "armazenamento" TEXT NOT NULL,
    "processador" TEXT NOT NULL,
    "dataCompra" DATETIME NOT NULL,
    "dataRegistro" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "status" TEXT NOT NULL DEFAULT 'DISPONÍVEL'
);
INSERT INTO "new_Notebook" ("armazenamento", "dataCompra", "dataRegistro", "id", "memoria", "nome", "processador", "serial", "so", "status") SELECT "armazenamento", "dataCompra", "dataRegistro", "id", "memoria", "nome", "processador", "serial", "so", "status" FROM "Notebook";
DROP TABLE "Notebook";
ALTER TABLE "new_Notebook" RENAME TO "Notebook";
CREATE UNIQUE INDEX "Notebook_serial_key" ON "Notebook"("serial");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
