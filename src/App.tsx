import { IPhoneCanvas } from "./components/canvas/IPhoneCanvas";
import Customizer from "./pages/Customizer";
import Home from "./pages/Home";

const App = () => {
	return (
		<main className="app transition-all ease-in">
			<IPhoneCanvas />
			<Customizer />
		</main>
	);
};

export default App;
