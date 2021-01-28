import * as types from "./user.type";

const initialState = { 
  data: [],
  tempData: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
    case types.GET_USERS:
      return Object.assign({}, state, {
        data: action.result,
        tempData: action.result
      });
    case types.GET_USERS_SEARCH:
      return Object.assign({}, state, {
        data: action.result
      });
  }
};

export default reducer;
