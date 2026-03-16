"use client";

import { motion } from "framer-motion";
import { Code2, HeartHandshake, Radar, Rocket } from "lucide-react";

const steps = [
  {
    icon: Radar,
    title: "Discovery estrategico",
    desc: "Mapeamos operacao, metas e riscos para definir o escopo certo antes da construcao.",
  },
  {
    icon: Code2,
    title: "Produto e engenharia",
    desc: "Projetamos UX e arquitetura tecnica para lancar rapido sem criar divida tecnica.",
  },
  {
    icon: Rocket,
    title: "Go-live controlado",
    desc: "Publicacao com telemetria, checklist de qualidade e acompanhamento de adocao.",
  },
  {
    icon: HeartHandshake,
    title: "Evolucao continua",
    desc: "Roadmap de melhorias com ciclos curtos, suporte especialista e foco em resultado.",
  },
];

export default function Workflow() {
  return (
    <section id="metodologia" className="py-24">
      <div className="shell">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-14 text-center"
        >
          <span className="eyebrow mb-5">metodo IOY</span>
          <h2 className="title-lg mb-5">Execucao em quatro etapas para reduzir risco e acelerar valor.</h2>
          <p className="muted mx-auto max-w-2xl text-lg">
            Processo claro, entregas incrementais e comunicacao proxima para transformar ideia em produto funcional.
          </p>
        </motion.div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <motion.article
              key={step.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08, duration: 0.5 }}
              className="panel p-6"
            >
              <div className="mb-4 flex items-center justify-between">
                <step.icon className="h-6 w-6 text-primary" />
                <span className="font-mono text-3xl text-white/20">0{index + 1}</span>
              </div>
              <h3 className="mb-2 text-base font-semibold text-white">{step.title}</h3>
              <p className="muted text-sm leading-relaxed">{step.desc}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

