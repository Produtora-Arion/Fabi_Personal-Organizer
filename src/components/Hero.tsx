import Image from "next/image";

export default function Hero() {
  return (
    <section className="bg-olive-deep text-white">
      <div className="max-w-5xl mx-auto px-6 py-16 flex flex-col md:flex-row items-center gap-10">
        <div className="flex-1 text-center md:text-left">
          <p className="text-gold-light font-body text-sm uppercase tracking-widest mb-4">
            Para mulheres 45+
          </p>
          <h1 className="font-heading text-4xl md:text-5xl font-bold leading-tight mb-6">
            Aprenda a organizar sua casa em 7 dias e recupere o controle da sua
            vida
          </h1>
          <p className="text-white/80 font-body text-lg mb-4 leading-relaxed">
            O e-book definitivo com 3 bônus exclusivos para mulheres que querem
            transformar sua rotina <strong className="text-white">sem culpa nem perfeccionismo</strong>.
          </p>
          <p className="text-white/70 font-body text-base mb-8">
            Baixe agora e veja a mudança já na primeira semana!
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-4 justify-center md:justify-start">
            <a
              href="#comprar"
              className="bg-gold hover:bg-gold-light text-olive-deep font-body font-bold text-lg px-8 py-4 rounded-full transition-colors w-full sm:w-auto text-center"
            >
              Quero organizar minha casa agora
            </a>
          </div>
          <p className="mt-4 text-white/60 font-body text-sm">
            De R$ 79,00 por apenas{" "}
            <span className="text-gold-light font-bold text-base">R$ 47,00</span>{" "}
            — acesso imediato
          </p>
        </div>
        <div className="flex-shrink-0 w-72 md:w-80">
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
