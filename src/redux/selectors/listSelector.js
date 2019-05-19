import { createSelector } from "reselect";
import { firstBy } from "thenby";
import * as Filters from "../../constants/Filter";

const getTodos = (state) => state.todoApp.todos;
const getVisibility = (state) => state.todoApp.visibility;

export const getFilteredTodos = createSelector(
  [getTodos, getVisibility],
  (todos, visibility) => {
    const starredFirst = (a, b) => b.starred - a.starred;
    switch (visibility) {
      case Filters.VISIBILITY_ACTIVE:
        return todos.filter((t) => !t.completed).sort(firstBy(starredFirst));
      case Filters.VISIBILITY_COMPLETED:
        return todos.filter((t) => t.completed).sort(firstBy(starredFirst));
      case Filters.VISIBILITY_ALL:
        return todos.sort(firstBy("completed").thenBy(starredFirst));
      default:
        return todos;
    }
  }
);
