import { useAuth0, withAuthenticationRequired } from "@auth0/auth0-react";
import React from "react";

const Home = () => {
	const { user, isAuthenticated, isLoading } = useAuth0();
	const { logout } = useAuth0();
	return (
		<div>
			<h1>Home</h1>
			{isLoading ? (
				<div>Loading...</div>
			) : isAuthenticated ? (
				<>
					<img src={user.picture} alt={user.name} />
					<p>{`Welcome -> ${user.nickname}`}</p>
					<p>{`Email -> ${user.email}`}</p>
				</>
			) : (
				<button>Login</button>
			)}
			<button onClick={() => logout({ returnTo: window.location.origin })}>
				Logout
			</button>
		</div>
	);
};

export default withAuthenticationRequired(Home);
