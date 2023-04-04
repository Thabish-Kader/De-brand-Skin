import { proxy } from "valtio";

const state = proxy({
	intro: true,
	color: "#5abdab",
	isLogoTexture: true,
	isFullTexture: false,
	logoDecal: "./threejs.png",
	fullDecal: "./threejs.png",
	colors: ["#ccc", "#EFBD4E", "#80C670", "#726DE8", "#EF674E", "#353934"],
	decals: ["./react.png", "./threejs.png", "./logo.svg"],
	currentDecal: "./threejs.png",
});

export default state;
