"use client";

import { motion } from "framer-motion";
import { ArrowRight, Layers, Zap, Globe } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative pt-40 pb-20 md:pt-48 md:pb-32 overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[500px] bg-primary/20 blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute top-20 right-0 w-[400px] h-[400px] bg-secondary/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-8 items-center">

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass mb-6 text-sm font-medium text-secondary">
              <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
              Startup de Tecnologia · Espírito Santo, Brasil
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 leading-[1.08]">
              Construindo o futuro das{" "}
              <span className="text-gradient">soluções digitais.</span>
            </h1>

            <p className="text-base sm:text-lg md:text-xl text-muted mb-10 leading-relaxed max-w-xl">
              A IOY desenvolve plataformas digitais que ajudam empresas a organizar, automatizar e crescer com mais inteligência e menos esforço.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-14 w-full sm:w-auto">
              <a
                href="#solucoes"
                className="px-6 sm:px-8 py-3.5 sm:py-4 w-full sm:w-auto rounded-xl font-semibold text-white bg-gradient-to-r from-primary to-secondary glow-primary hover:scale-[1.02] transition-transform flex items-center justify-center gap-2 text-sm sm:text-base"
              >
                Conhecer soluções <ArrowRight size={18} />
              </a>
              <a
                href="https://wa.me/5527988625801"
                target="_blank" rel="noopener noreferrer"
                className="px-6 sm:px-8 py-3.5 sm:py-4 w-full sm:w-auto rounded-xl font-semibold text-foreground bg-white/5 border border-white/10 hover:bg-white/10 transition-colors flex items-center justify-center gap-2 text-sm sm:text-base"
              >
                Começar agora
              </a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-white/10">
              <div>
                <p className="text-2xl sm:text-3xl font-bold text-foreground mb-1">100%</p>
                <p className="text-xs sm:text-sm text-muted">foco em resultado</p>
              </div>
              <div>
                <p className="text-2xl sm:text-3xl font-bold text-foreground mb-1">99.9%</p>
                <p className="text-xs sm:text-sm text-muted">uptime garantido</p>
              </div>
              <div>
                <p className="text-2xl sm:text-3xl font-bold text-foreground mb-1">SaaS</p>
                <p className="text-xs sm:text-sm text-muted">produtos próprios</p>
              </div>
            </div>
          </motion.div>

          {/* Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative lg:ml-auto w-full max-w-lg lg:max-w-none"
          >
            <div className="relative glass-card rounded-2xl p-2 hover:shadow-[0_0_60px_rgba(108,59,255,0.2)] transition-shadow duration-700">
              <div className="flex items-center gap-2 px-4 py-3 border-b border-white/10 bg-white/5 rounded-t-xl">
                <div className="w-3 h-3 rounded-full bg-red-400/60" />
                <div className="w-3 h-3 rounded-full bg-yellow-400/60" />
                <div className="w-3 h-3 rounded-full bg-green-400/60" />
                <span className="ml-3 text-[11px] text-muted font-mono">ioy.com.br — plataforma</span>
              </div>
              <div className="bg-[#0B0B0F]/90 p-5 rounded-b-xl aspect-[4/3] flex flex-col gap-4">
                {/* Top cards */}
                <div className="flex gap-3">
                  <div className="flex-1 bg-gradient-to-br from-primary/20 to-transparent border border-primary/20 rounded-xl p-4 flex flex-col gap-2">
                    <Layers className="text-primary w-5 h-5" />
                    <div className="w-3/4 h-2 bg-white/20 rounded-full" />
                    <div className="w-1/2 h-2 bg-white/10 rounded-full" />
                  </div>
                  <div className="flex-1 bg-gradient-to-br from-secondary/15 to-transparent border border-secondary/20 rounded-xl p-4 flex flex-col gap-2">
                    <Zap className="text-secondary w-5 h-5" />
                    <div className="w-2/3 h-2 bg-white/20 rounded-full" />
                    <div className="w-1/2 h-2 bg-white/10 rounded-full" />
                  </div>
                  <div className="flex-1 bg-white/5 border border-white/5 rounded-xl p-4 flex flex-col gap-2">
                    <Globe className="text-white/40 w-5 h-5" />
                    <div className="w-2/3 h-2 bg-white/20 rounded-full" />
                    <div className="w-full h-2 bg-white/10 rounded-full" />
                  </div>
                </div>
                {/* Chart */}
                <div className="flex-1 bg-white/[0.03] border border-white/5 rounded-xl p-4 flex flex-col gap-3">
                  <div className="w-28 h-2 bg-white/15 rounded-full" />
                  <div className="flex-1 flex items-end gap-1.5">
                    {[35,55,40,70,50,85,60,90,75,100,80,95].map((h, i) => (
                      <div
                        key={i}
                        className="flex-1 rounded-t-sm"
                        style={{
                          height: `${h}%`,
                          background: i >= 9
                            ? 'linear-gradient(to top, rgba(0,212,255,0.8), rgba(108,59,255,0.6))'
                            : i >= 6
                            ? 'rgba(108,59,255,0.4)'
                            : 'rgba(255,255,255,0.08)'
                        }}
                      />
                    ))}
                  </div>
                </div>
              </div>

              {/* Floating badge */}
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 1.1, duration: 0.6 }}
                className="absolute -bottom-5 -right-5 glass-card px-4 py-3 rounded-xl flex items-center gap-3 border border-white/10"
              >
                <div className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center">
                  <span className="text-green-400 text-sm">✓</span>
                </div>
                <div>
                  <p className="text-xs font-bold text-foreground">Tecnologia moderna</p>
                  <p className="text-[10px] text-muted">Escalável e segura</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
