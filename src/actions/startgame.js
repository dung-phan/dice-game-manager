import superagent from 'superagent';
const baseUrl = 'http://localhost:4000';
export const START_GAME = 'START_GAME';
export const PLAYER_BID = 'PLAYER_BID';
export const PLAYER_CHALLENGE = 'PLAYER_CHALLENGE';
export const LOGS_GAME_UPDATE = 'LOGS_GAME_UPDATE';

export const gameStart = id => () => {
  let diceRollOne = Array(5)
    .fill()
    .map(() => Math.round(Math.random() * 5 + 1))
    .join('')
    .toString();
  let diceRollTwo = Array(5)
    .fill()
    .map(() => Math.round(Math.random() * 5 + 1))
    .join('')
    .toString();
  console.log('check if start game works');
  superagent
    .put(`${baseUrl}/table/${id}/start`)
    .send(diceRollOne, diceRollTwo)
    .then(response => console.log('Check response', response.body))
    .catch(console.error);
};

export const bidPlayer = (bidNumber, bidDiceType) => () => {
  superagent
    .post(`${baseUrl}/table/1/bid`)
    .send(bidNumber, bidDiceType)
    .then(response => console.log('Check response', response.body))
    .catch(console.error);
};

export const challengePlayer = () => () => {
  superagent
    .post(`${baseUrl}/`)
    .then(() => {})
    .catch(console.error);
};
