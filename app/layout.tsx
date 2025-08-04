import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import StructuredData from './components/StructuredData';

const geistSans = Geist({
	variable: '--font-geist-sans',
	subsets: ['latin'],
});

const geistMono = Geist_Mono({
	variable: '--font-geist-mono',
	subsets: ['latin'],
});

export const metadata: Metadata = {
	title: 'Alizain Ali - Senior Software Engineer | Amazon & Capital One',
	description:
		'Senior Software Engineer at Amazon with 6+ years experience building scalable backend systems, cloud infrastructure, and distributed applications. Delivered 50% performance improvements and 13K+ daily transactions.',
	icons: {
		icon: '/favicon.ico',
		// You can also specify different sizes:
		// icon: [
		//   { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
		//   { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
		// ],
		// apple: '/apple-touch-icon.png',
	},
	keywords: [
		'Senior Software Engineer',
		'Amazon',
		'Capital One',
		'Backend Development',
		'Cloud Infrastructure',
		'Distributed Systems',
		'Java',
		'Spring Boot',
		'AWS',
		'Lambda',
		'DynamoDB',
		'Microservices',
		'TypeScript',
		'React',
		'Next.js',
		'System Architecture',
		'Performance Optimization',
		'Full-Stack Development',
		'Alizain Ali',
	],
	authors: [{ name: 'Alizain Ali' }],
	creator: 'Alizain Ali',
	openGraph: {
		title: 'Alizain Ali - Senior Software Engineer | Amazon & Capital One',
		description:
			'Senior Software Engineer at Amazon with 6+ years experience building scalable backend systems, cloud infrastructure, and distributed applications.',
		url: 'https://alizainali.com',
		siteName: 'Alizain Ali - Portfolio',
		images: [
			{
				url: '/code.jpg',
				width: 1200,
				height: 630,
				alt: 'Alizain Ali - Senior Software Engineer Portfolio',
			},
		],
		locale: 'en_US',
		type: 'website',
	},
	twitter: {
		card: 'summary_large_image',
		title: 'Alizain Ali - Senior Software Engineer',
		description:
			'Senior Software Engineer at Amazon with 6+ years experience building scalable backend systems and cloud infrastructure.',
		creator: '@alizainali',
		images: ['/code.jpg'],
	},
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			'max-video-preview': -1,
			'max-image-preview': 'large',
			'max-snippet': -1,
		},
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<head>
				<StructuredData />
			</head>
			<body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>{children}</body>
		</html>
	);
}
