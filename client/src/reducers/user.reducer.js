import { types } from "../actions/auth.actions";

export default (state = null, action) => {
	switch (action.type) {
		case types.LOGIN_DONE:
			return action.payload;
		case types.LOGOUT_DONE:
			return null;
		default:
			return state;
	}
};

export const isAuthenticated = state => !!state.user;
