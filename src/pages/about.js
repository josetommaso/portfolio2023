import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { transition1 } from '@/transitions';
import Head from 'next/head';
import SphereFigure from '@/components/SphereFigure';

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
				<div className="container mx-auto min-h-screen relative pt-36 flex items-center lg:px-20">
					<div className="grid auto-rows-auto auto-cols-auto gap-8 h-full pb-14 xl:grid-rows-1 xl:grid-cols-2 xl:items-center xl:grid-rows-[700px]">
						<figure className="relative h-full min-h-[400px] md:min-h-[600px]">
							<SphereFigure color="#203453" />
							<Image
								src="/homepage-image.png"
								alt="jose tommaso profile picture"
								width="800"
								height="1200"
								className="w-full h-full absolute top-[49%] left-1/2 -translate-x-1/2 -translate-y-1/2 object-contain max-w-[60%] xl:max-w-[70%]"
							/>
						</figure>

						<motion.article
							initial={{ opacity: 0, y: '-80%' }}
							animate={{ opacity: 1, y: '0' }}
							exit={{ opacity: 0, y: '-80%' }}
							transition={transition1}
							className="px-4 text-center lg:text-left"
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
