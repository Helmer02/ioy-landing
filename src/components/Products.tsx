"use client";

import { motion } from "framer-motion";
import { CheckCircle2, ArrowRight } from "lucide-react";

export default function Products() {
  const features = [
    "Agenda online dinâmica",
    "Gestão de clientes e histórico",
    "Controle inteligente de funcionários",
    "Relatórios financeiros automáticos",
    "Lembretes e notificações via WhatsApp"
  ];

  return (
    <section className="py-32 relative" id="produtos">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-primary/10 blur-[150px] rounded-full pointer-events-none" />
      
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="glass-card rounded-[40px] p-8 md:p-16 border border-white/10 overflow-hidden relative">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-6 font-medium text-sm text-foreground">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                Produto em Destaque
              </div>
              
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-4 sm:mb-6">
                Conheça o <br className="block sm:hidden" /><span className="text-gradient">IOY Agenda</span>
              </h2>
              
              <p className="text-base sm:text-lg text-muted mb-6 sm:mb-8 max-w-lg">
                O sistema de agendamento definitivo para barbearias, salões de luxo, clínicas e prestadores de serviços que não têm tempo a perder.
              </p>
              
              <ul className="space-y-3 sm:space-y-4 mb-8 sm:mb-10">
                {features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-3 text-foreground/90 font-medium">
                    <CheckCircle2 className="text-secondary w-6 h-6 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
              
              <a href="https://agenda.ioy.com.br" target="_blank" rel="noopener noreferrer" className="px-8 py-4 w-full sm:w-auto rounded-xl font-semibold text-white bg-white/5 border border-white/10 hover:bg-white/10 transition-all flex items-center justify-center gap-2 group">
                Acessar o IOY Agenda 
                <ArrowRight className="group-hover:translate-x-1 transition-transform" size={18} />
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95, rotate: 2 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-[#090a12]"
            >
              <div className="flex items-center gap-2 border-b border-white/10 bg-white/5 p-3">
                <div className="w-2.5 h-2.5 rounded-full border border-white/20" />
                <div className="w-2.5 h-2.5 rounded-full border border-white/20" />
                <div className="w-2.5 h-2.5 rounded-full border border-white/20" />
                <div className="mx-auto w-32 h-2 bg-white/5 rounded-full" />
              </div>
              <div className="p-6 aspect-[4/3] flex flex-col gap-4">
                {/* Fake Agenda UI */}
                <div className="w-1/3 h-4 bg-white/10 rounded" />
                <div className="grid grid-cols-7 gap-2 flex-grow">
                  {[...Array(28)].map((_, i) => (
                    <div 
                      key={i} 
                      className={`rounded text-[10px] p-1 ${
                        i === 12 ? 'bg-primary/30 border border-primary/50 text-white' : 
                        i === 15 ? 'bg-secondary/30 border border-secondary/50 text-white' : 
                        'bg-white/5 text-muted border border-white/5'
                      }`}
                    >
                      {i + 1}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
}
