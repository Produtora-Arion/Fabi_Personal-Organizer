import Image from "next/image";

export default function SolutionBridge() {
  return (
    <section className="bg-cream py-16 px-6">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-10">
        <div className="flex-shrink-0 w-64 md:w-72">
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
          <h2 className="font-heading text-3xl md:text-4xl text-olive-deep font-bold mb-6">
            Existe um caminho diferente — feito para a sua realidade
          </h2>
          <p className="font-body text-gray-700 text-lg mb-4 leading-relaxed">
            Nada de métodos inflexíveis ou cobranças impossíveis.
          </p>
          <p className="font-body text-gray-700 text-lg leading-relaxed">
            Com <strong>pequenos passos diários</strong>, você pode recuperar o
            controle da casa — e da sua própria autoestima!
          </p>
          <div className="mt-8 p-4 bg-sage-light/20 rounded-xl border-l-4 border-sage-dark">
            <p className="font-body text-olive-deep italic">
              "Uma casa organizada não depende de perfeição — depende de
              intenção e método."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
