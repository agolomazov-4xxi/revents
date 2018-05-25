import {combineReducers} from 'redux';
import {reducer} from 'redux-form';
import eventReducer from '../../features/event/event-reducer';
import modalsReducer from '../../features/modals/modal-reducer';
import authReducer from '../../features/auth/auth-reducer';
import asyncReducer from '../../features/async/async-reducer';

export default combineReducers({
  events: eventReducer,
  form: reducer,
  modals: modalsReducer,
  auth: authReducer,
  async: asyncReducer,
});
