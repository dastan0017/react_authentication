import {useState} from "react";
import {useHistory} from "react-router-dom";

export const LoginPage = () => {
	const [errorMessage, setErrorMessage] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const history = useHistory();

	const handleLogin = async () => {
		alert("Login is going to be implemented in the future");
	};

	return (
		<div className="content-container">
			<h1>Log In</h1>
			{errorMessage ? <div className="fail">{errorMessage}</div> : null}
			<input
				type="text"
				placeholder="john.doe@gmail.com"
				value={email}
				onChange={(e) => setEmail(e.target.value)}
			/>
			<input
				type="password"
				placeholder="Password"
				value={password}
				onChange={(e) => setPassword(e.target.value)}
			/>
			<button onClick={handleLogin} disabled={!email || !password}>
				Log In
			</button>
			<button onClick={() => history.push("/forgot-password")}>
				Forgot your password?
			</button>
			<button onClick={() => history.push("/signup")}>
				Don't hava an accaunt? Sign Up
			</button>
		</div>
	);
};
