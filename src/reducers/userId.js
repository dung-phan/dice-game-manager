import { USER_LOGIN } from "../actions/login"
export default (state = null, action = {}) => {
	switch (action.type) {
		case USER_LOGIN:
			return action.payload.userId
		default:
			return state
	}
}
