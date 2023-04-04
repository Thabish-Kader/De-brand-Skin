import { IPhoneCanvas } from "./components/canvas/IPhoneCanvas";
import { CreateStyle } from "./pages/CreateStyle";
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
			{/* <CreateStyle /> */}
		</main>
	);
};

export default App;
