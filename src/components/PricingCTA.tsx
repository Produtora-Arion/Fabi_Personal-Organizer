import Image from "next/image";

export default function PricingCTA() {
  return (
    <section id="comprar" className="py-12 px-4 sm:px-6" style={{ backgroundColor: "#95B08F" }}>
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-8 md:gap-10">
        <div className="flex-1 flex justify-center w-full">
          <Image
            src="/images/mockup-nobg.png"
            alt="E-book Guia Prático da Casa Organizada no laptop e celular"
            width={500}
            height={380}
            className="object-contain w-full max-w-xs sm:max-w-sm md:max-w-md"
          />
        </div>

        <div className="flex-1 flex flex-col items-center md:items-start w-full">
          <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold text-white text-center md:text-left mb-2">
            Comece agora sua transformação
          </h2>
          <p className="font-body text-white/80 mb-5 text-center md:text-left">
            por apenas:
          </p>

          <div className="bg-brand-white rounded-2xl p-6 sm:p-8 w-full max-w-sm mb-5 shadow-lg">
            <div className="flex items-end justify-center gap-1 mb-3">
              <span className="font-body text-brand-black/60 text-lg sm:text-xl mb-1">R$</span>
              <span className="font-heading text-6xl sm:text-7xl md:text-8xl font-bold text-brand-black leading-none">
                47
              </span>
              <span className="font-body text-brand-black/60 text-lg sm:text-xl mb-1">,00</span>
            </div>
            <p className="font-body text-brand-black/60 text-sm text-center">
              E-book + 3 bônus exclusivos inclusos
            </p>
          </div>

          <a
            href="#"
            className="block bg-brand-black hover:bg-brand-black/80 text-white font-body font-bold text-xs sm:text-sm md:text-base px-4 py-4 rounded-2xl transition-colors w-full max-w-sm text-center mb-4 whitespace-nowrap"
          >
            Quero recuperar o controle da minha casa!
          </a>

          <div className="flex items-center justify-center md:justify-start gap-2 text-white/80 font-body text-xs sm:text-sm text-center md:text-left">
            <span>🔒</span>
            <span>Compra 100% segura · 7 dias de garantia incondicional</span>
          </div>
        </div>
      </div>
    </section>
  );
}
