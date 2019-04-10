import React from "react";
import { Switch, Route, Link, NavLink } from "react-router-dom";
import css from "./App.module.css";
import LoginPage from "./containers/LoginPage";
import RegisterPage from "./containers/RegisterPage";
import LoginStatus from "./containers/LoginStatus";

class App extends React.Component {
	render() {
		return (
			<>
				<header>
					<h1>Cleaning</h1>
					<LoginStatus
						anonymousState={
							<div>
								Hello, please <Link to="/login">login</Link>
							</div>
						}
						authenticatedState={
							<div>
								USER. <Link to="/logout">Logout</Link>
							</div>
						}
					/>
				</header>

				<Switch>
					<Route path="/login" component={LoginPage} />
					<Route path="/" component={RegisterPage} />
				</Switch>
			</>
		);
	}
}

export default App;
