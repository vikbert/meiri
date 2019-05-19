import * as types from './types';

export const add = (todo) => ({
  type: types.CREATE_TODO,
  todo,
});

export const update = (newTodo, oldTodo) => ({
  type: types.UPDATE_TODO,
  newTodo,
  oldTodo,
});

export const remove = (id) => ({
  type: types.DELETE_TODO,
  id,
});
export const removeCompleted = () => ({
  type: types.REMOVE_COMPLETED_TODOS,
});

export const updateVisibility = (visibility) => ({
  type: types.UPDATE_VISIBILITY,
  visibility,
});
