import Image from "next/image";

const items = [
  {
    tag: "EBOOK DIGITAL",
    tagColor: "bg-[#A8C5A0]/30 text-[#5a7a52]",
    title: "Guia prático da casa organizada em 7 dias.",
    price: "R$ 197,00",
    isEbook: true,
  },
  {
    tag: "BÔNUS 1",
    tagColor: "bg-brand-green text-white",
    title: "Organizadores inteligentes que você já tem em casa",
    price: "R$ 197,00",
    isEbook: false,
  },
  {
    tag: "BÔNUS 2",
    tagColor: "bg-brand-green text-white",
    title: "Pequenos detalhes que transformam uma casa em lar",
    price: "R$ 67,00",
    isEbook: false,
  },
  {
    tag: "BÔNUS 3",
    tagColor: "bg-brand-green text-white",
    title: "A mesa do dia a dia — pequenos gestos que fortalecem a família",
    price: "R$ 67,00",
    isEbook: false,
  },
];

export default function ValueAnchor() {
  return (
    <section className="bg-brand-white py-12 md:py-16 px-4 sm:px-6">
      <div className="max-w-3xl mx-auto">
        <h2 className="font-heading text-2xl sm:text-3xl text-brand-black font-bold text-center mb-8 sm:mb-10">
          Tudo que você vai Ganhar ao Adquirir o Guia:
        </h2>

        <div className="flex flex-col gap-3 sm:gap-4 mb-8 sm:mb-10">
          {items.map((item, i) => (
            <div
              key={i}
              className="flex items-center gap-3 sm:gap-4 bg-[#fdf5ef] rounded-2xl p-3 sm:p-4"
            >
              <div className="flex-shrink-0 w-12 h-12 sm:w-16 sm:h-16 relative">
                <Image
                  src={item.isEbook ? "/images/fabi-reading.jpg" : "/images/gift-box.png"}
                  alt={item.isEbook ? "E-book" : "Bônus"}
                  width={64}
                  height={64}
                  className={item.isEbook ? "object-cover w-full h-full rounded-xl" : "object-contain w-full h-full"}
                />
              </div>
              <div className="flex-1 min-w-0">
                <span className={`inline-block text-[10px] sm:text-xs font-body font-bold px-2 sm:px-3 py-0.5 sm:py-1 rounded-full mb-1 ${item.tagColor}`}>
                  {item.tag}
                </span>
                <p className="font-body text-brand-black font-medium leading-snug text-xs sm:text-sm">
                  {item.title}
                </p>
              </div>
              <div className="flex-shrink-0 text-right ml-1">
                <p className="font-body text-brand-black/50 line-through text-sm sm:text-base font-semibold whitespace-nowrap">
                  {item.price}
                </p>
              </div>
            </div>
          ))}
        </div>

        <p className="font-heading text-xl sm:text-2xl md:text-3xl text-brand-black font-bold text-center leading-snug">
          O custo total desses itens seria R$ 398,00. Mas<br className="hidden sm:block" />
          hoje você vai ter acesso por apenas:
        </p>
      </div>
    </section>
  );
}
