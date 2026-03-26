import Image from "next/image";
import { Globe, Instagram, Linkedin, Mail, MessageCircle } from "lucide-react";

const links = [
  { label: "Soluções", href: "#solucoes" },
  { label: "Produtos", href: "#produtos" },
  { label: "Método", href: "#metodologia" },
  { label: "Contato", href: "#contato" },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-[var(--line)] bg-transparent pb-12 pt-20">
      {/* Background Glow */}
      <div className="pointer-events-none absolute bottom-0 left-1/2 h-[300px] w-full -translate-x-1/2 rounded-full bg-primary/10 blur-[120px]" />

      <div className="shell relative z-10">
        <div className="grid gap-16 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-6">
            <a href="#" className="inline-flex">
              <Image
                src="/brand-new.png"
                alt="IOY"
                width={180}
                height={60}
                className="h-9 w-auto object-contain brightness-0"
              />
            </a>
            <p className="max-w-[240px] text-sm leading-relaxed text-slate-600">
              Engenharia de software e design de produtos para empresas que exigem alta performance.
            </p>
            <div className="flex gap-4">
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
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-[var(--line)] bg-white text-slate-500 transition-all hover:border-primary/30 hover:bg-primary/10 hover:text-primary"
                >
                  <social.icon size={15} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <p className="mb-6 text-[10px] font-black uppercase tracking-[0.3em] text-slate-500">Navegação</p>
            <ul className="space-y-4 text-sm font-medium">
              {links.map((item) => (
                <li key={item.href}>
                  <a href={item.href} className="text-slate-600 transition-colors hover:text-primary">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="mb-6 text-[10px] font-black uppercase tracking-[0.3em] text-slate-500">Contato</p>
            <ul className="space-y-4 text-sm font-medium">
              <li className="group flex cursor-pointer items-center gap-3 text-slate-600 transition-colors hover:text-slate-900">
                <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-slate-100 transition-colors group-hover:bg-primary/10">
                  <Mail size={12} className="text-primary" />
                </div>
                contato@ioy.com.br
              </li>
              <li className="group flex cursor-pointer items-center gap-3 text-slate-600 transition-colors hover:text-slate-900">
                <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-slate-100 transition-colors group-hover:bg-primary/10">
                  <MessageCircle size={12} className="text-primary" />
                </div>
                +55 27 98862-5801
              </li>
            </ul>
          </div>

          <div>
            <p className="mb-6 text-[10px] font-black uppercase tracking-[0.3em] text-slate-500">Especialidades</p>
            <ul className="space-y-4 text-sm font-medium text-slate-600">
              <li className="hover:text-primary transition-colors cursor-default">SaaS B2B</li>
              <li className="hover:text-primary transition-colors cursor-default">Automação IA</li>
              <li className="hover:text-primary transition-colors cursor-default">Dashboards BI</li>
              <li className="hover:text-primary transition-colors cursor-default">Sistemas Cloud</li>
            </ul>
          </div>
        </div>

        <div className="mt-20 flex flex-col gap-6 border-t border-[var(--line)] pt-8 text-[11px] font-bold uppercase tracking-widest text-slate-500 md:flex-row md:items-center md:justify-between">
          <p>© 2026 IOY TECNOLOGIA. TODOS OS DIREITOS RESERVADOS.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-primary transition-colors">Termos</a>
            <a href="#" className="hover:text-primary transition-colors">Privacidade</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

