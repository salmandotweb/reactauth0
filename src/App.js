import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import { createBrowserHistory } from "history";
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
