import {combineReducers} from 'redux';
import {reducer as formReducer} from 'redux-form';
import {reducer as toastrReducer} from 'react-redux-toastr';
import eventReducer from '../../features/event/event-reducer';
import modalsReducer from '../../features/modals/modal-reducer';
import authReducer from '../../features/auth/auth-reducer';
import asyncReducer from '../../features/async/async-reducer';

export default combineReducers({
  events: eventReducer,
  form: formReducer,
  modals: modalsReducer,
  auth: authReducer,
  async: asyncReducer,
  toastr: toastrReducer,
});
