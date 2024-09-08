import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Logotipo from "./_components/logotipo";
import MenuLateral from "./_components/menuLateral";
import MenuSheet from "./_components/menuSheet";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Gerenciador de Dispositivos",
  description: "Sistema de gerenciamento de dispositivos",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={inter.className}>
      <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
      <div className="hidden border-r bg-muted/40 md:block">
        <div className="flex h-full max-h-screen flex-col gap-2">
          <Logotipo />
          <MenuLateral />
        </div>
      </div>
      <div className="flex flex-col">
        <MenuSheet />
        <main>{children}</main>
      </div>
    </div>
      </body>
    </html>
  );
}
