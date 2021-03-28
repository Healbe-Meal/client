import { AnyAction, applyMiddleware, CombinedState, combineReducers, createStore, Store } from "redux";

import logger from "redux-logger";
import createSagaMiddleware from "redux-saga";
import watchSendFile from "./sagas/sendFile";

import app from "./reducers/app";

const reducers = combineReducers({ app });

const saga = createSagaMiddleware();

const store: Store<CombinedState<{}>, AnyAction> = createStore(reducers, applyMiddleware(logger, saga));

saga.run(watchSendFile);

export default store;
