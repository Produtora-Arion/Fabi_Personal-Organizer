export default function SolutionBridge() {
  return (
    <section className="bg-[#EBF2E8] py-12 md:py-16 px-4 sm:px-6">
      <div className="max-w-3xl mx-auto">
        {/* Ícone animado sobrepondo o card */}
        <div className="flex justify-center relative z-10 -mb-9">
          <div className="animate-bounce drop-shadow-xl">
            <svg width="70" height="62" viewBox="0 0 70 62" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M35 4L66 58H4L35 4Z" fill="#F5C518" stroke="#F5C518" strokeLinejoin="round" strokeWidth="2"/>
              <rect x="32" y="20" width="6" height="20" rx="3" fill="#1a1a1a"/>
              <circle cx="35" cy="49" r="3.5" fill="#1a1a1a"/>
            </svg>
          </div>
        </div>
        <div className="bg-[#6B8F63] rounded-2xl pt-12 pb-8 px-6 sm:px-8 text-center text-white">
          <p className="font-body text-white/70 text-xs sm:text-sm uppercase tracking-widest mb-3">
            Entenda de uma vez por todas...
          </p>
          <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold mb-6 leading-tight">
            Isso só acontece porque você não tem um método feito para a sua realidade
          </h2>
          <p className="font-body text-white/80 leading-relaxed mb-4">
            Você não está errando. Você está tentando se organizar no improviso, com força de vontade que já não tem mais como antes.
          </p>
          <p className="font-body text-white font-bold mb-4">
            Não é falta de disciplina. Não é preguiça.
          </p>
          <p className="font-body text-white/80 leading-relaxed mb-4">
            Antes você tinha mais energia e fazia tudo no braço. Hoje seu corpo mudou, sua rotina mudou, sua fase de vida mudou.
          </p>
          <p className="font-body text-white font-bold">
            O que você precisa não é de mais esforço. É de estratégia.
          </p>
        </div>
      </div>
    </section>
  );
}
