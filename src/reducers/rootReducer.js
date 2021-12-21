const initialState = 10;

const rootReducer = (state = initialState, action) => {
	switch (action.type) {
		case 'add': {
			return state + action.payload;
		}

		case 'subtract': {
			return state - action.payload;
		}

		default:
			return state;
	}
};

export default rootReducer;
