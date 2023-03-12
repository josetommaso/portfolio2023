import Header from '@/components/Header';
import Socials from '@/components/Socials';
import { ContactFormProvider } from '@/context/contactForm';
import '@/styles/globals.css';
import { AnimatePresence } from 'framer-motion';

export default function App({ Component, pageProps, router }) {
	return (
		<main className="relative bg-[url('/ffflux.svg')] bg-no-repeat bg-cover min-h-screen overflow-hidden">
			<Header />
			<Socials />
			<ContactFormProvider>
				<AnimatePresence mode="wait" initial={true}>
					<Component {...pageProps} key={router.asPath} />
				</AnimatePresence>
			</ContactFormProvider>
		</main>
	);
}
