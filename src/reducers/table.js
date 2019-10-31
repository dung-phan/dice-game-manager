import { FETCH_TABLE_SUCCESS, UPDATE_TABLE } from "../actions/table";

export default (state = {}, action = {}) => {
  switch (action.type) {
    case FETCH_TABLE_SUCCESS:
      return { ...action.payload };
    case UPDATE_TABLE:
      return { ...action.payload }
    default:
      return state;
  }
};
