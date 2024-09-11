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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

import { Input } from '@/components/ui/input'
import { zodResolver } from '@hookform/resolvers/zod'
import { PlusIcon } from '@radix-ui/react-icons'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

const formSchema = z.object({
  nome: z
    .string()
    .min(3, {
      message: 'O Nome precisa ter no mínimo 3 caracteres.',
    })
    .max(15, {
      message: 'O Nome precisa ter no máximo 15 caracteres.',
    }),
  local: z.string(),
})

type FormValues = z.infer<typeof formSchema>

const defaultValues: Partial<FormValues> = {
  local: 'escritorio',
}

export function DialogColaboradores() {
  // 1. Define your form.
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues,
  })

  // 2. Define a submit handler.
  function onSubmit(data: FormValues) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(data)
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">
          <PlusIcon className="w-4 h-4 mr-2" />
          Adicionar Colaborador(a)
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Adicionar Colaborador(a)</DialogTitle>
          <DialogDescription>
            Adicione um(a) novo(a) Colaborador(a).
          </DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="nome"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Nome do(a) Colaborador(a)</FormLabel>
                  <FormControl>
                    <Input placeholder="Fulano de Tal" {...field} />
                  </FormControl>
                  <FormDescription>
                    O nome do(a) Colaborador(a) deve ter entre 3 e 15
                    caracteres.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="local"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Local</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Selecione um Local!" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="escritorio">Escritório</SelectItem>
                      <SelectItem value="emcampo">Em Campo</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormDescription>
                    Você pode gerenciar os colaboradores por local.
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
