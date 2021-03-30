import { createStore } from "redux";
import { itemReducer } from "./reducer";

const getStore = () => {
  const store = createStore(
    itemReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
  return store;
};

export const store = getStore();
