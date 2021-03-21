import createReducer from 'App/Components/Redux/CreateReducer';
import * as TYPES from 'App/Components/Redux/Types';

/**
 * Counter Reducer
 */


export const eventsData = createReducer([], {
  [TYPES.EVENTS_DATA](state, action) {
    return action.eventsData;
  }
});