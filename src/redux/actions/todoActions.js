import * as types from "./types";
import { base } from "../../storage/base";

export const add = (todo) => ({
  type: types.CREATE_TODO,
  todo
});

export const update = (newTodo, oldTodo) => ({
  type: types.UPDATE_TODO,
  newTodo,
  oldTodo
});

export const remove = (id) => ({
  type: types.DELETE_TODO,
  id
});
export const removeCompleted = () => ({
  type: types.REMOVE_COMPLETED_TODOS
});

export const updateVisibility = (visibility) => ({
  type: types.UPDATE_VISIBILITY,
  visibility
});

export const _fetchTodosSucceed = (todos) => ({
  type: types.FETCH_TODOS_SUCCEED,
  todos: todos
});

export const loadTodos = () => {
  return function(dispatch) {
    return base
      .fetch("coding-dojo-todos", {
        context: this,
        asArray: true
      })
      .then((todos) => {
        console.log("action: loadTodos()", todos);
        dispatch(_fetchTodosSucceed(todos));
      })
      .catch((error) => {
        throw error;
      });
  };
};
