import { TABLES_FETCHED, UPDATE_TABLE } from "../actions/table"

export default (state = [], action = {}) => {
	// console.log("STATE", state, "ACTION", action);
	switch (action.type) {
		case TABLES_FETCHED:
			return [...action.payload]
		case UPDATE_TABLE:
			return state.map(table =>
				table.id === action.payload.id ? action.payload : table
			)
		default:
			return state
	}
}
