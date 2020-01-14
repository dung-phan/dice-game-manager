import superagent from "superagent";
import { baseUrl } from "../constants";

export const TABLES_FETCHED = "TABLES_FETCHED";
export const FETCH_TABLE_SUCCESS = "FETCH_TABLE_SUCCESS";
export const TABLE_JOINED = "TABLE_JOINED";

const tablesFetched = tables => ({
  type: TABLES_FETCHED,
  payload: tables
});
const fetchTableSuccess = table => ({
  type: FETCH_TABLE_SUCCESS,
  payload: table
});

export const loadTables = () => (dispatch, getState) => {
  if (getState().tables.length !== 0) return "Loading...";

  superagent(`${baseUrl}/lobby`)
    .then(response => {
      dispatch(tablesFetched(response.body));
    })
    .catch(console.error);
};

export const loadTable = id => dispatch => {
  console.log("loading table");
  superagent.get(`${baseUrl}/table/${id}`).then(response => {
    dispatch(fetchTableSuccess(response.body));
  });
};

export const joinTable = tableId => (dispatch, getState) => {
  const token = getState().auth;
  superagent
    .put(`${baseUrl}/table/${tableId}/join`)
    .set("Authorization", `Bearer ${token}`)
    .catch(console.error);
};
export const UPDATE_TABLE = "UPDATE_TABLE";
export const updateTable = table => ({
  type: UPDATE_TABLE,
  payload: table
});
