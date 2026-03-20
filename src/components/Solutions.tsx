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
    title: "Sistemas de Gestão",
    desc: "Sistemas sob medida para centralizar operação, governança e produtividade.",
    tag: "Custom",
  },
  {
    icon: Cpu,
    title: "Automação de Processos",
    desc: "Fluxos automatizados para financeiro, CRM e rotina operacional com menos fricção.",
    tag: "Eficiência",
  },
  {
    icon: Binary,
    title: "Portais & Plataformas",
    desc: "Portais e ambientes administrativos integrados com APIs e sistemas legados.",
    tag: "Integração",
  },
  {
    icon: ChartNoAxesCombined,
    title: "Dashboards Executivos",
    desc: "Indicadores acionáveis para liderança enxergar gargalos e oportunidades em tempo real.",
    tag: "Dados",
  },
  {
    icon: Smartphone,
    title: "Experiências Mobile",
    desc: "Aplicações mobile-first com foco em velocidade, conversão e usabilidade.",
    tag: "Mobile",
  },
];

export default function Solutions() {
  return (
    <section id="solucoes" className="py-24 relative overflow-hidden">
      {/* Subtle Glow */}
      <div className="pointer-events-none absolute top-1/2 -left-20 h-[400px] w-[400px] rounded-full bg-primary/5 blur-[100px]" />

      <div className="shell relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <span className="eyebrow mb-6">O Que Desenvolvemos</span>
          <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
            <h2 className="title-hero text-4xl md:text-5xl max-w-2xl">
              Engenharia de <span className="text-primary italic">Próxima Geração</span> para o seu Negócio.
            </h2>
            <p className="text-white/40 max-w-sm text-sm leading-relaxed md:text-right">
              Combinamos estratégia de produto e design funcional com código resiliente para escala global.
            </p>
          </div>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {solutions.map((item, index) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="panel group p-8 border border-white/5 hover:border-primary/30 transition-all duration-500"
            >
              <div className="mb-6 flex items-center justify-between">
                <div className="h-12 w-12 rounded-2xl bg-primary/10 flex items-center justify-center border border-primary/20 group-hover:bg-primary/20 transition-colors">
                  <item.icon className="h-6 w-6 text-primary" />
                </div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-white/20 group-hover:text-primary/50 transition-colors">
                  {item.tag}
                </span>
              </div>
              <h3 className="mb-3 text-xl font-bold text-white group-hover:text-primary transition-colors">{item.title}</h3>
              <p className="text-white/40 text-sm leading-relaxed group-hover:text-white/60 transition-colors">{item.desc}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
