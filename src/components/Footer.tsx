import Image from "next/image";
import { Globe, Instagram, Linkedin, Mail, MessageCircle } from "lucide-react";

const links = [
  { label: "Solucoes", href: "#solucoes" },
  { label: "Produtos", href: "#produtos" },
  { label: "Metodo", href: "#metodologia" },
  { label: "Contato", href: "#contato" },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-[hsl(var(--background-2))] pb-10 pt-16">
      <div className="pointer-events-none absolute bottom-0 left-1/2 h-64 w-[680px] -translate-x-1/2 rounded-full bg-primary/10 blur-[110px]" />

      <div className="shell relative z-10">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <a href="#" className="mb-5 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center overflow-hidden rounded-xl border border-white/20 bg-[hsl(var(--popover))]">
                <Image src="/logo.png" alt="IOY" width={44} height={44} className="h-[110%] w-[110%] object-cover" />
              </div>
              <p className="text-base font-semibold text-white">IOY Tecnologia</p>
            </a>
            <p className="muted max-w-xs text-sm leading-relaxed">
              Produtos digitais para empresas que exigem alta qualidade visual, performance e confiabilidade.
            </p>
            <div className="mt-5 flex gap-3">
              {[
                { icon: Instagram, href: "https://www.instagram.com/ioy.tech/" },
                { icon: Linkedin, href: "#" },
                { icon: Globe, href: "https://ioy.com.br" },
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/15 bg-white/[0.03] text-white/70 transition hover:bg-white/[0.08] hover:text-white"
                >
                  <social.icon size={16} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <p className="mb-4 text-xs uppercase tracking-[0.18em] text-white/55">Navegacao</p>
            <ul className="space-y-2 text-sm text-white/78">
              {links.map((item) => (
                <li key={item.href}>
                  <a href={item.href} className="transition hover:text-primary">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="mb-4 text-xs uppercase tracking-[0.18em] text-white/55">Contato</p>
            <ul className="space-y-3 text-sm text-white/78">
              <li className="flex items-center gap-2">
                <Mail size={14} className="text-primary" />
                contato@ioy.com.br
              </li>
              <li className="flex items-center gap-2">
                <MessageCircle size={14} className="text-primary" />
                +55 27 98862-5801
              </li>
            </ul>
          </div>

          <div>
            <p className="mb-4 text-xs uppercase tracking-[0.18em] text-white/55">Especialidades</p>
            <ul className="space-y-2 text-sm text-white/78">
              <li>SaaS B2B</li>
              <li>Automacao operacional</li>
              <li>Paineis de gestao</li>
              <li>Plataformas web premium</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-white/10 pt-6 text-xs text-white/55 md:flex-row md:items-center md:justify-between">
          <p>© 2026 IOY Tecnologia. Built for performance.</p>
          <div className="flex gap-5">
            <a href="#" className="transition hover:text-white">
              Termos
            </a>
            <a href="#" className="transition hover:text-white">
              Privacidade
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

