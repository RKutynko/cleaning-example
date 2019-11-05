import { takeLeading, takeEvery, take, call, put } from "redux-saga/effects";
import axios from "axios";
import { push } from "connected-react-router";
import {
	types,
	loginDone,
	loginFailed,
	logoutDone,
	registerDone,
	registerFailed
} from "../actions/auth.actions";

export function* watchLogin() {
	yield takeLeading(types.LOGIN, function*(action) {
		try {
			const response = yield call(
				axios.post,
				"/api/login",
				action.payload
			);
			yield put(loginDone(response.data));
			yield put(push("/"));
			yield take(types.LOGOUT);
		} catch (e) {
			yield put(loginFailed(e.message));
		}
	});
}

export function* watchLogout() {
	yield takeEvery(types.LOGOUT, function*() {
		try {
			yield call(axios.post, "/api/logout");
		} catch {
			console.error("logout failed");
		}
		yield put(push("/"));
		yield put(logoutDone());
	});
}

export function* watchRegister() {
	yield takeLeading([types.REGISTER_CLIENT, types.REGISTER_AGENT], function*(
		action
	) {
		try {
			const response = yield call(
				axios.post,
				"/api/user",
				action.payload
			);
			yield put(registerDone(response.data));
			yield put(loginDone(response.data));
			yield put(push("/"));
		} catch (e) {
			yield put(registerFailed(e.message));
		}
	});
}
