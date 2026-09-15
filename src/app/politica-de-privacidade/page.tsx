import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Política de Privacidade | Fabi",
  description:
    "Como o site fabidamiani.com.br coleta, usa e protege seus dados pessoais.",
};

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="mb-8">
      <h2 className="font-heading text-xl sm:text-2xl text-brand-black font-bold mb-3">
        {title}
      </h2>
      <div className="font-body text-brand-black/75 leading-relaxed text-sm sm:text-base flex flex-col gap-3">
        {children}
      </div>
    </section>
  );
}

export default function PoliticaDePrivacidade() {
  return (
    <main>
      <Header />

      <div className="bg-brand-white py-12 md:py-16 px-4 sm:px-6">
        <div className="max-w-3xl mx-auto">
          <h1 className="font-heading text-3xl sm:text-4xl text-brand-black font-bold mb-2">
            Política de Privacidade
          </h1>
          <p className="font-body text-brand-black/50 text-sm mb-10">
            Última atualização: 15 de setembro de 2026
          </p>

          <Section title="1. Quem somos">
            <p>
              Este site (fabidamiani.com.br) é operado por Fabiana Damiani,
              Personal Organizer, responsável pelo produto digital{" "}
              <strong>&quot;Guia Prático da Casa Organizada em 7 Dias&quot;</strong>.
              Esta política explica quais dados coletamos de quem visita o
              site ou compra o produto, para que usamos essas informações e
              quais direitos você tem sobre elas, em conformidade com a Lei
              Geral de Proteção de Dados (Lei nº 13.709/2018 — LGPD).
            </p>
          </Section>

          <Section title="2. Quais dados coletamos">
            <p>
              <strong>Dados que você nos informa diretamente:</strong> nome,
              e-mail e, quando aplicável, telefone — fornecidos por você no
              momento da compra, na página de checkout.
            </p>
            <p>
              <strong>Dados coletados automaticamente:</strong> páginas
              visitadas, botões clicados, tempo de navegação, origem do
              acesso (por exemplo, se você chegou por um anúncio, de qual
              anúncio, ou se veio direto pelo link do Instagram), tipo de
              dispositivo e navegador, e um identificador anônimo de visita
              gerado por cookie — usado só para entender o comportamento de
              navegação, nunca para identificar você pessoalmente por esse
              meio isolado.
            </p>
          </Section>

          <Section title="3. Como coletamos">
            <p>
              Usamos ferramentas de terceiros para medir o desempenho do
              site e dos anúncios:
            </p>
            <ul className="list-disc pl-5 flex flex-col gap-1.5">
              <li>
                <strong>Meta Pixel e API de Conversões (Meta/Instagram)</strong>{" "}
                — mede quem chegou pelos anúncios e, quando uma compra é
                aprovada, informa isso de volta ao Meta para otimizar a
                entrega dos anúncios.
              </li>
              <li>
                <strong>Google Tag Manager</strong> — organiza as tags de
                mensuração do site.
              </li>
              <li>
                <strong>Rastreamento próprio</strong> — um script leve, operado
                pela nossa agência de tráfego (Produtora Arion), que registra
                acessos e cliques de forma agregada, sem coletar dados
                sensíveis.
              </li>
            </ul>
          </Section>

          <Section title="4. Para que usamos seus dados">
            <ul className="list-disc pl-5 flex flex-col gap-1.5">
              <li>Processar sua compra e liberar o acesso ao e-book e aos bônus;</li>
              <li>Enviar comunicações relacionadas à sua compra (confirmação, acesso, suporte, garantia);</li>
              <li>Entender de onde vêm nossos visitantes e clientes, para investir melhor em anúncios;</li>
              <li>Melhorar o conteúdo e a experiência do site com base no que funciona.</li>
            </ul>
            <p>Não vendemos seus dados pessoais a terceiros.</p>
          </Section>

          <Section title="5. Com quem compartilhamos">
            <ul className="list-disc pl-5 flex flex-col gap-1.5">
              <li>
                <strong>Hotmart</strong> — plataforma que processa o
                pagamento e entrega o produto digital. Seus dados de compra
                (nome, e-mail, pagamento) são tratados diretamente por ela,
                conforme a{" "}
                <a
                  href="https://www.hotmart.com/pt-br/privacy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline text-[#6B8F63] hover:text-brand-black"
                >
                  política de privacidade da Hotmart
                </a>
                ;
              </li>
              <li>
                <strong>Meta (Facebook/Instagram)</strong> e{" "}
                <strong>Google</strong> — recebem dados de navegação e, em
                caso de compra aprovada, um evento de conversão (sem detalhes
                do pagamento), para mensuração e otimização de anúncios;
              </li>
              <li>
                <strong>Produtora Arion</strong> — nossa agência de tráfego,
                que opera a infraestrutura técnica de rastreamento e
                mensuração descrita acima.
              </li>
            </ul>
          </Section>

          <Section title="6. Cookies">
            <p>
              Usamos cookies para lembrar sua visita entre páginas e medir a
              origem do acesso. Você pode bloquear ou apagar cookies nas
              configurações do seu navegador a qualquer momento — isso pode
              afetar algumas funcionalidades de mensuração, mas não impede o
              acesso ao conteúdo do site.
            </p>
          </Section>

          <Section title="7. Por quanto tempo guardamos seus dados">
            <p>
              Dados de compra são mantidos pelo tempo exigido pela legislação
              fiscal e para fins de garantia e suporte. Dados de navegação
              (acessos e cliques) ficam armazenados por um período
              relacionado à análise de campanhas, após o qual são mantidos
              apenas de forma agregada, sem identificação individual.
            </p>
          </Section>

          <Section title="8. Seus direitos (LGPD)">
            <p>Você pode, a qualquer momento, solicitar:</p>
            <ul className="list-disc pl-5 flex flex-col gap-1.5">
              <li>Confirmação de que tratamos seus dados, e acesso a eles;</li>
              <li>Correção de dados incompletos, inexatos ou desatualizados;</li>
              <li>Exclusão dos seus dados pessoais, quando aplicável;</li>
              <li>Revogação do consentimento e informação sobre com quem compartilhamos seus dados.</li>
            </ul>
            <p>
              Para exercer qualquer um desses direitos, entre em contato pelo
              Instagram{" "}
              <a
                href="https://instagram.com/fabidamiani"
                target="_blank"
                rel="noopener noreferrer"
                className="underline text-[#6B8F63] hover:text-brand-black"
              >
                @fabidamiani
              </a>{" "}
              ou pelo e-mail de suporte informado na confirmação da sua
              compra. Se preferir, também pode reclamar diretamente à
              Autoridade Nacional de Proteção de Dados (ANPD).
            </p>
          </Section>

          <Section title="9. Segurança">
            <p>
              Adotamos medidas técnicas razoáveis para proteger seus dados
              contra acesso não autorizado, perda ou alteração. Nenhum
              sistema é 100% infalível, mas trabalhamos para manter suas
              informações seguras.
            </p>
          </Section>

          <Section title="10. Alterações nesta política">
            <p>
              Podemos atualizar esta política de tempos em tempos, para
              refletir mudanças nas ferramentas que usamos ou na legislação.
              A data no topo desta página sempre indica a versão mais
              recente.
            </p>
          </Section>

          <Section title="11. Contato">
            <p>
              Dúvidas sobre esta política? Fale com a gente pelo Instagram{" "}
              <a
                href="https://instagram.com/fabidamiani"
                target="_blank"
                rel="noopener noreferrer"
                className="underline text-[#6B8F63] hover:text-brand-black"
              >
                @fabidamiani
              </a>
              .
            </p>
          </Section>
        </div>
      </div>

      <Footer />
    </main>
  );
}
