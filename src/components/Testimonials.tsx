const testimonials = [
  {
    text: "Achei impossível, mas no terceiro dia já sentia minha casa mais leve e eu mais animada!",
    name: "Maria",
    detail: "Leitora do guia",
  },
  {
    text: "Finalmente um método que respeita meu ritmo. Sem cobranças, sem pressão — só resultados!",
    name: "Depoimento Real",
    detail: "Aguardando seu relato aqui",
  },
  {
    text: "Os bônus são incríveis. Organizei a cozinha inteira usando coisas que já tinha em casa.",
    name: "Depoimento Real",
    detail: "Aguardando seu relato aqui",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-brand-white pt-10 md:pt-14 pb-12 md:pb-16 px-4 sm:px-6 relative z-0">
      <div className="max-w-5xl mx-auto">
        <h2 className="font-heading text-3xl text-center text-brand-black mb-2">
          O que as leitoras dizem
        </h2>
        <p className="text-center font-body text-brand-green mb-10">
          Resultados reais de mulheres que transformaram suas casas
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl p-6 shadow-sm border border-brand-green/30 flex flex-col gap-4"
            >
              <div className="text-brand-green text-3xl font-heading leading-none">"</div>
              <p className="font-body text-brand-black/70 leading-relaxed flex-1">
                {t.text}
              </p>
              <div>
                <p className="font-body font-bold text-brand-black">{t.name}</p>
                <p className="font-body text-sm text-brand-green">{t.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
