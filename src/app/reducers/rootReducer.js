import { combineReducers } from 'redux';
import eventReducer from '../../features/event/event-list/event-reducer';

export default combineReducers({
	events: eventReducer,
});
