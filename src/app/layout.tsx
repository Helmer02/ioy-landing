import type { Metadata } from "next";
import { Outfit, Inter } from "next/font/google";
import "./globals.css";

const headingFont = Outfit({
  variable: "--font-heading",
  subsets: ["latin"],
});

const bodyFont = Inter({
  variable: "--font-body",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "IOY Tecnologia - Solucoes Digitais Inteligentes",
  description:
    "A IOY desenvolve plataformas digitais, sistemas SaaS e automacoes de alta performance para empresas que buscam inovacao e escala.",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${headingFont.variable} ${bodyFont.variable} font-body antialiased`}>
        {children}
      </body>
    </html>
  );
}
