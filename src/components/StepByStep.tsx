import Image from "next/image";

const steps = [
  {
    number: "01",
    emoji: "🎯",
    title: "Descubra seu ambiente prioritário",
    desc: "Identifique o cômodo que mais impacta sua rotina e humor — e comece por ele. Máximo impacto com o mínimo esforço.",
    image: "/images/antes-novo.jpeg",
    imageAlt: "Ambiente desorganizado para priorizar",
  },
  {
    number: "02",
    emoji: "📦",
    title: "Elimine os excessos com critério",
    desc: "Junte tudo o que não usa há mais de um ano e libere espaço, físico e mental. Você não precisa de mais organizadores. Precisa de menos coisas no lugar errado.",
    image: "/images/step-organizar.jpeg",
    imageAlt: "Mulher organizando roupas em cestas",
  },
  {
    number: "03",
    emoji: "📋",
    title: "Aprenda a criar uma rotina validada",
    desc: "Você não precisa inventar nada. O guia entrega um passo a passo testado, ambiente por ambiente, para aplicar com pouco esforço, mesmo nos dias mais cansativos.",
    image: "/images/frame-organizadores.png",
    imageAlt: "Sistemas de organização por ambiente",
  },
  {
    number: "04",
    emoji: "🏡",
    title: "Desfrute da sua casa com paz",
    desc: "Uma casa onde cada coisa tem seu lugar não é sonho. É o resultado de 7 dias de método. A partir daí, manter fica fácil.",
    image: "/images/step-paz.jpeg",
    imageAlt: "Mulher relaxando em casa organizada",
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
        <p className="font-body text-brand-black/60 text-center mb-12 text-sm sm:text-base">
          4 movimentos simples que transformam sua rotina com leveza e resultados reais
        </p>

        <div className="flex flex-col gap-10 sm:gap-14">
          {steps.map((step, i) => {
            const imageLeft = i % 2 !== 0;
            return (
              <div
                key={i}
                className={`flex flex-col ${imageLeft ? "sm:flex-row-reverse" : "sm:flex-row"} items-center gap-6 sm:gap-10`}
              >
                {/* Card de texto */}
                <div
                  className="w-full sm:w-5/12 flex-shrink-0 bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-gray-100"
                  style={{ borderTop: `3px solid ${i % 2 === 0 ? "#6B8F63" : "#D4A827"}` }}
                >
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-heading text-[#A8C5A0] text-3xl sm:text-4xl font-bold">
                      {step.number}
                    </span>
                    <span className="text-2xl">{step.emoji}</span>
                  </div>
                  <h3 className="font-heading text-brand-black font-bold text-lg sm:text-xl leading-snug mb-3">
                    {step.title}
                  </h3>
                  <p className="font-body text-brand-black/60 text-sm sm:text-base leading-relaxed">
                    {step.desc}
                  </p>
                </div>

                {/* Imagem */}
                <div className="w-full sm:w-7/12 rounded-2xl overflow-hidden shadow-md">
                  <div className="relative h-56 sm:h-64 md:h-72 w-full">
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
