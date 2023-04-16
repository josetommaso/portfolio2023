import { motion } from 'framer-motion';
import Image from 'next/image';
import Backdrop from './Backdrop';
import Link from 'next/link';
import { useRef } from 'react';

const dropIn = {
	hidden: {
		y: '-100vh',
		opacity: 0,
	},
	visible: {
		y: 0,
		opacity: 1,
		transition: {
			duration: 0.1,
			type: 'spring',
			damping: 20,
			stiffness: 500,
		},
	},
	exit: {
		y: '100vh',
		opacity: 0,
	},
};

const Modal = ({ project, handleClose }) => {
	const refModal = useRef();

	const backdropClick = (e) => {
		if (!refModal.current.contains(e.target)) {
			handleClose();
		}
	};

	return (
		<Backdrop onClick={backdropClick}>
			<motion.div
				className="max-w-[90%] md:max-w-[50%] min-h-[300px] m-auto p-8 rounded-xl flex flex-col items-center"
				variants={dropIn}
				initial="hidden"
				animate="visible"
				exit="exit"
				ref={refModal}
			>
				<Image
					src={`/${project.file}`}
					className="w-full h-full object-cover rounded-xl"
					alt={project.alt}
					width="500"
					height="500"
				/>
				<div className="mt-10 text-white text-center">
					<ul className="flex flex-wrap gap-3 justify-center">
						{project.techs &&
							project.techs.map((tech, i) => <li key={i}>{tech}</li>)}
					</ul>
					{project.description && <p className="mt-4">{project.description}</p>}
					<div className="flex flex-wrap gap-4 justify-center mt-5">
						{project.project_url && (
							<Link
								href={project.project_url}
								className="btn btn-primary text-sm"
								target="_blank"
								rel="noopener noreferrer"
							>
								Website
							</Link>
						)}
						{project.github_url && (
							<Link
								href={project.github_url}
								className="btn btn-primary text-sm"
								target="_blank"
								rel="noopener noreferrer"
							>
								Github
							</Link>
						)}
					</div>
				</div>
			</motion.div>
		</Backdrop>
	);
};

export default Modal;
