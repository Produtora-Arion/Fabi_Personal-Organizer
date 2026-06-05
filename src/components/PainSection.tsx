const pains = [
  "As tarefas se acumulam e tudo fica bagunçado",
  "No fim do dia, só resta cansaço e frustração",
  "Você já tentou se organizar — mas não durou",
  "Sente que perdeu o controle depois que o corpo mudou",
];

export default function PainSection() {
  return (
    <section className="bg-brand-black text-white py-12 md:py-16 px-4 sm:px-6">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
          Você sente que perdeu o controle da sua rotina?
        </h2>
        <p className="font-body text-white/80 text-lg mb-10 leading-relaxed">
          Você não está sozinha — e{" "}
          <strong className="text-white">não é sua culpa.</strong>
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left">
          {pains.map((pain, i) => (
            <div
              key={i}
              className="flex items-start gap-3 bg-white/10 rounded-xl p-4"
            >
              <span className="text-brand-green text-xl mt-0.5">→</span>
              <p className="font-body text-white/90">{pain}</p>
            </div>
          ))}
        </div>
        <p className="mt-10 font-body text-white/70 text-base italic">
          Se você se reconheceu em algum desses pontos, o que vem a seguir foi
          feito exatamente para você.
        </p>
      </div>
    </section>
  );
}
