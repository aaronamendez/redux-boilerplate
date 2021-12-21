export const add = () => {
	return (dispatch) => {
		dispatch({
			type: 'add',
			payload: 1,
		});
	};
};

export const subtract = () => {
	return (dispatch) => {
		dispatch({
			type: 'subtract',
			payload: 1,
		});
	};
};
