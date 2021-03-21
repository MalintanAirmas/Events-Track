// Redux
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { createStore, applyMiddleware, compose } from 'redux';
import AppReducer from 'App/Reducers';

const loggerMiddleware = createLogger(
  {
    predicate: (getState, action) => __DEV__,
    collapsed: true
  }
);

// using custom middleware
export default function configureStore(initialState) {
  // apply Middleware
  const enhancer = compose(
    applyMiddleware(
      thunkMiddleware,
      loggerMiddleware
    ),
  );

  return createStore(AppReducer, initialState, enhancer);
}
