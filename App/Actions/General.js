import * as TYPES from 'App/Components/Redux/Types';
import * as Sessions from 'App/Helper/Storages/Sessions';

const TAG = "GENERAL ACTIONS";

/**
 * Counter Function
 * @param {Boolean} increment - Operation type, increment or not (decrement)
 */
export function setEventsData(data = []) {
  return (dispatch, getState) => {
    return dispatch({
      type: TYPES.EVENTS_DATA,
      eventsData: data
    });
  }
}

export function addTrackingList(id) {
  return (dispatch, getState) => {
    const newDataEvents = getState().eventsData;
    const isFindById = newDataEvents.findIndex((element) => element.id == id);
    newDataEvents[isFindById] = { ...newDataEvents[isFindById], isTracked: true }
    Sessions.setValue(Sessions.EVENTS_DATA, newDataEvents);
    return dispatch({
      type: TYPES.EVENTS_DATA,
      eventsData: newDataEvents
    });
  }
}

export function removeTrackingList(id) {
  return (dispatch, getState) => {
    const newDataEvents = getState().eventsData;
    const isFindById = newDataEvents.findIndex((element) => element.id == id);
    newDataEvents[isFindById] = { ...newDataEvents[isFindById], isTracked: false };
    Sessions.setValue(Sessions.EVENTS_DATA, newDataEvents);
    return dispatch({
      type: TYPES.EVENTS_DATA,
      eventsData: newDataEvents
    });
  }
}