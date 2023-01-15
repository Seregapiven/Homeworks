import { applyMiddleware, createStore } from 'redux';
import usersReducer from './reducers/usersReducer';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

const middlewares = applyMiddleware(
  thunk,
  logger);

const store = createStore(usersReducer, middlewares);

export default store;