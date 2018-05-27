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

export const createEvent = event => ({
  type: CREATE_EVENT,
  payload: {
    event,
  },
});

export const updateEvent = event => ({
  type: UPDATE_EVENT,
  payload: {
    event,
  },
});

export const deleteEvent = eventId => ({
  type: DELETE_EVENT,
  payload: {
    eventId,
  },
});

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
