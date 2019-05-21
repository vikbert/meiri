import * as types from "../actions/types";
import { dateToString } from "../../utils/date";

const initialState = {
  todos: [],
  logs: [],
  todosChanged: false,
  visibility: "all"
};

const removeCompletedTodos = (state) => {
  return state.todos.filter((todo) => todo.completed === false);
};

const updateTodo = (state, action) => {
  const todos = [...state.todos];
  todos[todos.indexOf(action.oldTodo)] = action.newTodo;

  return todos;
};

const updateLogs = (state, action) => {
  const currentDate = dateToString();
  const logs = { ...state.logs };
  const trackedTodos = logs[currentDate] || [];
  const index = trackedTodos.indexOf(action.newTodo.id);

  if (action.newTodo.completed && index === -1) {
    logs[currentDate] = [...trackedTodos, action.newTodo.id];

    return logs;
  }

  if (!action.newTodo.completed && index > -1) {
    trackedTodos.splice(index, 1);
  }

  return logs;
};

const deleteTodo = (state, action) => {
  return state.todos.filter((todo) => todo.key !== action.key);
};

export default function(state = initialState, action) {
  switch (action.type) {
    case types.FETCH_TODOS_SUCCEED:
      return { ...state, todos: action.todos, loading: false };
    case types.CREATE_TODO_SUCCEED:
      return {
        ...state,
        todos: [action.todo, ...state.todos],
        todosChanged: true
      };
    case types.UPDATE_TODO_SUCCEED:
      return {
        ...state,
        todos: updateTodo(state, action),
        logs: updateLogs(state, action),
        todosChanged: true
      };
    case types.DELETE_TODO:
      return { ...state, todos: deleteTodo(state, action), todosChanged: true };
    case types.REMOVE_COMPLETED_TODOS:
      return {
        ...state,
        todos: removeCompletedTodos(state),
        todosChanged: true,
        visibility: "all"
      };
    case types.UPDATE_VISIBILITY:
      return { ...state, visibility: action.visibility, todosChanged: false };
    default:
      return state;
  }
}
