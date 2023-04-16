import { AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';
import Modal from './Modal';

const Project = ({ project }) => {
	const [modalOpen, setModalOpen] = useState(false);

	const close = () => setModalOpen(false);
	const open = () => setModalOpen(true);

	return (
		<>
			<li className="overflow-hidden" onClick={modalOpen ? close : open}>
				<Image
					src={`/${project.file}`}
					className="w-full h-full object-fill cursor-pointer hover:scale-105 transition duration-500"
					alt={project.alt}
					width="300"
					height="200"
				/>
			</li>
			<AnimatePresence initial={false}>
				{modalOpen && (
					<Modal modalOpen={modalOpen} handleClose={close} project={project} />
				)}
			</AnimatePresence>
		</>
	);
};

export default Project;
