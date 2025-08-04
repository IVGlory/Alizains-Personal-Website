'use client';

import { motion } from 'framer-motion';

export default function ProjectsSection() {
	return (
		<section className="py-20 px-4">
			<div className="max-w-6xl mx-auto">
				<motion.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-3xl font-bold mb-16 text-center">
					Key Projects & Achievements
				</motion.h2>

				<div className="space-y-16">
					{/* Job Comparator - AI-Powered Job Comparison Platform */}
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
										<h3 className="text-2xl font-bold mb-4">Job Comparator - AI-Powered Platform (2025)</h3>
										<p className="text-gray-400">
											A comprehensive job comparison platform that uses AI to analyze and compare job offers, helping users make informed career decisions with intelligent insights.
										</p>
									</div>

									<div className="grid grid-cols-2 gap-6">
										<div>
											<h4 className="text-sm font-semibold text-blue-400 mb-3">Key Features</h4>
											<ul className="space-y-2 text-sm text-gray-400">
												<li>• AI-Powered Job Analysis</li>
												<li>• Real-time Offer Comparison</li>
												<li>• Intelligent Chatbot Assistant</li>
												<li>• Credit-based Usage System</li>
											</ul>
										</div>
										<div>
											<h4 className="text-sm font-semibold text-purple-400 mb-3">Technologies Used</h4>
											<ul className="space-y-2 text-sm text-gray-400">
												<li>• Next.js & TypeScript</li>
												<li>• Gemini AI Integration</li>
												<li>• MongoDB & NextAuth.js</li>
												<li>• Stripe & Inngest</li>
											</ul>
										</div>
									</div>

									<div className="space-y-3">
										<h4 className="text-sm font-semibold text-teal-400">System Architecture</h4>
										<ul className="space-y-2 text-sm text-gray-400">
											<li>• Microservices with API Routes</li>
											<li>• Asynchronous AI Processing</li>
											<li>• Secure Payment Integration</li>
											<li>• Real-time User Interactions</li>
										</ul>
									</div>
								</div>

								<div className="bg-black/30 rounded-xl p-6">
									<h4 className="text-sm font-semibold text-gray-400 mb-4">System Architecture</h4>
									<div className="aspect-[4/3] bg-black/50 rounded-lg p-4">
										<svg className="w-full h-full" viewBox="0 0 400 300" preserveAspectRatio="xMidYMid meet">
											{/* User Layer */}
											<g>
												<rect x="20" y="20" width="360" height="35" rx="4" className="fill-blue-500/20 stroke-blue-500" strokeWidth="1" />
												<text x="200" y="42" textAnchor="middle" className="fill-gray-400 text-[10px] font-medium">
													User Interface (Next.js Frontend)
												</text>
											</g>

											{/* API Layer */}
											<g>
												<rect x="20" y="70" width="170" height="35" rx="4" className="fill-purple-500/20 stroke-purple-500" strokeWidth="1" />
												<rect x="210" y="70" width="170" height="35" rx="4" className="fill-purple-500/20 stroke-purple-500" strokeWidth="1" />
												<text x="105" y="92" textAnchor="middle" className="fill-gray-400 text-[10px] font-medium">
													API Routes
												</text>
												<text x="295" y="92" textAnchor="middle" className="fill-gray-400 text-[10px] font-medium">
													Service Layer
												</text>
											</g>

											{/* AI & External Services */}
											<g>
												<rect x="20" y="120" width="110" height="35" rx="4" className="fill-teal-500/20 stroke-teal-500" strokeWidth="1" />
												<rect x="145" y="120" width="110" height="35" rx="4" className="fill-teal-500/20 stroke-teal-500" strokeWidth="1" />
												<rect x="270" y="120" width="110" height="35" rx="4" className="fill-teal-500/20 stroke-teal-500" strokeWidth="1" />
												<text x="75" y="142" textAnchor="middle" className="fill-gray-400 text-[9px] font-medium">
													Gemini AI
												</text>
												<text x="200" y="142" textAnchor="middle" className="fill-gray-400 text-[9px] font-medium">
													Stripe
												</text>
												<text x="325" y="142" textAnchor="middle" className="fill-gray-400 text-[9px] font-medium">
													Inngest
												</text>
											</g>

											{/* Database Layer */}
											<g>
												<rect x="20" y="170" width="360" height="35" rx="4" className="fill-blue-500/20 stroke-blue-500" strokeWidth="1" />
												<text x="200" y="192" textAnchor="middle" className="fill-gray-400 text-[9px] font-medium">
													MongoDB (Users, Offers, Comparisons, Feature Requests)
												</text>
											</g>

											{/* Authentication Layer */}
											<g>
												<rect x="20" y="220" width="170" height="35" rx="4" className="fill-purple-500/20 stroke-purple-500" strokeWidth="1" />
												<rect x="210" y="220" width="170" height="35" rx="4" className="fill-purple-500/20 stroke-purple-500" strokeWidth="1" />
												<text x="105" y="242" textAnchor="middle" className="fill-gray-400 text-[9px] font-medium">
													NextAuth.js
												</text>
												<text x="295" y="242" textAnchor="middle" className="fill-gray-400 text-[9px] font-medium">
													JWT Sessions
												</text>
											</g>

											{/* Connection Lines */}
											<g className="stroke-gray-600" strokeWidth="1">
												<line x1="200" y1="55" x2="200" y2="70" />
												<line x1="105" y1="105" x2="105" y2="120" />
												<line x1="295" y1="105" x2="295" y2="120" />
												<line x1="75" y1="155" x2="75" y2="170" />
												<line x1="200" y1="155" x2="200" y2="170" />
												<line x1="325" y1="155" x2="325" y2="170" />
												<line x1="105" y1="205" x2="105" y2="220" />
												<line x1="295" y1="205" x2="295" y2="220" />
											</g>
										</svg>
									</div>
								</div>
							</div>
						</div>
					</motion.div>
					{/* FrontDesk AI - Voice Agent Platform */}
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
										<h3 className="text-2xl font-bold mb-4">FrontDesk AI - Voice Agent Platform (2025)</h3>
										<p className="text-gray-400">
											A web-based platform empowering small and medium businesses to set up AI-powered voice agents that handle customer phone calls and automate receptionist tasks through intelligent workflows.
										</p>
									</div>

									<div className="grid grid-cols-2 gap-6">
										<div>
											<h4 className="text-sm font-semibold text-blue-400 mb-3">Key Features</h4>
											<ul className="space-y-2 text-sm text-gray-400">
												<li>• AI Voice Agent Creation</li>
												<li>• Multi-tenant SaaS Architecture</li>
												<li>• Workflow Template System</li>
												<li>• Calendar Integration</li>
											</ul>
										</div>
										<div>
											<h4 className="text-sm font-semibold text-purple-400 mb-3">Technologies Used</h4>
											<ul className="space-y-2 text-sm text-gray-400">
												<li>• Vapi Voice AI API</li>
												<li>• Cal.com Calendar Integration</li>
												<li>• Pipedream Workflow Engine</li>
												<li>• Multi-tenant Database</li>
											</ul>
										</div>
									</div>

									<div className="space-y-3">
										<h4 className="text-sm font-semibold text-teal-400">System Architecture</h4>
										<ul className="space-y-2 text-sm text-gray-400">
											<li>• Subscription-based SaaS Model</li>
											<li>• Third-party API Orchestration</li>
											<li>• Automated Workflow Generation</li>
											<li>• Real-time Agent Monitoring</li>
										</ul>
									</div>
								</div>

								<div className="bg-black/30 rounded-xl p-6">
									<h4 className="text-sm font-semibold text-gray-400 mb-4">System Architecture</h4>
									<div className="aspect-[4/3] bg-black/50 rounded-lg p-4">
										<svg className="w-full h-full" viewBox="0 0 400 300" preserveAspectRatio="xMidYMid meet">
											{/* Customer Layer */}
											<g>
												<rect x="20" y="20" width="360" height="30" rx="4" className="fill-blue-500/20 stroke-blue-500" strokeWidth="1" />
												<text x="200" y="42" textAnchor="middle" className="fill-gray-400 text-[10px] font-medium">
													Customer (SMB Owner)
												</text>
											</g>

											{/* Frontend Layer */}
											<g>
												<rect x="20" y="65" width="170" height="30" rx="4" className="fill-purple-500/20 stroke-purple-500" strokeWidth="1" />
												<rect x="210" y="65" width="170" height="30" rx="4" className="fill-purple-500/20 stroke-purple-500" strokeWidth="1" />
												<text x="105" y="87" textAnchor="middle" className="fill-gray-400 text-[10px] font-medium">
													Frontend UI
												</text>
												<text x="295" y="87" textAnchor="middle" className="fill-gray-400 text-[10px] font-medium">
													Dashboard UI
												</text>
											</g>

											{/* Backend Layer */}
											<g>
												<rect x="20" y="110" width="360" height="30" rx="4" className="fill-teal-500/20 stroke-teal-500" strokeWidth="1" />
												<text x="200" y="132" textAnchor="middle" className="fill-gray-400 text-[10px] font-medium">
													Backend (Multi-tenant SaaS)
												</text>
											</g>

											{/* External APIs */}
											<g>
												<rect x="20" y="155" width="110" height="30" rx="4" className="fill-blue-500/20 stroke-blue-500" strokeWidth="1" />
												<rect x="145" y="155" width="110" height="30" rx="4" className="fill-blue-500/20 stroke-blue-500" strokeWidth="1" />
												<rect x="270" y="155" width="110" height="30" rx="4" className="fill-blue-500/20 stroke-blue-500" strokeWidth="1" />
												<text x="75" y="177" textAnchor="middle" className="fill-gray-400 text-[9px] font-medium">
													Vapi API
												</text>
												<text x="200" y="177" textAnchor="middle" className="fill-gray-400 text-[9px] font-medium">
													Cal.com API
												</text>
												<text x="325" y="177" textAnchor="middle" className="fill-gray-400 text-[9px] font-medium">
													Pipedream API
												</text>
											</g>

											{/* Database Layer */}
											<g>
												<rect x="20" y="200" width="360" height="30" rx="4" className="fill-purple-500/20 stroke-purple-500" strokeWidth="1" />
												<text x="200" y="222" textAnchor="middle" className="fill-gray-400 text-[9px] font-medium">
													Database (Tenant Profiles, Agent IDs, Workflow IDs)
												</text>
											</g>

											{/* Workflow Templates */}
											<g>
												<rect x="20" y="245" width="170" height="30" rx="4" className="fill-teal-500/20 stroke-teal-500" strokeWidth="1" />
												<rect x="210" y="245" width="170" height="30" rx="4" className="fill-teal-500/20 stroke-teal-500" strokeWidth="1" />
												<text x="105" y="267" textAnchor="middle" className="fill-gray-400 text-[9px] font-medium">
													Workflow Templates
												</text>
												<text x="295" y="267" textAnchor="middle" className="fill-gray-400 text-[9px] font-medium">
													Agent Monitoring
												</text>
											</g>

											{/* Connection Lines */}
											<g className="stroke-gray-600" strokeWidth="1">
												<line x1="200" y1="50" x2="200" y2="65" />
												<line x1="105" y1="95" x2="105" y2="110" />
												<line x1="295" y1="95" x2="295" y2="110" />
												<line x1="75" y1="140" x2="75" y2="155" />
												<line x1="200" y1="140" x2="200" y2="155" />
												<line x1="325" y1="140" x2="325" y2="155" />
												<line x1="200" y1="185" x2="200" y2="200" />
												<line x1="105" y1="230" x2="105" y2="245" />
												<line x1="295" y1="230" x2="295" y2="245" />
											</g>
										</svg>
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
