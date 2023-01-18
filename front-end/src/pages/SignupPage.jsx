import {useState} from "react";
import {useHistory} from "react-router-dom";

export const SignupPage = () => {
	const [errorMessage, setErrorMessage] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");

	const history = useHistory();

	const handleSignup = async () => {
		alert("Signup is going to be implemented in the future");
	};

	return (
		<div className="content-container">
			<h1>Sign up</h1>
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
			<input
				type="password"
				placeholder="Confirm password"
				value={confirmPassword}
				onChange={(e) => setConfirmPassword(e.target.value)}
			/>
			<hr />
			<button
				onClick={handleSignup}
				disabled={!email || !password || password !== confirmPassword}
			>
				Sign up
			</button>
			<button onClick={() => history.push("/login")}>
				Already have an account? Log in
			</button>
		</div>
	);
};
