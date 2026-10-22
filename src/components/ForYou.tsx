import Image from "next/image";

const painPoints = [
  "Tem pouco tempo e gostaria de uma casa organizada",
  "Não consegue contratar alguém para organizar — ou contratou alguém que não está gerando resultado",
  "Já tentou vários métodos e nenhum se sustentou por mais de uma semana",
  "Arruma a casa e em poucas horas já está tudo igual a antes",
  "Briga com a família porque ninguém ajuda e tudo recai sobre você",
];

export default function ForYou() {
  return (
    <section className="bg-brand-white py-14 md:py-20 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl text-brand-black font-bold text-center mb-10 sm:mb-12 leading-tight">
          O guia foi feito para você mulher que:
        </h2>

        <div className="flex flex-col sm:flex-row gap-8 sm:gap-12 items-start mb-8 sm:mb-10">
          {/* Bullets */}
          <div className="flex-1 flex flex-col gap-3">
            {painPoints.map((point, i) => (
              <div
                key={i}
                className="flex items-start gap-4 bg-white rounded-2xl px-5 py-4 border border-gray-200 border-l-4 border-l-[#6B8F63]"
              >
                <span className="text-[#6B8F63] text-base mt-0.5 flex-shrink-0 font-bold">→</span>
                <p className="font-body text-brand-black/75 leading-relaxed text-sm sm:text-base">
                  {point}
                </p>
              </div>
            ))}
          </div>

          {/* Imagem */}
          <div className="w-full sm:w-[340px] flex-shrink-0 rounded-2xl overflow-hidden shadow-lg">
            <Image
              src="/images/foryou-antes.webp"
              alt="Mulher sobrecarregada em casa desorganizada"
              width={340}
              height={420}
              className="object-cover w-full h-[260px] sm:h-[380px]"
            />
          </div>
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
