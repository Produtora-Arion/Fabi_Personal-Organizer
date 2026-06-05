export default function Hero() {
  return (
    <section className="bg-[#EBF2E8] relative z-10">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 pt-12 md:pt-16 pb-[175px] sm:pb-[346px] md:pb-[419px] lg:pb-[437px] text-center">
        <p className="font-body text-[#6B8F63] text-xs sm:text-sm uppercase tracking-widest mb-4">
          Para mulheres 45+
        </p>

        <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-5 text-brand-black">
          Aprenda a organizar sua casa em 7 dias e recupere o controle da sua vida
        </h1>

        <p className="text-brand-black/70 font-body text-base sm:text-lg mb-3 leading-relaxed">
          O e-book definitivo com 3 bônus exclusivos para mulheres que querem
          transformar sua rotina{" "}
          <strong className="text-brand-black">sem culpa nem perfeccionismo</strong>.
        </p>

        <p className="text-brand-black/60 font-body text-sm sm:text-base mb-8">
          Adquira agora e veja a mudança já na primeira semana!
        </p>

        <a
          href="#comprar"
          className="inline-block text-white font-body font-bold text-base sm:text-lg px-10 sm:px-14 py-4 rounded-full transition-opacity hover:opacity-90 mb-2"
          style={{ backgroundColor: "#6B8F63" }}
        >
          Quero organizar minha casa agora
        </a>

        <p className="font-body text-brand-black/50 text-xs sm:text-sm mb-8 sm:mb-10 md:mb-12">
          🔒 Acesso imediato · Pagamento seguro · Satisfação garantida
        </p>
      </div>
    </section>
  );
}
