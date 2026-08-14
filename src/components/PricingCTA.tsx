'use client';
import Image from "next/image";
import { trackButtonClick, useButtonView, useHotmartUrl } from "@/components/TrackedUrlAccessPixel";

export default function PricingCTA({ trackingLabel = 'botao-comprar' }: { trackingLabel?: string }) {
  const btnRef = useButtonView(trackingLabel);
  const hotmartUrl = useHotmartUrl();
  return (
    <section id="comprar" className="py-12 md:py-16 px-4 sm:px-6" style={{ backgroundColor: "#6B8F63" }}>
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-2 md:gap-4">
        <div className="flex-1 flex justify-center w-full">
          <Image
            src="/images/mockup-nobg.png"
            alt="E-book Guia Prático da Casa Organizada no laptop e celular"
            width={500}
            height={380}
            className="object-contain w-full max-w-sm sm:max-w-md md:max-w-lg"
          />
        </div>
        <div className="flex-1 flex flex-col items-center md:items-start w-full">
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white text-center md:text-left mb-6 leading-snug">
            Comece a transformar sua casa ainda hoje
          </h2>
          <div className="bg-white/15 border border-white/25 rounded-2xl p-7 sm:p-9 w-full max-w-lg">
            <p className="font-body text-white/60 text-center line-through mb-1 text-sm">
              De R$ 355,00
            </p>
            <p className="font-body text-white font-bold text-center text-lg sm:text-xl mb-2">
              Por apenas 6x de:
            </p>
            <div className="flex items-end justify-center gap-1 mb-2">
              <span className="font-body text-white text-2xl mb-5">R$</span>
              <span className="font-heading text-8xl sm:text-9xl font-normal italic text-white leading-none" style={{ fontFamily: "var(--font-playfair)" }}>
                8,80
              </span>
            </div>
            <p className="font-body text-white/80 text-center text-sm mb-4">
              Ou R$ 47,00 à vista com desconto
            </p>
            <p className="font-body text-white/80 text-xs sm:text-sm text-center leading-relaxed mb-6">
              Pagamento único · Guia completo + 3 bônus exclusivos · Acesso imediato
            </p>
            <a
              ref={btnRef}
              href={hotmartUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackButtonClick(trackingLabel)}
              className="flex items-center justify-center text-center font-body font-bold text-sm uppercase tracking-wide px-8 py-4 rounded-full shadow-lg hover:shadow-xl hover:brightness-105 transition-all duration-200 mb-4 w-full"
              style={{ backgroundColor: "#D4A827", color: "#2D2D2D" }}
            >
              Sim, eu quero organizar minha casa agora!
            </a>
            <p className="font-body text-white/70 text-xs text-center leading-relaxed">
              🔒 Compra 100% segura · Garantia incondicional de 7 dias · Sem perguntas, sem burocracia · Condição especial por tempo limitado.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
