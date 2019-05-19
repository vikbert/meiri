import {combineReducers} from 'redux'
import todoReducer from './todoReducer'

const index = combineReducers({
  todoApp: todoReducer,
  // another reducer
});

export default index;
