import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

import { motion } from 'framer-motion';
import { transition1 } from '@/transitions';
import SphereFigure from '@/components/SphereFigure';

export default function Home() {
	return (
		<>
			<Head>
				<title>Jose Tommaso - Home</title>
				<meta
					name="description"
					content="Check out my portfolio website to see examples of my work as a Front End developer. From small personal websites to complex UI websites, I create beautiful and user-friendly websites that deliver the best possible experience to every user."
				/>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<motion.section
				className="section"
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				exit={{ opacity: 0 }}
				transition={transition1}
			>
				<div className="container min-h-screen mx-auto relative lg:px-20 flex items-center">
					<div className="grid xl:grid-cols-2 xl:grid-rows-[650px] gap-10 lg:gap-3 px-4 pt-36">
						<motion.div
							initial={{ opacity: 0, y: '-50%' }}
							animate={{ opacity: 1, y: '0' }}
							exit={{ opacity: 0, y: '-50%' }}
							transition={transition1}
							className="w-full flex flex-col justify-center items-center lg:items-start"
						>
							<h1 className="h1">
								Front-End <br />
								Developer
							</h1>
							<p className="mb-10 text-lg text-white text-center lg:text-left">
								Hey there! I&apos;m Jose Tommaso, a web developer who loves
								making awesome websites. From simple landing pages to complex
								web apps, I use cool tools like HTML, CSS, JavaScript, and React
								to make websites look great on any device. Check out my work in
								my portfolio, and let&apos;s chat if you have a project in mind.
								Thanks for stopping by!
							</p>
							<div className="flex flex-wrap gap-6">
								<Link href="/portfolio" className="btn btn-primary">
									Portfolio
								</Link>
								<Link href="/contact" className="btn btn-secondary">
									Contact me
								</Link>
							</div>
						</motion.div>
						<figure className="relative min-h-[400px] md:min-h-[650px]">
							<SphereFigure color="#203453" />
							<Image
								src="/homepage3.png"
								alt="jose tommaso portrait picture"
								width="500"
								height="500"
								className="w-[90%] h-auto absolute top-5 right-5 animate-[upDown_4s_ease_infinite]"
							/>
						</figure>
					</div>
				</div>
			</motion.section>
		</>
	);
}
