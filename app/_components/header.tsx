import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu, Link, Home, ShoppingCart, Package, Users, LineChart, Search, CircleUser } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function headerHome(){
    return (
        <header className="flex h-14 items-center gap-4 border-b bg-muted/40 px-4 lg:h-[60px] lg:px-6">
        <Sheet>
            <SheetTrigger asChild>
                <Button
                    variant="outline"
                    size="icon"
                    className="shrink-0 md:hidden"
                >
                    <Menu className="h-5 w-5" />
                    <span className="sr-only">Toggle navigation menu</span>
                </Button>
            </SheetTrigger>
            <SheetContent side="left" className="flex flex-col">
                <nav className="grid gap-2 text-lg font-medium">
                    <Link
                        href="/"
                        className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
                    >
                        <Home className="h-4 w-4" />
                        Dashboard
                    </Link>
                    <Link
                        href="notebook"
                        className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
                    >
                        <ShoppingCart className="h-4 w-4" />
                        Notebook
                    </Link>
                    <Link
                        href="celular"
                        className="flex items-center gap-3 rounded-lg bg-muted px-3 py-2 text-primary transition-all hover:text-primary"
                    >
                        <Package className="h-4 w-4" />
                        Celular
                    </Link>
                    <Link
                        href="#"
                        className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
                    >
                        <Users className="h-4 w-4" />
                        Customers
                    </Link>
                    <Link
                        href="#"
                        className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
                    >
                        <LineChart className="h-4 w-4" />
                        Configurações
                    </Link>
                </nav>
            </SheetContent>
        </Sheet>
        <div className="w-full flex-1">
            <form>
                <div className="relative">
                    <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                    <Input
                        type="search"
                        placeholder="Search products..."
                        className="w-full appearance-none bg-background pl-8 shadow-none md:w-2/3 lg:w-1/3"
                    />
                </div>
            </form>
        </div>
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="secondary" size="icon" className="rounded-full">
                    <CircleUser className="h-5 w-5" />
                    <span className="sr-only">Toggle user menu</span>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Settings</DropdownMenuItem>
                <DropdownMenuItem>Support</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Logout</DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    </header>
    )
}