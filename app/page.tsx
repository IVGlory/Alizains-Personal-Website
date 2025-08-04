'use client';

import HeroSection from './components/HeroSection';
import SkillsSection from './components/SkillsSection';
import ProjectsSection from './components/ProjectsSection';
import ExperienceSection from './components/ExperienceSection';
import ContactSection from './components/ContactSection';
import NavigationSidebar from './components/NavigationSidebar';
import MobileNavigation from './components/MobileNavigation';
import ContactSidebar from './components/ContactSidebar';

export default function FullStackPortfolio() {
	return (
		<main className="min-h-screen bg-gradient-to-b from-gray-950 to-black text-white">
			<NavigationSidebar />
			<ContactSidebar />
			<MobileNavigation />
			<div id="hero">
				<HeroSection />
			</div>
			<div id="projects">
				<ProjectsSection />
			</div>
			<div id="experience">
				<ExperienceSection />
			</div>
			<div id="skills">
				<SkillsSection />
			</div>
			<div id="contact">
				<ContactSection />
			</div>
			{/* Bottom padding for mobile navigation */}
			<div className="h-16 lg:hidden"></div>
		</main>
	);
}
