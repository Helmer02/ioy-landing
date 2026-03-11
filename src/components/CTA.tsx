"use client";

import { motion } from "framer-motion";

export default function CTA() {
  return (
    <section className="py-24 relative overflow-hidden" id="contato">
      <div className="absolute inset-0 bg-primary/5" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[300px] bg-secondary/10 blur-[150px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 max-w-4xl relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass-card rounded-[40px] p-10 md:p-20 text-center border-white/10"
        >
          <div className="inline-flex items-center gap-2 mb-8 text-primary font-medium tracking-wide">
            <span className="w-8 h-[1px] bg-primary" />
            VAMOS CONSTRUIR JUNTOS
            <span className="w-8 h-[1px] bg-primary" />
          </div>
          
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold tracking-tight mb-6 sm:mb-8 leading-tight">
            Pronto para digitalizar e <br className="block sm:hidden" /><span className="text-gradient">escalar</span> seu negócio?
          </h2>
          
          <p className="text-lg sm:text-xl text-muted mb-8 sm:mb-12 max-w-2xl mx-auto">
            A IOY desenvolve tecnologia inteligente, rápida e segura para empresas que querem crescer.
          </p>

          <a 
            href="https://wa.me/5527988625801"
            target="_blank" rel="noopener noreferrer"
            className="flex sm:inline-flex items-center justify-center gap-3 px-6 sm:px-10 py-4 sm:py-5 w-full sm:w-auto rounded-2xl text-base sm:text-lg font-bold text-white bg-gradient-to-r from-primary to-secondary glow-primary hover:glow-secondary transition-all hover:scale-105"
          >
            <img src="/logo.png" alt="Icon" className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-black/20" /> Falar com um especialista
          </a>
        </motion.div>
      </div>
    </section>
  );
}
