export default function ValueAnchor() {
  return (
    <section className="bg-cream-dark py-16 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="font-heading text-3xl text-olive-deep font-bold mb-6">
          Quanto vale recuperar o controle da sua vida?
        </h2>
        <div className="bg-white rounded-2xl p-8 shadow-sm mb-8">
          <div className="flex flex-col md:flex-row items-center gap-6 justify-center">
            <div className="text-center p-6 border border-gray-200 rounded-xl flex-1">
              <p className="font-body text-sm text-gray-500 mb-2">
                Consultoria personalizada
              </p>
              <p className="font-heading text-4xl text-gray-400 line-through">
                R$ 300+
              </p>
              <p className="font-body text-xs text-gray-400 mt-1">
                + produtos organizadores + horas de adaptação
              </p>
            </div>
            <div className="text-4xl text-sage-dark font-heading">vs</div>
            <div className="text-center p-6 bg-sage-dark rounded-xl flex-1 text-white">
              <p className="font-body text-sm text-white/80 mb-2">
                Guia Prático da Casa Organizada
              </p>
              <p className="font-heading text-4xl font-bold text-gold">
                R$ 47,00
              </p>
              <p className="font-body text-xs text-white/70 mt-1">
                + 3 bônus exclusivos inclusos
              </p>
            </div>
          </div>
        </div>
        <p className="font-body text-gray-700 text-lg leading-relaxed">
          Aqui, você recebe um plano completo criado especialmente para sua
          realidade — por uma fração do preço de uma consultoria.
        </p>
      </div>
    </section>
  );
}
