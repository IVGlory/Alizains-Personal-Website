'use client';

import { motion } from 'framer-motion';

export default function SkillsSection() {
	return (
		<section className="py-20 px-4">
			<div className="max-w-6xl mx-auto">
				<motion.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-3xl font-bold mb-16 text-center">
					Technical Skills & Expertise
				</motion.h2>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
					{/* Backend Development */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						className="bg-gray-900/50 rounded-xl p-6 border border-gray-800"
					>
						<h3 className="text-xl font-bold mb-4 text-blue-400">Backend Development</h3>
						<div className="space-y-3">
							<div className="flex justify-between items-center">
								<span className="text-sm text-gray-400">Java & Spring Boot</span>
								<div className="flex gap-1">
									<div className="w-2 h-2 bg-blue-500 rounded-full"></div>
									<div className="w-2 h-2 bg-blue-500 rounded-full"></div>
									<div className="w-2 h-2 bg-blue-500 rounded-full"></div>
									<div className="w-2 h-2 bg-blue-500 rounded-full"></div>
									<div className="w-2 h-2 bg-blue-500 rounded-full"></div>
								</div>
							</div>
							<div className="flex justify-between items-center">
								<span className="text-sm text-gray-400">Microservices</span>
								<div className="flex gap-1">
									<div className="w-2 h-2 bg-blue-500 rounded-full"></div>
									<div className="w-2 h-2 bg-blue-500 rounded-full"></div>
									<div className="w-2 h-2 bg-blue-500 rounded-full"></div>
									<div className="w-2 h-2 bg-blue-500 rounded-full"></div>
									<div className="w-2 h-2 bg-blue-500 rounded-full"></div>
								</div>
							</div>
							<div className="flex justify-between items-center">
								<span className="text-sm text-gray-400">GraphQL & REST APIs</span>
								<div className="flex gap-1">
									<div className="w-2 h-2 bg-blue-500 rounded-full"></div>
									<div className="w-2 h-2 bg-blue-500 rounded-full"></div>
									<div className="w-2 h-2 bg-blue-500 rounded-full"></div>
									<div className="w-2 h-2 bg-blue-500 rounded-full"></div>
									<div className="w-2 h-2 bg-gray-600 rounded-full"></div>
								</div>
							</div>
							<div className="flex justify-between items-center">
								<span className="text-sm text-gray-400">Database Design</span>
								<div className="flex gap-1">
									<div className="w-2 h-2 bg-blue-500 rounded-full"></div>
									<div className="w-2 h-2 bg-blue-500 rounded-full"></div>
									<div className="w-2 h-2 bg-blue-500 rounded-full"></div>
									<div className="w-2 h-2 bg-blue-500 rounded-full"></div>
									<div className="w-2 h-2 bg-gray-600 rounded-full"></div>
								</div>
							</div>
						</div>
					</motion.div>

					{/* Cloud & Infrastructure */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ delay: 0.1 }}
						className="bg-gray-900/50 rounded-xl p-6 border border-gray-800"
					>
						<h3 className="text-xl font-bold mb-4 text-teal-400">Cloud & Infrastructure</h3>
						<div className="space-y-3">
							<div className="flex justify-between items-center">
								<span className="text-sm text-gray-400">AWS Lambda & Step Functions</span>
								<div className="flex gap-1">
									<div className="w-2 h-2 bg-teal-500 rounded-full"></div>
									<div className="w-2 h-2 bg-teal-500 rounded-full"></div>
									<div className="w-2 h-2 bg-teal-500 rounded-full"></div>
									<div className="w-2 h-2 bg-teal-500 rounded-full"></div>
									<div className="w-2 h-2 bg-teal-500 rounded-full"></div>
								</div>
							</div>
							<div className="flex justify-between items-center">
								<span className="text-sm text-gray-400">DynamoDB & S3</span>
								<div className="flex gap-1">
									<div className="w-2 h-2 bg-teal-500 rounded-full"></div>
									<div className="w-2 h-2 bg-teal-500 rounded-full"></div>
									<div className="w-2 h-2 bg-teal-500 rounded-full"></div>
									<div className="w-2 h-2 bg-teal-500 rounded-full"></div>
									<div className="w-2 h-2 bg-teal-500 rounded-full"></div>
								</div>
							</div>
							<div className="flex justify-between items-center">
								<span className="text-sm text-gray-400">Infrastructure as Code (CDK)</span>
								<div className="flex gap-1">
									<div className="w-2 h-2 bg-teal-500 rounded-full"></div>
									<div className="w-2 h-2 bg-teal-500 rounded-full"></div>
									<div className="w-2 h-2 bg-teal-500 rounded-full"></div>
									<div className="w-2 h-2 bg-teal-500 rounded-full"></div>
									<div className="w-2 h-2 bg-gray-600 rounded-full"></div>
								</div>
							</div>
							<div className="flex justify-between items-center">
								<span className="text-sm text-gray-400">CI/CD & Monitoring</span>
								<div className="flex gap-1">
									<div className="w-2 h-2 bg-teal-500 rounded-full"></div>
									<div className="w-2 h-2 bg-teal-500 rounded-full"></div>
									<div className="w-2 h-2 bg-teal-500 rounded-full"></div>
									<div className="w-2 h-2 bg-teal-500 rounded-full"></div>
									<div className="w-2 h-2 bg-gray-600 rounded-full"></div>
								</div>
							</div>
						</div>
					</motion.div>

					{/* Frontend Development */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ delay: 0.2 }}
						className="bg-gray-900/50 rounded-xl p-6 border border-gray-800"
					>
						<h3 className="text-xl font-bold mb-4 text-purple-400">Frontend Development</h3>
						<div className="space-y-3">
							<div className="flex justify-between items-center">
								<span className="text-sm text-gray-400">React & TypeScript</span>
								<div className="flex gap-1">
									<div className="w-2 h-2 bg-purple-500 rounded-full"></div>
									<div className="w-2 h-2 bg-purple-500 rounded-full"></div>
									<div className="w-2 h-2 bg-purple-500 rounded-full"></div>
									<div className="w-2 h-2 bg-purple-500 rounded-full"></div>
									<div className="w-2 h-2 bg-purple-500 rounded-full"></div>
								</div>
							</div>
							<div className="flex justify-between items-center">
								<span className="text-sm text-gray-400">Next.js & SSR</span>
								<div className="flex gap-1">
									<div className="w-2 h-2 bg-purple-500 rounded-full"></div>
									<div className="w-2 h-2 bg-purple-500 rounded-full"></div>
									<div className="w-2 h-2 bg-purple-500 rounded-full"></div>
									<div className="w-2 h-2 bg-purple-500 rounded-full"></div>
									<div className="w-2 h-2 bg-gray-600 rounded-full"></div>
								</div>
							</div>
							<div className="flex justify-between items-center">
								<span className="text-sm text-gray-400">Responsive UI/UX</span>
								<div className="flex gap-1">
									<div className="w-2 h-2 bg-purple-500 rounded-full"></div>
									<div className="w-2 h-2 bg-purple-500 rounded-full"></div>
									<div className="w-2 h-2 bg-purple-500 rounded-full"></div>
									<div className="w-2 h-2 bg-purple-500 rounded-full"></div>
									<div className="w-2 h-2 bg-gray-600 rounded-full"></div>
								</div>
							</div>
							<div className="flex justify-between items-center">
								<span className="text-sm text-gray-400">Real-time Dashboards</span>
								<div className="flex gap-1">
									<div className="w-2 h-2 bg-purple-500 rounded-full"></div>
									<div className="w-2 h-2 bg-purple-500 rounded-full"></div>
									<div className="w-2 h-2 bg-purple-500 rounded-full"></div>
									<div className="w-2 h-2 bg-gray-600 rounded-full"></div>
									<div className="w-2 h-2 bg-gray-600 rounded-full"></div>
								</div>
							</div>
						</div>
					</motion.div>

					{/* Leadership & Soft Skills */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ delay: 0.3 }}
						className="bg-gray-900/50 rounded-xl p-6 border border-gray-800"
					>
						<h3 className="text-xl font-bold mb-4 text-green-400">Leadership & Collaboration</h3>
						<div className="space-y-3">
							<div className="flex justify-between items-center">
								<span className="text-sm text-gray-400">Technical Leadership</span>
								<div className="flex gap-1">
									<div className="w-2 h-2 bg-green-500 rounded-full"></div>
									<div className="w-2 h-2 bg-green-500 rounded-full"></div>
									<div className="w-2 h-2 bg-green-500 rounded-full"></div>
									<div className="w-2 h-2 bg-green-500 rounded-full"></div>
									<div className="w-2 h-2 bg-green-500 rounded-full"></div>
								</div>
							</div>
							<div className="flex justify-between items-center">
								<span className="text-sm text-gray-400">Cross-functional Collaboration</span>
								<div className="flex gap-1">
									<div className="w-2 h-2 bg-green-500 rounded-full"></div>
									<div className="w-2 h-2 bg-green-500 rounded-full"></div>
									<div className="w-2 h-2 bg-green-500 rounded-full"></div>
									<div className="w-2 h-2 bg-green-500 rounded-full"></div>
									<div className="w-2 h-2 bg-gray-600 rounded-full"></div>
								</div>
							</div>
							<div className="flex justify-between items-center">
								<span className="text-sm text-gray-400">Mentoring & Coaching</span>
								<div className="flex gap-1">
									<div className="w-2 h-2 bg-green-500 rounded-full"></div>
									<div className="w-2 h-2 bg-green-500 rounded-full"></div>
									<div className="w-2 h-2 bg-green-500 rounded-full"></div>
									<div className="w-2 h-2 bg-green-500 rounded-full"></div>
									<div className="w-2 h-2 bg-gray-600 rounded-full"></div>
								</div>
							</div>
							<div className="flex justify-between items-center">
								<span className="text-sm text-gray-400">System Architecture</span>
								<div className="flex gap-1">
									<div className="w-2 h-2 bg-green-500 rounded-full"></div>
									<div className="w-2 h-2 bg-green-500 rounded-full"></div>
									<div className="w-2 h-2 bg-green-500 rounded-full"></div>
									<div className="w-2 h-2 bg-green-500 rounded-full"></div>
									<div className="w-2 h-2 bg-green-500 rounded-full"></div>
								</div>
							</div>
						</div>
					</motion.div>
				</div>
			</div>
		</section>
	);
} 