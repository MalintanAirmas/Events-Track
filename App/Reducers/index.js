import { combineReducers } from 'redux';

/**
 * Import Reducers
 */
import * as generalReducer from './General';

/**
 * Combine All Reducers into AppReducers
 */
const AppReducers = combineReducers(
  Object.assign(
    generalReducer
  )
);

export default AppReducers;
