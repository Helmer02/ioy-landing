"use client";

import { motion } from "framer-motion";
import { Quote, Sparkles } from "lucide-react";

const reviews = [
  {
    text: "A IOY estruturou nosso produto com clareza. Hoje temos menos gargalos e mais previsibilidade de entrega.",
    author: "Juliana Silva",
    role: "CEO, Clínica Estética Premium",
  },
  {
    text: "Nível técnico forte e comunicação objetiva. O resultado final veio melhor que o escopo inicial.",
    author: "Marcos Lemos",
    role: "Founder, Startup Fintech",
  },
  {
    text: "Automatizamos boa parte da operação e ganhamos controle em tempo real. Excelente parceria.",
    author: "Ricardo Gomes",
    role: "Diretor de Operações, E-commerce",
  },
];

export default function Testimonials() {
  return (
    <section id="depoimentos" className="py-24 relative overflow-hidden">
      <div className="shell">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20 text-center"
        >
          <span className="eyebrow mb-6">Prova Social</span>
          <h2 className="title-hero text-4xl md:text-5xl mb-6 text-slate-900">
            Confiança <span className="text-primary italic">Validada</span> por Resultados.
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-slate-600">
            Feedback de empresas que elevaram sua maturidade digital com a IOY.
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-3 mb-32">
          {reviews.map((review, index) => (
            <motion.article
              key={review.author}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="panel relative group border border-[var(--line)] p-8 transition-all duration-500 hover:border-primary/20"
            >
              <Quote className="absolute right-6 top-6 h-10 w-10 text-primary/30 transition-colors group-hover:text-primary/50" />
              <div className="mb-6 flex gap-1">
                {[1, 2, 3, 4, 5].map((s) => (
                  <Sparkles key={s} size={10} className="text-primary" />
                ))}
              </div>
              <p className="mb-8 min-h-[80px] text-sm leading-relaxed text-slate-700">
                &quot;{review.text}&quot;
              </p>
              <div className="flex items-center gap-3 border-t border-[var(--line)] pt-6">
                <div className="flex h-10 w-10 items-center justify-center rounded-full border border-primary/20 bg-primary/10 text-[10px] font-bold text-primary">
                  {review.author.charAt(0)}
                </div>
                <div>
                  <p className="mb-1 text-sm font-bold leading-none text-slate-900">{review.author}</p>
                  <p className="text-[10px] font-black uppercase tracking-widest text-slate-500">{review.role}</p>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          id="agencia"
          className="panel relative mx-auto max-w-5xl overflow-hidden border border-[var(--line)] bg-white/90 p-10 text-center backdrop-blur-3xl md:p-20"
        >
          {/* Animated light effect */}
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
          
          <span className="eyebrow mb-8">Sobre a IOY</span>
          <h2 className="title-hero mx-auto mb-8 max-w-3xl text-3xl text-slate-900 md:text-4xl">
            Uma Startup de Engenharia Focada em <span className="text-primary font-serif italic">Impacto Real</span>.
          </h2>
          <p className="mx-auto max-w-3xl text-lg leading-relaxed text-slate-600">
            Não somos apenas desenvolvedores; somos parceiros estratégicos. Conectamos design premium, 
            arquitetura escalável e segurança de dados para transformar desafios operacionais em 
            vantagem competitiva sustentável.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

