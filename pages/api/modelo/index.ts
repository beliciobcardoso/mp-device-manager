import prisma from '@/lib/prisma'
import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method === 'GET') {
    const modelos = await prisma.modelo.findMany({
      select: {
        id: true,
        nome: true,
      },
    })
    res.status(200).json(modelos)
  } else if (req.method === 'POST') {
    const { nome } = req.body
    const modelo = await prisma.modelo.create({
      data: {
        nome,
      },
    })
    res.status(200).json(modelo)
  } else if (req.method === 'PUT') {
    const { id, nome } = req.body
    const modelo = await prisma.modelo.update({
      where: {
        id,
      },
      data: {
        nome,
      },
    })
    res.status(200).json(modelo)
  } else if (req.method === 'DELETE') {
    const { id } = req.body
    const modelo = await prisma.modelo.delete({
      where: {
        id,
      },
    })
    res.status(200).json(modelo)
  } else {
    res.setHeader('Allow', ['GET', 'POST'])
    res.status(405).end(`Method ${req.method} Not Allowed`)
  }
}
