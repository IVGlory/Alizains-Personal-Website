'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

interface NavItem {
	id: string;
	label: string;
	icon: React.ReactNode;
}

const navItems: NavItem[] = [
	{
		id: 'hero',
		label: 'Home',
		icon: (
			<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
				<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
			</svg>
		),
	},
	{
		id: 'projects',
		label: 'Projects',
		icon: (
			<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
				<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
			</svg>
		),
	},
	{
		id: 'experience',
		label: 'Experience',
		icon: (
			<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
				<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 012 2v6a2 2 0 01-2 2H8a2 2 0 01-2-2V8a2 2 0 012-2V6" />
			</svg>
		),
	},
	{
		id: 'skills',
		label: 'Skills',
		icon: (
			<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
				<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
			</svg>
		),
	},
	{
		id: 'contact',
		label: 'Contact',
		icon: (
			<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
				<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
			</svg>
		),
	},
];

export default function MobileNavigation() {
	const [activeSection, setActiveSection] = useState('hero');

	useEffect(() => {
		const handleScroll = () => {
			const sections = navItems.map(item => item.id);
			const scrollPosition = window.scrollY + 100;

			// Calculate scroll progress (removed unused variable)
			// const documentHeight = document.documentElement.scrollHeight - window.innerHeight;
			// const currentProgress = Math.min((window.scrollY / documentHeight) * 100, 100);

			for (const sectionId of sections) {
				const element = document.getElementById(sectionId);
				if (element) {
					const { offsetTop, offsetHeight } = element;
					if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
						setActiveSection(sectionId);
						break;
					}
				}
			}
		};

		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	const scrollToSection = (sectionId: string) => {
		const element = document.getElementById(sectionId);
		if (element) {
			element.scrollIntoView({ behavior: 'smooth' });
		}
	};

	return (
		<motion.div
			initial={{ y: 100 }}
			animate={{ y: 0 }}
			transition={{ duration: 0.3 }}
			className="fixed bottom-4 left-1/2 transform -translate-x-1/2 z-50 lg:hidden"
		>
			<div className="bg-gray-900/95 backdrop-blur-sm rounded-full px-3 py-2 border border-gray-800/50 shadow-2xl">
				<nav className="flex space-x-0.5">
					{navItems.map((item) => (
						<motion.button
							key={item.id}
							onClick={() => scrollToSection(item.id)}
							className={`relative p-1.5 rounded-full transition-all duration-200 ${
								activeSection === item.id
									? 'bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-blue-400'
									: 'text-gray-400 hover:text-white hover:bg-gray-800/50'
							}`}
							whileHover={{ scale: 1.1 }}
							whileTap={{ scale: 0.95 }}
						>
							{/* Active indicator */}
							{activeSection === item.id && (
								<motion.div
									layoutId="mobileActiveIndicator"
									className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full"
									initial={false}
									transition={{ type: "spring", stiffness: 500, damping: 30 }}
								/>
							)}

							{/* Content - Icon only for mobile */}
							<div className="relative z-10 flex items-center justify-center">
								<div className="w-4 h-4">{item.icon}</div>
							</div>

							{/* Active dot indicator */}
							{activeSection === item.id && (
								<motion.div
									layoutId="mobileActiveDot"
									className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-blue-400 rounded-full"
									initial={false}
									transition={{ type: "spring", stiffness: 500, damping: 30 }}
								/>
							)}
						</motion.button>
					))}
				</nav>
			</div>
		</motion.div>
	);
} 