import Link from 'next/link';
import { FaLinkedinIn } from 'react-icons/fa';
import { AiFillGithub, AiFillInstagram } from 'react-icons/ai';

const iconClasses =
	'text-primary group-hover:text-white transition-color duration-300';

export const socials = [
	{
		url: 'https://www.linkedin.com/in/jose-tommaso/',
		icon: <FaLinkedinIn size={'1.2em'} className={iconClasses} />,
	},
	{
		url: 'https://github.com/josetommaso',
		icon: <AiFillGithub size={'1.2em'} className={iconClasses} />,
	},
	{
		url: 'https://www.instagram.com/tommaso_j/',
		icon: <AiFillInstagram size={'1.2em'} className={iconClasses} />,
	},
];

const Socials = () => {
	return (
		<aside className="flex fixed bottom-10 left-1/2 -translate-x-1/2 lg:translate-x-[unset] lg:left-[unset] lg:bottom-[unset] lg:top-2/4 lg:-translate-y-1/2 lg:right-4 z-10">
			<ul className="flex lg:flex-col gap-3">
				{socials.map((social, index) => (
					<li key={index} className="group">
						<Link
							className="p-3 bg-white rounded-full block group-hover:bg-primary transition-all duration-300"
							href={social.url}
							target={'_blank'}
						>
							{social.icon}
						</Link>
					</li>
				))}
			</ul>
		</aside>
	);
};

export default Socials;
