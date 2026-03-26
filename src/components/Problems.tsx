"use client";

import { motion } from "framer-motion";
import { AlertCircle, Clock3, Database, Link2Off, Repeat2, TrendingDown } from "lucide-react";

const items = [
  { icon: Clock3, title: "Operação presa em tarefas manuais" },
  { icon: Repeat2, title: "Retrabalho por falta de automação" },
  { icon: Link2Off, title: "Sistemas sem integração real" },
  { icon: TrendingDown, title: "Decisões sem dados confiáveis" },
  { icon: Database, title: "Informação fragmentada e lenta" },
  { icon: AlertCircle, title: "Crescimento travado por processos" },
];

export default function Problems() {
  return (
    <section id="problemas" className="relative py-24">
      <div className="shell">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mx-auto mb-20 max-w-4xl text-center"
        >
          <span className="eyebrow mb-6 border-red-500/20 bg-red-500/5 text-red-500/70 uppercase">Maturidade Digital</span>
          <h2 className="title-hero text-4xl mb-6 text-slate-900">
            O Problema não é a Ferramenta. É a <span className="text-slate-500 italic">Arquitetura</span>.
          </h2>
          <p className="text-slate-600 text-lg leading-relaxed">
            Empresas perdem velocidade quando dependem de fluxos manuais e sistemas que não conversam. 
            Nós resolvemos a base para você escalar o topo.
          </p>
        </motion.div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {items.map((item, index) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05, duration: 0.5 }}
              className="panel flex items-center gap-5 border border-[var(--line)] bg-white p-7 transition-all duration-500 group hover:border-red-500/30"
            >
              <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-slate-100 transition-colors group-hover:bg-red-500/10">
                <item.icon className="h-5 w-5 text-slate-500 transition-colors group-hover:text-red-500" />
              </div>
              <p className="text-sm font-semibold text-slate-700 transition-colors group-hover:text-slate-900">{item.title}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

