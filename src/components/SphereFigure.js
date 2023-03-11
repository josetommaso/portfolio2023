import { Canvas } from '@react-three/fiber';
import { MeshDistortMaterial, OrbitControls, Sphere } from '@react-three/drei';

const SphereFigure = ({ color }) => {
	return (
		<Canvas camera={{ fov: 25, position: [5, 5, 5] }}>
			<OrbitControls enableZoom={false} enableRotate={false} />
			<ambientLight intensity={1} />
			<directionalLight position={[2, 3, 1]} />
			<Sphere args={[1.4, 100, 200]} scale={1}>
				<MeshDistortMaterial
					color={color}
					attach="material"
					distort={0.5}
					speed={1}
				/>
			</Sphere>
		</Canvas>
	);
};

export default SphereFigure;
