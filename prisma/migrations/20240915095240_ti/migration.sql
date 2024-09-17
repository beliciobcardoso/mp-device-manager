/*
  Warnings:

  - Added the required column `setor` to the `Colaborador` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Colaborador" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nome" TEXT NOT NULL,
    "local" TEXT NOT NULL,
    "setor" TEXT NOT NULL
);
INSERT INTO "new_Colaborador" ("id", "local", "nome") SELECT "id", "local", "nome" FROM "Colaborador";
DROP TABLE "Colaborador";
ALTER TABLE "new_Colaborador" RENAME TO "Colaborador";
CREATE UNIQUE INDEX "Colaborador_nome_key" ON "Colaborador"("nome");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
