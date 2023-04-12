import Script from 'next/script';
import Header from '@/components/Header';
import Socials from '@/components/Socials';
import { ContactFormProvider } from '@/context/contactForm';
import '@/styles/globals.css';
import { AnimatePresence } from 'framer-motion';

export default function App({ Component, pageProps, router }) {
	return (
		<>
			<Script
				src={`https://www.googletagmanager.com/gtag/js?  id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
				strategy="afterInteractive"
			/>
			<Script id="google-analytics" strategy="afterInteractive">
				{`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}');
        `}
			</Script>
			<main className="relative bg-[url('/ffflux.svg')] bg-no-repeat bg-cover min-h-screen overflow-hidden">
				<Header />
				<Socials />
				<ContactFormProvider>
					<AnimatePresence mode="wait" initial={true}>
						<Component {...pageProps} key={router.asPath} />
					</AnimatePresence>
				</ContactFormProvider>
			</main>
		</>
	);
}
