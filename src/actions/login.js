import superagent from 'superagent';

export const USER_LOGIN = 'USER_LOGIN';

const userLogIn = jwt => ({
  type: USER_LOGIN,
  payload: jwt
});
const baseUrl = 'http://localhost:4000/login';
export const login = (email, password) => dispatch => {
  console.log('email and password', email, password);
  superagent
    .post(`${baseUrl}/login`)
    .send({ email, password })
    .then(response => {
      console.log('check the response', response);
      dispatch(userLogIn(response.body.jwt));
    })
    .catch(console.error);
};
