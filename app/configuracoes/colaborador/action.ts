'use server'
import prisma from '@/lib/db'
import { z } from 'zod'
import { deleteSchema, formSchema } from './schema'

export async function create(input: z.infer<typeof formSchema>) {
  if (input.id) {
    const update = await prisma.colaborador.update({
      where: { id: input.id },
      data: {
        nome: input.nome,
        setor: input.setor,
        local: input.local,
      },
    })
    return { error: null, data: update }
  }

  if (!input.nome) {
    return { error: 'Nome é obrigatório', data: null }
  }

  const colaborador = await prisma.colaborador.create({
    data: {
      nome: input.nome,
      setor: input.setor,
      local: input.local,
    },
  })
  return colaborador
}

export async function remove(input: z.infer<typeof deleteSchema>) {
  await prisma.colaborador.delete({
    where: { id: input.id },
  })
  return { error: null, data: 'Colaborador Deletado' }
}

export async function list() {
  const lista = await prisma.colaborador.findMany({
    orderBy: { nome: 'asc' },
  })
  return lista
}
