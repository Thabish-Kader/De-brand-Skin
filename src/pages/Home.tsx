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
import { AiOutlineHighlight } from "react-icons/ai";

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
								Fake <br className="hidden xl:block" />
								DE BRAND
							</h1>
						</motion.div>
						<motion.div {...headContentAnimation}>
							<p className="max-w-md font-normal text-gray-600 text-base">
								"Your phone's skin is a reflection of your
								personal style. Make it uniquely yours with a
								custom design that speaks to you."
							</p>
							<button
								style={{ background: snap.color }}
								onClick={() => (state.intro = false)}
							>
								CUSTOMIZE IT <AiOutlineHighlight size="1.3em" />
							</button>
						</motion.div>
					</motion.div>
				</motion.section>
			)}
		</AnimatePresence>
	);
};

export default Home;
