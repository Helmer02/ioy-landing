export default function Footer() {
  return (
    <footer className="bg-[#050508] border-t border-white/5 pt-16 pb-8">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
            <a href="#" className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 rounded-lg overflow-hidden flex items-center justify-center bg-[#090a12]">
                <img src="/logo.png" alt="IOY Logo" className="w-[120%] h-[120%] object-cover" />
              </div>
              <span className="font-bold text-lg tracking-tight text-foreground">
                IOY Tecnologia
              </span>
            </a>
            <p className="text-muted text-sm leading-relaxed">
              Software House especializada em sistemas de alta performance, UX imersivo e SaaS escalável.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">Empresa</h4>
            <ul className="space-y-3 text-sm text-muted">
              <li><a href="#agencia" className="hover:text-primary transition-colors">Sobre Nós</a></li>
              <li><a href="#solucoes" className="hover:text-primary transition-colors">Soluções</a></li>
              <li><a href="#produtos" className="hover:text-primary transition-colors">Produtos</a></li>
              <li><a href="#portfolio" className="hover:text-primary transition-colors">Portfólio</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">Contato</h4>
            <ul className="space-y-3 text-sm text-muted">
              <li>Formulário de Contato</li>
              <li>
                <a href="mailto:contato@ioy.com.br" className="hover:text-primary transition-colors">
                  contato@ioy.com.br
                </a>
              </li>
              <li>
                <a href="https://wa.me/5527988625801" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                  WhatsApp: +55 27 98862-5801
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">Redes Sociais & Produtos</h4>
            <ul className="space-y-3 text-sm text-muted">
              <li>
                <a href="https://www.instagram.com/ioy.tech/" target="_blank" rel="noopener noreferrer" className="hover:text-secondary transition-colors">
                  Instagram @ioy.tech
                </a>
              </li>
              <li>
                <a href="https://agenda.ioy.com.br" target="_blank" rel="noopener noreferrer" className="hover:text-secondary transition-colors font-medium">
                  SaaS de Agendamento
                </a>
              </li>
              <li><a href="#" className="hover:text-secondary transition-colors">LinkedIn</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted">
          <p>© 2026 IOY Tecnologia Premium. Todos os direitos reservados.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-white transition-colors">Termos</a>
            <a href="#" className="hover:text-white transition-colors">Privacidade</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
