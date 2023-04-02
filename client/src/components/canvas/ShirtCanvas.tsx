import { Center, Environment } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { CameraRig } from "./CameraRig";
import { Backdrop } from "./Backdrop";
import { Shirt } from "./Shirt";

export const ShirtCanvas = () => {
	return (
		<Canvas>
			<ambientLight intensity={0.5} />
			<Environment preset="city" />
			{/* <CameraRig>
				<Backdrop /> */}
			<Center>
				<Shirt />
			</Center>
			{/* </CameraRig> */}
		</Canvas>
	);
};
