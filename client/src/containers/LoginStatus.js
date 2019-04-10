import React from "react";
import { connect } from "react-redux";

class LoginStatus extends React.Component {
	render() {
		const isAuthenticated = this.props.isAuthenticated;
		return isAuthenticated
			? this.props.authenticatedState
			: this.props.anonymousState;
	}
}

const mapStateToProps = state => ({ isAuthenticated: !!state.user });

export default connect(mapStateToProps)(LoginStatus);
