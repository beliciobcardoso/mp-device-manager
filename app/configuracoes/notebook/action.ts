import prisma from '@/lib/db'
import { z } from 'zod'

const MarcaSchema = z.object({
  nome: z.string().min(3, { message: 'Nome deve ter no mínimo 3 caracteres' })
})

export const saveMarca = async (data: any, formData: FormData) => {
  console.log(data)
  const validatedFields = MarcaSchema.safeParse(
    Object.fromEntries(formData.entries())
  )

  if (!validatedFields.success) {
    return {
      Error: validatedFields.error.flatten().fieldErrors
    }
  }

  validatedFields.data.nome = validatedFields.data.nome.trim()

  console.log(validatedFields.data.nome)

  try {
    await prisma.marca.create({
      data: validatedFields.data
    })
  } catch (error) {
    return {
      message: 'Erro ao salvar a marca'
    }
  }
}

export const getMarca = async (query: string) => {
  try {
    const marca = await prisma.marca.findMany({
      select: {
        id: false,
        nome: true
      },
      orderBy: {
        nome: 'asc'
      }
    })
    return marca
  } catch (error) {
    throw new Error('Erro ao buscar a marca')
  }
}