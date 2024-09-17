import prisma from '@/lib/prisma'
import type { NextApiRequest, NextApiResponse } from 'next'

type colaboradorType = {
  id?: number
  nome?: string
  message?: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method === 'GET') {
    const colaboradores = await prisma.colaborador.findMany({
      select: {
        id: true,
        nome: true,
      },
    })
    res.status(200).json(colaboradores)
  } else if (req.method === 'POST') {
    const { nome, local } = req.body
    const colaborador: colaboradorType = await prisma.colaborador.create({
      data: {
        nome,
        local,
      },
    })
    res.status(200).json(colaborador)
  } else if (req.method === 'PUT') {
    const { id, nome } = req.body
    const colaborador: colaboradorType = await prisma.colaborador.update({
      where: {
        id,
      },
      data: {
        nome,
      },
    })
    res.status(200).json(colaborador)
  } else if (req.method === 'DELETE') {
    const { id } = req.body
    const colaborador: colaboradorType = await prisma.colaborador.delete({
      where: {
        id,
      },
    })
    res.status(200).json(colaborador)
  } else {
    res.status(405).json({ message: 'Method not allowed' })
  }
}
