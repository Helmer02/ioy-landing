import type { Metadata } from "next";
import { Space_Grotesk, Space_Mono } from "next/font/google";
import "./globals.css";

const headingFont = Space_Grotesk({
  variable: "--font-heading",
  subsets: ["latin"],
});

const monoFont = Space_Mono({
  variable: "--font-mono",
  weight: ["400", "700"],
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
      <body className={`${headingFont.variable} ${monoFont.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
