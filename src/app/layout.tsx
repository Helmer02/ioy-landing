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
  title: "IOY Tecnologia — Soluções Digitais Inteligentes",
  description: "A IOY desenvolve plataformas digitais, sistemas SaaS e automações de alta performance para empresas que buscam inovação e escala.",
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
