import { motion, AnimatePresence } from "framer-motion";
import { useSnapshot } from "valtio";
import {
	headContainerAnimation,
	headContentAnimation,
	headTextAnimation,
	slideAnimation,
} from "../config/motion";
import state from "../store";
import { CustomButton } from "../components/CustomButton";

const Home = () => {
	const snap = useSnapshot(state);

	return (
		<AnimatePresence>
			{snap.intro && (
				<motion.section className="home" {...slideAnimation("left")}>
					<motion.header {...slideAnimation("down")}>
						<img
							src="./threejs.png"
							alt="logo"
							className="w-8 h-8 object-contain"
						/>
					</motion.header>

					<motion.div
						className="home-content"
						{...headContainerAnimation}
					>
						<motion.div {...headTextAnimation}>
							<h1 className="head-text">
								LET'S <br className="hidden xl:block" />
								DO IT.
							</h1>
						</motion.div>
						<motion.div {...headContentAnimation}>
							<p className="max-w-md font-normal text-gray-600 text-base">
								Lorem ipsum dolor sit, amet consectetur
								adipisicing elit. Id ipsa qui modi totam, itaque
								<strong>provident excepturi nostrum</strong>
								laboriosam esse explicabo minima magnam, sunt
								consequuntur fugit perferendis eaque delectus
								cupiditate veniam.
							</p>
							<CustomButton
								type="filled"
								title="Customize It"
								handleClick={() => (state.intro = false)}
								customStyles="w-fit px-4 py-2.5 font-bold text-sm"
							></CustomButton>
						</motion.div>
					</motion.div>
				</motion.section>
			)}
		</AnimatePresence>
	);
};

export default Home;
