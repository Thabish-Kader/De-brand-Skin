import React from "react";
import { useSnapshot } from "valtio";
import state from "../store";
import { SketchPicker } from "react-color";
import { AiFillCamera, AiOutlineArrowLeft } from "react-icons/ai";
import "../picker.css";
export const CreateStyle = () => {
	const snap = useSnapshot(state);
	return (
		<div className="customizer ">
			<div className="color-options">
				{snap.colors.map((color) => (
					<div
						key={color}
						className={`circle`}
						style={{ background: color }}
						onClick={() => (state.color = color)}
					></div>
				))}
			</div>
			<div className="decals">
				<div className="decals--container">
					{snap.decals.map((decal) => (
						<div
							key={decal}
							className={`decal`}
							onClick={() => (state.currentDecal = decal)}
						>
							<img src={decal + "_thumb.png"} alt="brand" />
						</div>
					))}
				</div>
			</div>
			<button
				className="share"
				style={{ background: snap.color }}
				onClick={() => {
					const link = document.createElement("a");
					link.setAttribute("download", "canvas.png");
					link.setAttribute(
						"href",
						(document.querySelector("canvas") as HTMLCanvasElement)
							.toDataURL("image/png")
							.replace("image/png", "image/octet-stream")
					);
					link.click();
				}}
			>
				DOWNLOAD
				<AiFillCamera size="1.3em" />
			</button>
			<button
				className="exit"
				style={{ background: snap.color }}
				onClick={() => (state.intro = true)}
			>
				GO BACK
				<AiOutlineArrowLeft size="1.3em" />
			</button>
		</div>
	);
};
