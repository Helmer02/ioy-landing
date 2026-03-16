"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function CTA() {
  return (
    <section id="contato" className="relative py-24">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-80 bg-gradient-to-b from-primary/10 to-transparent" />

      <div className="shell">
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.58 }}
          className="panel mx-auto max-w-4xl p-9 text-center md:p-14"
        >
          <span className="eyebrow mb-6">vamos construir juntos</span>
          <h2 className="title-lg mb-6">Leve sua empresa para uma operacao mais inteligente e previsivel.</h2>
          <p className="muted mx-auto mb-9 max-w-2xl text-base leading-relaxed md:text-lg">
            Se voce quer modernizar seus sistemas com uma presenca visual premium e infraestrutura robusta, a IOY
            esta pronta para liderar esse movimento com voce.
          </p>

          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <a
              href="https://wa.me/5527988625801"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Falar com a IOY
              <ArrowRight size={16} />
            </a>
            <a href="#solucoes" className="btn-secondary">
              Ver solucoes
            </a>
          </div>

          <p className="muted mt-6 text-xs uppercase tracking-[0.13em]">
            resposta agil  |  diagnostico inicial gratuito  |  sem compromisso
          </p>
        </motion.div>
      </div>
    </section>
  );
}

