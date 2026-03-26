"use client";

import { motion } from "framer-motion";
import { ArrowRight, Cpu, Orbit, Radar, Sparkles } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden pb-24 pt-44 md:pb-32 md:pt-56">
      {/* Background Glows - Rentier Style */}
      <div className="pointer-events-none absolute -top-40 left-[15%] h-[500px] w-[500px] rounded-full bg-primary/20 blur-[120px]" />
      <div className="pointer-events-none absolute top-1/4 -right-20 h-[400px] w-[400px] rounded-full bg-primary/15 blur-[105px]" />

      <div className="shell relative z-10 grid items-center gap-20 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-2xl"
        >
          <div className="eyebrow mb-8 animate-float">
            <Sparkles size={12} className="text-primary" />
            Liderando a Próxima Geração de SaaS
          </div>

          <h1 className="title-hero mb-8 text-slate-900">
            Transformamos <span className="text-primary">Visão</span> em Produtos de <span className="text-slate-500 italic font-serif">Alta Performance</span>.
          </h1>

          <p className="max-w-xl text-lg leading-relaxed mb-12 text-slate-600">
            A IOY Tecnologia projeta e constrói ecossistemas digitais que escalam. 
            Do design minimalista à engenharia de dados robusta, entregamos o futuro hoje.
          </p>

          <div className="flex flex-col gap-5 sm:flex-row">
            <a href="#solucoes" className="btn-primary group">
              Explorar Ecossistema
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="https://wa.me/5527988625801"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
            >
              Agendar Consultoria
            </a>
          </div>

          <div className="mt-16 grid grid-cols-3 gap-8 border-t border-[var(--line)] pt-10">
            {[
              { label: "Performance", value: "99.9%" },
              { label: "Escalabilidade", value: "Infinity" },
              { label: "Retorno", value: "10x+" },
            ].map((item) => (
              <div key={item.label} className="group">
                <p className="mb-1 text-2xl font-bold text-slate-900 transition-colors group-hover:text-primary">
                  {item.value}
                </p>
                <p className="text-[10px] uppercase tracking-[0.2em] font-bold text-slate-500">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9, rotateY: 10 }}
          animate={{ opacity: 1, scale: 1, rotateY: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative perspective-1000"
        >
          {/* Main Card - Rentier Control Panel */}
          <div className="panel border border-[var(--line)] bg-white/85 p-3 backdrop-blur-3xl shadow-2xl shadow-primary/10">
            <div className="rounded-[20px] border border-[var(--line)] bg-[linear-gradient(180deg,#ffffff_0%,#f4f2ff_100%)] p-6">
              <div className="mb-8 flex items-center justify-between">
                <div className="flex gap-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-slate-300" />
                  <span className="h-2.5 w-2.5 rounded-full bg-slate-300" />
                  <span className="h-2.5 w-2.5 rounded-full bg-slate-300" />
                </div>
                <div className="px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-[10px] font-bold text-primary uppercase tracking-wider">
                  Live System v2.0
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-3 mb-6">
                {[
                  { icon: Cpu, label: "Core AI", val: "active" },
                  { icon: Orbit, label: "Cloud", val: "stable" },
                  { icon: Radar, label: "Traffic", val: "high" },
                ].map((card) => (
                  <div
                    key={card.label}
                    className="rounded-2xl border border-[var(--line)] bg-white p-4 transition-all hover:bg-slate-50"
                  >
                    <card.icon className="mb-4 h-5 w-5 text-primary" />
                    <p className="text-xs font-bold text-slate-900 mb-1">{card.label}</p>
                    <div className="flex items-center gap-1.5">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.5)]" />
                      <span className="text-[9px] uppercase tracking-tighter text-slate-500">{card.val}</span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Chart Placeholder */}
              <div className="rounded-2xl border border-primary/10 bg-primary/[0.06] p-5">
                <div className="flex items-center justify-between mb-4">
                  <p className="text-[10px] uppercase tracking-widest text-primary font-bold">Volume de Dados</p>
                  <p className="text-xs font-bold text-slate-900">+24.8%</p>
                </div>
                <div className="flex h-32 items-end gap-1.5">
                  {[40, 55, 45, 70, 60, 85, 95, 80, 100, 90, 85, 95].map((h, i) => (
                    <motion.span
                      key={i}
                      initial={{ height: 0 }}
                      animate={{ height: `${h}%` }}
                      transition={{ duration: 1, delay: i * 0.05 }}
                      className="flex-1 rounded-t-sm"
                      style={{
                        background: i > 8 
                          ? 'hsl(var(--primary))' 
                          : 'rgba(139, 92, 246, 0.2)'
                      }}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Floating Element */}
          <motion.div 
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -bottom-10 -left-10 hidden xl:block"
          >
            <div className="panel border border-[var(--line)] bg-white/90 p-5 backdrop-blur-2xl shadow-xl">
              <div className="flex items-center gap-4">
                <div className="h-10 w-10 rounded-full bg-primary flex items-center justify-center shadow-lg shadow-primary/30">
                  <Sparkles size={18} className="text-white" />
                </div>
                <div>
                  <p className="text-sm font-bold text-slate-900">IA Otimizada</p>
                  <p className="text-[10px] text-slate-500 italic">Processando agora...</p>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

