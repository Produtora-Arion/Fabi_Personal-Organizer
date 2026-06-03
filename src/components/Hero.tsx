import Image from "next/image";

export default function Hero() {
  return (
    <section className="bg-brand-green">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-12 md:py-16 flex flex-col md:flex-row items-center gap-8 md:gap-10">
        <div className="flex-1 text-center md:text-left">
          <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-5 text-white">
            Aprenda a organizar sua casa em 7 dias e recupere o controle da sua
            vida
          </h1>
          <p className="text-white/90 font-body text-base sm:text-lg mb-4 leading-relaxed">
            O e-book definitivo com 3 bônus exclusivos para mulheres que querem
            transformar sua rotina <strong className="text-white">sem culpa nem perfeccionismo</strong>.
          </p>
          <p className="text-white/80 font-body text-sm sm:text-base mb-8">
            Baixe agora e veja a mudança já na primeira semana!
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-4 justify-center md:justify-start">
            <a
              href="#comprar"
              className="bg-brand-black hover:bg-brand-black/80 text-white font-body font-bold text-base sm:text-lg px-6 sm:px-8 py-4 rounded-full transition-colors w-full sm:w-auto text-center"
            >
              Quero organizar minha casa agora
            </a>
          </div>
        </div>
        <div className="flex-shrink-0 w-full max-w-[280px] sm:max-w-xs md:w-80">
          <div className="relative rounded-2xl overflow-hidden shadow-2xl">
            <Image
              src="/images/fabi-sofa.jpg"
              alt="Fabi, especialista em organização"
              width={400}
              height={500}
              className="object-cover w-full h-full"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
