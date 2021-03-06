import { USER_LOGIN } from "../actions/login";
const userId = localStorage.getItem("userId");
const initialState = userId ? userId : null;

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case USER_LOGIN:
      localStorage.setItem("userId", action.payload.userId);
      return action.payload.userId;
    default:
      return state;
  }
};
