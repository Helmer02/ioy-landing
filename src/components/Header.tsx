"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { label: "Soluções", href: "#solucoes" },
  { label: "Produtos", href: "#produtos" },
  { label: "Método", href: "#metodologia" },
  { label: "Agência", href: "#agencia" },
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
      className={`fixed top-0 z-50 w-full transition-all duration-500 ${
        isScrolled
          ? "border-b border-[var(--line)] bg-white/85 py-3 backdrop-blur-2xl"
          : "bg-transparent py-7"
      }`}
    >
      <div className="shell flex items-center justify-between">
        <a href="#" className="group">
          <Image
            src="/brand-new.png"
            alt="IOY"
            width={180}
            height={60}
            className="h-9 w-auto object-contain brightness-0 transition-transform duration-300 group-hover:scale-[1.01]"
            priority
          />
        </a>

        <nav className="hidden items-center gap-12 text-[12px] font-semibold tracking-[0.1em] uppercase md:flex">
          {links.map((item) => (
            <a 
              key={item.href} 
              href={item.href} 
              className="text-slate-600 transition-all duration-300 hover:text-primary hover:tracking-[0.15em]"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <a
            href="https://wa.me/5527988625801"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary hidden md:inline-flex text-[11px] uppercase tracking-[0.2em] font-bold"
          >
            Começar Projeto
          </a>

          <button
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--line)] bg-white text-slate-700 md:hidden transition-colors hover:text-primary"
            aria-label="Menu"
          >
            {mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="shell mt-4 md:hidden animate-in fade-in slide-in-from-top-4 duration-300">
          <div className="panel border border-[var(--line)] bg-white/95 p-8 space-y-6 backdrop-blur-3xl">
            {links.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block text-xl font-semibold text-slate-600 transition-all hover:text-primary hover:translate-x-2"
              >
                {item.label}
              </a>
            ))}
            <div className="pt-4">
              <a
                href="https://wa.me/5527988625801"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="btn-primary w-full py-4 text-xs uppercase tracking-widest"
              >
                Falar com especialista
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
