import { FEATURES } from "@/constants/features.contants";

const Features = () => {
	return (
		<section className="section-padding bg-aalvo-surface relative z-10">
			<div className="relative max-w-7xl p-5 mx-auto">
				<div className="text-center space-y-6 mb-20">
					<h2 className="text-5xl md:text-7xl font-normal tracking-tight text-balance text-foreground">
						Tecnologia que <br />
						faz a diferença
					</h2>
					<p className="text-muted-foreground text-xl md:text-2xl max-w-4xl mx-auto text-balance">
						Combinamos inteligência artificial avançada com design intuitivo
						para revolucionar como você cria e otimiza seu currículo.
					</p>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6">
					{FEATURES.map((feature, index) => {
						const Icon = feature.icon;
						const isLarge = index === 0 || index === 3;
						const colSpan = isLarge ? "md:col-span-8" : "md:col-span-4";
						const iconSize = isLarge ? 24 : 20;
						const iconClass = isLarge
							? "w-12 h-12 rounded-xl"
							: "w-10 h-10 rounded-lg";
						const titleSize = isLarge
							? index === 0
								? "text-2xl md:text-3xl"
								: "text-xl md:text-2xl"
							: "text-lg md:text-xl";
						const textSize = isLarge ? "text-lg" : "text-sm";
						const padding = isLarge ? "p-8 md:p-12" : "p-6 md:p-8";
						const spacing = isLarge ? "space-y-6" : "space-y-4";
						const gradientDirection =
							index === 0
								? "from-accent/5 to-primary/5"
								: index === 1
									? "from-accent/5 to-primary/5"
									: index === 2
										? "from-accent/5 to-primary/5"
										: "from-accent/5 to-primary/5";
						const rotateDirection =
							index === 0
								? "group-hover:rotate-3"
								: index === 1
									? "group-hover:-rotate-2"
									: index === 2
										? "group-hover:rotate-2"
										: "group-hover:-rotate-3";

						return (
							<div
								key={feature.title}
								className={`${colSpan} group cursor-pointer relative`}
							>
								<div
									className={`h-full ${padding} rounded-2xl bg-card border border-border/50 overflow-hidden transition-all duration-700 ease-out group-hover:border-border group-hover:bg-card/90 group-hover:backdrop-blur-sm group-hover:shadow-2xl group-hover:shadow-primary/5 group-hover:-translate-y-2 group-hover:scale-[1.02]`}
								>
									<div className={`relative z-10 ${spacing}`}>
										<div
											className={`${iconClass} bg-muted flex items-center justify-center transition-all duration-500 group-hover:bg-accent/20 group-hover:scale-110 ${rotateDirection}`}
										>
											<Icon
												size={iconSize}
												className="text-foreground transition-all duration-300 group-hover:text-primary group-hover:scale-110"
											/>
										</div>
										<div>
											<h3
												className={`${titleSize} font-semibold tracking-tight ${isLarge ? "mb-4" : "mb-2"} text-foreground transition-all duration-300 group-hover:text-primary`}
											>
												{feature.title}
											</h3>
											<p
												className={`text-muted-foreground ${textSize} leading-relaxed transition-colors duration-300 group-hover:text-foreground/80`}
											>
												{feature.description}
											</p>
										</div>
									</div>
									<div
										className={`absolute inset-0 bg-gradient-to-br ${gradientDirection} opacity-0 group-hover:opacity-100 transition-opacity duration-700`}
									/>
								</div>
							</div>
						);
					})}
				</div>
			</div>
		</section>
	);
};

export default Features;
