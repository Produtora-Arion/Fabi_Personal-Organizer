export default function UrgencySection() {
  return (
    <section className="bg-brand-white py-12 md:py-16 px-4 sm:px-6">
      <div className="max-w-2xl mx-auto text-center">
        <p className="font-body text-brand-green text-sm uppercase tracking-widest mb-4">
          Uma pergunta honesta
        </p>
        <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl text-brand-black font-bold mb-6">
          Se você não começar hoje, quando começará?
        </h2>
        <p className="font-body text-brand-black/70 text-lg leading-relaxed mb-8">
          Seu novo ciclo de organização e autocuidado pode começar agora —{" "}
          <strong>com apoio, método e zero cobrança de perfeição.</strong>
        </p>
        <a
          href="https://pay.hotmart.com/R106904683K"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-brand-green hover:bg-brand-green/80 text-brand-black font-body font-bold text-lg px-8 py-4 rounded-full transition-colors"
        >
          Quero começar agora →
        </a>
      </div>
    </section>
  );
}
