/*
  Warnings:

  - A unique constraint covering the columns `[nome]` on the table `Colaborador` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[nome]` on the table `Marca` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[nome]` on the table `Modelo` will be added. If there are existing duplicate values, this will fail.

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
    "status" TEXT NOT NULL
);
INSERT INTO "new_Celular" ("armazenamento", "dataCompra", "dataRegistro", "id", "imei01", "imei02", "marca", "modelo", "nome", "serial", "status") SELECT "armazenamento", "dataCompra", "dataRegistro", "id", "imei01", "imei02", "marca", "modelo", "nome", "serial", "status" FROM "Celular";
DROP TABLE "Celular";
ALTER TABLE "new_Celular" RENAME TO "Celular";
CREATE UNIQUE INDEX "Celular_nome_key" ON "Celular"("nome");
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
    "status" TEXT NOT NULL
);
INSERT INTO "new_Notebook" ("armazenamento", "dataCompra", "dataRegistro", "id", "marca", "memoria", "modelo", "nome", "processador", "serial", "so", "status") SELECT "armazenamento", "dataCompra", "dataRegistro", "id", "marca", "memoria", "modelo", "nome", "processador", "serial", "so", "status" FROM "Notebook";
DROP TABLE "Notebook";
ALTER TABLE "new_Notebook" RENAME TO "Notebook";
CREATE UNIQUE INDEX "Notebook_nome_key" ON "Notebook"("nome");
CREATE UNIQUE INDEX "Notebook_serial_key" ON "Notebook"("serial");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;

-- CreateIndex
CREATE UNIQUE INDEX "Colaborador_nome_key" ON "Colaborador"("nome");

-- CreateIndex
CREATE UNIQUE INDEX "Marca_nome_key" ON "Marca"("nome");

-- CreateIndex
CREATE UNIQUE INDEX "Modelo_nome_key" ON "Modelo"("nome");
