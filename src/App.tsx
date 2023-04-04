import { IPhoneCanvas } from "./components/canvas/IPhoneCanvas";

import Customizer from "./pages/Customizer";

import Home from "./pages/Home";

const App = () => {
	return (
		<main className="app transition-all ease-in">
			<Home />
			<IPhoneCanvas />
			<Customizer />
		</main>
	);
};

export default App;
