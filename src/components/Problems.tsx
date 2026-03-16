"use client";

import { motion } from "framer-motion";
import { AlertCircle, RefreshCw, ZapOff, LineChart, Clock, Database } from "lucide-react";

export default function Problems() {
  const problems = [
    { icon: <Clock size={22} />, title: "Processos manuais que consomem tempo" },
    { icon: <RefreshCw size={22} />, title: "Falta de automação na operação" },
    { icon: <ZapOff size={22} />, title: "Sistemas desconectados entre si" },
    { icon: <LineChart size={22} />, title: "Sem dados para tomar decisões" },
    { icon: <Database size={22} />, title: "Informações espalhadas e sem controle" },
    { icon: <AlertCircle size={22} />, title: "Dificuldade em escalar o negócio" },
  ];

  return (
    <section className="py-24 relative overflow-hidden" id="problemas">
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
              Empresas perdem tempo com{" "}
              <span className="text-primary">o que poderia ser automático.</span>
            </h2>
            <p className="text-lg text-muted">
              Crescer de verdade é difícil quando a operação depende de tarefas repetitivas, dados descentralizados e sistemas que não se conversam.
            </p>
          </motion.div>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {problems.map((prob, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08, duration: 0.4 }}
              className="px-5 py-3.5 glass rounded-2xl flex items-center gap-3 border border-white/5 hover:border-red-400/20 hover:bg-white/[0.06] transition-all"
            >
              <div className="text-red-400/70">{prob.icon}</div>
              <span className="font-medium text-foreground text-sm">{prob.title}</span>
            </motion.div>
          ))}
        </div>

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
                A <span className="text-gradient font-bold">IOY</span> cria soluções digitais inteligentes para transformar esses desafios em vantagem competitiva.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
