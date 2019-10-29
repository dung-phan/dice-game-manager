export const PLAYER_CHALLENGE = 'PLAYER_CHALLENGE';

const challenge = status => ({
  type: 'PLAYER_BID',
  payload: status
});

const baseUrl = 'http://localhost:4000';
export const challangePlayer = status => dispatch => {
  superagent
    .post(`${baseUrl}/`)
    .then(() => {
      dispatch(challenge(status));
    })
    .catch(console.error);
};
