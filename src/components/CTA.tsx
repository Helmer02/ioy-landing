"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function CTA() {
  return (
    <section className="py-24 relative overflow-hidden" id="contato">
      <div className="absolute inset-0 bg-primary/4" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[350px] bg-secondary/8 blur-[150px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 max-w-4xl relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass-card rounded-[40px] p-10 md:p-20 text-center border border-white/8"
        >
          <div className="inline-flex items-center gap-2 mb-8 text-primary font-medium tracking-wide text-sm">
            <span className="w-8 h-[1px] bg-primary" />
            VAMOS CONSTRUIR JUNTOS
            <span className="w-8 h-[1px] bg-primary" />
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold tracking-tight mb-6 leading-tight">
            Leve sua empresa para o{" "}
            <span className="text-gradient">próximo nível.</span>
          </h2>

          <p className="text-lg sm:text-xl text-muted mb-10 max-w-2xl mx-auto leading-relaxed">
            A IOY desenvolve tecnologia inteligente, rápida e segura para empresas que querem crescer. Fale com a gente e descubra como podemos ajudar.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/5527988625801"
              target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl font-bold text-white bg-gradient-to-r from-primary to-secondary glow-primary hover:glow-secondary transition-all hover:scale-105 group"
            >
              Falar com a IOY
              <ArrowRight className="group-hover:translate-x-1 transition-transform" size={18} />
            </a>
            <a
              href="#solucoes"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl font-semibold text-foreground bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
            >
              Conhecer nossas soluções
            </a>
          </div>

          <p className="text-sm text-muted mt-8">
            ✓ Resposta rápida &nbsp;·&nbsp; ✓ Diagnóstico gratuito &nbsp;·&nbsp; ✓ Sem compromisso
          </p>
        </motion.div>
      </div>
    </section>
  );
}
