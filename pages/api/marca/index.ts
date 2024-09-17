import prisma from '@/lib/prisma'
import type { NextApiRequest, NextApiResponse } from 'next'

type Marca = {
  id?: number
  nome?: string
  message?: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method === 'GET') {
    const marcas = await prisma.marca.findMany({
      select: {
        id: true,
        nome: true,
      },
    })
    res.status(200).json(marcas)
  } else if (req.method === 'POST') {
    const { nome } = req.body
    const marca: Marca = await prisma.marca.create({
      data: {
        nome,
      },
    })
    res.status(200).json(marca)
  } else {
    res.status(405).json({ message: 'Method not allowed' })
  }
}
