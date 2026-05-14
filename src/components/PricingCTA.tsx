export default function PricingCTA() {
  return (
    <section id="comprar" className="bg-brand-black text-white py-16 px-6">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="font-heading text-3xl md:text-4xl font-bold mb-2">
          Comece agora sua transformação
        </h2>
        <p className="font-body text-white/70 mb-8 text-lg">
          Pagamento facilitado — acesso imediato após confirmação
        </p>

        <div className="bg-white/10 rounded-2xl p-8 mb-8">
          <div className="flex items-end justify-center gap-2 mb-4">
            <span className="font-body text-white/80 text-2xl">R$</span>
            <span className="font-heading text-7xl font-bold text-brand-green leading-none">
              47
            </span>
            <span className="font-body text-white/80 text-2xl mb-2">,00</span>
          </div>
          <p className="font-body text-white/70 text-sm">
            E-book + 3 bônus exclusivos inclusos
          </p>
        </div>

        <a
          href="#"
          className="block bg-brand-green hover:bg-brand-green/80 text-brand-black font-body font-bold text-xl px-8 py-5 rounded-full transition-colors mb-6"
        >
          Quero recuperar o controle da minha casa!
        </a>

        <div className="flex items-center justify-center gap-2 text-white/60 font-body text-sm">
          <span>🔒</span>
          <span>Compra 100% segura · 7 dias de garantia incondicional</span>
        </div>
      </div>
    </section>
  );
}
