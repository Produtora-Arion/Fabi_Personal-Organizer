export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-brand-black text-white/60 py-8 px-6">
      <div className="max-w-4xl mx-auto text-center font-body text-sm">
        <p className="mb-2">
          © {year} Fabi | Guia Prático da Casa Organizada
        </p>
        <p className="mb-4">Produto digital. Todos os direitos reservados.</p>
        <div className="flex items-center justify-center gap-4 text-white/40">
          <a href="#" className="hover:text-white/70 transition-colors">
            Termos de Uso
          </a>
          <span>·</span>
          <a href="#" className="hover:text-white/70 transition-colors">
            Política de Privacidade
          </a>
        </div>
        <p className="mt-4 text-white/30 text-xs">
          Ao comprar, você concorda com os Termos de Uso e Política de
          Privacidade.
        </p>
      </div>
    </footer>
  );
}
