export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-brand-black text-white/60 py-10 px-6">
      <div className="max-w-4xl mx-auto text-center font-body">
        <p className="font-heading text-2xl text-white italic mb-1">
          Fabiana Damiani
        </p>
        <p className="text-sm text-white/50 mb-6">Personal Organizer · @fabidamiani</p>
        <div className="flex items-center justify-center gap-6 text-sm text-white/40 mb-4">
          <a href="#" className="hover:text-white/70 transition-colors">
            Termos de Uso
          </a>
          <a href="#" className="hover:text-white/70 transition-colors">
            Política de Privacidade
          </a>
        </div>
        <p className="text-xs text-white/30 mb-2 leading-relaxed">
          Ao comprar, você concorda com os Termos de Uso e Política de Privacidade.
          <br />
          Produto digital entregue por e-mail após confirmação de pagamento.
        </p>
        <p className="text-xs text-white/30">
          © {year} Fabiana Damiani · Todos os direitos reservados
        </p>
      </div>
    </footer>
  );
}
