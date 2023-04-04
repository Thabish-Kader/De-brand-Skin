import { Decal, meshBounds, useGLTF, useTexture } from "@react-three/drei";
import React from "react";
import { GLTF } from "three/examples/jsm/loaders/GLTFLoader";
import { useSnapshot } from "valtio";
import state from "../../store";
import { useFrame } from "@react-three/fiber";
import { easing } from "maath";
import { ColorRepresentation, MeshStandardMaterial, Texture } from "three";

//Iphone model source: https://sketchfab.com/3d-models/apple-iphone-13-pro-max-4328dea00e47497dbeac73c556121bc9
export const Iphone = () => {
	const { nodes, materials } = useGLTF("./iPhone.glb") as any;
	const snap = useSnapshot(state);
	const logoTexture = useTexture(snap.logoDecal);
	const fullTexture = useTexture(snap.fullDecal);

	useFrame((state, delta) =>
		easing.dampC(
			materials.Body.color,
			snap.color as ColorRepresentation,
			0.25,
			delta
		)
	);
	const stateString = JSON.stringify(snap);

	return (
		<group key={stateString} scale={0.7}>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Apple_Logo.geometry}
				material={materials.Logo}
			>
				{/* {snap.isLogoTexture && (
					<Decal
						position={[0, -0.02, 0]}
						rotation={[0, 0, 0]}
						scale={0.08}
						map={logoTexture}
						map-anisotropy={16}
						depthTest={false}
						depthWrite={true}
					></Decal>
				)} */}
			</mesh>

			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Body_Body_0.geometry}
				material={materials.Body}
				dispose={null}
			>
				{snap.isFullTexture && (
					<Decal
						position={[0, 0, 0]}
						rotation={[0, 0, 0]}
						scale={1}
						map={fullTexture as Texture}
					/>
				)}
				{snap.isLogoTexture && (
					<Decal
						position={[0, 0, 0]}
						rotation={[0, 0, 0]}
						scale={0.08}
						map-anisotropy={16}
						depthTest={false}
						depthWrite={true}
					>
						<mesh
							scale={0.08}
							position={[0, 0, 0.02]}
							material={materials.Logo}
						>
							<circleGeometry />
							<meshBasicMaterial
								attach="material"
								map={logoTexture}
							/>
						</mesh>
					</Decal>
				)}
			</mesh>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Body_Camera_Glass_0.geometry}
				material={materials.Camera_Glass}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Body_Material_0.geometry}
				material={materials["Material.002"]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Main_body.geometry}
				material={materials.Bezel}
			/>

			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Body_Mic_0.geometry}
				material={materials.material}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Body_Lens_0.geometry}
				material={materials.Lens}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Body_Wallpaper_0.geometry}
				material={materials.Wallpaper}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Screen.geometry}
				material={materials.Screen_Glass}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Button_Frame_0.geometry}
				material={materials.Frame}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Camera_Body_0.geometry}
				material={materials.Body}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Camera_Camera_Frame001_0.geometry}
				material={materials["Camera_Frame.001"]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Camera_Glass_0.geometry}
				material={materials.Glass}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Camera_Mic_0.geometry}
				material={materials.material}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Camera001_Black_Glass_0.geometry}
				material={materials.Black_Glass}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Camera001_Body_0.geometry}
				material={materials.Body}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Camera001_Camera_Frame_0.geometry}
				material={materials.Camera_Frame}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Camera001_Camera_Glass_0.geometry}
				material={materials.Camera_Glass}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Camera001_Flash_0.geometry}
				material={materials.Flash}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Camera001_Gray_Glass_0.geometry}
				material={materials.Gray_Glass}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Camera001_Port_0.geometry}
				material={materials.Port}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Camera001_Lens_0.geometry}
				material={materials.Lens}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Camera003_Material002_0.geometry}
				material={materials["Material.003"]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Circle003_Frame_0.geometry}
				material={materials.Frame}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Frame_Antenna.geometry}
				material={materials.Antenna}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Frame_Antenna_2.geometry}
				material={materials.Frame2}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Frame_Port_0.geometry}
				material={materials.Port}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Main_frame.geometry}
				material={materials.Frame}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Frame_Mic_0.geometry}
				material={materials.material}
			/>
		</group>
	);
};
