"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { STEPS } from "@/constants/steps.contants";

function useParallax(value: any, distance: number) {
	return useTransform(value, [0, 1], [-distance, distance]);
}

function StepSection({ step, index }: { step: any; index: number }) {
	const ref = useRef(null);
	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ["start end", "end start"],
	});

	const y = useParallax(scrollYProgress, 100);
	const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);
	const scale = useTransform(
		scrollYProgress,
		[0, 0.3, 0.7, 1],
		[0.8, 1, 1, 0.8],
	);

	return (
		<motion.div
			ref={ref}
			style={{ opacity, scale }}
			className="min-h-screen flex items-center justify-center py-20"
		>
			<div className="container mx-auto px-6">
				<div
					className={`flex flex-col lg:flex-row items-center gap-12 ${index % 2 === 1 ? "lg:flex-row-reverse" : ""}`}
				>
					<motion.div style={{ y }} className="lg:w-1/2">
						<div className="flex items-center gap-4 mb-6">
							<div className="w-16 h-16 bg-blue-600 text-white rounded-2xl flex items-center justify-center font-mono font-bold text-lg">
								{step.number}
							</div>
							<h3 className="text-3xl font-bold text-gray-900">{step.title}</h3>
						</div>
						<p className="text-lg text-gray-600 leading-relaxed">
							{step.description}
						</p>
					</motion.div>

					<motion.div
						style={{ y: useTransform(scrollYProgress, [0, 1], [50, -50]) }}
						className="lg:w-1/2"
					>
						<div className="bg-white rounded-2xl p-8 shadow-2xl border border-gray-100">
							<div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-lg h-64 flex items-center justify-center">
								<motion.div
									animate={{
										rotate: [0, 5, -5, 0],
										scale: [1, 1.05, 1],
									}}
									transition={{
										duration: 4,
										repeat: Number.POSITIVE_INFINITY,
										ease: "easeInOut",
									}}
									className="text-center"
								>
									<div className="w-16 h-16 bg-blue-600 rounded-full mx-auto mb-4 flex items-center justify-center">
										<span className="text-white font-bold text-xl">
											{step.number}
										</span>
									</div>
									<span className="text-gray-600 font-medium">
										Step {step.number} Preview
									</span>
								</motion.div>
							</div>
						</div>
					</motion.div>
				</div>
			</div>
		</motion.div>
	);
}

export default function ParallaxHowItWorks() {
	const containerRef = useRef(null);
	const { scrollYProgress } = useScroll({ target: containerRef });

	return (
		<div ref={containerRef} className="relative">
			{/* Header Section */}
			<motion.section
				initial={{ opacity: 0, y: 50 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.8 }}
				className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100"
			>
				<div className="text-center">
					<h1 className="text-5xl font-bold text-gray-900 mb-6">
						How It Works
					</h1>
					<p className="text-xl text-gray-600 max-w-2xl mx-auto">
						Three simple steps to transform your job search experience
					</p>
				</div>
			</motion.section>

			{/* Steps Sections */}
			{STEPS.map((step, index) => (
				<StepSection key={step.number} step={step} index={index} />
			))}

			{/* Progress Bar */}
			<motion.div
				className="fixed left-0 right-0 height-1 bg-blue-600 bottom-10 origin-left z-50"
				style={{
					scaleX: scrollYProgress,
					height: "4px",
				}}
			/>
		</div>
	);
}
