import {
	FETCH_TABLE_SUCCESS,
	UPDATE_TABLE,
	TABLE_JOINED
} from "../actions/table"

export default (state = {}, action = {}) => {
	switch (action.type) {
		case FETCH_TABLE_SUCCESS:
			return { ...action.payload }
		case UPDATE_TABLE:
			return { ...action.payload }
		case TABLE_JOINED:
			return { ...action.payload }
		default:
			return state
	}
}
