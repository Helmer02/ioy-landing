"use client";

import { motion } from "framer-motion";
import { AlertCircle, CalendarX2, LineChart, RefreshCw, ZapOff } from "lucide-react";

export default function Problems() {
  const problems = [
    { icon: <CalendarX2 size={24} />, title: "Agendas desorganizadas" },
    { icon: <RefreshCw size={24} />, title: "Processos manuais lentos" },
    { icon: <ZapOff size={24} />, title: "Falta de automação" },
    { icon: <LineChart size={24} />, title: "Falta de dados para decisões" },
    { icon: <AlertCircle size={24} />, title: "Dificuldade em escalar" },
  ];

  return (
    <section className="py-24 relative overflow-hidden" id="problemas">
      {/* Background line/blur */}
      <div className="absolute top-1/2 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">
              Empresas ainda perdem tempo com <span className="text-primary">processos manuais.</span>
            </h2>
            <p className="text-lg text-muted">
              Crescer de verdade é impossível enquanto sua operação depende de tarefas repetitivas e dados descentralizados.
            </p>
          </motion.div>
        </div>

        {/* Problems Grid */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {problems.map((prob, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.4 }}
              className="px-6 py-4 glass rounded-2xl flex items-center gap-4 border border-white/5 hover:border-white/10 hover:bg-white/10 transition-colors"
            >
              <div className="text-red-400/80">
                {prob.icon}
              </div>
              <span className="font-medium text-foreground">{prob.title}</span>
            </motion.div>
          ))}
        </div>

        {/* Closing statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center max-w-2xl mx-auto"
        >
          <div className="inline-block p-[1px] rounded-2xl bg-gradient-to-r from-primary/50 to-secondary/50">
            <div className="bg-[#0B0B0F] px-8 py-5 rounded-2xl">
              <p className="text-xl font-medium text-foreground">
                A <span className="text-gradient font-bold">IOY</span> cria sistemas inteligentes para resolver esses problemas e digitalizar a sua operação.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
