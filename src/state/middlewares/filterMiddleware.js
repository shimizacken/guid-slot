import { GUID_LENGTH_CHANGED } from "../constants";
import { fetchColors } from "../actions";
const uniqueString = require("unique-string");

const filterMiddleware = ({ getState, dispatch }) => next => action => {
  if (action.type !== GUID_LENGTH_CHANGED) {
    return next(action);
  }

  const uString = uniqueString().substring(0, action.guideLength);

  dispatch(fetchColors(uString));

  next(action);
};

export { filterMiddleware };
