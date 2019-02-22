const logMiddleware = ({ getState, dispatch }) => next => action => {
  console.log(action.type, getState());
  next(action);
  console.log(action.type, getState());
};

export { logMiddleware };
