import React from "react";
import { connect } from "react-redux";
import RegisterForm from "../components/RegisterForm";
import { register } from "../actions/auth.actions";

class RegisterPage extends React.Component {
	render() {
		return <RegisterForm onSubmit={this.props.register} />;
	}
}

export default connect(
	null,
	{ register }
)(RegisterPage);
