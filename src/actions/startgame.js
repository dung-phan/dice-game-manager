import superagent from 'superagent';
const baseUrl = 'http://localhost:4000';
export const START_GAME = 'START_GAME';
export const PLAYER_BID = 'PLAYER_BID';
export const PLAYER_CHALLENGE = 'PLAYER_CHALLENGE';
export const LOGS_GAME_UPDATE = 'LOGS_GAME_UPDATE';
const startGame = arrays => ({
  type: 'START_GAME',
  payload: arrays
});
const bid = currentBid => ({
  type: 'PLAYER_BID',
  payload: currentBid
});
const challenge = status => ({
  type: 'PLAYER_BID',
  payload: status
});

const logsGame = log => ({
  type: 'LOGS_GAME_UPDATE',
  payload: log
});
export const gameStart = () => dispatch => {
  let diceRollOne = Array(6)
    .fill()
    .map(() => Math.round(Math.random() * 6 + 1));
  let diceRollTwo = Array(6)
    .fill()
    .map(() => Math.round(Math.random() * 6 + 1));
  dispatch(startGame(diceRollOne, diceRollTwo));
};

export const bidPlayer = currentBid => dispatch => {
  superagent
    .post(`${baseUrl}/`)
    .then(() => {
      dispatch(bid(currentBid));
    })
    .catch(console.error);
};

export const challengePlayer = status => dispatch => {
  superagent
    .post(`${baseUrl}/`)
    .then(() => {
      dispatch(challenge(status));
    })
    .catch(console.error);
};
export const logsUpdate = log => dispatch => {
  superagent
    .post(`${baseUrl}/`)
    .then(() => {
      dispatch(logsGame(log));
    })
    .catch(console.error);
};
