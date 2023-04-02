import React from "react";
import state from "../store";
import { useSnapshot } from "valtio";

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
				color: "#fff",
			};
		}
	};
	return (
		<button
			className={`px-2 py-1.2 flex-1 rounded-md ${customStyles}`}
			style={generateStyle(type)}
			onClick={handleClick}
		>
			{title}
		</button>
	);
};
