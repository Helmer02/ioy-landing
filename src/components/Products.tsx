"use client";

import { motion } from "framer-motion";
import { ArrowRight, CheckCheck, Sparkles } from "lucide-react";

const benefits = [
  "Arquitetura moderna pronta para escalar",
  "Processo transparente do kickoff ao deploy",
  "Design orientado a conversão e usabilidade",
  "Squad técnico com suporte contínuo",
  "Segurança, performance e estabilidade",
  "Foco em impacto de negócio, não só entrega",
];

export default function Products() {
  return (
    <section id="beneficios" className="relative py-32 overflow-hidden">
      {/* Central Glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/10 blur-[130px]" />

      <div className="shell relative z-10">
        <div className="panel border border-white/5 bg-white/[0.02] p-8 md:p-20 backdrop-blur-3xl overflow-hidden relative">
          {/* Subtle line decoration */}
          <div className="absolute top-0 right-0 w-1/2 h-px bg-gradient-to-l from-primary/30 to-transparent" />
          <div className="absolute bottom-0 left-0 w-1/2 h-px bg-gradient-to-r from-primary/30 to-transparent" />

          <div className="grid items-center gap-16 lg:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="eyebrow mb-8">
                <Sparkles className="h-3.5 w-3.5" />
                Diferencial IOY
              </div>
              <h2 className="title-hero text-4xl mb-8">
                Tecnologia com DNA <span className="text-primary italic">Futurista</span> e Entrega Profissional.
              </h2>
              <p className="text-white/50 mb-10 text-lg leading-relaxed">
                Unimos excelência visual com arquitetura robusta para construir produtos que
                impulsionam sua operação para o próximo nível.
              </p>

              <ul className="grid gap-4 sm:grid-cols-2">
                {benefits.map((item) => (
                  <li key={item} className="flex items-center gap-3 text-[13px] font-medium text-white/70 group">
                    <div className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center border border-primary/20 group-hover:bg-primary/20 transition-colors">
                      <CheckCheck className="h-3 w-3 text-primary" />
                    </div>
                    {item}
                  </li>
                ))}
              </ul>

              <div className="mt-12">
                <a
                  href="https://wa.me/5527988625801"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary group"
                >
                  Falar com especialista
                  <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              {/* Manifesto Card */}
              <div className="panel p-10 border border-white/10 bg-black/40 group hover:bg-black/60 transition-all duration-500">
                <p className="text-[10px] uppercase tracking-[0.3em] font-black text-primary/50 mb-6">Manifesto</p>
                <p className="text-2xl md:text-3xl font-bold leading-[1.2] text-white">
                  &quot;Projetos digitais que <span className="text-primary">elevam</span> a operação e 
                  fortalecem a <span className="italic font-serif opacity-70">marca</span>.&quot;
                </p>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-3 gap-4">
                {[
                  { value: "99.9%", label: "Uptime" },
                  { value: "Agile", label: "Método" },
                  { value: "Cloud", label: "Arquitetura" },
                ].map((metric) => (
                  <div key={metric.label} className="panel p-6 text-center border border-white/5 group hover:border-primary/20 transition-all">
                    <p className="text-xl font-bold text-white mb-1 group-hover:text-primary transition-colors">{metric.value}</p>
                    <p className="text-[9px] uppercase tracking-widest text-white/30 font-bold">{metric.label}</p>
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
