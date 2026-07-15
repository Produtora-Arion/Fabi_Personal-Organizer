const recap = [
  { title: "Guia Prático da Casa Organizada em 7 Dias", price: "R$127,00" },
  { title: "Organizadores Inteligentes que Você Já Tem em Casa", price: "R$67,00" },
  { title: "Protocolo da Casa Cheirosa e Acolhedora", price: "R$67,00" },
  { title: "Manual da Mesa que Fortalece a Família", price: "R$67,00" },
];

export default function ValueAnchor() {
  return (
    <section className="bg-[#3A5C30] py-12 md:py-16 px-4 sm:px-6">
      <div className="max-w-3xl mx-auto">
        <h2 className="font-heading text-2xl sm:text-3xl text-white font-bold text-center mb-8">
          Recapitulando tudo o que você vai receber...
        </h2>
        <div className="flex flex-col gap-4 mb-8">
          {recap.map((item, i) => (
            <div key={i} className="flex items-center justify-between gap-4 border-b border-white/10 pb-4">
              <div className="flex items-center gap-3">
                <span className="text-[#A8C5A0] text-lg flex-shrink-0">✓</span>
                <p className="font-body text-white text-sm sm:text-base">{item.title}</p>
              </div>
              <p className="font-body text-white/50 line-through text-sm font-semibold whitespace-nowrap flex-shrink-0">
                {item.price}
              </p>
            </div>
          ))}
        </div>
        <div className="bg-white/10 rounded-2xl p-5 sm:p-6 text-center">
          <p className="font-heading text-lg sm:text-xl md:text-2xl text-white font-bold leading-snug">
            Tudo isso deveria custar R$328,00. Mas hoje você
            <br className="hidden sm:block" />
            {" "}vai ter acesso por apenas:
          </p>
        </div>
      </div>
    </section>
  );
}
