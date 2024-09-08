-- CreateTable
CREATE TABLE "Marca" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nome" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Modelo" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nome" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Celular" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nome" TEXT NOT NULL,
    "modeloId" INTEGER,
    "imei01" TEXT NOT NULL,
    "imei02" TEXT NOT NULL,
    "serial" TEXT NOT NULL,
    "armazenamento" TEXT NOT NULL,
    "descricao" TEXT NOT NULL,
    "dataCompra" DATETIME NOT NULL,
    "marcaId" INTEGER,
    "dataRegistro" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "status" TEXT NOT NULL DEFAULT 'DISPONÍVEL',
    CONSTRAINT "Celular_modeloId_fkey" FOREIGN KEY ("modeloId") REFERENCES "Modelo" ("id") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "Celular_marcaId_fkey" FOREIGN KEY ("marcaId") REFERENCES "Marca" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Notebook" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nome" TEXT NOT NULL,
    "modeloId" INTEGER,
    "serial" TEXT NOT NULL,
    "so" TEXT NOT NULL,
    "memoria" TEXT NOT NULL,
    "armazenamento" TEXT NOT NULL,
    "processador" TEXT NOT NULL,
    "descricao" TEXT NOT NULL,
    "dataCompra" DATETIME NOT NULL,
    "marcaId" INTEGER,
    "dataRegistro" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "status" TEXT NOT NULL DEFAULT 'DISPONÍVEL',
    CONSTRAINT "Notebook_modeloId_fkey" FOREIGN KEY ("modeloId") REFERENCES "Modelo" ("id") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "Notebook_marcaId_fkey" FOREIGN KEY ("marcaId") REFERENCES "Marca" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Colaborador" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nome" TEXT NOT NULL,
    "local" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "UsoCelular" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "dataEntrega" DATETIME NOT NULL,
    "dataDevolucao" DATETIME,
    "colaboradorId" INTEGER NOT NULL,
    "celularId" INTEGER NOT NULL,
    CONSTRAINT "UsoCelular_colaboradorId_fkey" FOREIGN KEY ("colaboradorId") REFERENCES "Colaborador" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "UsoCelular_celularId_fkey" FOREIGN KEY ("celularId") REFERENCES "Celular" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "UsoNotebook" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "dataEntrega" DATETIME NOT NULL,
    "dataDevolucao" DATETIME,
    "colaboradorId" INTEGER NOT NULL,
    "notebookId" INTEGER NOT NULL,
    CONSTRAINT "UsoNotebook_colaboradorId_fkey" FOREIGN KEY ("colaboradorId") REFERENCES "Colaborador" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "UsoNotebook_notebookId_fkey" FOREIGN KEY ("notebookId") REFERENCES "Notebook" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "Celular_imei01_key" ON "Celular"("imei01");

-- CreateIndex
CREATE UNIQUE INDEX "Celular_imei02_key" ON "Celular"("imei02");

-- CreateIndex
CREATE UNIQUE INDEX "Celular_serial_key" ON "Celular"("serial");

-- CreateIndex
CREATE UNIQUE INDEX "Notebook_serial_key" ON "Notebook"("serial");
