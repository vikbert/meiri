import { createStore } from "redux";
import configureEnhancer from "./configureEnhancer";
import rootReducer from "../reducers/index";
import * as Filters from "../../constants/Filter";
import { dateToString } from "../../utils/date";

export default function configureStore() {
  const enhancer = configureEnhancer();
  const currentDate = dateToString();
  const storedDate = window.todoStorage.fetchCurrentDate();
  const initLoad = !(storedDate === currentDate);

  const initialState = {
    todoApp: {
      todos: [],
      todosChanged: false,
      visibility: Filters.VISIBILITY_ALL
    }
  };

  const store = createStore(rootReducer, initialState, enhancer);

  return store;
}
