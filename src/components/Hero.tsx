"use client";

import { motion } from "framer-motion";
import { ArrowRight, BarChart3, Database, ShieldCheck } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative pt-40 pb-20 md:pt-48 md:pb-32 overflow-hidden">
      {/* Background gradients */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[400px] bg-primary/20 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-8 items-center">
          
          {/* Text Content */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass mb-6 text-sm font-medium text-secondary">
              <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
              SaaS & Automações Inteligentes
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-4 sm:mb-6 leading-[1.1]">
              Soluções digitais para <span className="text-gradient">escalar</span> empresas modernas.
            </h1>
            
            <p className="text-base sm:text-lg md:text-xl text-muted mb-8 sm:mb-10 leading-relaxed max-w-xl">
              Criamos SaaS, automações e plataformas digitais que organizam processos, aumentam produtividade e aceleram o crescimento de empresas.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-10 sm:mb-14 w-full sm:w-auto">
              <a href="#contato" className="px-6 sm:px-8 py-3.5 sm:py-4 w-full sm:w-auto rounded-xl font-semibold text-white bg-gradient-to-r from-primary to-secondary glow-primary hover:scale-[1.02] transition-transform flex items-center justify-center gap-2 text-sm sm:text-base">
                🚀 Solicitar diagnóstico gratuito
              </a>
              <a href="#solucoes" className="px-6 sm:px-8 py-3.5 sm:py-4 w-full sm:w-auto rounded-xl font-semibold text-foreground bg-white/5 border border-white/10 hover:bg-white/10 transition-colors flex items-center justify-center gap-2 text-sm sm:text-base">
                📊 Ver nossas soluções <ArrowRight size={18} />
              </a>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-white/10">
              <div>
                <p className="text-3xl font-bold text-foreground mb-1">150+</p>
                <p className="text-sm text-muted">projetos entregues</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-foreground mb-1">99.9%</p>
                <p className="text-sm text-muted">uptime nos sistemas</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-foreground mb-1">ROI</p>
                <p className="text-sm text-muted">focado em crescimento real</p>
              </div>
            </div>
          </motion.div>

          {/* Graphic / Mockup */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative lg:ml-auto w-full max-w-lg lg:max-w-none perspective-1000"
          >
            <div className="relative glass-card rounded-2xl p-2 rotate-y-[-10deg] rotate-x-[5deg] transform-style-3d hover:rotate-y-0 hover:rotate-x-0 transition-transform duration-700">
              {/* Fake Browser Top */}
              <div className="flex items-center gap-2 px-4 py-3 border-b border-white/10 bg-white/5 rounded-t-xl">
                <div className="w-3 h-3 rounded-full bg-red-400/80" />
                <div className="w-3 h-3 rounded-full bg-yellow-400/80" />
                <div className="w-3 h-3 rounded-full bg-green-400/80" />
              </div>
              {/* Fake Dashboard Content */}
              <div className="bg-[#0B0B0F]/90 p-6 rounded-b-xl aspect-[4/3] flex flex-col gap-4">
                <div className="flex gap-4 mb-2">
                  <div className="flex-1 bg-white/5 rounded-lg p-4 border border-white/5 flex flex-col gap-3">
                    <Database className="text-primary w-5 h-5" />
                    <div className="w-1/2 h-2 bg-white/20 rounded-full" />
                    <div className="w-3/4 h-2 bg-white/10 rounded-full" />
                  </div>
                  <div className="flex-1 bg-white/5 rounded-lg p-4 border border-white/5 flex flex-col gap-3">
                    <BarChart3 className="text-secondary w-5 h-5" />
                    <div className="w-2/3 h-2 bg-white/20 rounded-full" />
                    <div className="w-1/2 h-2 bg-white/10 rounded-full" />
                  </div>
                </div>
                <div className="flex-1 bg-white/5 rounded-lg border border-white/5 p-4 flex items-end gap-2 text-primary/40">
                  <div className="w-full h-[40%] bg-primary/30 rounded-t-sm" />
                  <div className="w-full h-[60%] bg-primary/40 rounded-t-sm" />
                  <div className="w-full h-[30%] bg-primary/30 rounded-t-sm" />
                  <div className="w-full h-[80%] bg-secondary/50 rounded-t-sm" />
                  <div className="w-full h-[50%] bg-primary/30 rounded-t-sm" />
                  <div className="w-full h-[100%] bg-secondary/80 rounded-t-sm" />
                </div>
              </div>

              {/* Floating Shield Badge */}
              <motion.div 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 1, duration: 0.6 }}
                className="absolute -bottom-6 -right-6 glass-card p-4 rounded-xl flex items-center gap-4"
              >
                <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center">
                  <ShieldCheck className="text-green-400 w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm font-bold text-foreground">Segurança ISO</p>
                  <p className="text-xs text-muted">Criptografia end-to-end</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
