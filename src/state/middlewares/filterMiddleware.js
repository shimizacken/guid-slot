import {
  GUID_LENGTH_CHANGED,
  GUID_GENERATION_START,
  GUID_GENERATION_END,
  COPY_GUID,
  GUID_COPIED
} from "../constants";
import { generateGuidAction, guidGenerationStatus } from "../actions";
import { generateGuid } from "../../services/guidGen";

const filterMiddleware = ({ getState, dispatch }) => next => action => {
  if (action.type !== GUID_LENGTH_CHANGED) {
    return next(action);
  }

  dispatch(guidGenerationStatus(true));

  const timeout = setTimeout(() => {
    dispatch(generateGuidAction(generateGuid(action.guideLength)));
    dispatch(guidGenerationStatus(false));
    dispatch({ type: COPY_GUID });
  }, 1000);

  next(action);
};

export { filterMiddleware };
