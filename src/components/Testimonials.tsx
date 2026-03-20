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
          <h2 className="title-hero text-4xl md:text-5xl mb-6">
            Confiança <span className="text-primary italic">Validada</span> por Resultados.
          </h2>
          <p className="text-white/40 text-lg max-w-2xl mx-auto">
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
              className="panel p-8 border border-white/5 relative group hover:border-primary/20 transition-all duration-500"
            >
              <Quote className="text-primary/20 absolute top-6 right-6 h-10 w-10 group-hover:text-primary/40 transition-colors" />
              <div className="mb-6 flex gap-1">
                {[1, 2, 3, 4, 5].map((s) => (
                  <Sparkles key={s} size={10} className="text-primary" />
                ))}
              </div>
              <p className="text-white/60 text-sm leading-relaxed mb-8 min-h-[80px]">
                &quot;{review.text}&quot;
              </p>
              <div className="flex items-center gap-3 border-t border-white/5 pt-6">
                <div className="h-10 w-10 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center text-[10px] font-bold text-primary">
                  {review.author.charAt(0)}
                </div>
                <div>
                  <p className="text-sm font-bold text-white leading-none mb-1">{review.author}</p>
                  <p className="text-[10px] uppercase tracking-widest text-white/30 font-black">{review.role}</p>
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
          className="panel max-w-5xl mx-auto p-10 md:p-20 text-center border border-white/10 bg-white/[0.01] backdrop-blur-3xl relative overflow-hidden"
        >
          {/* Animated light effect */}
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
          
          <span className="eyebrow mb-8">Sobre a IOY</span>
          <h2 className="title-hero text-3xl md:text-4xl max-w-3xl mx-auto mb-8">
            Uma Startup de Engenharia Focada em <span className="text-primary font-serif italic">Impacto Real</span>.
          </h2>
          <p className="text-white/50 text-lg leading-relaxed max-w-3xl mx-auto">
            Não somos apenas desenvolvedores; somos parceiros estratégicos. Conectamos design premium, 
            arquitetura escalável e segurança de dados para transformar desafios operacionais em 
            vantagem competitiva sustentável.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
