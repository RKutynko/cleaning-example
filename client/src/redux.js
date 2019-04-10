import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import createSagaMiddleware from "redux-saga";
import { connectRouter, routerMiddleware } from "connected-react-router";
import { createBrowserHistory } from "history";
import { save, load } from "redux-localstorage-simple";
import reducer from "./reducers";
import saga from "./sagas";

const isProduction = process.env.NODE_ENV === "production";

const sagaMiddleware = createSagaMiddleware();
const composeEnhancers = isProduction
	? compose
	: window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const history = createBrowserHistory();
const middlewares = [sagaMiddleware, routerMiddleware(history)];
if (true || isProduction) middlewares.splice(0, 0, save());

export default createStore(
	combineReducers({
		...reducer,
		router: connectRouter(history)
	}),
	load(),
	composeEnhancers(applyMiddleware(...middlewares))
);

sagaMiddleware.run(saga);
