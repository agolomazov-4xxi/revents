import {LOGIN_USER, SIGN_OUT_USER} from './auth-constants';
import {createReducer} from '../../app/common/utils/reducerUtil';

const initialState = {
  currentUser: {},
  authenticated: false,
};

const loginUser = (state, payload) => ({
  ...state,
  currentUser: payload.creds.email,
  authenticated: true,
});

const signOutUser = state => ({
  currentUser: {},
  authenticated: false,
});

export default createReducer(initialState, {
  [LOGIN_USER]: loginUser,
  [SIGN_OUT_USER]: signOutUser,
});
