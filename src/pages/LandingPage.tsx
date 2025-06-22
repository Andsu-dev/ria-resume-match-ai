
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { FileText, Search, Check } from 'lucide-react';

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-black mb-8 leading-tight">
            Construa seu currículo com IA.{' '}
            <span className="block">
              Veja se você dá match com a vaga dos seus sonhos.
            </span>
          </h1>
          
          <p className="text-xl text-aalvo-gray-600 mb-12 max-w-2xl mx-auto">
            Use inteligência artificial para criar currículos otimizados e analise 
            sua compatibilidade com vagas de emprego em segundos.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/signup">
              <Button size="lg" className="bg-black text-white hover:bg-aalvo-gray-800 px-8 py-4 text-lg">
                Comece grátis
              </Button>
            </Link>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-aalvo-gray-300 text-aalvo-gray-700 hover:bg-aalvo-gray-50 px-8 py-4 text-lg"
            >
              Ver demonstração
            </Button>
          </div>
        </div>
      </section>

      {/* Como Funciona */}
      <section id="como-funciona" className="py-24 bg-aalvo-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-black mb-4">
              Como funciona
            </h2>
            <p className="text-xl text-aalvo-gray-600 max-w-2xl mx-auto">
              Três passos simples para criar seu currículo perfeito
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="w-16 h-16 bg-black rounded-lg flex items-center justify-center mx-auto mb-6">
                <FileText className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-black mb-4">
                1. Crie seu currículo
              </h3>
              <p className="text-aalvo-gray-600">
                Use nosso builder inteligente com sugestões de IA em tempo real 
                para criar um currículo otimizado.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-black rounded-lg flex items-center justify-center mx-auto mb-6">
                <Search className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-black mb-4">
                2. Analise vagas
              </h3>
              <p className="text-aalvo-gray-600">
                Cole a descrição da vaga e veja a porcentagem de compatibilidade 
                com seu currículo.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-black rounded-lg flex items-center justify-center mx-auto mb-6">
                <Check className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-black mb-4">
                3. Otimize e candidata-se
              </h3>
              <p className="text-aalvo-gray-600">
                Receba sugestões personalizadas de melhoria e aumente suas 
                chances de conseguir a vaga.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefícios */}
      <section id="beneficios" className="py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-black mb-4">
              Por que escolher o Aalvo?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "IA Inteligente",
                description: "Sugestões personalizadas baseadas em milhares de currículos de sucesso"
              },
              {
                title: "Análise Instantânea",
                description: "Veja em segundos se seu perfil combina com a vaga desejada"
              },
              {
                title: "Design Minimalista",
                description: "Interface limpa e intuitiva que foca no que realmente importa"
              },
              {
                title: "Exportação Flexível",
                description: "Baixe em PDF ou Word no formato ideal para cada oportunidade"
              },
              {
                title: "Histórico Completo",
                description: "Acompanhe todas as análises e melhorias ao longo do tempo"
              },
              {
                title: "Sempre Atualizado",
                description: "Melhorias contínuas baseadas nas tendências do mercado"
              }
            ].map((benefit, index) => (
              <Card key={index} className="border-aalvo-gray-200">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-black mb-3">{benefit.title}</h3>
                  <p className="text-aalvo-gray-600">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-24 bg-aalvo-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-black mb-4">
              Perguntas frequentes
            </h2>
          </div>

          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="item-1" className="border border-aalvo-gray-200 rounded-lg px-6">
                <AccordionTrigger className="text-left font-medium">
                  O Aalvo é realmente grátis?
                </AccordionTrigger>
                <AccordionContent className="text-aalvo-gray-600">
                  Sim! Você pode criar e baixar seu primeiro currículo gratuitamente. 
                  Planos pagos oferecem recursos avançados como análises ilimitadas de vagas.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="border border-aalvo-gray-200 rounded-lg px-6">
                <AccordionTrigger className="text-left font-medium">
                  Como funciona a análise de compatibilidade?
                </AccordionTrigger>
                <AccordionContent className="text-aalvo-gray-600">
                  Nossa IA analisa a descrição da vaga e compara com seu currículo, 
                  identificando palavras-chave, habilidades e experiências relevantes 
                  para gerar uma porcentagem de match.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="border border-aalvo-gray-200 rounded-lg px-6">
                <AccordionTrigger className="text-left font-medium">
                  Posso usar o Aalvo no celular?
                </AccordionTrigger>
                <AccordionContent className="text-aalvo-gray-600">
                  Absolutamente! Nossa interface é otimizada para dispositivos móveis, 
                  permitindo que você crie e edite currículos de qualquer lugar.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4" className="border border-aalvo-gray-200 rounded-lg px-6">
                <AccordionTrigger className="text-left font-medium">
                  Meus dados estão seguros?
                </AccordionTrigger>
                <AccordionContent className="text-aalvo-gray-600">
                  Sim. Utilizamos criptografia de ponta e seguimos todas as melhores 
                  práticas de segurança para proteger seus dados pessoais.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-24 bg-black text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Pronto para encontrar sua vaga ideal?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Junte-se a milhares de profissionais que já encontraram oportunidades 
            incríveis usando o Aalvo.
          </p>
          <Link to="/signup">
            <Button size="lg" className="bg-white text-black hover:bg-gray-100 px-8 py-4 text-lg">
              Comece grátis agora
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default LandingPage;
