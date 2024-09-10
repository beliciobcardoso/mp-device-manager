'use client'
import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@/components/ui/tabs"
<<<<<<< HEAD
import { useFormState } from "react-dom"
import { saveMarca } from "./marca/action"

=======
import ModeloPage from "../modelo/page"
>>>>>>> 521c5431daebd29787f61c9aada43f1eb5f9fdbd

export default function Configuracoes() {
    const [state, formMarcaAction] = useFormState(saveMarca, null)
    return (
        <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
            <Tabs defaultValue="colaboradores">
                <TabsList className="grid w-full grid-cols-6">
                    <TabsTrigger value="colaboradores">Colaboradores</TabsTrigger>
                    <TabsTrigger value="marca">Marca</TabsTrigger>
                    <TabsTrigger value="modelo">Modelo</TabsTrigger>
                    <TabsTrigger value="notebook">Notebook</TabsTrigger>
                    <TabsTrigger value="celular">Celular</TabsTrigger>
                </TabsList>
                <TabsContent value="colaboradores" className="w-[400px]">
                    <Card>
                        <CardHeader>
                            <CardTitle>Colaboradores</CardTitle>
                            <CardDescription>
                                Make changes to your colaboradores here. Click save when you're done.
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-2">
                            <div className="space-y-1">
                                <Label htmlFor="name">Name</Label>
                                <Input id="name" defaultValue="Pedro Duarte" />
                            </div>
                            <div className="space-y-1">
                                <Label htmlFor="username">Username</Label>
                                <Input id="username" defaultValue="@peduarte" />
                            </div>
                        </CardContent>
                        <CardFooter>
                            <Button>Save changes</Button>
                        </CardFooter>
                    </Card>
                </TabsContent>
                <TabsContent value="marca" className="w-[400px]">
                    <Card>
                        <CardHeader>
                            <CardTitle>Marca</CardTitle>
                            <CardDescription>
                                Cadastro das marcas.
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-2">
                            <form action={formMarcaAction}>
                                <div className="space-y-1">
                                    <Label htmlFor="nome">Nome</Label>
                                    <Input id="nome" type="text" name="nome" />
                                    <div id="name-error" aria-live="polite" aria-atomic="true">
                                        <p className="mt-2 text-sm text-red-500">{state?.Error?.nome}</p>
                                    </div>
                                </div>
                                <Button>Salvar</Button>
                            </form>
                        </CardContent>
                    </Card>
                </TabsContent>
                <TabsContent value="modelo">
                    <ModeloPage />
                </TabsContent>
                <TabsContent value="notebook" className="w-[400px]">
                    <Card>
                        <CardHeader>
                            <CardTitle>Notebook</CardTitle>
                            <CardDescription>
                                Change your marca here. After saving, you'll be logged out.
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-2">
                            <div className="space-y-1">
                                <Label htmlFor="current">Current marca</Label>
                                <Input id="current" type="marca" />
                            </div>
                            <div className="space-y-1">
                                <Label htmlFor="new">New marca</Label>
                                <Input id="new" type="marca" />
                            </div>
                        </CardContent>
                        <CardFooter>
                            <Button>Save Modelo</Button>
                        </CardFooter>
                    </Card>
                </TabsContent>
                <TabsContent value="celular" className="w-[400px]">
                    <Card>
                        <CardHeader>
                            <CardTitle>Celular</CardTitle>
                            <CardDescription>
                                Change your marca here. After saving, you'll be logged out.
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-2">
                            <div className="space-y-1">
                                <Label htmlFor="current">Current marca</Label>
                                <Input id="current" type="marca" />
                            </div>
                            <div className="space-y-1">
                                <Label htmlFor="new">New marca</Label>
                                <Input id="new" type="marca" />
                            </div>
                        </CardContent>
                        <CardFooter>
                            <Button>Salvar</Button>
                        </CardFooter>
                    </Card>
                </TabsContent>
            </Tabs>
        </main >
    )
}
