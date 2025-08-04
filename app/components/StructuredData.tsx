export default function StructuredData() {
	const structuredData = {
		"@context": "https://schema.org",
		"@type": "Person",
		"name": "Alizain Ali",
		"jobTitle": "Senior Software Engineer",
		"worksFor": {
			"@type": "Organization",
			"name": "Amazon"
		},
		"alumniOf": {
			"@type": "Organization",
			"name": "Capital One"
		},
		"description": "Senior Software Engineer at Amazon with 6+ years experience building scalable backend systems, cloud infrastructure, and distributed applications. Delivered 50% performance improvements and 13K+ daily transactions.",
		"url": "https://alizainali.com",
		"email": "alizainamirali@yahoo.com",
		"address": {
			"@type": "PostalAddress",
			"addressLocality": "Austin",
			"addressRegion": "Texas",
			"addressCountry": "US"
		},
		"knowsAbout": [
			"Java",
			"Spring Boot",
			"AWS Lambda",
			"DynamoDB",
			"Microservices",
			"TypeScript",
			"React",
			"Next.js",
			"GraphQL",
			"REST APIs",
			"System Architecture",
			"Cloud Infrastructure",
			"Distributed Systems",
			"Performance Optimization"
		],
		"hasOccupation": {
			"@type": "Occupation",
			"name": "Senior Software Engineer",
			"occupationLocation": {
				"@type": "City",
				"name": "Austin"
			}
		},
		"sameAs": [
			"https://linkedin.com/in/alizain-ali-a3ba13178",
			"https://github.com/alizainali",
			"https://linktr.ee/AlizainAli"
		]
	};

	return (
		<script
			type="application/ld+json"
			dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
		/>
	);
} 