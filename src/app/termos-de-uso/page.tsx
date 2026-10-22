import Link from "next/link";

export const metadata = {
  title: "Termos de Uso | Fabiana Damiani",
  description: "Termos de Uso do Guia Prático da Casa Organizada em 7 Dias.",
};

export default function TermosDeUso() {
  return (
    <main className="bg-brand-white min-h-screen py-12 px-4 sm:px-6">
      <div className="max-w-3xl mx-auto">
        <Link
          href="/"
          className="inline-block font-body text-sm text-[#6B8F63] hover:underline mb-8"
        >
          ← Voltar para o início
        </Link>

        <h1 className="font-heading text-3xl sm:text-4xl text-brand-black font-bold mb-2">
          Termos de Uso
        </h1>
        <p className="font-body text-brand-black/50 text-sm mb-10">
          Última atualização: outubro de 2026
        </p>

        <div className="prose prose-sm sm:prose max-w-none font-body text-brand-black/80 space-y-8">

          <section>
            <h2 className="font-heading text-xl text-brand-black font-bold mb-3">
              1. Sobre o produto
            </h2>
            <p>
              O <strong>Guia Prático da Casa Organizada em 7 Dias</strong> é um produto
              digital (e-book + materiais complementares) desenvolvido por{" "}
              <strong>Fabiana Damiani</strong>, Personal Organizer. Ao realizar a compra,
              você concorda integralmente com estes Termos de Uso.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-xl text-brand-black font-bold mb-3">
              2. Acesso ao produto
            </h2>
            <p>
              Após a confirmação do pagamento, o acesso ao produto digital é liberado
              automaticamente pela plataforma <strong>Hotmart</strong>. Você receberá um
              e-mail com as instruções de acesso no endereço informado no momento da compra.
            </p>
            <p className="mt-2">
              O produto é de uso <strong>pessoal e intransferível</strong>. O compartilhamento
              das credenciais de acesso ou dos arquivos com terceiros é expressamente proibido.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-xl text-brand-black font-bold mb-3">
              3. Licença de uso
            </h2>
            <p>
              A compra concede ao usuário uma <strong>licença pessoal, não exclusiva e
              intransferível</strong> para uso do conteúdo. É expressamente vedado:
            </p>
            <ul className="list-disc pl-5 space-y-1 mt-2">
              <li>Reproduzir, copiar, distribuir ou compartilhar o conteúdo, total ou parcialmente.</li>
              <li>Utilizar o material para fins comerciais, incluindo revenda ou ensino.</li>
              <li>Publicar o conteúdo em plataformas públicas ou redes sociais.</li>
              <li>Remover avisos de direitos autorais ou marcas d&apos;água presentes nos arquivos.</li>
            </ul>
            <p className="mt-2">
              Todo o conteúdo é protegido pela <strong>Lei de Direitos Autorais
              (Lei nº 9.610/1998)</strong>.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-xl text-brand-black font-bold mb-3">
              4. Garantia e política de reembolso
            </h2>
            <p>
              Em conformidade com o <strong>Código de Defesa do Consumidor (CDC – Lei nº 8.078/1990)</strong>,
              artigo 49, você tem direito ao reembolso integral em até <strong>7 (sete) dias
              corridos</strong> a partir da data da compra, sem necessidade de justificativa.
            </p>
            <p className="mt-2">
              Para solicitar o reembolso, entre em contato diretamente com a plataforma
              Hotmart ou pelo e-mail indicado na seção de contato abaixo.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-xl text-brand-black font-bold mb-3">
              5. Resultados e limitação de responsabilidade
            </h2>
            <p>
              O Guia oferece um método estruturado de organização doméstica. Os resultados
              dependem do empenho, da consistência e das circunstâncias individuais de cada
              pessoa. <strong>Não garantimos resultados específicos</strong>, pois cada
              realidade é única.
            </p>
            <p className="mt-2">
              Fabiana Damiani não se responsabiliza por danos diretos ou indiretos
              decorrentes do uso ou da incapacidade de uso do produto.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-xl text-brand-black font-bold mb-3">
              6. Disponibilidade do produto
            </h2>
            <p>
              O acesso ao produto digital é disponibilizado por prazo indeterminado na
              plataforma Hotmart, sujeito às políticas de disponibilidade da própria
              plataforma. Recomendamos que você faça o download dos materiais após a compra.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-xl text-brand-black font-bold mb-3">
              7. Alterações nos Termos
            </h2>
            <p>
              Estes Termos podem ser atualizados a qualquer momento. A versão vigente estará
              sempre disponível nesta página, com a data da última atualização indicada no
              topo. O uso continuado do produto após alterações implica aceitação dos novos
              Termos.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-xl text-brand-black font-bold mb-3">
              8. Foro e lei aplicável
            </h2>
            <p>
              Estes Termos são regidos pela legislação brasileira. Para dirimir quaisquer
              controvérsias, fica eleito o foro da comarca do domicílio do consumidor,
              conforme previsto no CDC.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-xl text-brand-black font-bold mb-3">
              9. Contato
            </h2>
            <p>
              Em caso de dúvidas sobre estes Termos, entre em contato:
            </p>
            <p className="mt-2">
              <strong>Fabiana Damiani</strong><br />
              E-mail: <a href="mailto:contato@fabidamiani.com.br" className="text-[#6B8F63] hover:underline">contato@fabidamiani.com.br</a><br />
              Instagram: <a href="https://instagram.com/fabidamiani" target="_blank" rel="noopener noreferrer" className="text-[#6B8F63] hover:underline">@fabidamiani</a>
            </p>
          </section>

        </div>

        <div className="mt-12 pt-8 border-t border-brand-black/10 text-center">
          <Link href="/" className="font-body text-sm text-[#6B8F63] hover:underline">
            ← Voltar para o início
          </Link>
        </div>
      </div>
    </main>
  );
}
