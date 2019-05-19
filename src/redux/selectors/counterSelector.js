import {createSelector} from 'reselect';
import * as Filters from '../../constants/Filter';

const getTodos = state => state.todoApp.todos;

export const countActive = createSelector(getTodos, todos => {
  return todos.filter(todo => !todo.completed).length;
});

export const countActiveStarred = createSelector(getTodos, todos => {
  return todos.filter(todo => !todo.completed && todo.starred).length;
});

export const countByFilterValue = createSelector(
  getTodos,
  (todos) => {
    let filterCounter = {};
    const filterValues = Object.values(Filters);
    filterValues.map(value => {
      if (value === Filters.VISIBILITY_ALL) {
        return filterCounter[value] = todos.length;
      } else if (value === Filters.VISIBILITY_COMPLETED) {
        return filterCounter[value] = todos.filter(todo => todo.completed).length;
      } else if (value === Filters.VISIBILITY_ACTIVE) {
        return filterCounter[value] = todos.filter(todo => !todo.completed).length;
      } else {
        throw new Error('Unknown filter: ' + value);
      }
    });

    return filterCounter;
  },
);
