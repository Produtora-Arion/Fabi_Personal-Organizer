import Image from "next/image";

export default function AuthorSection() {
  return (
    <section className="bg-sage-light/20 py-16 px-6">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-10">
        <div className="flex-1 text-center md:text-left">
          <p className="font-body text-sage-dark text-sm uppercase tracking-widest mb-3">
            Quem criou este guia
          </p>
          <h2 className="font-heading text-3xl md:text-4xl text-olive-deep font-bold mb-5">
            Olá, eu sou a Fabi
          </h2>
          <p className="font-body text-gray-700 text-lg leading-relaxed mb-4">
            Sou especialista em organização e acolhimento para mulheres a partir
            dos 45 anos.
          </p>
          <p className="font-body text-gray-700 leading-relaxed mb-4">
            Desenvolvei métodos ajustados à fase do corpo e da rotina — porque
            sei que a vida muda, e a organização precisa acompanhar esse ritmo.
          </p>
          <p className="font-body text-gray-700 leading-relaxed">
            Já ajudei dezenas de mulheres a transformarem não só a casa, mas a
            relação consigo mesmas. E agora quero fazer o mesmo por você.
          </p>
        </div>
        <div className="flex-shrink-0 w-64 md:w-72">
          <div className="rounded-2xl overflow-hidden shadow-xl">
            <Image
              src="/images/fabi-balcony.jpg"
              alt="Fabi, especialista em organização"
              width={400}
              height={500}
              className="object-cover w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
