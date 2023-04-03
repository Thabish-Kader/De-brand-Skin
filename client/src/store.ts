import { proxy } from "valtio";

const state: Record<string, any> = proxy({
	intro: true,
	color: "#EFBD48",
	isLogoTexture: true,
	isFullTexture: false,
	logoDecal: "./threejs.png",
	fullDecal: "./threejs.png",
});

export default state;
