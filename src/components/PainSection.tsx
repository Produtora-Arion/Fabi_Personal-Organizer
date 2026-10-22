import Image from "next/image";

type BubbleProps = {
  text: string;
  bold: string;
  textAfter?: string;
  emoji: string;
};

function QuoteBubble({ text, bold, textAfter, emoji }: BubbleProps) {
  return (
    <div className="bg-white rounded-2xl p-3 md:p-4 shadow-sm relative">
      <span className="text-[#6B8F63] font-heading text-xl md:text-2xl leading-none block mb-1">&ldquo;</span>
      <p className="font-body text-brand-black text-xs md:text-sm leading-relaxed">
        {text} <strong>{bold}</strong>{textAfter}
      </p>
      <div className="absolute -top-3 -right-2 md:-top-4 md:-right-3 w-7 h-7 md:w-9 md:h-9">
        <Image src={emoji} alt="" width={36} height={36} className="w-full h-full object-contain" />
      </div>
    </div>
  );
}

export default function PainSection() {
  return (
    <section className="bg-[#95B08F] py-14 md:py-20 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold text-brand-black text-center mb-10 md:mb-14 leading-snug">
          Eu sei que você está cansada de ter sua casa bagunçada. Por isso,
          <br className="hidden sm:block" /> toda vez que você olha pra bagunça, você pensa:
        </h2>

        {/* Desktop: mulher ao fundo, cards flutuando ao redor */}
        <div className="hidden md:block relative max-w-4xl mx-auto mb-10 h-[560px] lg:h-[620px]">
          {/* Mulher — fill proporcional dentro do container */}
          <div className="absolute inset-0 z-0 pointer-events-none">
            <Image
              src="/images/mulher-preocupada.png"
              alt="Mulher sobrecarregada e preocupada"
              fill
              className="object-contain object-top"
            />
          </div>

          {/* Card 1 — topo esquerdo */}
          <div className="absolute top-[5%] left-0 w-[200px] lg:w-[215px] z-10">
            <QuoteBubble
              text="Toda vez que eu olho pra bagunça, fico com"
              bold="vontade de largar tudo"
              emoji="/images/emoji-1.png"
            />
          </div>

          {/* Card 2 — topo direito, levemente mais baixo */}
          <div className="absolute top-[13%] right-0 w-[200px] lg:w-[215px] z-10">
            <QuoteBubble
              text="Toda vez que visita chega, fico com"
              bold="vergonha da minha própria casa"
              emoji="/images/emoji-2.png"
            />
          </div>

          {/* Card 3 — meio-baixo esquerdo */}
          <div className="absolute top-[55%] left-0 w-[200px] lg:w-[215px] z-10">
            <QuoteBubble
              text="Já tentei mil métodos."
              bold="Nenhum durou mais de uma semana"
              emoji="/images/emoji-3.png"
            />
          </div>

          {/* Card 4 — meio-baixo direito, ligeiramente mais alto */}
          <div className="absolute top-[49%] right-0 w-[200px] lg:w-[215px] z-10">
            <QuoteBubble
              text="Faço tudo sozinha e"
              bold="ninguém ajuda"
              textAfter=". É desgastante demais."
              emoji="/images/emoji-4.png"
            />
          </div>

          {/* Card 5 — base central */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[260px] z-10">
            <QuoteBubble
              text="Arrumo e logo"
              bold="volta tudo"
              textAfter=". Parece que vivo apagando incêndio."
              emoji="/images/emoji-5.png"
            />
          </div>
        </div>

        {/* Mobile: todos os 5 cards flutuando sobre imagem grande */}
        <div className="md:hidden mb-8">
          <div className="relative h-[500px]">

            {/* Mulher — imagem grande de fundo */}
            <div className="absolute inset-0 z-0 pointer-events-none">
              <Image
                src="/images/mulher-preocupada.png"
                alt="Mulher sobrecarregada e preocupada"
                fill
                className="object-contain object-center"
              />
            </div>

            {/* Card 1 — topo esquerdo */}
            <div className="absolute top-2 left-1 w-[44%] z-10">
              <QuoteBubble text="Olho pra bagunça e fico com" bold="vontade de largar tudo" emoji="/images/emoji-1.png" />
            </div>

            {/* Card 2 — topo direito, levemente mais baixo */}
            <div className="absolute top-12 right-1 w-[44%] z-10">
              <QuoteBubble text="Quando visita chega, sinto" bold="vergonha da minha própria casa" emoji="/images/emoji-2.png" />
            </div>

            {/* Card 3 — meio-baixo esquerdo */}
            <div className="absolute top-[52%] left-1 w-[44%] z-10">
              <QuoteBubble text="Tentei mil métodos." bold="Nenhum durou uma semana" emoji="/images/emoji-3.png" />
            </div>

            {/* Card 4 — meio-baixo direito */}
            <div className="absolute top-[62%] right-1 w-[44%] z-10">
              <QuoteBubble text="Faço tudo sozinha e" bold="ninguém ajuda" textAfter=". É desgastante." emoji="/images/emoji-4.png" />
            </div>

            {/* Card 5 — base centralizado */}
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-[52%] z-10">
              <QuoteBubble text="Arrumo e logo" bold="volta tudo" textAfter=". Vivo apagando incêndio." emoji="/images/emoji-5.png" />
            </div>
          </div>
        </div>

        {/* Box inferior */}
        <div className="bg-[#FAF7F2] rounded-2xl px-6 sm:px-10 py-8 text-center max-w-3xl mx-auto">
          <h3 className="font-heading text-xl sm:text-2xl md:text-3xl text-brand-black font-bold mb-4">
            É horrível se sentir assim, né?
          </h3>
          <p className="font-body text-brand-black/70 leading-relaxed mb-4">
            Não ter tempo pra cuidar da casa, ela sempre bagunçada — e parece que você nunca tem paz.
          </p>
          <p className="font-body text-[#6B8F63] italic font-semibold">
            Eu tenho certeza que você não quer mais passar por isso.
          </p>
        </div>
      </div>
    </section>
  );
}
