"use client";

import { motion } from "framer-motion";

export default function Testimonials() {
  const reviews = [
    {
      text: "Depois que usamos o sistema da IOY nossa agenda ficou totalmente organizada. O visual do painel é indiscutível e os clientes adoram.",
      author: "Juliana Silva",
      role: "CEO, Clínica Estética",
      rating: 5
    },
    {
      text: "A qualidade do código e a entrega do projeto SaaS foram perfeitas. Eles não apenas desenvolvem, eles pensam no UX de forma profunda.",
      author: "Marcos Lemos",
      role: "Founder, Startup Fintech",
      rating: 5
    },
    {
      text: "Automatizamos toda nossa operação financeira com a API construída pela IOY Tech. Estabilidade 100% e suporte impecável.",
      author: "Ricardo Gomes",
      role: "Diretor, E-commerce M",
      rating: 5
    }
  ];

  const logos = [
    "TECH STARTUP", "AGY CORP", "VENDAS.COM", "LUX INSTITUTO", "CLÍNICAS M"
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
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">
            Aprovado por empresas em <span className="text-primary">crescimento.</span>
          </h2>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-20">
          {reviews.map((review, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.6 }}
              className="glass p-8 rounded-3xl border border-white/5 hover:border-white/10 transition-colors"
            >
              <div className="flex gap-1 mb-6">
                {[...Array(review.rating)].map((_, j) => (
                  <span key={j} className="text-secondary text-lg">★</span>
                ))}
              </div>
              <p className="text-muted leading-relaxed mb-8 italic">
                "{review.text}"
              </p>
              <div>
                <p className="font-bold text-foreground">{review.author}</p>
                <p className="text-sm text-muted">{review.role}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Client Logos (Text representation) */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="border-t border-white/10 pt-16 flex flex-wrap justify-center gap-8 md:gap-16 opacity-50 grayscale hover:grayscale-0 transition-all duration-500"
        >
          {logos.map((logo, i) => (
            <div key={i} className="text-xl md:text-2xl font-black tracking-widest text-foreground">
              {logo}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
