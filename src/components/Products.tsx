"use client";

import { motion } from "framer-motion";
import { ArrowRight, CheckCheck, Sparkles } from "lucide-react";

const benefits = [
  "arquitetura moderna pronta para escalar",
  "processo transparente do kickoff ao deploy",
  "design orientado a conversao e usabilidade",
  "squad tecnico com suporte continuo",
  "seguranca, performance e estabilidade",
  "foco em impacto de negocio, nao so entrega",
];

export default function Products() {
  return (
    <section id="beneficios" className="relative py-28">
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[330px] w-[740px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/10 blur-[120px]" />

      <div className="shell relative z-10">
        <div className="panel p-8 md:p-14">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55 }}
            >
              <span className="eyebrow mb-6">
                <Sparkles className="h-3.5 w-3.5" />
                por que IOY
              </span>
              <h2 className="title-lg mb-5">Tecnologia com linguagem futurista, execucao profissional e resultado mensuravel.</h2>
              <p className="muted mb-8 text-base leading-relaxed md:text-lg">
                Unimos qualidade visual, arquitetura robusta e decisao orientada a dados para construir produtos que
                sua operacao realmente adota.
              </p>

              <ul className="space-y-3">
                {benefits.map((item) => (
                  <li key={item} className="flex items-center gap-3 text-sm font-medium text-white/90">
                    <CheckCheck className="h-4.5 w-4.5 text-primary" />
                    {item}
                  </li>
                ))}
              </ul>

              <a
                href="https://wa.me/5527988625801"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary mt-9"
              >
                Falar com especialista
                <ArrowRight size={16} />
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65 }}
              className="space-y-4"
            >
              <div className="scan-line rounded-3xl border border-white/15 bg-gradient-to-br from-[hsl(var(--background-2))] to-[hsl(var(--popover))] p-7">
                <p className="text-xs uppercase tracking-[0.16em] text-secondary">Manifesto</p>
                <p className="mt-3 text-2xl font-bold leading-tight text-white md:text-3xl">
                  &quot;Projetos digitais que elevam a operacao e fortalecem a marca.&quot;
                </p>
              </div>

              <div className="grid grid-cols-3 gap-3">
                {[
                  { value: "99.9%", label: "uptime alvo" },
                  { value: "Rapido", label: "time to market" },
                  { value: "Nativo", label: "cloud first" },
                ].map((metric) => (
                  <div key={metric.label} className="metric text-center">
                    <p className="text-lg font-bold text-white">{metric.value}</p>
                    <p className="muted text-xs">{metric.label}</p>
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


