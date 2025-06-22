
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Mail, Search } from 'lucide-react';
import { toast } from '@/hooks/use-toast';

const Support = () => {
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Mensagem enviada!",
      description: "Retornaremos em até 24 horas.",
    });
    setContactForm({ name: '', email: '', subject: '', message: '' });
  };

  const faqItems = [
    {
      question: "Como funciona a IA do Aalvo?",
      answer: "Nossa inteligência artificial analisa milhares de currículos bem-sucedidos e descrições de vagas para oferecer sugestões personalizadas e calcular a compatibilidade entre seu perfil e as oportunidades."
    },
    {
      question: "Posso usar o Aalvo gratuitamente?",
      answer: "Sim! O plano gratuito permite criar 1 currículo e fazer 3 análises de vagas por mês. Para recursos ilimitados, você pode fazer upgrade para um plano pago."
    },
    {
      question: "Como melhorar minha pontuação de match?",
      answer: "Siga as sugestões da IA, adicione palavras-chave relevantes da descrição da vaga, detalhe suas experiências e mantenha seu currículo atualizado com suas habilidades mais recentes."
    },
    {
      question: "Em que formatos posso baixar meu currículo?",
      answer: "Você pode exportar seu currículo em PDF (recomendado) ou Word (.docx), ambos otimizados para sistemas de recrutamento automatizados."
    },
    {
      question: "Meus dados estão seguros?",
      answer: "Sim. Utilizamos criptografia de ponta a ponta e seguimos rigorosos padrões de segurança. Seus dados pessoais nunca são compartilhados com terceiros."
    },
    {
      question: "Como funciona a análise de compatibilidade?",
      answer: "A IA compara seu currículo com a descrição da vaga, analisando palavras-chave, habilidades, experiência e formação para gerar uma porcentagem de match e sugestões específicas."
    },
    {
      question: "Posso editar um currículo já criado?",
      answer: "Claro! Todos os currículos podem ser editados a qualquer momento. As alterações são salvas automaticamente e você pode ver a visualização em tempo real."
    },
    {
      question: "O Aalvo funciona em dispositivos móveis?",
      answer: "Sim! Nossa plataforma é totalmente responsiva e otimizada para funcionar perfeitamente em smartphones e tablets."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-black mb-4">
            Central de Ajuda
          </h1>
          <p className="text-xl text-aalvo-gray-600 max-w-2xl mx-auto">
            Encontre respostas para suas dúvidas ou entre em contato conosco
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* FAQ Section */}
          <div className="lg:col-span-2">
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-black mb-2">
                Perguntas Frequentes
              </h2>
              <p className="text-aalvo-gray-600">
                Respostas para as dúvidas mais comuns sobre o Aalvo
              </p>
            </div>

            <Accordion type="single" collapsible className="space-y-4">
              {faqItems.map((item, index) => (
                <AccordionItem 
                  key={index} 
                  value={`item-${index}`} 
                  className="border border-aalvo-gray-200 rounded-lg px-6"
                >
                  <AccordionTrigger className="text-left font-medium text-black hover:no-underline">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-aalvo-gray-600 leading-relaxed">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          {/* Contact Form */}
          <div>
            <Card className="border-aalvo-gray-200 sticky top-8">
              <CardHeader>
                <CardTitle className="text-black flex items-center">
                  <Mail className="h-5 w-5 mr-2" />
                  Entre em Contato
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Nome</Label>
                    <Input
                      id="name"
                      value={contactForm.name}
                      onChange={(e) => setContactForm(prev => ({ ...prev, name: e.target.value }))}
                      className="border-aalvo-gray-300"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">E-mail</Label>
                    <Input
                      id="email"
                      type="email"
                      value={contactForm.email}
                      onChange={(e) => setContactForm(prev => ({ ...prev, email: e.target.value }))}
                      className="border-aalvo-gray-300"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject">Assunto</Label>
                    <Input
                      id="subject"
                      value={contactForm.subject}
                      onChange={(e) => setContactForm(prev => ({ ...prev, subject: e.target.value }))}
                      className="border-aalvo-gray-300"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Mensagem</Label>
                    <Textarea
                      id="message"
                      value={contactForm.message}
                      onChange={(e) => setContactForm(prev => ({ ...prev, message: e.target.value }))}
                      className="border-aalvo-gray-300"
                      rows={4}
                      required
                    />
                  </div>

                  <Button type="submit" className="w-full bg-black text-white hover:bg-aalvo-gray-800">
                    Enviar mensagem
                  </Button>
                </form>

                <div className="mt-6 pt-6 border-t border-aalvo-gray-200">
                  <p className="text-sm text-aalvo-gray-600 text-center">
                    Respondemos em até 24 horas
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Support;
