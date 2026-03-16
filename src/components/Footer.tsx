import { Instagram, Linkedin, Globe, Mail, MessageCircle } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#07080f] border-t border-white/5 pt-20 pb-10 overflow-hidden relative">
      {/* Decorative glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[300px] bg-primary/10 blur-[120px] rounded-full pointer-events-none opacity-50" />

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-20">
          <div className="flex flex-col gap-6">
            <a href="#" className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl overflow-hidden flex items-center justify-center bg-[#090a12] border border-white/10">
                <img src="/logo.png" alt="IOY Logo" className="w-[110%] h-[110%] object-cover" />
              </div>
              <span className="font-bold text-xl tracking-tight text-foreground">
                IOY Tecnologia
              </span>
            </a>
            <p className="text-muted text-sm leading-relaxed max-w-xs">
              Especialistas em transformar ideias complexas em experiências digitais simples, escaláveis e de alto impacto.
            </p>
            <div className="flex items-center gap-4">
              {[
                { icon: <Instagram size={18} />, href: "https://www.instagram.com/ioy.tech/" },
                { icon: <Linkedin size={18} />, href: "#" },
                { icon: <Globe size={18} />, href: "https://ioy.com.br" },
              ].map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  target="_blank" rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-muted hover:text-foreground hover:bg-white/10 transition-all"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-bold text-foreground mb-6 uppercase tracking-widest text-xs">Empresa</h4>
            <ul className="flex flex-col gap-4 text-sm font-medium text-muted">
              {["Sobre Nós", "Soluções", "Produtos", "Portfólio"].map((link) => (
                <li key={link}>
                  <a href={`#${link.toLowerCase().replace(/\s+/g, '-')}`} className="hover:text-primary transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-foreground mb-6 uppercase tracking-widest text-xs">Contato</h4>
            <ul className="flex flex-col gap-4 text-sm font-medium text-muted">
              <li className="flex items-center gap-3 group cursor-pointer hover:text-primary transition-colors">
                <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all">
                  <Mail size={14} />
                </div>
                contato@ioy.com.br
              </li>
              <li className="flex items-center gap-3 group cursor-pointer hover:text-secondary transition-colors">
                <div className="w-8 h-8 rounded-lg bg-secondary/10 flex items-center justify-center text-secondary group-hover:bg-secondary group-hover:text-white transition-all">
                  <MessageCircle size={14} />
                </div>
                +55 27 98862-5801
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-foreground mb-6 uppercase tracking-widest text-xs">Soluções Premium</h4>
            <ul className="flex flex-col gap-4 text-sm font-medium text-muted">
              <li>
                <a href="https://agenda.ioy.com.br" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-secondary hover:brightness-125 transition-all">
                  <div className="w-1.5 h-1.5 rounded-full bg-secondary animate-pulse" />
                  SaaS de Agendamento
                </a>
              </li>
              <li>Plataformas Imobiliárias</li>
              <li>Sistemas Hospitalares</li>
              <li>E-commerce B2B</li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-xs font-medium text-muted">
          <p>© 2026 IOY Tecnologia Premium. Built for the future.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-foreground transition-colors">Termos de uso</a>
            <a href="#" className="hover:text-foreground transition-colors">Privacidade</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
