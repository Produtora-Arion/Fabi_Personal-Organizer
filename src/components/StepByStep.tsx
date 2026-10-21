import Image from "next/image";

const steps = [
  {
    number: "01",
    emoji: "🎯",
    title: "Descubra seu ambiente prioritário",
    desc: "Identifique o cômodo que mais impacta sua rotina e humor — e comece por ele. Máximo impacto com o mínimo esforço.",
    image: "/images/step-prioritario.webp",
    imageAlt: "Ambiente desorganizado para priorizar",
    accent: "#6B8F63",
  },
  {
    number: "02",
    emoji: "📦",
    title: "Elimine os excessos com critério",
    desc: "Junte tudo o que não usa há mais de um ano e libere espaço, físico e mental. Você não precisa de mais organizadores. Precisa de menos coisas no lugar errado.",
    image: "/images/step-organizar.jpeg",
    imageAlt: "Mulher organizando roupas em cestas",
    accent: "#D4A827",
  },
  {
    number: "03",
    emoji: "📋",
    title: "Aprenda a criar uma rotina validada",
    desc: "Você não precisa inventar nada. O guia entrega um passo a passo testado, ambiente por ambiente, para aplicar com pouco esforço, mesmo nos dias mais cansativos.",
    image: "/images/step-rotina.webp",
    imageAlt: "Rotina de organização validada",
    accent: "#6B8F63",
  },
  {
    number: "04",
    emoji: "🏡",
    title: "Desfrute da sua casa com paz",
    desc: "Uma casa onde cada coisa tem seu lugar não é sonho. É o resultado de 7 dias de método. A partir daí, manter fica fácil.",
    image: "/images/step-paz.jpeg",
    imageAlt: "Mulher relaxando em casa organizada",
    accent: "#D4A827",
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

        {/* ── MOBILE: bloco único imagem → texto ── */}
        <div className="flex flex-col gap-6 sm:hidden">
          {steps.map((step, i) => (
            <div key={i} className="rounded-2xl overflow-hidden shadow-sm border border-gray-100">
              {/* Imagem no topo */}
              <div className="relative h-52 w-full">
                <Image
                  src={step.image}
                  alt={step.imageAlt}
                  fill
                  className="object-cover"
                />
                {/* Badge do número sobreposto na imagem */}
                <div
                  className="absolute top-3 left-3 flex items-center gap-1.5 px-3 py-1 rounded-full text-white text-xs font-body font-bold shadow"
                  style={{ backgroundColor: step.accent }}
                >
                  {step.number} <span>{step.emoji}</span>
                </div>
              </div>

              {/* Texto direto abaixo, sem gap */}
              <div className="bg-white px-5 py-4" style={{ borderTop: `2px solid ${step.accent}` }}>
                <h3 className="font-heading text-brand-black font-bold text-base leading-snug mb-2">
                  {step.title}
                </h3>
                <p className="font-body text-brand-black/60 text-sm leading-relaxed">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* ── DESKTOP: alternado texto ↔ imagem ── */}
        <div className="hidden sm:flex flex-col gap-14">
          {steps.map((step, i) => {
            const imageLeft = i % 2 !== 0;
            return (
              <div
                key={i}
                className={`flex ${imageLeft ? "flex-row-reverse" : "flex-row"} items-center gap-10`}
              >
                {/* Card de texto */}
                <div
                  className="w-5/12 flex-shrink-0 bg-white rounded-2xl p-8 shadow-sm border border-gray-100"
                  style={{ borderTop: `3px solid ${step.accent}` }}
                >
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-heading text-[#A8C5A0] text-4xl font-bold">
                      {step.number}
                    </span>
                    <span className="text-2xl">{step.emoji}</span>
                  </div>
                  <h3 className="font-heading text-brand-black font-bold text-xl leading-snug mb-3">
                    {step.title}
                  </h3>
                  <p className="font-body text-brand-black/60 text-base leading-relaxed">
                    {step.desc}
                  </p>
                </div>

                {/* Imagem */}
                <div className="w-7/12 rounded-2xl overflow-hidden shadow-md">
                  <div className="relative h-64 md:h-72 w-full">
                    <Image
                      src={step.image}
                      alt={step.imageAlt}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
