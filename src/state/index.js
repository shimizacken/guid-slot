import { createStore, applyMiddleware } from "redux";
import reducers from "./reducers";
import middlewares from "./middlewares";

const initialState = {};

const store = createStore(
  reducers,
  initialState,
  applyMiddleware(...middlewares)
);

window.STORE = store;

export { store };
