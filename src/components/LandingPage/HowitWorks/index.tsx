import { STEPS } from "@/constants/steps.contants";

const HowitWorks = () => {
	return (
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
					{STEPS.map((step, index) => (
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
	);
};

export default HowitWorks;
