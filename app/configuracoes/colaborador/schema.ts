import { z } from 'zod'

export const formSchema = z.object({
  id: z.number().optional(),
  nome: z
    .string()
    .min(3, {
      message: 'O Nome precisa ter no mínimo 3 caracteres.',
    })
    .max(30, {
      message: 'O Nome precisa ter no máximo 30 caracteres.',
    }),
  setor: z.string(),
  local: z.string(),
})

export const deleteSchema = z.object({
  id: z.number(),
})

export type Colaboradores = z.infer<typeof formSchema>
export type DeleteColaboradores = z.infer<typeof deleteSchema>
