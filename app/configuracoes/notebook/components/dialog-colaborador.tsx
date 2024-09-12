'use client'
import { Button } from '@/components/ui/button'
import { Calendar } from '@/components/ui/calendar'
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
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { cn } from '@/lib/utils'
import { zodResolver } from '@hookform/resolvers/zod'
import { PlusIcon } from '@radix-ui/react-icons'
import { format } from 'date-fns'
import { CalendarIcon } from 'lucide-react'
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
  modelo: z.string(),
  marca: z.string(),
  serial: z.string(),
  so: z.string(),
  memoria: z.string(),
  armazenamento: z.string(),
  processador: z.string(),
  dataCompra: z.date(),
  status: z.string(),
})

type FormValues = z.infer<typeof formSchema>

export function DialogColaboradores() {
  // 1. Define your form.
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      nome: '',
      modelo: '',
      marca: '',
      serial: '',
      so: '',
      memoria: '',
      armazenamento: '',
      processador: '',
      dataCompra: new Date(),
      status: '',
    },
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
          Cadastrar Notebook
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle>Cadastrar Notebook</DialogTitle>
          <DialogDescription>
            Preencha os campos abaixo para adicionar um novo Notebook.
          </DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="flex flex-col space-y-8"
          >
            <div className="flex justify-around px-4">
              <FormField
                control={form.control}
                name="nome"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Nome do Notebook</FormLabel>
                    <FormControl>
                      <Input placeholder="NOTE0000" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="serial"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Serial</FormLabel>
                    <FormControl>
                      <Input placeholder="P03256545" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="flex justify-around px-4">
              <FormField
                control={form.control}
                name="marca"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Marca</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Selecione uma Marca" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="Lenovo">Lenovo</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="modelo"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Modelo</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Selecione um Modelo" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="S145-15IIL">S145-15IIL</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="so"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>SO</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Selecione um SO" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="Windows 11">Windows 11</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="flex justify-around px-4">
              <FormField
                control={form.control}
                name="processador"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Processador</FormLabel>
                    <FormControl>
                      <Input placeholder="I5-1300" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="memoria"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Memoria</FormLabel>
                    <FormControl>
                      <Input placeholder="8GB DDR" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="armazenamento"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Armazenamento</FormLabel>
                    <FormControl>
                      <Input placeholder="SSD 128GB" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="flex justify-around px-4">
              <FormField
                control={form.control}
                name="dataCompra"
                render={({ field }) => (
                  <FormItem className="flex flex-col">
                    <FormLabel>Data da Comprar</FormLabel>
                    <Popover>
                      <PopoverTrigger asChild>
                        <FormControl>
                          <Button
                            variant={'outline'}
                            className={cn(
                              'w-[240px] pl-3 text-left font-normal',
                              !field.value && 'text-muted-foreground',
                            )}
                          >
                            {field.value ? (
                              format(field.value, 'dd/MM/yyyy')
                            ) : (
                              <span>Pick a date</span>
                            )}
                            <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                          </Button>
                        </FormControl>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0" align="start">
                        <Calendar
                          mode="single"
                          selected={field.value}
                          onSelect={field.onChange}
                          disabled={(date) =>
                            date > new Date() || date < new Date('1900-01-01')
                          }
                          initialFocus
                        />
                      </PopoverContent>
                    </Popover>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="status"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Status</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Selecione um Status" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="DISPONÍVEL">DISPONÍVEL</SelectItem>
                        <SelectItem value="EM USO">EM USO</SelectItem>
                        <SelectItem value="MANUTENÇÃO">MANUTENÇÃO</SelectItem>
                        <SelectItem value="EMPRESTADO">EMPRESTADO</SelectItem>
                        <SelectItem value="SUCATA">SUCATA</SelectItem>
                        <SelectItem value="FURTADO">FURTADO</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="flex justify-around px-4"></div>
            <DialogFooter>
              <Button type="submit">Salvar</Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  )
}
