import { createStore } from 'redux';
import todosReducer from './reducers/todosReducer';

const store = createStore(todosReducer);

export default store;