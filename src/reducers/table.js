import {
  FETCH_TABLE_SUCCESS,
  UPDATE_TABLE,
  TABLE_JOINED
} from '../actions/table';

export default (state = {}, action = {}) => {
  console.log('what is action', action.payload);
  console.log('check state', state);
  switch (action.type) {
    case FETCH_TABLE_SUCCESS:
      return { ...action.payload };
    case UPDATE_TABLE:
      return { ...action.payload };
    case TABLE_JOINED:
      return action.payload;
    default:
      return state;
  }
};
