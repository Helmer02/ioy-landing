"use client";

import { motion } from "framer-motion";
import { ArrowRight, Zap } from "lucide-react";

export default function CTA() {
  return (
    <section id="contato" className="relative py-24 overflow-hidden">
      {/* Dynamic Background */}
      <div className="absolute inset-0 bg-primary/5 pointer-events-none" />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />

      <div className="shell">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="panel max-w-5xl mx-auto p-12 md:p-24 text-center border border-white/10 bg-black/40 backdrop-blur-3xl relative"
        >
          {/* Decorative icons */}
          <div className="absolute top-10 left-10 text-primary/10 animate-pulse">
            <Zap size={40} />
          </div>
          <div className="absolute bottom-10 right-10 text-primary/10 animate-pulse rotate-12">
            <Zap size={40} />
          </div>

          <span className="eyebrow mb-8">Vamos Construir Juntos</span>
          <h2 className="title-hero text-4xl md:text-6xl mb-8">
            Leve sua Empresa para a <span className="text-primary italic">Próxima Dimensão</span>.
          </h2>
          <p className="text-white/50 text-lg max-w-2xl mx-auto mb-12">
            Estamos prontos para liderar sua jornada de transformação digital com 
            design de elite e engenharia de precisão.
          </p>

          <div className="flex flex-col justify-center gap-6 sm:flex-row">
            <a
              href="https://wa.me/5527988625801"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary group h-14"
            >
              Iniciar Projeto Agora
              <ArrowRight size={18} className="transition-transform group-hover:translate-x-2" />
            </a>
            <a href="#solucoes" className="btn-secondary h-14">
              Conhecer Soluções
            </a>
          </div>

          <div className="mt-14 flex flex-wrap justify-center gap-8 text-[10px] font-black uppercase tracking-[0.3em] text-white/20">
            <span className="flex items-center gap-2">
              <div className="h-1 w-1 rounded-full bg-primary" /> Diagnóstico Gratuito
            </span>
            <span className="flex items-center gap-2">
              <div className="h-1 w-1 rounded-full bg-primary" /> Resposta em 24h
            </span>
            <span className="flex items-center gap-2">
              <div className="h-1 w-1 rounded-full bg-primary" /> Sem Compromisso
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
