"use client";

import { motion } from "framer-motion";
import { Code2, HeartHandshake, Radar, Rocket } from "lucide-react";

const steps = [
  {
    icon: Radar,
    title: "Discovery Estratégico",
    desc: "Mapeamos sua operação e metas para definir o escopo certo antes de escrever uma única linha de código.",
  },
  {
    icon: Code2,
    title: "Produto & Engenharia",
    desc: "Projetamos UX de alta fidelidade e arquitetura técnica resiliente para um lançamento seguro.",
  },
  {
    icon: Rocket,
    title: "Go-Live Controlado",
    desc: "Publicação com telemetria avançada, checklists de qualidade e acompanhamento íntimo de adoção.",
  },
  {
    icon: HeartHandshake,
    title: "Evolução Contínua",
    desc: "Roadmap de melhorias com ciclos ágeis, suporte especialista e foco constante em ROI.",
  },
];

export default function Workflow() {
  return (
    <section id="metodologia" className="py-24 relative">
      <div className="shell">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20 text-center"
        >
          <span className="eyebrow mb-6">Método IOY</span>
          <h2 className="title-hero text-4xl md:text-5xl mb-6">
            Execução <span className="text-primary italic">Sincronizada</span> em 4 Etapas.
          </h2>
          <p className="text-white/40 text-lg max-w-2xl mx-auto">
            Processo transparente e entregas incrementais para acelerar o tempo de valor.
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 relative">
          {/* Connecting line for desktop */}
          <div className="hidden lg:block absolute top-[60px] left-20 right-20 h-px bg-gradient-to-r from-primary/0 via-primary/20 to-primary/0" />

          {steps.map((step, index) => (
            <motion.article
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              className="panel p-8 border border-white/5 relative bg-white/[0.01] hover:bg-white/[0.03] transition-all group"
            >
              <div className="mb-8 flex items-center justify-between relative z-10">
                <div className="h-14 w-14 rounded-2xl bg-black border border-white/10 flex items-center justify-center group-hover:border-primary/40 transition-colors">
                  <step.icon className="h-6 w-6 text-primary" />
                </div>
                <span className="text-5xl font-black text-white/[0.03] group-hover:text-primary/[0.05] transition-colors font-sans">
                  0{index + 1}
                </span>
              </div>
              <h3 className="mb-3 text-lg font-bold text-white group-hover:text-primary transition-colors">{step.title}</h3>
              <p className="text-white/40 text-[13px] leading-relaxed group-hover:text-white/60 transition-colors">
                {step.desc}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
