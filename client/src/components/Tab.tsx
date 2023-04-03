import React from "react";
import { useSnapshot } from "valtio";
import state from "../store";

type TapProps = {
	tab: {
		name: string;
		icon: string;
	};
	handleClick: () => void;
	isFilterTab?: boolean;
	isActiveTab?: boolean;
};
export const Tab = ({
	tab,
	handleClick,
	isFilterTab,
	isActiveTab,
}: TapProps) => {
	const snap = useSnapshot(state);
	const activeStyles =
		isFilterTab && isActiveTab
			? { backgroundColor: snap.color, opacity: 0.5 }
			: { backgroundColor: "transparent", opacity: 1 };
	return (
		<div
			key={tab.name}
			className={`tab-btn ${
				isFilterTab ? "rounded-ful glassmorhism" : "rounded-4"
			}`}
			onClick={handleClick}
			style={activeStyles}
		>
			<img
				src={tab.icon}
				alt={tab.name}
				className={`tab-icon ${
					isFilterTab
						? "w-2/3 h-2/3"
						: "w-11/12 h-11/12 object-contain"
				}`}
			/>
		</div>
	);
};
