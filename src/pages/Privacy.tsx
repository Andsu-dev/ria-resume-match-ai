
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Privacy = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-black mb-8">
            Política de Privacidade
          </h1>
          
          <div className="prose prose-gray max-w-none">
            <p className="text-aalvo-gray-600 text-lg mb-8">
              Última atualização: Janeiro de 2024
            </p>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-black mb-4">1. Informações que Coletamos</h2>
              <p className="text-aalvo-gray-700 leading-relaxed mb-4">
                Coletamos informações que você nos fornece diretamente:
              </p>
              <ul className="list-disc list-inside text-aalvo-gray-700 space-y-2">
                <li>Informações de conta (nome, e-mail, senha)</li>
                <li>Conteúdo do currículo (experiências, habilidades, educação)</li>
                <li>Descrições de vagas para análise</li>
                <li>Comunicações conosco</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-black mb-4">2. Como Usamos suas Informações</h2>
              <p className="text-aalvo-gray-700 leading-relaxed mb-4">
                Utilizamos suas informações para:
              </p>
              <ul className="list-disc list-inside text-aalvo-gray-700 space-y-2">
                <li>Fornecer e melhorar nossos serviços</li>
                <li>Personalizar sugestões de IA</li>
                <li>Realizar análises de compatibilidade</li>
                <li>Comunicar sobre atualizações do serviço</li>
                <li>Oferecer suporte ao cliente</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-black mb-4">3. Compartilhamento de Informações</h2>
              <p className="text-aalvo-gray-700 leading-relaxed mb-4">
                Não vendemos, alugamos ou compartilhamos suas informações pessoais, exceto:
              </p>
              <ul className="list-disc list-inside text-aalvo-gray-700 space-y-2">
                <li>Com seu consentimento explícito</li>
                <li>Para cumprir obrigações legais</li>
                <li>Para proteger nossos direitos e segurança</li>
                <li>Com provedores de serviços terceirizados confiáveis</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-black mb-4">4. Segurança dos Dados</h2>
              <p className="text-aalvo-gray-700 leading-relaxed">
                Implementamos medidas de segurança técnicas e organizacionais para proteger 
                suas informações contra acesso não autorizado, alteração, divulgação ou destruição.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-black mb-4">5. Seus Direitos</h2>
              <p className="text-aalvo-gray-700 leading-relaxed mb-4">
                Você tem o direito de:
              </p>
              <ul className="list-disc list-inside text-aalvo-gray-700 space-y-2">
                <li>Acessar suas informações pessoais</li>
                <li>Corrigir informações incorretas</li>
                <li>Solicitar exclusão de sua conta</li>
                <li>Retirar consentimento para processamento</li>
                <li>Portabilidade de dados</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-black mb-4">6. Cookies e Tecnologias Similares</h2>
              <p className="text-aalvo-gray-700 leading-relaxed">
                Utilizamos cookies e tecnologias similares para melhorar sua experiência, 
                analisar o uso do site e personalizar conteúdo. Você pode controlar o uso 
                de cookies através das configurações do seu navegador.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-black mb-4">7. Retenção de Dados</h2>
              <p className="text-aalvo-gray-700 leading-relaxed">
                Mantemos suas informações apenas pelo tempo necessário para fornecer nossos 
                serviços ou conforme exigido por lei. Você pode solicitar a exclusão de 
                seus dados a qualquer momento.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-black mb-4">8. Alterações nesta Política</h2>
              <p className="text-aalvo-gray-700 leading-relaxed">
                Podemos atualizar esta Política de Privacidade periodicamente. Notificaremos 
                sobre mudanças significativas através do e-mail ou aviso em nossa plataforma.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-black mb-4">9. Contato</h2>
              <p className="text-aalvo-gray-700 leading-relaxed">
                Para questões sobre privacidade ou para exercer seus direitos, 
                entre em contato conosco através do e-mail: privacy@aalvo.com ou 
                pela nossa central de suporte.
              </p>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Privacy;
