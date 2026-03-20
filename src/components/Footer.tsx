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
    <footer className="relative overflow-hidden border-t border-white/5 bg-black pb-12 pt-20">
      {/* Background Glow */}
      <div className="pointer-events-none absolute bottom-0 left-1/2 h-[300px] w-full -translate-x-1/2 rounded-full bg-primary/5 blur-[120px]" />

      <div className="shell relative z-10">
        <div className="grid gap-16 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-6">
            <a href="#" className="flex items-center gap-2.5 group">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary/10 border border-primary/20">
                <Image src="/logo.png" alt="IOY" width={28} height={28} className="h-7 w-7 object-contain" />
              </div>
              <span className="text-xl font-bold tracking-tight text-white font-sans italic">
                IOY<span className="text-primary not-italic">.</span>
              </span>
            </a>
            <p className="text-white/40 text-sm leading-relaxed max-w-[240px]">
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
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/40 transition-all hover:bg-primary/20 hover:text-primary hover:border-primary/30"
                >
                  <social.icon size={15} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <p className="mb-6 text-[10px] font-black uppercase tracking-[0.3em] text-white/20">Navegação</p>
            <ul className="space-y-4 text-sm font-medium">
              {links.map((item) => (
                <li key={item.href}>
                  <a href={item.href} className="text-white/50 transition-colors hover:text-primary">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="mb-6 text-[10px] font-black uppercase tracking-[0.3em] text-white/20">Contato</p>
            <ul className="space-y-4 text-sm font-medium">
              <li className="flex items-center gap-3 text-white/50 hover:text-white transition-colors cursor-pointer group">
                <div className="h-7 w-7 rounded-lg bg-white/5 flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                  <Mail size={12} className="text-primary" />
                </div>
                contato@ioy.com.br
              </li>
              <li className="flex items-center gap-3 text-white/50 hover:text-white transition-colors cursor-pointer group">
                <div className="h-7 w-7 rounded-lg bg-white/5 flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                  <MessageCircle size={12} className="text-primary" />
                </div>
                +55 27 98862-5801
              </li>
            </ul>
          </div>

          <div>
            <p className="mb-6 text-[10px] font-black uppercase tracking-[0.3em] text-white/20">Especialidades</p>
            <ul className="space-y-4 text-sm font-medium text-white/50">
              <li className="hover:text-primary transition-colors cursor-default">SaaS B2B</li>
              <li className="hover:text-primary transition-colors cursor-default">Automação IA</li>
              <li className="hover:text-primary transition-colors cursor-default">Dashboards BI</li>
              <li className="hover:text-primary transition-colors cursor-default">Sistemas Cloud</li>
            </ul>
          </div>
        </div>

        <div className="mt-20 pt-8 border-t border-white/5 flex flex-col gap-6 md:flex-row md:items-center md:justify-between text-[11px] font-bold uppercase tracking-widest text-white/20">
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
