export const START_GAME = 'START_GAME';

const startGame = arrays => ({
  type: 'START_GAME',
  payload: arrays
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
