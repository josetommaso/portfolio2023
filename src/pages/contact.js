import Head from 'next/head';
import React, { useRef, useState } from 'react';
import { useContactFormContext } from '@/context/contactForm';
import ReCAPTCHA from 'react-google-recaptcha';
import { motion } from 'framer-motion';
import { transition1 } from '@/transitions';
import emailjs from '@emailjs/browser';
import axios from 'axios';
import Error from '@/components/Error';

const Contact = () => {
	const [captchaError, setCaptchaError] = useState({
		invalidCaptcha: false,
		confirmCaptcha: false,
	});

	const form = useRef();
	const captchaRef = useRef(null);

	const {
		sucess,
		setSuccess,
		disableButton,
		setDisableButton,
		error,
		setError,
	} = useContactFormContext();

	const verifyToken = async (token) => {
		try {
			let response = await axios.post(
				`https://www.google.com/recaptcha/api/siteverify`,
				{
					secret: process.env.NEXT_PUBLIC_SECRET_KEY,
					response: token,
				},
				console.log(token)
			);
			return response.data;
		} catch (error) {
			console.log('error ', error);
		}
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		const token = captchaRef.current.getValue();

		if (token) {
			let valid_token = await verifyToken(token);
			if (valid_token.success) {
				emailjs
					.sendForm(
						'service_qn9bmer',
						'template_37n4ro',
						form.current,
						'Rm_PZyP-l3kudQPi-'
					)
					.then(
						(result) => {
							setSuccess(true);
							setDisableButton(true);
						},
						(error) => {
							setSuccess(false);
							setError(true);
						}
					);
			} else {
				setCaptchaError((captchaError) => ({
					...captchaError,
					invalidCaptcha: true,
				}));
			}
		} else {
			setCaptchaError((captchaError) => ({
				...captchaError,
				confirmCaptcha: true,
			}));
		}

		captchaRef.current.reset();
	};

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
					<div className="grid auto-rows-auto auto-cols-auto lg:grid-rows-1 lg:grid-cols-2 lg:items-center lg:min-h-screen gap-8 lg:gap-12 md:min-h-screen pt-36 pb-14 relative">
						<article className="text-center md:text-left relative z-10">
							<h1 className="h1 text-6xl">Contact me</h1>
							<p className="font-lg text-white">
								Want to get in touch? I&apos;d love to hear from you! You can
								reach me at josetommasodev@gmail.com, or you can use the contact
								form to send me a message, and I&apos;ll get back to you as soon
								as possible. Looking forward to hearing from you!
							</p>
						</article>
						{!sucess && !error && (
							<form onSubmit={handleSubmit} ref={form}>
								<div className="flex flex-col gap-3">
									<input
										type="text"
										placeholder="Your Name"
										name="name"
										required
										className="bg-primary border-gray-800 border-[1px] w-full p-3 text-white placeholder:text-white rounded-xl"
									/>
									<input
										type="email"
										placeholder="Your Email"
										name="email"
										required
										className="bg-primary border-gray-800 border-[1px] w-full p-3 text-white placeholder:text-white rounded-xl"
									/>
									<textarea
										className="bg-primary border-gray-800 border-[1px] w-full p-3  text-white placeholder:text-white rounded-xl"
										cols="30"
										rows="10"
										placeholder="Your Message"
										name="message"
									></textarea>
								</div>
								<ReCAPTCHA
									sitekey={process.env.NEXT_PUBLIC_SITE_KEY}
									ref={captchaRef}
									theme="dark"
									className="mt-4"
								/>
								{captchaError.confirmCaptcha && (
									<Error message="Please, confirm you are not a robot!" />
								)}
								{captchaError.invalidCaptcha && (
									<Error message="Sorry, invalid captcha! try again." />
								)}
								<button
									type="submit"
									className={`btn btn-secondary mt-6 px-10 ${
										disableButton
											? 'bg-gray-700 hover:bg-gray-700 cursor-not-allowed'
											: ''
									}`}
									disabled={disableButton}
								>
									Send
								</button>
							</form>
						)}

						{sucess && (
							<p className="p-3 rounded-xl text-green-800 bg-green-400 mt-4">
								Your message has been sent. I shall contact you promptly.
							</p>
						)}
						{error && (
							<Error
								message="An error has ocurred while sending you message. Please contact
							me on josetommasodev@gmail.com"
							/>
						)}
					</div>
				</div>
			</motion.section>
		</>
	);
};

export default Contact;
