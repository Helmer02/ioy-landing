"use client";

import { motion } from "framer-motion";
import { Search, Code2, Rocket, HeartHandshake } from "lucide-react";

export default function Workflow() {
  const steps = [
    {
      icon: <Search className="w-7 h-7 text-primary" />,
      title: "1. Entendemos seu negócio",
      desc: "Analisamos seus processos, desafios e objetivos para identificar onde a tecnologia gera mais impacto.",
    },
    {
      icon: <Code2 className="w-7 h-7 text-secondary" />,
      title: "2. Desenvolvemos a solução",
      desc: "Nossa equipe cria o produto digital ideal com arquitetura moderna, design profissional e foco em usabilidade.",
    },
    {
      icon: <Rocket className="w-7 h-7 text-white" />,
      title: "3. Lançamos e acompanhamos",
      desc: "Colocamos no ar e acompanhamos de perto para garantir adoção, estabilidade e crescimento contínuo.",
    },
    {
      icon: <HeartHandshake className="w-7 h-7 text-secondary" />,
      title: "4. Suporte especializado",
      desc: "Estamos sempre disponíveis para evoluir a plataforma, corrigir e adicionar funcionalidades conforme a empresa cresce.",
    },
  ];

  return (
    <section className="py-24 relative overflow-hidden" id="metodologia">
      <div className="container mx-auto px-6 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-20"
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-8 h-[1px] bg-primary" />
            <span className="text-primary font-medium tracking-wide text-sm uppercase">Como trabalhamos</span>
            <div className="w-8 h-[1px] bg-primary" />
          </div>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">
            Transformação digital em{" "}
            <span className="text-gradient">passos simples.</span>
          </h2>
          <p className="text-lg text-muted max-w-2xl mx-auto">
            Da ideia ao produto funcionando — sem complicação, sem perda de tempo.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              className="relative glass rounded-3xl p-7 border border-white/5 hover:border-white/15 hover:bg-white/[0.06] transition-all duration-300 flex flex-col gap-5"
            >
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-2xl glass border border-white/10 flex items-center justify-center">
                  {step.icon}
                </div>
                <span className="text-5xl font-black text-white/5">{index + 1}</span>
              </div>
              <div>
                <h3 className="text-base font-bold text-foreground mb-2">{step.title}</h3>
                <p className="text-muted text-sm leading-relaxed">{step.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
