'use client'
import { Home, LineChart, Package, ShoppingCart } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function MenuLateral() {
  const pathName = usePathname()

  const isActive = (path: string) => {
    return pathName === path ? 'bg-muted text-primary' : 'text-muted-foreground'
  }

  return (
    <div className="flex-1">
      <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
        <Link
          href="/"
          className={`flex items-center gap-3 rounded-lg px-3 py-2 transition-all hover:text-primary ${isActive('/')}`}
        >
          <Home className="h-4 w-4" />
          Dashboard
        </Link>
        <Link
          href="/notebook"
          className={`flex items-center gap-3 rounded-lg px-3 py-2 transition-all hover:text-primary ${isActive('/notebook')}`}
        >
          <ShoppingCart className="h-4 w-4" />
          Notebook
        </Link>
        <Link
          href="/celular"
          className={`flex items-center gap-3 rounded-lg px-3 py-2 transition-all hover:text-primary ${isActive('/celular')}`}
        >
          <Package className="h-4 w-4" />
          Celular
        </Link>
        <Link
          href="configuracoes"
          className={`flex items-center gap-3 rounded-lg px-3 py-2 transition-all hover:text-primary ${isActive('/configuracoes')}`}
        >
          <LineChart className="h-4 w-4" />
          Configurações
        </Link>
      </nav>
    </div>
  )
}
