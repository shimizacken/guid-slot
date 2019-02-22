import { createStore, applyMiddleware } from "redux";
import reducers from "./reducers";
import middlewares from "./middlewares";

const initialState = {
  lengths: [32, 16, 10, 6, 3]
};

const store = createStore(
  reducers,
  initialState,
  applyMiddleware(...middlewares)
);

window.STORE = store;

export { store };
