"use client";

import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Globe } from "lucide-react";

export default function DashboardPreview() {
  const [imageFailed, setImageFailed] = useState(false);

  return (
    <section id="produtos" className="relative overflow-hidden py-32">
      {/* Background Glows */}
      <div className="pointer-events-none absolute -right-20 top-20 h-[400px] w-[400px] rounded-full bg-primary/10 blur-[110px]" />
      <div className="pointer-events-none absolute -left-20 bottom-20 h-[350px] w-[350px] rounded-full bg-primary/5 blur-[100px]" />

      <div className="shell relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mx-auto mb-16 max-w-4xl text-center"
        >
          <span className="eyebrow mb-6">Case em Produção</span>
          <h2 className="title-hero text-4xl md:text-5xl mb-6">
            IOY Agenda: O Futuro da <span className="text-primary italic">Gestão Inteligente</span>.
          </h2>
          <p className="text-white/40 text-lg max-w-2xl mx-auto mb-10">
            Um ecossistema completo para serviços: do agendamento à automação financeira, 
            com UX de alta densidade e performance extrema.
          </p>
          <a 
            href="https://agenda.ioy.com.br" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="btn-primary group h-14"
          >
            Explorar IOY Agenda
            <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="panel border border-white/10 bg-black/40 p-4 backdrop-blur-3xl shadow-2xl relative group overflow-hidden"
        >
          {/* Animated scan line */}
          <div className="absolute inset-0 bg-gradient-to-b from-primary/0 via-primary/5 to-primary/0 h-[200%] w-full -translate-y-full group-hover:animate-[sweep_4s_linear_infinite] pointer-events-none" />

          {!imageFailed ? (
            <div className="relative overflow-hidden rounded-[20px] border border-white/5 bg-black">
              <Image
                src="/ioy-agenda-sistema.png"
                alt="Preview do sistema IOY Agenda"
                width={1600}
                height={900}
                className="h-auto w-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                priority
                onError={() => setImageFailed(true)}
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
            </div>
          ) : (
            <div className="rounded-[20px] border border-white/5 bg-black/50 p-6 md:p-10">
              <div className="mb-8 flex items-center justify-between border-b border-white/5 pb-6">
                <div className="flex gap-2.5">
                  <span className="h-3 w-3 rounded-full bg-white/5" />
                  <span className="h-3 w-3 rounded-full bg-white/5" />
                  <span className="h-3 w-3 rounded-full bg-white/5" />
                </div>
                <div className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-[10px] uppercase tracking-widest text-white/40">
                  <Globe size={10} />
                  agenda.ioy.com.br
                </div>
              </div>

              <div className="grid gap-10 md:grid-cols-[240px_1fr]">
                <aside className="hidden rounded-2xl border border-white/5 bg-white/[0.02] p-6 md:block">
                  <div className="mb-8 h-4 w-32 rounded-full bg-primary/20" />
                  <div className="space-y-4">
                    {[80, 60, 75, 40, 65].map((w, i) => (
                      <div key={i} className="h-1.5 rounded-full bg-white/5" style={{ width: `${w}%` }} />
                    ))}
                  </div>
                  <div className="mt-12 h-24 rounded-xl bg-primary/5 border border-primary/10" />
                </aside>

                <div className="space-y-8">
                  <div className="grid gap-4 sm:grid-cols-3">
                    {[
                      { color: "bg-primary/20", border: "border-primary/30" },
                      { color: "bg-white/5", border: "border-white/10" },
                      { color: "bg-white/5", border: "border-white/10" }
                    ].map((style, i) => (
                      <div key={i} className={`rounded-2xl border ${style.border} ${style.color} p-6`}>
                        <div className="mb-3 h-2 w-12 rounded-full bg-white/20" />
                        <div className="h-4 w-20 rounded-full bg-white" />
                      </div>
                    ))}
                  </div>

                  <div className="rounded-2xl border border-white/5 bg-white/[0.01] p-8">
                    <div className="mb-8 flex gap-4">
                      {["w-20", "w-24", "w-16"].map((width, i) => (
                        <div key={i} className={`h-1.5 rounded-full bg-white/10 ${width}`} />
                      ))}
                    </div>

                    <div className="space-y-6">
                      {[1, 2, 3].map((row) => (
                        <div key={row} className="flex items-center gap-6">
                          <div className="h-10 w-10 rounded-full bg-white/5" />
                          <div className="flex-1 space-y-2">
                            <div className="h-2 w-32 rounded-full bg-white/10" />
                            <div className="h-1.5 w-20 rounded-full bg-white/5" />
                          </div>
                          <div className="h-6 w-16 rounded-full bg-primary/20 border border-primary/30" />
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

      <style jsx>{`
        @keyframes sweep {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(100%); }
        }
      `}</style>
    </section>
  );
}
