import { DataTable } from './components/data-table'
import { DialogModelo } from './components/dialog-modelo'

export default function ModeloPage() {
  return (
    <>
      <div className=" h-full space-y-8 p-8">
        <div className="flex items-center justify-between space-y-2">
          <div>
            <h2 className="text-2xl font-bold tracking-tight">Modelos</h2>
          </div>
          <div className="flex items-center space-x-2">
            <DialogModelo />
          </div>
        </div>
        <DataTable />
      </div>
    </>
  )
}
