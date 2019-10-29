import superagent from 'superagent'
export const TABLES_FETCHED = "TABLES_FETCHED";

const baseUrl = "http://localhost:4000";

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
export const TABLE_JOINED = "TABLE_JOINED";