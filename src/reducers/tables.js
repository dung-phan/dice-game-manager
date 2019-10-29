import { TABLES_FETCHED, } from "../actions/table";

export default (state = [], action = {}) => {
  // console.log("STATE", state, "ACTION", action);
  switch (action.type) {
    case TABLES_FETCHED:
      // console.log("NEW STATE", [...state, ...action.payload]); // try your transformation here
      return [...state, ...action.payload];
    default:
      return state;
  }
};
