import { useAuth0, withAuthenticationRequired } from "@auth0/auth0-react";
import React from "react";

const Home = () => {
	const { user } = useAuth0();
	const { logout } = useAuth0();
	console.log(user);
	return (
		<div>
			<h1>Home</h1>
			<img src={user.picture} alt={user.name} />
			<p>{`Welcome -> ${user.nickname}`}</p>
			<p>{`Email -> ${user.email}`}</p>
			<button onClick={() => logout({ returnTo: window.location.origin })}>
				Logout
			</button>
		</div>
	);
};

export default withAuthenticationRequired(Home);
