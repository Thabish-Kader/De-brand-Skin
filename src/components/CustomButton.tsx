import React from "react";
import state from "../store";
import { useSnapshot } from "valtio";
import { getContrastingColor } from "../config/helpers";

type Props = {
	type: string;
	title: string;
	handleClick: () => void;
	customStyles: string;
};

export const CustomButton = ({
	type,
	title,
	customStyles,
	handleClick,
}: Props) => {
	const snap = useSnapshot(state);

	const generateStyle = (type: string) => {
		if (type === "filled") {
			return {
				backgroundColor: snap.color,
				color: getContrastingColor(snap.color),
			};
		} else if (type === "outline") {
			return {
				borderWidth: "1px",
				borderColor: snap.color,
				color: snap.color,
			};
		}
	};
	return (
		<button
			className={`px-2 py-1 flex-1 rounded-md ${customStyles}`}
			style={generateStyle(type)}
			onClick={handleClick}
		>
			{title}
		</button>
	);
};
