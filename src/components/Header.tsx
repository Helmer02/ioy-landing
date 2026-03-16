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
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        isScrolled 
          ? "bg-[#090a12]/80 backdrop-blur-xl border-b border-white/5 py-4 shadow-[0_8px_32px_rgba(0,0,0,0.3)]" 
          : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-6 max-w-7xl flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="w-11 h-11 rounded-2xl overflow-hidden flex items-center justify-center shadow-[0_0_25px_rgba(0,212,255,0.3)] group-hover:shadow-[0_0_35px_rgba(0,212,255,0.5)] group-hover:scale-105 transition-all duration-500 bg-[#090a12] border border-white/5">
            <img src="/logo.png" alt="IOY Logo" className="w-[110%] h-[110%] object-cover" />
          </div>
          <span className="font-bold text-xl tracking-tight text-foreground group-hover:text-primary transition-colors">
            IOY Tecnologia
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
          {["Soluções", "Produtos", "Portfólio", "Nossa Agência", "Contato"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
              className="text-muted hover:text-foreground transition-colors relative group"
            >
              {item}
              <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-gradient-to-r from-primary to-secondary transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        {/* CTA */}
        <div className="hidden md:block">
          <a
            href="https://wa.me/5527988625801"
            target="_blank" rel="noopener noreferrer"
            className="px-6 py-3 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-primary to-secondary glow-primary hover:scale-[1.02] transition-transform inline-flex items-center gap-2"
          >
            Fale com um Especialista
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden w-10 h-10 flex items-center justify-center rounded-xl bg-white/5 border border-white/10 text-foreground transition-colors hover:bg-white/10"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-full left-4 right-4 mt-2 bg-[#0d0e18]/95 backdrop-blur-2xl border border-white/10 p-8 rounded-3xl flex flex-col gap-6 shadow-2xl md:hidden"
        >
          {["Soluções", "Produtos", "Portfólio", "Nossa Agência", "Contato"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
              onClick={() => setMobileMenuOpen(false)}
              className="text-muted hover:text-foreground text-xl font-medium transition-colors"
            >
              {item}
            </a>
          ))}
          <a
            href="https://wa.me/5527988625801"
            target="_blank" rel="noopener noreferrer"
            className="mt-4 px-6 py-4 rounded-2xl text-center font-bold text-white bg-gradient-to-r from-primary to-secondary glow-primary flex items-center justify-center"
            onClick={() => setMobileMenuOpen(false)}
          >
            Fale com um Especialista
          </a>
        </motion.div>
      )}
    </header>
  );
}
