'use server'
import prisma from '@/lib/db'

export async function create(nome: string) {
  return await prisma.modelo.create({
    data: {
      nome,
    },
  })
}

export async function update(id: number, nome: string) {
  return await prisma.modelo.update({
    where: { id },
    data: {
      nome,
    },
  })
}

export async function remove(id: number) {
  return await prisma.modelo.delete({
    where: { id },
  })
}

export async function list() {
  const lista = await prisma.modelo.findMany()
  return lista
}
