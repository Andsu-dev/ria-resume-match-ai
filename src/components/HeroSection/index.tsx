import { motion } from "framer-motion";
import {
	ArrowRight,
	CheckCircle2,
	FileText,
	Sparkles,
	Target,
} from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "../ui/button";

const typingText = "Otimize tarefas com Aalvo AI";

const HeroSectionPage = () => {
	const [displayedText, setDisplayedText] = useState("");

	useEffect(() => {
		let index = 0;
		const interval = setInterval(() => {
			setDisplayedText(typingText.slice(0, index));
			index++;
			if (index > typingText.length) clearInterval(interval);
		}, 70);
		return () => clearInterval(interval);
	}, []);

	return (
		<section className="section-padding bg-gradient-subtle">
			<div className="container-narrow text-center">
				<motion.div
					initial={{ opacity: 0, y: -20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6, delay: 0.2 }}
					className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-ai-secondary border border-ai-primary/20 text-sm font-medium text-ai-primary mb-6"
				>
					<Sparkles className="w-4 h-4 text-gray-500" />
					<span>Powered by AI</span>
				</motion.div>

				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ duration: 0.8, delay: 0.5 }}
				>
					<h1 className="text-display text-aalvo-text-primary mb-6 text-balance relative inline-block">
						<span className="bg-gradient-to-r from-aalvo-primary to-gray-600 bg-clip-text text-transparent">
							{displayedText}
						</span>
						<div className="absolute -top-1 -right-2">
							<Sparkles className="h-8 w-8 text-yellow-400 animate-float" />
						</div>
					</h1>
				</motion.div>

				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8, delay: 1 }}
				>
					<p className="text text-aalvo-text-secondary mb-8 max-w-2xl mx-auto text-balance">
						Um <strong>assistente que sabe mais do seu negócio</strong> do que você mesmo.
						Automatize processos, analise dados e execute tarefas complexas sob demanda.
					</p>
				</motion.div>

				<motion.div
					initial={{ opacity: 0, scale: 0.9 }}
					animate={{ opacity: 1, scale: 1 }}
					transition={{ duration: 0.8, delay: 1.4 }}
					className="flex flex-col sm:flex-row items-center justify-center gap-4"
				>
					<Button variant="outline" className="group">
						Agende uma demo
						<ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
					</Button>
					<Button className="btn-secondary">Ver como funciona</Button>
				</motion.div>

				{/* Card de exemplo */}
				<motion.div
					initial={{ opacity: 0, y: 40 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 1, delay: 1.8 }}
					className="mt-16"
				>
					<div className="relative max-w-4xl mx-auto">
						<div className="bg-white rounded-2xl shadow-elevated p-8 border border-aalvo-border-subtle">
							<div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
								<div className="space-y-4">
									<div className="flex items-center gap-3">
										<div className="w-12 h-12 bg-aalvo-accent rounded-xl flex items-center justify-center">
											<Sparkles className="h-6 w-6 text-aalvo-text-primary" />
										</div>
										<div>
											<h3 className="font-semibold text-aalvo-text-primary">
												Agent Executando
											</h3>
											<p className="text-sm text-aalvo-text-muted">
												Análise de dados em tempo real
											</p>
										</div>
									</div>
									<div className="bg-aalvo-surface rounded-lg p-4">
										<div className="flex items-center justify-between mb-2">
											<span className="text-sm font-medium text-aalvo-text-primary">
												Tarefas processadas hoje
											</span>
											<span className="text-2xl font-bold text-green-600">
												142
											</span>
										</div>
										<div className="w-full bg-gray-200 rounded-full h-2">
											<div
												className="bg-green-600 h-2 rounded-full animate-pulse"
												style={{ width: "78%" }}
											></div>
										</div>
									</div>
								</div>
								<div className="space-y-3">
									<div className="flex items-center gap-2 text-sm">
										<CheckCircle2 className="h-4 w-4 text-green-600" />
										<span className="text-aalvo-text-secondary">
											Relatórios gerados automaticamente
										</span>
									</div>
									<div className="flex items-center gap-2 text-sm">
										<CheckCircle2 className="h-4 w-4 text-green-600" />
										<span className="text-aalvo-text-secondary">
											Dados sincronizados com seu CRM
										</span>
									</div>
									<div className="flex items-center gap-2 text-sm">
										<CheckCircle2 className="h-4 w-4 text-green-600" />
										<span className="text-aalvo-text-secondary">
											Respostas em linguagem natural
										</span>
									</div>
								</div>
							</div>
						</div>
					</div>
				</motion.div>
			</div>
		</section>
	);
};

export default HeroSectionPage;
