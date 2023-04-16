import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import MobileNav from './MobileNav';
import useWindowDimensions from '@/hooks/useWindowDimension';
import { useRouter } from 'next/router';

const Header = () => {
	const { width } = useWindowDimensions();
	const [scrollPosition, setScrollPosition] = useState(0);

	const router = useRouter();
	const currentRoute = router.pathname;

	useEffect(() => {
		const updatePosition = () => {
			setScrollPosition(window.scrollY);
		};
		window.addEventListener('scroll', updatePosition);
		updatePosition();
		return () => window.removeEventListener('scroll', updatePosition);
	}, [scrollPosition]);

	return (
		<header
			className={`fixed flex items-center z-30 h-22 top-0 w-full px-8 py-6 lg:px-32 lg:scroll-px-24 transition ${
				scrollPosition > 0 ? 'bg-dark' : 'bg-transparent'
			}`}
		>
			<div className="flex flex-col lg:flex-row lg:items-center w-full justify-between">
				<Link className="text-primary" href="/">
					<Image
						src="/logo-no-background.svg"
						alt="logo jose tommaso"
						width="150"
						height="110"
					/>
				</Link>
				<nav className="hidden lg:block">
					<ul className="flex items-center gap-x-12 font-semibold text-white">
						<li>
							<Link
								href={'/'}
								className={`hover:text-secondary transition duration-150 ${
									currentRoute === '/'
										? 'text-secondary pointer-events-none'
										: ''
								}`}
							>
								Home
							</Link>
						</li>
						<li>
							<Link
								href={'/about'}
								className={`hover:text-secondary transition duration-150 ${
									currentRoute === '/about'
										? 'text-secondary pointer-events-none'
										: ''
								}`}
							>
								About
							</Link>
						</li>
						<li>
							<Link
								href={'/portfolio'}
								className={`hover:text-secondary transition duration-150 ${
									currentRoute === '/portfolio'
										? 'text-secondary pointer-events-none'
										: ''
								}`}
							>
								Portfolio
							</Link>
						</li>
						<li>
							<Link
								href={'/contact'}
								className={`hover:text-secondary transition duration-150 ${
									currentRoute === '/contact'
										? 'text-secondary pointer-events-none'
										: ''
								}`}
							>
								Contact
							</Link>
						</li>
					</ul>
				</nav>
			</div>
			{width < 1023 && <MobileNav />}
		</header>
	);
};

export default Header;
