const copyGuidMiddleware = ({ getState, dispatch }) => next => action => {
  next(action);
};

export { copyGuidMiddleware };
