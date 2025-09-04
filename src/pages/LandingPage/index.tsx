import {
	ArrowRight,
	Brain,
	CheckCircle2,
	Download,
	Shield,
	Target,
	Zap,
} from "lucide-react";
import { Link } from "react-router-dom";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Features from "@/components/LandingPage/Features";
import HeroSectionPage from "@/components/LandingPage/HeroSection";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const LandingPage = () => {
	const features = [
		{
			icon: Brain,
			title: "IA Avançada",
			description:
				"Algoritmos inteligentes analisam seu perfil e sugerem melhorias personalizadas",
		},
		{
			icon: Target,
			title: "Match Preciso",
			description:
				"Descubra sua compatibilidade com vagas através de análise semântica avançada",
		},
		{
			icon: Zap,
			title: "Criação Rápida",
			description: "Crie currículos profissionais em minutos, não horas",
		},
		{
			icon: Shield,
			title: "Dados Seguros",
			description:
				"Suas informações são protegidas com criptografia de nível empresarial",
		},
	];

	const steps = [
		{
			number: "01",
			title: "Criar",
			description:
				"Monte seu currículo com nossa interface intuitiva e sugestões de IA em tempo real",
		},
		{
			number: "02",
			title: "Analisar",
			description:
				"Cole a descrição da vaga e descubra seu percentual de compatibilidade",
		},
		{
			number: "03",
			title: "Otimizar",
			description:
				"Implemente as sugestões personalizadas e maximize suas chances",
		},
	];

	const benefits = [
		"Currículos otimizados por IA",
		"Análise de compatibilidade com vagas",
		"Sugestões personalizadas",
		"Templates profissionais",
		"Export em PDF/Word",
		"Histórico de análises",
	];

	return (
		<div className="min-h-screen relative z-0 overflow-hidden bg-background">
			<div className="absolute inset-0 cosmic-grid"></div>
			<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full">
				<div className="w-full h-full opacity-10 bg-primary blur-[120px]"></div>
			</div>

			<Header />

			<HeroSectionPage />
			<Features />
			{/* <section className="section-padding bg-aalvo-surface z-10 relative">
				<div className="container-wide">
					<div className="text-center mb-16 fade-in-up">
						<h2 className="text-headline text-aalvo-text-primary mb-4">
							Tecnologia que faz a diferença
						</h2>
						<p className="text-body text-aalvo-text-secondary max-w-2xl mx-auto">
							Combinamos inteligência artificial avançada com design intuitivo
							para revolucionar como você cria e otimiza seu currículo.
						</p>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
						{features.map((feature, index) => {
							const Icon = feature.icon;
							return (
								<div
									key={feature.title}
									className={`group bg-white border border-aalvo-border-subtle rounded-xl p-6 hover:border-aalvo-primary/20 transition-all duration-200 fade-in-up-delay-${index + 1}`}
								>
									<div className="w-10 h-10 bg-aalvo-surface rounded-lg flex items-center justify-center mb-4 group-hover:bg-aalvo-accent transition-colors">
										<Icon className="h-5 w-5 text-aalvo-text-primary" />
									</div>
									<h3 className="font-medium text-aalvo-text-primary mb-3">
										{feature.title}
									</h3>
									<p className="text-sm text-aalvo-text-secondary leading-relaxed">
										{feature.description}
									</p>
								</div>
							);
						})}
					</div>
				</div>
			</section> */}

			{/* How it Works */}
			<section className="section-padding relative ">
				<div className="container-narrow">
					<div className="text-center mb-16 fade-in-up">
						<h2 className="text-headline text-aalvo-text-primary mb-4">
							Como funciona
						</h2>
						<p className="text-body text-aalvo-text-secondary">
							Três passos simples para transformar sua busca por emprego
						</p>
					</div>

					<div className="space-y-12">
						{steps.map((step, index) => (
							<div
								key={step.number}
								className={`flex flex-col lg:flex-row items-center gap-8 lg:gap-12 fade-in-up-delay-${index + 1}`}
							>
								<div
									className={`lg:w-1/2 ${index % 2 === 1 ? "lg:order-2" : ""}`}
								>
									<div className="flex items-center gap-4 mb-4">
										<div className="w-16 h-16 bg-aalvo-primary text-white rounded-2xl flex items-center justify-center font-mono font-bold text-lg">
											{step.number}
										</div>
										<h3 className="text-title text-aalvo-text-primary">
											{step.title}
										</h3>
									</div>
									<p className="text-body text-aalvo-text-secondary">
										{step.description}
									</p>
								</div>

								<div
									className={`lg:w-1/2 ${index % 2 === 1 ? "lg:order-1" : ""}`}
								>
									<div className="bg-white rounded-2xl p-8 shadow-elegant border border-aalvo-border-subtle">
										<div className="bg-aalvo-accent rounded-lg h-32 flex items-center justify-center">
											<span className="text-aalvo-text-muted">
												Preview da interface
											</span>
										</div>
									</div>
								</div>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* Benefits */}
			<section className="section-padding relative z-20">
				<div className="container-narrow">
					<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
						<div className="fade-in-up">
							<h2 className="text-headline text-aalvo-text-primary mb-6">
								Tudo que você precisa em um só lugar
							</h2>
							<p className="text-body text-aalvo-text-secondary mb-8">
								Desenvolvemos cada funcionalidade pensando em otimizar seu tempo
								e maximizar seus resultados na busca por oportunidades.
							</p>

							<div className="space-y-4">
								{benefits.map((benefit) => (
									<div key={benefit} className="flex items-center gap-3">
										<CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0" />
										<span className="text-aalvo-text-secondary">{benefit}</span>
									</div>
								))}
							</div>

							<div className="mt-8">
								<Link to="/signup">
									<Button className="btn-primary">
										Começar agora
										<ArrowRight className="h-4 w-4 ml-2" />
									</Button>
								</Link>
							</div>
						</div>

						<div className="fade-in-up-delay-1">
							<div className="relative">
								<div className="bg-white rounded-2xl p-8 shadow-elevated border border-aalvo-border-subtle">
									<div className="space-y-4">
										<div className="flex items-center justify-between">
											<span className="text-sm font-medium text-aalvo-text-primary">
												Análise completa
											</span>
											<span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full">
												Concluída
											</span>
										</div>

										<div className="space-y-3">
											<div className="flex justify-between items-center">
												<span className="text-sm text-aalvo-text-secondary">
													Compatibilidade
												</span>
												<span className="font-semibold text-aalvo-text-primary">
													92%
												</span>
											</div>
											<div className="w-full bg-gray-200 rounded-full h-2">
												<div
													className="bg-green-600 h-2 rounded-full"
													style={{ width: "92%" }}
												></div>
											</div>
										</div>

										<div className="bg-aalvo-surface rounded-lg p-4 space-y-2">
											<p className="text-xs font-medium text-aalvo-text-primary">
												Principais forças:
											</p>
											<ul className="text-xs text-aalvo-text-secondary space-y-1">
												<li>• Stack tecnológico alinhado</li>
												<li>• Experiência relevante</li>
												<li>• Formação adequada</li>
											</ul>
										</div>
									</div>
								</div>

								<div className="absolute -bottom-4 -right-4 w-24 h-24 bg-aalvo-accent rounded-full flex items-center justify-center">
									<Download className="h-8 w-8 text-aalvo-text-primary" />
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* CTA Section */}
			<section className="section-padding bg-aalvo-primary text-white relative z-10">
				<div className="container-narrow text-center">
					<div className="fade-in-up">
						<h2 className="text-headline mb-4">
							Pronto para encontrar sua vaga ideal?
						</h2>
					</div>

					<div className="fade-in-up-delay-1">
						<p className="text-body mb-8 opacity-90 max-w-2xl mx-auto">
							Junte-se a milhares de profissionais que já transformaram suas
							carreiras com o Aalvo.
						</p>
					</div>

					<div className="fade-in-up-delay-2">
						<Link to="/signup">
							<Button className="bg-white text-aalvo-primary hover:bg-gray-100 px-8 py-3 rounded-xl font-medium transition-all duration-200 shadow-sm hover:shadow-md active:scale-[0.98]">
								Começar gratuitamente
								<ArrowRight className="h-4 w-4 ml-2" />
							</Button>
						</Link>
					</div>
				</div>
			</section>

			<Footer />
		</div>
	);
};

export default LandingPage;
