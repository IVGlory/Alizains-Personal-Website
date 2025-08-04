'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

interface ContactItem {
	id: string;
	label: string;
	icon: React.ReactNode;
	href: string;
	action: 'download' | 'link' | 'email';
}

const contactItems: ContactItem[] = [
	{
		id: 'resume',
		label: 'Resume',
		icon: (
			<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
				<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
			</svg>
		),
		href: '/2025 Senior Software Engineering Resume.pdf',
		action: 'download',
	},
	{
		id: 'linkedin',
		label: 'LinkedIn',
		icon: (
			<svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
				<path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
			</svg>
		),
		href: 'https://linkedin.com/in/alizain-ali',
		action: 'link',
	},
	{
		id: 'github',
		label: 'GitHub',
		icon: (
			<svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
				<path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
			</svg>
		),
		href: 'https://github.com/IVGlory',
		action: 'link',
	},
];

export default function ContactSidebar() {
	const [isVisible, setIsVisible] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			// Show contact sidebar after scrolling down a bit
			setIsVisible(window.scrollY > 200);
		};

		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	const handleContactAction = (item: ContactItem) => {
		if (item.action === 'download') {
			// Create a temporary link for download
			const link = document.createElement('a');
			link.href = item.href;
			link.download = '2025 Senior Software Engineering Resume.pdf';
			document.body.appendChild(link);
			link.click();
			document.body.removeChild(link);
		} else if (item.action === 'link') {
			window.open(item.href, '_blank', 'noopener,noreferrer');
		} else if (item.action === 'email') {
			window.location.href = item.href;
		}
	};

	return (
		<motion.div
			initial={{ opacity: 0, x: 50 }}
			animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : 50 }}
			transition={{ duration: 0.3 }}
			className="fixed right-4 top-1/3 transform -translate-y-1/2 z-50 hidden lg:block"
			style={{ marginTop: '0px' }}
		>
			<div className="bg-gray-900/90 backdrop-blur-sm rounded-xl p-2 border border-gray-800/50 shadow-2xl">
				<nav className="space-y-1">
					{contactItems.map((item) => (
						<motion.button
							key={item.id}
							onClick={() => handleContactAction(item)}
							className="group relative p-2 rounded-lg transition-all duration-200 text-gray-400 hover:text-white hover:bg-gray-800/50"
							whileHover={{ scale: 1.05 }}
							whileTap={{ scale: 0.95 }}
						>
							{/* Content */}
							<div className="relative z-10 flex flex-col items-center">
								<div className="mb-0.5">{item.icon}</div>
								<span className="text-[10px] font-medium leading-tight">{item.label}</span>
							</div>

							{/* Tooltip */}
							<div className="absolute right-full mr-2 px-2 py-1 bg-gray-900 text-white text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap">
								{item.label}
								<div className="absolute right-0 top-1/2 transform translate-x-1 -translate-y-1/2 w-0 h-0 border-r-3 border-r-gray-900 border-y-3 border-y-transparent"></div>
							</div>
						</motion.button>
					))}
				</nav>

				{/* Contact Label */}
				<div className="mt-3 pt-3 border-t border-gray-800/50">
					<div className="flex items-center justify-center gap-1.5">
						<svg className="w-3 h-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
						</svg>
						<span className="text-[9px] text-gray-300 font-semibold tracking-wide">
							Alizainamirali@yahoo.com
						</span>
					</div>
				</div>
			</div>
		</motion.div>
	);
} 