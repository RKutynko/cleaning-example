import { spawn } from "redux-saga/effects";
import { watchLogin, watchLogout, watchRegister } from "./auth.sagas";

export default function*() {
	yield spawn(watchLogin);
	yield spawn(watchLogout);
	yield spawn(watchRegister);
}
