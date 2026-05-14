const mainItems = [
  "E-book digital (PDF, 28 páginas) com estrutura testada para organizar sua casa em 7 dias",
  "Checklists exclusivos para cada ambiente",
  "Dicas práticas para evitar erros comuns e respeitar seu tempo",
  "Seção 'Cuidado Importante': orientação contra perfeccionismo ou culpa",
  "Linguagem acolhedora, experiência real, respeito à mulher 45+",
];

const bonuses = [
  {
    number: "BÔNUS 1",
    title: "Organizadores inteligentes que você já tem em casa",
    desc: "Descubra como criar soluções criativas usando caixas, potes, bandejas e itens que já possui. Reduza custos e ganhe liberdade!",
    quote: "Uma casa organizada não depende de gastar mais, mas de olhar com mais intenção para o que já se tem.",
  },
  {
    number: "BÔNUS 2",
    title: "Pequenos detalhes que transformam uma casa em lar",
    desc: "Acolhimento vai além da ordem: traga mais alma para seu espaço com flores, cheiros suaves, fotos e pequenos gestos de cuidado.",
    quote: "Uma casa com alma cuida de quem vive dentro dela.",
  },
  {
    number: "BÔNUS 3",
    title: "A mesa do dia a dia — pequenos gestos que fortalecem a família",
    desc: "Reconecte-se através de conversas e momentos simples à mesa. Ideias práticas para criar laços, sem exigir tempo ou esforço extra.",
    quote: null,
  },
];

export default function WhatYouGet() {
  return (
    <section className="bg-cream py-16 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="font-heading text-3xl md:text-4xl text-olive-deep text-center font-bold mb-3">
          Tudo que você recebe
        </h2>
        <p className="font-body text-sage-dark text-center mb-10 text-lg">
          Ao adquirir o seu e-book, você leva:
        </p>

        <div className="bg-sage-dark rounded-2xl p-6 md:p-8 mb-10 text-white">
          <h3 className="font-heading text-2xl font-bold mb-5">
            📖 E-book Principal
          </h3>
          <ul className="flex flex-col gap-3">
            {mainItems.map((item, i) => (
              <li key={i} className="flex items-start gap-3 font-body">
                <span className="text-gold mt-0.5 text-lg">✓</span>
                <span className="text-white/90">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <h3 className="font-heading text-2xl text-center text-olive-deep font-bold mb-6">
          + 3 BÔNUS EXCLUSIVOS
        </h3>

        <div className="flex flex-col gap-6">
          {bonuses.map((bonus, i) => (
            <div
              key={i}
              className="bg-white border border-sage-light/40 rounded-2xl p-6 shadow-sm"
            >
              <span className="inline-block bg-gold text-olive-deep font-body font-bold text-xs px-3 py-1 rounded-full mb-3 uppercase tracking-wide">
                {bonus.number}
              </span>
              <h4 className="font-heading text-xl text-olive-deep font-semibold mb-2">
                {bonus.title}
              </h4>
              <p className="font-body text-gray-700 mb-3 leading-relaxed">
                {bonus.desc}
              </p>
              {bonus.quote && (
                <p className="font-body italic text-sage-dark text-sm border-l-4 border-sage-light pl-4">
                  "{bonus.quote}"
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
