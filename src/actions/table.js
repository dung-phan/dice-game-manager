import superagent from 'superagent'
const baseUrl = "http://localhost:4000";

export const TABLES_FETCHED = "TABLES_FETCHED";

const tablesFetched = tables => ({
  type: TABLES_FETCHED,
  payload: tables
});

export const loadTables = () => (dispatch, getState) => {

    if (getState().tables.length !== 0) return;

    superagent(`${baseUrl}/lobby`) 
    .then(response => {
      dispatch(tablesFetched(response.body)); // check redux devtools if action got dispatched
    })
    .catch(console.error); // if you don't console response, check the console for errors
};

export const FETCH_TABLE_SUCCESS = "FETCH_TABLE_SUCCESS";

const fetchTableSuccess = table => ({
  type: FETCH_TABLE_SUCCESS,
  payload: table
});

export const loadTable = id => (dispatch, getState) => {
  superagent.get(`${baseUrl}/table/${id}`).then(response => {
    dispatch(fetchTableSuccess(response.body));
  });
};

export const TABLE_JOINED = "TABLE_JOINED";

const tableJoined = (table) => ({
    type: TABLE_JOINED,
    payload: table
});

export const joinTable = (tableId) => (dispatch, getState) => {
    const token = getState().auth;
    console.log('get a token',token)
    superagent
    .put(`${baseUrl}/table/${tableId}`)
    .set("Authorization", `Bearer ${token}`)
    .then(response => {
        console.log('response for join table',response)
        dispatch(tableJoined(response.body))
    })
}