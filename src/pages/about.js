import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { transition1 } from '@/transitions';
import Head from 'next/head';

const variants = {
	open: { opacity: 1, height: 'auto' },
	closed: { opacity: 0, height: '0' },
};

const About = () => {
	const [moreText, setMoreText] = useState(false);

	return (
		<>
			<Head>
				<title>Jose Tommaso - About</title>
			</Head>
			<motion.section
				initial={{ opacity: 0, y: '100%' }}
				animate={{ opacity: 1, y: '0%' }}
				exit={{ opacity: 0, y: '100%' }}
				transition={transition1}
				className="section"
			>
				<div className="container mx-auto h-full relative lg:px-20">
					<div className="grid auto-rows-auto auto-cols-auto md:grid-rows-1 md:grid-cols-2 md:items-center gap-8 md:gap-12 h-full pt-36 pb-14 md:min-h-screen">
						<Image
							src="/homepage-image.png"
							alt="jose tommaso profile picture"
							width="800"
							height="1200"
							className="h-full object-cover max-h-[400px] lg:max-h-[700px]"
						/>

						<motion.article
							initial={{ opacity: 0, y: '-80%' }}
							animate={{ opacity: 1, y: '0' }}
							exit={{ opacity: 0, y: '-80%' }}
							transition={transition1}
							className="px-4 text-center md:text-left"
						>
							<h1 className="h1">About me</h1>
							<div className="font-lg text-white">
								<p>
									Welcome to my portfolio! This is where you can find some
									examples of my work as a Front End Developer. I&apos;ve had
									the pleasure of working on a wide range of projects over the
									years, from small personal websites to large-scale web
									applications for clients all over the world.
								</p>
								<br />
								<p>
									In my portfolio, you&apos;ll find a selection of some of my
									favorite projects, showcasing my skills in HTML, CSS/SASS,
									JavaScript and ReactJS. Each project has a description
									outlining the project&apos;s goals, challenges, and solutions,
									as well as some screenshots or demos so you can see my work in
									action.
								</p>

								<motion.div
									initial={{ opacity: 0, height: 0 }}
									animate={moreText ? 'open' : 'closed'}
									variants={variants}
									className="overflow-hidden"
								>
									<br />
									<p>
										I&apos;m constantly learning and staying up-to-date with the
										latest web technologies, which allows me to deliver
										cutting-edge solutions that are optimized for performance,
										scalability, and user experience. I believe that good web
										design is not just about aesthetics, but also about
										functionality, usability, and accessibility. I strive to
										create websites that are both beautiful and user-friendly,
										and that deliver the best possible experience to every user,
										regardless of their device or location.
									</p>
									<br />
									<p>
										Take a look at my portfolio and see for yourself what I can
										do. If you like what you see, feel free to get in touch with
										me to discuss your project. I&apos;m always up for a
										challenge and love working on new and exciting projects.
										Thanks for stopping by, and I hope you enjoy my work!
									</p>
								</motion.div>
								<button
									className="text-left text-sm text-secondary mt-2"
									onClick={() => setMoreText((moreText) => !moreText)}
								>
									{!moreText ? 'Click here to read more...' : 'Hide text'}
								</button>
							</div>
							<Link className="btn btn-primary mt-5" href="/portfolio">
								Porfolio
							</Link>
						</motion.article>
					</div>
				</div>
			</motion.section>
		</>
	);
};

export default About;
