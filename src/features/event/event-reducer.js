import {createReducer} from '../../app/common/utils/reducerUtil';
import {
  CREATE_EVENT,
  UPDATE_EVENT,
  DELETE_EVENT,
  FETCH_EVENTS,
} from './event-constants';

const initialState = [];

const createEvent = (state, payload) => {
  return [...state, Object.assign({}, payload.event)];
};

const updateEvent = (state, payload) => {
  return [
    ...state.filter(event => event.id !== payload.event.id),
    Object.assign({}, payload.event),
  ];
};

const deleteEvent = (state, payload) => {
  return [...state.filter(event => event.id !== payload.eventId)];
};

const fetchEvents = (state, payload) => {
  return payload.events;
};

export default createReducer(initialState, {
  [CREATE_EVENT]: createEvent,
  [UPDATE_EVENT]: updateEvent,
  [DELETE_EVENT]: deleteEvent,
  [FETCH_EVENTS]: fetchEvents,
});