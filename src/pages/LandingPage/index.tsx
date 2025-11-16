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
import HeroSectionPage from "@/components/HeroSection";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const LandingPage = () => {
	const features = [
		{
			icon: Brain,
			title: "IA Contextual",
			description:
				"Aprende continuamente sobre seu negócio, processos e preferências para agir com precisão",
		},
		{
			icon: Target,
			title: "On-Demand",
			description:
				"Executa tarefas complexas quando você precisar, do jeito que você precisa",
		},
		{
			icon: Zap,
			title: "Integração Rápida",
			description: "Conecta-se aos seus sistemas existentes em minutos, não meses",
		},
		{
			icon: Shield,
			title: "Dados Protegidos",
			description:
				"Seus dados permanecem seguros com criptografia de nível empresarial",
		},
	];

	const steps = [
		{
			number: "01",
			title: "Conectar",
			description:
				"Integre o Aalvo AI aos seus sistemas ou use nossa interface dedicada em minutos",
		},
		{
			number: "02",
			title: "Treinar",
			description:
				"O assistente aprende sobre seu negócio, processos e contexto específico",
		},
		{
			number: "03",
			title: "Executar",
			description:
				"Solicite tarefas sob demanda e veja o agent trabalhar para você quando precisar",
		},
	];

	const benefits = [
		"Delegue processos repetitivos",
		"Análise de dados sob demanda",
		"Integração com sistemas existentes",
		"Respostas em linguagem natural",
		"Aprendizado contínuo do negócio",
		"Assistência quando você precisar",
	];

	return (
		<div className="min-h-screen bg-background">
			<Header />

			{/* Hero Section */}
			<HeroSectionPage />
			{/* Features Section */}
			<section className="section-padding">
				<div className="container-wide">
					<div className="text-center mb-16 fade-in-up">
						<h2 className="text-headline text-aalvo-text-primary mb-4">
							Tecnologia que faz a diferença
						</h2>
						<p className="text-body text-aalvo-text-secondary max-w-2xl mx-auto">
							Um assistente AI que entende profundamente seu negócio e opera
							com a mesma expertise de um especialista sênior.
						</p>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
						{features.map((feature, index) => {
							const Icon = feature.icon;
							return (
								<Card
									key={feature.title}
									className={`card-elevated group hover:shadow-elevated transition-all duration-300 fade-in-up-delay-${index + 1}`}
								>
									<CardContent className="p-6 text-center">
										<div className="w-12 h-12 bg-aalvo-accent rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
											<Icon className="h-6 w-6 text-aalvo-text-primary" />
										</div>
										<h3 className="font-semibold text-aalvo-text-primary mb-2">
											{feature.title}
										</h3>
										<p className="text-sm text-aalvo-text-secondary">
											{feature.description}
										</p>
									</CardContent>
								</Card>
							);
						})}
					</div>
				</div>
			</section>

			{/* Video Demo Section */}
			<section className="section-padding bg-aalvo-surface">
				<div className="container-narrow">
					<div className="text-center mb-16 fade-in-up">
						<h2 className="text-headline text-aalvo-text-primary mb-4">
							Veja o Aalvo AI em ação
						</h2>
						<p className="text-body text-aalvo-text-secondary">
							Assista como nosso assistente transforma operações complexas em
							tarefas simples
						</p>
					</div>

					<div className="relative max-w-4xl mx-auto fade-in-up-delay-1">
						<div className="bg-black rounded-2xl overflow-hidden shadow-elevated border border-aalvo-border-subtle aspect-video flex items-center justify-center">
							<div className="text-center">
								<div className="w-20 h-20 bg-aalvo-accent rounded-full flex items-center justify-center mx-auto mb-4">
									<svg
										className="w-8 h-8 text-aalvo-text-primary"
										fill="currentColor"
										viewBox="0 0 20 20"
									>
										<path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
									</svg>
								</div>
								<p className="text-aalvo-text-muted">
									Vídeo demonstrativo em breve
								</p>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Integration Options */}
			<section className="section-padding">
				<div className="container-narrow">
					<div className="text-center mb-16 fade-in-up">
						<h2 className="text-headline text-aalvo-text-primary mb-4">
							Integre no seu sistema ou utilize nossa interface
						</h2>
						<p className="text-body text-aalvo-text-secondary max-w-2xl mx-auto">
							Flexibilidade total para usar o Aalvo AI do jeito que funciona
							melhor para você
						</p>
					</div>

					<div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
						<Card className="card-elevated hover:shadow-elevated transition-all duration-300 fade-in-up">
							<CardContent className="p-8">
								<div className="w-12 h-12 bg-aalvo-accent rounded-xl flex items-center justify-center mb-6">
									<Zap className="h-6 w-6 text-aalvo-text-primary" />
								</div>
								<h3 className="text-title text-aalvo-text-primary mb-3">
									API Integration
								</h3>
								<p className="text-body text-aalvo-text-secondary mb-6">
									Integre diretamente nos seus sistemas existentes via API
									RESTful. Total controle e personalização.
								</p>
								<ul className="space-y-3">
									<li className="flex items-center gap-2 text-sm text-aalvo-text-secondary">
										<CheckCircle2 className="h-4 w-4 text-green-600 flex-shrink-0" />
										<span>Documentação completa</span>
									</li>
									<li className="flex items-center gap-2 text-sm text-aalvo-text-secondary">
										<CheckCircle2 className="h-4 w-4 text-green-600 flex-shrink-0" />
										<span>Integração flexível</span>
									</li>
									<li className="flex items-center gap-2 text-sm text-aalvo-text-secondary">
										<CheckCircle2 className="h-4 w-4 text-green-600 flex-shrink-0" />
										<span>Controle total do agent</span>
									</li>
								</ul>
							</CardContent>
						</Card>

						<Card className="card-elevated hover:shadow-elevated transition-all duration-300 fade-in-up-delay-1">
							<CardContent className="p-8">
								<div className="w-12 h-12 bg-aalvo-accent rounded-xl flex items-center justify-center mb-6">
									<Target className="h-6 w-6 text-aalvo-text-primary" />
								</div>
								<h3 className="text-title text-aalvo-text-primary mb-3">
									Interface Dedicada
								</h3>
								<p className="text-body text-aalvo-text-secondary mb-6">
									Use nossa plataforma intuitiva sem necessidade de código.
									Perfeito para times que querem começar imediatamente.
								</p>
								<ul className="space-y-3">
									<li className="flex items-center gap-2 text-sm text-aalvo-text-secondary">
										<CheckCircle2 className="h-4 w-4 text-green-600 flex-shrink-0" />
										<span>Dashboard completo</span>
									</li>
									<li className="flex items-center gap-2 text-sm text-aalvo-text-secondary">
										<CheckCircle2 className="h-4 w-4 text-green-600 flex-shrink-0" />
										<span>Gestão de tarefas visual</span>
									</li>
									<li className="flex items-center gap-2 text-sm text-aalvo-text-secondary">
										<CheckCircle2 className="h-4 w-4 text-green-600 flex-shrink-0" />
										<span>Análises e relatórios</span>
									</li>
								</ul>
							</CardContent>
						</Card>
					</div>
				</div>
			</section>

			{/* How it Works */}
			<section className="section-padding bg-aalvo-surface">
				<div className="container-narrow">
					<div className="text-center mb-16 fade-in-up">
						<h2 className="text-headline text-aalvo-text-primary mb-4">
							Como funciona
						</h2>
						<p className="text-body text-aalvo-text-secondary">
							Três passos simples para ter seu assistente AI operacional
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
			<section className="section-padding">
				<div className="container-narrow">
					<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
						<div className="fade-in-up">
							<h2 className="text-headline text-aalvo-text-primary mb-6">
								Tudo que você precisa em um só lugar
							</h2>
							<p className="text-body text-aalvo-text-secondary mb-8">
								Desenvolvemos cada funcionalidade pensando em simplificar
								processos complexos e liberar seu time para focar no que realmente
								importa.
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
								<Button className="btn-primary">
									Agendar demonstração
									<ArrowRight className="h-4 w-4 ml-2" />
								</Button>
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
													Eficiência operacional
												</span>
												<span className="font-semibold text-aalvo-text-primary">
													+340%
												</span>
											</div>
											<div className="w-full bg-gray-200 rounded-full h-2">
												<div
													className="bg-green-600 h-2 rounded-full animate-pulse"
													style={{ width: "85%" }}
												></div>
											</div>
										</div>

										<div className="bg-aalvo-surface rounded-lg p-4 space-y-2">
											<p className="text-xs font-medium text-aalvo-text-primary">
												Métricas de hoje:
											</p>
											<ul className="text-xs text-aalvo-text-secondary space-y-1">
												<li>• 234 tarefas automatizadas</li>
												<li>• 12h economizadas</li>
												<li>• 98% precisão nas análises</li>
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

			{/* Pricing with Time Calculator */}
			<section className="section-padding bg-aalvo-surface">
				<div className="container-narrow">
					<div className="text-center mb-16 fade-in-up">
						<h2 className="text-headline text-aalvo-text-primary mb-4">
							Automatize processos repetitivos e deixe-os no modo fácil
						</h2>
						<p className="text-body text-aalvo-text-secondary max-w-2xl mx-auto">
							Calcule quanto tempo você economizaria delegando tarefas para o
							Aalvo AI
						</p>
					</div>

					<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
						{/* Time Calculator */}
						<Card className="card-elevated fade-in-up">
							<CardContent className="p-8">
								<h3 className="text-title text-aalvo-text-primary mb-6">
									Calculadora de Tempo
								</h3>

								<div className="space-y-6">
									<div>
										<label className="block text-sm font-medium text-aalvo-text-primary mb-2">
											Quantas horas por semana você gasta em tarefas repetitivas?
										</label>
										<input
											type="range"
											min="1"
											max="40"
											defaultValue="10"
											className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-aalvo-primary"
											id="hoursRange"
											onChange={(e) => {
												const hours = e.target.value;
												document.getElementById("hoursValue")!.textContent =
													hours + "hrs";
												const saved = Math.round(Number(hours) * 0.7);
												document.getElementById("hoursSaved")!.textContent =
													saved + "hrs";
												const monthly = saved * 4;
												document.getElementById("monthlySaved")!.textContent =
													monthly + "hrs";
												const yearly = monthly * 12;
												document.getElementById("yearlySaved")!.textContent =
													yearly + "hrs";
											}}
										/>
										<div className="flex justify-between text-sm text-aalvo-text-muted mt-2">
											<span>1hrs</span>
											<span id="hoursValue" className="font-semibold">
												10hrs
											</span>
											<span>40hrs</span>
										</div>
									</div>

									<div className="bg-aalvo-accent rounded-xl p-6 space-y-4">
										<div className="flex justify-between items-center pb-4 border-b border-aalvo-border-subtle">
											<span className="text-sm text-aalvo-text-secondary">
												Tempo economizado por semana:
											</span>
											<span
												id="hoursSaved"
												className="text-3xl font-bold text-green-600"
											>
												7hrs
											</span>
										</div>

										<div className="space-y-3">
											<div className="flex justify-between items-center">
												<span className="text-sm text-aalvo-text-secondary">
													Por mês:
												</span>
												<span
													id="monthlySaved"
													className="text-xl font-semibold text-aalvo-text-primary"
												>
													28hrs
												</span>
											</div>
											<div className="flex justify-between items-center">
												<span className="text-sm text-aalvo-text-secondary">
													Por ano:
												</span>
												<span
													id="yearlySaved"
													className="text-xl font-semibold text-aalvo-text-primary"
												>
													336hrs
												</span>
											</div>
										</div>

										<div className="bg-white rounded-lg p-4 mt-4">
											<p className="text-xs text-aalvo-text-muted text-center">
												Isso equivale a{" "}
												<span className="font-bold text-aalvo-text-primary">
													14 dias úteis
												</span>{" "}
												por ano focando no que realmente importa
											</p>
										</div>
									</div>

									<div className="pt-4">
										<p className="text-sm text-aalvo-text-secondary">
											💡 <strong>Simplifique suas atividades:</strong> Delegue
											relatórios, análises, pesquisas e processamento de dados para
											o Aalvo AI
										</p>
									</div>
								</div>
							</CardContent>
						</Card>

						{/* Pricing Cards */}
						<div className="space-y-6 fade-in-up-delay-1">
							<Card className="card-elevated border-2 border-aalvo-primary relative overflow-hidden">
								<div className="absolute top-0 right-0 bg-aalvo-primary text-white text-xs font-semibold px-3 py-1 rounded-bl-lg">
									Plano sob medida
								</div>
								<CardContent className="p-8">
									<div className="mb-6">
										<h3 className="text-title text-aalvo-text-primary mb-2">
											Aalvo AI Enterprise
										</h3>
										<p className="text-sm text-aalvo-text-secondary">
											Solução completa personalizada para sua operação
										</p>
									</div>

									<div className="mb-6 relative h-20 flex items-center justify-center">
										<div className="text-5xl font-bold text-aalvo-text-primary filter blur-md select-none">
											R$ 12.499
										</div>
										<div className="absolute inset-0 flex items-center justify-center">
											<span className="text-base font-semibold text-aalvo-text-primary bg-white px-6 py-2 rounded-full shadow-md border border-aalvo-border-subtle">
												Sob consulta
											</span>
										</div>
									</div>

									<ul className="space-y-3 mb-8">
										<li className="flex items-center gap-2 text-sm text-aalvo-text-secondary">
											<CheckCircle2 className="h-4 w-4 text-green-600 flex-shrink-0" />
											<span>Implementação e criação de agent</span>
										</li>
										<li className="flex items-center gap-2 text-sm text-aalvo-text-secondary">
											<CheckCircle2 className="h-4 w-4 text-green-600 flex-shrink-0" />
											<span>Onboarding personalizado</span>
										</li>
										<li className="flex items-center gap-2 text-sm text-aalvo-text-secondary">
											<CheckCircle2 className="h-4 w-4 text-green-600 flex-shrink-0" />
											<span>Suporte premium</span>
										</li>
										<li className="flex items-center gap-2 text-sm text-aalvo-text-secondary">
											<CheckCircle2 className="h-4 w-4 text-green-600 flex-shrink-0" />
											<span>SLA dedicada</span>
										</li>
										<li className="flex items-center gap-2 text-sm text-aalvo-text-secondary">
											<CheckCircle2 className="h-4 w-4 text-green-600 flex-shrink-0" />
											<span>Manutenção contínua</span>
										</li>
										<li className="flex items-center gap-2 text-sm text-aalvo-text-secondary">
											<CheckCircle2 className="h-4 w-4 text-green-600 flex-shrink-0" />
											<span>Treinamento de equipe</span>
										</li>
									</ul>

									<Button className="w-full btn-primary">
										Agendar demonstração
									</Button>
								</CardContent>
							</Card>

							<div className="bg-aalvo-accent rounded-xl p-6 text-center">
								<p className="text-sm text-aalvo-text-secondary">
									💼 <strong>Precisa de algo específico?</strong>
									<br />
									Montamos um plano customizado para seu negócio
								</p>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* CTA Section */}
			<section className="section-padding bg-aalvo-primary text-white">
				<div className="container-narrow text-center">
					<div className="fade-in-up">
						<h2 className="text-headline mb-4">
							Pronto para ter um assistente que conhece seu negócio?
						</h2>
					</div>

					<div className="fade-in-up-delay-1">
						<p className="text-body mb-8 opacity-90 max-w-2xl mx-auto">
							Junte-se às empresas que já otimizaram suas operações com Aalvo
							AI.
						</p>
					</div>

					<div className="fade-in-up-delay-2">
						<Button className="bg-white text-aalvo-primary hover:bg-gray-100 px-8 py-3 rounded-xl font-medium transition-all duration-200 shadow-sm hover:shadow-md active:scale-[0.98]">
							Agendar demonstração
							<ArrowRight className="h-4 w-4 ml-2" />
						</Button>
					</div>
				</div>
			</section>

			<Footer />
		</div>
	);
};

export default LandingPage;
