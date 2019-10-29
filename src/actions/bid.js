export const PLAYER_BID = 'PLAYER_BID';

const bid = currentBid => ({
  type: 'PLAYER_BID',
  payload: currentBid
});

const baseUrl = 'http://localhost:4000';
export const bidPlayer = currentBid => dispatch => {
  superagent
    .post(`${baseUrl}/`)
    .then(() => {
      dispatch(bid(currentBid));
    })
    .catch(console.error);
};
