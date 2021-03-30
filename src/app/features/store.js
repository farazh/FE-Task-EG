import { compose, createStore, applyMiddleware } from "redux";
import { itemReducer } from "./reducer";
import createSagaMiddleware from "redux-saga";
import mySaga from "./item-columns/saga";

const getStore = () => {
  const sagaMiddleware = createSagaMiddleware();
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    : compose;
  const store = createStore(
    itemReducer,
    composeEnhancers(applyMiddleware(sagaMiddleware))
  );

  sagaMiddleware.run(mySaga);
  return store;
};

export const store = getStore();
