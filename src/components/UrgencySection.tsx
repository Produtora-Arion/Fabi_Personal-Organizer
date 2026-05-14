export default function UrgencySection() {
  return (
    <section className="bg-cream py-16 px-6">
      <div className="max-w-2xl mx-auto text-center">
        <p className="font-body text-sage-dark text-sm uppercase tracking-widest mb-4">
          Uma pergunta honesta
        </p>
        <h2 className="font-heading text-3xl md:text-4xl text-olive-deep font-bold mb-6">
          Se você não começar hoje, quando começará?
        </h2>
        <p className="font-body text-gray-700 text-lg leading-relaxed mb-8">
          Seu novo ciclo de organização e autocuidado pode começar agora —{" "}
          <strong>com apoio, método e zero cobrança de perfeição.</strong>
        </p>
        <a
          href="#comprar"
          className="inline-block bg-sage-dark hover:bg-olive-deep text-white font-body font-bold text-lg px-8 py-4 rounded-full transition-colors"
        >
          Quero começar agora →
        </a>
      </div>
    </section>
  );
}
