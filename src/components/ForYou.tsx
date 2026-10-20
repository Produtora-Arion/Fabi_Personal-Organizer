const painPoints = [
  "Você não tem tempo — e quando tem, não sabe nem por onde começar",
  "Você arruma de manhã e à tarde já parece que nunca arrumou nada",
  "Você faz tudo sozinha e, no fim do dia, ainda tem uma pilha de coisas te esperando",
  "Já gastou em organizadores e caixinhas que prometiam milagres e não adiantaram nada",
  "Você já tentou vários métodos e nenhum durou mais de uma semana",
  "Você só quer entrar em casa e se sentir bem — sem culpa, sem cansaço",
];

export default function ForYou() {
  return (
    <section className="bg-brand-white py-14 md:py-20 px-4 sm:px-6">
      <div className="max-w-3xl mx-auto">
        <p className="font-body text-[#6B8F63] text-[11px] uppercase tracking-[0.2em] text-center mb-4">
          O Guia Prático da Casa Organizada em 7 Dias é para mulheres que:
        </p>
        <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl text-brand-black font-bold text-center mb-10 sm:mb-12 leading-tight">
          Você se reconhece em algum desses pontos?
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8 sm:mb-10">
          {painPoints.map((point, i) => (
            <div
              key={i}
              className="flex items-start gap-4 bg-white rounded-2xl px-6 py-5 border border-gray-200 border-l-4 border-l-[#6B8F63]"
            >
              <span className="text-[#6B8F63] text-base mt-0.5 flex-shrink-0 font-bold">→</span>
              <p className="font-body text-brand-black/75 leading-relaxed text-sm sm:text-base">
                {point}
              </p>
            </div>
          ))}
        </div>

        <div className="bg-[#6B8F63] rounded-2xl px-6 py-5 text-center">
          <p className="font-body text-white text-sm sm:text-base font-medium leading-relaxed">
            Se você se identificou com ao menos 2 itens acima, este guia foi criado
            <br className="hidden sm:block" /> exatamente para você.
          </p>
        </div>
      </div>
    </section>
  );
}
