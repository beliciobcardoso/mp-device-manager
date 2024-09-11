import { DataTable } from './components/data-table'
import { DialogColaboradores } from './components/dialog-colaborador'

export default function ColaboradoresPage() {
  return (
    <div className="h-full space-y-2 pt-4 px-4  bg-white">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">Colaboradores</h2>
        </div>
        <div className="flex items-center space-x-2">
          <DialogColaboradores />
        </div>
      </div>
      <div className="flex justify-center items-center px-64">
        <DataTable />
      </div>
    </div>
  )
}
