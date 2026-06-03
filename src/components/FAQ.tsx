"use client";

import { useState } from "react";

const faqs = [
  {
    q: "Fico com acesso aos bônus também?",
    a: "Sim! Todos os bônus são seus para sempre, junto com o e-book principal.",
  },
  {
    q: "Preciso começar exatamente em uma segunda-feira?",
    a: "Não! O método se encaixa em qualquer dia — adapte ao seu ritmo.",
  },
  {
    q: "Não consigo fazer todos os dias, perco o resultado?",
    a: "Não! É flexível: avance no seu tempo, sem culpa. O guia foi feito para a vida real.",
  },
  {
    q: "Serve para casa pequena ou apartamento?",
    a: "Sim — as dicas cabem em qualquer lar, seja grande ou pequeno!",
  },
  {
    q: "E se eu não gostar?",
    a: "Você tem 7 dias de garantia incondicional. Se não sentir mais controle ou leveza, envie um e-mail e devolvo seu dinheiro.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="bg-brand-white py-12 md:py-16 px-4 sm:px-6">
      <div className="max-w-3xl mx-auto">
        <h2 className="font-heading text-2xl sm:text-3xl text-brand-black text-center font-bold mb-3">
          Perguntas frequentes
        </h2>
        <p className="font-body text-brand-green text-center mb-10">
          Dúvidas? Converse comigo no{" "}
          <a
            href="https://wa.me/55"
            className="text-brand-green underline font-semibold hover:text-brand-black transition-colors"
          >
            WhatsApp
          </a>
        </p>
        <div className="flex flex-col gap-3">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="bg-white rounded-xl shadow-sm overflow-hidden"
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between px-6 py-4 text-left font-body font-semibold text-brand-black hover:bg-brand-green/10 transition-colors"
              >
                <span>{faq.q}</span>
                <span className="text-brand-green text-xl ml-4 flex-shrink-0">
                  {open === i ? "−" : "+"}
                </span>
              </button>
              {open === i && (
                <div className="px-6 pb-4 font-body text-brand-black/70 leading-relaxed">
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
