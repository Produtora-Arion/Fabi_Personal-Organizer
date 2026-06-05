const traits = [
  "Estão cansadas ou sobrecarregadas, mas querem mais leveza na vida",
  "Já tentaram vários métodos, mas ficam frustradas sem resultados duradouros",
  "Querem começar com passos pequenos e realistas, sentindo autocuidado — não só uma casa arrumada",
];

export default function ForYou() {
  return (
    <section className="bg-brand-green/20 py-12 md:py-16 px-4 sm:px-6">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl text-brand-black font-bold mb-3">
          Esse guia foi feito para você?
        </h2>
        <p className="font-body text-brand-green mb-10 text-lg">
          Esse guia é para mulheres 45+ que:
        </p>
        <div className="flex flex-col gap-4 text-left">
          {traits.map((trait, i) => (
            <div
              key={i}
              className="flex items-start gap-4 bg-white rounded-xl p-5 shadow-sm"
            >
              <span className="flex-shrink-0 w-8 h-8 rounded-full bg-brand-green flex items-center justify-center text-brand-black font-body font-bold text-sm">
                ✓
              </span>
              <p className="font-body text-brand-black/70 leading-relaxed">{trait}</p>
            </div>
          ))}
        </div>
        <p className="mt-8 font-body text-brand-black font-semibold text-lg">
          Se você disse sim para algum desses — este guia foi criado para você.
        </p>
      </div>
    </section>
  );
}
