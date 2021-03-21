/**
 * Import Actions
 */
import * as generalActions from './General';

/**
 * Combine All Actions into AppActions
 */
const AppActions = Object.assign(
  generalActions
);

export default AppActions;
