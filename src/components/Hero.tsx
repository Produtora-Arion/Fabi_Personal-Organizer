import Image from "next/image";

const avatarPills = [
  "Gostaria de uma casa organizada",
  "Não tem tempo para organizar a casa",
  "Tem filhos pequenos e vive apagando incêndio",
];

export default function Hero() {
  return (
    <section className="bg-[#6B8F63] py-10 md:py-14 px-4 sm:px-6">
      <div className="max-w-3xl mx-auto text-center">

        {/* Logo do produto */}
        <div className="flex justify-center mb-8">
          <Image
            src="/images/logo-produto.png"
            alt="Guia Prático da Casa Organizada em 7 Dias"
            width={260}
            height={100}
            className="w-48 sm:w-64 h-auto object-contain"
            priority
          />
        </div>

        {/* Headline */}
        <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-4 text-white">
          Organize sua casa em 7 dias, mesmo com a rotina corrida e sem ajuda.
        </h1>

        {/* Subtítulo */}
        <p className="text-white/80 font-body text-sm sm:text-base mb-6 leading-relaxed">
          Acesse agora o passo a passo de 7 dias feito para mulheres que:
        </p>

        {/* Pílulas avatar */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-10">
          {avatarPills.map((pill, i) => (
            <span
              key={i}
              className="font-body text-white text-xs sm:text-sm px-4 py-2 rounded-full border border-white/50 bg-white/10"
            >
              {pill}
            </span>
          ))}
        </div>

        {/* Antes / Depois */}
        <div className="w-full max-w-2xl mx-auto relative rounded-2xl overflow-hidden shadow-xl mb-8">
          <div className="flex flex-col sm:flex-row">
            {/* ANTES */}
            <div className="w-full sm:w-1/2 h-72 sm:h-[340px] md:h-[380px] relative">
              <Image
                src="/images/antes-novo.jpeg"
                alt="Antes: sala bagunçada, mulher sobrecarregada"
                fill
                className="object-cover [object-position:center_20%] sm:[object-position:center_15%]"
                priority
              />
              <div className="absolute inset-0 bg-black/10" />
              <span className="absolute top-3 left-3 bg-black/50 text-white font-body font-bold text-[11px] uppercase tracking-widest px-3 py-1 rounded-full backdrop-blur-sm">
                Antes
              </span>
            </div>

            {/* Separador mobile */}
            <div className="sm:hidden flex items-center justify-center gap-3 py-3 bg-[#5a7a52]">
              <div className="w-9 h-9 rounded-full bg-white flex items-center justify-center shadow-md flex-shrink-0">
                <span className="text-[#6B8F63] text-lg font-bold leading-none">↓</span>
              </div>
              <span className="text-white font-body font-bold text-xs uppercase tracking-widest">
                7 dias de transformação
              </span>
            </div>

            {/* DEPOIS */}
            <div className="w-full sm:w-1/2 h-72 sm:h-[340px] md:h-[380px] relative">
              <Image
                src="/images/depois-novo.jpeg"
                alt="Depois: sala organizada, mulher tranquila"
                fill
                className="object-cover [object-position:center_20%] sm:[object-position:30%_15%]"
                priority
              />
              <span className="absolute top-3 right-3 bg-[#6B8F63]/90 text-white font-body font-bold text-[11px] uppercase tracking-widest px-3 py-1 rounded-full backdrop-blur-sm">
                Depois
              </span>
            </div>
          </div>

          {/* Seta desktop */}
          <div className="hidden sm:flex absolute inset-0 items-center justify-center pointer-events-none">
            <div className="flex flex-col items-center gap-1.5">
              <div className="w-14 h-14 rounded-full bg-white shadow-xl flex items-center justify-center border-2 border-[#6B8F63]/20">
                <span className="text-[#6B8F63] text-2xl font-bold leading-none">→</span>
              </div>
              <span className="bg-white/95 text-[#6B8F63] text-[10px] font-body font-bold px-2.5 py-0.5 rounded-full tracking-widest shadow">
                7 DIAS
              </span>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="flex flex-col items-center gap-2">
          <a
            href="#comprar"
            data-track="botao-hero"
            className="inline-block font-body font-bold text-base sm:text-lg px-10 sm:px-16 py-4 sm:py-5 rounded-full shadow-xl transition-all duration-200 hover:brightness-95 hover:scale-105 bg-white text-[#2A5427]"
          >
            Quero minha casa organizada agora
          </a>
          <p className="font-body text-white/60 text-xs">
            🔒 Acesso imediato · Pagamento seguro · Garantia de 7 dias
          </p>
        </div>

      </div>
    </section>
  );
}
