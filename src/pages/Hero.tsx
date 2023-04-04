import Logo from "../../public/logo.svg";
import { motion, AnimatePresence } from "framer-motion";
import {
	AiFillCamera,
	AiOutlineArrowLeft,
	AiOutlineHighlight,
	AiOutlineShopping,
} from "react-icons/ai";
import { useSnapshot } from "valtio";
import state from "../store";
import { CustomButton } from "../components/CustomButton";
import { CreateStyle } from "./CreateStyle";

export function Hero() {
	const snap = useSnapshot(state);
	const transition = { type: "spring", duration: 0.8 };
	const config = {
		initial: {
			x: -100,
			opacity: 0,
			transition: { ...transition, delay: 0.5 },
		},
		animate: { x: 0, opacity: 1, transition: { ...transition, delay: 0 } },
		exit: { x: -100, opacity: 0, transition: { ...transition, delay: 0 } },
	};
	return (
		<div className="absolute top-0 left-0 w-full h-full ">
			<motion.header
				className="flex items-center justify-between p-5"
				initial={{ opacity: 0, y: -100 }}
				animate={{ opacity: 1, y: 0 }}
				transition={transition}
			>
				<img src={Logo} alt="logo" className="h-20 w-20" />
				<motion.div
					animate={{
						x: snap.intro ? 0 : 100,
						opacity: snap.intro ? 1 : 0,
					}}
					transition={transition}
				>
					<AiOutlineShopping size="3em" />
				</motion.div>
			</motion.header>
			<AnimatePresence>
				{snap.intro ? (
					<motion.section key="main" {...config}>
						<div className="mt-[5vh] ml-[5vw]">
							<motion.div
								key="title"
								initial={{ x: 100, opacity: 0 }}
								animate={{ x: 0, opacity: 1 }}
								transition={{
									type: "spring",
									damping: 5,
									stiffness: 40,
									restDelta: 0.001,
									duration: 0.3,
								}}
							>
								<h1 className="head-text">
									Fake <br className="hidden xl:block" />
									DE BRAND
								</h1>
							</motion.div>
							<div className="support--content">
								<motion.div
									key="p"
									initial={{ y: 100, opacity: 0 }}
									animate={{ y: 0, opacity: 1 }}
									transition={{
										type: "spring",
										damping: 7,
										stiffness: 30,
										restDelta: 0.001,
										duration: 0.6,
										delay: 0.2,
										delayChildren: 0.2,
									}}
								>
									<p>
										"Your phone's skin is a reflection of
										your personal style. Make it uniquely
										yours with a custom design that speaks
										to you."
									</p>
									<button
										className="z-10"
										style={{ background: snap.color }}
										onClick={() => (state.intro = false)}
									>
										CUSTOMIZE IT{" "}
										<AiOutlineHighlight size="1.3em" />
									</button>
								</motion.div>
							</div>
						</div>
					</motion.section>
				) : (
					<motion.section key="custom" {...config}>
						<CreateStyle />
					</motion.section>
				)}
			</AnimatePresence>
		</div>
	);
}
