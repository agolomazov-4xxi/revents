import { combineReducers } from 'redux';
import { reducer } from 'redux-form';
import eventReducer from '../../features/event/event-list/event-reducer';

export default combineReducers({
	events: eventReducer,
	form: reducer,
});
