export function thunk(state) {
  return function wrapDispatch(next) {
    return function handleAction(action) {
      if (typeof action === "function") {
        action();
      } else {
        return next(action);
      }
    };
  };
}
