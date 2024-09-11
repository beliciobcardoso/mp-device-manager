'use client'

import { Button } from '@/components/ui/button'
import { CaretSortIcon, DotsHorizontalIcon } from '@radix-ui/react-icons'
import {
  ColumnDef,
  ColumnFiltersState,
  SortingState,
  VisibilityState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from '@tanstack/react-table'
import * as React from 'react'

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'

export type Notebooks = {
  id: number
  nome: string
  modelo: number
  marca: number
  serial: string
  so: string
  memoria: string
  armazenamento: string
  processador: string
  descricao: string
  dataCompra: string
  status: string
}

const data: Notebooks[] = [
  {
    id: 1,
    nome: 'NOTE1806',
    modelo: 1,
    marca: 1,
    serial: '123456',
    so: 'Windows 10',
    memoria: '8GB',
    armazenamento: '256GB',
    processador: 'Intel Core i5',
    descricao: 'Notebook 1',
    dataCompra: '2021-10-01',
    status: 'DISPONÍVEL',
  },
  {
    id: 2,
    nome: 'NOTE1807',
    modelo: 1,
    marca: 1,
    serial: '123456',
    so: 'Windows 10',
    memoria: '8GB',
    armazenamento: '256GB',
    processador: 'Intel Core i5',
    descricao: 'Notebook 2',
    dataCompra: '2021-10-01',
    status: 'DISPONÍVEL',
  },
  {
    id: 3,
    nome: 'NOTE1808',
    modelo: 4,
    marca: 3,
    serial: '123456',
    so: 'Windows 10',
    memoria: '8GB',
    armazenamento: '256GB',
    processador: 'Intel Core i5',
    descricao: 'Notebook 3',
    dataCompra: '2021-10-01',
    status: 'DISPONÍVEL',
  },
  {
    id: 4,
    nome: 'NOTE1809',
    modelo: 3,
    marca: 3,
    serial: '123456',
    so: 'Windows 10',
    memoria: '8GB',
    armazenamento: '256GB',
    processador: 'Intel Core i5',
    descricao: 'Notebook 4',
    dataCompra: '2021-10-01',
    status: 'DISPONÍVEL',
  },
  {
    id: 5,
    nome: 'NOTE1810',
    modelo: 2,
    marca: 4,
    serial: '123456',
    so: 'Windows 10',
    memoria: '8GB',
    armazenamento: '256GB',
    processador: 'Intel Core i5',
    descricao: 'Notebook 5',
    dataCompra: '2021-10-01',
    status: 'DISPONÍVEL',
  },
]

export const columns: ColumnDef<Notebooks>[] = [
  {
    accessorKey: 'nome',
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          Notebooks
          <CaretSortIcon className="ml-2 h-4 w-4" />
        </Button>
      )
    },
    cell: ({ row }) => <div className="pl-4">{row.getValue('nome')}</div>,
  },
  {
    accessorKey: 'modelo',
    header: 'Modelo',
    cell: ({ row }) => <div className="pl-4">{row.getValue('modelo')}</div>,
  },
  {
    accessorKey: 'marca',
    header: 'Marca',
    cell: ({ row }) => <div className="pl-4">{row.getValue('marca')}</div>,
  },
  {
    accessorKey: 'serial',
    header: 'Serial',
    cell: ({ row }) => <div className="pl-4">{row.getValue('serial')}</div>,
  },
  {
    accessorKey: 'so',
    header: 'SO',
    cell: ({ row }) => <div className="pl-4">{row.getValue('so')}</div>,
  },
  {
    accessorKey: 'memoria',
    header: 'Memória',
    cell: ({ row }) => <div className="pl-4">{row.getValue('memoria')}</div>,
  },
  {
    accessorKey: 'armazenamento',
    header: 'Armazenamento',
    cell: ({ row }) => (
      <div className="pl-4">{row.getValue('armazenamento')}</div>
    ),
  },
  {
    accessorKey: 'processador',
    header: 'Processador',
    cell: ({ row }) => (
      <div className="pl-4">{row.getValue('processador')}</div>
    ),
  },
  {
    accessorKey: 'dataCompra',
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          Data da Compra
          <CaretSortIcon className="ml-2 h-4 w-4" />
        </Button>
      )
    },
    cell: ({ row }) => <div className="pl-4">{row.getValue('dataCompra')}</div>,
  },
  {
    accessorKey: 'status',
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          Status
          <CaretSortIcon className="ml-2 h-4 w-4" />
        </Button>
      )
    },
    cell: ({ row }) => <div className="pl-4">{row.getValue('status')}</div>,
  },
  {
    id: 'actions',
    enableHiding: false,
    cell: ({ row }) => {
      const notebooks = row.original

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <DotsHorizontalIcon className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem
              onClick={() => console.log('Copy Notebooks ID', notebooks.id)}
            >
              Copy Notebooks ID
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>View customer</DropdownMenuItem>
            <DropdownMenuItem>View Notebooks details</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      )
    },
  },
]

export function DataTable() {
  const [sorting, setSorting] = React.useState<SortingState>([])
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    [],
  )
  const [columnVisibility, setColumnVisibility] =
    React.useState<VisibilityState>({})
  const [rowSelection, setRowSelection] = React.useState({})

  const table = useReactTable({
    data,
    columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
    },
  })

  return (
    <div className="w-full ">
      <div className="rounded-md border bg-stone-200">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext(),
                          )}
                    </TableHead>
                  )
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && 'selected'}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext(),
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <div className="flex items-center justify-end space-x-2 py-4">
        <div className="space-x-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            Voltar
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          >
            Próximo
          </Button>
        </div>
      </div>
    </div>
  )
}
