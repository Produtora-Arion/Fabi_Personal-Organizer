import Image from "next/image";

const items = [
  {
    number: "01",
    title: "Transforme sua casa em 7 dias — um cômodo por dia, no seu ritmo",
    desc: "O e-book completo com roteiro diário por ambiente, checklists de ação e linguagem feita para mulheres 45+ — sem jargões, sem pressão, sem perfeccionismo. Você começa hoje e sente a diferença já na primeira semana.",
    price: "R$127,00",
    image: "/images/mockup-nobg.png",
    imageAlt: "E-book Guia Prático da Casa Organizada",
    imageBg: "#95B08F",
  },
  {
    number: "02",
    title: "Organize sem gastar nada — com o que você já tem em casa",
    desc: "Descubra como criar soluções criativas usando caixas, potes, bandejas e itens que você já possui. Reduza custos e ganhe liberdade para organizar do seu jeito — porque o problema nunca foi falta de organizador.",
    price: "R$67,00",
    image: "/images/frame-organizadores.png",
    imageAlt: "Organizadores inteligentes com o que você já tem",
    imageBg: "#A8C5A0",
  },
  {
    number: "03",
    title: "Faça sua casa ter alma — não só organização",
    desc: "Com flores, velas, aromas e pequenos gestos de acolhimento, seu lar deixa de ser apenas arrumado e passa a te fazer sentir bem. Porque entrar em casa e querer ficar é tudo.",
    price: "R$67,00",
    image: "/images/0930240b8806e862fceb52c1a6a04707f723c8b1.png",
    imageAlt: "Casa cheirosa e acolhedora",
    imageBg: "#B8CCAA",
  },
  {
    number: "04",
    title: "A mesa do dia a dia: pequenos gestos que fortalecem a família",
    desc: "Reconecte-se com quem você ama através de conversas e momentos simples à mesa. Ideias práticas para criar laços sem exigir tempo nem esforço extra — para quem quer uma casa que acolhe, não só que impressiona.",
    price: "R$67,00",
    image: "/images/0ba827fe39e4a72ae35a3ce4c47463bf6f1101a3.png",
    imageAlt: "Mesa que fortalece a família",
    imageBg: "#C4D5B5",
  },
  {
    number: "05",
    title: "Nunca mais fique em dúvida sobre por onde começar",
    desc: "Checklists prontos para cada ambiente — Cozinha, Quartos, Banheiro, Sala, Lavanderia. Uma sequência clara de ações que você imprime ou usa no celular. Só marcar conforme termina.",
    price: "R$27,00",
    image: "/images/checklist-ipad.png",
    imageAlt: "Checklist de cada ambiente no iPad",
    imageBg: "#D6C9B0",
  },
];

export default function WhatYouGet() {
  return (
    <section className="bg-brand-white py-12 md:py-16 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl text-brand-black font-bold text-center mb-10 sm:mb-12">
          Veja tudo o que você vai receber ao adquirir o Guia
        </h2>
        <div className="flex flex-col gap-10 sm:gap-14">
          {items.map((item, i) => (
            <div
              key={i}
              className={`flex flex-col ${i % 2 === 0 ? "sm:flex-row" : "sm:flex-row-reverse"} items-center gap-6 sm:gap-10`}
            >
              <div className="w-full sm:w-5/12 flex-shrink-0">
                <div
                  className="rounded-2xl overflow-hidden h-48 sm:h-56 md:h-64 flex items-center justify-center"
                  style={{ backgroundColor: item.imageBg }}
                >
                  {item.image ? (
                    <Image
                      src={item.image}
                      alt={item.imageAlt}
                      width={400}
                      height={300}
                      className="object-cover w-full h-full"
                    />
                  ) : (
                    <span className="font-heading text-white text-7xl font-bold opacity-20">
                      {item.number}
                    </span>
                  )}
                </div>
              </div>
              <div className="w-full sm:w-7/12">
                <span className="font-heading text-[#A8C5A0] text-4xl sm:text-5xl font-bold block mb-2">
                  {item.number}
                </span>
                <h3 className="font-heading text-xl sm:text-2xl text-brand-black font-bold mb-3 leading-snug">
                  {item.title}
                </h3>
                <p className="font-body text-brand-black/70 leading-relaxed text-sm sm:text-base mb-3">
                  {item.desc}
                </p>
                <p className="font-body text-brand-black/40 line-through text-sm font-semibold">
                  {item.price}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
