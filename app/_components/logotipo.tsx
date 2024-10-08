import { Button } from '@/components/ui/button'
import { Bell, Package2 } from 'lucide-react'
import Link from 'next/link'

export default function Logotipo() {
  return (
    <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
      <Link href="/" className="flex items-center gap-2 font-semibold">
        <Package2 className="h-6 w-6" />
        <span className="">NC</span>
      </Link>
      <Button variant="outline" size="icon" className="ml-auto h-8 w-8">
        <Bell className="h-4 w-4" />
        <span className="sr-only">Toggle notifications</span>
      </Button>
    </div>
  )
}
