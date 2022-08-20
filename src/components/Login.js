import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { useNavigate } from "react-router-dom";

const Login = () => {
	const { loginWithRedirect } = useAuth0();
	const { isAuthenticated } = useAuth0();
	const navigate = useNavigate();
	if (isAuthenticated) {
		navigate("/home");
	}
	return (
		<div>
			<button onClick={() => loginWithRedirect()}>Login</button>
		</div>
	);
};

export default Login;
