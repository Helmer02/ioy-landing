"use client";

import { motion } from "framer-motion";
import { Cpu, Server, Layout, Binary } from "lucide-react";

export default function Solutions() {
  const solutions = [
    {
      icon: <Server className="w-8 h-8 text-primary" />,
      title: "Desenvolvimento de SaaS",
      desc: "Construímos produtos SaaS escaláveis, seguros e preparados para alta demanda global, com arquitetura cloud moderna."
    },
    {
      icon: <Layout className="w-8 h-8 text-secondary" />,
      title: "Sistemas Personalizados",
      desc: "Software desenhado estritamente sob medida para resolver os gargalos da operação exclusiva da sua empresa."
    },
    {
      icon: <Cpu className="w-8 h-8 text-primary" />,
      title: "Automação de Processos",
      desc: "Automatização avançada de tarefas operacionais, financeiras e de CRM para reduzir custos e erros humanos."
    },
    {
      icon: <Binary className="w-8 h-8 text-secondary" />,
      title: "Plataformas Web Completas",
      desc: "Portais, painéis administrativos e marketplaces perfeitamente integrados aos SEUS sistemas e APIs."
    }
  ];

  return (
    <section className="py-24 relative" id="solucoes">
      <div className="container mx-auto px-6 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <div className="flex items-center gap-2 mb-4">
            <div className="w-8 h-[1px] bg-primary" />
            <span className="text-primary font-medium tracking-wide text-sm uppercase">Ecossistema IOY</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground max-w-2xl">
            Tecnologia profunda para desafios complexos.
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {solutions.map((sol, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="glass p-8 rounded-3xl hover:bg-white/10 hover:border-white/20 transition-all duration-300 group"
            >
              <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                {sol.icon}
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">{sol.title}</h3>
              <p className="text-muted leading-relaxed text-sm">
                {sol.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
