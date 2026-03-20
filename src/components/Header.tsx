"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { label: "Solucoes", href: "#solucoes" },
  { label: "Produtos", href: "#produtos" },
  { label: "Metodo", href: "#metodologia" },
  { label: "Agencia", href: "#agencia" },
  { label: "Contato", href: "#contato" },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        isScrolled
          ? "border-b border-white/10 bg-[hsl(var(--background-2))/0.82] py-3 backdrop-blur-xl"
          : "bg-transparent py-5"
      }`}
    >
      <div className="shell flex items-center justify-between gap-4">
        <a href="#" className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-[hsl(var(--background))]">
            <Image src="/logo.png" alt="IOY" width={44} height={44} className="h-10 w-10 object-contain" />
          </div>
          <div>
            <p className="text-sm font-semibold tracking-[0.16em] text-white/70">IOY</p>
            <p className="text-sm font-bold text-white">Tecnologia</p>
          </div>
        </a>

        <nav className="hidden items-center gap-8 text-sm md:flex">
          {links.map((item) => (
            <a key={item.href} href={item.href} className="muted transition hover:text-white">
              {item.label}
            </a>
          ))}
        </nav>

        <a
          href="https://wa.me/5527988625801"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary hidden md:inline-flex"
        >
          Falar com especialista
        </a>

        <button
          onClick={() => setMobileMenuOpen((prev) => !prev)}
          className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/15 bg-white/[0.04] text-white md:hidden"
          aria-label="Menu"
        >
          {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {mobileMenuOpen && (
        <div className="shell mt-3 md:hidden">
          <div className="panel space-y-2 p-4">
            {links.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block rounded-lg px-3 py-2 text-sm text-white/80 transition hover:bg-white/[0.06]"
              >
                {item.label}
              </a>
            ))}
            <a
              href="https://wa.me/5527988625801"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="btn-primary mt-3 w-full"
            >
              Abrir WhatsApp
            </a>
          </div>
        </div>
      )}
    </header>
  );
}




