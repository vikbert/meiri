import { createStore } from "redux";
import configureEnhancer from "./configureEnhancer";
import rootReducer from "../reducers/index";
import * as Filters from "../../constants/Filter";
import initTodos from "../../storage/initTodos";
import { dateToString } from "../../utils/date";

export default function configureStore() {
  const enhancer = configureEnhancer();
  const currentDate = dateToString();
  const storedDate = window.todoStorage.fetchCurrentDate();
  const initLoad = !(storedDate === currentDate);

  const initialState = {
    todoApp: {
      todos: initLoad ? initTodos : window.todoStorage.fetchTodos(),
      logs: window.todoStorage.fetchTodoLogs(),
      todosChanged: false,
      visibility: Filters.VISIBILITY_ALL
    }
  };

  console.log(initialState);

  const store = createStore(rootReducer, initialState, enhancer);
  store.subscribe(() => {
    let todoApp = store.getState().todoApp;

    if (todoApp.todosChanged) {
      window.todoStorage.saveTodos(todoApp.todos);
      window.todoStorage.saveCurrentDate(dateToString());
      window.todoStorage.saveTodoLogs(todoApp.logs);
    }
  });

  return store;
}
