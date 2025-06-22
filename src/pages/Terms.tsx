
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Terms = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-black mb-8">
            Termos de Uso
          </h1>
          
          <div className="prose prose-gray max-w-none">
            <p className="text-aalvo-gray-600 text-lg mb-8">
              Última atualização: Janeiro de 2024
            </p>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-black mb-4">1. Aceitação dos Termos</h2>
              <p className="text-aalvo-gray-700 leading-relaxed">
                Ao acessar e usar o Aalvo, você concorda em cumprir estes Termos de Uso. 
                Se você não concorda com qualquer parte destes termos, não deve usar nossos serviços.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-black mb-4">2. Descrição do Serviço</h2>
              <p className="text-aalvo-gray-700 leading-relaxed mb-4">
                O Aalvo é uma plataforma de criação de currículos com inteligência artificial que oferece:
              </p>
              <ul className="list-disc list-inside text-aalvo-gray-700 space-y-2">
                <li>Criação e edição de currículos com sugestões de IA</li>
                <li>Análise de compatibilidade entre currículos e vagas</li>
                <li>Exportação de currículos em diferentes formatos</li>
                <li>Histórico de análises e melhorias</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-black mb-4">3. Conta do Usuário</h2>
              <p className="text-aalvo-gray-700 leading-relaxed mb-4">
                Para usar nossos serviços, você deve:
              </p>
              <ul className="list-disc list-inside text-aalvo-gray-700 space-y-2">
                <li>Fornecer informações precisas e atualizadas</li>
                <li>Manter a segurança de sua conta e senha</li>
                <li>Ser responsável por todas as atividades em sua conta</li>
                <li>Notificar-nos imediatamente sobre uso não autorizado</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-black mb-4">4. Uso Aceitável</h2>
              <p className="text-aalvo-gray-700 leading-relaxed mb-4">
                Você concorda em não:
              </p>
              <ul className="list-disc list-inside text-aalvo-gray-700 space-y-2">
                <li>Usar o serviço para fins ilegais ou não autorizados</li>
                <li>Tentar ganhar acesso não autorizado aos nossos sistemas</li>
                <li>Interferir no funcionamento normal do serviço</li>
                <li>Usar informações falsas ou enganosas</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-black mb-4">5. Propriedade Intelectual</h2>
              <p className="text-aalvo-gray-700 leading-relaxed">
                O Aalvo e todo seu conteúdo, incluindo design, código, logos e algoritmos de IA, 
                são propriedade exclusiva da empresa. Você mantém os direitos sobre o conteúdo 
                que cria usando nossa plataforma.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-black mb-4">6. Privacidade</h2>
              <p className="text-aalvo-gray-700 leading-relaxed">
                Sua privacidade é importante para nós. Consulte nossa Política de Privacidade 
                para entender como coletamos, usamos e protegemos suas informações.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-black mb-4">7. Limitação de Responsabilidade</h2>
              <p className="text-aalvo-gray-700 leading-relaxed">
                O Aalvo é fornecido "como está". Não garantimos que o serviço seja ininterrupto 
                ou livre de erros. Nossa responsabilidade é limitada ao máximo permitido por lei.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-black mb-4">8. Modificações</h2>
              <p className="text-aalvo-gray-700 leading-relaxed">
                Reservamos o direito de modificar estes termos a qualquer momento. 
                Notificaremos sobre mudanças significativas e o uso continuado constitui 
                aceitação dos novos termos.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-black mb-4">9. Contato</h2>
              <p className="text-aalvo-gray-700 leading-relaxed">
                Para dúvidas sobre estes Termos de Uso, entre em contato através da nossa 
                central de suporte ou pelo e-mail: legal@aalvo.com
              </p>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Terms;
