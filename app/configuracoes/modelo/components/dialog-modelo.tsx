'use client'
import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { zodResolver } from '@hookform/resolvers/zod'
import { PlusIcon } from '@radix-ui/react-icons'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { create } from '../action'

const formSchema = z.object({
  nome: z
    .string()
    .min(3, {
      message: 'O Nome precisa ter no mínimo 3 caracteres.',
    })
    .max(15, {
      message: 'O Nome precisa ter no máximo 15 caracteres.',
    }),
})

type FormValues = z.infer<typeof formSchema>

export function DialogModelo() {
  // 1. Define your form.
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      nome: '',
    },
  })

  // 2. Define a submit handler.
  function onSubmit(values: FormValues) {
    try {
      create(values.nome)
      // 3. Reset the form.
      form.reset()
    } catch (error) {
      console.error('Erro' + error)
    }
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">
          <PlusIcon className="w-4 h-4 mr-2" />
          Adicionar Modelo
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Adicionar Modelo</DialogTitle>
          <DialogDescription>
            Adicione um novo modelo para dispositivos.
          </DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="nome"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Nome do Modelo</FormLabel>
                  <FormControl>
                    <Input placeholder="s24" {...field} />
                  </FormControl>
                  <FormDescription>
                    O nome do modelo deve ter entre 3 e 15 caracteres.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <DialogFooter>
              <Button type="submit">Salvar</Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  )
}
