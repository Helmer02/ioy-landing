"use client";

import { motion } from "framer-motion";
import { AlertCircle, Clock3, Database, Link2Off, Repeat2, TrendingDown } from "lucide-react";

const items = [
  { icon: Clock3, title: "operacao presa em tarefas manuais" },
  { icon: Repeat2, title: "retrabalho por falta de automacao" },
  { icon: Link2Off, title: "sistemas sem integracao real" },
  { icon: TrendingDown, title: "decisao sem dados confiaveis" },
  { icon: Database, title: "informacao fragmentada" },
  { icon: AlertCircle, title: "crescimento travado por processo" },
];

export default function Problems() {
  return (
    <section id="problemas" className="relative py-24">
      <div className="shell">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto mb-14 max-w-3xl text-center"
        >
          <span className="eyebrow mb-5">diagnostico de maturidade digital</span>
          <h2 className="title-lg mb-5">O problema nao e falta de ferramenta. E falta de arquitetura operacional.</h2>
          <p className="muted text-lg">
            Empresas perdem margem e velocidade quando o fluxo depende de planilhas, processos soltos e sistemas
            que nao conversam.
          </p>
        </motion.div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {items.map((item, index) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.06, duration: 0.45 }}
              className="panel p-5"
            >
              <item.icon className="mb-4 h-5 w-5 text-primary" />
              <p className="text-base font-semibold text-white">{item.title}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

