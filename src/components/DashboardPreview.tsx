"use client";

import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function DashboardPreview() {
  const [imageFailed, setImageFailed] = useState(false);

  return (
    <section id="produtos" className="relative overflow-hidden py-28">
      <div className="pointer-events-none absolute -right-16 top-10 h-[340px] w-[340px] rounded-full bg-primary/10 blur-[105px]" />
      <div className="pointer-events-none absolute -left-14 bottom-8 h-[320px] w-[320px] rounded-full bg-secondary/10 blur-[95px]" />

      <div className="shell">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.52 }}
          className="mx-auto mb-12 max-w-3xl text-center"
        >
          <span className="eyebrow mb-5">case em producao</span>
          <h2 className="title-lg mb-5">IOY Agenda: SaaS de agendamento com operacao inteligente.</h2>
          <p className="muted mb-8 text-lg">
            Exemplo real do nosso padrao de produto: UX clara, painel operacional e fluxo completo para servicos.
          </p>
          <a href="https://agenda.ioy.com.br" target="_blank" rel="noopener noreferrer" className="btn-primary">
            Acessar IOY Agenda
            <ArrowRight size={16} />
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65 }}
          className="panel scan-line mx-auto max-w-5xl p-2"
        >
          {!imageFailed ? (
            <div className="relative overflow-hidden rounded-2xl border border-white/15 bg-[hsl(var(--background-2))]">
              <Image
                src="/ioy-agenda-sistema.png"
                alt="Preview do sistema IOY Agenda"
                width={1600}
                height={900}
                className="h-auto w-full object-cover"
                priority
                onError={() => setImageFailed(true)}
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
            </div>
          ) : (
            <div className="rounded-2xl border border-white/15 bg-[hsl(var(--background-2))] p-4 md:p-5">
              <div className="mb-4 flex items-center gap-3 border-b border-white/10 pb-3">
                <span className="h-2.5 w-2.5 rounded-full bg-white/25" />
                <span className="h-2.5 w-2.5 rounded-full bg-white/25" />
                <span className="h-2.5 w-2.5 rounded-full bg-white/25" />
                <span className="ml-2 rounded-md border border-white/15 px-2 py-1 font-mono text-[10px] text-white/60">
                  agenda.ioy.com.br/app
                </span>
              </div>

              <div className="grid gap-4 md:grid-cols-[220px_1fr]">
                <aside className="hidden rounded-xl border border-white/10 bg-white/[0.03] p-4 md:block">
                  <div className="mb-4 h-8 w-28 rounded bg-white/15" />
                  <div className="space-y-2">
                    {[70, 58, 64, 52, 60].map((w, i) => (
                      <div key={i} className="h-2.5 rounded bg-white/10" style={{ width: `${w}%` }} />
                    ))}
                  </div>
                </aside>

                <div className="space-y-4">
                  <div className="grid gap-3 sm:grid-cols-3">
                    {["hsl(var(--primary) / 0.34)", "hsl(var(--sky) / 0.28)", "hsl(var(--foreground) / 0.1)"].map(
                      (bg, i) => (
                        <div key={i} className="rounded-xl border border-white/10 p-3" style={{ background: bg }}>
                          <div className="mb-2 h-2.5 w-1/2 rounded bg-white/40" />
                          <div className="h-4 w-1/3 rounded bg-white/50" />
                        </div>
                      )
                    )}
                  </div>

                  <div className="rounded-xl border border-white/10 bg-white/[0.03] p-4">
                    <div className="mb-3 flex gap-3">
                      {["w-16", "w-20", "w-12", "w-16"].map((width, i) => (
                        <div key={i} className={`h-2 rounded bg-white/25 ${width}`} />
                      ))}
                    </div>

                    <div className="space-y-2.5">
                      {[1, 2, 3, 4].map((row) => (
                        <div key={row} className="flex items-center gap-3">
                          <div className="h-7 w-7 rounded-full bg-white/10" />
                          <div className="h-2 w-24 rounded bg-white/15" />
                          <div className="h-2 w-16 rounded bg-white/15" />
                          <div className="ml-auto h-5 w-14 rounded-full bg-primary/35" />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
