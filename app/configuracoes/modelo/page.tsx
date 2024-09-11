import { DataTable } from './components/data-table'
import { DialogModelo } from './components/dialog-modelo'

export default function ModeloPage() {
  return (
    <div className="h-full space-y-2 pt-4 px-4  bg-white">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">Modelos</h2>
        </div>
        <div className="flex items-center space-x-2">
          <DialogModelo />
        </div>
      </div>
      <div className="flex justify-center items-center px-64">
        <DataTable />
      </div>
    </div>
  )
}
