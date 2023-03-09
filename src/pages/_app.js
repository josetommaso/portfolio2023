import Header from '@/components/Header';
import Socials from '@/components/Socials';
import '@/styles/globals.css';
import { AnimatePresence } from 'framer-motion';

export default function App({ Component, pageProps, router }) {
	return (
		<main className="relative bg-gradient-to-br from-dark to-slate-800 min-h-screen overflow-hidden">
			<Header />
			<Socials />
			<AnimatePresence mode="wait" initial={true}>
				<Component {...pageProps} key={router.asPath} />
			</AnimatePresence>
		</main>
	);
}
