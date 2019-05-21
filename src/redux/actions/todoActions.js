import * as types from "./types";
import { base, rootUrl, firebaseDb } from "../../storage/base";

export const _addSucceed = (todo) => ({
  type: types.CREATE_TODO_SUCCEED,
  todo
});

export const _updateSucceed = (newTodo, oldTodo) => ({
  type: types.UPDATE_TODO_SUCCEED,
  newTodo,
  oldTodo
});

export const _remove = (key) => ({
  type: types.DELETE_TODO,
  key
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
      .fetch(`${rootUrl}/todos`, {
        context: this,
        asArray: true
      })
      .then((todos) => {
        dispatch(_fetchTodosSucceed(todos));
      })
      .catch((error) => {
        throw error;
      });
  };
};

export const update = (newTodo, oldTodo) => {
  return function(dispatch) {
    return base
      .post(`${rootUrl}/todos/${newTodo.key}`, {
        data: newTodo
      })
      .then(() => {
        dispatch(_updateSucceed(newTodo, oldTodo));
      })
      .catch((err) => {
        console.error(err);
      });
  };
};

export const remove = (key) => {
  return function(dispatch) {
    const nodeUrl = `${rootUrl}/todos/${key}`;
    firebaseDb.ref(nodeUrl).remove();
    dispatch(_remove(key));
  };
};

export const add = (todo) => {
  return function(dispatch) {
    return base
      .push(`${rootUrl}/todos`, {
        data: todo
      })
      .then((newLocation) => {
        dispatch(_addSucceed(todo));
      })
      .catch((err) => {
        console.error(err);
      });
  };
};
