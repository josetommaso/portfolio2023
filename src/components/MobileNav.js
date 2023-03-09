import { useState } from 'react';
import { HiMenuAlt2 } from 'react-icons/hi';
import { CgClose } from 'react-icons/cg';
import Link from 'next/link';
import { motion } from 'framer-motion';

const links = [
	{
		name: 'Home',
		url: '/',
	},
	{
		name: 'About',
		url: '/about',
	},
	{
		name: 'Portfolio',
		url: '/portfolio',
	},
	{
		name: 'Contact',
		url: '/contact',
	},
];

const menuVariants = {
	hidden: {
		x: '100%',
	},
	show: {
		x: 0,
		transition: {
			ease: [0.6, 0.01, -0.05, 0.9],
		},
	},
};

const MobileNav = () => {
	const [openMenu, setOpenMenu] = useState(false);

	return (
		<nav>
			<button
				onClick={() => setOpenMenu(true)}
				className="bg-transparent border-0"
			>
				<HiMenuAlt2 size={'1.8em'} className="text-white" />
			</button>
			<motion.div
				variants={menuVariants}
				initial="hidden"
				animate={openMenu ? 'show' : ''}
				className="bg-white shadow-3xl w-full fixed top-0 right-0 max-w-xs h-screen z-20"
			>
				<button
					onClick={() => setOpenMenu(false)}
					className="bg-transparent border-0 absolute z-30 top-10 right-10"
				>
					<CgClose size={'1.8em'} />
				</button>
				<ul className="h-full flex flex-col justify-center items-center gap-y-7 text-primary font-semibold text-3xl">
					{links.map((link, index) => (
						<li key={index}>
							<Link href={link.url} onClick={() => setOpenMenu(false)}>
								{link.name}
							</Link>
						</li>
					))}
				</ul>
			</motion.div>
		</nav>
	);
};

export default MobileNav;
