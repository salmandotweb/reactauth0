import App from "./App";
import ReactDOM from "react-dom/client";
import "../src/index.css";
import { Auth0Provider } from "@auth0/auth0-react";
import { BrowserRouter } from "react-router-dom";
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
	<Auth0Provider
		domain="dev-zdro2iz9.us.auth0.com"
		clientId="gcZi5iJTw767V0el9plFH6geOAD2OB4C"
		redirectUri={window.location.origin}>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</Auth0Provider>
);
