import {toastr} from 'react-redux-toastr';
import {
  CREATE_EVENT,
  UPDATE_EVENT,
  DELETE_EVENT,
  FETCH_EVENTS,
} from './event-constants';
import {
  asyncActionStart,
  asyncActionFinish,
  asyncActionError,
} from '../async/async-actions';
import {fetchSampleData} from '../../app/data/mockApi';

export const fetchEvents = events => ({
  type: FETCH_EVENTS,
  payload: {
    events,
  },
});

export const createEvent = event => async dispatch => {
  try {
    dispatch({
      type: CREATE_EVENT,
      payload: {
        event,
      },
    });
    toastr.success('Success!', 'Event was been create!');
  } catch (error) {
    toastr.error('Oops', 'Something went wrong!');
  }
};

export const updateEvent = event => async dispatch => {
  try {
    dispatch({
      type: UPDATE_EVENT,
      payload: {
        event,
      },
    });
    toastr.success('Success!', 'Event was been updated!');
  } catch (error) {
    toastr.error('Oops', 'Something went wrong!');
  }
};

export const deleteEvent = eventId => async dispatch => {
  try {
    await dispatch({
      type: DELETE_EVENT,
      payload: {
        eventId,
      },
    });
    toastr.success('Success!', 'Event was been deleted!');
  } catch (error) {
    toastr.error('Oops', 'Something went wrong!');
  }
};

export const loadEvents = () => {
  return async dispatch => {
    try {
      dispatch(asyncActionStart());
      let events = await fetchSampleData();
      dispatch(fetchEvents(events.events));
      dispatch(asyncActionFinish());
    } catch (error) {
      dispatch(asyncActionError());
    }
  };
};
