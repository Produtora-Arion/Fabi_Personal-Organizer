import Image from "next/image";

export default function Hero() {
  return (
    <section className="bg-[#6B8F63] py-12 md:py-16 px-4 sm:px-6">
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-6 text-white">
          Retome o controle da sua casa com um método de 7 dias e aprenda a manter tudo organizado com poucos minutos por dia
        </h1>
        <p className="text-white/80 font-body text-base sm:text-lg mb-3 leading-relaxed">
          Mesmo você esteja cansada, sem energia e sem ajuda. Sem métodos complicados. Sem precisar reorganizar a casa inteira de uma vez.
        </p>
        <p className="text-white/70 font-body text-sm sm:text-base mb-8 md:mb-10">
          Feito para mulheres 45+ que não têm mais energia, não têm ajuda e gostariam de uma casa organizada com pouco esforço.
        </p>
        <a
          href="https://pay.hotmart.com/G106566473B?bid=1783958290588"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-white text-[#6B8F63] font-body font-bold text-base sm:text-lg px-10 sm:px-14 py-4 rounded-full transition-opacity hover:opacity-90 mb-2"
        >
          Quero organizar minha casa agora
        </a>
        <p className="font-body text-white/60 text-xs sm:text-sm mb-10 md:mb-14">
          🔒 Acesso imediato · Pagamento seguro · Garantia de 7 dias
        </p>
        <div className="w-full max-w-2xl mx-auto relative rounded-2xl overflow-hidden shadow-xl">
          <div className="flex flex-col sm:flex-row">
            {/* ANTES */}
            <div className="w-full sm:w-1/2 h-56 sm:h-[340px] md:h-[380px] relative">
              <Image
                src="/images/antes.png"
                alt="Antes: mulher sobrecarregada em casa desorganizada"
                fill
                className="object-cover"
                style={{ objectPosition: "center 15%" }}
                priority
              />
              <div className="absolute inset-0 bg-black/15" />
              <span className="absolute top-3 left-3 bg-black/50 text-white font-body font-bold text-[11px] uppercase tracking-widest px-3 py-1 rounded-full backdrop-blur-sm">
                Antes
              </span>
            </div>

            {/* Separador mobile — faixa entre as imagens empilhadas */}
            <div className="sm:hidden flex items-center justify-center gap-3 py-3 bg-[#5a7a52]">
              <div className="w-9 h-9 rounded-full bg-white flex items-center justify-center shadow-md flex-shrink-0">
                <span className="text-[#6B8F63] text-lg font-bold leading-none">↓</span>
              </div>
              <span className="text-white font-body font-bold text-xs uppercase tracking-widest">
                7 dias de transformação
              </span>
            </div>

            {/* DEPOIS */}
            <div className="w-full sm:w-1/2 h-56 sm:h-[340px] md:h-[380px] relative">
              <Image
                src="/images/depois.png"
                alt="Depois: mulher feliz em casa organizada"
                fill
                className="object-cover"
                style={{ objectPosition: "30% 15%" }}
                priority
              />
              <span className="absolute top-3 right-3 bg-[#6B8F63]/90 text-white font-body font-bold text-[11px] uppercase tracking-widest px-3 py-1 rounded-full backdrop-blur-sm">
                Depois
              </span>
            </div>
          </div>

          {/* Seta desktop — só aparece em sm+ */}
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
      </div>
    </section>
  );
}
