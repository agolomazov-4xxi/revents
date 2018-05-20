import { createReducer } from '../../app/common/utils/reducerUtil';
import { INCREMENT_COUNTER, DECREMENT_COUNTER } from './test-constants';

const initialState = {
	data: 43,
};

const incrementCounter = (state, payload) => {
	return {
		...state,
		data: state.data + 1,
	};
};

const decrementCounter = (state, payload) => {
	return {
		...state,
		data: state.data - 1,
	};
};

export default createReducer(initialState, {
	[INCREMENT_COUNTER]: incrementCounter,
	[DECREMENT_COUNTER]: decrementCounter,
});
