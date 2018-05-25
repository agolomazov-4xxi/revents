import {createReducer} from '../../app/common/utils/reducerUtil';
import {
  ASYNC_ACTION_START,
  ASYNC_ACTION_FINISH,
  ASYNC_ACTION_ERROR,
} from './async-constants';

const initialState = {
  loading: false,
};

const asyncActionStarted = state => ({
  ...state,
  loading: true,
});

const asyncActionFinish = state => ({
  ...state,
  loading: false,
});

const asyncActionError = state => ({
  ...state,
  loading: false,
});

export default createReducer(initialState, {
  [ASYNC_ACTION_START]: asyncActionStarted,
  [ASYNC_ACTION_FINISH]: asyncActionFinish,
  [ASYNC_ACTION_ERROR]: asyncActionError,
});
