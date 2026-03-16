"use client";

import { motion } from "framer-motion";
import { CheckCircle2, ArrowRight, Sparkles } from "lucide-react";

export default function Products() {
  const benefits = [
    "Tecnologia moderna e escalável",
    "Design profissional e intuitivo",
    "Plataformas seguras e estáveis",
    "Suporte especializado dedicado",
    "Entregas rápidas e eficientes",
    "Foco em resultado real para o negócio",
  ];

  return (
    <section className="py-32 relative" id="beneficios">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-primary/8 blur-[150px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="glass-card rounded-[40px] p-8 md:p-16 border border-white/8 overflow-hidden relative">

          {/* Glow accent */}
          <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-secondary/10 blur-[100px] rounded-full pointer-events-none" />

          <div className="grid lg:grid-cols-2 gap-16 items-center relative z-10">

            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-6 font-medium text-sm text-foreground">
                <Sparkles size={14} className="text-secondary" />
                Por que escolher a IOY
              </div>

              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-6">
                Tecnologia inteligente para{" "}
                <span className="text-gradient">empresas modernas.</span>
              </h2>

              <p className="text-base sm:text-lg text-muted mb-8 max-w-lg">
                A IOY une design de alto nível, arquitetura sólida e foco total em resultado. Criamos soluções que sua equipe vai amar usar.
              </p>

              <ul className="space-y-3.5 mb-10">
                {benefits.map((b, i) => (
                  <li key={i} className="flex items-center gap-3 text-foreground/90 font-medium text-sm">
                    <CheckCircle2 className="text-secondary w-5 h-5 flex-shrink-0" />
                    {b}
                  </li>
                ))}
              </ul>

              <a
                href="https://wa.me/5527988625801"
                target="_blank" rel="noopener noreferrer"
                className="px-8 py-4 w-full sm:w-auto rounded-xl font-semibold text-white bg-gradient-to-r from-primary to-secondary glow-primary hover:scale-[1.02] transition-transform inline-flex items-center justify-center gap-2 group"
              >
                Falar com um especialista
                <ArrowRight className="group-hover:translate-x-1 transition-transform" size={18} />
              </a>
            </motion.div>

            {/* Visual — vision card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="flex flex-col gap-5"
            >
              {/* Vision card */}
              <div className="relative p-[1px] rounded-3xl bg-gradient-to-br from-primary/50 via-secondary/30 to-primary/20">
                <div className="bg-[#0d0e18] rounded-3xl p-8">
                  <p className="text-3xl sm:text-4xl font-bold text-foreground leading-tight mb-4">
                    "Construindo o futuro da tecnologia acessível para empresas."
                  </p>
                  <p className="text-muted text-sm">— Visão IOY Tecnologia</p>
                </div>
              </div>

              {/* Stats row */}
              <div className="grid grid-cols-3 gap-4">
                {[
                  { val: "100%", label: "Foco em resultado" },
                  { val: "Rápido", label: "Time to market" },
                  { val: "Escala", label: "Arquitetura cloud" },
                ].map((s, i) => (
                  <div key={i} className="glass rounded-2xl p-4 text-center border border-white/5">
                    <p className="text-xl font-bold text-foreground mb-1">{s.val}</p>
                    <p className="text-xs text-muted leading-tight">{s.label}</p>
                  </div>
                ))}
              </div>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
}
