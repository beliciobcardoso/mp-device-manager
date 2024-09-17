import prisma from '@/lib/prisma'
import type { NextApiRequest, NextApiResponse } from 'next'

interface NotebookBase {
  nome: string
  serial: string
  marca: string
  modelo: string
  so: string
  memoria: string
  armazenamento: string
  processador: string
  dataCompra: string
}

interface Notebook extends NotebookBase {
  id: number
}

interface NotebookCreate extends NotebookBase {}

interface NotebookUpdate {
  id: number
  nome?: string
}

type notebookType =
  | Notebook
  | NotebookCreate
  | NotebookUpdate
  | { message?: string }

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method === 'GET') {
    const notebooks = await prisma.notebook.findMany()
    res.status(200).json(notebooks)
  } else if (req.method === 'POST') {
    const {
      nome,
      serial,
      marca,
      modelo,
      so,
      memoria,
      armazenamento,
      processador,
      dataCompra,
    } = req.body
    const notebook: notebookType = await prisma.notebook.create({
      data: {
        nome,
        serial,
        marca,
        modelo,
        so,
        memoria,
        armazenamento,
        processador,
        dataCompra,
        status: 'Disponível',
      },
    })
    res.status(200).json(notebook)
  } else if (req.method === 'PUT') {
    const { id, nome } = req.body
    const notebook: notebookType = await prisma.notebook.update({
      where: {
        id,
      },
      data: {
        nome,
      },
    })
    res.status(200).json(notebook)
  } else if (req.method === 'DELETE') {
    const { id } = req.body
    const notebook: notebookType = await prisma.notebook.delete({
      where: {
        id,
      },
    })
    res.status(200).json(notebook)
  } else {
    res.status(405).json({ message: 'Method not allowed' })
  }
}
