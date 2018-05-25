import {LOGIN_USER, SIGN_OUT_USER} from './auth-constants';
import {closeModal} from '../modals/modal-actions';

export const login = creds => dispatch => {
  dispatch({type: LOGIN_USER, payload: {creds}});
  dispatch(closeModal());
};

export const logout = () => ({
  type: SIGN_OUT_USER,
});
