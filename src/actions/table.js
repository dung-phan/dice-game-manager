import request from "superagent"
const { baseUrl } = require("../constants")

export const TABLES_FETCHED = "TABLES_FETCHED"
export const FETCH_TABLE_SUCCESS = "FETCH_TABLE_SUCCESS"
export const TABLE_JOINED = "TABLE_JOINED"

export const tablesFetched = tables => ({
	type: TABLES_FETCHED,
	payload: tables
})
const fetchTableSuccess = table => ({
	type: FETCH_TABLE_SUCCESS,
	payload: table
})

export const loadTables = () => (dispatch, getState) => {
	if (getState().tables.length !== 0) return "Loading..."
	const token = getState().auth
	console.log("token before load table", token)
	request
		.post(`${baseUrl}/lobby`)
		.set("Authorization", `Bearer ${token}`)
		.then(response => {
			dispatch(tablesFetched(response.body)) // check redux devtools if action got dispatched
		})
		.catch(console.error) // if you don't console response, check the console for errors
}

export const loadTable = id => dispatch => {
	console.log("loading table")
	request.get(`${baseUrl}/table/${id}`).then(response => {
		dispatch(fetchTableSuccess(response.body))
	})
}

export const joinTable = tableId => (dispatch, getState) => {
	const token = getState().auth
	// console.log('get a token', token);
	// console.log('put request to',`${baseUrl}/table/${tableId}/join`)
	request
		.put(`${baseUrl}/table/${tableId}/join`)
		.set("Authorization", `Bearer ${token}`)
		.catch(err => console.err)
}
export const UPDATE_TABLE = "UPDATE_TABLE"
export const updateTable = table => ({
	type: UPDATE_TABLE,
	payload: table
})
