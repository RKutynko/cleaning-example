import React from "react";
import { connect } from "react-redux";
import LoginForm from "../components/LoginForm";
import { login } from "../actions/auth.actions";

class LoginPage extends React.Component {
	render() {
		return <LoginForm onSubmit={this.props.login} />;
	}
}

export default connect(
	null,
	{ login }
)(LoginPage);
