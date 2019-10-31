import { TABLES_FETCHED } from '../actions/table';

export default (state = [], action = {}) => {
  // console.log("STATE", state, "ACTION", action);
  switch (action.type) {
    case TABLES_FETCHED:
      return [...state, ...action.payload];
    default:
      return state;
  }
};
