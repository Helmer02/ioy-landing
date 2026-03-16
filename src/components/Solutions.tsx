"use client";

import { motion } from "framer-motion";
import { Server, Layout, Cpu, Binary, BarChart3, Smartphone } from "lucide-react";

export default function Solutions() {
  const solutions = [
    {
      icon: <Server className="w-7 h-7 text-primary" />,
      title: "Plataformas SaaS",
      desc: "Desenvolvemos produtos SaaS escaláveis, seguros e prontos para crescer com sua base de usuários.",
      tag: "Produto Digital"
    },
    {
      icon: <Layout className="w-7 h-7 text-secondary" />,
      title: "Sistemas de Gestão",
      desc: "Software desenhado sob medida para resolver os gargalos reais da operação da sua empresa.",
      tag: "Personalizado"
    },
    {
      icon: <Cpu className="w-7 h-7 text-primary" />,
      title: "Automação de Processos",
      desc: "Automação avançada de tarefas operacionais, financeiras e de CRM para reduzir custos e erros.",
      tag: "Eficiência"
    },
    {
      icon: <Binary className="w-7 h-7 text-secondary" />,
      title: "Plataformas Web Completas",
      desc: "Portais, painéis administrativos e marketplaces integrados com seus sistemas e APIs.",
      tag: "Integração"
    },
    {
      icon: <BarChart3 className="w-7 h-7 text-primary" />,
      title: "Dashboards e Relatórios",
      desc: "Painéis inteligentes que transformam dados brutos em decisões claras e estratégicas.",
      tag: "Inteligência"
    },
    {
      icon: <Smartphone className="w-7 h-7 text-secondary" />,
      title: "Soluções Mobile",
      desc: "Aplicativos e plataformas responsivas que funcionam perfeitamente em qualquer dispositivo.",
      tag: "Mobile-first"
    },
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
            <span className="text-primary font-medium tracking-wide text-sm uppercase">O que criamos</span>
          </div>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground max-w-xl">
              Uma nova forma de criar tecnologia.
            </h2>
            <p className="text-muted max-w-sm md:text-right">
              Soluções digitais modernas para empresas que querem crescer com inteligência.
            </p>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {solutions.map((sol, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08, duration: 0.5 }}
              className="glass p-7 rounded-3xl hover:bg-white/[0.07] hover:border-white/15 transition-all duration-300 group flex flex-col gap-5"
            >
              <div className="flex items-start justify-between">
                <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                  {sol.icon}
                </div>
                <span className="text-[10px] font-bold tracking-widest uppercase text-muted border border-white/10 px-2.5 py-1 rounded-full">
                  {sol.tag}
                </span>
              </div>
              <div>
                <h3 className="text-lg font-bold text-foreground mb-2">{sol.title}</h3>
                <p className="text-muted leading-relaxed text-sm">{sol.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
