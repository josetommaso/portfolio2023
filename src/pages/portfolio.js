import Link from 'next/link';
import { motion } from 'framer-motion';
import { transition1 } from '@/transitions';
import Head from 'next/head';
import Project from '@/components/Project';
import { useEffect } from 'react';

const projects = [
	{
		file: 'tshirt1.png',
		alt: 'Website with white background, a 3D t-shirt model and text, website to customize your t-shirts by color, patterns and logo.',
		techs: ['NextJS', 'Three.js', 'TailwindCSS'],
		description:
			'Create your unique and exclusive shirt with our brand-new 3D customization tool. Unleash your imagination and define your own style.',
		github_url: 'https://github.com/josetommaso/tshirt-ai',
		project_url: 'https://starlit-kleicha-e2bc48.netlify.app',
	},
	{
		file: 'OLB.jpg',
		alt: 'Website with an NFT image on the right side and text on the left side',
		techs: ['NextJS', 'React Bricks', 'TailwindCSS'],
		description:
			'Welcome to "One Lucky Bastard," the home of an exclusive NFT collection that you won\'t find anywhere else. Our platform is dedicated to showcasing and selling this one-of-a-kind collection to discerning collectors and enthusiasts. \n This is a editable website, thanks to React Bricks.',
		github_url: 'https://github.com/josetommaso/one-lucky-bastard',
		project_url: 'https://one-lucky-bastard.vercel.app',
	},
	{
		file: 'finddrink.jpg',
		alt: 'Website with a search bar and a list of drinks. Search recipes of your favourites drinks.',
		techs: ['ReactJS', 'ContextAPI', 'Bootstrap 4'],
		description: 'Find you favourites drink recipes with this tool.',
		github_url: 'https://github.com/josetommaso/findadrink',
		project_url: 'https://findmeadrink-react.netlify.app',
	},
	{
		file: 'cryptoprice.jpg',
		alt: 'simple web app and user-friendly tool that allows users to quickly and easily check the current market value of various cryptocurrencies',
		techs: ['ReactJS', 'Custom Hooks', 'CSS'],
		description:
			'"CryptoPriceFinder" is a simple and user-friendly tool that allows users to quickly and easily check the current market value of various cryptocurrencies.',
		github_url:
			'https://github.com/josetommaso/crypto-price-app/tree/master/src/components',
		project_url: 'https://crypto-prices-react.netlify.app',
	},
];

const removeStyles = () => {
	const removeStyles = requestAnimationFrame(() => {
		const ul = document.querySelector('#ulAnimation');
		ul.removeAttribute('style');
	});
};

const Portfolio = () => {
	useEffect(() => {
		removeStyles();
	}, []);

	return (
		<>
			<Head>
				<title>Jose Tommaso - Portfolio</title>
			</Head>
			<motion.section
				initial={{ opacity: 0, y: '100%' }}
				animate={{ opacity: 1, y: '0' }}
				exit={{ opacity: 0, y: '100%' }}
				transition={transition1}
				className="section"
			>
				<div className="container mx-auto h-full px-6 lg:px-20">
					<div className="lg:grid grid-rows-2 grid-cols-1 lg:grid-rows-1 lg:grid-cols-2 lg:items-center gap-8 lg:gap-24 lg:min-h-screen h-full pt-36 pb-14 transform-none">
						<article className="mb-10 lg:mb-0">
							<h1 className="h1">Portfolio</h1>
							<p className="text-lg text-white">
								Welcome to my portfolio! Here you&apos;ll find some examples of
								my work, showcasing my skills, specifically in ReactJS. Take a
								look at some of my favorite projects and see for yourself what I
								can do. If you like what you see, feel free to get in touch.
								Thanks for visiting!
							</p>
							<Link href="/contact" className="btn btn-primary mt-8">
								Get in touch
							</Link>
						</article>
						<motion.ul
							id="ulAnimation"
							initial={{ opacity: 0, y: '-80%' }}
							animate={{ opacity: 1, y: '0' }}
							exit={{ opacity: 0, y: '-80%' }}
							onAnimationComplete={removeStyles}
							transition={transition1}
							className="grid grid-rows-2 grid-cols-2 gap-2 list-none rounded-xl overflow-hidden"
						>
							{projects.map((project, i) => (
								<Project key={i} project={project} />
							))}
						</motion.ul>
					</div>
				</div>
			</motion.section>
		</>
	);
};

export default Portfolio;
