import Image from "next/image";

export default function Hero() {
  return (
    <section className="bg-[#6B8F63] py-12 md:py-16 px-4 sm:px-6">
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-6 text-white">
          Casa organizada em 7 dias — mesmo sem tempo, sem ajuda e sem gastar mais nada
        </h1>
        <p className="text-white/80 font-body text-base sm:text-lg mb-10 md:mb-14 leading-relaxed">
          Sem perfeição, sem cobranças e sem precisar de ninguém pra ajudar — resultado real a partir do primeiro dia.
        </p>
        <div className="w-full max-w-2xl mx-auto relative rounded-2xl overflow-hidden shadow-xl">
          <div className="flex flex-col sm:flex-row">
            {/* ANTES */}
            <div className="w-full sm:w-1/2 h-72 sm:h-[340px] md:h-[380px] relative">
              <Image
                src="/images/antes-novo.jpeg"
                alt="Antes: mulher sobrecarregada em sala desorganizada"
                fill
                className="object-cover [object-position:center_20%] sm:[object-position:center_15%]"
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
            <div className="w-full sm:w-1/2 h-72 sm:h-[340px] md:h-[380px] relative">
              <Image
                src="/images/depois-novo.jpeg"
                alt="Depois: mulher tranquila em sala organizada"
                fill
                className="object-cover [object-position:center_20%] sm:[object-position:30%_15%]"
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

        {/* Botão abaixo da imagem */}
        <div className="mt-8 flex flex-col items-center gap-2">
          <a
            href="#comprar"
            data-track="botao-hero"
            className="inline-block font-body font-bold text-base sm:text-lg px-10 sm:px-16 py-4 sm:py-5 rounded-full shadow-xl transition-all duration-200 hover:brightness-110 hover:scale-105"
            style={{ backgroundColor: "#2A5427", color: "#FFFFFF" }}
          >
            Quero minha casa organizada agora
          </a>
          <p className="font-body text-white/60 text-xs">
            🔒 Acesso imediato · Garantia de 7 dias
          </p>
        </div>
      </div>
    </section>
  );
}
