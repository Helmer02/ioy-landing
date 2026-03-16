"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function DashboardPreview() {
  return (
    <section className="py-32 relative overflow-hidden" id="produtos">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-secondary/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-primary/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-secondary/30 bg-secondary/5 mb-6 text-sm font-medium text-secondary">
              <span className="w-2 h-2 rounded-full bg-secondary animate-ping" />
              Produto em produção
            </div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 text-foreground">
              Conheça o{" "}
              <span className="text-gradient">IOY Agenda</span>
            </h2>
            <p className="text-lg text-muted max-w-2xl mx-auto mb-8">
              Nosso SaaS de agendamento inteligente para barbearias, salões, clínicas e profissionais de serviço. Um exemplo real do que a IOY constrói.
            </p>
            <a
              href="https://agenda.ioy.com.br"
              target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold text-white bg-gradient-to-r from-primary to-secondary glow-primary hover:scale-[1.02] transition-transform group"
            >
              Acessar o IOY Agenda
              <ArrowRight className="group-hover:translate-x-1 transition-transform" size={18} />
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative max-w-5xl mx-auto"
        >
          <div className="rounded-2xl border border-white/10 glass-card overflow-hidden shadow-[0_0_80px_rgba(108,59,255,0.15)]">
            <div className="bg-[#0B0B0F]/80 border-b border-white/10 p-3 flex items-center gap-4">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-white/20" />
                <div className="w-3 h-3 rounded-full bg-white/20" />
                <div className="w-3 h-3 rounded-full bg-white/20" />
              </div>
              <div className="flex-1 max-w-md mx-auto h-6 bg-white/5 rounded-md border border-white/5 flex items-center px-3">
                <span className="text-[10px] text-muted font-mono">agenda.ioy.com.br/app</span>
              </div>
            </div>

            <div className="aspect-video bg-[#07080f] relative overflow-hidden p-6 flex gap-5">
              {/* Sidebar */}
              <div className="w-44 hidden md:flex flex-col gap-3 border-r border-white/5 pr-5 shrink-0">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-6 h-6 rounded-lg bg-primary/30" />
                  <div className="w-20 h-3 bg-white/15 rounded" />
                </div>
                {[80,60,70,50,65].map((w, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded bg-white/10 shrink-0" />
                    <div className="h-2.5 bg-white/8 rounded" style={{width:`${w}%`}} />
                  </div>
                ))}
              </div>

              {/* Main */}
              <div className="flex-1 flex flex-col gap-4 min-w-0">
                <div className="flex items-center justify-between">
                  <div className="w-36 h-5 bg-white/15 rounded" />
                  <div className="w-24 h-7 bg-primary/30 rounded-lg border border-primary/30" />
                </div>
                <div className="grid grid-cols-3 gap-3">
                  {[
                    { c: 'from-primary/25 border-primary/20' },
                    { c: 'from-secondary/20 border-secondary/20' },
                    { c: 'from-white/5 border-white/5' }
                  ].map((s, i) => (
                    <div key={i} className={`h-20 bg-gradient-to-br ${s.c} to-transparent border rounded-xl p-3 flex flex-col justify-between`}>
                      <div className="w-12 h-2 bg-white/20 rounded" />
                      <div className="w-8 h-4 bg-white/30 rounded" />
                    </div>
                  ))}
                </div>
                <div className="flex-1 bg-white/[0.03] border border-white/5 rounded-xl p-4 flex flex-col gap-2.5 overflow-hidden">
                  <div className="flex gap-4 pb-2 border-b border-white/5">
                    {['w-20','w-14','w-16','w-12','w-10'].map((w,i)=>(
                      <div key={i} className={`h-2 ${w} bg-white/20 rounded`} />
                    ))}
                  </div>
                  {[...Array(4)].map((_, i) => (
                    <div key={i} className="flex gap-4 items-center">
                      <div className="w-8 h-8 rounded-full bg-white/10 shrink-0" />
                      {['w-20','w-14','w-16','w-12'].map((w,j)=>(
                        <div key={j} className={`h-2 ${w} bg-white/8 rounded`} />
                      ))}
                      <div className="ml-auto w-16 h-5 rounded-full bg-primary/20 border border-primary/20" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
