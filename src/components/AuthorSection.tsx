import Image from "next/image";

export default function AuthorSection() {
  return (
    <section className="bg-brand-green/20 py-12 md:py-16 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-8 md:gap-10">
        <div className="flex-shrink-0 w-full max-w-[260px] sm:max-w-xs md:w-72">
          <div className="rounded-2xl overflow-hidden shadow-xl">
            <Image
              src="/images/fabi-balcony.jpg"
              alt="Fabiana Damiani, Personal Organizer"
              width={400}
              height={500}
              className="object-cover w-full"
            />
          </div>
        </div>
        <div className="flex-1 text-center md:text-left">
          <p className="font-body text-[#6B8F63] text-xs sm:text-sm uppercase tracking-widest mb-2">
            Quem criou este guia
          </p>
          <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl text-brand-black font-bold mb-1">
            Fabiana Damiani
          </h2>
          <p className="font-body text-[#6B8F63] text-base mb-5">
            Personal Organizer para mulheres 45+
          </p>
          <p className="font-body text-brand-black/70 leading-relaxed mb-3">
            Sou esposa, mãe, avó, e passei anos cuidando da casa sem perceber que organização era um talento real. Achava que todo mundo fazia assim.
          </p>
          <p className="font-body text-brand-black/70 leading-relaxed mb-3">
            Aos 49 anos, me formei Personal Organizer. E comecei a entender algo que mudou tudo: o problema das mulheres da minha geração nunca foi falta de vontade. Foi falta de um método feito para a fase de vida delas.
          </p>
          <p className="font-body text-brand-black/70 leading-relaxed mb-5">
            Criei este guia com tudo o que aprendi — para que você não precise mais improvisar, se sentir culpada ou achar que o problema é você.{" "}
            <strong className="text-brand-black">
              A casa pode ser leve. A rotina pode funcionar. E você merece sentir isso.
            </strong>
          </p>
          <ul className="flex flex-col gap-2 text-left">
            {[
              "Personal Organizer certificada",
              "Especialista em organização para mulheres 45+",
              "Criadora do Método dos 7 Dias",
            ].map((item, i) => (
              <li key={i} className="flex items-center gap-2 font-body text-brand-black/70 text-sm">
                <span className="text-[#6B8F63]">●</span> {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
