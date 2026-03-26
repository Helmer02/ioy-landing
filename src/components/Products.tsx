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
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/14 blur-[130px]" />

      <div className="shell relative z-10">
        <div className="panel relative overflow-hidden border border-[var(--line)] bg-white/90 p-8 backdrop-blur-3xl md:p-20">
          {/* Subtle line decoration */}
          <div className="absolute top-0 right-0 h-px w-1/2 bg-gradient-to-l from-primary/40 to-transparent" />
          <div className="absolute bottom-0 left-0 h-px w-1/2 bg-gradient-to-r from-primary/40 to-transparent" />

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
              <h2 className="title-hero text-4xl mb-8 text-slate-900">
                Tecnologia com DNA <span className="text-primary italic">Futurista</span> e Entrega Profissional.
              </h2>
              <p className="mb-10 text-lg leading-relaxed text-slate-600">
                Unimos excelência visual com arquitetura robusta para construir produtos que
                impulsionam sua operação para o próximo nível.
              </p>

              <ul className="grid gap-4 sm:grid-cols-2">
                {benefits.map((item) => (
                  <li key={item} className="flex items-center gap-3 text-[13px] font-medium text-slate-700 group">
                    <div className="flex h-5 w-5 items-center justify-center rounded-full border border-primary/20 bg-primary/10 transition-colors group-hover:bg-primary/20">
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
              <div className="panel group border border-[var(--line)] bg-white p-10 transition-all duration-500 hover:bg-slate-50">
                <p className="text-[10px] uppercase tracking-[0.3em] mb-6 font-black text-primary/60">Manifesto</p>
                <p className="text-2xl font-bold leading-[1.2] text-slate-900 md:text-3xl">
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
                  <div key={metric.label} className="panel border border-[var(--line)] p-6 text-center transition-all group hover:border-primary/20">
                    <p className="mb-1 text-xl font-bold text-slate-900 transition-colors group-hover:text-primary">{metric.value}</p>
                    <p className="text-[9px] font-bold uppercase tracking-widest text-slate-500">{metric.label}</p>
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

