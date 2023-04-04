import { proxy } from "valtio";

const state = proxy({
	intro: true,
	color: "#6c8096",
	isLogoTexture: true,
	isFullTexture: false,
	logoDecal: "./threejs.png",
	fullDecal: "./threejs.png",
	// intro: true,
	// colors: ["#ccc", "#EFBD4E", "#80C670", "#726DE8", "#EF674E", "#353934"],
	// decals: ["react", "three2", "pmndrs"],
	// color: "#EFBD4E",
	// decal: "three2",
});

export default state;
