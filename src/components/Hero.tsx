"use client";

import { motion } from "framer-motion";
import { ArrowRight, Cpu, Orbit, Radar } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden pb-24 pt-40 md:pb-32 md:pt-48">
      <div className="pointer-events-none absolute -top-28 left-[22%] h-[360px] w-[360px] rounded-full bg-primary/22 blur-[130px]" />
      <div className="pointer-events-none absolute -right-10 top-20 h-[300px] w-[300px] rounded-full bg-secondary/12 blur-[120px]" />

      <div className="shell relative z-10 grid items-center gap-14 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 26 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65 }}
          className="max-w-2xl"
        >
          <div className="eyebrow mb-6">
            <span className="h-2 w-2 rounded-full bg-[color:var(--color-secondary)]" />
            tecnologia aplicada a resultado
          </div>

          <h1 className="title-xl mb-6">
            Design de produto e engenharia para empresas que querem operar no proximo nivel.
          </h1>

          <p className="muted max-w-xl text-base leading-relaxed md:text-lg">
            A IOY construi plataformas SaaS, sistemas corporativos e automacoes com foco em previsibilidade,
            performance e escalabilidade real.
          </p>

          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <a href="#solucoes" className="btn-primary">
              Ver solucoes
              <ArrowRight size={16} />
            </a>
            <a
              href="https://wa.me/5527988625801"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
            >
              Iniciar projeto
            </a>
          </div>

          <div className="mt-10 grid grid-cols-3 gap-3 border-t border-white/10 pt-8">
            {[
              { label: "entregas orientadas a negocio", value: "100%" },
              { label: "monitoramento continuo", value: "24/7" },
              { label: "arquitetura pronta para escala", value: "Cloud" },
            ].map((item) => (
              <div key={item.label}>
                <p className="text-2xl font-bold text-white">{item.value}</p>
                <p className="muted text-xs md:text-sm">{item.label}</p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.75, delay: 0.15 }}
          className="scan-line panel p-2"
        >
          <div className="rounded-2xl border border-white/15 bg-[hsl(var(--background-2))] p-5">
            <div className="mb-5 flex items-center gap-2">
              <span className="h-2.5 w-2.5 rounded-full bg-[hsl(var(--rose))]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[hsl(var(--amber))]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[hsl(var(--emerald))]" />
              <span className="ml-2 font-mono text-[11px] text-white/55">ioy.systems / control panel</span>
            </div>

            <div className="grid gap-3 sm:grid-cols-3">
              {[
                { icon: Cpu, label: "Core Services", color: "text-primary" },
                { icon: Orbit, label: "Automations", color: "text-primary" },
                { icon: Radar, label: "Observability", color: "text-secondary" },
              ].map((card) => (
                <div
                  key={card.label}
                  className="rounded-xl border border-white/10 bg-gradient-to-br from-white/[0.08] to-transparent p-4"
                >
                  <card.icon className={`mb-3 h-5 w-5 ${card.color}`} />
                  <p className="text-sm font-semibold text-white">{card.label}</p>
                  <p className="mt-2 text-xs text-white/60">performance, controle e previsibilidade.</p>
                </div>
              ))}
            </div>

            <div className="mt-4 rounded-xl border border-white/10 bg-white/[0.03] p-4">
              <p className="mb-3 text-xs uppercase tracking-[0.14em] text-white/60">Adocao por trimestre</p>
              <div className="flex h-28 items-end gap-1">
                {[32, 38, 42, 48, 54, 63, 72, 68, 78, 86, 90, 96].map((h, i) => (
                  <span
                    key={i}
                    className="flex-1 rounded-t"
                    style={{
                      height: `${h}%`,
                      background:
                        i > 7
                          ? "linear-gradient(180deg, hsl(var(--primary)) 0%, hsl(var(--violet-glow)) 100%)"
                          : "rgba(162, 190, 235, 0.35)",
                    }}
                  />
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

