import Image from "next/image";

export default function SolutionBridge() {
  return (
    <section className="bg-brand-white py-12 md:py-16 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-8 md:gap-10">
        <div className="flex-shrink-0 w-full max-w-[260px] sm:max-w-xs md:w-72">
          <div className="rounded-2xl overflow-hidden shadow-lg">
            <Image
              src="/images/fabi-reading.jpg"
              alt="Fabi lendo e aprendendo"
              width={400}
              height={500}
              className="object-cover w-full"
            />
          </div>
        </div>
        <div className="flex-1 text-center md:text-left">
          <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl text-brand-black font-bold mb-6">
            Existe um caminho diferente — feito para a sua realidade
          </h2>
          <p className="font-body text-brand-black/70 text-lg mb-4 leading-relaxed">
            Nada de métodos inflexíveis ou cobranças impossíveis.
          </p>
          <p className="font-body text-brand-black/70 text-lg leading-relaxed">
            Com <strong>pequenos passos diários</strong>, você pode recuperar o
            controle da casa — e da sua própria autoestima!
          </p>
          <div className="mt-8 p-4 bg-brand-green/20 rounded-xl border-l-4 border-brand-green">
            <p className="font-body text-brand-black italic">
              "Uma casa organizada não depende de perfeição — depende de
              intenção e método."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
