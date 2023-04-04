import { IPhoneCanvas } from "./components/canvas/IPhoneCanvas";
import Customizer from "./pages/Customizer";
import { Hero } from "./pages/Hero";

import Home from "./pages/Home";

const App = () => {
	return (
		<main className="app transition-all ease-in">
			<Home />
			{/* <Hero /> */}
			<IPhoneCanvas />
			<Customizer />
		</main>
	);
};

export default App;
