'use server'
import prisma from '@/lib/prisma'

export async function create(nome: string) {
  return await prisma.marca.create({
    data: {
      nome,
    },
  })
}

export async function update(id: number, nome: string) {
  return await prisma.marca.update({
    where: { id },
    data: {
      nome,
    },
  })
}

export async function remove(id: number) {
  return await prisma.marca.delete({
    where: { id },
  })
}

export async function list() {
  const lista = await prisma.marca.findMany()
  return lista
}
