'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

export default function HeroSection() {
	const [selectedStack, setSelectedStack] = useState<'backend' | 'frontend' | 'cloud' | null>(null);

	return (
		<section className="min-h-screen relative overflow-hidden py-24 md:py-0">
			<div className="absolute inset-0">
				<div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
			</div>

			<div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4 pt-8 md:pt-0">
				<motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-8 md:mb-12">
					<div className="space-y-3 md:space-y-4 mb-6 md:mb-8">
						<h1 className="text-4xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-teal-500">
							Alizain Ali
						</h1>
						<h2 className="text-2xl md:text-4xl font-bold text-white">Senior Software Engineer</h2>
						<p className="text-lg md:text-xl text-gray-400 max-w-4xl mx-auto">
							Full-stack engineer specializing in scalable backend systems, cloud infrastructure, and distributed applications. 
							Delivered 50% performance improvements and 13K+ daily transactions at Amazon and Capital One.
						</p>
						<div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 text-base md:text-lg text-gray-500">
							<div className="flex items-center gap-2">
								<span className="w-2 h-2 bg-blue-500 rounded-full"></span>
								<span>Currently <span className="text-blue-400 font-semibold">Software Development Engineer at Amazon</span></span>
							</div>
							<div className="flex items-center gap-2">
								<span className="w-2 h-2 bg-purple-500 rounded-full"></span>
								<span>Previously <span className="text-purple-400 font-semibold">Software Engineer at Capital One</span></span>
							</div>
						</div>
					</div>
					
					{/* Key Achievements - Versatile for all roles */}
					<div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6 md:mb-8 max-w-4xl mx-auto">
						<div className="bg-blue-500/10 rounded-lg p-3 border border-blue-500/20">
							<div className="text-lg md:text-xl font-bold text-blue-400">13K+</div>
							<div className="text-xs text-gray-400">Daily Transactions</div>
						</div>
						<div className="bg-purple-500/10 rounded-lg p-3 border border-purple-500/20">
							<div className="text-lg md:text-xl font-bold text-purple-400">50%</div>
							<div className="text-xs text-gray-400">Performance Boost</div>
						</div>
						<div className="bg-teal-500/10 rounded-lg p-3 border border-teal-500/20">
							<div className="text-lg md:text-xl font-bold text-teal-400">6+</div>
							<div className="text-xs text-gray-400">Years Experience</div>
						</div>
						<div className="bg-green-500/10 rounded-lg p-3 border border-green-500/20">
							<div className="text-lg md:text-xl font-bold text-green-400">10+</div>
							<div className="text-xs text-gray-400">Services Built</div>
						</div>
					</div>
					{/* Versatile Tech Stack - Flowing single line with natural wrapping */}
					<div className="flex flex-wrap justify-center gap-2 md:gap-3 mb-6 md:mb-8 max-w-5xl mx-auto">
						{/* Backend */}
						<span className="px-3 md:px-4 py-1.5 md:py-2 bg-blue-500/10 rounded-full text-blue-400 text-xs md:text-sm font-medium">Java & Spring Boot</span>
						{/* Frontend */}
						<span className="px-3 md:px-4 py-1.5 md:py-2 bg-purple-500/10 rounded-full text-purple-400 text-xs md:text-sm font-medium">TypeScript & React</span>
						{/* Cloud */}
						<span className="px-3 md:px-4 py-1.5 md:py-2 bg-teal-500/10 rounded-full text-teal-400 text-xs md:text-sm font-medium">AWS Lambda & DynamoDB</span>
						{/* Backend */}
						<span className="px-3 md:px-4 py-1.5 md:py-2 bg-blue-500/10 rounded-full text-blue-400 text-xs md:text-sm font-medium">Microservices</span>
						{/* Frontend */}
						<span className="px-3 md:px-4 py-1.5 md:py-2 bg-purple-500/10 rounded-full text-purple-400 text-xs md:text-sm font-medium">Next.js & SSR</span>
						{/* Cloud */}
						<span className="px-3 md:px-4 py-1.5 md:py-2 bg-teal-500/10 rounded-full text-teal-400 text-xs md:text-sm font-medium">CloudWatch & CDK</span>
						{/* Backend */}
						<span className="px-3 md:px-4 py-1.5 md:py-2 bg-blue-500/10 rounded-full text-blue-400 text-xs md:text-sm font-medium">GraphQL & REST APIs</span>
						{/* Frontend */}
						<span className="px-3 md:px-4 py-1.5 md:py-2 bg-purple-500/10 rounded-full text-purple-400 text-xs md:text-sm font-medium">MongoDB & PostgreSQL</span>
						{/* Cloud */}
						<span className="px-3 md:px-4 py-1.5 md:py-2 bg-teal-500/10 rounded-full text-teal-400 text-xs md:text-sm font-medium">CI/CD & Monitoring</span>
					</div>
				</motion.div>

				{/* Interactive System Architecture - Versatile for all roles */}
				<div className="w-full max-w-5xl mx-auto relative px-2 md:px-4">
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ delay: 0.3 }}
						className="bg-gray-900/50 backdrop-blur-sm rounded-lg border border-gray-800 p-4 md:p-8"
					>
						<h3 className="text-xl md:text-2xl font-bold mb-6 text-center text-white">Technical Expertise Overview</h3>
						<div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
							{/* Backend Development - Appeals to Backend Engineers */}
							<div
								className={`p-4 md:p-6 rounded-lg transition-colors border-2 ${
									selectedStack === 'frontend' ? 'bg-blue-500/20 border-blue-500/50' : 'bg-gray-800/50 hover:bg-gray-800/80 border-transparent'
								}`}
								onMouseEnter={() => setSelectedStack('frontend')}
								onMouseLeave={() => setSelectedStack(null)}
							>
								<h3 className="text-lg md:text-xl font-semibold mb-3 md:mb-4 text-blue-400">Backend & API Development</h3>
								<ul className="space-y-1.5 md:space-y-2 text-xs md:text-sm text-gray-400">
									<li className="flex items-center gap-2">
										<div className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
										Java & Spring Boot Microservices
									</li>
									<li className="flex items-center gap-2">
										<div className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
										GraphQL & REST API Design
									</li>
									<li className="flex items-center gap-2">
										<div className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
										Database Design & Optimization
									</li>
									<li className="flex items-center gap-2">
										<div className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
										Distributed Systems Architecture
									</li>
								</ul>
							</div>

							{/* Frontend Development - Appeals to Full-Stack Engineers */}
							<div
								className={`p-4 md:p-6 rounded-lg transition-colors border-2 ${
									selectedStack === 'backend' ? 'bg-purple-500/20 border-purple-500/50' : 'bg-gray-800/50 hover:bg-gray-800/80 border-transparent'
								}`}
								onMouseEnter={() => setSelectedStack('backend')}
								onMouseLeave={() => setSelectedStack(null)}
							>
								<h3 className="text-lg md:text-xl font-semibold mb-3 md:mb-4 text-purple-400">Frontend & Full-Stack</h3>
								<ul className="space-y-1.5 md:space-y-2 text-xs md:text-sm text-gray-400">
									<li className="flex items-center gap-2">
										<div className="w-1.5 h-1.5 bg-purple-500 rounded-full" />
										React & TypeScript
									</li>
									<li className="flex items-center gap-2">
										<div className="w-1.5 h-1.5 bg-purple-500 rounded-full" />
										Next.js & Server-Side Rendering
									</li>
									<li className="flex items-center gap-2">
										<div className="w-1.5 h-1.5 bg-purple-500 rounded-full" />
										Responsive UI/UX Design
									</li>
									<li className="flex items-center gap-2">
										<div className="w-1.5 h-1.5 bg-purple-500 rounded-full" />
										Real-time Dashboards & WebSockets
									</li>
								</ul>
							</div>

							{/* Cloud & DevOps - Appeals to Infrastructure Engineers */}
							<div
								className={`p-4 md:p-6 rounded-lg transition-colors border-2 ${
									selectedStack === 'cloud' ? 'bg-teal-500/20 border-teal-500/50' : 'bg-gray-800/50 hover:bg-gray-800/80 border-transparent'
								}`}
								onMouseEnter={() => setSelectedStack('cloud')}
								onMouseLeave={() => setSelectedStack(null)}
							>
								<h3 className="text-lg md:text-xl font-semibold mb-3 md:mb-4 text-teal-400">Cloud & Infrastructure</h3>
								<ul className="space-y-1.5 md:space-y-2 text-xs md:text-sm text-gray-400">
									<li className="flex items-center gap-2">
										<div className="w-1.5 h-1.5 bg-teal-500 rounded-full" />
										AWS Lambda & Step Functions
									</li>
									<li className="flex items-center gap-2">
										<div className="w-1.5 h-1.5 bg-teal-500 rounded-full" />
										DynamoDB, S3 & CloudWatch
									</li>
									<li className="flex items-center gap-2">
										<div className="w-1.5 h-1.5 bg-teal-500 rounded-full" />
										Infrastructure as Code (CDK)
									</li>
									<li className="flex items-center gap-2">
										<div className="w-1.5 h-1.5 bg-teal-500 rounded-full" />
										CI/CD & System Monitoring
									</li>
								</ul>
							</div>
						</div>
					</motion.div>
				</div>
			</div>
		</section>
	);
}
