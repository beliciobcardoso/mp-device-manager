import AddModelo from './components/add-modelo'
import { DataTable } from './components/data-table'

export default function ModeloPage() {
  return (
    <>
      <div className=" h-full flex-1 flex-col space-y-8 p-8">
        <div className="flex items-center justify-between space-y-2">
          <div>
            <h2 className="text-2xl font-bold tracking-tight">Modelos</h2>
          </div>
          <div className="flex items-center space-x-2">
            <AddModelo />
          </div>
        </div>
        <DataTable />
      </div>
    </>
  )
}
