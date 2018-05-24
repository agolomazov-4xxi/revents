import {combineReducers} from 'redux';
import {reducer} from 'redux-form';
import eventReducer from '../../features/event/event-list/event-reducer';
import modalsReducer from '../../features/modals/modal-reducer';
import authReducer from '../../features/auth/auth-reducer';

export default combineReducers({
  events: eventReducer,
  form: reducer,
  modals: modalsReducer,
  auth: authReducer,
});
