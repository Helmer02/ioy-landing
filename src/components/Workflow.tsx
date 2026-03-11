"use client";

import { motion } from "framer-motion";
import { Search, Code2, Rocket } from "lucide-react";

export default function Workflow() {
  const steps = [
    {
      icon: <Search className="w-8 h-8 text-primary" />,
      title: "1. Analisamos seu negócio",
      desc: "Mergulhamos na sua operação atual para identificar os maiores gargalos e oportunidades de otimização."
    },
    {
      icon: <Code2 className="w-8 h-8 text-secondary" />,
      title: "2. Desenvolvemos a solução",
      desc: "Nossos engenheiros criam o produto digital ideal com arquitetura moderna, focando na usabilidade e performance."
    },
    {
      icon: <Rocket className="w-8 h-8 text-white" />,
      title: "3. Implementamos o resultado",
      desc: "Colocamos o sistema no ar e acompanhamos a transição da equipe para garantir a adoção e o crescimento."
    }
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
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">
            Transformação digital em <span className="text-gradient">3 passos.</span>
          </h2>
          <p className="text-lg text-muted max-w-2xl mx-auto">
            Sem processos complexos, sem perda de tempo. Da idealização ao lançamento com máxima eficiência técnica.
          </p>
        </motion.div>

        <div className="relative grid md:grid-cols-3 gap-8 md:gap-12">
          {/* Connector Line (Desktop) */}
          <div className="hidden md:block absolute top-12 left-[15%] right-[15%] h-[1px] bg-gradient-to-r from-primary via-secondary to-primary opacity-30 pointer-events-none" />

          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              className="relative z-10 flex flex-col items-center text-center"
            >
              <div className="w-24 h-24 rounded-full bg-[#0B0B0F] border border-white/10 flex items-center justify-center mb-8 relative group">
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative z-10 w-16 h-16 rounded-full glass flex items-center justify-center">
                  {step.icon}
                </div>
              </div>
              <h3 className="text-xl font-bold text-foreground mb-4">{step.title}</h3>
              <p className="text-muted leading-relaxed">
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
