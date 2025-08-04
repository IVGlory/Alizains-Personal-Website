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

export default function NavigationSidebar() {
	const [activeSection, setActiveSection] = useState('hero');
	const [isVisible, setIsVisible] = useState(false);
	const [scrollProgress, setScrollProgress] = useState(0);

	useEffect(() => {
		const handleScroll = () => {
			const sections = navItems.map(item => item.id);
			const scrollPosition = window.scrollY + window.innerHeight / 3; // Use 1/3 of viewport height as offset

			// Calculate scroll progress
			const documentHeight = document.documentElement.scrollHeight - window.innerHeight;
			const currentProgress = Math.min((window.scrollY / documentHeight) * 100, 100);
			setScrollProgress(currentProgress);

			// Find the section that is most prominently in view
			let bestMatch = 'hero';
			let bestScore = -1;

			for (const sectionId of sections) {
				const element = document.getElementById(sectionId);
				if (element) {
					const { offsetTop, offsetHeight } = element;
					const sectionBottom = offsetTop + offsetHeight;
					const sectionCenter = offsetTop + offsetHeight / 2;
					
					// Calculate how much of the section is visible in the viewport
					const viewportTop = window.scrollY;
					const viewportBottom = window.scrollY + window.innerHeight;
					
					const visibleTop = Math.max(offsetTop, viewportTop);
					const visibleBottom = Math.min(sectionBottom, viewportBottom);
					const visibleHeight = Math.max(0, visibleBottom - visibleTop);
					
					// Score based on visibility and proximity to viewport center
					const visibilityScore = visibleHeight / offsetHeight;
					const centerProximityScore = 1 - Math.abs(scrollPosition - sectionCenter) / window.innerHeight;
					const totalScore = visibilityScore * 0.7 + centerProximityScore * 0.3;
					
					if (totalScore > bestScore) {
						bestScore = totalScore;
						bestMatch = sectionId;
					}
				}
			}

			setActiveSection(bestMatch);

			// Show navigation after scrolling down a bit
			setIsVisible(window.scrollY > 200);
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
			initial={{ opacity: 0, x: -50 }}
			animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : -50 }}
			transition={{ duration: 0.3 }}
			className="fixed left-4 top-1/3 transform -translate-y-1/2 z-50 hidden lg:block"
		>
			<div className="bg-gray-900/95 backdrop-blur-md rounded-2xl p-3 border border-gray-800/60 shadow-2xl min-w-[72px]">
				<nav className="space-y-2">
					{navItems.map((item) => (
						<motion.button
							key={item.id}
							onClick={() => scrollToSection(item.id)}
							className={`group relative w-12 h-12 rounded-xl transition-all duration-200 flex flex-col items-center justify-center ${
								activeSection === item.id
									? 'bg-gradient-to-br from-blue-500/20 to-purple-500/20 text-blue-400 border border-blue-500/30'
									: 'text-gray-400 hover:text-white hover:bg-gray-800/60'
							}`}
							whileHover={{ scale: 1.05 }}
							whileTap={{ scale: 0.95 }}
						>
							{/* Active indicator */}
							{activeSection === item.id && (
								<motion.div
									layoutId="activeIndicator"
									className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-xl border border-blue-500/30"
									initial={false}
									transition={{ type: "spring", stiffness: 500, damping: 30 }}
								/>
							)}

							{/* Content */}
							<div className="relative z-10 flex flex-col items-center justify-center w-full h-full">
								<div className="mb-1">{item.icon}</div>
								<span className="text-[9px] font-medium leading-tight tracking-wide">{item.label}</span>
							</div>

							{/* Tooltip */}
							<div className="absolute left-full ml-3 px-3 py-2 bg-gray-900/95 text-white text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap shadow-lg border border-gray-800/50">
								{item.label}
								<div className="absolute left-0 top-1/2 transform -translate-x-1 -translate-y-1/2 w-0 h-0 border-l-3 border-l-gray-900/95 border-y-3 border-y-transparent"></div>
							</div>
						</motion.button>
					))}
				</nav>

				{/* Progress indicator */}
				<div className="mt-4 pt-4 border-t border-gray-800/60">
					<div className="w-full bg-gray-800/60 rounded-full h-1">
						<motion.div
							className="bg-gradient-to-r from-blue-500 to-purple-500 h-1 rounded-full"
							style={{
								width: `${scrollProgress}%`
							}}
							transition={{ duration: 0.3 }}
						/>
					</div>
					<div className="text-[9px] text-gray-500 text-center mt-2 font-medium">
						{Math.round(scrollProgress)}%
					</div>
				</div>
			</div>
		</motion.div>
	);
} 