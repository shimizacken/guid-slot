import { combineReducers } from "redux";
import { GENERATE_GUID, GUID_LENGTH_CHANGED } from "../constants";
const uniqueString = require("unique-string");

const initialState = {
  guid: uniqueString(),
  guideLength: 16
};

const guid = (state = initialState, action) => {
  if (action.type === GENERATE_GUID) {
    return {
      ...state,
      guid: action.guid
    };
  }

  if (action.type === GUID_LENGTH_CHANGED) {
    return {
      ...state,
      guideLength: action.guideLength
    };
  }

  return state;
};

// export default combineReducers({
//   guid
// });

export default guid;
