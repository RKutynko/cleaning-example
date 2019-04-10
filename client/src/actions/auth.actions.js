export const types = {
	LOGIN: "LOGIN",
	LOGIN_DONE: "LOGIN_DONE",
	LOGIN_FAILED: "LOGIN_FAILED",
	LOGOUT: "LOGOUT",
	LOGOUT_DONE: "LOGOUT_DONE",
	REGISTER: "REGISTER",
	REGISTER_DONE: "REGISTER_DONE",
	REGISTER_FAILED: "REGISTER_FAILED"
};

export const login = ({ login, password }) => ({
	type: types.LOGIN,
	payload: { login, password }
});

export const loginDone = data => ({
	type: types.LOGIN_DONE,
	payload: data
});

export const loginFailed = error => ({
	type: types.LOGIN_FAILED,
	payload: error
});

export const logout = () => ({
	type: types.LOGOUT
});

export const logoutDone = () => ({
	type: types.LOGIN_DONE
});

export const register = ({ login, name, password }) => ({
	type: types.REGISTER,
	payload: { login, name, password }
});

export const registerDone = data => ({
	type: types.REGISTER_DONE,
	payload: data
});

export const registerFailed = error => ({
	type: types.REGISTER_FAILED,
	payload: error
});
