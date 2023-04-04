import { GLTF } from "three/examples/jsm/loaders/GLTFLoader";

export type TGltf = GLTF & {
	nodes: {
		T_Shirt_male: THREE.Mesh;
	};
	materials: {
		lambert1: THREE.MeshStandardMaterial;
	};
};
