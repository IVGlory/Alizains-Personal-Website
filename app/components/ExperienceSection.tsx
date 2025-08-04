'use client';

import { motion } from 'framer-motion';

export default function ExperienceSection() {
	return (
		<section className="py-20 px-4">
			<div className="max-w-6xl mx-auto">
				<motion.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-3xl font-bold mb-16 text-center">
					Professional Experience
				</motion.h2>

				<div className="space-y-16">
					{/* Amazon Experience */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						className="bg-gray-900/50 rounded-xl overflow-hidden border border-gray-800"
					>
						<div className="p-8">
							<div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
								<div className="space-y-6">
									<div>
										<h3 className="text-2xl font-bold mb-4">Amazon Supply Chain & MCF Systems</h3>
										<p className="text-gray-400">
											Drove architecture and development for critical backend services and tools that power Amazon&apos;s global supply chain and MCF. Led initiatives improving
											compliance, payment workflows, and observability across distributed systems.
										</p>
									</div>

									<div className="grid grid-cols-2 gap-6">
										<div>
											<h4 className="text-sm font-semibold text-blue-400 mb-3">Key Systems Built</h4>
											<ul className="space-y-2 text-sm text-gray-400">
												<li>• Deferred Billing Workflow</li>
												<li>• Secure KYC Pipeline</li>
												<li>• FOLEX Dashboard Redesign</li>
												<li>• Export Eligibility Logic</li>
											</ul>
										</div>
										<div>
											<h4 className="text-sm font-semibold text-purple-400 mb-3">Technologies Used</h4>
											<ul className="space-y-2 text-sm text-gray-400">
												<li>• AWS Step Functions, Lambda, DynamoDB</li>
												<li>• S3, SNS, SQS, External APIs</li>
												<li>• React + Java + GraphQL</li>
												<li>• AWS CDK, CloudWatch</li>
											</ul>
										</div>
									</div>

									<div className="space-y-3">
										<h4 className="text-sm font-semibold text-teal-400">Impact Highlights</h4>
										<ul className="space-y-2 text-sm text-gray-400">
											<li>• Automated 13K+ daily vendor payments with deferred billing logic</li>
											<li>• Enabled export compliance through automated KYC pipeline</li>
											<li>• Unblocked 19.5% of sellers with export eligibility logic enhancements</li>
											<li>• Cut system latency by 50% across 10+ backend services</li>
										</ul>
									</div>
								</div>

								{/* Impact Metrics & Skills Visualization */}
								<div className="space-y-6">
									{/* Key Metrics */}
									<div className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-xl p-6 border border-blue-500/20">
										<h4 className="text-sm font-semibold text-blue-400 mb-4">Quantified Impact</h4>
										<div className="grid grid-cols-2 gap-4">
											<div className="text-center">
												<div className="text-2xl font-bold text-blue-400">13K+</div>
												<div className="text-xs text-gray-400">Daily Payments</div>
											</div>
											<div className="text-center">
												<div className="text-2xl font-bold text-purple-400">50%</div>
												<div className="text-xs text-gray-400">Latency Reduction</div>
											</div>
											<div className="text-center">
												<div className="text-2xl font-bold text-teal-400">19.5%</div>
												<div className="text-xs text-gray-400">Sellers Unblocked</div>
											</div>
											<div className="text-center">
												<div className="text-2xl font-bold text-green-400">10+</div>
												<div className="text-xs text-gray-400">Services Optimized</div>
											</div>
										</div>
									</div>

									{/* Technical Skills */}
									<div className="bg-black/30 rounded-xl p-6">
										<h4 className="text-sm font-semibold text-gray-400 mb-4">Technical Leadership</h4>
										<div className="space-y-3">
											<div className="flex items-center gap-3">
												<div className="w-2 h-2 bg-blue-500 rounded-full"></div>
												<span className="text-sm text-gray-400">Architected distributed systems at scale</span>
											</div>
											<div className="flex items-center gap-3">
												<div className="w-2 h-2 bg-purple-500 rounded-full"></div>
												<span className="text-sm text-gray-400">Led cross-functional design discussions</span>
											</div>
											<div className="flex items-center gap-3">
												<div className="w-2 h-2 bg-teal-500 rounded-full"></div>
												<span className="text-sm text-gray-400">Mentored junior engineers</span>
											</div>
											<div className="flex items-center gap-3">
												<div className="w-2 h-2 bg-green-500 rounded-full"></div>
												<span className="text-sm text-gray-400">Drove compliance & security initiatives</span>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</motion.div>

					{/* Capital One Experience */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						className="bg-gray-900/50 rounded-xl overflow-hidden border border-gray-800"
					>
						<div className="p-8">
							<div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
								<div className="space-y-6">
									<div>
										<h3 className="text-2xl font-bold mb-4">Capital One Auto Finance Platform</h3>
										<p className="text-gray-400">
											Designed microservice architectures for scalable auto finance solutions used by millions. Created tools and services supporting lead generation,
											tokenization, and secure identity across distributed systems.
										</p>
									</div>

									<div className="grid grid-cols-2 gap-6">
										<div>
											<h4 className="text-sm font-semibold text-blue-400 mb-3">Key Systems Built</h4>
											<ul className="space-y-2 text-sm text-gray-400">
												<li>• Dealer Navigator Platform</li>
												<li>• QR Code APIs</li>
												<li>• SaaS Token Service</li>
												<li>• Threat Modeling Tools</li>
											</ul>
										</div>
										<div>
											<h4 className="text-sm font-semibold text-purple-400 mb-3">Technologies Used</h4>
											<ul className="space-y-2 text-sm text-gray-400">
												<li>• Java, Spring Boot</li>
												<li>• AngularJS, TypeScript</li>
												<li>• Node.js, MongoDB</li>
												<li>• PostgreSQL, AWS</li>
											</ul>
										</div>
									</div>

									<div className="space-y-3">
										<h4 className="text-sm font-semibold text-teal-400">Impact Highlights</h4>
										<ul className="space-y-2 text-sm text-gray-400">
											<li>• 50% improvement in backend performance via caching layers</li>
											<li>• 15% increase in platform availability</li>
											<li>• Delivered secure, multi-tenant token system for identity management</li>
											<li>• Built tools with real-time WebSocket + financial dashboards for call center agents</li>
										</ul>
									</div>
								</div>

								{/* Impact Metrics & Skills Visualization */}
								<div className="space-y-6">
									{/* Key Metrics */}
									<div className="bg-gradient-to-br from-purple-500/10 to-teal-500/10 rounded-xl p-6 border border-purple-500/20">
										<h4 className="text-sm font-semibold text-purple-400 mb-4">Performance Gains</h4>
										<div className="grid grid-cols-2 gap-4">
											<div className="text-center">
												<div className="text-2xl font-bold text-purple-400">50%</div>
												<div className="text-xs text-gray-400">Performance Boost</div>
											</div>
											<div className="text-center">
												<div className="text-2xl font-bold text-teal-400">15%</div>
												<div className="text-xs text-gray-400">Availability Increase</div>
											</div>
											<div className="text-center">
												<div className="text-2xl font-bold text-blue-400">1000s</div>
												<div className="text-xs text-gray-400">Dealerships Served</div>
											</div>
											<div className="text-center">
												<div className="text-2xl font-bold text-green-400">24/7</div>
												<div className="text-xs text-gray-400">System Uptime</div>
											</div>
										</div>
									</div>

									{/* Technical Skills */}
									<div className="bg-black/30 rounded-xl p-6">
										<h4 className="text-sm font-semibold text-gray-400 mb-4">Technical Excellence</h4>
										<div className="space-y-3">
											<div className="flex items-center gap-3">
												<div className="w-2 h-2 bg-purple-500 rounded-full"></div>
												<span className="text-sm text-gray-400">Designed secure multi-tenant architectures</span>
											</div>
											<div className="flex items-center gap-3">
												<div className="w-2 h-2 bg-teal-500 rounded-full"></div>
												<span className="text-sm text-gray-400">Built real-time financial dashboards</span>
											</div>
											<div className="flex items-center gap-3">
												<div className="w-2 h-2 bg-blue-500 rounded-full"></div>
												<span className="text-sm text-gray-400">Implemented identity & token management</span>
											</div>
											<div className="flex items-center gap-3">
												<div className="w-2 h-2 bg-green-500 rounded-full"></div>
												<span className="text-sm text-gray-400">Collaborated across legal & security teams</span>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</motion.div>
				</div>
			</div>
		</section>
	);
}