import { motion } from 'framer-motion';

const Backdrop = ({ children, onClick }) => {
	return (
		<motion.div
			className="backdrop-blur-md absolute top-0 left-0 h-full w-full bg-black/90 flex items-center justify-center"
			onClick={onClick}
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
		>
			{children}
		</motion.div>
	);
};

export default Backdrop;
