import swatch from "../assets/swatch.png";
import fileIcon from "../assets/file.png";
import ai from "../assets/ai.png";
import logoShirt from "../assets/logo-tshirt.png";
import stylishShirt from "../assets/stylish-tshirt.png";
import { DecalTypeMap } from "../pages/Customizer";

export const EditorTabs = [
	{
		name: "colorpicker",
		icon: swatch,
	},
	{
		name: "filepicker",
		icon: fileIcon,
	},
];

export const FilterTabs = [
	{
		name: "logoShirt",
		icon: logoShirt,
	},
	{
		name: "stylishShirt",
		icon: stylishShirt,
	},
];

export const DecalTypes: DecalTypeMap = {
	logo: {
		stateProperty: "logoDecal",
		filterTab: "logoShirt",
	},
	full: {
		stateProperty: "fullDecal",
		filterTab: "stylishShirt",
	},
};
