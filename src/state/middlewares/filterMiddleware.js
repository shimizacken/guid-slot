import {
  GUID_LENGTH_CHANGED,
  GUID_GENERATION_START,
  GUID_GENERATION_END
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
  }, 1500);

  next(action);
};

export { filterMiddleware };
