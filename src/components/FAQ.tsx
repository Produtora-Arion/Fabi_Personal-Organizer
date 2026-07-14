"use client";

import { useState } from "react";

const faqs = [
  {
    q: "O que é o Guia Prático da Casa Organizada em 7 Dias?",
    a: "É um e-book digital em PDF com um método testado para organizar sua casa em 7 dias, um cômodo por dia, com linguagem acolhedora e sem perfeccionismo. Inclui checklists exclusivos e orientações para mulheres 45+.",
  },
  {
    q: "Quanto tempo leva para ter resultado?",
    a: "Já no primeiro dia você sente o impacto de trabalhar com foco. Em 7 dias, sua casa estará reorganizada com método. E a partir daí, manter fica muito mais fácil.",
  },
  {
    q: "Já tentei me organizar antes e não deu certo. Por que dessa vez seria diferente?",
    a: "Porque este guia foi feito para a realidade de mulheres 45+. Não é um método genérico: considera o cansaço, a falta de ajuda e o ritmo do corpo. Você não precisa de mais esforço — precisa do método certo.",
  },
  {
    q: "Preciso começar numa segunda-feira ou em um dia específico?",
    a: "Não! O método se encaixa em qualquer dia — adapte ao seu ritmo e comece quando quiser.",
  },
  {
    q: "E se eu não conseguir fazer todos os dias?",
    a: "Não tem problema! O guia é flexível. Avance no seu tempo, sem culpa. Foi feito para a vida real, não para a vida perfeita.",
  },
  {
    q: "Serve para casa pequena ou apartamento?",
    a: "Sim! As dicas e o método se adaptam a qualquer lar, grande ou pequeno, casa ou apartamento.",
  },
  {
    q: "Preciso comprar organizadores ou produtos especiais?",
    a: "Não! Um dos bônus ensina exatamente como usar o que você já tem em casa. Organização não depende de gastar mais.",
  },
  {
    q: "Fico com acesso aos bônus também?",
    a: "Sim! Todos os 3 bônus são seus para sempre, junto com o e-book principal. Acesso imediato e vitalício.",
  },
  {
    q: "Como recebo o guia?",
    a: "Após a confirmação do pagamento, você recebe o acesso por e-mail imediatamente. É tudo digital — sem espera, sem frete.",
  },
  {
    q: "E se eu não gostar?",
    a: "Você tem 7 dias de garantia incondicional. Se não sentir mais controle ou leveza na sua rotina, basta enviar um e-mail e devolvemos seu dinheiro — sem perguntas, sem burocracia.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="bg-brand-white py-12 md:py-16 px-4 sm:px-6">
      <div className="max-w-3xl mx-auto">
        <h2 className="font-heading text-2xl sm:text-3xl text-brand-black text-center font-bold mb-3">
          Perguntas Frequentes
        </h2>
        <p className="font-body text-[#6B8F63] text-center mb-10">
          Dúvidas? Fale comigo no{" "}
          <a
            href="https://wa.me/55"
            className="text-[#6B8F63] underline font-semibold hover:text-brand-black transition-colors"
          >
            WhatsApp
          </a>
        </p>
        <div className="flex flex-col gap-2">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-100"
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between px-5 py-4 text-left font-body font-semibold text-brand-black hover:bg-brand-green/10 transition-colors text-sm sm:text-base"
              >
                <span>{faq.q}</span>
                <span className="text-[#6B8F63] text-xl ml-4 flex-shrink-0">
                  {open === i ? "−" : "+"}
                </span>
              </button>
              {open === i && (
                <div className="px-5 pb-4 font-body text-brand-black/70 leading-relaxed text-sm sm:text-base">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
