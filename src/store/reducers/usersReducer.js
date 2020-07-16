const initialState = {};

export default function usersReducer(state = initialState, action) {
	switch (action.type) {
		case 'LOGGED_IN':
			return {};
		default:
			return state;
	}
}
