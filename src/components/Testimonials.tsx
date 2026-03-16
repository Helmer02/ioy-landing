"use client";

import { motion } from "framer-motion";

const reviews = [
  {
    text: "A IOY estruturou nosso produto com clareza. Hoje temos menos gargalos e mais previsibilidade de entrega.",
    author: "Juliana Silva",
    role: "CEO, Clinica Estetica Premium",
  },
  {
    text: "Nivel tecnico forte e comunicacao objetiva. O resultado final veio melhor que o escopo inicial.",
    author: "Marcos Lemos",
    role: "Founder, Startup Fintech",
  },
  {
    text: "Automatizamos boa parte da operacao e ganhamos controle em tempo real. Excelente parceria.",
    author: "Ricardo Gomes",
    role: "Diretor de Operacoes, E-commerce",
  },
];

export default function Testimonials() {
  return (
    <section id="depoimentos" className="py-24">
      <div className="shell">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-14 text-center"
        >
          <span className="eyebrow mb-5">prova social</span>
          <h2 className="title-lg mb-5">Marcas em crescimento validam nossa entrega.</h2>
          <p className="muted text-lg">Feedback de empresas que evoluiram operacao e produto com a IOY.</p>
        </motion.div>

        <div className="mb-18 grid gap-4 md:grid-cols-3">
          {reviews.map((review, index) => (
            <motion.article
              key={review.author}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08, duration: 0.45 }}
              className="panel p-6"
            >
              <p className="mb-4 text-sm tracking-[0.2em] text-primary">★★★★★</p>
              <p className="muted min-h-24 text-sm leading-relaxed">&quot;{review.text}&quot;</p>
              <div className="mt-5 border-t border-white/10 pt-4">
                <p className="text-sm font-semibold text-white">{review.author}</p>
                <p className="muted text-xs">{review.role}</p>
              </div>
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          id="agencia"
          className="panel mx-auto max-w-5xl p-8 text-center md:p-12"
        >
          <span className="eyebrow mb-5">sobre a ioy</span>
          <h2 className="title-lg mx-auto mb-5 max-w-3xl">Uma startup focada em construir produtos reais para problemas reais.</h2>
          <p className="muted mx-auto max-w-3xl text-base leading-relaxed md:text-lg">
            Somos uma equipe de tecnologia orientada a negocio. Conectamos estrategia, design e engenharia para
            transformar ideias em plataformas confiaveis e prontas para crescer.
          </p>
        </motion.div>
      </div>
    </section>
  );
}


