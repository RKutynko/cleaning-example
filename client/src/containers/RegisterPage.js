import React from "react";
import { connect } from "react-redux";
import RegisterForm from "../components/RegisterForm";
import { registerClient } from "../actions/auth.actions";

class RegisterPage extends React.Component {
	render() {
		return <RegisterForm onSubmit={this.props.registerClient} />;
	}
}

export default connect(
	null,
	{ registerClient }
)(RegisterPage);
