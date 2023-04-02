import { ShirtCanvas } from "./components/canvas/ShirtCanvas";
import Customizer from "./pages/Customizer";
import Home from "./pages/Home";

const App = () => {
	return (
		<main className="app transition-all ease-in">
			<Home />
			<ShirtCanvas />
			<Customizer />
		</main>
	);
};

export default App;
