const steps = [
  {
    day: "Dia 1",
    desc: "Descubra seu ambiente prioritário, para ter o máximo impacto com o mínimo esforço.",
  },
  {
    day: "Dia\n2 a 6",
    desc: "Aprenda, ambiente por ambiente, como eliminar excessos, focar no essencial e aplicar um passo a passo claro.",
  },
  {
    day: "Dia 7",
    desc: "Consolide o que aprendeu, crie hábitos duradouros e veja sua casa (e sua autoconfiança) mudarem.",
  },
];

export default function StepByStep() {
  return (
    <section className="bg-brand-white py-12 md:py-16 px-4 sm:px-6">
      <div className="max-w-3xl mx-auto">
        <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl text-brand-black text-center font-bold mb-3">
          O passo a passo dos 7 dias
        </h2>
        <p className="font-body text-brand-green text-center mb-10 text-base">
          Ensina como, em apenas uma semana, transformar sua rotina com leveza e resultados reais:
        </p>
        <div className="flex flex-col gap-4">
          {steps.map((step, i) => (
            <div
              key={i}
              className="flex items-center gap-5 bg-white rounded-xl p-5 shadow-sm border border-gray-100"
            >
              <div className="flex-shrink-0 w-16 h-16 rounded-full bg-brand-green flex items-center justify-center">
                <span className="font-heading text-brand-black text-sm font-bold text-center leading-tight px-1 whitespace-pre-line">
                  {step.day}
                </span>
              </div>
              <p className="font-body text-brand-black/70 leading-relaxed">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
        <p className="mt-8 text-center font-body font-semibold text-brand-black text-lg">
          Tudo explicado de forma simples, sem exigências impossíveis.
        </p>
      </div>
    </section>
  );
}
