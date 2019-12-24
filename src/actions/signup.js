import superagent from 'superagent';

export const USER_SIGNUP = 'USER_SIGNUP';

const userSignup = () => ({
  type: USER_SIGNUP
});
const baseUrl = 'http://localhost:4000';
export const signup = (name, email, password) => dispatch => {
  superagent
    .post(`${baseUrl}/signup`)
    .send({ name, email, password })
    .then(response => {
      dispatch(userSignup());
      console.log('What is name, email password', name, email, password);
    })
    .catch(console.error);
};
