import { proxy } from "valtio";

const state: Record<string, any> = proxy({
	intro: true,
	color: "#6c8096",
	isLogoTexture: true,
	isFullTexture: false,
	logoDecal: "./threejs.png",
	fullDecal: "./threejs.png",
});

export default state;
