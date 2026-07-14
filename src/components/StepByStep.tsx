const steps = [
  {
    number: "01",
    emoji: "🎯",
    title: "Descubra seu ambiente prioritário",
    desc: "Identifique o cômodo que mais impacta sua rotina e humor — e comece por ele. Máximo impacto com o mínimo esforço.",
  },
  {
    number: "02",
    emoji: "📦",
    title: "Elimine os excessos com critério",
    desc: "Junte tudo o que não usa há mais de um ano e libere espaço, físico e mental. Você não precisa de mais organizadores. Precisa de menos coisas no lugar errado.",
  },
  {
    number: "03",
    emoji: "📋",
    title: "Aprenda a criar uma rotina validada",
    desc: "Você não precisa inventar nada. O guia entrega um passo a passo testado, ambiente por ambiente, para aplicar com pouco esforço, mesmo nos dias mais cansativos.",
  },
  {
    number: "04",
    emoji: "🏡",
    title: "Desfrute da sua casa com paz",
    desc: "Uma casa onde cada coisa tem seu lugar não é sonho. É o resultado de 7 dias de método. A partir daí, manter fica fácil.",
  },
];

export default function StepByStep() {
  return (
    <section className="bg-brand-white py-12 md:py-16 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto">
        <p className="font-body text-[#6B8F63] text-center italic text-base sm:text-lg mb-3">
          O método que organiza tudo isso...
        </p>
        <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl text-brand-black text-center font-bold mb-3">
          O passo a passo
        </h2>
        <p className="font-body text-brand-black/60 text-center mb-10 text-sm sm:text-base">
          4 movimentos simples que transformam sua rotina com leveza e resultados reais
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {steps.map((step, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100 flex flex-col gap-3"
            >
              <div className="flex items-center justify-between">
                <span className="font-heading text-[#A8C5A0] text-2xl font-bold">{step.number}</span>
                <span className="text-2xl">{step.emoji}</span>
              </div>
              <h3 className="font-heading text-brand-black font-semibold text-base sm:text-lg leading-snug">
                {step.title}
              </h3>
              <p className="font-body text-brand-black/60 text-sm leading-relaxed">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
