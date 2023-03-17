import { motion } from 'framer-motion';
import Image from 'next/image';
import Backdrop from './Backdrop';

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

const Modal = ({ handleClose, text, project }) => {
	return (
		<Backdrop>
			<motion.div
				onClick={(e) => e.stopPropagation()}
				className="max-w-[90%] md:max-w-[50%] min-h-[300px] m-auto p-8 rounded-xl flex flex-col items-center"
				variants={dropIn}
				initial="hidden"
				animate="visible"
				exit="exit"
			>
				<Image
					src={`/${project.file}`}
					className="w-full h-full object-cover rounded-xl"
					alt={project.alt}
					width="500"
					height="500"
				/>
			</motion.div>
		</Backdrop>
	);
};

export default Modal;
