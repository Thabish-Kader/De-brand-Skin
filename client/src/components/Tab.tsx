import React from "react";

type TapProps = {
	tab: {
		name: string;
		icon: string;
	};
	handleClick: () => void;
	isFilterTab?: boolean;
	isActiveTab?: boolean;
};
export const Tab = ({ tab, handleClick }: TapProps) => {
	return <div>Tab</div>;
};
