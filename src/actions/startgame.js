import superagent from 'superagent';
const baseUrl = 'http://localhost:4000';

export const gameStart = () => () => {
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
    .put(`${baseUrl}/table/1/start`)
    .send({ diceRoll1: diceRollOne, diceRoll2: diceRollTwo })
    .catch(console.error);
};

export const bidPlayer = (bidNumber, bidDiceType) => () => {
  //console.log(typeof bidNumber);
  superagent
    .put(`${baseUrl}/table/1/bid`)
    .send({ bidNumber: Number(bidNumber), bidDiceType: bidDiceType })
    .then(() => console.log('Check what i sent', bidNumber, bidDiceType))
    .catch(console.error);
};

export const challengePlayer = finalWinner => () => {
  console.log('What is finalWinner in action', finalWinner);
  superagent
    .put(`${baseUrl}/table/1/challenge`)
    .send({ winnerId: finalWinner })
    .then(() => console.log('Check what winner sent', finalWinner))
    .catch(console.error);
};
