"use client";

import { motion } from "framer-motion";

export default function Testimonials() {
  const reviews = [
    {
      text: "Depois da IOY nossa operação mudou completamente. Temos um sistema que funciona, é bonito e nossos clientes percebem a diferença.",
      author: "Juliana Silva",
      role: "CEO, Clínica Estética Premium",
      rating: 5,
    },
    {
      text: "Qualidade de código impecável, entrega dentro do prazo e o resultado final foi melhor do que esperávamos. Altamente recomendo.",
      author: "Marcos Lemos",
      role: "Founder, Startup Fintech",
      rating: 5,
    },
    {
      text: "Automatizamos toda a nossa operação com a plataforma da IOY. Estabilidade 100%, suporte rápido e time muito competente.",
      author: "Ricardo Gomes",
      role: "Diretor de Operações, E-commerce",
      rating: 5,
    },
  ];

  return (
    <section className="py-24 relative overflow-hidden" id="depoimentos">
      <div className="container mx-auto px-6 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-8 h-[1px] bg-primary" />
            <span className="text-primary font-medium tracking-wide text-sm uppercase">Depoimentos</span>
            <div className="w-8 h-[1px] bg-primary" />
          </div>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
            Aprovado por empresas em{" "}
            <span className="text-primary">crescimento.</span>
          </h2>
          <p className="text-muted text-lg">
            Empresas reais que transformaram sua operação com a IOY.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 mb-20">
          {reviews.map((review, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.6 }}
              className="glass p-8 rounded-3xl border border-white/5 hover:border-white/10 hover:bg-white/[0.06] transition-all flex flex-col gap-5"
            >
              <div className="flex gap-1">
                {[...Array(review.rating)].map((_, j) => (
                  <span key={j} className="text-secondary text-lg">★</span>
                ))}
              </div>
              <p className="text-muted leading-relaxed italic flex-1">
                "{review.text}"
              </p>
              <div className="flex items-center gap-3 pt-4 border-t border-white/5">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary/40 to-secondary/40 flex items-center justify-center text-sm font-bold text-white shrink-0">
                  {review.author[0]}
                </div>
                <div>
                  <p className="font-bold text-foreground text-sm">{review.author}</p>
                  <p className="text-xs text-muted">{review.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Sobre section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          id="agencia"
          className="glass-card rounded-[40px] p-10 md:p-16 border border-white/8 text-center relative overflow-hidden"
        >
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] h-[200px] bg-primary/10 blur-[80px] rounded-full pointer-events-none" />
          <div className="relative z-10">
            <div className="flex items-center justify-center gap-2 mb-6">
              <div className="w-8 h-[1px] bg-secondary" />
              <span className="text-secondary font-medium tracking-wide text-sm uppercase">Sobre a IOY</span>
              <div className="w-8 h-[1px] bg-secondary" />
            </div>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">
              Uma startup de tecnologia que{" "}
              <span className="text-gradient">cria produtos reais.</span>
            </h2>
            <p className="text-lg text-muted max-w-3xl mx-auto leading-relaxed">
              A IOY é uma startup de tecnologia que desenvolve plataformas digitais inteligentes para empresas que querem crescer com eficiência. Unimos design de alto nível, arquitetura moderna e foco total em resultado para transformar ideias em produtos que funcionam de verdade.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
