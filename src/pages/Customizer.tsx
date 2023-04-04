import { AnimatePresence, motion } from "framer-motion";
import React, { useState } from "react";
import { useSnapshot } from "valtio";
import state from "../store";
import { fadeAnimation, slideAnimation } from "../config/motion";
import { DecalTypes, EditorTabs, FilterTabs } from "../config/constants";
import { Tab } from "../components/Tab";
import { CustomButton } from "../components/CustomButton";

import { ColorPicker } from "../components/ColorPicker";
import { FilePicker } from "../components/FilePicker";
import { reader } from "../config/helpers";

interface DecalType {
	stateProperty: string;
	filterTab: string;
}

export interface DecalTypeMap {
	[key: string]: DecalType;
}

const Customizer = () => {
	const snap = useSnapshot(state);
	const [file, setFile] = useState<File | null>(null);
	const [activeEditor, setActiveEditor] = useState("");
	const [activeFilterTab, setActiveFilterTab] = useState<{
		[key: string]: boolean;
	}>({
		logoShirt: true,
		stylishShirt: false,
	});

	// show tab
	const generateTabContent = () => {
		switch (activeEditor) {
			case "colorpicker":
				return <ColorPicker />;
			case "filepicker":
				return (
					<FilePicker
						file={file}
						setFile={setFile}
						readFile={readFile}
					/>
				);
			default:
				return null;
		}
	};

	const handleDecals = (type: string, result: string) => {
		const decalType = DecalTypes[type];
		// @ts-ignore
		state[decalType.stateProperty] = result;

		if (!activeFilterTab[decalType.filterTab]) {
			handleActiveFilterTab(decalType.filterTab);
		}
	};

	const handleActiveFilterTab = (tabName: string) => {
		switch (tabName) {
			case "logoShirt":
				state.isLogoTexture = !activeFilterTab[tabName];
				break;
			case "stylishShirt":
				state.isFullTexture = !activeFilterTab[tabName];
				break;
			default:
				state.isLogoTexture = true;
				state.isFullTexture = false;
				break;
		}

		// after setting the state, activeFilterTab is updated

		setActiveFilterTab((prevState) => {
			return {
				...prevState,
				[tabName]: !prevState[tabName],
			};
		});
	};

	const readFile = (type: string) => {
		reader(file!).then((result) => {
			handleDecals(type, result);
			setActiveEditor("");
		});
	};

	return (
		<AnimatePresence>
			{!snap.intro && (
				<>
					<motion.div
						key="custom"
						className="absolute top-0 left-0 z-10"
						{...slideAnimation("left")}
					>
						<div className="flex items-center min-h-screen">
							<div className="editortabs-container tabs">
								{EditorTabs.map((tab) => (
									<Tab
										key={tab.name}
										tab={tab}
										handleClick={() => {
											setActiveEditor(tab.name);
										}}
									/>
								))}
								{generateTabContent()}
							</div>
						</div>
					</motion.div>

					<motion.div
						className="absolute z-10 top-5 right-5 "
						{...fadeAnimation}
					>
						<CustomButton
							type="filled"
							title="Go Back"
							handleClick={() => (state.intro = true)}
							customStyles="w-fit px-4 py-2.5 font-bold text-sm"
						/>
					</motion.div>

					<motion.div
						className="filtertabs-container"
						{...slideAnimation("up")}
					>
						{FilterTabs.map((tab) => (
							<Tab
								key={tab.name}
								tab={tab}
								isFilterTab
								isActiveTab={activeFilterTab[tab.name]}
								handleClick={() =>
									handleActiveFilterTab(tab.name)
								}
							/>
						))}
					</motion.div>
				</>
			)}
		</AnimatePresence>
	);
};

export default Customizer;
