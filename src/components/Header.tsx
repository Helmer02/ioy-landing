"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/80 backdrop-blur-md border-b border-white/5 py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-6 max-w-7xl flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-xl overflow-hidden flex items-center justify-center shadow-[0_0_20px_rgba(0,212,255,0.4)] group-hover:scale-105 transition-transform bg-[#090a12]">
            <img src="/logo.png" alt="IOY Logo" className="w-[120%] h-[120%] object-cover" />
          </div>
          <span className="font-bold text-xl tracking-tight text-foreground">
            IOY Tecnologia
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-muted">
          <a href="#solucoes" className="hover:text-foreground transition-colors">Soluções</a>
          <a href="#produtos" className="hover:text-foreground transition-colors">Produtos</a>
          <a href="#portfolio" className="hover:text-foreground transition-colors">Portfólio</a>
          <a href="#agencia" className="hover:text-foreground transition-colors">Nossa Agência</a>
          <a href="#contato" className="hover:text-foreground transition-colors">Contato</a>
        </nav>

        {/* CTA */}
        <div className="hidden md:block">
          <a
            href="https://wa.me/5527988625801"
            target="_blank" rel="noopener noreferrer"
            className="px-6 py-2.5 rounded-full text-sm font-semibold text-white bg-gradient-to-r from-primary to-secondary glow-primary hover:glow-secondary transition-all hover:scale-105 inline-flex items-center gap-2"
          >
            <img src="/logo.png" alt="Icon" className="w-5 h-5 rounded-full bg-black/20" />
            Fale com um Especialista
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-foreground"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-full left-0 w-full bg-[#0B0B0F]/95 backdrop-blur-xl border-b border-white/10 p-6 flex flex-col gap-4 shadow-2xl md:hidden"
        >
          <a href="#solucoes" onClick={() => setMobileMenuOpen(false)} className="text-muted hover:text-foreground text-lg py-2">Soluções</a>
          <a href="#produtos" onClick={() => setMobileMenuOpen(false)} className="text-muted hover:text-foreground text-lg py-2">Produtos</a>
          <a href="#portfolio" onClick={() => setMobileMenuOpen(false)} className="text-muted hover:text-foreground text-lg py-2">Portfólio</a>
          <a href="#agencia" onClick={() => setMobileMenuOpen(false)} className="text-muted hover:text-foreground text-lg py-2">Nossa Agência</a>
          <a href="#contato" onClick={() => setMobileMenuOpen(false)} className="text-muted hover:text-foreground text-lg py-2">Contato</a>
          <a
            href="https://wa.me/5527988625801"
            target="_blank" rel="noopener noreferrer"
            className="mt-4 px-6 py-3 rounded-xl text-center font-semibold text-white bg-gradient-to-r from-primary to-secondary glow-primary flex items-center justify-center gap-2"
            onClick={() => setMobileMenuOpen(false)}
          >
            <img src="/logo.png" alt="Icon" className="w-5 h-5 rounded-full bg-black/20" />
            Fale com um Especialista
          </a>
        </motion.div>
      )}
    </header>
  );
}
