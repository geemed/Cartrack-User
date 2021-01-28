import UserReducer from "app-component/user/user.reducer";

const createReducer = (reducerFn, reducerName) => {
  return (state, action) => {
    const { name } = action;
    const isInitiated = state === undefined;

    if (name !== reducerName && !isInitiated) return state;

    return reducerFn(state, action);
  }
};

const reducers = {
  user: createReducer(UserReducer, "user")
};

export default reducers;