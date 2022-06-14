import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from '@redux-devtools/extension';
import createSagaMiddleware from "@redux-saga/core";
import logger from "redux-logger";
import rootReducer from "../services/reducers";
import rootSaga from "../services/sagas";
const sagaMiddleware = createSagaMiddleware();

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(sagaMiddleware, logger)));
sagaMiddleware.run(rootSaga);
export default store;
