import Link from "next/link";

export const metadata = {
  title: "Política de Privacidade | Fabiana Damiani",
  description: "Política de Privacidade do Guia Prático da Casa Organizada em 7 Dias.",
};

export default function PoliticaPrivacidade() {
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
          Política de Privacidade
        </h1>
        <p className="font-body text-brand-black/50 text-sm mb-10">
          Última atualização: outubro de 2026
        </p>

        <div className="prose prose-sm sm:prose max-w-none font-body text-brand-black/80 space-y-8">

          <section>
            <h2 className="font-heading text-xl text-brand-black font-bold mb-3">
              1. Quem somos
            </h2>
            <p>
              Esta Política de Privacidade se aplica ao site e aos produtos digitais
              comercializados por <strong>Fabiana Damiani</strong>, Personal Organizer,
              doravante denominada &ldquo;nós&rdquo; ou &ldquo;Responsável pelo Tratamento&rdquo;.
              Estamos comprometidos com a proteção dos seus dados pessoais em conformidade
              com a <strong>Lei Geral de Proteção de Dados (LGPD – Lei nº 13.709/2018)</strong>.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-xl text-brand-black font-bold mb-3">
              2. Quais dados coletamos
            </h2>
            <p>Podemos coletar as seguintes categorias de dados:</p>
            <ul className="list-disc pl-5 space-y-1 mt-2">
              <li><strong>Dados de identificação:</strong> nome completo e endereço de e-mail, fornecidos no momento da compra.</li>
              <li><strong>Dados de pagamento:</strong> processados exclusivamente pela plataforma <strong>Hotmart</strong>. Não armazenamos dados de cartão de crédito.</li>
              <li><strong>Dados de navegação:</strong> endereço IP, páginas visitadas, tempo de permanência e interações na página, coletados via Google Tag Manager / Google Analytics e pixels de anúncios (Meta Ads).</li>
              <li><strong>Cookies:</strong> utilizamos cookies essenciais para o funcionamento do site e cookies analíticos para mensurar o desempenho das campanhas.</li>
            </ul>
          </section>

          <section>
            <h2 className="font-heading text-xl text-brand-black font-bold mb-3">
              3. Para que usamos seus dados
            </h2>
            <ul className="list-disc pl-5 space-y-1 mt-2">
              <li>Processar e entregar o produto digital adquirido.</li>
              <li>Enviar e-mails transacionais (confirmação de compra e acesso ao produto).</li>
              <li>Enviar comunicações de marketing e novidades, desde que você não solicite descadastro.</li>
              <li>Mensurar o desempenho de campanhas publicitárias e melhorar a experiência do site.</li>
              <li>Cumprir obrigações legais e fiscais.</li>
            </ul>
          </section>

          <section>
            <h2 className="font-heading text-xl text-brand-black font-bold mb-3">
              4. Base legal para o tratamento
            </h2>
            <p>
              O tratamento dos seus dados é realizado com base nas seguintes hipóteses
              previstas na LGPD:
            </p>
            <ul className="list-disc pl-5 space-y-1 mt-2">
              <li><strong>Execução de contrato:</strong> para entregar o produto comprado.</li>
              <li><strong>Consentimento:</strong> para envio de comunicações de marketing.</li>
              <li><strong>Legítimo interesse:</strong> para mensuração de campanhas e melhoria do site.</li>
              <li><strong>Obrigação legal:</strong> para cumprimento de deveres fiscais e contábeis.</li>
            </ul>
          </section>

          <section>
            <h2 className="font-heading text-xl text-brand-black font-bold mb-3">
              5. Com quem compartilhamos seus dados
            </h2>
            <p>Seus dados podem ser compartilhados com:</p>
            <ul className="list-disc pl-5 space-y-1 mt-2">
              <li><strong>Hotmart:</strong> plataforma de pagamento e entrega do produto digital.</li>
              <li><strong>Google:</strong> para análise de tráfego (Google Analytics) e veiculação de anúncios.</li>
              <li><strong>Meta (Facebook/Instagram):</strong> para veiculação e mensuração de anúncios.</li>
            </ul>
            <p className="mt-2">
              Não vendemos nem alugamos seus dados a terceiros.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-xl text-brand-black font-bold mb-3">
              6. Por quanto tempo guardamos seus dados
            </h2>
            <p>
              Mantemos seus dados pelo tempo necessário para cumprir as finalidades descritas
              nesta Política ou enquanto obrigados por lei. Dados de compra são mantidos por
              até 5 (cinco) anos para fins fiscais, conforme legislação brasileira.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-xl text-brand-black font-bold mb-3">
              7. Seus direitos como titular
            </h2>
            <p>
              Em conformidade com a LGPD, você tem direito a:
            </p>
            <ul className="list-disc pl-5 space-y-1 mt-2">
              <li>Confirmar se tratamos seus dados e acessá-los.</li>
              <li>Corrigir dados incompletos, inexatos ou desatualizados.</li>
              <li>Solicitar a anonimização, bloqueio ou eliminação de dados desnecessários.</li>
              <li>Solicitar a portabilidade dos seus dados.</li>
              <li>Revogar o consentimento para comunicações de marketing a qualquer momento.</li>
            </ul>
            <p className="mt-2">
              Para exercer qualquer desses direitos, entre em contato pelo e-mail abaixo.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-xl text-brand-black font-bold mb-3">
              8. Cookies
            </h2>
            <p>
              Utilizamos cookies para melhorar sua experiência e mensurar o desempenho do
              site. Você pode desativar cookies nas configurações do seu navegador, mas isso
              pode afetar o funcionamento de algumas partes do site.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-xl text-brand-black font-bold mb-3">
              9. Segurança dos dados
            </h2>
            <p>
              Adotamos medidas técnicas e organizacionais adequadas para proteger seus dados
              contra acesso não autorizado, perda ou destruição. Transações financeiras são
              processadas pela Hotmart com criptografia SSL.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-xl text-brand-black font-bold mb-3">
              10. Alterações nesta Política
            </h2>
            <p>
              Podemos atualizar esta Política periodicamente. A data da última atualização
              estará sempre indicada no topo desta página. Recomendamos que você a revise
              regularmente.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-xl text-brand-black font-bold mb-3">
              11. Contato
            </h2>
            <p>
              Para dúvidas, solicitações ou exercício dos seus direitos, entre em contato:
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
