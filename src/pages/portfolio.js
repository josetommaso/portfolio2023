import Link from 'next/link';
import { motion } from 'framer-motion';
import { transition1 } from '@/transitions';
import Head from 'next/head';
import Project from '@/components/Project';
import { useEffect } from 'react';

const projects = [
	{
		file: 'maracay-meals-1.jpg',
		alt: 'website project thumbnail',
	},
	{
		file: 'portfolio-2.jpg',
		alt: 'website project thumbnail',
	},
	{
		file: 'portfolio-3.jpg',
		alt: 'website project thumbnail',
	},
	{
		file: 'portfolio-4.jpg',
		alt: 'website project thumbnail',
	},
];

const Portfolio = () => {
	const removeStyles = () => {
		const removeStyles = requestAnimationFrame(() => {
			const ul = document.querySelector('#ulAnimation');
			ul.removeAttribute('style');
		});
	};

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
					<div className="grid grid-rows-2 grid-cols-1 lg:grid-rows-1 lg:grid-cols-2 lg:items-center gap-8 lg:gap-24 lg:min-h-screen h-full pt-36 pb-14 transform-none">
						<article>
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
