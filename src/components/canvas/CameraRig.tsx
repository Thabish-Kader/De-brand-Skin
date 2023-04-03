import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { useSnapshot } from "valtio";
import state from "../../store";
import { easing } from "maath";

export const CameraRig = ({ children }: { children: React.ReactNode }) => {
	const groupRef = useRef<THREE.Group>(null!);
	const snap = useSnapshot(state);

	useFrame((state, delta) => {
		const isBreakpoint = window.innerWidth <= 1260;
		const isMobile = window.innerWidth <= 600;

		let targetPosition: [number, number, number] = [-0.4, 0, 2];
		if (snap.intro) {
			if (isBreakpoint) targetPosition = [0, 0, 2];
			if (isMobile) targetPosition = [0, 0.2, 2.5];
		} else {
			if (isMobile) targetPosition = [0, 0, 2.5];
			else targetPosition = [0, 0, 2];
		}

		// set model camera position
		easing.damp3(state.camera.position, targetPosition, 0.25, delta);

		// set the model rotation smoothly
		easing.dampE(
			groupRef.current.rotation,
			[state.pointer.y / 10, -state.pointer.x / 5, 0],
			0.25,
			delta
		);
	});

	return <group ref={groupRef}>{children}</group>;
};
