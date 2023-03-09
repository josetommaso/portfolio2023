import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

import { motion } from 'framer-motion';
import { transition1 } from '@/transitions';

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
				<div className="container min-h-screen mx-auto h-full relative lg:px-20">
					<div className="flex flex-col justify-center min-h-screen">
						<motion.div
							initial={{ opacity: 0, y: '-50%' }}
							animate={{ opacity: 1, y: '0' }}
							exit={{ opacity: 0, y: '-50%' }}
							transition={transition1}
							className="w-full px-4 pt-36 pb-14 xl:pt-0 xl:pb-0 xl:w-auto z-10 xl:absolute xl:left-20 flex flex-col justify-center items-center xl:items-start"
						>
							<h1 className="h1">
								Front-End <br />
								Developer
							</h1>
							<p className="mb-10 text-lg text-white text-center lg:text-left xl:w-[40%]">
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
						<motion.div
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							exit={{ opacity: 0 }}
							transition={transition1}
							className="flex justify-end h-full mx-auto"
						>
							<div className="relative overflow-hidden min-h-[400px] w-full md:w-[500px] xl:w-[600px] xl:top-1/2 xl:-translate-y-1/2 xl:right-[7%] xl:absolute">
								<Image
									src="/illustrations_robots.svg"
									alt="jose tommaso portrait picture"
									width="1000"
									height="900"
									className="w-full object-cover transition z-10 duration-1000 pointer-events-none"
								/>
							</div>
						</motion.div>
					</div>
				</div>
			</motion.section>
		</>
	);
}
