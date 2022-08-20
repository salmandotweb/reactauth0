import { Routes, Route } from "react-router-dom";
import { createBrowserHistory } from "history";
import Home from "./components/Home";
import Login from "./components/Login";
import "./App.css";

function App() {
	const history = createBrowserHistory();
	return (
		<div>
			<Routes history={history}>
				<Route path="/" element={<Login />} />
				<Route path="/home" element={<Home />} />
			</Routes>
		</div>
	);
}

export default App;
