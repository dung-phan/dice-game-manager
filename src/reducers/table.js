import { FETCH_TABLE_SUCCESS } from "../actions/table";

export default (state = {}, action = {}) => {
  switch (action.type) {
    case FETCH_TABLE_SUCCESS:
      return { ...action.payload };
    default:
      return state;
  }
};
