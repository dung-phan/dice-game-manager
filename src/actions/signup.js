import superagent from 'superagent';

export const USER_SIGNUP = 'USER_SIGNUP';

const userSignup = () => ({
  type: USER_SIGNUP,
});
const baseUrl = 'http://localhost:4000';
export const signup = (email, password) => dispatch => {
  superagent
    .post(`${baseUrl}/signup`)
    .send({ email, password })
    .then(response => {
      dispatch(userSignup());
    })
    .catch(console.error);
};
