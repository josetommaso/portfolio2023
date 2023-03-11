import Head from 'next/head';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { transition1 } from '@/transitions';

const Contact = () => {
	return (
		<>
			<Head>
				<title>Jose Tommaso - Contact</title>
			</Head>

			<motion.section
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				exit={{ opacity: 0 }}
				transition={transition1}
				className="section relative"
			>
				<div className="container mx-auto h-full px-10 xl:px-16">
					<div className="grid auto-rows-auto auto-cols-auto lg:grid-rows-1 lg:grid-cols-2 lg:items-center lg:min-h-screen gap-8 lg:gap-12 md:min-h-screen pt-36 pb-14">
						<article className="text-center md:text-left">
							<h1 className="h1 text-6xl">Contact me</h1>
							<p className="font-lg text-white">
								Want to get in touch? I&apos;d love to hear from you! You can
								reach me at josetommasodev@gmail.com, or you can use the contact
								form to send me a message, and I&apos;ll get back to you as soon
								as possible. Looking forward to hearing from you!
							</p>
						</article>
						<form>
							<div className="flex flex-col gap-3">
								<input
									type="text"
									placeholder="Your Name"
									required
									className="bg-primary border-gray-800 border-[1px] w-full p-3 text-white placeholder:text-white rounded-xl"
								/>
								<input
									type="email"
									placeholder="Your Email"
									required
									className="bg-primary border-gray-800 border-[1px] w-full p-3 text-white placeholder:text-white rounded-xl"
								/>
								<input
									type="tel"
									placeholder="Your phone number"
									className="bg-primary border-gray-800 border-[1px] w-full p-3 text-white placeholder:text-white rounded-xl"
								/>
								<textarea
									className="bg-primary border-gray-800 border-[1px] w-full p-3  text-white placeholder:text-white rounded-xl"
									cols="30"
									rows="10"
									placeholder="Your Message"
								></textarea>
							</div>
							<button className="btn btn-secondary mt-6 px-10">Send</button>
						</form>
					</div>
				</div>
			</motion.section>
		</>
	);
};

export default Contact;
