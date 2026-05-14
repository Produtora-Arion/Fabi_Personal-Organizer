const steps = [
  {
    day: "Dia 1",
    title: "Escolha seu ambiente prioritário",
    desc: "Defina o espaço que mais impacta seu dia a dia — o ponto de partida para uma transformação real.",
  },
  {
    day: "Dia 2",
    title: "Comece a eliminar os excessos",
    desc: "Descubra o que fica, o que vai embora e como tomar essas decisões sem culpa.",
  },
  {
    day: "Dia 3",
    title: "Organize com intenção",
    desc: "Cada objeto no seu lugar — aprenda a criar sistemas simples que se mantêm sozinhos.",
  },
  {
    day: "Dia 4",
    title: "Avance para o próximo ambiente",
    desc: "Com a prática dos primeiros dias, você fica mais rápida e confiante.",
  },
  {
    day: "Dia 5",
    title: "Cuide dos espaços esquecidos",
    desc: "Aquelas gavetas, armários e cantinhos que acumulam — agora é a hora.",
  },
  {
    day: "Dia 6",
    title: "Finalize e revise",
    desc: "Um olhar geral sobre tudo que foi transformado e ajustes finais.",
  },
  {
    day: "Dia 7",
    title: "Crie seu hábito e celebre",
    desc: "Transforme a organização em rotina e reconheça o quanto você evoluiu!",
  },
];

export default function StepByStep() {
  return (
    <section className="bg-brand-white py-16 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="font-heading text-3xl md:text-4xl text-brand-black text-center font-bold mb-3">
          O passo a passo dos 7 dias
        </h2>
        <p className="font-body text-brand-green text-center mb-10 text-lg">
          Tudo explicado de forma clara, sem regras impossíveis
        </p>
        <div className="flex flex-col gap-4">
          {steps.map((step, i) => (
            <div
              key={i}
              className="flex items-start gap-5 bg-white rounded-xl p-5 shadow-sm"
            >
              <div className="flex-shrink-0 w-14 h-14 rounded-full bg-brand-green flex items-center justify-center">
                <span className="font-heading text-brand-black text-sm font-bold text-center leading-tight px-1">
                  {step.day}
                </span>
              </div>
              <div>
                <h3 className="font-heading text-lg text-brand-black font-semibold mb-1">
                  {step.title}
                </h3>
                <p className="font-body text-brand-black/60 text-sm leading-relaxed">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
