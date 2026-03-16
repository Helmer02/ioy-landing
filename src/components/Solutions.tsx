"use client";

import { motion } from "framer-motion";
import { Binary, Blocks, ChartNoAxesCombined, Cpu, LayoutTemplate, Smartphone } from "lucide-react";

const solutions = [
  {
    icon: Blocks,
    title: "Plataformas SaaS",
    desc: "Produtos SaaS com onboarding claro, billing estruturado e base pronta para crescimento.",
    tag: "Produto digital",
  },
  {
    icon: LayoutTemplate,
    title: "Sistemas de gestao",
    desc: "Sistemas sob medida para centralizar operacao, governanca e produtividade.",
    tag: "Custom",
  },
  {
    icon: Cpu,
    title: "Automacao de processos",
    desc: "Fluxos automatizados para financeiro, CRM e rotina operacional com menos friccao.",
    tag: "Eficiencia",
  },
  {
    icon: Binary,
    title: "Portais e plataformas web",
    desc: "Portais e ambientes administrativos integrados com APIs e sistemas legados.",
    tag: "Integracao",
  },
  {
    icon: ChartNoAxesCombined,
    title: "Dashboards executivos",
    desc: "Indicadores acionaveis para lideranca enxergar gargalos e oportunidades em tempo real.",
    tag: "Dados",
  },
  {
    icon: Smartphone,
    title: "Experiencias mobile",
    desc: "Aplicacoes mobile-first com foco em velocidade, conversao e usabilidade.",
    tag: "Mobile",
  },
];

export default function Solutions() {
  return (
    <section id="solucoes" className="py-24">
      <div className="shell">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="mb-14"
        >
          <span className="eyebrow mb-5">o que desenvolvemos</span>
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <h2 className="title-lg max-w-2xl">Solucoes digitais com estetica premium e engenharia de alto nivel.</h2>
            <p className="muted max-w-md text-base md:text-right">
              Cada entrega combina estrategia de produto, design funcional e codigo resiliente para escalar com
              seguranca.
            </p>
          </div>
        </motion.div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {solutions.map((item, index) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.07, duration: 0.45 }}
              className="panel p-6"
            >
              <div className="mb-4 flex items-center justify-between">
                <item.icon className="h-6 w-6 text-primary" />
                <span className="rounded-full border border-white/15 px-3 py-1 text-[10px] uppercase tracking-[0.17em] text-white/75">
                  {item.tag}
                </span>
              </div>
              <h3 className="mb-2 text-lg font-semibold text-white">{item.title}</h3>
              <p className="muted text-sm leading-relaxed">{item.desc}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

