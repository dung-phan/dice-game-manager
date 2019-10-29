import { TABLES_FETCHED } from '../actions/table';
import { START_GAME, PLAYER_BID, PLAYER_CHALLENGE } from '../actions/startgame';

export default (state = [], action = {}) => {
  // console.log("STATE", state, "ACTION", action);
  switch (action.type) {
    case TABLES_FETCHED:
      return [...state, ...action.payload];
    case START_GAME:
      return action.payload;
    case PLAYER_BID:
      return action.payload;
    case PLAYER_CHALLENGE:
      return action.payload;
    default:
      return state;
  }
};
